export const treeItemDefaultSourceCode = `
<modus-wc-tree-view>
  <modus-wc-tree-item
    label="Tree Item"
    size="md"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-view>
`;

export const treeItemWithStartSlotSourceCode = `
<modus-wc-tree-view>
  <modus-wc-tree-item label="Tree Item" size="md" value="treeItem">
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
`;

export const treeItemWithEndSlotSourceCode = `
<modus-wc-tree-view>
  <modus-wc-tree-item label="Tree Item" value="treeItem">
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        id="tree-item-end-btn"
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        id="tree-item-end-menu"
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu id="tree-item-context-menu" size="sm" bordered="true">
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
<script>
  const btn = document.getElementById('tree-item-end-btn');
  const menu = document.getElementById('tree-item-end-menu');
  const contextMenu = document.getElementById('tree-item-context-menu');

  btn.addEventListener('buttonClick', (e) => {
    e.stopPropagation();
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
  });

  contextMenu.addEventListener('itemSelect', () => {
    menu.style.display = 'none';
  });

  document.addEventListener('click', (e) => {
    if (
      menu.style.display !== 'block' ||
      btn.contains(e.target) ||
      menu.contains(e.target)
    ) {
      return;
    }
    menu.style.display = 'none';
  });
</script>
`;

export const treeItemCustomSourceCode = `
<modus-wc-tree-view size="sm">
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
</modus-wc-tree-view>
`;

export const treeItemWithCheckboxSourceCode = `
<modus-wc-tree-view>
  <modus-wc-tree-item
    checkbox="true"
    label="Tree Item"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-view>
`;

export const treeItemWithTooltipSourceCode = `
<modus-wc-tree-view>
  <modus-wc-tree-item
    label="Tree Item"
    tooltip-content="Tooltip content"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-view>
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
