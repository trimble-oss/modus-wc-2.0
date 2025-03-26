import{k as d}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const b={title:"Components/Forms/Input Label",component:"modus-wc-input-label",args:{"label-text":"Label",required:!1,size:"md"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}}},n={render:e=>d`
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
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var u,m,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    required: true
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const f=["Default","Required"];export{r as Default,s as Required,f as __namedExportsOrder,b as default};
