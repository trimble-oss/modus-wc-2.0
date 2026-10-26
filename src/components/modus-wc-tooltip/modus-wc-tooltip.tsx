import { createPopper, Instance as PopperInstance } from '@popperjs/core';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * Warm state shared by all tooltip instances. For `WARM_WINDOW_MS` after any
 * tooltip closes, other tooltips skip their showDelay on hover.
 */
const WARM_WINDOW_MS = 300;
let lastTooltipCloseTime = -Infinity;

const NATIVE_FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])';
const FOCUSABLE_CANDIDATE_SELECTOR = `${NATIVE_FOCUSABLE_SELECTOR}, [tabindex]`;

const isKeyboardFocusable = (el: Element): boolean => {
  const tabIndex = el.getAttribute('tabindex');
  if (tabIndex !== null) return parseInt(tabIndex, 10) >= 0;
  return el.matches(NATIVE_FOCUSABLE_SELECTOR);
};

/**
 * A customizable tooltip component used to create tooltips with different content.
 *
 * The tooltip opens on hover and keyboard focus of the wrapped trigger, and closes on
 * pointer leave, focus leave, or Escape (without moving focus). When forceOpen is enabled,
 * the tooltip remains open and Escape does not dismiss it.
 *
 * Use the contentElement prop to supply rich HTML content to the tooltip such as multiline text.
 * For plain dynamic text, prefer the content prop instead. When contentElement is set, it takes precedence over the content prop.
 *
 * For screen reader support, set `tooltip-id` on this component and matching `aria-describedby`
 * on the trigger (e.g. modus-wc-button).
 */
@Component({
  tag: 'modus-wc-tooltip',
  styleUrl: 'modus-wc-tooltip.scss',
  shadow: false,
})
export class ModusWcTooltip {
  private inheritedAttributes: Attributes = {};
  private popperInstance: PopperInstance | null = null;
  private tooltipElement: HTMLDivElement | null = null;
  private triggerElement: HTMLElement | null = null;
  private focusOwner: HTMLElement | null = null;
  private contentObserver?: MutationObserver;
  private contentFrame?: number;
  private isHovered = false;
  private isFocused = false;
  private showDelayTimer?: ReturnType<typeof setTimeout>;
  private lastPointerType = '';
  private suppressNextFocus = false;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The text content of the tooltip. When contentElement is also set, contentElement takes precedence. */
  @Prop() content: string = '';

  /**
   * An optional rich HTML element to render as the tooltip body.
   * When set, this takes precedence over the `content` string prop.
   * The element is deep-cloned into the tooltip container.
   */
  @Prop() contentElement?: HTMLElement;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Disables displaying the tooltip on hover and focus */
  @Prop() disabled?: boolean = false;

  /** Use this attribute to force the tooltip to remain open. */
  @Prop() forceOpen?: boolean;

  /**
   * The ID of the tooltip tip element (`role="tooltip"`).
   * For screen reader support, add `aria-describedby` with this value to your trigger element.
   */
  @Prop() tooltipId?: string;

  /** The position that the tooltip will render in relation to the element. */
  @Prop() position?: 'auto' | 'top' | 'right' | 'bottom' | 'left' = 'auto';

  /**
   * Delay in milliseconds before the tooltip shows on hover - the default of 0 shows immediately.
   *
   * 200ms is recommended if you're adding a delay. The delay is skipped
   * if a tooltip closed within the last 300ms, on focus, and for touch input.
   */
  @Prop() showDelay?: number = 0;

  @Watch('position')
  handlePositionChange() {
    if (this.popperInstance) {
      void this.popperInstance.setOptions({
        placement: this.position === 'auto' ? 'top' : this.position,
      });
      void this.popperInstance.update();
    }
  }

  @Watch('content')
  handleContentChange() {
    if (this.contentElement) return;
    this.applyContentToTooltip();
  }

  @Watch('contentElement')
  handleContentElementChange() {
    this.applyContentToTooltip();
  }

  @Watch('forceOpen')
  handleForceOpenChange(forceOpen: boolean) {
    if (forceOpen && !this.disabled) {
      this.showTooltip();
    } else {
      this.hideTooltip();
    }
  }

