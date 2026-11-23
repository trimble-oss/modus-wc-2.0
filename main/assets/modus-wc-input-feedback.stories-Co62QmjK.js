import{b as d}from"./lit-element-DgBvYnzn.js";import{o}from"./if-defined-BnVFTJ4o.js";import{c as w}from"./shadow-host-helper-DX0JvItv.js";const z={title:"Components/Forms/Input Feedback",component:"modus-wc-input-feedback",args:{"disable-icon":!1,level:"error",message:"Uh oh. You done messed up.",size:"md"},argTypes:{level:{control:{type:"select"},options:["error","info","success","warning"]},size:{control:{type:"select"},options:["sm","md","lg"]}}},E={render:e=>d`
<modus-wc-input-feedback
  custom-class=${o(e["custom-class"])}
  ?disable-icon=${e["disable-icon"]}
  icon=${o(e.icon)}
  level=${e.level}
  message=${o(e.message)}
  size=${o(e.size)}
>
</modus-wc-input-feedback>
    `},a={...E},t={render:e=>d`
<modus-wc-input-feedback
  custom-class=${o(e["custom-class"])}
  ?disable-icon=${e["disable-icon"]}
  icon='calendar_check'
  level='success'
  message='Event added to calendar!'
  size=${o(e.size)}
>
</modus-wc-input-feedback>
    `},c={render:e=>{if(!customElements.get("input-feedback-shadow-host")){const h=w({componentTag:"modus-wc-input-feedback",propsMapper:(s,g)=>{const n=g;n.customClass=s["custom-class"]||"",n.disableIcon=!!s["disable-icon"],n.icon=s.icon??"",n.level=s.level,n.message=s.message??"",n.size=s.size??"md"}});customElements.define("input-feedback-shadow-host",h)}return d`<input-feedback-shadow-host
      .props=${{...e}}
    ></input-feedback-shadow-host>`}};var r,i,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-input-feedback
  custom-class=\${ifDefined(args['custom-class'])}
  ?disable-icon=\${args['disable-icon']}
  icon='calendar_check'
  level='success'
  message='Event added to calendar!'
  size=\${ifDefined(args.size)}
>
</modus-wc-input-feedback>
    \`;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,f,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for input-feedback component
    if (!customElements.get('input-feedback-shadow-host')) {
      const InputFeedbackShadowHost = createShadowHostClass<InputFeedbackArgs>({
        componentTag: 'modus-wc-input-feedback',
        propsMapper: (v: InputFeedbackArgs, el: HTMLElement) => {
          const inputFeedbackEl = el as unknown as {
            customClass: string;
            disableIcon: boolean;
            icon: string;
            level: string;
            message: string;
            size: string;
          };
          inputFeedbackEl.customClass = v['custom-class'] || '';
          inputFeedbackEl.disableIcon = Boolean(v['disable-icon']);
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
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const I=["Default","WithCustomModusIcon","ShadowDomParent"];export{a as Default,c as ShadowDomParent,t as WithCustomModusIcon,I as __namedExportsOrder,z as default};
