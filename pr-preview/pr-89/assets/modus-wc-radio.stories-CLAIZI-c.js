import{w as m}from"./decorator-Dt3Huotz.js";import{k as u}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const y={title:"Components/Forms/Radio",component:"modus-wc-radio",args:{"a11y-label":"Radio","custom-class":"",disabled:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>u`
      <modus-wc-radio
        a11y-describedby=${a(e["a11y-describedby"])}
        a11y-label=${e["a11y-label"]}
        a11y-labelledby=${a(e["a11y-labelledby"])}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        input-dir=${a(e["input-dir"])}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        name=${a(e.name)}
        ?required=${e.required}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-radio>
    `},n={render:()=>u`
<style>
  .form-control {
    display: flex;
  }
  modus-wc-radio {
    padding-inline-end: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-radio
      a11y-label="Example radio 1"
      input-id="radio-input-1"
      name="example-radio-group"
      value="true"
    ></modus-wc-radio>
    <modus-wc-input-label
      for-id="radio-input-1"
      label-text="Radio Item One"
    ></modus-wc-input-label>
  </div>
  <div class="form-control">
    <modus-wc-radio
      a11y-label="Example radio 2"
      input-id="radio-input-2"
      name="example-radio-group"
    ></modus-wc-radio>
    <modus-wc-input-label
      for-id="radio-input-2"
      label-text="Radio Item Two"
    ></modus-wc-input-label>
  </div>
</form>
    `};var d,o,r;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-radio
        a11y-describedby=\${ifDefined(args['a11y-describedby'])}
        a11y-label=\${args['a11y-label']}
        a11y-labelledby=\${ifDefined(args['a11y-labelledby'])}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-dir=\${ifDefined(args['input-dir'])}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-radio>
    \`;
  }
}`,...(r=(o=i.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var t,l,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return html\`
<style>
  .form-control {
    display: flex;
  }
  modus-wc-radio {
    padding-inline-end: 8px;
  }
</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-radio
      a11y-label="Example radio 1"
      input-id="radio-input-1"
      name="example-radio-group"
      value="true"
    ></modus-wc-radio>
    <modus-wc-input-label
      for-id="radio-input-1"
      label-text="Radio Item One"
    ></modus-wc-input-label>
  </div>
  <div class="form-control">
    <modus-wc-radio
      a11y-label="Example radio 2"
      input-id="radio-input-2"
      name="example-radio-group"
    ></modus-wc-radio>
    <modus-wc-input-label
      for-id="radio-input-2"
      label-text="Radio Item Two"
    ></modus-wc-input-label>
  </div>
</form>
    \`;
  }
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const w=["Template","RadioWithLabel"];export{n as RadioWithLabel,i as Template,w as __namedExportsOrder,y as default};
