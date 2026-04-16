import{w as $}from"./decorator-D4YmxizW.js";import{x as l}from"./lit-element-CucEn6F2.js";import{o as a}from"./if-defined-BiZP-SBN.js";import{c as z}from"./shadow-host-helper-A4Nvcs5e.js";import{g as L}from"./logo-constants-B1DTGvvy.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var b=Object.freeze,j=Object.defineProperty,T=(e,i)=>b(j(e,"raw",{value:b(e.slice())})),h,g;const _={apps:"Apps",help:"Help",notifications:"Notifications",search:"Search"},D={avatarAlt:"Sonic",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"sonic@trimble.com",name:"Sonic the Hedgehog"},H={ai:!0,apps:!0,help:!0,logo:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!0,user:!0},G={title:"Components/Navbar",component:"modus-wc-navbar",args:{condensed:!1,"search-debounce-ms":300,"text-overrides":_,"user-card":D,visibility:H,"logo-name":"trimble"},argTypes:{"text-overrides":{description:"Text replacements for navbar menu items",table:{type:{detail:`
            Interface: INavbarTextOverrides
            Properties:
            - apps (string, optional): Replaces the text for "Apps" in the condensed menu
            - help (string, optional): Replaces the text for "Help" in the condensed menu
            - notifications (string, optional): Replaces the text for "Notifications" in the condensed menu
            - search (string, optional): Replaces the text for "Search" in the condensed menu
          `}},control:{type:"object"}},"logo-name":{description:'The name of the logo to display. Defaults to "trimble".',table:{type:{summary:"LogoName"},defaultValue:{summary:"trimble"}},control:{type:"select"},options:L()},"user-card":{table:{type:{detail:`
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
            - logo (boolean, optional): Controls visibility of the logo button; omit for visible
            - mainMenu (boolean, optional): Controls visibility of the main menu button
            - notifications (boolean, optional): Controls visibility of the notifications button
            - search (boolean, optional): Controls visibility of the search button
            - searchInput (boolean, optional): Controls visibility of the search input
            - user (boolean, optional): Controls visibility of the user button
          `}}}},decorators:[$],parameters:{actions:{handles:["aiClick","appsClick","appsMenuOpenChange","condensedMenuOpenChange","helpClick","mainMenuOpenChange","myTrimbleClick","notificationsMenuOpenChange","notificationsClick","searchChange","searchClick","searchInputOpenChange","signOutClick","trimbleLogoClick","userMenuOpenChange"]},layout:"padded"}},R={render:e=>l(h||(h=T([`
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
  logo-name=`,`
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
//     logo: true,
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

    `])),e["apps-menu-open"],e.condensed,e["condensed-menu-open"],a(e["custom-class"]),e["main-menu-open"],e["notifications-menu-open"],a(e["search-debounce-ms"]),e["search-input-open"],a(e["text-overrides"]),e["user-card"],e["user-menu-open"],e.visibility,e["logo-name"])},r={...R},c={render:e=>{function i(t){var o;const n=(o=t.currentTarget.parentElement)==null?void 0:o.querySelector("#custom-user-menu");n==null||n.classList.toggle("hidden")}return l(g||(g=T([`
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
        //    const menu = customIcon.parentElement?.querySelector('#custom-user-menu');
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
        //     logo: true,
        //     mainMenu: false,
        //     notifications: false,
        //     search: false,
        //     searchInput: false,
        //     user: false
        //   };
        // }
      <\/script>
    `])),e["apps-menu-open"],e.condensed,e["condensed-menu-open"],a(e["custom-class"]),e["main-menu-open"],e["notifications-menu-open"],a(e["search-debounce-ms"]),e["search-input-open"],a(e["text-overrides"]),e["user-card"],e["user-menu-open"],{ai:!1,apps:!1,help:!1,mainMenu:!1,notifications:!1,search:!1,searchInput:!1,user:!1},i)}},d={render:e=>l`
    <style>
      .logo-small .modus-wc-logo {
        width: 90px;
      }

      .logo-large .modus-wc-logo {
        width: 140px;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 40px;
        font-family: sans-serif;
      }

      .navbar-frame {
        border: 1px dashed black;
        height: 360px;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
      }
      .navbar-frame-outer {
        border: 1px dashed black;
      }

      [slot='main-menu'] {
        background-color: #0063a3;
        color: white;
        height: 400px;
      }
    </style>

    <div class="wrapper">
      <div>
        <div class="navbar-frame-outer">
          <div class="navbar-frame">
            <modus-wc-navbar
              search-debounce-ms="300"
              logo-name="trimble"
              custom-class="logo-small"
              .userCard=${e["user-card"]}
            >
              <div slot="main-menu">Main menu contents</div>
              <div slot="notifications">Notification contents</div>
              <div slot="apps">App drawer contents</div>
            </modus-wc-navbar>
          </div>
        </div>
      </div>

      <div>
        <div class="navbar-frame-outer">
          <div class="navbar-frame">
            <modus-wc-navbar
              search-debounce-ms="300"
              logo-name="trimble"
              custom-class="logo-large"
              .userCard=${e["user-card"]}
            >
              <div slot="main-menu">Main menu contents</div>
              <div slot="notifications">Notification contents</div>
              <div slot="apps">App drawer contents</div>
            </modus-wc-navbar>
          </div>
        </div>
      </div>
    </div>
  `},u={render:e=>{if(!customElements.get("navbar-shadow-host")){const i=z({componentTag:"modus-wc-navbar",propsMapper:(t,s)=>{const n=s;if(n.condensed=!!t.condensed,n.customClass=t["custom-class"]||"",n.logoName=t["logo-name"],n.searchDebounceMs=t["search-debounce-ms"]??300,n.textOverrides=t["text-overrides"],n.userCard=t["user-card"],n.visibility=t.visibility,!s.querySelector('[slot="main-menu"]')){const o=document.createElement("div");o.setAttribute("slot","main-menu"),o.textContent="Main menu contents";const m=document.createElement("div");m.setAttribute("slot","notifications"),m.textContent="Notification contents";const p=document.createElement("div");p.setAttribute("slot","apps"),p.textContent="App drawer contents",s.appendChild(o),s.appendChild(m),s.appendChild(p);const O=s.getRootNode(),v=document.createElement("style");v.textContent=`
              :host {
                display: block;
                border: 1px dashed black;
                height: 360px;
                overflow: hidden;
              }
              [slot='main-menu'] {
                background-color: #0063a3;
                color: white;
                height: 400px;
              }
            `,O.appendChild(v)}}});customElements.define("navbar-shadow-host",i)}return l`<navbar-shadow-host
      .props=${{...e}}
    ></navbar-shadow-host>`}};var f,w,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template
}`,...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,C,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        //    const menu = customIcon.parentElement?.querySelector('#custom-user-menu');
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
        //     logo: true,
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
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var M,k,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => html\`
    <style>
      .logo-small .modus-wc-logo {
        width: 90px;
      }

      .logo-large .modus-wc-logo {
        width: 140px;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 40px;
        font-family: sans-serif;
      }

      .navbar-frame {
        border: 1px dashed black;
        height: 360px;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
      }
      .navbar-frame-outer {
        border: 1px dashed black;
      }

      [slot='main-menu'] {
        background-color: #0063a3;
        color: white;
        height: 400px;
      }
    </style>

    <div class="wrapper">
      <div>
        <div class="navbar-frame-outer">
          <div class="navbar-frame">
            <modus-wc-navbar
              search-debounce-ms="300"
              logo-name="trimble"
              custom-class="logo-small"
              .userCard=\${args['user-card']}
            >
              <div slot="main-menu">Main menu contents</div>
              <div slot="notifications">Notification contents</div>
              <div slot="apps">App drawer contents</div>
            </modus-wc-navbar>
          </div>
        </div>
      </div>

      <div>
        <div class="navbar-frame-outer">
          <div class="navbar-frame">
            <modus-wc-navbar
              search-debounce-ms="300"
              logo-name="trimble"
              custom-class="logo-large"
              .userCard=\${args['user-card']}
            >
              <div slot="main-menu">Main menu contents</div>
              <div slot="notifications">Notification contents</div>
              <div slot="apps">App drawer contents</div>
            </modus-wc-navbar>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var A,E,N;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('navbar-shadow-host')) {
      const NavbarShadowHost = createShadowHostClass<NavbarArgs>({
        componentTag: 'modus-wc-navbar',
        propsMapper: (v: NavbarArgs, el: HTMLElement) => {
          const navbarEl = el as unknown as {
            condensed: boolean;
            customClass: string;
            logoName: LogoName;
            searchDebounceMs: number;
            textOverrides: INavbarTextOverrides;
            userCard: INavbarUserCard;
            visibility: INavbarVisibility;
          };
          navbarEl.condensed = Boolean(v.condensed);
          navbarEl.customClass = v['custom-class'] || '';
          navbarEl.logoName = v['logo-name'];
          navbarEl.searchDebounceMs = v['search-debounce-ms'] ?? 300;
          navbarEl.textOverrides = v['text-overrides'] as INavbarTextOverrides;
          navbarEl.userCard = v['user-card'];
          navbarEl.visibility = v.visibility as INavbarVisibility;
          if (!el.querySelector('[slot="main-menu"]')) {
            const mainMenu = document.createElement('div');
            mainMenu.setAttribute('slot', 'main-menu');
            mainMenu.textContent = 'Main menu contents';
            const notifications = document.createElement('div');
            notifications.setAttribute('slot', 'notifications');
            notifications.textContent = 'Notification contents';
            const apps = document.createElement('div');
            apps.setAttribute('slot', 'apps');
            apps.textContent = 'App drawer contents';
            el.appendChild(mainMenu);
            el.appendChild(notifications);
            el.appendChild(apps);

            // Inject slot styles into shadow root (matches Default story styling)
            const shadowRoot = el.getRootNode() as ShadowRoot;
            const styleEl = document.createElement('style');
            styleEl.textContent = \`
              :host {
                display: block;
                border: 1px dashed black;
                height: 360px;
                overflow: hidden;
              }
              [slot='main-menu'] {
                background-color: #0063a3;
                color: white;
                height: 400px;
              }
            \`;
            shadowRoot.appendChild(styleEl);
          }
        }
      });
      customElements.define('navbar-shadow-host', NavbarShadowHost);
    }
    return html\`<navbar-shadow-host
      .props=\${{
      ...args
    }}
    ></navbar-shadow-host>\`;
  }
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const K=["Default","CustomMenuAndSlots","CustomLogoSizes","ShadowDomParent"];export{d as CustomLogoSizes,c as CustomMenuAndSlots,r as Default,u as ShadowDomParent,K as __namedExportsOrder,G as default};
