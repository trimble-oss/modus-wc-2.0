import{b as s}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";const M={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","bottom","left"]}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Wrap a focusable control (e.g. \`modus-wc-button\`) — Tab focus shows the tooltip; Tab away hides it
- For screen readers, set \`tooltip-id\` on the tip and matching \`aria-describedby\` on the trigger
- Press **Escape** to dismiss the tooltip without moving focus; it re-enables on the next hover or focus
        `}}}},$=t=>s`
  <modus-wc-button
    variant="outlined"
    color="tertiary"
    size="sm"
    aria-describedby=${n(t||void 0)}
  >
    Hover me
  </modus-wc-button>
`,C={parameters:{actions:{handles:["dismissEscape"]}},args:{"tooltip-id":"storybook-tooltip"},render:t=>s`
      <modus-wc-tooltip
        content=${n(t.content)}
        custom-class="${n(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${n(t["tooltip-id"])}"
        position=${n(t.position)}
      >
        ${$(t["tooltip-id"])}
      </modus-wc-tooltip>
    `},r={...C},x=`<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start">
  <div style="align-items:center;display:flex;gap:0.375rem">
    <modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon>
    <span>First line of multiline content.</span>
  </div>
  <p>Second line of multiline content.</p>
</div>`;function S(t){const i=document.createElement("div");return i.innerHTML=t,i}const l={parameters:{docs:{description:{story:"\nUse `contentElement` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the `content` string prop. Your original node is not moved or mutated.\n\nTo update the tooltip content, reassign `contentElement` with a new element.\n        "},source:{transform:(t,{args:i})=>`<modus-wc-tooltip
  position="${i.position??"auto"}"
  custom-class="tooltip-rich-html-demo"
  tooltip-id="storybook-tooltip-rich"
>
  <modus-wc-button
    variant="outlined"
    color="tertiary"
    size="sm"
    aria-describedby="storybook-tooltip-rich"
  >
    Hover me
  </modus-wc-button>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  el.innerHTML = '<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start"><div style="align-items:center;display:flex;gap:0.375rem"><modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon><span>First line of multiline content.</span></div><p>Second line of multiline content.</p></div>';
  document.querySelector('modus-wc-tooltip').contentElement = el;
<\/script>`}}},args:{position:"top","custom-class":"tooltip-rich-html-demo","tooltip-id":"storybook-tooltip-rich"},render:t=>{const i=S(x);return s`
      <modus-wc-tooltip
        .contentElement=${i}
        content=${n(t.content)}
        custom-class="${n(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${n(t["tooltip-id"])}"
        position=${n(t.position)}
      >
        ${$(t["tooltip-id"])}
      </modus-wc-tooltip>
    `}},p={args:{"tooltip-id":"storybook-tooltip-shadow"},render:t=>{if(!customElements.get("tooltip-shadow-host")){class i extends HTMLElement{constructor(){super(),this.sr=this.attachShadow({mode:"open"})}connectedCallback(){this.tooltipEl||this.renderContent()}set props(o){this._props=o,this.tooltipEl&&this.applyProps()}renderContent(){this.sr.innerHTML="",this.tooltipEl=document.createElement("modus-wc-tooltip");const o=document.createElement("modus-wc-button");o.variant="outlined",o.color="tertiary",o.size="sm",o.textContent="Hover",this.tooltipEl.appendChild(o),this.sr.appendChild(this.tooltipEl),Promise.resolve().then(()=>this.applyProps())}applyProps(){const o=this._props,e=this.tooltipEl;if(!o||!e)return;e.content=o.content??"Tooltip content",e.customClass=o["custom-class"]??"",e.disabled=!!o.disabled,e.forceOpen=o["force-open"]??!1,e.tooltipId=o["tooltip-id"]??"storybook-tooltip-shadow",e.position=o.position??"auto";const c=e.querySelector("modus-wc-button");c&&e.tooltipId&&c.setAttribute("aria-describedby",e.tooltipId)}}customElements.define("tooltip-shadow-host",i)}return s`<tooltip-shadow-host
      .props=${{...t}}
    ></tooltip-shadow-host>`}},a={parameters:{docs:{description:{story:`
#### Breaking Changes
- The \`text\` prop has been renamed to \`content\`.

#### Prop Mapping
| 1.0 Prop | 2.0 Prop | Notes |
| :--- | :--- | :--- |
| aria-label | aria-label | |
| disabled | disabled | |
| position | position | Added \`auto\` option as default value |
| text | content | |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,b,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Use \\\`contentElement\\\` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the \\\`content\\\` string prop. Your original node is not moved or mutated.

To update the tooltip content, reassign \\\`contentElement\\\` with a new element.
        \`
      },
      source: {
        transform: (_src, {
          args
        }) => \`<modus-wc-tooltip
  position="\${args.position ?? 'auto'}"
  custom-class="tooltip-rich-html-demo"
  tooltip-id="storybook-tooltip-rich"
>
  <modus-wc-button
    variant="outlined"
    color="tertiary"
    size="sm"
    aria-describedby="storybook-tooltip-rich"
  >
    Hover me
  </modus-wc-button>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  el.innerHTML = '<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start"><div style="align-items:center;display:flex;gap:0.375rem"><modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon><span>First line of multiline content.</span></div><p>Second line of multiline content.</p></div>';
  document.querySelector('modus-wc-tooltip').contentElement = el;
<\/script>\`
      }
    }
  },
  args: {
    position: 'top',
    'custom-class': 'tooltip-rich-html-demo',
    'tooltip-id': 'storybook-tooltip-rich'
  },
  render: args => {
    const contentElement = buildRichTooltipContent(defaultRichHtml);
    // prettier-ignore
    return html\`
      <modus-wc-tooltip
        .contentElement=\${contentElement}
        content=\${ifDefined(args.content)}
        custom-class="\${ifDefined(args['custom-class'])}"
        ?disabled="\${args.disabled}"
        ?force-open="\${args['force-open']}"
        tooltip-id="\${ifDefined(args['tooltip-id'])}"
        position=\${ifDefined(args.position)}
      >
        \${tooltipTrigger(args['tooltip-id'])}
      </modus-wc-tooltip>
    \`;
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,v,w;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'tooltip-id': 'storybook-tooltip-shadow'
  },
  render: args => {
    if (!customElements.get('tooltip-shadow-host')) {
      class TooltipShadowHost extends HTMLElement {
        private sr: ShadowRoot;
        private _props?: TooltipArgs;
        private tooltipEl?: HTMLElement & {
          content: string;
          customClass: string;
          disabled: boolean;
          forceOpen: boolean | undefined;
          tooltipId: string;
          position: string;
        };
        constructor() {
          super();
          this.sr = this.attachShadow({
            mode: 'open'
          });
        }
        connectedCallback() {
          if (this.tooltipEl) return;
          this.renderContent();
        }
        set props(v: TooltipArgs) {
          this._props = v;
          if (this.tooltipEl) this.applyProps();
        }
        private renderContent() {
          this.sr.innerHTML = '';
          this.tooltipEl = document.createElement('modus-wc-tooltip') as typeof this.tooltipEl;
          const button = document.createElement('modus-wc-button') as HTMLElement & {
            variant: string;
            color: string;
            size: string;
          };
          button.variant = 'outlined';
          button.color = 'tertiary';
          button.size = 'sm';
          button.textContent = 'Hover';
          this.tooltipEl!.appendChild(button);
          this.sr.appendChild(this.tooltipEl!);
          void Promise.resolve().then(() => this.applyProps());
        }
        private applyProps() {
          const v = this._props;
          const tooltip = this.tooltipEl;
          if (!v || !tooltip) return;
          tooltip.content = v.content ?? 'Tooltip content';
          tooltip.customClass = v['custom-class'] ?? '';
          tooltip.disabled = Boolean(v.disabled);
          tooltip.forceOpen = v['force-open'] ?? false;
          tooltip.tooltipId = v['tooltip-id'] ?? 'storybook-tooltip-shadow';
          tooltip.position = v.position ?? 'auto';
          const trigger = tooltip.querySelector('modus-wc-button');
          if (trigger && tooltip.tooltipId) {
            trigger.setAttribute('aria-describedby', tooltip.tooltipId);
          }
        }
      }
      customElements.define('tooltip-shadow-host', TooltipShadowHost);
    }
    return html\`<tooltip-shadow-host
      .props=\${{
      ...args
    }}
    ></tooltip-shadow-host>\`;
  }
}`,...(w=(v=p.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,E,T;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes
- The \\\`text\\\` prop has been renamed to \\\`content\\\`.

#### Prop Mapping
| 1.0 Prop | 2.0 Prop | Notes |
| :--- | :--- | :--- |
| aria-label | aria-label | |
| disabled | disabled | |
| position | position | Added \\\`auto\\\` option as default value |
| text | content | |
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
}`,...(T=(E=a.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const _=["Default","ContentElement","ShadowDomParent","Migration"];export{l as ContentElement,r as Default,a as Migration,p as ShadowDomParent,_ as __namedExportsOrder,M as default};
