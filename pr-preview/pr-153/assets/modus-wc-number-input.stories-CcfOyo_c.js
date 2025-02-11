import{w as m}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const $={title:"Components/Forms/Number Input",component:"modus-wc-number-input",args:{"aria-label":"Enter your age",bordered:!0,disabled:!1,"input-mode":"numeric",placeholder:"Type your age here",size:"md",type:"number",value:""},argTypes:{"auto-complete":{control:{type:"inline-radio"},options:["on","off"]},"input-aria-invalid":{control:{type:"inline-radio"},options:["true","false"]},"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},"input-mode":{control:{type:"inline-radio"},options:["decimal","none","numeric"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["number","range"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>p`
    <modus-wc-number-input
      aria-describedby=${n(e["aria-describedby"])}
      aria-label=${e["aria-label"]}
      auto-complete=${n(e["auto-complete"])}
      ?bordered=${e.bordered}
      custom-class=${n(e["custom-class"])}
      ?disabled=${e.disabled}
      input-aria-invalid=${n(e["input-aria-invalid"])}
      input-dir=${n(e["input-dir"])}
      input-id=${n(e["input-id"])}
      input-mode=${e["input-mode"]}
      input-tab-index=${n(e["input-tab-index"])}
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
  `},r={render:()=>p`
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
      for-id="number-input"
      label-text="Example number input"
    ></modus-wc-input-label>
    <modus-wc-number-input
      aria-label="Example number input"
      input-id="number-input"
      name="example-number-input"
    ></modus-wc-number-input>
  </div>
</form>
    `};var t,a,o;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-number-input
      aria-describedby=\${ifDefined(args['aria-describedby'])}
      aria-label=\${args['aria-label']}
      auto-complete=\${ifDefined(args['auto-complete'])}
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-dir=\${ifDefined(args['input-dir'])}
      input-id=\${ifDefined(args['input-id'])}
      input-mode=\${args['input-mode']}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
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
}`,...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var d,u,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      for-id="number-input"
      label-text="Example number input"
    ></modus-wc-input-label>
    <modus-wc-number-input
      aria-label="Example number input"
      input-id="number-input"
      name="example-number-input"
    ></modus-wc-number-input>
  </div>
</form>
    \`;
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const y=["Template","NumberInputWithLabel"];export{r as NumberInputWithLabel,i as Template,y as __namedExportsOrder,$ as default};
