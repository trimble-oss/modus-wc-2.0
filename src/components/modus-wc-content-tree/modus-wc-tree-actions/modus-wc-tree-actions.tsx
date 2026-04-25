import { createPopper, Instance as PopperInstance } from '@popperjs/core';
import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { DaisySize } from '../../types';

export interface ITreeItemActions {
  id: string; // Unique identifier for the action
  icon: string; // Icon name for the action, e.g., 'edit', 'trash'
  iconVariant?: 'solid' | 'outlined'; // Optional variant for the icon
  label: string; // Text label for the action, used for accessibility and tooltips
  ariaLabel?: string; // Optional label for accessibility
  disabled?: boolean; // Optional flag to disable the action
}

/**
 * ModusWcTreeActions is a component that renders action buttons for tree items in the Modus content tree.
 * It supports displaying a primary action and grouping additional actions in a dropdown menu if there are more than two actions.
 * @internal
 */
@Component({
  tag: 'modus-wc-tree-actions',
  styleUrl: 'modus-wc-tree-actions.scss',
  shadow: false,
})
export class ModusWcTreeActions {
  private moreActionsButton!: HTMLElement;
  private moreActionsDropdown!: HTMLElement;
  private popperInstance: PopperInstance | null = null;
  private readonly handleDocumentPointerDown = (event: Event) => {
    if (!this.isDropdownOpen) return;

    const target = event.target as Node | null;
    if (!target || !this.el.contains(target)) {
      this.isDropdownOpen = false;
    }
  };

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** List of actions to display */
  @Prop() actions?: ITreeItemActions[];

  /** The size of the action buttons and icons. */
  @Prop() size: DaisySize = 'xs';

  /** Internal state for dropdown visibility */
  @State() isDropdownOpen: boolean = false;
  @State() pendingDeleteAction?: ITreeItemActions;

  /** Event emitted when a dropdown is opened */
  @StencilEvent() dropdownOpened!: EventEmitter<HTMLElement>;

  /** Event emitted when an action is clicked */
  @StencilEvent() treeActionClick!: EventEmitter<{
    actionId: string;
    actionName: string;
    itemId: string | null;
    parentItemId: string | null;
  }>;

  componentDidLoad() {
    this.updatePopperInstance();
    document.addEventListener(
      'pointerdown',
      this.handleDocumentPointerDown,
      true
    );
  }

  componentDidRender() {
    this.updatePopperInstance();
  }

  @Watch('actions')
  onActionsChange() {
    this.updatePopperInstance();
  }

  @Watch('isDropdownOpen')
  onDropdownOpenChange() {
    if (!this.isDropdownOpen) {
      this.pendingDeleteAction = undefined;
      return;
    }

    if (!this.isDropdownOpen || !this.popperInstance) {
      return;
    }

    // Recalculate after the dropdown is rendered with `show` class.
    // istanbul ignore next
    requestAnimationFrame(() => {
      void this.popperInstance?.update();
    });
  }

