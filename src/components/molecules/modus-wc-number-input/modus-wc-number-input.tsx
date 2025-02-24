import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-number-input.tailwind';
import { ModusSize } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A customizable input component used to create number inputs with types.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-number-input',
  styleUrl: 'modus-wc-number-input.scss',
  shadow: false,
})
export class ModusWcNumberInput {
  private inheritedAttributes: Attributes = {};
  private isInputFocused = false;
  input!: HTMLInputElement;

  /** Displayed only when the input is not focused. */
  @State() formattedValue = this.getFormattedValue();

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Hint for form autofill feature. */
  @Prop() autoComplete?: 'on' | 'off';

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /** The input's currency. */
  @Prop() currency?: string;

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents.
   * This allows a browser to display an appropriate virtual keyboard.
   */
  @Prop() inputMode: 'decimal' | 'none' | 'numeric' = 'numeric';

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** The input's locale. */
  @Prop() locale?: string;

  /** The input's maximum value. */
  @Prop() max?: number;

  /** The input's minimum value. */
  @Prop() min?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** Text that appears in the form control when it has no value set. */
  @Prop() placeholder?: string = '';

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /** The granularity that the value adheres to. */
  @Prop() step?: number;

  /** Type of form control. */
  @Prop() type?: 'number' | 'range' = 'number';

  /** The value of the control. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  @Watch('value')
  watchValue(newValue: string, oldValue: string): void {
    if (isNaN(+newValue)) {
      this.value = oldValue;
    } else {
      this.value = newValue;
    }

    // Only updated when the input value is changed programmatically by the consumer
    if ((this.currency || this.locale) && !this.isInputFocused) {
      this.formattedValue = this.getFormattedValue();
    }
  }

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcNumberInput: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = this.placeholder || 'Number input';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  getFormattedValue() {
    const numericValue = parseFloat(
      (this.value !== undefined ? this.value : '').replace(/[^0-9.-]+/g, '')
    );

    if (this.value) {
      let formattedValue;

      if (this.currency && this.locale) {
        formattedValue = new Intl.NumberFormat(this.locale, {
          style: 'currency',
          currency: this.currency,
        }).format(numericValue);
      } else if (this.currency) {
        formattedValue = new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: this.currency,
        }).format(numericValue);
      } else if (this.locale) {
        formattedValue = new Intl.NumberFormat(this.locale).format(
          numericValue
        );
      } else {
        formattedValue = numericValue.toString();
      }
      return formattedValue;
    }

    return '';
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
    if (this.currency || this.locale) {
      this.isInputFocused = false;
      this.formattedValue = this.getFormattedValue();
      this.input.type = 'text';
      this.input.value = this.formattedValue;
    }

    this.inputBlur.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    if (this.currency || this.locale) {
      this.isInputFocused = true;
      this.input.value = this.value;
      this.input.type = 'number';
    }

    this.inputFocus.emit(event);
  };

  private handleInput = (event: InputEvent) => {
    this.inputChange.emit(event);
  };

  render() {
    const inputType = this.currency || this.locale ? 'text' : this.type;

    return (
      <Host>
        {this.label && (
          <modus-wc-input-label
            forId={this.inputId}
            labelText={this.label}
            required={this.required}
            size={this.size}
          />
        )}
        <input
          aria-placeholder={this.placeholder}
          aria-required={this.required}
          autocomplete={this.autoComplete}
          class={this.getClasses()}
          disabled={this.disabled}
          id={this.inputId}
          inputmode={this.inputMode}
          max={this.max}
          min={this.min}
          name={this.name}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          placeholder={this.placeholder}
          readonly={this.readOnly}
          ref={(el) => (this.input = el as HTMLInputElement)}
          required={this.required}
          step={this.step}
          tabIndex={this.inputTabIndex}
          type={inputType}
          value={inputType === 'text' ? this.formattedValue : this.value}
          {...this.inheritedAttributes}
        />
      </Host>
    );
  }
}
