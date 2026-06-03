import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import {
  CONNECT_ICON_FONT_URL,
  CONNECT_ICONS,
  connectIconClass,
} from './modus-wc-side-navigation-connect-icons.story';
import {
  isConnectSideNavTheme,
  SIDE_NAV_COLLAPSED_MIN_WIDTH,
  SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS,
  SIDE_NAV_DATA_FLYOUT_MENU_OFFSET,
  SIDE_NAV_TREE_ITEM_END_ACTION_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS,
  sideNavConnectCollapsedRailStyles,
  sideNavConnectLightTreeItemEndSlotActiveStyles,
  sideNavConnectStoryLayoutStyles,
  sideNavConnectTreeItemStyles,
  sideNavConnectWithTreeViewStoryStyles,
  sideNavDataFlyoutDropdownStyles,
  sideNavTreeItemEndActionDropdownStyles,
} from './modus-wc-side-navigation-tree-item-end-action.story-styles';
import {
  handleWithTreeViewExpandedChangeClassicModern,
  handleWithTreeViewExpandedChangeConnect,
  handleWithTreeViewMenuOpenChange,
  hideWithTreeViewFlyout,
  openWithTreeViewDataFlyout,
  resetWithTreeViewForNonConnectTheme,
  setWithTreeViewDataFlyoutDisabled,
  type WithTreeViewFlyoutState,
} from './modus-wc-side-navigation-with-tree-view.story-handlers';
import { getWithTreeViewSourceCode } from './modus-wc-side-navigation-with-tree-view.story-source';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface SideNavigationArgs {
  'custom-class'?: string;
  expanded: boolean;
  'max-width': string;
  'min-width'?: string;
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
          background-color: unset;
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

/** Persists across Lit re-renders so mount-only expandedChange skip is not reset. */
let withTreeViewExpandedChangeReady = false;

/** Persists across Lit re-renders for Connect flyout handlers. */
const withTreeViewFlyoutState: WithTreeViewFlyoutState = {
  dataIconDropdown: null,
  flyoutOpenTimer: null,
  collapseFlyoutTimer: null,
};

let withTreeViewThemeObserverWired = false;

export const WithTreeView: Story = {
  args: { expanded: true },
  parameters: {
    docs: {
      description: {
        story:
          'This story is theme-specific: markup and styles differ between Connect and Modern/Classic. After changing the theme in the Storybook toolbar, re-render the story so it re-renders with the correct layout.',
      },
      source: { code: getWithTreeViewSourceCode() },
    },
  },
  render: (args, context) => {
    let suppressNextMenuOpen = false;
    const menuOpenSuppress = {
      get: () => suppressNextMenuOpen,
      set: (value: boolean) => {
        suppressNextMenuOpen = value;
      },
    };
    const globalsTheme = (context as { globals?: { theme?: string } }).globals
      ?.theme;
    const connectTheme = globalsTheme
      ? globalsTheme === 'connect-light' || globalsTheme === 'connect-dark'
      : isConnectSideNavTheme();

    if (!withTreeViewThemeObserverWired && typeof document !== 'undefined') {
      withTreeViewThemeObserverWired = true;
      new MutationObserver(() => {
        if (!isConnectSideNavTheme()) {
          resetWithTreeViewForNonConnectTheme(withTreeViewFlyoutState);
        }
      }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });
    }

    const selectSubmenuParent = (
      sideNav: HTMLElement,
      dataItem: HTMLElement & { selected?: boolean }
    ) => {
      dataItem.selected = true;
      sideNav.querySelectorAll('modus-wc-tree-item').forEach((item) => {
        if (item !== dataItem) {
          (item as HTMLElement & { selected?: boolean }).selected = false;
        }
      });
    };

    const handleMenuOpenChange = (e: CustomEvent<boolean>) => {
      handleWithTreeViewMenuOpenChange(e, menuOpenSuppress);
    };

    const handleExpandedChange = (e: CustomEvent<boolean>) => {
      const eventSource = e.target as HTMLElement;

      if (!withTreeViewExpandedChangeReady) {
        withTreeViewExpandedChangeReady = true;
        if (isConnectSideNavTheme()) {
          setWithTreeViewDataFlyoutDisabled(
            withTreeViewFlyoutState,
            Boolean(e.detail)
          );
        }
        return;
      }

      if (isConnectSideNavTheme()) {
        handleWithTreeViewExpandedChangeConnect(
          e,
          eventSource,
          withTreeViewFlyoutState,
          menuOpenSuppress
        );
      } else {
        handleWithTreeViewExpandedChangeClassicModern(
          e,
          eventSource,
          menuOpenSuppress
        );
      }
    };

    const handleTreeItemSelect = (e: CustomEvent) => {
      const treeItem = (e.target as HTMLElement).closest('modus-wc-tree-item');
      if (!treeItem) return;

      const sideNav = treeItem.closest('modus-wc-side-navigation');
      if (!sideNav) return;

      const value = treeItem.getAttribute('value');
      const isExpanded = (sideNav as HTMLElement & { expanded: boolean })
        .expanded;

      if (value === 'data') {
        const dataItem = sideNav.querySelector<
          HTMLElement & { selected?: boolean }
        >('modus-wc-tree-item[value="data"]');
        if (dataItem && isExpanded) {
          selectSubmenuParent(sideNav as HTMLElement, dataItem);
        }
      }

      if (
        isConnectSideNavTheme() &&
        !isExpanded &&
        treeItem.querySelector('modus-wc-tree-view')
      ) {
        openWithTreeViewDataFlyout(withTreeViewFlyoutState, true);
      }
    };

    const handleFlyoutItemSelect = (e: CustomEvent) => {
      if (!isConnectSideNavTheme()) return;

      const value = (e as CustomEvent<{ value: string }>).detail?.value;
      if (!value || !withTreeViewFlyoutState.dataIconDropdown) return;

      hideWithTreeViewFlyout(withTreeViewFlyoutState);

      const sideNav = withTreeViewFlyoutState.dataIconDropdown.closest(
        'modus-wc-side-navigation'
      ) as HTMLElement | null;

      const realItem = sideNav?.querySelector(
        `modus-wc-tree-item[value="${value}"]`
      );
      if (realItem) {
        realItem
          .querySelector<HTMLElement>(
            ':scope > li > .modus-wc-menu-item-interactive'
          )
          ?.click();
      }

      // Drop focus from flyout trigger so borderless primary color does not stick.
      withTreeViewFlyoutState.dataIconDropdown
        ?.querySelector<HTMLElement>('modus-wc-button .modus-wc-btn')
        ?.blur();

      // Close after the tree-item click; cancels any deferred flyout open too.
      setTimeout(() => hideWithTreeViewFlyout(withTreeViewFlyoutState), 0);
    };

    const handleContextItemSelect = (e: CustomEvent) => {
      console.log(
        'Action:',
        (e as CustomEvent<{ value: string }>).detail.value
      );
      const dropdown = (e.target as HTMLElement).closest(
        'modus-wc-dropdown-menu'
      );
      if (dropdown) {
        (dropdown as HTMLElement & { menuVisible: boolean }).menuVisible =
          false;
      }
    };

    const onDataItemRef = (el: Element | undefined) => {
      if (!el) return;

      if (!el.hasAttribute('data-flyout-wired')) {
        el.setAttribute('data-flyout-wired', '');
        el.addEventListener('itemSelect', (e: Event) => {
          // Child tree-items bubble itemSelect; only handle Data's own row.
          if (e.target !== el) return;

          const sideNav = el.closest(
            'modus-wc-side-navigation'
          ) as HTMLElement | null;
          if (!sideNav) return;

          if ((sideNav as HTMLElement & { expanded: boolean }).expanded) {
            selectSubmenuParent(
              sideNav,
              el as HTMLElement & { selected?: boolean }
            );
            return;
          }

          if (isConnectSideNavTheme()) {
            openWithTreeViewDataFlyout(withTreeViewFlyoutState, true);
          }
        });
      }
    };

    const onDataIconDropdownRef = (el: Element | undefined) => {
      if (!el) {
        withTreeViewFlyoutState.dataIconDropdown = null;
        return;
      }

      withTreeViewFlyoutState.dataIconDropdown = el as HTMLElement;

      if (!isConnectSideNavTheme()) {
        setWithTreeViewDataFlyoutDisabled(withTreeViewFlyoutState, true);
        return;
      }

      const sideNav = withTreeViewFlyoutState.dataIconDropdown.closest(
        'modus-wc-side-navigation'
      );
      const isExpanded = (sideNav as HTMLElement & { expanded: boolean })
        ?.expanded;
      setWithTreeViewDataFlyoutDisabled(
        withTreeViewFlyoutState,
        Boolean(isExpanded)
      );
    };

    return html`
      <link rel="stylesheet" href=${CONNECT_ICON_FONT_URL} />
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
        .panel-content {
          margin-left: ${connectTheme ? SIDE_NAV_COLLAPSED_MIN_WIDTH : '4rem'};
          padding: 10px;
        }
        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }
        ${sideNavConnectCollapsedRailStyles}
        ${sideNavConnectTreeItemStyles}
        ${sideNavConnectLightTreeItemEndSlotActiveStyles}
        ${sideNavTreeItemEndActionDropdownStyles}
        ${sideNavDataFlyoutDropdownStyles}
        ${sideNavConnectStoryLayoutStyles}
        ${sideNavConnectWithTreeViewStoryStyles}
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
            @expandedChange=${handleExpandedChange}
            @itemSelect=${handleTreeItemSelect}
          >
            <modus-wc-tree-view size="lg" aria-label="Project navigation">
              <modus-wc-tree-item label="All Projects" value="all-projects">
                <modus-wc-icon
                  slot="start"
                  aria-label="All Projects icon"
                  name=""
                  custom-class=${connectIconClass(CONNECT_ICONS.allProjects)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                ${ref(onDataItemRef)}
                label="Data"
                value="data"
                has-submenu="true"
              >
                ${connectTheme
                  ? html`
                      <modus-wc-dropdown-menu
                        slot="start"
                        ${ref(onDataIconDropdownRef)}
                        menu-placement="right-start"
                        menu-strategy="fixed"
                        menu-offset=${SIDE_NAV_DATA_FLYOUT_MENU_OFFSET}
                        menu-size="lg"
                        button-variant="borderless"
                        custom-class=${SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS}
                        @itemSelect=${handleFlyoutItemSelect}
                      >
                        <modus-wc-icon
                          aria-label="Data icon"
                          name=""
                          slot="button"
                          custom-class=${connectIconClass(CONNECT_ICONS.data)}
                        ></modus-wc-icon>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Explorer"
                          value="explorer"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=${connectIconClass(
                              CONNECT_ICONS.explorer
                            )}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Views"
                          value="views"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=${connectIconClass(
                              CONNECT_ICONS.views
                            )}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Releases"
                          value="releases"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=${connectIconClass(
                              CONNECT_ICONS.releases
                            )}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                      </modus-wc-dropdown-menu>
                    `
                  : html`
                      <modus-wc-icon
                        slot="start"
                        aria-label="Data icon"
                        name="master_data"
                        size="sm"
                      ></modus-wc-icon>
                    `}
                <modus-wc-tree-view is-sub-menu="true">
                  <modus-wc-tree-item
                    label="Explorer"
                    value="explorer"
                    custom-class=${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS}
                  >
                    <modus-wc-icon
                      slot="start"
                      aria-label="Explorer icon"
                      name=""
                      custom-class=${connectIconClass(CONNECT_ICONS.explorer)}
                    ></modus-wc-icon>
                    ${connectTheme
                      ? html`
                          <div
                            slot="end"
                            style="display: flex; align-items: stretch;"
                          >
                            <div
                              style="width: 1px; background: currentColor; opacity: 0.3;"
                            ></div>
                            <modus-wc-dropdown-menu
                              button-variant="borderless"
                              button-size="sm"
                              menu-size="sm"
                              menu-placement="right-start"
                              menu-strategy="fixed"
                              menu-offset="0"
                              button-aria-label="Open folder"
                              custom-class=${SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS}
                              @itemSelect=${handleContextItemSelect}
                            >
                              <div
                                slot="button"
                                style="display: flex; align-items: center; gap: 2px;"
                              >
                                <modus-wc-icon
                                  aria-label="Folder icon"
                                  name=""
                                  size="sm"
                                  custom-class=${connectIconClass(
                                    CONNECT_ICONS.folder,
                                    SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS,
                                    'i16'
                                  )}
                                ></modus-wc-icon>
                                <modus-wc-icon
                                  aria-label="Open submenu icon"
                                  name=""
                                  size="sm"
                                  custom-class=${connectIconClass(
                                    CONNECT_ICONS.chevronRight,
                                    SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS,
                                    'i16'
                                  )}
                                ></modus-wc-icon>
                              </div>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Rename"
                                value="rename"
                              ></modus-wc-menu-item>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Duplicate"
                                value="duplicate"
                              ></modus-wc-menu-item>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Delete"
                                value="delete"
                              ></modus-wc-menu-item>
                            </modus-wc-dropdown-menu>
                          </div>
                        `
                      : nothing}
                  </modus-wc-tree-item>
                  <modus-wc-tree-item label="Views" value="views">
                    <modus-wc-icon
                      slot="start"
                      aria-label="Views icon"
                      name=""
                      custom-class=${connectIconClass(CONNECT_ICONS.views)}
                    ></modus-wc-icon>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item label="Releases" value="releases">
                    <modus-wc-icon
                      slot="start"
                      aria-label="Releases icon"
                      name=""
                      custom-class=${connectIconClass(CONNECT_ICONS.releases)}
                    ></modus-wc-icon>
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Activity" value="activity">
                <modus-wc-icon
                  slot="start"
                  aria-label="Activity icon"
                  name=""
                  custom-class=${connectIconClass(CONNECT_ICONS.activity)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="BCF Topics" value="bcf-topics">
                <modus-wc-icon
                  slot="start"
                  aria-label="BCF Topics icon"
                  name=""
                  custom-class=${connectIconClass(CONNECT_ICONS.bcfTopics)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Field Data" value="field-data">
                <modus-wc-icon
                  slot="start"
                  aria-label="Field Data icon"
                  name=""
                  custom-class=${connectIconClass(CONNECT_ICONS.fieldData)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <h3>Side Navigation with Tree View</h3>
            <p>
              <strong>Theme switch:</strong> This story renders different markup
              and CSS per theme (Connect vs Modern/Classic). After you change
              the theme in the Storybook toolbar, refresh or re-open this story
              so it re-renders; otherwise layout and behavior may not match the
              selected theme.
            </p>
            <p>
              This example replicates Trimble project navigation using
              modus-wc-tree-view and modus-wc-tree-item. Switch the Storybook
              theme toolbar to compare behavior: <strong>Connect</strong> uses a
              collapsed-rail flyout for the Data row;
              <strong>Modern</strong> and <strong>Classic</strong> use the
              built-in inline collapsible submenu (no flyout).
            </p>
            <p>
              On Connect, when the side nav is collapsed, Data uses
              <code>block-expand</code> and a start-slot flyout dropdown. On
              Modern/Classic, Data uses a standard start icon and expands or
              collapses its submenu inline when the side nav is expanded.
            </p>
            <p>
              The Explorer end-slot action uses modus-wc-dropdown-menu (Connect
              themes only for layout styling). Expand the side nav with the
              navbar hamburger to reveal labels and that action.
            </p>
          </div>
        </div>
      </div>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('side-navigation-shadow-host')) {
      const SideNavigationShadowHost =
        createShadowHostClass<SideNavigationArgs>({
          componentTag: 'modus-wc-side-navigation',
          propsMapper: (v: SideNavigationArgs, el: HTMLElement) => {
            const navEl = el as unknown as {
              customClass: string;
              expanded: boolean;
              maxWidth: string;
              collapseOnClickOutside: boolean;
              mode: string;
              targetContent: string;
            };
            navEl.customClass = v['custom-class'] || '';
            navEl.expanded = Boolean(v.expanded);
            navEl.maxWidth = v['max-width'] || '256px';
            navEl.collapseOnClickOutside = Boolean(
              v['collapse-on-click-outside']
            );
            navEl.mode = v.mode || 'overlay';
            navEl.targetContent = v['target-content'] || '';

            // Build full layout on first render: move el into a navbar + content
            // layout inside the wrapper. The helper's wrapper has display:contents
            // so the layout becomes a direct layout child of the shadow root.
            if (!el.hasAttribute('data-layout-built')) {
              el.setAttribute('data-layout-built', '');

              const shadowRoot = el.getRootNode() as ShadowRoot;
              const wrapper = el.parentElement!;

              el.className = 'side-navigation';
              el.style.cssText =
                'height: 500px; align-self: flex-start; position: relative;';

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

              // Menu items
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
              el.appendChild(menu);

              // Wire navbar's mainMenuOpenChange to toggle side nav.
              // Now that navbar's handleClickOutside uses composedPath(), it
              // correctly identifies hamburger clicks inside shadow DOM and emits
              // the right true/false detail value on each click.
              navbar.addEventListener('mainMenuOpenChange', (e: Event) => {
                const custom = e as CustomEvent<boolean>;
                (el as unknown as { expanded: boolean }).expanded =
                  custom.detail;
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

              // Move el into layout (appendChild moves an existing node)
              const mainContentRow = document.createElement('div');
              mainContentRow.className = 'main-content-row';
              mainContentRow.appendChild(el);
              mainContentRow.appendChild(panelContent);

              const layout = document.createElement('div');
              layout.className = 'layout-with-navbar';
              layout.appendChild(navbar);
              layout.appendChild(mainContentRow);

              wrapper.appendChild(layout);

              // Layout styles
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
              shadowRoot.appendChild(styleEl);
            }
          },
        });
      customElements.define(
        'side-navigation-shadow-host',
        SideNavigationShadowHost
      );
    }

    return html`<side-navigation-shadow-host
      .props=${{ ...args }}
    ></side-navigation-shadow-host>`;
  },
};
