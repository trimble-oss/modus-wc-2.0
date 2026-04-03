import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';
import {
  addAboveInTree,
  addBelowInTree,
  addChildToTree,
  deleteFromTree,
  duplicateInTree,
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

  /** If true, enables reordering UI for data-driven `items` trees. */
  @Prop() itemsReordering?: boolean = false;

  /** Data-driven items to render as tree items. */
  @Prop() items?: ITreeItemData[];

  /** Internal tree data used for rendering and local reorder updates. */
  @State() private renderItems?: ITreeItemData[];

  /** Tracks checked item IDs when checkbox mode is active. */
  @State() private checkedItemIds: string[] = [];

  /** Emits reordered data for controlled updates/backend sync. */
  @StencilEvent({ bubbles: true, composed: true })
  itemsReordered!: EventEmitter<{
    items: ITreeItemData[];
    parameters: ITreeItemReorderParameters;
  }>;

  /** Emitted after a built-in add action. UI is already updated; use for server persistence. */
  @StencilEvent({ bubbles: true, composed: true })
  itemAdded!: EventEmitter<{
    item: ITreeItemData;
    targetItemId: string;
    position: 'child' | 'above' | 'below';
    items: ITreeItemData[];
  }>;

  /** Emitted after a built-in delete action. UI is already updated; use for server persistence. */
  @StencilEvent({ bubbles: true, composed: true })
  itemDeleted!: EventEmitter<{ itemId: string; items: ITreeItemData[] }>;

  /** Emitted after a built-in duplicate action. UI is already updated; use for server persistence. */
  @StencilEvent({ bubbles: true, composed: true })
  itemDuplicated!: EventEmitter<{
    item: ITreeItemData;
    itemId: string;
    items: ITreeItemData[];
  }>;

  /** Internal state to track the current search value for filtering tree items */
  @State() private searchValue: string = '';

  /** Internal state to track if all tree nodes are expanded or collapsed */
  @State() private areAllExpanded: boolean = false;

  /** IDs of items that have been expanded but whose children have not yet been provided by the consumer. */
  @State() private pendingChildrenIds: Set<string> = new Set();

  @Watch('items')
  handleItemsChange() {
    this.renderItems = this.items;
    this.cachedItems = undefined;
    this.pendingChildrenIds = new Set();
  }

  @Watch('itemsReordering')
  handleItemsReorderingChange() {
    this.applyItemsReorderingState();
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this.renderItems = this.items;
  }

  componentDidLoad() {
    this.applyItemsReorderingState();
  }

  componentDidRender() {
    this.applyItemsReorderingState();
  }

  disconnectedCallback() {
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }
  }

  private get hasDataItems(): boolean {
    return Array.isArray(this.renderItems) && this.renderItems.length > 0;
  }

  private get isReorderingEnabled(): boolean {
    return this.hasDataItems && !!this.itemsReordering;
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
      this.renderItems!,
      event.detail.parameters
    );
    if (!nextItems) {
      return;
    }

    this.renderItems = JSON.parse(JSON.stringify(nextItems));

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

  @Listen('selectionsChange')
  handleSelectionsChange(event: CustomEvent<{ selectedValues: string[] }>) {
    this.checkedItemIds = event.detail.selectedValues;
  }

  @Listen('treeActionClick')
  handleTreeActionClick(
    event: CustomEvent<{ actionId: string; actionName: string }>
  ) {
    if (!this.hasDataItems) return;

    const { actionId } = event.detail;
    const builtInIds = [
      'add-child',
      'add-above',
      'add-below',
      'delete',
      'duplicate',
    ];
    if (!builtInIds.includes(actionId)) return;

    // Resolve which tree item emitted the action
    const treeItemEl =
      (event.target as HTMLElement)?.closest?.('modus-wc-tree-item') ??
      (event.target as HTMLElement)?.parentElement?.closest?.(
        'modus-wc-tree-item'
      );
    const itemId = treeItemEl?.getAttribute('data-key');
    if (!itemId) return;

    event.stopPropagation();

    const newId = crypto.randomUUID();
    let nextItems: ITreeItemData[] | null = null;

    if (actionId === 'add-child') {
      const newItem: ITreeItemData = {
        id: newId,
        label: 'New Item',
        inlineLabelEdit: true,
      };
      nextItems = addChildToTree(this.renderItems!, itemId, newItem);
      if (nextItems) {
        this.itemAdded.emit({
          item: newItem,
          targetItemId: itemId,
          position: 'child',
          items: nextItems,
        });
      }
      return;
    }

    if (actionId === 'add-above') {
      const newItem: ITreeItemData = {
        id: newId,
        label: 'New Item',
        inlineLabelEdit: true,
      };
      nextItems = addAboveInTree(this.renderItems!, itemId, newItem);
      if (nextItems) {
        this.itemAdded.emit({
          item: newItem,
          targetItemId: itemId,
          position: 'above',
          items: nextItems,
        });
      }
      return;
    }

    if (actionId === 'add-below') {
      const newItem: ITreeItemData = {
        id: newId,
        label: 'New Item',
        inlineLabelEdit: true,
      };
      nextItems = addBelowInTree(this.renderItems!, itemId, newItem);
      if (nextItems) {
        this.itemAdded.emit({
          item: newItem,
          targetItemId: itemId,
          position: 'below',
          items: nextItems,
        });
      }
      return;
    }

    if (actionId === 'delete') {
      nextItems = deleteFromTree(this.renderItems!, itemId);
      if (this.pendingChildrenIds.has(itemId)) {
        const updated = new Set(this.pendingChildrenIds);
        updated.delete(itemId);
        this.pendingChildrenIds = updated;
      }
      this.itemDeleted.emit({ itemId, items: nextItems });
      return;
    }

    if (actionId === 'duplicate') {
      nextItems = duplicateInTree(this.renderItems!, itemId);
      if (nextItems) {
        const originalIds = new Set(this.collectIds(this.renderItems!));
        const clonedItem = this.findFirstNewItem(nextItems, originalIds);
        this.itemDuplicated.emit({
          item: clonedItem ?? { id: '', label: '' },
          itemId,
          items: nextItems,
        });
      }
      return;
    }
  }

  private collectIds(items: ITreeItemData[]): string[] {
    const ids: string[] = [];
    for (const item of items) {
      ids.push(item.id);
      if (item.children?.length) {
        ids.push(...this.collectIds(item.children));
      }
    }
    return ids;
  }

  private findFirstNewItem(
    items: ITreeItemData[],
    knownIds: Set<string>
  ): ITreeItemData | undefined {
    for (const item of items) {
      if (!knownIds.has(item.id)) return item;
      if (item.children?.length) {
        const found = this.findFirstNewItem(item.children, knownIds);
        if (found) return found;
      }
    }
    return undefined;
  }

  /**
   * Public method to add a new item as a child of the specified parent.
   * Returns the updated items array without mutating the component state.
   * Set tree.items = result to apply the change.
   */
  @Method()
  addChild(
    parentId: string,
    newItem: ITreeItemData
  ): Promise<ITreeItemData[] | null> {
    if (!this.renderItems) return Promise.resolve(null);
    return Promise.resolve(addChildToTree(this.renderItems, parentId, newItem));
  }

  /**
   * Public method to add a new item above the specified sibling.
   * Returns the updated items array without mutating the component state.
   * Set tree.items = result to apply the change.
   */
  @Method()
  addAbove(
    siblingId: string,
    newItem: ITreeItemData
  ): Promise<ITreeItemData[] | null> {
    if (!this.renderItems) return Promise.resolve(null);
    return Promise.resolve(
      addAboveInTree(this.renderItems, siblingId, newItem)
    );
  }

  /**
   * Public method to add a new item below the specified sibling.
   * Returns the updated items array without mutating the component state.
   * Set tree.items = result to apply the change.
   */
  @Method()
  addBelow(
    siblingId: string,
    newItem: ITreeItemData
  ): Promise<ITreeItemData[] | null> {
    if (!this.renderItems) return Promise.resolve(null);
    return Promise.resolve(
      addBelowInTree(this.renderItems, siblingId, newItem)
    );
  }

  /**
   * Public method to delete an item from the tree by its id.
   * Returns the updated items array without mutating the component state.
   * Set tree.items = result to apply the change.
   */
  @Method()
  deleteItem(itemId: string): Promise<ITreeItemData[]> {
    if (!this.renderItems) return Promise.resolve([]);
    return Promise.resolve(deleteFromTree(this.renderItems, itemId));
  }

  /**
   * Public method to duplicate an item in the tree by its id.
   * Returns the updated items array without mutating the component state.
   * Set tree.items = result to apply the change.
   */
  @Method()
  duplicateItem(itemId: string): Promise<ITreeItemData[] | null> {
    if (!this.renderItems) return Promise.resolve(null);
    return Promise.resolve(duplicateInTree(this.renderItems, itemId));
  }

  private handleCheckedDelete = () => {
    if (!this.checkedItemIds.length) return;
    const deletedIds = [...this.checkedItemIds];
    this.checkedItemIds = [];

    if (this.renderItems) {
      let next = this.renderItems;
      for (const id of deletedIds) {
        next = deleteFromTree(next, id);
      }
      this.itemDeleted.emit({ itemId: deletedIds.join(','), items: next });
    } else {
      for (const id of deletedIds) {
        this.el.querySelector(`modus-wc-tree-item[value="${id}"]`)?.remove();
      }
    }
  };

  private readonly defaultTreeItemActions = [
    { id: 'add-child', icon: 'add', label: 'Add Child' },
    { id: 'add-above', icon: 'arrow_upward', label: 'Add Above' },
    { id: 'add-below', icon: 'arrow_downward', label: 'Add Below' },
    { id: 'duplicate', icon: 'content_copy', label: 'Duplicate' },
    { id: 'delete', icon: 'delete', label: 'Delete' },
  ];

  private renderTreeItems(items: ITreeItemData[]) {
    return items.map((item) => {
      const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;
      const hasSubtree = hasChildren || !!item.hasChildren;
      const isLoading =
        item.lazyLoading !== undefined
          ? item.lazyLoading
          : !hasChildren &&
            !!item.hasChildren &&
            this.pendingChildrenIds.has(item.id);

      const actions = item.treeItemActions ?? this.defaultTreeItemActions;

      return (
        <modus-wc-tree-item
          key={item.id}
          data-key={item.id}
          label={item.label}
          value={item.id}
          checkbox={item.checkbox}
          treeItemActions={actions}
          itemsReordering={this.isReorderingEnabled}
          hasSubtree={hasSubtree}
          lazyLoading={isLoading}
          inlineLabelEdit={item.inlineLabelEdit}
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
                {this.checkedItemIds.length > 0 && (
                  <modus-wc-button
                    customClass="modus-wc-content-tree-action-button"
                    variant="borderless"
                    size="sm"
                    shape="circle"
                    color="danger"
                    onButtonClick={this.handleCheckedDelete}
                    aria-label={`Delete ${this.checkedItemIds.length} selected item${this.checkedItemIds.length > 1 ? 's' : ''}`}
                  >
                    <modus-wc-icon
                      customClass="modus-wc-content-tree-action-icon"
                      decorative={true}
                      name="delete"
                      size="sm"
                    ></modus-wc-icon>
                  </modus-wc-button>
                )}
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
              <modus-wc-tree-view>
                {this.renderTreeItems(this.renderItems!)}
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
