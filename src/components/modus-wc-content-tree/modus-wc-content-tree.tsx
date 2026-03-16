import {
  Component,
  Element,
  Event as StencilEvent,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';
import {
  ITreeItemData,
  ITreeItemElement,
  ITreeItemReorderParameters,
  ITreeItemReorderedEventDetail,
} from './modus-wc-tree-item/modus-wc-tree-item';
import {
  getReorderSignature,
  reorderTreeItemsData,
} from './modus-wc-content-tree.utils';

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

  /** Emits reordered data for controlled updates/backend sync. */
  @StencilEvent({ bubbles: true, composed: true })
  itemsReordered!: EventEmitter<{
    items: ITreeItemData[];
    parameters: ITreeItemReorderParameters;
  }>;

  /** Internal state to track the current search value for filtering tree items */
  @State() private searchValue: string = '';

  /** Internal state to track if all tree nodes are expanded or collapsed */
  @State() private areAllExpanded: boolean = false;

  @Watch('items')
  handleItemsChange() {
    this.cachedItems = undefined;
  }

  @Watch('itemsReordering')
  handleItemsReorderingChange() {
    this.applyItemsReorderingState();
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
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
    return Array.isArray(this.items) && this.items.length > 0;
  }

  private get isReorderingEnabled(): boolean {
    return this.hasDataItems && !!this.itemsReordering;
  }

  private applyItemsReorderingState(): void {
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

    // If search is empty, reset everything in batch
    if (!normalizedSearch) {
      for (const item of menuItems) {
        (item as HTMLElement).style.display = '';
      }
      return;
    }

    // First pass: identify matches and collect items to show/hide
    const matchingItems = new Set<HTMLElement>();
    const itemsToExpand: ITreeItemElement[] = [];
    const processedParents = new Set<HTMLElement>();

    // Build match set efficiently
    for (const item of menuItems) {
      const label = item.getAttribute('label') || '';
      if (label.toLowerCase().includes(normalizedSearch)) {
        matchingItems.add(item as HTMLElement);
      }
    }

    // Second pass: determine visibility and expansion needs
    for (const item of menuItems) {
      const itemElement = item as HTMLElement;
      const isDirectMatch = matchingItems.has(itemElement);

      if (isDirectMatch) {
        itemElement.style.display = '';

        // Process ancestors only once
        let parent = item.parentElement;
        while (parent && parent !== this.el) {
          if (
            parent.tagName === 'MODUS-WC-TREE-ITEM' &&
            !processedParents.has(parent)
          ) {
            processedParents.add(parent);
            parent.style.display = '';
            itemsToExpand.push(parent as ITreeItemElement);
          }
          parent = parent.parentElement;
        }
      } else {
        // Check descendants using pre-computed match set
        const descendants = itemElement.querySelectorAll('modus-wc-tree-item');
        const hasMatchingChild = Array.from(descendants).some((child) =>
          matchingItems.has(child as HTMLElement)
        );

        if (hasMatchingChild) {
          itemElement.style.display = '';
          itemsToExpand.push(item);
        } else {
          itemElement.style.display = 'none';
        }
      }
    }

    // Batch all expand operations
    if (itemsToExpand.length > 0) {
      await Promise.all(
        itemsToExpand.map((item) => item.expandSubTree().catch(() => {}))
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

  private renderTreeItems(items: ITreeItemData[]) {
    return items.map((item) => {
      const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;

      return (
        <modus-wc-tree-item
          key={item.id}
          label={item.label}
          value={item.id}
          itemsReordering={this.isReorderingEnabled}
          hasSubtree={hasChildren}
        >
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
              <modus-wc-tree-view>
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