  @Watch('tooltipId')
  handleTooltipIdChange() {
    this.applyTooltipId();
  }

  @Watch('disabled')
  handleDisabledChange(disabled: boolean) {
    if (disabled) {
      clearTimeout(this.showDelayTimer);
      this.hideTooltip();
    }
  }

  /** Track if tooltip was dismissed with Escape key */
  @State() private escapeDismissed: boolean = false;

  /** Track if tooltip is currently visible */
  @State() private isVisible: boolean = false;

  /** An event that fires when the tooltip is dismissed via Escape key */
  @Event() dismissEscape!: EventEmitter;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  @Listen('keyup', { target: 'document' })
  elementKeyupHandler(event: KeyboardEvent): void {
    switch (event.code) {
      case 'Escape': {
        // Escape during a pending show delay cancels the open outright
        clearTimeout(this.showDelayTimer);
        // Allow Escape to dismiss tooltip when it's visible
        // When forceOpen is true, Escape should NOT dismiss it
        // Focus is intentionally left on the trigger
        if (this.isVisible && !this.forceOpen) {
          this.escapeDismissed = true;
          this.dismissEscape.emit();
          this.hideTooltip();
        }
        break;
      }
    }
  }

  componentDidLoad() {
    this.triggerElement = this.el.querySelector('div > :first-child');

    this.tooltipElement = document.createElement('div');
    this.tooltipElement.className = `modus-wc-tooltip-content ${this.customClass || ''}`;
    this.tooltipElement.setAttribute('role', 'tooltip');
    this.tooltipElement.setAttribute('popover', 'manual');
    this.applyTooltipId();

    const arrow = document.createElement('div');
    arrow.className = 'modus-wc-tooltip-arrow';
    this.tooltipElement.appendChild(arrow);

    this.applyContentToTooltip();

    document.body.appendChild(this.tooltipElement);
    this.tooltipElement.style.display = 'none';

    this.attachFocusOwner();
    this.observeContent();

    if (this.forceOpen && !this.disabled && !this.escapeDismissed) {
      this.showTooltip();
    }
  }

