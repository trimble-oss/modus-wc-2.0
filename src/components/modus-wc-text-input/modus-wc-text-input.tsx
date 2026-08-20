import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-text-input.tailwind';
import { CloseSolidIcon } from '../../icons/close-solid.icon';
import { SearchSolidIcon } from '../../icons/search-solid.icon';
import { handleShadowDOMStyles } from '../base-component';
import { INPUT_SIZE_TO_LABEL_SIZE } from '../constants';
import {
  AutocompleteTypes,
  DaisySize,
  IInputFeedbackProp,
  ModusSize,
  TextFieldTypes,
} from '../types';
import {
  Attributes,
  createEffectiveIdResolver,
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
  private readonly resolveEffectiveId = createEffectiveIdResolver();

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
  @Prop() size?: ModusSize | 'xs' | 'xl' = 'md';

  /** Type of form control. */
  @Prop() type?: TextFieldTypes = 'text';

  /** The value of the control. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  @State() private passwordVisible = false;

  /** Event emitted when the clear button is clicked. */
  @StencilEvent() clearClick!: EventEmitter<void>;

  /** Event emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Event emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Event emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  @Watch('type')
  @Watch('disabled')
  @Watch('readOnly')
  protected onPasswordToggleGuardsChange() {
    // Remask when the toggle is unavailable so the value cannot stay exposed.
    if (this.type !== 'password' || this.disabled || this.readOnly) {
      this.passwordVisible = false;
    }
  }

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

  componentDidRender() {
    // modus-wc-button only inherits host ARIA in componentWillLoad; keep the
    // focused inner button label in sync when visibility / props change.
    this.syncPasswordToggleAriaLabel();
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

  private handlePasswordToggle = () => {
    this.passwordVisible = !this.passwordVisible;
  };

  private getEffectiveInputType(): TextFieldTypes {
    if (this.type === 'password') {
      return this.passwordVisible ? 'text' : 'password';
    }

    return this.type ?? 'text';
  }

  private getPasswordToggleAriaLabel(): string {
    return this.passwordVisible ? 'Hide password' : 'Show password';
  }

  /** Maps input `size` to atom scale for the password-toggle button and its icon. */
  private getPasswordToggleSize(): DaisySize {
    switch (this.size) {
      case 'xs':
        return 'xs';
      case 'sm':
        return 'xs';
      case 'lg':
        return 'md';
      case 'xl':
        return 'lg';
      default:
        return 'sm';
    }
  }

  private getLabelSize(): ModusSize {
    return INPUT_SIZE_TO_LABEL_SIZE[this.size ?? 'md'];
  }

  private syncPasswordToggleAriaLabel() {
    const button = this.el.querySelector(
      '.modus-wc-text-input-password-toggle button'
    );
    if (!button) {
      return;
    }

    button.setAttribute('aria-label', this.getPasswordToggleAriaLabel());
  }

  private shouldRenderClear(): boolean {
    return !!this.includeClear && this.type !== 'password';
  }

  private shouldIncludeClear(): boolean {
    return (
      this.shouldRenderClear() &&
      !this.disabled &&
      !this.readOnly &&
      !!this.value
    );
  }

  private shouldShowPasswordToggle(): boolean {
    return this.type === 'password' && !this.disabled && !this.readOnly;
  }

  render() {
    const showClear = this.shouldIncludeClear();
    const showPasswordToggle = this.shouldShowPasswordToggle();
    const effectiveId = this.resolveEffectiveId(this.inputId);
    const hasCustomIcon = !!this.el.querySelector('[slot="custom-icon"]');

    return (
      <Host>
        {this.label && (
          <modus-wc-input-label
            forId={effectiveId}
            labelText={this.label}
            required={this.required}
            size={this.getLabelSize()}
          />
        )}
        <label class={this.getClasses()}>
          {hasCustomIcon ? (
            <div class="modus-wc-text-input-icon modus-wc-text-input-icon-custom">
              <slot name="custom-icon" />
            </div>
          ) : this.type === 'password' ? (
            <modus-wc-icon
              class="modus-wc-text-input-icon modus-wc-text-input-icon-password"
              decorative
              name="key"
              variant="solid"
              size={this.getPasswordToggleSize()}
            />
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
            type={this.getEffectiveInputType()}
            value={this.value}
            {...this.inheritedAttributes}
          />
          {showPasswordToggle && (
            <div class="modus-wc-password-toggle-container">
              <modus-wc-button
                aria-label={this.getPasswordToggleAriaLabel()}
                class="modus-wc-text-input-password-toggle"
                color="tertiary"
                pressed={this.passwordVisible}
                shape="square"
                size={this.getPasswordToggleSize()}
                variant="borderless"
                onButtonClick={this.handlePasswordToggle}
              >
                <modus-wc-icon
                  decorative
                  name={
                    this.passwordVisible ? 'visibility_off' : 'visibility_on'
                  }
                  size={this.getPasswordToggleSize()}
                />
              </modus-wc-button>
            </div>
          )}
          {this.shouldRenderClear() && (
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
            size={this.getLabelSize()}
          />
        )}
      </Host>
    );
  }
}
