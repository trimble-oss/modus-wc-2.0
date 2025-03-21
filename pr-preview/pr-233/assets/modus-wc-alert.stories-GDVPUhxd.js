import{k as o}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";const v={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!",dismissable:!1,delay:15e3,role:"status",variant:"info"},argTypes:{role:{control:{type:"select"},options:["","alert","log","marquee","status","timer"]},variant:{control:{type:"select"},options:["","error","info","success","warning"]}},parameters:{layout:"padded"}},w={render:e=>o`
<modus-wc-alert
  alert-description=${s(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${s(e["custom-class"])}
  dismissable=${e.dismissable}
  icon=${s(e.icon)}
  role=${e.role}
  variant=${s(e.variant)}
>
</modus-wc-alert>
    `},t={...w},r={render:e=>o`
<modus-wc-alert
  alert-description=${s(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${s(e["custom-class"])}
  dismissable=${e.dismissable}
  icon=${s(e.icon)}
  role=${e.role}
  variant=${s(e.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    slot="button"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    `},a={render:e=>o`
<modus-wc-alert
  id="alert-123"
  custom-class=${s(e["custom-class"])}
  dismissable=${e.dismissable}
  icon=${s(e.icon)}
  role=${e.role}
  variant=${s(e.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    `};var n,i,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-alert
  alert-description=\${ifDefined(args['alert-description'])}
  alert-title=\${args['alert-title']}
  custom-class=\${ifDefined(args['custom-class'])}
  dismissable=\${args.dismissable}
  icon=\${ifDefined(args.icon)}
  role=\${args.role}
  variant=\${ifDefined(args.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    slot="button"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    \`;
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,$;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-alert
  id="alert-123"
  custom-class=\${ifDefined(args['custom-class'])}
  dismissable=\${args.dismissable}
  icon=\${ifDefined(args.icon)}
  role=\${args.role}
  variant=\${ifDefined(args.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    \`;
  }
}`,...($=(p=a.parameters)==null?void 0:p.docs)==null?void 0:$.source}}};const g=["Default","CustomButton","WithCustomContent"];export{r as CustomButton,t as Default,a as WithCustomContent,g as __namedExportsOrder,v as default};
