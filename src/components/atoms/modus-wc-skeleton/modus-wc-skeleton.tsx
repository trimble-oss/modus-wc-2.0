import { Component, Element, Host, Prop, h } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-skeleton.tailwind';

/**
 * A customizable skeleton component used to create skeletons of various sizes and shapes.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-skeleton',
  styleUrl: 'modus-wc-skeleton.scss',
  shadow: false,
})
export class ModusWcSkeleton {
  /**
   * The ID of the element that describes the skeleton.
   */
  @Prop() ariaDescribedby?: string;

  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * The aria-labelledby attribute for usage with a label.
   */
  @Prop() ariaLabelledby?: string;

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass: string = '';

  /**
   * Full width option for skeleton.
   */
  @Prop() fullWidth: boolean = true;

  /**
   * The shape of the skeleton.
   */
  @Prop() shape?: 'circle' | 'rectangle' = 'rectangle';

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcSkeleton: aria-label is required for accessibility.'
      );
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-skeleton'];

    const propClasses = convertPropsToClasses({
      shape: this.shape,
      fullWidth: this.fullWidth,
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
          aria-describedby={this.ariaDescribedby}
          aria-label={this.ariaLabel}
          aria-labelledby={this.ariaLabelledby}
          class={this.getClasses()}
        ></div>
      </Host>
    );
  }
}
