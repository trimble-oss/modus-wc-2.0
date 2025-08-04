import{w as u}from"./decorator-D4YmxizW.js";import{x as d}from"./lit-element-C8zulti1.js";import{o as m}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const z={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["itemSelect"]}}},i={render:e=>d`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${m(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${m(e["sub-label"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},s={...i},o={render:e=>d`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${m(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${m(e["sub-label"])}
    value=${e.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    `};var t,n,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(l=(n=s.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var r,a,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const v=["Default","WithIcon"];export{s as Default,o as WithIcon,v as __namedExportsOrder,z as default};
