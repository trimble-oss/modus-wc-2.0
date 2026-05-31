/**
 * Story-level classes and styles for tree-items with full-height end-slot
 * action areas inside the side-navigation stories. These are Storybook
 * utilities — not component code — and are scoped to this component's stories.
 */

/** Apply to the modus-wc-tree-item to enable the full-height end-slot layout. */
export const SIDE_NAV_TREE_ITEM_END_ACTION_CLASS =
  'modus-wc-tree-item-end-action';

/** Apply to modus-wc-button in the end slot (button variant). */
export const SIDE_NAV_TREE_ITEM_END_ACTION_BUTTON_CLASS =
  'modus-wc-tree-item-end-action-btn';

/** Apply to modus-wc-dropdown-menu in the end slot (dropdown variant). */
export const SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS =
  'modus-wc-tree-item-end-action-dropdown';

/** Apply to icons inside the end-slot button. */
export const SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS =
  'modus-wc-tree-item-end-action-icon';

/** Layout styles for tree-items with a modus-wc-button end-slot action. */
export const sideNavTreeItemEndActionStyles = `
  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .modus-wc-menu-item-interactive {
    align-items: stretch;
    height: 52px;
    padding-block: 0;
    padding-inline-end: 0;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .modus-wc-menu-item-content {
    align-self: stretch;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} [slot='end'] {
    align-self: stretch;
    display: flex;
    padding-inline-start: 0;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} [slot='end'] modus-wc-button {
    align-self: stretch;
    height: 100%;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS}
    [slot='end']
    modus-wc-button
    .modus-wc-btn:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
    height: 100%;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .${SIDE_NAV_TREE_ITEM_END_ACTION_BUTTON_CLASS} {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 100%;
    min-height: 100%;
    border-radius: 0;
    background-color: transparent;
  }
`;

/** Layout styles for tree-items with a modus-wc-dropdown-menu end-slot action. */
export const sideNavTreeItemEndActionDropdownStyles = `
  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .modus-wc-menu-item-interactive {
    align-items: stretch;
    height: 52px;
    padding-block: 0;
    padding-inline-end: 0;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .modus-wc-menu-item-content {
    align-self: stretch;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} [slot='end'] {
    align-self: stretch;
    display: flex;
    padding-inline-start: 0;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} [slot='end'] modus-wc-dropdown-menu {
    align-self: stretch;
    height: 100%;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} [slot='end'] modus-wc-dropdown-menu .modus-wc-btn {
    height: 100%;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .${SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS} .modus-wc-btn {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 100%;
    min-height: 100%;
    border-radius: 0;
    background-color: transparent;
  }
`;
