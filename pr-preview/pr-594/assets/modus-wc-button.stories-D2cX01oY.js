import{w as E}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as D}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const R={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[E],parameters:{actions:{handles:["buttonClick"]}}},M={render:e=>o`
<modus-wc-button
  color="${e.color}"
  custom-class="${D(e["custom-class"])}"
  ?disabled="${e.disabled}"
  ?full-width="${e["full-width"]}"
  ?pressed="${e.pressed}"
  shape="${e.shape}"
  size="${e.size}"
  type="${e.type}"
  variant="${e.variant}"
>
 <span class="slot-text">Click me</span>
</modus-wc-button>
    `},n={...M},t={render:()=>o`
<modus-wc-button shape="circle">
 <span class="slot-text">Circle</span>
</modus-wc-button>
<modus-wc-button shape="square">
 <span class="slot-text">Square</span>
</modus-wc-button>
    `},s={render:()=>o`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},r={render:()=>o`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  <span class="slot-text">Download</span>
</modus-wc-button>
    `},a={render:()=>o`
<modus-wc-button>
 <span class="slot-text">Details</span>
 <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},c={render:()=>o`
<modus-wc-button>
 <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  <span class="slot-text">Checkout</span>
 <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},i={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button shape="circle">
 <span class="slot-text">Circle</span>
</modus-wc-button>
<modus-wc-button shape="square">
 <span class="slot-text">Square</span>
</modus-wc-button>
    \`;
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var w,h,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  <span class="slot-text">Download</span>
</modus-wc-button>
    \`;
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var N,x,B;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
 <span class="slot-text">Details</span>
 <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var C,S,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
 <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  <span class="slot-text">Checkout</span>
 <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var I,z,$;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...($=(z=i.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const A=["Default","ButtonShapes","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","Migration"];export{t as ButtonShapes,n as Default,c as IconLeftAndRightButton,r as IconLeftButton,s as IconOnlyButton,a as IconRightButton,i as Migration,A as __namedExportsOrder,R as default};
