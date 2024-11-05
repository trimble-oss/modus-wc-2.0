import {
  Component,
  h,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-button.tailwind';

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
   * The color variant of the button.
   */
  @Prop() color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger' =
    'primary';

  /**
   * Custom CSS class to apply to the button element.
   */
  @Prop() customClass: string = '';

  /**
   * If true, the button will be disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If true, the button will take the full width of its container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * The text label displayed on the button.
   */
  @Prop() label!: string;

  /**
   * If true, the button will be in a pressed state (for toggle buttons).
   */
  @Prop() pressed: boolean = false;

  /**
   * The size of the button.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The variant of the button.
   */
  @Prop() variant: 'filled' | 'outlined' | 'text' = 'filled';

  /**
   * The type of the button.
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Event emitted when the button is clicked or activated via keyboard.
   */
  @Event() buttonClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcButton: aria-label is required for accessibility.');
    }
  }

  private getClasses(): string {
    const classList = [];
    const propClasses = convertPropsToClasses({
      color: this.color,
      disabled: this.disabled,
      fullWidth: this.fullWidth,
      size: this.size,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    classList.push('modus-wc-btn');
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  };

  // @ts-expect-error: TODO fixes linting issue, test thoroughly
  @Listen('keydown')
  private handleKeyDown = (event: KeyboardEvent) => {
    if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.buttonClick.emit(event);
    }
  };

  render() {
    const ariaPressed = this.pressed ? 'true' : undefined;

    return (
      <Host>
        <button
          class={this.getClasses()}
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
