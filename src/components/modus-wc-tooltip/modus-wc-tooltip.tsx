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
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-tooltip.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable tooltip component used to create tooltips with different content.
 *
 * The tooltip can be dismissed by pressing the Escape key.
 */
@Component({
  tag: 'modus-wc-tooltip',
  styleUrl: 'modus-wc-tooltip.scss',
  shadow: false,
})
export class ModusWcTooltip {
  private inheritedAttributes: Attributes = {};

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
  @State() escapeDismissed: boolean = false;

  /** Track if tooltip is currently visible */
  @State() isVisible: boolean = false;

  /** An event that fires when the tooltip is dismissed via Escape key */
  @Event() dismissEscape!: EventEmitter;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  @Listen('keyup', { target: 'document' })
  elementKeyupHandler(event: KeyboardEvent): void {
    switch (event.code) {
      case 'Escape': {
        // Check if tooltip is currently visible using component state
        if (this.forceOpen || this.isVisible) {
          this.escapeDismissed = true;
          this.isVisible = false;
          this.dismissEscape.emit();
        }
        break;
      }
    }
  }

  @Listen('mouseenter')
  handleMouseEnter() {
    // Reset escape dismissal and set visibility state
    this.escapeDismissed = false;
    this.isVisible = true;
  }

  @Listen('mouseleave')
  handleMouseLeave() {
    // Clear visibility state
    this.isVisible = false;
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-tooltip'];

    const propClasses = convertPropsToClasses({
      disabled: this.disabled || this.escapeDismissed,
      forceOpen: this.forceOpen && !this.escapeDismissed,
      position: this.position,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div
          class={this.getClasses()}
          data-tip={this.content}
          id={this.tooltipId}
          role="tooltip"
          {...this.inheritedAttributes}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
