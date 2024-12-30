import{w as l}from"./decorator-Dt3Huotz.js";import{k as i}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const u={title:"Components/Button",component:"modus-wc-button",args:{"aria-label":"Click me button",color:"primary",disabled:!1,"full-width":!1,label:"Click me",pressed:!1,size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","tertiary","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["filled","outlined","text"]}},decorators:[l],parameters:{actions:{handles:["buttonClick"]}}},s={render:t=>i`
      <modus-wc-button
        aria-label="${t["aria-label"]}"
        color="${t.color}"
        custom-class="${n(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?full-width="${t["full-width"]}"
        label="${t.label}"
        ?pressed="${t.pressed}"
        size="${t.size}"
        type="${t.type}"
        variant="${t.variant}"
      ></modus-wc-button>
    `},e={...s};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,u as default};
