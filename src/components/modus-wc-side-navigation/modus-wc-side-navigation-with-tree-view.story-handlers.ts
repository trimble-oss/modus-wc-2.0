/**
 * WithTreeView story behavior split by theme.
 *
 * | Concern | Connect | Modern / Classic |
 * |---------|---------|-------------------|
 * | Navbar ↔ side-nav sync (`handleMenuOpenChange`) | Shared | Shared |
 * | Stale `mainMenuOpenChange` after click-outside collapse (`suppressNextMenuOpen`) | Shared | Shared |
 * | `expandedChange` submenu cleanup | Flyout + `blockExpand` | `collapseSubmenu()` only |
 * | Data row start slot | Flyout dropdown | `master_data` icon |
 * | `hideFlyout` / flyout timers | Yes | No |
 * | Collapsed rail CSS (hide labels, end slot, grid) | Yes | No |
 * | `min-width` 5rem collapsed rail | Story arg (Connect layout) | Default 4rem when arg omitted |
 */

import {
  isConnectSideNavTheme,
  SIDE_NAV_DATA_FLYOUT_MENU_GAP,
} from './modus-wc-side-navigation-tree-item-end-action.story-styles';

/** Side-nav width transition (modus-wc-side-navigation.scss). */
export const WITH_TREE_VIEW_SIDE_NAV_COLLAPSE_MS = 220;

export type WithTreeViewFlyoutState = {
  dataIconDropdown: HTMLElement | null;
  flyoutOpenTimer: ReturnType<typeof setTimeout> | null;
  collapseFlyoutTimer: ReturnType<typeof setTimeout> | null;
};

export type WithTreeViewMenuOpenSuppress = {
  get: () => boolean;
  set: (value: boolean) => void;
};

const cancelPendingFlyoutOpen = (state: WithTreeViewFlyoutState) => {
  if (state.flyoutOpenTimer) {
    clearTimeout(state.flyoutOpenTimer);
    state.flyoutOpenTimer = null;
  }
  if (state.collapseFlyoutTimer) {
    clearTimeout(state.collapseFlyoutTimer);
    state.collapseFlyoutTimer = null;
  }
};

export const hideWithTreeViewFlyout = (state: WithTreeViewFlyoutState) => {
  cancelPendingFlyoutOpen(state);
  if (state.dataIconDropdown) {
    (
      state.dataIconDropdown as HTMLElement & { menuVisible: boolean }
    ).menuVisible = false;
  }
};

export const setWithTreeViewDataFlyoutDisabled = (
  state: WithTreeViewFlyoutState,
  disabled: boolean
) => {
  if (state.dataIconDropdown) {
    (state.dataIconDropdown as HTMLElement & { disabled: boolean }).disabled =
      disabled;
  }
};

const syncDataFlyoutMenuOffset = (state: WithTreeViewFlyoutState) => {
  if (!state.dataIconDropdown) return;

  const sideNavHost = state.dataIconDropdown.closest(
    'modus-wc-side-navigation'
  );
  const navPanel = sideNavHost?.querySelector(
    '.modus-wc-side-navigation'
  ) as HTMLElement | null;
  const button = state.dataIconDropdown.querySelector(
    'modus-wc-button'
  ) as HTMLElement | null;

  if (!navPanel || !button) return;

  const navRect = navPanel.getBoundingClientRect();
  const btnRect = button.getBoundingClientRect();
  const triggerRect = state.dataIconDropdown.getBoundingClientRect();
  const anchorRight = Math.max(btnRect.right, triggerRect.right);
  const offset = Math.round(
    navRect.right - anchorRight + SIDE_NAV_DATA_FLYOUT_MENU_GAP
  );

  (state.dataIconDropdown as HTMLElement & { menuOffset: number }).menuOffset =
    offset;
};

export const openWithTreeViewDataFlyout = (
  state: WithTreeViewFlyoutState,
  defer = false
) => {
  if (!isConnectSideNavTheme()) return;

  cancelPendingFlyoutOpen(state);

  const open = () => {
    state.flyoutOpenTimer = null;
    if (state.dataIconDropdown) {
      syncDataFlyoutMenuOffset(state);
      (
        state.dataIconDropdown as HTMLElement & {
          menuVisible: boolean;
        }
      ).menuVisible = true;
    }
  };

  if (defer) {
    state.flyoutOpenTimer = setTimeout(open, 0);
  } else {
    open();
  }
};

const collapseSubmenuInline = (treeItem: Element) => {
  const submenu = treeItem.querySelector('.modus-wc-menu-dropdown');
  const liElement = treeItem.querySelector(':scope > li');

  if (!submenu || !liElement) return;

  submenu.classList.remove('modus-wc-menu-dropdown-show');
  liElement.classList.remove('modus-wc-menu-item-expanded');
  liElement.classList.remove('modus-wc-menu-dropdown-show');

  const host = treeItem as unknown as { isExpanded?: boolean };
  if (host && 'isExpanded' in host) {
    host.isExpanded = false;
  }
};

const openDataSubmenuInline = (dataItem: Element) => {
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

  const host = dataItem as unknown as { isExpanded?: boolean };
  if (host && 'isExpanded' in host) {
    host.isExpanded = true;
  }
};

