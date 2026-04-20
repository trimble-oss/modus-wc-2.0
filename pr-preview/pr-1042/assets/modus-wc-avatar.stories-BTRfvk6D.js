import{x as p}from"./lit-element-CucEn6F2.js";import{o as u}from"./if-defined-BiZP-SBN.js";import{c as v}from"./shadow-host-helper-A4Nvcs5e.js";const S={title:"Components/Avatar",component:"modus-wc-avatar",args:{alt:"Example avatar","img-src":"https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg",shape:"circle",initials:"",size:"md"},argTypes:{shape:{control:{type:"select"},options:["circle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}}},g={render:a=>p`
      <modus-wc-avatar
        alt="${a.alt}"
        custom-class="${u(a["custom-class"])}"
        img-src="${a["img-src"]}"
        initials="${a.initials}"
        shape="${a.shape}"
        size="${a.size}"
      ></modus-wc-avatar>
    `},r={...g},e={render:a=>{if(!customElements.get("avatar-shadow-host")){const d=v({componentTag:"modus-wc-avatar",propsMapper:(s,h)=>{const t=h;t.alt=s.alt,t.customClass=s["custom-class"]||"",t.imgSrc=s["img-src"],t.initials=s.initials,t.shape=s.shape,t.size=s.size}});customElements.define("avatar-shadow-host",d)}return p`<avatar-shadow-host
      .props=${{...a}}
    ></avatar-shadow-host>`}};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('avatar-shadow-host')) {
      const AvatarShadowHost = createShadowHostClass<AvatarArgs>({
        componentTag: 'modus-wc-avatar',
        propsMapper: (v: AvatarArgs, el: HTMLElement) => {
          const avatarEl = el as unknown as {
            alt: string;
            customClass: string;
            imgSrc: string;
            initials: string;
            shape: string;
            size: string;
          };
          avatarEl.alt = v.alt;
          avatarEl.customClass = v['custom-class'] || '';
          avatarEl.imgSrc = v['img-src'];
          avatarEl.initials = v.initials;
          avatarEl.shape = v.shape;
          avatarEl.size = v.size;
        }
      });
      customElements.define('avatar-shadow-host', AvatarShadowHost);
    }
    return html\`<avatar-shadow-host
      .props=\${{
      ...args
    }}
    ></avatar-shadow-host>\`;
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const z=["Default","ShadowDomParent"];export{r as Default,e as ShadowDomParent,z as __namedExportsOrder,S as default};
