import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ToolbarArgs {
  'custom-class'?: string;
}

const meta: Meta<ToolbarArgs> = {
  title: 'Components/Toolbar',
  component: 'modus-wc-toolbar',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<ToolbarArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-toolbar custom-class="${ifDefined(args['custom-class'])}">
  <div slot="start">Start</div>
  <div slot="center">Center</div>
  <div slot="end">End</div>
</modus-wc-toolbar>
    `;
  },
};

export const Default: Story = { ...Template };
