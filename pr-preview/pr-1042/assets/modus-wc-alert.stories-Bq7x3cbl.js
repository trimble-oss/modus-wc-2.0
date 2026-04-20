import{w as N}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-CucEn6F2.js";import{o as t}from"./if-defined-BiZP-SBN.js";import{c as S}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const V={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!",dismissible:!1,role:"status",variant:"info"},argTypes:{role:{control:{type:"select"},options:["","alert","log","marquee","status","timer"]},variant:{control:{type:"select"},options:["","error","info","success","warning"]}},decorators:[N],parameters:{layout:"padded",actions:{handles:["dismissClick"]}}},k={render:e=>r`
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${t(e["custom-class"])}
  delay=${t(e.delay)}
  dismissible=${t(e.dismissible)}
  icon=${t(e.icon)}
  role=${e.role}
  variant=${t(e.variant)}
>
</modus-wc-alert>
    `},o={...k},a={render:e=>r`
<modus-wc-alert
  alert-description=${t(e["alert-description"])}
  alert-title=${e["alert-title"]}
  custom-class=${t(e["custom-class"])}
  delay=${t(e.delay)}
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
    `},i={render:e=>r`
<modus-wc-alert
  id="alert-123"
  custom-class=${t(e["custom-class"])}
  delay=${t(e.delay)}
  dismissible=${t(e.dismissible)}
  icon=${t(e.icon)}
  role=${e.role}
  variant=${t(e.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    `},l={render:e=>{if(!customElements.get("alert-shadow-host")){const T=S({componentTag:"modus-wc-alert",propsMapper:(s,M)=>{const n=M;n.alertDescription=s["alert-description"]??"",n.alertTitle=s["alert-title"],n.customClass=s["custom-class"]||"",n.delay=s.delay??0,n.dismissible=!!s.dismissible,n.icon=s.icon??"",n.variant=s.variant}});customElements.define("alert-shadow-host",T)}return r`<alert-shadow-host .props=${{...e}}></alert-shadow-host>`}},c={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>r`<div></div>`};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-alert
  alert-description=\${ifDefined(args['alert-description'])}
  alert-title=\${args['alert-title']}
  custom-class=\${ifDefined(args['custom-class'])}
  delay=\${ifDefined(args.delay)}
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
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,w,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-alert
  id="alert-123"
  custom-class=\${ifDefined(args['custom-class'])}
  delay=\${ifDefined(args.delay)}
  dismissible=\${ifDefined(args.dismissible)}
  icon=\${ifDefined(args.icon)}
  role=\${args.role}
  variant=\${ifDefined(args.variant)}
>
  <div slot="content">New custom message!</div>
</modus-wc-alert>
    \`;
  }
}`,...(g=(w=i.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var $,f,y;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('alert-shadow-host')) {
      const AlertShadowHost = createShadowHostClass<AlertArgs>({
        componentTag: 'modus-wc-alert',
        propsMapper: (v: AlertArgs, el: HTMLElement) => {
          const alertEl = el as unknown as {
            alertDescription: string;
            alertTitle: string;
            customClass: string;
            delay: number;
            dismissible: boolean;
            icon: string;
            variant: string;
          };
          alertEl.alertDescription = v['alert-description'] ?? '';
          alertEl.alertTitle = v['alert-title'];
          alertEl.customClass = v['custom-class'] || '';
          alertEl.delay = v.delay ?? 0;
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
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,E,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const W=["Default","CustomButton","WithCustomContent","ShadowDomParent","Migration"];export{a as CustomButton,o as Default,c as Migration,l as ShadowDomParent,i as WithCustomContent,W as __namedExportsOrder,V as default};
