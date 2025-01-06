import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-button.tailwind';
import { ModusSize } from '../../types';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

/**
 * A customizable button component used to create buttons with different sizes, variants, and types.
 *
 * Note: for buttons with icons you must follow the guide on  modus icon usage in our storybook documentation.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-button',
  styleUrl: 'modus-wc-button.scss',
  shadow: false,
})
export class ModusWcButton {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /**
   * The color variant of the button.
   */
  @Prop() color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger' =
    'primary';

  /**
   * Custom CSS class to apply to the button element.
   */
  @Prop() customClass?: string = '';

  /**
   * If true, the button will be disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If true, the button will take the full width of its container.
   */
  @Prop() fullWidth?: boolean = false;

  /**
   * Takes the icon name and shows the icon aligned to the left of the button text.
   */
  @Prop() iconLeft?: string;

  /**
   * Takes the icon name and renders an icon-only button.
   */
  @Prop() iconOnly?: string;

  /**
   * Takes the icon name and shows the icon aligned to the right of the button text.
   */
  @Prop() iconRight?: string;

  /**
   * The text label displayed on the button.
   */
  @Prop() label?: string;

  /**
   * If true, the button will be in a pressed state (for toggle buttons).
   */
  @Prop() pressed?: boolean = false;

  /**
   * The size of the button.
   */
  @Prop() size: ModusSize = 'md';

  /**
   * The type of the button.
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * The variant of the button.
   */
  @Prop() variant: 'borderless' | 'filled' | 'outlined' = 'filled';

  /**
   * Event emitted when the button is clicked or activated via keyboard.
   */
  @Event() buttonClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcButton: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = this.label || 'Button';
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-btn'];
    const propClasses = convertPropsToClasses({
      color: this.color,
      disabled: this.disabled,
      fullWidth: this.fullWidth,
      size: this.size,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  };

  // @ts-expect-error: TODO fixes linting issue, test thoroughly
  @Listen('keydown')
  private handleKeyDown = (event: KeyboardEvent) => {
    if (!this.disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.buttonClick.emit(event);
    }
  };

  private renderButtonContent() {
    if (this.iconOnly) {
      console.log('iconOnly', this.iconOnly);
      return <ModusWcIcon name={this.iconOnly} />;
    } else if (this.iconLeft || this.iconRight) {
      console.log('iconLeft', this.iconLeft);
      console.log('iconRight', this.iconRight);
      return (
        <Fragment>
          {this.iconLeft && (
            <span>
              <ModusWcIcon name={this.iconLeft} />
            </span>
          )}
          <span>{this.label}</span>
          {this.iconRight && (
            <span>
              <ModusWcIcon name={this.iconRight} />
            </span>
          )}
        </Fragment>
      );
    }
    return this.label ? <span>{this.label}</span> : <span></span>;
  }

  render() {
    const ariaPressed = this.pressed ? 'true' : undefined;

    return (
      <Host>
        <button
          class={this.getClasses()}
          aria-label={this.el.ariaLabel}
          aria-pressed={ariaPressed}
          disabled={this.disabled}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          tabIndex={this.disabled ? -1 : 0}
          type={this.type}
        >
          {this.renderButtonContent()}
        </button>
      </Host>
    );
  }
}
