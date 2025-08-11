import{w as x}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as _}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const J={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[x],parameters:{actions:{handles:["buttonClick"]}}},H={render:e=>o`
<modus-wc-button
  aria-label="Click me button"
  color="${e.color}"
  custom-class="${_(e["custom-class"])}"
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
    `},n={...H},t={render:()=>o`
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
    `},c={render:()=>o`
<modus-wc-button aria-label="Checkout button">
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},i={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`},d={render:()=>{if(!customElements.get("shadow-dom-parent")){class e extends HTMLElement{constructor(){super();const q=this.attachShadow({mode:"open"}),u=document.createElement("div");u.className="shadow-lg p-4",u.innerHTML="<modus-wc-button>Click me</modus-wc-button>",q.appendChild(u)}}customElements.define("shadow-dom-parent",e)}return o`<shadow-dom-parent></shadow-dom-parent>`}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var w,b,h;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,C,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var N,k,D;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var E,B,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var M,P,z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(z=(P=i.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var T,$,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    // Create a custom element with shadow DOM that contains our button
    if (!customElements.get('shadow-dom-parent')) {
      class ShadowDomParent extends HTMLElement {
        constructor() {
          super();
          const shadow = this.attachShadow({
            mode: 'open'
          });
          const wrapper = document.createElement('div');
          wrapper.className = 'shadow-lg p-4';
          wrapper.innerHTML = '<modus-wc-button>Click me</modus-wc-button>';
          shadow.appendChild(wrapper);
        }
      }
      customElements.define('shadow-dom-parent', ShadowDomParent);
    }
    return html\`<shadow-dom-parent></shadow-dom-parent>\`;
  }
}`,...(L=($=d.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const K=["Default","ButtonShapes","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","Migration","ShadowDomParent"];export{t as ButtonShapes,n as Default,c as IconLeftAndRightButton,a as IconLeftButton,r as IconOnlyButton,s as IconRightButton,i as Migration,d as ShadowDomParent,K as __namedExportsOrder,J as default};
