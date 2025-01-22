import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ToastPosition } from './modus-wc-toast';

interface ToastArgs {
  'custom-class'?: string;
  position?: ToastPosition;
}

const meta: Meta<ToastArgs> = {
  title: 'Components/Toast',
  component: 'modus-wc-toast',
  args: {
    position: 'top-end',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: [
        'top-start',
        'top-center',
        'top-end',
        'middle-start',
        'middle-center',
        'middle-end',
        'bottom-start',
        'bottom-center',
        'bottom-end',
      ],
    },
  },
  parameters: {
    layout: 'padded',
    viewport: 'responsive',
  },
};

export default meta;

type Story = StoryObj<ToastArgs>;

// prettier-ignore
const Template: Story = {
  render: (args) => html`
<div style="height: 200px;">
  <modus-wc-toast
    custom-class=${ifDefined(args['custom-class'])}
    position=${ifDefined(args.position)}
  >
    <modus-wc-alert alert-title="Message sent successfully!" variant="success"></modus-wc-alert>
  </modus-wc-toast>
</div>
  `,
};

export const Default: Story = { ...Template };
