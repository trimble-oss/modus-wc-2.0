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
import { DaisySize } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';
import { ITreeItemActions } from '../modus-wc-tree-actions/modus-wc-tree-actions';

export interface ITreeItemData {
  /** Unique identifier for the tree item */
  id: string;
  /** Display label for the tree item */
  label: string;
  /** Optional nested children items */
  children?: ITreeItemData[];
}

export type TreeViewItemId = string;

export interface ITreeItemReorderPosition {
  parentId: TreeViewItemId | null;
  index: number;
}

export interface ITreeItemReorderParameters {
  itemId: TreeViewItemId;
  oldPosition: ITreeItemReorderPosition;
  newPosition: ITreeItemReorderPosition;
}

export interface ITreeItemReorderedEventDetail {
  parameters: ITreeItemReorderParameters;
}

export interface ITreeItemElement extends HTMLElement {
  value: string;
  selected?: boolean;
  checked?: boolean;
  checkbox?: boolean;
  inlineLabelEdit?: boolean;
  itemsReordering?: boolean;
  hasSubtree?: boolean;
  isIndeterminate?: boolean;
  disabled?: boolean;
  label: string;
  customClass?: string;
  treeItemActions?: ITreeItemActions[];
  size?: DaisySize;
  collapseSubTree(): Promise<void>;
  expandSubTree(): Promise<void>;
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
  private static draggedItem: ModusWcTreeItem | null = null;
  private static hasEmittedReorderForCurrentDrag = false;
  private inheritedAttributes: Attributes = {};
  private dropPosition: 'top' | 'bottom' | null = null;

  private resolveItemId(element: Element | null): TreeViewItemId | null {
    if (!element) return null;
    const treeItem = element as ITreeItemElement;
    return treeItem.value || element.getAttribute('value');
  }

  private getSiblingTreeItems(parent: Element): ITreeItemElement[] {
    return Array.from(parent.children).filter(
      (child): child is ITreeItemElement =>
        child.tagName === 'MODUS-WC-TREE-ITEM'
    );
  }

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The disabled state of the tree item. */
  @Prop() disabled?: boolean;

  /** If true, renders a checkbox at the start of the tree item. */
  @Prop() checkbox?: boolean = false;

  /** The text label displayed for the tree item. */
  @Prop({ mutable: true, reflect: true }) label!: string;

  /** Custom CSS class to apply to the li element. */
  @Prop() customClass?: string = '';

  /** The selected state of the tree item. */
  @Prop({ mutable: true, reflect: true }) selected?: boolean;

  /** The checked state of the tree item when checkbox is enabled. */
  @Prop({ mutable: true, reflect: true }) checked?: boolean;

  /** The unique identifying value of the tree item. */
  @Prop() value: string = '';

  /** Whether this tree item has a collapsible subtree. When true, the item will show a caret and handle toggle behavior. */
  @Prop() hasSubtree?: boolean;

  /** Actions to display for this tree item. */
  @Prop() treeItemActions?: ITreeItemActions[];

  /** The size of the tree item icons and actions. */
  @Prop() size: DaisySize = 'xs';

  /** If true, shows a drag handle icon for item reordering UX. */
  @Prop() itemsReordering?: boolean = false;

  /** If true, renders an inline editable text input for the label. */
  @Prop() inlineLabelEdit?: boolean = false;

  /** Internal state to track if subtree is expanded */
  @State() isExpanded: boolean = false;

  /** Internal state to track if checkbox is in indeterminate state */
  @State() isIndeterminate: boolean = false;

  /** Event emitted when a tree item is selected. */
  @StencilEvent({ bubbles: true, composed: true }) itemSelect!: EventEmitter<{
    value: string;
  }>;

  /** Event emitted when checkbox selection changes in multi-select mode. */
  @StencilEvent({ bubbles: true, composed: true })
  selectionsChange!: EventEmitter<{
    selectedValues: string[];
  }>;

