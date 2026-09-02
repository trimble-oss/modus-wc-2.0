import{b as r}from"./lit-element-DgBvYnzn.js";import{o as u}from"./if-defined-BnVFTJ4o.js";import{c as f}from"./shadow-host-helper-A4Nvcs5e.js";const C={title:"Components/Status",component:"modus-wc-status",args:{label:"",pulse:!0,variant:"active"},argTypes:{label:{control:"text"},pulse:{control:{type:"boolean"}},variant:{control:{type:"select"},name:"Status variant",options:["active","warning","danger"]}},parameters:{layout:"centered"}},b={render:s=>r`
    <modus-wc-status
      custom-class="${u(s["custom-class"])}"
      label="${u(s.label)}"
      pulse="${s.pulse}"
      variant="${s.variant}"
    ></modus-wc-status>
  `},e={...b},o={render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <modus-wc-status variant="active"></modus-wc-status>
      <modus-wc-status variant="warning"></modus-wc-status>
      <modus-wc-status variant="danger"></modus-wc-status>
    </div>
  `},n={render:s=>{if(!customElements.get("status-shadow-host")){const g=f({componentTag:"modus-wc-status",propsMapper:(t,S)=>{const a=S;a.customClass=t["custom-class"]||"",a.label=t.label||"",a.pulse=!!t.pulse,a.variant=t.variant}});customElements.define("status-shadow-host",g)}return r`<status-shadow-host
      .props=${{...s}}
    ></status-shadow-host>`}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <modus-wc-status variant="active"></modus-wc-status>
      <modus-wc-status variant="warning"></modus-wc-status>
      <modus-wc-status variant="danger"></modus-wc-status>
    </div>
  \`
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var w,v,h;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
          statusEl.pulse = Boolean(v.pulse);
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const H=["Default","AllVariants","ShadowDomParent"];export{o as AllVariants,e as Default,n as ShadowDomParent,H as __namedExportsOrder,C as default};
