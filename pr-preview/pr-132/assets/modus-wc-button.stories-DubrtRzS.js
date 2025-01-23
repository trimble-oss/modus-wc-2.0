import{w as S}from"./decorator-Dt3Huotz.js";import{k as e}from"./lit-element-DVRzCIa_.js";import{t as D}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const x={title:"Components/Button",component:"modus-wc-button",args:{"aria-label":"Click me button",color:"primary",disabled:!1,"full-width":!1,label:"Click me",pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"inline-radio"},options:["circle","rectangle","square"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["borderless","filled","outlined"]}},decorators:[S],parameters:{actions:{handles:["buttonClick"]}}},_={render:o=>e`
      <modus-wc-button
        aria-label="${o["aria-label"]}"
        color="${o.color}"
        custom-class="${D(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?full-width="${o["full-width"]}"
        label="${o.label}"
        ?pressed="${o.pressed}"
        shape="${o.shape}"
        size="${o.size}"
        type="${o.type}"
        variant="${o.variant}"
      ></modus-wc-button>
    `},t={..._},n={render:o=>e`
<modus-wc-button
  aria-label="${o["aria-label"]}"
  label="Click me"
  shape="circle"
></modus-wc-button>
<modus-wc-button
  aria-label="${o["aria-label"]}"
  label="Click me"
  shape="square"
></modus-wc-button>
    `},a={render:()=>e`
<modus-wc-button aria-label="notification button">
  <modus-wc-icon aria-label="notify icon" decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},r={render:()=>e`
<modus-wc-button aria-label="download button" label="Download">
  <modus-wc-icon aria-label="download icon" decorative name="download" slot="left"></modus-wc-icon>
</modus-wc-button>
    `},c={render:()=>e`
<modus-wc-button aria-label="details button" label="Details">
  <modus-wc-icon aria-label="launch icon" decorative name="launch" slot="right"></modus-wc-icon>
</modus-wc-button>
    `},s={render:()=>e`
<modus-wc-button aria-label="checkout button" label="Checkout">
  <modus-wc-icon aria-label="shopping cart icon" decorative name="shopping_cart" slot="left"></modus-wc-icon>
  <modus-wc-icon aria-label="shopping cart icon" decorative name="shopping_cart" slot="right"></modus-wc-icon>
</modus-wc-button>
    `};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button
  aria-label="\${args['aria-label']}"
  label="Click me"
  shape="circle"
></modus-wc-button>
<modus-wc-button
  aria-label="\${args['aria-label']}"
  label="Click me"
  shape="square"
></modus-wc-button>
    \`;
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,w,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-button aria-label="notification button">
  <modus-wc-icon aria-label="notify icon" decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(h=(w=a.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-button aria-label="download button" label="Download">
  <modus-wc-icon aria-label="download icon" decorative name="download" slot="left"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var $,v,k;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-button aria-label="details button" label="Details">
  <modus-wc-icon aria-label="launch icon" decorative name="launch" slot="right"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(v=c.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var B,C,I;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return html\`
<modus-wc-button aria-label="checkout button" label="Checkout">
  <modus-wc-icon aria-label="shopping cart icon" decorative name="shopping_cart" slot="left"></modus-wc-icon>
  <modus-wc-icon aria-label="shopping cart icon" decorative name="shopping_cart" slot="right"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const A=["Default","ButtonShapes","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton"];export{n as ButtonShapes,t as Default,s as IconLeftAndRightButton,r as IconLeftButton,a as IconOnlyButton,c as IconRightButton,A as __namedExportsOrder,x as default};
