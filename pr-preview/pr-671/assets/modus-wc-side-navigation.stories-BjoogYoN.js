import{w as E}from"./decorator-D4YmxizW.js";import{x as l}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var p=Object.freeze,N=Object.defineProperty,$=(e,c)=>p(N(e,"raw",{value:p(e.slice())})),v,h;const k={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[E],parameters:{layout:"padded",actions:{handles:["expandedChange"]}}},m={render:e=>{const c=u=>{const n=u.target,t=n==null?void 0:n.closest(".layout-with-navbar");let a;t?a=t.querySelector("modus-wc-side-navigation"):a=document.querySelector("modus-wc-side-navigation"),a&&(a.expanded=u.detail)};return l(v||(v=$([`
      <style>
        .layout-with-navbar {
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
          box-shadow: none;
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
          @mainMenuOpenChange=`,`
          .userCard=`,`
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
    `])),c,{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},{ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],s(e["custom-class"]),e.expanded,e["max-width"],s(e.mode),s(e["target-content"]))}},r={render:e=>{const c=n=>{const t=n.target,a=t==null?void 0:t.closest(".layout-with-navbar");let o;if(a&&(o=a.querySelector("modus-wc-side-navigation"),o)){const i=o;i.expanded=n.detail}},u=n=>{n.detail||n.target.querySelectorAll("modus-wc-menu-item").forEach(o=>{const i=o;i.hasSubmenu&&typeof i.collapseSubmenu=="function"&&i.collapseSubmenu()})};return l`
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

        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }

        .side-navigation {
          align-self: flex-start;
          height: 500px;
          position: relative;
        }
      </style>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          @mainMenuOpenChange=${c}
          .userCard=${{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"}}
          .visibility=${{ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0}}
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
            @expandedChange=${u}
          >
            <modus-wc-menu>
              <modus-wc-menu-item
                label="Charts"
                .hasSubmenu=${!0}
                value="charts"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="bar_graph"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=${!0}>
                  <modus-wc-menu-item label="Bar Chart" value="bar-chart">
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart" value="line-chart">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Calendar" value="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Reports"
                .hasSubmenu=${!0}
                value="reports"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="master_data"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=${!0}>
                  <modus-wc-menu-item
                    label="Monthly Report"
                    value="monthly-report"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Dashboard" value="dashboard">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="dashboard"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Settings"
                .hasSubmenu=${!0}
                value="settings"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="settings"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=${!0}>
                  <modus-wc-menu-item
                    label="User Preferences"
                    value="user-preferences"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="System Settings"
                    value="system-settings"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Privacy" value="privacy">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <h3>Collapsible Menu with API</h3>
              <p>
                This example demonstrates the collapsible menu API where menu
                items handle their own collapse/expand behavior through the
                hasSubmenu prop.
              </p>
              <p>
                When the side navigation closes, the expandedChange event is
                used to call the collapseSubmenu() method on each menu item.
                This keeps the side navigation component generic while allowing
                the story to coordinate behavior between components.
              </p>
              <p>
                Menu items inside a collapsed side nav cannot expand their
                submenus, ensuring a consistent user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    `}},d={render:e=>{const c=n=>{const t=n.target,a=t==null?void 0:t.closest(".layout-with-navbar");let o;a?o=a.querySelector("modus-wc-side-navigation"):o=document.querySelector("modus-wc-side-navigation"),o&&(o.expanded=n.detail)},u=n=>{if(!n.detail){const t=n.target,a=t==null?void 0:t.closest(".layout-with-navbar");a&&a.querySelectorAll("modus-wc-menu-item").forEach(i=>{i.collapseAll=!0})}};return l(h||(h=$([`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

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

        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }

        .side-navigation {
          align-self: flex-start;
          height: 500px;
          position: relative;
        }

        .flex-right {
          float: right;
          display: flex;
          margin-left: 50px;
        }

        .flex-right:hover {
          background-color: unset;
        }

        .menu-icon {
          padding: 0.5rem !important;
          min-height: unset !important;
          height: unset !important;
        }
      </style>
      <script>
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
             (sideNav as HTMLElement & { expanded: boolean }).expanded = e.detail;
           }
         };

         const handleExpandChange = async (e: CustomEvent) => {
           if (!e.detail) {
             const eventSource = e.target as HTMLElement;
             const container = eventSource?.closest('.layout-with-navbar');

             if (container) {
               const menuItems = container.querySelectorAll('modus-wc-menu-item');
               for (let i = 0; i < menuItems.length; i++) {
                 await (menuItems[i] as any).collapseSubmenu();
               }
             }
           }
         };
      <\/script>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          @mainMenuOpenChange=`,`
          .userCard=`,`
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
            @expandedChange=`,`
          >
            <modus-wc-menu checkbox="false">
              <li>
                <div class="flex-right">
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="filter"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="settings"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="more_vertical"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                </div>
              </li>
              <modus-wc-menu-item
                label="Charts"
                .hasSubmenu=`,`
                value="charts"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="bar_graph"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=`,`>
                  <modus-wc-menu-item label="Bar Chart" value="bar-chart">
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart" value="line-chart">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Calendar" value="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Reports"
                .hasSubmenu=`,`
                value="reports"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="master_data"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=`,`>
                  <modus-wc-menu-item
                    label="Monthly Report"
                    value="monthly-report"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-menu-item>
                </modus-wc-menu>
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
                The side navigation is a collapsible side content of the site's
                pages. It is located alongside the page's primary content. The
                component is designed to add side content to a fullscreen
                application. It is activated through the "hamburger" menu in the
                Navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    `])),c,{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},{ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],s(e["custom-class"]),e.expanded,e["max-width"],s(e.mode),s(e["target-content"]),u,!0,!0,!0,!0)}};var w,g,b;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
          box-shadow: none;
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
          @mainMenuOpenChange=\${handleMenuOpenChange}
          .userCard=\${{
      avatarAlt: 'User Avatar',
      avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
      email: 'user@trimble.com',
      name: 'Sonic the Hedgehog'
    }}
          .visibility=\${{
      ai: true,
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
}`,...(b=(g=m.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,x,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      let sideNav: HTMLElement | null;
      if (storyContainer) {
        sideNav = storyContainer.querySelector('modus-wc-side-navigation') as HTMLElement;
        if (sideNav) {
          // Toggle the side nav state (navbar and side nav can be out of sync)
          const sideNavEl = sideNav as HTMLElement & {
            expanded: boolean;
          };
          sideNavEl.expanded = e.detail;
        }
      }
    };
    const handleExpandedChange = (e: CustomEvent) => {
      // Collapse all menu items when side nav closes
      if (!e.detail) {
        const eventSource = e.target as HTMLElement;
        const menuItems = eventSource.querySelectorAll('modus-wc-menu-item');
        menuItems.forEach(menuItem => {
          const item = menuItem as unknown as {
            hasSubmenu?: boolean;
            collapseSubmenu?: () => Promise<void>;
          };
          if (item.hasSubmenu && typeof item.collapseSubmenu === 'function') {
            void item.collapseSubmenu();
          }
        });
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

        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }

        .side-navigation {
          align-self: flex-start;
          height: 500px;
          position: relative;
        }
      </style>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          @mainMenuOpenChange=\${handleMenuOpenChange}
          .userCard=\${{
      avatarAlt: 'User Avatar',
      avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
      email: 'user@trimble.com',
      name: 'Sonic the Hedgehog'
    }}
          .visibility=\${{
      ai: true,
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
            <modus-wc-menu>
              <modus-wc-menu-item
                label="Charts"
                .hasSubmenu=\${true}
                value="charts"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="bar_graph"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=\${true}>
                  <modus-wc-menu-item label="Bar Chart" value="bar-chart">
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart" value="line-chart">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Calendar" value="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Reports"
                .hasSubmenu=\${true}
                value="reports"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="master_data"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=\${true}>
                  <modus-wc-menu-item
                    label="Monthly Report"
                    value="monthly-report"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Dashboard" value="dashboard">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="dashboard"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Settings"
                .hasSubmenu=\${true}
                value="settings"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="settings"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=\${true}>
                  <modus-wc-menu-item
                    label="User Preferences"
                    value="user-preferences"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="System Settings"
                    value="system-settings"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Privacy" value="privacy">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <h3>Collapsible Menu with API</h3>
              <p>
                This example demonstrates the collapsible menu API where menu
                items handle their own collapse/expand behavior through the
                hasSubmenu prop.
              </p>
              <p>
                When the side navigation closes, the expandedChange event is
                used to call the collapseSubmenu() method on each menu item.
                This keeps the side navigation component generic while allowing
                the story to coordinate behavior between components.
              </p>
              <p>
                Menu items inside a collapsed side nav cannot expand their
                submenus, ensuring a consistent user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,C,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    const handleExpandChange = (e: CustomEvent) => {
      if (!e.detail) {
        const eventSource = e.target as HTMLElement;
        const container = eventSource?.closest('.layout-with-navbar');
        if (container) {
          const menuItems = container.querySelectorAll('modus-wc-menu-item');
          menuItems.forEach(item => {
            // Trigger the prop-based collapse
            (item as HTMLElement & {
              collapseAll: boolean;
            }).collapseAll = true;
          });
        }
      }
    };
    return html\`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

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

        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }

        .side-navigation {
          align-self: flex-start;
          height: 500px;
          position: relative;
        }

        .flex-right {
          float: right;
          display: flex;
          margin-left: 50px;
        }

        .flex-right:hover {
          background-color: unset;
        }

        .menu-icon {
          padding: 0.5rem !important;
          min-height: unset !important;
          height: unset !important;
        }
      </style>
      <script>
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
             (sideNav as HTMLElement & { expanded: boolean }).expanded = e.detail;
           }
         };

         const handleExpandChange = async (e: CustomEvent) => {
           if (!e.detail) {
             const eventSource = e.target as HTMLElement;
             const container = eventSource?.closest('.layout-with-navbar');

             if (container) {
               const menuItems = container.querySelectorAll('modus-wc-menu-item');
               for (let i = 0; i < menuItems.length; i++) {
                 await (menuItems[i] as any).collapseSubmenu();
               }
             }
           }
         };
      <\/script>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          logo="/assets/logo.svg"
          @mainMenuOpenChange=\${handleMenuOpenChange}
          .userCard=\${{
      avatarAlt: 'User Avatar',
      avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
      email: 'user@trimble.com',
      name: 'Sonic the Hedgehog'
    }}
          .visibility=\${{
      ai: true,
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
            @expandedChange=\${handleExpandChange}
          >
            <modus-wc-menu checkbox="false">
              <li>
                <div class="flex-right">
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="filter"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="settings"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="more_vertical"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                </div>
              </li>
              <modus-wc-menu-item
                label="Charts"
                .hasSubmenu=\${true}
                value="charts"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="bar_graph"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=\${true}>
                  <modus-wc-menu-item label="Bar Chart" value="bar-chart">
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart" value="line-chart">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Calendar" value="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Reports"
                .hasSubmenu=\${true}
                value="reports"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="master_data"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=\${true}>
                  <modus-wc-menu-item
                    label="Monthly Report"
                    value="monthly-report"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-menu-item>
                </modus-wc-menu>
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
                The side navigation is a collapsible side content of the site's
                pages. It is located alongside the page's primary content. The
                component is designed to add side content to a fullscreen
                application. It is activated through the "hamburger" menu in the
                Navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const O=["Default","CollapsibleMenuWithAPI","collapsibleMenu"];export{r as CollapsibleMenuWithAPI,m as Default,O as __namedExportsOrder,d as collapsibleMenu,k as default};
