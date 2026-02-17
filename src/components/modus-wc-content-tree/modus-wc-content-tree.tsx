import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';

interface HTMLModusWcTreeItemElement extends HTMLElement {
  hasSubtree?: boolean;
  expandSubTree: () => Promise<void>;
  collapseSubTree: () => Promise<void>;
}

/**
 * A customizable content tree component used to display hierarchical data in a tree structure.
 * Uses menu items to create the tree structure with support for expanding/collapsing nodes and selection.
 */
@Component({
  tag: 'modus-wc-content-tree',
  styleUrl: 'modus-wc-content-tree.scss',
  shadow: false,
})
export class ModusWcContentTree {
  private inheritedAttributes: Attributes = {};
  private slotEl?: HTMLSlotElement;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the component. */
  @Prop() customClass?: string = '';

  /** Placeholder text for the search input. */
  @Prop() searchPlaceholder?: string = 'Search...';

  @State() private hasSlotContent: boolean = false;
  @State() private searchValue: string = '';
  @State() private isAddNodeMode: boolean = false;
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
    document.addEventListener('click', this.handleClickOutside);
  }

  disconnectedCallback() {
    this.slotEl?.removeEventListener('slotchange', this.updateSlotContent);
    document.removeEventListener('click', this.handleClickOutside);
  }

  private createTreeItem() {
    console.log('Creating tree item:', this.searchValue);
    this.searchValue = '';
    this.isAddNodeMode = false;
  }

  private handleInputChange = (event: CustomEvent) => {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;

    if (!this.isAddNodeMode) {
      this.filterNodes(this.searchValue);
    }
  };

  private filterNodes(searchTerm: string) {
    const menuItems = this.el.querySelectorAll('modus-wc-tree-item');
    const normalizedSearch = searchTerm.toLowerCase().trim();

    if (!normalizedSearch) {
      // Show all nodes when search is empty
      menuItems.forEach((item) => {
        (item as HTMLElement).style.display = '';
      });
      return;
    }

    menuItems.forEach((item) => {
      const label = item.getAttribute('label') || '';
      const normalizedLabel = label.toLowerCase();
      const matches = normalizedLabel.includes(normalizedSearch);

      if (matches) {
        // Show matching node
        (item as HTMLElement).style.display = '';

        // Expand and show all parent nodes
        let parent = item.parentElement;
        while (parent && parent !== this.el) {
          if (parent.tagName === 'MODUS-WC-TREE-ITEM') {
            parent.style.display = '';
            (parent as HTMLModusWcTreeItemElement).expandSubTree();
          }
          parent = parent.parentElement;
        }
      } else {
        // Check if any children match
        const hasMatchingChildren = this.hasMatchingDescendants(
          item as HTMLElement,
          normalizedSearch
        );

        if (hasMatchingChildren) {
          (item as HTMLElement).style.display = '';
          (item as HTMLModusWcTreeItemElement).expandSubTree();
        } else {
          (item as HTMLElement).style.display = 'none';
        }
      }
    });
  }

  private hasMatchingDescendants(
    element: HTMLElement,
    searchTerm: string
  ): boolean {
    const childMenuItems = element.querySelectorAll('modus-wc-tree-item');

    for (const child of Array.from(childMenuItems)) {
      const label = child.getAttribute('label') || '';
      if (label.toLowerCase().includes(searchTerm)) {
        return true;
      }
    }

    return false;
  }

  private handleInputKeyDown = (event: KeyboardEvent) => {
    const value = this.searchValue.trim();

    if (event.key === 'Enter') {
      if (this.isAddNodeMode && value) {
        this.createTreeItem();
      }
      return;
    }

    if (event.key === 'Escape') {
      this.isAddNodeMode = false;
      this.searchValue = '';
      this.filterNodes('');
    }
  };

  private handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const searchSection = this.el.querySelector(
      '.modus-wc-content-tree-search'
    );
    const emptySection = this.el.querySelector('.modus-wc-content-tree-empty');

    if (
      this.isAddNodeMode &&
      searchSection &&
      !searchSection.contains(target) &&
      (!emptySection || !emptySection.contains(target))
    ) {
      this.isAddNodeMode = false;
      this.searchValue = '';
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
  };

  private toggleExpandCollapse = async () => {
    const treeItems = this.el.querySelectorAll('modus-wc-tree-item');
    this.areAllExpanded = !this.areAllExpanded;

    const promises = Array.from(treeItems).map((item) => {
      const treeItem = item as HTMLModusWcTreeItemElement;
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
            <div class="modus-wc-content-tree-search">
              <modus-wc-text-input
                placeholder={
                  this.isAddNodeMode ? 'Add node...' : this.searchPlaceholder
                }
                value={this.searchValue}
                include-clear
                include-search={!this.isAddNodeMode}
                customClass="modus-wc-content-tree-search-input"
                onKeyDown={this.handleInputKeyDown}
                onInputChange={this.handleInputChange}
              ></modus-wc-text-input>
            </div>

            <div class="modus-wc-content-tree-actions">
              <modus-wc-button
                variant="borderless"
                size="sm"
                shape="circle"
                onClick={this.toggleExpandCollapse}
                aria-label={this.areAllExpanded ? 'Collapse all' : 'Expand all'}
              >
                <modus-wc-icon
                  decorative={true}
                  name={this.areAllExpanded ? 'unfold_less' : 'unfold_more'}
                  size="sm"
                  variant="solid"
                ></modus-wc-icon>
              </modus-wc-button>
            </div>
          </div>
          <div class="modus-wc-content-tree-content" role="tree">
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
