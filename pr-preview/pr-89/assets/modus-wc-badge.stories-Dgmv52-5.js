import{k as n}from"./lit-element-DVRzCIa_.js";const l={title:"Components/Badge",component:"modus-wc-badge",args:{"a11y-label":"Example badge",color:"primary",content:"Badge",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["counter","filled","text"]}}},s={render:e=>n`
      <modus-wc-badge
        a11y-label="${e["a11y-label"]}"
        color="${e.color}"
        content="${e.content}"
        ?custom-class="${e["custom-class"]}"
        size="${e.size}"
        variant="${e.variant}"
      ></modus-wc-badge>
    `},o={...s};var t,a,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const i=["Default"];export{o as Default,i as __namedExportsOrder,l as default};
