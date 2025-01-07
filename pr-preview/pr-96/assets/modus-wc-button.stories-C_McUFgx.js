import{w as I}from"./decorator-Dt3Huotz.js";import{k as t}from"./lit-element-DVRzCIa_.js";import{t as k}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const z={title:"Components/Button",component:"modus-wc-button",args:{"aria-label":"Click me button",color:"primary",disabled:!1,"full-width":!1,label:"Click me",pressed:!1,size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","tertiary","warning","danger"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["borderless","filled","outlined"]}},decorators:[I],parameters:{actions:{handles:["buttonClick"]}}},C={render:o=>t`
      <modus-wc-button
        aria-label="${o["aria-label"]}"
        color="${o.color}"
        custom-class="${k(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?full-width="${o["full-width"]}"
        label="${o.label}"
        ?pressed="${o.pressed}"
        size="${o.size}"
        type="${o.type}"
        variant="${o.variant}"
      ></modus-wc-button>
    `},e={...C},n={render:o=>t`
<modus-wc-button aria-label="${o["aria-label"]}">
  <modus-wc-icon name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},a={render:o=>t`
<modus-wc-button aria-label="${o["aria-label"]}" label="Download">
  <modus-wc-icon slot="left" name="download"></modus-wc-icon>
</modus-wc-button>
    `},r={render:o=>t`
<modus-wc-button aria-label="${o["aria-label"]}" label="Details">
  <modus-wc-icon slot="right" name="launch"></modus-wc-icon>
</modus-wc-button>
    `},s={render:o=>t`
<modus-wc-button aria-label="${o["aria-label"]}" label="Checkout">
  <modus-wc-icon slot="left" name="shopping_cart"></modus-wc-icon>
  <modus-wc-icon slot="right" name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `};var c,l,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button aria-label="\${args['aria-label']}">
  <modus-wc-icon name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,w;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button aria-label="\${args['aria-label']}" label="Download">
  <modus-wc-icon slot="left" name="download"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var h,f,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button aria-label="\${args['aria-label']}" label="Details">
  <modus-wc-icon slot="right" name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var $,y,B;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button aria-label="\${args['aria-label']}" label="Checkout">
  <modus-wc-icon slot="left" name="shopping_cart"></modus-wc-icon>
  <modus-wc-icon slot="right" name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const L=["Default","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton"];export{e as Default,s as IconLeftAndRightButton,a as IconLeftButton,n as IconOnlyButton,r as IconRightButton,L as __namedExportsOrder,z as default};
