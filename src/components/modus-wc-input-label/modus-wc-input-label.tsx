import { Component, Element, h, Host, Prop } from '@stencil/core';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable input label component.
 *
 * The component supports a `<slot>` for injecting additional custom content inside the label, such as icons or formatted text.
 */
@Component({
  tag: 'modus-wc-input-label',
  styleUrl: 'modus-wc-input-label.scss',
  shadow: false,
})
export class ModusWcInputLabel {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The `for` attribute of the label, matching the `id` of the associated input. */
  @Prop() forId?: string;

  /** Additional classes for custom styling. */
  @Prop() customClass?: string = '';

  /** The text to display within the label. */
  @Prop() labelText?: string;

  /** Whether the label indicates a required field. */
  @Prop() required?: boolean = false;

  /** The size of the label. */
  @Prop() size?: ModusSize = 'md';

  /** The text rendered beneath the label. */
  @Prop() subLabelText?: string;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses = (): string => {
    const classList = ['modus-wc-input-label'];

    // The order CSS classes are added matters to CSS specificity
    if (this.size) classList.push(`modus-wc-input-label-size-${this.size}`);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  };

  render() {
    return (
      <Host class="modus-wc-input-label-host">
        <label
          class={this.getClasses()}
          htmlFor={this.forId}
          {...this.inheritedAttributes}
        >
          {this.labelText}
          {this.required && (
            <span aria-hidden="true" class="required-indicator">
              {/* Non-breaking space */}
              {'\u00A0*'}
            </span>
          )}
          {this.subLabelText && (
            <div class="modus-wc-input-label-sublabel">{this.subLabelText}</div>
          )}
          <slot />
        </label>
      </Host>
    );
  }
}
