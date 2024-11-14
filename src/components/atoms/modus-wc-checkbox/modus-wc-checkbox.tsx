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
  /**
   * The ID of the element that describes the checkbox.
   */
  @Prop() ariaDescribedby?: string;

  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * The aria-labelledby attribute for usage with a label.
   */
  @Prop() ariaLabelledby?: string;

  /**
   * Specifies the text direction of the checkbox content.
   */
  @Prop() checkboxDir?: '' | 'ltr' | 'rtl' | 'auto';

  /**
   * The ID of the checkbox element.
   */
  @Prop() checkboxId?: string;

  /**
   * The tabindex of the checkbox.
   */
  @Prop() checkboxTabIndex?: number;

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass: string = '';

  /**
   * The disabled state of the checkbox.
   */
  @Prop() disabled?: boolean = false;

  /**
   * The indeterminate state of the checkbox.
   */
  @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

  /**
   * The name of the checkbox.
   */
  @Prop() name?: string = '';

  /**
   * The required state of the checkbox.
   */
  @Prop() required?: boolean = false;

  /**
   * The size of the input.
   */
  @Prop() size?: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Indicates whether the checkbox is checked or not.
   */
  @Prop({ mutable: true, reflect: true }) value: boolean = false;

  /**
   * Emitted when the checkbox loses focus.
   */
  @StencilEvent() checkboxBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the checkbox value changes.
   */
  @StencilEvent() checkboxChange!: EventEmitter<Event>;

  /**
   * Emitted when the checkbox gains focus.
   */
  @StencilEvent() checkboxFocus!: EventEmitter<FocusEvent>;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  componentDidRender() {
    const checkbox = this.el.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    if (checkbox) {
      checkbox.indeterminate = this.indeterminate;
    }
  }

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcCheckbox: aria-label is required for accessibility.'
      );
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
    this.checkboxBlur.emit(event);
  };

  private handleChange = (event: Event) => {
    this.checkboxChange.emit(event);
  };

  private handleFocus = (event: FocusEvent) => {
    this.checkboxFocus.emit(event);
  };

  render() {
    return (
      <Host aria-label={this.ariaLabel} role="checkbox">
        <input
          aria-checked={this.indeterminate ? 'mixed' : this.value.toString()}
          aria-describedby={this.ariaDescribedby}
          aria-disabled={this.disabled}
          aria-labelledby={this.ariaLabelledby}
          checked={this.value}
          class={this.getClasses()}
          dir={this.checkboxDir}
          disabled={this.disabled}
          id={this.checkboxId}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          required={this.required}
          tabIndex={this.checkboxTabIndex}
          type="checkbox"
        />
      </Host>
    );
  }
}
