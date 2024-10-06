import { Component, Prop, h, Host } from '@stencil/core';
import { getCurrentModusWCMode } from '../../../utils/theme';

/**
 * @component modus-wc-button
 * @description A customizable button component that adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-button',
  styleUrl: 'modus-wc-button.scss',
  shadow: false,
})
export class ModusWcButton {
  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * The color variant of the button. Can be 'primary', 'secondary', or 'tertiary'.
   */
  @Prop() color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * Custom CSS class to apply to the button.
   */
  @Prop() customClass: string = '';

  /**
   * If true, the button will be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * If true, the button will take the full width of its container.
   */
  @Prop() fullWidth: boolean = false;

  /**
   * The text label displayed on the button.
   */
  @Prop() label!: string;

  /**
   * If true, the button will be in a pressed state (for toggle buttons).
   */
  @Prop() pressed: boolean = false;

  /**
   * The size of the button. Can be 'small', 'medium', or 'large'.
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * The variant of the button. Can be 'filled', 'outlined', or 'text'.
   */
  @Prop() variant: 'filled' | 'outlined' | 'text' = 'filled';

  /**
   * The type of the button. Can be 'button', 'submit', or 'reset'.
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    const ariaPressed = this.pressed ? 'true' : undefined;
    const currentMode = getCurrentModusWCMode();

    return (
      <Host>
        <button
          class={{
            'modus-wc-button': true,
            [this.customClass]: !!this.customClass,
            [`modus-wc-button--${this.size}`]: true,
            [`modus-wc-button--${this.variant}`]: true,
            [`modus-wc-button--${this.color}`]: true,
            'modus-wc-button--full-width': this.fullWidth,
            'modus-wc-button--disabled': this.disabled,
            'modus-wc-button--dark-mode': currentMode === 'dark',
          }}
          aria-label={this.ariaLabel || this.label}
          disabled={this.disabled}
          type={this.type}
          aria-pressed={ariaPressed}
        >
          {this.label}
        </button>
      </Host>
    );
  }
}
