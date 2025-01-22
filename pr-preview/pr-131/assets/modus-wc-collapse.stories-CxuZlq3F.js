import{k as c}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";const p={title:"Components/Collapse",component:"modus-wc-collapse",args:{bordered:!0,"collapse-description":"Collapse description","collapse-title":"Collapse title",expanded:!1,icon:"info","icon-aria-label":"Information icon",size:"md"},argTypes:{size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},parameters:{layout:"padded"}},i={render:e=>c`
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
    `},t={...i};var l,s,a;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,p as default};
