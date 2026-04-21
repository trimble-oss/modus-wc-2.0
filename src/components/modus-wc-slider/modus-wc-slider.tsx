import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-slider.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable slider component
 */
@Component({
  tag: 'modus-wc-slider',
  styleUrl: 'modus-wc-slider.scss',
  shadow: false,
})
export class ModusWcSlider {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** When true, renders two thumbs for selecting a range between minValue and maxValue. */
  @Prop() dualRange?: boolean = false;

  /** The disabled state of the slider. */
  @Prop() disabled?: boolean = false;

  /** The ID of the input element. */
  @Prop() inputId?: string;

  /** The tabindex of the input. */
  @Prop() inputTabIndex?: number;

  /** The text to display within the label. */
  @Prop() label?: string;

  /** The maximum bound of the slider track. */
  @Prop() max?: number = 100;

  /** The minimum bound of the slider track. */
  @Prop() min?: number = 0;

  /** The upper value for dual-range mode. */
  @Prop({ mutable: true, reflect: true }) maxValue?: number;

  /** The lower value for dual-range mode. */
  @Prop({ mutable: true, reflect: true }) minValue?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  @Prop() name?: string = '';

  /** A value is required for the form to be submittable. */
  @Prop() required?: boolean = false;

  /** The size of the input. */
  @Prop() size?: ModusSize = 'md';

  /** The increment of the slider. */
  @Prop() step?: number;

  /** The value of the slider (single-range mode). */
  @Prop({ mutable: true, reflect: true }) value: number = 0;

  /** Emitted when the input loses focus. */
  @StencilEvent() inputBlur!: EventEmitter<FocusEvent>;

  /** Emitted when the input value changes. */
  @StencilEvent() inputChange!: EventEmitter<InputEvent>;

  /** Emitted when the input gains focus. */
  @StencilEvent() inputFocus!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Slider';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);

    if (this.dualRange) {
      const rangeMin = this.min ?? 0;
      const rangeMax = this.max ?? 100;
      if (this.minValue === undefined) this.minValue = rangeMin;
      if (this.maxValue === undefined) this.maxValue = rangeMax;
    }
  }

  private getClasses(extra?: string): string {
    const classList = ['modus-wc-range'];

    const propClasses = convertPropsToClasses({ size: this.size });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (extra) classList.push(extra);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getDualRangeInputClasses(): string {
    const classList = ['modus-wc-range', 'modus-wc-dual-range-input'];

    const propClasses = convertPropsToClasses({ size: this.size });

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
    const input = event.target as HTMLInputElement | undefined;
    if (input) {
      this.value = Number(input.value);
    }
    this.inputChange.emit(event);
  };

  /** Current value of the single-thumb slider. */
  @Method()
  getSliderValue(): Promise<number> {
    const input = this.el.querySelector<HTMLInputElement>(
      'input[type="range"]:not(.modus-wc-dual-range-input)'
    );
    if (input) {
      return Promise.resolve(Number(input.value));
    }
    return Promise.resolve(this.value);
  }

  /** Min/max when `dual-range`; otherwise `null`. */
  @Method()
  getDualRangeValues(): Promise<{ minValue: number; maxValue: number } | null> {
    if (!this.dualRange) {
      return Promise.resolve(null);
    }
    const rangeMin = this.min ?? 0;
    const rangeMax = this.max ?? 100;
    return Promise.resolve({
      minValue: this.minValue ?? rangeMin,
      maxValue: this.maxValue ?? rangeMax,
    });
  }

  private handleMinInput = (event: InputEvent) => {
    const input = event.target as HTMLInputElement;
    const newMin = Number(input.value);
    const currentMax = this.maxValue ?? this.max ?? 100;
    this.minValue = Math.min(newMin, currentMax);
    input.value = String(this.minValue);
    this.inputChange.emit(event);
  };

  private handleMaxInput = (event: InputEvent) => {
    const input = event.target as HTMLInputElement;
    const newMax = Number(input.value);
    const currentMin = this.minValue ?? this.min ?? 0;
    this.maxValue = Math.max(newMax, currentMin);
    input.value = String(this.maxValue);
    this.inputChange.emit(event);
  };

  private renderDualRange() {
    const rangeMin = this.min ?? 0;
    const rangeMax = this.max ?? 100;
    const total = rangeMax - rangeMin;
    const low =
      total > 0 ? (((this.minValue ?? rangeMin) - rangeMin) / total) * 100 : 0;
    const high =
      total > 0
        ? (((this.maxValue ?? rangeMax) - rangeMin) / total) * 100
        : 100;

    return (
      <div class="modus-wc-dual-range-wrapper">
        <div
          class="modus-wc-dual-range-track"
          style={
            {
              '--range-low': `${low}%`,
              '--range-high': `${high}%`,
            } as Record<string, string>
          }
        ></div>
        <input
          aria-disabled={this.disabled}
          aria-label="Minimum value"
          aria-valuemin={this.min}
          aria-valuemax={this.max}
          aria-valuenow={this.minValue}
          class={this.getDualRangeInputClasses()}
          disabled={this.disabled}
          id={this.inputId}
          max={this.max}
          min={this.min}
          name={this.name ? `${this.name}-min` : undefined}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleMinInput}
          required={this.required}
          step={this.step}
          tabIndex={this.inputTabIndex}
          type="range"
          value={this.minValue}
        />
        <input
          aria-disabled={this.disabled}
          aria-label="Maximum value"
          aria-valuemin={this.min}
          aria-valuemax={this.max}
          aria-valuenow={this.maxValue}
          class={this.getDualRangeInputClasses()}
          disabled={this.disabled}
          id={this.inputId ? `${this.inputId}-max` : undefined}
          max={this.max}
          min={this.min}
          name={this.name ? `${this.name}-max` : undefined}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onInput={this.handleMaxInput}
          required={this.required}
          step={this.step}
          tabIndex={this.inputTabIndex}
          type="range"
          value={this.maxValue}
        />
      </div>
    );
  }

  render() {
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
        {this.dualRange ? (
          this.renderDualRange()
        ) : (
          <input
            aria-disabled={this.disabled}
            class={this.getClasses()}
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
            {...this.inheritedAttributes}
          />
        )}
      </Host>
    );
  }
}
