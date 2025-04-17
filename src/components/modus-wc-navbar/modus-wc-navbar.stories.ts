import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { INavbarVisibility, IUserCard } from './modus-wc-navbar';

const user: IUserCard = {
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
  condensed?: boolean;
  'custom-class'?: string;
  'search-debounce-ms'?: number;
  user: IUserCard;
  visibility?: INavbarVisibility;
}

const meta: Meta<NavbarArgs> = {
  title: 'Components/Navbar',
  component: 'modus-wc-navbar',
  args: {
    condensed: false,
    'search-debounce-ms': 300,
    user,
    visibility,
  },
  argTypes: {
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
    height: 360px;
  }
</style>
<modus-wc-navbar
  ?condensed=${ifDefined(args.condensed)}
  custom-class=${ifDefined(args['custom-class'])}
  search-debounce-ms=${ifDefined(args['search-debounce-ms'])}
  .user=${args.user}
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
