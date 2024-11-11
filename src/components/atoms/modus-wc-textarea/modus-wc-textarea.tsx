import {
  h,
  Component,
  Event as StencilEvent,
  EventEmitter,
  Host,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-textarea.tailwind';

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
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Indicates that the input should have a border.
   */
  @Prop() bordered?: boolean = true;

  /**
   * Custom CSS class to apply to the textarea (supports DaisyUI).
   */
  @Prop() customClass?: string = '';

  /**
   * The disabled state of the textarea.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If true, the textarea will take the full width of its container.
   */
  @Prop() fullWidth?: boolean = true;

  /**
   * The maximum number of characters allowed in the textarea.
   */
  @Prop() maxLength?: number;

  /**
   * The name of the textarea.
   */
  @Prop() name?: string = '';

  /**
   * The placeholder text for the textarea.
   */
  @Prop() placeholder?: string = '';

  /**
   * The readonly state of the textarea.
   */
  @Prop() readonly?: boolean = false;

  /**
   * The required state of the textarea.
   */
  @Prop() required?: boolean = false;

  /**
   * The number of visible text lines for the textarea.
   */
  @Prop() rows?: number;

  /**
   * The size of the input.
   */
  @Prop() size?: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Indicates whether the textarea has an invalid input.
   */
  @Prop() textareaAriaInvalid?: 'grammar' | 'spelling' | 'true' | 'false';

  /**
   * Specifies the text direction of the textarea content.
   */
  @Prop() textareaDir?: '' | 'ltr' | 'rtl' | 'auto';

  /**
   * The ID of the textarea element.
   */
  @Prop() textareaId?: string;

  /**
   * Whether the element may be checked for spelling errors.
   * A hint for the browser, not a guarantee.
   */
  @Prop() textareaSpellcheck?: boolean;

  /**
   * The tabindex of the textarea.
   */
  @Prop() textareaTabIndex?: number;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /**
   * Emitted when the textarea loses focus.
   */
  @StencilEvent() textareaBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the textarea value changes.
   */
  @StencilEvent() textareaChange!: EventEmitter<Event>;

  /**
   * Emitted when the textarea gains focus.
   */
  @StencilEvent() textareaFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcTextarea: aria-label is required for accessibility.'
      );
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-textarea'];
    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      fullWidth: this.fullWidth,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleBlur = (event: FocusEvent) => {
    this.textareaBlur.emit(event);
  };

  private handleChange = (event: Event) => {
    this.textareaChange.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    this.textareaFocus.emit(event);
  };

  render() {
    return (
      <Host>
        <textarea
          aria-describedby={this.ariaDescribedby}
          aria-invalid={this.textareaAriaInvalid}
          aria-label={this.ariaLabel || this.placeholder}
          aria-placeholder={this.placeholder}
          aria-required={this.required}
          class={this.getClasses()}
          dir={this.textareaDir}
          disabled={this.disabled}
          id={this.textareaId}
          maxLength={this.maxLength}
          name={this.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          rows={this.rows}
          spellcheck={this.textareaSpellcheck}
          tabIndex={this.textareaTabIndex}
          value={this.value}
        />
      </Host>
    );
  }
}
