import { Component, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-badget.tailwind';

const ALERT_COLORS = ['success', 'warning', 'danger'];

/**
 * A customizable badge component used to create badges with different sizes, types, and colors.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-badge',
  styleUrl: 'modus-wc-badge.scss',
  shadow: false,
})
export class ModusWcBadge {
  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * The color variant of the badge.
   */
  @Prop() color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger' = 'primary';

  /**
   * The content to display inside the badge. For 'counter' type, this should be a number.
   */
  @Prop() content!: string;

  /**
   * Custom CSS class to apply to the span element.
   */
  @Prop() customClass: string = '';

  /**
   * The size of the badge.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The type of the badge.
   */
  @Prop() type: 'counter' | 'filled' | 'text' = 'filled';

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcBadge: ariaLabel is required for accessibility.');
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-badge'];
    const propClasses = convertPropsToClasses({
      color: this.color,
      size: this.size,
      type: this.type,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const isAlert = ALERT_COLORS.includes(this.color);

    return (
      <Host>
        <span
          class={this.getClasses()}
          aria-label={this.ariaLabel}
          role={isAlert ? 'alert' : 'status'}
        >
          {this.content}
        </span>
      </Host>
    );
  }
}
