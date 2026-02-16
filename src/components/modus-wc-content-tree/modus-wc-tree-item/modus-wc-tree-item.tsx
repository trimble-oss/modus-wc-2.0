import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A tree item component that represents a single node in a hierarchical tree structure.
 * This component uses the modus-wc-menu-item structure for consistency.
 */
@Component({
  tag: 'modus-wc-tree-item',
  styleUrl: 'modus-wc-tree-item.scss',
  shadow: false,
})
export class ModusWcTreeItem {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The disabled state of the tree item. */
  @Prop() disabled?: boolean;

  /** The size of the tree item. */
  @Prop() size?: 'sm' | 'md' | 'lg' = 'md';

  /** If true, renders a checkbox at the start of the tree item. */
  @Prop() checkbox?: boolean = false;

  /** The modus icon name to render at the start of the tree item. */
  @Prop() startIcon?: string;

  /** The text label displayed for the tree item. */
  @Prop() label!: string;

  /** Custom CSS class to apply to the li element. */
  @Prop() customClass?: string = '';

  /** The selected state of the tree item. */
  @Prop() selected?: boolean;

  /** The unique identifying value of the tree item. */
  @Prop() value: string = '';

  /** Whether this tree item has a collapsible subtree. When true, the item will show a caret and handle toggle behavior. */
  @Prop() hasSubtree?: boolean;

  /** Internal state to track if subtree is expanded */
  @State() isExpanded: boolean = false;

  /** Event emitted when a tree item is selected. */
  @StencilEvent() itemSelect!: EventEmitter<{
    value: string;
    selected?: boolean;
  }>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleItemSelect();
    }
  };

  private getClasses(): string {
    const classList: string[] = ['modus-wc-tree-item'];

    if (this.disabled) classList.push('modus-wc-tree-item-disabled');
    if (this.selected && !this.hasSubtree)
      classList.push('modus-wc-tree-item-selected');
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleItemSelect = () => {
    // For subtree items, handle the toggle
    if (this.hasSubtree) {
      const submenu = this.el.querySelector(
        '.modus-wc-tree-dropdown'
      ) as HTMLElement;
      const liElement = this.el.querySelector('li');

      if (submenu && liElement) {
        submenu.classList.toggle('modus-wc-tree-dropdown-show');
        const buttonElement = liElement.querySelector('button');

        // Update internal expanded state and add/remove class
        this.isExpanded = submenu.classList.contains(
          'modus-wc-tree-dropdown-show'
        );

        if (this.isExpanded) {
          liElement.classList.add('modus-wc-tree-item-expanded');
          if (buttonElement) {
            buttonElement.classList.add('modus-wc-tree-dropdown-show');
          }
        } else {
          liElement.classList.remove('modus-wc-tree-item-expanded');
          if (buttonElement) {
            buttonElement.classList.remove('modus-wc-tree-dropdown-show');
          }
        }
      }
    }
    // Always emit the event with current selection state
    this.itemSelect.emit({ value: this.value, selected: this.selected });
  };

  render() {
    return (
      <Host>
        <li
          aria-current={this.selected}
          aria-disabled={this.disabled}
          aria-selected={this.selected ? 'true' : 'false'}
          class={this.getClasses()}
          onClick={this.handleItemSelect}
          onKeyDown={this.handleKeyDown}
          role="treeitem"
          tabIndex={this.disabled ? -1 : 0}
          {...this.inheritedAttributes}
        >
          <div class="modus-wc-tree-item-content">
            {this.checkbox && (
              <modus-wc-checkbox
                aria-label="Checkbox"
                disabled={this.disabled}
                size={this.size}
                value={!!this.selected}
              />
            )}
            <slot name="start-icon"></slot>
            <div class="modus-wc-tree-item-labels">
              <div class="modus-wc-tree-item-label">{this.label}</div>
            </div>
          </div>
          <slot></slot>
        </li>
      </Host>
    );
  }
}
