import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ButtonGroupArgs {
  orientation?: 'horizontal' | 'vertical';
}

const meta: Meta<ButtonGroupArgs> = {
  title: 'Components/Button Group',
  component: 'modus-wc-button-group',
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
  parameters: {},
};

export default meta;

type Story = StoryObj;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-button-group orientation=${ifDefined(args.orientation)}>
        <modus-wc-button variant="outlined">Button 1</modus-wc-button>
        <modus-wc-button variant="outlined">Button 2</modus-wc-button>
        <modus-wc-button variant="outlined">Button 3</modus-wc-button>
      </modus-wc-button-group>
    `;
  },
};

export const Default: Story = { ...Template };
