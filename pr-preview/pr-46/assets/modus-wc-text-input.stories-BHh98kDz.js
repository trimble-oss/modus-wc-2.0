import{w as p}from"./decorator-Dt3Huotz.js";import{k as u}from"./lit-element-DVRzCIa_.js";import{t as c}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const y={title:"Components/Atoms/Text Input",component:"modus-wc-text-input",argTypes:{"auto-capitalize":{control:{type:"select"},options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"select"},options:["on","off"]},"input-dir":{control:{type:"select"},options:["ltr","rtl","auto"]},"input-mode":{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["email","password","search","tel","text","url"]}},decorators:[p],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},r={render:e=>u`
    <modus-wc-text-input
      aria-describedby=${c(e["aria-describedby"])}
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
  `,args:{"aria-label":"Enter your name","input-mode":"text",name:"",placeholder:"Type your name here",size:"md",type:"text",value:""}},n={...r};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const h=["Default"];export{n as Default,h as __namedExportsOrder,y as default};