  disconnectedCallback() {
    document.removeEventListener(
      'pointerdown',
      this.handleDocumentPointerDown,
      true
    );

    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  @Listen('click', { target: 'document' })
  handleClickOutside(event: MouseEvent) {
    if (!this.isDropdownOpen) return;

    const target = event.target as HTMLElement;
    const clickedButton = this.moreActionsButton?.contains(target);
    if (!clickedButton) {
      this.isDropdownOpen = false;
    }
  }

  @Listen('dropdownOpened', { target: 'document' })
  handleOtherDropdownOpened(event: CustomEvent<HTMLElement>) {
    // Close this dropdown if another one was opened
    if (event.detail !== this.el && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  private getItemAndParentIds(): {
    itemId: string | null;
    parentItemId: string | null;
  } {
    const treeItem = this.el.closest(
      'modus-wc-tree-item'
    ) as HTMLElement | null;
    if (!treeItem) {
      return { itemId: null, parentItemId: null };
    }

    const itemId = this.getTreeItemValue(treeItem);

    // Resolve the nearest ancestor tree-item above the owning one.
    const parentElement = treeItem.parentElement?.closest(
      'modus-wc-tree-item'
    ) as HTMLElement | null;
    const parentItemId = parentElement
      ? this.getTreeItemValue(parentElement)
      : null;

    return { itemId, parentItemId };
  }

  private getTreeItemValue(element: HTMLElement): string | null {
    const value = (element as HTMLElement & { value?: string }).value;
    return value || element.getAttribute('value') || null;
  }

  private handleActionClick = (action: ITreeItemActions, event: MouseEvent) => {
    event.stopPropagation();
    if (action.disabled) return;

    if (action.id === 'delete') {
      this.pendingDeleteAction = action;
      this.isDropdownOpen = true;
      if (this.popperInstance) {
        void this.popperInstance.update();
      }
      return;
    }

    const { itemId, parentItemId } = this.getItemAndParentIds();
    this.treeActionClick.emit({
      actionId: action.id,
      actionName: action.label,
      itemId,
      parentItemId,
    });

    this.isDropdownOpen = false;
  };

  private handleDeleteCancel = (event: MouseEvent) => {
    event.stopPropagation();
    this.pendingDeleteAction = undefined;
  };

  private handleDeleteConfirm = (event: MouseEvent) => {
    event.stopPropagation();
    if (!this.pendingDeleteAction) return;

    const { itemId, parentItemId } = this.getItemAndParentIds();
    this.treeActionClick.emit({
      actionId: this.pendingDeleteAction.id,
      actionName: this.pendingDeleteAction.label,
      itemId,
      parentItemId,
    });
    this.pendingDeleteAction = undefined;
    this.isDropdownOpen = false;
  };

  private handleMoreActionsClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;

    if (this.isDropdownOpen) {
      // Emit event to close other dropdowns
      this.dropdownOpened.emit(this.el);

      if (this.popperInstance) {
        void this.popperInstance.update();
      }
    }
  };

  private updatePopperInstance = () => {
    const hasDropdownActions = (this.actions?.length ?? 0) > 1;

    if (!hasDropdownActions) {
      if (this.popperInstance) {
        this.popperInstance.destroy();
        this.popperInstance = null;
      }
      return;
    }

    if (!this.moreActionsButton || !this.moreActionsDropdown) {
      return;
    }

    if (!this.popperInstance) {
      this.initializePopper();
      return;
    }

    void this.popperInstance.update();
  };

  private initializePopper = () => {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }

    if (!this.moreActionsButton || !this.moreActionsDropdown) {
      return;
    }

    this.popperInstance = createPopper(
      this.moreActionsButton,
      this.moreActionsDropdown,
      {
        placement: 'bottom',
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              padding: 8,
              boundary: 'viewport',
            },
          },
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top-start', 'bottom-end', 'top-end'],
              padding: 8,
              boundary: 'viewport',
            },
          },
          {
            name: 'computeStyles',
            options: {
              adaptive: true,
              gpuAcceleration: true,
            },
          },
          {
            name: 'eventListeners',
            options: {
              scroll: true,
              resize: true,
            },
          },
        ],
      }
    );
  };

  render() {
    const remainingActions = this.actions?.slice(1) || [];

    return (
      <Host>
        <div class="modus-wc-tree-actions-container">
          {this.actions?.slice(0, 1).map((action) => (
            <modus-wc-button
              key={action.id}
              customClass="modus-wc-tree-action-button"
              disabled={action.disabled}
              size={this.size}
              shape="circle"
              variant="borderless"
              onClick={(e) => this.handleActionClick(action, e)}
            >
              <modus-wc-icon
                name={action.icon}
                size={this.size}
                customClass="modus-wc-tree-action-icon"
              ></modus-wc-icon>
            </modus-wc-button>
          ))}
          {remainingActions.length > 0 && (
            <div class="modus-wc-tree-more-actions-wrapper">
              <modus-wc-button
                customClass="modus-wc-tree-action-button"
                size={this.size}
                shape="circle"
                variant="borderless"
                ref={(el) => (this.moreActionsButton = el as HTMLElement)}
                onClick={this.handleMoreActionsClick}
                aria-expanded={this.isDropdownOpen ? 'true' : 'false'}
                aria-haspopup="true"
                aria-label="More actions"
              >
                <modus-wc-icon
                  name="more_vertical"
                  size={this.size}
                  customClass="modus-wc-tree-action-icon"
                ></modus-wc-icon>
              </modus-wc-button>
              <div
                class={`modus-wc-tree-more-actions-dropdown ${this.isDropdownOpen ? 'show' : ''}`}
                ref={(el) => (this.moreActionsDropdown = el as HTMLElement)}
                role="menu"
              >
                {this.pendingDeleteAction ? (
                  <div class="modus-wc-tree-delete-confirmation">
                    <div class="modus-wc-tree-delete-confirmation-title">
                      Confirm Deletion
                    </div>
                    <div class="modus-wc-tree-delete-confirmation-text">
                      Are you sure you want to delete this item?
                    </div>
                    <div class="modus-wc-tree-delete-confirmation-actions">
                      <modus-wc-button
                        color="tertiary"
                        size="sm"
                        customClass="modus-wc-tree-cancel-confirmation-button"
                        onClick={this.handleDeleteCancel}
                        aria-label="Cancel delete"
                      >
                        Cancel
                      </modus-wc-button>
                      <modus-wc-button
                        color="danger"
                        size="sm"
                        customClass="modus-wc-tree-delete-confirmation-button"
                        onClick={this.handleDeleteConfirm}
                        aria-label="Confirm delete"
                      >
                        Delete
                      </modus-wc-button>
                    </div>
                  </div>
                ) : (
                  remainingActions.map((action) => (
                    <button
                      key={action.id}
                      class={`modus-wc-tree-dropdown-action ${action.disabled ? 'disabled' : ''}`}
                      disabled={action.disabled}
                      onClick={(e) => this.handleActionClick(action, e)}
                      role="menuitem"
                      aria-label={action.ariaLabel || action.label}
                    >
                      <modus-wc-icon
                        name={action.icon}
                        size={this.size}
                        customClass="modus-wc-tree-action-icon"
                      ></modus-wc-icon>
                      {action.label}
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
