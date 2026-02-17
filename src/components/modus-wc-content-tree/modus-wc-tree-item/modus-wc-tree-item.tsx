import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../../utils';
import { convertPropsToClasses } from './modus-wc-tree-item.tailwind';
import { ModusTreeItemActions } from '../modus-wc-tree-actions/modus-wc-tree-actions';

/**
 * A tree item component that represents a single node in a hierarchical tree structure.
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

  /** If true, renders a checkbox at the start of the tree item. */
  @Prop() checkbox?: boolean = false;

  /** If true, renders a drag handle icon at the start of the tree item. */
  @Prop() dragHandle?: boolean = false;

  /** The text label displayed for the tree item. */
  @Prop() label!: string;

  /** Custom CSS class to apply to the li element. */
  @Prop() customClass?: string = '';

  /** The selected state of the tree item. */
  @Prop({ mutable: true, reflect: true }) selected?: boolean;

  /** The unique identifying value of the tree item. */
  @Prop() value: string = '';

  /** Whether this tree item has a collapsible subtree. When true, the item will show a caret and handle toggle behavior. */
  @Prop() hasSubtree?: boolean;

  /** Actions to display for this tree item. */
  @Prop() treeItemActions?: ModusTreeItemActions[];

  /** Internal state to track if subtree is expanded */
  @State() isExpanded: boolean = false;

  /** The size of the tree item icons and actions. */
  @Prop() size: 'xs' | 'sm' | 'md' = 'sm';

  /** Event emitted when a tree item is selected. */
  @StencilEvent() itemSelect!: EventEmitter<{
    value: string;
  }>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  /**
   * Public method to collapse the subtree if it's expanded
   */
  @Method()
  async collapseSubTree(): Promise<void> {
    if (this.hasSubtree && this.isExpanded) {
      const submenu = this.el.querySelector(
        '.modus-wc-tree-dropdown'
      ) as HTMLElement;

      if (submenu) {
        submenu.classList.remove('modus-wc-tree-dropdown-show');
        this.isExpanded = false;
      }
    }
  }

  /**
   * Public method to expand the subtree if it's collapsed
   */
  @Method()
  async expandSubTree(): Promise<void> {
    if (this.hasSubtree && !this.isExpanded) {
      const submenu = this.el.querySelector(
        '.modus-wc-tree-dropdown'
      ) as HTMLElement;

      if (submenu) {
        submenu.classList.add('modus-wc-tree-dropdown-show');
        this.isExpanded = true;
      }
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-tree-item'];

    const propClasses = convertPropsToClasses({
      disabled: this.disabled,
      selected: this.selected,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleToggleClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (!this.hasSubtree) return;

    this.isExpanded = !this.isExpanded;

    const submenu = this.el.querySelector(
      '.modus-wc-tree-dropdown'
    ) as HTMLElement;

    submenu?.classList.toggle('modus-wc-tree-dropdown-show');
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleEmittedSelect();
    }
  };

  private handleItemSelect = (event: MouseEvent) => {
    event.stopPropagation();
    this.handleEmittedSelect();
  };

  private handleEmittedSelect = () => {
    this.itemSelect.emit({ value: this.value });
  };

  render() {
    return (
      <Host>
        <li
          aria-current={this.selected}
          aria-selected={this.selected ? 'true' : 'false'}
          aria-expanded={this.hasSubtree ? String(this.isExpanded) : undefined}
          class={this.getClasses()}
          onClick={this.handleItemSelect}
          onKeyDown={this.handleKeyDown}
          role="treeitem"
          tabIndex={this.disabled ? -1 : 0}
          {...this.inheritedAttributes}
        >
          <div
            class={`modus-wc-tree-content ${
              this.selected ? 'modus-wc-tree-item-active' : ''
            }`}
          >
            {this.dragHandle && (
              <modus-wc-icon
                name="drag_indicator"
                customClass="modus-wc-tree-drag-handle"
                size={this.size}
              ></modus-wc-icon>
            )}
            {this.hasSubtree && (
              <modus-wc-icon
                name={this.isExpanded ? 'expand_more' : 'chevron_right'}
                onClick={this.handleToggleClick}
                customClass={`modus-wc-tree-toggle-icon ${this.isExpanded ? 'modus-wc-tree-toggle-expanded' : ''}`}
                size={this.size}
              ></modus-wc-icon>
            )}
            {this.checkbox && (
              <modus-wc-checkbox
                aria-label="Checkbox"
                disabled={this.disabled}
                value={!!this.selected}
                size="sm"
              />
            )}
            <slot name="start-icon"></slot>
            <div class="modus-wc-tree-item-labels">
              <div class="modus-wc-tree-item-label">{this.label}</div>
            </div>
            <div class="modus-wc-tree-item-actions">
              <modus-wc-tree-actions
                actions={this.treeItemActions}
                size={this.size}
              ></modus-wc-tree-actions>
            </div>
          </div>
          <slot></slot>
        </li>
      </Host>
    );
  }
}
