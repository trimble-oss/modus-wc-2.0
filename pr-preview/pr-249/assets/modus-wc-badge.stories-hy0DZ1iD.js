import{k as s}from"./lit-element-DVRzCIa_.js";import{t as g}from"./if-defined-1ipA9LQg.js";const f={title:"Components/Badge",component:"modus-wc-badge",args:{color:"primary",size:"md",variant:"filled"},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["counter","filled","text"]}}},h={render:e=>s`
<modus-wc-badge
  color="${e.color}"
  custom-class="${g(e["custom-class"])}"
  size="${e.size}"
  variant="${e.variant}"
>
  Badge
</modus-wc-badge>
    `},o={...h},n={render:()=>s`
<style>
  .modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    `},r={parameters:{docs:{description:{story:`
#### Breaking Changes

  - Size values changed from 'small'/'medium'/'large' to 'sm'/'md'/'lg'
  - The 'dark' color option is now 'high-contrast'
  - The 'type' prop is now 'variant' and 'default' type is now 'filled'

#### Prop Mapping

| 1.0 Prop   | 2.0 Prop     | Notes                                   |
|------------|------------- |----------------------------------------|
| ariaLabel  | aria-label   | Now uses inherited attributes pattern   |
| color      | color        | 'dark' is now 'high-contrast'           |
| size       | size         | 'small' → 'sm', 'medium' → 'md', 'large' → 'lg' |
| type       | variant      | 'default' is now 'filled'               |
|            | custom-class | New prop for custom CSS classes         |

        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var a,t,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - Size values changed from 'small'/'medium'/'large' to 'sm'/'md'/'lg'
  - The 'dark' color option is now 'high-contrast'
  - The 'type' prop is now 'variant' and 'default' type is now 'filled'

#### Prop Mapping

| 1.0 Prop   | 2.0 Prop     | Notes                                   |
|------------|------------- |----------------------------------------|
| ariaLabel  | aria-label   | Now uses inherited attributes pattern   |
| color      | color        | 'dark' is now 'high-contrast'           |
| size       | size         | 'small' → 'sm', 'medium' → 'md', 'large' → 'lg' |
| type       | variant      | 'default' is now 'filled'               |
|            | custom-class | New prop for custom CSS classes         |

        \`
      }
    },
    // To hide the actual story rendering and only show docs:
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  // Simple render function or leave it empty
  render: () => html\`<div></div>\`
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const v=["Default","WithIcon","Migration"];export{o as Default,r as Migration,n as WithIcon,v as __namedExportsOrder,f as default};
