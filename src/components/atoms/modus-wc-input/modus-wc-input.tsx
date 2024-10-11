import { h, Host, Component, Event, EventEmitter, Prop } from '@stencil/core';
import { getCurrentModusWCMode } from '../../../utils/theme';

/**
 * A customizable input component used to create inputs with different sizes and types.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-input',
  styleUrl: 'modus-wc-input.scss',
  shadow: false,
})
export class ModusWcInput {
  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Custom CSS class to apply to the input.
   */
  @Prop() customClass: string = '';

  /**
   * If true, the input will be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * The input's name attribute.
   */
  @Prop() name: string = '';

  /**
   * The input's placeholder text.
   */
  @Prop() placeholder: string = '';

  /**
   * If true, the input will be required.
   */
  @Prop() required: boolean = false;

  /**
   * The size of the input. Can be 'small', 'medium', or 'large'.
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * The input's type attribute.
   */
  @Prop() type: 'email' | 'number' | 'text' | 'password' = 'text';

  /**
   * The input's value.
   */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /**
   * Event emitted when the input loses focus.
   */
  @Event() blur!: EventEmitter<FocusEvent>;

  /**
   * Event emitted when the input value changes.
   */
  @Event() change!: EventEmitter<string>;

  /**
   * Event emitted when the input gains focus.
   */
  @Event() focus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcInput: ariaLabel is required for accessibility.');
    }
  }

  private handleBlur = (event: FocusEvent) => {
    this.blur.emit(event);
  };

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.change.emit(this.value);
  };

  private handleFocus = (event: FocusEvent) => {
    this.focus.emit(event);
  };

  render() {
    const currentMode = getCurrentModusWCMode();

    return (
      <Host>
        <div
          class={{
            'modus-wc-input-wrapper': true,
            [this.customClass]: !!this.customClass,
            [`modus-wc-input--${this.size}`]: true,
            'modus-wc-input--disabled': this.disabled,
            'modus-wc-input--dark-mode': currentMode === 'dark',
          }}
        >
          <input
            aria-label={this.ariaLabel || this.placeholder}
            class="modus-wc-input"
            disabled={this.disabled}
            name={this.name}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onInput={this.handleChange}
            placeholder={this.placeholder}
            required={this.required}
            type={this.type}
            value={this.value}
          />
        </div>
      </Host>
    );
  }
}
