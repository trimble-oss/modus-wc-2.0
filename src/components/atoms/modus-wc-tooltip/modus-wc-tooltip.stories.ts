import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';

interface TooltipArgs {
  content?: string;
  'custom-class': string;
  'force-open'?: boolean;
  id?: string;
  position: 'auto' | 'top' | 'right' | 'bottom' | 'left';
}

const meta: Meta<TooltipArgs> = {
  title: 'Components/Tooltip',
  component: 'modus-wc-tooltip',
  args: {
    content: 'Tooltip content',
    position: 'auto',
  },
  argTypes: {
    position: {
      control: { type: 'inline-radio' },
      options: ['auto', 'top', 'right', 'left', 'bottom'],
    },
  },
};

export default meta;

type Story = StoryObj<TooltipArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-tooltip
        content=${ifDefined(args.content)}
        custom-class="${args['custom-class']}"
        ?force-open="${ifDefined(args['force-open'])}"
        id=${ifDefined(args.id)}
        position=${ifDefined(args.position)}
      >
        <modus-wc-badge content="Hover"></modus-wc-badge>
      </modus-wc-tooltip>
    `;
  },
};

export const Default: Story = { ...Template };
