import{k as c}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";const d={title:"Components/Toast",component:"modus-wc-toast",args:{position:"top-end"},argTypes:{position:{control:{type:"select"},options:["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"]}},parameters:{layout:"padded",viewport:"responsive"}},n={render:e=>c`
<div style="height: 200px;">
  <modus-wc-toast
    custom-class=${o(e["custom-class"])}
    position=${o(e.position)}
  >
    <modus-wc-alert alert-title="Message sent successfully!" variant="success"></modus-wc-alert>
  </modus-wc-toast>
</div>
  `},t={...n};var s,a,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,d as default};
