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
import { AppsSolidIcon } from '../../icons/apps-solid.icon';
import { HelpSolidIcon } from '../../icons/help-solid.icon';
import { MenuSolidIcon } from '../../icons/menu-solid.icon';
import { NotificationsSolidIcon } from '../../icons/notifications-solid.icon';
import { TrimbleLogoFullIcon } from '../../icons/trimble-logo-full.icon';
import { Attributes, inheritAriaAttributes } from '../utils';

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

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the host element. */
  @Prop() customClass?: string = '';

  /** Event emitted when the help button is clicked or activated via keyboard. */
  @StencilEvent() helpClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  /** Event emitted when the Trimble logo is clicked or activated via keyboard. */
  @StencilEvent() trimbleLogoClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  @State() menuOpen: boolean = false;
  @State() notificationsOpen: boolean = false;
  @State() appsOpen: boolean = false;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  // TODO - add coverage
  // istanbul ignore next
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
  }

  private getClasses(): string {
    const classList: string[] = [''];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  // TODO - add coverage
  // istanbul ignore next
  private handleHelpClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.helpClick.emit(event.detail);
  };

  // TODO - add coverage
  // istanbul ignore next
  private handleTrimbleLogoClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.trimbleLogoClick.emit(event.detail);
  };

  // TODO - add coverage
  // istanbul ignore next
  private toggleMenu = () => {
    this.menuOpen = !this.menuOpen;
  };

  // TODO - add coverage
  // istanbul ignore next
  private toggleNotifications = () => {
    this.notificationsOpen = !this.notificationsOpen;
  };

  // TODO - add coverage
  // istanbul ignore next
  private toggleApps = () => {
    this.appsOpen = !this.appsOpen;
  };

  // TODO - add coverage
  // istanbul ignore next
  render() {
    return (
      <Host class={this.getClasses()} {...this.inheritedAttributes}>
        <modus-wc-toolbar>
          <div slot="start">
            <modus-wc-button
              onButtonClick={this.toggleMenu}
              shape="square"
              size="xs"
              variant="borderless"
            >
              <MenuSolidIcon />
            </modus-wc-button>
            <div
              class={`menu ${this.menuOpen ? 'visible' : 'hidden'}`}
              ref={(el) => (this.menuRef = el)}
            >
              <slot name="menu" />
            </div>

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

            <modus-wc-button
              onButtonClick={this.handleHelpClick}
              shape="square"
              size="xs"
              variant="borderless"
            >
              <HelpSolidIcon />
            </modus-wc-button>

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
          </div>
        </modus-wc-toolbar>
      </Host>
    );
  }
}
