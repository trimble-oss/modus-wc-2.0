import{b as s}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as x}from"./shadow-host-helper-A4Nvcs5e.js";const z={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","bottom","left"]},"show-delay":{control:{type:"number"},description:"Delay in ms before the tooltip shows on hover; 0 (default) shows immediately, 200ms is recommended so a passing cursor does not open it. Skipped if a tooltip closed within the last 300ms, on keyboard focus, and for touch"}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Wrap a focusable control (e.g. \`modus-wc-button\`) — Tab focus shows the tooltip; Tab away hides it
- For screen readers, set \`tooltip-id\` on the tip and matching \`aria-describedby\` on the trigger
- Press **Escape** to dismiss the tooltip without moving focus; it re-enables on the next hover or focus
        `}}}},S=o=>s`
  <modus-wc-button
    variant="outlined"
    color="tertiary"
    size="sm"
    aria-describedby=${t(o||void 0)}
  >
    Hover me
  </modus-wc-button>
`,k=()=>{const o=document.createElement("modus-wc-button");return o.setAttribute("variant","outlined"),o.setAttribute("color","tertiary"),o.setAttribute("size","sm"),o.textContent="Hover me",o},C={parameters:{actions:{handles:["dismissEscape"]}},args:{"tooltip-id":"storybook-tooltip"},render:o=>s`
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
    `},r={...C},H=`<div style="display:flex;flex-direction:column;gap:0.25rem;text-align:start">
  <div style="align-items:center;display:flex;gap:0.375rem">
    <modus-wc-icon decorative name="thumbs_up" size="sm"></modus-wc-icon>
    <span>First line of multiline content.</span>
  </div>
  <p>Second line of multiline content.</p>
</div>`;function D(o){const n=document.createElement("div");return n.innerHTML=o,n}const l={parameters:{docs:{description:{story:"\nUse `contentElement` to pass rich HTML (icons, multiple lines, formatting) as the tooltip body. It takes precedence over the `content` string prop. Your original node is not moved or mutated.\n\nTo update the tooltip content, reassign `contentElement` with a new element.\n        "},source:{transform:(o,{args:n})=>`<modus-wc-tooltip
  position="${n.position??"auto"}"
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
<\/script>`}}},args:{position:"top","custom-class":"tooltip-rich-html-demo","tooltip-id":"storybook-tooltip-rich"},render:o=>{const n=D(H);return s`
      <modus-wc-tooltip
        .contentElement=${n}
        content=${t(o.content)}
        custom-class="${t(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?force-open="${o["force-open"]}"
        tooltip-id="${t(o["tooltip-id"])}"
        position=${t(o.position)}
      >
        ${S(o["tooltip-id"])}
      </modus-wc-tooltip>
    `}},a={args:{"tooltip-id":"storybook-tooltip-shadow"},render:o=>{if(!customElements.get("tooltip-shadow-host")){const n=x({componentTag:"modus-wc-tooltip",defaultContent:[k()],propsMapper:(i,d)=>{const e=d;e.content=i.content??"Tooltip content",e.customClass=i["custom-class"]||"",e.disabled=!!i.disabled,e.forceOpen=i["force-open"]??!1,e.showDelay=i["show-delay"],e.tooltipId=i["tooltip-id"]??"storybook-tooltip-shadow",e.position=i.position??"auto";const p=d.querySelector("modus-wc-button");p&&e.tooltipId&&p.setAttribute("aria-describedby",e.tooltipId)}});customElements.define("tooltip-shadow-host",n)}return s`<tooltip-shadow-host
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,y,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    'tooltip-id': 'storybook-tooltip-shadow'
  },
  render: args => {
    if (!customElements.get('tooltip-shadow-host')) {
      const TooltipShadowHost = createShadowHostClass<TooltipArgs>({
        componentTag: 'modus-wc-tooltip',
        defaultContent: [createTooltipShadowTrigger()],
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
