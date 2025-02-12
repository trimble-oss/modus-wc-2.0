import{k as u}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";const b={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!",variant:"info"},argTypes:{variant:{control:{type:"inline-radio"},options:["","error","info","success","warning"]}},parameters:{layout:"padded"}},m={render:t=>u`
<modus-wc-alert
  alert-description=${e(t["alert-description"])}
  alert-title=${t["alert-title"]}
  custom-class=${e(t["custom-class"])}
  icon=${e(t.icon)}
  variant=${e(t.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="secondary"
    label="View Messages"
    slot="button"
  />
</modus-wc-alert>
    `},o={...m},a={render:t=>u`
<style>
  modus-wc-button {
    align-items: center;
  }
    
  [data-theme='modus-classic-dark'] modus-wc-icon {
    color: #fff;
  }
</style>
<modus-wc-alert
  alert-description=${e(t["alert-description"])}
  alert-title=${t["alert-title"]}
  custom-class=${e(t["custom-class"])}
  icon=${e(t.icon)}
  variant=${e(t.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="tertiary"
    variant="outlined"
    size="md"
    label="Button"
    slot="button"
  ></modus-wc-button>
  <modus-wc-button
    aria-label="notification button"
    color="tertiary"
    size="sm"
    variant="borderless"
    slot="button"
  >
    <modus-wc-icon
      aria-label="notify icon"
      decorative=""
      name="close"
    ></modus-wc-icon>
  </modus-wc-button>
</modus-wc-alert>
    `};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
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
    aria-label="View messages"
    color="tertiary"
    variant="outlined"
    size="md"
    label="Button"
    slot="button"
  ></modus-wc-button>
  <modus-wc-button
    aria-label="notification button"
    color="tertiary"
    size="sm"
    variant="borderless"
    slot="button"
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const p=["Default","CloseIcon"];export{a as CloseIcon,o as Default,p as __namedExportsOrder,b as default};
