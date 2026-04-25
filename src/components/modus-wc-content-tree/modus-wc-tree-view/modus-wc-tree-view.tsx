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

  /** If true, enables multi-select with Ctrl/Cmd and Shift keys. When wrapped by `modus-wc-content-tree`, prefer configuring `multiSelect` on the content tree. */
  @Prop() multiSelect?: boolean = false;

  /** Controlled selected values for tree items. When provided, the tree mirrors this selection state. */
  @Prop() selectedValues?: string[];

  /** Emits selected values when tree item selection changes. */
  @StencilEvent() itemSelectionChange!: EventEmitter<{
    selectedValues: string[];
  }>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.syncSelectionFromProp();
  }

  componentDidRender() {
    if (this.selectedValues !== undefined) {
      this.syncSelectionFromProp();
    }
  }

  @Listen('itemSelect')
  handleItemSelect(
    event: CustomEvent<{ value: string; additive: boolean; range: boolean }>
  ) {
    if (this.isSubList) return;
    if (event.detail == null) return;

    const { value, additive, range } = event.detail;
    const allItems = this.getAllTreeItems();
    const currentSelected = new Set(
      this.selectedValues ??
        allItems.filter((i) => i.selected).map((i) => i.value)
    );

    let nextSelected: string[] = [];

    if (!this.multiSelect) {
      nextSelected = [value];
    } else {
      if (range) {
        const targetIndex = allItems.findIndex((i) => i.value === value);
        const anchorIndex = allItems.findIndex(
          (i) => i.value === this.anchorValue
        );

        if (anchorIndex === -1 || targetIndex === -1) {
          nextSelected = [value];
        } else {
          const start = Math.min(anchorIndex, targetIndex);
          const end = Math.max(anchorIndex, targetIndex);

          if (!additive) currentSelected.clear();

          for (let i = start; i <= end; i++) {
            if (!allItems[i].disabled) {
              currentSelected.add(allItems[i].value);
            }
          }

          nextSelected = [...currentSelected];
        }
      } else if (additive) {
        if (currentSelected.has(value)) {
          currentSelected.delete(value);
        } else {
          currentSelected.add(value);
        }

        nextSelected = [...currentSelected];
      } else {
        nextSelected = [value];
      }

      if (!range) {
        this.anchorValue = value;
      }
    }

    const prev =
      this.selectedValues ??
      allItems.filter((i) => i.selected).map((i) => i.value);

    const isSame =
      prev.length === nextSelected.length &&
      prev.every((v) => nextSelected.includes(v));

    if (isSame) return;

    if (this.selectedValues === undefined) {
      this.applySelectionToItems(nextSelected);
    }

    this.itemSelectionChange.emit({
      selectedValues: nextSelected,
    });
  }

  @Watch('selectedValues')
  handleSelectedValuesChange() {
    this.syncSelectionFromProp();
  }

  private getAllTreeItems(): ITreeItemElement[] {
    return Array.from(
      this.el.querySelectorAll('modus-wc-tree-item')
    ) as ITreeItemElement[];
  }

  private applySelectionToItems(selectedValues: string[]): void {
    const selectedSet = new Set(selectedValues);
    const allItems = this.getAllTreeItems();

    allItems.forEach((item) => {
      if (item.checkbox) return;
      item.selected = selectedSet.has(item.value);
    });
  }

  private syncSelectionFromProp(): void {
    if (this.selectedValues === undefined) {
      return;
    }
    this.applySelectionToItems(this.selectedValues);
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
