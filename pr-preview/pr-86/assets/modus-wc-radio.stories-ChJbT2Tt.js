import{w as m}from"./decorator-Dt3Huotz.js";import{k as u}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const w={title:"Components/Forms/Radio",component:"modus-wc-radio",args:{"aria-label":"Radio","custom-class":"",disabled:!1,name:"",required:!1,size:"md",value:!0},argTypes:{"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]}},decorators:[m],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>u`
      <modus-wc-radio
        aria-describedby=${a(e["aria-describedby"])}
        aria-label=${e["aria-label"]}
        aria-labelledby=${a(e["aria-labelledby"])}
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
      <form action="" method="get">
        <div class="form-control">
          <modus-wc-radio
            aria-label="Example radio 1"
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
            aria-label="Example radio 2"
            input-id="radio-input-2"
            name="example-radio-group"
          ></modus-wc-radio>
          <modus-wc-input-label
            for-id="radio-input-2"
            label-text="Radio Item Two"
          ></modus-wc-input-label>
        </div>
      </form>
      <style>
        .form-control {
          display: flex;
        }
        modus-wc-radio {
          padding-inline-end: 8px;
        }
      </style>
    `};var r,d,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-radio
        aria-describedby=\${ifDefined(args['aria-describedby'])}
        aria-label=\${args['aria-label']}
        aria-labelledby=\${ifDefined(args['aria-labelledby'])}
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
}`,...(o=(d=i.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var t,l,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <form action="" method="get">
        <div class="form-control">
          <modus-wc-radio
            aria-label="Example radio 1"
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
            aria-label="Example radio 2"
            input-id="radio-input-2"
            name="example-radio-group"
          ></modus-wc-radio>
          <modus-wc-input-label
            for-id="radio-input-2"
            label-text="Radio Item Two"
          ></modus-wc-input-label>
        </div>
      </form>
      <style>
        .form-control {
          display: flex;
        }
        modus-wc-radio {
          padding-inline-end: 8px;
        }
      </style>
    \`;
  }
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const $=["Template","RadioWithLabel"];export{n as RadioWithLabel,i as Template,$ as __namedExportsOrder,w as default};
