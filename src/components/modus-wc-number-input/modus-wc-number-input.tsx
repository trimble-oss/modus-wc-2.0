import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-number-input.tailwind';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable input component used to create number inputs with types.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-number-input',
  styleUrl: 'modus-wc-number-input.scss',
  shadow: false,
})
export class ModusWcNumberInput {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Hint for form autofill feature. */
  @Prop() autoComplete?: 'on' | 'off';

  /** Indicates that the input should have a border. */
  @Prop() bordered?: boolean = true;

  /** The currency symbol to display. */
  @Prop() currencySymbol?: string = '';

  /** Custom CSS class to apply to the input. */
  @Prop() customClass?: string = '';

  /** Whether the form control is disabled. */
  @Prop() disabled?: boolean = false;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents.
   * This allows a browser to display an appropriate virtual keyboard.
   */
  @Prop() inputMode: 'decimal' | 'none' | 'numeric' = 'numeric';

  /** Determine the control's relative ordering for sequential focus navigation (typically with the Tab key). */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** The input's maximum value. */
  @Prop() max?: number;

  /** The input's minimum value. */
  @Prop() min?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string;

  /** Text that appears in the form control when it has no value set. */
  @Prop() placeholder?: string = '';

  /** Whether the value is editable. */
  @Prop() readOnly?: boolean = false;

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /** The granularity that the value adheres to. */
  @Prop() step?: number;

  /** Type of form control. */
  @Prop() type?: 'number' | 'range' = 'number';

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
      this.el.ariaLabel = this.placeholder || 'Number input';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getSharedClasses(styleList): string {
    const classList = [...styleList];
    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);

    return classList.join(' ');
  }

  private getInputClasses(): string {
    const classList = ['modus-wc-input', 'modus-wc-w-full'];

    if (this.currencySymbol) {
      classList.push('modus-wc-join-item');
    }

    return this.getSharedClasses(classList);
  }

  private getCurrencyClasses(): string {
    const classList = [
      'modus-wc-input-currency',
      'modus-wc-join-item',
      'modus-wc-flex',
      'modus-wc-items-center',
    ];

    return this.getSharedClasses(classList);
  }

  private getWrapperClasses(): string {
    const classList = ['modus-wc-input-container'];

    if (this.currencySymbol) {
      classList.push('modus-wc-join');
      classList.push('modus-wc-flex');
    }

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
      <Host class={this.customClass}>
        {this.label && (
          <modus-wc-input-label
            forId={this.inputId}
            labelText={this.label}
            required={this.required}
            size={this.size}
          />
        )}
        <div class={this.getWrapperClasses()}>
          {this.currencySymbol && (
            <div class={this.getCurrencyClasses()}>{this.currencySymbol}</div>
          )}
          <input
            aria-placeholder={this.placeholder}
            aria-required={this.required}
            autocomplete={this.autoComplete}
            class={this.getInputClasses()}
            disabled={this.disabled}
            id={this.inputId}
            inputmode={this.inputMode}
            max={this.max}
            min={this.min}
            name={this.name}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onInput={this.handleInput}
            placeholder={this.placeholder}
            readonly={this.readOnly}
            required={this.required}
            step={this.step}
            tabIndex={this.inputTabIndex}
            type={this.type}
            value={this.value}
            {...this.inheritedAttributes}
          />
        </div>
      </Host>
    );
  }
}
