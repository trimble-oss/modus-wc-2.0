import{x as d}from"./lit-element-CucEn6F2.js";import{o as i}from"./if-defined-BiZP-SBN.js";import{c as b}from"./shadow-host-helper-A4Nvcs5e.js";const M={title:"Components/Toast",component:"modus-wc-toast",args:{position:"top-end"},argTypes:{position:{control:{type:"select"},options:["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"]}},parameters:{layout:"padded",viewport:"responsive"}},f={render:t=>d`
<div style="height: 200px;">
  <modus-wc-toast
    custom-class=${i(t["custom-class"])}
    delay=${i(t.delay)}
    position=${i(t.position)}
  >
    <modus-wc-alert alert-title="Message sent successfully!" variant="success"></modus-wc-alert>
  </modus-wc-toast>
</div>
  `},o={...f},e={render:t=>{if(!customElements.get("toast-shadow-host")){const g=b({componentTag:"modus-wc-toast",propsMapper:(n,a)=>{const r=a;r.customClass=n["custom-class"]||"",r.delay=n.delay??0,r.position=n.position??"top-end",a.hasChildNodes()||(a.innerHTML='<modus-wc-alert alert-title="Message sent successfully!" variant="success"></modus-wc-alert>')}});customElements.define("toast-shadow-host",g)}return d`
      <div style="height: 200px;">
        <toast-shadow-host .props=${{...t}}></toast-shadow-host>
      </div>
    `}},s={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>d`<div></div>`};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('toast-shadow-host')) {
      const ToastShadowHost = createShadowHostClass<ToastArgs>({
        componentTag: 'modus-wc-toast',
        propsMapper: (v: ToastArgs, el: HTMLElement) => {
          const toastEl = el as unknown as {
            customClass: string;
            delay: number;
            position: string;
          };
          toastEl.customClass = v['custom-class'] || '';
          toastEl.delay = v.delay ?? 0;
          toastEl.position = v.position ?? 'top-end';
          if (!el.hasChildNodes()) {
            el.innerHTML = '<modus-wc-alert alert-title="Message sent successfully!" variant="success"></modus-wc-alert>';
          }
        }
      });
      customElements.define('toast-shadow-host', ToastShadowHost);
    }
    return html\`
      <div style="height: 200px;">
        <toast-shadow-host .props=\${{
      ...args
    }}></toast-shadow-host>
      </div>
    \`;
  }
}`,...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,w,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const C=["Default","ShadowDomParent","Migration"];export{o as Default,s as Migration,e as ShadowDomParent,C as __namedExportsOrder,M as default};
