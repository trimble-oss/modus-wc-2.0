import { Component, Element, h, Host, Prop } from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { DaisySize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import { convertPropsToClasses } from './modus-wc-icon.tailwind';
import { getIconKey, getIconMaskStyle, resolveIcon } from './resolve-icon';
import type { IconVersion, ResolvedIcon } from './resolve-icon';

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
   * The icon name. Accepts 1.0 snake_case names, kebab-case aliases,
   * and native 2.0 kebab slugs from `@trimble-oss/modus-icons-css`.
   */
  @Prop() name!: string;

  /** The icon size, can be "sm", "md", "lg" (a custom size can be specified in CSS). This adjusts the font size for the icon. */
  @Prop() size?: DaisySize = 'md';

  /**
   * The Modus Icons version to render. Names with no counterpart in the
   * requested version fall back to the other version.
   */
  @Prop() version?: IconVersion = '1.0';

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

  private getResolvedIcon(): ResolvedIcon {
    return resolveIcon(this.name, this.version);
  }

  private getClasses(resolved: ResolvedIcon): string {
    const classList: string[] = [
      convertPropsToClasses({
        resolved,
        size: this.size,
        variant: this.variant,
      }),
    ];

    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const resolved = this.getResolvedIcon();
    const ariaHidden = this.decorative ? 'true' : null;
    const role = this.decorative ? undefined : 'img';

    return (
      <Host class="modus-wc-flex modus-wc-items-center">
        <i
          key={getIconKey(resolved, this.variant)}
          aria-hidden={ariaHidden}
          aria-label={this.decorative ? null : this.el.ariaLabel}
          class={this.getClasses(resolved)}
          role={role}
          style={getIconMaskStyle(resolved, this.variant)}
          tabindex={-1}
          {...this.inheritedAttributes}
        >
          {resolved.version === '2.0' ? null : resolved.ligature}
        </i>
      </Host>
    );
  }
}
