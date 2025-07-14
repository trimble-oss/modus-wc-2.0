import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface SideNavigationArgs {
  'custom-class'?: string;
  expanded: boolean;
  'max-width': string;
  'collapse-on-click-outside'?: boolean;
  mode: 'overlay' | 'push';
  'target-content'?: string;
}

const meta: Meta<SideNavigationArgs> = {
  title: 'Components/Side Navigation',
  component: 'modus-wc-side-navigation',
  args: {
    'collapse-on-click-outside': true,
    expanded: false,
    'max-width': '256px',
    mode: 'push',
    'target-content': '.panel-content',
  },
  argTypes: {
    'max-width': {
      control: { type: 'text' },
      description:
        'Maximum width of the side navigation panel in an expanded state.',
    },
    mode: {
      control: { type: 'select' },
      options: ['overlay', 'push'],
      description: 'Display mode of the side navigation (overlay or push).',
    },
  },
  decorators: [withActions],
  parameters: {
    layout: 'padded',
    actions: {
      handles: ['expandedChange'],
    },
  },
};

export default meta;

type Story = StoryObj<SideNavigationArgs>;

export const Default: Story = {
  render: (args) => {
    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      let sideNav: Element | null;

      if (storyContainer) {
        sideNav = storyContainer.querySelector('modus-wc-side-navigation');
      } else {
        sideNav = document.querySelector('modus-wc-side-navigation');
      }

      if (sideNav) {
        (sideNav as HTMLElement & { expanded: boolean }).expanded = e.detail;
      }
    };

    return html`
      <style>
        .layout-with-navbar {
          box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        .modus-wc-menu-item-labels {
          padding: 0 16px;
        }
        .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }
        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }
      </style>
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const menuItems = document.querySelectorAll('modus-wc-menu-item');

          menuItems.forEach((item) => {
            item.addEventListener('itemSelect', () => {
              menuItems.forEach((i) => i.removeAttribute('selected'));
              item.setAttribute('selected', '');
            });
          });
        });

        function handleMenuOpenChange(e) {
          const eventSource = e.target;
          const storyContainer = eventSource?.closest('.layout-with-navbar');

          let sideNav;

          if (storyContainer) {
            sideNav = storyContainer.querySelector('modus-wc-side-navigation');
          } else {
            sideNav = document.querySelector('modus-wc-side-navigation');
          }

          if (sideNav) {
            sideNav.expanded = e.detail;
          }
        }
      </script>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          user-name="John Doe"
          user-avatar="/assets/avatar.png"
          @mainMenuOpenChange=${handleMenuOpenChange}
          .visibility=${{
            apps: true,
            help: true,
            mainMenu: true,
            notifications: true,
            search: true,
            searchInput: false,
            user: true,
          }}
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=${args['collapse-on-click-outside']}
            custom-class=${ifDefined(args['custom-class'])}
            expanded=${args.expanded}
            max-width=${args['max-width']}
            mode=${ifDefined(args.mode)}
            target-content=${ifDefined(args['target-content'])}
          >
            <modus-wc-menu size="lg">
              <modus-wc-menu-item label="home" selected>
                <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="profile">
                <modus-wc-icon slot="start-icon" name="person"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="settings">
                <modus-wc-icon slot="start-icon" name="gears"></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <p>
                The side navigation of an application provides context through
                accessible menu options and positions a consistent component to
                connect to various pages in the application.
              </p>
              <p>
                The side navigation is a collapsible side content of the site’s
                pages. It is located alongside the page’s primary content. The
                component is designed to add side content to a fullscreen
                application. It is activated through the “hamburger” menu in the
                Navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

export const collapsibleMenu: Story = {
  render: (args) => {
    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      let sideNav: Element | null;

      if (storyContainer) {
        sideNav = storyContainer.querySelector('modus-wc-side-navigation');
      } else {
        sideNav = document.querySelector('modus-wc-side-navigation');
      }

      if (sideNav) {
        (sideNav as HTMLElement & { expanded: boolean }).expanded = e.detail;
      }
    };

    const handleMenuFocusout = (e: FocusEvent) => {
      const menu = e.target as HTMLElement;
      if (!menu) return;
      const dropdowns = menu.querySelectorAll('.modus-wc-menu-dropdown-toggle');
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('modus-wc-menu-dropdown-show');
      });

      document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
        dropdown.classList.remove('modus-wc-menu-dropdown-show');
      });
    };

    requestAnimationFrame(() => {
      document
        .querySelectorAll('.modus-wc-menu-dropdown-toggle')
        .forEach((toggle) => {
          toggle.addEventListener('click', (e) => {
            const sideNav = (e.currentTarget as HTMLElement).closest(
              'modus-wc-side-navigation'
            ) as HTMLElement & { expanded: boolean };

            if (sideNav && sideNav.expanded) {
              const toggle = e.currentTarget as HTMLElement;
              const dropdown = (e.currentTarget as HTMLElement)
                .nextElementSibling as HTMLElement;
              if (dropdown) {
                dropdown.classList.toggle('modus-wc-menu-dropdown-show');
                toggle.classList.toggle('modus-wc-menu-dropdown-show');
              }
            }
          });
        });
    });

    return html`
      <style>
        .layout-with-navbar {
          box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .menu-icon {
          margin-right: 1rem;
        }

        .menu-item {
          display: block;
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: var(--modus-wc-color-gray-9);
          font-size: 16px;
          line-height: 1.5;
        }

        .modus-wc-menu-dropdown {
          padding-left: 1rem;
        }

        .modus-wc-menu-dropdown-toggle {
          cursor: pointer;
          align-items: center;
          padding: 0.7rem 1.25rem;
          font-size: 16px;
          line-height: 1.5;
        }

        .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }

        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }

        ul {
          list-style: none;
        }
      </style>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          user-name="John Doe"
          user-avatar="/assets/avatar.png"
          @mainMenuOpenChange=${handleMenuOpenChange}
          .visibility=${{
            apps: true,
            help: true,
            mainMenu: true,
            notifications: true,
            search: true,
            searchInput: false,
            user: true,
          }}
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=${args['collapse-on-click-outside']}
            custom-class=${ifDefined(args['custom-class'])}
            expanded=${args.expanded}
            max-width=${args['max-width']}
            mode=${ifDefined(args.mode)}
            target-content=${ifDefined(args['target-content'])}
          >
            <modus-wc-menu size="lg" @menuFocusout=${handleMenuFocusout}>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="folder_open"
                    size="sm"
                  ></modus-wc-icon>
                  Projects
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Submenu 1</a></li>
                  <li><a class="menu-item">Submenu 2</a></li>
                  <li class="dropdown dropdown-hover dropdown-right">
                    <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                      <modus-wc-icon
                        name="settings"
                        size="sm"
                        style="margin-right: 0.5rem;"
                      ></modus-wc-icon>
                      Settings
                    </span>
                    <ul
                      tabindex="0"
                      class="modus-wc-menu-dropdown dropdown-content"
                    >
                      <li><a class="menu-item">Submenu 1</a></li>
                      <li><a class="menu-item">Submenu 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="document"
                    size="sm"
                  ></modus-wc-icon>
                  Reports
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Analytics</a></li>
                  <li><a class="menu-item">Financial Reports</a></li>
                  <li><a class="menu-item">Performance</a></li>
                </ul>
              </li>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="person"
                    size="sm"
                  ></modus-wc-icon>
                  Users
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Permissions</a></li>
                  <li><a class="menu-item">Roles</a></li>
                  <li><a class="menu-item">User Management</a></li>
                </ul>
              </li>
            </modus-wc-menu>
          </modus-wc-side-navigation>

          <div class="panel-content">
            <div id="overview">
              <p>
                The side navigation of an application provides context through
                accessible menu options and positions a consistent component to
                connect to various pages in the application.
              </p>
              <p>
                The side navigation is a collapsible side content of the site’s
                pages. It is located alongside the page’s primary content. The
                component is designed to add side content to a fullscreen
                application. It is activated through the “hamburger” menu in the
                Navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};
