import{b as i}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";const k={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","bottom","left"]}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Wrap a focusable control (e.g. \`modus-wc-button\`) — Tab focus shows the tooltip; Tab away hides it
- Screen readers announce the trigger's accessible name plus the tooltip content via \`aria-describedby\`
- Press **Escape** to dismiss the tooltip without moving focus; it re-enables on the next hover or focus
        `}}}},T=()=>i`
  <modus-wc-button variant="outlined" color="tertiary" size="sm">
    Hover
  </modus-wc-button>
`,$={parameters:{actions:{handles:["dismissEscape"]}},args:{"tooltip-id":"storybook-tooltip"},render:t=>i`
      <modus-wc-tooltip
        content=${n(t.content)}
        custom-class="${n(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${n(t["tooltip-id"])}"
        position=${n(t.position)}
      >
        ${T()}
      </modus-wc-tooltip>
    `},r={...$},C=`<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start">
  <div style="align-items:center;display:flex;gap:0.375rem">
    <modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon>
    <span>First line of multiline content.</span>
  </div>
  <p>Second line of multiline content.</p>
</div>`;function x(t){const e=document.createElement("div");return e.innerHTML=t,e}const l={parameters:{docs:{description:{story:"\nUse `contentElement` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the `content` string prop. Your original node is not moved or mutated.\n\nTo update the tooltip content, reassign `contentElement` with a new element.\n        "},source:{transform:(t,{args:e})=>`<modus-wc-tooltip
  position="${e.position??"auto"}"
  custom-class="tooltip-rich-html-demo"
  tooltip-id="storybook-tooltip-rich"
>
  <modus-wc-button variant="outlined" color="tertiary" size="sm">
    Hover me
  </modus-wc-button>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  el.innerHTML = '<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start"><div style="align-items:center;display:flex;gap:0.375rem"><modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon><span>First line of multiline content.</span></div><p>Second line of multiline content.</p></div>';
  document.querySelector('modus-wc-tooltip').contentElement = el;
<\/script>`}}},args:{position:"top","custom-class":"tooltip-rich-html-demo","tooltip-id":"storybook-tooltip-rich"},render:t=>{const e=x(C);return i`
      <modus-wc-tooltip
        .contentElement=${e}
        content=${n(t.content)}
        custom-class="${n(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${n(t["tooltip-id"])}"
        position=${n(t.position)}
      >
        ${T()}
      </modus-wc-tooltip>
    `}},a={args:{"tooltip-id":"storybook-tooltip-shadow"},render:t=>{if(!customElements.get("tooltip-shadow-host")){class e extends HTMLElement{constructor(){super(),this.sr=this.attachShadow({mode:"open"})}connectedCallback(){this.tooltipEl||this.renderContent()}set props(o){this._props=o,this.tooltipEl&&this.applyProps()}renderContent(){this.sr.innerHTML="",this.tooltipEl=document.createElement("modus-wc-tooltip");const o=document.createElement("modus-wc-button");o.variant="outlined",o.color="tertiary",o.size="sm",o.textContent="Hover",this.tooltipEl.appendChild(o),this.sr.appendChild(this.tooltipEl),Promise.resolve().then(()=>this.applyProps())}applyProps(){const o=this._props,s=this.tooltipEl;!o||!s||(s.content=o.content??"Tooltip content",s.customClass=o["custom-class"]??"",s.disabled=!!o.disabled,s.forceOpen=o["force-open"]??!1,s.tooltipId=o["tooltip-id"]??"storybook-tooltip-shadow",s.position=o.position??"auto")}}customElements.define("tooltip-shadow-host",e)}return i`<tooltip-shadow-host
      .props=${{...t}}
    ></tooltip-shadow-host>`}},p={parameters:{docs:{description:{story:`
#### Breaking Changes
- The \`text\` prop has been renamed to \`content\`.

#### Prop Mapping
| 1.0 Prop | 2.0 Prop | Notes |
| :--- | :--- | :--- |
| aria-label | aria-label | |
| disabled | disabled | |
| position | position | Added \`auto\` option as default value |
| text | content | |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  <modus-wc-button variant="outlined" color="tertiary" size="sm">
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
        \${tooltipTrigger()}
      </modus-wc-tooltip>
    \`;
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,v,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var w,y,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const M=["Default","ContentElement","ShadowDomParent","Migration"];export{l as ContentElement,r as Default,p as Migration,a as ShadowDomParent,M as __namedExportsOrder,k as default};
