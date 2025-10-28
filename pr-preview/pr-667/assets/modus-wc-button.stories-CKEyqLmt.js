import{w as L}from"./decorator-D4YmxizW.js";import{x as e}from"./lit-element-C8zulti1.js";import{o as U}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const F={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[L],parameters:{actions:{handles:["buttonClick"]}}},q={render:t=>e`
<modus-wc-button
  color="${t.color}"
  custom-class="${U(t["custom-class"])}"
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
    `},n={...q},o={render:()=>e`
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
    `},r={render:()=>e`
      <div>
        <modus-wc-button
          id="text-update-btn"
          color="primary"
          variant="filled"
          @buttonClick=${()=>{const D=document.getElementById("btn-text"),M=document.getElementById("btn-text-input");D.textContent=M.value}}
        >
          <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon
          ><span id="btn-text">Press button to update content</span>
          <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
        </modus-wc-button>

        <div
          style="margin-top: 8px; display: flex; gap: 8px; align-items: center;"
        >
          <modus-wc-text-input
            id="btn-text-input"
            type="text"
            value="Updated Text"
            style="padding: 4px 8px;"
          />
        </div>
      </div>
    `,parameters:{docs:{source:{code:`
<script>
  function updateButtonText() {
    const btnText = document.getElementById('btn-text');
    const input = document.getElementById('btn-text-input');
    btnText.textContent = input.value;
  }
<\/script>

<div>
  <modus-wc-button id="text-update-btn" color="primary" variant="filled" buttonClick="updateButtonText()">
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon><span id="btn-text">Press button to update content</span>
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  </modus-wc-button>

  <div style="margin-top: 8px; display: flex; gap: 8px; align-items: center;">
    <modus-wc-text-input id="btn-text-input" type="text" value="Updated Text" style="padding: 4px 8px;" />
  </div>
</div>`}}}},i={render:()=>e`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},s={render:()=>e`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `},a={render:()=>e`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},c={render:()=>e`
<modus-wc-button>
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},d={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>e`<div></div>`};var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,b,w;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,g,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const updateButtonText = () => {
      const btnText = document.getElementById('btn-text') as HTMLSpanElement;
      const input = document.getElementById('btn-text-input') as HTMLInputElement;
      btnText.textContent = input.value;
    };
    return html\`
      <div>
        <modus-wc-button
          id="text-update-btn"
          color="primary"
          variant="filled"
          @buttonClick=\${updateButtonText}
        >
          <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon
          ><span id="btn-text">Press button to update content</span>
          <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
        </modus-wc-button>

        <div
          style="margin-top: 8px; display: flex; gap: 8px; align-items: center;"
        >
          <modus-wc-text-input
            id="btn-text-input"
            type="text"
            value="Updated Text"
            style="padding: 4px 8px;"
          />
        </div>
      </div>
    \`;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<script>
  function updateButtonText() {
    const btnText = document.getElementById('btn-text');
    const input = document.getElementById('btn-text-input');
    btnText.textContent = input.value;
  }
<\/script>

<div>
  <modus-wc-button id="text-update-btn" color="primary" variant="filled" buttonClick="updateButtonText()">
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon><span id="btn-text">Press button to update content</span>
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  </modus-wc-button>

  <div style="margin-top: 8px; display: flex; gap: 8px; align-items: center;">
    <modus-wc-text-input id="btn-text-input" type="text" value="Updated Text" style="padding: 4px 8px;" />
  </div>
</div>\`
      }
    }
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,y,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var B,T,C;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,E,k;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(E=a.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var N,S,_;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var $,z,P;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(P=(z=d.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const G=["Default","ButtonShapes","DynamicTextUpdate","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","Migration"];export{o as ButtonShapes,n as Default,r as DynamicTextUpdate,c as IconLeftAndRightButton,s as IconLeftButton,i as IconOnlyButton,a as IconRightButton,d as Migration,G as __namedExportsOrder,F as default};
