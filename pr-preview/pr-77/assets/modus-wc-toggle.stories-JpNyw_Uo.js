import{w as u}from"./decorator-Dt3Huotz.js";import{k as m}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const f={title:"Components/Forms/Toggle",component:"modus-wc-toggle",args:{"aria-label":"Toggle","custom-class":"",disabled:!1,indeterminate:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[u],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>m`
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
      <form action="" class="form-example" method="get">
        <div class="form-example">
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
      <style>
        .form-example {
          display: flex;
        }
        modus-wc-toggle {
          padding-inline-end: 8px;
        }
      </style>
    `};var t,l,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(l=n.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var o,d,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <form action="" class="form-example" method="get">
        <div class="form-example">
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
      <style>
        .form-example {
          display: flex;
        }
        modus-wc-toggle {
          padding-inline-end: 8px;
        }
      </style>
    \`;
  }
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const $=["Template","ToggleWithLabel"];export{n as Template,i as ToggleWithLabel,$ as __namedExportsOrder,f as default};
