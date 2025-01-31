import{w as u}from"./decorator-Dt3Huotz.js";import{k as m}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const f={title:"Components/Forms/Toggle",component:"modus-wc-toggle",args:{"aria-label":"Toggle","custom-class":"",disabled:!1,indeterminate:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},t={render:e=>m`
      <modus-wc-toggle
        aria-describedby=${a(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        aria-labelledby=${a(e["aria-labelledby"])}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        .indeterminate=${e.indeterminate}
        input-dir=${a(e["input-dir"])}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        name=${a(e.name)}
        ?required=${e.required}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-toggle>
    `},i={render:()=>m`
<style>
  .form-control {
    display: flex;
  }
  modus-wc-toggle {
    padding-inline-end: 8px;
  }
  modus-wc-input-label {
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 400;
  }
  [data-theme='modus-classic-light'] .modus-wc-input-label{
      color: #464B52;
  }
  [data-theme='modus-classic-dark'] .modus-wc-input-label{
      color: #B7B9C3;
  }

</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-toggle
      aria-label="Example toggle"
      input-id="toggle-input"
      name="example-toggle"
    ></modus-wc-toggle>
    <modus-wc-input-label
      for-id="toggle-input"
      label-text="Example toggle"
    ></modus-wc-input-label>
  </div>
</form>
    `};var l,o,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-toggle
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
      ></modus-wc-toggle>
    \`;
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var r,s,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return html\`
<style>
  .form-control {
    display: flex;
  }
  modus-wc-toggle {
    padding-inline-end: 8px;
  }
  modus-wc-input-label {
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 400;
  }
  [data-theme='modus-classic-light'] .modus-wc-input-label{
      color: #464B52;
  }
  [data-theme='modus-classic-dark'] .modus-wc-input-label{
      color: #B7B9C3;
  }

</style>
<form action="" method="get">
  <div class="form-control">
    <modus-wc-toggle
      aria-label="Example toggle"
      input-id="toggle-input"
      name="example-toggle"
    ></modus-wc-toggle>
    <modus-wc-input-label
      for-id="toggle-input"
      label-text="Example toggle"
    ></modus-wc-input-label>
  </div>
</form>
    \`;
  }
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const $=["Template","ToggleWithLabel"];export{t as Template,i as ToggleWithLabel,$ as __namedExportsOrder,f as default};
