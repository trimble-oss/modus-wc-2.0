import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-tooltip.tailwind';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A customizable tooltip component used to create tooltips with different content.
 *
 * Adheres to WCAG 2.2 standards.
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

  /** Pass this in order to not render the tooltip at all */
  @Prop() disabled?: boolean = false;

  /** Use this attribute to force the tooltip to remain open. */
  @Prop() forceOpen?: boolean;

  /** The ID of the tooltip element, useful for setting the "aria-describedby" attribute of related elements. */
  @Prop() tooltipId?: string;

  /** The position that the tooltip will render in relation to the element. */
  @Prop() position?: 'auto' | 'top' | 'right' | 'bottom' | 'left' = 'auto';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-tooltip'];

    const propClasses = convertPropsToClasses({
      forceOpen: this.forceOpen,
      position: this.position,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    if (this.disabled) {
      // Just render the slotted content, as to not pollute the DOM
      return (
        <Host>
          <slot />
        </Host>
      );
    }

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
