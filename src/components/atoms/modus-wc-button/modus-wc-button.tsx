import { Component, Prop, h, Host } from '@stencil/core';

/**
 * @component modus-wc-button
 * @description A customizable button component.
 */
@Component({
  tag: 'modus-wc-button',
  styleUrl: 'modus-wc-button.scss',
  shadow: false,
})
export class ModusWcButton {
  /**
   * The text label displayed on the button.
   */
  @Prop() label: string = '';

  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel: string = '';

  /**
   * Custom CSS class to apply to the button.
   */
  @Prop() customClass: string = '';

  /**
   * The size of the button. Can be 'small', 'medium', or 'large'.
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * If true, the button will take the full width of its container.
   */
  @Prop() fullWidth: boolean = false;

  render() {
    return (
      <Host>
        <button
          class={{
            'modus-wc-button': true,
            [this.customClass]: !!this.customClass,
            [`modus-wc-button--${this.size}`]: true,
            'modus-wc-button--full-width': this.fullWidth,
          }}
          aria-label={this.ariaLabel || this.label}
        >
          {this.label}
        </button>
      </Host>
    );
  }
}
