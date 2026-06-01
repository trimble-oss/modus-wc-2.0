import{b as a}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";const P={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","bottom","left"]}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `}}}},C={parameters:{actions:{handles:["dismissEscape"]}},render:t=>a`
      <modus-wc-tooltip
        content=${n(t.content)}
        custom-class="${n(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${n(t["tooltip-id"])}"
        position=${n(t.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `},r={...C},$=`<strong>Tooltip</strong>
<p>First line of multiline content.</p>
<p>Second line of multiline content.</p>`;function H(t){const e=document.createElement("div");e.style.cssText="align-items:flex-start;display:flex;gap:0.375rem;text-align:start";const i=document.createElement("modus-wc-icon");i.setAttribute("decorative",""),i.setAttribute("name","thumbs_up"),i.setAttribute("size","sm");const o=document.createElement("div");return o.innerHTML=t,e.append(i,o),e}const p={parameters:{docs:{description:{story:"\nUse `contentElement` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the `content` string prop. Your original node is not moved or mutated.\n\nTo update the tooltip content, reassign `contentElement` with a new element.\n        "},source:{transform:(t,{args:e})=>`<modus-wc-tooltip
  position="${e.position??"auto"}"
  custom-class="tooltip-rich-html-demo"
>
  <modus-wc-badge>Hover</modus-wc-badge>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  const icon = document.createElement('modus-wc-icon');
  icon.setAttribute('decorative', '');
  icon.setAttribute('name', 'thumbs_up');
  icon.setAttribute('size', 'sm');

  const text = document.createElement('div');
  text.innerHTML = '<strong>Tooltip</strong><p>First line</p><p>Second line</p>';

  el.append(icon, text);
  document.querySelector('modus-wc-tooltip').contentElement = el;
<\/script>`}}},args:{position:"top","custom-class":"tooltip-rich-html-demo"},render:t=>{const e=H($);return a`
      <modus-wc-tooltip
        .contentElement=${e}
        content=${n(t.content)}
        custom-class="${n(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${n(t["tooltip-id"])}"
        position=${n(t.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `}},c={render:t=>{if(!customElements.get("tooltip-shadow-host")){class e extends HTMLElement{constructor(){super(),this.sr=this.attachShadow({mode:"open"})}connectedCallback(){this.tooltipEl||this.renderContent()}set props(o){this._props=o,this.tooltipEl&&this.applyProps()}renderContent(){this.sr.innerHTML="",this.tooltipEl=document.createElement("modus-wc-tooltip");const o=document.createElement("modus-wc-badge");o.textContent="Hover",this.tooltipEl.appendChild(o),this.sr.appendChild(this.tooltipEl),Promise.resolve().then(()=>this.applyProps())}applyProps(){const o=this._props,s=this.tooltipEl;!o||!s||(s.content=o.content??"Tooltip content",s.customClass=o["custom-class"]??"",s.disabled=!!o.disabled,s.forceOpen=o["force-open"]??!1,s.tooltipId=o["tooltip-id"]??"",s.position=o.position??"auto")}}customElements.define("tooltip-shadow-host",e)}return a`<tooltip-shadow-host
      .props=${{...t}}
    ></tooltip-shadow-host>`}},l={parameters:{docs:{description:{story:`
#### Breaking Changes
- The \`text\` prop has been renamed to \`content\`.

#### Prop Mapping
| 1.0 Prop | 2.0 Prop | Notes |
| :--- | :--- | :--- |
| aria-label | aria-label | |
| disabled | disabled | |
| position | position | Added \`auto\` option as default value |
| text | content | |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,b,g;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
>
  <modus-wc-badge>Hover</modus-wc-badge>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  const icon = document.createElement('modus-wc-icon');
  icon.setAttribute('decorative', '');
  icon.setAttribute('name', 'thumbs_up');
  icon.setAttribute('size', 'sm');

  const text = document.createElement('div');
  text.innerHTML = '<strong>Tooltip</strong><p>First line</p><p>Second line</p>';

  el.append(icon, text);
  document.querySelector('modus-wc-tooltip').contentElement = el;
<\/script>\`
      }
    }
  },
  args: {
    position: 'top',
    'custom-class': 'tooltip-rich-html-demo'
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
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    \`;
  }
}`,...(g=(b=p.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,w,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          const badge = document.createElement('modus-wc-badge');
          badge.textContent = 'Hover';
          this.tooltipEl!.appendChild(badge);
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
          tooltip.tooltipId = v['tooltip-id'] ?? '';
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
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var v,T,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(T=l.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const A=["Default","ContentElement","ShadowDomParent","Migration"];export{p as ContentElement,r as Default,l as Migration,c as ShadowDomParent,A as __namedExportsOrder,P as default};
