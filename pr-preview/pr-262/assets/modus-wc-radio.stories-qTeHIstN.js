import{w as t}from"./decorator-Dt3Huotz.js";import{k as d}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const c={title:"Components/Forms/Radio",component:"modus-wc-radio",args:{"custom-class":"",disabled:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[t],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},i={render:e=>d`
      <modus-wc-radio
        aria-label="Radio"
        custom-class=${a(e["custom-class"])}
        ?disabled=${e.disabled}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        label=${a(e.label)}
        name=${a(e.name)}
        ?required=${e.required}
        size=${a(e.size)}
        .value=${e.value}
      ></modus-wc-radio>
    `};var s,n,r;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-radio
        aria-label="Radio"
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        .value=\${args.value}
      ></modus-wc-radio>
    \`;
  }
}`,...(r=(n=i.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const p=["Default"];export{i as Default,p as __namedExportsOrder,c as default};
