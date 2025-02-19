import{w as i}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const u={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!0,"collapse-description":"Collapse description","collapse-title":"Collapse title",expanded:!1,icon:"info","icon-aria-label":"Information icon",size:"md"},argTypes:{size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[i],parameters:{actions:{handles:["expandedChange"]},layout:"padded"}},r={render:e=>c`
<modus-wc-collapse
  ?bordered=${e.bordered}
  collapse-description=${o(e["collapse-description"])}
  collapse-title=${o(e["collapse-title"])}
  custom-class=${o(e["custom-class"])}
  ?expanded=${e.expanded}
  icon=${o(e.icon)}
  icon-aria-label=${o(e["icon-aria-label"])}
  size=${o(e.size)}
>
  <div>Custom HTML content</div>
</modus-wc-collapse>
    `},t={...r};var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,u as default};
