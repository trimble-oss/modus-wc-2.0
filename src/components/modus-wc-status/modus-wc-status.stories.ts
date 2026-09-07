import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

interface StatusArgs {
  'custom-class'?: string;
  label?: string;
  pulse: boolean;
  variant: 'active' | 'warning' | 'danger';
}

const meta: Meta<StatusArgs> = {
  title: 'Components/Status',
  component: 'modus-wc-status',
  args: {
    label: '',
    pulse: true,
    variant: 'active',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    pulse: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'select' },
      name: 'Status variant',
      options: ['active', 'warning', 'danger'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<StatusArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-status
      custom-class="${ifDefined(args['custom-class'])}"
      label="${ifDefined(args.label)}"
      .pulse=${args.pulse}
      variant="${args.variant}"
    ></modus-wc-status>
  `,
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('status-shadow-host')) {
      const StatusShadowHost = createShadowHostClass<StatusArgs>({
        componentTag: 'modus-wc-status',
        propsMapper: (v: StatusArgs, el: HTMLElement) => {
          const statusEl = el as unknown as {
            customClass: string;
            label: string;
            pulse: boolean;
            variant: string;
          };
          statusEl.customClass = v['custom-class'] || '';
          statusEl.label = v.label || '';
          statusEl.pulse = v.pulse;
          statusEl.variant = v.variant;
        },
      });
      customElements.define('status-shadow-host', StatusShadowHost);
    }

    return html`<status-shadow-host
      .props=${{ ...args }}
    ></status-shadow-host>`;
  },
};
