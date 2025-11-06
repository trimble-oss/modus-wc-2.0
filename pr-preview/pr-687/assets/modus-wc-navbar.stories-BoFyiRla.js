import{w as x}from"./decorator-D4YmxizW.js";import{x as h}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var r=Object.freeze,w=Object.defineProperty,f=(e,i)=>r(w(e,"raw",{value:r(e.slice())})),c,u;const y={apps:"Apps",help:"Help",notifications:"Notifications",search:"Search"},C={avatarAlt:"Sonic",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"sonic@trimble.com",name:"Sonic the Hedgehog"},S={ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!0,user:!0},j={title:"Components/Navbar",component:"modus-wc-navbar",args:{condensed:!1,"search-debounce-ms":300,"text-overrides":y,"user-card":C,visibility:S},argTypes:{"text-overrides":{description:"Text replacements for navbar menu items",table:{type:{detail:`
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
          `}}}},decorators:[x],parameters:{actions:{handles:["aiClick","appsClick","appsMenuOpenChange","condensedMenuOpenChange","helpClick","mainMenuOpenChange","myTrimbleClick","notificationsMenuOpenChange","notificationsClick","searchChange","searchClick","searchInputOpenChange","signOutClick","trimbleLogoClick","userMenuOpenChange"]},layout:"padded"}},I={render:e=>h(c||(c=f([`
<style>
  div[id^='story--components-navbar--default'] {
    border: 1px dashed black;
    height: 360px;
    overflow: hidden;
  }
  [slot=main-menu] {
    background-color: #0063a3;
    color: white;
    height: 400px;
  }
</style>
<modus-wc-navbar
  ?apps-menu-open=`,`
  ?condensed=`,`
  ?condensed-menu-open=`,`
  custom-class=`,`
  ?main-menu-open=`,`
  ?notifications-menu-open=`,`
  search-debounce-ms=`,`
  ?search-input-open=`,`
  .textOverrides=`,`
  .userCard=`,`
  ?user-menu-open=`,`
  .visibility=`,`
>
  <div slot="main-menu">Main menu contents</div>
  <div slot="notifications">Notification contents</div>
  <div slot="apps">App drawer contents</div>
</modus-wc-navbar>
<script>
// Added this block to demonstrate how to handle navbar visibility settings using JavaScript.
//   const visibility = {
//     ai: true,
//     apps: true,
//     help: true,
//     mainMenu: true,
//     notifications: true,
//     search: true,
//     searchInput: true,
//     user: true,
//     };
//  const userCard = {
//   avatarAlt: 'Sonic',
//   avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
//   email: 'sonic@trimble.com',
//   name: 'Sonic the Hedgehog',
// };
// const navbar = document.querySelector('modus-wc-navbar');
// navbar.visibility = visibility;
// navbar.userCard = userCard;
<\/script>

    `])),e["apps-menu-open"],e.condensed,e["condensed-menu-open"],n(e["custom-class"]),e["main-menu-open"],e["notifications-menu-open"],n(e["search-debounce-ms"]),e["search-input-open"],n(e["text-overrides"]),e["user-card"],e["user-menu-open"],e.visibility)},s={...I},t={render:e=>{function i(g){var a;const o=(a=g.currentTarget.parentElement)==null?void 0:a.querySelector("#custom-user-menu");o==null||o.classList.toggle("hidden")}return h(u||(u=f([`
      <div id="custom-menu-and-slots">
        <style>
          #custom-menu-and-slots .modus-wc-navbar {
            align-items: center;
            display: flex;
            gap: 0.2rem;
            padding: 0 1rem;
            width: 100%;
          }
          .modus-wc-card-body {
            padding: 1rem;
          }
          #custom-menu-and-slots .modus-wc-navbar-center,
          #custom-menu-and-slots .modus-wc-navbar-end,
          #custom-menu-and-slots .modus-wc-navbar-start {
            align-items: center;
            display: flex;
            flex: 1;
          }
          #custom-menu-and-slots .modus-wc-navbar-center {
            background: #d9d9d969;
            justify-content: center;
          }
          #custom-menu-and-slots .modus-wc-navbar-end {
            background: #d9d9d969;
            justify-content: flex-end;
          }
          #custom-menu-and-slots .modus-wc-navbar-start {
            background: #d9d9d969;
            justify-content: flex-start;
          }
          #custom-user-menu {
            position: absolute;
            right: 10px;
            top: 50px;
            z-index: 1000;
          }
          #custom-user-menu.hidden {
            display: none;
          }
          .custom-user-email {
            font-size: 0.8rem;
          }
          .custom-user-icon {
            cursor: pointer;
            margin-inline-start: 8px;
            margin-inline-end: 8px;
            position: relative;
            top: 3px;
          }
          .custom-user-menu-header {
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 8px;
            padding: 8px 16px;
          }
          .custom-user-menu-title {
            font-weight: bold;
          }
          div[id^='story--components-navbar--custom-menu-and-slots'] {
            border: 1px dashed black;
            height: 365px;
          }
          .menu-item {
            align-items: center;
            cursor: pointer;
            display: flex;
            padding: 8px;
          }
          .slot-bg {
            align-items: center;
            display: flex;
            font-weight: 600;
            height: 40px;
            justify-content: center;
            opacity: 0.4;
          }
        </style>
        <modus-wc-navbar
          ?apps-menu-open=`,`
          ?condensed=`,`
          ?condensed-menu-open=`,`
          custom-class=`,`
          ?main-menu-open=`,`
          ?notifications-menu-open=`,`
          search-debounce-ms=`,`
          ?search-input-open=`,`
          .textOverrides=`,`
          .userCard=`,`
          ?user-menu-open=`,`
          .visibility=`,`
        >
          <div slot="main-menu">Main menu contents</div>
          <div slot="notifications">Notification contents</div>
          <div slot="apps">App drawer contents</div>

          <!-- Slots demonstration -->
          <div slot="start">
            <div class="slot-bg">Left slot</div>
          </div>
          <div slot="center">
            <div class="slot-bg">Center slot</div>
          </div>
          <div slot="end">
            <div class="slot-bg">Right slot</div>
            <div class="custom-user-icon" @click=`,`>
              <modus-wc-avatar
                alt="Sonic the Hedgehog"
                img-src="https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg"
                size="xs"
                shape="circle"
              ></modus-wc-avatar>
            </div>

            <!-- Custom user menu -->
            <modus-wc-card id="custom-user-menu" bordered="true">
              <div class="custom-user-menu-header">
                <div class="custom-user-menu-title">Custom Menu</div>
                <div class="custom-user-email">custom.user@example.com</div>
              </div>
              <div class="menu-item">
                <span class="menu-item-icon"
                  ><modus-wc-icon
                    name="settings_solid"
                    size="16px"
                  ></modus-wc-icon
                ></span>
                <span class="custom-user-icon">Account Settings</span>
              </div>
              <div class="menu-item">
                <span class="menu-item-icon"
                  ><modus-wc-icon
                    name="person_solid"
                    size="16px"
                  ></modus-wc-icon
                ></span>
                <span class="custom-user-icon">Profile</span>
              </div>
              <div class="menu-item">
                <span class="menu-item-icon"
                  ><modus-wc-icon name="sign_out" size="16px"></modus-wc-icon
                ></span>
                <span class="custom-user-icon">Logout</span>
              </div>
            </modus-wc-card>
          </div>
        </modus-wc-navbar>
      </div>
      <script>
        // Added this block to demonstrate how to toggle a custom user menu and manage navbar visibility settings using JavaScript.
        // const toggleCustomUserMenu = (e) => {
        //    const customIcon = e.currentTarget;
        //    const menu =
        //    customIcon.parentElement?.querySelector('#custom-user-menu');
        //    menu?.classList.toggle('hidden');
        // };
        //  const navbar = document.querySelector('modus-wc-navbar');
        //  const userIcon = document.querySelector('.custom-user-icon');
        //  if (userIcon) {
        //     userIcon.addEventListener('click', toggleCustomUserMenu);
        //   }
        //  if (navbar) {
        //   navbar.visibility = {
        //     ai: false,
        //     apps: false,
        //     help: false,
        //     mainMenu: false,
        //     notifications: false,
        //     search: false,
        //     searchInput: false,
        //     user: false
        //   };
        // }
      <\/script>
    `])),e["apps-menu-open"],e.condensed,e["condensed-menu-open"],n(e["custom-class"]),e["main-menu-open"],e["notifications-menu-open"],n(e["search-debounce-ms"]),e["search-input-open"],n(e["text-overrides"]),e["user-card"],e["user-menu-open"],{ai:!1,apps:!1,help:!1,mainMenu:!1,notifications:!1,search:!1,searchInput:!1,user:!1},i)}};var d,m,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,v,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    function toggleCustomUserMenu(e) {
      const customIcon = e.currentTarget;
      const menu = customIcon.parentElement?.querySelector('#custom-user-menu');
      menu?.classList.toggle('hidden');
    }
    return html\`
      <div id="custom-menu-and-slots">
        <style>
          #custom-menu-and-slots .modus-wc-navbar {
            align-items: center;
            display: flex;
            gap: 0.2rem;
            padding: 0 1rem;
            width: 100%;
          }
          .modus-wc-card-body {
            padding: 1rem;
          }
          #custom-menu-and-slots .modus-wc-navbar-center,
          #custom-menu-and-slots .modus-wc-navbar-end,
          #custom-menu-and-slots .modus-wc-navbar-start {
            align-items: center;
            display: flex;
            flex: 1;
          }
          #custom-menu-and-slots .modus-wc-navbar-center {
            background: #d9d9d969;
            justify-content: center;
          }
          #custom-menu-and-slots .modus-wc-navbar-end {
            background: #d9d9d969;
            justify-content: flex-end;
          }
          #custom-menu-and-slots .modus-wc-navbar-start {
            background: #d9d9d969;
            justify-content: flex-start;
          }
          #custom-user-menu {
            position: absolute;
            right: 10px;
            top: 50px;
            z-index: 1000;
          }
          #custom-user-menu.hidden {
            display: none;
          }
          .custom-user-email {
            font-size: 0.8rem;
          }
          .custom-user-icon {
            cursor: pointer;
            margin-inline-start: 8px;
            margin-inline-end: 8px;
            position: relative;
            top: 3px;
          }
          .custom-user-menu-header {
            border-bottom: 1px solid #e0e0e0;
            margin-bottom: 8px;
            padding: 8px 16px;
          }
          .custom-user-menu-title {
            font-weight: bold;
          }
          div[id^='story--components-navbar--custom-menu-and-slots'] {
            border: 1px dashed black;
            height: 365px;
          }
          .menu-item {
            align-items: center;
            cursor: pointer;
            display: flex;
            padding: 8px;
          }
          .slot-bg {
            align-items: center;
            display: flex;
            font-weight: 600;
            height: 40px;
            justify-content: center;
            opacity: 0.4;
          }
        </style>
        <modus-wc-navbar
          ?apps-menu-open=\${args['apps-menu-open']}
          ?condensed=\${args.condensed}
          ?condensed-menu-open=\${args['condensed-menu-open']}
          custom-class=\${ifDefined(args['custom-class'])}
          ?main-menu-open=\${args['main-menu-open']}
          ?notifications-menu-open=\${args['notifications-menu-open']}
          search-debounce-ms=\${ifDefined(args['search-debounce-ms'])}
          ?search-input-open=\${args['search-input-open']}
          .textOverrides=\${ifDefined(args['text-overrides'])}
          .userCard=\${args['user-card']}
          ?user-menu-open=\${args['user-menu-open']}
          .visibility=\${{
      ai: false,
      apps: false,
      help: false,
      mainMenu: false,
      notifications: false,
      search: false,
      searchInput: false,
      user: false
    }}
        >
          <div slot="main-menu">Main menu contents</div>
          <div slot="notifications">Notification contents</div>
          <div slot="apps">App drawer contents</div>

          <!-- Slots demonstration -->
          <div slot="start">
            <div class="slot-bg">Left slot</div>
          </div>
          <div slot="center">
            <div class="slot-bg">Center slot</div>
          </div>
          <div slot="end">
            <div class="slot-bg">Right slot</div>
            <div class="custom-user-icon" @click=\${toggleCustomUserMenu}>
              <modus-wc-avatar
                alt="Sonic the Hedgehog"
                img-src="https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg"
                size="xs"
                shape="circle"
              ></modus-wc-avatar>
            </div>

            <!-- Custom user menu -->
            <modus-wc-card id="custom-user-menu" bordered="true">
              <div class="custom-user-menu-header">
                <div class="custom-user-menu-title">Custom Menu</div>
                <div class="custom-user-email">custom.user@example.com</div>
              </div>
              <div class="menu-item">
                <span class="menu-item-icon"
                  ><modus-wc-icon
                    name="settings_solid"
                    size="16px"
                  ></modus-wc-icon
                ></span>
                <span class="custom-user-icon">Account Settings</span>
              </div>
              <div class="menu-item">
                <span class="menu-item-icon"
                  ><modus-wc-icon
                    name="person_solid"
                    size="16px"
                  ></modus-wc-icon
                ></span>
                <span class="custom-user-icon">Profile</span>
              </div>
              <div class="menu-item">
                <span class="menu-item-icon"
                  ><modus-wc-icon name="sign_out" size="16px"></modus-wc-icon
                ></span>
                <span class="custom-user-icon">Logout</span>
              </div>
            </modus-wc-card>
          </div>
        </modus-wc-navbar>
      </div>
      <script>
        // Added this block to demonstrate how to toggle a custom user menu and manage navbar visibility settings using JavaScript.
        // const toggleCustomUserMenu = (e) => {
        //    const customIcon = e.currentTarget;
        //    const menu =
        //    customIcon.parentElement?.querySelector('#custom-user-menu');
        //    menu?.classList.toggle('hidden');
        // };
        //  const navbar = document.querySelector('modus-wc-navbar');
        //  const userIcon = document.querySelector('.custom-user-icon');
        //  if (userIcon) {
        //     userIcon.addEventListener('click', toggleCustomUserMenu);
        //   }
        //  if (navbar) {
        //   navbar.visibility = {
        //     ai: false,
        //     apps: false,
        //     help: false,
        //     mainMenu: false,
        //     notifications: false,
        //     search: false,
        //     searchInput: false,
        //     user: false
        //   };
        // }
      <\/script>
    \`;
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const z=["Default","CustomMenuAndSlots"];export{t as CustomMenuAndSlots,s as Default,z as __namedExportsOrder,j as default};
