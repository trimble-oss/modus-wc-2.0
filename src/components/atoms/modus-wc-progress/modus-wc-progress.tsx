import { Component, h, Host, Prop } from '@stencil/core';
// import { convertPropsToClasses } from './modus-wc-progress.tailwind';

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
  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Custom CSS class to apply to the progress element.
   */
  @Prop() customClass?: string = '';

  /**
   * The indeterminate state of the progress component.
   */
  @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false;

  /**
   * The progress component's maximum value.
   */
  @Prop() max?: number = 100;

  /**
   * The value of the progress component.
   */
  @Prop({ mutable: true, reflect: true }) value: number = 0;

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcProgress: aria-label is required for accessibility.'
      );
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-progress modus-wc-w-full'];

    // const propClasses = convertPropsToClasses();

    // The order CSS classes are added matters to CSS specificity
    // if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const valueAttributes = this.indeterminate
      ? { 'aria-hidden': 'true' }
      : {
          max: this.max,
          value: this.value,
          'aria-valuenow': this.value,
          'aria-valuemin': 0,
          'aria-valuemax': this.max,
        };

    return (
      <Host>
        <progress
          aria-label={this.ariaLabel}
          class={this.getClasses()}
          {...valueAttributes}
        />
      </Host>
    );
  }
}
