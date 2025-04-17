// TODO - add coverage
// istanbul ignore file

import {
  Component,
  Element,
  EventEmitter,
  Fragment,
  h,
  Host,
  Listen,
  Prop,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { AppsSolidIcon } from '../../icons/apps-solid.icon';
import { HelpSolidIcon } from '../../icons/help-solid.icon';
import { MenuSolidIcon } from '../../icons/menu-solid.icon';
import { NotificationsSolidIcon } from '../../icons/notifications-solid.icon';
import { TrimbleLogoFullIcon } from '../../icons/trimble-logo-full.icon';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface INavbarVisibility {
  /** Controls visibility of the apps button. */
  apps?: boolean;
  /** Controls visibility of the help button. */
  help?: boolean;
  /** Controls visibility of the main menu button. */
  mainMenu?: boolean;
  /** Controls visibility of the notifications button. */
  notifications?: boolean;
  /** Controls visibility of the user button. */
  user?: boolean;
}

export interface IUserCard {
  /** The alt value to set on the avatar. */
  avatarAlt?: string;
  /** The avatar image source value. */
  avatarSrc?: string;
  /** The email address of the user. */
  email: string;
  /** Text override for the Access MyTrimble button, allows for translation. */
  myTrimbleButton?: string;
  /** The name of the user */
  name: string;
  /** Text override for the Sign out button, allows for translation. */
  signOutButton?: string;
}

/**
 * A customizable navbar component used for top level navigation of all Trimble applications.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-navbar',
  styleUrl: 'modus-wc-navbar.scss',
  shadow: false,
})
export class ModusWcNavbar {
  private inheritedAttributes: Attributes = {};
  private menuRef?: HTMLDivElement;
  private notificationsRef?: HTMLDivElement;
  private appsRef?: HTMLDivElement;
  private userRef?: HTMLDivElement;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the host element. */
  @Prop() customClass?: string = '';

  /** User information used to render the user card. */
  @Prop() user!: IUserCard;

  /** The visibility of individual navbar buttons. */
  @Prop() visibility?: INavbarVisibility;

  /** Event emitted when the help button is clicked or activated via keyboard. */
  @StencilEvent() helpClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the user profile Access MyTrimble button is clicked or activated via keyboard. */
  @StencilEvent() myTrimbleClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the user profile sign out button is clicked or activated via keyboard. */
  @StencilEvent() signOutClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the Trimble logo is clicked or activated via keyboard. */
  @StencilEvent() trimbleLogoClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  @State() menuOpen: boolean = false;
  @State() notificationsOpen: boolean = false;
  @State() appsOpen: boolean = false;
  @State() userOpen: boolean = false;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  @Listen('click', { target: 'document' })
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (this.menuOpen) {
      const menuButton = this.el.querySelector(
        'modus-wc-button:has(svg[class*="menu"])'
      );
      if (
        this.menuRef &&
        !this.menuRef.contains(target) &&
        menuButton !== target &&
        !menuButton?.contains(target)
      ) {
        this.menuOpen = false;
      }
    }

    if (this.notificationsOpen) {
      const notificationsButton = this.el.querySelector(
        'modus-wc-button:has(svg[class*="notifications"])'
      );
      if (
        this.notificationsRef &&
        !this.notificationsRef.contains(target) &&
        notificationsButton !== target &&
        !notificationsButton?.contains(target)
      ) {
        this.notificationsOpen = false;
      }
    }

    if (this.appsOpen) {
      const appsButton = this.el.querySelector(
        'modus-wc-button:has(svg[class*="apps"])'
      );
      if (
        this.appsRef &&
        !this.appsRef.contains(target) &&
        appsButton !== target &&
        !appsButton?.contains(target)
      ) {
        this.appsOpen = false;
      }
    }

    if (this.userOpen) {
      const userButton = this.el.querySelector(
        'modus-wc-button:has([class*="user-button"])'
      );
      if (
        this.userRef &&
        !this.userRef.contains(target) &&
        userButton !== target &&
        !userButton?.contains(target)
      ) {
        this.userOpen = false;
      }
    }
  }

  private getClasses(): string {
    const classList: string[] = [''];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getUserInitials(): string {
    if (!this.user?.name) return '';

    return this.user.name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();
  }

  private handleHelpClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.helpClick.emit(event.detail);
  };

  private handleMyTrimbleClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.myTrimbleClick.emit(event.detail);
  };

  private handleSignOutClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.signOutClick.emit(event.detail);
  };

  private handleTrimbleLogoClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.trimbleLogoClick.emit(event.detail);
  };

  private toggleMenu = () => {
    this.menuOpen = !this.menuOpen;
  };

  private toggleNotifications = () => {
    this.notificationsOpen = !this.notificationsOpen;
  };

  private toggleApps = () => {
    this.appsOpen = !this.appsOpen;
  };

  private toggleUser = () => {
    this.userOpen = !this.userOpen;
  };

  render() {
    return (
      <Host class={this.getClasses()} {...this.inheritedAttributes}>
        <modus-wc-toolbar>
          <div slot="start">
            {this.visibility?.mainMenu && (
              <Fragment>
                <modus-wc-button
                  onButtonClick={this.toggleMenu}
                  shape="square"
                  size="xs"
                  variant="borderless"
                >
                  <MenuSolidIcon />
                </modus-wc-button>
                <div
                  class={`main-menu ${this.menuOpen ? 'visible' : 'hidden'}`}
                  ref={(el) => (this.menuRef = el)}
                >
                  <slot name="main-menu" />
                </div>
              </Fragment>
            )}

            <modus-wc-button
              customClass="trimble-logo"
              onButtonClick={this.handleTrimbleLogoClick}
              size="xs"
              variant="borderless"
            >
              <TrimbleLogoFullIcon />
            </modus-wc-button>

            <slot name="start" />
          </div>

          <div slot="center">
            <slot name="center" />
          </div>

          <div slot="end">
            <slot name="end" />

            {this.visibility?.notifications && (
              <Fragment>
                <modus-wc-button
                  onButtonClick={this.toggleNotifications}
                  shape="square"
                  size="xs"
                  variant="borderless"
                >
                  <NotificationsSolidIcon />
                </modus-wc-button>
                <div
                  class={`notifications ${this.notificationsOpen ? 'visible' : 'hidden'}`}
                  ref={(el) => (this.notificationsRef = el)}
                >
                  <slot name="notifications" />
                </div>
              </Fragment>
            )}

            {this.visibility?.help && (
              <modus-wc-button
                onButtonClick={this.handleHelpClick}
                shape="square"
                size="xs"
                variant="borderless"
              >
                <HelpSolidIcon />
              </modus-wc-button>
            )}

            {this.visibility?.apps && (
              <Fragment>
                <modus-wc-button
                  onButtonClick={this.toggleApps}
                  shape="square"
                  size="xs"
                  variant="borderless"
                >
                  <AppsSolidIcon />
                </modus-wc-button>
                <div
                  class={`apps ${this.appsOpen ? 'visible' : 'hidden'}`}
                  ref={(el) => (this.appsRef = el)}
                >
                  <slot name="apps" />
                </div>
              </Fragment>
            )}

            {this.visibility?.user && (
              <Fragment>
                <modus-wc-button
                  customClass="user-button"
                  onButtonClick={this.toggleUser}
                  shape="circle"
                  size="xs"
                  variant="borderless"
                >
                  {this.user?.avatarSrc ? (
                    <modus-wc-avatar
                      alt={this.user.avatarAlt || 'User avatar'}
                      imgSrc={this.user.avatarSrc}
                      size="xs"
                    />
                  ) : (
                    this.getUserInitials()
                  )}
                </modus-wc-button>
                <div
                  class={`user ${this.userOpen ? 'visible' : 'hidden'}`}
                  ref={(el) => (this.userRef = el)}
                >
                  <modus-wc-card>
                    <div slot="header">
                      {this.user?.avatarSrc ? (
                        <modus-wc-avatar
                          alt={this.user.avatarAlt || 'User avatar'}
                          imgSrc={this.user.avatarSrc}
                        />
                      ) : (
                        <div class="initials">{this.getUserInitials()}</div>
                      )}
                    </div>
                    <div slot="title">{this.user?.name}</div>
                    <div>{this.user?.email}</div>
                    <div slot="actions">
                      <modus-wc-button
                        customClass="my-trimble"
                        onButtonClick={this.handleMyTrimbleClick}
                      >
                        {this.user?.myTrimbleButton || 'Access MyTrimble'}
                      </modus-wc-button>
                    </div>
                    <div slot="footer">
                      <modus-wc-button
                        customClass="sign-out"
                        onButtonClick={this.handleSignOutClick}
                        variant="borderless"
                      >
                        {this.user?.signOutButton || 'Sign out'}
                      </modus-wc-button>
                    </div>
                  </modus-wc-card>
                </div>
              </Fragment>
            )}
          </div>
        </modus-wc-toolbar>
      </Host>
    );
  }
}
