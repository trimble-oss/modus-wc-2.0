import{w as a}from"./decorator-Dt3Huotz.js";import{k as l}from"./lit-element-DVRzCIa_.js";import{t as p}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const s={title:"Components/Atoms/Text Input",component:"modus-wc-text-input",args:{"aria-label":"Enter your name","input-mode":"text",name:"",placeholder:"Type your name here",size:"md",type:"text",value:""},argTypes:{"auto-capitalize":{control:{type:"select"},options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"select"},options:["on","off"]},"input-dir":{control:{type:"select"},options:["ltr","rtl","auto"]},"input-mode":{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["email","password","search","tel","text","url"]}},decorators:[a],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},c={render:e=>l`
    <modus-wc-text-input
      aria-describedby=${p(e["aria-describedby"])}
      aria-label=${e["aria-label"]}
      ?auto-capitalize=${e["auto-capitalize"]}
      ?auto-complete=${e["auto-complete"]}
      ?auto-focus=${e.autoFocus}
      ?bordered=${e.bordered}
      ?custom-class=${e["custom-class"]}
      ?input-dir=${e["input-dir"]}
      ?disabled=${e.disabled}
      ?input-aria-invalid=${e["input-aria-invalid"]}
      ?input-id=${e["input-id"]}
      input-mode=${e["input-mode"]}
      ?max-length=${e["max-length"]}
      ?min-length=${e["min-length"]}
      name=${e.name}
      ?pattern=${e.pattern}
      placeholder=${e.placeholder}
      ?read-only=${e.readOnly}
      ?required=${e.required}
      size=${e.size}
      ?input-spellcheck=${e["input-spellcheck"]}
      ?tab-index=${e["input-tab-index"]}
      type=${e.type}
      .value=${e.value}
    ></modus-wc-text-input>
  `},t={...c};var o,n,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,s as default};
