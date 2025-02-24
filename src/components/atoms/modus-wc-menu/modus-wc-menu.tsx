import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-menu.tailwind';
import { ModusSize, Orientation } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A customizable menu component used to display a list of li elements vertically or horizontally.
 *
 * The component supports a `<slot>` for injecting custom li elements inside the ul.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-menu',
  styleUrl: 'modus-wc-menu.scss',
  shadow: false,
})
export class ModusWcMenu {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Indicates that the menu should have a border. */
  @Prop() bordered?: boolean;

  /** Custom CSS class to apply to the ul element. */
  @Prop() customClass?: string = '';

  /** The orientation of the menu. */
  @Prop() orientation?: Orientation = 'vertical';

  /** The size of the menu. */
  @Prop() size?: ModusSize = 'md';

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcMenu: aria-label is required for accessibility. Using fallback label.'
      );
    }
    this.el.ariaLabel = 'Menu';
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-menu modus-wc-w-full'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      orientation: this.orientation,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getMenuRole = (): string =>
    this.orientation === 'horizontal' ? 'menubar' : 'menu';

  render() {
    return (
      <Host>
        <ul
          aria-orientation={this.orientation}
          class={this.getClasses()}
          role={this.getMenuRole()}
          {...this.inheritedAttributes}
        >
          <slot />
        </ul>
      </Host>
    );
  }
}
