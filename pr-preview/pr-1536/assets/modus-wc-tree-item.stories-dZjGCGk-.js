import{w as P}from"./decorator-Cv9na35H.js";import{b as n}from"./lit-element-DgBvYnzn.js";import{o as s}from"./if-defined-BnVFTJ4o.js";import{c as O}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const R=`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    label="Tree Item"
    size="md"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
`,q=`
<modus-wc-tree-menu>
  <modus-wc-tree-item label="Tree Item" size="md" value="treeItem">
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-menu>
`,A=`
<modus-wc-tree-menu>
  <modus-wc-tree-item label="Tree Item" value="treeItem">
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <modus-wc-dropdown-menu
      slot="end"
      button-variant="borderless"
      button-size="sm"
      button-shape="circle"
      button-aria-label="More options"
    >
      <modus-wc-icon slot="button" decorative name="more_vertical" size="sm"></modus-wc-icon>
      <modus-wc-menu-item slot="menu" label="Rename" value="rename"></modus-wc-menu-item>
      <modus-wc-menu-item slot="menu" label="Duplicate" value="duplicate"></modus-wc-menu-item>
      <modus-wc-menu-item slot="menu" label="Delete" value="delete"></modus-wc-menu-item>
    </modus-wc-dropdown-menu>
  </modus-wc-tree-item>
</modus-wc-tree-menu>
`,j=`
<modus-wc-tree-menu size="sm">
  <modus-wc-tree-item label="Tree Item" value="treeItem">
    <modus-wc-icon slot="start" name="search"></modus-wc-icon>
    <div slot="end" style="display: flex; align-items: center;">
      <div
        style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px; align-self: stretch;"
      ></div>
      <modus-wc-button variant="borderless" size="sm" aria-label="Open folder">
        <modus-wc-icon name="folder_closed" size="sm"></modus-wc-icon>
        <modus-wc-icon name="chevron_right" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-menu>
`,F=`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    checkbox="true"
    label="Tree Item"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
`,G=`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    label="Tree Item"
    tooltip-content="Tooltip content"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
`,J=`
<tree-item-shadow-host></tree-item-shadow-host>
<script>
  // Register once — see Storybook story implementation for the full shadow-host class.
  const host = document.querySelector('tree-item-shadow-host');
  host.props = {
    label: 'Tree Item',
    size: 'md',
    value: 'treeItem',
  };
<\/script>
`,Z={title:"Components/Tree Item",component:"modus-wc-tree-item",args:{label:"Tree Item",size:"md",value:"treeItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[P],parameters:{actions:{handles:["itemSelect"]}}},K={parameters:{docs:{source:{code:R}}},render:e=>n`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    ?bordered=${e.bordered}
    ?block-expand=${e["block-expand"]}
    ?checkbox=${e.checkbox}
    custom-class=${s(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${s(e["sub-label"])}
    tooltip-content=${s(e["tooltip-content"])}
    tooltip-position=${s(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
    `},c={...K},a={parameters:{docs:{source:{code:q}}},render:e=>n`
<modus-wc-tree-menu>
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
</modus-wc-tree-menu>
    `},l={parameters:{docs:{source:{code:A}}},render:e=>n`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    label=${e.label}
    value=${e.value}
  >
    <modus-wc-dropdown-menu
      slot="end"
      button-variant="borderless"
      button-size="sm"
      button-shape="circle"
      button-aria-label="More options"
    >
        <div slot="button">
          <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
        </div>
     <div slot="menu">
        <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
        <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
        <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
      </div>
    </modus-wc-dropdown-menu>
  </modus-wc-tree-item>
</modus-wc-tree-menu>
    `},u={parameters:{docs:{source:{code:j}}},render:e=>n`
<modus-wc-tree-menu size="sm">
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
</modus-wc-tree-menu>
    `},d={args:{checkbox:!0},parameters:{docs:{source:{code:F}}},render:e=>n`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    ?checkbox=${e.checkbox}
    label=${e.label}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
    `},i={args:{"tooltip-content":"Tooltip content"},parameters:{docs:{source:{code:G}}},render:e=>n`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    label=${e.label}
    tooltip-content=${s(e["tooltip-content"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
    `},w={parameters:{docs:{source:{code:J}}},render:e=>{if(!customElements.get("tree-item-shadow-host")){const L=O({componentTag:"modus-wc-tree-menu",propsMapper:(t,r)=>{const H=r;H.ariaLabel="Shadow DOM Tree Menu";let m=r.querySelector("modus-wc-tree-item");m||(m=document.createElement("modus-wc-tree-item"),r.innerHTML="",r.appendChild(m));const o=m;o.bordered=!!t.bordered,o.blockExpand=!!t["block-expand"],o.checkbox=!!t.checkbox,o.customClass=t["custom-class"]||"",o.disabled=!!t.disabled,o.focused=!!t.focused,o.hasSubmenu=!!t["has-submenu"],o.label=t.label,o.selected=!!t.selected,o.size=t.size||"md",o.subLabel=t["sub-label"]||"",o.tooltipContent=t["tooltip-content"]||"",o.tooltipPosition=t["tooltip-position"]||"auto",o.value=t.value}});customElements.define("tree-item-shadow-host",L)}return n`<tree-item-shadow-host
      .props=${{...e}}
    ></tree-item-shadow-host>`}};var p,b,h;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,I,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeItemWithStartSlotSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-menu>
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
</modus-wc-tree-menu>
    \`;
  }
}`,...(S=(I=a.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var g,$,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeItemWithEndSlotSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    label=\${args.label}
    value=\${args.value}
  >
    <modus-wc-dropdown-menu
      slot="end"
      button-variant="borderless"
      button-size="sm"
      button-shape="circle"
      button-aria-label="More options"
    >
        <div slot="button">
          <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
        </div>
     <div slot="menu">
        <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
        <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
        <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
      </div>
    </modus-wc-dropdown-menu>
  </modus-wc-tree-item>
</modus-wc-tree-menu>
    \`;
  }
}`,...(f=($=l.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var z,x,C;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeItemCustomSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-menu size="sm">
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
</modus-wc-tree-menu>
    \`;
  }
}`,...(C=(x=u.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var E,T,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    checkbox: true
  },
  parameters: {
    docs: {
      source: {
        code: treeItemWithCheckboxSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    ?checkbox=\${args.checkbox}
    label=\${args.label}
    value=\${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
    \`;
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var y,D,W;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'tooltip-content': 'Tooltip content'
  },
  parameters: {
    docs: {
      source: {
        code: treeItemWithTooltipSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-menu>
  <modus-wc-tree-item
    label=\${args.label}
    tooltip-content=\${ifDefined(args['tooltip-content'])}
    value=\${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
    \`;
  }
}`,...(W=(D=i.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var M,B,_;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeItemShadowDomParentSourceCode
      }
    }
  },
  render: args => {
    if (!customElements.get('tree-item-shadow-host')) {
      const TreeItemShadowHost = createShadowHostClass<TreeItemArgs>({
        componentTag: 'modus-wc-tree-menu',
        propsMapper: (v: TreeItemArgs, el: HTMLElement) => {
          const treeMenuEl = el as unknown as {
            ariaLabel: string;
          };
          treeMenuEl.ariaLabel = 'Shadow DOM Tree Menu';
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
}`,...(_=(B=w.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const ee=["Default","WithStartSlot","WithEndSlot","CustomTreeItem","WithCheckbox","WithTooltip","ShadowDomParent"];export{u as CustomTreeItem,c as Default,w as ShadowDomParent,d as WithCheckbox,l as WithEndSlot,a as WithStartSlot,i as WithTooltip,ee as __namedExportsOrder,Z as default};
