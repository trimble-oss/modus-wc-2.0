import{w as a}from"./decorator-D4YmxizW.js";import{x as l}from"./lit-element-C8zulti1.js";import{o}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const b={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[a],parameters:{actions:{handles:["itemSelect"]}}},c={render:e=>l`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${e.bordered}
    custom-class=${o(e["custom-class"])}
    ?disabled=${e.disabled}
    label=${e.label}
    start-icon=${o(e["start-icon"])}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${o(e["sub-label"])}
    value=${e.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `},t={...c};var m,s,r;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,b as default};
