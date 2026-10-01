import{b as n}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as k}from"./shadow-host-helper-C8P96xY4.js";const z={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","bottom","left"]},"show-delay":{control:{type:"number"},description:"Delay in ms before the tooltip shows on hover; 0 (default) shows immediately, 200ms is recommended so a passing cursor does not open it. Skipped if a tooltip closed within the last 300ms, on keyboard focus, and for touch"}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Wrap a focusable control (e.g. \`modus-wc-button\`) — Tab focus shows the tooltip; Tab away hides it
- For screen readers, set \`tooltip-id\` on the tip and matching \`aria-describedby\` on the trigger
- Press **Escape** to dismiss the tooltip without moving focus; it re-enables on the next hover or focus
        `}}}},S=o=>n`
  <modus-wc-button
    variant="outlined"
    color="tertiary"
    size="sm"
    aria-describedby=${t(o||void 0)}
  >
    Hover me
  </modus-wc-button>
`,x={parameters:{actions:{handles:["dismissEscape"]}},args:{"tooltip-id":"storybook-tooltip"},render:o=>n`
      <modus-wc-tooltip
        content=${t(o.content)}
        custom-class="${t(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?force-open="${o["force-open"]}"
        show-delay=${t(o["show-delay"])}
        tooltip-id="${t(o["tooltip-id"])}"
        position=${t(o.position)}
      >
        ${S(o["tooltip-id"])}
      </modus-wc-tooltip>
    `},r={...x},H=`<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start">
  <div style="align-items:center;display:flex;gap:0.375rem">
    <modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon>
    <span>First line of multiline content.</span>
  </div>
  <p>Second line of multiline content.</p>
</div>`;function C(o){const i=document.createElement("div");return i.innerHTML=o,i}const l={parameters:{docs:{description:{story:"\nUse `contentElement` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the `content` string prop. Your original node is not moved or mutated.\n\nTo update the tooltip content, reassign `contentElement` with a new element.\n        "},source:{transform:(o,{args:i})=>`<modus-wc-tooltip
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
<\/script>`}}},args:{position:"top","custom-class":"tooltip-rich-html-demo","tooltip-id":"storybook-tooltip-rich"},render:o=>{const i=C(H);return n`
      <modus-wc-tooltip
        .contentElement=${i}
        content=${t(o.content)}
        custom-class="${t(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?force-open="${o["force-open"]}"
        tooltip-id="${t(o["tooltip-id"])}"
        position=${t(o.position)}
      >
        ${S(o["tooltip-id"])}
      </modus-wc-tooltip>
    `}},a={args:{"tooltip-id":"storybook-tooltip-shadow"},render:o=>{if(!customElements.get("tooltip-shadow-host")){const i=k({componentTag:"modus-wc-tooltip",defaultInnerHTML:'<modus-wc-button variant="outlined" color="tertiary" size="sm">Hover</modus-wc-button>',propsMapper:(s,d)=>{const e=d;e.content=s.content??"Tooltip content",e.customClass=s["custom-class"]||"",e.disabled=!!s.disabled,e.forceOpen=s["force-open"]??!1,e.showDelay=s["show-delay"],e.tooltipId=s["tooltip-id"]??"storybook-tooltip-shadow",e.position=s.position??"auto";const p=d.querySelector("modus-wc-button");p&&e.tooltipId&&p.setAttribute("aria-describedby",e.tooltipId)}});customElements.define("tooltip-shadow-host",i)}return n`<tooltip-shadow-host
      .props=${{...o}}
    ></tooltip-shadow-host>`}},c={parameters:{docs:{description:{story:`
#### Breaking Changes
- The \`text\` prop has been renamed to \`content\`.

#### Prop Mapping
| 1.0 Prop | 2.0 Prop | Notes |
| :--- | :--- | :--- |
| aria-label | aria-label | |
| disabled | disabled | |
| position | position | Added \`auto\` option as default value |
| text | content | |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>n`<div></div>`};var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,w,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var g,y,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'tooltip-id': 'storybook-tooltip-shadow'
  },
  render: args => {
    if (!customElements.get('tooltip-shadow-host')) {
      const TooltipShadowHost = createShadowHostClass<TooltipArgs>({
        componentTag: 'modus-wc-tooltip',
        defaultInnerHTML: \`<modus-wc-button variant="outlined" color="tertiary" size="sm">Hover</modus-wc-button>\`,
        propsMapper: (v, el) => {
          const tooltipEl = el as unknown as {
            content: string;
            customClass: string;
            disabled: boolean;
            forceOpen: boolean | undefined;
            showDelay: number | undefined;
            tooltipId: string;
            position: string;
          };
          tooltipEl.content = v.content ?? 'Tooltip content';
          tooltipEl.customClass = v['custom-class'] || '';
          tooltipEl.disabled = Boolean(v.disabled);
          tooltipEl.forceOpen = v['force-open'] ?? false;
          tooltipEl.showDelay = v['show-delay'];
          tooltipEl.tooltipId = v['tooltip-id'] ?? 'storybook-tooltip-shadow';
          tooltipEl.position = v.position ?? 'auto';
          const trigger = el.querySelector('modus-wc-button');
          if (trigger && tooltipEl.tooltipId) {
            trigger.setAttribute('aria-describedby', tooltipEl.tooltipId);
          }
        }
      });
      customElements.define('tooltip-shadow-host', TooltipShadowHost);
    }
    return html\`<tooltip-shadow-host
      .props=\${{
      ...args
    }}
    ></tooltip-shadow-host>\`;
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var E,T,$;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(T=c.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const P=["Default","ContentElement","ShadowDomParent","Migration"];export{l as ContentElement,r as Default,c as Migration,a as ShadowDomParent,P as __namedExportsOrder,z as default};
