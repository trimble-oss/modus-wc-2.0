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
import { CancelCircleSolidIcon } from '../../icons/cancel-circle-solid.icon';
import { ModusSize } from '../types';
import { Attributes, inheritAriaAttributes, KEY } from '../utils';

/**
 * A customizable chip component used to display information in a compact area.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-chip',
  styleUrl: 'modus-wc-chip.scss',
  shadow: false,
})
export class ModusWcChip {
  private inheritedAttributes: Attributes = {};

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

  /** The label to display in the chip. */
  @Prop() label?: string = '';

  /** Whether to show the close icon on right side of the chip. */
  @Prop() showRemove?: boolean = false;

  /** The size of the chip. */
  @Prop() size?: ModusSize = 'md';

  /** The variant of the chip. */
  @Prop() variant?: 'filled' | 'outline' = 'filled';

  /** Event emitted when the chip is clicked or activated via keyboard. */
  @Event() chipClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the close chip icon button is clicked. */
  @Event() chipRemove!: EventEmitter<MouseEvent | KeyboardEvent>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = this.label || 'Chip';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (
      !this.disabled &&
      (event.key === KEY.Enter || event.key === KEY.Space)
    ) {
      event.preventDefault();
      this.chipClick.emit(event);
    }
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    if (!this.disabled && event.key === KEY.Escape) {
      event.preventDefault();
      this.chipRemove.emit(event);
    }
  };

  private handleChipClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.chipClick.emit(event);
    }
  };

  private handleChipRemove = (event: MouseEvent) => {
    if (!this.disabled) {
      this.chipRemove.emit(event);
    }
  };

  private getClasses(): string {
    const classList: string[] = ['modus:chip', 'modus:btn'];

    const propClasses = convertPropsToClasses({
      active: this.active,
      disabled: this.disabled,
      hasError: this.hasError,
      size: this.size,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <button
          aria-disabled={this.disabled}
          class={this.getClasses()}
          disabled={this.disabled}
          onClick={this.handleChipClick}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          tabIndex={0}
          type="button"
          {...this.inheritedAttributes}
        >
          <slot />
          {this.label && <span class="modus:chip-label">{this.label}</span>}
          {this.showRemove && (
            <CancelCircleSolidIcon
              className="modus:chip-remove-icon"
              onClick={this.handleChipRemove}
            />
          )}
        </button>
      </Host>
    );
  }
}
