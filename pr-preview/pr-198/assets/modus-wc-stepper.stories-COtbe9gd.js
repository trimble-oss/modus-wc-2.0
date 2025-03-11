import{k as n}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Stepper",component:"modus-wc-stepper",args:{steps:[{label:"Scale",color:"primary"},{label:"Belong",color:"primary"},{label:"Grow",color:"warning"},{label:"Innovate",content:"🚀"}]},argTypes:{"custom-class":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]}},parameters:{layout:"padded"}},p={render:t=>n`
<modus-wc-stepper
  custom-class="${o(t["custom-class"])}"
  orientation="${o(t.orientation)}"
  .steps="${t.steps}"
>
</modus-wc-stepper>
  `},e={...p};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,m as default};
