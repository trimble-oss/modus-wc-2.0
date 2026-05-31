import{w as N}from"./decorator-D4YmxizW.js";import{b as n}from"./lit-element-DgBvYnzn.js";import{o as c}from"./if-defined-BnVFTJ4o.js";import{n as h}from"./ref-Bw8asrgi.js";import{c as j}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const te={title:"Components/Tree Item",component:"modus-wc-tree-item",args:{label:"Tree Item",size:"md",value:"treeItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[N],parameters:{actions:{handles:["itemSelect"]}}},F={render:e=>n`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=${e.bordered}
    ?block-expand=${e["block-expand"]}
    ?checkbox=${e.checkbox}
    custom-class=${c(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${c(e["sub-label"])}
    tooltip-content=${c(e["tooltip-content"])}
    tooltip-position=${c(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},a={...F},u={render:e=>n`
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
    `},d={render:e=>{const i={el:null},o={el:null};let s=!1;const m=()=>{s||!i.el||!o.el||(s=!0,document.addEventListener("click",t=>{const r=i.el,l=o.el;!r||!l||l.style.display!=="block"||r.contains(t.target)||l.contains(t.target)||(l.style.display="none")}))},V=t=>{t.stopPropagation();const r=o.el;if(!r)return;const l=r.style.display==="block";r.style.display=l?"none":"block"},P=()=>{o.el&&(o.el.style.display="none")},B=t=>{t&&(i.el=t,m())},q=t=>{t&&(o.el=t,m())};return n`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        ${h(B)}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
        @buttonClick=${V}
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        ${h(q)}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true" @itemSelect=${P}>
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `}},w={render:e=>n`
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
    `},p={args:{checkbox:!0},render:e=>n`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?checkbox=${e.checkbox}
    label=${e.label}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},b={args:{"tooltip-content":"Tooltip content"},render:e=>n`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    tooltip-content=${c(e["tooltip-content"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},v={render:e=>{if(!customElements.get("tree-item-shadow-host")){const i=j({componentTag:"modus-wc-tree-view",propsMapper:(o,s)=>{const m=s;m.ariaLabel="Shadow DOM Tree View",s.querySelector("modus-wc-tree-item")||(s.innerHTML=`<modus-wc-tree-item label="${e.label}" value="${e.value}"></modus-wc-tree-item>`)}});customElements.define("tree-item-shadow-host",i)}return n`<tree-item-shadow-host
      .props=${{...e}}
    ></tree-item-shadow-host>`}};var f,$,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template
}`,...(g=($=a.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var y,k,z;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,T,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var M,R,E;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(E=(R=w.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var C,H,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var O,D,I;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(D=b.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var _,W,A;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('tree-item-shadow-host')) {
      const TreeItemShadowHost = createShadowHostClass<TreeItemArgs>({
        componentTag: 'modus-wc-tree-view',
        propsMapper: (_v: TreeItemArgs, el: HTMLElement) => {
          const treeViewEl = el as unknown as {
            ariaLabel: string;
          };
          treeViewEl.ariaLabel = 'Shadow DOM Tree View';
          if (!el.querySelector('modus-wc-tree-item')) {
            el.innerHTML = \`<modus-wc-tree-item label="\${args.label}" value="\${args.value}"></modus-wc-tree-item>\`;
          }
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
}`,...(A=(W=v.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const oe=["Default","WithStartSlot","WithEndSlot","CustomTreeItem","WithCheckbox","WithTooltip","ShadowDomParent"];export{w as CustomTreeItem,a as Default,v as ShadowDomParent,p as WithCheckbox,d as WithEndSlot,u as WithStartSlot,b as WithTooltip,oe as __namedExportsOrder,te as default};
