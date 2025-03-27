import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-text-input.tailwind';
import {
  AutocompleteTypes,
  IInputFeedbackProp,
  ModusSize,
  TextFieldTypes,
} from '../types';
import { Attributes, inheritAriaAttributes, inheritAttributes } from '../utils';
import { ClearIcon, SearchIcon } from './modus-wc-text-input.icons';

/**
 * A customizable input component used to create text inputs with types.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-text-input',
  styleUrl: 'modus-wc-text-input.scss',
  shadow: false,
})
export class ModusWcTextInput {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Controls automatic capitalization in inputted text. */
  @Prop() autoCapitalize?:
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters';

  /** Hint for form autofill feature. */
  @Prop() autoComplete?: AutocompleteTypes;

  /** Controls automatic correction in inputted text. Support by browser varies. */
  @Prop() autoCorrect?: 'on' | 'off';

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Aria label for the clear icon button. */
  @Prop() clearAriaLabel?: string = 'Clear text';

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** A hint to the browser for which enter key to display. */
  @Prop() enterkeyhint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';

  /** Feedback to render below the input. */
  @Prop() feedback?: IInputFeedbackProp;

  /** Show the clear button within the input field. */
  @Prop() includeClear?: boolean = false;

  /** Show the search icon within the input field. */
  @Prop() includeSearch?: boolean = false;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents.
   * This allows a browser to display an appropriate virtual keyboard.
   */
  @Prop() inputMode:
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url' = 'text';

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** Maximum length (number of characters) of value. */
  @Prop() maxLength?: number;

  /** Minimum length (number of characters) of value. */
  @Prop() minLength?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** Pattern the value must match to be valid */
  @Prop() pattern?: string;

  /** Text that appears in the form control when it has no value set. */
  @Prop() placeholder?: string = '';

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /** Type of form control. */
  @Prop() type?: TextFieldTypes = 'text';

  /** The value of the control. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = this.placeholder || 'Text input';
    }

    this.inheritedAttributes = {
      ...inheritAriaAttributes(this.el),
      ...inheritAttributes(this.el, ['spellcheck']),
    };
  }

  private getClasses(): string {
    const classList = [
      'modus-wc-input',
      'modus-wc-w-full',
      'modus-wc-flex',
      'modus-wc-items-center',
      'modus-wc-gap-1',
    ];

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

  private handleClearText = (event: MouseEvent | KeyboardEvent) => {
    this.value = '';
    this.inputChange.emit(event as unknown as InputEvent);
  };

  private handleFocus = (event: FocusEvent) => {
    this.inputFocus.emit(event);
  };

  private handleInput = (event: InputEvent) => {
    this.value = (event.target as HTMLInputElement).value;
    this.inputChange.emit(event);
  };

  private shouldIncludeClear(): boolean {
    return (
      !!this.includeClear && !this.disabled && !this.readOnly && !!this.value
    );
  }

  render() {
    const showClear = this.shouldIncludeClear();

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
        <label class={this.getClasses()}>
          {this.includeSearch && <SearchIcon />}
          <input
            aria-placeholder={this.placeholder}
            aria-required={this.required}
            autocapitalize={this.autoCapitalize}
            autocomplete={this.autoComplete}
            autocorrect={this.autoCorrect}
            class="modus-wc-grow"
            disabled={this.disabled}
            enterkeyhint={this.enterkeyhint}
            id={this.inputId}
            inputmode={this.inputMode}
            maxlength={this.maxLength}
            minlength={this.minLength}
            name={this.name}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onInput={this.handleInput}
            pattern={this.pattern}
            placeholder={this.placeholder}
            readonly={this.readOnly}
            required={this.required}
            tabIndex={this.inputTabIndex}
            type={this.type}
            value={this.value}
            {...this.inheritedAttributes}
          />
          {this.includeClear && (
            <div
              class={`modus-wc-clear-icon-container ${showClear ? 'modus-wc-clear-icon-visible' : 'modus-wc-clear-icon-hidden'}`}
            >
              <ClearIcon
                ariaLabel={this.clearAriaLabel!}
                onClear={this.handleClearText}
              />
            </div>
          )}
        </label>
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