  disconnectedCallback() {
    clearTimeout(this.showDelayTimer);
    this.destroyPopper();
    if (this.tooltipElement) {
      if (typeof this.tooltipElement.hidePopover === 'function') {
        try {
          this.tooltipElement.hidePopover();
        } catch {
          // Already hidden or element not connected
        }
      }
      if (this.tooltipElement.parentElement) {
        this.tooltipElement.parentElement.removeChild(this.tooltipElement);
      }
    }

    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleWindowScroll, true);
    this.contentObserver?.disconnect();
    this.contentObserver = undefined;
    if (this.contentFrame !== undefined) {
      cancelAnimationFrame(this.contentFrame);
      this.contentFrame = undefined;
    }
    this.detachFocusOwner();
  }

  /**
   * When the slotted content has no keyboard-focusable element, keyboard focus lands on
   * an ancestor instead (e.g. a menu item `li`, a grid cell, or a button wrapping the
   * tooltip). Listen on that ancestor so focus shows the tooltip just like hover does.
   */
  private attachFocusOwner() {
    const hasFocusableDescendant = Array.from(
      this.el.querySelectorAll(FOCUSABLE_CANDIDATE_SELECTOR)
    ).some(isKeyboardFocusable);
    if (hasFocusableDescendant) return;

    let node = this.el.parentElement;
    while (node && !isKeyboardFocusable(node)) {
      node = node.parentElement;
    }
    if (!node) return;

    this.focusOwner = node;
    node.addEventListener('pointerdown', this.handleOwnerPointerDown);
    node.addEventListener('pointerup', this.handleOwnerPointerUp);
    node.addEventListener('pointercancel', this.handleOwnerPointerUp);
    node.addEventListener('focus', this.handleOwnerFocus);
    node.addEventListener('blur', this.handleOwnerBlur);
  }

  /**
   * Light DOM has no `slotchange`, so re-resolve the owner when slotted content changes.
   * Re-evaluation is batched to one per animation frame so mutation bursts (e.g. rendering
   * a list) don't repeat the descendant query and ancestor walk.
   * The re-resolve must stay read-only on observed nodes (no `disabled`/`href`/`tabindex`
   * writes inside the subtree), otherwise the observer would retrigger itself.
   */
  private observeContent() {
    if (typeof MutationObserver === 'undefined') return;
    this.contentObserver = new MutationObserver(() => {
      if (this.contentFrame !== undefined) return;
      this.contentFrame = requestAnimationFrame(() => {
        this.contentFrame = undefined;
        this.detachFocusOwner();
        this.attachFocusOwner();
      });
    });
    this.contentObserver.observe(this.el, {
      attributeFilter: ['disabled', 'href', 'tabindex'],
      childList: true,
      subtree: true,
    });
  }

  private detachFocusOwner() {
    if (!this.focusOwner) return;
    this.focusOwner.removeEventListener(
      'pointerdown',
      this.handleOwnerPointerDown
    );
    this.focusOwner.removeEventListener('pointerup', this.handleOwnerPointerUp);
    this.focusOwner.removeEventListener(
      'pointercancel',
      this.handleOwnerPointerUp
    );
    this.focusOwner.removeEventListener('focus', this.handleOwnerFocus);
    this.focusOwner.removeEventListener('blur', this.handleOwnerBlur);
    this.focusOwner = null;
  }

  /** A mouse press anywhere on the owner (not only on the tooltip) must not count as keyboard focus. */
  private handleOwnerPointerDown = (event: PointerEvent) => {
    if (event.pointerType === 'mouse') {
      this.suppressNextFocus = true;
    }
  };

  private handleOwnerPointerUp = () => {
    this.suppressNextFocus = false;
  };

  private handleOwnerFocus = () => {
    this.handleFocusIn();
  };

  private handleOwnerBlur = () => {
    this.clearFocus();
  };

  private clearFocus() {
    this.isFocused = false;
    this.maybeHideTooltip();
  }

  private applyTooltipId() {
    if (!this.tooltipElement) return;
    if (this.tooltipId) {
      this.tooltipElement.id = this.tooltipId;
    } else {
      this.tooltipElement.removeAttribute('id');
    }
  }

  /** Precedence: contentElement (rich HTML) → content (plain string). Arrow is always kept last. */
  private applyContentToTooltip() {
    if (!this.tooltipElement) return;
    const arrow = this.tooltipElement.querySelector('.modus-wc-tooltip-arrow');
    Array.from(this.tooltipElement.childNodes).forEach((node) => {
      if (node !== arrow) {
        this.tooltipElement!.removeChild(node);
      }
    });
    if (this.contentElement && 'nodeType' in this.contentElement) {
      this.tooltipElement.insertBefore(
        this.contentElement.cloneNode(true),
        arrow
      );
    } else {
      this.tooltipElement.insertBefore(
        document.createTextNode(this.content),
        arrow
      );
    }
  }

  /** Popper and global scroll/resize listeners are created on first show, not on load, so idle tooltips stay cheap. */
  private initializePopper() {
    if (this.popperInstance) return;
    if (!this.triggerElement || !this.tooltipElement) return;

    const placement = this.position === 'auto' ? 'top' : this.position;

    const arrowElement = this.tooltipElement.querySelector(
      '.modus-wc-tooltip-arrow'
    ) as HTMLElement;

    this.popperInstance = createPopper(
      this.triggerElement,
      this.tooltipElement,
      {
        placement,
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              padding: 8,
              boundary: 'viewport',
            },
          },
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top', 'right', 'bottom', 'left'],
              padding: 8,
              boundary: 'viewport',
            },
          },
          {
            name: 'arrow',
            options: {
              element: arrowElement,
              padding: 5,
            },
          },
          {
            name: 'computeStyles',
            options: {
              adaptive: true,
              gpuAcceleration: true,
            },
          },
          {
            name: 'eventListeners',
            options: {
              scroll: true,
              resize: true,
            },
          },
        ],
      }
    );

    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('scroll', this.handleWindowScroll, true);
  }

  private destroyPopper() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleWindowScroll, true);
  }

  private handleWindowResize = () => {
    if (this.popperInstance && this.isVisible) {
      void this.popperInstance.update();
    }
  };

  private handleWindowScroll = () => {
    if (this.popperInstance && this.isVisible) {
      void this.popperInstance.update();
    }
  };

  /**
   * Shows after showDelay on a cold page. Shows immediately when already
   * visible, when showDelay is 0, while the page is warm, or when the
   * mouseenter is a tap's emulated hover (a tap is already intentional).
   */
  private scheduleShowTooltip() {
    clearTimeout(this.showDelayTimer);
    const isWarm = Date.now() - lastTooltipCloseTime < WARM_WINDOW_MS;
    const isTouch = this.lastPointerType === 'touch';
    if (this.isVisible || !this.showDelay || isWarm || isTouch) {
      this.showTooltip();
      return;
    }
    this.showDelayTimer = setTimeout(() => this.showTooltip(), this.showDelay);
  }

  private showTooltip() {
    if (this.disabled || this.escapeDismissed || !this.tooltipElement) return;
    this.initializePopper();
    this.tooltipElement.style.display = 'block';
    if (typeof this.tooltipElement.showPopover === 'function') {
      try {
        this.tooltipElement.showPopover();
      } catch {
        // Already showing or element not connected
      }
    }
    this.isVisible = true;
    if (this.popperInstance) {
      void this.popperInstance.update();
      // Force a second update after a short delay to ensure arrow positioning
      setTimeout(() => {
        if (this.popperInstance) {
          void this.popperInstance.update();
        }
      }, 10);
    }
  }

  private hideTooltip() {
    if (!this.tooltipElement) return;
    if (!this.forceOpen || this.escapeDismissed) {
      if (typeof this.tooltipElement.hidePopover === 'function') {
        try {
          this.tooltipElement.hidePopover();
        } catch {
          // Already hidden or element not connected
        }
      }
      // Only an actual close warms the page; a hover that never opened must not
      if (this.isVisible) {
        lastTooltipCloseTime = Date.now();
      }
      this.tooltipElement.style.display = 'none';
      this.isVisible = false;
      this.destroyPopper();
    }
  }

  private maybeHideTooltip() {
    if (!this.forceOpen && !this.isHovered && !this.isFocused) {
      this.hideTooltip();
    }
  }

  /** Fires before the emulated mouseenter on touch, so mouseenter knows its source. */
  @Listen('pointerdown')
  handlePointerDown(event: PointerEvent) {
    this.lastPointerType = event.pointerType;
    this.suppressNextFocus = event.pointerType === 'mouse';

    if (event.pointerType === 'touch') {
      this.escapeDismissed = false;
      this.isHovered = true;
      this.showTooltip();
    }
  }

  @Listen('pointerup')
  handlePointerUp() {
    this.suppressNextFocus = false;
  }

  @Listen('pointercancel')
  handlePointerCancel() {
    this.suppressNextFocus = false;
  }

  @Listen('pointerenter')
  handlePointerEnter(event: PointerEvent) {
    this.lastPointerType = event.pointerType;
  }

  @Listen('mouseenter')
  handleMouseEnter() {
    this.escapeDismissed = false;
    this.isHovered = true;
    this.scheduleShowTooltip();
  }

  @Listen('mouseleave')
  handleMouseLeave() {
    this.isHovered = false;
    clearTimeout(this.showDelayTimer);
    this.maybeHideTooltip();
  }

  @Listen('focusin')
  handleFocusIn() {
    if (this.suppressNextFocus) {
      this.suppressNextFocus = false;
      return;
    }

    // Focus shows immediately; drop any pending hover show so it can't re-fire
    clearTimeout(this.showDelayTimer);
    this.escapeDismissed = false;
    this.isFocused = true;
    this.showTooltip();
  }

  @Listen('focusout')
  handleFocusOut(event: FocusEvent) {
    const related = event.relatedTarget as Node | null;
    if (related && this.el.contains(related)) {
      return;
    }
    this.clearFocus();
  }

  render() {
    return (
      <Host>
        <div {...this.inheritedAttributes}>
          <slot />
        </div>
      </Host>
    );
  }
}
