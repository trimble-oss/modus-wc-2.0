import{w as m}from"./decorator-Dt3Huotz.js";import{k as u}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const y={title:"Components/Forms/Date",component:"modus-wc-date",args:{"a11y-label":"Date picker",bordered:!0,"custom-class":"",disabled:!1,"read-only":!1,required:!1,size:"md",value:""},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>u`
      <modus-wc-date
        a11y-describedby=${a(e["a11y-describedby"])}
        a11y-label=${e["a11y-label"]}
        a11y-labelledby=${a(e["a11y-labelledby"])}
        ?auto-focus=${e["auto-focus"]}
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        input-dir=${a(e["input-dir"])}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        max=${a(e.max)}
        min=${a(e.min)}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-date>
    `},d={render:()=>u`
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
      for-id="date-input"
      label-text="Example date"
    ></modus-wc-input-label>
    <modus-wc-date
      a11y-label="Example date picker"
      input-id="date-input"
      name="example-date"
    ></modus-wc-date>
  </div>
</form>
    `};var t,i,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-date
        a11y-describedby=\${ifDefined(args['a11y-describedby'])}
        a11y-label=\${args['a11y-label']}
        a11y-labelledby=\${ifDefined(args['a11y-labelledby'])}
        ?auto-focus=\${args['auto-focus']}
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-dir=\${ifDefined(args['input-dir'])}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        max=\${ifDefined(args.max)}
        min=\${ifDefined(args.min)}
        name=\${ifDefined(args.name)}
        placeholder=\${ifDefined(args.placeholder)}
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-date>
    \`;
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var l,o,s;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      for-id="date-input"
      label-text="Example date"
    ></modus-wc-input-label>
    <modus-wc-date
      a11y-label="Example date picker"
      input-id="date-input"
      name="example-date"
    ></modus-wc-date>
  </div>
</form>
    \`;
  }
}`,...(s=(o=d.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const $=["Template","DateWithLabel"];export{d as DateWithLabel,n as Template,$ as __namedExportsOrder,y as default};