  /** Event emitted when an item is reordered via drag and drop. */
  @StencilEvent({ bubbles: true, composed: true })
  itemReordered!: EventEmitter<ITreeItemReorderedEventDetail>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    if (this.hasSubtree) {
      this.el.addEventListener(
        'selectionsChange',
        this.updateIndeterminateState
      );
    }
  }

  disconnectedCallback() {
    this.el.removeEventListener(
      'selectionsChange',
      this.updateIndeterminateState
    );
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
      size: this.size,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleToggleClick = (event: MouseEvent | KeyboardEvent) => {
    event.stopPropagation();
    if (!this.hasSubtree) return;

    this.isExpanded = !this.isExpanded;

    const submenu = this.el.querySelector(
      '.modus-wc-tree-dropdown'
    ) as HTMLElement;

    if (submenu) {
      submenu.classList.toggle('modus-wc-tree-dropdown-show');
    }
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      this.handleEmittedSelect();
    }
  };

  private handleItemSelect = (event: MouseEvent) => {
    event.stopPropagation();
    this.handleEmittedSelect();
  };

  private handleInlineLabelInputChange = (event: CustomEvent) => {
    const target = event.target as HTMLInputElement;
    this.label = target.value;
  };

  private handleInlineLabelInteraction = (event: Event) => {
    event.stopPropagation();
  };

  private handleInlineLabelBlur = (event: CustomEvent<FocusEvent>) => {
    event.stopPropagation();
    this.inlineLabelEdit = false;
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

    const descendants = Array.from(
      submenu.querySelectorAll('modus-wc-tree-item')
    ) as ITreeItemElement[];
    const checkboxItems = descendants.filter((item) => item.checkbox);

    if (!checkboxItems.length) return;
    const checkedCount = checkboxItems.filter((item) => item.checked).length;

    const someChecked = checkedCount > 0;
    const allChecked = checkedCount === checkboxItems.length;

    this.checked = allChecked;
    this.isIndeterminate = someChecked && !allChecked;
  };

  private updateChildrenSelection = (selected: boolean) => {
    if (!this.hasSubtree) return;

    const submenu = this.el.querySelector('.modus-wc-tree-dropdown');
    if (!submenu) return;

    const descendants = Array.from(
      submenu.querySelectorAll('modus-wc-tree-item')
    ) as ITreeItemElement[];

    descendants.forEach((item) => {
      if (!item.checkbox) return;

      item.checked = selected;
      item.isIndeterminate = false;

      const checkbox = item.querySelector('modus-wc-checkbox');
      if (checkbox) {
        checkbox.setAttribute('value', selected.toString());
        checkbox.removeAttribute('indeterminate');
      }
    });
  };

  private handleEmittedSelect = () => {
    this.itemSelect.emit({ value: this.value });
  };

  private getRootTreeView(): HTMLElement | null {
    let current: HTMLElement | null = this.el.closest('modus-wc-tree-view');

    while (current?.parentElement?.closest('modus-wc-tree-view')) {
      current = current.parentElement.closest('modus-wc-tree-view');
    }

    return current;
  }

  private handleCheckboxClick = () => {
    const newValue = !this.checked || this.isIndeterminate;

    this.checked = newValue;
    this.isIndeterminate = false;
    this.updateChildrenSelection(newValue);

    // Emit selectionChange event with all selected values for multi-select mode
    const rootTreeView = this.getRootTreeView();
    if (rootTreeView) {
      const allTreeItems = Array.from(
        rootTreeView.querySelectorAll('modus-wc-tree-item')
      ) as ITreeItemElement[];
      const selectedValues = allTreeItems
        .filter((item) => item.checkbox && item.checked)
        .map((item) => item.value);

      this.selectionsChange.emit({ selectedValues });
    }
  };

  private clearDropIndicator() {
    this.dropPosition = null;
    const li = this.el.querySelector('li');
    li?.classList.remove('modus-wc-tree-drop-top', 'modus-wc-tree-drop-bottom');
  }

  private setDropIndicator(position: 'top' | 'bottom') {
    this.dropPosition = position;
    const li = this.el.querySelector('li');
    if (!li) return;

    li.classList.remove('modus-wc-tree-drop-top', 'modus-wc-tree-drop-bottom');
    li.classList.add(
      position === 'top'
        ? 'modus-wc-tree-drop-top'
        : 'modus-wc-tree-drop-bottom'
    );
  }

  private handleDragStart = (event: DragEvent) => {
    if (!this.itemsReordering || this.disabled) return;

    ModusWcTreeItem.draggedItem = this;
    ModusWcTreeItem.hasEmittedReorderForCurrentDrag = false;
    event.stopPropagation();

    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', this.value || this.label);
    }
  };

  private handleDragOver = (event: DragEvent) => {
    if (!this.itemsReordering || this.disabled) return;
    if (!ModusWcTreeItem.draggedItem || ModusWcTreeItem.draggedItem === this) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const li = this.el.querySelector('li');
    if (!li) return;

    const rect = li.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const position: 'top' | 'bottom' = event.clientY < midY ? 'top' : 'bottom';
    this.setDropIndicator(position);

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  };

  private handleDragLeave = () => {
    this.clearDropIndicator();
  };

  private handleDrop = (event: DragEvent) => {
    if (!this.itemsReordering || this.disabled) return;
    if (!ModusWcTreeItem.draggedItem || ModusWcTreeItem.draggedItem === this) {
      this.clearDropIndicator();
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const sourceHost = ModusWcTreeItem.draggedItem.el;
    const targetHost = this.el;
    const sourceParent = sourceHost.parentElement;
    const targetParent = targetHost.parentElement;

    if (!sourceParent || !targetParent) {
      this.clearDropIndicator();
      return;
    }
    const sourceSiblingTreeItems = this.getSiblingTreeItems(sourceParent);
    const previousIndex = sourceSiblingTreeItems.indexOf(
      sourceHost as ITreeItemElement
    );
    const draggedValue = this.resolveItemId(sourceHost);
    const oldParentTreeItem = sourceParent.closest(
      'modus-wc-tree-item'
    ) as ITreeItemElement | null;
    const newParentTreeItem = targetParent.closest(
      'modus-wc-tree-item'
    ) as ITreeItemElement | null;
    const oldParentId = this.resolveItemId(oldParentTreeItem);
    const newParentId = this.resolveItemId(newParentTreeItem);

    if (previousIndex === -1 || !draggedValue) {
      this.clearDropIndicator();
      return;
    }

    if (this.dropPosition === 'top') {
      targetParent.insertBefore(sourceHost, targetHost);
    } else {
      targetParent.insertBefore(sourceHost, targetHost.nextSibling);
    }

    const updatedSiblingTreeItems = this.getSiblingTreeItems(targetParent);
    const currentIndex = updatedSiblingTreeItems.indexOf(
      sourceHost as ITreeItemElement
    );

    if (currentIndex === -1) {
      this.clearDropIndicator();
      return;
    }

    if (previousIndex === currentIndex) {
      this.clearDropIndicator();
      return;
    }

    if (ModusWcTreeItem.hasEmittedReorderForCurrentDrag) {
      this.clearDropIndicator();
      return;
    }

    this.itemReordered.emit({
      parameters: {
        itemId: draggedValue,
        oldPosition: {
          parentId: oldParentId,
          index: previousIndex,
        },
        newPosition: {
          parentId: newParentId,
          index: currentIndex,
        },
      },
    });
    ModusWcTreeItem.hasEmittedReorderForCurrentDrag = true;

    this.clearDropIndicator();
  };

  private handleDragEnd = () => {
    ModusWcTreeItem.draggedItem = null;
    ModusWcTreeItem.hasEmittedReorderForCurrentDrag = false;
    this.clearDropIndicator();
  };

  render() {
    return (
      <Host>
        <li
          aria-selected={
            this.checkbox ? undefined : this.selected ? 'true' : 'false'
          }
          aria-checked={
            this.checkbox
              ? this.isIndeterminate
                ? 'mixed'
                : this.checked
                  ? 'true'
                  : 'false'
              : undefined
          }
          aria-expanded={this.hasSubtree ? String(this.isExpanded) : undefined}
          class={this.getClasses()}
          draggable={this.itemsReordering && !this.disabled}
          onClick={this.handleItemSelect}
          onDragEnd={this.handleDragEnd}
          onDragLeave={this.handleDragLeave}
          onDragOver={this.handleDragOver}
          onDragStart={this.handleDragStart}
          onDrop={this.handleDrop}
          onKeyDown={this.handleKeyDown}
          role="treeitem"
          tabIndex={this.disabled ? -1 : 0}
          {...this.inheritedAttributes}
        >
          <div
            class={
              `modus-wc-tree-content` +
              (this.hasSubtree ? ' modus-wc-sub-tree' : '')
            }
          >
            {this.itemsReordering && (
              <modus-wc-icon
                name="drag_indicator"
                size={this.size}
                decorative={true}
                customClass="modus-wc-tree-drag-handle"
              ></modus-wc-icon>
            )}
            <modus-wc-button
              variant="borderless"
              shape="circle"
              size={this.size}
              customClass="modus-wc-tree-toggle-btn"
              aria-label={
                this.isExpanded
                  ? `Collapse ${this.label}`
                  : `Expand ${this.label}`
              }
              disabled={!this.hasSubtree}
              onButtonClick={(e) => {
                this.handleToggleClick(e.detail);
              }}
            >
              <modus-wc-icon
                name={this.isExpanded ? 'expand_more' : 'chevron_right'}
                customClass={`modus-wc-tree-toggle-icon ${this.isExpanded ? 'modus-wc-tree-toggle-expanded' : ''} ${this.hasSubtree ? 'modus-wc-tree-toggle-button' : 'modus-wc-tree-toggle-button-hidden'}`}
                size={this.size}
              ></modus-wc-icon>
            </modus-wc-button>
            {this.checkbox && (
              <modus-wc-checkbox
                aria-label={`Select ${this.label}`}
                disabled={this.disabled}
                value={!!this.checked}
                size={this.size === 'xs' ? 'sm' : this.size}
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
              <div class="modus-wc-tree-item-label">
                {this.inlineLabelEdit ? (
                  <modus-wc-text-input
                    value={this.label}
                    onInputBlur={this.handleInlineLabelBlur}
                    onClick={this.handleInlineLabelInteraction}
                    onInputChange={this.handleInlineLabelInputChange}
                    onKeyDown={this.handleInlineLabelInteraction}
                  ></modus-wc-text-input>
                ) : (
                  this.label
                )}
              </div>
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
