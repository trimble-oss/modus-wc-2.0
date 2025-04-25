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
import { MoreVerticalSolidIcon } from '../../icons/more-vertical-solid.icon';
import { NotificationsSolidIcon } from '../../icons/notifications-solid.icon';
import { SearchSolidIcon } from '../../icons/search-solid.icon';
import { TrimbleLogoFullIcon } from '../../icons/trimble-logo-full.icon';
import { TrimbleLogoGlobeIcon } from '../../icons/trimble-logo-globe.icon';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface INavbarTextOverrides {
  /** Replaces the text for "Apps" in the condensed menu. */
  apps?: string;
  /** Replaces the text for "Help" in the condensed menu. */
  help?: string;
  /** Replaces the text for "Notifications" in the condensed menu. */
  notifications?: string;
  /** Replaces the text for "Search" in the condensed menu. */
  search?: string;
}

export interface INavbarVisibility {
  /** Controls visibility of the apps button. */
  apps?: boolean;
  /** Controls visibility of the help button. */
  help?: boolean;
  /** Controls visibility of the main menu button. */
  mainMenu?: boolean;
  /** Controls visibility of the notifications button. */
  notifications?: boolean;
  /** Controls visibility of the search button. */
  search?: boolean;
  /** Controls visibility of the search input. */
  searchInput?: boolean;
  /** Controls visibility of the user button. */
  user?: boolean;
}

export interface INavbarUserCard {
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
 * The component supports a 'main-menu', 'notifications', and 'apps' <slot> for injecting custom HTML menus.
 * It also supports a 'start', 'center', and 'end' <slot> for injecting additional custom HTML.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-navbar',
  styleUrl: 'modus-wc-navbar.scss',
  shadow: false,
})
export class ModusWcNavbar {
  private appsRef?: HTMLDivElement;
  private condensedMenuRef?: HTMLElement;
  private inheritedAttributes: Attributes = {};
  private menuRef?: HTMLDivElement;
  private notificationsRef?: HTMLDivElement;
  private searchDebounceTimer: number | null = null;
  private userRef?: HTMLDivElement;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The state of the apps menu visibility. */
  @Prop({ mutable: true }) appsMenuOpen?: boolean = false;

  /** Applies condensed layout and styling. */
  @Prop() condensed?: boolean = false;

  /** The state of the condensed menu visibility. */
  @Prop({ mutable: true }) condensedMenuOpen?: boolean = false;

  /** Custom CSS class to apply to the host element. */
  @Prop() customClass?: string = '';

  /** The state of the main menu visibility. */
  @Prop({ mutable: true }) mainMenuOpen?: boolean = false;

  /** The state of the notifications menu visibility. */
  @Prop({ mutable: true }) notificationsMenuOpen?: boolean = false;

  /** Debounce time in milliseconds for search input changes. Default is 300ms. */
  @Prop() searchDebounceMs?: number = 300;

  /** The state of the search input visibility. */
  @Prop({ mutable: true }) searchInputOpen?: boolean = false;

  /** Text replacements for the navbar. */
  @Prop() textOverrides?: INavbarTextOverrides;

  /** User information used to render the user card. */
  @Prop() user!: INavbarUserCard;

  /** The state of the user menu visibility. */
  @Prop({ mutable: true }) userMenuOpen?: boolean = false;

  /** The visibility of individual navbar buttons. Default is user profile visible, others hidden. */
  @Prop() visibility?: INavbarVisibility = {
    apps: false,
    help: false,
    mainMenu: false,
    notifications: false,
    search: false,
    searchInput: false,
    user: true,
  };

  /** Event emitted when the apps button is clicked or activated via keyboard. */
  @StencilEvent() appsClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the help button is clicked or activated via keyboard. */
  @StencilEvent() helpClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the user profile Access MyTrimble button is clicked or activated via keyboard. */
  @StencilEvent() myTrimbleClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the notifications button is clicked or activated via keyboard. */
  @StencilEvent() notificationsClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the search input value is changed. */
  @StencilEvent() searchChange!: EventEmitter<{ value: string }>;

