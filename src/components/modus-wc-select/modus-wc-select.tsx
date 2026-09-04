import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-select.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { INPUT_SIZE_TO_LABEL_SIZE } from '../constants';
import { IInputFeedbackProp, ModusSize } from '../types';
import {
  Attributes,
  createEffectiveIdResolver,
  inheritAriaAttributes,
} from '../utils';

export interface ISelectOption {
  /** Whether the option is disabled and cannot be selected. */
  disabled?: boolean;
  /** Whether the option is hidden from the dropdown list. */
  hidden?: boolean;
  /** The text to render in the option. */
  label: string;
  /** The value of the option. */
  value: string;
}

/**
 * A customizable select component used to pick a value from a list of options
 */
@Component({
  tag: 'modus-wc-select',
  styleUrl: 'modus-wc-select.scss',
  shadow: false,
})
export class ModusWcSelect {
  private inheritedAttributes: Attributes = {};
  private readonly resolveEffectiveId = createEffectiveIdResolver();

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** Feedback to render below the input. */
  @Prop() feedback?: IInputFeedbackProp;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** The options to display in the select dropdown. */
  @Prop({ mutable: true, reflect: true }) options: ISelectOption[] = [];

  /** Whether the select is read only. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize | 'xs' | 'xl' = 'md';

  /** The value of the control. */
  @Prop({ mutable: true, reflect: true }) value: string = '';

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
      this.el.ariaLabel = 'Select';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-select', 'modus-wc-w-full'];

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

  private handleInput = (event: InputEvent) => {
    if (this.readOnly) {
      this.revertSelectValue(event.target as HTMLSelectElement);
      return;
    }

    this.value = (event.target as HTMLSelectElement).value;
    this.inputChange.emit(event);
  };

  private handleChange = (event: Event) => {
    if (!this.readOnly) {
      return;
    }

    this.revertSelectValue(event.target as HTMLSelectElement);
  };

  private revertSelectValue(select: HTMLSelectElement) {
    select.value = this.value;
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (!this.readOnly) {
      return;
    }

    if (
      event.key === 'ArrowDown' ||
      event.key === 'ArrowUp' ||
      event.key === ' ' ||
      event.key === 'Enter' ||
      (event.key.length === 1 &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey)
    ) {
      event.preventDefault();
    }
  };

  private handleMouseDown = (event: MouseEvent) => {
    if (!this.readOnly) {
      return;
    }

    // Prevent opening the native dropdown while still allowing focus on click.
    event.preventDefault();
    (event.currentTarget as HTMLSelectElement).focus();
  };

  private getLabelSize(): ModusSize {
    return INPUT_SIZE_TO_LABEL_SIZE[this.size ?? 'md'];
  }

  render() {
    const effectiveId = this.resolveEffectiveId(this.inputId);

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
        <select
          aria-readonly={this.readOnly ? 'true' : undefined}
          class={this.getClasses()}
          disabled={this.disabled}
          id={effectiveId}
          name={this.name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          onKeyDown={this.handleKeyDown}
          onMouseDown={this.handleMouseDown}
          required={this.required}
          tabindex={this.inputTabIndex}
          {...this.inheritedAttributes}
        >
          {this.options.map((option) => (
            <option
              disabled={option.disabled}
              hidden={option.hidden}
              selected={option.value === this.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
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
