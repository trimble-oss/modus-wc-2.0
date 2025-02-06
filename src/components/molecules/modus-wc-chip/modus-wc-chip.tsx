import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-chip.tailwind';
import { ModusSize } from '../../types';

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
  /** Reference to the host element. */
  @Element() el!: HTMLElement;

  /** Active state of chip. */
  @Prop() active?: boolean = false;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Whether the chip is disabled. */
  @Prop() disabled?: boolean = false;

  /** Whether the chip has an error. */
  @Prop() hasError?: boolean = false;

  /** The URL of the image to display on left side of the chip. */
  @Prop() imageUrl?: string = '';

  /** The label to display in the chip. */
  @Prop() label?: string = '';

  /** Whether to show the close icon on right side of the chip. */
  @Prop() showClose?: boolean = false;

  /** The size of the chip. */
  @Prop() size?: ModusSize = 'md';

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

  // TODO: pass imageUrl and showClose to convertPropsToClasses in order to get proper styles
  //       for cases when there is either no image or close icon etc...
  private getClasses(): string {
    const classList: string[] = ['modus-wc-chip', 'modus-wc-btn'];

    const propClasses = convertPropsToClasses({
      active: this.active,
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

  private SolidCancelIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="mi-solid mi-cancel-circle modus-wc-chip-close-icon"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41 9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12 7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41" />
    </svg>
  );

  render() {
    return (
      <Host>
        <button
          aria-disabled={this.disabled ? 'true' : undefined}
          aria-label={this.el.ariaLabel}
          class={this.getClasses()}
          tabIndex={0}
          type="button"
          disabled={this.disabled}
        >
          {this.imageUrl && (
            <modus-wc-avatar
              alt={this.el.ariaLabel || 'chip avatar'}
              custom-class={`modus-wc-chip-avatar ${this.disabled && 'modus-wc-chip-avatar--disabled'}`}
              img-src={this.imageUrl}
            ></modus-wc-avatar>
          )}
          <span class="modus-wc-chip-label">{this.label}</span>
          <slot />
          {this.showClose && this.SolidCancelIcon}
        </button>
      </Host>
    );
  }
}
