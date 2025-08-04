import{x as d}from"./lit-element-C8zulti1.js";import{o as r}from"./if-defined-yv6owfG8.js";const b={title:"Components/Forms/Input Label",component:"modus-wc-input-label",args:{"label-text":"Label",required:!1,size:"md"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}}},n={render:e=>d`
    <modus-wc-input-label
      for-id=${r(e["for-id"])}
      custom-class=${r(e["custom-class"])}
      label-text=${r(e["label-text"])}
      ?required=${e.required}
      size=${e.size}
      sub-label-text=${r(e["sub-label-text"])}
    ></modus-wc-input-label>
  `},t={...n},s={...n,args:{required:!0}};var o,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var u,m,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    required: true
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const f=["Default","Required"];export{t as Default,s as Required,f as __namedExportsOrder,b as default};
