import{k as p}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const b={title:"Components/Forms/Input Label",component:"modus-wc-input-label",args:{"label-text":"Label",required:!1},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}}},n={render:e=>p`
    <modus-wc-input-label
      for-id=${t(e["for-id"])}
      custom-class=${t(e["custom-class"])}
      label-text=${t(e["label-text"])}
      ?required=${e.required}
      size=${e.size}
      sub-label-text=${t(e["sub-label-text"])}
    ></modus-wc-input-label>
  `},r={...n},s={...n,args:{required:!0}};var o,a,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var u,c,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    required: true
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const f=["Default","Required"];export{r as Default,s as Required,f as __namedExportsOrder,b as default};
