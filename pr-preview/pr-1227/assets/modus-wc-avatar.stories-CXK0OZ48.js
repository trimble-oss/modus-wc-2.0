import{w as u}from"./decorator-D4YmxizW.js";import{b as p}from"./lit-element-DgBvYnzn.js";import{o as v}from"./if-defined-BnVFTJ4o.js";import{c as g}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const x={title:"Components/Avatar",component:"modus-wc-avatar",args:{alt:"Example avatar","img-src":"https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg",shape:"circle",initials:"",size:"md"},argTypes:{shape:{control:{type:"select"},options:["circle","square"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}},decorators:[u],parameters:{actions:{handles:["imageLoadError"]}}},w={render:a=>p`
      <modus-wc-avatar
        alt="${a.alt}"
        custom-class="${v(a["custom-class"])}"
        img-src="${a["img-src"]}"
        initials="${a.initials}"
        shape="${a.shape}"
        size="${a.size}"
      ></modus-wc-avatar>
    `},r={...w},o={render:a=>{if(!customElements.get("avatar-shadow-host")){const d=g({componentTag:"modus-wc-avatar",propsMapper:(s,h)=>{const t=h;t.alt=s.alt,t.customClass=s["custom-class"]||"",t.imgSrc=s["img-src"],t.initials=s.initials,t.shape=s.shape,t.size=s.size}});customElements.define("avatar-shadow-host",d)}return p`<avatar-shadow-host
      .props=${{...a}}
    ></avatar-shadow-host>`}};var e,n,i;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Template
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const C=["Default","ShadowDomParent"];export{r as Default,o as ShadowDomParent,C as __namedExportsOrder,x as default};
