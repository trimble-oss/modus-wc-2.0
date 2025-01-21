import{k as n}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Badge",component:"modus-wc-badge",args:{"aria-label":"Example badge",color:"primary",content:"Badge",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["counter","filled","text"]}}},c={render:e=>n`
      <modus-wc-badge
        aria-label="${e["aria-label"]}"
        color="${e.color}"
        content="${e.content}"
        custom-class="${s(e["custom-class"])}"
        size="${e.size}"
        variant="${e.variant}"
      ></modus-wc-badge>
    `},o={...c};var t,a,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const d=["Default"];export{o as Default,d as __namedExportsOrder,m as default};
