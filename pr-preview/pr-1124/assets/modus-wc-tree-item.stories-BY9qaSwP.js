import{w as N}from"./decorator-D4YmxizW.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o as m}from"./if-defined-BnVFTJ4o.js";import{n as g}from"./ref-Bw8asrgi.js";import{c as j}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const te={title:"Components/Tree Item",component:"modus-wc-tree-item",args:{label:"Tree Item",size:"md",value:"treeItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[N],parameters:{actions:{handles:["itemSelect"]}}},F={render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=${e.bordered}
    ?block-expand=${e["block-expand"]}
    ?checkbox=${e.checkbox}
    custom-class=${m(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${m(e["sub-label"])}
    tooltip-content=${m(e["tooltip-content"])}
    tooltip-position=${m(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},u={...F},p={render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=${e.bordered}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `},w={render:e=>{const c={el:null},t={el:null};let s=!1;const d=()=>{s||!c.el||!t.el||(s=!0,document.addEventListener("click",n=>{const i=c.el,a=t.el;!i||!a||a.style.display!=="block"||i.contains(n.target)||a.contains(n.target)||(a.style.display="none")}))},l=n=>{n.stopPropagation();const i=t.el;if(!i)return;const a=i.style.display==="block";i.style.display=a?"none":"block"},o=()=>{t.el&&(t.el.style.display="none")},V=n=>{n&&(c.el=n,d())},q=n=>{n&&(t.el=n,d())};return r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        ${g(V)}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
        @buttonClick=${l}
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        ${g(q)}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true" @itemSelect=${o}>
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `}},b={render:e=>r`
<modus-wc-tree-view size="sm">
  <modus-wc-tree-item
    label=${e.label}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="search"></modus-wc-icon>
    <div slot="end" style="display: flex; align-items: center;">
      <div
        style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px; align-self: stretch;"
      ></div>
      <modus-wc-button
        variant="borderless"
        size="sm"
        aria-label="Open folder"
      >
        <modus-wc-icon name="folder_closed" size="sm"></modus-wc-icon>
        <modus-wc-icon name="chevron_right" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `},v={args:{checkbox:!0},render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?checkbox=${e.checkbox}
    label=${e.label}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},h={args:{"tooltip-content":"Tooltip content"},render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    tooltip-content=${m(e["tooltip-content"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},f={render:e=>{if(!customElements.get("tree-item-shadow-host")){const c=j({componentTag:"modus-wc-tree-view",propsMapper:(t,s)=>{const d=s;d.ariaLabel="Shadow DOM Tree View";let l=s.querySelector("modus-wc-tree-item");l||(l=document.createElement("modus-wc-tree-item"),s.innerHTML="",s.appendChild(l));const o=l;o.bordered=!!t.bordered,o.blockExpand=!!t["block-expand"],o.checkbox=!!t.checkbox,o.customClass=t["custom-class"]||"",o.disabled=!!t.disabled,o.focused=!!t.focused,o.hasSubmenu=!!t["has-submenu"],o.label=t.label,o.selected=!!t.selected,o.size=t.size||"md",o.subLabel=t["sub-label"]||"",o.tooltipContent=t["tooltip-content"]||"",o.tooltipPosition=t["tooltip-position"]||"auto",o.value=t.value}});customElements.define("tree-item-shadow-host",c)}return r`<tree-item-shadow-host
      .props=${{...e}}
    ></tree-item-shadow-host>`}};var $,k,y;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template
}`,...(y=(k=u.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var E,x,z;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=\${args.bordered}
    ?disabled=\${args.disabled}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    value=\${args.value}
  >
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(z=(x=p.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var I,S,C;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const btnRef = {
      el: null as HTMLElement | null
    };
    const menuRef = {
      el: null as HTMLElement | null
    };
    let outsideClickAttached = false;
    const attachOutsideClick = () => {
      if (outsideClickAttached || !btnRef.el || !menuRef.el) return;
      outsideClickAttached = true;
      document.addEventListener('click', e => {
        const btn = btnRef.el;
        const menu = menuRef.el;
        if (!btn || !menu || menu.style.display !== 'block') return;
        if (btn.contains(e.target as Node) || menu.contains(e.target as Node)) {
          return;
        }
        menu.style.display = 'none';
      });
    };
    const toggleMenu = (e: Event) => {
      e.stopPropagation();
      const menu = menuRef.el;
      if (!menu) return;
      const isOpen = menu.style.display === 'block';
      menu.style.display = isOpen ? 'none' : 'block';
    };
    const closeMenu = () => {
      if (menuRef.el) menuRef.el.style.display = 'none';
    };
    const onBtnRef = (el: Element | undefined) => {
      if (!el) return;
      btnRef.el = el as HTMLElement;
      attachOutsideClick();
    };
    const onMenuRef = (el: Element | undefined) => {
      if (!el) return;
      menuRef.el = el as HTMLElement;
      attachOutsideClick();
    };

    // prettier-ignore
    return html\`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=\${args.label}
    value=\${args.value}
  >
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        \${ref(onBtnRef)}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
        @buttonClick=\${toggleMenu}
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        \${ref(onMenuRef)}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true" @itemSelect=\${closeMenu}>
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(C=(S=w.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var T,M,R;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view size="sm">
  <modus-wc-tree-item
    label=\${args.label}
    value=\${args.value}
  >
    <modus-wc-icon slot="start" name="search"></modus-wc-icon>
    <div slot="end" style="display: flex; align-items: center;">
      <div
        style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px; align-self: stretch;"
      ></div>
      <modus-wc-button
        variant="borderless"
        size="sm"
        aria-label="Open folder"
      >
        <modus-wc-icon name="folder_closed" size="sm"></modus-wc-icon>
        <modus-wc-icon name="chevron_right" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(R=(M=b.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var B,L,H;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    checkbox: true
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?checkbox=\${args.checkbox}
    label=\${args.label}
    value=\${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(H=(L=v.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var O,D,W;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'tooltip-content': 'Tooltip content'
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=\${args.label}
    tooltip-content=\${ifDefined(args['tooltip-content'])}
    value=\${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(W=(D=h.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var _,A,P;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('tree-item-shadow-host')) {
      const TreeItemShadowHost = createShadowHostClass<TreeItemArgs>({
        componentTag: 'modus-wc-tree-view',
        propsMapper: (v: TreeItemArgs, el: HTMLElement) => {
          const treeViewEl = el as unknown as {
            ariaLabel: string;
          };
          treeViewEl.ariaLabel = 'Shadow DOM Tree View';
          let treeItem = el.querySelector('modus-wc-tree-item');
          if (!treeItem) {
            treeItem = document.createElement('modus-wc-tree-item');
            el.innerHTML = '';
            el.appendChild(treeItem);
          }
          const treeItemEl = treeItem as unknown as {
            bordered: boolean;
            blockExpand: boolean;
            checkbox: boolean;
            customClass: string;
            disabled: boolean;
            focused: boolean;
            hasSubmenu: boolean;
            label: string;
            selected: boolean;
            size: string;
            subLabel: string;
            tooltipContent: string;
            tooltipPosition: string;
            value: string;
          };
          treeItemEl.bordered = Boolean(v.bordered);
          treeItemEl.blockExpand = Boolean(v['block-expand']);
          treeItemEl.checkbox = Boolean(v.checkbox);
          treeItemEl.customClass = v['custom-class'] || '';
          treeItemEl.disabled = Boolean(v.disabled);
          treeItemEl.focused = Boolean(v.focused);
          treeItemEl.hasSubmenu = Boolean(v['has-submenu']);
          treeItemEl.label = v.label;
          treeItemEl.selected = Boolean(v.selected);
          treeItemEl.size = v.size || 'md';
          treeItemEl.subLabel = v['sub-label'] || '';
          treeItemEl.tooltipContent = v['tooltip-content'] || '';
          treeItemEl.tooltipPosition = v['tooltip-position'] || 'auto';
          treeItemEl.value = v.value;
        }
      });
      customElements.define('tree-item-shadow-host', TreeItemShadowHost);
    }
    return html\`<tree-item-shadow-host
      .props=\${{
      ...args
    }}
    ></tree-item-shadow-host>\`;
  }
}`,...(P=(A=f.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const oe=["Default","WithStartSlot","WithEndSlot","CustomTreeItem","WithCheckbox","WithTooltip","ShadowDomParent"];export{b as CustomTreeItem,u as Default,f as ShadowDomParent,v as WithCheckbox,w as WithEndSlot,p as WithStartSlot,h as WithTooltip,oe as __namedExportsOrder,te as default};
