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
import { convertPropsToClasses } from './modus-wc-tree-item.tailwind';
import { ModusSize } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';
import { ModusTreeItemActions } from '../modus-wc-tree-actions/modus-wc-tree-actions';

export interface IMenuItemElement extends HTMLElement {
  /** The unique identifying value of the tree item. */
  value: string;
  /** The selected state of the tree item. */
  selected?: boolean;
  /** Whether the item has a checkbox (used for selection in tree structure) */
  checkbox?: boolean;
  /** Whether this item has a submenu (used for tree structure) */
  hasSubmenu?: boolean;
  /** Whether the checkbox is in an indeterminate state (only applicable if checkbox is true) */
  isIndeterminate?: boolean;
}

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

  /** The size of the tree item icons and actions. */
  @Prop() size: ModusSize = 'sm';

  /** Internal state to track if subtree is expanded */
  @State() isExpanded: boolean = false;

  /** Internal state to track if checkbox is in indeterminate state */
  @State() isIndeterminate: boolean = false;

  /** Event emitted when a tree item is selected. */
  @StencilEvent({ bubbles: true, composed: true }) itemSelect!: EventEmitter<{
    value: string;
    selected?: boolean;
  }>;

  /** Event emitted when checkbox selection changes in multi-select mode. */
  @StencilEvent({ bubbles: true, composed: true })
  selectionsChange!: EventEmitter<{
    selectedValues: string[];
  }>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    if (this.hasSubtree) {
      this.el.addEventListener('selectionsChange', this.updateIndeterminateState);
    }
  }

  disconnectedCallback() {
    this.el.removeEventListener('selectionsChange', this.updateIndeterminateState);
  }

  /**
   * Public method to collapse the subtree if it's expanded
   */
  @Method()
  collapseSubTree(): Promise<void> {
    if (this.hasSubtree && this.isExpanded) {
      const submenu = this.el.querySelector(
        '.modus-wc-tree-dropdown'
      ) as HTMLElement;

      if (submenu) {
        submenu.classList.remove('modus-wc-tree-dropdown-show');
        this.isExpanded = false;
      }
    }
    return Promise.resolve();
  }

  /**
   * Public method to expand the subtree if it's collapsed
   */
  @Method()
  expandSubTree(): Promise<void> {
    if (this.hasSubtree && !this.isExpanded) {
      const submenu = this.el.querySelector(
        '.modus-wc-tree-dropdown'
      ) as HTMLElement;

      if (submenu) {
        submenu.classList.add('modus-wc-tree-dropdown-show');
        this.isExpanded = true;
      }
    }
    return Promise.resolve();
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

  private handleCheckboxKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      this.handleCheckboxClick();
    }
  };

  private updateIndeterminateState = (e: Event) => {
    if (e.target === this.el) return;

    if (!this.hasSubtree || !this.checkbox) return;

    const submenu = this.el.querySelector('.modus-wc-tree-dropdown');
    if (!submenu) return;

    const childMenuItems = Array.from(submenu.children).filter(
      (el) =>
        el.tagName === 'MODUS-WC-TREE-ITEM' && (el as IMenuItemElement).checkbox
    ) as IMenuItemElement[];

    let selectedCount = 0;

    childMenuItems.forEach((item) => {
      if (item.selected) selectedCount++;
    });

    this.isIndeterminate =
      selectedCount > 0 && selectedCount < childMenuItems.length;

    this.selected = selectedCount === childMenuItems.length;
  };

  private updateChildrenSelection = (selected: boolean) => {
    if (!this.hasSubtree) return;

    const submenu = this.el.querySelector('.modus-wc-tree-dropdown');
    if (!submenu) return;

    const descendants = Array.from(
      submenu.querySelectorAll('modus-wc-tree-item')
    ) as IMenuItemElement[];

    descendants.forEach((item) => {
      if (!item.checkbox) return;

      item.selected = selected;
      item.isIndeterminate = false;

      const checkbox = item.querySelector('modus-wc-checkbox');
      if (checkbox) {
        checkbox.setAttribute('value', selected.toString());
        checkbox.removeAttribute('indeterminate');
      }
    });
  };

  private handleEmittedSelect = () => {
    if (this.checkbox) return;
    this.itemSelect.emit({ value: this.value, selected: this.selected });
  };

  private handleCheckboxClick = () => {
    const newValue = !this.selected || this.isIndeterminate;

    this.selected = newValue;
    this.isIndeterminate = false;
    this.updateChildrenSelection(newValue);

    // Emit selectionChange event with all selected values for multi-select mode
    const rootTreeView = this.el
      .closest('modus-wc-content-tree')
      ?.querySelector('modus-wc-tree-view');
    if (rootTreeView) {
      const allTreeItems = Array.from(
        rootTreeView.querySelectorAll('modus-wc-tree-item')
      ) as IMenuItemElement[];
      const selectedValues = allTreeItems
        .filter((item) => item.checkbox && item.selected)
        .map((item) => item.value);

      this.selectionsChange.emit({ selectedValues });
    }
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
          <div class={`modus-wc-tree-content`}>
            <modus-wc-icon
              name={this.isExpanded ? 'expand_more' : 'chevron_right'}
              customClass={`modus-wc-tree-toggle-icon ${this.isExpanded ? 'modus-wc-tree-toggle-expanded' : ''} ${this.hasSubtree ? 'modus-wc-tree-toggle-button' : 'modus-wc-tree-toggle-button-hidden'}`}
              size={this.size}
              onClick={this.handleToggleClick}
            ></modus-wc-icon>

            {this.checkbox && (
              <modus-wc-checkbox
                aria-label="Checkbox"
                disabled={this.disabled}
                value={!!this.selected}
                size={this.size}
                indeterminate={this.isIndeterminate}
                onClick={(e) => {
                  e.stopPropagation();
                  this.handleCheckboxClick();
                }}
                onKeyDown={(e) => {
                  this.handleCheckboxKeyDown(e);
                }}
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
