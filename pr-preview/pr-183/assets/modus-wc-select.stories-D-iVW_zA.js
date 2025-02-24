import{w as u}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const p=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],x={title:"Components/Forms/Select",component:"modus-wc-select",args:{bordered:!0,disabled:!1,label:"Label",options:p,size:"md",value:""},argTypes:{"input-aria-invalid":{control:{type:"select"},options:["true","false"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},t={render:e=>c`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=${e.bordered}
      custom-class=${n(e["custom-class"])}
      ?disabled=${e.disabled}
      input-aria-invalid=${n(e["input-aria-invalid"])}
      input-id=${n(e["input-id"])}
      input-tab-index=${n(e["input-tab-index"])}
      label=${n(e.label)}
      name=${n(e.name)}
      .options=${e.options}
      ?required=${e.required}
      size=${n(e.size)}
      .value=${e.value}
    ></modus-wc-select>
  `},i={render:()=>c`
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
      for-id="select-input"
      label-text="Example select"
    ></modus-wc-input-label>
    <modus-wc-select
      aria-label="Example select"
      input-id="select-input"
      name="example-select-input"
      .options=${p}
    ></modus-wc-select>
  </div>
</form>
    `};var l,a,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
      aria-label="Select input"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-id=\${ifDefined(args['input-id'])}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      label=\${ifDefined(args.label)}
      name=\${ifDefined(args.name)}
      .options=\${args.options}
      ?required=\${args.required}
      size=\${ifDefined(args.size)}
      .value=\${args.value}
    ></modus-wc-select>
  \`
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var o,r,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
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
      for-id="select-input"
      label-text="Example select"
    ></modus-wc-input-label>
    <modus-wc-select
      aria-label="Example select"
      input-id="select-input"
      name="example-select-input"
      .options=\${options}
    ></modus-wc-select>
  </div>
</form>
    \`;
  }
}`,...(d=(r=i.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const v=["Default","SelectWithLabel"];export{t as Default,i as SelectWithLabel,v as __namedExportsOrder,x as default};
