import{w as E}from"./decorator-D4YmxizW.js";import{b as a}from"./lit-element-DgBvYnzn.js";import{o as s}from"./if-defined-BnVFTJ4o.js";import{n as I}from"./ref-Bw8asrgi.js";import{c as y}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const T=`
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
`,$=`
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
<\/script>
`,D=`
<modus-wc-tree-menu aria-label="Tree menu">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-menu is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-menu>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-menu>
`,W=`
<tree-menu-shadow-host></tree-menu-shadow-host>
<script>
  const host = document.querySelector('tree-menu-shadow-host');
  host.props = {
    orientation: 'vertical',
    'selection-mode': 'single',
    size: 'md',
  };
<\/script>
`,k={title:"Components/Tree Menu",component:"modus-wc-tree-menu",args:{orientation:"vertical","selection-mode":"single",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[E],parameters:{actions:{handles:["menuFocusout","menuSelectionChange","itemSelect"]}}},l={parameters:{docs:{source:{code:T}}},render:e=>a`
<modus-wc-tree-menu
  aria-label="Tree menu"
  ?bordered=${e.bordered}
  custom-class=${s(e["custom-class"])}
  orientation=${s(e.orientation)}
  selection-mode=${s(e["selection-mode"])}
  size=${s(e.size)}
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
</modus-wc-tree-menu>
    `},u={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:$}}},render:e=>{let m;const o=r=>{if(!m)return;const{selectedItems:t}=r.detail;m.textContent=t.length>0?`Selected: ${t.map(z=>z.getAttribute("value")).join(", ")}`:"Selected: none"};return a`
<modus-wc-tree-menu
  aria-label="Tree menu"
  selection-mode=${s(e["selection-mode"])}
  @menuSelectionChange=${o}
>
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-menu>
<p ${I(r=>m=r??void 0)}>Selected: none</p>
    `}},n={parameters:{docs:{source:{code:D}}},render:()=>a`
<modus-wc-tree-menu aria-label="Tree menu">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-menu is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-menu>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-menu>
    `},i={parameters:{docs:{source:{code:W}}},render:e=>{if(!customElements.get("tree-menu-shadow-host")){const m=y({componentTag:"modus-wc-tree-menu",propsMapper:(o,r)=>{const t=r;t.ariaLabel="Tree menu",t.bordered=!!o.bordered,t.customClass=o["custom-class"]||"",t.orientation=o.orientation||"vertical",t.selectionMode=o["selection-mode"]||"single",t.size=o.size||"md",r.querySelector("modus-wc-tree-item")||(r.innerHTML=`
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
            `)}});customElements.define("tree-menu-shadow-host",m)}return a`<tree-menu-shadow-host
      .props=${{...e}}
    ></tree-menu-shadow-host>`}};var c,d,w;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
</modus-wc-tree-menu>
    \`;
  }
}`,...(w=(d=l.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};var b,p,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  selection-mode=\${ifDefined(args['selection-mode'])}
  @menuSelectionChange=\${handleSelectionChange}
>
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-menu>
<p \${ref(el => outputEl = el ?? undefined)}>Selected: none</p>
    \`;
  }
}`,...(v=(p=u.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var h,S,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeMenuCollapsibleMenuSourceCode
      }
    }
  },
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-tree-menu aria-label="Tree menu">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-menu is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-menu>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-menu>
    \`;
  }
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var M,f,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
      customElements.define('tree-menu-shadow-host', TreeMenuShadowHost);
    }
    return html\`<tree-menu-shadow-host
      .props=\${{
      ...args
    }}
    ></tree-menu-shadow-host>\`;
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const F=["Default","MultiSelect","CollapsibleMenu","ShadowDomParent"];export{n as CollapsibleMenu,l as Default,u as MultiSelect,i as ShadowDomParent,F as __namedExportsOrder,k as default};
