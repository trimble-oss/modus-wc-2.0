import{w as r}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import"./v4-CQkTLCs1.js";const p={title:"Components/Atoms/Button",component:"modus-wc-button",args:{"aria-label":"Click me button",color:"primary",disabled:!1,"full-width":!1,label:"Click me",pressed:!1,size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","tertiary","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["filled","outlined","text"]}},decorators:[r],parameters:{actions:{handles:["buttonClick"]}}},n={render:e=>i`
      <modus-wc-button
        aria-label="${e["aria-label"]}"
        color="${e.color}"
        custom-class="${e["custom-class"]}"
        ?disabled="${e.disabled}"
        ?full-width="${e["full-width"]}"
        label="${e.label}"
        ?pressed="${e.pressed}"
        size="${e.size}"
        type="${e.type}"
        variant="${e.variant}"
      ></modus-wc-button>
    `},t={...n};var o,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,p as default};
