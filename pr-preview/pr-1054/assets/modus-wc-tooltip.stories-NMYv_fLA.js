import{x as l}from"./lit-element-CucEn6F2.js";import{o as t}from"./if-defined-BiZP-SBN.js";const b={title:"Components/Tooltip",component:"modus-wc-tooltip",args:{content:"Tooltip content",position:"auto"},argTypes:{position:{control:{type:"select"},options:["auto","top","right","left","bottom"]}},parameters:{docs:{description:{component:`
A customizable tooltip component used to create tooltips with different content.

The component supports a \`<slot>\` for injecting custom tooltip content.

### Features
- **Escape Key Dismissal**: Tooltips can be dismissed by pressing the Escape key
- **Auto-positioning**: Automatically positions the tooltip to avoid viewport edges
- **Customizable**: Supports custom CSS classes and positioning

### Keyboard Interaction
- Press **Escape** to dismiss the tooltip while it's visible
- The tooltip will automatically re-enable on mouse enter
        `}}}},c={parameters:{actions:{handles:["dismissEscape"]}},render:o=>l`
      <modus-wc-tooltip
        content=${t(o.content)}
        custom-class="${t(o["custom-class"])}"
        ?disabled="${o.disabled}"
        ?force-open="${o["force-open"]}"
        tooltip-id="${t(o["tooltip-id"])}"
        position=${t(o.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `},e={...c},n={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var r,p,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const g=["Default","Migration"];export{e as Default,n as Migration,g as __namedExportsOrder,b as default};
