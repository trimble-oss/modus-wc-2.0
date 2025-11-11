import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Orientation } from '../types';

interface ButtonGroupArgs {
  'button-style': 'borderless' | 'fill' | 'outlined';
  color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  disabled: boolean;
  orientation: Orientation;
}

const meta: Meta<ButtonGroupArgs> = {
  title: 'Components/Button Group',
  component: 'modus-wc-button-group',
  args: {},
  argTypes: {
    'button-style': {
      control: { type: 'select' },
      options: ['borderless', 'fill', 'outlined'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    disabled: { control: 'boolean' },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['buttonClick'],
    },
  },
};

export default meta;

type Story = StoryObj;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-button-group
  button-style=${ifDefined(args['button-style'])}
  color=${ifDefined(args.color)}
  disabled=${ifDefined(args.disabled)}
  orientation=${ifDefined(args.orientation)}
>
 <modus-wc-button>Button 1</modus-wc-button>
 <modus-wc-button>Button 2</modus-wc-button>
 <modus-wc-button>Button 3</modus-wc-button>
</modus-wc-button-group>
    `;
  },
};

export const Default: Story = { ...Template };

export const Vertical: Story = {
  ...Template,
  args: {
    orientation: 'vertical',
  },
};
