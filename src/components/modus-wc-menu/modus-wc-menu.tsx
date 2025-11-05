import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-menu.tailwind';
import { ModusSize, Orientation } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable menu component used to display a list of li elements vertically or horizontally.
 *
 * The component supports a `<slot>` for injecting custom li elements inside the ul
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

  /** Indicates that this menu is a submenu (dropdown). */
  @Prop() isSubMenu?: boolean;

  /** Event emitted when the menu loses focus. */
  @StencilEvent() menuFocusout!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Menu';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    // For submenus, only add the dropdown class
    if (this.isSubMenu) {
      const classList: string[] = ['modus-wc-menu-dropdown'];
      if (this.customClass) classList.push(this.customClass);
      return classList.join(' ');
    }

    // For regular menus, add all the standard classes
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

  private handleFocusout = (e: FocusEvent) => {
    // Check if the new focus target is still within this menu
    if (!this.el.contains(e.relatedTarget as Node)) {
      // Focus has left the menu entirely
      this.menuFocusout.emit(e);

      // Stop propagation for submenus to prevent double emission
      if (this.isSubMenu) {
        e.stopPropagation();
      }
    }
  };

  private getMenuRole = (): string =>
    this.orientation === 'horizontal' ? 'menubar' : 'menu';

  render() {
    return (
      <Host class={this.isSubMenu ? 'modus-wc-menu-submenu' : undefined}>
        <ul
          aria-orientation={this.orientation}
          class={this.getClasses()}
          onFocusout={this.handleFocusout}
          role={this.getMenuRole()}
          {...this.inheritedAttributes}
        >
          <slot />
        </ul>
      </Host>
    );
  }
}
