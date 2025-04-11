import{k as l}from"./lit-element-HWJBnAmk.js";import{t as e}from"./if-defined-C-SyXhla.js";const b={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","left","bottom"]}}},c={render:o=>l`
      <modus-wc-tooltip
        content=${e(o.content)}
        custom-class="${e(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?force-open="${o["force-open"]}"
        tooltip-id="${e(o["tooltip-id"])}"
        position=${e(o.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `},t={...c},n={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var r,p,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const g=["Default","Migration"];export{t as Default,n as Migration,g as __namedExportsOrder,b as default};
