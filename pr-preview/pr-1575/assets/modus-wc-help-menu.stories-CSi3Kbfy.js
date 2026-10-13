import{w as z}from"./decorator-Cv9na35H.js";import{b as u,D as M}from"./lit-element-DgBvYnzn.js";import{o as i}from"./if-defined-BnVFTJ4o.js";import{c as A}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const P={title:"Components/Help Menu",component:"modus-wc-help-menu",args:{"menu-bordered":!0,"menu-offset":14,"menu-placement":"bottom-start","menu-size":"md"},argTypes:{"menu-bordered":{control:"boolean"},"menu-offset":{control:{type:"number",min:0,max:48,step:1}},"menu-placement":{control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},"menu-size":{control:{type:"select"},options:["sm","md","lg"]},"menu-visible":{control:"boolean"}},decorators:[z],parameters:{actions:{handles:["panelChange","itemSelect","menuVisibilityChange"]},docs:{description:{component:'Drill-down menu for a dropdown. A menu item with a nested `slot="panel"` shows a right chevron and slides to that panel. The panel title is the parent label without its icon. In apps, compose `modus-wc-help-menu` inside `modus-wc-dropdown-menu` (`slot="menu"`). Story controls adjust the **dropdown** (`menu-bordered`, `menu-offset`, `menu-placement`, `menu-size`, `menu-visible`), not props on `modus-wc-help-menu` itself.\n\n**Keyboard:** ArrowUp/ArrowDown move between rows, Home/End jump to the first/last row, Enter/Space/ArrowRight open a panel (focus moves to Back), Escape/ArrowLeft/Back return to the parent (focus returns to the opened item). Tab/Shift+Tab move between rows and wrap at either end. At the root level, Escape closes the dropdown and focuses its trigger.'}},layout:"padded"}},l=()=>u`
  <modus-wc-menu-item label="Getting Started" value="getting-started">
    <modus-wc-icon decorative name="apps" slot="start-icon"></modus-wc-icon>
    <modus-wc-menu slot="panel">
      <modus-wc-menu-item label="Overview" value="overview">
        <modus-wc-icon
          decorative
          name="bar_graph"
          slot="start-icon"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
  <modus-wc-menu-item label="Help" value="help">
    <modus-wc-icon decorative name="help" slot="start-icon"></modus-wc-icon>
    <modus-wc-menu slot="panel">
      <modus-wc-menu-item label="Trimble Help" value="trimble-help">
        <modus-wc-icon decorative name="help" slot="start-icon"></modus-wc-icon>
      </modus-wc-menu-item>
      <modus-wc-menu-item label="Product Guides" value="product-guides">
        <modus-wc-icon
          decorative
          name="user_guide"
          slot="start-icon"
        ></modus-wc-icon>
        <modus-wc-menu slot="panel">
          <modus-wc-menu-item label="Installation" value="installation">
            <modus-wc-icon
              decorative
              name="download"
              slot="start-icon"
            ></modus-wc-icon>
          </modus-wc-menu-item>
        </modus-wc-menu>
      </modus-wc-menu-item>
      <modus-wc-menu-item label="Support Articles" value="support-articles">
        <modus-wc-icon
          decorative
          name="document"
          slot="start-icon"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
  <modus-wc-menu-item label="Community" value="community">
    <modus-wc-icon
      decorative
      name="people_group"
      slot="start-icon"
    ></modus-wc-icon>
    <modus-wc-menu slot="panel">
      <modus-wc-menu-item label="Forums" value="forums">
        <modus-wc-icon decorative name="chat" slot="start-icon"></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
  <modus-wc-menu-item label="Learning" value="learning">
    <modus-wc-icon decorative name="learn" slot="start-icon"></modus-wc-icon>
    <modus-wc-menu slot="panel">
      <modus-wc-menu-item label="Courses" value="courses">
        <modus-wc-icon
          decorative
          name="learn"
          slot="start-icon"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
  <modus-wc-menu-item label="Support" value="support">
    <modus-wc-icon decorative name="headset" slot="start-icon"></modus-wc-icon>
    <modus-wc-menu slot="panel">
      <modus-wc-menu-item label="Contact" value="contact">
        <modus-wc-icon
          decorative
          name="person"
          slot="start-icon"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
  <modus-wc-menu-item label="About" value="about">
    <modus-wc-icon decorative name="info" slot="start-icon"></modus-wc-icon>
  </modus-wc-menu-item>
`,a=e=>({bordered:e["menu-bordered"],offset:e["menu-offset"],placement:e["menu-placement"],size:e["menu-size"],visible:e["menu-visible"]}),H={render:e=>u`
    <div
      style="align-items: center; box-sizing: border-box; display: flex; justify-content: center; min-height: 28rem; padding: 1.5rem; width: 100%;"
    >
      <modus-wc-dropdown-menu
        button-aria-label="Help menu"
        ?menu-bordered=${a(e).bordered}
        menu-offset=${i(a(e).offset)}
        menu-placement=${i(a(e).placement)}
        menu-size=${i(a(e).size)}
        ?menu-visible=${a(e).visible}
      >
        <span slot="button">Help menu</span>
        <modus-wc-help-menu slot="menu">${l()}</modus-wc-help-menu>
      </modus-wc-dropdown-menu>
    </div>
  `},d={...H,parameters:{layout:"centered"}},$=(e,m)=>e.trim().split(`
`).map(n=>n.trim()?" ".repeat(m)+n.trim():n).join(`
`),E=`
<div class="layout-with-navbar">
  <modus-wc-navbar app-title="Modus App" class="navbar" style="z-index: 2;">
    <modus-wc-dropdown-menu
      slot="end"
      button-aria-label="Help"
      button-color="tertiary"
      button-shape="square"
      button-size="sm"
      button-variant="borderless"
      menu-offset="4"
      menu-placement="bottom-end"
      menu-strategy="fixed"
    >
      <modus-wc-icon slot="button" name="help" decorative size="sm"></modus-wc-icon>
      <modus-wc-help-menu slot="menu">
${$(l().strings.join(""),8)}
      </modus-wc-help-menu>
    </modus-wc-dropdown-menu>
  </modus-wc-navbar>

  <div class="main-content-row">
    <modus-wc-side-navigation
      class="side-navigation"
      collapse-on-click-outside="true"
      expanded="false"
      max-width="256px"
      mode="push"
      target-content=".panel-content"
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
    <div class="panel-content">...</div>
  </div>
</div>

<script>
  const navbar = document.querySelector('modus-wc-navbar');
  const sideNav = document.querySelector('modus-wc-side-navigation');

  navbar.visibility = {
    ai: true,
    apps: true,
    help: false,
    logo: true,
    mainMenu: true,
    notifications: true,
    search: true,
    searchInput: false,
    user: true,
  };
  navbar.userCard = {
    avatarAlt: 'User Avatar',
    avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
    email: 'user@trimble.com',
    name: 'Sonic the Hedgehog',
  };

  // The navbar hamburger drives the side navigation rail.
  navbar.addEventListener('mainMenuOpenChange', (e) => {
    sideNav.expanded = e.detail;
  });
<\/script>
`,r={args:{"menu-offset":4,"menu-placement":"bottom-end","menu-visible":!1},parameters:{docs:{source:{code:E},description:{story:'Same shell as **Side Navigation → Default**: navbar hamburger drives the rail; set `visibility.help` to `false` and place `modus-wc-dropdown-menu` + `modus-wc-help-menu` in `slot="end"`.'}}},render:e=>{const m=s=>{const t=s.target,o=t==null?void 0:t.closest(".layout-with-navbar"),p=o==null?void 0:o.querySelector("modus-wc-side-navigation");p&&(p.expanded=s.detail)},n=a(e);return u`
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
        .side-navigation .modus-wc-menu-item-labels {
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
        .navbar-help-dropdown {
          display: inline-flex;
        }
      </style>
      <div class="layout-with-navbar" style="height: 36rem; max-width: 64rem;">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          @mainMenuOpenChange=${m}
          .userCard=${{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"}}
          .visibility=${{ai:!0,apps:!0,help:!1,logo:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0}}
          style="z-index: 2;"
        >
          <modus-wc-dropdown-menu
            slot="end"
            class="navbar-help-dropdown"
            button-aria-label="Help"
            button-color="tertiary"
            button-shape="square"
            button-size="sm"
            button-variant="borderless"
            menu-strategy="fixed"
            ?menu-bordered=${n.bordered}
            menu-offset=${i(n.offset)}
            menu-placement=${i(n.placement)}
            menu-size=${i(n.size)}
            ?menu-visible=${n.visible}
          >
            <modus-wc-icon
              slot="button"
              name="help"
              decorative
              size="sm"
            ></modus-wc-icon>
            <modus-wc-help-menu slot="menu"
              >${l()}</modus-wc-help-menu
            >
          </modus-wc-dropdown-menu>
        </modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside="true"
            expanded="false"
            max-width="256px"
            mode="push"
            target-content=".panel-content"
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
    `}},c={parameters:{layout:"centered"},render:e=>{if(!customElements.get("help-menu-shadow-host")){const m=A({componentTag:"modus-wc-dropdown-menu",propsMapper:(n,s)=>{const t=a(n),o=s;o.buttonAriaLabel="Help menu",o.menuBordered=!!t.bordered,o.menuOffset=t.offset??10,o.menuPlacement=t.placement??"bottom-start",o.menuSize=t.size??"md",o.menuVisible=!!t.visible,s.hasAttribute("data-layout-built")||(s.setAttribute("data-layout-built",""),M(u`<span slot="button">Help menu</span>
                <modus-wc-help-menu slot="menu"
                  >${l()}</modus-wc-help-menu
                >`,s))}});customElements.define("help-menu-shadow-host",m)}return u`<div style="min-height: 28rem; padding: 1.5rem;">
      <help-menu-shadow-host .props=${{...e}}></help-menu-shadow-host>
    </div>`}};var w,h,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    layout: 'centered'
  }
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,g,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    'menu-offset': 4,
    'menu-placement': 'bottom-end',
    'menu-visible': false
  },
  parameters: {
    docs: {
      source: {
        code: withSideNavigationSourceCode
      },
      description: {
        story: 'Same shell as **Side Navigation → Default**: navbar hamburger drives the rail; set \`visibility.help\` to \`false\` and place \`modus-wc-dropdown-menu\` + \`modus-wc-help-menu\` in \`slot="end"\`.'
      }
    }
  },
  render: args => {
    const handleMenuOpenChange = (e: CustomEvent<boolean>) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      const sideNav = storyContainer?.querySelector('modus-wc-side-navigation') as (HTMLElement & {
        expanded: boolean;
      }) | null;
      if (sideNav) {
        sideNav.expanded = e.detail;
      }
    };
    const menu = dropdownMenuProps(args);
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
        .side-navigation .modus-wc-menu-item-labels {
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
        .navbar-help-dropdown {
          display: inline-flex;
        }
      </style>
      <div class="layout-with-navbar" style="height: 36rem; max-width: 64rem;">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
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
      help: false,
      logo: true,
      mainMenu: true,
      notifications: true,
      search: true,
      searchInput: false,
      user: true
    }}
          style="z-index: 2;"
        >
          <modus-wc-dropdown-menu
            slot="end"
            class="navbar-help-dropdown"
            button-aria-label="Help"
            button-color="tertiary"
            button-shape="square"
            button-size="sm"
            button-variant="borderless"
            menu-strategy="fixed"
            ?menu-bordered=\${menu.bordered}
            menu-offset=\${ifDefined(menu.offset)}
            menu-placement=\${ifDefined(menu.placement)}
            menu-size=\${ifDefined(menu.size)}
            ?menu-visible=\${menu.visible}
          >
            <modus-wc-icon
              slot="button"
              name="help"
              decorative
              size="sm"
            ></modus-wc-icon>
            <modus-wc-help-menu slot="menu"
              >\${helpMenuItems()}</modus-wc-help-menu
            >
          </modus-wc-dropdown-menu>
        </modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside="true"
            expanded="false"
            max-width="256px"
            mode="push"
            target-content=".panel-content"
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
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,x,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => {
    if (!customElements.get('help-menu-shadow-host')) {
      const HelpMenuShadowHost = createShadowHostClass<HelpMenuArgs>({
        componentTag: 'modus-wc-dropdown-menu',
        propsMapper: (v: HelpMenuArgs, el: HTMLElement) => {
          const menu = dropdownMenuProps(v);
          const dropdownEl = el as unknown as {
            buttonAriaLabel: string;
            menuBordered: boolean;
            menuOffset: number;
            menuPlacement: PopoverPlacement;
            menuSize: ModusSize;
            menuVisible: boolean;
          };
          dropdownEl.buttonAriaLabel = 'Help menu';
          dropdownEl.menuBordered = Boolean(menu.bordered);
          dropdownEl.menuOffset = menu.offset ?? 10;
          dropdownEl.menuPlacement = menu.placement ?? 'bottom-start';
          dropdownEl.menuSize = menu.size ?? 'md';
          dropdownEl.menuVisible = Boolean(menu.visible);
          if (!el.hasAttribute('data-layout-built')) {
            el.setAttribute('data-layout-built', '');
            render(html\`<span slot="button">Help menu</span>
                <modus-wc-help-menu slot="menu"
                  >\${helpMenuItems()}</modus-wc-help-menu
                >\`, el);
          }
        }
      });
      customElements.define('help-menu-shadow-host', HelpMenuShadowHost);
    }
    return html\`<div style="min-height: 28rem; padding: 1.5rem;">
      <help-menu-shadow-host .props=\${{
      ...args
    }}></help-menu-shadow-host>
    </div>\`;
  }
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const k=["Default","WithSideNavigationAndNavbar","ShadowDomParent"];export{d as Default,c as ShadowDomParent,r as WithSideNavigationAndNavbar,k as __namedExportsOrder,P as default};
