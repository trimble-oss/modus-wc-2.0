const r={title:"Components/Atoms/Typography",component:"modus-wc-typography",tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},bodySize:{control:{type:"select"},options:["standard","small","mini"]},customClass:{control:"text"},variant:{control:{type:"select"},options:["body","h1","h2","h3","h4","h5","h6","p"]},weight:{control:{type:"select"},options:["regular","semibold","bold"]},textCase:{control:{type:"select"},options:["sentence","title","uppercase"]},content:{control:"text"}}},s={render:e=>`
      <modus-wc-typography 
        aria-label="${e.ariaLabel}"
        body-size="${e.bodySize}"
        custom-class="${e.customClass}"
        variant="${e.variant}"
        weight="${e.weight}"
        text-case="${e.textCase}"
      >${e.content}</modus-wc-typography>
    `},t={...s,args:{ariaLabel:"Example typography",bodySize:"standard",content:"The quick brown fox jumps over the lazy dog",customClass:"",textCase:"sentence",variant:"p",weight:"regular"}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template,
  args: {
    ariaLabel: 'Example typography',
    bodySize: 'standard',
    content: 'The quick brown fox jumps over the lazy dog',
    customClass: '',
    textCase: 'sentence',
    variant: 'p',
    weight: 'regular'
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,r as default};
