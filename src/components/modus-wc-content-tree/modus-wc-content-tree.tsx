import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';

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

  /** Whether to show the action bar with add, delete, and collapse all buttons. */
  @Prop() showActions?: boolean = false;

  /** Whether to show the search input. */
  @Prop() showSearch?: boolean = false;

  @State() private hasSlotContent: boolean = false;
  @State() private searchValue: string = '';
  @State() private showAddNodeInput: boolean = false;

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

  private addMenuItem = () => {
    this.showAddNodeInput = true;
  };

  private createMenuItem() {
    console.log('Creating menu item:', this.searchValue);
  }

  private handleAddNodeInput = (event: CustomEvent) => {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
  };

  private handleAddNodeKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && this.searchValue.trim()) {
      this.createMenuItem();
    } else if (event.key === 'Escape') {
      this.showAddNodeInput = false;
      this.searchValue = '';
    }
  };

  private handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const addNodeSection = this.el.querySelector(
      '.modus-wc-content-tree-add-node'
    );
    const emptySection = this.el.querySelector('.modus-wc-content-tree-empty');

    if (
      addNodeSection &&
      !addNodeSection.contains(target) &&
      emptySection &&
      !emptySection.contains(target)
    ) {
      this.showAddNodeInput = false;
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

  render() {
    return (
      <Host>
        <div
          class={`modus-wc-content-tree-wrapper ${this.customClass}`}
          {...this.inheritedAttributes}
        >
          <div class="modus-wc-content-tree-header">
            {this.showSearch && (
              <div class="modus-wc-content-tree-search">
                <modus-wc-text-input
                  placeholder={this.searchPlaceholder}
                  value={this.searchValue}
                  include-clear
                  include-search
                  customClass="modus-wc-content-tree-search-input"
                ></modus-wc-text-input>
              </div>
            )}

            {this.showActions && (
              <div class="modus-wc-content-tree-actions">
                <modus-wc-icon
                  decorative={true}
                  name="delete"
                  size="sm"
                ></modus-wc-icon>

                <modus-wc-icon
                  decorative={true}
                  name="unfold_less"
                  size="sm"
                ></modus-wc-icon>
              </div>
            )}

            {this.showAddNodeInput && (
              <div class="modus-wc-content-tree-add-node">
                <modus-wc-text-input
                  placeholder="Add node..."
                  value={this.searchValue}
                  include-clear
                  customClass="modus-wc-content-tree-add-node-input"
                  onKeyDown={this.handleAddNodeKeyDown}
                  onInputChange={this.handleAddNodeInput}
                ></modus-wc-text-input>
              </div>
            )}
          </div>
          <div class="modus-wc-content-tree-content" role="tree">
            <slot></slot>
            {!this.hasSlotContent && (
              <div class="modus-wc-content-tree-empty">
                <modus-wc-icon name="folder_open"></modus-wc-icon>
                <modus-wc-typography
                  hierarchy="p"
                  label="Empty Content Tree"
                  size="lg"
                  weight="normal"
                ></modus-wc-typography>
                <modus-wc-button
                  color="primary"
                  shape="rectangle"
                  size="md"
                  type="button"
                  variant="filled"
                  onClick={this.addMenuItem}
                >
                  Create Node
                </modus-wc-button>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
