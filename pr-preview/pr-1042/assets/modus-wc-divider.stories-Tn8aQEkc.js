import{x as p}from"./lit-element-CucEn6F2.js";import{o as u}from"./if-defined-BiZP-SBN.js";import{c as h}from"./shadow-host-helper-A4Nvcs5e.js";const f={title:"Components/Divider",component:"modus-wc-divider",args:{color:"tertiary",content:"","custom-class":"",orientation:"vertical",position:"center",responsive:!0},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},content:{control:"text"},"custom-class":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},position:{control:{type:"select"},options:["start","center","end"]},responsive:{control:{type:"boolean"}}},parameters:{layout:"padded"}},w={render:o=>p`
    <modus-wc-divider
      color="${o.color}"
      content="${o.content}"
      custom-class="${u(o["custom-class"])}"
      orientation="${o.orientation}"
      position="${o.position}"
      responsive="${o.responsive}"
      style="${o.orientation==="horizontal"?"display: flex; height: 100px":""}"
    ></modus-wc-divider>
  `},n={...w},s={render:o=>{if(!customElements.get("divider-shadow-host")){const m=h({componentTag:"modus-wc-divider",propsMapper:(e,v)=>{const t=v;t.color=e.color,t.content=e.content,t.customClass=e["custom-class"]||"",t.orientation=e.orientation,t.position=e.position,t.responsive=!!e.responsive}});customElements.define("divider-shadow-host",m)}return p`<divider-shadow-host
      .props=${{...o}}
    ></divider-shadow-host>`}};var r,i,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('divider-shadow-host')) {
      const DividerShadowHost = createShadowHostClass<DividerArgs>({
        componentTag: 'modus-wc-divider',
        propsMapper: (v: DividerArgs, el: HTMLElement) => {
          const dividerEl = el as unknown as {
            color: string;
            content: string;
            customClass: string;
            orientation: string;
            position: string;
            responsive: boolean;
          };
          dividerEl.color = v.color;
          dividerEl.content = v.content;
          dividerEl.customClass = v['custom-class'] || '';
          dividerEl.orientation = v.orientation;
          dividerEl.position = v.position;
          dividerEl.responsive = Boolean(v.responsive);
        }
      });
      customElements.define('divider-shadow-host', DividerShadowHost);
    }
    return html\`<divider-shadow-host
      .props=\${{
      ...args
    }}
    ></divider-shadow-host>\`;
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["Default","ShadowDomParent"];export{n as Default,s as ShadowDomParent,D as __namedExportsOrder,f as default};
