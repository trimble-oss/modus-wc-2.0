import { Component, Element, h, Host, Prop } from '@stencil/core';
import { DaisySize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import { ensureModusIconFontAliases } from './font-alias.util';

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

  /** The icon name, should match the CSS class in the icon font. */
  @Prop() name!: string;

  /** The icon size, can be "sm", "md", "lg" (a custom size can be specified in CSS). This adjusts the font size for the icon. */
  @Prop() size?: DaisySize = 'md';

  /**
   * Icon set to use when both outlined and solid font sets are available.
   * This does not load fonts; it only provides a CSS hook to switch font-family.
   * The host app must load both font CSS and provide the appropriate font-family
   * names through CSS variables. See docs for details.
   */
  @Prop() variant?: 'outlined' | 'solid' = 'outlined';

  componentWillLoad() {
    if (!this.decorative && !this.el.ariaLabel) {
      this.el.ariaLabel = `${this.name} icon`;
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
    // Best-effort: ensure alias font-families are available when variant is used
    if (this.variant) {
      void ensureModusIconFontAliases();
    }
  }

  private getClasses(): string {
    const classList = ['modus-wc-icon'];
    const hasLigatureName = !!this.name && this.name.trim().length > 0;

    // Only apply Modus ligature classes when a ligature name is provided.
    // This keeps custom icon fonts (class-based) working without interference.
    if (hasLigatureName) {
      classList.push('modus-icons');

      // Help hosts that ship a dedicated class per set (if present in CSS)
      if (this.variant === 'outlined') classList.push('modus-icons-outlined');
      if (this.variant === 'solid') classList.push('modus-icons-solid');
    }

    // The order CSS classes are added matters to CSS specificity
    classList.push(`modus-wc-icon--${this.size}`);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const ariaHidden = this.decorative ? 'true' : null;
    const role = this.decorative ? undefined : 'img';

    return (
      <Host class="modus-wc-flex modus-wc-items-center" variant={this.variant}>
        <i
          aria-hidden={ariaHidden}
          aria-label={this.decorative ? null : this.el.ariaLabel}
          class={this.getClasses()}
          role={role}
          tabindex={-1}
          {...this.inheritedAttributes}
        >
          {this.name}
        </i>
      </Host>
    );
  }
}
