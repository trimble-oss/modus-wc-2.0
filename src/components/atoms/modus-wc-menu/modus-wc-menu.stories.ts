import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { IMenuItem } from './modus-wc-menu';
import { ModusSize, Orientation } from '../../types';

const items: IMenuItem[] = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];

interface MenuArgs {
  'active-item-value'?: string;
  'aria-label': string;
  bordered?: boolean;
  'custom-class'?: string;
  items: IMenuItem[];
  'menu-title'?: string;
  orientation?: Orientation;
  size?: ModusSize;
}

const meta: Meta<MenuArgs> = {
  title: 'Components/Menu',
  component: 'modus-wc-menu',
  args: {
    'aria-label': 'Example menu',
    bordered: true,
    items,
    orientation: 'vertical',
    size: 'md',
  },
  argTypes: {
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
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

type Story = StoryObj<MenuArgs>;

export const Template: Story = {
  render: (args) => {
    const handleItemSelect = (e: CustomEvent<IMenuItem>) => {
      const menu = (e.target as HTMLElement).closest('modus-wc-menu');
      if (menu) menu.activeItemValue = e.detail.value;
    };

    return html`
      <modus-wc-menu
        active-item-value="${ifDefined(args['active-item-value'])}"
        aria-label="${args['aria-label']}"
        ?bordered=${args.bordered}
        custom-class="${ifDefined(args['custom-class'])}"
        .items=${args.items}
        orientation=${ifDefined(args.orientation)}
        size=${ifDefined(args.size)}
        menu-title="${ifDefined(args['menu-title'])}"
        @itemSelect=${handleItemSelect}
      ></modus-wc-menu>
    `;
  },
};

const updatedItems = [
  ...items,
  { disabled: true, label: 'Item 4', value: '4' },
];

export const ItemVariations: Story = {
  render: () => {
    return html`
      <modus-wc-menu
        active-item-value="2"
        aria-label="Example menu"
        .items=${updatedItems}
        menu-title="Items"
      ></modus-wc-menu>
    `;
  },
};

export const HorizontalMenu: Story = {
  render: () => {
    return html`
      <modus-wc-menu
        aria-label="Example menu"
        .items=${items}
        orientation="horizontal"
      ></modus-wc-menu>
    `;
  },
};
