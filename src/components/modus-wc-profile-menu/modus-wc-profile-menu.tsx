import { Component, Element, h, Host, Prop } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';

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

  /** Configuration for the first submenu including title and items */
  @Prop() subMenuOne?: ISubMenu;

  /** Configuration for the second submenu including title and items */
  @Prop() subMenuTwo?: ISubMenu;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  render() {
    return (
      <Host {...this.inheritedAttributes}>
        <modus-wc-panel height="auto">
          <div
            class="profile-menu-header"
            slot="header"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--modus-wc-spacing-sm)',
              padding: 'var(--modus-wc-spacing-lg)',
            }}
          >
            <modus-wc-avatar
              img-src={this.profileProps.profileImageUrl}
              alt={this.profileProps.userName || 'Profile'}
              size="sm"
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
            <modus-wc-typography
              hierarchy="p"
              label="Manage my Trimble ID"
            ></modus-wc-typography>
          </div>
          <modus-wc-divider
            color="primary"
            orientation="horizontal"
          ></modus-wc-divider>

          <div slot="body">
            <modus-wc-menu size="md">
              <modus-wc-menu-item label="My Profile">
                <modus-wc-icon
                  slot="start-icon"
                  name="info"
                  variant="solid"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="My Products">
                <modus-wc-icon
                  slot="start-icon"
                  name="home"
                  variant="solid"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="Support center">
                <modus-wc-icon
                  slot="start-icon"
                  name="bar_graph"
                  variant="solid"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="Admin settings">
                <modus-wc-icon
                  slot="start-icon"
                  name="download"
                ></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
            <slot name="sub-menu-one">
              {this.subMenuOne &&
                this.subMenuOne.items &&
                this.subMenuOne.items.length > 0 && (
                  <div class="submenu-section">
                    <modus-wc-divider></modus-wc-divider>
                    {this.subMenuOne.title && (
                      <modus-wc-typography
                        weight="semibold"
                        size="md"
                        label={this.subMenuOne.title}
                      ></modus-wc-typography>
                    )}
                    <modus-wc-menu size="md">
                      {this.subMenuOne.items.map((item) => (
                        <modus-wc-menu-item label={item.label}>
                          {item.icon && (
                            <modus-wc-icon
                              slot="start-icon"
                              name={item.icon}
                              variant={item.iconVariant || 'solid'}
                            ></modus-wc-icon>
                          )}
                        </modus-wc-menu-item>
                      ))}
                    </modus-wc-menu>
                  </div>
                )}
            </slot>
            <slot name="sub-menu-two">
              {this.subMenuTwo &&
                this.subMenuTwo.items &&
                this.subMenuTwo.items.length > 0 && (
                  <div class="submenu-section">
                    <modus-wc-divider></modus-wc-divider>
                    {this.subMenuTwo.title && (
                      <modus-wc-typography
                        weight="semibold"
                        size="md"
                        label={this.subMenuTwo.title}
                      ></modus-wc-typography>
                    )}
                    <modus-wc-menu size="md">
                      {this.subMenuTwo.items.map((item) => (
                        <modus-wc-menu-item label={item.label}>
                          {item.icon && (
                            <modus-wc-icon
                              slot="start-icon"
                              name={item.icon}
                              variant={item.iconVariant || 'solid'}
                            ></modus-wc-icon>
                          )}
                        </modus-wc-menu-item>
                      ))}
                    </modus-wc-menu>
                  </div>
                )}
            </slot>
          </div>
          <modus-wc-typography
            slot="footer"
            hierarchy="p"
            label="©[Year], Trimble Inc."
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--modus-wc-spacing-sm)',
              padding: 'var(--modus-wc-spacing-lg)',
            }}
          ></modus-wc-typography>
        </modus-wc-panel>
      </Host>
    );
  }
}
