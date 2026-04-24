import{x as m}from"./lit-element-CucEn6F2.js";import{o as v}from"./if-defined-BiZP-SBN.js";import{c as u}from"./shadow-host-helper-A4Nvcs5e.js";const E={title:"Components/Divider",component:"modus-wc-divider",args:{color:"tertiary",content:"","custom-class":"",orientation:"vertical",position:"center",responsive:!0},argTypes:{color:{control:{type:"select"},options:["primary","secondary","tertiary","high-contrast","success","warning","danger"]},content:{control:"text"},"custom-class":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},position:{control:{type:"select"},options:["start","center","end"]},responsive:{control:{type:"boolean"}}},parameters:{layout:"padded"}},y={render:o=>m`
    <modus-wc-divider
      color="${o.color}"
      content="${o.content}"
      custom-class="${v(o["custom-class"])}"
      orientation="${o.orientation}"
      position="${o.position}"
      responsive="${o.responsive}"
      style="${o.orientation==="horizontal"?"display: flex; height: 100px":""}"
    ></modus-wc-divider>
  `},s={...y},i={render:o=>{if(!customElements.get("divider-shadow-host")){const h=u({componentTag:"modus-wc-divider",propsMapper:(e,n)=>{const t=n;t.color=e.color,t.content=e.content,t.customClass=e["custom-class"]||"",t.orientation=e.orientation,t.position=e.position,t.responsive=!!e.responsive,e.orientation==="horizontal"?(n.style.display="flex",n.style.height="100px"):(n.style.display="",n.style.height="")}});customElements.define("divider-shadow-host",h)}return m`<divider-shadow-host
      .props=${{...o}}
    ></divider-shadow-host>`}};var r,a,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
          // Mirror the Default story: apply display:flex + height on the
          // modus-wc-divider element itself so the inner div gets its height
          if (v.orientation === 'horizontal') {
            el.style.display = 'flex';
            el.style.height = '100px';
          } else {
            el.style.display = '';
            el.style.height = '';
          }
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
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const x=["Default","ShadowDomParent"];export{s as Default,i as ShadowDomParent,x as __namedExportsOrder,E as default};
