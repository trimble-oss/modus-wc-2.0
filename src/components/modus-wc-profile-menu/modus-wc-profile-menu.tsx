import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  Event as StencilEvent,
} from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';
import { renderSubMenu } from './utils/menu_template';

export interface IMenuItem {
  /** The display text for the menu item. */
  label: string;
  /** The name of the icon to display alongside the menu item (optional). */
  icon?: string;
  /** The variant of the icon to use, such as 'solid' or 'outlined' (optional). */
  iconVariant?: 'solid' | 'outlined';
  /** The value associated with the menu item, used for selection (optional). */
  value?: string;
}

export interface ISubMenu {
  /** Title for the submenu section */
  title?: string;
  /** Array of menu items */
  items: IMenuItem[];
}

export interface IProfileMenuProps {
  /** The URL of the profile image. */
  profileImageUrl: string;
  /** The header name of the profile menu. */
  headerName: string;
  /** The name of the user. */
  userName: string;
  /** The email of the user. */
  userEmail: string;
  /** The URL for managing the user's Trimble ID (optional). */
  manageTrimbleIdLink?: string;
}

@Component({
  tag: 'modus-wc-profile-menu',
  styleUrl: 'modus-wc-profile-menu.scss',
  shadow: false,
})
export class ModusWcProfileMenu {
  private inheritedAttributes: Attributes = {};

  @Element() el!: HTMLElement;

  /** Profile menu properties containing user information */
  @Prop() profileProps!: IProfileMenuProps;

  /** Configuration for the first menu including title and items */
  @Prop() menuOne?: ISubMenu;

  /** Configuration for the second menu including title and items */
  @Prop() menuTwo?: ISubMenu;

  /** Emitted when the Sign Out menu item is clicked */
  @StencilEvent() signOutClick!: EventEmitter<void>;

  /** Emitted when any menu item is clicked, passing back the item value or label */
  @StencilEvent() menuItemClick!: EventEmitter<string>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private handleMenuItemClick = (value: string) => {
    this.menuItemClick.emit(value);
  };

  private currentYear = new Date().getFullYear();
  private mainMenu: ISubMenu = {
    items: [
      {
        label: 'My Profile',
        icon: 'info',
        iconVariant: 'solid',
        value: 'my-profile',
      },
      {
        label: 'My Products',
        icon: 'home',
        iconVariant: 'solid',
        value: 'my-products',
      },
      {
        label: 'Support center',
        icon: 'bar_graph',
        iconVariant: 'solid',
        value: 'support-center',
      },
      { label: 'Admin settings', icon: 'download', value: 'admin-settings' },
    ],
  };

  render() {
    return (
      <Host {...this.inheritedAttributes}>
        <modus-wc-panel height="auto" width="282px">
          <div class="profile-menu-header" slot="header">
            <modus-wc-avatar
              img-src={this.profileProps.profileImageUrl}
              alt={this.profileProps.userName || 'Profile'}
              size="md"
            ></modus-wc-avatar>
            <div class="text-container">
              <modus-wc-typography
                customClass="header-text"
                weight="semibold"
                size="sm"
                label={this.profileProps.headerName}
              ></modus-wc-typography>

              <modus-wc-typography
                customClass="user-name-text"
                weight="semibold"
                label={this.profileProps.userName}
              ></modus-wc-typography>

              <modus-wc-typography
                customClass="email-text"
                weight="semibold"
                size="sm"
                label={this.profileProps.userEmail}
              ></modus-wc-typography>
            </div>
            {this.profileProps.manageTrimbleIdLink && (
              <a href={this.profileProps.manageTrimbleIdLink}>
                <modus-wc-typography
                  customClass="manageLink"
                  hierarchy="p"
                  label="Manage my Trimble ID"
                ></modus-wc-typography>
              </a>
            )}
          </div>
          <div slot="body">
            {renderSubMenu(this.mainMenu, this.handleMenuItemClick)}
            {this.menuOne &&
              renderSubMenu(this.menuOne, this.handleMenuItemClick)}
            {this.menuTwo &&
              renderSubMenu(this.menuTwo, this.handleMenuItemClick)}
            <modus-wc-menu>
              <modus-wc-menu-item
                label="Sign Out"
                size="md"
                onItemSelect={() => this.signOutClick.emit()}
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="sign_out"
                ></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </div>
          <div slot="footer" class="profile-menu-footer">
            <modus-wc-typography
              hierarchy="p"
              label={`©${this.currentYear}, Trimble Inc.`}
            ></modus-wc-typography>
          </div>
        </modus-wc-panel>
      </Host>
    );
  }
}
