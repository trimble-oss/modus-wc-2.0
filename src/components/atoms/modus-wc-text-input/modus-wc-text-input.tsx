import { h, Host, Component, Event, EventEmitter, Prop } from '@stencil/core';
import { tailwindThemeClasses } from './modus-wc-text-input.tailwind';

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
   * Controls automatic capitalization in inputted text.
   */
  @Prop() autoCapitalize?:
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters';

  /**
   * Hint for form autofill feature.
   */
  @Prop() autoComplete?: 'on' | 'off';

  /**
   * Indicates that an element should be focused on page load.
   */
  @Prop() autoFocus?: boolean;

  /**
   * Custom CSS class to apply to the input (supports DaisyUI).
   */
  @Prop() customClass: string = '';

  /**
   * Specifies the text direction of the input content.
   */
  @Prop() dir?: 'ltr' | 'rtl' | 'auto';

  /**
   * Whether the form control is disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * The ID of the input element.
   */
  @Prop() id?: string;

  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents.
   * This allows a browser to display an appropriate virtual keyboard.
   */
  @Prop() inputMode?:
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';

  /**
   * Maximum length (number of characters) of value.
   */
  @Prop() maxLength?: number;

  /**
   * Minimum length (number of characters) of value.
   */
  @Prop() minLength?: number;

  /**
   * Name of the form control. Submitted with the form as part of a name/value pai.
   */
  @Prop() name: string = '';

  /**
   * Pattern the value must match to be valid
   */
  @Prop() pattern?: string;

  /**
   * Text that appears in the form control when it has no value set.
   */
  @Prop() placeholder: string = '';

  /**
   * Whether the value is editable.
   */
  @Prop() readOnly: boolean = false;

  /**
   * A value is required or must be checked for the form to be submittable.
   */
  @Prop() required: boolean = false;

  /**
   * Whether the element may be checked for spelling errors.
   * A hint for the browser, not a guarantee.
   */
  @Prop() spellcheck?: boolean;

  /**
   * Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).
   */
  @Prop() tabIndex?: number;

  /**
   * Type of form control.
   */
  @Prop() type: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url' =
    'text';

  /**
   * The value of the control.
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
    const theme = document.documentElement.getAttribute('data-theme') ?? '';
    const themeClasses = tailwindThemeClasses[theme];
    const classes = {
      'modus-wc-input': true,
      [themeClasses]: true,
      [this.customClass]: !!this.customClass,
    };

    return (
      <Host>
        <input
          aria-describedby={this.ariaDescribedby}
          aria-invalid={this.ariaInvalid}
          aria-label={this.ariaLabel || this.placeholder}
          aria-placeholder={this.placeholder}
          aria-required={this.required}
          autocapitalize={this.autoCapitalize}
          autocomplete={this.autoComplete}
          autofocus={this.autoFocus}
          class={classes}
          dir={this.dir}
          disabled={this.disabled}
          id={this.id}
          inputmode={this.inputMode}
          maxlength={this.maxLength}
          minlength={this.minLength}
          name={this.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          pattern={this.pattern}
          placeholder={this.placeholder}
          readonly={this.readOnly}
          required={this.required}
          spellcheck={this.spellcheck}
          tabIndex={this.tabIndex}
          type={this.type}
          value={this.value}
        />
      </Host>
    );
  }
}
