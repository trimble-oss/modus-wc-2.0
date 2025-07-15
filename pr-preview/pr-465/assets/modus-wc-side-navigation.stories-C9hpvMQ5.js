import{w as y}from"./decorator-D4YmxizW.js";import{x as b}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var u=Object.freeze,S=Object.defineProperty,M=(e,d)=>u(S(e,"raw",{value:u(e.slice())})),p;const z={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[y],parameters:{layout:"padded",actions:{handles:["expandedChange"]}}},l={render:e=>{const d=c=>{const i=c.target,t=i==null?void 0:i.closest(".layout-with-navbar");let o;t?o=t.querySelector("modus-wc-side-navigation"):o=document.querySelector("modus-wc-side-navigation"),o&&(o.expanded=c.detail)};return b(p||(p=M([`
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
          align-self: flex-start;
          position: relative;
        }
      </style>
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const menuItems = document.querySelectorAll('modus-wc-menu-item');

          menuItems.forEach((item) => {
            item.addEventListener('itemSelect', () => {
              menuItems.forEach((i) => i.removeAttribute('selected'));
              item.setAttribute('selected', '');
            });
          });
        });

        function handleMenuOpenChange(e) {
          const eventSource = e.target;
          const storyContainer = eventSource?.closest('.layout-with-navbar');

          let sideNav;

          if (storyContainer) {
            sideNav = storyContainer.querySelector('modus-wc-side-navigation');
          } else {
            sideNav = document.querySelector('modus-wc-side-navigation');
          }

          if (sideNav) {
            sideNav.expanded = e.detail;
          }
        }
      <\/script>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          user-name="John Doe"
          user-avatar="/assets/avatar.png"
          @mainMenuOpenChange=`,`
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
              <modus-wc-menu-item label="home" selected>
                <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="profile">
                <modus-wc-icon slot="start-icon" name="person"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="settings">
                <modus-wc-icon slot="start-icon" name="gears"></modus-wc-icon>
              </modus-wc-menu-item>
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
    `])),d,{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],a(e["custom-class"]),e.expanded,e["max-width"],a(e.mode),a(e["target-content"]))}},r={render:e=>{const d=t=>{const o=t.target,s=o==null?void 0:o.closest(".layout-with-navbar");let n;s?n=s.querySelector("modus-wc-side-navigation"):n=document.querySelector("modus-wc-side-navigation"),n&&(n.expanded=t.detail)},c=t=>{const o=t.target;if(!o)return;o.querySelectorAll(".modus-wc-menu-dropdown-toggle").forEach(n=>{n.classList.remove("modus-wc-menu-dropdown-show")}),document.querySelectorAll(".dropdown-content").forEach(n=>{n.classList.remove("modus-wc-menu-dropdown-show")})},i=t=>{const s=t.target.closest(".modus-wc-menu-dropdown-toggle");if(!s)return;const n=s.nextElementSibling,m=s.closest("modus-wc-side-navigation");n!=null&&n.classList.contains("modus-wc-menu-dropdown")&&(m!=null&&m.expanded)&&n.classList.toggle("modus-wc-menu-dropdown-show"),s.classList.toggle("modus-wc-menu-dropdown-show")};return b`
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

        .menu-icon {
          margin-right: 1rem;
        }

        .menu-item {
          display: block;
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: var(--modus-wc-color-gray-9);
          font-size: 16px;
          line-height: 1.5;
        }

        .modus-wc-menu-dropdown {
          padding-left: 1rem;
        }

        .modus-wc-menu-dropdown-toggle {
          cursor: pointer;
          align-items: center;
          padding: 0.7rem 1.25rem;
          font-size: 16px;
          line-height: 1.5;
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
          align-self: flex-start;
          position: relative;
        }

        ul {
          list-style: none;
        }
      </style>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          user-name="John Doe"
          user-avatar="/assets/avatar.png"
          @mainMenuOpenChange=${d}
          .visibility=${{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0}}
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=${e["collapse-on-click-outside"]}
            custom-class=${a(e["custom-class"])}
            expanded=${e.expanded}
            max-width=${e["max-width"]}
            mode=${a(e.mode)}
            target-content=${a(e["target-content"])}
          >
            <modus-wc-menu
              size="lg"
              @menuFocusout=${c}
              @click=${i}
            >
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="folder_open"
                    size="sm"
                  ></modus-wc-icon>
                  Projects
                </span>
                <ul class="modus-wc-menu-dropdown dropdown-content">
                  <li><a class="menu-item">Submenu 1</a></li>
                  <li><a class="menu-item">Submenu 2</a></li>
                  <li class="dropdown dropdown-hover dropdown-right">
                    <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                      <modus-wc-icon
                        name="settings"
                        size="sm"
                        style="margin-right: 0.5rem;"
                      ></modus-wc-icon>
                      Settings
                    </span>
                    <ul
                      tabindex="0"
                      class="modus-wc-menu-dropdown dropdown-content"
                    >
                      <li><a class="menu-item">Submenu 1</a></li>
                      <li><a class="menu-item">Submenu 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="document"
                    size="sm"
                  ></modus-wc-icon>
                  Reports
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Analytics</a></li>
                  <li><a class="menu-item">Financial Reports</a></li>
                  <li><a class="menu-item">Performance</a></li>
                </ul>
              </li>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="person"
                    size="sm"
                  ></modus-wc-icon>
                  Users
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Permissions</a></li>
                  <li><a class="menu-item">Roles</a></li>
                  <li><a class="menu-item">User Management</a></li>
                </ul>
              </li>
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
    `}};var g,w,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      let sideNav: Element | null;
      if (storyContainer) {
        sideNav = storyContainer.querySelector('modus-wc-side-navigation');
      } else {
        sideNav = document.querySelector('modus-wc-side-navigation');
      }
      if (sideNav) {
        (sideNav as HTMLElement & {
          expanded: boolean;
        }).expanded = e.detail;
      }
    };
    return html\`
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
          align-self: flex-start;
          position: relative;
        }
      </style>
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const menuItems = document.querySelectorAll('modus-wc-menu-item');

          menuItems.forEach((item) => {
            item.addEventListener('itemSelect', () => {
              menuItems.forEach((i) => i.removeAttribute('selected'));
              item.setAttribute('selected', '');
            });
          });
        });

        function handleMenuOpenChange(e) {
          const eventSource = e.target;
          const storyContainer = eventSource?.closest('.layout-with-navbar');

          let sideNav;

          if (storyContainer) {
            sideNav = storyContainer.querySelector('modus-wc-side-navigation');
          } else {
            sideNav = document.querySelector('modus-wc-side-navigation');
          }

          if (sideNav) {
            sideNav.expanded = e.detail;
          }
        }
      <\/script>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          user-name="John Doe"
          user-avatar="/assets/avatar.png"
          @mainMenuOpenChange=\${handleMenuOpenChange}
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
              <modus-wc-menu-item label="home" selected>
                <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="profile">
                <modus-wc-icon slot="start-icon" name="person"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="settings">
                <modus-wc-icon slot="start-icon" name="gears"></modus-wc-icon>
              </modus-wc-menu-item>
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
    \`;
  }
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var h,x,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      let sideNav: Element | null;
      if (storyContainer) {
        sideNav = storyContainer.querySelector('modus-wc-side-navigation');
      } else {
        sideNav = document.querySelector('modus-wc-side-navigation');
      }
      if (sideNav) {
        (sideNav as HTMLElement & {
          expanded: boolean;
        }).expanded = e.detail;
      }
    };
    const handleMenuFocusout = (e: FocusEvent) => {
      const menu = e.target as HTMLElement;
      if (!menu) return;
      const dropdowns = menu.querySelectorAll('.modus-wc-menu-dropdown-toggle');
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('modus-wc-menu-dropdown-show');
      });
      document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.classList.remove('modus-wc-menu-dropdown-show');
      });
    };
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const toggle = target.closest('.modus-wc-menu-dropdown-toggle') as HTMLElement;
      if (!toggle) return;
      const dropdown = toggle.nextElementSibling as HTMLElement | null;
      const sideNav = toggle.closest('modus-wc-side-navigation') as HTMLElement & {
        expanded?: boolean;
      };
      if (dropdown?.classList.contains('modus-wc-menu-dropdown') && sideNav?.expanded) {
        dropdown.classList.toggle('modus-wc-menu-dropdown-show');
      }
      toggle.classList.toggle('modus-wc-menu-dropdown-show');
    };
    return html\`
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

        .menu-icon {
          margin-right: 1rem;
        }

        .menu-item {
          display: block;
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: var(--modus-wc-color-gray-9);
          font-size: 16px;
          line-height: 1.5;
        }

        .modus-wc-menu-dropdown {
          padding-left: 1rem;
        }

        .modus-wc-menu-dropdown-toggle {
          cursor: pointer;
          align-items: center;
          padding: 0.7rem 1.25rem;
          font-size: 16px;
          line-height: 1.5;
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
          align-self: flex-start;
          position: relative;
        }

        ul {
          list-style: none;
        }
      </style>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          user-name="John Doe"
          user-avatar="/assets/avatar.png"
          @mainMenuOpenChange=\${handleMenuOpenChange}
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
            <modus-wc-menu
              size="lg"
              @menuFocusout=\${handleMenuFocusout}
              @click=\${handleClick}
            >
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="folder_open"
                    size="sm"
                  ></modus-wc-icon>
                  Projects
                </span>
                <ul class="modus-wc-menu-dropdown dropdown-content">
                  <li><a class="menu-item">Submenu 1</a></li>
                  <li><a class="menu-item">Submenu 2</a></li>
                  <li class="dropdown dropdown-hover dropdown-right">
                    <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                      <modus-wc-icon
                        name="settings"
                        size="sm"
                        style="margin-right: 0.5rem;"
                      ></modus-wc-icon>
                      Settings
                    </span>
                    <ul
                      tabindex="0"
                      class="modus-wc-menu-dropdown dropdown-content"
                    >
                      <li><a class="menu-item">Submenu 1</a></li>
                      <li><a class="menu-item">Submenu 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="document"
                    size="sm"
                  ></modus-wc-icon>
                  Reports
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Analytics</a></li>
                  <li><a class="menu-item">Financial Reports</a></li>
                  <li><a class="menu-item">Performance</a></li>
                </ul>
              </li>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    class="menu-icon"
                    name="person"
                    size="sm"
                  ></modus-wc-icon>
                  Users
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Permissions</a></li>
                  <li><a class="menu-item">Roles</a></li>
                  <li><a class="menu-item">User Management</a></li>
                </ul>
              </li>
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
    \`;
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const T=["Default","collapsibleMenu"];export{l as Default,T as __namedExportsOrder,r as collapsibleMenu,z as default};
