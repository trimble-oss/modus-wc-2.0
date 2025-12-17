import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { getAvailableLogos, LogoName } from './logo-constants';

interface LogoArgs {
  name: LogoName;
  emblem: boolean;
  alt?: string;
  'custom-class'?: string;
}

const meta: Meta<LogoArgs> = {
  title: 'Components/Logo',
  component: 'modus-wc-logo',
  args: {
    name: 'trimble',
    emblem: false,
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: getAvailableLogos(),
    },
    emblem: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<LogoArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-logo
        name="${args.name}"
        ?emblem="${args.emblem}"
        alt="${ifDefined(args.alt)}"
        custom-class="${ifDefined(args['custom-class'])}"
      ></modus-wc-logo>
    `;
  },
};

export const Default: Story = { ...Template };

export const DarkThemeDemo: Story = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <div>
          <h4>Light Theme</h4>
          <div
            style="background: #ffffff; padding: 2rem; display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
            data-theme="modus-modern-light"
          >
            <modus-wc-logo name="trimble"></modus-wc-logo>
            <modus-wc-logo name="siteworks"></modus-wc-logo>
            <modus-wc-logo name="viewpoint"></modus-wc-logo>
          </div>
        </div>

        <div>
          <h4>Dark Theme</h4>
          <div
            style="background: #252a2e; padding: 2rem; display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
            data-theme="modus-modern-dark"
          >
            <modus-wc-logo name="trimble"></modus-wc-logo>
            <modus-wc-logo name="siteworks"></modus-wc-logo>
            <modus-wc-logo name="viewpoint"></modus-wc-logo>
          </div>
        </div>

        <div>
          <h4>Emblems - Light Theme</h4>
          <div
            style="background: #ffffff; padding: 2rem; display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
            data-theme="modus-modern-light"
          >
            <modus-wc-logo name="trimble" emblem></modus-wc-logo>
            <modus-wc-logo name="connect" emblem></modus-wc-logo>
            <modus-wc-logo name="viewpoint" emblem></modus-wc-logo>
          </div>
        </div>

        <div>
          <h4>Emblems - Dark Theme</h4>
          <div
            style="background: #252a2e; padding: 2rem; display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
            data-theme="modus-modern-dark"
          >
            <modus-wc-logo name="trimble" emblem></modus-wc-logo>
            <modus-wc-logo name="connect" emblem></modus-wc-logo>
            <modus-wc-logo name="viewpoint" emblem></modus-wc-logo>
          </div>
        </div>
      </div>
    `;
  },
};

export const CustomSizeWithClass: Story = {
  render: () => {
    return html`
      <style>
        .logo-small {
          width: 80px;
        }
        .logo-medium {
          width: 150px;
        }
        .logo-large {
          width: 250px;
        }
        .emblem-xs {
          width: 80px;
          height: 80px;
        }
        .emblem-sm {
          width: 150px;
          height: 150px;
        }
        .emblem-lg {
          width: 250px;
          height: 250px;
        }
      </style>
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <div>
          <h4>Full Logos - Custom Sizes</h4>
          <div
            style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
          >
            <modus-wc-logo
              name="trimble"
              custom-class="logo-small"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              custom-class="logo-medium"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              custom-class="logo-large"
            ></modus-wc-logo>
          </div>
        </div>

        <div>
          <h4>Emblems - Custom Sizes</h4>
          <div
            style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;"
          >
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-xs"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-sm"
            ></modus-wc-logo>
            <modus-wc-logo
              name="trimble"
              emblem
              custom-class="emblem-lg"
            ></modus-wc-logo>
          </div>
        </div>
        </div>
      </div>
    `;
  },
};
