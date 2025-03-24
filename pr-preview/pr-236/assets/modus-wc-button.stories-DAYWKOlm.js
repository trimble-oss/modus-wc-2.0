import{w as $}from"./decorator-Dt3Huotz.js";import{k as t}from"./lit-element-DVRzCIa_.js";import{t as I}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const x={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[$],parameters:{actions:{handles:["buttonClick"]}}},q={render:o=>t`
<modus-wc-button
  aria-label="Click me button"
  color="${o.color}"
  custom-class="${I(o["custom-class"])}"
  ?disabled="${o.disabled}"
  ?full-width="${o["full-width"]}"
  ?pressed="${o.pressed}"
  shape="${o.shape}"
  size="${o.size}"
  type="${o.type}"
  variant="${o.variant}"
>
  Click me
</modus-wc-button>
    `},e={...q},n={render:()=>t`
<modus-wc-button
  aria-label="Circle button"
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  aria-label="Square button"
  shape="square"
>
  Square
</modus-wc-button>
    `},r={render:()=>t`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},a={render:()=>t`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `},c={render:()=>t`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},s={render:()=>t`
<modus-wc-button aria-label="Checkout button">
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `};var u,i,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button
  aria-label="Circle button"
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  aria-label="Square button"
  shape="square"
>
  Square
</modus-wc-button>
    \`;
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var b,w,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(h=(w=r.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,C,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var B,D,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Checkout button">
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const A=["Default","ButtonShapes","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton"];export{n as ButtonShapes,e as Default,s as IconLeftAndRightButton,a as IconLeftButton,r as IconOnlyButton,c as IconRightButton,A as __namedExportsOrder,x as default};
