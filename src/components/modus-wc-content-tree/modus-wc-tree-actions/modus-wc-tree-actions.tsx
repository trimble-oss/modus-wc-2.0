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
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** List of actions to display */
  @Prop() actions?: ITreeItemActions[];

  /** The size of the action buttons and icons. */
  @Prop() size: DaisySize = 'xs';

  @State() pendingDeleteAction?: ITreeItemActions;
  @State() menuVisible: boolean = false;

  /** Event emitted when a dropdown is opened */
  @StencilEvent() dropdownOpened!: EventEmitter<HTMLElement>;

  /** Event emitted when an action is clicked */
  @StencilEvent({ bubbles: true, composed: true })
  treeActionClick!: EventEmitter<{
    actionId: string;
    actionName: string;
  }>;

  @Listen('dropdownOpened', { target: 'document' })
  handleOtherDropdownOpened(event: CustomEvent<HTMLElement>) {
    if (event.detail !== this.el && this.menuVisible) {
      this.menuVisible = false;
      this.pendingDeleteAction = undefined;
    }
  }

  @Listen('menuVisibilityChange')
  handleMenuVisibilityChange(event: CustomEvent<{ isVisible: boolean }>) {
    if (!event.detail.isVisible) {
      this.pendingDeleteAction = undefined;
    }
    this.menuVisible = event.detail.isVisible;
    if (this.menuVisible) {
      this.dropdownOpened.emit(this.el);
    }
  }

  private handleActionClick = (action: ITreeItemActions, event: Event) => {
    event.stopPropagation();
    if (action.disabled) return;

    if (action.id === 'delete') {
      this.pendingDeleteAction = action;
      this.menuVisible = true;
      return;
    }

    this.treeActionClick.emit({
      actionId: action.id,
      actionName: action.label,
    });

    this.menuVisible = false;
  };

  private handleDeleteCancel = (event: Event) => {
    event.stopPropagation();
    this.pendingDeleteAction = undefined;
    this.menuVisible = false;
  };

  private handleDeleteConfirm = (event: Event) => {
    event.stopPropagation();
    if (!this.pendingDeleteAction) return;

    this.treeActionClick.emit({
      actionId: this.pendingDeleteAction.id,
      actionName: this.pendingDeleteAction.label,
    });
    this.pendingDeleteAction = undefined;
    this.menuVisible = false;
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
              disabled={action.disabled === true}
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
            <modus-wc-dropdown-menu
              customClass="modus-wc-tree-more-actions-wrapper"
              buttonShape="circle"
              buttonSize={this.size}
              buttonVariant="borderless"
              buttonAriaLabel="More actions"
              menuPlacement="bottom-start"
              menuVisible={this.menuVisible}
            >
              <modus-wc-icon
                slot="button"
                name="more_vertical"
                size={this.size}
                customClass="modus-wc-tree-action-icon"
              ></modus-wc-icon>
              <div slot="menu">
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
                    <modus-wc-menu-item
                      key={action.id}
                      label={action.label}
                      value={action.id}
                      disabled={action.disabled}
                      customClass="modus-wc-tree-dropdown-action"
                      onItemSelect={(e) => this.handleActionClick(action, e)}
                    >
                      <modus-wc-icon
                        slot="start-icon"
                        name={action.icon}
                        size={this.size}
                        customClass="modus-wc-tree-action-icon"
                      ></modus-wc-icon>
                    </modus-wc-menu-item>
                  ))
                )}
              </div>
            </modus-wc-dropdown-menu>
          )}
        </div>
      </Host>
    );
  }
}
