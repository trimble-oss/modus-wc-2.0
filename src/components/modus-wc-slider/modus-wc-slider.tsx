import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-slider.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable slider component.
 *
 * Dual-range mode renders a single container with two custom thumb elements
 * (role="slider") and hidden inputs for form submission. This avoids the
 * interaction and accessibility problems of two overlapping native range inputs.
 */
@Component({
  tag: 'modus-wc-slider',
  styleUrl: 'modus-wc-slider.scss',
  shadow: false,
})
export class ModusWcSlider {
  private inheritedAttributes: Attributes = {};

  /** Which thumb is currently being dragged. */
  @State() private dragging: 'min' | 'max' | null = null;

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

  /** The upper bound of the slider track. */
  @Prop() max?: number = 100;

  /** The lower bound of the slider track. */
  @Prop() min?: number = 0;

  /** The upper selected value in dual-range mode. */
  @Prop({ mutable: true, reflect: true }) maxValue?: number;

  /** The lower selected value in dual-range mode. */
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

  /** Current value of the single-thumb slider. */
  @Method()
  getSliderValue(): Promise<number> {
    const input = this.el.querySelector<HTMLInputElement>(
      'input[type="range"]'
    );
    return Promise.resolve(input ? Number(input.value) : this.value);
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

  private get minGap(): number {
    return this.step ?? 1;
  }

  private getClasses(): string {
    const classList = ['modus-wc-range'];
    const propClasses = convertPropsToClasses({ size: this.size });
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);
    return classList.join(' ');
  }

  private getDualWrapperClasses(): string {
    const classList = ['modus-wc-dual-range-wrapper'];
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
    const input = event.target as HTMLInputElement;
    this.value = Number(input.value);
    this.inputChange.emit(event);
  };

  // ─── Pointer drag ────────────────────────────────────────────────────────────

