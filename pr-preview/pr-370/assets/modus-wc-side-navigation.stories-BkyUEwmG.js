import{w as C}from"./decorator-D4YmxizW.js";import{x as y}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var u=Object.freeze,S=Object.defineProperty,b=(e,d)=>u(S(e,"raw",{value:u(e.slice())})),m,p;const q={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[C],parameters:{layout:"padded",actions:{handles:["expandedChange"]}}},r={render:e=>{const d=l=>{const t=l.target,i=t==null?void 0:t.closest(".layout-with-navbar");let n;i?n=i.querySelector("modus-wc-side-navigation"):n=document.querySelector("modus-wc-side-navigation"),n&&(n.expanded=l.detail)};return y(m||(m=b([`
      <style>
        .layout-with-navbar {
          box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
          display: flex;
          flex-direction: column;
          height: 600px;
          overflow: hidden;
        }
        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
          position: relative;
        }
        .modus-wc-menu-item-labels {
          padding: 0 16px;
        }
        .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        .panel-content {
          margin-left: 4rem;
          padding: 10px;
          overflow-y: auto;
          flex: 1;
        }
        .side-navigation {
          height: 100%;
          align-self: stretch;
          position: relative;
        }
        /* Override the component's 100vh height */
        modus-wc-side-navigation {
          height: 100% !important;
        }
        modus-wc-side-navigation .modus-wc-side-navigation {
          height: 100% !important;
          max-height: 100% !important;
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
    `])),d,{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},{ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],a(e["custom-class"]),e.expanded,e["max-width"],a(e.mode),a(e["target-content"]))}},c={render:e=>{const d=t=>{const i=t.target,n=i==null?void 0:i.closest(".layout-with-navbar");let o;n?o=n.querySelector("modus-wc-side-navigation"):o=document.querySelector("modus-wc-side-navigation"),o&&(o.expanded=t.detail)},l=t=>{if(!t.detail){const i=t.target,n=i==null?void 0:i.closest(".layout-with-navbar");n&&(n.querySelectorAll(".children-container").forEach(s=>{s.classList.add("hidden"),s.setAttribute("aria-hidden","true")}),n.querySelectorAll(".dropdown-toggle").forEach(s=>{s.getAttribute("name")==="expand_less"&&s.setAttribute("name","expand_more")}))}};return y(p||(p=b([`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

        .collapse-icon {
          min-width: 24px;
          padding-inline-start: 0.2rem;
        }

        .dropdown-menu {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .flex-row {
          align-items: center;
          display: flex;
          gap: 1.3rem;
          padding: 0.8rem 0.25rem;
          padding-inline-start: 1rem;
        }

        .hidden {
          display: none;
        }

        .justify-end {
          margin-left: auto;
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

        .menu-icon {
          margin-right: 1rem;
        }

        .menu-item {
          color: var(--modus-wc-color-gray-9);
          display: block;
          font-size: 16px;
          line-height: 1.5;
          padding: 0.5rem 1rem;
          text-decoration: none;
        }

        .menu-width {
          width: 100%;
        }

        .modus-wc-menu li ul {
          margin-inline-start: 1.8rem;
        }

        .modus-wc-menu-dropdown {
          padding-left: 1rem;
        }

        .modus-wc-menu-dropdown-toggle {
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          line-height: 1.5;
          padding: 0.7rem 1.25rem;
        }

        .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nested-row {
          padding-inline-start: 2.5rem;
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

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      </style>
      <script>
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

        function handleCollapseToggle(e) {
          const clickedEl = e.currentTarget;
          const parentLi = clickedEl.closest('li');
          if (!parentLi) return;

          // Find the icon element that needs to be toggled using the dropdown-toggle class
          const iconEl = clickedEl.querySelector('.dropdown-toggle');
          if (!iconEl) return;

          // Find the parent side nav element
          const parentContainer = clickedEl.closest('.layout-with-navbar');
          const sideNav = parentContainer?.querySelector(
            'modus-wc-side-navigation'
          );

          // Toggle between expand_more and expand_less icons only if side nav is expanded
          const isExpanded = iconEl.getAttribute('name') === 'expand_more';
          if (sideNav?.expanded) {
            iconEl.setAttribute(
              'name',
              isExpanded ? 'expand_less' : 'expand_more'
            );
          }

          // Find and toggle children visibility
          const childContainer =
            parentLi.nextElementSibling?.classList.contains(
              'children-container'
            )
              ? parentLi.nextElementSibling
              : null;

          if (childContainer && sideNav?.expanded) {
            childContainer.classList.toggle('hidden');
            childContainer.setAttribute(
              'aria-hidden',
              !isExpanded ? 'true' : 'false'
            );
          }
        }

        function handleExpandChange(e) {
          if (!e.detail) {
            const eventSource = e.target;
            const container = eventSource?.closest('.layout-with-navbar');

            if (container) {
              // Collapse all child containers if the side navigation is collapsed
              const childrenContainers = container.querySelectorAll(
                '.children-container'
              );
              childrenContainers.forEach((container) => {
                container.classList.add('hidden');
                container.setAttribute('aria-hidden', 'true');
              });

              // Reset all collapse icons to expand_more
              const collapseIcons =
                container.querySelectorAll('.dropdown-toggle');
              collapseIcons.forEach((icon) => {
                if (icon.getAttribute('name') === 'expand_less') {
                  icon.setAttribute('name', 'expand_more');
                }
              });
            }
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
            @expandedChange=`,`
          >
            <modus-wc-menu aria-label="Custom menu" custom-class="menu-width">
              <li>
                <div class="flex-row" onClick="handleCollapseToggle(event)">
                  <modus-wc-icon
                    decorative="true"
                    name="bar_graph"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Charts</div>
                  <div class="justify-end">
                    <modus-wc-icon
                      decorative="true"
                      name="expand_more"
                      class="collapse-icon dropdown-toggle"
                    ></modus-wc-icon>
                  </div>
                </div>
              </li>
              <li class="children-container hidden" aria-hidden="true">
                <ul>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Bar Chart</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Line Chart</div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- Item without children -->
              <li>
                <div class="flex-row">
                  <modus-wc-icon
                    decorative="true"
                    name="calendar"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Calendar</div>
                </div>
              </li>
              <!-- Second parent group (collapsed) -->
              <li>
                <div class="flex-row" onClick="handleCollapseToggle(event)">
                  <modus-wc-icon
                    decorative="true"
                    name="compass"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Maps</div>
                  <div class="justify-end">
                    <modus-wc-icon
                      decorative="true"
                      name="expand_more"
                      class="collapse-icon dropdown-toggle"
                    ></modus-wc-icon>
                  </div>
                </div>
              </li>
              <li class="children-container hidden" aria-hidden="true">
                <ul>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Map 1</div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex-row nested-row"
                      onClick="handleCollapseToggle(event)"
                    >
                      <div>Map 2</div>
                      <div class="justify-end">
                        <modus-wc-icon
                          decorative="true"
                          name="expand_more"
                          class="collapse-icon dropdown-toggle"
                        ></modus-wc-icon>
                      </div>
                    </div>
                  </li>
                  <li class="children-container hidden" aria-hidden="true">
                    <ul>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 2rem;"
                        >
                          <div>Map 1</div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 2rem;"
                        >
                          <div>Map 2</div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Map 3</div>
                    </div>
                  </li>
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
    `])),d,{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},{ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],a(e["custom-class"]),e.expanded,e["max-width"],a(e.mode),a(e["target-content"]),l)}};var v,h,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
          height: 600px;
          overflow: hidden;
        }
        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
          position: relative;
        }
        .modus-wc-menu-item-labels {
          padding: 0 16px;
        }
        .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        .panel-content {
          margin-left: 4rem;
          padding: 10px;
          overflow-y: auto;
          flex: 1;
        }
        .side-navigation {
          height: 100%;
          align-self: stretch;
          position: relative;
        }
        /* Override the component's 100vh height */
        modus-wc-side-navigation {
          height: 100% !important;
        }
        modus-wc-side-navigation .modus-wc-side-navigation {
          height: 100% !important;
          max-height: 100% !important;
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
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,f,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
          const childrenContainers = container.querySelectorAll('.children-container');
          childrenContainers.forEach(container => {
            container.classList.add('hidden');
            container.setAttribute('aria-hidden', 'true');
          });
          const collapseIcons = container.querySelectorAll('.dropdown-toggle');
          collapseIcons.forEach(icon => {
            if (icon.getAttribute('name') === 'expand_less') {
              icon.setAttribute('name', 'expand_more');
            }
          });
        }
      }
    };
    return html\`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

        .collapse-icon {
          min-width: 24px;
          padding-inline-start: 0.2rem;
        }

        .dropdown-menu {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .flex-row {
          align-items: center;
          display: flex;
          gap: 1.3rem;
          padding: 0.8rem 0.25rem;
          padding-inline-start: 1rem;
        }

        .hidden {
          display: none;
        }

        .justify-end {
          margin-left: auto;
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

        .menu-icon {
          margin-right: 1rem;
        }

        .menu-item {
          color: var(--modus-wc-color-gray-9);
          display: block;
          font-size: 16px;
          line-height: 1.5;
          padding: 0.5rem 1rem;
          text-decoration: none;
        }

        .menu-width {
          width: 100%;
        }

        .modus-wc-menu li ul {
          margin-inline-start: 1.8rem;
        }

        .modus-wc-menu-dropdown {
          padding-left: 1rem;
        }

        .modus-wc-menu-dropdown-toggle {
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          line-height: 1.5;
          padding: 0.7rem 1.25rem;
        }

        .navbar {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nested-row {
          padding-inline-start: 2.5rem;
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

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      </style>
      <script>
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

        function handleCollapseToggle(e) {
          const clickedEl = e.currentTarget;
          const parentLi = clickedEl.closest('li');
          if (!parentLi) return;

          // Find the icon element that needs to be toggled using the dropdown-toggle class
          const iconEl = clickedEl.querySelector('.dropdown-toggle');
          if (!iconEl) return;

          // Find the parent side nav element
          const parentContainer = clickedEl.closest('.layout-with-navbar');
          const sideNav = parentContainer?.querySelector(
            'modus-wc-side-navigation'
          );

          // Toggle between expand_more and expand_less icons only if side nav is expanded
          const isExpanded = iconEl.getAttribute('name') === 'expand_more';
          if (sideNav?.expanded) {
            iconEl.setAttribute(
              'name',
              isExpanded ? 'expand_less' : 'expand_more'
            );
          }

          // Find and toggle children visibility
          const childContainer =
            parentLi.nextElementSibling?.classList.contains(
              'children-container'
            )
              ? parentLi.nextElementSibling
              : null;

          if (childContainer && sideNav?.expanded) {
            childContainer.classList.toggle('hidden');
            childContainer.setAttribute(
              'aria-hidden',
              !isExpanded ? 'true' : 'false'
            );
          }
        }

        function handleExpandChange(e) {
          if (!e.detail) {
            const eventSource = e.target;
            const container = eventSource?.closest('.layout-with-navbar');

            if (container) {
              // Collapse all child containers if the side navigation is collapsed
              const childrenContainers = container.querySelectorAll(
                '.children-container'
              );
              childrenContainers.forEach((container) => {
                container.classList.add('hidden');
                container.setAttribute('aria-hidden', 'true');
              });

              // Reset all collapse icons to expand_more
              const collapseIcons =
                container.querySelectorAll('.dropdown-toggle');
              collapseIcons.forEach((icon) => {
                if (icon.getAttribute('name') === 'expand_less') {
                  icon.setAttribute('name', 'expand_more');
                }
              });
            }
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
            @expandedChange=\${handleExpandChange}
          >
            <modus-wc-menu aria-label="Custom menu" custom-class="menu-width">
              <li>
                <div class="flex-row" onClick="handleCollapseToggle(event)">
                  <modus-wc-icon
                    decorative="true"
                    name="bar_graph"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Charts</div>
                  <div class="justify-end">
                    <modus-wc-icon
                      decorative="true"
                      name="expand_more"
                      class="collapse-icon dropdown-toggle"
                    ></modus-wc-icon>
                  </div>
                </div>
              </li>
              <li class="children-container hidden" aria-hidden="true">
                <ul>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Bar Chart</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Line Chart</div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- Item without children -->
              <li>
                <div class="flex-row">
                  <modus-wc-icon
                    decorative="true"
                    name="calendar"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Calendar</div>
                </div>
              </li>
              <!-- Second parent group (collapsed) -->
              <li>
                <div class="flex-row" onClick="handleCollapseToggle(event)">
                  <modus-wc-icon
                    decorative="true"
                    name="compass"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Maps</div>
                  <div class="justify-end">
                    <modus-wc-icon
                      decorative="true"
                      name="expand_more"
                      class="collapse-icon dropdown-toggle"
                    ></modus-wc-icon>
                  </div>
                </div>
              </li>
              <li class="children-container hidden" aria-hidden="true">
                <ul>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Map 1</div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex-row nested-row"
                      onClick="handleCollapseToggle(event)"
                    >
                      <div>Map 2</div>
                      <div class="justify-end">
                        <modus-wc-icon
                          decorative="true"
                          name="expand_more"
                          class="collapse-icon dropdown-toggle"
                        ></modus-wc-icon>
                      </div>
                    </div>
                  </li>
                  <li class="children-container hidden" aria-hidden="true">
                    <ul>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 2rem;"
                        >
                          <div>Map 1</div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 2rem;"
                        >
                          <div>Map 2</div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Map 3</div>
                    </div>
                  </li>
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
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const T=["Default","collapsibleMenu"];export{r as Default,T as __namedExportsOrder,c as collapsibleMenu,q as default};
