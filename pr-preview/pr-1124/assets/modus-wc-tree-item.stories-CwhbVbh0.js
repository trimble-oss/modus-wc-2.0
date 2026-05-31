import{w as j}from"./decorator-D4YmxizW.js";import{b as n}from"./lit-element-DgBvYnzn.js";import{o as i}from"./if-defined-BnVFTJ4o.js";import{n as $,e as g}from"./ref-DbcCaYnB.js";import{c as F}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const s="modus-wc-tree-item-end-action",V="modus-wc-tree-item-end-action-btn",f="modus-wc-tree-item-end-action-icon",G=`
  .${s} .modus-wc-menu-item-interactive {
    align-items: stretch;
    height: 52px;
    padding-block: 0;
    padding-inline-end: 0;
  }

  .${s} .modus-wc-menu-item-content {
    align-self: stretch;
  }

  .${s} [slot='end'] {
    align-self: stretch;
    display: flex;
    padding-inline-start: 0;
  }

  .${s} [slot='end'] modus-wc-button {
    align-self: stretch;
    height: 100%;
  }

  .${s}
    [slot='end']
    modus-wc-button
    .modus-wc-btn:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
    height: 100%;
  }

  .${s} .${V} {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 100%;
    min-height: 100%;
    border-radius: 0;
    background-color: transparent;
  }
`,ne={title:"Components/Tree Item",component:"modus-wc-tree-item",args:{label:"Tree Item",size:"md",value:"treeItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[j],parameters:{actions:{handles:["itemSelect"]}}},J={render:e=>n`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=${e.bordered}
    ?block-expand=${e["block-expand"]}
    ?checkbox=${e.checkbox}
    custom-class=${i(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${i(e["sub-label"])}
    tooltip-content=${i(e["tooltip-content"])}
    tooltip-position=${i(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},m={...J},d={render:e=>n`
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
    `},u={render:e=>{const a=g(),h=g();let r=!1;const c=()=>{const t=a.value,o=h.value;!t||!o||r||(r=!0,t.addEventListener("click",l=>{l.stopPropagation();const U=o.style.display!=="block";o.style.display=U?"block":"none"}),o.addEventListener("itemSelect",()=>{o.style.display="none"}),document.addEventListener("click",l=>{!t.contains(l.target)&&!o.contains(l.target)&&(o.style.display="none")}))},q=t=>{t.stopPropagation()};return n`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        ${$(t=>{t&&(a.value=t,c())})}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        @buttonClick=${q}
        aria-label="More options"
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        ${$(t=>{t&&(h.value=t,c())})}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true">
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `}},w={render:e=>n`
      <style>${G}</style>
      <modus-wc-tree-view size="lg">
        <modus-wc-tree-item
          label=${e.label}
          value=${e.value}
          custom-class=${s}
        >
          <modus-wc-icon slot="start" name="search"></modus-wc-icon>
          <div slot="end" style="display: flex; align-items: stretch;">
            <div
              style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px;"
            ></div>
            <modus-wc-button
              variant="borderless"
              size="sm"
              custom-class=${V}
              aria-label="Open folder"
            >
              <modus-wc-icon
                name="folder_closed"
                size="sm"
                custom-class=${f}
              ></modus-wc-icon>
              <modus-wc-icon
                name="chevron_right"
                size="sm"
                custom-class=${f}
              ></modus-wc-icon>
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
    tooltip-content=${i(e["tooltip-content"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},v={render:e=>{if(!customElements.get("tree-item-shadow-host")){const a=F({componentTag:"modus-wc-tree-view",propsMapper:(h,r)=>{const c=r;c.ariaLabel="Shadow DOM Tree View",r.querySelector("modus-wc-tree-item")||(r.innerHTML=`<modus-wc-tree-item label="${e.label}" value="${e.value}"></modus-wc-tree-item>`)}});customElements.define("tree-item-shadow-host",a)}return n`<tree-item-shadow-host
      .props=${{...e}}
    ></tree-item-shadow-host>`}};var E,T,y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template
}`,...(y=(T=m.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var S,_,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var k,x,z;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const btnRef = createRef<HTMLElement>();
    const menuRef = createRef<HTMLElement>();
    let listenersAttached = false;
    const attachListeners = () => {
      const btn = btnRef.value;
      const menu = menuRef.value;
      if (!btn || !menu) return;
      if (listenersAttached) return;
      listenersAttached = true;
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = menu.style.display !== 'block';
        menu.style.display = isOpen ? 'block' : 'none';
      });
      menu.addEventListener('itemSelect', () => {
        menu.style.display = 'none';
      });
      document.addEventListener('click', e => {
        if (!btn.contains(e.target as Node) && !menu.contains(e.target as Node)) {
          menu.style.display = 'none';
        }
      });
    };
    const handleButtonClick = (e: CustomEvent) => {
      e.stopPropagation();
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
        \${ref(el => {
      if (el) {
        (btnRef as {
          value: Element | undefined;
        }).value = el;
        attachListeners();
      }
    })}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        @buttonClick=\${handleButtonClick}
        aria-label="More options"
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        \${ref(el => {
      if (el) {
        (menuRef as {
          value: Element | undefined;
        }).value = el;
        attachListeners();
      }
    })}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true">
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
}`,...(z=(x=u.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var I,L,A;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
      <style>\${treeItemEndActionStyles}</style>
      <modus-wc-tree-view size="lg">
        <modus-wc-tree-item
          label=\${args.label}
          value=\${args.value}
          custom-class=\${TREE_ITEM_END_ACTION_CLASS}
        >
          <modus-wc-icon slot="start" name="search"></modus-wc-icon>
          <div slot="end" style="display: flex; align-items: stretch;">
            <div
              style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px;"
            ></div>
            <modus-wc-button
              variant="borderless"
              size="sm"
              custom-class=\${TREE_ITEM_END_ACTION_BUTTON_CLASS}
              aria-label="Open folder"
            >
              <modus-wc-icon
                name="folder_closed"
                size="sm"
                custom-class=\${TREE_ITEM_END_ACTION_ICON_CLASS}
              ></modus-wc-icon>
              <modus-wc-icon
                name="chevron_right"
                size="sm"
                custom-class=\${TREE_ITEM_END_ACTION_ICON_CLASS}
              ></modus-wc-icon>
            </modus-wc-button>
          </div>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    \`;
  }
}`,...(A=(L=w.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var N,O,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var D,M,H;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(M=b.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var W,P,B;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(P=v.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const re=["Default","WithStartSlot","WithEndSlot","WithCustomClass","WithCheckbox","WithTooltip","ShadowDomParent"];export{m as Default,v as ShadowDomParent,p as WithCheckbox,w as WithCustomClass,u as WithEndSlot,d as WithStartSlot,b as WithTooltip,re as __namedExportsOrder,ne as default};
