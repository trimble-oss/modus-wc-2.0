import{w as l}from"./decorator-Dt3Huotz.js";import{k as s}from"./lit-element-DVRzCIa_.js";import{t as i}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const u={title:"Components/Button",component:"modus-wc-button",args:{"aria-label":"Click me button",color:"primary",disabled:!1,"full-width":!1,label:"Click me",pressed:!1,size:"md",type:"button",variant:"borderless"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","tertiary","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["borderless","filled","outlined"]}},decorators:[l],parameters:{actions:{handles:["buttonClick"]}}},n={render:e=>s`
      <modus-wc-button
        aria-label="${e["aria-label"]}"
        color="${e.color}"
        custom-class="${i(e["custom-class"])}"
        ?disabled="${e.disabled}"
        ?full-width="${e["full-width"]}"
        label="${e.label}"
        ?pressed="${e.pressed}"
        size="${e.size}"
        type="${e.type}"
        variant="${e.variant}"
      ></modus-wc-button>
    `},t={...n};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,u as default};
