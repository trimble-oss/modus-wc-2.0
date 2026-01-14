import{x as w}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import{c as g}from"./shadow-host-helper-B2BwyiIi.js";const S={title:"Components/Forms/Input Label",component:"modus-wc-input-label",args:{"label-text":"Label",required:!1,size:"md"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}}},f={render:e=>w`
    <modus-wc-input-label
      for-id=${a(e["for-id"])}
      custom-class=${a(e["custom-class"])}
      label-text=${a(e["label-text"])}
      ?required=${e.required}
      size=${e.size}
      sub-label-text=${a(e["sub-label-text"])}
    ></modus-wc-input-label>
  `},o={...f},n={...f,args:{required:!0}},l={render:e=>{if(!customElements.get("input-label-shadow-host")){const L=g({componentTag:"modus-wc-input-label",propsMapper:(t,x)=>{const s=x;s.forId=t["for-id"]??"",s.customClass=t["custom-class"]||"",s.labelText=t["label-text"]??"",s.required=!!t.required,s.size=t.size??"md",s.subLabelText=t["sub-label-text"]??""}});customElements.define("input-label-shadow-host",L)}return w`<input-label-shadow-host
      .props=${{...e}}
    ></input-label-shadow-host>`}};var r,u,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  args: {
    required: true
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,b,h;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for input-label component
    if (!customElements.get('input-label-shadow-host')) {
      const InputLabelShadowHost = createShadowHostClass<InputLabelArgs>({
        componentTag: 'modus-wc-input-label',
        propsMapper: (v: InputLabelArgs, el: HTMLElement) => {
          const inputLabelEl = el as unknown as {
            forId: string;
            customClass: string;
            labelText: string;
            required: boolean;
            size: string;
            subLabelText: string;
          };
          inputLabelEl.forId = v['for-id'] ?? '';
          inputLabelEl.customClass = v['custom-class'] || '';
          inputLabelEl.labelText = v['label-text'] ?? '';
          inputLabelEl.required = Boolean(v.required);
          inputLabelEl.size = v.size ?? 'md';
          inputLabelEl.subLabelText = v['sub-label-text'] ?? '';
        }
      });
      customElements.define('input-label-shadow-host', InputLabelShadowHost);
    }
    return html\`<input-label-shadow-host
      .props=\${{
      ...args
    }}
    ></input-label-shadow-host>\`;
  }
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const z=["Default","Required","ShadowDomParent"];export{o as Default,n as Required,l as ShadowDomParent,z as __namedExportsOrder,S as default};