  /** Event emitted when the search button is clicked or activated via keyboard. */
  @StencilEvent() searchClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the user profile sign out button is clicked or activated via keyboard. */
  @StencilEvent() signOutClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the Trimble logo is clicked or activated via keyboard. */
  @StencilEvent() trimbleLogoClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  @State() private searchValue: string = '';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  @Listen('click', { target: 'document' })
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (this.appsMenuOpen) {
      const appsButton = this.el.querySelector(
        'modus-wc-button:has(svg[class*="apps"])'
      );
      if (
        this.appsRef &&
        !this.appsRef.contains(target) &&
        appsButton !== target &&
        !appsButton?.contains(target)
      ) {
        this.appsMenuOpen = false;
      }
    }

    if (this.condensedMenuOpen) {
      const condenseMenuButton = this.el.querySelector(
        'modus-wc-button:has(svg[class*="more-vertical"])'
      );
      if (
        this.condensedMenuRef &&
        !this.condensedMenuRef.contains(target) &&
        condenseMenuButton !== target &&
        !condenseMenuButton?.contains(target)
      ) {
        this.condensedMenuOpen = false;
      }
    }

    if (this.mainMenuOpen) {
      const menuButton = this.el.querySelector(
        'modus-wc-button:has(svg[class*="menu"])'
      );
      if (
        this.menuRef &&
        !this.menuRef.contains(target) &&
        menuButton !== target &&
        !menuButton?.contains(target)
      ) {
        this.mainMenuOpen = false;
      }
    }

    if (this.notificationsMenuOpen) {
      const notificationsButton = this.el.querySelector(
        'modus-wc-button:has(svg[class*="notifications"])'
      );
      if (
        this.notificationsRef &&
        !this.notificationsRef.contains(target) &&
        notificationsButton !== target &&
        !notificationsButton?.contains(target)
      ) {
        this.notificationsMenuOpen = false;
      }
    }

