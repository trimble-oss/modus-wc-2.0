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
import { Attributes, generateRandomId, inheritAriaAttributes } from '../utils';

/**
 * A customizable tooltip component used to create tooltips with different content.
 *
 * The tooltip opens on hover and keyboard focus of the wrapped trigger, and closes on
 * pointer leave, focus leave, or Escape (without moving focus). When forceOpen is enabled,
 * the tooltip remains open and Escape does not dismiss it.
 * Use the contentElement prop to supply rich HTML content to the tooltip such as multiline text.
 * For plain dynamic text, prefer the content prop instead. When contentElement is set, it takes precedence over the content prop.
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
  /** Element that receives aria-describedby (inner button when wrapping modus-wc-button). */
  private describedByTarget: HTMLElement | null = null;
  private generatedTooltipId: string | null = null;
  private lastAppliedDescribedById: string | null = null;
  /** Deferred accessibility sync for nested focusable hosts; cancelled on disconnect. */
  private accessibilitySyncFrameId: number | null = null;
  private isHovered = false;
  private isFocused = false;

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
   * The ID of the tooltip element. Applied to the tip (`role="tooltip"`) and as
   * `aria-describedby` on the slotted trigger so screen readers announce the tip with the control's name.
   * When omitted, an id is generated automatically.
   */
  @Prop() tooltipId?: string;

  /** The position that the tooltip will render in relation to the element. */
  @Prop() position?: 'auto' | 'top' | 'right' | 'bottom' | 'left' = 'auto';

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
    this.syncTooltipAccessibility();
  }

  @Watch('disabled')
  handleDisabledChange(disabled: boolean) {
    if (disabled) {
      this.hideTooltip();
      this.clearTriggerAriaDescribedBy();
    } else {
      this.syncTooltipAccessibility();
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

    const arrow = document.createElement('div');
    arrow.className = 'modus-wc-tooltip-arrow';
    this.tooltipElement.appendChild(arrow);

    this.applyContentToTooltip();
    this.syncTooltipAccessibility();

    document.body.appendChild(this.tooltipElement);
    this.tooltipElement.style.display = 'none';

    if (this.triggerElement && this.tooltipElement) {
      this.initializePopper();
    }

    // Nested hosts (e.g. modus-wc-button) may render their focusable control after this tick
    this.accessibilitySyncFrameId = requestAnimationFrame(() => {
      this.accessibilitySyncFrameId = null;
      if (!this.el.isConnected || !this.tooltipElement?.isConnected) return;
      this.syncTooltipAccessibility();
    });

    if (this.forceOpen && !this.disabled && !this.escapeDismissed) {
      this.showTooltip();
    }
  }

  disconnectedCallback() {
    if (this.accessibilitySyncFrameId !== null) {
      cancelAnimationFrame(this.accessibilitySyncFrameId);
      this.accessibilitySyncFrameId = null;
    }

    this.clearTriggerAriaDescribedBy();

    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
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
  }

  private resolveTooltipId(): string {
    if (this.tooltipId) {
      return this.tooltipId;
    }
    if (!this.generatedTooltipId) {
      this.generatedTooltipId = `modus-wc-tooltip-${generateRandomId(8)}`;
    }
    return this.generatedTooltipId;
  }

  /**
   * Prefer the nested focusable control (e.g. modus-wc-button > button) so
   * aria-describedby is on the element that actually receives keyboard focus.
   */
  private resolveDescribedByTarget(): HTMLElement | null {
    if (!this.triggerElement) return null;
    const nested = this.triggerElement.querySelector(
      'button, a[href], input, select, textarea'
    );
    return nested ? (nested as HTMLElement) : this.triggerElement;
  }

  /** Tip id + aria-describedby on the focusable trigger for name + description announcement. */
  private syncTooltipAccessibility() {
    if (!this.tooltipElement || this.disabled) return;

    const id = this.resolveTooltipId();
    this.tooltipElement.id = id;

    const previousTarget = this.describedByTarget;
    this.describedByTarget = this.resolveDescribedByTarget();
    if (!this.describedByTarget) return;

    if (this.lastAppliedDescribedById) {
      if (this.lastAppliedDescribedById !== id) {
        this.removeDescribedById(this.lastAppliedDescribedById, previousTarget);
      } else if (previousTarget && previousTarget !== this.describedByTarget) {
        this.removeDescribedById(id, previousTarget);
      }
    }

    const existing = this.describedByTarget.getAttribute('aria-describedby');
    const tokens = existing ? existing.split(/\s+/).filter(Boolean) : [];
    if (!tokens.includes(id)) {
      tokens.push(id);
      this.describedByTarget.setAttribute('aria-describedby', tokens.join(' '));
    }
    this.lastAppliedDescribedById = id;
  }

  private removeDescribedById(id: string, target?: HTMLElement | null) {
    const el =
      target ?? this.describedByTarget ?? this.resolveDescribedByTarget();
    if (!el) return;

    const existing = el.getAttribute('aria-describedby');
    if (!existing) return;

    const next = existing
      .split(/\s+/)
      .filter((token) => token && token !== id)
      .join(' ');

    if (next) {
      el.setAttribute('aria-describedby', next);
    } else {
      el.removeAttribute('aria-describedby');
    }
  }

  private clearTriggerAriaDescribedBy() {
    if (this.lastAppliedDescribedById) {
      this.removeDescribedById(this.lastAppliedDescribedById);
      this.lastAppliedDescribedById = null;
      return;
    }
    const id = this.tooltipId || this.generatedTooltipId;
    if (id) {
      this.removeDescribedById(id);
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

  private initializePopper() {
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

  private showTooltip() {
    if (this.disabled || this.escapeDismissed || !this.tooltipElement) return;
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
      this.tooltipElement.style.display = 'none';
      this.isVisible = false;
    }
  }

  private maybeHideTooltip() {
    if (!this.forceOpen && !this.isHovered && !this.isFocused) {
      this.hideTooltip();
    }
  }

  @Listen('mouseenter')
  handleMouseEnter() {
    this.escapeDismissed = false;
    this.isHovered = true;
    this.showTooltip();
  }

  @Listen('mouseleave')
  handleMouseLeave() {
    this.isHovered = false;
    this.maybeHideTooltip();
  }

  @Listen('focusin')
  handleFocusIn() {
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
    this.isFocused = false;
    this.maybeHideTooltip();
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
