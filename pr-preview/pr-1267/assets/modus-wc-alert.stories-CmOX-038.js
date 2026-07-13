import{w as N}from"./decorator-D4YmxizW.js";import{b as s}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as S}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const V={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!","content-display-mode":"full","disable-icon":!1,dismissible:!1,role:"status",variant:"info"},argTypes:{role:{control:{type:"select"},options:["","alert","log","marquee","status","timer"]},variant:{control:{type:"select"},options:["neutral","error","info","success","warning"]},"content-display-mode":{control:{type:"select"},options:["full","truncated"]}},decorators:[N],parameters:{layout:"padded",actions:{handles:["dismissClick"]}}},k={render:e=>s`
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  content-display-mode=${t(e["content-display-mode"])}
  custom-class=${t(e["custom-class"])}
  delay=${t(e.delay)}
  disable-icon=${t(e["disable-icon"])}
  dismissible=${t(e.dismissible)}
  icon=${t(e.icon)}
  role=${e.role}
  variant=${t(e.variant)}
>
</modus-wc-alert>
    `},a={...k},i={render:e=>s`
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  content-display-mode=${t(e["content-display-mode"])}
  custom-class=${t(e["custom-class"])}
  delay=${t(e.delay)}
  disable-icon=${t(e["disable-icon"])}
  dismissible=${t(e.dismissible)}
  icon=${t(e.icon)}
  role=${e.role}
  variant=${t(e.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="tertiary"
    slot="button"
    variant="outlined"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    `},r={render:e=>s`
<modus-wc-alert
  id="alert-123"
  content-display-mode=${t(e["content-display-mode"])}
  custom-class=${t(e["custom-class"])}
  delay=${t(e.delay)}
  disable-icon=${t(e["disable-icon"])}
  dismissible=${t(e.dismissible)}
  icon=${t(e.icon)}
  role=${e.role}
  variant=${t(e.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    `},l={render:e=>{if(!customElements.get("alert-shadow-host")){const M=S({componentTag:"modus-wc-alert",propsMapper:(n,T)=>{const o=T;o.alertDescription=n["alert-description"]??"",o.alertTitle=n["alert-title"],o.contentDisplayMode=n["content-display-mode"]??"full",o.customClass=n["custom-class"]||"",o.delay=n.delay??0,o.disableIcon=!!n["disable-icon"],o.dismissible=!!n.dismissible,o.icon=n.icon??"",o.variant=n.variant}});customElements.define("alert-shadow-host",M)}return s`<alert-shadow-host .props=${{...e}}></alert-shadow-host>`}},c={parameters:{docs:{description:{story:`
#### Breaking Changes

  - The 2.0 component can render a custom HTML title in the \`content\` slot.
  - The 1.0 component rendered a button, while the 2.0 component can render a custom HTML button in the \`button\` slot.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop               | Notes                                                                 |
|-------------------|------------------------|-----------------------------------------------------------------------|
| aria-label        | aria-label             |                                                                       |
| button-aria-label |                        | Not carried over, use \`button\` slot                               |
| button-text       |                        | Not carried over, use \`button\` slot                               |
| dismissible       | dismissible            |                                                                       |
| message           | alert-title            |                                                                       |
| type              | variant                |                                                                       |
|                   | content-display-mode   | New in 2.0. \`full\` (default) or \`truncated\` (2-line clamp + tooltip on overflow) |

#### content-display-mode

- \`full\`: Description and \`content\` slot text wrap normally. Backward compatible default.
- \`truncated\`: Description or \`content\` slot is limited to two lines. A tooltip shows the full text on hover when content overflows.
- \`alert-title\` is always shown in full and is not truncated.
- Rich HTML is supported in the \`content\` slot; \`alert-description\` remains plain text only.

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes                                 |
|--------------|--------------|---------------------------------------|
| actionClick  |              | Not carried over, use \`button\` slot |
| dismissClick | dismissClick |                                       |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,w;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-alert
  alert-description=\${ifDefined(args['alert-description'])}
  alert-title=\${args['alert-title']}
  content-display-mode=\${ifDefined(args['content-display-mode'])}
  custom-class=\${ifDefined(args['custom-class'])}
  delay=\${ifDefined(args.delay)}
  disable-icon=\${ifDefined(args['disable-icon'])}
  dismissible=\${ifDefined(args.dismissible)}
  icon=\${ifDefined(args.icon)}
  role=\${args.role}
  variant=\${ifDefined(args.variant)}
>
  <modus-wc-button
    aria-label="View messages"
    color="tertiary"
    slot="button"
    variant="outlined"
  >View Messages</modus-wc-button>
</modus-wc-alert>
    \`;
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,h,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-alert
  id="alert-123"
  content-display-mode=\${ifDefined(args['content-display-mode'])}
  custom-class=\${ifDefined(args['custom-class'])}
  delay=\${ifDefined(args.delay)}
  disable-icon=\${ifDefined(args['disable-icon'])}
  dismissible=\${ifDefined(args.dismissible)}
  icon=\${ifDefined(args.icon)}
  role=\${args.role}
  variant=\${ifDefined(args.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    \`;
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,$,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('alert-shadow-host')) {
      const AlertShadowHost = createShadowHostClass<AlertArgs>({
        componentTag: 'modus-wc-alert',
        propsMapper: (v: AlertArgs, el: HTMLElement) => {
          const alertEl = el as unknown as {
            alertDescription: string;
            alertTitle: string;
            contentDisplayMode: string;
            customClass: string;
            delay: number;
            disableIcon: boolean;
            dismissible: boolean;
            icon: string;
            variant: string;
          };
          alertEl.alertDescription = v['alert-description'] ?? '';
          alertEl.alertTitle = v['alert-title'];
          alertEl.contentDisplayMode = v['content-display-mode'] ?? 'full';
          alertEl.customClass = v['custom-class'] || '';
          alertEl.delay = v.delay ?? 0;
          alertEl.disableIcon = Boolean(v['disable-icon']);
          alertEl.dismissible = Boolean(v.dismissible);
          alertEl.icon = v.icon ?? '';
          alertEl.variant = v.variant;
        }
      });
      customElements.define('alert-shadow-host', AlertShadowHost);
    }
    return html\`<alert-shadow-host .props=\${{
      ...args
    }}></alert-shadow-host>\`;
  }
}`,...(g=($=l.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var D,E,C;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - The 2.0 component can render a custom HTML title in the \\\`content\\\` slot.
  - The 1.0 component rendered a button, while the 2.0 component can render a custom HTML button in the \\\`button\\\` slot.

#### Prop Mapping

| 1.0 Prop          | 2.0 Prop               | Notes                                                                 |
|-------------------|------------------------|-----------------------------------------------------------------------|
| aria-label        | aria-label             |                                                                       |
| button-aria-label |                        | Not carried over, use \\\`button\\\` slot                               |
| button-text       |                        | Not carried over, use \\\`button\\\` slot                               |
| dismissible       | dismissible            |                                                                       |
| message           | alert-title            |                                                                       |
| type              | variant                |                                                                       |
|                   | content-display-mode   | New in 2.0. \\\`full\\\` (default) or \\\`truncated\\\` (2-line clamp + tooltip on overflow) |

#### content-display-mode

- \\\`full\\\`: Description and \\\`content\\\` slot text wrap normally. Backward compatible default.
- \\\`truncated\\\`: Description or \\\`content\\\` slot is limited to two lines. A tooltip shows the full text on hover when content overflows.
- \\\`alert-title\\\` is always shown in full and is not truncated.
- Rich HTML is supported in the \\\`content\\\` slot; \\\`alert-description\\\` remains plain text only.

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
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const I=["Default","CustomButton","WithCustomContent","ShadowDomParent","Migration"];export{i as CustomButton,a as Default,c as Migration,l as ShadowDomParent,r as WithCustomContent,I as __namedExportsOrder,V as default};
