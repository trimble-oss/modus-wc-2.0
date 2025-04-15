import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface NavbarArgs {
  'custom-class'?: string;
}

const meta: Meta<NavbarArgs> = {
  title: 'Components/Navbar',
  component: 'modus-wc-navbar',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<NavbarArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-navbar custom-class="${ifDefined(args['custom-class'])}"></modus-wc-navbar>
    `;
  },
};

export const Default: Story = { ...Template };
