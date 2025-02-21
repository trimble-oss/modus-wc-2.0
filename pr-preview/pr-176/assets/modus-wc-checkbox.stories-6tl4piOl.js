import{w as s}from"./decorator-Dt3Huotz.js";import{k as d}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const b={title:"Components/Forms/Checkbox",component:"modus-wc-checkbox",args:{"aria-label":"Checkbox","custom-class":"",disabled:!1,indeterminate:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{"input-dir":{control:{type:"select"},options:["ltr","rtl","auto"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[s],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>d`
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
        label=${a(e.label)}
        name=${a(e.name)}
        ?required=${e.required}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-checkbox>
    `};var n,r,t;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
        label=\${ifDefined(args.label)}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-checkbox>
    \`;
  }
}`,...(t=(r=i.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const m=["Template"];export{i as Template,m as __namedExportsOrder,b as default};
