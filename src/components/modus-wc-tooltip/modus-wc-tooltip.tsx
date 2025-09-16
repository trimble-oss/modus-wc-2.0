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
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable tooltip component used to create tooltips with different content.
 *
 * The tooltip can be dismissed by pressing the Escape key when hovering over it.
 * When forceOpen is enabled, the tooltip will remain open unless dismissed via Escape while hovering.
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

  /** The text content of the tooltip. */
  @Prop() content: string = '';

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
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  @Listen('keyup', { target: 'document' })
  elementKeyupHandler(event: KeyboardEvent): void {
    switch (event.code) {
      case 'Escape': {
        // Allow Escape to dismiss tooltip when it's visible
        // When forceOpen is true, Escape should still work to dismiss it
        if (this.isVisible) {
          this.escapeDismissed = true;
          this.isVisible = false;
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
    this.tooltipElement.textContent = this.content;
    this.tooltipElement.setAttribute('role', 'tooltip');
    if (this.tooltipId) {
      this.tooltipElement.id = this.tooltipId;
    }

    const arrow = document.createElement('div');
    arrow.className = 'modus-wc-tooltip-arrow';
    this.tooltipElement.appendChild(arrow);

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
    if (this.tooltipElement && document.body.contains(this.tooltipElement)) {
      document.body.removeChild(this.tooltipElement);
    }

    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleWindowScroll, true);
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
        strategy: 'absolute',
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
  handleContentChange(newContent: string) {
    if (this.tooltipElement) {
      const arrow = this.tooltipElement.querySelector(
        '.modus-wc-tooltip-arrow'
      );
      this.tooltipElement.textContent = newContent;
      if (arrow) {
        this.tooltipElement.appendChild(arrow);
      }
    }
  }

  @Watch('forceOpen')
  handleForceOpenChange(newForceOpen: boolean) {
    if (newForceOpen && !this.disabled && !this.escapeDismissed) {
      this.showTooltip();
    } else if (!newForceOpen) {
      this.hideTooltip();
    }
  }

  @Listen('mouseenter')
  handleMouseEnter() {
    // If escapeDismissed is true, reset it on mouseenter
    if (this.escapeDismissed) {
      this.escapeDismissed = false;
    }
    this.isVisible = true;
    this.showTooltip();
  }

  @Listen('mouseleave')
  handleMouseLeave() {
    // Clear visibility state only if not forced open
    if (!this.forceOpen) {
      this.isVisible = false;
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