const getSelectedTreeItem = (root: HTMLElement) => {
  const items = Array.from(root.querySelectorAll('modus-wc-tree-item'));
  for (const item of items) {
    if ((item as HTMLElement & { selected?: boolean }).selected) {
      return item as HTMLElement;
    }
  }
  return null;
};

const selectionInDataSection = (root: HTMLElement) => {
  const selected = getSelectedTreeItem(root);
  if (!selected) return false;
  if (selected.getAttribute('value') === 'data') return true;
  return Boolean(
    selected.closest('modus-wc-tree-item[value="data"] modus-wc-tree-view')
  );
};

const shouldOpenDataFlyoutOnCollapse = (root: HTMLElement) =>
  getSelectedTreeItem(root)?.getAttribute('value') === 'data';

const collapseTreeSubmenus = (eventSource: HTMLElement) => {
  eventSource.querySelectorAll('modus-wc-tree-item').forEach((treeItem) => {
    const item = treeItem as unknown as {
      hasSubmenu?: boolean;
      collapseSubmenu?: () => Promise<void>;
    };
    if (item.hasSubmenu && typeof item.collapseSubmenu === 'function') {
      void item.collapseSubmenu();
    }
  });
};

/** Modern/Classic: same pattern as WithSubmenu — no flyout or blockExpand. */
export const handleWithTreeViewExpandedChangeClassicModern = (
  e: CustomEvent<boolean>,
  eventSource: HTMLElement,
  menuOpenSuppress: WithTreeViewMenuOpenSuppress
) => {
  if (!e.detail) {
    menuOpenSuppress.set(true);
    collapseTreeSubmenus(eventSource);
  }
};

/** Connect: flyout, blockExpand, and inline submenu coordination. */
export const handleWithTreeViewExpandedChangeConnect = (
  e: CustomEvent<boolean>,
  eventSource: HTMLElement,
  flyoutState: WithTreeViewFlyoutState,
  menuOpenSuppress: WithTreeViewMenuOpenSuppress
) => {
  hideWithTreeViewFlyout(flyoutState);

  const treeItems = eventSource.querySelectorAll('modus-wc-tree-item');

  if (e.detail) {
    setWithTreeViewDataFlyoutDisabled(flyoutState, true);
    treeItems.forEach((treeItem) => {
      const item = treeItem as unknown as {
        hasSubmenu?: boolean;
        blockExpand?: boolean;
      };
      if (item.hasSubmenu) {
        item.blockExpand = false;
      }
    });

    if (selectionInDataSection(eventSource)) {
      const dataItem = eventSource.querySelector(
        'modus-wc-tree-item[value="data"]'
      );
      if (dataItem) {
        setTimeout(() => openDataSubmenuInline(dataItem), 0);
      }
    }
  } else {
    menuOpenSuppress.set(true);
    setWithTreeViewDataFlyoutDisabled(flyoutState, false);

    treeItems.forEach((treeItem) => {
      const item = treeItem as unknown as {
        hasSubmenu?: boolean;
        blockExpand?: boolean;
        collapseSubmenu?: () => Promise<void>;
      };
      if (item.hasSubmenu) {
        item.blockExpand = true;
        collapseSubmenuInline(treeItem);

        if (typeof item.collapseSubmenu === 'function') {
          void item.collapseSubmenu();
        }
      }
    });

    if (shouldOpenDataFlyoutOnCollapse(eventSource)) {
      flyoutState.collapseFlyoutTimer = setTimeout(() => {
        flyoutState.collapseFlyoutTimer = null;
        openWithTreeViewDataFlyout(flyoutState);
      }, WITH_TREE_VIEW_SIDE_NAV_COLLAPSE_MS);
    }
  }
};

/** Navbar hamburger ↔ side-nav expanded (all themes). */
export const handleWithTreeViewMenuOpenChange = (
  e: CustomEvent<boolean>,
  menuOpenSuppress: WithTreeViewMenuOpenSuppress
) => {
  if (menuOpenSuppress.get() && e.detail) {
    menuOpenSuppress.set(false);
    return;
  }
  menuOpenSuppress.set(false);

  const eventSource = e.target as HTMLElement;
  const storyContainer = eventSource?.closest('.layout-with-navbar');
  const sideNav = storyContainer
    ? storyContainer.querySelector('modus-wc-side-navigation')
    : document.querySelector('modus-wc-side-navigation');

  if (sideNav) {
    (sideNav as HTMLElement & { expanded: boolean }).expanded = e.detail;
  }
};

export const resetWithTreeViewForNonConnectTheme = (
  flyoutState: WithTreeViewFlyoutState
) => {
  hideWithTreeViewFlyout(flyoutState);
  setWithTreeViewDataFlyoutDisabled(flyoutState, true);

  document
    .querySelectorAll(
      'modus-wc-side-navigation.side-navigation modus-wc-tree-item'
    )
    .forEach((treeItem) => {
      const item = treeItem as unknown as {
        hasSubmenu?: boolean;
        blockExpand?: boolean;
      };
      if (item.hasSubmenu) {
        item.blockExpand = false;
      }
    });
};
