const n={title:"Components/Atoms/Button",component:"modus-wc-button",tags:["autodocs"],argTypes:{label:{control:"text"},ariaLabel:{control:"text"},customClass:{control:"text"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},pressed:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["filled","outlined","text"]},color:{control:{type:"select"},options:["primary","secondary","tertiary"]}}},s={render:e=>`
      <modus-wc-button 
          label="${e.label}"
          aria-label="${e.ariaLabel}"
          custom-class="${e.customClass}"
          size="${e.size}"
          type="${e.type}"
          variant="${e.variant}"
          color="${e.color}"
          ${e.disabled?"disabled":""}
          ${e.fullWidth?"full-width":""}
          ${e.pressed?"pressed":""}
        ></modus-wc-button>
    `},t={...s,args:{ariaLabel:"Click me button",color:"primary",customClass:"",disabled:!1,fullWidth:!1,label:"Click me",pressed:!1,size:"medium",type:"button",variant:"filled"}};var l,o,a;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template,
  args: {
    ariaLabel: 'Click me button',
    color: 'primary',
    customClass: '',
    disabled: false,
    fullWidth: false,
    label: 'Click me',
    pressed: false,
    size: 'medium',
    type: 'button',
    variant: 'filled'
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const r=["Default"];export{t as Default,r as __namedExportsOrder,n as default};
