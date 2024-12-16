import {
  Component,
  Event as StencilEvent,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-slider.tailwind';
import { DaisySize } from '../../types';

/**
 * A customizable slider component.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-slider',
  styleUrl: 'modus-wc-slider.scss',
  shadow: false,
})
export class ModusWcSlider {
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
   * The disabled state of the slider.
   */
  @Prop() disabled?: boolean = false;

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
   * The maximum slider value.
   */
  @Prop() max?: number;

  /**
   * The minimum slider value.
   */
  @Prop() min?: number;

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
  @Prop() size?: DaisySize = 'xs';

  /**
   * The increment of the slider.
   */
  @Prop() step?: number;

  /**
   * The value of the slider.
   */
  @Prop({ mutable: true, reflect: true }) value: number = 0;

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

  componentWillLoad() {
    if (!this.a11yLabel) {
      console.warn(
        'ModusWcSlider: a11y-label is required for accessibility. Using fallback label.'
      );
    }
    this.a11yLabel = 'Slider';
  }

  private getClasses(): string {
    const classList = ['modus-wc-range'];

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
          aria-describedby={this.a11yDescribedby}
          aria-disabled={this.disabled}
          aria-label={this.a11yLabel}
          aria-labelledby={this.a11yLabelledby}
          class={this.getClasses()}
          dir={this.inputDir}
          disabled={this.disabled}
          id={this.inputId}
          max={this.max}
          min={this.min}
          name={this.name}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleInput}
          required={this.required}
          step={this.step}
          tabIndex={this.inputTabIndex}
          type="range"
          value={this.value}
        />
      </Host>
    );
  }
}
