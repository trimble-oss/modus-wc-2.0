import{k as n}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!",variant:"info"},argTypes:{variant:{control:{type:"inline-radio"},options:["","error","info","success","warning"]}},parameters:{layout:"padded"}},l={render:e=>n`
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${t(e["custom-class"])}
  icon=${t(e.icon)}
  variant=${t(e.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    label="View Messages"
    slot="button"
  />
</modus-wc-alert>
    `},a={...l};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const p=["Default"];export{a as Default,p as __namedExportsOrder,m as default};
