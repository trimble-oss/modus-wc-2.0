const n={title:"Components/Atoms/Badge",component:"modus-wc-badge",tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},color:{control:{type:"select"},options:["primary","secondary","tertiary","success","warning","danger"]},content:{control:"text"},customClass:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},type:{control:{type:"select"},options:["filled","text","counter"]}}},r={render:e=>`
      <modus-wc-badge 
        aria-label="${e.ariaLabel}"
        color="${e.color}"
        content="${e.content}"
        custom-class="${e.customClass}"
        size="${e.size}"
        type="${e.type}"
      ></modus-wc-badge>
    `},t={...r,args:{ariaLabel:"Example badge",color:"primary",content:"Badge",customClass:"",size:"medium",type:"filled"}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template,
  args: {
    ariaLabel: 'Example badge',
    color: 'primary',
    content: 'Badge',
    customClass: '',
    size: 'medium',
    type: 'filled'
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,n as default};
