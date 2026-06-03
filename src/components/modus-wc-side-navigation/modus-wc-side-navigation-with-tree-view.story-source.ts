import {
  CONNECT_ICON_FONT_URL,
  CONNECT_ICONS,
  connectIconClass,
} from './modus-wc-side-navigation-connect-icons.story';
import {
  SIDE_NAV_COLLAPSED_MIN_WIDTH_CLASS,
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

/** Consumer-facing Show code for the WithTreeView side-navigation story. */
export const getWithTreeViewSourceCode = (): string => `
<link rel="stylesheet" href="${CONNECT_ICON_FONT_URL}" />

<style>
  ${sideNavConnectCollapsedRailStyles}
  ${sideNavConnectTreeItemStyles}
  ${sideNavConnectLightTreeItemEndSlotActiveStyles}
  ${sideNavTreeItemEndActionDropdownStyles}
  ${sideNavDataFlyoutDropdownStyles}
  ${sideNavConnectStoryLayoutStyles}
  ${sideNavConnectWithTreeViewStoryStyles}
</style>

<modus-wc-navbar
  app-title="Modus App"
  id="connect-navbar"
></modus-wc-navbar>

<modus-wc-side-navigation
  id="connect-side-nav"
  expanded="true"
  custom-class="${SIDE_NAV_COLLAPSED_MIN_WIDTH_CLASS}"
>
  <modus-wc-tree-view size="lg" aria-label="Project navigation">
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
    <modus-wc-tree-item label="Data" value="data" has-submenu="true">
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
      <modus-wc-tree-view is-sub-menu="true">
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
              menu-offset="14"
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
      </modus-wc-tree-view>
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
  </modus-wc-tree-view>
</modus-wc-side-navigation>

<script>
  const isConnectSideNavTheme = () => {
    const theme = document.documentElement.getAttribute('data-theme') ?? '';
    return theme === 'connect-light' || theme === 'connect-dark';
  };

  const sideNav = document.getElementById('connect-side-nav');
  const dataFlyoutDropdown = document.getElementById('data-flyout-dropdown');

  if (dataFlyoutDropdown && isConnectSideNavTheme()) {
    dataFlyoutDropdown.disabled = true;
  }

  let flyoutOpenTimer = null;
  let collapseFlyoutTimer = null;

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
    if (!isConnectSideNavTheme() || !dataFlyoutDropdown) return;
    dataFlyoutDropdown.disabled = disabled;
  };

  const resetForNonConnectTheme = () => {
    hideFlyout();
    if (dataFlyoutDropdown) {
      dataFlyoutDropdown.disabled = true;
    }
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
      selected.closest('modus-wc-tree-item[value="data"] modus-wc-tree-view')
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

  const SIDE_NAV_COLLAPSE_MS = 220;
  let suppressNextMenuOpen = false;

  // Navbar hamburger ↔ side-nav (all themes). Suppress stale "open" after click-outside collapse.
  document.getElementById('connect-navbar').addEventListener('mainMenuOpenChange', (e) => {
    if (suppressNextMenuOpen && e.detail) {
      suppressNextMenuOpen = false;
      return;
    }
    suppressNextMenuOpen = false;
    sideNav.expanded = e.detail;
  });

  sideNav.addEventListener('expandedChange', (e) => {
    const connectTheme = isConnectSideNavTheme();

    if (!connectTheme) {
      if (!e.detail) {
        suppressNextMenuOpen = true;
        sideNav.querySelectorAll('modus-wc-tree-item').forEach((treeItem) => {
          if (treeItem.hasSubmenu && typeof treeItem.collapseSubmenu === 'function') {
            treeItem.collapseSubmenu();
          }
        });
      }
      return;
    }

    hideFlyout();

    const treeItems = sideNav.querySelectorAll('modus-wc-tree-item');

    if (e.detail) {
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

      if (shouldOpenDataFlyoutOnCollapse() && dataFlyoutDropdown) {
        collapseFlyoutTimer = setTimeout(() => {
          collapseFlyoutTimer = null;
          dataFlyoutDropdown.menuVisible = true;
        }, SIDE_NAV_COLLAPSE_MS);
      }
    }
  });

  sideNav.addEventListener('itemSelect', (e) => {
    const treeItem = e.target.closest('modus-wc-tree-item');
    if (!treeItem) return;

    const value = treeItem.getAttribute('value');
    if (value === 'data' && sideNav.expanded) {
      const dataItem = sideNav.querySelector('modus-wc-tree-item[value="data"]');
      if (dataItem) {
        selectSubmenuParent(dataItem);
      }
    }

    if (
      isConnectSideNavTheme() &&
      !sideNav.expanded &&
      treeItem.querySelector('modus-wc-tree-view')
    ) {
      cancelPendingFlyoutOpen();
      flyoutOpenTimer = setTimeout(() => {
        flyoutOpenTimer = null;
        if (dataFlyoutDropdown) {
          dataFlyoutDropdown.menuVisible = true;
        }
      }, 0);
    }
  });

  dataFlyoutDropdown?.addEventListener('itemSelect', (e) => {
    if (!isConnectSideNavTheme()) return;
    const value = e.detail?.value;
    if (!value) return;

    hideFlyout();

    const realItem = sideNav.querySelector(\`modus-wc-tree-item[value="\${value}"]\`);
    realItem
      ?.querySelector(':scope > li > .modus-wc-menu-item-interactive')
      ?.click();

    dataFlyoutDropdown
      ?.querySelector('modus-wc-button .modus-wc-btn')
      ?.blur();

    setTimeout(() => hideFlyout(), 0);
  });

  // Close Explorer end-slot dropdown after menu selection.
  sideNav.querySelectorAll('modus-wc-dropdown-menu').forEach((dropdown) => {
    if (dropdown.id === 'data-flyout-dropdown') return;
    dropdown.addEventListener('itemSelect', () => {
      dropdown.menuVisible = false;
    });
  });
</script>
`;