  private handleMinPointerDown = (event: PointerEvent) => {
    if (this.disabled) return;
    event.preventDefault();
    this.dragging = 'min';
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  private handleMaxPointerDown = (event: PointerEvent) => {
    if (this.disabled) return;
    event.preventDefault();
    this.dragging = 'max';
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  private handlePointerMove = (event: PointerEvent) => {
    if (!this.dragging) return;
    event.preventDefault();
    const newValue = this.getValueFromPointer(event);
    const rangeMin = this.min ?? 0;
    const rangeMax = this.max ?? 100;

    if (this.dragging === 'min') {
      const currentMax = this.maxValue ?? rangeMax;
      this.minValue = Math.max(
        rangeMin,
        Math.min(newValue, currentMax - this.minGap)
      );
    } else {
      const currentMin = this.minValue ?? rangeMin;
      this.maxValue = Math.min(
        rangeMax,
        Math.max(newValue, currentMin + this.minGap)
      );
    }

    this.inputChange.emit(new InputEvent('input'));
  };

  private handlePointerEnd = (event: PointerEvent) => {
    if (!this.dragging) return;
    (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
    this.dragging = null;
  };

  private getValueFromPointer(event: PointerEvent): number {
    const track = this.el.querySelector<HTMLElement>(
      '.modus-wc-dual-range-track-bg'
    );
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const rangeMin = this.min ?? 0;
    const rangeMax = this.max ?? 100;
    const step = this.step ?? 1;
    const pct = Math.max(
      0,
      Math.min(1, (event.clientX - rect.left) / rect.width)
    );
    const raw = rangeMin + pct * (rangeMax - rangeMin);
    return Math.round(raw / step) * step;
  }

  // ─── Keyboard ────────────────────────────────────────────────────────────────

  private handleMinKeyDown = (event: KeyboardEvent) => {
    if (this.disabled) return;
    const step = this.step ?? 1;
    const rangeMin = this.min ?? 0;
    const currentMax = this.maxValue ?? this.max ?? 100;
    let value = this.minValue ?? rangeMin;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        value = Math.max(rangeMin, value - step);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        value = Math.min(currentMax - this.minGap, value + step);
        break;
      case 'Home':
        value = rangeMin;
        break;
      case 'End':
        value = currentMax - this.minGap;
        break;
      case 'PageDown':
        value = Math.max(rangeMin, value - step * 10);
        break;
      case 'PageUp':
        value = Math.min(currentMax - this.minGap, value + step * 10);
        break;
      default:
        return;
    }

    event.preventDefault();
    this.minValue = value;
    this.inputChange.emit(new InputEvent('input'));
  };

  private handleMaxKeyDown = (event: KeyboardEvent) => {
    if (this.disabled) return;
    const step = this.step ?? 1;
    const rangeMax = this.max ?? 100;
    const currentMin = this.minValue ?? this.min ?? 0;
    let value = this.maxValue ?? rangeMax;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        value = Math.max(currentMin + this.minGap, value - step);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        value = Math.min(rangeMax, value + step);
        break;
      case 'Home':
        value = currentMin + this.minGap;
        break;
      case 'End':
        value = rangeMax;
        break;
      case 'PageDown':
        value = Math.max(currentMin + this.minGap, value - step * 10);
        break;
      case 'PageUp':
        value = Math.min(rangeMax, value + step * 10);
        break;
      default:
        return;
    }

    event.preventDefault();
    this.maxValue = value;
    this.inputChange.emit(new InputEvent('input'));
  };

  // ─── Render ──────────────────────────────────────────────────────────────────

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

    const tabIdx = this.disabled ? -1 : (this.inputTabIndex ?? 0);

    return (
      <div
        aria-disabled={this.disabled}
        class={this.getDualWrapperClasses()}
        role="group"
      >
        <div class="modus-wc-dual-range-track-bg" />
        <div
          class="modus-wc-dual-range-fill"
          style={{ left: `${low}%`, width: `${high - low}%` }}
        />

        {/* Min thumb */}
        <div
          aria-label="Minimum value"
          aria-valuemax={this.maxValue ?? rangeMax}
          aria-valuemin={rangeMin}
          aria-valuenow={this.minValue ?? rangeMin}
          aria-valuetext={String(this.minValue ?? rangeMin)}
          class={`modus-wc-dual-range-thumb${this.dragging === 'min' ? ' modus-wc-dual-range-thumb--dragging' : ''}`}
          id={this.inputId}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyDown={this.handleMinKeyDown}
          onPointerCancel={this.handlePointerEnd}
          onPointerDown={this.handleMinPointerDown}
          onPointerMove={this.handlePointerMove}
          onPointerUp={this.handlePointerEnd}
          role="slider"
          style={{ left: `${low}%` }}
          tabIndex={tabIdx}
        />

        {/* Max thumb */}
        <div
          aria-label="Maximum value"
          aria-valuemax={rangeMax}
          aria-valuemin={this.minValue ?? rangeMin}
          aria-valuenow={this.maxValue ?? rangeMax}
          aria-valuetext={String(this.maxValue ?? rangeMax)}
          class={`modus-wc-dual-range-thumb${this.dragging === 'max' ? ' modus-wc-dual-range-thumb--dragging' : ''}`}
          id={this.inputId ? `${this.inputId}-max` : undefined}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onKeyDown={this.handleMaxKeyDown}
          onPointerCancel={this.handlePointerEnd}
          onPointerDown={this.handleMaxPointerDown}
          onPointerMove={this.handlePointerMove}
          onPointerUp={this.handlePointerEnd}
          role="slider"
          style={{ left: `${high}%` }}
          tabIndex={tabIdx}
        />

        {/* Hidden inputs for form submission */}
        <input
          name={this.name ? `${this.name}-min` : undefined}
          type="hidden"
          value={this.minValue}
        />
        <input
          name={this.name ? `${this.name}-max` : undefined}
          type="hidden"
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
