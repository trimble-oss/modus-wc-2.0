import{w as A}from"./decorator-Cv9na35H.js";import{b as a}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as B}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const Y={title:"Components/Alert",component:"modus-wc-alert",args:{"alert-description":"You have 3 new messages.","alert-title":"New message!","content-display-mode":"default","disable-icon":!1,dismissible:!1,role:"status",variant:"info"},argTypes:{role:{control:{type:"select"},options:["","alert","log","marquee","status","timer"]},variant:{control:{type:"select"},options:["neutral","error","info","success","warning"]},"content-display-mode":{control:{type:"select"},options:["default","expandable"],table:{category:"attributes",defaultValue:{summary:"default"},type:{summary:"'default' | 'expandable'"}}},contentExpandedChange:{action:"contentExpandedChange",table:{category:"events",type:{summary:"CustomEvent<{ expanded: boolean }>"}}}},decorators:[A],parameters:{layout:"padded",actions:{handles:["dismissClick","contentExpandedChange"]}}},k={render:e=>a`
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
    `},s={...k},i={...k,args:{"alert-title":"System notification","alert-description":"Your project export finished successfully. Open the downloads folder to review the package, share it with your team, or archive a copy for compliance. The archive includes metadata, checksums, and a manifest so auditors can verify what was exported and when. If anything looks wrong, re-run the export from project settings or contact support with the job ID shown in the activity log. This message is intentionally long so the body clamps to two lines with an ellipsis and the Show more control appears below the preview.","content-display-mode":"expandable",dismissible:!0,variant:"info"}},r={render:e=>a`
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
    `},l={render:e=>a`
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
    `},d={render:e=>{if(!customElements.get("alert-shadow-host")){const N=B({componentTag:"modus-wc-alert",propsMapper:(n,H)=>{const o=H;o.alertDescription=n["alert-description"]??"",o.alertTitle=n["alert-title"],o.contentDisplayMode=n["content-display-mode"]??"default",o.customClass=n["custom-class"]||"",o.delay=n.delay??0,o.disableIcon=!!n["disable-icon"],o.dismissible=!!n.dismissible,o.icon=n.icon??"",o.variant=n.variant}});customElements.define("alert-shadow-host",N)}return a`<alert-shadow-host .props=${{...e}}></alert-shadow-host>`}},c={parameters:{docs:{description:{story:`
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
|                   | content-display-mode   | New in 2.0. \`default\` (default) or \`expandable\` (two-line preview + Show more / Show less) |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes                                 |
|--------------|--------------|---------------------------------------|
| actionClick  |              | Not carried over, use \`button\` slot |
| dismissClick | dismissClick |                                       |
|              | contentExpandedChange | Expandable body expanded/collapsed |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>a`<div></div>`};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,b,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    'alert-title': 'System notification',
    'alert-description': 'Your project export finished successfully. Open the downloads folder to review the package, share it with your team, or archive a copy for compliance. The archive includes metadata, checksums, and a manifest so auditors can verify what was exported and when. If anything looks wrong, re-run the export from project settings or contact support with the job ID shown in the activity log. This message is intentionally long so the body clamps to two lines with an ellipsis and the Show more control appears below the preview.',
    'content-display-mode': 'expandable',
    dismissible: true,
    variant: 'info'
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,y,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,$,E;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=($=l.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var x,C,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
          alertEl.contentDisplayMode = v['content-display-mode'] ?? 'default';
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
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var T,S,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
|                   | content-display-mode   | New in 2.0. \\\`default\\\` (default) or \\\`expandable\\\` (two-line preview + Show more / Show less) |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes                                 |
|--------------|--------------|---------------------------------------|
| actionClick  |              | Not carried over, use \\\`button\\\` slot |
| dismissClick | dismissClick |                                       |
|              | contentExpandedChange | Expandable body expanded/collapsed |
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
}`,...(M=(S=c.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const W=["Default","Expandable","CustomButton","WithCustomContent","ShadowDomParent","Migration"];export{r as CustomButton,s as Default,i as Expandable,c as Migration,d as ShadowDomParent,l as WithCustomContent,W as __namedExportsOrder,Y as default};
