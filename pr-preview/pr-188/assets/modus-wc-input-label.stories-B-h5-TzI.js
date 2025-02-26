import{k as p}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";const b={title:"Components/Forms/Input Label",component:"modus-wc-input-label",args:{"label-text":"Label",required:!1},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}}},n={render:e=>p`
    <modus-wc-input-label
      for-id=${s(e["for-id"])}
      custom-class=${s(e["custom-class"])}
      label-text=${s(e["label-text"])}
      ?required=${e.required}
      size=${e.size}
    ></modus-wc-input-label>
  `},r={...n},t={...n,args:{required:!0}};var o,a,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    required: true
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const f=["Default","Required"];export{r as Default,t as Required,f as __namedExportsOrder,b as default};
