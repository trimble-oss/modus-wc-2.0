import {
  Component,
  h,
  Host,
  Prop,
  Event as StencilEvent,
  EventEmitter,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-date.tailwind';
import { ModusSize } from '../../types';

/**
 * A customizable date picker component used to create date inputs.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-date',
  styleUrl: 'modus-wc-date.scss',
  shadow: false,
})
export class ModusWcDate {
  /**
   * The aria-describedby attribute matching the ID of the element that describes the checkbox (accessibility).
   * This property name is reserved by HTMLElement and omitted in the React integration.
   */
  @Prop({ mutable: true }) a11yDescribedby?: string;

  /**
   * The aria-label attribute used to define a string that labels the current element (accessibility).
   * This property name is reserved by HTMLElement and omitted in the React integration.
   */
  @Prop({ mutable: true }) a11yLabel!: string;

  /**
   * The aria-labelledby attribute for usage with a label (accessibility).
   * This property name is reserved by HTMLElement and omitted in the React integration.
   */
  @Prop({ mutable: true }) a11yLabelledby?: string;

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
   * Specifies the text direction of the input content.
   */
  @Prop() inputDir?: '' | 'ltr' | 'rtl' | 'auto';

  /**
   * The ID of the input element.
   */
  @Prop() inputId?: string;

  /**
   * Determine the control's relative ordering for sequential focus navigation (typically with the Tab key).
   */
  @Prop() inputTabIndex?: number;

  /**
   * Maximum date value.
   */
  @Prop() max?: string;

  /**
   * Minimum date value.
   */
  @Prop() min?: string;

  /**
   * Name of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop() name?: string;

  /**
   * Placeholder text for the date input.
   */
  @Prop() placeholder?: string;

  /**
   * Whether the value is editable.
   */
  @Prop() readOnly?: boolean = false;

  /**
   * A value is required or must be checked for the form to be submittable.
   */
  @Prop() required?: boolean = false;

  /**
   * The size of the input.
   */
  @Prop() size?: ModusSize = 'md';

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
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /**
   * Event emitted when the input gains focus.
   */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.a11yLabel) {
      console.warn(
        'ModusWcDate: a11y-label is required for accessibility. Using fallback label.'
      );
    }
    this.a11yLabel = this.placeholder || 'Date input';
  }

  private getClasses(): string {
    const classList = ['modus-wc-date', 'modus-wc-input', 'modus-wc-w-full'];
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

  private handleFocus = (event: FocusEvent) => {
    this.inputFocus.emit(event);
  };

  private handleInput = (event: InputEvent) => {
    this.inputChange.emit(event);
  };

  render() {
    return (
      <Host>
        <input
          aria-describedby={this.a11yDescribedby}
          aria-label={this.a11yLabel}
          aria-labelledby={this.a11yLabelledby}
          autofocus={this.autoFocus}
          class={this.getClasses()}
          dir={this.inputDir}
          disabled={this.disabled}
          id={this.inputId}
          max={this.max}
          min={this.min}
          name={this.name}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          placeholder={this.placeholder}
          readonly={this.readOnly}
          required={this.required}
          tabIndex={this.inputTabIndex}
          type="date"
          value={this.value}
        />
      </Host>
    );
  }
}
