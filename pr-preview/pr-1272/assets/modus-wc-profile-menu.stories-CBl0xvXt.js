import"./index-CK-iu89z.js";import{b as E}from"./lit-element-DgBvYnzn.js";import{o as r}from"./if-defined-BnVFTJ4o.js";import{c as A}from"./shadow-host-helper-A4Nvcs5e.js";import{b as p}from"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const V={profileImageUrl:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",headerName:"Enterprise ABC",userName:"Jane Doe",userEmail:"jane.doe@example.com",manageTrimbleId:{link:"#"}},x={title:"Components/Profile Menu",component:"modus-wc-profile-menu",args:{"profile-props":V,"show-sign-out":!0},argTypes:{"profile-props":{description:"Profile menu properties containing user information",table:{type:{detail:`
            Interface: IProfileMenuProps
            Properties:
            - profileImageUrl (string): The URL of the profile image
            - headerName (string): The header name of the profile menu
            - userName (string): The name of the user
            - userEmail (string): The email of the user
            - manageTrimbleId (IManageTrimbleId, optional): The manage Trimble ID link configuration
              - link (string): The URL for managing the user's Trimble ID
              - target ('_blank' | '_self' | '_parent' | '_top', optional): The target for the link
              - rel (string, optional): The rel attribute for the link. Defaults to 'noopener noreferrer' when target is '_blank'
          `}}},"main-menu":{description:"Configuration for the default main menu section",table:{type:{detail:`
            Interface: IMainMenu
            Properties:
            - myProfile (boolean, optional): Controls visibility of the My Profile menu item
            - myProducts (boolean, optional): Controls visibility of the My Products menu item
            - supportCenter (boolean, optional): Controls visibility of the Support center menu item
            - adminSettings (boolean, optional): Controls visibility of the Admin settings menu item
            - items (IMenuItem[], optional): Additional custom menu items appended after visible built-in items
              - label (string): The display text for the menu item
              - icon (string, optional): The name of the icon to display
              - iconSize ('xs', 'sm', 'md', 'lg', optional): The size of the icon
              - iconVariant ('solid' | 'outlined', optional): The variant of the icon
              - value (string, optional): The value associated with the menu item, used for selection
            When omitted, all built-in items render in the default order. Each boolean flag maps to its matching built-in item by key, not by array position.
          `}}},"menu-one":{description:"Configuration for the first submenu section",table:{type:{detail:`
            Interface: ISubMenu
            Properties:
            - title (string, optional): Title for the submenu section
            - items (IMenuItem[]): Array of menu items
              - label (string): The display text for the menu item
              - icon (string, optional): The name of the icon to display
              - iconSize ('xs', 'sm', 'md', 'lg', optional): The size of the icon
              - iconVariant ('solid' | 'outlined', optional): The variant of the icon
              - value (string, optional): The value associated with the menu item, used for selection
          `}}},"menu-two":{description:"Configuration for the second submenu section",table:{type:{detail:`
            Interface: ISubMenu
            Properties:
            - title (string, optional): Title for the submenu section
            - items (IMenuItem[]): Array of menu items
              - label (string): The display text for the menu item
              - icon (string, optional): The name of the icon to display
              - iconSize ('xs', 'sm', 'md', 'lg', optional): The size of the icon
              - iconVariant ('solid' | 'outlined', optional): The variant of the icon
              - value (string, optional): The value associated with the menu item, used for selection
          `}}},"show-sign-out":{description:"Controls visibility of the Sign Out menu item in the footer. Defaults to true when omitted.",control:"boolean"}},parameters:{docs:{description:{component:`
A customizable profile menu component that displays user information with optional submenus.

The component uses the \`modus-wc-panel\` component for layout and supports one or two custom submenus.

### Features
- **User Profile Display**: Shows profile image, header name, username, and email
- **Default Menu Items**: Includes pre-configured menu items (My Profile, My Products, Support center, Admin settings). Use \`mainMenu\` boolean flags to show or hide each built-in item by key, and \`items\` to append custom entries.
- **Custom Submenus**: Supports up to two additional custom submenus with titles and icons
- **Manage Trimble ID Link**: Optional link for managing user's Trimble ID
- **Sign Out**: Built-in sign out menu item in the footer. Set \`showSignOut\` to false to hide it
- **Icon Support**: Menu items can include icons with solid or outlined variants

### Events
- **menuItemClick**: Emitted when any menu item is clicked, passing back the item label/identifier
- **signOutClick**: Emitted when the Sign Out menu item is clicked

### Usage
The component requires a \`profileProps\` object with user information and optionally accepts \`mainMenu\`, \`menuOne\`, and \`menuTwo\`.
        `}}}},s=e=>{const n=`const profileProps = ${JSON.stringify(e["profile-props"],null,2)};`,t=e["main-menu"]?`
const mainMenu = ${JSON.stringify(e["main-menu"],null,2)};`:"",o=e["menu-one"]?`
const menuOne = ${JSON.stringify(e["menu-one"],null,2)};`:"",i=e["menu-two"]?`
const menuTwo = ${JSON.stringify(e["menu-two"],null,2)};`:"";return`<modus-wc-profile-menu></modus-wc-profile-menu>

<script>
  ${n}${t}${o}${i}

  const element = document.querySelector('modus-wc-profile-menu');
  element.profileProps = profileProps;${e["main-menu"]?`
  element.mainMenu = mainMenu;`:""}${e["menu-one"]?`
  element.menuOne = menuOne;`:""}${e["menu-two"]?`
  element.menuTwo = menuTwo;`:""}${e["show-sign-out"]===!1?`
  element.showSignOut = false;`:""}

  // Event listeners
  element.addEventListener('menuItemClick', (event) => {
    console.log('Menu item clicked:', event.detail);
  });
  element.addEventListener('signOutClick', () => {
    console.log('Sign Out clicked');
  });

<\/script>
`},d={parameters:{docs:{source:{transform:(e,{args:n})=>s(n)}}},render:e=>E`
<div style="min-height: 600px;">
  <modus-wc-profile-menu
    .profileProps=${e["profile-props"]}
    .mainMenu=${r(e["main-menu"])}
    .menuOne=${r(e["menu-one"])}
    .menuTwo=${r(e["menu-two"])}
    .showSignOut=${r(e["show-sign-out"])}
    @signOutClick=${p("signOutClick")}
    @menuItemClick=${p("menuItemClick")}
  ></modus-wc-profile-menu>
</div>
    `},a={...d,parameters:{docs:{description:{story:"Basic profile menu with default menu items (My Profile, My Products, Support center, Admin settings) and no custom submenus."},source:{transform:(e,{args:n})=>s(n)}}}},l={...d,parameters:{docs:{description:{story:"Hides Admin settings via adminSettings: false and appends a custom Billing item after the remaining built-in items."},source:{transform:(e,{args:n})=>s(n)}}},args:{"main-menu":{adminSettings:!1,items:[{label:"Billing",icon:"invoice",iconVariant:"solid",value:"billing"}]}}},m={...d,parameters:{docs:{description:{story:"Profile menu with one additional custom submenu section. Submenus can include a title and items with icons."},source:{transform:(e,{args:n})=>s(n)}}},args:{"menu-one":{title:"Recent Projects",items:[{label:"Project Alpha",icon:"bug",iconVariant:"solid"},{label:"Project Beta",icon:"triangle_down",iconVariant:"solid"},{label:"Project Gamma",icon:"service_rep",iconVariant:"solid"}]}}},u={...d,parameters:{docs:{description:{story:"Profile menu with two additional custom submenu sections. Each submenu can have its own title and menu items with icons."},source:{transform:(e,{args:n})=>s(n)}}},args:{"menu-one":{title:"Recent Projects",items:[{label:"Project Alpha",icon:"bug",iconVariant:"solid"},{label:"Project Beta",icon:"triangle_down",iconVariant:"solid"},{label:"Project Gamma",icon:"antenna",iconVariant:"solid"}]},"menu-two":{title:"Quick Actions",items:[{label:"Settings",icon:"settings",iconVariant:"solid"},{label:"Help Center",icon:"help",iconVariant:"solid"},{label:"Support",icon:"headset",iconVariant:"solid"}]}}},c={render:e=>{if(!customElements.get("profile-menu-shadow-host")){const n=A({componentTag:"modus-wc-profile-menu",propsMapper:(t,o)=>{const i=o;i.profileProps=t["profile-props"],i.mainMenu=t["main-menu"],i.menuOne=t["menu-one"],i.menuTwo=t["menu-two"],i.showSignOut=t["show-sign-out"],o.dataset.eventsWired||(o.addEventListener("signOutClick",p("signOutClick")),o.addEventListener("menuItemClick",p("menuItemClick")),o.dataset.eventsWired="true")}});customElements.define("profile-menu-shadow-host",n)}return E`<profile-menu-shadow-host
      .props=${{...e}}
    ></profile-menu-shadow-host>`}};var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Basic profile menu with default menu items (My Profile, My Products, Support center, Admin settings) and no custom submenus.'
      },
      source: {
        transform: (_src, {
          args
        }: {
          args: ProfileMenuArgs;
        }) => getSourceCode(args)
      }
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,w,P;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Hides Admin settings via adminSettings: false and appends a custom Billing item after the remaining built-in items.'
      },
      source: {
        transform: (_src, {
          args
        }: {
          args: ProfileMenuArgs;
        }) => getSourceCode(args)
      }
    }
  },
  args: {
    'main-menu': {
      adminSettings: false,
      items: [{
        label: 'Billing',
        icon: 'invoice',
        iconVariant: 'solid',
        value: 'billing'
      }]
    }
  }
}`,...(P=(w=l.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var S,M,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Profile menu with one additional custom submenu section. Submenus can include a title and items with icons.'
      },
      source: {
        transform: (_src, {
          args
        }: {
          args: ProfileMenuArgs;
        }) => getSourceCode(args)
      }
    }
  },
  args: {
    'menu-one': {
      title: 'Recent Projects',
      items: [{
        label: 'Project Alpha',
        icon: 'bug',
        iconVariant: 'solid'
      }, {
        label: 'Project Beta',
        icon: 'triangle_down',
        iconVariant: 'solid'
      }, {
        label: 'Project Gamma',
        icon: 'service_rep',
        iconVariant: 'solid'
      }]
    }
  }
}`,...(T=(M=m.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var y,v,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Profile menu with two additional custom submenu sections. Each submenu can have its own title and menu items with icons.'
      },
      source: {
        transform: (_src, {
          args
        }: {
          args: ProfileMenuArgs;
        }) => getSourceCode(args)
      }
    }
  },
  args: {
    'menu-one': {
      title: 'Recent Projects',
      items: [{
        label: 'Project Alpha',
        icon: 'bug',
        iconVariant: 'solid'
      }, {
        label: 'Project Beta',
        icon: 'triangle_down',
        iconVariant: 'solid'
      }, {
        label: 'Project Gamma',
        icon: 'antenna',
        iconVariant: 'solid'
      }]
    },
    'menu-two': {
      title: 'Quick Actions',
      items: [{
        label: 'Settings',
        icon: 'settings',
        iconVariant: 'solid'
      }, {
        label: 'Help Center',
        icon: 'help',
        iconVariant: 'solid'
      }, {
        label: 'Support',
        icon: 'headset',
        iconVariant: 'solid'
      }]
    }
  }
}`,...(C=(v=u.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,I,O;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('profile-menu-shadow-host')) {
      const ProfileMenuShadowHost = createShadowHostClass<ProfileMenuArgs>({
        componentTag: 'modus-wc-profile-menu',
        propsMapper: (v: ProfileMenuArgs, el: HTMLElement) => {
          const profileMenuEl = el as unknown as {
            profileProps: ProfileMenuArgs['profile-props'];
            mainMenu?: ProfileMenuArgs['main-menu'];
            menuOne?: ProfileMenuArgs['menu-one'];
            menuTwo?: ProfileMenuArgs['menu-two'];
            showSignOut?: ProfileMenuArgs['show-sign-out'];
          };
          profileMenuEl.profileProps = v['profile-props'];
          profileMenuEl.mainMenu = v['main-menu'];
          profileMenuEl.menuOne = v['menu-one'];
          profileMenuEl.menuTwo = v['menu-two'];
          profileMenuEl.showSignOut = v['show-sign-out'];
          // Wire events once after first prop assignment
          if (!el.dataset['eventsWired']) {
            el.addEventListener('signOutClick', action('signOutClick'));
            el.addEventListener('menuItemClick', action('menuItemClick'));
            el.dataset['eventsWired'] = 'true';
          }
        }
      });
      customElements.define('profile-menu-shadow-host', ProfileMenuShadowHost);
    }
    return html\`<profile-menu-shadow-host
      .props=\${{
      ...args
    }}
    ></profile-menu-shadow-host>\`;
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const H=["Default","WithCustomMainMenu","WithOneSubmenu","WithTwoSubmenus","ShadowDomParent"];export{a as Default,c as ShadowDomParent,l as WithCustomMainMenu,m as WithOneSubmenu,u as WithTwoSubmenus,H as __namedExportsOrder,x as default};
