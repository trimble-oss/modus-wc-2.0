import{w as $}from"./decorator-D4YmxizW.js";import{x as n}from"./lit-element-C8zulti1.js";import{o}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const T={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[$],parameters:{actions:{handles:["itemSelect"]}}},w={render:e=>n`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip=${o(e.tooltip)}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},t={...w},s={render:e=>n`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip=${o(e.tooltip)}
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
    `},i={args:{tooltip:"This is a tooltip for the menu item","tooltip-position":"top"},render:e=>n`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    tooltip=${o(e.tooltip)}
    tooltip-position=${o(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `};var l,m,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(r=(m=t.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};var d,a,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    tooltip=\${ifDefined(args.tooltip)}
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
}`,...(u=(a=s.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var c,p,b;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tooltip: 'This is a tooltip for the menu item',
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
    tooltip=\${ifDefined(args.tooltip)}
    tooltip-position=\${ifDefined(args['tooltip-position'])}
    value=\${args.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    \`;
  }
}`,...(b=(p=i.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const g=["Default","WithIcon","WithTooltip"];export{t as Default,s as WithIcon,i as WithTooltip,g as __namedExportsOrder,T as default};
