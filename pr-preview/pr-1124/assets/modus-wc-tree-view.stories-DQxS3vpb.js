import{w as D}from"./decorator-D4YmxizW.js";import{b as c}from"./lit-element-DgBvYnzn.js";import{o as r}from"./if-defined-BnVFTJ4o.js";import{n as p}from"./ref-Bw8asrgi.js";import{c as L}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const j={title:"Components/Tree View",component:"modus-wc-tree-view",args:{orientation:"vertical","selection-mode":"single",size:"md"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[D],parameters:{actions:{handles:["menuFocusout","menuSelectionChange","itemSelect"]}}},m={render:i=>{let s=null,e=null,o=!1;const t=(l,b)=>{o||(o=!0,l.addEventListener("buttonClick",n=>{if(n.stopPropagation(),e.style.display==="block")e.style.display="none";else{const v=l.getBoundingClientRect();e.style.top=`${v.bottom+window.scrollY}px`,e.style.left=`${v.left+window.scrollX}px`,e.style.display="block"}}),b.addEventListener("itemSelect",()=>{e.style.display="none"}),document.addEventListener("click",n=>{e.style.display==="block"&&!l.contains(n.target)&&!b.contains(n.target)&&(e.style.display="none")}))},w=l=>{l&&(s=l,e&&t(s,e))},C=l=>{l&&(e=l,s&&t(s,e))};return c`
<modus-wc-tree-view
  aria-label="Tree view"
  ?bordered=${i.bordered}
  custom-class=${r(i["custom-class"])}
  orientation=${r(i.orientation)}
  selection-mode=${r(i["selection-mode"])}
  size=${r(i.size)}
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
        ${p(w)}
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
  ${p(C)}
  style="display: none; position: fixed; z-index: 1000;"
>
  <modus-wc-menu size="sm" bordered="true">
    <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
    <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
    <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
  </modus-wc-menu>
</div>
    `}},a={args:{"selection-mode":"multiple"},render:i=>{let s;const e=o=>{if(!s)return;const{selectedItems:t}=o.detail;s.textContent=t.length>0?`Selected: ${t.map(w=>w.getAttribute("value")).join(", ")}`:"Selected: none"};return c`
<modus-wc-tree-view
  aria-label="Tree view"
  selection-mode=${r(i["selection-mode"])}
  @menuSelectionChange=${e}
>
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-view>
<p ${p(o=>s=o??void 0)}>Selected: none</p>
    `}},d={render:()=>c`
<modus-wc-tree-view aria-label="Tree view">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-view is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-view>
    `},u={render:i=>{if(!customElements.get("tree-view-shadow-host")){const s=L({componentTag:"modus-wc-tree-view",propsMapper:(e,o)=>{const t=o;t.ariaLabel="Shadow DOM Tree View",t.bordered=!!e.bordered,t.customClass=e["custom-class"]||"",t.orientation=e.orientation||"vertical",t.selectionMode=e["selection-mode"]||"single",t.size=e.size||"md",o.hasAttribute("data-items-built")||(o.setAttribute("data-items-built",""),o.innerHTML=`
              <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
              <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
              <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
            `)}});customElements.define("tree-view-shadow-host",s)}return c`<tree-view-shadow-host
      .props=${{...i}}
    ></tree-view-shadow-host>`}};var f,g,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    let ctxBtn: HTMLElement | null = null;
    let ctxMenu: HTMLElement | null = null;
    let dropdownInitialized = false;
    const setupDropdown = (btn: HTMLElement, menu: HTMLElement) => {
      if (dropdownInitialized) return;
      dropdownInitialized = true;
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
      menu.addEventListener('itemSelect', () => {
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
      if (ctxMenu) setupDropdown(ctxBtn, ctxMenu);
    };
    const onMenuRef = (el: Element | undefined) => {
      if (!el) return;
      ctxMenu = el as HTMLElement;
      if (ctxBtn) setupDropdown(ctxBtn, ctxMenu);
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
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,M,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,x,z;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(x=d.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var $,I,T;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
          treeViewEl.ariaLabel = 'Shadow DOM Tree View';
          treeViewEl.bordered = Boolean(v.bordered);
          treeViewEl.customClass = v['custom-class'] || '';
          treeViewEl.orientation = v.orientation || 'vertical';
          treeViewEl.selectionMode = v['selection-mode'] || 'single';
          treeViewEl.size = v.size || 'md';
          if (!el.hasAttribute('data-items-built')) {
            el.setAttribute('data-items-built', '');
            el.innerHTML = \`
              <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
              <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
              <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
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
}`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const N=["Default","MultiSelect","CollapsibleMenu","ShadowDomParent"];export{d as CollapsibleMenu,m as Default,a as MultiSelect,u as ShadowDomParent,N as __namedExportsOrder,j as default};
