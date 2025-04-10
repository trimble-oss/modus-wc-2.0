import{k as l}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";const v={title:"Components/Toast",component:"modus-wc-toast",args:{position:"top-end"},argTypes:{position:{control:{type:"select"},options:["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"]}},parameters:{layout:"padded",viewport:"responsive"}},p={render:o=>l`
<div style="height: 200px;">
  <modus-wc-toast
    custom-class=${n(o["custom-class"])}
    position=${n(o.position)}
  >
    <modus-wc-alert alert-title="Message sent successfully!" variant="success"></modus-wc-alert>
  </modus-wc-toast>
</div>
  `},e={...p},t={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 toast included built-in dismiss functionality with delay timer and dismiss button. 2.0 components focus on positioning only.
  - In 1.0 toast included built-in icons. 2.0 components rely on slotted content for visual elements.
  - 2.0 toast components no longer support built-in types/variants, use slotted \`modus-wc-alert\` components instead.

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop    | Notes                                      |
|-----------------|-------------|--------------------------------------------|
| aria-label      | aria-label  |                                            |
| delay           |             | Not carried over                           |
| dismissible     |             | Not carried over                           |
| retain-element  |             | Not carried over                           |
| role            |             | Not carried over                           |
| show-icon       |             | Not carried over                           |
| type            |             | Not carried over, use slotted content      |

#### Event Mapping

| 1.0 Event     | 2.0 Event | Notes            |
|---------------|-----------|------------------|
| dismissClick  |           | Not carried over |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var s,r,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,d,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 toast included built-in dismiss functionality with delay timer and dismiss button. 2.0 components focus on positioning only.
  - In 1.0 toast included built-in icons. 2.0 components rely on slotted content for visual elements.
  - 2.0 toast components no longer support built-in types/variants, use slotted \\\`modus-wc-alert\\\` components instead.

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop    | Notes                                      |
|-----------------|-------------|--------------------------------------------|
| aria-label      | aria-label  |                                            |
| delay           |             | Not carried over                           |
| dismissible     |             | Not carried over                           |
| retain-element  |             | Not carried over                           |
| role            |             | Not carried over                           |
| show-icon       |             | Not carried over                           |
| type            |             | Not carried over, use slotted content      |

#### Event Mapping

| 1.0 Event     | 2.0 Event | Notes            |
|---------------|-----------|------------------|
| dismissClick  |           | Not carried over |
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const y=["Default","Migration"];export{e as Default,t as Migration,y as __namedExportsOrder,v as default};
