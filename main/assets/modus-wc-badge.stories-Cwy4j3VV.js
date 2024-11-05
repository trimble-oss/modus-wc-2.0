import{k as n}from"./lit-element-DVRzCIa_.js";const c={title:"Components/Atoms/Badge",component:"modus-wc-badge",argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["counter","filled","text"]}}},s={render:e=>n`
      <modus-wc-badge
        aria-label="${e["aria-label"]}"
        color="${e.color}"
        content="${e.content}"
        ?custom-class="${e["custom-class"]}"
        size="${e.size}"
        type="${e.type}"
      ></modus-wc-badge>
    `},o={...s,args:{"aria-label":"Example badge",color:"primary",content:"Badge",size:"md",type:"filled"}};var t,a,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template,
  args: {
    'aria-label': 'Example badge',
    color: 'primary',
    content: 'Badge',
    size: 'md',
    type: 'filled'
  }
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const i=["Default"];export{o as Default,i as __namedExportsOrder,c as default};
