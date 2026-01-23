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
import { CloseSolidIcon } from '../../icons/close-solid.icon';
import { SearchSolidIcon } from '../../icons/search-solid.icon';
import { handleShadowDOMStyles } from '../base-component';
import {
  AutocompleteTypes,
  IInputFeedbackProp,
  ModusSize,
  TextFieldTypes,
} from '../types';
import {
  Attributes,
  generateElementId,
  inheritAriaAttributes,
  inheritAttributes,
} from '../utils';

/**
 * A customizable input component used to create text inputs with types.
 *
 * The component supports a `<slot>` for injecting additional custom content inside the input, such as icons or formatted text.
 */
@Component({
  tag: 'modus-wc-text-input',
  styleUrl: 'modus-wc-text-input.scss',
  shadow: false,
})
export class ModusWcTextInput {
  private inheritedAttributes: Attributes = {};
  private generatedId: string = generateElementId();

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

  /** Event emitted when the clear button is clicked. */
  @StencilEvent() clearClick!: EventEmitter<void>;

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = this.placeholder || 'Text input';
    }

    this.inheritedAttributes = {
      ...inheritAriaAttributes(this.el),
      ...inheritAttributes(this.el, ['spellcheck', 'inputmode']),
    };

    if (
      !this.el.hasAttribute('inputmode') &&
      !this.inheritedAttributes.inputmode
    ) {
      this.el.setAttribute('inputmode', 'text');
    }
  }

  private getClasses(): string {
    const classList = [
      'modus-wc-text-input',
      'modus-wc-input',
      'modus-wc-w-full',
      'modus-wc-flex',
      'modus-wc-items-center',
      'modus-wc-gap-1',
    ];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      disabled: this.disabled,
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
    this.clearClick.emit();
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
    const effectiveId = this.inputId || this.generatedId;
    const hasCustomIcon = !!this.el.querySelector('[slot="custom-icon"]');

    return (
      <Host>
        {this.label && (
          <modus-wc-input-label
            forId={effectiveId}
            labelText={this.label}
            required={this.required}
            size={this.size}
          />
        )}
        <label class={this.getClasses()}>
          {hasCustomIcon ? (
            <div class="modus-wc-text-input-icon modus-wc-text-input-icon-custom">
              <slot name="custom-icon" />
            </div>
          ) : (
            this.includeSearch && (
              <SearchSolidIcon className="modus-wc-text-input-icon modus-wc-text-input-icon-search" />
            )
          )}
          <input
            aria-required={this.required}
            autocapitalize={this.autoCapitalize}
            autocomplete={this.autoComplete}
            autocorrect={this.autoCorrect}
            class="modus-wc-grow"
            disabled={this.disabled}
            enterkeyhint={this.enterkeyhint}
            id={effectiveId}
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
              <CloseSolidIcon
                ariaLabel={this.clearAriaLabel}
                className="modus-wc-text-input-icon modus-wc-text-input-icon-clear"
                decorative={false}
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
