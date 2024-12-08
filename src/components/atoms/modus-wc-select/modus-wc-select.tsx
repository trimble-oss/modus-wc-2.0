import {
  Component,
  Event as StencilEvent,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-select.tailwind';
import { DaisySize } from '../../types';

export interface ISelectOption {
  disabled?: boolean;
  label: string;
  value: string;
}

/**
 * A customizable select component used to pick a value from a list of options.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-select',
  styleUrl: 'modus-wc-select.scss',
  shadow: false,
})
export class ModusWcSelect {
  /**
   * The ID of the element that describes the input.
   */
  @Prop() ariaDescribedby?: string;

  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Indicates that an element should be focused on page load.
   */
  @Prop() autoFocus?: boolean;

  /**
   * Indicates that the input should have a border.
   */
  @Prop() bordered?: boolean = true;

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass?: string = '';

  /**
   * Whether the form control is disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Indicates whether the input has an invalid input.
   */
  @Prop() inputAriaInvalid?: 'true' | 'false';

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
   * Name of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop() name?: string;

  /**
   * The options to display in the select dropdown.
   */
  @Prop({ mutable: true, reflect: true }) options: ISelectOption[] = [];

  /**
   * A value is required for the form to be submittable.
   */
  @Prop() required?: boolean = false;

  /**
   * The size of the input.
   */
  @Prop() size?: DaisySize = 'md';

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
      console.warn('ModusWcSelect: aria-label is required for accessibility.');
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-select', 'modus-wc-w-full'];

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
        <select
          aria-describedby={this.ariaDescribedby}
          aria-invalid={this.inputAriaInvalid}
          aria-label={this.ariaLabel}
          autofocus={this.autoFocus}
          class={this.getClasses()}
          dir={this.inputDir}
          disabled={this.disabled}
          id={this.inputId}
          name={this.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          required={this.required}
          tabindex={this.inputTabIndex}
        >
          {this.options.map((option) => (
            <option
              disabled={option.disabled}
              selected={option.value === this.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </Host>
    );
  }
}
