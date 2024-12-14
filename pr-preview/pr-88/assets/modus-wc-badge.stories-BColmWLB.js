import{k as n}from"./lit-element-DVRzCIa_.js";const i={title:"Components/Badge",component:"modus-wc-badge",args:{"aria-label":"Example badge",color:"primary",content:"Badge",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["counter","filled","text"]}}},s={render:e=>n`
      <modus-wc-badge
        aria-label="${e["aria-label"]}"
        color="${e.color}"
        content="${e.content}"
        ?custom-class="${e["custom-class"]}"
        size="${e.size}"
        variant="${e.variant}"
      ></modus-wc-badge>
    `},o={...s};var t,a,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const l=["Default"];export{o as Default,l as __namedExportsOrder,i as default};
