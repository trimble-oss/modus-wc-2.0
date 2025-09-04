import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../types';

interface MenuItemArgs {
  bordered?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  label: string;
  selected?: boolean;
  size?: ModusSize;
  'sub-label'?: string;
  tooltip?: string;
  'tooltip-position'?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
  value: string;
}

const meta: Meta<MenuItemArgs> = {
  title: 'Components/Menu Item',
  component: 'modus-wc-menu-item',
  args: {
    label: 'Menu Item',
    size: 'md',
    value: 'menuItem',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    'tooltip-position': {
      control: { type: 'select' },
      options: ['auto', 'top', 'right', 'bottom', 'left'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['itemSelect'],
    },
  },
};

export default meta;

type Story = StoryObj<MenuItemArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${args.bordered}
    custom-class=${ifDefined(args['custom-class'])}
    ?disabled=${args.disabled}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    sub-label=${ifDefined(args['sub-label'])}
    tooltip=${ifDefined(args.tooltip)}
    tooltip-position=${ifDefined(args['tooltip-position'])}
    value=${args.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `;
  },
};

export const Default: Story = { ...Template };

export const WithIcon: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${args.bordered}
    custom-class=${ifDefined(args['custom-class'])}
    ?disabled=${args.disabled}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    sub-label=${ifDefined(args['sub-label'])}
    tooltip=${ifDefined(args.tooltip)}
    tooltip-position=${ifDefined(args['tooltip-position'])}
    value=${args.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    `;
  },
};

export const WithTooltip: Story = {
  args: {
    tooltip: 'This is a tooltip for the menu item',
    'tooltip-position': 'top',
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${args.bordered}
    custom-class=${ifDefined(args['custom-class'])}
    ?disabled=${args.disabled}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    sub-label=${ifDefined(args['sub-label'])}
    tooltip=${ifDefined(args.tooltip)}
    tooltip-position=${ifDefined(args['tooltip-position'])}
    value=${args.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `;
  },
};
