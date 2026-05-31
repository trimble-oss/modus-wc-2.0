import{w as U}from"./decorator-D4YmxizW.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o as c}from"./if-defined-BnVFTJ4o.js";import{n as g,e as $}from"./ref-DbcCaYnB.js";import{c as j}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const n="modus-wc-tree-item-end-action",V="modus-wc-tree-item-end-action-btn",f="modus-wc-tree-item-end-action-icon",F=`
  .${n} .modus-wc-menu-item-interactive {
    align-items: stretch;
    height: 52px;
    padding-block: 0;
    padding-inline-end: 0;
  }

  .${n} .modus-wc-menu-item-content {
    align-self: stretch;
  }

  .${n} [slot='end'] {
    align-self: stretch;
    display: flex;
    padding-inline-start: 0;
  }

  .${n} [slot='end'] modus-wc-button {
    align-self: stretch;
    height: 100%;
  }

  .${n}
    [slot='end']
    modus-wc-button
    .modus-wc-btn:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
    height: 100%;
  }

  .${n} .${V} {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 100%;
    min-height: 100%;
    border-radius: 0;
    background-color: transparent;
  }
`,se={title:"Components/Tree Item",component:"modus-wc-tree-item",args:{label:"Tree Item",size:"md",value:"treeItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[U],parameters:{actions:{handles:["itemSelect"]}}},G={render:e=>r`
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
    `},l={...G},m={render:e=>r`
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
    `},d={render:e=>{const a=$(),v=$(),i=()=>{const t=a.value,o=v.value;!t||!o||(console.log("attachListeners",t,o),t.addEventListener("click",s=>{console.log("More options clicked",s.target),s.stopPropagation();const q=o.style.display!=="block";o.style.display=q?"block":"none"}),o.addEventListener("itemSelect",s=>{console.log("Action:",s.detail.value),o.style.display="none"}),document.addEventListener("click",s=>{!t.contains(s.target)&&!o.contains(s.target)&&(o.style.display="none")}))},h=t=>{console.log("Button clicked",t.target),t.stopPropagation()};return r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        ${g(t=>{t&&(a.value=t,i())})}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        @buttonClick=${h}
        aria-label="More options"
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        ${g(t=>{t&&(v.value=t,i())})}
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
    `}},u={render:e=>r`
      <style>${F}</style>
      <modus-wc-tree-view size="lg">
        <modus-wc-tree-item
          label=${e.label}
          value=${e.value}
          custom-class=${n}
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
    `},w={args:{checkbox:!0},render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?checkbox=${e.checkbox}
    label=${e.label}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},p={args:{"tooltip-content":"Tooltip content"},render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    tooltip-content=${c(e["tooltip-content"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},b={render:e=>{if(!customElements.get("tree-item-shadow-host")){const a=j({componentTag:"modus-wc-tree-view",propsMapper:(v,i)=>{const h=i;h.ariaLabel="Shadow DOM Tree View",i.querySelector("modus-wc-tree-item")||(i.innerHTML=`<modus-wc-tree-item label="${e.label}" value="${e.value}"></modus-wc-tree-item>`)}});customElements.define("tree-item-shadow-host",a)}return r`<tree-item-shadow-host
      .props=${{...e}}
    ></tree-item-shadow-host>`}};var E,T,y;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template
}`,...(y=(T=l.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var S,_,C;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(_=m.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var k,x,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const btnRef = createRef<HTMLElement>();
    const menuRef = createRef<HTMLElement>();
    const attachListeners = () => {
      const btn = btnRef.value;
      const menu = menuRef.value;
      if (!btn || !menu) return;
      console.log('attachListeners', btn, menu);
      btn.addEventListener('click', e => {
        console.log('More options clicked', e.target);
        e.stopPropagation();
        const isOpen = menu.style.display !== 'block';
        menu.style.display = isOpen ? 'block' : 'none';
      });
      menu.addEventListener('itemSelect', e => {
        console.log('Action:', (e as CustomEvent<{
          value: string;
        }>).detail.value);
        menu.style.display = 'none';
      });
      document.addEventListener('click', e => {
        if (!btn.contains(e.target as Node) && !menu.contains(e.target as Node)) {
          menu.style.display = 'none';
        }
      });
    };
    const handleButtonClick = (e: CustomEvent) => {
      console.log('Button clicked', e.target);
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
}`,...(z=(x=d.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var I,L,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(L=u.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var N,M,O;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(M=w.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,D,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(D=p.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var W,B,P;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(B=b.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const ne=["Default","WithStartSlot","WithEndSlot","WithCustomClass","WithCheckbox","WithTooltip","ShadowDomParent"];export{l as Default,b as ShadowDomParent,w as WithCheckbox,u as WithCustomClass,d as WithEndSlot,m as WithStartSlot,p as WithTooltip,ne as __namedExportsOrder,se as default};
