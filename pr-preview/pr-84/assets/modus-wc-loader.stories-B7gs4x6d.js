import{k as n}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const c={title:"Components/Loader",component:"modus-wc-loader",args:{"aria-label":"Loading spinner",color:"primary","custom-class":"",size:"md",variant:"spinner"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","tertiary"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg","xl"]},variant:{control:{type:"inline-radio"},options:["ball","bars","dots","infinity","ring","spinner"]}},parameters:{layout:"padded"}},a={render:r=>n`
      <modus-wc-loader
        aria-label="${t(r["aria-label"])}"
        color="${r.color}"
        custom-class="${r["custom-class"]}"
        size="${r.size}"
        variant="${r.variant}"
      ></modus-wc-loader>
    `};var o,e,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-loader
        aria-label="\${ifDefined(args['aria-label'])}"
        color="\${args.color}"
        custom-class="\${args['custom-class']}"
        size="\${args.size}"
        variant="\${args.variant}"
      ></modus-wc-loader>
    \`;
  }
}`,...(s=(e=a.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const d=["Default"];export{a as Default,d as __namedExportsOrder,c as default};
