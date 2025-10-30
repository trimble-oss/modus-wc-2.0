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

    const handleExpandChange = (e: CustomEvent) => {
      if (!e.detail) {
        const eventSource = e.target as HTMLElement;
        const container = eventSource?.closest('.layout-with-navbar');

        if (container) {
          // Collapse all open dropdown menus when side navigation is collapsed
          const openMenus = container.querySelectorAll(
            '.modus-wc-menu-dropdown-show'
          );
          openMenus.forEach((menu) => {
            menu.classList.remove('modus-wc-menu-dropdown-show');
          });
        }
      }
    };

    const handleCollapseToggle = (e: Event) => {
      const clickedEl = e.currentTarget as HTMLElement;
      const parentContainer = clickedEl.closest('.layout-with-navbar');
      const sideNav = parentContainer?.querySelector(
        'modus-wc-side-navigation'
      ) as HTMLElement & { expanded: boolean };

      // Only toggle submenu if side navigation is expanded
      if (sideNav?.expanded) {
        const parentLi = clickedEl.closest('li');
        const submenu = parentLi?.querySelector('.modus-wc-menu-dropdown');
        if (submenu) {
          submenu.classList.toggle('modus-wc-menu-dropdown-show');
        }
      }
    };

    return html`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

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

        .menu-width {
          width: 100%;
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

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .modus-wc-menu-dropdown {
          list-style: none;
          margin-inline-start: 1.8rem;
        }

        .label {
          margin: 0px 15px;
        }

        .menu-container {
          padding: 15px;
        }

        .collapse-icon {
          margin: 0px 5px;
        }
      </style>
      <script></script>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
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
            @expandedChange=${handleExpandChange}
          >
            <modus-wc-menu custom-class="menu-width">
              <li>
                <div
                  class="menu-container modus-wc-menu-dropdown-toggle"
                  @click=${handleCollapseToggle}
                >
                  <modus-wc-icon
                    decorative="true"
                    name="bar_graph"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <span class="label">Charts </span>
                </div>
                <ul class="modus-wc-menu-dropdown">
                  <modus-wc-menu-item label="Bar Chart"> </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart"></modus-wc-menu-item>
                </ul>
              </li>
              <li>
                <div class="menu-container">
                  <modus-wc-icon
                    decorative="true"
                    name="calendar"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <span class="label">Calendar</span>
                </div>
              </li>
              <li>
                <div
                  class="menu-container modus-wc-menu-dropdown-toggle"
                  @click=${handleCollapseToggle}
                >
                  <modus-wc-icon
                    decorative="true"
                    name="master_data"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <span class="label">Reports</span>
                </div>
                <ul class="modus-wc-menu-dropdown">
                  <modus-wc-menu-item
                    label="Monthly Report"
                  ></modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                  ></modus-wc-menu-item>
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
                The side navigation is a collapsible side content of the site's
                pages. It is located alongside the page's primary content. The
                component is designed to add side content to a fullscreen
                application. It is activated through the "hamburger" menu in the
                Navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};
