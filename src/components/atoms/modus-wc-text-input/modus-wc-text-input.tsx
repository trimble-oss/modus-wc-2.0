import {
  h,
  Host,
  Component,
  Event as StencilEvent,
  EventEmitter,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-text-input.tailwind';
import { ModusSize } from '../../types';

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
   * Indicates that the input should have a border.
   */
  @Prop() bordered?: boolean = true;

  /**
   * Custom CSS class to apply to the input.
   */
  @Prop() customClass?: string = '';

  /**
   * Whether the form control is disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Indicates whether the input has an invalid input.
   */
  @Prop() inputAriaInvalid?: 'grammar' | 'spelling' | 'true' | 'false';

  /**
   * Specifies the text direction of the input content.
   */
  @Prop() inputDir?: '' | 'ltr' | 'rtl' | 'auto';

  /**
   * The ID of the input element.
   */
  @Prop() inputId?: string;

  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents.
   * This allows a browser to display an appropriate virtual keyboard.
   */
  @Prop() inputMode:
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url' = 'text';

  /**
   * Whether the element may be checked for spelling errors.
   * A hint for the browser, not a guarantee.
   */
  @Prop() inputSpellcheck?: boolean = false;

  /**
   * Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).
   */
  @Prop() inputTabIndex?: number;

  /**
   * Maximum length (number of characters) of value.
   */
  @Prop() maxLength?: number;

  /**
   * Minimum length (number of characters) of value.
   */
  @Prop() minLength?: number;

  /**
   * Name of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop() name?: string;

  /**
   * Pattern the value must match to be valid
   */
  @Prop() pattern?: string;

  /**
   * Text that appears in the form control when it has no value set.
   */
  @Prop() placeholder?: string = '';

  /**
   * Whether the value is editable.
   */
  @Prop() readOnly?: boolean = false;

  /**
   * A value is required for the form to be submittable.
   */
  @Prop() required?: boolean = false;

  /**
   * The size of the input.
   */
  @Prop() size?: ModusSize = 'md';

  /**
   * Type of form control.
   */
  @Prop() type?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url' =
    'text';

  /**
   * The value of the control.
   */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /**
   * Event emitted when the input loses focus.
   */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /**
   * Event emitted when the input value changes.
   */
  @StencilEvent() inputChange!: EventEmitter<Event>;

  /**
   * Event emitted when the input gains focus.
   */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcTextInput: aria-label is required for accessibility.'
      );
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-input', 'modus-wc-w-full'];
    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleBlur = (event: FocusEvent) => {
    this.inputBlur.emit(event);
  };

  private handleChange = (event: Event) => {
    this.inputChange.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    this.inputFocus.emit(event);
  };

  render() {
    return (
      <Host>
        <input
          aria-describedby={this.ariaDescribedby}
          aria-invalid={this.inputAriaInvalid}
          aria-label={this.ariaLabel || this.placeholder}
          aria-placeholder={this.placeholder}
          aria-required={this.required}
          autocapitalize={this.autoCapitalize}
          autocomplete={this.autoComplete}
          autofocus={this.autoFocus}
          class={this.getClasses()}
          dir={this.inputDir}
          disabled={this.disabled}
          id={this.inputId}
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
          spellcheck={this.inputSpellcheck}
          tabIndex={this.inputTabIndex}
          type={this.type}
          value={this.value}
        />
      </Host>
    );
  }
}
