import{b as r}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";const $={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","left","bottom"]}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.
 
The component supports a named \`slot="content"\` for injecting rich HTML tooltip content such as multiline text. The default slot is used for the trigger content, and the \`content\` prop will be ignored when the named content slot is used.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `}}}},C={parameters:{actions:{handles:["dismissEscape"]}},render:t=>r`
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
    `},s={...C},i={parameters:{actions:{handles:["dismissEscape"]},docs:{description:{story:"Use the `content` slot for static rich tooltip content such as multiline text."}}},render:t=>r`
    <modus-wc-tooltip
      custom-class=${n(t["custom-class"])}"
      ?disabled=${t.disabled}
      ?force-open=${t["force-open"]}
      tooltip-id="${n(t["tooltip-id"])}"
      position=${n(t.position)}
    >
      <modus-wc-badge>Hover</modus-wc-badge>
      <div slot="content">
        <div style="display: flex; flex-direction: column; gap: 0.125rem;">
          <span>First line of tooltip</span>
          <span>Second line of tooltip</span>
        </div>
      </div>
    </modus-wc-tooltip>
  `},p={render:t=>{if(!customElements.get("tooltip-shadow-host")){class y extends HTMLElement{constructor(){super(),this.sr=this.attachShadow({mode:"open"})}connectedCallback(){this.tooltipEl||this.renderContent()}set props(o){this._props=o,this.tooltipEl&&this.applyProps()}renderContent(){this.sr.innerHTML="",this.tooltipEl=document.createElement("modus-wc-tooltip");const o=document.createElement("modus-wc-badge");o.textContent="Hover",this.tooltipEl.appendChild(o),this.sr.appendChild(this.tooltipEl),Promise.resolve().then(()=>this.applyProps())}applyProps(){const o=this._props,e=this.tooltipEl;!o||!e||(e.content=o.content??"Tooltip content",e.customClass=o["custom-class"]??"",e.disabled=!!o.disabled,e.forceOpen=o["force-open"]??!1,e.tooltipId=o["tooltip-id"]??"",e.position=o.position??"auto")}}customElements.define("tooltip-shadow-host",y)}return r`<tooltip-shadow-host
      .props=${{...t}}
    ></tooltip-shadow-host>`}},a={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var l,d,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,h,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    actions: {
      handles: ['dismissEscape']
    },
    docs: {
      description: {
        story: 'Use the \`content\` slot for static rich tooltip content such as multiline text.'
      }
    }
  },
  render: args => html\`
    <modus-wc-tooltip
      custom-class=\${ifDefined(args['custom-class'])}"
      ?disabled=\${args.disabled}
      ?force-open=\${args['force-open']}
      tooltip-id="\${ifDefined(args['tooltip-id'])}"
      position=\${ifDefined(args.position)}
    >
      <modus-wc-badge>Hover</modus-wc-badge>
      <div slot="content">
        <div style="display: flex; flex-direction: column; gap: 0.125rem;">
          <span>First line of tooltip</span>
          <span>Second line of tooltip</span>
        </div>
      </div>
    </modus-wc-tooltip>
  \`
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,b,g;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(b=p.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,w,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const x=["Default","ContentSlot","ShadowDomParent","Migration"];export{i as ContentSlot,s as Default,a as Migration,p as ShadowDomParent,x as __namedExportsOrder,$ as default};
