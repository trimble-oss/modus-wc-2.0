import{w as T}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as _}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const F={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[T],parameters:{actions:{handles:["buttonClick"]}}},q={render:e=>o`
<modus-wc-button
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
    `},n={...q},r={render:()=>o`
<modus-wc-button
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  shape="square"
>
  Square
</modus-wc-button>
    `},s={render:()=>o`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},a={render:()=>o`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `},i={render:()=>o`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},c={render:()=>o`
<modus-wc-button>
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},d={render:e=>{if(!customElements.get("shadow-dom-parent")){class M extends HTMLElement{constructor(){super(),this.shadowRootRef=this.attachShadow({mode:"open"});const t=document.createElement("div");this.buttonEl=document.createElement("modus-wc-button"),t.appendChild(this.buttonEl),this.shadowRootRef.appendChild(t)}set props(t){this.buttonEl&&(this.buttonEl.ariaLabel="Click me button",this.buttonEl.color=t.color,this.buttonEl.shape=t.shape,this.buttonEl.size=t.size,this.buttonEl.type=t.type,this.buttonEl.variant=t.variant,this.buttonEl.customClass=t["custom-class"]||"",this.buttonEl.disabled=!!t.disabled,this.buttonEl.fullWidth=!!t["full-width"],this.buttonEl.pressed=!!t.pressed,this.buttonEl.textContent="Click me")}}customElements.define("shadow-dom-parent",M)}return o`<shadow-dom-parent .props=${{...e}}></shadow-dom-parent>`}},l={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,b,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  shape="square"
>
  Square
</modus-wc-button>
    \`;
  }
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,g,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var E,y,C;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,B,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var N,z,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(R=(z=c.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var I,D,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('shadow-dom-parent')) {
      class ShadowDomParent extends HTMLElement {
        shadowRootRef;
        buttonEl;
        constructor() {
          super();
          this.shadowRootRef = this.attachShadow({
            mode: 'open'
          });
          const wrapper = document.createElement('div');
          this.buttonEl = document.createElement('modus-wc-button');
          wrapper.appendChild(this.buttonEl);
          this.shadowRootRef.appendChild(wrapper);
        }
        set props(v) {
          if (!this.buttonEl) return;
          // Use properties so Stencil updates without remount
          this.buttonEl.ariaLabel = 'Click me button';
          this.buttonEl.color = v.color;
          this.buttonEl.shape = v.shape;
          this.buttonEl.size = v.size;
          this.buttonEl.type = v.type;
          this.buttonEl.variant = v.variant;
          this.buttonEl.customClass = v['custom-class'] || '';
          this.buttonEl.disabled = Boolean(v.disabled);
          this.buttonEl.fullWidth = Boolean(v['full-width']);
          this.buttonEl.pressed = Boolean(v.pressed);
          this.buttonEl.textContent = 'Click me';
        }
      }
      customElements.define('shadow-dom-parent', ShadowDomParent);
    }
    return html\`<shadow-dom-parent .props=\${{
      ...args
    }}></shadow-dom-parent>\`;
  }
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var $,x,L;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(L=(x=l.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const G=["Default","ButtonShapes","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","ShadowDomParent","Migration"];export{r as ButtonShapes,n as Default,c as IconLeftAndRightButton,a as IconLeftButton,s as IconOnlyButton,i as IconRightButton,l as Migration,d as ShadowDomParent,G as __namedExportsOrder,F as default};
