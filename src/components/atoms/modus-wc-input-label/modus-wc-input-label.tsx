import { Component, h, Host, Prop } from '@stencil/core';

/**
 * A customizable input label component.
 *
 * The component supports a `<slot>` for injecting additional custom content inside the label, such as icons or formatted text.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-input-label',
  styleUrl: 'modus-wc-input-label.scss',
  shadow: false,
})
export class ModusWcInputLabel {
  /**
   * The `for` attribute of the label, matching the `id` of the associated input.
   * */
  @Prop() forId?: string;

  /**
   * Additional classes for custom styling.
   * */
  @Prop() customClass?: string = '';

  /**
   * Specifies the text direction of the label content.
   */
  @Prop() labelDir?: '' | 'ltr' | 'rtl' | 'auto';

  /**
   * The text to display within the label.
   * */
  @Prop() labelText?: string;

  /**
   * Whether the label indicates a required field.
   * */
  @Prop() required?: boolean = false;

  private getClasses = (): string => {
    const classList = ['modus-wc-input-label'];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  };

  render() {
    return (
      <Host dir={this.labelDir}>
        <label class={this.getClasses()} htmlFor={this.forId}>
          {this.labelText}
          {this.required && (
            <span class="required-indicator" aria-hidden="true">
              {' *'}
            </span>
          )}
          <slot />
        </label>
      </Host>
    );
  }
}
