import{k as r}from"./lit-element-DVRzCIa_.js";const p={title:"Components/Atoms/Typography",component:"modus-wc-typography",argTypes:{"body-size":{control:{type:"inline-radio"},options:["standard","small","mini"]},variant:{control:{type:"select"},options:["body","h1","h2","h3","h4","h5","h6","p"]},weight:{control:{type:"inline-radio"},options:["regular","semibold","bold"]},"text-case":{control:{type:"inline-radio"},options:["sentence","title","uppercase"]}}},s={render:e=>r`
      <modus-wc-typography
        aria-label="${e["aria-label"]}"
        body-size="${e["body-size"]}"
        ?custom-class="${e["custom-class"]}"
        variant="${e.variant}"
        weight="${e.weight}"
        text-case="${e["text-case"]}"
        >${e.content}</modus-wc-typography
      >
    `},t={...s,args:{"aria-label":"Example typography","body-size":"standard",content:"The quick brown fox jumps over the lazy dog","text-case":"sentence",variant:"p",weight:"regular"}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template,
  args: {
    'aria-label': 'Example typography',
    'body-size': 'standard',
    content: 'The quick brown fox jumps over the lazy dog',
    'text-case': 'sentence',
    variant: 'p',
    weight: 'regular'
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,p as default};
