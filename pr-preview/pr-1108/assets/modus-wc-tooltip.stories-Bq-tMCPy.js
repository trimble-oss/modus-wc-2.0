import{w as y}from"./decorator-D4YmxizW.js";import{b as l}from"./lit-element-DgBvYnzn.js";import{o as e}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const L={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","left","bottom"]}},decorators:[y],parameters:{actions:{handles:["dismissEscape"]},docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.
 
The component supports a \`contentElement\` prop for rich HTML tooltip content such as multiline text. When set, \`contentElement\` takes precedence over the \`content\` string prop. The default slot is used for the trigger element.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `}}}},i={render:t=>l`
      <modus-wc-tooltip
        content=${e(t.content)}
        custom-class="${e(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${e(t["tooltip-id"])}"
        position=${e(t.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `},c="<strong>Tooltip</strong><p>Rich HTML content</p>",r={parameters:{docs:{description:{story:"Use `contentElement` to pass a rich HTML element as the tooltip body. `contentElement` takes precedence over the `content` string prop."},source:{transform:(t,{args:s})=>`<modus-wc-tooltip
  position="${s.position??"auto"}"
>
  <modus-wc-badge>Hover</modus-wc-badge>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  el.innerHTML = '${c}';
  document.querySelector('modus-wc-tooltip').contentElement = el;
<\/script>`}}},args:{position:"auto"},render:t=>{const s=document.createElement("div");return s.innerHTML=c,l`
      <modus-wc-tooltip
        .contentElement=${s}
        content=${e(t.content)}
        custom-class="${e(t["custom-class"])}"
        ?disabled="${t.disabled}"
        ?force-open="${t["force-open"]}"
        tooltip-id="${e(t["tooltip-id"])}"
        position=${e(t.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `}},p={render:t=>{if(!customElements.get("tooltip-shadow-host")){class s extends HTMLElement{constructor(){super(),this.sr=this.attachShadow({mode:"open"})}connectedCallback(){this.tooltipEl||this.renderContent()}set props(o){this._props=o,this.tooltipEl&&this.applyProps()}renderContent(){this.sr.innerHTML="",this.tooltipEl=document.createElement("modus-wc-tooltip");const o=document.createElement("modus-wc-badge");o.textContent="Hover",this.tooltipEl.appendChild(o),this.sr.appendChild(this.tooltipEl),Promise.resolve().then(()=>this.applyProps())}applyProps(){const o=this._props,n=this.tooltipEl;!o||!n||(n.content=o.content??"Tooltip content",n.customClass=o["custom-class"]??"",n.disabled=!!o.disabled,n.forceOpen=o["force-open"]??!1,n.tooltipId=o["tooltip-id"]??"",n.position=o.position??"auto")}}customElements.define("tooltip-shadow-host",s)}return l`<tooltip-shadow-host
      .props=${{...t}}
    ></tooltip-shadow-host>`}},a={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0, tooltip positioning was managed using Popper.js. In 2.0, tooltip positioning continues to be handled by Popper.js.
  - The \`text\` prop has been renamed to \`content\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop    | Notes                                    |
|-------------|-------------|------------------------------------------|
| aria-label  | aria-label  |                                          |
| disabled    | disabled    |                                          |
| position    | position    | Added \`auto\` option as default value   |
| text        | content     |                                          |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var d,m,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args =>
  // prettier-ignore
  html\`
      <modus-wc-tooltip
        content=\${ifDefined(args.content)}
        custom-class="\${ifDefined(args['custom-class'])}"
        ?disabled="\${args.disabled}"
        ?force-open="\${args['force-open']}"
        tooltip-id="\${ifDefined(args['tooltip-id'])}"
        position=\${ifDefined(args.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    \`
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Use \`contentElement\` to pass a rich HTML element as the tooltip body. \`contentElement\` takes precedence over the \`content\` string prop.'
      },
      source: {
        transform: (_src, {
          args
        }) => \`<modus-wc-tooltip
  position="\${args.position ?? 'auto'}"
>
  <modus-wc-badge>Hover</modus-wc-badge>
</modus-wc-tooltip>

<script>
  const el = document.createElement('div');
  el.innerHTML = '\${richHtml}';
  document.querySelector('modus-wc-tooltip').contentElement = el;
<\/script>\`
      }
    }
  },
  args: {
    position: 'auto'
  },
  render: args => {
    const el = document.createElement('div');
    el.innerHTML = richHtml;
    // prettier-ignore
    return html\`
      <modus-wc-tooltip
        .contentElement=\${el}
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,w,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(w=p.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var E,$,T;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0, tooltip positioning was managed using Popper.js. In 2.0, tooltip positioning continues to be handled by Popper.js.
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
}`,...(T=($=a.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};const x=["Default","WithContentElement","ShadowDomParent","Migration"];export{i as Default,a as Migration,p as ShadowDomParent,r as WithContentElement,x as __namedExportsOrder,L as default};
