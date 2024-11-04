const n={title:"Components/Atoms/Divider",component:"modus-wc-divider",tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},customClass:{control:"text"},daisyClass:{control:"text"},content:{control:"text"}}},r={render:t=>`
      <modus-wc-divider 
        aria-label="${t.ariaLabel}"
        custom-class="${t.customClass}"
        daisy-class="${t.daisyClass}"
        content="${t.content}"
      ></modus-wc-divider>
    `},s={...r,args:{ariaLabel:"Horizontal divider",content:"",customClass:"",daisyClass:""}};var a,e,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template,
  args: {
    ariaLabel: 'Horizontal divider',
    content: '',
    customClass: '',
    daisyClass: ''
  }
}`,...(o=(e=s.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const c=["Default"];export{s as Default,c as __namedExportsOrder,n as default};
