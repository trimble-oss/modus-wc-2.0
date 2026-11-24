import{w as K}from"./decorator-Cv9na35H.js";import{b as o}from"./lit-element-DgBvYnzn.js";import{o as Q}from"./if-defined-BnVFTJ4o.js";import{c as V}from"./shadow-host-helper-DX0JvItv.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";var w=Object.freeze,X=Object.defineProperty,Y=(t,s)=>w(X(t,"raw",{value:w(t.slice())})),g;const rt={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger","neutral","success"]},shape:{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[K],parameters:{actions:{handles:["buttonClick"]}}},Z={render:t=>o`
<modus-wc-button
  color="${t.color}"
  custom-class="${Q(t["custom-class"])}"
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
    `},a={...Z},r={render:()=>o`
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
    `},i={render:()=>{const t=()=>{const s=document.getElementById("btn-text"),e=document.getElementById("btn-text-input");s.textContent=e.value};return o(g||(g=Y([`
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
    `])),t)}},c={render:()=>o`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `},d={render:()=>o`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `},u={render:()=>o`
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
    `},m={render:()=>o`
<div style="display: flex; gap: 32px; align-items: center; padding-top: 12px; padding-inline-end: 16px;">
  <span style="position: relative; display: inline-flex;">
    <modus-wc-button aria-label="Notifications, 5 unread">
      <modus-wc-icon decorative name="notifications"></modus-wc-icon>
      Notifications
    </modus-wc-button>
    <modus-wc-badge
      variant="counter"
      color="danger"
      size="sm"
      style="position: absolute; top: 0; right: 0; transform: translate(50%, -50%);"
    >5</modus-wc-badge>
  </span>

  <span style="position: relative; display: inline-flex;">
    <modus-wc-button variant="outlined" color="secondary" aria-label="Messages, 99 or more unread">
      <modus-wc-icon decorative name="chat"></modus-wc-icon>
      Messages
    </modus-wc-button>
    <modus-wc-badge
      variant="counter"
      color="danger"
      size="sm"
      style="position: absolute; top: 0; right: 0; transform: translate(50%, -50%);"
    >99+</modus-wc-badge>
  </span>
</div>
    `},p={render:t=>{if(!customElements.get("button-shadow-host")){const s=V({componentTag:"modus-wc-button",propsMapper:(e,J)=>{const n=J;n.ariaLabel="Click me button",n.color=e.color,n.shape=e.shape,n.size=e.size,n.type=e.type,n.variant=e.variant,n.customClass=e["custom-class"]||"",n.disabled=!!e.disabled,n.fullWidth=!!e["full-width"],n.pressed=!!e.pressed},defaultContent:"Click me"});customElements.define("button-shadow-host",s)}return o`<button-shadow-host
      .props=${{...t}}
    ></button-shadow-host>`}},b={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var h,v,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,x,B;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var E,C,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,N,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var z,I,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var M,P,$;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...($=(P=u.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var D,L,H;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var O,q,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<div style="display: flex; gap: 32px; align-items: center; padding-top: 12px; padding-inline-end: 16px;">
  <span style="position: relative; display: inline-flex;">
    <modus-wc-button aria-label="Notifications, 5 unread">
      <modus-wc-icon decorative name="notifications"></modus-wc-icon>
      Notifications
    </modus-wc-button>
    <modus-wc-badge
      variant="counter"
      color="danger"
      size="sm"
      style="position: absolute; top: 0; right: 0; transform: translate(50%, -50%);"
    >5</modus-wc-badge>
  </span>

  <span style="position: relative; display: inline-flex;">
    <modus-wc-button variant="outlined" color="secondary" aria-label="Messages, 99 or more unread">
      <modus-wc-icon decorative name="chat"></modus-wc-icon>
      Messages
    </modus-wc-button>
    <modus-wc-badge
      variant="counter"
      color="danger"
      size="sm"
      style="position: absolute; top: 0; right: 0; transform: translate(50%, -50%);"
    >99+</modus-wc-badge>
  </span>
</div>
    \`;
  }
}`,...(R=(q=m.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var A,U,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var j,F,G;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const it=["Default","ButtonShapes","DynamicTextUpdate","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","NotificationBadge","ShadowDomParent","Migration"];export{r as ButtonShapes,a as Default,i as DynamicTextUpdate,l as IconLeftAndRightButton,d as IconLeftButton,c as IconOnlyButton,u as IconRightButton,b as Migration,m as NotificationBadge,p as ShadowDomParent,it as __namedExportsOrder,rt as default};
