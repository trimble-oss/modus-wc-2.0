import{k as m}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const $={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!",dismissable:!1,delay:15e3,role:"status",variant:"info"},argTypes:{role:{control:{type:"select"},options:["","alert","log","marquee","status","timer"]},variant:{control:{type:"select"},options:["","error","info","success","warning"]}},parameters:{layout:"padded"}},d={render:e=>m`
      <modus-wc-alert
        alert-description=${t(e["alert-description"])}
        alert-title=${e["alert-title"]}
        custom-class=${t(e["custom-class"])}
        dismissable=${e.dismissable}
        icon=${t(e.icon)}
        role=${e.role}
        variant=${t(e.variant)}
      >
      </modus-wc-alert>
    `},s={...d},r={render:e=>m`
      <modus-wc-alert
        alert-description=${t(e["alert-description"])}
        alert-title=${e["alert-title"]}
        custom-class=${t(e["custom-class"])}
        dismissable=${e.dismissable}
        icon=${t(e.icon)}
        role=${e.role}
        variant=${t(e.variant)}
      >
        <modus-wc-button
          aria-label="View messages"
          color="secondary"
          slot="button"
        >View Messages</modus-wc-button>
      </modus-wc-alert>
    `};var a,o,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(n=(o=s.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const w=["Default","CustomButton"];export{r as CustomButton,s as Default,w as __namedExportsOrder,$ as default};
