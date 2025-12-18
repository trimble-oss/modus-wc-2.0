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
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <div slot="header" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="home"></modus-wc-icon>
    <strong>Home</strong>
  </div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Dashboard</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Projects</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Team</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Calendar</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Documents</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Reports</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Analytics</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Messages</div>
  <div slot="footer" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
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
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <div slot="header" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
    <modus-wc-icon name="menu"></modus-wc-icon>
    <strong>Menu</strong>
  </div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Files</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Inbox</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Starred</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Recent</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Shared</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Archive</div>
  <div slot="footer" style="padding: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
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
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <div slot="body" style="padding: 12px; cursor: pointer;">Dashboard</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Projects</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Team</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Calendar</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Documents</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Reports</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Analytics</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Messages</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Tasks</div>
  <div slot="body" style="padding: 12px; cursor: pointer;">Notifications</div>
</modus-wc-panel>
    `;
  },
};
