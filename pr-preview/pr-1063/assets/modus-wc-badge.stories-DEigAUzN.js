import{x as d}from"./lit-element-CucEn6F2.js";import{o as S}from"./if-defined-BiZP-SBN.js";import{c as E}from"./shadow-host-helper-A4Nvcs5e.js";const x={title:"Components/Badge",component:"modus-wc-badge",args:{color:"primary",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["counter","filled","outlined","text"]}}},B={render:e=>d`
<modus-wc-badge
  color="${e.color}"
  custom-class="${S(e["custom-class"])}"
  size="${e.size}"
  variant="${e.variant}"
>
  Badge
</modus-wc-badge>
    `},n={...B},s={render:()=>d`
<style>
  .modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    `},r={render:e=>{if(!customElements.get("badge-shadow-host")){const y=E({componentTag:"modus-wc-badge",propsMapper:(o,z)=>{const a=z;a.color=o.color,a.customClass=o["custom-class"]||"",a.size=o.size,a.variant=o.variant},defaultContent:"Badge"});customElements.define("badge-shadow-host",y)}return d`<badge-shadow-host .props=${{...e}}></badge-shadow-host>`}},t={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - The `dark` color option is now `high-contrast`\n  - The `type` prop is now `variant` and `default` type is now `filled`\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop   | 2.0 Prop   | Notes                                                       |\n|------------|------------|-------------------------------------------------------------|\n| aria-label | aria-label |                                                             |\n| color      | color      | `dark` is now `high-contrast`                           |\n| size       | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type       | variant    | `default` is now `filled`                               |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>d`<div></div>`};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,w;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('badge-shadow-host')) {
      const BadgeShadowHost = createShadowHostClass<BadgeArgs>({
        componentTag: 'modus-wc-badge',
        propsMapper: (v: BadgeArgs, el: HTMLElement) => {
          const badgeEl = el as unknown as {
            color: string;
            customClass: string;
            size: string;
            variant: string;
          };
          badgeEl.color = v.color;
          badgeEl.customClass = v['custom-class'] || '';
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
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var b,v,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - The \\`dark\\` color option is now \\`high-contrast\\`\n  - The \\`type\\` prop is now \\`variant\\` and \\`default\\` type is now \\`filled\\`\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop   | 2.0 Prop   | Notes                                                       |\n|------------|------------|-------------------------------------------------------------|\n| aria-label | aria-label |                                                             |\n| color      | color      | \\`dark\\` is now \\`high-contrast\\`                           |\n| size       | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type       | variant    | \\`default\\` is now \\`filled\\`                               |\n        `\n      }\n    },\n    // To hide the actual story rendering and only show docs:\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  // Simple render function or leave it empty\n  render: () => html`<div></div>`\n}",...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const P=["Default","WithIcon","ShadowDomParent","Migration"];export{n as Default,t as Migration,r as ShadowDomParent,s as WithIcon,P as __namedExportsOrder,x as default};
