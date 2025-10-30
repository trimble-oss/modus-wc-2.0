import{w as M}from"./decorator-D4YmxizW.js";import{x as E}from"./lit-element-C8zulti1.js";import{o as c}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var w=Object.freeze,L=Object.defineProperty,S=(e,d)=>w(L(e,"raw",{value:w(e.slice())})),v,g;const $={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[M],parameters:{layout:"padded",actions:{handles:["expandedChange"]}}},r={render:e=>{const d=l=>{const i=l.target,t=i==null?void 0:i.closest(".layout-with-navbar");let n;t?n=t.querySelector("modus-wc-side-navigation"):n=document.querySelector("modus-wc-side-navigation"),n&&(n.expanded=l.detail)};return E(v||(v=S([`
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
    `])),d,{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},{ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],c(e["custom-class"]),e.expanded,e["max-width"],c(e.mode),c(e["target-content"]))}},u={render:e=>{const d=t=>{const n=t.target,o=n==null?void 0:n.closest(".layout-with-navbar");let a;o?a=o.querySelector("modus-wc-side-navigation"):a=document.querySelector("modus-wc-side-navigation"),a&&(a.expanded=t.detail)},l=t=>{if(!t.detail){const n=t.target,o=n==null?void 0:n.closest(".layout-with-navbar");o&&o.querySelectorAll(".modus-wc-menu-dropdown-show").forEach(s=>{s.classList.remove("modus-wc-menu-dropdown-show")})}},i=t=>{const n=t.currentTarget,o=n.closest(".layout-with-navbar"),a=o==null?void 0:o.querySelector("modus-wc-side-navigation");if(a!=null&&a.expanded){const s=n.closest("li"),m=s==null?void 0:s.querySelector(".modus-wc-menu-dropdown-toggle"),p=s==null?void 0:s.querySelector(".modus-wc-menu-dropdown");p&&m&&(p.classList.toggle("modus-wc-menu-dropdown-show"),m.classList.toggle("modus-wc-menu-dropdown-show"))}};return E(g||(g=S([`
      <style>
        .layout-with-navbar {
          box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
        }
        .side-navigation {
          height: 500px;
        }
        .main-content-row {
          display: flex;
          overflow: hidden;
        }
        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }
        .label {
          margin-left: 15px;
        }
        .modus-wc-menu-dropdown {
          list-style: none;
          margin-inline-start: 1.8rem;
        }
        .menu-container {
          padding: 15px;
          padding-left: 20px;
        }
        .flex-right {
          float: right;
          display: flex;
          margin-left: 50px;
        }
        .flex-right:hover {
          background-color: unset !important;
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

        const handleExpandChange = (e: CustomEvent) => {
          if (!e.detail) {
            const eventSource = e.target as HTMLElement;
            const container = eventSource?.closest('.layout-with-navbar');

            if (container) {
              // Collapse all open dropdown menus when side navigation is collapsed
              const openMenus = container.querySelectorAll(
                '.modus-wc-menu-dropdown-show'
              );
              openMenus.forEach((menu) => {
                menu.classList.remove('modus-wc-menu-dropdown-show');
              });
            }
          }
        };

        const handleCollapseToggle = (e: Event) => {
          const clickedEl = e.currentTarget as HTMLElement;
          const parentContainer = clickedEl.closest('.layout-with-navbar');
          const sideNav = parentContainer?.querySelector(
            'modus-wc-side-navigation'
          ) as HTMLElement & { expanded: boolean };

          // Only toggle submenu if side navigation is expanded
          if (sideNav?.expanded) {
            const parentLi = clickedEl.closest('li');
            const childrenContainer = parentLi?.querySelector(
              '.modus-wc-menu-dropdown-toggle'
            );
            const submenu = parentLi?.querySelector('.modus-wc-menu-dropdown');
            if (submenu && childrenContainer) {
              submenu.classList.toggle('modus-wc-menu-dropdown-show');
              childrenContainer.classList.toggle('modus-wc-menu-dropdown-show');
            }
          }
        };
      <\/script>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          class="navbar"
          @mainMenuOpenChange=`,`
          .visibility=`,`
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
            <modus-wc-menu custom-class="menu-width">
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
              <li>
                <div
                  class="menu-container modus-wc-menu-dropdown-toggle"
                  @click=`,`
                >
                  <modus-wc-icon name="bar_graph"></modus-wc-icon>
                  <span class="label">Charts</span>
                </div>
                <ul class="modus-wc-menu-dropdown">
                  <modus-wc-menu-item label="Bar Chart"> </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart"></modus-wc-menu-item>
                </ul>
              </li>
              <modus-wc-menu-item label="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <li>
                <div
                  class="menu-container modus-wc-menu-dropdown-toggle"
                  @click=`,`
                >
                  <modus-wc-icon name="master_data"></modus-wc-icon>
                  <span class="label">Reports</span>
                </div>
                <ul class="modus-wc-menu-dropdown">
                  <modus-wc-menu-item
                    label="Monthly Report"
                  ></modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                  ></modus-wc-menu-item>
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
    `])),d,{ai:!0,apps:!0,help:!0,mainMenu:!0},e["collapse-on-click-outside"],c(e["custom-class"]),e.expanded,e["max-width"],c(e.mode),c(e["target-content"]),l,i,i)}};var h,b,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,x,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          // Collapse all open dropdown menus when side navigation is collapsed
          const openMenus = container.querySelectorAll('.modus-wc-menu-dropdown-show');
          openMenus.forEach(menu => {
            menu.classList.remove('modus-wc-menu-dropdown-show');
          });
        }
      }
    };
    const handleCollapseToggle = (e: Event) => {
      const clickedEl = e.currentTarget as HTMLElement;
      const parentContainer = clickedEl.closest('.layout-with-navbar');
      const sideNav = parentContainer?.querySelector('modus-wc-side-navigation') as HTMLElement & {
        expanded: boolean;
      };

      // Only toggle submenu if side navigation is expanded
      if (sideNav?.expanded) {
        const parentLi = clickedEl.closest('li');
        const childrenContainer = parentLi?.querySelector('.modus-wc-menu-dropdown-toggle');
        const submenu = parentLi?.querySelector('.modus-wc-menu-dropdown');
        if (submenu && childrenContainer) {
          submenu.classList.toggle('modus-wc-menu-dropdown-show');
          childrenContainer.classList.toggle('modus-wc-menu-dropdown-show');
        }
      }
    };
    return html\`
      <style>
        .layout-with-navbar {
          box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
        }
        .side-navigation {
          height: 500px;
        }
        .main-content-row {
          display: flex;
          overflow: hidden;
        }
        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }
        .label {
          margin-left: 15px;
        }
        .modus-wc-menu-dropdown {
          list-style: none;
          margin-inline-start: 1.8rem;
        }
        .menu-container {
          padding: 15px;
          padding-left: 20px;
        }
        .flex-right {
          float: right;
          display: flex;
          margin-left: 50px;
        }
        .flex-right:hover {
          background-color: unset !important;
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

        const handleExpandChange = (e: CustomEvent) => {
          if (!e.detail) {
            const eventSource = e.target as HTMLElement;
            const container = eventSource?.closest('.layout-with-navbar');

            if (container) {
              // Collapse all open dropdown menus when side navigation is collapsed
              const openMenus = container.querySelectorAll(
                '.modus-wc-menu-dropdown-show'
              );
              openMenus.forEach((menu) => {
                menu.classList.remove('modus-wc-menu-dropdown-show');
              });
            }
          }
        };

        const handleCollapseToggle = (e: Event) => {
          const clickedEl = e.currentTarget as HTMLElement;
          const parentContainer = clickedEl.closest('.layout-with-navbar');
          const sideNav = parentContainer?.querySelector(
            'modus-wc-side-navigation'
          ) as HTMLElement & { expanded: boolean };

          // Only toggle submenu if side navigation is expanded
          if (sideNav?.expanded) {
            const parentLi = clickedEl.closest('li');
            const childrenContainer = parentLi?.querySelector(
              '.modus-wc-menu-dropdown-toggle'
            );
            const submenu = parentLi?.querySelector('.modus-wc-menu-dropdown');
            if (submenu && childrenContainer) {
              submenu.classList.toggle('modus-wc-menu-dropdown-show');
              childrenContainer.classList.toggle('modus-wc-menu-dropdown-show');
            }
          }
        };
      <\/script>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          class="navbar"
          @mainMenuOpenChange=\${handleMenuOpenChange}
          .visibility=\${{
      ai: true,
      apps: true,
      help: true,
      mainMenu: true
    }}
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
            <modus-wc-menu custom-class="menu-width">
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
              <li>
                <div
                  class="menu-container modus-wc-menu-dropdown-toggle"
                  @click=\${handleCollapseToggle}
                >
                  <modus-wc-icon name="bar_graph"></modus-wc-icon>
                  <span class="label">Charts</span>
                </div>
                <ul class="modus-wc-menu-dropdown">
                  <modus-wc-menu-item label="Bar Chart"> </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart"></modus-wc-menu-item>
                </ul>
              </li>
              <modus-wc-menu-item label="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <li>
                <div
                  class="menu-container modus-wc-menu-dropdown-toggle"
                  @click=\${handleCollapseToggle}
                >
                  <modus-wc-icon name="master_data"></modus-wc-icon>
                  <span class="label">Reports</span>
                </div>
                <ul class="modus-wc-menu-dropdown">
                  <modus-wc-menu-item
                    label="Monthly Report"
                  ></modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                  ></modus-wc-menu-item>
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
}`,...(C=(x=u.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const A=["Default","collapsibleMenu"];export{r as Default,A as __namedExportsOrder,u as collapsibleMenu,$ as default};
