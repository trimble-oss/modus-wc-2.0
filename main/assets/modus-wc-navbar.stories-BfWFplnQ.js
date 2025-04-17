import{w as n}from"./decorator-DFROgT0E.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";import"./v4-CtRu48qb.js";const l={avatarAlt:"Sonic",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"sonic@trimble.com",name:"Sonic the Hedgehog"},c={apps:!0,help:!0,mainMenu:!0,notifications:!0,user:!0},v={title:"Components/Navbar",component:"modus-wc-navbar",args:{user:l,visibility:c},argTypes:{user:{description:"User profile card information",table:{type:{detail:`
            Interface: IUserCard
            Properties:
            - avatarAlt (string, optional): The alt value to set on the avatar
            - avatarSrc (string, optional): The avatar image source value
            - email (string): The email address of the user
            - myTrimbleButton (string, optional): Text override for the Access MyTrimble button, allows for translation
            - name (string): The name of the user
            - signOutButton (string, optional): Text override for the Sign out button, allows for translation
          `}}},visibility:{description:"Controls visibility of individual navbar buttons",table:{type:{detail:`
            Interface: INavbarVisibility
            Properties:
            - apps (boolean, optional): Controls visibility of the apps button
            - help (boolean, optional): Controls visibility of the help button
            - mainMenu (boolean, optional): Controls visibility of the main menu button
            - notifications (boolean, optional): Controls visibility of the notifications button
            - user (boolean, optional): Controls visibility of the user button
          `}}}},decorators:[n],parameters:{actions:{handles:["helpClick","myTrimbleClick","signOutClick","trimbleLogoClick"]},layout:"padded"}},p={render:o=>r`
<style>
  div[id^='story--components-navbar--default'] {
    height: 360px;
  }
</style>
<modus-wc-navbar
  custom-class=${s(o["custom-class"])}
  .user=${o.user}
  .visibility=${o.visibility}
>
  <div slot="main-menu">Main menu contents</div>
  <div slot="notifications">Notification contents</div>
  <div slot="apps">App drawer contents</div>
</modus-wc-navbar>
    `},t={...p};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,v as default};
