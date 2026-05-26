import{b as l}from"./lit-element-DgBvYnzn.js";import{o as e}from"./if-defined-BnVFTJ4o.js";const M={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","left","bottom"]}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.
 
The component supports a named \`slot="content"\` for rich HTML tooltip content such as multiline text. Slotted content is cloned on mount and stays in sync when the slot DOM changes later. For plain dynamic text, use the \`content\` prop instead. The default slot is used for the trigger content, and the \`content\` prop is ignored when the named content slot is used.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `}}}},y=t=>{var n;return`
<script>
  const richEl = document.createElement('${((n=t==null?void 0:t.tagName)==null?void 0:n.toLowerCase())??"div"}');
  richEl.innerHTML = \`${(t==null?void 0:t.innerHTML)??""}\`;
  document.querySelector('modus-wc-tooltip').contentElement = richEl;
<\/script>`},$={parameters:{actions:{handles:["dismissEscape"]}},render:t=>l`
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
    `},i={...$},r={parameters:{actions:{handles:["dismissEscape"]},docs:{description:{story:"Use `contentElement` to pass rich HTML into the tooltip balloon via property binding. `contentElement` takes precedence over the `content` string prop."},source:{transform:(t,{args:n})=>`<modus-wc-tooltip
  position="${n.position??"auto"}"
>
  <modus-wc-badge>Hover</modus-wc-badge>
</modus-wc-tooltip>${y(n.contentElement)}`}}},args:{contentElement:Object.assign(document.createElement("div"),{innerHTML:"<strong>Tooltip</strong><p>Rich HTML content</p>"}),position:"auto"},argTypes:{contentElement:{table:{disable:!0}}},render:t=>l`
    <modus-wc-tooltip
      .contentElement=${t.contentElement}
      content=${e(t.content)}
      custom-class="${e(t["custom-class"])}"
      ?disabled="${t.disabled}"
      ?force-open="${t["force-open"]}"
      tooltip-id="${e(t["tooltip-id"])}"
      position=${e(t.position)}
    >
      <modus-wc-badge>Hover</modus-wc-badge>
    </modus-wc-tooltip>
  `},p={render:t=>{if(!customElements.get("tooltip-shadow-host")){class n extends HTMLElement{constructor(){super(),this.sr=this.attachShadow({mode:"open"})}connectedCallback(){this.tooltipEl||this.renderContent()}set props(o){this._props=o,this.tooltipEl&&this.applyProps()}renderContent(){this.sr.innerHTML="",this.tooltipEl=document.createElement("modus-wc-tooltip");const o=document.createElement("modus-wc-badge");o.textContent="Hover",this.tooltipEl.appendChild(o),this.sr.appendChild(this.tooltipEl),Promise.resolve().then(()=>this.applyProps())}applyProps(){const o=this._props,s=this.tooltipEl;!o||!s||(s.content=o.content??"Tooltip content",s.customClass=o["custom-class"]??"",s.disabled=!!o.disabled,s.forceOpen=o["force-open"]??!1,s.tooltipId=o["tooltip-id"]??"",s.position=o.position??"auto")}}customElements.define("tooltip-shadow-host",n)}return l`<tooltip-shadow-host
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var c,d,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    actions: {
      handles: ['dismissEscape']
    },
    docs: {
      description: {
        story: 'Use \`contentElement\` to pass rich HTML into the tooltip balloon via property binding. \`contentElement\` takes precedence over the \`content\` string prop.'
      },
      source: {
        transform: (_src, {
          args
        }) => \`<modus-wc-tooltip
  position="\${args.position ?? 'auto'}"
>
  <modus-wc-badge>Hover</modus-wc-badge>
</modus-wc-tooltip>\${getContentElementScript(args.contentElement as HTMLElement)}\`
      }
    }
  },
  args: {
    contentElement: Object.assign(document.createElement('div'), {
      innerHTML: '<strong>Tooltip</strong><p>Rich HTML content</p>'
    }),
    position: 'auto'
  },
  argTypes: {
    contentElement: {
      table: {
        disable: true
      }
    }
  },
  // prettier-ignore
  render: args => html\`
    <modus-wc-tooltip
      .contentElement=\${args.contentElement}
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
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,E,w;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(E=p.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var f,v,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const S=["Default","WithContentElement","ShadowDomParent","Migration"];export{i as Default,a as Migration,p as ShadowDomParent,r as WithContentElement,S as __namedExportsOrder,M as default};
