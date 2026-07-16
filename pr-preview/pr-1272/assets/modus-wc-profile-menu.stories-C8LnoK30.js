import"./index-CK-iu89z.js";import{b as A}from"./lit-element-DgBvYnzn.js";import{o as d}from"./if-defined-BnVFTJ4o.js";import{c as E}from"./shadow-host-helper-A4Nvcs5e.js";import{b as c}from"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const V={profileImageUrl:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",headerName:"Enterprise ABC",userName:"Jane Doe",userEmail:"jane.doe@example.com",manageTrimbleId:{link:"#"}},W={title:"Components/Profile Menu",component:"modus-wc-profile-menu",args:{"profile-props":V},argTypes:{"profile-props":{description:"Profile menu properties containing user information",table:{type:{detail:`
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
            When omitted, all built-in items render in the default order.
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
          `}}}},parameters:{docs:{description:{component:`
A customizable profile menu component that displays user information with optional submenus.

The component uses the \`modus-wc-panel\` component for layout and supports one or two custom submenus.

### Features
- **User Profile Display**: Shows profile image, header name, username, and email
- **Default Menu Items**: Includes pre-configured menu items (My Profile, My Products, Support center, Admin settings) that can be hidden or extended via \`mainMenu\`
- **Custom Submenus**: Supports up to two additional custom submenus with titles and icons
- **Manage Trimble ID Link**: Optional link for managing user's Trimble ID
- **Sign Out**: Built-in sign out menu item in the footer
- **Icon Support**: Menu items can include icons with solid or outlined variants

### Events
- **menuItemClick**: Emitted when any menu item is clicked, passing back the item label/identifier
- **signOutClick**: Emitted when the Sign Out menu item is clicked

### Usage
The component requires a \`profileProps\` object with user information and optionally accepts \`mainMenu\`, \`menuOne\`, and \`menuTwo\`.
        `}}}},s=e=>{const n=`const profileProps = ${JSON.stringify(e["profile-props"],null,2)};`,o=e["main-menu"]?`
const mainMenu = ${JSON.stringify(e["main-menu"],null,2)};`:"",t=e["menu-one"]?`
const menuOne = ${JSON.stringify(e["menu-one"],null,2)};`:"",i=e["menu-two"]?`
const menuTwo = ${JSON.stringify(e["menu-two"],null,2)};`:"";return`<modus-wc-profile-menu></modus-wc-profile-menu>

<script>
  ${n}${o}${t}${i}

  const element = document.querySelector('modus-wc-profile-menu');
  element.profileProps = profileProps;${e["main-menu"]?`
  element.mainMenu = mainMenu;`:""}${e["menu-one"]?`
  element.menuOne = menuOne;`:""}${e["menu-two"]?`
  element.menuTwo = menuTwo;`:""}

  // Event listeners
  element.addEventListener('menuItemClick', (event) => {
    console.log('Menu item clicked:', event.detail);
  });
  element.addEventListener('signOutClick', () => {
    console.log('Sign Out clicked');
  });

<\/script>
`},p={parameters:{docs:{source:{transform:(e,{args:n})=>s(n)}}},render:e=>A`
<div style="min-height: 600px;">
  <modus-wc-profile-menu
    .profileProps=${e["profile-props"]}
    .mainMenu=${d(e["main-menu"])}
    .menuOne=${d(e["menu-one"])}
    .menuTwo=${d(e["menu-two"])}
    @signOutClick=${c("signOutClick")}
    @menuItemClick=${c("menuItemClick")}
  ></modus-wc-profile-menu>
</div>
    `},r={...p,parameters:{docs:{description:{story:"Basic profile menu with default menu items (My Profile, My Products, Support center, Admin settings) and no custom submenus."},source:{transform:(e,{args:n})=>s(n)}}}},a={...p,parameters:{docs:{description:{story:"Hides Admin settings and appends a custom Billing item after the remaining built-in items."},source:{transform:(e,{args:n})=>s(n)}}},args:{"main-menu":{adminSettings:!1,items:[{label:"Billing",icon:"invoice",iconVariant:"solid",iconSize:"sm",value:"billing"}]}}},m={...p,parameters:{docs:{description:{story:"Profile menu with one additional custom submenu section. Submenus can include a title and items with icons."},source:{transform:(e,{args:n})=>s(n)}}},args:{"menu-one":{title:"Recent Projects",items:[{label:"Project Alpha",icon:"bug",iconVariant:"solid"},{label:"Project Beta",icon:"triangle_down",iconVariant:"solid"},{label:"Project Gamma",icon:"service_rep",iconVariant:"solid"}]}}},l={...p,parameters:{docs:{description:{story:"Profile menu with two additional custom submenu sections. Each submenu can have its own title and menu items with icons."},source:{transform:(e,{args:n})=>s(n)}}},args:{"menu-one":{title:"Recent Projects",items:[{label:"Project Alpha",icon:"bug",iconVariant:"solid"},{label:"Project Beta",icon:"triangle_down",iconVariant:"solid"},{label:"Project Gamma",icon:"antenna",iconVariant:"solid"}]},"menu-two":{title:"Quick Actions",items:[{label:"Settings",icon:"settings",iconVariant:"solid"},{label:"Help Center",icon:"help",iconVariant:"solid"},{label:"Support",icon:"headset",iconVariant:"solid"}]}}},u={render:e=>{if(!customElements.get("profile-menu-shadow-host")){const n=E({componentTag:"modus-wc-profile-menu",propsMapper:(o,t)=>{const i=t;i.profileProps=o["profile-props"],i.mainMenu=o["main-menu"],i.menuOne=o["menu-one"],i.menuTwo=o["menu-two"],t.dataset.eventsWired||(t.addEventListener("signOutClick",c("signOutClick")),t.addEventListener("menuItemClick",c("menuItemClick")),t.dataset.eventsWired="true")}});customElements.define("profile-menu-shadow-host",n)}return A`<profile-menu-shadow-host
      .props=${{...e}}
    ></profile-menu-shadow-host>`}};var f,h,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,w,P;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Hides Admin settings and appends a custom Billing item after the remaining built-in items.'
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
        iconSize: 'sm',
        value: 'billing'
      }]
    }
  }
}`,...(P=(w=a.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var M,T,S;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(S=(T=m.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var y,v,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var I,k,O;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
          };
          profileMenuEl.profileProps = v['profile-props'];
          profileMenuEl.mainMenu = v['main-menu'];
          profileMenuEl.menuOne = v['menu-one'];
          profileMenuEl.menuTwo = v['menu-two'];
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
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const H=["Default","WithCustomMainMenu","WithOneSubmenu","WithTwoSubmenus","ShadowDomParent"];export{r as Default,u as ShadowDomParent,a as WithCustomMainMenu,m as WithOneSubmenu,l as WithTwoSubmenus,H as __namedExportsOrder,W as default};
