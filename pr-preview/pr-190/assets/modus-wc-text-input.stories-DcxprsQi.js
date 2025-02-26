import{w as o}from"./decorator-Dt3Huotz.js";import{k as r}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const c={title:"Components/Forms/Text Input",component:"modus-wc-text-input",args:{bordered:!0,disabled:!1,"input-mode":"text","input-spellcheck":!1,label:"Label",size:"md",type:"text",value:""},argTypes:{"auto-capitalize":{control:{type:"select"},options:["off","none","on","sentences","words","characters"]},"auto-complete":{control:{type:"select"},options:["on","off"]},"input-aria-invalid":{control:{type:"select"},options:["grammar","spelling","true","false"]},"input-mode":{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["email","password","search","tel","text","url"]}},decorators:[o],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>r`
    <modus-wc-text-input
      aria-label="Text input"
      auto-capitalize=${t(e["auto-capitalize"])}
      auto-complete=${t(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${t(e["custom-class"])}
      ?disabled=${e.disabled}
      input-aria-invalid=${t(e["input-aria-invalid"])}
      input-id=${t(e["input-id"])}
      input-mode=${e["input-mode"]}
      ?input-spellcheck=${e["input-spellcheck"]}
      input-tab-index=${t(e["input-tab-index"])}
      label=${t(e.label)}
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
  `};var i,a,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-text-input
      aria-label="Text input"
      auto-capitalize=\${ifDefined(args['auto-capitalize'])}
      auto-complete=\${ifDefined(args['auto-complete'])}
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-id=\${ifDefined(args['input-id'])}
      input-mode=\${args['input-mode']}
      ?input-spellcheck=\${args['input-spellcheck']}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      label=\${ifDefined(args.label)}
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
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const m=["Default"];export{n as Default,m as __namedExportsOrder,c as default};
