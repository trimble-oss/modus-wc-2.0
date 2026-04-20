import{x as m}from"./lit-element-CucEn6F2.js";import{o as h}from"./if-defined-BiZP-SBN.js";import{c as b}from"./shadow-host-helper-A4Nvcs5e.js";const E={title:"Components/Toolbar",component:"modus-wc-toolbar",parameters:{layout:"padded"}},w={render:s=>m`
<modus-wc-toolbar custom-class="${h(s["custom-class"])}">
  <div slot="start">Start</div>
  <div slot="center">Center</div>
  <div slot="end">End</div>
</modus-wc-toolbar>
    `},o={...w},t={render:s=>{if(!customElements.get("toolbar-shadow-host")){const i=b({componentTag:"modus-wc-toolbar",propsMapper:(p,r)=>{const u=r;u.customClass=p["custom-class"]||"",r.hasChildNodes()||(r.innerHTML='<div slot="start">Start</div><div slot="center">Center</div><div slot="end">End</div>')}});customElements.define("toolbar-shadow-host",i)}return m`<toolbar-shadow-host
      .props=${{...s}}
    ></toolbar-shadow-host>`}};var a,e,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(d=(e=o.parameters)==null?void 0:e.docs)==null?void 0:d.source}}};var l,n,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('toolbar-shadow-host')) {
      const ToolbarShadowHost = createShadowHostClass<ToolbarArgs>({
        componentTag: 'modus-wc-toolbar',
        propsMapper: (v: ToolbarArgs, el: HTMLElement) => {
          const toolbarEl = el as unknown as {
            customClass: string;
          };
          toolbarEl.customClass = v['custom-class'] || '';
          if (!el.hasChildNodes()) {
            el.innerHTML = '<div slot="start">Start</div><div slot="center">Center</div><div slot="end">End</div>';
          }
        }
      });
      customElements.define('toolbar-shadow-host', ToolbarShadowHost);
    }
    return html\`<toolbar-shadow-host
      .props=\${{
      ...args
    }}
    ></toolbar-shadow-host>\`;
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const S=["Default","ShadowDomParent"];export{o as Default,t as ShadowDomParent,S as __namedExportsOrder,E as default};
