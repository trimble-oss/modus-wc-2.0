import{w as I}from"./decorator-D4YmxizW.js";import{b as d}from"./lit-element-DgBvYnzn.js";import{o as i}from"./if-defined-BnVFTJ4o.js";import{n as M}from"./ref-Bw8asrgi.js";import{c as y}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const T=`
<modus-wc-tree-view
  aria-label="Tree view"
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
</modus-wc-tree-view>
`,V=`
<modus-wc-tree-view aria-label="Tree view" selection-mode="multiple">
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-view>
<p id="tree-view-selection-output">Selected: none</p>
<script>
  const treeView = document.querySelector('modus-wc-tree-view');
  const output = document.getElementById('tree-view-selection-output');

  treeView.addEventListener('menuSelectionChange', (e) => {
    const { selectedItems } = e.detail;
    output.textContent =
      selectedItems.length > 0
        ? \`Selected: \${selectedItems.map((i) => i.getAttribute('value')).join(', ')}\`
        : 'Selected: none';
  });
<\/script>
`,$=`
<modus-wc-tree-view aria-label="Tree view">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-view is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-view>
`,D=`
<tree-view-shadow-host></tree-view-shadow-host>
<script>
  const host = document.querySelector('tree-view-shadow-host');
  host.props = {
    orientation: 'vertical',
    'selection-mode': 'single',
    size: 'md',
  };
<\/script>
`,j={title:"Components/Tree View",component:"modus-wc-tree-view",args:{orientation:"vertical","selection-mode":"single",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[I],parameters:{actions:{handles:["menuFocusout","menuSelectionChange","itemSelect"]}}},l={parameters:{docs:{source:{code:T}}},render:e=>d`
<modus-wc-tree-view
  aria-label="Tree view"
  ?bordered=${e.bordered}
  custom-class=${i(e["custom-class"])}
  orientation=${i(e.orientation)}
  selection-mode=${i(e["selection-mode"])}
  size=${i(e.size)}
>
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
</modus-wc-tree-view>
    `},m={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:V}}},render:e=>{let s;const o=r=>{if(!s)return;const{selectedItems:t}=r.detail;s.textContent=t.length>0?`Selected: ${t.map(E=>E.getAttribute("value")).join(", ")}`:"Selected: none"};return d`
<modus-wc-tree-view
  aria-label="Tree view"
  selection-mode=${i(e["selection-mode"])}
  @menuSelectionChange=${o}
>
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-view>
<p ${M(r=>s=r??void 0)}>Selected: none</p>
    `}},a={parameters:{docs:{source:{code:$}}},render:()=>d`
<modus-wc-tree-view aria-label="Tree view">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-view is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-view>
    `},c={parameters:{docs:{source:{code:D}}},render:e=>{if(!customElements.get("tree-view-shadow-host")){const s=y({componentTag:"modus-wc-tree-view",propsMapper:(o,r)=>{const t=r;t.ariaLabel="Tree view",t.bordered=!!o.bordered,t.customClass=o["custom-class"]||"",t.orientation=o.orientation||"vertical",t.selectionMode=o["selection-mode"]||"single",t.size=o.size||"md",r.querySelector("modus-wc-tree-item")||(r.innerHTML=`
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
            `)}});customElements.define("tree-view-shadow-host",s)}return d`<tree-view-shadow-host
      .props=${{...e}}
    ></tree-view-shadow-host>`}};var u,n,w;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeViewDefaultSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view
  aria-label="Tree view"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  orientation=\${ifDefined(args.orientation)}
  selection-mode=\${ifDefined(args['selection-mode'])}
  size=\${ifDefined(args.size)}
>
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
</modus-wc-tree-view>
    \`;
  }
}`,...(w=(n=l.parameters)==null?void 0:n.docs)==null?void 0:w.source}}};var b,v,p;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    'selection-mode': 'multiple'
  },
  parameters: {
    docs: {
      source: {
        code: treeViewMultiSelectSourceCode
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
<modus-wc-tree-view
  aria-label="Tree view"
  selection-mode=\${ifDefined(args['selection-mode'])}
  @menuSelectionChange=\${handleSelectionChange}
>
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-view>
<p \${ref(el => outputEl = el ?? undefined)}>Selected: none</p>
    \`;
  }
}`,...(p=(v=m.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var h,S,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeViewCollapsibleMenuSourceCode
      }
    }
  },
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view aria-label="Tree view">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-view is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var f,C,z;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeViewShadowDomParentSourceCode
      }
    }
  },
  render: args => {
    if (!customElements.get('tree-view-shadow-host')) {
      const TreeViewShadowHost = createShadowHostClass<TreeViewArgs>({
        componentTag: 'modus-wc-tree-view',
        propsMapper: (v: TreeViewArgs, el: HTMLElement) => {
          const treeViewEl = el as unknown as {
            ariaLabel: string;
            bordered: boolean;
            customClass: string;
            orientation: string;
            selectionMode: string;
            size: string;
          };
          treeViewEl.ariaLabel = 'Tree view';
          treeViewEl.bordered = Boolean(v.bordered);
          treeViewEl.customClass = v['custom-class'] || '';
          treeViewEl.orientation = v.orientation || 'vertical';
          treeViewEl.selectionMode = v['selection-mode'] || 'single';
          treeViewEl.size = v.size || 'md';
          if (!el.querySelector('modus-wc-tree-item')) {
            el.innerHTML = \`
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
            \`;
          }
        }
      });
      customElements.define('tree-view-shadow-host', TreeViewShadowHost);
    }
    return html\`<tree-view-shadow-host
      .props=\${{
      ...args
    }}
    ></tree-view-shadow-host>\`;
  }
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const k=["Default","MultiSelect","CollapsibleMenu","ShadowDomParent"];export{a as CollapsibleMenu,l as Default,m as MultiSelect,c as ShadowDomParent,k as __namedExportsOrder,j as default};
