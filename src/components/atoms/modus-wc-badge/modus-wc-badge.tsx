import { Component, h, Host, Prop } from '@stencil/core';
import { getCurrentModusWCMode } from '../../../utils/theme';

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
   * Custom CSS class to apply to the badge.
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

  render() {
    const currentMode = getCurrentModusWCMode();
    const isCounter = this.type === 'counter';

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
          aria-label={
            this.ariaLabel ||
            (isCounter ? `Count: ${this.content}` : this.content)
          }
          role={isCounter ? 'status' : 'badge'}
        >
          {this.content}
        </span>
      </Host>
    );
  }
}
