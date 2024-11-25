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
   * Whether the skeleton is hidden from screen readers and other assistive technologies.
   */
  @Prop() ariaHidden: boolean = true;

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass: string = '';

  /**
   * The height of the skeleton.
   */
  @Prop() height: string = 'var(--modus-wc-default-skeleton-height)';

  /**
   * The role of the skeleton.
   */
  @Prop() role: string = 'presentation';

  /**
   * The shape of the skeleton.
   */
  @Prop() shape?: 'circle' | 'rectangle' = 'rectangle';

  /**
   * The tab index of the skeleton. Defaults to -1 to prevent the skeleton from being focusable.
   */
  @Prop() tabindex: number = -1;

  /**
   * The width of the skeleton.
   */
  @Prop() width: string = 'var(--modus-wc-default-skeleton-width)';

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
          aria-hidden={this.ariaHidden}
          class={this.getClasses()}
          role={this.role}
          style={this.getStyles()}
          tabindex={this.tabindex}
        ></div>
      </Host>
    );
  }
}
