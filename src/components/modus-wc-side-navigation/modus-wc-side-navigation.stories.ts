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
          const childrenContainers = container.querySelectorAll(
            '.children-container'
          );
          childrenContainers.forEach((container) => {
            container.classList.add('hidden');
            container.setAttribute('aria-hidden', 'true');
          });

          const collapseIcons = container.querySelectorAll('.dropdown-toggle');
          collapseIcons.forEach((icon) => {
            if (icon.getAttribute('name') === 'expand_less') {
              icon.setAttribute('name', 'expand_more');
            }
          });
        }
      }
    };

    return html`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

        .collapse-icon {
          min-width: 24px;
          padding-inline-start: 0.2rem;
        }

        .dropdown-menu {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .flex-row {
          align-items: center;
          display: flex;
          gap: 1.3rem;
          padding: 0.8rem 0.25rem;
          padding-inline-start: 1rem;
        }

        .hidden {
          display: none;
        }

        .justify-end {
          margin-left: auto;
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

        .menu-icon {
          margin-right: 1rem;
        }

        .menu-item {
          color: var(--modus-wc-color-gray-9);
          display: block;
          font-size: 16px;
          line-height: 1.5;
          padding: 0.5rem 1rem;
          text-decoration: none;
        }

        .menu-width {
          width: 100%;
        }

        .modus-wc-menu li ul {
          margin-inline-start: 1.8rem;
        }

        .modus-wc-menu-dropdown {
          padding-left: 1rem;
        }

        .modus-wc-menu-dropdown-toggle {
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          line-height: 1.5;
          padding: 0.7rem 1.25rem;
        }

        .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nested-row {
          padding-inline-start: 2.5rem;
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
          const clickedEl = e.currentTarget;
          const parentLi = clickedEl.closest('li');
          if (!parentLi) return;

          // Find the icon element that needs to be toggled using the dropdown-toggle class
          const iconEl = clickedEl.querySelector('.dropdown-toggle');
          if (!iconEl) return;

          // Find the parent side nav element
          const parentContainer = clickedEl.closest('.layout-with-navbar');
          const sideNav = parentContainer?.querySelector(
            'modus-wc-side-navigation'
          );

          // Toggle between expand_more and expand_less icons only if side nav is expanded
          const isExpanded = iconEl.getAttribute('name') === 'expand_more';
          if (sideNav?.expanded) {
            iconEl.setAttribute(
              'name',
              isExpanded ? 'expand_less' : 'expand_more'
            );
          }

          // Find and toggle children visibility
          const childContainer =
            parentLi.nextElementSibling?.classList.contains(
              'children-container'
            )
              ? parentLi.nextElementSibling
              : null;

          if (childContainer && sideNav?.expanded) {
            childContainer.classList.toggle('hidden');
            childContainer.setAttribute(
              'aria-hidden',
              !isExpanded ? 'true' : 'false'
            );
          }
        }

        function handleExpandChange(e) {
          if (!e.detail) {
            const eventSource = e.target;
            const container = eventSource?.closest('.layout-with-navbar');

            if (container) {
              // Collapse all child containers if the side navigation is collapsed
              const childrenContainers = container.querySelectorAll(
                '.children-container'
              );
              childrenContainers.forEach((container) => {
                container.classList.add('hidden');
                container.setAttribute('aria-hidden', 'true');
              });

              // Reset all collapse icons to expand_more
              const collapseIcons =
                container.querySelectorAll('.dropdown-toggle');
              collapseIcons.forEach((icon) => {
                if (icon.getAttribute('name') === 'expand_less') {
                  icon.setAttribute('name', 'expand_more');
                }
              });
            }
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
            @expandedChange=${handleExpandChange}
          >
            <modus-wc-menu aria-label="Custom menu" custom-class="menu-width">
              <li>
                <div class="flex-row" onClick="handleCollapseToggle(event)">
                  <modus-wc-icon
                    decorative="true"
                    name="bar_graph"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Charts</div>
                  <div class="justify-end">
                    <modus-wc-icon
                      decorative="true"
                      name="expand_more"
                      class="collapse-icon dropdown-toggle"
                    ></modus-wc-icon>
                  </div>
                </div>
              </li>
              <li class="children-container hidden" aria-hidden="true">
                <ul>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Bar Chart</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Line Chart</div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- Item without children -->
              <li>
                <div class="flex-row">
                  <modus-wc-icon
                    decorative="true"
                    name="calendar"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Calendar</div>
                </div>
              </li>
              <!-- Second parent group (collapsed) -->
              <li>
                <div class="flex-row" onClick="handleCollapseToggle(event)">
                  <modus-wc-icon
                    decorative="true"
                    name="compass"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Maps</div>
                  <div class="justify-end">
                    <modus-wc-icon
                      decorative="true"
                      name="expand_more"
                      class="collapse-icon dropdown-toggle"
                    ></modus-wc-icon>
                  </div>
                </div>
              </li>
              <li class="children-container hidden" aria-hidden="true">
                <ul>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Map 1</div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex-row nested-row"
                      onClick="handleCollapseToggle(event)"
                    >
                      <div>Map 2</div>
                      <div class="justify-end">
                        <modus-wc-icon
                          decorative="true"
                          name="expand_more"
                          class="collapse-icon dropdown-toggle"
                        ></modus-wc-icon>
                      </div>
                    </div>
                  </li>
                  <li class="children-container hidden" aria-hidden="true">
                    <ul>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 2rem;"
                        >
                          <div>Map 1</div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 2rem;"
                        >
                          <div>Map 2</div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Map 3</div>
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
