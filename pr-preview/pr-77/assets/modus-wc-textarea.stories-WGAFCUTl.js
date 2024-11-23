import{w as m}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const b={title:"Components/Forms/Textarea",component:"modus-wc-textarea",args:{"aria-label":"Enter your comments",bordered:!0,"custom-class":"",disabled:!1,placeholder:"Type your comments here",readonly:!1,required:!1,size:"md",value:""},argTypes:{"input-aria-invalid":{control:{type:"inline-radio"},options:["grammar","spelling","true","false"]},"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>p`
      <modus-wc-textarea
        aria-describedby=${a(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        input-aria-invalid=${a(e["input-aria-invalid"])}
        input-dir=${a(e["input-dir"])}
        input-id=${a(e["input-id"])}
        ?input-spellcheck=${a(e["input-spellcheck"])}
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
    `},r={render:()=>p`
      <form action="" class="form-example" method="get">
        <div class="form-example">
          <modus-wc-input-label
            for-id="textarea-input"
            label-text="Example textarea"
          ></modus-wc-input-label>
          <modus-wc-textarea
            aria-label="Example textarea"
            input-id="textarea-input"
            name="example-textarea"
          ></modus-wc-textarea>
        </div>
      </form>
      <style>
        .form-example {
          display: flex;
          align-items: center;
        }
        .modus-wc-input-label {
          padding-inline-end: 8px;
        }
      </style>
    `};var i,t,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-textarea
        aria-describedby=\${ifDefined(args['aria-describedby'])}
        aria-label=\${args['aria-label']}
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
        input-dir=\${ifDefined(args['input-dir'])}
        input-id=\${ifDefined(args['input-id'])}
        ?input-spellcheck=\${ifDefined(args['input-spellcheck'])}
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
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,s,o;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <form action="" class="form-example" method="get">
        <div class="form-example">
          <modus-wc-input-label
            for-id="textarea-input"
            label-text="Example textarea"
          ></modus-wc-input-label>
          <modus-wc-textarea
            aria-label="Example textarea"
            input-id="textarea-input"
            name="example-textarea"
          ></modus-wc-textarea>
        </div>
      </form>
      <style>
        .form-example {
          display: flex;
          align-items: center;
        }
        .modus-wc-input-label {
          padding-inline-end: 8px;
        }
      </style>
    \`;
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const $=["Template","TextareaWithLabel"];export{n as Template,r as TextareaWithLabel,$ as __namedExportsOrder,b as default};
