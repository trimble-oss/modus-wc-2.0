import{k as x}from"./lit-element-DVRzCIa_.js";import{t as r}from"./if-defined-1ipA9LQg.js";const $={title:"Components/Forms/Input Label",component:"modus-wc-input-label",args:{"label-text":"Label",required:!1},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}}},o={render:e=>x`
    <modus-wc-input-label
      for-id=${r(e["for-id"])}
      custom-class=${r(e["custom-class"])}
      label-text=${r(e["label-text"])}
      ?required=${e.required}
      size=${e.size}
    ></modus-wc-input-label>
  `},t={...o},a={...o,args:{required:!0}},s={...o,args:{"label-text":"Very Long Label With Lots Of Words",required:!0,"for-id":"textarea-input"},render:e=>x`
    <modus-wc-input-label
      for-id=${r(e["for-id"])}
      custom-class=${r(e["custom-class"])}
      label-text=${r(e["label-text"])}
      ?required=${e.required}
      size=${r(e.size)}
    ></modus-wc-input-label>
    <modus-wc-textarea id="textarea-input" required></modus-wc-textarea>
  `};var i,u,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(n=(u=t.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    required: true
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  args: {
    'label-text': 'Very Long Label With Lots Of Words',
    required: true,
    'for-id': 'textarea-input'
  },
  render: args => html\`
    <modus-wc-input-label
      for-id=\${ifDefined(args['for-id'])}
      custom-class=\${ifDefined(args['custom-class'])}
      label-text=\${ifDefined(args['label-text'])}
      ?required=\${args['required']}
      size=\${ifDefined(args.size)}
    ></modus-wc-input-label>
    <modus-wc-textarea id="textarea-input" required></modus-wc-textarea>
  \`
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const w=["Default","Required","RequiredTextarea"];export{t as Default,a as Required,s as RequiredTextarea,w as __namedExportsOrder,$ as default};
