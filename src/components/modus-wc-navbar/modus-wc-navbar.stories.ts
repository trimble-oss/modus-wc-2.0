import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IUserCard } from './modus-wc-navbar';

const user: IUserCard = {
  avatarAlt: 'Sonic',
  avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
  email: 'sonic@trimble.com',
  name: 'Sonic the Hedgehog',
};

interface NavbarArgs {
  'custom-class'?: string;
  user: IUserCard;
}

const meta: Meta<NavbarArgs> = {
  title: 'Components/Navbar',
  component: 'modus-wc-navbar',
  args: {
    user,
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
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: [
        'helpClick',
        'myTrimbleClick',
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
  custom-class=${ifDefined(args['custom-class'])}
  .user=${args.user}
>
  <div slot="menu">Menu contents</div>
  <div slot="notifications">Notification contents</div>
  <div slot="apps">App drawer contents</div>
</modus-wc-navbar>
    `;
  },
};

export const Default: Story = { ...Template };
