import {
  Component,
  h,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
} from '@stencil/core';

/**
 * A customizable button component used to create buttons with different sizes, variants, and types.
 *
 * Adheres to WCAG 2.2 standards.
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
   * Custom CSS class to apply to the button element.
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

  /**
   * Event emitted when the button is clicked or activated via keyboard.
   */
  @Event() click!: EventEmitter<MouseEvent | KeyboardEvent>;

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcButton: ariaLabel is required for accessibility.');
    }
  }

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.click.emit(event);
    }
  };

  // @ts-expect-error: TODO fixes linting issue, test thoroughly
  @Listen('keydown')
  handleKeyDown = (event: KeyboardEvent) => {
    if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.click.emit(event);
    }
  };

  render() {
    const ariaPressed = this.pressed ? 'true' : undefined;

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
          }}
          aria-label={this.ariaLabel || this.label}
          aria-pressed={ariaPressed}
          disabled={this.disabled}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          tabIndex={this.disabled ? -1 : 0}
          type={this.type}
        >
          {this.label}
        </button>
      </Host>
    );
  }
}
