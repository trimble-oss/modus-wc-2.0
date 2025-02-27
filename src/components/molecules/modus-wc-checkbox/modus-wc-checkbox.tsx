import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-checkbox.tailwind';
import { DAISY_TO_MODUS_LABEL_SIZE } from '../../constants';
import { DaisySize } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';

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
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** The disabled state of the checkbox. */
  @Prop() disabled?: boolean = false;

  /** The indeterminate state of the checkbox. */
  @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** The tabindex of the input. */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

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

    this.inheritedAttributes = inheritAriaAttributes(this.el);
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
    const labelSize = this.size && DAISY_TO_MODUS_LABEL_SIZE[this.size];

    return (
      <Host class="modus-wc-checkbox-host">
        <input
          aria-checked={this.indeterminate ? 'mixed' : this.value}
          aria-disabled={this.disabled}
          checked={this.value}
          class={this.getClasses()}
          disabled={this.disabled}
          id={this.inputId}
          name={this.name}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          required={this.required}
          tabIndex={this.inputTabIndex}
          type="checkbox"
          {...this.inheritedAttributes}
        />
        {this.label && (
          <modus-wc-input-label
            forId={this.inputId}
            labelText={this.label}
            required={this.required}
            size={labelSize}
          />
        )}
      </Host>
    );
  }
}
