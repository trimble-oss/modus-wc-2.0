import{k as i}from"./lit-element-DVRzCIa_.js";import{t as m}from"./if-defined-1ipA9LQg.js";const g={title:"Components/Badge",component:"modus-wc-badge",args:{color:"primary",content:"Badge",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["counter","filled","text"]}}},l={render:e=>i`
      <modus-wc-badge
        color="${e.color}"
        content="${e.content}"
        custom-class="${m(e["custom-class"])}"
        size="${e.size}"
        variant="${e.variant}"
      ></modus-wc-badge>
    `},r={...l},t={render:()=>i`
    <modus-wc-badge aria-label="Example badge" color="primary" content="Badge" size="md" variant="text"></modus-wc-badge>
    `};var o,a,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <modus-wc-badge aria-label="Example badge" color="primary" content="Badge" size="md" variant="text"></modus-wc-badge>
    \`;
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Default","Text"];export{r as Default,t as Text,b as __namedExportsOrder,g as default};
