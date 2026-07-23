import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  IMainMenu,
  IProfileMenuProps,
  ISubMenu,
} from './modus-wc-profile-menu';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface ProfileMenuArgs {
  'profile-props': IProfileMenuProps;
  'main-menu'?: IMainMenu;
  'menu-one'?: ISubMenu;
  'menu-two'?: ISubMenu;
  'show-sign-out'?: boolean;
}

const profileData: IProfileMenuProps = {
  profileImageUrl:
    'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
  headerName: 'Enterprise ABC',
  userName: 'Jane Doe',
  userEmail: 'jane.doe@example.com',
  manageTrimbleId: {
    link: '#',
  },
};

const meta: Meta<ProfileMenuArgs> = {
  title: 'Components/Profile Menu',
  component: 'modus-wc-profile-menu',
  args: {
    'profile-props': profileData,
    'show-sign-out': true,
  },
  argTypes: {
    'profile-props': {
      description: 'Profile menu properties containing user information',
      table: {
        type: {
          detail: `
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
          `,
        },
      },
    },
    'main-menu': {
      description: 'Configuration for the default main menu section',
      table: {
        type: {
          detail: `
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
          `,
        },
      },
    },
    'menu-one': {
      description: 'Configuration for the first submenu section',
      table: {
        type: {
          detail: `
            Interface: ISubMenu
            Properties:
            - title (string, optional): Title for the submenu section
            - items (IMenuItem[]): Array of menu items
              - label (string): The display text for the menu item
              - icon (string, optional): The name of the icon to display
              - iconSize ('xs', 'sm', 'md', 'lg', optional): The size of the icon
              - iconVariant ('solid' | 'outlined', optional): The variant of the icon
              - value (string, optional): The value associated with the menu item, used for selection
          `,
        },
      },
    },
    'menu-two': {
      description: 'Configuration for the second submenu section',
      table: {
        type: {
          detail: `
            Interface: ISubMenu
            Properties:
            - title (string, optional): Title for the submenu section
            - items (IMenuItem[]): Array of menu items
              - label (string): The display text for the menu item
              - icon (string, optional): The name of the icon to display
              - iconSize ('xs', 'sm', 'md', 'lg', optional): The size of the icon
              - iconVariant ('solid' | 'outlined', optional): The variant of the icon
              - value (string, optional): The value associated with the menu item, used for selection
          `,
        },
      },
    },
    'show-sign-out': {
      description:
        'Controls visibility of the Sign Out menu item in the footer. Defaults to true when omitted.',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A customizable profile menu component that displays user information with optional submenus.
\nThe component uses the \`modus-wc-panel\` component for layout and supports one or two custom submenus.

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
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<ProfileMenuArgs>;
const getSourceCode = (args: ProfileMenuArgs) => {
  const profilePropsCode = `const profileProps = ${JSON.stringify(args['profile-props'], null, 2)};`;

  const mainMenuCode = args['main-menu']
    ? `\nconst mainMenu = ${JSON.stringify(args['main-menu'], null, 2)};`
    : '';

  const menuOneCode = args['menu-one']
    ? `\nconst menuOne = ${JSON.stringify(args['menu-one'], null, 2)};`
    : '';

  const menuTwoCode = args['menu-two']
    ? `\nconst menuTwo = ${JSON.stringify(args['menu-two'], null, 2)};`
    : '';

  return `<modus-wc-profile-menu></modus-wc-profile-menu>

<script>
  ${profilePropsCode}${mainMenuCode}${menuOneCode}${menuTwoCode}

  const element = document.querySelector('modus-wc-profile-menu');
  element.profileProps = profileProps;${args['main-menu'] ? '\n  element.mainMenu = mainMenu;' : ''}${args['menu-one'] ? '\n  element.menuOne = menuOne;' : ''}${args['menu-two'] ? '\n  element.menuTwo = menuTwo;' : ''}${args['show-sign-out'] === false ? '\n  element.showSignOut = false;' : ''}

  // Event listeners
  element.addEventListener('menuItemClick', (event) => {
    console.log('Menu item clicked:', event.detail);
  });
  element.addEventListener('signOutClick', () => {
    console.log('Sign Out clicked');
  });

</script>
`;
};

const Template: Story = {
  parameters: {
    docs: {
      source: {
        transform: (_src, { args }: { args: ProfileMenuArgs }) =>
          getSourceCode(args),
      },
    },
  },
  render: (args) => {
    // prettier-ignore
    return html`
<div style="min-height: 600px;">
  <modus-wc-profile-menu
    .profileProps=${args['profile-props']}
    .mainMenu=${ifDefined(args['main-menu'])}
    .menuOne=${ifDefined(args['menu-one'])}
    .menuTwo=${ifDefined(args['menu-two'])}
    .showSignOut=${args['show-sign-out']}
    @signOutClick=${action('signOutClick')}
    @menuItemClick=${action('menuItemClick')}
  ></modus-wc-profile-menu>
</div>
    `;
  },
};

export const Default: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'Basic profile menu with default menu items (My Profile, My Products, Support center, Admin settings) and no custom submenus.',
      },
      source: {
        transform: (_src, { args }: { args: ProfileMenuArgs }) =>
          getSourceCode(args),
      },
    },
  },
};

export const WithCustomMainMenu: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'Hides Admin settings via adminSettings: false and appends a custom Billing item after the remaining built-in items.',
      },
      source: {
        transform: (_src, { args }: { args: ProfileMenuArgs }) =>
          getSourceCode(args),
      },
    },
  },
  args: {
    'show-sign-out': false,
    'main-menu': {
      adminSettings: false,
      myProducts: false,
      supportCenter: false,
      myProfile: false,
      items: [
        {
          label: 'Billing',
          icon: 'invoice',
          iconVariant: 'solid',
          value: 'billing',
        },
        {
          label: 'Subscription',
          icon: 'add',
          iconVariant: 'solid',
          value: 'subscription',
        },
        {
          label: 'Edit Profile',
          icon: 'pen',
          iconVariant: 'solid',
          value: 'edit-profile',
        },
      ],
    },
  },
};

export const WithOneSubmenu: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'Profile menu with one additional custom submenu section. Submenus can include a title and items with icons.',
      },
      source: {
        transform: (_src, { args }: { args: ProfileMenuArgs }) =>
          getSourceCode(args),
      },
    },
  },
  args: {
    'menu-one': {
      title: 'Recent Projects',
      items: [
        {
          label: 'Project Alpha',
          icon: 'bug',
          iconVariant: 'solid',
        },
        {
          label: 'Project Beta',
          icon: 'triangle_down',
          iconVariant: 'solid',
        },
        {
          label: 'Project Gamma',
          icon: 'service_rep',
          iconVariant: 'solid',
        },
      ],
    },
  },
};

export const WithTwoSubmenus: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'Profile menu with two additional custom submenu sections. Each submenu can have its own title and menu items with icons.',
      },
      source: {
        transform: (_src, { args }: { args: ProfileMenuArgs }) =>
          getSourceCode(args),
      },
    },
  },
  args: {
    'menu-one': {
      title: 'Recent Projects',
      items: [
        {
          label: 'Project Alpha',
          icon: 'bug',
          iconVariant: 'solid',
        },
        {
          label: 'Project Beta',
          icon: 'triangle_down',
          iconVariant: 'solid',
        },
        {
          label: 'Project Gamma',
          icon: 'antenna',
          iconVariant: 'solid',
        },
      ],
    },
    'menu-two': {
      title: 'Quick Actions',
      items: [
        {
          label: 'Settings',
          icon: 'settings',
          iconVariant: 'solid',
        },
        {
          label: 'Help Center',
          icon: 'help',
          iconVariant: 'solid',
        },
        { label: 'Support', icon: 'headset', iconVariant: 'solid' },
      ],
    },
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
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
        },
      });
      customElements.define('profile-menu-shadow-host', ProfileMenuShadowHost);
    }

    return html`<profile-menu-shadow-host
      .props=${{ ...args }}
    ></profile-menu-shadow-host>`;
  },
};
