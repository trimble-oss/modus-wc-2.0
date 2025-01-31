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

  /** Active state of chip. */
  @Prop() active?: boolean = false;

  /** The color of the chip. */
  @Prop() color?: DaisyColor = 'primary';

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Whether the chip is disabled. */
  @Prop() disabled?: boolean = false;

  /** Whether the chip has an error. */
  @Prop() hasError?: boolean = false;

  /** The label to display in the chip. */
  @Prop() label?: string = '';

  /** The size of the chip. */
  @Prop() size?: DaisySize = 'md';

  /** The variant of the chip. */
  @Prop() variant?: 'filled' | 'outline' = 'filled';

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcChip: alt and aria-label are required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = this.el.ariaLabel || `chip`;
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-chip', 'modus-wc-btn'];

    const propClasses = convertPropsToClasses({
      active: this.active,
      color: this.color,
      disabled: this.disabled,
      hasError: this.hasError,
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
          class={this.getClasses()}
          tabIndex={0}
          type="button"
        >
          <slot name="left" />
          {this.label}
          <slot />
          <slot name="right" />
        </button>
      </Host>
    );
  }
}
