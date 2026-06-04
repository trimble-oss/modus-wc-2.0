import {
  CONNECT_ICON_FONT_URL,
  CONNECT_ICONS,
  connectIconClass,
} from './modus-wc-side-navigation-connect-icons.story';
import {
  WITH_TREE_MENU_NAVBAR_USER_CARD,
  WITH_TREE_MENU_NAVBAR_VISIBILITY,
  withTreeMenuLayoutStyles,
} from './modus-wc-side-navigation-with-tree-menu.story-demo';
import {
  SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS,
  SIDE_NAV_DATA_FLYOUT_MENU_GAP,
  SIDE_NAV_DATA_FLYOUT_MENU_OFFSET,
  SIDE_NAV_TREE_ITEM_END_ACTION_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS,
  sideNavConnectCollapsedRailStyles,
  sideNavConnectLightTreeItemEndSlotActiveStyles,
  sideNavConnectStoryLayoutStyles,
  sideNavConnectTreeItemStyles,
  sideNavConnectWithTreeMenuStoryStyles,
  sideNavDataFlyoutDropdownStyles,
  sideNavTreeItemEndActionDropdownStyles,
} from './modus-wc-side-navigation-tree-item-end-action.story-styles';
import { WITH_TREE_MENU_SIDE_NAV_COLLAPSE_MS } from './modus-wc-side-navigation-with-tree-menu.story-handlers';

const navbarUserCardJson = JSON.stringify(WITH_TREE_MENU_NAVBAR_USER_CARD);
const navbarVisibilityJson = JSON.stringify(WITH_TREE_MENU_NAVBAR_VISIBILITY);

