import{w as N}from"./decorator-D4YmxizW.js";import{x as S}from"./lit-element-C8zulti1.js";import{o as d}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var g=Object.freeze,_=Object.defineProperty,A=(e,c)=>g(_(e,"raw",{value:g(e.slice())})),h,w;const k={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[N],parameters:{layout:"padded",actions:{handles:["expandedChange"]}}},r={render:e=>{const c=a=>{const l=a.target,t=l==null?void 0:l.closest(".layout-with-navbar");let i;t?i=t.querySelector("modus-wc-side-navigation"):i=document.querySelector("modus-wc-side-navigation"),i&&(i.expanded=a.detail)};return S(h||(h=A([`
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
    `])),c,{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],d(e["custom-class"]),e.expanded,e["max-width"],d(e.mode),d(e["target-content"]))}},u={render:e=>{const c=t=>{const i=t.target,o=i==null?void 0:i.closest(".layout-with-navbar");let n;o?n=o.querySelector("modus-wc-side-navigation"):n=document.querySelector("modus-wc-side-navigation"),n&&(n.expanded=t.detail)},a=t=>{var v;const i=t.currentTarget,o=i.closest("li");if(!o)return;const n=i.querySelector(".dropdown-toggle");if(!n)return;const s=document.querySelector("modus-wc-side-navigation"),p=n.getAttribute("name")==="expand_more";s!=null&&s.expanded&&n.setAttribute("name",p?"expand_less":"expand_more");const m=(v=o.nextElementSibling)!=null&&v.classList.contains("children-container")?o.nextElementSibling:null;m&&(s!=null&&s.expanded)&&(m.classList.toggle("hidden"),m.setAttribute("aria-hidden",p?"false":"true"))},l=t=>{t.detail||(document.querySelectorAll(".children-container").forEach(n=>{n.classList.add("hidden"),n.setAttribute("aria-hidden","true")}),document.querySelectorAll(".dropdown-toggle").forEach(n=>{n.getAttribute("name")==="expand_less"&&n.setAttribute("name","expand_more")}))};return S(w||(w=A([`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

        .collapse-icon {
          color: var(--modus-wc-color-gray-7);
          cursor: pointer;
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
          padding: 0.5rem 0.25rem;
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

          // Check if side nav is expanded
          const sideNav = document.querySelector('modus-wc-side-navigation');

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
            // Collapse all child containers if the side navigation is collapsed
            const childrenContainers = document.querySelectorAll(
              '.children-container'
            );
            childrenContainers.forEach((container) => {
              container.classList.add('hidden');
              container.setAttribute('aria-hidden', 'true');
            });

            // Reset all collapse icons to expand_more
            const collapseIcons = document.querySelectorAll('.dropdown-toggle');
            collapseIcons.forEach((icon) => {
              if (icon.getAttribute('name') === 'expand_less') {
                icon.setAttribute('name', 'expand_more');
              }
            });
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
            @expandedChange=`,`
          >
            <modus-wc-menu aria-label="Custom menu" custom-class="menu-width">
              <li>
                <div class="flex-row" @click=`,`>
                  <modus-wc-icon
                    decorative="true"
                    name="profile"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Parent</div>
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
                      <div>Child 1</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Child 2</div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- Item without children -->
              <li>
                <div class="flex-row">
                  <modus-wc-icon
                    decorative="true"
                    name="settings"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Single Item</div>
                </div>
              </li>
              <!-- Second parent group (collapsed) -->
              <li>
                <div class="flex-row" @click=`,`>
                  <modus-wc-icon
                    decorative="true"
                    name="chat"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Another Parent</div>
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
                      <div>Another Child 1</div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex-row nested-row"
                      @click=`,`
                    >
                      <div>Another Child 2</div>
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
                          <div>Submenu Item 1</div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 2rem;"
                        >
                          <div>Submenu Item 2</div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Another Child 3</div>
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
    `])),c,{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],d(e["custom-class"]),e.expanded,e["max-width"],d(e.mode),d(e["target-content"]),l,a,a,a)}};var x,f,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,C,E;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    const handleCollapseToggle = (e: MouseEvent) => {
      const clickedEl = e.currentTarget as HTMLElement;
      const parentLi = clickedEl.closest('li');
      if (!parentLi) return;
      const iconEl = clickedEl.querySelector('.dropdown-toggle') as HTMLElement;
      if (!iconEl) return;
      const sideNav = document.querySelector('modus-wc-side-navigation');
      const isExpanded = iconEl.getAttribute('name') === 'expand_more';

      // Only change the icon if the side nav is expanded
      if (sideNav?.expanded) {
        iconEl.setAttribute('name', isExpanded ? 'expand_less' : 'expand_more');
      }
      const childContainer = parentLi.nextElementSibling?.classList.contains('children-container') ? parentLi.nextElementSibling as HTMLElement : null;
      if (childContainer && sideNav?.expanded) {
        childContainer.classList.toggle('hidden');
        childContainer.setAttribute('aria-hidden', !isExpanded ? 'true' : 'false');
      }
    };
    const handleExpandChange = (e: CustomEvent) => {
      if (!e.detail) {
        const childrenContainers = document.querySelectorAll('.children-container');
        childrenContainers.forEach(container => {
          container.classList.add('hidden');
          container.setAttribute('aria-hidden', 'true');
        });
        const collapseIcons = document.querySelectorAll('.dropdown-toggle');
        collapseIcons.forEach(icon => {
          if (icon.getAttribute('name') === 'expand_less') {
            icon.setAttribute('name', 'expand_more');
          }
        });
      }
    };
    return html\`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

        .collapse-icon {
          color: var(--modus-wc-color-gray-7);
          cursor: pointer;
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
          padding: 0.5rem 0.25rem;
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

          // Check if side nav is expanded
          const sideNav = document.querySelector('modus-wc-side-navigation');

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
            // Collapse all child containers if the side navigation is collapsed
            const childrenContainers = document.querySelectorAll(
              '.children-container'
            );
            childrenContainers.forEach((container) => {
              container.classList.add('hidden');
              container.setAttribute('aria-hidden', 'true');
            });

            // Reset all collapse icons to expand_more
            const collapseIcons = document.querySelectorAll('.dropdown-toggle');
            collapseIcons.forEach((icon) => {
              if (icon.getAttribute('name') === 'expand_less') {
                icon.setAttribute('name', 'expand_more');
              }
            });
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
            @expandedChange=\${handleExpandChange}
          >
            <modus-wc-menu aria-label="Custom menu" custom-class="menu-width">
              <li>
                <div class="flex-row" @click=\${handleCollapseToggle}>
                  <modus-wc-icon
                    decorative="true"
                    name="profile"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Parent</div>
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
                      <div>Child 1</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Child 2</div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- Item without children -->
              <li>
                <div class="flex-row">
                  <modus-wc-icon
                    decorative="true"
                    name="settings"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Single Item</div>
                </div>
              </li>
              <!-- Second parent group (collapsed) -->
              <li>
                <div class="flex-row" @click=\${handleCollapseToggle}>
                  <modus-wc-icon
                    decorative="true"
                    name="chat"
                    class="collapse-icon icon-left"
                  ></modus-wc-icon>
                  <div class="dropdown-menu">Another Parent</div>
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
                      <div>Another Child 1</div>
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex-row nested-row"
                      @click=\${handleCollapseToggle}
                    >
                      <div>Another Child 2</div>
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
                          <div>Submenu Item 1</div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="flex-row"
                          style="padding-inline-start: 2rem;"
                        >
                          <div>Submenu Item 2</div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="flex-row nested-row">
                      <div>Another Child 3</div>
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
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const O=["Default","collapsibleMenu"];export{r as Default,O as __namedExportsOrder,u as collapsibleMenu,k as default};
