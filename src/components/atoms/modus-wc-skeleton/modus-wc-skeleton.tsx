import { Component, Host, Prop, h } from '@stencil/core';
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
   * The height of the skeleton.
   */
  @Prop() height: string = 'var(--modus-wc-default-skeleton-height)';

  /**
   * The shape of the skeleton.
   */
  @Prop() shape?: 'circle' | 'rectangle' = 'rectangle';

  /**
   * The width of the skeleton.
   */
  @Prop() width: string = 'var(--modus-wc-default-skeleton-width)';

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
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getStyles(): { [key: string]: string | undefined } | undefined {
    return { height: this.height, width: this.width };
  }

  render() {
    return (
      <Host>
        <div
          aria-describedby={this.ariaDescribedby}
          aria-label={this.ariaLabel}
          aria-labelledby={this.ariaLabelledby}
          class={this.getClasses()}
          style={this.getStyles()}
        ></div>
      </Host>
    );
  }
}
