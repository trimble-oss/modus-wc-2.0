import{w as l}from"./decorator-Dt3Huotz.js";import{k as s}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const c={title:"Components/Forms/Textarea",component:"modus-wc-textarea",args:{bordered:!0,"custom-class":"",disabled:!1,label:"Label",readonly:!1,required:!1,size:"md",value:""},argTypes:{"input-aria-invalid":{control:{type:"select"},options:["grammar","spelling","true","false"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[l],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>s`
      <modus-wc-textarea
        aria-label="Textarea input"
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        input-aria-invalid=${a(e["input-aria-invalid"])}
        input-id=${a(e["input-id"])}
        ?input-spellcheck=${e["input-spellcheck"]}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        max-length=${a(e["max-length"])}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?readonly=${e.readonly}
        ?required=${e.required}
        rows=${a(e.rows)}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-textarea>
    `};var i,r,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-textarea
        aria-label="Textarea input"
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
        input-id=\${ifDefined(args['input-id'])}
        ?input-spellcheck=\${args['input-spellcheck']}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
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
}`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const m=["Default"];export{n as Default,m as __namedExportsOrder,c as default};
