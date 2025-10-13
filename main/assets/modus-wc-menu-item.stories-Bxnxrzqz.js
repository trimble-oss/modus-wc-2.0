import{w as z}from"./decorator-D4YmxizW.js";import{x as i}from"./lit-element-C8zulti1.js";import{o}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const W={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[z],parameters:{actions:{handles:["itemSelect"]}}},x={render:e=>i`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip-content=${o(e["tooltip-content"])}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},t={...x},s={render:e=>i`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip-content=${o(e["tooltip-content"])}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    `},n={args:{checkbox:!0},render:e=>i`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    ?checkbox=${e.checkbox}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    value=${e.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    `},l={args:{"tooltip-content":"This is a tooltip for the menu item","tooltip-position":"top"},render:e=>i`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip-content=${o(e["tooltip-content"])}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `};var c,m,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(r=(m=t.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};var d,u,a;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=\${args.bordered}
    ?checkbox=\${args.checkbox}
    custom-class=\${ifDefined(args['custom-class'])}
    ?disabled=\${args.disabled}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    sub-label=\${ifDefined(args['sub-label'])}
    tooltip-content=\${ifDefined(args['tooltip-content'])}
    tooltip-position=\${ifDefined(args['tooltip-position'])}
    value=\${args.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(a=(u=s.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};var b,p,$;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checkbox: true
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=\${args.bordered}
    ?checkbox=\${args.checkbox}
    custom-class=\${ifDefined(args['custom-class'])}
    ?disabled=\${args.disabled}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    sub-label=\${ifDefined(args['sub-label'])}
    value=\${args.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...($=(p=n.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};var w,h,f;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    'tooltip-content': 'This is a tooltip for the menu item',
    'tooltip-position': 'top'
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=\${args.bordered}
    custom-class=\${ifDefined(args['custom-class'])}
    ?disabled=\${args.disabled}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    sub-label=\${ifDefined(args['sub-label'])}
    tooltip-content=\${ifDefined(args['tooltip-content'])}
    tooltip-position=\${ifDefined(args['tooltip-position'])}
    value=\${args.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const I=["Default","WithIcon","WithCheckbox","WithTooltip"];export{t as Default,n as WithCheckbox,s as WithIcon,l as WithTooltip,I as __namedExportsOrder,W as default};
