import { Component, h, Host, Prop } from '@stencil/core';
import { getCurrentModusWCMode } from '../../../utils/theme';

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
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * The type of the badge.
   */
  @Prop() type: 'filled' | 'text' | 'counter' = 'filled';

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcBadge: ariaLabel is required for accessibility.');
    }
  }

  render() {
    const currentMode = getCurrentModusWCMode();
    const isAlert = ALERT_COLORS.includes(this.color);

    return (
      <Host>
        <span
          class={{
            'modus-wc-badge': true,
            [this.customClass]: !!this.customClass,
            [`modus-wc-badge--${this.size}`]: true,
            [`modus-wc-badge--${this.type}`]: true,
            [`modus-wc-badge--${this.color}`]: true,
            'modus-wc-badge--dark-mode': currentMode === 'dark',
            'modus-wc-badge--high-contrast-mode':
              currentMode === 'high-contrast',
          }}
          aria-label={this.ariaLabel}
          role={isAlert ? 'alert' : 'status'}
        >
          {this.content}
        </span>
      </Host>
    );
  }
}
