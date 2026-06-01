import {
  CONNECT_ICON_FONT_URL,
  CONNECT_ICONS,
  connectIconClass,
} from './modus-wc-side-navigation-connect-icons.story';
import {
  SIDE_NAV_TREE_ITEM_END_ACTION_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS,
  SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS,
} from './modus-wc-side-navigation-tree-item-end-action.story-styles';

/** Consumer-facing Show code for the WithTreeView side-navigation story. */
export const getWithTreeViewSourceCode = (): string => `
<link rel="stylesheet" href="${CONNECT_ICON_FONT_URL}" />

<modus-wc-navbar
  app-title="Modus App"
  id="connect-navbar"
></modus-wc-navbar>

<modus-wc-side-navigation id="connect-side-nav" expanded="true">
  <modus-wc-tree-view size="lg" aria-label="Project navigation">
    <modus-wc-tree-item label="All Projects" value="all-projects">
      <modus-wc-icon
        slot="start"
        aria-label="All Projects icon"
        name=""
        custom-class="${connectIconClass(CONNECT_ICONS.allProjects)}"
      ></modus-wc-icon>
    </modus-wc-tree-item>

    <modus-wc-tree-item label="Data" value="data" has-submenu="true">
      <modus-wc-icon
        slot="start"
        aria-label="Data icon"
        name=""
        custom-class="${connectIconClass(CONNECT_ICONS.data)}"
      ></modus-wc-icon>
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

<div id="tree-flyout" class="tree-flyout" style="display: none; position: fixed; z-index: 1000;">
  <ul role="menu" aria-label="Submenu" class="modus-wc-menu modus-wc-w-full"></ul>
</div>

<script>
  const sideNav = document.getElementById('connect-side-nav');
  const flyoutContainer = document.getElementById('tree-flyout');
  const flyoutTreeView = flyoutContainer.querySelector('ul');
  let flyoutSourceItem = null;

  const hideFlyout = () => {
    flyoutContainer.style.display = 'none';
  };

  // Sync side-nav expanded state from navbar hamburger menu.
  document.getElementById('connect-navbar').addEventListener('mainMenuOpenChange', (e) => {
    sideNav.expanded = e.detail;
  });

  // Toggle blockExpand on expandable items when side-nav expands/collapses.
  sideNav.addEventListener('expandedChange', (e) => {
    hideFlyout();
    sideNav.querySelectorAll('modus-wc-tree-item').forEach((treeItem) => {
      if (treeItem.hasSubmenu) {
        treeItem.blockExpand = !e.detail;
        if (!e.detail && typeof treeItem.collapseSubmenu === 'function') {
          treeItem.collapseSubmenu();
        }
      }
    });
  });

  const populateFlyout = (treeItem) => {
    const nestedTreeView = treeItem.querySelector('modus-wc-tree-view');
    if (!nestedTreeView) return;

    const sourceUl = nestedTreeView.querySelector('ul');
    if (!sourceUl) return;

    flyoutSourceItem = treeItem;
    flyoutTreeView.innerHTML = '';

    sourceUl.querySelectorAll(':scope > modus-wc-tree-item').forEach((item) => {
      const sourceLi = item.querySelector(':scope > li');
      if (!sourceLi) return;

      const liClone = sourceLi.cloneNode(true);
      const value = item.getAttribute('value');
      if (value) liClone.setAttribute('data-value', value);
      liClone.querySelectorAll('[slot="end"]').forEach((el) => el.remove());

      flyoutTreeView.appendChild(liClone);
    });

    const anchorEl = treeItem.querySelector('.modus-wc-menu-item-interactive') || treeItem;
    const rect = anchorEl.getBoundingClientRect();
    flyoutContainer.style.top = \`\${rect.top + window.scrollY}px\`;
    flyoutContainer.style.left = \`\${rect.right + window.scrollX + 4}px\`;
    flyoutContainer.style.display = 'block';
  };

  // When collapsed, show flyout for expandable items instead of inline expand.
  sideNav.addEventListener('itemSelect', (e) => {
    const treeItem = e.target.closest('modus-wc-tree-item');
    if (!treeItem || sideNav.expanded) return;
    if (treeItem.querySelector('modus-wc-tree-view')) {
      populateFlyout(treeItem);
    }
  });

  // Activate the real tree-item when a flyout entry is clicked.
  flyoutTreeView.addEventListener('click', (e) => {
    const li = e.target.closest('[data-value]');
    if (!li || !flyoutSourceItem) return;

    const value = li.getAttribute('data-value');
    const realItem = sideNav.querySelector(\`modus-wc-tree-item[value="\${value}"]\`);
    realItem?.querySelector('.modus-wc-menu-item-interactive')?.click();
    hideFlyout();
  });

  document.addEventListener('click', (e) => {
    if (flyoutContainer.style.display !== 'block' || flyoutContainer.contains(e.target)) {
      return;
    }
    const clickedTreeItem = e.target.closest?.('modus-wc-tree-item');
    if (clickedTreeItem && clickedTreeItem === flyoutSourceItem) return;
    hideFlyout();
  });

  // Close Explorer end-slot dropdown after menu selection.
  sideNav.querySelectorAll('modus-wc-dropdown-menu').forEach((dropdown) => {
    dropdown.addEventListener('itemSelect', () => {
      dropdown.menuVisible = false;
    });
  });
</script>
`;
