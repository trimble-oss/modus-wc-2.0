import{b as p}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";const M={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","bottom","left"]}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `}}}},C={parameters:{actions:{handles:["dismissEscape"]}},render:t=>p`
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
    `},r={...C},H=`<strong>Tooltip</strong>
<p>First line of multiline content.</p>
<p>Second line of multiline content.</p>`;function $(t){const o=document.createElement("div");o.style.cssText="align-items:flex-start;display:flex;gap:0.375rem;text-align:start";const i=document.createElement("modus-wc-icon");i.setAttribute("decorative",""),i.setAttribute("name","thumbs_up"),i.setAttribute("size","sm");const e=document.createElement("div");return e.innerHTML=t,o.append(i,e),o}const c={parameters:{docs:{description:{story:"\nUse `contentElement` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the `content` string prop.\n\nThe element is **deep-cloned** (`cloneNode(true)`) into the tooltip balloon on `document.body`. Your original node is **not moved or mutated**.\n\n- **Dynamic rich content** — create a new element whenever the HTML changes, or set `contentElement` to `undefined` and re-assign to refresh the clone. Mutating the source node without reassignment does not update the displayed clone.\n- **Interactive content** — attach listeners with event delegation on `document` (or a parent), add `custom-class` with `pointer-events: auto` so the balloon accepts clicks, and use `force-open` to keep the tooltip visible while interacting with it.\n        "},source:{transform:(t,{args:o})=>`<modus-wc-tooltip
  position="${o.position??"auto"}"
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
<\/script>`}}},args:{position:"top","custom-class":"tooltip-rich-html-demo"},render:t=>{const o=$(H);return p`
      <modus-wc-tooltip
        .contentElement=${o}
        content=${n(t.content)}
        custom-class="${n(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${n(t["tooltip-id"])}"
        position=${n(t.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `}},a={render:t=>{if(!customElements.get("tooltip-shadow-host")){class o extends HTMLElement{constructor(){super(),this.sr=this.attachShadow({mode:"open"})}connectedCallback(){this.tooltipEl||this.renderContent()}set props(e){this._props=e,this.tooltipEl&&this.applyProps()}renderContent(){this.sr.innerHTML="",this.tooltipEl=document.createElement("modus-wc-tooltip");const e=document.createElement("modus-wc-badge");e.textContent="Hover",this.tooltipEl.appendChild(e),this.sr.appendChild(this.tooltipEl),Promise.resolve().then(()=>this.applyProps())}applyProps(){const e=this._props,s=this.tooltipEl;!e||!s||(s.content=e.content??"Tooltip content",s.customClass=e["custom-class"]??"",s.disabled=!!e.disabled,s.forceOpen=e["force-open"]??!1,s.tooltipId=e["tooltip-id"]??"",s.position=e.position??"auto")}}customElements.define("tooltip-shadow-host",o)}return p`<tooltip-shadow-host
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>p`<div></div>`};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,b,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Use \\\`contentElement\\\` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the \\\`content\\\` string prop.

The element is **deep-cloned** (\\\`cloneNode(true)\\\`) into the tooltip balloon on \\\`document.body\\\`. Your original node is **not moved or mutated**.

- **Dynamic rich content** — create a new element whenever the HTML changes, or set \\\`contentElement\\\` to \\\`undefined\\\` and re-assign to refresh the clone. Mutating the source node without reassignment does not update the displayed clone.
- **Interactive content** — attach listeners with event delegation on \\\`document\\\` (or a parent), add \\\`custom-class\\\` with \\\`pointer-events: auto\\\` so the balloon accepts clicks, and use \\\`force-open\\\` to keep the tooltip visible while interacting with it.
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
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var w,v,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var E,T,y;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(y=(T=l.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const P=["Default","ContentElement","ShadowDomParent","Migration"];export{c as ContentElement,r as Default,l as Migration,a as ShadowDomParent,P as __namedExportsOrder,M as default};
