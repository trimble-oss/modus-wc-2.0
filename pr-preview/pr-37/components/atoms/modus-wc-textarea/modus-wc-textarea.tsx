import {
  h,
  Component,
  Event as StencilEvent,
  EventEmitter,
  Host,
  Prop,
} from '@stencil/core';

/**
 * A customizable textarea component.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-textarea',
  styleUrl: 'modus-wc-textarea.scss',
  shadow: false,
})
export class ModusWcTextarea {
  /**
   * The ID of the element that describes the textarea.
   */
  @Prop() ariaDescribedby?: string;

  /**
   * Indicates whether the textarea has an invalid input.
   */
  @Prop() ariaInvalidTextarea?: 'grammar' | 'spelling' | 'true' | 'false' =
    'false';

  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Custom CSS class to apply to the textarea (supports DaisyUI).
   */
  @Prop() customClass: string = '';

  /**
   * Specifies the text direction of the textarea content.
   */
  @Prop() dir: '' | 'ltr' | 'rtl' | 'auto' = '';

  /**
   * The disabled state of the textarea.
   */
  @Prop() disabled: boolean = false;

  /**
   * The ID of the textarea element.
   */
  @Prop() id: string = '';

  /**
   * The maximum number of characters allowed in the textarea.
   */
  @Prop() maxLength?: number;

  /**
   * The name of the textarea.
   */
  @Prop() name: string = '';

  /**
   * The placeholder text for the textarea.
   */
  @Prop() placeholder: string = '';

  /**
   * The readonly state of the textarea.
   */
  @Prop() readonly: boolean = false;

  /**
   * The required state of the textarea.
   */
  @Prop() required: boolean = false;

  /**
   * The number of visible text lines for the textarea.
   */
  @Prop() rows?: number;

  /**
   * Whether the element may be checked for spelling errors.
   * A hint for the browser, not a guarantee.
   */
  @Prop() spellcheck: boolean = true;

  /**
   * The tabindex of the textarea.
   */
  @Prop() tabIndex: number = 0;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /**
   * Emitted when the textarea loses focus.
   */
  @StencilEvent() blur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the textarea value changes.
   */
  @StencilEvent() change!: EventEmitter<Event>;

  /**
   * Emitted when the textarea gains focus.
   */
  @StencilEvent() focus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcTextarea: ariaLabel is required for accessibility.');
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
        <textarea
          aria-describedby={this.ariaDescribedby}
          aria-invalid={this.ariaInvalidTextarea}
          aria-label={this.ariaLabel || this.placeholder}
          aria-placeholder={this.placeholder}
          aria-required={this.required}
          class={{
            'modus-wc-textarea': true,
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
          rows={this.rows}
          spellcheck={this.spellcheck}
          tabIndex={this.tabIndex}
          value={this.value}
        />
      </Host>
    );
  }
}
