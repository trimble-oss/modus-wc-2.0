import { Component, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-tooltip.tailwind';

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
  /**
   * The text content of the tooltip.
   */
  @Prop() content: string = '';

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass: string = '';

  /**
   * Use this attribute to force the tooltip to remain open.
   */
  @Prop() forceOpen?: boolean;

  /**
   * The unique identifier of the tooltip, useful for setting the "aria-describedby" attribute of related elements.
   */
  @Prop() id?: string;

  /**
   * The position that the tooltip will render in relation to the element.
   */
  @Prop() position?: 'auto' | 'top' | 'right' | 'bottom' | 'left' = 'auto';

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
    return (
      <Host>
        <div
          class={this.getClasses()}
          data-tip={this.content}
          id={this.id}
          role="tooltip"
        >
          <slot />
        </div>
      </Host>
    );
  }
}
