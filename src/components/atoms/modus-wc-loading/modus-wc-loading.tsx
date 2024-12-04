import { Component, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-loading.tailwind';
import { Size } from '../../types';

export type LoadingVariant =
  | 'spinner'
  | 'dots'
  | 'ring'
  | 'ball'
  | 'bars'
  | 'infinity';

/**
 * A customizable loading component used to indicate the loading of content.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-loading',
  styleUrl: 'modus-wc-loading.scss',
  shadow: false,
})
export class ModusWcLoading {
  /**
   * The aria-label attribute used for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Custom CSS class to apply to the loading element.
   */
  @Prop() customClass: string = '';

  /**
   * The size of the loading spinner.
   */
  @Prop() size: Size = 'md';

  /**
   * The variant of the loading spinner.
   */
  @Prop() variant: LoadingVariant = 'spinner';

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcLoading: aria-label is required for accessibility.');
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-loading'];

    const propClasses = convertPropsToClasses({
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
          aria-label={this.ariaLabel}
          class={this.getClasses()}
          role="status"
          tabindex={-1}
        ></span>
      </Host>
    );
  }
}
