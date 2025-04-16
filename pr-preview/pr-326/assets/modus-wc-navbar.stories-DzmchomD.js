import{w as s}from"./decorator-DFROgT0E.js";import{x as n}from"./lit-element-C8zulti1.js";import{o as i}from"./if-defined-yv6owfG8.js";import"./v4-CtRu48qb.js";const l={avatarAlt:"Sonic",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"sonic@trimble.com",name:"Sonic the Hedgehog"},v={title:"Components/Navbar",component:"modus-wc-navbar",args:{user:l},argTypes:{user:{description:"User profile card information",table:{type:{detail:`
            Interface: IUserCard
            Properties:
            - avatarAlt (string, optional): The alt value to set on the avatar
            - avatarSrc (string, optional): The avatar image source value
            - email (string): The email address of the user
            - myTrimbleButton (string, optional): Text override for the Access MyTrimble button, allows for translation
            - name (string): The name of the user
            - signOutButton (string, optional): Text override for the Sign out button, allows for translation
          `}}}},decorators:[s],parameters:{actions:{handles:["helpClick","myTrimbleClick","signOutClick","trimbleLogoClick"]},layout:"padded"}},c={render:e=>n`
<style>
  div[id^='story--components-navbar--default'] {
    height: 360px;
  }
</style>
<modus-wc-navbar
  custom-class=${i(e["custom-class"])}
  .user=${e.user}
>
  <div slot="menu">Menu contents</div>
  <div slot="notifications">Notification contents</div>
  <div slot="apps">App drawer contents</div>
</modus-wc-navbar>
    `},t={...c};var o,a,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,v as default};
