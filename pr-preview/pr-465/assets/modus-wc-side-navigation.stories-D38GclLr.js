import{w as S}from"./decorator-D4YmxizW.js";import{x as E}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var v=Object.freeze,_=Object.defineProperty,A=(e,l)=>v(_(e,"raw",{value:v(e.slice())})),h,g;const q={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[S],parameters:{layout:"padded",actions:{handles:["expandedChange"]}}},c={render:e=>{const l=a=>{const d=a.target,t=d==null?void 0:d.closest(".layout-with-navbar");let n;t?n=t.querySelector("modus-wc-side-navigation"):n=document.querySelector("modus-wc-side-navigation"),n&&(n.expanded=a.detail)};return E(h||(h=A([`
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
    `])),l,{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],s(e["custom-class"]),e.expanded,e["max-width"],s(e.mode),s(e["target-content"]))}},r={render:e=>{const l=t=>{const n=t.target,o=n==null?void 0:n.closest(".layout-with-navbar");let i;o?i=o.querySelector("modus-wc-side-navigation"):i=document.querySelector("modus-wc-side-navigation"),i&&(i.expanded=t.detail)},a=t=>{var m,p;const n=t.currentTarget,o=(m=n.closest(".flex-row"))==null?void 0:m.closest("li");if(!o)return;const i=n.getAttribute("name")==="expand_more";n.setAttribute("name",i?"expand_less":"expand_more");const u=(p=o.nextElementSibling)!=null&&p.classList.contains("children-container")?o.nextElementSibling:null;u&&(u.classList.toggle("hidden"),u.setAttribute("aria-hidden",i?"false":"true"))},d=t=>{t.detail||(document.querySelectorAll(".children-container").forEach(i=>{i.classList.add("hidden"),i.setAttribute("aria-hidden","true")}),document.querySelectorAll(".collapse-icon").forEach(i=>{i.getAttribute("name")==="expand_less"&&i.setAttribute("name","expand_more")}))};return E(g||(g=A([`
      <style>
        .children-container {
          transition: height 0.2s ease-out;
        }

        .collapse-icon {
          color: var(--modus-wc-color-gray-7);
          cursor: pointer;
          min-width: 24px;
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
          margin-inline-start: 2rem;
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
          const iconEl = e.currentTarget;
          const parentLi = iconEl.closest('.flex-row')?.closest('li');
          if (!parentLi) return;

          // Toggle between expand_more and expand_less icons
          const isExpanded = iconEl.getAttribute('name') === 'expand_more';
          iconEl.setAttribute(
            'name',
            isExpanded ? 'expand_less' : 'expand_more'
          );

          // Find and toggle children visibility
          const childContainer =
            parentLi.nextElementSibling?.classList.contains(
              'children-container'
            )
              ? parentLi.nextElementSibling
              : null;

          if (childContainer) {
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
            const collapseIcons = document.querySelectorAll('.collapse-icon');
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
                <div class="flex-row">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="profile"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <div class="dropdown-menu">Parent</div>
                  <div class="justify-end">
                    <modus-wc-button
                      aria-label="Actions button"
                      size="sm"
                      shape="circle"
                      variant="borderless"
                    >
                      <modus-wc-icon
                        decorative="true"
                        name="expand_more"
                        class="collapse-icon"
                        @click=`,`
                      ></modus-wc-icon>
                    </modus-wc-button>
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
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="settings"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>

                  <div class="dropdown-menu">Single Item</div>
                </div>
              </li>
              <!-- Second parent group (collapsed) -->
              <li>
                <div class="flex-row">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="chat"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <div class="dropdown-menu">Another Parent</div>
                  <div class="justify-end">
                    <modus-wc-button
                      aria-label="Actions button"
                      size="sm"
                      shape="circle"
                      variant="borderless"
                    >
                      <modus-wc-icon
                        decorative="true"
                        name="expand_more"
                        class="collapse-icon"
                        @click=`,`
                      ></modus-wc-icon>
                    </modus-wc-button>
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
                    <div class="flex-row nested-row">
                      <div>Another Child 2</div>
                      <div class="justify-end">
                        <modus-wc-button
                          aria-label="Actions button"
                          size="sm"
                          shape="circle"
                          variant="borderless"
                        >
                          <modus-wc-icon
                            decorative="true"
                            name="expand_more"
                            class="collapse-icon"
                            @click=`,`
                          ></modus-wc-icon>
                        </modus-wc-button>
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
    `])),l,{apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],s(e["custom-class"]),e.expanded,e["max-width"],s(e.mode),s(e["target-content"]),d,a,a,a)}};var w,b,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,y,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      const iconEl = e.currentTarget as HTMLElement;
      // Find the closest li parent
      const parentLi = iconEl.closest('.flex-row')?.closest('li');
      if (!parentLi) return;

      // Toggle between expand_more and expand_less icons
      const isExpanded = iconEl.getAttribute('name') === 'expand_more';
      iconEl.setAttribute('name', isExpanded ? 'expand_less' : 'expand_more');

      // Find and toggle children visibility
      const childContainer = parentLi.nextElementSibling?.classList.contains('children-container') ? parentLi.nextElementSibling as HTMLElement : null;
      if (childContainer) {
        childContainer.classList.toggle('hidden');
        childContainer.setAttribute('aria-hidden', !isExpanded ? 'true' : 'false');
      }
    };
    const handleExpandChange = (e: CustomEvent) => {
      if (!e.detail) {
        // Collapse all child containers if the side navigation is collapsed
        const childrenContainers = document.querySelectorAll('.children-container');
        childrenContainers.forEach(container => {
          container.classList.add('hidden');
          container.setAttribute('aria-hidden', 'true');
        });

        // Reset all collapse icons to expand_more
        const collapseIcons = document.querySelectorAll('.collapse-icon');
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
          margin-inline-start: 2rem;
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
          const iconEl = e.currentTarget;
          const parentLi = iconEl.closest('.flex-row')?.closest('li');
          if (!parentLi) return;

          // Toggle between expand_more and expand_less icons
          const isExpanded = iconEl.getAttribute('name') === 'expand_more';
          iconEl.setAttribute(
            'name',
            isExpanded ? 'expand_less' : 'expand_more'
          );

          // Find and toggle children visibility
          const childContainer =
            parentLi.nextElementSibling?.classList.contains(
              'children-container'
            )
              ? parentLi.nextElementSibling
              : null;

          if (childContainer) {
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
            const collapseIcons = document.querySelectorAll('.collapse-icon');
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
                <div class="flex-row">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="profile"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <div class="dropdown-menu">Parent</div>
                  <div class="justify-end">
                    <modus-wc-button
                      aria-label="Actions button"
                      size="sm"
                      shape="circle"
                      variant="borderless"
                    >
                      <modus-wc-icon
                        decorative="true"
                        name="expand_more"
                        class="collapse-icon"
                        @click=\${handleCollapseToggle}
                      ></modus-wc-icon>
                    </modus-wc-button>
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
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="settings"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>

                  <div class="dropdown-menu">Single Item</div>
                </div>
              </li>
              <!-- Second parent group (collapsed) -->
              <li>
                <div class="flex-row">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="sm"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      decorative="true"
                      name="chat"
                      class="collapse-icon icon-left"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <div class="dropdown-menu">Another Parent</div>
                  <div class="justify-end">
                    <modus-wc-button
                      aria-label="Actions button"
                      size="sm"
                      shape="circle"
                      variant="borderless"
                    >
                      <modus-wc-icon
                        decorative="true"
                        name="expand_more"
                        class="collapse-icon"
                        @click=\${handleCollapseToggle}
                      ></modus-wc-icon>
                    </modus-wc-button>
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
                    <div class="flex-row nested-row">
                      <div>Another Child 2</div>
                      <div class="justify-end">
                        <modus-wc-button
                          aria-label="Actions button"
                          size="sm"
                          shape="circle"
                          variant="borderless"
                        >
                          <modus-wc-icon
                            decorative="true"
                            name="expand_more"
                            class="collapse-icon"
                            @click=\${handleCollapseToggle}
                          ></modus-wc-icon>
                        </modus-wc-button>
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
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const z=["Default","collapsibleMenu"];export{c as Default,z as __namedExportsOrder,r as collapsibleMenu,q as default};
