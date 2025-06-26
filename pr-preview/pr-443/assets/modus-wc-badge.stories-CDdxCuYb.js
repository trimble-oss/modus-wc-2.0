import{x as a}from"./lit-element-C8zulti1.js";import{o as g}from"./if-defined-yv6owfG8.js";const y={title:"Components/Badge",component:"modus-wc-badge",args:{color:"primary",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["counter","filled","text","outlined"]}}},h={render:e=>a`
<modus-wc-badge
  color="${e.color}"
  custom-class="${g(e["custom-class"])}"
  size="${e.size}"
  variant="${e.variant}"
>
  Badge
</modus-wc-badge>
    `},n={...h},o={render:()=>a`
<style>
  .modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    `},r={parameters:{docs:{description:{story:"\n#### Breaking Changes\n\n  - The `dark` color option is now `high-contrast`\n  - The `type` prop is now `variant` and `default` type is now `filled`\n  - Size values have changed from verbose names (`small`, `medium`, `large`) to abbreviations (`sm`, `md`, `lg`).\n\n#### Prop Mapping\n\n| 1.0 Prop   | 2.0 Prop   | Notes                                                       |\n|------------|------------|-------------------------------------------------------------|\n| aria-label | aria-label |                                                             |\n| color      | color      | `dark` is now `high-contrast`                           |\n| size       | size       | `small` → `sm`, `medium` → `md`, `large` → `lg` |\n| type       | variant    | `default` is now `filled`                               |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var s,t,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,c,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n#### Breaking Changes\n\n  - The \\`dark\\` color option is now \\`high-contrast\\`\n  - The \\`type\\` prop is now \\`variant\\` and \\`default\\` type is now \\`filled\\`\n  - Size values have changed from verbose names (\\`small\\`, \\`medium\\`, \\`large\\`) to abbreviations (\\`sm\\`, \\`md\\`, \\`lg\\`).\n\n#### Prop Mapping\n\n| 1.0 Prop   | 2.0 Prop   | Notes                                                       |\n|------------|------------|-------------------------------------------------------------|\n| aria-label | aria-label |                                                             |\n| color      | color      | \\`dark\\` is now \\`high-contrast\\`                           |\n| size       | size       | \\`small\\` → \\`sm\\`, \\`medium\\` → \\`md\\`, \\`large\\` → \\`lg\\` |\n| type       | variant    | \\`default\\` is now \\`filled\\`                               |\n        `\n      }\n    },\n    // To hide the actual story rendering and only show docs:\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  // Simple render function or leave it empty\n  render: () => html`<div></div>`\n}",...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const b=["Default","WithIcon","Migration"];export{n as Default,r as Migration,o as WithIcon,b as __namedExportsOrder,y as default};
