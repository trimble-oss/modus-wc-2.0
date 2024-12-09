import{k as c}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"inline-radio"},options:["auto","top","right","left","bottom"]}}},r={render:o=>c`
<modus-wc-tooltip
  content=${e(o.content)}
  custom-class="${o["custom-class"]}"
  ?force-open="${o["force-open"]}"
  tooltip-id="${e(o["tooltip-id"])}"
  position=${e(o.position)}
>
  <modus-wc-badge content="Hover"></modus-wc-badge>
</modus-wc-tooltip>
    `},t={...r};var n,s,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,m as default};
