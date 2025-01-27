import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-chip.tailwind';
import { DaisyColor, DaisySize } from '../../types';

/**
 * A customizable chip component.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-chip',
  styleUrl: 'modus-wc-chip.scss',
  shadow: false,
})
export class ModusWcChip {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** The color of the chip. */
  @Prop() color?: DaisyColor = 'primary';

  /** The content to display in the chip. */
  @Prop() content: string = '';

  /** Whether the chip is disabled. */
  @Prop() disabled?: boolean = false;

  /** The size of the chip. */
  @Prop() size?: DaisySize = 'md';

  @Prop() variant?: 'default' | 'outline' = 'default';

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcChip: alt and aria-label are required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = this.el.ariaLabel || `chip`;
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-badge'];

    const propClasses = convertPropsToClasses({
      color: this.color,
      size: this.size,
      variant: this.variant,
    });

    // // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <button
          aria-disabled={this.disabled ? 'true' : undefined}
          aria-label={this.el.ariaLabel}
          tabIndex={0}
          type="button"
        >
          <span class={this.getClasses()}>
            <slot name="left" />
            {this.content}
            <slot />
            <slot name="right" />{' '}
          </span>
        </button>
      </Host>
    );
  }
}
