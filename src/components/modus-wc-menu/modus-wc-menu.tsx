import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-menu.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize, Orientation, SelectionMode } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable menu component used to display a list of li elements vertically or horizontally.
 *
 * The component supports a `<slot>` for injecting custom li elements inside the ul element.
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

  /** The selection mode of the menu. */
  @Prop() selectionMode?: SelectionMode = 'single';

  /** The size of the menu. */
  @Prop() size?: ModusSize = 'md';

  /** Indicates that this menu is a submenu (dropdown). */
  @Prop() isSubMenu?: boolean;

  /** Event emitted when the menu loses focus. */
  @StencilEvent() menuFocusout!: EventEmitter<FocusEvent>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);

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

  private getMenuItems(): HTMLElement[] {
    return Array.from(this.el.querySelectorAll('modus-wc-menu-item')).filter(
      (item) => item.closest('modus-wc-menu') === this.el
    ) as HTMLElement[];
  }

  @Listen('keydown')
  handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

    e.preventDefault();

    const items = this.getMenuItems();
    const focusableItems = items.filter(
      (item) => !(item as HTMLElement & { disabled?: boolean }).disabled
    );

    if (focusableItems.length === 0) return;

    const activeEl = document.activeElement as HTMLElement;
    const currentMenuItem = activeEl?.closest('modus-wc-menu-item');
    const currentIndex = focusableItems.indexOf(currentMenuItem as HTMLElement);

    let nextIndex: number;
    if (e.key === 'ArrowDown') {
      nextIndex =
        currentIndex < focusableItems.length - 1 ? currentIndex + 1 : 0;
    } else {
      nextIndex =
        currentIndex > 0 ? currentIndex - 1 : focusableItems.length - 1;
    }

    const nextLi = focusableItems[nextIndex].querySelector('li');
    if (nextLi) {
      nextLi.focus();
    }
  }

  @Listen('focusout')
  handleFocusout(e: FocusEvent) {
    if (!this.el.contains(e.relatedTarget as Node)) {
      this.menuFocusout.emit(e);

      if (this.isSubMenu) {
        e.stopPropagation();
      }
    }
  }

  private getMenuRole = (): string =>
    this.orientation === 'horizontal' ? 'menubar' : 'menu';

  render() {
    return (
      <Host class={this.isSubMenu ? 'modus-wc-menu-submenu' : undefined}>
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
