import{w as p}from"./decorator-Dt3Huotz.js";import{k as c}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const u=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],x={title:"Components/Forms/Select",component:"modus-wc-select",args:{"aria-label":"Select a range",bordered:!0,disabled:!1,options:u,size:"md",value:""},argTypes:{"input-aria-invalid":{control:{type:"inline-radio"},options:["true","false"]},"input-dir":{control:{type:"inline-radio"},options:["ltr","rtl","auto"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]}},decorators:[p],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>c`
    <modus-wc-select
      aria-describedby=${n(e["aria-describedby"])}
      aria-label=${e["aria-label"]}
      ?auto-focus=${e["auto-focus"]}
      ?bordered=${e.bordered}
      custom-class=${n(e["custom-class"])}
      ?disabled=${e.disabled}
      input-aria-invalid=${n(e["input-aria-invalid"])}
      input-dir=${n(e["input-dir"])}
      input-id=${n(e["input-id"])}
      input-tab-index=${n(e["input-tab-index"])}
      name=${n(e.name)}
      .options=${e.options}
      ?required=${e.required}
      size=${n(e.size)}
      .value=${e.value}
    ></modus-wc-select>
  `},t={render:()=>c`
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
            .options=${u}
          ></modus-wc-select>
        </div>
      </form>
    `};var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-select
      aria-describedby=\${ifDefined(args['aria-describedby'])}
      aria-label=\${args['aria-label']}
      ?auto-focus=\${args['auto-focus']}
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      input-aria-invalid=\${ifDefined(args['input-aria-invalid'])}
      input-dir=\${ifDefined(args['input-dir'])}
      input-id=\${ifDefined(args['input-id'])}
      input-tab-index=\${ifDefined(args['input-tab-index'])}
      name=\${ifDefined(args.name)}
      .options=\${args.options}
      ?required=\${args.required}
      size=\${ifDefined(args.size)}
      .value=\${args.value}
    ></modus-wc-select>
  \`
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var o,r,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
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
}`,...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const v=["Template","SelectWithLabel"];export{t as SelectWithLabel,i as Template,v as __namedExportsOrder,x as default};
