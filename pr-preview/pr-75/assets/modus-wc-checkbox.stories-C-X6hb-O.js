import{w as m}from"./decorator-Dt3Huotz.js";import{k as t}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const p={title:"Components/Atoms/Checkbox",component:"modus-wc-checkbox",args:{"aria-label":"Checkbox","custom-class":"",disabled:!1,indeterminate:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"checkbox-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["checkboxBlur","checkboxChange","checkboxFocus"]}}},c={render:e=>t`
      <modus-wc-checkbox
        aria-describedby=${a(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        aria-labelledby=${a(e["aria-labelledby"])}
        checkbox-dir=${a(e["checkbox-dir"])}
        checkbox-id=${a(e["checkbox-id"])}
        checkbox-tab-index=${a(e["checkbox-tab-index"])}
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        .indeterminate=${e.indeterminate}
        name=${a(e.name)}
        ?required=${e.required}
        size=${e.size}
        .value=${e.value}
      ></modus-wc-checkbox>
    `},o={render:()=>t`
      <form action="" class="form-example" method="get">
        <div class="form-example">
          <modus-wc-checkbox
            aria-label="Example checkbox"
            checkbox-id="checkbox-input"
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
    `};var n,i,r;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-checkbox
        aria-describedby=\${ifDefined(args['aria-describedby'])}
        aria-label=\${args['aria-label']}
        aria-labelledby=\${ifDefined(args['aria-labelledby'])}
        checkbox-dir=\${ifDefined(args['checkbox-dir'])}
        checkbox-id=\${ifDefined(args['checkbox-id'])}
        checkbox-tab-index=\${ifDefined(args['checkbox-tab-index'])}
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        .indeterminate=\${args.indeterminate}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${args.size}
        .value=\${args.value}
      ></modus-wc-checkbox>
    \`;
  }
}`,...(r=(i=c.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var d,s,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <form action="" class="form-example" method="get">
        <div class="form-example">
          <modus-wc-checkbox
            aria-label="Example checkbox"
            checkbox-id="checkbox-input"
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const k=["Template","CheckboxWithLabel"];export{o as CheckboxWithLabel,c as Template,k as __namedExportsOrder,p as default};
