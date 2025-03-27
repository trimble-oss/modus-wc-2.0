import{w as M}from"./decorator-Dt3Huotz.js";import{k as o}from"./lit-element-DVRzCIa_.js";import{t as q}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const R={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[M],parameters:{actions:{handles:["buttonClick"]}}},E={render:e=>o`
<modus-wc-button
  aria-label="Click me button"
  color="${e.color}"
  custom-class="${q(e["custom-class"])}"
  ?disabled="${e.disabled}"
  ?full-width="${e["full-width"]}"
  ?pressed="${e.pressed}"
  shape="${e.shape}"
  size="${e.size}"
  type="${e.type}"
  variant="${e.variant}"
>
  Click me
</modus-wc-button>
    `},n={...E},t={render:()=>o`
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
    `},r={render:()=>o`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},a={render:()=>o`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `},s={render:()=>o`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},i={render:()=>o`
<modus-wc-button aria-label="Checkout button">
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},c={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 buttons had specific properties for adding icons (icon-only, left-icon, right-icon). In 2.0, icons are added via slots using the modus-wc-icon component.
  - The button-style property has been renamed to variant with similar options.
  - Size values have changed from verbose names (small, medium, large) to abbreviations (sm, md, lg).

#### Prop Mapping

| 1.0 Prop         | 2.0 Prop            | Notes                                    |
|------------------|---------------------|------------------------------------------|
| aria-disabled    |                     | Not carried over                         |
| aria-label       | aria-label          | Inherited from HTML attributes           |
| button-style     | variant             | fill → filled, outline → outlined        |
| color            | color               | 'dark' and 'special' removed, 'warning' added |
| disabled         | disabled            |                                          |
| icon-only        |                     | Not carried over (use slot with icon)    |
| left-icon        |                     | Not carried over (use slot with icon)    |
| right-icon       |                     | Not carried over (use slot with icon)    |
| size             | size                | small → sm, medium → md, large → lg      |
| show-caret       |                     | Not carried over                         |
| type             | type                |                                          |
| critical-action  |                     | Not carried over                         |
|                  | custom-class        | New in 2.0                               |
|                  | full-width          | New in 2.0                               |
|                  | pressed             | New in 2.0                               |
|                  | shape               | New in 2.0                               |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes            |
|--------------|--------------|------------------|
| buttonClick  | buttonClick  |                  |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var w,h,v;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var N,C,k;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(C=s.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var S,I,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(I=i.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var z,D,$;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 buttons had specific properties for adding icons (icon-only, left-icon, right-icon). In 2.0, icons are added via slots using the modus-wc-icon component.
  - The button-style property has been renamed to variant with similar options.
  - Size values have changed from verbose names (small, medium, large) to abbreviations (sm, md, lg).

#### Prop Mapping

| 1.0 Prop         | 2.0 Prop            | Notes                                    |
|------------------|---------------------|------------------------------------------|
| aria-disabled    |                     | Not carried over                         |
| aria-label       | aria-label          | Inherited from HTML attributes           |
| button-style     | variant             | fill → filled, outline → outlined        |
| color            | color               | 'dark' and 'special' removed, 'warning' added |
| disabled         | disabled            |                                          |
| icon-only        |                     | Not carried over (use slot with icon)    |
| left-icon        |                     | Not carried over (use slot with icon)    |
| right-icon       |                     | Not carried over (use slot with icon)    |
| size             | size                | small → sm, medium → md, large → lg      |
| show-caret       |                     | Not carried over                         |
| type             | type                |                                          |
| critical-action  |                     | Not carried over                         |
|                  | custom-class        | New in 2.0                               |
|                  | full-width          | New in 2.0                               |
|                  | pressed             | New in 2.0                               |
|                  | shape               | New in 2.0                               |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes            |
|--------------|--------------|------------------|
| buttonClick  | buttonClick  |                  |
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...($=(D=c.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const x=["Default","ButtonShapes","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","Migration"];export{t as ButtonShapes,n as Default,i as IconLeftAndRightButton,a as IconLeftButton,r as IconOnlyButton,s as IconRightButton,c as Migration,x as __namedExportsOrder,R as default};
