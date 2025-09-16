import{w as O}from"./decorator-D4YmxizW.js";import{x as e}from"./lit-element-C8zulti1.js";import{o as R}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var m=Object.freeze,U=Object.defineProperty,A=(t,u)=>m(U(t,"raw",{value:m(t.slice())})),l;const Q={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[O],parameters:{actions:{handles:["buttonClick"]}}},j={render:t=>e`
<modus-wc-button
  color="${t.color}"
  custom-class="${R(t["custom-class"])}"
  ?disabled="${t.disabled}"
  ?full-width="${t["full-width"]}"
  ?pressed="${t.pressed}"
  shape="${t.shape}"
  size="${t.size}"
  type="${t.type}"
  variant="${t.variant}"
>
  Click me
</modus-wc-button>
    `},n={...j},o={render:()=>e`
<modus-wc-button shape="circle">
  Circle
</modus-wc-button>
<modus-wc-button shape="square">
  Square
</modus-wc-button>
    `},r={render:()=>{const t=()=>{const u=document.getElementById("btn-text"),q=document.getElementById("btn-text-input");u.textContent=q.value};return e(l||(l=A([`
<script>
  function updateButtonText() {
    const btnText = document.getElementById('btn-text');
    const input = document.getElementById('btn-text-input');
    btnText.textContent = input.value;
  }
<\/script>

<div>
  <modus-wc-button id="text-update-btn" color="primary" variant="filled" @buttonClick=`,`>
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon><span id="btn-text">Press button to update content</span>
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  </modus-wc-button>

  <div style="margin-top: 8px; display: flex; gap: 8px; align-items: center;">
    <modus-wc-text-input id="btn-text-input" type="text" value="Updated Text" style="padding: 4px 8px;" />
  </div>
</div>
    `])),t)}},a={render:()=>e`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},s={render:()=>e`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `},c={render:()=>e`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},i={render:()=>e`
<modus-wc-button>
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},d={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>e`<div></div>`};var p,b,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,g,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button shape="circle">
  Circle
</modus-wc-button>
<modus-wc-button shape="square">
  Square
</modus-wc-button>
    \`;
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const updateButtonText = () => {
      const btnText = document.getElementById('btn-text') as HTMLSpanElement;
      const input = document.getElementById('btn-text-input') as HTMLInputElement;
      btnText.textContent = input.value;
    };

    // prettier-ignore
    return html\`
<script>
  function updateButtonText() {
    const btnText = document.getElementById('btn-text');
    const input = document.getElementById('btn-text-input');
    btnText.textContent = input.value;
  }
<\/script>

<div>
  <modus-wc-button id="text-update-btn" color="primary" variant="filled" @buttonClick=\${updateButtonText}>
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon><span id="btn-text">Press button to update content</span>
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  </modus-wc-button>

  <div style="margin-top: 8px; display: flex; gap: 8px; align-items: center;">
    <modus-wc-text-input id="btn-text-input" type="text" value="Updated Text" style="padding: 4px 8px;" />
  </div>
</div>
    \`;
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,T,I;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var C,E,_;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(_=(E=s.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var N,S,k;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var z,P,$;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(P=i.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var D,M,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(L=(M=d.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const V=["Default","ButtonShapes","DynamicTextUpdate","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","Migration"];export{o as ButtonShapes,n as Default,r as DynamicTextUpdate,i as IconLeftAndRightButton,s as IconLeftButton,a as IconOnlyButton,c as IconRightButton,d as Migration,V as __namedExportsOrder,Q as default};
