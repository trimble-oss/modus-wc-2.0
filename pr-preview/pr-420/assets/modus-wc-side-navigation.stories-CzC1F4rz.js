import{w as c}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-C8zulti1.js";import{o as n}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var a=Object.freeze,m=Object.defineProperty,l=(e,u)=>a(m(e,"raw",{value:a(e.slice())})),i;const x={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[c],parameters:{layout:"padded",actions:{handles:["expandedChange"]}}},t={render:e=>r(i||(i=l([`
    <style>
      .layout-with-navbar {
        box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .main-content-row {
        display: flex;
        flex: 1;
        overflow: hidden;
      }
      .modus-wc-menu-item-labels {
        padding: 0 16px;
      }
      .navbar {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .panel-content {
        margin-left: 4rem;
        padding: 10px;
      }
      .side-navigation {
        height: 500px;
        max-height: 500px;
        min-height: 100px;
        align-self: flex-start;
        position: relative;
      }
    </style>
    <script>
      const navbar = document.querySelector('modus-wc-navbar');
      document.addEventListener('DOMContentLoaded', () => {
        const menuItems = document.querySelectorAll('modus-wc-menu-item');
        const sideNav = document.querySelector('modus-wc-side-navigation');
        menuItems.forEach((item) => {
          item.addEventListener('itemSelect', () => {
            menuItems.forEach((i) => i.removeAttribute('selected'));
            item.setAttribute('selected', '');
            if (sideNav) {
              sideNav.expanded = false;
            }
          });
        });
      });

      document.addEventListener('mainMenuOpenChange', () => {
        if (navbar) {
          const sideNav = document.querySelector('modus-wc-side-navigation');
          if (sideNav) {
            sideNav.toggleAttribute('expanded');
          }
        }
      });
    <\/script>
    <div class="layout-with-navbar">
      <modus-wc-navbar
        app-title="Modus App"
        class="navbar"
        logo="/assets/logo.svg"
        user-name="John Doe"
        user-avatar="/assets/avatar.png"
        .visibility=`,`
        style="z-index: 2;"
      ></modus-wc-navbar>
      <div class="main-content-row">
        <modus-wc-side-navigation
          class="side-navigation"
          collapse-on-click-outside=`,`
          custom-class=`,`
          expanded=`,`
          max-width=`,`
          mode=`,`
          target-content=`,`
        >
          <modus-wc-menu size="lg">
            <modus-wc-menu-item
              label="home"
              start-icon="home"
              selected
            ></modus-wc-menu-item>
            <modus-wc-menu-item
              label="profile"
              start-icon="person"
            ></modus-wc-menu-item>
            <modus-wc-menu-item
              label="settings"
              start-icon="gears"
            ></modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-side-navigation>
        <div class="panel-content">
          <div id="overview">
            <p>
              The side navigation of an application provides context through
              accessible menu options and positions a consistent component to
              connect to various pages in the application.
            </p>
            <p>
              The side navigation is a collapsible side content of the site’s
              pages. It is located alongside the page’s primary content. The
              component is designed to add side content to a fullscreen
              application. It is activated through the “hamburger” menu in the
              Navbar.
            </p>
          </div>
        </div>
      </div>
    </div>
  `])),{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],n(e["custom-class"]),e.expanded,e["max-width"],n(e.mode),n(e["target-content"]))};var o,s,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`
    <style>
      .layout-with-navbar {
        box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .main-content-row {
        display: flex;
        flex: 1;
        overflow: hidden;
      }
      .modus-wc-menu-item-labels {
        padding: 0 16px;
      }
      .navbar {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .panel-content {
        margin-left: 4rem;
        padding: 10px;
      }
      .side-navigation {
        height: 500px;
        max-height: 500px;
        min-height: 100px;
        align-self: flex-start;
        position: relative;
      }
    </style>
    <script>
      const navbar = document.querySelector('modus-wc-navbar');
      document.addEventListener('DOMContentLoaded', () => {
        const menuItems = document.querySelectorAll('modus-wc-menu-item');
        const sideNav = document.querySelector('modus-wc-side-navigation');
        menuItems.forEach((item) => {
          item.addEventListener('itemSelect', () => {
            menuItems.forEach((i) => i.removeAttribute('selected'));
            item.setAttribute('selected', '');
            if (sideNav) {
              sideNav.expanded = false;
            }
          });
        });
      });

      document.addEventListener('mainMenuOpenChange', () => {
        if (navbar) {
          const sideNav = document.querySelector('modus-wc-side-navigation');
          if (sideNav) {
            sideNav.toggleAttribute('expanded');
          }
        }
      });
    <\/script>
    <div class="layout-with-navbar">
      <modus-wc-navbar
        app-title="Modus App"
        class="navbar"
        logo="/assets/logo.svg"
        user-name="John Doe"
        user-avatar="/assets/avatar.png"
        .visibility=\${{
    apps: true,
    help: true,
    mainMenu: true,
    notifications: true,
    search: true,
    searchInput: false,
    user: true
  }}
        style="z-index: 2;"
      ></modus-wc-navbar>
      <div class="main-content-row">
        <modus-wc-side-navigation
          class="side-navigation"
          collapse-on-click-outside=\${args['collapse-on-click-outside']}
          custom-class=\${ifDefined(args['custom-class'])}
          expanded=\${args.expanded}
          max-width=\${args['max-width']}
          mode=\${ifDefined(args.mode)}
          target-content=\${ifDefined(args['target-content'])}
        >
          <modus-wc-menu size="lg">
            <modus-wc-menu-item
              label="home"
              start-icon="home"
              selected
            ></modus-wc-menu-item>
            <modus-wc-menu-item
              label="profile"
              start-icon="person"
            ></modus-wc-menu-item>
            <modus-wc-menu-item
              label="settings"
              start-icon="gears"
            ></modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-side-navigation>
        <div class="panel-content">
          <div id="overview">
            <p>
              The side navigation of an application provides context through
              accessible menu options and positions a consistent component to
              connect to various pages in the application.
            </p>
            <p>
              The side navigation is a collapsible side content of the site’s
              pages. It is located alongside the page’s primary content. The
              component is designed to add side content to a fullscreen
              application. It is activated through the “hamburger” menu in the
              Navbar.
            </p>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,x as default};
