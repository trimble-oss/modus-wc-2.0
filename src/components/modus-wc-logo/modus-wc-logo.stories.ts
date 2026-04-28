import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { getAvailableLogos, LogoName } from './logo-constants';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

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

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('logo-shadow-host')) {
      const LogoShadowHost = createShadowHostClass<LogoArgs>({
        componentTag: 'modus-wc-logo',
        propsMapper: (v: LogoArgs, el: HTMLElement) => {
          const logoEl = el as unknown as {
            name: string;
            emblem: boolean;
            alt: string;
            customClass: string;
          };
          logoEl.name = v.name;
          logoEl.emblem = Boolean(v.emblem);
          logoEl.alt = v.alt ?? '';
          logoEl.customClass = v['custom-class'] || '';
        },
      });
      customElements.define('logo-shadow-host', LogoShadowHost);
    }

    return html`<logo-shadow-host .props=${{ ...args }}></logo-shadow-host>`;
  },
};
