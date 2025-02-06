import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-textarea.tailwind';
import { DaisySize } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';

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
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the textarea (supports DaisyUI). */
  @Prop() customClass?: string = '';

  /** The disabled state of the textarea. */
  @Prop() disabled?: boolean = false;

  /** Specifies the text direction of the input content. */
  @Prop() inputDir?: '' | 'ltr' | 'rtl' | 'auto';

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /**
   * Whether the element may be checked for spelling errors.
   * A hint for the browser, not a guarantee.
   */
  @Prop() inputSpellcheck?: boolean;

  /** The tabindex of the input. */
  @Prop() inputTabIndex?: number;

  /** The maximum number of characters allowed in the textarea. */
  @Prop() maxLength?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** The placeholder text for the textarea. */
  @Prop() placeholder?: string = '';

  /** The readonly state of the textarea. */
  @Prop() readonly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The number of visible text lines for the textarea. */
  @Prop() rows?: number;

  /** The size of the input. */
  @Prop() size?: DaisySize = 'md';

  /** The value of the textarea. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcTextarea: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = this.placeholder || 'Text area';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-textarea', 'modus-wc-w-full'];
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
        <textarea
          aria-placeholder={this.placeholder}
          aria-required={this.required}
          class={this.getClasses()}
          dir={this.inputDir}
          disabled={this.disabled}
          id={this.inputId}
          maxLength={this.maxLength}
          name={this.name}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          rows={this.rows}
          spellcheck={this.inputSpellcheck}
          tabIndex={this.inputTabIndex}
          value={this.value}
          {...this.inheritedAttributes}
        />
      </Host>
    );
  }
}
