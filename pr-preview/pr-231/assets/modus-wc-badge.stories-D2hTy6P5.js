import{k as i}from"./lit-element-DVRzCIa_.js";import{t as m}from"./if-defined-1ipA9LQg.js";const g={title:"Components/Badge",component:"modus-wc-badge",args:{color:"primary",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["counter","filled","text"]}}},l={render:e=>i`
<modus-wc-badge
  color="${e.color}"
  custom-class="${m(e["custom-class"])}"
  size="${e.size}"
  variant="${e.variant}"
>
  Badge
</modus-wc-badge>
    `},o={...l},n={render:()=>i`
<style>
  .modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    `};var r,s,t;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,a,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  .modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    \`;
  }
}`,...(d=(a=n.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const w=["Default","WithIcon"];export{o as Default,n as WithIcon,w as __namedExportsOrder,g as default};
