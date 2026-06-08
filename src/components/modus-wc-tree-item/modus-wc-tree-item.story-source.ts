export const treeItemDefaultSourceCode = `
<modus-wc-tree-menu>
  <modus-wc-tree-item
    label="Tree Item"
    size="md"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
`;

export const treeItemWithStartSlotSourceCode = `
<modus-wc-tree-menu>
  <modus-wc-tree-item label="Tree Item" size="md" value="treeItem">
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-menu>
`;

export const treeItemWithEndSlotSourceCode = `
<modus-wc-tree-menu>
  <modus-wc-tree-item label="Tree Item" value="treeItem">
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <modus-wc-dropdown-menu
      slot="end"
      button-variant="borderless"
      button-size="sm"
      button-shape="circle"
      button-aria-label="More options"
    >
      <modus-wc-icon slot="button" decorative name="more_vertical" size="sm"></modus-wc-icon>
      <modus-wc-menu-item slot="menu" label="Rename" value="rename"></modus-wc-menu-item>
      <modus-wc-menu-item slot="menu" label="Duplicate" value="duplicate"></modus-wc-menu-item>
      <modus-wc-menu-item slot="menu" label="Delete" value="delete"></modus-wc-menu-item>
    </modus-wc-dropdown-menu>
  </modus-wc-tree-item>
</modus-wc-tree-menu>
`;

export const treeItemCustomSourceCode = `
<modus-wc-tree-menu size="sm">
  <modus-wc-tree-item label="Tree Item" value="treeItem">
    <modus-wc-icon slot="start" name="search"></modus-wc-icon>
    <div slot="end" style="display: flex; align-items: center;">
      <div
        style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px; align-self: stretch;"
      ></div>
      <modus-wc-button variant="borderless" size="sm" aria-label="Open folder">
        <modus-wc-icon name="folder_closed" size="sm"></modus-wc-icon>
        <modus-wc-icon name="chevron_right" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-menu>
`;

export const treeItemWithCheckboxSourceCode = `
<modus-wc-tree-menu>
  <modus-wc-tree-item
    checkbox="true"
    label="Tree Item"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
`;

export const treeItemWithTooltipSourceCode = `
<modus-wc-tree-menu>
  <modus-wc-tree-item
    label="Tree Item"
    tooltip-content="Tooltip content"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
`;

export const treeItemShadowDomParentSourceCode = `
<tree-item-shadow-host></tree-item-shadow-host>
<script>
  // Register once — see Storybook story implementation for the full shadow-host class.
  const host = document.querySelector('tree-item-shadow-host');
  host.props = {
    label: 'Tree Item',
    size: 'md',
    value: 'treeItem',
  };
</script>
`;