/** Consumer-facing Show code for the WithTreeMenu side-navigation story. */
export const getWithTreeMenuSourceCode = (): string => `
<link rel="stylesheet" href="${CONNECT_ICON_FONT_URL}" />

<style>
  ${withTreeMenuLayoutStyles}
  ${sideNavConnectCollapsedRailStyles}
  ${sideNavConnectTreeItemStyles}
  ${sideNavConnectLightTreeItemEndSlotActiveStyles}
  ${sideNavTreeItemEndActionDropdownStyles}
  ${sideNavDataFlyoutDropdownStyles}
  ${sideNavConnectStoryLayoutStyles}
  ${sideNavConnectWithTreeMenuStoryStyles}
</style>

<div class="layout-with-navbar">
  <modus-wc-navbar
    app-title="Modus App"
    class="navbar"
    id="connect-navbar"
    style="z-index: 2;"
  ></modus-wc-navbar>

  <div class="main-content-row">
    <!-- Optional Connect collapsed rail: custom-class="min-width: 15rem !important;" on side-navigation -->
    <modus-wc-side-navigation
      class="side-navigation"
      id="connect-side-nav"
      expanded="true"
      collapse-on-click-outside="true"
      mode="push"
      max-width="256px"
      target-content=".panel-content"
    >
      <modus-wc-tree-menu size="lg" aria-label="Project navigation">
        <modus-wc-tree-item label="All Projects" value="all-projects">
          <modus-wc-icon
            slot="start"
            aria-label="All Projects icon"
            name=""
            custom-class="${connectIconClass(CONNECT_ICONS.allProjects)}"
          ></modus-wc-icon>
        </modus-wc-tree-item>

        <!-- Data start slot: Connect uses flyout dropdown below.
             Modern/Classic: use <modus-wc-icon slot="start" name="master_data" size="sm" aria-label="Data icon"></modus-wc-icon> (no dropdown). -->
        <modus-wc-tree-item
          id="data-tree-item"
          label="Data"
          value="data"
          has-submenu="true"
        >
          <modus-wc-dropdown-menu
            slot="start"
            id="data-flyout-dropdown"
            menu-placement="right-start"
            menu-strategy="fixed"
            menu-offset="${SIDE_NAV_DATA_FLYOUT_MENU_OFFSET}"
            menu-size="lg"
            button-variant="borderless"
            custom-class="${SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS}"
          >
            <modus-wc-icon
              slot="button"
              aria-label="Data icon"
              name=""
              custom-class="${connectIconClass(CONNECT_ICONS.data)}"
            ></modus-wc-icon>
            <modus-wc-menu-item slot="menu" label="Explorer" value="explorer" size="lg">
              <modus-wc-icon
                slot="start-icon"
                name=""
                custom-class="${connectIconClass(CONNECT_ICONS.explorer)}"
              ></modus-wc-icon>
            </modus-wc-menu-item>
            <modus-wc-menu-item slot="menu" label="Views" value="views" size="lg">
              <modus-wc-icon
                slot="start-icon"
                name=""
                custom-class="${connectIconClass(CONNECT_ICONS.views)}"
              ></modus-wc-icon>
            </modus-wc-menu-item>
            <modus-wc-menu-item slot="menu" label="Releases" value="releases" size="lg">
              <modus-wc-icon
                slot="start-icon"
                name=""
                custom-class="${connectIconClass(CONNECT_ICONS.releases)}"
              ></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-dropdown-menu>
          <modus-wc-tree-menu is-sub-menu="true">
            <modus-wc-tree-item
              label="Explorer"
              value="explorer"
              custom-class="${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS}"
            >
              <modus-wc-icon
                slot="start"
                aria-label="Explorer icon"
                name=""
                custom-class="${connectIconClass(CONNECT_ICONS.explorer)}"
              ></modus-wc-icon>
              <!-- Explorer end-slot action: Connect only. Omit this block on Modern/Classic. -->
              <div slot="end" style="display: flex; align-items: stretch;">
                <div style="width: 1px; background: currentColor; opacity: 0.3;"></div>
                <modus-wc-dropdown-menu
                  button-variant="borderless"
                  button-size="sm"
                  menu-size="sm"
                  menu-placement="right-start"
                  menu-strategy="fixed"
                  menu-offset="0"
                  button-aria-label="Open folder"
                  custom-class="${SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS}"
                >
                  <div slot="button" style="display: flex; align-items: center; gap: 2px;">
                    <modus-wc-icon
                      aria-label="Folder icon"
                      name=""
                      size="sm"
                      custom-class="${connectIconClass(CONNECT_ICONS.folder, SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS, 'i16')}"
                    ></modus-wc-icon>
                    <modus-wc-icon
                      aria-label="Open submenu icon"
                      name=""
                      size="sm"
                      custom-class="${connectIconClass(CONNECT_ICONS.chevronRight, SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS, 'i16')}"
                    ></modus-wc-icon>
                  </div>
                  <modus-wc-menu-item slot="menu" label="Rename" value="rename"></modus-wc-menu-item>
                  <modus-wc-menu-item slot="menu" label="Duplicate" value="duplicate"></modus-wc-menu-item>
                  <modus-wc-menu-item slot="menu" label="Delete" value="delete"></modus-wc-menu-item>
                </modus-wc-dropdown-menu>
              </div>
            </modus-wc-tree-item>
            <modus-wc-tree-item label="Views" value="views">
              <modus-wc-icon
                slot="start"
                aria-label="Views icon"
                name=""
                custom-class="${connectIconClass(CONNECT_ICONS.views)}"
              ></modus-wc-icon>
            </modus-wc-tree-item>
            <modus-wc-tree-item label="Releases" value="releases">
              <modus-wc-icon
                slot="start"
                aria-label="Releases icon"
                name=""
                custom-class="${connectIconClass(CONNECT_ICONS.releases)}"
              ></modus-wc-icon>
            </modus-wc-tree-item>
          </modus-wc-tree-menu>
        </modus-wc-tree-item>

        <modus-wc-tree-item label="Activity" value="activity">
          <modus-wc-icon
            slot="start"
            aria-label="Activity icon"
            name=""
            custom-class="${connectIconClass(CONNECT_ICONS.activity)}"
          ></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="BCF Topics" value="bcf-topics">
          <modus-wc-icon
            slot="start"
            aria-label="BCF Topics icon"
            name=""
            custom-class="${connectIconClass(CONNECT_ICONS.bcfTopics)}"
          ></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="Field Data" value="field-data">
          <modus-wc-icon
            slot="start"
            aria-label="Field Data icon"
            name=""
            custom-class="${connectIconClass(CONNECT_ICONS.fieldData)}"
          ></modus-wc-icon>
        </modus-wc-tree-item>
      </modus-wc-tree-menu>
    </modus-wc-side-navigation>

    <div class="panel-content">
      <h3>Side Navigation with Tree Menu</h3>
      <p>
        Connect theme demo: expand the side nav with the navbar hamburger.
        Data uses a flyout when collapsed and an inline submenu when expanded.
      </p>
    </div>
  </div>
</div>

<script>
  const SIDE_NAV_DATA_FLYOUT_MENU_GAP = ${SIDE_NAV_DATA_FLYOUT_MENU_GAP};
  const SIDE_NAV_COLLAPSE_MS = ${WITH_TREE_MENU_SIDE_NAV_COLLAPSE_MS};
  const WITH_TREE_MENU_NAVBAR_USER_CARD = ${navbarUserCardJson};
  const WITH_TREE_MENU_NAVBAR_VISIBILITY = ${navbarVisibilityJson};

  const isConnectSideNavTheme = () => {
    const theme = document.documentElement.getAttribute('data-theme') ?? '';
    return theme === 'connect-light' || theme === 'connect-dark';
  };

  const sideNav = document.getElementById('connect-side-nav');
  const dataFlyoutDropdown = document.getElementById('data-flyout-dropdown');
  const dataTreeItem = document.getElementById('data-tree-item');

  let flyoutOpenTimer = null;
  let collapseFlyoutTimer = null;
  let expandedChangeReady = false;
  let suppressNextMenuOpen = false;

  const cancelPendingFlyoutOpen = () => {
    if (flyoutOpenTimer) {
      clearTimeout(flyoutOpenTimer);
      flyoutOpenTimer = null;
    }
    if (collapseFlyoutTimer) {
      clearTimeout(collapseFlyoutTimer);
      collapseFlyoutTimer = null;
    }
  };

  const hideFlyout = () => {
    if (!isConnectSideNavTheme()) return;
    cancelPendingFlyoutOpen();
    if (dataFlyoutDropdown) {
      dataFlyoutDropdown.menuVisible = false;
    }
  };

  const setDataFlyoutDisabled = (disabled) => {
    if (!dataFlyoutDropdown) return;
    dataFlyoutDropdown.disabled = disabled;
  };

  const syncDataFlyoutMenuOffset = () => {
    if (!dataFlyoutDropdown) return;

    const sideNavHost = dataFlyoutDropdown.closest('modus-wc-side-navigation');
    const navPanel = sideNavHost?.querySelector('.modus-wc-side-navigation');
    const button = dataFlyoutDropdown.querySelector('modus-wc-button');

    if (!navPanel || !button) return;

    const navRect = navPanel.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();
    const triggerRect = dataFlyoutDropdown.getBoundingClientRect();
    const anchorRight = Math.max(btnRect.right, triggerRect.right);
    const offset = Math.round(
      navRect.right - anchorRight + SIDE_NAV_DATA_FLYOUT_MENU_GAP
    );

    dataFlyoutDropdown.menuOffset = offset;
  };

  const openDataFlyout = (defer = false) => {
    if (!isConnectSideNavTheme()) return;

    cancelPendingFlyoutOpen();

    const open = () => {
      flyoutOpenTimer = null;
      if (dataFlyoutDropdown) {
        syncDataFlyoutMenuOffset();
        dataFlyoutDropdown.menuVisible = true;
      }
    };

    if (defer) {
      flyoutOpenTimer = setTimeout(open, 0);
    } else {
      open();
    }
  };

  const initConnectNavbar = () => {
    const navbar = document.getElementById('connect-navbar');
    if (!navbar) return;

    navbar.userCard = WITH_TREE_MENU_NAVBAR_USER_CARD;
    navbar.visibility = WITH_TREE_MENU_NAVBAR_VISIBILITY;
  };

  const initDataFlyoutDisabled = () => {
    if (!dataFlyoutDropdown) return;
    if (!isConnectSideNavTheme()) {
      setDataFlyoutDisabled(true);
      return;
    }
    setDataFlyoutDisabled(Boolean(sideNav?.expanded));
  };

  const resetForNonConnectTheme = () => {
    hideFlyout();
    setDataFlyoutDisabled(true);
    sideNav?.querySelectorAll('modus-wc-tree-item').forEach((treeItem) => {
      if (treeItem.hasSubmenu) {
        treeItem.blockExpand = false;
      }
    });
  };

  new MutationObserver(() => {
    if (!isConnectSideNavTheme()) {
      resetForNonConnectTheme();
    }
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  const getSelectedTreeItem = () => {
    const items = sideNav.querySelectorAll('modus-wc-tree-item');
    for (const item of items) {
      if (item.selected) return item;
    }
    return null;
  };

  const selectionInDataSection = () => {
    const selected = getSelectedTreeItem();
    if (!selected) return false;
    if (selected.getAttribute('value') === 'data') return true;
    return Boolean(
      selected.closest('modus-wc-tree-item[value="data"] modus-wc-tree-menu')
    );
  };

  const shouldOpenDataFlyoutOnCollapse = () =>
    getSelectedTreeItem()?.getAttribute('value') === 'data';

  const selectSubmenuParent = (dataItem) => {
    dataItem.selected = true;
    sideNav.querySelectorAll('modus-wc-tree-item').forEach((item) => {
      if (item !== dataItem) {
        item.selected = false;
      }
    });
  };

  const collapseSubmenuInline = (treeItem) => {
    const submenu = treeItem.querySelector('.modus-wc-menu-dropdown');
    const liElement = treeItem.querySelector(':scope > li');

    if (!submenu || !liElement) return;

    submenu.classList.remove('modus-wc-menu-dropdown-show');
    liElement.classList.remove('modus-wc-menu-item-expanded');
    liElement.classList.remove('modus-wc-menu-dropdown-show');

    if ('isExpanded' in treeItem) {
      treeItem.isExpanded = false;
    }
  };

  const openDataSubmenuInline = (dataItem) => {
    const submenu = dataItem.querySelector('.modus-wc-menu-dropdown');
    const liElement = dataItem.querySelector(':scope > li');

    if (
      !submenu ||
      !liElement ||
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ) {
      return;
    }

    submenu.classList.add('modus-wc-menu-dropdown-show');
    liElement.classList.add('modus-wc-menu-item-expanded');
    liElement.classList.add('modus-wc-menu-dropdown-show');

    if ('isExpanded' in dataItem) {
      dataItem.isExpanded = true;
    }
  };

  const collapseTreeSubmenus = () => {
    sideNav.querySelectorAll('modus-wc-tree-item').forEach((treeItem) => {
      if (treeItem.hasSubmenu && typeof treeItem.collapseSubmenu === 'function') {
        treeItem.collapseSubmenu();
      }
    });
  };

  const handleExpandedChangeConnect = (expanded) => {
    hideFlyout();

    const treeItems = sideNav.querySelectorAll('modus-wc-tree-item');

    if (expanded) {
      setDataFlyoutDisabled(true);
      treeItems.forEach((treeItem) => {
        if (treeItem.hasSubmenu) {
          treeItem.blockExpand = false;
        }
      });

      if (selectionInDataSection()) {
        const dataItem = sideNav.querySelector('modus-wc-tree-item[value="data"]');
        if (dataItem) {
          setTimeout(() => openDataSubmenuInline(dataItem), 0);
        }
      }
    } else {
      suppressNextMenuOpen = true;
      setDataFlyoutDisabled(false);

      treeItems.forEach((treeItem) => {
        if (treeItem.hasSubmenu) {
          treeItem.blockExpand = true;
          collapseSubmenuInline(treeItem);

          if (typeof treeItem.collapseSubmenu === 'function') {
            treeItem.collapseSubmenu();
          }
        }
      });

      if (shouldOpenDataFlyoutOnCollapse()) {
        collapseFlyoutTimer = setTimeout(() => {
          collapseFlyoutTimer = null;
          openDataFlyout();
        }, SIDE_NAV_COLLAPSE_MS);
      }
    }
  };

  const wireConnectSideNavDemo = () => {
    initConnectNavbar();
    initDataFlyoutDisabled();

    document
      .getElementById('connect-navbar')
      ?.addEventListener('mainMenuOpenChange', (e) => {
        if (suppressNextMenuOpen && e.detail) {
          suppressNextMenuOpen = false;
          return;
        }
        suppressNextMenuOpen = false;
        sideNav.expanded = e.detail;
      });

    sideNav.addEventListener('expandedChange', (e) => {
      const connectTheme = isConnectSideNavTheme();

      if (!expandedChangeReady) {
        expandedChangeReady = true;
        if (connectTheme) {
          setDataFlyoutDisabled(Boolean(e.detail));
          if (!e.detail) {
            handleExpandedChangeConnect(false);
          }
        } else if (!e.detail) {
          suppressNextMenuOpen = true;
          collapseTreeSubmenus();
        }
        return;
      }

      if (!connectTheme) {
        if (!e.detail) {
          suppressNextMenuOpen = true;
          collapseTreeSubmenus();
        }
        return;
      }

      handleExpandedChangeConnect(e.detail);
    });

    if (!expandedChangeReady) {
      expandedChangeReady = true;
      if (isConnectSideNavTheme()) {
        setDataFlyoutDisabled(Boolean(sideNav.expanded));
        if (!sideNav.expanded) {
          handleExpandedChangeConnect(false);
        }
      }
    }

    dataTreeItem?.addEventListener('itemSelect', (e) => {
      if (e.target !== dataTreeItem) return;

      if (sideNav.expanded) {
        selectSubmenuParent(dataTreeItem);
        return;
      }

      if (isConnectSideNavTheme()) {
        openDataFlyout(true);
      }
    });

    sideNav.addEventListener('itemSelect', (e) => {
      const treeItem = e.target.closest('modus-wc-tree-item');
      if (!treeItem) return;

      const value = treeItem.getAttribute('value');
      if (value === 'data' && sideNav.expanded) {
        const dataItem = sideNav.querySelector(
          'modus-wc-tree-item[value="data"]'
        );
        if (dataItem) {
          selectSubmenuParent(dataItem);
        }
      }

      if (
        isConnectSideNavTheme() &&
        !sideNav.expanded &&
        treeItem.querySelector('modus-wc-tree-menu')
      ) {
        openDataFlyout(true);
      }
    });

    dataFlyoutDropdown?.addEventListener('itemSelect', (e) => {
      if (!isConnectSideNavTheme()) return;
      const value = e.detail?.value;
      if (!value) return;

      hideFlyout();

      const realItem = sideNav.querySelector(
        \`modus-wc-tree-item[value="\${value}"]\`
      );
      realItem
        ?.querySelector(':scope > li > .modus-wc-menu-item-interactive')
        ?.click();

      dataFlyoutDropdown
        ?.querySelector('modus-wc-button .modus-wc-btn')
        ?.blur();

      setTimeout(() => hideFlyout(), 0);
    });

    sideNav.querySelectorAll('modus-wc-dropdown-menu').forEach((dropdown) => {
      if (dropdown.id === 'data-flyout-dropdown') return;
      dropdown.addEventListener('itemSelect', () => {
        dropdown.menuVisible = false;
      });
    });
  };

  Promise.all([
    customElements.whenDefined('modus-wc-navbar'),
    customElements.whenDefined('modus-wc-side-navigation'),
  ]).then(wireConnectSideNavDemo);
</script>
`;
