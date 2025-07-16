import{w as s}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-C8zulti1.js";import{o}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const l={apps:"Apps",help:"Help",notifications:"Notifications",search:"Search"},p={avatarAlt:"Sonic",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"sonic@trimble.com",name:"Sonic the Hedgehog"},c={ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!0,user:!0},f={title:"Components/Navbar",component:"modus-wc-navbar",args:{condensed:!1,"search-debounce-ms":300,"text-overrides":l,"user-card":p,visibility:c},argTypes:{"text-overrides":{description:"Text replacements for navbar menu items",table:{type:{detail:`
            Interface: INavbarTextOverrides
            Properties:
            - apps (string, optional): Replaces the text for "Apps" in the condensed menu
            - help (string, optional): Replaces the text for "Help" in the condensed menu
            - notifications (string, optional): Replaces the text for "Notifications" in the condensed menu
            - search (string, optional): Replaces the text for "Search" in the condensed menu
          `}},control:{type:"object"}},"user-card":{description:"User profile card information",table:{type:{detail:`
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
            - ai (boolean, optional): Controls visibility of the AI button
            - apps (boolean, optional): Controls visibility of the apps button
            - help (boolean, optional): Controls visibility of the help button
            - mainMenu (boolean, optional): Controls visibility of the main menu button
            - notifications (boolean, optional): Controls visibility of the notifications button
            - search (boolean, optional): Controls visibility of the search button
            - searchInput (boolean, optional): Controls visibility of the search input
            - user (boolean, optional): Controls visibility of the user button
          `}}}},decorators:[s],parameters:{actions:{handles:["aiClick","appsClick","appsMenuOpenChange","condensedMenuOpenChange","helpClick","mainMenuOpenChange","myTrimbleClick","notificationsMenuOpenChange","notificationsClick","searchChange","searchClick","searchInputOpenChange","signOutClick","trimbleLogoClick","userMenuOpenChange"]},layout:"padded"}},u={render:e=>r`
<style>
  div[id^='story--components-navbar--default'] {
    border: 1px dashed black;
    height: 365px;
    overflow: hidden;
  }
  [slot=main-menu] {
    background-color: #0063a3;
    color: white;
    height: 309px;
    overflow-y: auto;
  }
  /* Override the component's main-menu height */
  modus-wc-navbar .main-menu {
    height: 309px !important;
  }
</style>
<modus-wc-navbar
  ?apps-menu-open=${e["apps-menu-open"]}
  ?condensed=${e.condensed}
  ?condensed-menu-open=${e["condensed-menu-open"]}
  custom-class=${o(e["custom-class"])}
  ?main-menu-open=${e["main-menu-open"]}
  ?notifications-menu-open=${e["notifications-menu-open"]}
  search-debounce-ms=${o(e["search-debounce-ms"])}
  ?search-input-open=${e["search-input-open"]}
  .textOverrides=${o(e["text-overrides"])}
  .userCard=${e["user-card"]}
  ?user-menu-open=${e["user-menu-open"]}
  .visibility=${e.visibility}
>
  <div slot="main-menu">Main menu contents</div>
  <div slot="notifications">Notification contents</div>
  <div slot="apps">App drawer contents</div>
</modus-wc-navbar>
    `},t={...u};var n,i,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,f as default};
