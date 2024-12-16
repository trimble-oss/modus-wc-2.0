import{w as s}from"./decorator-Dt3Huotz.js";import{k as u}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const $={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{"a11y-label":"Enter your name",bordered:!0,disabled:!1,"input-mode":"text","input-spellcheck":!1,placeholder:"Type your name here",size:"md",type:"text",value:""},argTypes:{"auto-capitalize":{control:{type:"inline-radio"},options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"inline-radio"},options:["on","off"]},"input-aria-invalid":{control:{type:"inline-radio"},options:["grammar","spelling","true","false"]},"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},"input-mode":{control:{type:"inline-radio"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["email","password","search","tel","text","url"]}},decorators:[s],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>u`
    <modus-wc-text-input
      a11y-describedby=${t(e["a11y-describedby"])}
      a11y-label=${e["a11y-label"]}
      a11y-labelledby=${e["a11y-labelledby"]}
      auto-capitalize=${t(e["auto-capitalize"])}
      auto-complete=${t(e["auto-complete"])}
      ?auto-focus=${e["auto-focus"]}
      ?bordered=${e.bordered}
      custom-class=${t(e["custom-class"])}
      ?disabled=${e.disabled}
      input-aria-invalid=${t(e["input-aria-invalid"])}
      input-dir=${t(e["input-dir"])}
      input-id=${t(e["input-id"])}
      input-mode=${e["input-mode"]}
      ?input-spellcheck=${e["input-spellcheck"]}
      input-tab-index=${t(e["input-tab-index"])}
      max-length=${t(e["max-length"])}
      min-length=${t(e["min-length"])}
      name=${t(e.name)}
      pattern=${t(e.pattern)}
      placeholder=${t(e.placeholder)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${t(e.size)}
      type=${t(e.type)}
      .value=${e.value}
    ></modus-wc-text-input>
  `},i={render:()=>u`
<style>
  .form-control {
    display: flex;
    align-items: center;
  }
  .modus-wc-input-label {
    padding-inline-end: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-input-label
      for-id="text-input"
      label-text="Example text input"
    ></modus-wc-input-label>
    <modus-wc-text-input
      a11y-label="Example text input"
      input-id="text-input"
      name="example-text-input"
    ></modus-wc-text-input>
  </div>
</form>
    `};var a,l,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-text-input
      a11y-describedby=\${ifDefined(args['a11y-describedby'])}
      a11y-label=\${args['a11y-label']}
      a11y-labelledby=\${args['a11y-labelledby']}
      auto-capitalize=\${ifDefined(args['auto-capitalize'])}
      auto-complete=\${ifDefined(args['auto-complete'])}
      ?auto-focus=\${args['auto-focus']}
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-dir=\${ifDefined(args['input-dir'])}
      input-id=\${ifDefined(args['input-id'])}
      input-mode=\${args['input-mode']}
      ?input-spellcheck=\${args['input-spellcheck']}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      max-length=\${ifDefined(args['max-length'])}
      min-length=\${ifDefined(args['min-length'])}
      name=\${ifDefined(args.name)}
      pattern=\${ifDefined(args.pattern)}
      placeholder=\${ifDefined(args.placeholder)}
      ?read-only=\${args['read-only']}
      ?required=\${args.required}
      size=\${ifDefined(args.size)}
      type=\${ifDefined(args.type)}
      .value=\${args.value}
    ></modus-wc-text-input>
  \`
}`,...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var r,d,p;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return html\`
<style>
  .form-control {
    display: flex;
    align-items: center;
  }
  .modus-wc-input-label {
    padding-inline-end: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-input-label
      for-id="text-input"
      label-text="Example text input"
    ></modus-wc-input-label>
    <modus-wc-text-input
      a11y-label="Example text input"
      input-id="text-input"
      name="example-text-input"
    ></modus-wc-text-input>
  </div>
</form>
    \`;
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Template","TextInputWithLabel"];export{n as Template,i as TextInputWithLabel,x as __namedExportsOrder,$ as default};
