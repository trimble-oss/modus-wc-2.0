import{w as c}from"./decorator-Dt3Huotz.js";import{k as s}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const f={title:"Components/Forms/Number Input",component:"modus-wc-number-input",args:{bordered:!0,disabled:!1,"input-mode":"numeric",label:"Label",size:"md",type:"number",value:""},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},"input-mode":{control:{type:"select"},options:["decimal","none","numeric"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["number","range"]}},decorators:[c],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},l={render:e=>s`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=${t(e["auto-complete"])}
      ?bordered=${e.bordered}
      currency-symbol=${t(e["currency-symbol"])}
      custom-class=${t(e["custom-class"])}
      ?disabled=${e.disabled}
      input-aria-invalid=${t(e["input-aria-invalid"])}
      input-id=${t(e["input-id"])}
      input-mode=${e["input-mode"]}
      input-tab-index=${t(e["input-tab-index"])}
      label=${t(e.label)}
      max=${t(e.max)}
      min=${t(e.min)}
      name=${t(e.name)}
      placeholder=${t(e.placeholder)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${t(e.size)}
      step=${t(e.step)}
      type=${t(e.type)}
      .value=${e.value}
    ></modus-wc-number-input>
  `},o={...l},n={...l,args:{"currency-symbol":"$"}};var r,i,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  args: {
    'currency-symbol': '$'
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const v=["Default","Currency"];export{n as Currency,o as Default,v as __namedExportsOrder,f as default};
