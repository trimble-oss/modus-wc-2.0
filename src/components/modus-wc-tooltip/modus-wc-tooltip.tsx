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
 * A customizable tooltip component used to create tooltips with different content.
 *
 * The tooltip can be dismissed by pressing the Escape key when hovering over it.
 * When forceOpen is enabled, the tooltip will remain open and can only be closed by setting forceOpen to false.
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

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The text content of the tooltip. When contentElement is also set, contentElement takes precedence. */
  @Prop() content: string = '';

  /**
   * An optional rich HTML element to render as the tooltip body.
   * When set, this takes precedence over the `content` string prop.
   */
  @Prop() contentElement?: HTMLElement;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Disables displaying the tooltip on hover */
  @Prop() disabled?: boolean = false;

  /** Use this attribute to force the tooltip to remain open. */
  @Prop() forceOpen?: boolean;

  /** The ID of the tooltip element, useful for setting the "aria-describedby" attribute of related elements. */
  @Prop() tooltipId?: string;

  /** The position that the tooltip will render in relation to the element. */
  @Prop() position?: 'auto' | 'top' | 'right' | 'bottom' | 'left' = 'auto';

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
    this.triggerElement = this.el.querySelector(
      'div > :first-child'
    ) as HTMLElement;

    this.tooltipElement = document.createElement('div');
    this.tooltipElement.className = `modus-wc-tooltip-content ${this.customClass || ''}`;
    this.tooltipElement.setAttribute('role', 'tooltip');
    if (this.tooltipId) {
      this.tooltipElement.id = this.tooltipId;
    }

    const arrow = document.createElement('div');
    arrow.className = 'modus-wc-tooltip-arrow';
    this.tooltipElement.appendChild(arrow);
    this.tooltipElement.setAttribute('popover', 'manual');

    this.applyContentToTooltip();

    document.body.appendChild(this.tooltipElement);
    this.tooltipElement.style.display = 'none';

    if (this.triggerElement && this.tooltipElement) {
      this.initializePopper();
    }

    if (this.forceOpen && !this.disabled && !this.escapeDismissed) {
      this.showTooltip();
    }
  }

  disconnectedCallback() {
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
        this.contentElement as unknown as Node,
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
    // contentElement takes precedence; ignore plain-string updates while it is set
    if (this.contentElement) return;
    if (this.tooltipElement) {
      const arrow = this.tooltipElement.querySelector(
        '.modus-wc-tooltip-arrow'
      );
      this.tooltipElement.textContent = this.content;
      if (arrow) {
        this.tooltipElement.appendChild(arrow);
      }
    }
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

  @Listen('mouseenter')
  handleMouseEnter() {
    this.escapeDismissed = false;
    this.showTooltip();
  }

  @Listen('mouseleave')
  handleMouseLeave() {
    if (!this.forceOpen) {
      this.hideTooltip();
    }
  }

  render() {
    return (
      <Host>
        <div
          aria-describedby={this.tooltipId}
          id={this.tooltipId}
          {...this.inheritedAttributes}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
