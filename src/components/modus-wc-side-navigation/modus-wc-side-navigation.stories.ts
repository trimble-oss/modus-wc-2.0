import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import {
  CONNECT_ICON_FONT_URL,
  CONNECT_ICONS,
  connectIconClass,
} from './modus-wc-side-navigation-connect-icons.story';
import {
  SIDE_NAV_TREE_ITEM_END_ACTION_BUTTON_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS,
  sideNavTreeItemEndActionDropdownStyles,
  sideNavTreeItemEndActionStyles,
} from './modus-wc-side-navigation-tree-item-end-action.story-styles';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

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

export const WithTreeView: Story = {
  args: { expanded: true },
  render: (args) => {
    let ctxBtn: HTMLElement | null = null;
    let ctxMenu: HTMLElement | null = null;
    let flyoutContainer: HTMLElement | null = null;
    let flyoutTreeView: HTMLElement | null = null;
    let outsideClickHandler: ((e: MouseEvent) => void) | null = null;

    const hideFlyout = () => {
      if (flyoutContainer) flyoutContainer.style.display = 'none';
    };

    const hideOverlays = () => {
      if (ctxMenu) ctxMenu.style.display = 'none';
      hideFlyout();
    };

    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      const sideNav = storyContainer
        ? storyContainer.querySelector('modus-wc-side-navigation')
        : document.querySelector('modus-wc-side-navigation');

      if (sideNav) {
        (sideNav as HTMLElement & { expanded: boolean }).expanded = e.detail;
      }
    };

    const handleExpandedChange = (e: CustomEvent) => {
      hideOverlays();

      if (!e.detail) {
        const eventSource = e.target as HTMLElement;
        const treeItems = eventSource.querySelectorAll('modus-wc-tree-item');
        treeItems.forEach((treeItem) => {
          const item = treeItem as unknown as {
            hasSubmenu?: boolean;
            collapseSubmenu?: () => Promise<void>;
          };
          if (item.hasSubmenu && typeof item.collapseSubmenu === 'function') {
            void item.collapseSubmenu();
          }
        });
      }
    };

    const populateFlyout = (treeItem: Element) => {
      if (!flyoutContainer || !flyoutTreeView) return;

      const nestedTreeView = treeItem.querySelector('modus-wc-tree-view');
      if (!nestedTreeView) return;

      flyoutTreeView.innerHTML = nestedTreeView.innerHTML;

      const rect = treeItem.getBoundingClientRect();
      flyoutContainer.style.top = `${rect.top + window.scrollY}px`;
      flyoutContainer.style.left = `${rect.right + window.scrollX}px`;
      flyoutContainer.style.display = 'block';
    };

    const handleTreeItemSelect = (e: CustomEvent) => {
      const treeItem = (e.target as HTMLElement).closest('modus-wc-tree-item');
      if (!treeItem) return;

      const sideNav = treeItem.closest('modus-wc-side-navigation');
      if (!sideNav) return;

      const isExpanded = (sideNav as HTMLElement & { expanded: boolean })
        .expanded;
      if (isExpanded) return;

      const hasNestedTree = treeItem.querySelector('modus-wc-tree-view');
      if (!hasNestedTree) return;

      populateFlyout(treeItem);
    };

    const setupDropdown = (btn: HTMLElement, menu: HTMLElement) => {
      btn.addEventListener('buttonClick', (e) => {
        e.stopPropagation();
        hideFlyout();
        const isOpen = menu.style.display === 'block';
        if (!isOpen) {
          const rect = btn.getBoundingClientRect();
          menu.style.top = `${rect.bottom + window.scrollY}px`;
          menu.style.left = `${rect.left + window.scrollX}px`;
          menu.style.display = 'block';
        } else {
          menu.style.display = 'none';
        }
      });

      menu.addEventListener('itemSelect', (e) => {
        console.log(
          'Action:',
          (e as CustomEvent<{ value: string }>).detail.value
        );
        menu.style.display = 'none';
      });
    };

    const onBtnRef = (el: Element | undefined) => {
      if (!el) return;
      ctxBtn = el as HTMLElement;
      if (ctxBtn && ctxMenu) setupDropdown(ctxBtn, ctxMenu);
    };

    const onMenuRef = (el: Element | undefined) => {
      if (!el) return;
      ctxMenu = el as HTMLElement;
      if (ctxBtn && ctxMenu) setupDropdown(ctxBtn, ctxMenu);
    };

    const onDataItemRef = (el: Element | undefined) => {
      if (!el) return;
      // Auto-expand Data submenu to match design screenshot
      requestAnimationFrame(() => {
        const interactive = el.querySelector('.modus-wc-menu-item-interactive');
        (interactive as HTMLElement)?.click();
      });
    };

    const onFlyoutRef = (el: Element | undefined) => {
      if (!el) return;
      flyoutContainer = el as HTMLElement;
      flyoutTreeView = flyoutContainer.querySelector('modus-wc-tree-view');

      if (!outsideClickHandler) {
        outsideClickHandler = (e: MouseEvent) => {
          const target = e.target as Node;
          if (
            flyoutContainer?.style.display === 'block' &&
            !flyoutContainer.contains(target) &&
            !(
              target instanceof Element &&
              target
                .closest('modus-wc-tree-item')
                ?.closest('modus-wc-side-navigation')
            )
          ) {
            hideFlyout();
          }

          if (
            ctxMenu?.style.display === 'block' &&
            ctxBtn &&
            !ctxBtn.contains(target) &&
            !ctxMenu.contains(target)
          ) {
            ctxMenu.style.display = 'none';
          }
        };
        document.addEventListener('click', outsideClickHandler);
      }
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
          margin-left: 4rem;
          padding: 10px;
        }
        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }
        .tree-flyout {
          display: none;
          position: fixed;
          z-index: 1000;
        }

        ${sideNavTreeItemEndActionStyles}
          modus-wc-side-navigation
          modus-wc-tree-item {
          display: block;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          modus-wc-tree-view
          .modus-wc-menu
          :where(li ul),
        [data-theme='connect-dark']
          modus-wc-side-navigation
          modus-wc-tree-view
          .modus-wc-menu
          :where(li ul) {
          margin-inline-start: 0;
          padding-inline-start: 0;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          modus-wc-tree-view
          .modus-wc-menu-dropdown
          .modus-wc-menu-item-content,
        [data-theme='connect-dark']
          modus-wc-side-navigation
          modus-wc-tree-view
          .modus-wc-menu-dropdown
          .modus-wc-menu-item-content {
          padding-inline-start: 1.5rem;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          modus-wc-tree-item
          .modus-wc-menu-item.modus-wc-menu-item-active,
        [data-theme='connect-dark']
          modus-wc-side-navigation
          modus-wc-tree-item
          .modus-wc-menu-item.modus-wc-menu-item-active {
          position: relative;
          overflow: visible;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          modus-wc-tree-item
          .modus-wc-menu-item.modus-wc-menu-item-active::before,
        [data-theme='connect-dark']
          modus-wc-side-navigation
          modus-wc-tree-item
          .modus-wc-menu-item.modus-wc-menu-item-active::before {
          content: '';
          position: absolute;
          inset-block: 0;
          inset-inline-start: 0;
          width: 3px;
          background: white;
          z-index: 10;
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
                <modus-wc-icon
                  slot="start"
                  aria-label="Data icon"
                  name=""
                  custom-class=${connectIconClass(CONNECT_ICONS.data)}
                ></modus-wc-icon>
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
                    <div
                      slot="end"
                      style="display: flex; align-items: stretch;"
                    >
                      <div
                        style="width: 1px; background: currentColor; opacity: 0.3;"
                      ></div>
                      <modus-wc-button
                        ${ref(onBtnRef)}
                        variant="borderless"
                        size="sm"
                        custom-class=${SIDE_NAV_TREE_ITEM_END_ACTION_BUTTON_CLASS}
                        aria-label="Open folder"
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
                      </modus-wc-button>
                    </div>
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
              This example replicates Trimble project navigation using
              modus-wc-tree-view and modus-wc-tree-item. When expanded, the full
              hierarchical tree is shown inline. When collapsed, only icons are
              visible and clicking a collapsible parent opens a flyout with its
              children.
            </p>
            <p>
              Expand the side navigation using the navbar hamburger menu to
              reveal labels and the end-slot action button on Explorer.
            </p>
          </div>
        </div>
      </div>

      <div
        ${ref(onMenuRef)}
        style="display: none; position: fixed; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true">
          <modus-wc-menu-item
            label="Rename"
            value="rename"
          ></modus-wc-menu-item>
          <modus-wc-menu-item
            label="Duplicate"
            value="duplicate"
          ></modus-wc-menu-item>
          <modus-wc-menu-item
            label="Delete"
            value="delete"
          ></modus-wc-menu-item>
        </modus-wc-menu>
      </div>

      <div ${ref(onFlyoutRef)} class="tree-flyout">
        <modus-wc-tree-view
          size="lg"
          bordered="true"
          aria-label="Submenu"
        ></modus-wc-tree-view>
      </div>
    `;
  },
};

export const WithTreeViewDropdownMenu: Story = {
  args: { expanded: true },
  render: (args) => {
    let flyoutContainer: HTMLElement | null = null;
    let flyoutTreeView: HTMLElement | null = null;
    let flyoutSourceItem: Element | null = null;
    let outsideClickHandler: ((e: MouseEvent) => void) | null = null;

    const hideFlyout = () => {
      if (flyoutContainer) flyoutContainer.style.display = 'none';
    };

    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      const sideNav = storyContainer
        ? storyContainer.querySelector('modus-wc-side-navigation')
        : document.querySelector('modus-wc-side-navigation');

      if (sideNav) {
        (sideNav as HTMLElement & { expanded: boolean }).expanded = e.detail;
      }
    };

    const handleExpandedChange = (e: CustomEvent) => {
      hideFlyout();

      const eventSource = e.target as HTMLElement;
      const treeItems = eventSource.querySelectorAll('modus-wc-tree-item');
      treeItems.forEach((treeItem) => {
        const item = treeItem as unknown as {
          hasSubmenu?: boolean;
          blockExpand?: boolean;
          collapseSubmenu?: () => Promise<void>;
        };
        if (item.hasSubmenu) {
          // Enable blockExpand when collapsed so clicks emit itemSelect for flyout.
          // Disable it when expanded so the built-in inline toggle is restored.
          item.blockExpand = !e.detail;

          if (!e.detail && typeof item.collapseSubmenu === 'function') {
            void item.collapseSubmenu();
          }
        }
      });
    };

    const populateFlyout = (treeItem: Element) => {
      if (!flyoutContainer || !flyoutTreeView) return;

      const nestedTreeView = treeItem.querySelector('modus-wc-tree-view');
      if (!nestedTreeView) return;

      const sourceUl = nestedTreeView.querySelector('ul');
      if (!sourceUl) return;

      flyoutSourceItem = treeItem;
      flyoutTreeView.innerHTML = '';

      Array.from(
        sourceUl.querySelectorAll(':scope > modus-wc-tree-item')
      ).forEach((item) => {
        const sourceLi = item.querySelector(':scope > li');
        if (!sourceLi) return;

        const liClone = sourceLi.cloneNode(true) as Element;

        // Store the source item value so the flyout click handler can find
        // and activate the real tree-item in the side-nav.
        const value = item.getAttribute('value');
        if (value) liClone.setAttribute('data-value', value);
        liClone.querySelectorAll('[slot="end"]').forEach((el) => el.remove());

        // Replace each Modus custom element with a plain <span> that carries
        // the same classes and slot attribute. This prevents Stencil from
        // re-rendering the element after DOM insertion, which would otherwise
        // produce a duplicate <i> alongside the already-rendered one in the clone.
        Array.from(
          liClone.querySelectorAll(
            'modus-wc-icon, modus-wc-button, modus-wc-checkbox'
          )
        )
          .reverse()
          .forEach((el) => {
            const parent = el.parentNode as Node;
            const span = document.createElement('span');
            span.className = el.className;
            if (el.hasAttribute('slot')) {
              span.setAttribute('slot', el.getAttribute('slot')!);
            }
            Array.from(el.childNodes)
              .filter((n) => n.nodeType !== Node.COMMENT_NODE)
              .forEach((child) => span.appendChild(child));
            parent.insertBefore(span, el);
            parent.removeChild(el);
          });

        flyoutTreeView!.appendChild(liClone);
      });

      const anchorEl =
        treeItem.querySelector('.modus-wc-menu-item-interactive') || treeItem;
      const rect = anchorEl.getBoundingClientRect();
      flyoutContainer.style.top = `${rect.top + window.scrollY}px`;
      flyoutContainer.style.left = `${rect.right + window.scrollX + 4}px`;
      flyoutContainer.style.display = 'block';
    };

    const handleTreeItemSelect = (e: CustomEvent) => {
      const treeItem = (e.target as HTMLElement).closest('modus-wc-tree-item');
      if (!treeItem) return;

      const sideNav = treeItem.closest('modus-wc-side-navigation');
      if (!sideNav) return;

      const isExpanded = (sideNav as HTMLElement & { expanded: boolean })
        .expanded;
      // When expanded, blockExpand is off so the built-in inline toggle already ran.
      if (isExpanded) return;

      const hasNestedTree = treeItem.querySelector('modus-wc-tree-view');
      if (!hasNestedTree) return;

      populateFlyout(treeItem);
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
      requestAnimationFrame(() => {
        const interactive = el.querySelector('.modus-wc-menu-item-interactive');
        (interactive as HTMLElement)?.click();
      });
    };

    const onFlyoutRef = (el: Element | undefined) => {
      if (!el) return;
      flyoutContainer = el as HTMLElement;
      flyoutTreeView = flyoutContainer.querySelector('ul');

      // When the user clicks a flyout item, activate the corresponding real
      // tree-item in the side-nav (triggers selected state + itemSelect event)
      // and close the flyout.
      flyoutTreeView?.addEventListener('click', (e: MouseEvent) => {
        const li = (e.target as Element).closest('[data-value]');
        if (!li || !flyoutSourceItem) return;

        const value = li.getAttribute('data-value');
        if (!value) return;

        const sideNav = flyoutSourceItem.closest('modus-wc-side-navigation');
        const realItem = sideNav?.querySelector(
          `modus-wc-tree-item[value="${value}"]`
        );
        if (realItem) {
          const interactive = realItem.querySelector<HTMLElement>(
            '.modus-wc-menu-item-interactive'
          );
          interactive?.click();
        }

        hideFlyout();
      });

      if (!outsideClickHandler) {
        outsideClickHandler = (e: MouseEvent) => {
          const target = e.target as Node;
          if (
            flyoutContainer?.style.display === 'block' &&
            !flyoutContainer.contains(target) &&
            !(
              target instanceof Element &&
              target
                .closest('modus-wc-tree-item')
                ?.closest('modus-wc-side-navigation')
            )
          ) {
            hideFlyout();
          }
        };
        document.addEventListener('click', outsideClickHandler);
      }
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
          margin-left: 4rem;
          padding: 10px;
        }
        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }
        .tree-flyout {
          display: none;
          position: fixed;
          z-index: 1000;
          min-width: 200px;
          border-radius: var(--modus-wc-border-radius-md);
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.15),
            0 2px 4px -1px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          background-color: var(--modus-wc-color-base-page);
        }

        .tree-flyout > ul {
          list-style: none;
          margin: 0;
          padding: 0;
          border: var(--modus-wc-border-width-xs) solid
            var(--modus-wc-color-base-200);
          border-radius: var(--modus-wc-border-radius-md);
          overflow: hidden;
        }

        /* Icon sizing/font-family when modus-wc-icon wrapper is absent.
           populateFlyout replaces it with a <span> to prevent Stencil
           from re-rendering and doubling the icon on DOM insertion. */
        .tree-flyout .modus-wc-icon--md {
          font-size: 1.5rem;
        }

        .tree-flyout i.modus-icons::before,
        .tree-flyout i.modus-icons-outlined::before,
        .tree-flyout i.modus-icons-solid::before {
          font-family: inherit !important;
        }

        /* Replicate the tree-item SCSS flex layout that is scoped to
           modus-wc-tree-item — it doesn't cascade into the flyout <ul>. */
        .tree-flyout .modus-wc-menu-item {
          list-style: none;
        }

        .tree-flyout .modus-wc-menu-item-interactive {
          align-items: center;
          cursor: pointer;
          display: flex;
          padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-md);
          width: 100%;
        }

        .tree-flyout .modus-wc-menu-item-interactive:hover {
          background-color: var(--modus-wc-color-base-100);
        }

        .tree-flyout .modus-wc-menu-item-content {
          align-items: center;
          display: flex;
          width: 100%;
        }

        .tree-flyout .modus-wc-menu-item-content [slot='start'] {
          padding-inline-end: var(--modus-wc-spacing-sm);
        }

        .tree-flyout .modus-wc-menu-item-labels {
          padding-inline-start: var(--modus-wc-spacing-sm);
          white-space: nowrap;
        }

        /* Caret indicator for expandable items in the collapsed side-nav.
           Scoped here (story-level) because it's tied to the flyout UX pattern:
           centering the icon and repositioning the DaisyUI chevron as a small
           badge at the bottom-right of the row. Consumers using blockExpand for
           other purposes won't inherit this unexpectedly. */
        modus-wc-side-navigation
          .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
          modus-wc-tree-item
          .modus-wc-menu-item-interactive {
          [slot='end'] {
            display: none;
          }
        }

        modus-wc-side-navigation
          .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
          modus-wc-tree-item
          .modus-wc-menu-item-interactive
          .modus-wc-menu-item-labels {
          visibility: hidden;
        }

        modus-wc-side-navigation
          .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
          modus-wc-tree-item
          .modus-wc-menu-item-interactive.modus-wc-menu-dropdown-toggle {
          justify-content: center;
          position: relative;
        }

        modus-wc-side-navigation
          .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
          modus-wc-tree-item
          .modus-wc-menu-item-interactive.modus-wc-menu-dropdown-toggle::after {
          margin-top: 0;
          position: absolute;
          inset-inline-end: 4px;
          transform: scale(0.65) rotate(45deg);
          transform-origin: 75% 75%;
        }

        ${sideNavTreeItemEndActionDropdownStyles}
          modus-wc-side-navigation
          modus-wc-tree-item {
          display: block;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          modus-wc-tree-view
          .modus-wc-menu
          :where(li ul),
        [data-theme='connect-dark']
          modus-wc-side-navigation
          modus-wc-tree-view
          .modus-wc-menu
          :where(li ul) {
          margin-inline-start: 0;
          padding-inline-start: 0;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          modus-wc-tree-view
          .modus-wc-menu-dropdown
          .modus-wc-menu-item-content,
        [data-theme='connect-dark']
          modus-wc-side-navigation
          modus-wc-tree-view
          .modus-wc-menu-dropdown
          > .modus-wc-menu-item-content {
          padding-inline-start: 1.5rem;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          .modus-wc-tree-item-end-action-dropdown
          li
          button
          .modus-wc-menu-item-content,
        [data-theme='connect-dark']
          modus-wc-side-navigation
          .modus-wc-tree-item-end-action-dropdown
          li
          button
          .modus-wc-menu-item-content {
          padding-inline-start: 0;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          modus-wc-tree-item
          > li.modus-wc-menu-item.modus-wc-menu-item-active,
        [data-theme='connect-dark']
          modus-wc-side-navigation
          modus-wc-tree-item
          > li.modus-wc-menu-item.modus-wc-menu-item-active {
          position: relative;
          overflow: visible;
        }

        [data-theme='connect-light']
          modus-wc-side-navigation
          modus-wc-tree-item
          > li.modus-wc-menu-item.modus-wc-menu-item-active::before,
        [data-theme='connect-dark']
          modus-wc-side-navigation
          modus-wc-tree-item
          > li.modus-wc-menu-item.modus-wc-menu-item-active::before {
          content: '';
          position: absolute;
          inset-block: 0;
          inset-inline-start: 0;
          width: 3px;
          background: white;
          z-index: 10;
        }

        modus-wc-dropdown-menu.modus-wc-dropdown-menu {
          background-color: transparent;

          modus-wc-menu .modus-wc-menu {
            background-color: var(--modus-wc-color-base-page);
            modus-wc-menu-item .modus-wc-menu-item {
              color: var(--modus-wc-color-base-content);
            }
          }
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
                <modus-wc-icon
                  slot="start"
                  aria-label="Data icon"
                  name=""
                  custom-class=${connectIconClass(CONNECT_ICONS.data)}
                ></modus-wc-icon>
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
            <h3>Side Navigation with Tree View (Dropdown Menu)</h3>
            <p>
              This example replicates Trimble project navigation using
              modus-wc-tree-view and modus-wc-tree-item. The end-slot action on
              Explorer uses modus-wc-dropdown-menu, which handles open/close,
              outside-click, Escape key, and popper positioning via floating-ui
              — no manual top/left calculation required.
            </p>
            <p>
              When collapsed, expandable items show a caret indicator and open a
              flyout submenu panel to the right on click. This is powered by the
              <code>block-expand</code> prop on modus-wc-tree-item, which is
              toggled dynamically: disabled when the side-nav is expanded (so
              the built-in inline toggle works) and enabled when collapsed (so
              the item emits <code>itemSelect</code> for the consumer to show a
              flyout).
            </p>
            <p>
              Expand the side navigation using the navbar hamburger menu to
              reveal labels and the end-slot action button on Explorer.
            </p>
          </div>
        </div>
      </div>

      <div ${ref(onFlyoutRef)} class="tree-flyout">
        <ul
          role="menu"
          aria-label="Submenu"
          class="modus-wc-menu modus-wc-w-full"
        ></ul>
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
