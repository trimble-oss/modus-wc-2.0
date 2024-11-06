import { h, Component, Host, Prop } from '@stencil/core';

/**
 * A customizable divider component used to separate content horizontally or vertically.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-divider',
  styleUrl: 'modus-wc-divider.scss',
  shadow: false,
})
export class ModusWcDivider {
  /**
   * The aria-label attribute used for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * The content to display in the divider.
   */
  @Prop() content?: string = '';

  /**
   * Custom CSS class to apply to the outer div.
   */
  @Prop() customClass: string = '';

  /**
   * DaisyUI CSS class to apply to the inner div.
   */
  @Prop() daisyClass: string = '';

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn('ModusWcDivider: aria-label is required for accessibility.');
    }
  }

  render() {
    return (
      <Host>
        <div class={this.customClass}>
          <div
            class={{
              'modus-wc-divider': true,
              [this.daisyClass]: !!this.daisyClass,
            }}
            aria-label={this.ariaLabel}
            role="separator"
          >
            {this.content}
          </div>
        </div>
      </Host>
    );
  }
}
