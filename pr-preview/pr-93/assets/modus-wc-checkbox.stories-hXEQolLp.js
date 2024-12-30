import{w as m}from"./decorator-Dt3Huotz.js";import{k as l}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const f={title:"Components/Forms/Checkbox",component:"modus-wc-checkbox",args:{"aria-label":"Checkbox","custom-class":"",disabled:!1,indeterminate:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>l`
      <modus-wc-checkbox
        aria-describedby=${n(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        aria-labelledby=${n(e["aria-labelledby"])}
        custom-class=${n(e["custom-class"])}
        ?disabled=${e.disabled}
        .indeterminate=${e.indeterminate}
        input-dir=${n(e["input-dir"])}
        input-id=${n(e["input-id"])}
        input-tab-index=${n(e["input-tab-index"])}
        name=${n(e.name)}
        ?required=${e.required}
        size=${n(e.size)}
        .value=${e.value}
      ></modus-wc-checkbox>
    `},a={render:()=>l`
<style>
  .form-control {
    display: flex;
  }
  modus-wc-checkbox {
    padding-inline-end: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-checkbox
      aria-label="Example checkbox"
      input-id="checkbox-input"
      name="example-checkbox"
    ></modus-wc-checkbox>
    <modus-wc-input-label
      for-id="checkbox-input"
      label-text="Example checkbox"
    ></modus-wc-input-label>
  </div>
</form>
    `};var r,o,t;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-checkbox
        aria-describedby=\${ifDefined(args['aria-describedby'])}
        aria-label=\${args['aria-label']}
        aria-labelledby=\${ifDefined(args['aria-labelledby'])}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        .indeterminate=\${args.indeterminate}
        input-dir=\${ifDefined(args['input-dir'])}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-checkbox>
    \`;
  }
}`,...(t=(o=i.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var c,d,s;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
<style>
  .form-control {
    display: flex;
  }
  modus-wc-checkbox {
    padding-inline-end: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-checkbox
      aria-label="Example checkbox"
      input-id="checkbox-input"
      name="example-checkbox"
    ></modus-wc-checkbox>
    <modus-wc-input-label
      for-id="checkbox-input"
      label-text="Example checkbox"
    ></modus-wc-input-label>
  </div>
</form>
    \`;
  }
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const h=["Template","CheckboxWithLabel"];export{a as CheckboxWithLabel,i as Template,h as __namedExportsOrder,f as default};
