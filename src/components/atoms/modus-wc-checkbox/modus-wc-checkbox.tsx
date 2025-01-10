import {
  Component,
  Element,
  Event as StencilEvent,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

import { convertPropsToClasses } from './modus-wc-checkbox.tailwind';
import { DaisySize } from '../../types';

/**
 * A customizable checkbox component.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-checkbox',
  styleUrl: 'modus-wc-checkbox.scss',
  shadow: false,
})
export class ModusWcCheckbox {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The ID of the element that describes the checkbox. */
  @Prop() ariaDescribedby?: string;

  /** The aria-labelledby attribute for usage with a label. */
  @Prop() ariaLabelledby?: string;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** The disabled state of the checkbox. */
  @Prop() disabled?: boolean = false;

  /** The indeterminate state of the checkbox. */
  @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

  /** Specifies the text direction of the input content. */
  @Prop() inputDir?: '' | 'ltr' | 'rtl' | 'auto';

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** The tabindex of the input. */
  @Prop() inputTabIndex?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string = '';

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the input. */
  @Prop() size?: DaisySize = 'md';

  /** The value of the checkbox. */
  @Prop({ mutable: true, reflect: true }) value: boolean = false;

  /** Emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Emitted when the input gains focus. */
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
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcCheckbox: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = 'Checkbox';
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-checkbox'];

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
          aria-describedby={this.ariaDescribedby}
          aria-disabled={this.disabled}
          aria-label={this.el.ariaLabel}
          aria-labelledby={this.ariaLabelledby}
          checked={this.value}
          class={this.getClasses()}
          dir={this.inputDir}
          disabled={this.disabled}
          id={this.inputId}
          name={this.name}
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
