import{w as i}from"./decorator-Dt3Huotz.js";import{k as n}from"./lit-element-DVRzCIa_.js";import"./v4-CQkTLCs1.js";const d={title:"Components/Atoms/Button",component:"modus-wc-button",argTypes:{size:{control:{type:"inline-radio"},options:["small","medium","large"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["filled","outlined","text"]},color:{control:{type:"select"},options:["primary","secondary","tertiary"]}},decorators:[i],parameters:{actions:{handles:["buttonClick"]}}},r={render:e=>n`
      <modus-wc-button
        aria-label="${e["aria-label"]}"
        ?color="${e.color}"
        ?custom-class="${e["custom-class"]}"
        ?disabled="${e.disabled}"
        ?full-width="${e["full-width"]}"
        label="${e.label}"
        ?pressed="${e.pressed}"
        size="${e.size}"
        type="${e.type}"
        variant="${e.variant}"
      ></modus-wc-button>
    `},t={...r,args:{"aria-label":"Click me button",label:"Click me",size:"medium",type:"button",variant:"filled"}};var o,l,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template,
  args: {
    'aria-label': 'Click me button',
    label: 'Click me',
    size: 'medium',
    type: 'button',
    variant: 'filled'
  }
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,d as default};
