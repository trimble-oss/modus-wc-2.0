import{w as u}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const f={title:"Components/Forms/Textarea",component:"modus-wc-textarea",args:{"a11y-label":"Enter your comments",bordered:!0,"custom-class":"",disabled:!1,placeholder:"Type your comments here",readonly:!1,required:!1,size:"md",value:""},argTypes:{"input-aria-invalid":{control:{type:"inline-radio"},options:["grammar","spelling","true","false"]},"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>p`
      <modus-wc-textarea
        a11y-describedby=${a(e["a11y-describedby"])}
        a11y-label=${e["a11y-label"]}
        a11y-labelledby=${e["a11y-labelledby"]}
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        input-aria-invalid=${a(e["input-aria-invalid"])}
        input-dir=${a(e["input-dir"])}
        input-id=${a(e["input-id"])}
        ?input-spellcheck=${e["input-spellcheck"]}
        input-tab-index=${a(e["input-tab-index"])}
        max-length=${a(e["max-length"])}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?readonly=${e.readonly}
        ?required=${e.required}
        rows=${a(e.rows)}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-textarea>
    `},t={render:()=>p`
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
      for-id="textarea-input"
      label-text="Example textarea"
    ></modus-wc-input-label>
    <modus-wc-textarea
      a11y-label="Example textarea"
      input-id="textarea-input"
      name="example-textarea"
    ></modus-wc-textarea>
  </div>
</form>
    `};var r,i,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-textarea
        a11y-describedby=\${ifDefined(args['a11y-describedby'])}
        a11y-label=\${args['a11y-label']}
        a11y-labelledby=\${args['a11y-labelledby']}
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
        input-dir=\${ifDefined(args['input-dir'])}
        input-id=\${ifDefined(args['input-id'])}
        ?input-spellcheck=\${args['input-spellcheck']}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        max-length=\${ifDefined(args['max-length'])}
        name=\${ifDefined(args.name)}
        placeholder=\${ifDefined(args.placeholder)}
        ?readonly=\${args.readonly}
        ?required=\${args.required}
        rows=\${ifDefined(args.rows)}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-textarea>
    \`;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,o,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      for-id="textarea-input"
      label-text="Example textarea"
    ></modus-wc-input-label>
    <modus-wc-textarea
      a11y-label="Example textarea"
      input-id="textarea-input"
      name="example-textarea"
    ></modus-wc-textarea>
  </div>
</form>
    \`;
  }
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const y=["Template","TextareaWithLabel"];export{n as Template,t as TextareaWithLabel,y as __namedExportsOrder,f as default};
