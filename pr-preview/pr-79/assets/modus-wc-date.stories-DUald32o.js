import{w as m}from"./decorator-Dt3Huotz.js";import{k as u}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const $={title:"Components/Forms/Date",component:"modus-wc-date",args:{"aria-label":"Date picker",bordered:!0,"custom-class":"",disabled:!1,"read-only":!1,required:!1,size:"md",value:""},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},n={render:e=>u`
      <modus-wc-date
        aria-describedby=${a(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        aria-labelledby=${a(e["aria-labelledby"])}
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
    `},i={render:()=>u`
      <form action="" method="get">
        <div class="form-control">
          <modus-wc-input-label
            for-id="date-input"
            label-text="Example date"
          ></modus-wc-input-label>
          <modus-wc-date
            aria-label="Example date picker"
            input-id="date-input"
            name="example-date"
          ></modus-wc-date>
        </div>
      </form>
      <style>
        .form-control {
          display: flex;
          align-items: center;
        }
        .modus-wc-input-label {
          padding-inline-end: 8px;
        }
      </style>
    `};var d,r,t;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-date
        aria-describedby=\${ifDefined(args['aria-describedby'])}
        aria-label=\${args['aria-label']}
        aria-labelledby=\${ifDefined(args['aria-labelledby'])}
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
}`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var l,o,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <form action="" method="get">
        <div class="form-control">
          <modus-wc-input-label
            for-id="date-input"
            label-text="Example date"
          ></modus-wc-input-label>
          <modus-wc-date
            aria-label="Example date picker"
            input-id="date-input"
            name="example-date"
          ></modus-wc-date>
        </div>
      </form>
      <style>
        .form-control {
          display: flex;
          align-items: center;
        }
        .modus-wc-input-label {
          padding-inline-end: 8px;
        }
      </style>
    \`;
  }
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const x=["Template","DateWithLabel"];export{i as DateWithLabel,n as Template,x as __namedExportsOrder,$ as default};
