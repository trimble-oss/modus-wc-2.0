import{x as r}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";import{c as w}from"./shadow-host-helper-A4Nvcs5e.js";const $={title:"Components/Forms/Input Feedback",component:"modus-wc-input-feedback",args:{level:"error",message:"Uh oh. You done messed up.",size:"md"},argTypes:{level:{control:{type:"select"},options:["error","info","success","warning"]},size:{control:{type:"select"},options:["sm","md","lg"]}}},v={render:e=>r`
<modus-wc-input-feedback
  custom-class=${s(e["custom-class"])}
  icon=${s(e.icon)}
  level=${e.level}
  message=${s(e.message)}
  size=${s(e.size)}
>
</modus-wc-input-feedback>
    `},t={...v},a={render:e=>r`
<modus-wc-input-feedback
  custom-class=${s(e["custom-class"])}
  icon='calendar_check'
  level='success'
  message='Event added to calendar!'
  size=${s(e.size)}
>
</modus-wc-input-feedback>
    `},c={render:e=>{if(!customElements.get("input-feedback-shadow-host")){const b=w({componentTag:"modus-wc-input-feedback",propsMapper:(n,g)=>{const o=g;o.customClass=n["custom-class"]||"",o.icon=n.icon??"",o.level=n.level,o.message=n.message??"",o.size=n.size??"md"}});customElements.define("input-feedback-shadow-host",b)}return r`<input-feedback-shadow-host
      .props=${{...e}}
    ></input-feedback-shadow-host>`}};var d,u,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-input-feedback
  custom-class=\${ifDefined(args['custom-class'])}
  icon='calendar_check'
  level='success'
  message='Event added to calendar!'
  size=\${ifDefined(args.size)}
>
</modus-wc-input-feedback>
    \`;
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var f,k,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for input-feedback component
    if (!customElements.get('input-feedback-shadow-host')) {
      const InputFeedbackShadowHost = createShadowHostClass<InputFeedbackArgs>({
        componentTag: 'modus-wc-input-feedback',
        propsMapper: (v: InputFeedbackArgs, el: HTMLElement) => {
          const inputFeedbackEl = el as unknown as {
            customClass: string;
            icon: string;
            level: string;
            message: string;
            size: string;
          };
          inputFeedbackEl.customClass = v['custom-class'] || '';
          inputFeedbackEl.icon = v.icon ?? '';
          inputFeedbackEl.level = v.level;
          inputFeedbackEl.message = v.message ?? '';
          inputFeedbackEl.size = v.size ?? 'md';
        }
      });
      customElements.define('input-feedback-shadow-host', InputFeedbackShadowHost);
    }
    return html\`<input-feedback-shadow-host
      .props=\${{
      ...args
    }}
    ></input-feedback-shadow-host>\`;
  }
}`,...(h=(k=c.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const S=["Default","WithCustomModusIcon","ShadowDomParent"];export{t as Default,c as ShadowDomParent,a as WithCustomModusIcon,S as __namedExportsOrder,$ as default};
