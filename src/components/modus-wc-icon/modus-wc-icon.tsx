import { Component, Element, h, Host, Prop } from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { DaisySize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import { getModusIconClassName, resolveIconSlug } from './resolve-icon';

/**
 * A customizable icon component used to render Modus icons.
 *
 * <b>This component requires Modus icons to be installed in the host application. See [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs) for steps.</b>
 */
@Component({
  tag: 'modus-wc-icon',
  styleUrl: 'modus-wc-icon.scss',
  shadow: false,
})
export class ModusWcIcon {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the i element. */
  @Prop() customClass?: string = '';

  /** Indicates that the icon is decorative. When true, sets aria-hidden to hide the icon from screen readers. */
  @Prop() decorative?: boolean = true;

  /**
   * The icon name. Accepts legacy 1.0 snake_case names, kebab-case aliases,
   * and native 2.0 kebab slugs from `@trimble-oss/modus-icons-css`.
   */
  @Prop() name!: string;

  /** The icon size, can be "sm", "md", "lg" (a custom size can be specified in CSS). This adjusts the font size for the icon. */
  @Prop() size?: DaisySize = 'md';

  /** The icon variant, can be "outlined" or "solid". */
  @Prop() variant?: 'outlined' | 'solid';

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    if (!this.decorative && !this.el.ariaLabel) {
      this.el.ariaLabel = `${this.name} icon`;
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getResolvedSlug(): string | undefined {
    return resolveIconSlug(this.name);
  }

  private getClasses(resolvedSlug?: string): string {
    const classList: string[] = [];

    if (resolvedSlug) {
      classList.push(getModusIconClassName(resolvedSlug, this.variant));
      classList.push('modus-wc-icon');
    } else {
      classList.push('modus-wc-icon');

      if (this.variant === 'outlined') {
        classList.push('modus-icons-outlined');
      } else if (this.variant === 'solid') {
        classList.push('modus-icons-solid');
      } else {
        classList.push('modus-icons');
      }
    }

    classList.push(`modus-wc-icon--${this.size}`);

    if (this.customClass) {
      classList.push(this.customClass);
    }

    return classList.join(' ');
  }

  render() {
    const resolvedSlug = this.getResolvedSlug();
    const iconClass = resolvedSlug
      ? getModusIconClassName(resolvedSlug, this.variant)
      : undefined;
    const maskImage = iconClass ? `var(--${iconClass})` : undefined;
    const ariaHidden = this.decorative ? 'true' : null;
    const role = this.decorative ? undefined : 'img';

    return (
      <Host class="modus-wc-flex modus-wc-items-center">
        <i
          key={`${resolvedSlug ?? this.name ?? ''}-${this.variant ?? 'outlined'}`}
          aria-hidden={ariaHidden}
          aria-label={this.decorative ? null : this.el.ariaLabel}
          class={this.getClasses(resolvedSlug)}
          role={role}
          style={
            maskImage ? { maskImage, webkitMaskImage: maskImage } : undefined
          }
          tabindex={-1}
          {...this.inheritedAttributes}
        >
          {resolvedSlug ? null : this.name}
        </i>
      </Host>
    );
  }
}
