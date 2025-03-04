import { Component, Element, Fragment, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-progress.tailwind';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A customizable progress component used to show the progress of a task or show the passing of time.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-progress',
  styleUrl: 'modus-wc-progress.scss',
  shadow: false,
})
export class ModusWcProgress {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the progress element. */
  @Prop() customClass?: string = '';

  /** The indeterminate state of the progress component. */
  @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

  /** A text label to render within the progress bar */
  @Prop() label?: string;

  /** The progress component's maximum value. */
  @Prop() max?: number = 100;

  /** The value of the progress component. */
  @Prop({ mutable: true, reflect: true }) value: number = 0;

  /** The variant of the progress component. */
  @Prop() variant?: 'default' | 'radial' = 'default';

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcProgress: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = 'Progress';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = [];

    const propClasses = convertPropsToClasses({
      variant: this.variant,
      indeterminate: this.indeterminate,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getPercentageValue(): number {
    const safeValue = Math.min(Math.max(0, this.value), this.max!);
    return (safeValue / this.max!) * 100;
  }

  render() {
    const progressAriaAttributes = this.indeterminate
      ? { 'aria-hidden': 'true' }
      : {
          'aria-valuenow': this.value,
          'aria-valuemin': 0,
          'aria-valuemax': this.max,
        };

    const valueAttributes = this.indeterminate
      ? {}
      : { max: this.max, value: this.value };

    return (
      <Host class="modus-wc-progress-container">
        {this.variant === 'default' ? (
          <Fragment>
            <progress
              class={this.getClasses()}
              {...valueAttributes}
              {...progressAriaAttributes}
              {...this.inheritedAttributes}
            />
            {this.label && (
              <span class={`modus-wc-progress-label ${this.customClass}`}>
                {this.label}
              </span>
            )}
          </Fragment>
        ) : (
          <div
            class={this.getClasses()}
            style={{ '--value': `${this.getPercentageValue()}` }}
            role="progressbar"
            {...progressAriaAttributes}
            {...this.inheritedAttributes}
          >
            <span class="modus-wc-radial-progress-label">{this.label}</span>
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
