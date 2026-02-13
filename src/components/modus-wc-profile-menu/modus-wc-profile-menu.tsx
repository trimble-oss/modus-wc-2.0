import { Component, Element, h, Host, Prop } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';
import { renderSubMenu } from './utils/menu_template';

export interface IMenuItem {
  /** The display text for the menu item. */
  label: string;
  /** The name of the icon to display alongside the menu item (optional). */
  icon?: string;
  /** The variant of the icon to use, such as 'solid' or 'outlined' (optional). */
  iconVariant?: 'solid' | 'outlined';
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

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  render() {
    const mainMenu: ISubMenu = {
      items: [
        { label: 'My Profile', icon: 'info', iconVariant: 'solid' },
        { label: 'My Products', icon: 'home', iconVariant: 'solid' },
        { label: 'Support center', icon: 'bar_graph', iconVariant: 'solid' },
        { label: 'Admin settings', icon: 'download' },
      ],
    };

    return (
      <Host {...this.inheritedAttributes}>
        <modus-wc-panel height="auto" width="282px">
          <div class="profile-menu-header" slot="header">
            <modus-wc-avatar
              img-src={this.profileProps.profileImageUrl}
              alt={this.profileProps.userName || 'Profile'}
              size="md"
            ></modus-wc-avatar>
            <modus-wc-typography
              weight="semibold"
              label={this.profileProps.headerName}
            ></modus-wc-typography>
            <modus-wc-typography
              weight="semibold"
              size="sm"
              label={this.profileProps.userName}
            ></modus-wc-typography>
            <modus-wc-typography
              weight="semibold"
              size="xs"
              label={this.profileProps.userEmail}
            ></modus-wc-typography>
            {this.profileProps.manageTrimbleIdLink && (
              <a href={this.profileProps.manageTrimbleIdLink}>
                <modus-wc-typography
                  class="manage-link"
                  hierarchy="p"
                  label="Manage my Trimble ID"
                ></modus-wc-typography>
              </a>
            )}
          </div>
          <div slot="body">
            {renderSubMenu(mainMenu)}
            {this.menuOne && renderSubMenu(this.menuOne)}
            {this.menuTwo && renderSubMenu(this.menuTwo)}
            <modus-wc-menu>
              <modus-wc-menu-item label="Sign Out" size="md">
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
              label="©[Year], Trimble Inc."
            ></modus-wc-typography>
          </div>
        </modus-wc-panel>
      </Host>
    );
  }
}
