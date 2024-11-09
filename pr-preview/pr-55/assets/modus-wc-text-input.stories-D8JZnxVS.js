import{w as a}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const m={title:"Components/Atoms/Text Input",component:"modus-wc-text-input",args:{"aria-label":"Enter your name",bordered:!0,disabled:!1,"input-mode":"text","input-spellcheck":!1,name:"",placeholder:"Type your name here",size:"md",type:"text",value:""},argTypes:{"aria-describedby":{control:{type:"text"}},"aria-label":{control:{type:"text"}},"auto-capitalize":{control:{type:"select"},options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"inline-radio"},options:["on","off"]},"auto-focus":{control:{type:"boolean"}},bordered:{control:{type:"boolean"}},"custom-class":{control:{type:"text"}},disabled:{control:{type:"boolean"}},"input-aria-invalid":{control:{type:"select"},options:["grammar","spelling","true","false"]},"input-dir":{control:{type:"select"},options:["ltr","rtl","auto"]},"input-id":{control:{type:"text"}},"input-mode":{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},"input-spellcheck":{control:{type:"boolean"}},"input-tab-index":{control:{type:"number"}},"max-length":{control:{type:"number"}},"min-length":{control:{type:"number"}},name:{control:{type:"text"}},pattern:{control:{type:"text"}},placeholder:{control:{type:"text"}},"read-only":{control:{type:"boolean"}},required:{control:{type:"boolean"}},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["email","password","search","tel","text","url"]}},decorators:[a],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},r={render:e=>p`
    <modus-wc-text-input
      aria-describedby=${t(e["aria-describedby"])}
      aria-label=${e["aria-label"]}
      auto-capitalize=${t(e["auto-capitalize"])}
      auto-complete=${t(e["auto-complete"])}
      ?auto-focus=${e["auto-focus"]}
      ?bordered=${e.bordered}
      custom-class=${e["custom-class"]}
      ?disabled=${e.disabled}
      input-aria-invalid=${t(e["input-aria-invalid"])}
      input-dir=${t(e["input-dir"])}
      input-id=${t(e["input-id"])}
      input-mode=${e["input-mode"]}
      ?input-spellcheck=${e["input-spellcheck"]}
      input-tab-index=${t(e["input-tab-index"])}
      max-length=${t(e["max-length"])}
      min-length=${t(e["min-length"])}
      name=${e.name}
      pattern=${t(e.pattern)}
      placeholder=${e.placeholder}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${e.size}
      type=${e.type}
      .value=${e.value}
    ></modus-wc-text-input>
  `},o={...r};var n,l,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const y=["Default"];export{o as Default,y as __namedExportsOrder,m as default};
