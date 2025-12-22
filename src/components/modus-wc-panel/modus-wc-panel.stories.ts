import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface PanelArgs {
  'custom-class'?: string;
  width?: string;
  height?: string;
  floating?: boolean;
}

const meta: Meta<PanelArgs> = {
  title: 'Components/Panel',
  component: 'modus-wc-panel',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    floating: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<PanelArgs>;

export const Default: Story = {
  args: {
    width: '250px',
    height: '400px',
    floating: false,
  },
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .panel-header {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 8px;
    padding: 12px;
  }
  .panel-item {
    cursor: pointer;
    padding: 12px;
  }
  .panel-footer {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 8px;
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <div slot="header" class="panel-header">
    <modus-wc-icon name="home"></modus-wc-icon>
    <strong>Home</strong>
  </div>
  <div slot="body" class="panel-item">Dashboard</div>
  <div slot="body" class="panel-item">Projects</div>
  <div slot="body" class="panel-item">Team</div>
  <div slot="body" class="panel-item">Calendar</div>
  <div slot="body" class="panel-item">Documents</div>
  <div slot="body" class="panel-item">Reports</div>
  <div slot="body" class="panel-item">Analytics</div>
  <div slot="body" class="panel-item">Messages</div>
  <div slot="footer" class="panel-footer">
    <modus-wc-icon name="settings"></modus-wc-icon>
    Settings
  </div>
</modus-wc-panel>
    `;
  },
};

export const Floating: Story = {
  args: {
    width: '250px',
    height: '500px',
    floating: true,
  },
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .panel-header {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 8px;
    padding: 12px;
  }
  .panel-item {
    cursor: pointer;
    padding: 12px;
  }
  .panel-footer {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 8px;
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <div slot="header" class="panel-header">
    <modus-wc-icon name="menu"></modus-wc-icon>
    <strong>Menu</strong>
  </div>
  <div slot="body" class="panel-item">Files</div>
  <div slot="body" class="panel-item">Inbox</div>
  <div slot="body" class="panel-item">Starred</div>
  <div slot="body" class="panel-item">Recent</div>
  <div slot="body" class="panel-item">Shared</div>
  <div slot="body" class="panel-item">Archive</div>
  <div slot="footer" class="panel-footer">
    <modus-wc-icon name="help"></modus-wc-icon>
    Help
  </div>
</modus-wc-panel>
    `;
  },
};

export const BodyOnly: Story = {
  args: {
    width: '250px',
    height: '500px',
  },
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .panel-item {
    cursor: pointer;
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <div slot="body" class="panel-item">Dashboard</div>
  <div slot="body" class="panel-item">Projects</div>
  <div slot="body" class="panel-item">Team</div>
  <div slot="body" class="panel-item">Calendar</div>
  <div slot="body" class="panel-item">Documents</div>
  <div slot="body" class="panel-item">Reports</div>
  <div slot="body" class="panel-item">Analytics</div>
  <div slot="body" class="panel-item">Messages</div>
  <div slot="body" class="panel-item">Tasks</div>
  <div slot="body" class="panel-item">Notifications</div>
</modus-wc-panel>
    `;
  },
};
