import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';
import { ModusWcTreeItemElement } from './modus-wc-tree-item/modus-wc-tree-item';

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
  private slotEl?: HTMLSlotElement;
  private debounceTimer?: number;
  private cachedItems?: ModusWcTreeItemElement[];

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the component. */
  @Prop() customClass?: string = '';

  /** Placeholder text for the search input. */
  @Prop() searchPlaceholder?: string = 'Search...';

  /** If true, displays the search input to filter tree items. */
  @Prop() includeSearch?: boolean = true;

  /** If true, displays the action buttons (expand/collapse all, etc.). */
  @Prop() includeActions?: boolean = true;

  /** Internal state to track if the tree has any content (used for empty state display) */
  @State() private hasSlotContent: boolean = false;

  /** Internal state to track the current search value for filtering tree items */
  @State() private searchValue: string = '';

  /** Internal state to track if all tree nodes are expanded or collapsed */
  @State() private areAllExpanded: boolean = false;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    // Check initial slot content
    const slotContent = Array.from(this.el.childNodes).filter(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node as HTMLElement).tagName !== 'STYLE'
    );
    this.hasSlotContent = slotContent.length > 0;
  }

  componentDidLoad() {
    this.slotEl = this.el.querySelector('slot') as HTMLSlotElement;
    this.updateSlotContent();
    this.slotEl?.addEventListener('slotchange', this.updateSlotContent);
  }

  disconnectedCallback() {
    this.slotEl?.removeEventListener('slotchange', this.updateSlotContent);
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }
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
    const itemsToExpand: ModusWcTreeItemElement[] = [];
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
            itemsToExpand.push(parent as ModusWcTreeItemElement);
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

  private updateSlotContent = () => {
    if (!this.slotEl) return;

    const assigned = this.slotEl
      .assignedNodes({ flatten: true })
      .filter(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          (node as HTMLElement).tagName !== 'STYLE'
      );

    this.hasSlotContent = assigned.length > 0;
    // Invalidate cache when content changes
    this.cachedItems = undefined;
  };

  private toggleExpandCollapse = async () => {
    const treeItems = this.el.querySelectorAll('modus-wc-tree-item');
    this.areAllExpanded = !this.areAllExpanded;

    const promises = Array.from(treeItems).map((item) => {
      const treeItem = item as ModusWcTreeItemElement;
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
  };

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
                  customClass="modus-wc-content-tree-search-input"
                  onKeyDown={this.handleInputKeyDown}
                  onInputChange={this.handleInputChange}
                ></modus-wc-text-input>
              </div>
            )}

            {this.includeActions && (
              <div class="modus-wc-content-tree-actions">
                <modus-wc-button
                  variant="borderless"
                  size="sm"
                  shape="circle"
                  onClick={() => void this.toggleExpandCollapse()}
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
            <slot></slot>
            {!this.hasSlotContent && (
              <div class="modus-wc-content-tree-empty">
                <modus-wc-icon
                  name="folder_open"
                  variant="solid"
                  customClass="modus-wc-content-tree-empty-icon"
                ></modus-wc-icon>
                <modus-wc-typography
                  hierarchy="p"
                  label="Empty Content Tree"
                  size="lg"
                  weight="normal"
                  customClass="modus-wc-content-tree-empty-text"
                ></modus-wc-typography>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
