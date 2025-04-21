import{w as a}from"./decorator-DFROgT0E.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as e}from"./if-defined-yv6owfG8.js";import"./v4-CtRu48qb.js";const l={apps:"Apps",help:"Help",notifications:"Notifications",search:"Search"},c={avatarAlt:"Sonic",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"sonic@trimble.com",name:"Sonic the Hedgehog"},p={apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!0,user:!0},v={title:"Components/Navbar",component:"modus-wc-navbar",args:{condensed:!1,"search-debounce-ms":300,"text-overrides":l,user:c,visibility:p},argTypes:{"text-overrides":{description:"Text replacements for navbar menu items",table:{type:{detail:`
            Interface: INavbarTextOverrides
            Properties:
            - apps (string, optional): Replaces the text for "Apps" in the condensed menu
            - help (string, optional): Replaces the text for "Help" in the condensed menu
            - notifications (string, optional): Replaces the text for "Notifications" in the condensed menu
            - search (string, optional): Replaces the text for "Search" in the condensed menu
          `}},control:{type:"object"}},user:{description:"User profile card information",table:{type:{detail:`
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
            - search (boolean, optional): Controls visibility of the search button
            - searchInput (boolean, optional): Controls visibility of the search input
            - user (boolean, optional): Controls visibility of the user button
          `}}}},decorators:[a],parameters:{actions:{handles:["appsClick","helpClick","myTrimbleClick","notificationsClick","searchChange","searchClick","signOutClick","trimbleLogoClick"]},layout:"padded"}},d={render:t=>r`
<style>
  div[id^='story--components-navbar--default'] {
    height: 365px;
  }
</style>
<modus-wc-navbar
  ?condensed=${e(t.condensed)}
  custom-class=${e(t["custom-class"])}
  search-debounce-ms=${e(t["search-debounce-ms"])}
  .textOverrides=${e(t["text-overrides"])}
  .user=${t.user}
  .visibility=${t.visibility}
>
  <div slot="main-menu">Main menu contents</div>
  <div slot="notifications">Notification contents</div>
  <div slot="apps">App drawer contents</div>
</modus-wc-navbar>
    `},o={...d};var i,n,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,v as default};
