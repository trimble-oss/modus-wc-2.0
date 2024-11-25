import{w as s}from"./decorator-Dt3Huotz.js";import{k as u}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const $={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{"aria-label":"Enter your name",bordered:!0,disabled:!1,"input-mode":"text","input-spellcheck":!1,placeholder:"Type your name here",size:"md",type:"text",value:""},argTypes:{"auto-capitalize":{control:{type:"inline-radio"},options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"inline-radio"},options:["on","off"]},"input-aria-invalid":{control:{type:"inline-radio"},options:["grammar","spelling","true","false"]},"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},"input-mode":{control:{type:"inline-radio"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["email","password","search","tel","text","url"]}},decorators:[s],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>u`
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
      name=${t(e.name)}
      pattern=${t(e.pattern)}
      placeholder=${e.placeholder}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${e.size}
      type=${e.type}
      .value=${e.value}
    ></modus-wc-text-input>
  `},i={render:()=>u`
      <form action="" method="get">
        <div class="form-control">
          <modus-wc-input-label
            for-id="text-input"
            label-text="Example text input"
          ></modus-wc-input-label>
          <modus-wc-text-input
            aria-label="Example text input"
            input-id="text-input"
            name="example-text-input"
          ></modus-wc-text-input>
        </div>
      </form>
      <style>
        .form-control {
          display: flex;
          align-items: center;
        }
        .modus-wc-input-label {
          padding-inline-end: 8px;
        }
      </style>
    `};var a,o,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-text-input
      aria-describedby=\${ifDefined(args['aria-describedby'])}
      aria-label=\${args['aria-label']}
      auto-capitalize=\${ifDefined(args['auto-capitalize'])}
      auto-complete=\${ifDefined(args['auto-complete'])}
      ?auto-focus=\${args['auto-focus']}
      ?bordered=\${args.bordered}
      custom-class=\${args['custom-class']}
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
      placeholder=\${args.placeholder}
      ?read-only=\${args['read-only']}
      ?required=\${args.required}
      size=\${args.size}
      type=\${args.type}
      .value=\${args.value}
    ></modus-wc-text-input>
  \`
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,p,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <form action="" method="get">
        <div class="form-control">
          <modus-wc-input-label
            for-id="text-input"
            label-text="Example text input"
          ></modus-wc-input-label>
          <modus-wc-text-input
            aria-label="Example text input"
            input-id="text-input"
            name="example-text-input"
          ></modus-wc-text-input>
        </div>
      </form>
      <style>
        .form-control {
          display: flex;
          align-items: center;
        }
        .modus-wc-input-label {
          padding-inline-end: 8px;
        }
      </style>
    \`;
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const b=["Template","TextInputWithLabel"];export{n as Template,i as TextInputWithLabel,b as __namedExportsOrder,$ as default};
