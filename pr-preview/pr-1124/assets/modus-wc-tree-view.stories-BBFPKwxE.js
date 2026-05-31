import{w as D}from"./decorator-D4YmxizW.js";import{b as d}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";import{n as p}from"./ref-DbcCaYnB.js";import{c as I}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const _={title:"Components/Tree View",component:"modus-wc-tree-view",args:{orientation:"vertical","selection-mode":"single",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[D],parameters:{actions:{handles:["menuFocusout","menuSelectionChange","itemSelect"]}}},m={render:l=>{let t=null,e=null;const o=(i,b)=>{i.addEventListener("buttonClick",r=>{if(r.stopPropagation(),e.style.display==="block")e.style.display="none";else{const v=i.getBoundingClientRect();e.style.top=`${v.bottom+window.scrollY}px`,e.style.left=`${v.left+window.scrollX}px`,e.style.display="block"}}),b.addEventListener("itemSelect",r=>{console.log("Action:",r.detail.value),e.style.display="none"}),document.addEventListener("click",r=>{e.style.display==="block"&&!i.contains(r.target)&&!b.contains(r.target)&&(e.style.display="none")})},s=i=>{i&&(t=i,t&&e&&o(t,e))},w=i=>{i&&(e=i,t&&e&&o(t,e))};return d`
<modus-wc-tree-view
  aria-label="Tree view"
  ?bordered=${l.bordered}
  custom-class=${n(l["custom-class"])}
  orientation=${n(l.orientation)}
  selection-mode=${n(l["selection-mode"])}
  size=${n(l.size)}
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
        ${p(s)}
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

<div
  ${p(w)}
  style="display: none; position: fixed; z-index: 1000;"
>
  <modus-wc-menu size="sm" bordered="true">
    <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
    <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
    <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
  </modus-wc-menu>
</div>
    `}},a={args:{"selection-mode":"multiple"},render:l=>{let t;const e=o=>{if(!t)return;const{selectedItems:s}=o.detail;t.textContent=s.length>0?`Selected: ${s.map(w=>w.getAttribute("value")).join(", ")}`:"Selected: none"};return d`
<modus-wc-tree-view
  aria-label="Tree view"
  selection-mode=${n(l["selection-mode"])}
  @menuSelectionChange=${e}
>
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-view>
<p ${p(o=>t=o??void 0)}>Selected: none</p>
    `}},c={render:()=>d`
<modus-wc-tree-view aria-label="Tree view">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-view is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-view>
    `},u={render:l=>{if(!customElements.get("tree-view-shadow-host")){const t=I({componentTag:"modus-wc-tree-view",propsMapper:(e,o)=>{const s=o;s.ariaLabel="Shadow DOM Tree View",s.bordered=!!e.bordered,s.customClass=e["custom-class"]||"",s.orientation=e.orientation||"vertical",s.size=e.size||"md",o.querySelector("modus-wc-tree-item")||(o.innerHTML=`
              <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
              <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
            `)}});customElements.define("tree-view-shadow-host",t)}return d`<tree-view-shadow-host
      .props=${{...l}}
    ></tree-view-shadow-host>`}};var g,f,h;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    let ctxBtn: HTMLElement | null = null;
    let ctxMenu: HTMLElement | null = null;
    const setupDropdown = (btn: HTMLElement, menu: HTMLElement) => {
      btn.addEventListener('buttonClick', e => {
        e.stopPropagation();
        const isOpen = ctxMenu!.style.display === 'block';
        if (!isOpen) {
          const rect = btn.getBoundingClientRect();
          ctxMenu!.style.top = \`\${rect.bottom + window.scrollY}px\`;
          ctxMenu!.style.left = \`\${rect.left + window.scrollX}px\`;
          ctxMenu!.style.display = 'block';
        } else {
          ctxMenu!.style.display = 'none';
        }
      });
      menu.addEventListener('itemSelect', e => {
        console.log('Action:', (e as CustomEvent<{
          value: string;
        }>).detail.value);
        ctxMenu!.style.display = 'none';
      });
      document.addEventListener('click', e => {
        if (ctxMenu!.style.display === 'block' && !btn.contains(e.target as Node) && !menu.contains(e.target as Node)) {
          ctxMenu!.style.display = 'none';
        }
      });
    };
    const onBtnRef = (el: Element | undefined) => {
      if (!el) return;
      ctxBtn = el as HTMLElement;
      if (ctxBtn && ctxMenu) setupDropdown(ctxBtn, ctxMenu);
    };
    const onMenuRef = (el: Element | undefined) => {
      if (!el) return;
      ctxMenu = el as HTMLElement;
      if (ctxBtn && ctxMenu) setupDropdown(ctxBtn, ctxMenu);
    };

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
        \${ref(onBtnRef)}
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

<div
  \${ref(onMenuRef)}
  style="display: none; position: fixed; z-index: 1000;"
>
  <modus-wc-menu size="sm" bordered="true">
    <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
    <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
    <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
  </modus-wc-menu>
</div>
    \`;
  }
}`,...(h=(f=m.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,S,M;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'selection-mode': 'multiple'
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
}`,...(M=(S=a.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var E,x,$;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(x=c.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var T,C,z;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            size: string;
          };
          treeViewEl.ariaLabel = 'Shadow DOM Tree View';
          treeViewEl.bordered = Boolean(v.bordered);
          treeViewEl.customClass = v['custom-class'] || '';
          treeViewEl.orientation = v.orientation || 'vertical';
          treeViewEl.size = v.size || 'md';
          if (!el.querySelector('modus-wc-tree-item')) {
            el.innerHTML = \`
              <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
              <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
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
}`,...(z=(C=u.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const j=["Default","MultiSelect","CollapsibleMenu","ShadowDomParent"];export{c as CollapsibleMenu,m as Default,a as MultiSelect,u as ShadowDomParent,j as __namedExportsOrder,_ as default};
