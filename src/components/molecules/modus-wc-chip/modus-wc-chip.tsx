import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
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

  /** Whether to show the check icon on left side of the chip. */
  @Prop() showCheck?: boolean = false;

  /** Whether to show the close icon on right side of the chip. */
  @Prop() showClose?: boolean = false;

  /** The size of the chip. */
  @Prop() size?: ModusSize = 'md';

  /** The variant of the chip. */
  @Prop() variant?: 'filled' | 'outline' = 'filled';

  /** Event emitted when the chip is clicked or activated via keyboard. */
  @Event() chipClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the close chip icon button is clicked. */
  @Event() closeClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  private handleKeyDown = (event: KeyboardEvent) => {
    if (!this.disabled && (event.code === 'Enter' || event.code === 'Space')) {
      event.preventDefault();
      this.chipClick.emit(event);
    }
  };

  private handleKeyup = (event: KeyboardEvent) => {
    if (!this.disabled && event.code === 'Escape') {
      event.preventDefault();
      this.closeClick.emit(event);
    }
  };

  private handleChipClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.chipClick.emit(event);
    }
  };

  private handleCloseClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.closeClick.emit(event);
    }
  };

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
      disabled: this.disabled,
      hasError: this.hasError,
      size: this.size,
      variant: this.variant,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private SolidCancelIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="mi-solid mi-cancel-circle modus-wc-chip-icon"
      onClick={this.handleCloseClick}
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m4.3 14.3a.996.996 0 0 1-1.41 0L12 13.41 9.11 16.3a.996.996 0 1 1-1.41-1.41L10.59 12 7.7 9.11A.996.996 0 1 1 9.11 7.7L12 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41" />
    </svg>
  );

  private SolidCheckIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="mi-solid mi-check modus-wc-chip-icon"
      viewBox="0 0 24 24"
    >
      <path d="M9 18c-.26 0-.51-.1-.71-.29l-4-4A.996.996 0 1 1 5.7 12.3l3.29 3.29 9.29-9.29a.996.996 0 1 1 1.41 1.41l-10 10c-.2.2-.45.29-.71.29Z" />
    </svg>
  );

  render() {
    return (
      <Host>
        <button
          aria-disabled={this.disabled ? 'true' : undefined}
          aria-label={this.el.ariaLabel}
          class={this.getClasses()}
          disabled={this.disabled}
          onClick={this.handleChipClick}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyup}
          tabIndex={0}
          type="button"
        >
          {this.imageUrl ? (
            <modus-wc-avatar
              alt={this.el.ariaLabel || 'chip avatar'}
              aria-label={this.el.ariaLabel || 'chip avatar'}
              class="modus-wc-chip-avatar-container"
              custom-class={`modus-wc-chip-avatar ${this.disabled && 'modus-wc-chip-avatar--disabled'}`}
              img-src={this.imageUrl}
            ></modus-wc-avatar>
          ) : this.showCheck ? (
            this.SolidCheckIcon
          ) : null}
          {this.label && <span class="modus-wc-chip-label">{this.label}</span>}
          <slot />
          {this.showClose && this.SolidCancelIcon}
        </button>
      </Host>
    );
  }
}
