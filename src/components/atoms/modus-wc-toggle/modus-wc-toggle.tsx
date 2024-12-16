import {
  Component,
  Element,
  Event as StencilEvent,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-toggle.tailwind';
import { DaisySize } from '../../types';

/**
 * A customizable checkbox component.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-toggle',
  styleUrl: 'modus-wc-toggle.scss',
  shadow: false,
})
export class ModusWcToggle {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /**
   * The aria-describedby attribute matching the ID of the element that describes the checkbox (accessibility).
   * This property name is reserved by HTMLElement and omitted in the React integration.
   */
  @Prop({ mutable: true }) a11yDescribedby?: string;

  /**
   * The aria-label attribute used to define a string that labels the current element (accessibility).
   * This property name is reserved by HTMLElement and omitted in the React integration.
   */
  @Prop({ mutable: true }) a11yLabel!: string;

  /**
   * The aria-labelledby attribute for usage with a label (accessibility).
   * This property name is reserved by HTMLElement and omitted in the React integration.
   */
  @Prop({ mutable: true }) a11yLabelledby?: string;

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass?: string = '';

  /**
   * The disabled state of the toggle.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The indeterminate state of the toggle.
   */
  @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

  /**
   * Specifies the text direction of the input content.
   */
  @Prop() inputDir?: '' | 'ltr' | 'rtl' | 'auto';

  /**
   * The ID of the input element.
   */
  @Prop() inputId?: string;

  /**
   * The tabindex of the input.
   */
  @Prop() inputTabIndex?: number;

  /**
   * Name of the form control. Submitted with the form as part of a name/value pair.
   */
  @Prop() name?: string = '';

  /**
   * A value is required for the form to be submittable.
   */
  @Prop() required?: boolean = false;

  /**
   * The size of the input.
   */
  @Prop() size?: DaisySize = 'md';

  /**
   * The value of the toggle.
   */
  @Prop({ mutable: true, reflect: true }) value: boolean = false;

  /**
   * Emitted when the input loses focus.
   */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input value changes.
   */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /**
   * Emitted when the input gains focus.
   */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentDidRender() {
    const checkbox = this.el.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    if (checkbox) {
      checkbox.indeterminate = this.indeterminate;
    }
  }

  componentWillLoad() {
    if (!this.a11yLabel) {
      console.warn(
        'ModusWcToggle: a11y-label is required for accessibility. Using fallback label.'
      );
    }
    this.a11yLabel = 'Toggle button';
  }

  private getClasses(): string {
    const classList = ['modus-wc-toggle'];

    const propClasses = convertPropsToClasses({ size: this.size });

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
        <input
          aria-checked={this.indeterminate ? 'mixed' : this.value}
          aria-describedby={this.a11yDescribedby}
          aria-disabled={this.disabled}
          aria-label={this.a11yLabel}
          aria-labelledby={this.a11yLabelledby}
          checked={this.value}
          class={this.getClasses()}
          dir={this.inputDir}
          disabled={this.disabled}
          id={this.inputId}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          required={this.required}
          tabIndex={this.inputTabIndex}
          type="checkbox"
        />
      </Host>
    );
  }
}
