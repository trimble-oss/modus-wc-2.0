import {
  h,
  Host,
  Component,
  Event as StencilEvent,
  EventEmitter,
  Prop,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-time-input.tailwind';
import { Size } from '../../types';

let INTERNAL_DATALIST_ID = 'modus-wc-internal-time-options';

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
   * Displays the time input format as `HH:mm:ss` if `true`.
   * Internally sets the `step` to 1 second.
   * If a `step` value is provided, it will override this attribute.
   */
  @Prop() seconds?: boolean = false;

  /**
   * The size of the input.
   */
  @Prop() size?: Size = 'md';

  /**
   * Specifies the granularity that the `value` must adhere to.
   * Value of step given in seconds. Default value is 60 seconds.
   * Overrides the `seconds` attribute if both are provided.
   */
  @Prop() step?: number;

  /**
   * The options to display in the time input dropdown. Time options must be in `HH:mm` or `HH:mm:ss` format.
   */
  @Prop({ mutable: true }) timeOptions: string[] = [];

  /**
   * The value of the time input.
   * Always in 24-hour format that includes leading zeros:
   * `HH:mm` or `HH:mm:ss`, regardless of input format which is likely
   * to be selected based on user's locale (or by the user agent).
   * If time includes seconds the format is always `HH:mm:ss`.
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

  @Watch('timeOptions')
  updateTimeOptions(newTimeOptions: string[]) {
    // TODO: add validation for time options
    this.timeOptions = [...newTimeOptions];
    console.log('Watch() timeOptions:', this.timeOptions);
  }

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcTimeInput: aria-label is required for accessibility.'
      );
    }

    if (!this.list) {
      INTERNAL_DATALIST_ID = `${INTERNAL_DATALIST_ID}-${Math.random().toString(36).substring(2, 11)}`;
      this.list = INTERNAL_DATALIST_ID;
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

  /**
   * Conditionally renders the datalist element with the time options.
   * If no time options are provided or the list prop is not the default,
   * the datalist element will not be rendered.
   * @returns The datalist `HTMLElement` with the time options or `null`.
   */
  private renderDatalist(): HTMLElement | null {
    // if no time options are provided, do not render the datalist element
    if (this.timeOptions?.length === 0) {
      console.log('No time options provided.');
      console.log('timeOptions:', this.timeOptions);
      return null;
    }

    // if the list prop is provided, do not render the default datalist element
    if (this.list !== INTERNAL_DATALIST_ID) {
      console.log('Using list prop.');
      return null;
    }

    console.log('Rendering datalist element with time options.');
    console.log('list:', this.list);
    console.log('timeOptions:', this.timeOptions);

    return (
      <datalist id={INTERNAL_DATALIST_ID}>
        {this.timeOptions.map((time) => (
          <option value={time} />
        ))}
      </datalist>
    );
  }

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
          step={this.step || !!this.seconds ? 1 : 60}
          tabIndex={this.inputTabIndex}
          type="time"
          value={this.value}
        />
        {this.renderDatalist()}
      </Host>
    );
  }
}
