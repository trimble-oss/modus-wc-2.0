import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-tree-menu.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { ModusSize, Orientation, SelectionMode } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable tree menu component used to display a list of modus-wc-tree-item elements vertically or horizontally.
 *
 * The component supports a `<slot>` for injecting custom modus-wc-tree-item elements inside the ul element.
 */
@Component({
  tag: 'modus-wc-tree-menu',
  styleUrl: 'modus-wc-tree-menu.scss',
  shadow: false,
})
export class ModusWcTreeMenu {
  private inheritedAttributes: Attributes = {};
  private selectedItems: HTMLElement[] = [];

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Indicates that the tree menu should have a border. */
  @Prop() bordered?: boolean;

  /** Custom CSS class to apply to the ul element. */
  @Prop() customClass?: string = '';

  /** The orientation of the tree menu. */
  @Prop() orientation?: Orientation = 'vertical';

  /** The selection mode of the tree menu. */
  @Prop({ reflect: true }) selectionMode?: SelectionMode = 'single';

  @Watch('selectionMode')
  onSelectionModeChange() {
    this.selectedItems = [];
  }

  /** The size of the tree menu. */
  @Prop() size?: ModusSize = 'md';

  /** Indicates that this tree menu is a submenu (dropdown). */
  @Prop() isSubMenu?: boolean;

  /** Event emitted when the tree menu loses focus. */
  @StencilEvent() menuFocusout!: EventEmitter<FocusEvent>;

  /** Event emitted when the selection changes in multiple selection mode. Emits the array of currently selected tree item elements. */
  @StencilEvent() menuSelectionChange!: EventEmitter<{
    selectedItems: HTMLElement[];
  }>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);

    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Tree menu';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    if (this.isSubMenu) {
      const classList: string[] = ['modus-wc-menu-dropdown'];
      if (this.customClass) classList.push(this.customClass);
      return classList.join(' ');
    }

    const classList: string[] = ['modus-wc-menu modus-wc-w-full'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      orientation: this.orientation,
      size: this.size,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getTreeItems(): HTMLElement[] {
    return Array.from(this.el.querySelectorAll('modus-wc-tree-item')).filter(
      (item) => item.closest('modus-wc-tree-menu') === this.el
    ) as HTMLElement[];
  }

  @Listen('itemSelect')
  handleItemSelect(e: CustomEvent<{ value: string; selected?: boolean }>) {
    if (this.selectionMode !== 'multiple') return;

    const item = e.target as HTMLElement;
    const isCurrentlySelected = this.selectedItems.includes(item);

    if (e.detail.selected && !isCurrentlySelected) {
      this.selectedItems = [...this.selectedItems, item];
    } else if (!e.detail.selected && isCurrentlySelected) {
      this.selectedItems = this.selectedItems.filter((i) => i !== item);
    }

    this.menuSelectionChange.emit({ selectedItems: this.selectedItems });
  }

  @Listen('keydown')
  handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

    e.preventDefault();

    const items = this.getTreeItems();
    const focusableItems = items.filter(
      (item) => !(item as HTMLElement & { disabled?: boolean }).disabled
    );

    if (focusableItems.length === 0) return;

    const activeEl = document.activeElement as HTMLElement;
    const currentTreeItem = activeEl?.closest('modus-wc-tree-item');
    const currentIndex = focusableItems.indexOf(currentTreeItem as HTMLElement);

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
      (nextLi as HTMLElement).focus();
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
