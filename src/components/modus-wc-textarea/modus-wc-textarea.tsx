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
import { handleShadowDOMStyles } from '../base-component';
import { IInputFeedbackProp, ModusSize } from '../types';
import {
  assignFeedbackAria,
  Attributes,
  createEffectiveIdResolver,
  inheritAriaAttributes,
  inheritAttributes,
  resolveControlFeedbackAria,
} from '../utils';

/**
 * A customizable textarea component.
 */
@Component({
  tag: 'modus-wc-textarea',
  styleUrl: 'modus-wc-textarea.scss',
  shadow: false,
})
export class ModusWcTextarea {
  private inheritedAttributes: Attributes = {};
  private readonly resolveEffectiveId = createEffectiveIdResolver();
  private textareaEl?: HTMLTextAreaElement;
  private hasScriptedHeight = false;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Controls automatic correction in inputted text. Support by browser varies. */
  @Prop() autoCorrect?: 'on' | 'off';

  /**
   * Grow the textarea height to fit its content, starting from `rows`.
   * Use this instead of Angular CDK `cdkTextareaAutosize`, which measures the host element rather than the inner textarea.
   */
  @Prop() autoResize?: boolean = false;

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the textarea (supports DaisyUI). */
  @Prop() customClass?: string = '';

  /** The disabled state of the textarea. */
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

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** The tabindex of the input. */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** The maximum number of characters allowed in the textarea. */
  @Prop() maxLength?: number;

  /** The minimum number of characters required in the textarea. */
  @Prop() minLength?: number;

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

  /** Whether to display the current character count and maximum length. Only shown when maxLength is set. */
  @Prop() showCharacterCount?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /** The value of the textarea. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    this.inheritedAttributes = {
      ...inheritAriaAttributes(this.el),
      ...inheritAttributes(this.el, ['spellcheck']),
    };
  }

  componentDidRender() {
    this.syncScriptedHeight();
  }

  private getClasses(): string {
    const classList = ['modus-wc-textarea', 'modus-wc-w-full'];
    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      feedback: this.feedback,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.autoResize) classList.push('modus-wc-textarea--auto-resize');
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
    this.value = (event.target as HTMLTextAreaElement).value;
    this.inputChange.emit(event);
  };

  private supportsFieldSizing(): boolean {
    return (
      typeof CSS !== 'undefined' && !!CSS.supports?.('field-sizing', 'content')
    );
  }

  // Fallback for browsers without `field-sizing: content`.
  private syncScriptedHeight() {
    const textarea = this.textareaEl!;

    if (this.autoResize && !this.supportsFieldSizing()) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      this.hasScriptedHeight = true;
    } else if (this.hasScriptedHeight) {
      textarea.style.height = '';
      this.hasScriptedHeight = false;
    }
  }

  private renderFeedback(messageId?: string) {
    return (
      this.feedback && (
        <modus-wc-input-feedback
          level={this.feedback.level}
          message={this.feedback.message}
          messageId={messageId}
          size={this.size}
        />
      )
    );
  }

  private shouldShowCharacterCount(): boolean {
    return !!this.showCharacterCount && typeof this.maxLength === 'number';
  }

  private renderCharacterCount(characterCountId: string) {
    const length = (this.value ?? '').length;
    const atLimit = length >= this.maxLength!;

    return [
      <div
        class={`modus-wc-character-count${atLimit ? ' modus-wc-character-count--limit' : ''}`}
        id={characterCountId}
      >
        {`${length}/${this.maxLength}`}
      </div>,
      <div
        aria-atomic="true"
        aria-live="polite"
        class="modus-wc-sr-only"
        role="status"
      >
        {atLimit ? 'Character limit reached' : ''}
      </div>,
    ];
  }

  render() {
    const showCharacterCount = this.shouldShowCharacterCount();
    const effectiveId = this.resolveEffectiveId(this.inputId);
    const characterCountId = `${effectiveId}-character-count`;
    const feedbackAria = resolveControlFeedbackAria(
      this.feedback,
      effectiveId,
      this.inheritedAttributes,
      {
        extraDescribedBy: showCharacterCount ? characterCountId : undefined,
      }
    );
    const controlAttributes = assignFeedbackAria(
      this.inheritedAttributes,
      feedbackAria.describedBy,
      feedbackAria.ariaInvalid
    );

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
        <textarea
          aria-placeholder={this.placeholder}
          aria-required={this.required}
          autocorrect={this.autoCorrect}
          class={this.getClasses()}
          disabled={this.disabled}
          enterkeyhint={this.enterkeyhint}
          id={effectiveId}
          maxLength={this.maxLength}
          minlength={this.minLength}
          name={this.name}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          placeholder={this.placeholder}
          readonly={this.readonly}
          ref={(el) => (this.textareaEl = el)}
          required={this.required}
          rows={this.rows}
          style={
            this.autoResize && this.rows
              ? { '--modus-wc-textarea-rows': String(this.rows) }
              : undefined
          }
          tabIndex={this.inputTabIndex}
          value={this.value}
          {...controlAttributes}
        />
        {showCharacterCount ? (
          <div class="modus-wc-input-footer">
            {this.renderFeedback(feedbackAria.messageId)}
            {this.renderCharacterCount(characterCountId)}
          </div>
        ) : (
          this.renderFeedback(feedbackAria.messageId)
        )}
      </Host>
    );
  }
}
