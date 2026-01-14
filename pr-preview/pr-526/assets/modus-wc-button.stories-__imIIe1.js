import{w as j}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as F}from"./if-defined-yv6owfG8.js";import{c as G}from"./shadow-host-helper-B2BwyiIi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var b=Object.freeze,J=Object.defineProperty,K=(t,s)=>b(J(t,"raw",{value:b(t.slice())})),w;const nt={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},shape:{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[j],parameters:{actions:{handles:["buttonClick"]}}},Q={render:t=>o`
<modus-wc-button
  color="${t.color}"
  custom-class="${F(t["custom-class"])}"
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
    `},r={...Q},a={render:()=>o`
  <modus-wc-button
    shape="rectangle"
  >
    Rectangle
  </modus-wc-button>
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
<modus-wc-button
  shape="ellipse"
>
  Ellipse
</modus-wc-button>
    `},c={render:()=>{const t=()=>{const s=document.getElementById("btn-text"),e=document.getElementById("btn-text-input");s.textContent=e.value};return o(w||(w=K([`
<script>
  function updateButtonText() {
    const btnText = document.getElementById('btn-text');
    const input = document.getElementById('btn-text-input');
    btnText.textContent = input.value;
  }
  // Call updateButtonText function using the button's click event
  // Example:  <modus-wc-button color="primary" variant="filled" buttonClick="updateButtonText()"></modus-wc-button>
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
    `])),t)}},i={render:()=>o`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},u={render:()=>o`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `},d={render:()=>o`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},l={render:()=>o`
<modus-wc-button>
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},m={render:t=>{if(!customElements.get("button-shadow-host")){const s=G({componentTag:"modus-wc-button",propsMapper:(e,W)=>{const n=W;n.ariaLabel="Click me button",n.color=e.color,n.shape=e.shape,n.size=e.size,n.type=e.type,n.variant=e.variant,n.customClass=e["custom-class"]||"",n.disabled=!!e.disabled,n.fullWidth=!!e["full-width"],n.pressed=!!e.pressed},defaultContent:"Click me"});customElements.define("button-shadow-host",s)}return o`<button-shadow-host
      .props=${{...t}}
    ></button-shadow-host>`}},p={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var h,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,y,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
  <modus-wc-button
    shape="rectangle"
  >
    Rectangle
  </modus-wc-button>
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
<modus-wc-button
  shape="ellipse"
>
  Ellipse
</modus-wc-button>
    \`;
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var B,E,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
  // Call updateButtonText function using the button's click event
  // Example:  <modus-wc-button color="primary" variant="filled" buttonClick="updateButtonText()"></modus-wc-button>
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
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var T,S,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var I,z,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(N=(z=u.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var _,P,$;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...($=(P=d.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var D,M,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(M=l.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var H,O,q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for button component
    if (!customElements.get('button-shadow-host')) {
      const ButtonShadowHost = createShadowHostClass<ButtonArgs>({
        componentTag: 'modus-wc-button',
        propsMapper: (v: ButtonArgs, el: HTMLElement) => {
          const buttonEl = el as unknown as {
            ariaLabel: string;
            color: string;
            shape: string;
            size: string;
            type: string;
            variant: string;
            customClass: string;
            disabled: boolean;
            fullWidth: boolean;
            pressed: boolean;
          };
          buttonEl.ariaLabel = 'Click me button';
          buttonEl.color = v.color;
          buttonEl.shape = v.shape;
          buttonEl.size = v.size;
          buttonEl.type = v.type;
          buttonEl.variant = v.variant;
          buttonEl.customClass = v['custom-class'] || '';
          buttonEl.disabled = Boolean(v.disabled);
          buttonEl.fullWidth = Boolean(v['full-width']);
          buttonEl.pressed = Boolean(v.pressed);
          // DO NOT set textContent - it destroys the component's internal structure!
          // Button content should be set via defaultContent in the helper config
        },
        defaultContent: 'Click me' // Set content here instead
      });
      customElements.define('button-shadow-host', ButtonShadowHost);
    }
    return html\`<button-shadow-host
      .props=\${{
      ...args
    }}
    ></button-shadow-host>\`;
  }
}`,...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var R,A,U;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(U=(A=p.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};const ot=["Default","ButtonShapes","DynamicTextUpdate","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","ShadowDomParent","Migration"];export{a as ButtonShapes,r as Default,c as DynamicTextUpdate,l as IconLeftAndRightButton,u as IconLeftButton,i as IconOnlyButton,d as IconRightButton,p as Migration,m as ShadowDomParent,ot as __namedExportsOrder,nt as default};
