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
      handles: ['expandedChange', 'itemSelect'],
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
          box-shadow: none;
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
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          @mainMenuOpenChange=${handleMenuOpenChange}
          .userCard=${{
            avatarAlt: 'User Avatar',
            avatarSrc:
              'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
            email: 'user@trimble.com',
            name: 'Sonic the Hedgehog',
          }}
          .visibility=${{
            ai: true,
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
      <script>
        // Added this block to demonstrate how to handle menu selection, side navigation toggle, and navbar visibility settings using JavaScript.
        // const menuItems = document.querySelectorAll('modus-wc-menu-item');
        // menuItems.forEach((item) => {
        //   item.addEventListener('itemSelect', () => {
        //     menuItems.forEach((i) => i.removeAttribute('selected'));
        //     item.setAttribute('selected', '');
        //   });
        // });
        // const handleMenuOpenChange = (e) => {
        //   const eventSource = e.target;
        //   const storyContainer = eventSource?.closest('.layout-with-navbar');

        //   let sideNav;

        //   if (storyContainer) {
        //     sideNav = storyContainer.querySelector('modus-wc-side-navigation');
        //   } else {
        //     sideNav = document.querySelector('modus-wc-side-navigation');
        //   }

        //   if (sideNav) {
        //     sideNav.expanded = e.detail;
        //   }
        // };

        // const visibility = {
        //   ai: true,
        //   apps: true,
        //   help: true,
        //   mainMenu: true,
        //   notifications: true,
        //   search: true,
        //   searchInput: false,
        //   user: true,
        // };

        // const userCard = {
        //   avatarAlt: 'User Avatar',
        //   avatarSrc:
        //     'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
        //   email: 'user@trimble.com',
        //   name: 'Sonic the Hedgehog',
        // };

        // const navbar = document.querySelector('modus-wc-navbar');
        // const sideNav = document.querySelector('modus-wc-side-navigation');
        // navbar.visibility = visibility;
        // navbar.userCard = userCard;
        // navbar.addEventListener('mainMenuOpenChange', handleMenuOpenChange);
      </script>
    `;
  },
};

export const WithSubmenu: Story = {
  render: (args) => {
    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      let sideNav: HTMLElement | null;

      if (storyContainer) {
        sideNav = storyContainer.querySelector(
          'modus-wc-side-navigation'
        ) as HTMLElement;

        if (sideNav) {
          // Toggle the side nav state (navbar and side nav can be out of sync)
          const sideNavEl = sideNav as HTMLElement & { expanded: boolean };
          sideNavEl.expanded = e.detail;
        }
      }
    };

    const handleExpandedChange = (e: CustomEvent) => {
      // Collapse all menu items when side nav closes
      if (!e.detail) {
        const eventSource = e.target as HTMLElement;
        const menuItems = eventSource.querySelectorAll('modus-wc-menu-item');
        menuItems.forEach((menuItem) => {
          const item = menuItem as unknown as {
            hasSubmenu?: boolean;
            collapseSubmenu?: () => Promise<void>;
          };
          if (item.hasSubmenu && typeof item.collapseSubmenu === 'function') {
            void item.collapseSubmenu();
          }
        });
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

        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }

        .side-navigation {
          align-self: flex-start;
          height: 500px;
          position: relative;
        }
        .flex-right {
          float: right;
          display: flex;
          margin-left: 50px;
        }

        .flex-right:hover {
          background-color: unset;
        }
        .flex-right:active {
          background-color: unset !important;
        }
      </style>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          id="main-navbar"
          @mainMenuOpenChange=${handleMenuOpenChange}
          .userCard=${{
            avatarAlt: 'User Avatar',
            avatarSrc:
              'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
            email: 'user@trimble.com',
            name: 'Sonic the Hedgehog',
          }}
          .visibility=${{
            ai: true,
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
            id="main-side-nav"
            max-width=${args['max-width']}
            mode=${ifDefined(args.mode)}
            target-content=${ifDefined(args['target-content'])}
            @expandedChange=${handleExpandedChange}
          >
            <modus-wc-menu>
              <li>
                <div class="flex-right">
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="filter"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="settings"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="more_vertical"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                </div>
              </li>
              <modus-wc-menu-item
                label="Charts"
                id="charts-menu"
                .hasSubmenu=${true}
                value="charts"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="bar_graph"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=${true} id="charts-submenu">
                  <modus-wc-menu-item label="Bar Chart" value="bar-chart">
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart" value="line-chart">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Calendar" value="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Reports"
                .hasSubmenu=${true}
                id="reports-menu"
                value="reports"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="master_data"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=${true} id="reports-submenu">
                  <modus-wc-menu-item
                    label="Monthly Report"
                    value="monthly-report"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <h3>Side Navigation with Submenu</h3>
              <p>
                This example demonstrates the side navigation component with
                submenus, allowing for a more organized and hierarchical
                navigation structure.
              </p>
              <p>
                When the side navigation closes, the expandedChange event is
                used to call the collapseSubmenu() method on each menu item.
                This keeps the side navigation component generic while allowing
                the story to coordinate behavior between components.
              </p>
              <p>
                Menu items inside a collapsed side nav cannot expand their
                submenus, ensuring a consistent user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <script>
        // const handleMenuOpenChange = (e) => {
        //   const eventSource = e.target;
        //   const storyContainer = eventSource?.closest('.layout-with-navbar');
        //   let sideNav;

        //   if (storyContainer) {
        //     sideNav = storyContainer.querySelector('modus-wc-side-navigation');
        //   } else {
        //     sideNav = document.querySelector('modus-wc-side-navigation');
        //   }

        //   if (sideNav) {
        //     sideNav.expanded = e.detail;
        //   }
        // };

        // const handleExpandedChange = (e) => {
        //   // Collapse all menu items when side nav closes
        //   if (!e.detail) {
        //     const eventSource = e.target;
        //     const menuItems =
        //       eventSource.querySelectorAll('modus-wc-menu-item');
        //     menuItems.forEach((menuItem) => {
        //       if (
        //         menuItem.hasSubmenu &&
        //         typeof menuItem.collapseSubmenu === 'function'
        //       ) {
        //         menuItem.collapseSubmenu();
        //       }
        //     });
        //   }
        // };
        //  // Adding event listeners and setting properties here as the storybook initially does not load them
        //  document.addEventListener('DOMContentLoaded', () => {
        //     const navbar = document.querySelector('#main-navbar');
        //     const sideNav = document.querySelector('#main-side-nav');
        //     const chartsMenu = document.querySelector('#charts-menu');
        //     const reportsMenu = document.querySelector('#reports-menu');
        //     const chartsSubMenu = document.querySelector('#charts-submenu');
        //     const reportsSubMenu = document.querySelector('#reports-submenu');

        //     if (navbar) {
        //       // Set navbar properties
        //       navbar.userCard = {
        //         avatarAlt: 'User Avatar',
        //         avatarSrc:
        //           'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
        //         email: 'user@trimble.com',
        //         name: 'Sonic the Hedgehog',
        //       };

        //       navbar.visibility = {
        //         ai: true,
        //         apps: true,
        //         help: true,
        //         mainMenu: true,
        //         notifications: true,
        //         search: true,
        //         searchInput: false,
        //         user: true,
        //       };

        //       navbar.addEventListener('mainMenuOpenChange', handleMenuOpenChange);
        //     }

        //     if (sideNav) {
        //       sideNav.addEventListener('expandedChange', handleExpandedChange);
        //     }

        //     // Set hasSubmenu property for menu items with submenus
        //     [chartsMenu, reportsMenu].forEach((menuItem) => {
        //       if (menuItem) {
        //         menuItem.hasSubmenu = true;
        //       }
        //     });

        //     // Set isSubMenu for all submenu elements
        //     [chartsSubMenu, reportsSubMenu].forEach((submenu) => {
        //       if (submenu) {
        //         submenu.isSubMenu = true;
        //       }
        //     });
        //   });
        //
      </script>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('side-navigation-shadow-host')) {
      customElements.define(
        'side-navigation-shadow-host',
        class extends HTMLElement {
          private navEl!: HTMLElement;
          private _props: SideNavigationArgs | undefined;
          private themeObserver: MutationObserver | null = null;

          constructor() {
            super();
            const root = this.attachShadow({ mode: 'open' });

            const wrapper = document.createElement('div');
            wrapper.style.display = 'contents';
            const syncTheme = () => {
              const theme = document.documentElement.getAttribute('data-theme');
              if (theme) wrapper.setAttribute('data-theme', theme);
            };
            syncTheme();
            this.themeObserver = new MutationObserver(syncTheme);
            this.themeObserver.observe(document.documentElement, {
              attributes: true,
              attributeFilter: ['data-theme'],
            });

            // Navbar
            const navbar = document.createElement('modus-wc-navbar');
            navbar.setAttribute('style', 'z-index: 2;');
            navbar.className = 'navbar';
            (navbar as unknown as { userCard: object }).userCard = {
              avatarAlt: 'User Avatar',
              avatarSrc:
                'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
              email: 'user@trimble.com',
              name: 'Sonic the Hedgehog',
            };
            (navbar as unknown as { visibility: object }).visibility = {
              ai: true,
              apps: true,
              help: true,
              mainMenu: true,
              notifications: true,
              search: true,
              searchInput: false,
              user: true,
            };

            // Side navigation
            this.navEl = document.createElement('modus-wc-side-navigation');
            this.navEl.className = 'side-navigation';
            this.navEl.style.cssText =
              'height: 500px; align-self: flex-start; position: relative;';

            const menu = document.createElement('modus-wc-menu');
            menu.setAttribute('size', 'lg');
            [
              { label: 'home', icon: 'home', selected: true },
              { label: 'profile', icon: 'person', selected: false },
              { label: 'settings', icon: 'gears', selected: false },
            ].forEach(({ label, icon, selected }) => {
              const item = document.createElement('modus-wc-menu-item');
              item.setAttribute('label', label);
              if (selected) item.setAttribute('selected', '');
              const ic = document.createElement('modus-wc-icon');
              ic.setAttribute('slot', 'start-icon');
              ic.setAttribute('name', icon);
              item.appendChild(ic);
              menu.appendChild(item);
            });
            this.navEl.appendChild(menu);

            // Side nav's document-level handleClickOutside uses event.target
            // (retargeted to shadow host), so it fires incorrectly for clicks
            // both on the hamburger and inside the nav. Disable it and handle
            // all click logic ourselves inside the shadow root where
            // composedPath() correctly resolves every element.
            (
              this.navEl as unknown as { collapseOnClickOutside: boolean }
            ).collapseOnClickOutside = false;

            root.addEventListener('click', (e: Event) => {
              const path = e.composedPath() as Element[];
              const nav = this.navEl as unknown as { expanded: boolean };

              // Hamburger button: toggle
              const hamburgerLabel = 'Main menu';
              const isHamburger = path.some(
                (el) =>
                  (el as EventTarget as Element).getAttribute?.(
                    'aria-label'
                  ) === hamburgerLabel
              );
              if (isHamburger) {
                nav.expanded = !nav.expanded;
                return;
              }

              // Click outside side nav: close
              if (nav.expanded && !path.includes(this.navEl)) {
                nav.expanded = false;
              }
            });

            // Panel content
            const panelContent = document.createElement('div');
            panelContent.className = 'panel-content';
            const po1 = document.createElement('p');
            po1.textContent =
              'The side navigation of an application provides context through accessible menu options and positions a consistent component to connect to various pages in the application.';
            const po2 = document.createElement('p');
            po2.textContent =
              'The side navigation is a collapsible side content of the site\'s pages. It is located alongside the page\'s primary content. The component is designed to add side content to a fullscreen application. It is activated through the "hamburger" menu in the Navbar.';
            panelContent.appendChild(po1);
            panelContent.appendChild(po2);

            const mainContentRow = document.createElement('div');
            mainContentRow.className = 'main-content-row';
            mainContentRow.appendChild(this.navEl);
            mainContentRow.appendChild(panelContent);

            const layout = document.createElement('div');
            layout.className = 'layout-with-navbar';
            layout.appendChild(navbar);
            layout.appendChild(mainContentRow);

            wrapper.appendChild(layout);
            root.appendChild(wrapper);

            // Inject layout styles into shadow root
            const styleEl = document.createElement('style');
            styleEl.textContent = `
              .layout-with-navbar {
                display: flex;
                flex-direction: column;
                height: 100%;
              }
              .main-content-row {
                display: flex;
                flex: 1;
                overflow: hidden;
              }
              .navbar {
                box-shadow: none;
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
            `;
            root.appendChild(styleEl);
          }

          set props(value: SideNavigationArgs) {
            this._props = value;
            const nav = this.navEl as unknown as {
              customClass: string;
              expanded: boolean;
              maxWidth: string;
              collapseOnClickOutside: boolean;
              mode: string;
              targetContent: string;
            };
            nav.customClass = value['custom-class'] || '';
            nav.expanded = Boolean(value.expanded);
            nav.maxWidth = value['max-width'] || '256px';
            nav.collapseOnClickOutside = false; // handled by shadow root listener
            nav.mode = value.mode || 'overlay';
            nav.targetContent = value['target-content'] || '';
          }

          get props() {
            return this._props || ({} as SideNavigationArgs);
          }

          disconnectedCallback() {
            if (this.themeObserver) {
              this.themeObserver.disconnect();
              this.themeObserver = null;
            }
          }
        }
      );
    }

    return html`<side-navigation-shadow-host
      .props=${{ ...args }}
    ></side-navigation-shadow-host>`;
  },
};
