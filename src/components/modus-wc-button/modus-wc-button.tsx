import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { DaisySize } from '../types';
import { Attributes, inheritAriaAttributes, KEY } from '../utils';
import { convertPropsToClasses } from './modus-wc-button.tailwind';

/**
 * A customizable button component used to create buttons with different sizes, variants, and types.
 *
 * The component supports a `<slot>` for injecting content within the button, similar to a native HTML button.
 */
@Component({
  tag: 'modus-wc-button',
  styleUrl: 'modus-wc-button.scss',
  shadow: false,
})
export class ModusWcButton {
  private inheritedAttributes: Attributes = {};
  private ariaAttributeObserver?: MutationObserver;
  private originalSetAttribute?: HTMLElement['setAttribute'];
  private originalRemoveAttribute?: HTMLElement['removeAttribute'];

  // These stay on the host so later set/remove is visible to the observer.
  // inheritAriaAttributes would otherwise strip them once in componentWillLoad.
  private readonly hostAriaAttributes = ['aria-current', 'aria-label'] as const;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The color variant of the button. */
  @Prop() color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'danger'
    | 'neutral'
    | 'success' = 'primary';

  /** Custom CSS class to apply to the button element. */
  @Prop() customClass?: string = '';

  /** If true, the button will be disabled. */
  @Prop() disabled?: boolean = false;

  /** If true, the button will take the full width of its container. */
  @Prop() fullWidth?: boolean = false;

  /** If true, the button will be in a pressed state (for toggle buttons). */
  @Prop({ reflect: true }) pressed?: boolean = false;

  /** The shape of the button. */
  @Prop() shape: 'circle' | 'ellipse' | 'rectangle' | 'square' = 'rectangle';

  /** The size of the button. */
  @Prop() size: DaisySize | 'xl' = 'md';

  /** The type of the button. */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /** The variant of the button. */
  @Prop() variant: 'borderless' | 'filled' | 'outlined' = 'filled';

  /** Event emitted when the button is clicked or activated via keyboard. */
  @Event() buttonClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    this.inheritedAttributes = inheritAriaAttributes(this.el, [
      ...this.hostAriaAttributes,
    ]);
  }

  componentDidLoad() {
    this.patchHostAttributeAccessors();
    this.observeHostAriaAttributes();
  }

  disconnectedCallback() {
    this.ariaAttributeObserver?.disconnect();
    this.restoreHostAttributeAccessors();
  }

  // Stencil's test mock-doc does not implement MutationObserver. Patching the
  // host accessors keeps aria-current / aria-label in sync there and in
  // browsers when a parent updates the attribute without a button re-render.
  private patchHostAttributeAccessors(): void {
    this.originalSetAttribute = this.el.setAttribute.bind(this.el);
    this.originalRemoveAttribute = this.el.removeAttribute.bind(this.el);

    this.el.setAttribute = (name: string, value: string) => {
      this.originalSetAttribute!(name, value);
      this.syncObservedHostAria(name);
    };

    this.el.removeAttribute = (name: string) => {
      this.originalRemoveAttribute!(name);
      this.syncObservedHostAria(name);
    };
  }

  private restoreHostAttributeAccessors(): void {
    if (this.originalSetAttribute) {
      this.el.setAttribute = this.originalSetAttribute;
    }

    if (this.originalRemoveAttribute) {
      this.el.removeAttribute = this.originalRemoveAttribute;
    }
  }

  private syncObservedHostAria(attributeName: string): void {
    if (attributeName !== 'aria-current' && attributeName !== 'aria-label') {
      return;
    }

    const innerButton = this.getInnerButton();
    if (!innerButton) {
      return;
    }

    this.syncHostAriaAttribute(innerButton, attributeName);
  }

  private observeHostAriaAttributes(): void {
    if (typeof MutationObserver === 'undefined') {
      return;
    }

    this.ariaAttributeObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName) {
          this.syncObservedHostAria(mutation.attributeName);
        }
      });
    });

    this.ariaAttributeObserver.observe(this.el, {
      attributes: true,
      attributeFilter: [...this.hostAriaAttributes],
    });
  }

  private getInnerButton(): HTMLButtonElement | null {
    return this.el.querySelector('button');
  }

  private syncHostAriaAttribute(
    innerButton: HTMLButtonElement,
    attributeName: string
  ): void {
    if (this.el.hasAttribute(attributeName)) {
      innerButton.setAttribute(
        attributeName,
        this.el.getAttribute(attributeName) as string
      );
    } else {
      innerButton.removeAttribute(attributeName);
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-btn'];
    const propClasses = convertPropsToClasses({
      color: this.color,
      disabled: this.disabled,
      fullWidth: this.fullWidth,
      pressed: this.pressed,
      shape: this.shape,
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
    if (
      !this.disabled &&
      (event.key === KEY.Enter || event.key === KEY.Space)
    ) {
      event.preventDefault();
      this.buttonClick.emit(event);
    }
  };

  render() {
    const ariaPressed = this.pressed ? 'true' : undefined;

    return (
      <Host>
        <button
          class={this.getClasses()}
          aria-pressed={ariaPressed}
          disabled={this.disabled}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          tabIndex={this.disabled ? -1 : 0}
          type={this.type}
          {...this.inheritedAttributes}
          aria-current={this.el.getAttribute('aria-current') ?? undefined}
          aria-label={this.el.getAttribute('aria-label') ?? undefined}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
