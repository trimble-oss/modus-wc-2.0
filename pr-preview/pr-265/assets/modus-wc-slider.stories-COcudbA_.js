import{w as t}from"./decorator-Dt3Huotz.js";import{k as d}from"./lit-element-DVRzCIa_.js";import{t as i}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const c={title:"Components/Forms/Slider",component:"modus-wc-slider",args:{"custom-class":"",disabled:!1,label:"Label",name:"",required:!1,size:"md",value:!0},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[t],parameters:{actions:{handles:["inputBlur","inputChange","inputFocus"]}}},s={render:e=>d`
      <modus-wc-slider
        aria-label="Slider"
        custom-class=${i(e["custom-class"])}
        ?disabled=${e.disabled}
        input-id=${i(e["input-id"])}
        input-tab-index=${i(e["input-tab-index"])}
        label=${i(e.label)}
        max=${i(e.max)}
        min=${i(e.min)}
        name=${i(e.name)}
        ?required=${e.required}
        size=${i(e.size)}
        step=${i(e.step)}
        .value=${e.value}
      ></modus-wc-slider>
    `};var n,a,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-slider
        aria-label="Slider"
        custom-class=\${ifDefined(args['custom-class'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        label=\${ifDefined(args.label)}
        max=\${ifDefined(args.max)}
        min=\${ifDefined(args.min)}
        name=\${ifDefined(args.name)}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        step=\${ifDefined(args.step)}
        .value=\${args.value}
      ></modus-wc-slider>
    \`;
  }
}`,...(r=(a=s.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const p=["Default"];export{s as Default,p as __namedExportsOrder,c as default};
