import{w as r}from"./decorator-Dt3Huotz.js";import{k as l}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const p={title:"Components/Menu Item",component:"modus-wc-menu-item",args:{label:"Menu Item",size:"md",value:"menuItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[r],parameters:{actions:{handles:["itemSelect"]}}},c={render:e=>l`
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
    `},t={...c};var s,m,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,p as default};
