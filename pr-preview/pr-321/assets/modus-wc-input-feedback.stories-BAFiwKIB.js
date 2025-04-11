import{k as u}from"./lit-element-HWJBnAmk.js";import{t as s}from"./if-defined-C-SyXhla.js";const f={title:"Components/Forms/Input Feedback",component:"modus-wc-input-feedback",args:{level:"error",message:"Uh oh. You done messed up.",size:"md"},argTypes:{level:{control:{type:"select"},options:["error","info","success","warning"]},size:{control:{type:"select"},options:["sm","md","lg"]}}},i={render:e=>u`
<modus-wc-input-feedback
  custom-class=${s(e["custom-class"])}
  icon=${s(e.icon)}
  level=${e.level}
  message=${s(e.message)}
  size=${s(e.size)}
>
</modus-wc-input-feedback>
    `},o={...i},c={render:e=>u`
<modus-wc-input-feedback
  custom-class=${s(e["custom-class"])}
  icon='calendar_check'
  level='success'
  message='Event added to calendar!'
  size=${s(e.size)}
>
</modus-wc-input-feedback>
    `};var n,t,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var a,d,m;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-input-feedback
  custom-class=\${ifDefined(args['custom-class'])}
  icon='calendar_check'
  level='success'
  message='Event added to calendar!'
  size=\${ifDefined(args.size)}
>
</modus-wc-input-feedback>
    \`;
  }
}`,...(m=(d=c.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const k=["Default","WithCustomModusIcon"];export{o as Default,c as WithCustomModusIcon,k as __namedExportsOrder,f as default};
