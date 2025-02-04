import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-badge.tailwind';
import { ModusSize } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';

const ALERT_COLORS = ['success', 'warning', 'danger'];

/**
 * A customizable badge component used to create badges with different sizes, types, and colors.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-badge',
  styleUrl: 'modus-wc-badge.scss',
  shadow: false,
})
export class ModusWcBadge {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The color variant of the badge. */
  @Prop() color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger' = 'primary';

  /** The content to display inside the badge. For 'counter' type, this should be a number. */
  @Prop() content!: string;

  /** Custom CSS class to apply to the span element. */
  @Prop() customClass: string = '';

  /** The size of the badge. */
  @Prop() size: ModusSize = 'md';

  /** The variant of the badge. */
  @Prop() variant: 'counter' | 'filled' | 'text' = 'filled';

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcBadge: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = this.content ? `Badge ${this.content}` : 'Badge';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-badge'];
    const propClasses = convertPropsToClasses({
      color: this.color,
      size: this.size,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const isAlert = ALERT_COLORS.includes(this.color);

    return (
      <Host>
        <span
          class={this.getClasses()}
          role={isAlert ? 'alert' : 'status'}
          tabindex={-1}
          {...this.inheritedAttributes}
        >
          {this.content}
        </span>
      </Host>
    );
  }
}
