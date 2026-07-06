import{w as J}from"./decorator-D4YmxizW.js";import{b as o}from"./lit-element-DgBvYnzn.js";import{o as K}from"./if-defined-BnVFTJ4o.js";import{c as Q}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var w=Object.freeze,X=Object.defineProperty,Y=(t,s)=>w(X(t,"raw",{value:w(t.slice())})),v;const rt={title:"Components/Button",component:"modus-wc-button",args:{color:"primary",disabled:!1,"full-width":!1,pressed:!1,shape:"rectangle",size:"md",type:"button",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger","neutral"]},shape:{control:{type:"select"},options:["circle","ellipse","rectangle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},type:{control:{type:"select"},options:["button","submit","reset"]},variant:{control:{type:"select"},options:["borderless","filled","outlined"]}},decorators:[J],parameters:{actions:{handles:["buttonClick"]}}},Z={render:t=>o`
<modus-wc-button
  color="${t.color}"
  custom-class="${K(t["custom-class"])}"
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
    `},l={render:()=>{const t=()=>{const s=document.getElementById("btn-text"),e=document.getElementById("btn-text-input");s.textContent=e.value};return o(v||(v=Y([`
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
    `},c={render:()=>o`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `},d={render:()=>o`
<modus-wc-button>
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `},m={render:t=>{if(!customElements.get("button-shadow-host")){const s=Q({componentTag:"modus-wc-button",propsMapper:(e,G)=>{const n=G;n.ariaLabel="Click me button",n.color=e.color,n.shape=e.shape,n.size=e.size,n.type=e.type,n.variant=e.variant,n.customClass=e["custom-class"]||"",n.disabled=!!e.disabled,n.fullWidth=!!e["full-width"],n.pressed=!!e.pressed},defaultContent:"Click me"});customElements.define("button-shadow-host",s)}return o`<button-shadow-host
      .props=${{...t}}
    ></button-shadow-host>`}},p={parameters:{docs:{description:{story:`
#### Why Neutral needs custom state CSS

Most button colors (Primary, Secondary, Warning, etc.) use **DaisyUI color slots**. DaisyUI auto-calculates hover and pressed from the theme color.

**Neutral** uses the Modus **base-inverted** token (\`--modus-wc-color-base-inverted\`) — not a DaisyUI slot — so we define states in CSS using the **same rules** DaisyUI uses elsewhere.

| | Primary / Secondary | Neutral (new) |
|--|---------------------|---------------|
| Base color | Theme / DaisyUI slot | \`base-inverted\` token |
| Hover / pressed | Automatic | Custom CSS (same darken/tint pattern) |
| Design impact | Specify base color only | Specify base-inverted only; states follow |

**Neutral ≠ Tertiary:** \`tertiary\` uses DaisyUI's neutral slot. \`neutral\` uses base-inverted.

Full design notes: \`docs/button-neutral-color-design-notes.md\`

#### State rules (Neutral)

| Variant | Hover | Pressed |
|---------|-------|---------|
| Filled | 90% base-inverted + 10% black | 80% base-inverted + 20% black |
| Outlined / borderless | 12% base-inverted tint | Fills like filled default |

Compare **Primary** and **Neutral** below — interaction should feel the same; only the color differs.
        `}}},render:()=>o`
    <style>
      .neutral-states-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .neutral-states-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
      }

      .neutral-states-label {
        font-size: 0.875rem;
        font-weight: 600;
        min-width: 5.5rem;
      }

      .neutral-states-section-title {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.5rem;
      }

      .neutral-states-note {
        font-size: 0.875rem;
        margin: 0 0 1rem;
        max-width: 48rem;
      }
    </style>
    <div class="neutral-states-grid">
      <div>
        <p class="neutral-states-section-title">
          Filled — compare Primary vs Neutral
        </p>
        <p class="neutral-states-note">
          Hover and press each button. Neutral should darken the same way
          Primary does.
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="filled"
            >Default</modus-wc-button
          >
          <modus-wc-button color="primary" variant="filled" pressed
            >Pressed</modus-wc-button
          >
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="filled"
            >Default</modus-wc-button
          >
          <modus-wc-button color="neutral" variant="filled" pressed
            >Pressed</modus-wc-button
          >
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">
          Outlined — compare Primary vs Neutral
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="outlined"
            >Default</modus-wc-button
          >
          <modus-wc-button color="primary" variant="outlined" pressed
            >Pressed</modus-wc-button
          >
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="outlined"
            >Default</modus-wc-button
          >
          <modus-wc-button color="neutral" variant="outlined" pressed
            >Pressed</modus-wc-button
          >
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">
          Borderless — compare Primary vs Neutral
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="borderless"
            >Default</modus-wc-button
          >
          <modus-wc-button color="primary" variant="borderless" pressed
            >Pressed</modus-wc-button
          >
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="borderless"
            >Default</modus-wc-button
          >
          <modus-wc-button color="neutral" variant="borderless" pressed
            >Pressed</modus-wc-button
          >
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">
          Tertiary (for reference — uses DaisyUI neutral slot)
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Tertiary</span>
          <modus-wc-button color="tertiary" variant="filled"
            >Filled</modus-wc-button
          >
          <modus-wc-button color="tertiary" variant="outlined"
            >Outlined</modus-wc-button
          >
          <modus-wc-button color="tertiary" variant="borderless"
            >Borderless</modus-wc-button
          >
        </div>
      </div>
    </div>
  `},b={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (`icon-only`, `left-icon`, `right-icon`). In 2.0, icons are added via slots using the `modus-wc-icon` component.\n  - The `button-style` property has been renamed to `variant` with similar options.\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | `fill` → `filled`, `outline` → `outlined`           |\n| color           | color      | `dark` and `special` removed, `warning` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use `icon` slot                         |\n| left-icon       |            | Not carried over, use `icon` slot                         |\n| right-icon      |            | Not carried over, use `icon` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var y,h,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,x,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,B,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(B=l.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var N,D,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var E,k,I;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    \`;
  }
}`,...(I=(k=u.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var z,U,_;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<modus-wc-button>
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    \`;
  }
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var M,H,O;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(H=d.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var $,F,L;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var A,W,q;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Why Neutral needs custom state CSS

Most button colors (Primary, Secondary, Warning, etc.) use **DaisyUI color slots**. DaisyUI auto-calculates hover and pressed from the theme color.

**Neutral** uses the Modus **base-inverted** token (\\\`--modus-wc-color-base-inverted\\\`) — not a DaisyUI slot — so we define states in CSS using the **same rules** DaisyUI uses elsewhere.

| | Primary / Secondary | Neutral (new) |
|--|---------------------|---------------|
| Base color | Theme / DaisyUI slot | \\\`base-inverted\\\` token |
| Hover / pressed | Automatic | Custom CSS (same darken/tint pattern) |
| Design impact | Specify base color only | Specify base-inverted only; states follow |

**Neutral ≠ Tertiary:** \\\`tertiary\\\` uses DaisyUI's neutral slot. \\\`neutral\\\` uses base-inverted.

Full design notes: \\\`docs/button-neutral-color-design-notes.md\\\`

#### State rules (Neutral)

| Variant | Hover | Pressed |
|---------|-------|---------|
| Filled | 90% base-inverted + 10% black | 80% base-inverted + 20% black |
| Outlined / borderless | 12% base-inverted tint | Fills like filled default |

Compare **Primary** and **Neutral** below — interaction should feel the same; only the color differs.
        \`
      }
    }
  },
  render: () => html\`
    <style>
      .neutral-states-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .neutral-states-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
      }

      .neutral-states-label {
        font-size: 0.875rem;
        font-weight: 600;
        min-width: 5.5rem;
      }

      .neutral-states-section-title {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.5rem;
      }

      .neutral-states-note {
        font-size: 0.875rem;
        margin: 0 0 1rem;
        max-width: 48rem;
      }
    </style>
    <div class="neutral-states-grid">
      <div>
        <p class="neutral-states-section-title">
          Filled — compare Primary vs Neutral
        </p>
        <p class="neutral-states-note">
          Hover and press each button. Neutral should darken the same way
          Primary does.
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="filled"
            >Default</modus-wc-button
          >
          <modus-wc-button color="primary" variant="filled" pressed
            >Pressed</modus-wc-button
          >
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="filled"
            >Default</modus-wc-button
          >
          <modus-wc-button color="neutral" variant="filled" pressed
            >Pressed</modus-wc-button
          >
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">
          Outlined — compare Primary vs Neutral
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="outlined"
            >Default</modus-wc-button
          >
          <modus-wc-button color="primary" variant="outlined" pressed
            >Pressed</modus-wc-button
          >
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="outlined"
            >Default</modus-wc-button
          >
          <modus-wc-button color="neutral" variant="outlined" pressed
            >Pressed</modus-wc-button
          >
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">
          Borderless — compare Primary vs Neutral
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="borderless"
            >Default</modus-wc-button
          >
          <modus-wc-button color="primary" variant="borderless" pressed
            >Pressed</modus-wc-button
          >
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="borderless"
            >Default</modus-wc-button
          >
          <modus-wc-button color="neutral" variant="borderless" pressed
            >Pressed</modus-wc-button
          >
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">
          Tertiary (for reference — uses DaisyUI neutral slot)
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Tertiary</span>
          <modus-wc-button color="tertiary" variant="filled"
            >Filled</modus-wc-button
          >
          <modus-wc-button color="tertiary" variant="outlined"
            >Outlined</modus-wc-button
          >
          <modus-wc-button color="tertiary" variant="borderless"
            >Borderless</modus-wc-button
          >
        </div>
      </div>
    </div>
  \`
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var R,j,V;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - In 1.0 buttons had specific properties for adding icons (\\`icon-only\\`, \\`left-icon\\`, \\`right-icon\\`). In 2.0, icons are added via slots using the \\`modus-wc-icon\\` component.\n  - The \\`button-style\\` property has been renamed to \\`variant\\` with similar options.\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop        | 2.0 Prop   | Notes                                                       |\n|-----------------|------------|-------------------------------------------------------------|\n| aria-label      | aria-label |                                                             |\n| button-style    | variant    | \\`fill\\` → \\`filled\\`, \\`outline\\` → \\`outlined\\`           |\n| color           | color      | \\`dark\\` and \\`special\\` removed, \\`warning\\` added         |\n| critical-action |            | Not carried over                                            |\n| disabled        | disabled   |                                                             |\n| icon-only       |            | Not carried over, use \\`icon\\` slot                         |\n| left-icon       |            | Not carried over, use \\`icon\\` slot                         |\n| right-icon      |            | Not carried over, use \\`icon\\` slot                         |\n| show-caret      |            | Not carried over                                            |\n| size            | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type            | type       |                                                             |\n\n#### Event Mapping\n\n| 1.0 Event    | 2.0 Event    | Notes            |\n|--------------|--------------|------------------|\n| buttonClick  | buttonClick  |                  |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(V=(j=b.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const lt=["Default","ButtonShapes","DynamicTextUpdate","IconOnlyButton","IconLeftButton","IconRightButton","IconLeftAndRightButton","ShadowDomParent","NeutralColorStates","Migration"];export{r as ButtonShapes,a as Default,l as DynamicTextUpdate,d as IconLeftAndRightButton,u as IconLeftButton,i as IconOnlyButton,c as IconRightButton,b as Migration,p as NeutralColorStates,m as ShadowDomParent,lt as __namedExportsOrder,rt as default};
