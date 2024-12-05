import { Component, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-spinner.tailwind';
import { Size } from '../../types';

export type SpinnerVariant =
  | 'spinner'
  | 'dots'
  | 'ring'
  | 'ball'
  | 'bars'
  | 'infinity';

export type SpinnerColor = 'primary' | 'secondary' | 'tertiary';

/**
 * A customizable spinner component used to indicate the loading of content.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-spinner',
  styleUrl: 'modus-wc-spinner.scss',
  shadow: false,
})
export class ModusWcSpinner {
  /**
   * The aria-label attribute used for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * The color of the spinner.
   */
  @Prop() color: SpinnerColor = 'primary';

  /**
   * Custom CSS class to apply to the spinner element.
   */
  @Prop() customClass: string = '';

  /**
   * The size of the spinner.
   */
  @Prop() size: Size = 'md';

  /**
   * The variant of the spinner.
   */
  @Prop() variant: SpinnerVariant = 'spinner';

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcSpinner: aria-label is required for accessibility.');
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-spinner'];

    const propClasses = convertPropsToClasses({
      color: this.color,
      size: this.size,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <span
          aria-busy="true"
          aria-label={this.ariaLabel}
          class={this.getClasses()}
          role="status"
          tabindex={-1}
        ></span>
      </Host>
    );
  }
}
