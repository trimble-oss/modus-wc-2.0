import{w as b}from"./decorator-D4YmxizW.js";import{x}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var r=Object.freeze,f=Object.defineProperty,y=(e,i)=>r(f(e,"raw",{value:r(e.slice())})),m;const T={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[b],parameters:{layout:"padded",actions:{handles:["expandedChange"]}}},c={render:e=>{const i=d=>{const o=d.target,n=o==null?void 0:o.closest(".layout-with-navbar");let t;n?t=n.querySelector("modus-wc-side-navigation"):t=document.querySelector("modus-wc-side-navigation"),t&&(t.expanded=d.detail)};return x(m||(m=y([`
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
    `])),i,{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],s(e["custom-class"]),e.expanded,e["max-width"],s(e.mode),s(e["target-content"]))}},l={render:e=>{const i=o=>{const n=o.target,t=n==null?void 0:n.closest(".layout-with-navbar");let a;t?a=t.querySelector("modus-wc-side-navigation"):a=document.querySelector("modus-wc-side-navigation"),a&&(a.expanded=o.detail)},d=o=>{o.detail||document.querySelectorAll(".dropdown-content").forEach(n=>{n.classList.remove("modus-menu-dropdown-show")})};return setTimeout(()=>{document.querySelectorAll(".modus-wc-menu-dropdown-toggle").forEach(o=>{o.addEventListener("click",n=>{const t=n.currentTarget.closest("modus-wc-side-navigation");if(t&&t.expanded){const a=n.currentTarget.nextElementSibling;a&&a.classList.toggle("modus-menu-dropdown-show")}})})},0),x`
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
        .menu-item {
          display: block;
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: var(--modus-wc-color-gray-9);
        }
        .menu-icon {
          margin-right: 1rem;
        }

        ul {
          list-style: none;
        }
        .modus-wc-menu-dropdown {
          display: none;
          padding-left: 1rem;
        }

        .modus-menu-dropdown-show {
          display: block;
        }

        .modus-wc-menu-dropdown-toggle {
          cursor: pointer;
          align-items: center;
          padding: 0.7rem 1.25rem;
        }
      </style>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          user-name="John Doe"
          user-avatar="/assets/avatar.png"
          @mainMenuOpenChange=${i}
          .visibility=${{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0}}
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=${e["collapse-on-click-outside"]}
            custom-class=${s(e["custom-class"])}
            expanded=${e.expanded}
            max-width=${e["max-width"]}
            mode=${s(e.mode)}
            target-content=${s(e["target-content"])}
            @expandedChange=${d}
          >
            <modus-wc-menu size="lg">
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    name="folder_open"
                    size="sm"
                    class="menu-icon"
                  ></modus-wc-icon>
                  Projects
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
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
                    name="document"
                    size="sm"
                    class="menu-icon"
                  ></modus-wc-icon>
                  Reports
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Financial Reports</a></li>
                  <li><a class="menu-item">Analytics</a></li>
                  <li><a class="menu-item">Performance</a></li>
                </ul>
              </li>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    name="person"
                    size="sm"
                    class="menu-icon"
                  ></modus-wc-icon>
                  Users
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">User Management</a></li>
                  <li><a class="menu-item">Permissions</a></li>
                  <li><a class="menu-item">Roles</a></li>
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
    `}};var u,p,g;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(p=c.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var w,v,h;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    const handleExpandedChange = (e: CustomEvent) => {
      if (!e.detail) {
        // Close all dropdown menus when the side navigation collapses
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
          dropdown.classList.remove('modus-menu-dropdown-show');
        });
      }
    }; // Setup dropdown toggle handlers after render
    setTimeout(() => {
      document.querySelectorAll('.modus-wc-menu-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', e => {
          const sideNav = (e.currentTarget as HTMLElement).closest('modus-wc-side-navigation') as HTMLElement & {
            expanded: boolean;
          };
          if (sideNav && sideNav.expanded) {
            const dropdown = (e.currentTarget as HTMLElement).nextElementSibling as HTMLElement;
            if (dropdown) {
              dropdown.classList.toggle('modus-menu-dropdown-show');
            }
          }
        });
      });
    }, 0);
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
        .menu-item {
          display: block;
          padding: 0.5rem 1rem;
          text-decoration: none;
          color: var(--modus-wc-color-gray-9);
        }
        .menu-icon {
          margin-right: 1rem;
        }

        ul {
          list-style: none;
        }
        .modus-wc-menu-dropdown {
          display: none;
          padding-left: 1rem;
        }

        .modus-menu-dropdown-show {
          display: block;
        }

        .modus-wc-menu-dropdown-toggle {
          cursor: pointer;
          align-items: center;
          padding: 0.7rem 1.25rem;
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
            @expandedChange=\${handleExpandedChange}
          >
            <modus-wc-menu size="lg">
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    name="folder_open"
                    size="sm"
                    class="menu-icon"
                  ></modus-wc-icon>
                  Projects
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
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
                    name="document"
                    size="sm"
                    class="menu-icon"
                  ></modus-wc-icon>
                  Reports
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">Financial Reports</a></li>
                  <li><a class="menu-item">Analytics</a></li>
                  <li><a class="menu-item">Performance</a></li>
                </ul>
              </li>
              <li class="dropdown dropdown-hover">
                <span tabindex="0" class="modus-wc-menu-dropdown-toggle">
                  <modus-wc-icon
                    name="person"
                    size="sm"
                    class="menu-icon"
                  ></modus-wc-icon>
                  Users
                </span>
                <ul
                  tabindex="0"
                  class="modus-wc-menu-dropdown dropdown-content"
                >
                  <li><a class="menu-item">User Management</a></li>
                  <li><a class="menu-item">Permissions</a></li>
                  <li><a class="menu-item">Roles</a></li>
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
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const $=["Default","collapsibleMenu"];export{c as Default,$ as __namedExportsOrder,l as collapsibleMenu,T as default};
