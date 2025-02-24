import{w as a}from"./decorator-Dt3Huotz.js";import{k as l}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const c={title:"Components/Forms/Number Input",component:"modus-wc-number-input",args:{bordered:!0,disabled:!1,"input-mode":"numeric",label:"Label",size:"md",type:"number",value:""},argTypes:{"auto-complete":{control:{type:"select"},options:["on","off"]},currency:{name:"currency",description:"The currency symbol.\nNote: Follow the currency codes from [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) for the `currencySymbol` property.\n",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},"input-aria-invalid":{control:{type:"select"},options:["true","false"]},"input-mode":{control:{type:"select"},options:["decimal","none","numeric"]},locale:{name:"locale",description:"The locale of the selected currency. Note: Follow the locale codes from [BCP 47](https://tools.ietf.org/html/bcp47) for the `locale` property.",table:{type:{summary:"string"}}},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["number","range"]}},decorators:[a],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},t={render:e=>l`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=${n(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${n(e["custom-class"])}
      currency=${n(e.currency)}
      ?disabled=${e.disabled}
      input-aria-invalid=${n(e["input-aria-invalid"])}
      input-id=${n(e["input-id"])}
      input-mode=${e["input-mode"]}
      input-tab-index=${n(e["input-tab-index"])}
      label=${n(e.label)}
      locale=${n(e.locale)}
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
  `};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-number-input
      aria-label="Number input"
      auto-complete=\${ifDefined(args['auto-complete'])}
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      currency=\${ifDefined(args['currency'])}
      ?disabled=\${args.disabled}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-id=\${ifDefined(args['input-id'])}
      input-mode=\${args['input-mode']}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      label=\${ifDefined(args.label)}
      locale=\${ifDefined(args['locale'])}
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,c as default};
