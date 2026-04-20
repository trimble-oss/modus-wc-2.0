import{x as a}from"./lit-element-CucEn6F2.js";import{o as n}from"./if-defined-BiZP-SBN.js";const T={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","left","bottom"]}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.

The component supports a \`<slot>\` for injecting custom tooltip content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `}}}},f={parameters:{actions:{handles:["dismissEscape"]}},render:o=>a`
      <modus-wc-tooltip
        content=${n(o.content)}
        custom-class="${n(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?force-open="${o["force-open"]}"
        tooltip-id="${n(o["tooltip-id"])}"
        position=${n(o.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `},s={...f},i={render:o=>{if(!customElements.get("tooltip-shadow-host")){class v extends HTMLElement{constructor(){super(),this.sr=this.attachShadow({mode:"open"})}connectedCallback(){this.tooltipEl||this.renderContent()}set props(t){this._props=t,this.tooltipEl&&this.applyProps()}renderContent(){this.sr.innerHTML="",this.tooltipEl=document.createElement("modus-wc-tooltip");const t=document.createElement("modus-wc-badge");t.textContent="Hover",this.tooltipEl.appendChild(t),this.sr.appendChild(this.tooltipEl),Promise.resolve().then(()=>this.applyProps())}applyProps(){const t=this._props,e=this.tooltipEl;!t||!e||(e.content=t.content??"Tooltip content",e.customClass=t["custom-class"]??"",e.disabled=!!t.disabled,e.forceOpen=t["force-open"]||void 0,e.tooltipId=t["tooltip-id"]??"",e.position=t.position??"auto")}}customElements.define("tooltip-shadow-host",v)}return a`<tooltip-shadow-host
      .props=${{...o}}
    ></tooltip-shadow-host>`}},p={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 tooltip positioning was handled by Popper.js. In 2.0, positioning is handled using CSS.
  - The \`text\` prop has been renamed to \`content\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop    | Notes                                    |
|-------------|-------------|------------------------------------------|
| aria-label  | aria-label  |                                          |
| disabled    | disabled    |                                          |
| position    | position    | Added \`auto\` option as default value   |
| text        | content     |                                          |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var r,l,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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

          // Apply props after Stencil hydrates the tooltip element
          void Promise.resolve().then(() => this.applyProps());
        }
        private applyProps() {
          const v = this._props;
          const tooltip = this.tooltipEl;
          if (!v || !tooltip) return;
          tooltip.content = v.content ?? 'Tooltip content';
          tooltip.customClass = v['custom-class'] ?? '';
          tooltip.disabled = Boolean(v.disabled);
          tooltip.forceOpen = v['force-open'] || undefined;
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
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,b,g;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 tooltip positioning was handled by Popper.js. In 2.0, positioning is handled using CSS.
  - The \\\`text\\\` prop has been renamed to \\\`content\\\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop    | Notes                                    |
|-------------|-------------|------------------------------------------|
| aria-label  | aria-label  |                                          |
| disabled    | disabled    |                                          |
| position    | position    | Added \\\`auto\\\` option as default value   |
| text        | content     |                                          |
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
}`,...(g=(b=p.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const y=["Default","ShadowDomParent","Migration"];export{s as Default,p as Migration,i as ShadowDomParent,y as __namedExportsOrder,T as default};
