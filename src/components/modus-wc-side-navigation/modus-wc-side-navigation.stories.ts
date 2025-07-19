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
          height: 600px;
          overflow: hidden;
        }
        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
          position: relative;
        }
        .modus-wc-menu-item-labels {
          padding: 0 16px;
        }
        .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        .panel-content {
          margin-left: 4rem;
          padding: 10px;
          overflow-y: auto;
          flex: 1;
        }
        .side-navigation {
          height: 100%;
          align-self: stretch;
          position: relative;
        }
        /* Override the component's 100vh height */
        modus-wc-side-navigation {
          height: 100% !important;
        }
        modus-wc-side-navigation .modus-wc-side-navigation {
          height: 100% !important;
          max-height: 100% !important;
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
