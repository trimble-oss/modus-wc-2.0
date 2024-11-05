import{k as a}from"./lit-element-DVRzCIa_.js";const s={title:"Components/Atoms/Button",component:"modus-wc-button",argTypes:{size:{control:{type:"inline-radio"},options:["small","medium","large"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["filled","outlined","text"]},color:{control:{type:"select"},options:["primary","secondary","tertiary"]}}},i={render:e=>a`
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
    `},t={...i,args:{"aria-label":"Click me button",label:"Click me",size:"medium",type:"button",variant:"filled"}};var o,l,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template,
  args: {
    'aria-label': 'Click me button',
    label: 'Click me',
    size: 'medium',
    type: 'button',
    variant: 'filled'
  }
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,s as default};
