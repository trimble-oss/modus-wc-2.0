import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface TooltipArgs {
  content?: string;
  'custom-class'?: string;
  disabled?: boolean;
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
      control: { type: 'select' },
      options: ['auto', 'top', 'right', 'left', 'bottom'],
    },
  },
};

export default meta;

type Story = StoryObj<TooltipArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
      <modus-wc-tooltip
        content=${ifDefined(args.content)}
        custom-class="${ifDefined(args['custom-class'])}"
        ?disabled="${args.disabled}"
        ?force-open="${args['force-open']}"
        tooltip-id="${ifDefined(args['tooltip-id'])}"
        position=${ifDefined(args.position)}
      >
        <modus-wc-badge>Hover</modus-wc-badge>
      </modus-wc-tooltip>
    `;
  },
};

export const Default: Story = { ...Template };
