const r={title:"Components/Atoms/Badge",component:"modus-wc-badge",tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},content:{control:"text"},customClass:{control:"text"},size:{control:{type:"select"},options:["sm","md","lg"]},type:{control:{type:"select"},options:["counter","filled","text"]}}},n={render:e=>`
      <modus-wc-badge 
        aria-label="${e.ariaLabel}"
        color="${e.color}"
        content="${e.content}"
        custom-class="${e.customClass}"
        size="${e.size}"
        type="${e.type}"
      ></modus-wc-badge>
    `},t={...n,args:{ariaLabel:"Example badge",color:"primary",content:"Badge",customClass:"",size:"md",type:"filled"}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template,
  args: {
    ariaLabel: 'Example badge',
    color: 'primary',
    content: 'Badge',
    customClass: '',
    size: 'md',
    type: 'filled'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,r as default};
