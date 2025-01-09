import{w as D}from"./decorator-Dt3Huotz.js";import{k as e}from"./lit-element-DVRzCIa_.js";import{t as _}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const x={title:"Components/Button",component:"modus-wc-button",args:{"aria-label":"Click me button",color:"primary",disabled:!1,"full-width":!1,label:"Click me",pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"inline-radio"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"inline-radio"},options:["circle","rectangle","square"]},size:{control:{type:"inline-radio"},options:["xs","sm","md","lg"]},type:{control:{type:"inline-radio"},options:["button","submit","reset"]},variant:{control:{type:"inline-radio"},options:["borderless","filled","outlined"]}},decorators:[D],parameters:{actions:{handles:["buttonClick"]}}},v={render:o=>e`
      <modus-wc-button
        aria-label="${o["aria-label"]}"
        color="${o.color}"
        custom-class="${_(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?full-width="${o["full-width"]}"
        label="${o.label}"
        ?pressed="${o.pressed}"
        shape="${o.shape}"
        size="${o.size}"
        type="${o.type}"
        variant="${o.variant}"
      ></modus-wc-button>
    `},a={...v},t={render:o=>e`
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
    `},n={render:o=>e`
<modus-wc-button aria-label="${o["aria-label"]}">
  <modus-wc-icon name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},r={render:o=>e`
<modus-wc-button aria-label="${o["aria-label"]}" label="Download">
  <modus-wc-icon slot="left" name="download"></modus-wc-icon>
</modus-wc-button>
    `},s={render:o=>e`
<modus-wc-button aria-label="${o["aria-label"]}" label="Details">
  <modus-wc-icon slot="right" name="launch"></modus-wc-icon>
</modus-wc-button>
    `},l={render:o=>e`
<modus-wc-button aria-label="${o["aria-label"]}" label="Checkout">
  <modus-wc-icon slot="left" name="shopping_cart"></modus-wc-icon>
  <modus-wc-icon slot="right" name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `};var c,i,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,w,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button aria-label="\${args['aria-label']}">
  <modus-wc-icon name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(h=(w=n.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var g,f,$;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button aria-label="\${args['aria-label']}" label="Download">
  <modus-wc-icon slot="left" name="download"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...($=(f=r.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var y,k,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button aria-label="\${args['aria-label']}" label="Details">
  <modus-wc-icon slot="right" name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,I,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return html\`
<modus-wc-button aria-label="\${args['aria-label']}" label="Checkout">
  <modus-wc-icon slot="left" name="shopping_cart"></modus-wc-icon>
  <modus-wc-icon slot="right" name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const A=["Default","ButtonShapes","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton"];export{t as ButtonShapes,a as Default,l as IconLeftAndRightButton,r as IconLeftButton,n as IconOnlyButton,s as IconRightButton,A as __namedExportsOrder,x as default};
