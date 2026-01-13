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

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the component. */
  @Prop() customClass?: string = '';

  /** Whether to show the search input. */
  @Prop() showSearch?: boolean = false;

  /** Whether to show the action bar with add, delete, and collapse all buttons. */
  @Prop() showActions?: boolean = false;

  /** Placeholder text for the search input. */
  @Prop() searchPlaceholder?: string = 'Search...';

  @State() private searchValue: string = '';
  @State() private hasSlotContent: boolean = true;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.checkSlotContent();
  }

  private checkSlotContent() {
    // Since shadow: false, check direct children (excluding the wrapper div)
    const children = Array.from(this.el.children).filter(
      (child) => !child.classList.contains('modus-wc-content-tree-wrapper')
    );
    this.hasSlotContent = children.length > 0;
  }

  render() {
    return (
      <Host>
        <div
          class={`modus-wc-content-tree-wrapper ${this.customClass}`}
          {...this.inheritedAttributes}
        >
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

          {this.showActions && this.hasSlotContent && (
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
