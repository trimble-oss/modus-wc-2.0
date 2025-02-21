import{k as f}from"./lit-element-DVRzCIa_.js";import{t as r}from"./if-defined-1ipA9LQg.js";const q={title:"Components/Forms/Input Label",component:"modus-wc-input-label",args:{"label-text":"Label",required:!1},argTypes:{"label-dir":{control:{type:"select"},options:["ltr","rtl","auto"]},size:{control:{type:"select"},options:["sm","md","lg"]}}},o={render:e=>f`
    <modus-wc-input-label
      for-id=${r(e["for-id"])}
      custom-class=${r(e["custom-class"])}
      label-dir=${r(e["label-dir"])}
      label-text=${r(e["label-text"])}
      ?required=${e.required}
      size=${e.size}
    ></modus-wc-input-label>
  `},t={...o},a={...o,args:{required:!0}},s={...o,args:{"label-text":"Very Long Label With Lots Of Words",required:!0,"for-id":"textarea-input"},render:e=>f`
    <modus-wc-input-label
      for-id=${r(e["for-id"])}
      custom-class=${r(e["custom-class"])}
      label-dir=${r(e["label-dir"])}
      label-text=${r(e["label-text"])}
      ?required=${e.required}
      size=${r(e.size)}
    ></modus-wc-input-label>
    <modus-wc-textarea id="textarea-input" required></modus-wc-textarea>
  `};var l,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var n,u,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template,
  args: {
    required: true
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      label-dir=\${ifDefined(args['label-dir'])}
      label-text=\${ifDefined(args['label-text'])}
      ?required=\${args['required']}
      size=\${ifDefined(args.size)}
    ></modus-wc-input-label>
    <modus-wc-textarea id="textarea-input" required></modus-wc-textarea>
  \`
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const w=["Default","Required","RequiredTextarea"];export{t as Default,a as Required,s as RequiredTextarea,w as __namedExportsOrder,q as default};
