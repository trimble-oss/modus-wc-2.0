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
} from '@stencil/core';
import { ModusSize } from '../../types';

export interface ModusTreeItemActions {
  id: string; // Unique identifier for the action
  icon: string; // Icon name for the action, e.g., 'edit', 'trash'
  iconVariant?: 'solid' | 'outlined'; // Optional variant for the icon
  label: string; // Text label for the action, used for accessibility and tooltips
  ariaLabel?: string; // Optional label for accessibility
  disabled?: boolean; // Optional flag to disable the action
}

/** * ModusWcTreeActions is a component that renders action buttons for tree items in the Modus content tree.
 * It supports displaying a primary action and grouping additional actions in a dropdown menu if there are more than two actions.
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

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** List of actions to display */
  @Prop({ mutable: true }) actions?: ModusTreeItemActions[];

  /** The size of the action buttons and icons. */
  @Prop() size: ModusSize = 'md';

  /** Internal state for dropdown visibility */
  @State() isDropdownOpen: boolean = false;

  /** Event emitted when a dropdown is opened */
  @StencilEvent() dropdownOpened!: EventEmitter<HTMLElement>;

  /** Event emitted when an action is clicked */
  @StencilEvent() treeActionClick!: EventEmitter<{
    actionId: string;
    actionName: string;
  }>;

  componentDidLoad() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentDidUpdate() {
    if (this.actions && this.actions.length > 2) {
      this.initializePopper();
    } else if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside);
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  @Listen('dropdownOpened', { target: 'document' })
  handleOtherDropdownOpened(event: CustomEvent<HTMLElement>) {
    // Close this dropdown if another one was opened
    if (event.detail !== this.el && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  private handleActionClick = (
    action: ModusTreeItemActions,
    event: MouseEvent
  ) => {
    event.stopPropagation();
    if (action.disabled) return;

    this.treeActionClick.emit({
      actionId: action.id,
      actionName: action.label,
    });

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

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.isDropdownOpen) return;

    const target = event.target as HTMLElement;
    const clickedButton = this.moreActionsButton?.contains(target);
    if (!clickedButton) {
      this.isDropdownOpen = false;
    }
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
        strategy: 'absolute',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top-start', 'bottom-end', 'top-end'],
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
              variant="borderless"
              size={this.size}
              shape="circle"
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
                variant="borderless"
                size={this.size}
                shape="circle"
                ref={(el) => (this.moreActionsButton = el as HTMLElement)}
                onClick={this.handleMoreActionsClick}
                aria-expanded={this.isDropdownOpen ? 'true' : 'false'}
                aria-haspopup="true"
              >
                <modus-wc-icon
                  name="more_vertical"
                  size={this.size}
                ></modus-wc-icon>
              </modus-wc-button>
              <div
                class={`modus-wc-tree-more-actions-dropdown ${this.isDropdownOpen ? 'show' : ''}`}
                ref={(el) => (this.moreActionsDropdown = el as HTMLElement)}
                role="menu"
              >
                {remainingActions.map((action) => (
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
                ))}
              </div>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
