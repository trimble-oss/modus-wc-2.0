import{w as x}from"./decorator-Cv9na35H.js";import{b as a}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{n as E}from"./ref-Bw8asrgi.js";import{c as C}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const D=`
<modus-wc-tree-menu
  aria-label="Tree menu"
  orientation="vertical"
  selection-mode="single"
  size="md"
>
  <modus-wc-tree-item label="Extra Small" value="xs" size="xs"></modus-wc-tree-item>
  <modus-wc-tree-item label="Small" value="1" size="sm"></modus-wc-tree-item>
  <modus-wc-tree-item label="Medium" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Large" value="3" size="lg"></modus-wc-tree-item>
  <modus-wc-tree-item label="Extra Large" value="xl" size="xl"></modus-wc-tree-item>
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
`,y=`
<modus-wc-tree-menu
  aria-label="Tree menu"
  orientation="vertical"
  selection-mode="multiple"
  size="md"
>
  <modus-wc-tree-item label="Item 1" value="1" size="md"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2" size="md"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3" size="md"></modus-wc-tree-item>
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
<\/script>
`,I=`
<style>
  .tree-menu-width {
    width: 400px;
  }
</style>
<modus-wc-tree-menu
  aria-label="Tree menu"
  custom-class="tree-menu-width"
  orientation="vertical"
  selection-mode="single"
  size="md"
>
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true" size="md">
    <modus-wc-tree-menu is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1" size="md"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2" size="md"></modus-wc-tree-item>
    </modus-wc-tree-menu>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling" size="md"></modus-wc-tree-item>
</modus-wc-tree-menu>
`,T=`
<tree-menu-shadow-host></tree-menu-shadow-host>
<script>
  const host = document.querySelector('tree-menu-shadow-host');
  host.props = {
    orientation: 'vertical',
    'selection-mode': 'single',
    size: 'md',
  };
<\/script>
`,k={title:"Components/Tree Menu",component:"modus-wc-tree-menu",args:{orientation:"vertical","selection-mode":"single",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},decorators:[x],parameters:{actions:{handles:["menuFocusout","menuSelectionChange","itemSelect"]}}},n={parameters:{docs:{source:{code:D}}},render:e=>a`
<modus-wc-tree-menu
  aria-label="Tree menu"
  ?bordered=${e.bordered}
  custom-class=${t(e["custom-class"])}
  orientation=${t(e.orientation)}
  selection-mode=${t(e["selection-mode"])}
  size=${t(e.size)}
>
  <modus-wc-tree-item
    label="Extra Small"
    value="xs"
    size="xs"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Small"
    value="1"
    size="sm"
  ></modus-wc-tree-item>
  <modus-wc-tree-item label="Medium" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Large"
    value="3"
    size="lg"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Extra Large"
    value="xl"
    size="xl"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Bordered"
    value="4"
    bordered="true"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="With Sub-label"
    value="5"
    sub-label="Sub-label"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Selected"
    value="6"
    selected="true"
  ></modus-wc-tree-item>
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
  <modus-wc-tree-item
    label="Disabled"
    value="9"
    disabled="true"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
    `},i={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:y}}},render:e=>{let m;const o=r=>{if(!m)return;const{selectedItems:s}=r.detail;m.textContent=s.length>0?`Selected: ${s.map(M=>M.getAttribute("value")).join(", ")}`:"Selected: none"};return a`
<modus-wc-tree-menu
  aria-label="Tree menu"
  ?bordered=${e.bordered}
  custom-class=${t(e["custom-class"])}
  orientation=${t(e.orientation)}
  selection-mode=${t(e["selection-mode"])}
  size=${t(e.size)}
  @menuSelectionChange=${o}
>
  <modus-wc-tree-item
    label="Item 1"
    size=${t(e.size)}
    value="1"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Item 2"
    size=${t(e.size)}
    value="2"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Item 3"
    size=${t(e.size)}
    value="3"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
<p ${E(r=>m=r??void 0)}>Selected: none</p>
    `}},l={parameters:{docs:{source:{code:I}}},render:e=>a`
      <style>
        .tree-menu-width {
          width: 400px;
        }
      </style>
      <modus-wc-tree-menu
        aria-label="Tree menu"
        ?bordered=${e.bordered}
        custom-class=${e["custom-class"]||"tree-menu-width"}
        orientation=${t(e.orientation)}
        selection-mode=${t(e["selection-mode"])}
        size=${t(e.size)}
      >
        <modus-wc-tree-item
          label="Parent Item"
          .hasSubmenu=${!0}
          size=${t(e.size)}
          value="parent"
        >
          <modus-wc-tree-menu .isSubMenu=${!0}>
            <modus-wc-tree-item
              label="Child 1"
              size=${t(e.size)}
              value="child-1"
            ></modus-wc-tree-item>
            <modus-wc-tree-item
              label="Child 2"
              size=${t(e.size)}
              value="child-2"
            ></modus-wc-tree-item>
          </modus-wc-tree-menu>
        </modus-wc-tree-item>
        <modus-wc-tree-item
          label="Sibling Item"
          size=${t(e.size)}
          value="sibling"
        ></modus-wc-tree-item>
      </modus-wc-tree-menu>
    `},u={parameters:{docs:{source:{code:T}}},render:e=>{if(!customElements.get("tree-menu-shadow-host")){const m=C({componentTag:"modus-wc-tree-menu",propsMapper:(o,r)=>{const s=r;s.ariaLabel="Tree menu",s.bordered=!!o.bordered,s.customClass=o["custom-class"]||"",s.orientation=o.orientation||"vertical",s.selectionMode=o["selection-mode"]||"single",s.size=o.size||"md",r.querySelector("modus-wc-tree-item")||(r.innerHTML=`
              <modus-wc-tree-item label="Extra Small" value="xs" size="xs"></modus-wc-tree-item>
              <modus-wc-tree-item label="Small" value="1" size="sm"></modus-wc-tree-item>
              <modus-wc-tree-item label="Medium" value="2"></modus-wc-tree-item>
              <modus-wc-tree-item label="Large" value="3" size="lg"></modus-wc-tree-item>
              <modus-wc-tree-item label="Extra Large" value="xl" size="xl"></modus-wc-tree-item>
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
            `)}});customElements.define("tree-menu-shadow-host",m)}return a`<tree-menu-shadow-host
      .props=${{...e}}
    ></tree-menu-shadow-host>`}};var d,c,w;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeMenuDefaultSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-menu
  aria-label="Tree menu"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  orientation=\${ifDefined(args.orientation)}
  selection-mode=\${ifDefined(args['selection-mode'])}
  size=\${ifDefined(args.size)}
