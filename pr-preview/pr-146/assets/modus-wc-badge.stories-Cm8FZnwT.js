import{k as i}from"./lit-element-DVRzCIa_.js";import{t as l}from"./if-defined-1ipA9LQg.js";const g={title:"Components/Badge",component:"modus-wc-badge",args:{"aria-label":"Example badge",color:"primary",content:"Badge",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},variant:{control:{type:"inline-radio"},options:["counter","filled","text"]}}},m={render:e=>i`
      <modus-wc-badge
        aria-label="${e["aria-label"]}"
        color="${e.color}"
        content="${e.content}"
        custom-class="${l(e["custom-class"])}"
        size="${e.size}"
        variant="${e.variant}"
      ></modus-wc-badge>
    `},a={...m},r={render:()=>i`
    <modus-wc-badge aria-label="Example badge" color="primary" content="Badge" size="md" variant="text"></modus-wc-badge>
    `};var t,o,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    return html\`
    <modus-wc-badge aria-label="Example badge" color="primary" content="Badge" size="md" variant="text"></modus-wc-badge>
    \`;
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Default","Text"];export{a as Default,r as Text,b as __namedExportsOrder,g as default};
