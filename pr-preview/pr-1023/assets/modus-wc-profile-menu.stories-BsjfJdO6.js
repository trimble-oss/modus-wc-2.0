import"./index-CK-iu89z.js";import{x as y}from"./lit-element-CucEn6F2.js";import{o as p}from"./if-defined-BiZP-SBN.js";import{c as C}from"./shadow-host-helper-A4Nvcs5e.js";import{b as l}from"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const v={profileImageUrl:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",headerName:"Enterprise ABC",userName:"Jane Doe",userEmail:"jane.doe@example.com",manageTrimbleId:{link:"#"}},$={title:"Components/Profile Menu",component:"modus-wc-profile-menu",args:{"profile-props":v},argTypes:{"profile-props":{description:"Profile menu properties containing user information",table:{type:{detail:`
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
- **Default Menu Items**: Includes pre-configured menu items (My Profile, My Products, Support center, Admin settings)
- **Custom Submenus**: Supports up to two additional custom submenus with titles and icons
- **Manage Trimble ID Link**: Optional link for managing user's Trimble ID
- **Sign Out**: Built-in sign out menu item in the footer
- **Icon Support**: Menu items can include icons with solid or outlined variants

### Events
- **menuItemClick**: Emitted when any menu item is clicked, passing back the item label/identifier
- **signOutClick**: Emitted when the Sign Out menu item is clicked

### Usage
The component requires a \`profileProps\` object with user information and optionally accepts \`menuOne\` and \`menuTwo\` for custom menus.
        `}}}},m=e=>{const n=`const profileProps = ${JSON.stringify(e["profile-props"],null,2)};`,t=e["menu-one"]?`
const menuOne = ${JSON.stringify(e["menu-one"],null,2)};`:"",o=e["menu-two"]?`
const menuTwo = ${JSON.stringify(e["menu-two"],null,2)};`:"";return`<modus-wc-profile-menu></modus-wc-profile-menu>

<script>
  ${n}${t}${o}

  const element = document.querySelector('modus-wc-profile-menu');
  element.profileProps = profileProps;${e["menu-one"]?`
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
`},c={parameters:{docs:{source:{transform:(e,{args:n})=>m(n)}}},render:e=>y`
<div style="min-height: 600px;">
  <modus-wc-profile-menu
    .profileProps=${e["profile-props"]}
    .menuOne=${p(e["menu-one"])}
    .menuTwo=${p(e["menu-two"])}
    @signOutClick=${l("signOutClick")}
    @menuItemClick=${l("menuItemClick")}
  ></modus-wc-profile-menu>
</div>
    `},i={...c,parameters:{docs:{description:{story:"Basic profile menu with default menu items (My Profile, My Products, Support center, Admin settings) and no custom submenus."},source:{transform:(e,{args:n})=>m(n)}}}},r={...c,parameters:{docs:{description:{story:"Profile menu with one additional custom submenu section. Submenus can include a title and items with icons."},source:{transform:(e,{args:n})=>m(n)}}},args:{"menu-one":{title:"Recent Projects",items:[{label:"Project Alpha",icon:"bug",iconVariant:"solid"},{label:"Project Beta",icon:"triangle_down",iconVariant:"solid"},{label:"Project Gamma",icon:"service_rep",iconVariant:"solid"}]}}},s={...c,parameters:{docs:{description:{story:"Profile menu with two additional custom submenu sections. Each submenu can have its own title and menu items with icons."},source:{transform:(e,{args:n})=>m(n)}}},args:{"menu-one":{title:"Recent Projects",items:[{label:"Project Alpha",icon:"bug",iconVariant:"solid"},{label:"Project Beta",icon:"triangle_down",iconVariant:"solid"},{label:"Project Gamma",icon:"antenna",iconVariant:"solid"}]},"menu-two":{title:"Quick Actions",items:[{label:"Settings",icon:"settings",iconVariant:"solid"},{label:"Help Center",icon:"help",iconVariant:"solid"},{label:"Support",icon:"headset",iconVariant:"solid"}]}}},a={render:e=>{if(!customElements.get("profile-menu-shadow-host")){const n=C({componentTag:"modus-wc-profile-menu",propsMapper:(t,o)=>{const u=o;u.profileProps=t["profile-props"],u.menuOne=t["menu-one"],u.menuTwo=t["menu-two"],o.dataset.eventsWired||(o.addEventListener("signOutClick",l("signOutClick")),o.addEventListener("menuItemClick",l("menuItemClick")),o.dataset.eventsWired="true")}});customElements.define("profile-menu-shadow-host",n)}return y`<profile-menu-shadow-host
      .props=${{...e}}
    ></profile-menu-shadow-host>`}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,w,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(w=r.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var P,T,S;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var M,k,I;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('profile-menu-shadow-host')) {
      const ProfileMenuShadowHost = createShadowHostClass<ProfileMenuArgs>({
        componentTag: 'modus-wc-profile-menu',
        propsMapper: (v: ProfileMenuArgs, el: HTMLElement) => {
          const profileMenuEl = el as unknown as {
            profileProps: IProfileMenuProps;
            menuOne: ISubMenu | undefined;
            menuTwo: ISubMenu | undefined;
          };
          profileMenuEl.profileProps = v['profile-props'];
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
}`,...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const D=["Default","WithOneSubmenu","WithTwoSubmenus","ShadowDomParent"];export{i as Default,a as ShadowDomParent,r as WithOneSubmenu,s as WithTwoSubmenus,D as __namedExportsOrder,$ as default};
