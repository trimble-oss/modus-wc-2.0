import { h, Host, Component, Event, EventEmitter, Prop } from '@stencil/core';

/**
 * A customizable input component used to create text inputs with types.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-text-input',
  styleUrl: 'modus-wc-text-input.scss',
  shadow: false,
})
export class ModusWcTextInput {
  /**
   * The ID of the element that describes the input.
   */
  @Prop() ariaDescribedby?: string;

  /**
   * Indicates whether the input has an invalid input.
   */
  @Prop() ariaInvalid?: boolean;

  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Custom CSS class to apply to the input (supports DaisyUI).
   */
  @Prop() customClass: string = '';

  /**
   * Specifies the text direction of the input content.
   */
  @Prop() dir?: 'ltr' | 'rtl' | 'auto';

  /**
   * The disabled state of the input.
   */
  @Prop() disabled: boolean = false;

  /**
   * The ID of the input element.
   */
  @Prop() id?: string;

  /**
   * The maximum number of characters allowed in the input.
   */
  @Prop() maxLength?: number;

  /**
   * The name of the input.
   */
  @Prop() name: string = '';

  /**
   * The input's placeholder text.
   */
  @Prop() placeholder: string = '';

  /**
   * The readonly state of the input.
   */
  @Prop() readonly: boolean = false;

  /**
   * If true, the input will be required.
   */
  @Prop() required: boolean = false;

  /**
   * The tabindex of the input.
   */
  @Prop() tabIndex?: number;

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
  @Event() change!: EventEmitter<Event>;

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
    this.change.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    this.focus.emit(event);
  };

  render() {
    return (
      <Host>
        <input
          aria-describedby={this.ariaDescribedby}
          aria-invalid={this.ariaInvalid}
          aria-label={this.ariaLabel || this.placeholder}
          aria-placeholder={this.placeholder}
          aria-required={this.required}
          class={{
            'modus-wc-input': true,
            [this.customClass]: !!this.customClass,
          }}
          dir={this.dir}
          disabled={this.disabled}
          id={this.id}
          maxLength={this.maxLength}
          name={this.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          tabIndex={this.tabIndex}
          type={this.type}
          value={this.value}
        />
      </Host>
    );
  }
}
