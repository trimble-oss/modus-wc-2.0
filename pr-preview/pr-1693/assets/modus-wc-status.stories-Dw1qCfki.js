import{b as p}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";import{c as w}from"./shadow-host-helper-DX0JvItv.js";const f={title:"Components/Status",component:"modus-wc-status",args:{label:"",pulse:!0,size:"xs",variant:"active"},argTypes:{label:{control:"text"},pulse:{control:{type:"boolean"}},size:{control:{type:"select"},name:"Size",options:["xs","sm","md","lg","xl"]},variant:{control:{type:"select"},name:"Status variant",options:["active","warning","danger","info","inactive"]}},parameters:{layout:"centered"}},e={render:s=>p`
    <modus-wc-status
      custom-class="${n(s["custom-class"])}"
      label="${n(s.label)}"
      .pulse=${s.pulse}
      size="${s.size}"
      variant="${s.variant}"
    ></modus-wc-status>
  `},o={render:s=>{if(!customElements.get("status-shadow-host")){const d=w({componentTag:"modus-wc-status",propsMapper:(t,h)=>{const a=h;a.customClass=t["custom-class"]||"",a.label=t.label||"",a.pulse=t.pulse,a.size=t.size,a.variant=t.variant}});customElements.define("status-shadow-host",d)}return p`<status-shadow-host
      .props=${{...s}}
    ></status-shadow-host>`}};var r,l,u;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-status
      custom-class="\${ifDefined(args['custom-class'])}"
      label="\${ifDefined(args.label)}"
      .pulse=\${args.pulse}
      size="\${args.size}"
      variant="\${args.variant}"
    ></modus-wc-status>
  \`
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,m,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('status-shadow-host')) {
      const StatusShadowHost = createShadowHostClass<StatusArgs>({
        componentTag: 'modus-wc-status',
        propsMapper: (v: StatusArgs, el: HTMLElement) => {
          const statusEl = el as unknown as {
            customClass: string;
            label: string;
            pulse: boolean;
            size: string;
            variant: string;
          };
          statusEl.customClass = v['custom-class'] || '';
          statusEl.label = v.label || '';
          statusEl.pulse = v.pulse;
          statusEl.size = v.size;
          statusEl.variant = v.variant;
        }
      });
      customElements.define('status-shadow-host', StatusShadowHost);
    }
    return html\`<status-shadow-host
      .props=\${{
      ...args
    }}
    ></status-shadow-host>\`;
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const b=["Default","ShadowDomParent"];export{e as Default,o as ShadowDomParent,b as __namedExportsOrder,f as default};
