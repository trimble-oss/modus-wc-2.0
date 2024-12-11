import {
  h,
  Host,
  Component,
  Event as StencilEvent,
  EventEmitter,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-time-input.tailwind';
import { Size } from '../../types';

/**
 * A customizable input component used to create time inputs.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-time-input',
  styleUrl: 'modus-wc-time-input.scss',
  shadow: false,
})
export class ModusWcTimeInput {
  /**
   * The ID of the element that describes the input.
   */
  @Prop() ariaDescribedby?: string;

  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Hint for form autofill feature.
   */
  @Prop() autoComplete?: 'on' | 'off';

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
   * Specifies the time direction of the input content.
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
   * Provide a list of pre-defined options to suggest to the user.
   * The value must be the ID of a <datalist> element in the same document.
   */
  @Prop() list?: string;

  /**
   * Maximum value. Format: 'HH:mm', 'HH:mm:ss'.
   */
  @Prop() max?: string;

  /**
   * Minimum value. Format: 'HH:mm', 'HH:mm:ss.'
   */
  @Prop() min?: string;

  /**
   * Name of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop() name?: string;

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
  @Prop() size?: Size = 'md';

  /**
   * Value of step given in seconds with a scaling factor of 1000 (milliseconds). Default value is 60 (seconds).
   */
  @Prop() step?: number;

  /**
   * The value of the time input.
   * Always in 24-hour format that includes leading zeros: HH:mm, regardless of input format which is likely to be selected based on user's locale (or by the user agent).
   * If time includes seconds the format is always HH:mm:ss.
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
        'ModusWcTimeInput: aria-label is required for accessibility.'
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
          aria-label={this.ariaLabel}
          aria-required={this.required}
          autocomplete={this.autoComplete}
          class={this.getClasses()}
          dir={this.inputDir}
          disabled={this.disabled}
          id={this.inputId}
          list={this.list}
          max={this.max}
          min={this.min}
          name={this.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          readonly={this.readOnly}
          required={this.required}
          tabIndex={this.inputTabIndex}
          type="time"
          value={this.value}
        />
      </Host>
    );
  }
}
