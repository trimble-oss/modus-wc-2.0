/** Reusable custom class for tree items with a full-height end-slot action area. */
export const TREE_ITEM_END_ACTION_CLASS = 'modus-wc-tree-item-end-action';

/** Apply to the end-slot button so it matches the tree item row height. */
export const TREE_ITEM_END_ACTION_BUTTON_CLASS =
  'modus-wc-tree-item-end-action-btn';

/** Apply to icons inside the end-slot button. */
export const TREE_ITEM_END_ACTION_ICON_CLASS =
  'modus-wc-tree-item-end-action-icon';

export const treeItemEndActionStyles = `
  .${TREE_ITEM_END_ACTION_CLASS} .modus-wc-menu-item-interactive {
    align-items: stretch;
    height: 52px;
    padding-block: 0;
    padding-inline-end: 0;
  }

  .${TREE_ITEM_END_ACTION_CLASS} .modus-wc-menu-item-content {
    align-self: stretch;
  }

  .${TREE_ITEM_END_ACTION_CLASS} [slot='end'] {
    align-self: stretch;
    display: flex;
    padding-inline-start: 0;
  }

  .${TREE_ITEM_END_ACTION_CLASS} [slot='end'] modus-wc-button {
    align-self: stretch;
    height: 100%;
  }

  .${TREE_ITEM_END_ACTION_CLASS}
    [slot='end']
    modus-wc-button
    .modus-wc-btn:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
    height: 100%;
  }

  .${TREE_ITEM_END_ACTION_CLASS} .${TREE_ITEM_END_ACTION_BUTTON_CLASS} {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 100%;
    min-height: 100%;
    border-radius: 0;
    background-color: transparent;
  }
`;
