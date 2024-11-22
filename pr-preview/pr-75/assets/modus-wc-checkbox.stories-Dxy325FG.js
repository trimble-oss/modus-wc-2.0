import{w as m}from"./decorator-Dt3Huotz.js";import{k as l}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const f={title:"Components/Atoms/Checkbox",component:"modus-wc-checkbox",args:{"aria-label":"Checkbox","custom-class":"",disabled:!1,indeterminate:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>l`
      <modus-wc-checkbox
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
        size=${e.size}
        .value=${e.value}
      ></modus-wc-checkbox>
    `},i={render:()=>l`
      <form action="" class="form-example" method="get">
        <div class="form-example">
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
      <style>
        .form-example {
          display: flex;
        }
        modus-wc-checkbox {
          padding-inline-end: 8px;
        }
      </style>
    `};var r,t,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        size=\${args.size}
        .value=\${args.value}
      ></modus-wc-checkbox>
    \`;
  }
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var c,d,s;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <form action="" class="form-example" method="get">
        <div class="form-example">
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
      <style>
        .form-example {
          display: flex;
        }
        modus-wc-checkbox {
          padding-inline-end: 8px;
        }
      </style>
    \`;
  }
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const h=["Template","CheckboxWithLabel"];export{i as CheckboxWithLabel,n as Template,h as __namedExportsOrder,f as default};
