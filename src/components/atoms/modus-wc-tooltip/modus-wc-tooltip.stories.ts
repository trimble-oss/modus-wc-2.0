import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface TooltipArgs {
  content?: string;
  'custom-class'?: string;
  'force-open'?: boolean;
  'tooltip-id'?: string;
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

// prettier-ignore
const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-tooltip
        content=${ifDefined(args.content)}
        custom-class="${ifDefined(args['custom-class'])}"
        ?force-open="${ifDefined(args['force-open'])}"
        tooltip-id="${ifDefined(args['tooltip-id'])}"
        position=${ifDefined(args.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `;
  },
};

export const Default: Story = { ...Template };
