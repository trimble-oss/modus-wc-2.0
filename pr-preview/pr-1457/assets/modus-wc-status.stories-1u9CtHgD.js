import{b as d}from"./lit-element-DgBvYnzn.js";import{o as n}from"./if-defined-BnVFTJ4o.js";import{c as w}from"./shadow-host-helper-A4Nvcs5e.js";const b={title:"Components/Status",component:"modus-wc-status",args:{label:"",pulse:!0,variant:"active"},argTypes:{label:{control:"text"},pulse:{control:{type:"boolean"}},variant:{control:{type:"select"},name:"Status variant",options:["active","warning","danger"]}},parameters:{layout:"centered"}},e={render:s=>d`
    <modus-wc-status
      custom-class="${n(s["custom-class"])}"
      label="${n(s.label)}"
      .pulse=${s.pulse}
      variant="${s.variant}"
    ></modus-wc-status>
  `},o={render:s=>{if(!customElements.get("status-shadow-host")){const i=w({componentTag:"modus-wc-status",propsMapper:(t,h)=>{const a=h;a.customClass=t["custom-class"]||"",a.label=t.label||"",a.pulse=t.pulse,a.variant=t.variant}});customElements.define("status-shadow-host",i)}return d`<status-shadow-host
      .props=${{...s}}
    ></status-shadow-host>`}};var r,u,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-status
      custom-class="\${ifDefined(args['custom-class'])}"
      label="\${ifDefined(args.label)}"
      .pulse=\${args.pulse}
      variant="\${args.variant}"
    ></modus-wc-status>
  \`
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('status-shadow-host')) {
      const StatusShadowHost = createShadowHostClass<StatusArgs>({
        componentTag: 'modus-wc-status',
        propsMapper: (v: StatusArgs, el: HTMLElement) => {
          const statusEl = el as unknown as {
            customClass: string;
            label: string;
            pulse: boolean;
            variant: string;
          };
          statusEl.customClass = v['custom-class'] || '';
          statusEl.label = v.label || '';
          statusEl.pulse = v.pulse;
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const f=["Default","ShadowDomParent"];export{e as Default,o as ShadowDomParent,f as __namedExportsOrder,b as default};
