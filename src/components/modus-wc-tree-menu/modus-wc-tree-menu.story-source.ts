export const treeMenuDefaultSourceCode = `
<modus-wc-tree-menu
  aria-label="Tree menu"
  orientation="vertical"
  selection-mode="single"
  size="md"
>
  <modus-wc-tree-item label="Small" value="1" size="sm"></modus-wc-tree-item>
  <modus-wc-tree-item label="Medium" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Large" value="3" size="lg"></modus-wc-tree-item>
  <modus-wc-tree-item label="Bordered" value="4" bordered="true"></modus-wc-tree-item>
  <modus-wc-tree-item label="With Sub-label" value="5" sub-label="Sub-label"></modus-wc-tree-item>
  <modus-wc-tree-item label="Selected" value="6" selected="true"></modus-wc-tree-item>
  <modus-wc-tree-item label="With Start Icon" value="7">
    <modus-wc-icon slot="start" name="info"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="With End Action" value="8">
    <div slot="end" style="display: flex; align-items: center;">
      <modus-wc-button
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Disabled" value="9" disabled="true"></modus-wc-tree-item>
</modus-wc-tree-menu>
`;

export const treeMenuMultiSelectSourceCode = `
<modus-wc-tree-menu aria-label="Tree menu" selection-mode="multiple">
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-menu>
<p id="tree-menu-selection-output">Selected: none</p>
<script>
  const treeMenu = document.querySelector('modus-wc-tree-menu');
  const output = document.getElementById('tree-menu-selection-output');

  treeMenu.addEventListener('menuSelectionChange', (e) => {
    const { selectedItems } = e.detail;
    output.textContent =
      selectedItems.length > 0
        ? \`Selected: \${selectedItems.map((i) => i.getAttribute('value')).join(', ')}\`
        : 'Selected: none';
  });
</script>
`;

export const treeMenuCollapsibleMenuSourceCode = `
<modus-wc-tree-menu aria-label="Tree menu">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-menu is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-menu>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-menu>
`;

export const treeMenuShadowDomParentSourceCode = `
<tree-menu-shadow-host></tree-menu-shadow-host>
<script>
  const host = document.querySelector('tree-menu-shadow-host');
  host.props = {
    orientation: 'vertical',
    'selection-mode': 'single',
    size: 'md',
  };
</script>
`;