    if (this.userMenuOpen) {
      const userButton = this.el.querySelector(
        'modus-wc-button:has([class*="user-button"])'
      );
      if (
        this.userRef &&
        !this.userRef.contains(target) &&
        userButton !== target &&
        !userButton?.contains(target)
      ) {
        this.userMenuOpen = false;
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

  private handleAppsClick = (
    event?: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.toggleApps();
    this.appsClick.emit(event?.detail);
  };

  private handleHelpClick = (
    event?: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    if (this.condensed) {
      this.toggleCondensedMenu();
    }

    this.helpClick.emit(event?.detail);
  };

  private handleMyTrimbleClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.myTrimbleClick.emit(event.detail);
  };

  private handleNotificationsClick = (
    event?: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.toggleNotifications();
    this.notificationsClick.emit(event?.detail);
  };

  private handleSearchChange = (event: CustomEvent<InputEvent>) => {
    // Update the search value immediately for UI responsiveness
    this.searchValue = (event.target as HTMLInputElement).value;

    // Clear any existing timer
    if (this.searchDebounceTimer !== null) {
      window.clearTimeout(this.searchDebounceTimer);
    }

    // Set a new timer
    this.searchDebounceTimer = window.setTimeout(() => {
      this.searchChange.emit({ value: this.searchValue });
      this.searchDebounceTimer = null;
    }, this.searchDebounceMs);
  };

  private handleSearchClick = (
    event?: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.toggleSearch();
    this.searchClick.emit(event?.detail);
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

  private toggleApps = () => {
    if (this.condensed) {
      this.toggleCondensedMenu();
    } else {
      this.appsMenuOpen = !this.appsMenuOpen;
    }
  };

  private toggleCondensedMenu = () => {
    this.condensedMenuOpen = !this.condensedMenuOpen;
  };

  private toggleMainMenu = () => {
    this.mainMenuOpen = !this.mainMenuOpen;
  };

  private toggleNotifications = () => {
    if (this.condensed) {
      this.toggleCondensedMenu();
    } else {
      this.notificationsMenuOpen = !this.notificationsMenuOpen;
    }
  };

  private toggleSearch = () => {
    if (this.condensed) {
      this.toggleCondensedMenu();
    } else {
      this.searchInputOpen = !this.searchInputOpen;
    }
  };

  private toggleUser = () => {
    this.userMenuOpen = !this.userMenuOpen;
  };

  render() {
    const condensedHasItems =
      this.visibility?.apps ||
      this.visibility?.help ||
      this.visibility?.notifications ||
      this.visibility?.search;

    return (
      <Host class={this.getClasses()} {...this.inheritedAttributes}>
        <modus-wc-toolbar>
          <div slot="start">
            {this.visibility?.mainMenu && (
              <Fragment>
                <modus-wc-button
                  onButtonClick={this.toggleMainMenu}
                  shape="square"
                  size="sm"
                  variant="borderless"
                >
                  <MenuSolidIcon />
                </modus-wc-button>
                <div
                  class={`main-menu ${this.mainMenuOpen ? 'visible' : 'hidden'}`}
                  ref={(el) => (this.menuRef = el)}
                >
                  <slot name="main-menu" />
                </div>
              </Fragment>
            )}

            <modus-wc-button
              customClass="trimble-logo"
              onButtonClick={this.handleTrimbleLogoClick}
              size="sm"
              variant="borderless"
            >
              {this.condensed ? (
                <TrimbleLogoGlobeIcon />
              ) : (
                <TrimbleLogoFullIcon />
              )}
            </modus-wc-button>

            <slot name="start" />
          </div>

          <div slot="center">
            <slot name="center" />
          </div>

          <div slot="end">
            <slot name="end" />

            {this.condensed && condensedHasItems && (
              <Fragment>
                <modus-wc-button
                  onButtonClick={this.toggleCondensedMenu}
                  shape="square"
                  size="sm"
                  variant="borderless"
                >
                  <MoreVerticalSolidIcon />
                </modus-wc-button>
                {this.condensedMenuOpen && (
                  <modus-wc-menu
                    bordered
                    customClass="condense-menu"
                    ref={(el) => (this.condensedMenuRef = el)}
                  >
                    {this.visibility?.search && (
                      <modus-wc-menu-item
                        label={this.textOverrides?.search || 'Search'}
                        onItemSelect={() => this.handleSearchClick()}
                        value="search"
                      />
                    )}
                    {this.visibility?.notifications && (
                      <modus-wc-menu-item
                        label={
                          this.textOverrides?.notifications || 'Notifications'
                        }
                        onItemSelect={() => this.handleNotificationsClick()}
                        value="notifications"
                      />
                    )}
                    {this.visibility?.help && (
                      <modus-wc-menu-item
                        label={this.textOverrides?.help || 'Help'}
                        onItemSelect={() => this.handleHelpClick()}
                        value="help"
                      />
                    )}
                    {this.visibility?.apps && (
                      <modus-wc-menu-item
                        label={this.textOverrides?.apps || 'Apps'}
                        onItemSelect={() => this.handleAppsClick()}
                        value="apps"
                      />
                    )}
                  </modus-wc-menu>
                )}
              </Fragment>
            )}

            {this.visibility?.search && !this.condensed && (
              <Fragment>
                {this.visibility?.searchInput && this.searchInputOpen && (
                  <modus-wc-text-input
                    includeClear={true}
                    includeSearch={true}
                    onInputChange={this.handleSearchChange}
                    placeholder={this.textOverrides?.search || 'Search'}
                    value={this.searchValue}
                  />
                )}
                <modus-wc-button
                  onButtonClick={this.handleSearchClick}
                  shape="square"
                  size="sm"
                  variant="borderless"
                >
                  <SearchSolidIcon />
                </modus-wc-button>
              </Fragment>
            )}

            {this.visibility?.notifications && !this.condensed && (
              <Fragment>
                <modus-wc-button
                  onButtonClick={this.handleNotificationsClick}
                  shape="square"
                  size="sm"
                  variant="borderless"
                >
                  <NotificationsSolidIcon />
                </modus-wc-button>
                <div
                  class={`notifications ${this.notificationsMenuOpen ? 'visible' : 'hidden'}`}
                  ref={(el) => (this.notificationsRef = el)}
                >
                  <slot name="notifications" />
                </div>
              </Fragment>
            )}

            {this.visibility?.help && !this.condensed && (
              <modus-wc-button
                onButtonClick={this.handleHelpClick}
                shape="square"
                size="sm"
                variant="borderless"
              >
                <HelpSolidIcon />
              </modus-wc-button>
            )}

            {this.visibility?.apps && !this.condensed && (
              <Fragment>
                <modus-wc-button
                  onButtonClick={this.handleAppsClick}
                  shape="square"
                  size="sm"
                  variant="borderless"
                >
                  <AppsSolidIcon />
                </modus-wc-button>
                <div
                  class={`apps ${this.appsMenuOpen ? 'visible' : 'hidden'}`}
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
                  size="sm"
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
                  class={`user ${this.userMenuOpen ? 'visible' : 'hidden'}`}
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
