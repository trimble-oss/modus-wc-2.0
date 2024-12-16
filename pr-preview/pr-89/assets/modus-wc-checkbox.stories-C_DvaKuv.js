import{w as m}from"./decorator-Dt3Huotz.js";import{k as l}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const f={title:"Components/Forms/Checkbox",component:"modus-wc-checkbox",args:{"a11y-label":"Checkbox","custom-class":"",disabled:!1,indeterminate:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>l`
      <modus-wc-checkbox
        a11y-describedby=${n(e["a11y-describedby"])}
        a11y-label=${e["a11y-label"]}
        a11y-labelledby=${n(e["a11y-labelledby"])}
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
      a11y-label="Example checkbox"
      input-id="checkbox-input"
      name="example-checkbox"
    ></modus-wc-checkbox>
    <modus-wc-input-label
      for-id="checkbox-input"
      label-text="Example checkbox"
    ></modus-wc-input-label>
  </div>
</form>
    `};var o,t,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-checkbox
        a11y-describedby=\${ifDefined(args['a11y-describedby'])}
        a11y-label=\${args['a11y-label']}
        a11y-labelledby=\${ifDefined(args['a11y-labelledby'])}
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
}`,...(c=(t=i.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var r,d,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      a11y-label="Example checkbox"
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
