import{b as a}from"./lit-element-DgBvYnzn.js";import{o as p}from"./if-defined-BnVFTJ4o.js";import{c as E}from"./shadow-host-helper-DX0JvItv.js";const H={title:"Components/Badge",component:"modus-wc-badge",args:{color:"primary",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["default","primary","secondary","tertiary","high-contrast","success","warning","danger"]},shape:{control:{type:"select"},options:["ellipse","rectangle"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["counter","filled","outlined","text"]}}},T={render:e=>a`
<modus-wc-badge
  color="${e.color}"
  custom-class="${p(e["custom-class"])}"
  shape="${p(e.shape)}"
  size="${e.size}"
  variant="${e.variant}"
>
  Badge
</modus-wc-badge>
    `},t={...T},r={render:e=>{const l=["counter","filled","outlined","text"],n=[void 0,"ellipse","rectangle"];return a`
<div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 16px; align-items: center;">
  <span></span>
  ${n.map(s=>a`<strong>${s??"unset (default)"}</strong>`)}
  ${l.map(s=>a`
  <strong>${s}</strong>
  ${n.map(o=>a`
  <modus-wc-badge color="${e.color}" shape="${p(o)}" size="${e.size}" variant="${s}">
    ${s==="counter"?"5":"Badge"}
  </modus-wc-badge>`)}`)}
</div>
    `}},i={render:()=>a`
<style>
  .modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    `},d={render:e=>{if(!customElements.get("badge-shadow-host")){const l=E({componentTag:"modus-wc-badge",propsMapper:(n,s)=>{const o=s;o.color=n.color,o.customClass=n["custom-class"]||"",o.shape=n.shape,o.size=n.size,o.variant=n.variant},defaultContent:"Badge"});customElements.define("badge-shadow-host",l)}return a`<badge-shadow-host .props=${{...e}}></badge-shadow-host>`}},c={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - The `dark` color option is now `high-contrast`\n  - The `type` prop is now `variant` and `default` type is now `filled`\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop   | 2.0 Prop   | Notes                                                       |\n|------------|------------|-------------------------------------------------------------|\n| aria-label | aria-label |                                                             |\n| color      | color      | `dark` is now `high-contrast`                           |\n| size       | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type       | variant    | `default` is now `filled`                               |\n\n#### New (non-breaking)\n\n  - `shape` (`ellipse` | `rectangle`) is optional. When unset, each variant keeps its existing geometry. It is ignored for the `text` variant.\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,w,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const variants = ['counter', 'filled', 'outlined', 'text'] as const;
    const shapes = [undefined, 'ellipse', 'rectangle'] as const;
    // prettier-ignore
    return html\`
<div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 16px; align-items: center;">
  <span></span>
  \${shapes.map(shape => html\`<strong>\${shape ?? 'unset (default)'}</strong>\`)}
  \${variants.map(variant => html\`
  <strong>\${variant}</strong>
  \${shapes.map(shape => html\`
  <modus-wc-badge color="\${args.color}" shape="\${ifDefined(shape)}" size="\${args.size}" variant="\${variant}">
    \${variant === 'counter' ? '5' : 'Badge'}
  </modus-wc-badge>\`)}\`)}
</div>
    \`;
  }
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  .modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    \`;
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var $,z,x;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('badge-shadow-host')) {
      const BadgeShadowHost = createShadowHostClass<BadgeArgs>({
        componentTag: 'modus-wc-badge',
        propsMapper: (v: BadgeArgs, el: HTMLElement) => {
          const badgeEl = el as unknown as {
            color: string;
            customClass: string;
            shape?: string;
            size: string;
            variant: string;
          };
          badgeEl.color = v.color;
          badgeEl.customClass = v['custom-class'] || '';
          badgeEl.shape = v.shape;
          badgeEl.size = v.size;
          badgeEl.variant = v.variant;
        },
        defaultContent: 'Badge'
      });
      customElements.define('badge-shadow-host', BadgeShadowHost);
    }
    return html\`<badge-shadow-host .props=\${{
      ...args
    }}></badge-shadow-host>\`;
  }
}`,...(x=(z=d.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var S,k,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - The \\`dark\\` color option is now \\`high-contrast\\`\n  - The \\`type\\` prop is now \\`variant\\` and \\`default\\` type is now \\`filled\\`\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop   | 2.0 Prop   | Notes                                                       |\n|------------|------------|-------------------------------------------------------------|\n| aria-label | aria-label |                                                             |\n| color      | color      | \\`dark\\` is now \\`high-contrast\\`                           |\n| size       | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type       | variant    | \\`default\\` is now \\`filled\\`                               |\n\n#### New (non-breaking)\n\n  - \\`shape\\` (\\`ellipse\\` | \\`rectangle\\`) is optional. When unset, each variant keeps its existing geometry. It is ignored for the \\`text\\` variant.\n        `\n      }\n    },\n    // To hide the actual story rendering and only show docs:\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  // Simple render function or leave it empty\n  render: () => html`<div></div>`\n}",...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const I=["Default","ShapeVariants","WithIcon","ShadowDomParent","Migration"];export{t as Default,c as Migration,d as ShadowDomParent,r as ShapeVariants,i as WithIcon,I as __namedExportsOrder,H as default};
