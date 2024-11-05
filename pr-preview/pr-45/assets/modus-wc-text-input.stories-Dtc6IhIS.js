import{k as p}from"./lit-element-DVRzCIa_.js";import{t as u}from"./if-defined-1ipA9LQg.js";const m={title:"Components/Atoms/Text Input",component:"modus-wc-text-input",tags:["autodocs"],args:{"aria-label":"Enter your name","input-mode":"text",name:"",placeholder:"Type your name here",size:"md",type:"text",value:""},argTypes:{"auto-capitalize":{control:{type:"select"},options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"select"},options:["on","off"]},"input-dir":{control:{type:"select"},options:["ltr","rtl","auto"]},"input-mode":{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["email","password","search","tel","text","url"]}}},c={render:e=>p`
    <modus-wc-text-input
      aria-describedby=${u(e["aria-describedby"])}
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
      @inputBlur=${t=>{const o=t.target;e.value=o.value}}
      @inputChange=${t=>{const o=t.target;e.value=o.value}}
      @inputFocus=${t=>{const o=t.target;e.value=o.value}}
    ></modus-wc-text-input>
  `},n={...c};var a,l,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const s=["Default"];export{n as Default,s as __namedExportsOrder,m as default};
