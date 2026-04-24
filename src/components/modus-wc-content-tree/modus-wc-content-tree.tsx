import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';
import {
  getReorderSignature,
  reorderTreeItemsData,
} from './modus-wc-content-tree.utils';
import {
  ITreeItemData,
  ITreeItemElement,
  ITreeItemReorderedEventDetail,
  ITreeItemReorderParameters,
} from './modus-wc-tree-item/modus-wc-tree-item';

/**
 * A customizable content tree component used to display hierarchical data in a tree structure.
 */
@Component({
  tag: 'modus-wc-content-tree',
  styleUrl: 'modus-wc-content-tree.scss',
  shadow: false,
})
export class ModusWcContentTree {
  private inheritedAttributes: Attributes = {};
  private debounceTimer?: number;
  private cachedItems?: ITreeItemElement[];
  private lastReorderSignature?: string;
  /** Single- and multi-select values for data-driven `items`; reapplied after `items` re-render. */
  private dataDriveSelectedValues: string[] = [];

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the component. */
  @Prop() customClass?: string = '';

  /** Placeholder text for the search input. */
  @Prop() searchPlaceholder?: string = 'Search...';

  /** If true, displays the search input to filter tree items. */
  @Prop() includeSearch?: boolean = false;

  /** If true, displays the action buttons (expand/collapse all, etc.). */
  @Prop() includeActions?: boolean = false;

  /** If true, enables reordering UI for data-driven `items` trees. Not supported for slot-based trees. */
  @Prop() itemsReordering?: boolean = false;

  /** Data-driven items to render as tree items. */
  @Prop() items?: ITreeItemData[];

  /** Controlled selected values for tree items in data-driven `items` mode. */
  @Prop() selectedValues?: string[];

  /** If true, enables additive (Ctrl/Cmd) and range (Shift) multi-selection for the root tree rendered or wrapped by this content tree. */
  @Prop() multiSelect?: boolean = false;

  /** Emits current selection when tree selection changes in data-driven `items` mode. */
  @StencilEvent({ bubbles: true, composed: true })
  selectionsChange!: EventEmitter<{
    selectedValues: string[];
  }>;

  /** Emits reordered data for controlled updates/backend sync in data-driven `items` mode only. */
  @StencilEvent({ bubbles: true, composed: true })
  itemsReordered!: EventEmitter<{
    items: ITreeItemData[];
    parameters: ITreeItemReorderParameters;
  }>;

  /** Internal state to track the current search value for filtering tree items */
  @State() private searchValue: string = '';

  /** Internal state to track if all tree nodes are expanded or collapsed */
  @State() private areAllExpanded: boolean = false;

  /** IDs of items that have been expanded but whose children have not yet been provided by the consumer. */
  @State() private pendingChildrenIds: Set<string> = new Set();

  private get isSelectionControlled(): boolean {
    return this.selectedValues !== undefined;
  }

  @Watch('items')
  handleItemsChange() {
    this.cachedItems = undefined;
    this.pendingChildrenIds = new Set();
    if (!this.items?.length) {
      this.dataDriveSelectedValues = [];
    }
  }

  @Watch('selectedValues')
  handleSelectedValuesChange(newValues?: string[]) {
    this.dataDriveSelectedValues = Array.isArray(newValues)
      ? [...newValues]
      : [];
  }

  @Watch('itemsReordering')
  handleItemsReorderingChange() {
    this.applyItemsReorderingState();
  }

  @Watch('multiSelect')
  handleMultiSelectChange() {
    this.applyTreeViewSelectionMode();
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    if (Array.isArray(this.selectedValues)) {
      this.dataDriveSelectedValues = [...this.selectedValues];
    }
  }

  componentDidLoad() {
    this.applyItemsReorderingState();
    this.applyTreeViewSelectionMode();
  }

  componentDidRender() {
    this.syncDataDriveSelection();
    this.applyItemsReorderingState();
    this.applyTreeViewSelectionMode();
  }

  private handleTreeViewItemSelectionChange = (
    event: CustomEvent<{ selectedValues: string[] }>
  ) => {
    if (!this.isSelectionControlled) {
      this.dataDriveSelectedValues = [...event.detail.selectedValues];
    }

    this.selectionsChange.emit({
      selectedValues: [...event.detail.selectedValues],
    });
  };

