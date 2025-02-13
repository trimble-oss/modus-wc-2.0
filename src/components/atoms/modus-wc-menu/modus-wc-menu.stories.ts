import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize, Orientation } from '../../types';

interface MenuArgs {
  'aria-label': string;
  'custom-class'?: string;
  orientation?: Orientation;
  size?: ModusSize;
}

const meta: Meta<MenuArgs> = {
  title: 'Components/Menu',
  component: 'modus-wc-menu',
  args: {
    'aria-label': 'Example menu',
    orientation: 'vertical',
    size: 'md',
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<MenuArgs>;

export const Template: Story = {
  render: (args) => {
    // const handleItemSelect = (e: CustomEvent<IMenuItem>) => {
    //   const menu = (e.target as HTMLElement).closest('modus-wc-menu');
    //   if (menu) menu.activeItemValue = e.detail.value;
    // };

    return html`
      <modus-wc-menu
        aria-label="${args['aria-label']}"
        custom-class="${ifDefined(args['custom-class'])}"
        orientation=${ifDefined(args.orientation)}
        size=${ifDefined(args.size)}
      >
        <modus-wc-menu-item
          label="Small"
          value="1"
          size="sm"
        ></modus-wc-menu-item>
        <modus-wc-menu-item label="Medium" value="2"></modus-wc-menu-item>
        <modus-wc-menu-item
          label="Large"
          value="3"
          size="lg"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="With Sub-label"
          value="3"
          sub-label="Sub-label"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="Bordered"
          value="3"
          bordered="true"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="Selected"
          value="3"
          selected="true"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="With Start Icon"
          value="3"
          start-icon="info"
        ></modus-wc-menu-item>
        <modus-wc-menu-item
          label="Disabled"
          value="3"
          disabled="true"
        ></modus-wc-menu-item>
      </modus-wc-menu>
    `;
  },
};
