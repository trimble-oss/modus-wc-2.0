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
import { Attributes, inheritAriaAttributes } from '../../utils';
import { ITreeItemElement } from '../modus-wc-tree-item/modus-wc-tree-item';

/**
 * A wrapper component that provides the ul element for tree items.
 * This component uses the modus-wc-menu structure to wrap tree items in a proper list structure.
 */
@Component({
  tag: 'modus-wc-tree-view',
  styleUrl: 'modus-wc-tree-view.scss',
  shadow: false,
})
export class ModusWcTreeView {
  private inheritedAttributes: Attributes = {};
  private anchorValue: string | null = null;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the ul element. */
  @Prop() customClass?: string = '';

  /** Indicates that this list is a nested sublist. */
  @Prop() isSubList?: boolean = false;

  /** If true, shows the connector line for nested sublists. */
  @Prop() showConnectorLine?: boolean = true;

  /** If true, enables multi-select with Ctrl/Cmd and Shift keys. */
  @Prop() multiSelect?: boolean = false;

  @StencilEvent() itemSelectionChange!: EventEmitter<{
    selectedValues: string[];
  }>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  @Listen('itemSelect')
  handleItemSelect(
    event: CustomEvent<{ value: string; additive: boolean; range: boolean }>
  ) {
    if (this.isSubList) return;

    const target = event.target as HTMLElement;
    if (!target) return;

    const targetItem = target.closest(
      'modus-wc-tree-item'
    ) as ITreeItemElement | null;
    if (!targetItem || targetItem.checkbox) return;

    const allItems = this.getAllTreeItems();
    const targetIndex = allItems.indexOf(targetItem);
    if (targetIndex === -1) return;

    const { additive, range } = event.detail;

    if (this.multiSelect) {
      if (range) {
        if (this.anchorValue === null) {
          // Initialize anchor on first range interaction.
          this.selectSingleItem(allItems, targetItem);
          this.anchorValue = targetItem.value;
        } else {
          const anchorIndex = allItems.findIndex(
            (item) => item.value === this.anchorValue
          );
          if (anchorIndex !== -1) {
            this.selectRange(allItems, anchorIndex, targetIndex, additive);
          } else {
            this.selectSingleItem(allItems, targetItem);
            this.anchorValue = targetItem.value;
          }
        }
      } else if (additive) {
        targetItem.selected = !targetItem.selected;
        this.anchorValue = targetItem.value;
      } else {
        this.selectSingleItem(allItems, targetItem);
        this.anchorValue = targetItem.value;
      }
    } else {
      this.selectSingleItem(allItems, targetItem);
      this.anchorValue = targetItem.value;
    }

    this.emitSelectionChange(allItems);
  }

  private getAllTreeItems(): ITreeItemElement[] {
    return Array.from(
      this.el.querySelectorAll('modus-wc-tree-item')
    ) as ITreeItemElement[];
  }

  private selectSingleItem(
    allItems: ITreeItemElement[],
    targetItem: ITreeItemElement
  ): void {
    allItems.forEach((item) => (item.selected = false));
    targetItem.selected = true;
  }

  private selectRange(
    allItems: ITreeItemElement[],
    anchorIndex: number,
    targetIndex: number,
    additive: boolean
  ): void {
    const start = Math.min(anchorIndex, targetIndex);
    const end = Math.max(anchorIndex, targetIndex);

    if (!additive) {
      allItems.forEach((item) => (item.selected = false));
    }

    for (let i = start; i <= end; i++) {
      if (!allItems[i].disabled) {
        allItems[i].selected = true;
      }
    }
  }

  private emitSelectionChange(allItems: ITreeItemElement[]): void {
    const selectedValues = allItems
      .filter((item) => item.selected)
      .map((item) => item.value);

    this.itemSelectionChange.emit({ selectedValues });
  }

  private getClasses(): string {
    if (this.isSubList) {
      const classList: string[] = ['modus-wc-tree-dropdown'];
      if (!this.showConnectorLine) {
        classList.push('modus-wc-tree-dropdown-no-line');
      }
      if (this.customClass) classList.push(this.customClass);
      return classList.join(' ');
    }

    const classList: string[] = ['modus-wc-menu', 'modus-wc-tree-view'];
    if (this.customClass) classList.push(this.customClass);
    return classList.join(' ');
  }

  render() {
    return (
      <Host class={this.isSubList ? 'modus-wc-tree-submenu' : undefined}>
        <ul
          class={this.getClasses()}
          role={this.isSubList ? 'group' : 'tree'}
          {...this.inheritedAttributes}
        >
          <slot />
        </ul>
      </Host>
    );
  }
}
