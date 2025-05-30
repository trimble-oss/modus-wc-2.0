import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface SideNavigationArgs {
  'custom-class'?: string;
  expanded: boolean;
  'max-width': string;
  'collapse-on-click-outside'?: boolean;
}

const meta: Meta<SideNavigationArgs> = {
  title: 'Components/Side Navigation',
  component: 'modus-wc-side-navigation',
  args: {
    'collapse-on-click-outside': true,
    expanded: false,
    'max-width': '256px',
  },
  argTypes: {
    'max-width': {
      control: { type: 'text' },
      description:
        'Maximum width of the side navigation panel in an expanded state.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<SideNavigationArgs>;

export const Default: Story = {
  render: (args) => html`
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
    </style>
    <script>
      const toggleSideNav = () => {
        const sideNav = document.querySelector('modus-wc-side-navigation');
        if (sideNav.hasAttribute('expanded')) {
          sideNav.removeAttribute('expanded');
        } else {
          sideNav.setAttribute('expanded', '');
        }
      };

      const collapseSideNav = () => {
        const sideNav = document.querySelector('modus-wc-side-navigation');
        if (sideNav) {
          sideNav.removeAttribute('expanded');
        }
      };

      document.addEventListener('DOMContentLoaded', () => {
        const menuItems = document.querySelectorAll('modus-wc-menu-item');
        const sideNav = document.querySelector('modus-wc-side-navigation');
        menuItems.forEach((item) => {
          item.addEventListener('itemSelect', () => {
            menuItems.forEach((i) => i.removeAttribute('selected'));
            item.setAttribute('selected', '');
          });
          collapseSideNav();
        });

        const navbar = document.querySelector('modus-wc-navbar');
        navbar?.addEventListener('mainMenuOpenChange', () => {
          toggleSideNav();
        });
      });
    </script>
    <div class="layout-with-navbar">
      <modus-wc-navbar
        app-title="Modus App"
        class="navbar"
        logo="/assets/logo.svg"
        user-name="John Doe"
        user-avatar="/assets/avatar.png"
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
          collapse-on-click-outside=${args['collapse-on-click-outside']}
          custom-class=${ifDefined(args['custom-class'])}
          expanded=${args.expanded}
          max-width=${args['max-width']}
        >
          <modus-wc-menu size="lg">
            <modus-wc-menu-item
              label="home"
              start-icon="home"
              selected
            ></modus-wc-menu-item>
            <modus-wc-menu-item
              label="profile"
              start-icon="person"
            ></modus-wc-menu-item>
            <modus-wc-menu-item
              label="settings"
              start-icon="gears"
            ></modus-wc-menu-item>
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
  `,
};
