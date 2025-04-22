import{x as i}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";const y={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!",dismissible:!1,delay:15e3,role:"status",variant:"info"},argTypes:{role:{control:{type:"select"},options:["","alert","log","marquee","status","timer"]},variant:{control:{type:"select"},options:["","error","info","success","warning"]}},parameters:{layout:"padded"}},w={render:e=>i`
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${t(e["custom-class"])}
  dismissible=${t(e.dismissible)}
  icon=${t(e.icon)}
  role=${e.role}
  variant=${t(e.variant)}
>
</modus-wc-alert>
    `},n={...w},s={render:e=>i`
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${t(e["custom-class"])}
  dismissible=${t(e.dismissible)}
  icon=${t(e.icon)}
  role=${e.role}
  variant=${t(e.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    slot="button"
    variant="outlined"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    `},r={render:e=>i`
<modus-wc-alert
  id="alert-123"
  custom-class=${t(e["custom-class"])}
  dismissible=${t(e.dismissible)}
  icon=${t(e.icon)}
  role=${e.role}
  variant=${t(e.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    `},o={parameters:{docs:{description:{story:`
#### Breaking Changes

  - The 2.0 component can render a custom HTML title in the \`content\` slot.
  - The 1.0 component rendered a button, while the 2.0 component can render a custom HTML button in the \`button\` slot.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop    | Notes                                 |
|-------------------|-------------|---------------------------------------|
| aria-label        | aria-label  |                                       |
| button-aria-label |             | Not carried over, use \`button\` slot |
| button-text       |             | Not carried over, use \`button\` slot |
| dismissible       | dismissible |                                       |
| message           | alert-title |                                       |
| type              | variant     |                                       |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes                                 |
|--------------|--------------|---------------------------------------|
| actionClick  |              | Not carried over, use \`button\` slot |
| dismissClick | dismissClick |                                       |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>i`<div></div>`};var a,l,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-alert
  alert-description=\${ifDefined(args['alert-description'])}
  alert-title=\${args['alert-title']}
  custom-class=\${ifDefined(args['custom-class'])}
  dismissible=\${ifDefined(args.dismissible)}
  icon=\${ifDefined(args.icon)}
  role=\${args.role}
  variant=\${ifDefined(args.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    slot="button"
    variant="outlined"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    \`;
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-alert
  id="alert-123"
  custom-class=\${ifDefined(args['custom-class'])}
  dismissible=\${ifDefined(args.dismissible)}
  icon=\${ifDefined(args.icon)}
  role=\${args.role}
  variant=\${ifDefined(args.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    \`;
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var $,g,f;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - The 2.0 component can render a custom HTML title in the \\\`content\\\` slot.
  - The 1.0 component rendered a button, while the 2.0 component can render a custom HTML button in the \\\`button\\\` slot.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop    | Notes                                 |
|-------------------|-------------|---------------------------------------|
| aria-label        | aria-label  |                                       |
| button-aria-label |             | Not carried over, use \\\`button\\\` slot |
| button-text       |             | Not carried over, use \\\`button\\\` slot |
| dismissible       | dismissible |                                       |
| message           | alert-title |                                       |
| type              | variant     |                                       |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes                                 |
|--------------|--------------|---------------------------------------|
| actionClick  |              | Not carried over, use \\\`button\\\` slot |
| dismissClick | dismissClick |                                       |
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const N=["Default","CustomButton","WithCustomContent","Migration"];export{s as CustomButton,n as Default,o as Migration,r as WithCustomContent,N as __namedExportsOrder,y as default};
