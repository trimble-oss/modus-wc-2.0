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
import { ModusSize, Orientation } from '../../types';

export interface IMenuItem {
  disabled?: boolean;
  label: string;
  value: string;
}

/**
 * A customizable menu component used to display a list of links vertically or horizontally.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-menu',
  styleUrl: 'modus-wc-menu.scss',
  shadow: false,
})
export class ModusWcMenu {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The active menu item value, used to show an item as selected. */
  @Prop() activeItemValue?: string;

  /** Indicates that the menu should have a border. */
  @Prop() bordered?: boolean = true;

  /** Custom CSS class to apply to the ul element. */
  @Prop() customClass?: string = '';

  /** The items to display in the menu. */
  @Prop({ mutable: true, reflect: true }) items: IMenuItem[] = [];

  /** The menu title, rendered as the first item (disabled). */
  @Prop() menuTitle?: string;

  /** The orientation of the menu. */
  @Prop() orientation?: Orientation = 'vertical';

  /** The size of the menu. */
  @Prop() size?: ModusSize = 'md';

  /** Event emitted when a menu item is selected. */
  @StencilEvent() itemSelect!: EventEmitter<IMenuItem>;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcMenu: aria-label is required for accessibility. Using fallback label.'
      );
    }
    this.el.ariaLabel = 'Menu';
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

  private getItemClasses(item: IMenuItem): string {
    const classList: string[] = [];

    if (item.disabled) classList.push('modus-wc-disabled');

    return classList.join(' ');
  }

  private getAnchorClasses(item: IMenuItem): string {
    const classList: string[] = [];

    if (this.isActiveItem(item)) classList.push('modus-wc-active');

    return classList.join(' ');
  }

  private getMenuRole = (): string =>
    this.orientation === 'horizontal' ? 'menubar' : 'menu';

  private handleItemSelect = (item: IMenuItem) => {
    // 'pointer-events: none' should keep disabled items from triggering itemSelect
    this.itemSelect.emit(item);
  };

  private isActiveItem = (item: IMenuItem): boolean =>
    item.value === this.activeItemValue;

  render() {
    return (
      <Host>
        <ul
          aria-label={this.el.ariaLabel}
          aria-orientation={this.orientation}
          class={this.getClasses()}
          role={this.getMenuRole()}
        >
          {this.menuTitle && (
            <li class="modus-wc-menu-title" role="presentation">
              {this.menuTitle}
            </li>
          )}
          {this.items.map((item) => (
            <li
              aria-current={this.isActiveItem(item)}
              aria-disabled={item.disabled}
              class={this.getItemClasses(item)}
              role="menuitem"
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                class={this.getAnchorClasses(item)}
                href="javascript:void(0);"
                onClick={() => this.handleItemSelect(item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
