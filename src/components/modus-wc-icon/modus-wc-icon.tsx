import { Component, Element, h, Host, Prop } from '@stencil/core';
import { DaisySize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable icon component used to render Modus icons.
 *
 * <b>This component requires Modus icons to be installed in the host application. See [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs) for steps.</b>
 *
 * <b>For custom icons:</b> Use the default slot to pass any icon content (Connect icons, SVGs, etc.). The component automatically preserves icon font families.
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

  /** Custom CSS class to apply to the icon element. */
  @Prop() customClass?: string = '';

  /** Indicates that the icon is decorative. When true, sets aria-hidden to hide the icon from screen readers. */
  @Prop() decorative?: boolean = true;

  /** The icon name, should match the CSS class in the icon font. */
  @Prop() name!: string;

  /** The icon size, can be "sm", "md", "lg" (a custom size can be specified in CSS). This adjusts the font size for the icon. */
  @Prop() size?: DaisySize = 'md';

  componentWillLoad() {
    if (!this.decorative && !this.el.ariaLabel) {
      this.el.ariaLabel = this.name ? `${this.name} icon` : 'icon';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-icon modus-icons'];

    // The order CSS classes are added matters to CSS specificity
    classList.push(`modus-wc-icon--${this.size}`);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const ariaHidden = this.decorative ? 'true' : null;
    const role = this.decorative ? undefined : 'img';

    return (
      <Host class={'modus-wc-flex modus-wc-items-center'}>
        {this.name ? (
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
        ) : (
          // Slot content for custom icons when no name prop
          <span
            aria-hidden={ariaHidden}
            aria-label={this.decorative ? null : this.el.ariaLabel}
            class={this.getClasses()}
            role={role}
            tabindex={-1}
            {...this.inheritedAttributes}
          >
            <slot></slot>
          </span>
        )}
      </Host>
    );
  }
}
