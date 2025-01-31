import{k as u}from"./lit-element-DVRzCIa_.js";import{t}from"./if-defined-1ipA9LQg.js";const b={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!",variant:"info"},argTypes:{variant:{control:{type:"inline-radio"},options:["","error","info","success","warning"]}},parameters:{layout:"padded"}},m={render:e=>u`
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
    label="View Messages"
    slot="button"
  />
</modus-wc-alert>
    `},o={...m},n={render:e=>u`
      <style>
        modus-wc-button {
          align-items: center;
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
          aria-label="View messages"
          color="secondary"
          label="View Messages"
          slot="button"
        ></modus-wc-button>
        <modus-wc-button
          aria-label="notification button"
          color="tertiary"
          size="xs"
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
    `};var s,a,r;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <style>
        modus-wc-button {
          align-items: center;
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
          color="secondary"
          label="View Messages"
          slot="button"
        ></modus-wc-button>
        <modus-wc-button
          aria-label="notification button"
          color="tertiary"
          size="xs"
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
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const p=["Default","CloseIcon"];export{n as CloseIcon,o as Default,p as __namedExportsOrder,b as default};