>
  <modus-wc-tree-item
    label="Extra Small"
    value="xs"
    size="xs"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Small"
    value="1"
    size="sm"
  ></modus-wc-tree-item>
  <modus-wc-tree-item label="Medium" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Large"
    value="3"
    size="lg"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Extra Large"
    value="xl"
    size="xl"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Bordered"
    value="4"
    bordered="true"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="With Sub-label"
    value="5"
    sub-label="Sub-label"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Selected"
    value="6"
    selected="true"
  ></modus-wc-tree-item>
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
  <modus-wc-tree-item
    label="Disabled"
    value="9"
    disabled="true"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
    \`;
  }
}`,...(w=(c=n.parameters)==null?void 0:c.docs)==null?void 0:w.source}}};var b,p,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    'selection-mode': 'multiple'
  },
  parameters: {
    docs: {
      source: {
        code: treeMenuMultiSelectSourceCode
      }
    }
  },
  render: args => {
    let outputEl: Element | undefined;
    const handleSelectionChange = (e: CustomEvent<{
      selectedItems: HTMLElement[];
    }>) => {
      if (!outputEl) return;
      const {
        selectedItems
      } = e.detail;
      outputEl.textContent = selectedItems.length > 0 ? \`Selected: \${selectedItems.map(i => i.getAttribute('value')).join(', ')}\` : 'Selected: none';
    };

    // prettier-ignore
    return html\`
<modus-wc-tree-menu
  aria-label="Tree menu"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  orientation=\${ifDefined(args.orientation)}
  selection-mode=\${ifDefined(args['selection-mode'])}
  size=\${ifDefined(args.size)}
  @menuSelectionChange=\${handleSelectionChange}
>
  <modus-wc-tree-item
    label="Item 1"
    size=\${ifDefined(args.size)}
    value="1"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Item 2"
    size=\${ifDefined(args.size)}
    value="2"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Item 3"
    size=\${ifDefined(args.size)}
    value="3"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
<p \${ref(el => outputEl = el ?? undefined)}>Selected: none</p>
    \`;
  }
}`,...(v=(p=i.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var h,z,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeMenuCollapsibleMenuSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
      <style>
        .tree-menu-width {
          width: 400px;
        }
      </style>
      <modus-wc-tree-menu
        aria-label="Tree menu"
        ?bordered=\${args.bordered}
        custom-class=\${args['custom-class'] || 'tree-menu-width'}
        orientation=\${ifDefined(args.orientation)}
        selection-mode=\${ifDefined(args['selection-mode'])}
        size=\${ifDefined(args.size)}
      >
        <modus-wc-tree-item
          label="Parent Item"
          .hasSubmenu=\${true}
          size=\${ifDefined(args.size)}
          value="parent"
        >
          <modus-wc-tree-menu .isSubMenu=\${true}>
            <modus-wc-tree-item
              label="Child 1"
              size=\${ifDefined(args.size)}
              value="child-1"
            ></modus-wc-tree-item>
            <modus-wc-tree-item
              label="Child 2"
              size=\${ifDefined(args.size)}
              value="child-2"
            ></modus-wc-tree-item>
          </modus-wc-tree-menu>
        </modus-wc-tree-item>
        <modus-wc-tree-item
          label="Sibling Item"
          size=\${ifDefined(args.size)}
          value="sibling"
        ></modus-wc-tree-item>
      </modus-wc-tree-menu>
    \`;
  }
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var g,f,$;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeMenuShadowDomParentSourceCode
      }
    }
  },
  render: args => {
    if (!customElements.get('tree-menu-shadow-host')) {
      const TreeMenuShadowHost = createShadowHostClass<TreeMenuArgs>({
        componentTag: 'modus-wc-tree-menu',
        propsMapper: (v: TreeMenuArgs, el: HTMLElement) => {
          const treeMenuEl = el as unknown as {
            ariaLabel: string;
            bordered: boolean;
            customClass: string;
            orientation: string;
            selectionMode: string;
            size: string;
          };
          treeMenuEl.ariaLabel = 'Tree menu';
          treeMenuEl.bordered = Boolean(v.bordered);
          treeMenuEl.customClass = v['custom-class'] || '';
          treeMenuEl.orientation = v.orientation || 'vertical';
          treeMenuEl.selectionMode = v['selection-mode'] || 'single';
          treeMenuEl.size = v.size || 'md';
          if (!el.querySelector('modus-wc-tree-item')) {
            el.innerHTML = \`
              <modus-wc-tree-item label="Extra Small" value="xs" size="xs"></modus-wc-tree-item>
              <modus-wc-tree-item label="Small" value="1" size="sm"></modus-wc-tree-item>
              <modus-wc-tree-item label="Medium" value="2"></modus-wc-tree-item>
              <modus-wc-tree-item label="Large" value="3" size="lg"></modus-wc-tree-item>
              <modus-wc-tree-item label="Extra Large" value="xl" size="xl"></modus-wc-tree-item>
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
            \`;
          }
        }
      });
      customElements.define('tree-menu-shadow-host', TreeMenuShadowHost);
    }
    return html\`<tree-menu-shadow-host
      .props=\${{
      ...args
    }}
    ></tree-menu-shadow-host>\`;
  }
}`,...($=(f=u.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};const F=["Default","MultiSelect","CollapsibleMenu","ShadowDomParent"];export{l as CollapsibleMenu,n as Default,i as MultiSelect,u as ShadowDomParent,F as __namedExportsOrder,k as default};
