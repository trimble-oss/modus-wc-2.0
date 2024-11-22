import {
  Component,
  h,
  Prop,
  Event as StencilEvent,
  EventEmitter,
} from '@stencil/core';

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
export class ModusWCDate {
  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * The ID of the input element.
   */
  @Prop() inputId?: string;

  /**
   * The name attribute for the date input field.
   */
  @Prop() name?: string;

  /**
   * Placeholder text for the date input.
   */
  @Prop() placeholder?: string;

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
      console.warn('ModusWcDate: aria-label is required for accessibility.');
    }
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
      <div class="form-control w-full max-w-xs">
        <label class="label" htmlFor={this.name}>
          <span class="label-text">Select a date</span>
        </label>
        <input
          class="input input-bordered w-full"
          id={this.inputId}
          name={this.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          placeholder={this.placeholder}
          type="date"
          value={this.value}
        />
      </div>
    );
  }
}