  /** Restore selection on new tree-item nodes after controlled `items` updates. */
  private syncDataDriveSelection(): void {
    if (!this.hasDataItems) {
      return;
    }

    const treeItems = Array.from(
      this.el.querySelectorAll('modus-wc-tree-item')
    ) as ITreeItemElement[];

    if (treeItems.length === 0) {
      return;
    }

    const controlledSelectionValues = this.selectedValues;
    const selectionValues = this.isSelectionControlled
      ? controlledSelectionValues == null
        ? []
        : controlledSelectionValues
      : this.dataDriveSelectedValues;
    const existingValues = new Set(treeItems.map((item) => item.value));
    const nextSelectionValues = selectionValues.filter((v) =>
      existingValues.has(v)
    );

    if (!this.isSelectionControlled) {
      this.dataDriveSelectedValues = nextSelectionValues;
    }

    const selectedSet = new Set(nextSelectionValues);
    treeItems.forEach((item) => {
      if (item.checkbox) return;
      item.selected = selectedSet.has(item.value);
    });
  }

  disconnectedCallback() {
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }
  }

  private get hasDataItems(): boolean {
    return Array.isArray(this.items) && this.items.length > 0;
  }

  private get isReorderingEnabled(): boolean {
    return this.hasDataItems && !!this.itemsReordering;
  }

  private getItemIdentity(item: ITreeItemData): string {
    return item.clientId ?? item.id;
  }

  private applyItemsReorderingState(): void {
    // In data-driven mode, `itemsReordering` is passed declaratively in render.
    // Avoid imperative prop writes that can race reconciliation while reordering.
    if (this.hasDataItems) {
      return;
    }

    const treeItems = this.el.querySelectorAll('modus-wc-tree-item');
    treeItems.forEach((item) => {
      (item as ITreeItemElement).itemsReordering = this.isReorderingEnabled;
    });
  }

  private applyTreeViewSelectionMode(): void {
    // In data-driven mode, `multiSelect` is passed declaratively in render.
    if (this.hasDataItems) {
      return;
    }

    const treeViews = Array.from(
      this.el.querySelectorAll('modus-wc-tree-view')
    ) as Array<HTMLElement & { isSubList?: boolean; multiSelect?: boolean }>;

    treeViews
      .filter((treeView) => !treeView.isSubList)
      .forEach((treeView) => {
        treeView.multiSelect = !!this.multiSelect;
      });
  }

  @Listen('itemReordered')
  handleItemReordered(event: CustomEvent<ITreeItemReorderedEventDetail>) {
    // Prevent leaking the internal per-item reorder event to consumers.
    event.stopPropagation();

    if (!this.hasDataItems) {
      return;
    }

    const signature = getReorderSignature(event.detail.parameters);
    if (this.lastReorderSignature === signature) {
      return;
    }
    this.lastReorderSignature = signature;
    queueMicrotask(() => {
      if (this.lastReorderSignature === signature) {
        this.lastReorderSignature = undefined;
      }
    });

    const nextItems = reorderTreeItemsData(
      this.items!,
      event.detail.parameters
    );
    if (!nextItems) {
      return;
    }

    this.itemsReordered.emit({
      items: nextItems,
      parameters: event.detail.parameters,
    });
  }

  private handleInputChange = (event: CustomEvent) => {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;

    // Debounce search to avoid excessive filtering
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = window.setTimeout(() => {
      void this.filterNodes(this.searchValue);
    }, 150);
  };

  private async filterNodes(searchTerm: string): Promise<void> {
    // Cache menu items to avoid repeated queries
    if (!this.cachedItems) {
      this.cachedItems = Array.from(
        this.el.querySelectorAll('modus-wc-tree-item')
      );
    }
    const menuItems = this.cachedItems;

    const normalizedSearch = searchTerm.toLowerCase().trim();

    // If search is empty, reset visibility and collapse all subtrees
    if (!normalizedSearch) {
      for (const item of menuItems) {
        (item as HTMLElement).style.display = '';
      }
      await Promise.all(
        menuItems
          .filter((item) => item.hasSubtree)
          .map((item) => item.collapseSubTree().catch(() => {}))
      );
      return;
    }

    const visibleItems = new Set<HTMLElement>();
    const itemsToExpand = new Set<ITreeItemElement>();

    for (const item of menuItems) {
      const label = item.getAttribute('label') || '';
      if (!label.toLowerCase().includes(normalizedSearch)) continue;

      const itemElement = item as HTMLElement;
      visibleItems.add(itemElement);

      let parent = itemElement.parentElement;
      while (parent && parent !== this.el) {
        if (parent.tagName === 'MODUS-WC-TREE-ITEM') {
          const parentTreeItem = parent as ITreeItemElement;
          visibleItems.add(parentTreeItem as HTMLElement);
          itemsToExpand.add(parentTreeItem);
        }
        parent = parent.parentElement;
      }
    }

    for (const item of menuItems) {
      const itemElement = item as HTMLElement;
      itemElement.style.display = visibleItems.has(itemElement) ? '' : 'none';
    }

    // Batch all expand operations
    if (itemsToExpand.size > 0) {
      await Promise.all(
        Array.from(itemsToExpand).map((item) =>
          item.expandSubTree().catch(() => {})
        )
      );
    }
  }

  private handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.searchValue = '';
      void this.filterNodes('');
    }
  };

  private handleToggleClick = (): void => {
    void this.toggleExpandCollapse();
  };

  private async toggleExpandCollapse(): Promise<void> {
    const treeItems = this.el.querySelectorAll('modus-wc-tree-item');
    this.areAllExpanded = !this.areAllExpanded;

    const promises = Array.from(treeItems).map((item) => {
      const treeItem = item as ITreeItemElement;
      const hasSubtree =
        item.hasAttribute('has-subtree') || treeItem.hasSubtree === true;
      if (hasSubtree) {
        if (this.areAllExpanded) {
          return treeItem.expandSubTree();
        } else {
          return treeItem.collapseSubTree();
        }
      }
      return Promise.resolve();
    });

    await Promise.all(promises);
  }

  @Listen('itemExpand')
  handleItemExpand(event: CustomEvent<string>) {
    if (!this.hasDataItems) return;
    this.pendingChildrenIds = new Set([
      ...this.pendingChildrenIds,
      event.detail,
    ]);
  }

  private renderTreeItems(items: ITreeItemData[]) {
    return items.map((item) => {
      const itemIdentity = this.getItemIdentity(item);
      const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;
      const hasSubtree = hasChildren || !!item.hasChildren;
      const isLoading =
        !hasChildren &&
        !!item.hasChildren &&
        this.pendingChildrenIds.has(itemIdentity);

      return (
        <modus-wc-tree-item
          label={item.label}
          value={itemIdentity}
          disabled={item.disabled}
          checkbox={item.checkbox}
          treeItemActions={item.treeItemActions}
          inlineLabelEdit={item.inlineLabelEdit}
          itemsReordering={this.isReorderingEnabled}
          hasSubtree={hasSubtree}
          lazyLoading={isLoading}
        >
          {item.startIcon && (
            <modus-wc-icon
              slot="start-icon"
              name={item.startIcon}
            ></modus-wc-icon>
          )}
          {hasChildren && (
            <modus-wc-tree-view isSubList={true}>
              {this.renderTreeItems(item.children!)}
            </modus-wc-tree-view>
          )}
        </modus-wc-tree-item>
      );
    });
  }

  render() {
    return (
      <Host>
        <div
          class={`modus-wc-content-tree-wrapper ${this.customClass}`}
          {...this.inheritedAttributes}
        >
          <div class="modus-wc-content-tree-header">
            {this.includeSearch && (
              <div class="modus-wc-content-tree-search">
                <modus-wc-text-input
                  placeholder={this.searchPlaceholder}
                  value={this.searchValue}
                  include-clear
                  include-search
                  size="sm"
                  customClass="modus-wc-content-tree-search-input"
                  onKeyDown={this.handleInputKeyDown}
                  onInputChange={this.handleInputChange}
                ></modus-wc-text-input>
              </div>
            )}
            {this.includeActions && (
              <div class="modus-wc-content-tree-actions">
                <modus-wc-button
                  customClass="modus-wc-content-tree-action-button"
                  variant="borderless"
                  size="sm"
                  shape="circle"
                  onClick={this.handleToggleClick}
                  aria-label={
                    this.areAllExpanded ? 'Collapse all' : 'Expand all'
                  }
                >
                  <modus-wc-icon
                    customClass="modus-wc-content-tree-action-icon"
                    decorative={true}
                    name={this.areAllExpanded ? 'unfold_less' : 'unfold_more'}
                    size="sm"
                    variant="solid"
                  ></modus-wc-icon>
                </modus-wc-button>
              </div>
            )}
          </div>
          <div class="modus-wc-content-tree-content">
            {this.hasDataItems ? (
              <modus-wc-tree-view
                multiSelect={this.multiSelect}
                selectedValues={this.selectedValues}
                onItemSelectionChange={this.handleTreeViewItemSelectionChange}
              >
                {this.renderTreeItems(this.items!)}
              </modus-wc-tree-view>
            ) : (
              <slot></slot>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
