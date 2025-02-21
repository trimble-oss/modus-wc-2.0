import{w as r}from"./decorator-Dt3Huotz.js";import{k as d}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const m={title:"Components/Forms/Number Input",component:"modus-wc-number-input",args:{bordered:!0,disabled:!1,"input-mode":"numeric",label:"Label",size:"md",type:"number",value:""},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},"input-mode":{control:{type:"select"},options:["decimal","none","numeric"]},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["number","range"]}},decorators:[r],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>d`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=${n(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${n(e["custom-class"])}
      ?disabled=${e.disabled}
      input-aria-invalid=${n(e["input-aria-invalid"])}
      input-id=${n(e["input-id"])}
      input-mode=${e["input-mode"]}
      input-tab-index=${n(e["input-tab-index"])}
      label=${n(e.label)}
      max=${n(e.max)}
      min=${n(e.min)}
      name=${n(e.name)}
      placeholder=${n(e.placeholder)}
      ?read-only=${e["read-only"]}
      ?required=${e.required}
      size=${n(e.size)}
      step=${n(e.step)}
      type=${n(e.type)}
      .value=${e.value}
    ></modus-wc-number-input>
  `};var t,a,o;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=\${ifDefined(args['auto-complete'])}
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-id=\${ifDefined(args['input-id'])}
      input-mode=\${args['input-mode']}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      label=\${ifDefined(args.label)}
      max=\${ifDefined(args.max)}
      min=\${ifDefined(args.min)}
      name=\${ifDefined(args.name)}
      placeholder=\${ifDefined(args.placeholder)}
      ?read-only=\${args['read-only']}
      ?required=\${args.required}
      size=\${ifDefined(args.size)}
      step=\${ifDefined(args.step)}
      type=\${ifDefined(args.type)}
      .value=\${args.value}
    ></modus-wc-number-input>
  \`
}`,...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const c=["Template"];export{i as Template,c as __namedExportsOrder,m as default};
