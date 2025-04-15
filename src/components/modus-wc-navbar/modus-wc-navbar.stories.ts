import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface NavbarArgs {
  'custom-class'?: string;
}

const meta: Meta<NavbarArgs> = {
  title: 'Components/Navbar',
  component: 'modus-wc-navbar',
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['helpClick', 'trimbleLogoClick'],
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
    height: 100px;
  }
</style>
<modus-wc-navbar custom-class="${ifDefined(args['custom-class'])}">
  <div slot="menu">Menu contents</div>
  <div slot="notifications">Notification contents</div>
  <div slot="apps">App drawer contents</div>
</modus-wc-navbar>
    `;
  },
};

export const Default: Story = { ...Template };
