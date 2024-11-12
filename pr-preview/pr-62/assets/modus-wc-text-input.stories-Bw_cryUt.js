import{w as l}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const s={title:"Components/Atoms/Text Input",component:"modus-wc-text-input",args:{"aria-label":"Enter your name",bordered:!0,disabled:!1,"input-mode":"text","input-spellcheck":!1,name:"",placeholder:"Type your name here",size:"md",type:"text",value:""},argTypes:{"auto-capitalize":{control:{type:"inline-radio"},options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"inline-radio"},options:["on","off"]},"input-aria-invalid":{control:{type:"inline-radio"},options:["grammar","spelling","true","false"]},"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},"input-mode":{control:{type:"inline-radio"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["email","password","search","tel","text","url"]}},decorators:[l],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},r={render:e=>p`
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
  `},o={...r};var i,n,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const $=["Default"];export{o as Default,$ as __namedExportsOrder,s as default};
