import{k as n}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Alert",component:"modus-wc-alert",args:{description:"You have 3 new messages.",title:"New message!",variant:"info"},argTypes:{variant:{control:{type:"inline-radio"},options:["","error","info","success","warning"]}},parameters:{layout:"padded"}},i={render:e=>n`
<modus-wc-alert
  custom-class=${t(e["custom-class"])}
  description=${t(e.description)}
  icon=${t(e.icon)}
  title=${e.title}
  variant=${t(e.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    label="View Messages"
    slot="button"
  />
</modus-wc-alert>
    `},o={...i};var s,a,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const p=["Default"];export{o as Default,p as __namedExportsOrder,m as default};
