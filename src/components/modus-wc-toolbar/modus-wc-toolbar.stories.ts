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
<style>
    #toolbar-demo .modus-wc-navbar {
      gap: 0.2rem;
      height: 60px; /* toolbar height */
      border-radius: 8px;
    }
    #toolbar-demo .modus-wc-navbar-center,
    #toolbar-demo .modus-wc-navbar-end,
    #toolbar-demo .modus-wc-navbar-start {
      display: flex;
      flex: 1;
      padding-inline: 10px;
      height: 100%; /* fill height */
      background: #d9d9d969;
    }
    #toolbar-demo .modus-wc-navbar-center {
      justify-content: center;
    }
</style>
<modus-wc-toolbar id="toolbar-demo" custom-class="${ifDefined(args['custom-class'])}">
  <div slot="start">Start</div>
  <div slot="center">Center</div>
  <div slot="end">End</div>
</modus-wc-toolbar>
    `;
  },
};

export const Default: Story = { ...Template };
