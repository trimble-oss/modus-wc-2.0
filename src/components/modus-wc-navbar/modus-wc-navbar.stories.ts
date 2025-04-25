import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  INavbarTextOverrides,
  INavbarUserCard,
  INavbarVisibility,
} from './modus-wc-navbar';

const textOverrides: INavbarTextOverrides = {
  apps: 'Apps',
  help: 'Help',
  notifications: 'Notifications',
  search: 'Search',
};

const user: INavbarUserCard = {
  avatarAlt: 'Sonic',
  avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
  email: 'sonic@trimble.com',
  name: 'Sonic the Hedgehog',
};

const visibility: INavbarVisibility = {
  apps: true,
  help: true,
  mainMenu: true,
  notifications: true,
  search: true,
  searchInput: true,
  user: true,
};

interface NavbarArgs {
  'apps-menu-open'?: boolean;
  condensed?: boolean;
  'condensed-menu-open'?: boolean;
  'custom-class'?: string;
  'main-menu-open'?: boolean;
  'notifications-menu-open'?: boolean;
  'search-debounce-ms'?: number;
  'search-input-open'?: boolean;
  'text-overrides'?: INavbarTextOverrides;
  user: INavbarUserCard;
  'user-menu-open'?: boolean;
  visibility?: INavbarVisibility;
}

const meta: Meta<NavbarArgs> = {
  title: 'Components/Navbar',
  component: 'modus-wc-navbar',
  args: {
    condensed: false,
    'search-debounce-ms': 300,
    'text-overrides': textOverrides,
    user,
    visibility,
  },
  argTypes: {
    'text-overrides': {
      description: 'Text replacements for navbar menu items',
      table: {
        type: {
          detail: `
            Interface: INavbarTextOverrides
            Properties:
            - apps (string, optional): Replaces the text for "Apps" in the condensed menu
            - help (string, optional): Replaces the text for "Help" in the condensed menu
            - notifications (string, optional): Replaces the text for "Notifications" in the condensed menu
            - search (string, optional): Replaces the text for "Search" in the condensed menu
          `,
        },
      },
      control: {
        type: 'object',
      },
    },
    user: {
      description: 'User profile card information',
      table: {
        type: {
          detail: `
            Interface: IUserCard
            Properties:
            - avatarAlt (string, optional): The alt value to set on the avatar
            - avatarSrc (string, optional): The avatar image source value
            - email (string): The email address of the user
            - myTrimbleButton (string, optional): Text override for the Access MyTrimble button, allows for translation
            - name (string): The name of the user
            - signOutButton (string, optional): Text override for the Sign out button, allows for translation
          `,
        },
      },
    },
    visibility: {
      description: 'Controls visibility of individual navbar buttons',
      table: {
        type: {
          detail: `
            Interface: INavbarVisibility
            Properties:
            - apps (boolean, optional): Controls visibility of the apps button
            - help (boolean, optional): Controls visibility of the help button
            - mainMenu (boolean, optional): Controls visibility of the main menu button
            - notifications (boolean, optional): Controls visibility of the notifications button
            - search (boolean, optional): Controls visibility of the search button
            - searchInput (boolean, optional): Controls visibility of the search input
            - user (boolean, optional): Controls visibility of the user button
          `,
        },
      },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: [
        'appsClick',
        'helpClick',
        'myTrimbleClick',
        'notificationsClick',
        'searchChange',
        'searchClick',
        'signOutClick',
        'trimbleLogoClick',
      ],
    },
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<NavbarArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  div[id^='story--components-navbar--default'] {
    border: 1px dashed black;
    height: 365px;
  }
  [slot=main-menu] {
    background-color: #0063a3;
    color: white;
    height: 305px;
  }
</style>
<modus-wc-navbar
  ?apps-menu-open=${args['apps-menu-open']}
  ?condensed=${args.condensed}
  ?condensed-menu-open=${args['condensed-menu-open']}
  custom-class=${ifDefined(args['custom-class'])}
  ?main-menu-open=${args['main-menu-open']}
  ?notifications-menu-open=${args['notifications-menu-open']}
  search-debounce-ms=${ifDefined(args['search-debounce-ms'])}
  ?search-input-open=${args['search-input-open']}
  .textOverrides=${ifDefined(args['text-overrides'])}
  .user=${args.user}
  ?user-menu-open=${args['user-menu-open']}
  .visibility=${args.visibility}
>
  <div slot="main-menu">Main menu contents</div>
  <div slot="notifications">Notification contents</div>
  <div slot="apps">App drawer contents</div>
</modus-wc-navbar>
    `;
  },
};

export const Default: Story = { ...Template };
