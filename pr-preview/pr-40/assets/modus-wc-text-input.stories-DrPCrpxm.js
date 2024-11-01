import{k as s}from"./lit-element-DVRzCIa_.js";const i={title:"Components/Atoms/Text Input",component:"modus-wc-text-input",tags:["autodocs"],argTypes:{ariaDescribedby:{control:"text",table:{sort:"alpha"}},ariaInvalid:{control:"boolean",table:{sort:"alpha"}},ariaLabel:{control:"text",table:{sort:"alpha"}},autoCapitalize:{control:{type:"select"},options:["off","none","on","sentences","words","characters"],table:{sort:"alpha"}},autoComplete:{control:{type:"select"},options:["on","off"],table:{sort:"alpha"}},autoFocus:{control:"boolean",table:{sort:"alpha"}},bordered:{control:"boolean",table:{sort:"alpha"}},customClass:{control:"text",table:{sort:"alpha"}},dir:{control:{type:"select"},options:["ltr","rtl","auto"],table:{sort:"alpha"}},disabled:{control:"boolean",table:{sort:"alpha"}},id:{control:"text",table:{sort:"alpha"}},inputMode:{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"],table:{sort:"alpha"}},maxLength:{control:"number",table:{sort:"alpha"}},minLength:{control:"number",table:{sort:"alpha"}},name:{control:"text",table:{sort:"alpha"}},pattern:{control:"text",table:{sort:"alpha"}},placeholder:{control:"text",table:{sort:"alpha"}},readOnly:{control:"boolean",table:{sort:"alpha"}},required:{control:"boolean",table:{sort:"alpha"}},size:{control:{type:"select"},options:["sm","md","lg"]},spellcheck:{control:"boolean",table:{sort:"alpha"}},tabIndex:{control:"number",table:{sort:"alpha"}},type:{control:{type:"select"},options:["email","password","search","tel","text","url"],table:{sort:"alpha"}},value:{control:"text",table:{sort:"alpha"}}},parameters:{controls:{sort:"alpha"}}},c={render:e=>s`
    <modus-wc-text-input
      aria-describedby=${e.ariaDescribedby}
      aria-invalid=${e.ariaInvalid}
      aria-label=${e.ariaLabel}
      auto-capitalize=${e.autoCapitalize}
      auto-complete=${e.autoComplete}
      ?auto-focus=${e.autoFocus}
      ?bordered=${e.bordered}
      custom-class=${e.customClass}
      dir=${e.dir}
      ?disabled=${e.disabled}
      id=${e.id}
      input-mode=${e.inputMode}
      max-length=${e.maxLength}
      min-length=${e.minLength}
      name=${e.name}
      pattern=${e.pattern}
      placeholder=${e.placeholder}
      ?read-only=${e.readOnly}
      ?required=${e.required}
      size=${e.size}
      ?spellcheck=${e.spellcheck}
      tab-index=${e.tabIndex}
      type=${e.type}
      .value=${e.value}
      @input=${t=>{const o=t.target;e.value=o.value}}
      @change=${t=>{const o=t.target;e.value=o.value}}
      @blur=${t=>console.log("Blur event:",t)}
      @focus=${t=>console.log("Focus event:",t)}
    ></modus-wc-text-input>
  `,args:{ariaLabel:"Enter your name",ariaInvalid:!1,bordered:!0,customClass:"",disabled:!1,name:"",placeholder:"Type your name here",readOnly:!1,required:!1,size:"md",value:""}},a={...c};var l,r,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const d=["Default"];export{a as Default,d as __namedExportsOrder,i as default};
