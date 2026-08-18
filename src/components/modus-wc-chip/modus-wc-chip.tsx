import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-chip.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize } from '../types';
import {
  Attributes,
  inheritAriaAttributes,
  isConnectTheme,
  KEY,
} from '../utils';

/**
 * A customizable chip component used to display information in a compact area
 *
 * The component supports a `<slot>` for injecting custom content such as avatar and icons.
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

  /** Whether the chip height can grow and its content can wrap across multiple lines. */
  @Prop() multiline?: boolean = false;

  /** Whether to show the close icon on right side of the chip. */
  @Prop() showRemove?: boolean = false;

  /** The shape of the chip: 'rectangle' (default) or 'circle'. */
  @Prop() shape?: 'rectangle' | 'circle' = 'rectangle';

  /** The size of the chip. */
  @Prop() size?: ModusSize = 'md';

  /** The variant of the chip. */
  @Prop() variant?: 'filled' | 'outline' = 'filled';

  /** Event emitted when the chip is clicked or activated via keyboard. */
  @Event() chipClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the close chip icon button is clicked. */
  @Event() chipRemove!: EventEmitter<MouseEvent | KeyboardEvent>;

  @State() private isConnect = false;

  private themeObserver: MutationObserver | null = null;

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = this.label || 'Chip';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this.isConnect = isConnectTheme();

    if (typeof MutationObserver === 'undefined') {
      return;
    }

    this.themeObserver = new MutationObserver(() => {
      this.isConnect = isConnectTheme();
    });

    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  }

  disconnectedCallback() {
    this.themeObserver?.disconnect();
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
    const classList: string[] = ['modus-wc-chip', 'modus-wc-btn'];

    const propClasses = convertPropsToClasses({
      active: this.active,
      disabled: this.disabled,
      hasError: this.hasError,
      shape: this.shape,
      size: this.size,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.multiline) classList.push('modus-wc-chip-multiline');
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
          {this.label && <span class="modus-wc-chip-label">{this.label}</span>}
          {this.showRemove && (
            <modus-wc-icon
              custom-class="modus-wc-chip-remove-icon"
              name={this.isConnect ? 'cancel_circle' : 'close'}
              onClick={this.handleChipRemove}
              variant={this.isConnect ? 'solid' : undefined}
            ></modus-wc-icon>
          )}
        </button>
      </Host>
    );
  }
}
