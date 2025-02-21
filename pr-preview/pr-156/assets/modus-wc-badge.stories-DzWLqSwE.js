import{k as i}from"./lit-element-DVRzCIa_.js";import{t as m}from"./if-defined-1ipA9LQg.js";const g={title:"Components/Badge",component:"modus-wc-badge",args:{color:"primary",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["counter","filled","text"]}}},l={render:e=>i`
<modus-wc-badge
  color="${e.color}"
  custom-class="${m(e["custom-class"])}"
  size="${e.size}"
  variant="${e.variant}"
>
  Badge
</modus-wc-badge>
    `},o={...l},r={render:()=>i`
<style>
  i {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    `};var t,n,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Template
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,a,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  i {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    \`;
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const w=["Default","WithIcon"];export{o as Default,r as WithIcon,w as __namedExportsOrder,g as default};
