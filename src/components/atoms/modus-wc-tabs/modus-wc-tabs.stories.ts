import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';
import { DaisySize } from '../../types';
import { IModusWcTab } from './modus-wc-tabs';

interface TabsArgs {
  'aria-label': string;
  'custom-class'?: string;
  size: DaisySize;
  tabs: IModusWcTab[];
  tabStyle: 'boxed' | 'bordered' | 'lifted' | 'none';
}

const meta: Meta<TabsArgs> = {
  title: 'Components/Tabs',
  component: 'modus-wc-tabs',
  args: {
    'aria-label': 'Example Tab Group',
    size: 'md',
    tabStyle: 'bordered',
    tabs: [
      { id: 'tab1', label: 'Tab 1', active: true },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3', disabled: true },
      { id: 'tab4', icon: 'home' },
    ],
  },
  argTypes: {
    tabStyle: {
      control: { type: 'radio' },
      options: ['boxed', 'bordered', 'lifted', 'none'],
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<TabsArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tabs
  aria-label="${args['aria-label']}"
  tab-style="${ifDefined(args.tabStyle)}"
  .tabs="${args.tabs}"
  size="${ifDefined(args.size)}"
>
</modus-wc-tabs>
    `;
  },
};

export const Default: Story = { ...Template };

export const ActiveAndDisabled: Story = { ...Template };
ActiveAndDisabled.args = {
  tabs: [
    { id: 'tab1', label: 'Active', active: true },
    { id: 'tab2', label: 'Normal' },
    { id: 'tab3', label: 'Disabled', disabled: true },
  ],
};

export const Icons: Story = {
  ...Template,
  args: {
    tabs: [
      { id: 'tab1', icon: 'home' },
      { id: 'tab2', icon: 'settings', iconPosition: 'left', label: 'Settings' },
      {
        id: 'tab3',
        icon: 'alert',
        iconPosition: 'right',
        label: 'Alerts',
      },
    ],
  },
};

export const TabsWithPanel: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tabs
  aria-label="${args['aria-label']}"
  custom-class="${ifDefined(args['custom-class'])}"
  ?img-src="${args['img-src']}"
  tab-style="${ifDefined(args.tabStyle)}"
  .tabs="${args.tabs}"
  size="${ifDefined(args.size)}"
>
  <p>
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
</modus-wc-tabs>
    `;
  },
};
