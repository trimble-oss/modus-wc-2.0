import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

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
    height: '500px',
    floating: false,
  },
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .panel-section {
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <modus-wc-menu slot="header">  
    <modus-wc-menu-item label="Home" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Dashboard" value="dashboard"></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
    <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
    <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
    <modus-wc-menu-item label="Documents" value="documents"></modus-wc-menu-item>
    <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
    <modus-wc-menu-item label="Analytics" value="analytics"></modus-wc-menu-item>
    <modus-wc-menu-item label="Messages" value="messages"></modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="footer">   
    <modus-wc-menu-item label="Settings" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="settings"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
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
  .panel-section {
    padding: 12px;
  }
</style>
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <modus-wc-menu slot="header">
    <modus-wc-menu-item label="Menu" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="menu"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Files" value="files"></modus-wc-menu-item>
    <modus-wc-menu-item label="Inbox" value="inbox"></modus-wc-menu-item>
    <modus-wc-menu-item label="Starred" value="starred"></modus-wc-menu-item>
    <modus-wc-menu-item label="Recent" value="recent"></modus-wc-menu-item>
    <modus-wc-menu-item label="Shared" value="shared"></modus-wc-menu-item>
    <modus-wc-menu-item label="Archive" value="archive"></modus-wc-menu-item>
    <modus-wc-menu-item label="Trash" value="trash"></modus-wc-menu-item>
    <modus-wc-menu-item label="Settings" value="settings"></modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="footer">
    <modus-wc-menu-item label="Help" custom-class="panel-section">
      <modus-wc-icon slot="start-icon" name="help"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
    `;
  },
};

export const BodyOnly: Story = {
  args: {
    width: '250px',
    height: 'auto',
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-panel custom-class="${ifDefined(args['custom-class'])}" width="${ifDefined(args.width)}" height="${ifDefined(args.height)}" ?floating="${args.floating}">
  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Dashboard" value="dashboard"></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
    <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
    <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
    <modus-wc-menu-item label="Documents" value="documents"></modus-wc-menu-item>
    <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
    <modus-wc-menu-item label="Analytics" value="analytics"></modus-wc-menu-item>
    <modus-wc-menu-item label="Messages" value="messages"></modus-wc-menu-item>
    <modus-wc-menu-item label="Tasks" value="tasks"></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('panel-shadow-host')) {
      const PanelShadowHost = createShadowHostClass<PanelArgs>({
        componentTag: 'modus-wc-panel',
        propsMapper: (v: PanelArgs, el: HTMLElement) => {
          const panelEl = el as unknown as {
            customClass: string;
            width: string;
            height: string;
            floating: boolean;
          };
          panelEl.customClass = v['custom-class'] || '';
          panelEl.width = v.width ?? '350px';
          panelEl.height = v.height ?? '700px';
          panelEl.floating = Boolean(v.floating);
          if (!el.hasChildNodes()) {
            el.innerHTML = `
<modus-wc-menu slot="header">
  <modus-wc-menu-item label="Home">
    <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
<modus-wc-menu size="lg" slot="body">
  <modus-wc-menu-item label="Dashboard" value="dashboard"></modus-wc-menu-item>
  <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
  <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
  <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
</modus-wc-menu>
<modus-wc-menu slot="footer">
  <modus-wc-menu-item label="Settings">
    <modus-wc-icon slot="start-icon" name="settings"></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>`;
          }
        },
      });
      customElements.define('panel-shadow-host', PanelShadowHost);
    }

    return html`<panel-shadow-host .props=${{ ...args }}></panel-shadow-host>`;
  },
};
