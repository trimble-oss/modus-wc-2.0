import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-time-input.tailwind';
import { IInputFeedbackProp, ModusSize } from '../types';
import { generateRandomId } from '../utils';
import { Attributes, inheritAriaAttributes } from '../utils';

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
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Hint for form autofill feature. */
  @Prop() autoComplete?: 'on' | 'off';

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /** The options to display in the time input dropdown. Options must be in `HH:mm` or `HH:mm:ss` format. */
  @Prop() datalistOptions: string[] = [];

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** Feedback to render below the input. */
  @Prop() feedback?: IInputFeedbackProp;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /**
   * ID of a `<datalist>` element that contains pre-defined time options.
   * The value must be the ID of a `<datalist>` element in the same document.
   */
  @Prop({ mutable: true }) datalistId?: string;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** Maximum value. Format: `HH:mm`, `HH:mm:ss`. */
  @Prop() max?: string;

  /** Minimum value. Format: `HH:mm`, `HH:mm:ss.`*/
  @Prop() min?: string;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /**
   * Displays the time input format as `HH:mm:ss` if `true`.
   * Internally sets the `step` to 1 second.
   * If a `step` value is provided, it will override this attribute.
   */
  @Prop() showSeconds?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /**
   * Specifies the granularity that the `value` must adhere to.
   * Value of step given in seconds. Default value is 60 seconds.
   * Overrides the `seconds` attribute if both are provided.
   */
  @Prop() step?: number;

  /**
   * The value of the time input.
   * Always in 24-hour format that includes leading zeros:
   * `HH:mm` or `HH:mm:ss`, regardless of input format which is likely
   * to be selected based on user's locale (or by the user agent).
   * If time includes seconds the format is always `HH:mm:ss`.
   */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<Event>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Time input';
    }

    // if no datalistId value provided, use internal datalist id to enable time options
    if (!this.datalistId) {
      this.datalistId = this.internalDatalistId;
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-time-input', 'modus-wc-input', 'modus:w-full'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      feedback: this.feedback,
      readOnly: this.readOnly,
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

  private handleInput = (event: Event) => {
    this.inputChange.emit(event);
  };

  /*
   * The ID of the internal <datalist> element. Unique to each instance of the time input component.
   * This is used as the `datalistId` id when `datalistOptions` are provided.
   */
  private readonly internalDatalistId = `modus-wc-datalist-${generateRandomId(10)}`;

  /*
   * Conditionally renders the datalist element with the time options.
   * If no time options are provided or the datalistId prop is not the default,
   * the datalist element will not be rendered (returns `null`).
   */
  private renderDatalist(): HTMLElement | null {
    if (
      this.datalistOptions.length === 0 ||
      this.datalistId !== this.internalDatalistId
    ) {
      return null;
    }

    return (
      <datalist id={this.internalDatalistId}>
        {this.datalistOptions.map((time) => (
          <option value={time} />
        ))}
      </datalist>
    );
  }

  render() {
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
          aria-required={this.required}
          autocomplete={this.autoComplete}
          class={this.getClasses()}
          disabled={this.disabled}
          id={this.inputId}
          list={this.datalistId}
          max={this.max}
          min={this.min}
          name={this.name}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          readonly={this.readOnly}
          required={this.required}
          step={this.step || this.showSeconds ? 1 : 60}
          tabIndex={this.inputTabIndex}
          type="time"
          value={this.value}
          {...this.inheritedAttributes}
        />
        {this.renderDatalist()}
        {this.feedback && (
          <modus-wc-input-feedback
            level={this.feedback.level}
            message={this.feedback.message}
            size={this.size}
          />
        )}
      </Host>
    );
  }
}
