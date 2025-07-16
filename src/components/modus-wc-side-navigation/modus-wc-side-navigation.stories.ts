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

    const handleCollapseToggle = (e: MouseEvent) => {
      const iconEl = e.currentTarget as HTMLElement;
      // Find the closest li parent
      const parentLi = iconEl.closest('.flex-row')?.closest('li');
      if (!parentLi) return;

      // Toggle between expand_more and chevron_right icons
      const isExpanded = iconEl.getAttribute('name') === 'expand_more';
      iconEl.setAttribute('name', isExpanded ? 'chevron_right' : 'expand_more');

      // Find and toggle children visibility
      const childContainer = parentLi.nextElementSibling?.classList.contains(
        'children-container'
      )
        ? (parentLi.nextElementSibling as HTMLElement)
        : null;

      if (childContainer) {
        childContainer.classList.toggle('hidden');
        childContainer.setAttribute(
          'aria-hidden',
          !isExpanded ? 'true' : 'false'
        );
      }
    };

    const handleExpandChange = (e: CustomEvent) => {
      if (!e.detail) {
        // Collapse all child containers if the side navigation is collapsed
        const childrenContainers = document.querySelectorAll(
          '.children-container'
        );
        childrenContainers.forEach((container) => {
          container.classList.add('hidden');
          container.setAttribute('aria-hidden', 'true');
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
          padding: 0;
          margin: 0;
        }

        .menu-width {
          width: 100%;
        }

        .flex-row {
          display: flex;
          align-items: center;
          padding: 0.5rem 0.25rem;
        }

        .nested-row {
          padding-inline-start: 2rem;
        }

        .justify-end {
          margin-left: auto;
        }

        .collapse-icon {
          cursor: pointer;
          min-width: 24px;
        }

        .hidden {
          display: none;
        }

        .children-container {
          transition: height 0.2s ease-out;
        }

        .dropdown-menu {
          padding-left: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .icon-left {
          padding-left: 16px;
        }
      </style>
      <script>
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

        function handleCollapseToggle(e) {
          const iconEl = e.currentTarget;
          const parentLi = iconEl.closest('.flex-row')?.closest('li');
          if (!parentLi) return;

          const isExpanded = iconEl.getAttribute('name') === 'expand_more';
          iconEl.setAttribute(
            'name',
            isExpanded ? 'chevron_right' : 'expand_more'
          );

          const nextEl = parentLi.nextElementSibling;
          const childContainer = nextEl?.classList.contains(
            'children-container'
          )
            ? nextEl
            : null;

          if (childContainer) {
            childContainer.classList.toggle('hidden');
            childContainer.setAttribute(
              'aria-hidden',
              isExpanded ? 'true' : 'false'
            );
          }
        }

        function handleExpandChange(e) {
          if (!e.detail) {
            const childrenContainers = document.querySelectorAll(
              '.children-container'
            );

            childrenContainers.forEach((container) => {
              container.classList.add('hidden');
              container.setAttribute('aria-hidden', 'true');
            });
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
            @expandedChange=${handleExpandChange}
          >
            <modus-wc-menu aria-label="Custom menu" custom-class="menu-width">
              <li>
                <div class="flex-row">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="profile"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <div class="dropdown-menu">Parent</div>
                  <div class="justify-end">
                    <modus-wc-button
                      aria-label="Actions button"
                      size="sm"
                      shape="circle"
                      variant="borderless"
                    >
                      <modus-wc-icon
                        decorative="true"
                        name="chevron_right"
                        class="collapse-icon"
                        @click=${handleCollapseToggle}
                      ></modus-wc-icon>
                    </modus-wc-button>
                  </div>
                </div>
              </li>
              <li class="children-container hidden" aria-hidden="true">
                <ul>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Child 1</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Child 2</div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- Item without children -->
              <li>
                <div class="flex-row">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="settings"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>

                  <div class="dropdown-menu">Single Item</div>
                </div>
              </li>

              <!-- Second parent group (collapsed) -->
              <li>
                <div class="flex-row">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="chat"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <div class="dropdown-menu">Another Parent</div>
                  <div class="justify-end">
                    <modus-wc-button
                      aria-label="Actions button"
                      size="sm"
                      shape="circle"
                      variant="borderless"
                    >
                      <modus-wc-icon
                        decorative="true"
                        name="chevron_right"
                        class="collapse-icon"
                        @click=${handleCollapseToggle}
                      ></modus-wc-icon>
                    </modus-wc-button>
                  </div>
                </div>
              </li>
              <li class="children-container hidden" aria-hidden="true">
                <ul>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Another Child 1</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Another Child 2</div>
                      <div class="justify-end">
                        <modus-wc-button
                          aria-label="Actions button"
                          size="sm"
                          shape="circle"
                          variant="borderless"
                        >
                          <modus-wc-icon
                            decorative="true"
                            name="chevron_right"
                            class="collapse-icon"
                            @click=${handleCollapseToggle}
                          ></modus-wc-icon>
                        </modus-wc-button>
                      </div>
                    </div>
                  </li>
                  <li class="children-container hidden" aria-hidden="true">
                    <ul>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 3rem;"
                        >
                          <div>Submenu Item 1</div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 3rem;"
                        >
                          <div>Submenu Item 2</div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Another Child 3</div>
                    </div>
                  </li>
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
