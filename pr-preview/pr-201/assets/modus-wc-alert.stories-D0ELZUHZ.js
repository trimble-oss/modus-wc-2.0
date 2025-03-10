import{k as d}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const w={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!",variant:"info"},argTypes:{variant:{control:{type:"select"},options:["","error","info","success","warning"]}},parameters:{layout:"padded"}},m={render:e=>d`
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${t(e["custom-class"])}
  icon=${t(e.icon)}
  variant=${t(e.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    slot="button"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    `},o={...m},s={render:e=>d`
<style>
  modus-wc-button {
    align-items: center;
  }

  [data-theme='modus-classic-dark'] modus-wc-icon {
    color: #fff;
  }
</style>
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${t(e["custom-class"])}
  icon=${t(e.icon)}
  variant=${t(e.variant)}
>
  <modus-wc-button
    aria-label="notification button"
    color="secondary"
    size="sm"
    slot="button"
    variant="borderless"
  >
    <modus-wc-icon
      aria-label="notify icon"
      decorative=""
      name="close"
    ></modus-wc-icon>
  </modus-wc-button>
</modus-wc-alert>
    `};var a,r,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<style>
  modus-wc-button {
    align-items: center;
  }

  [data-theme='modus-classic-dark'] modus-wc-icon {
    color: #fff;
  }
</style>
<modus-wc-alert
  alert-description=\${ifDefined(args['alert-description'])}
  alert-title=\${args['alert-title']}
  custom-class=\${ifDefined(args['custom-class'])}
  icon=\${ifDefined(args.icon)}
  variant=\${ifDefined(args.variant)}
>
  <modus-wc-button
    aria-label="notification button"
    color="secondary"
    size="sm"
    slot="button"
    variant="borderless"
  >
    <modus-wc-icon
      aria-label="notify icon"
      decorative=""
      name="close"
    ></modus-wc-icon>
  </modus-wc-button>
</modus-wc-alert>
    \`;
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const f=["Default","CloseIcon"];export{s as CloseIcon,o as Default,f as __namedExportsOrder,w as default};
