import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';
import { DaisySize } from '../../types';
import { IModusWcTab } from './modus-wc-tabs';

interface TabsArgs {
  'aria-label': string;
  activeTabIndex?: number;
  'custom-class'?: string;
  size?: DaisySize;
  tabs: IModusWcTab[];
  tabStyle: 'boxed' | 'bordered' | 'lifted' | 'none';
}

const meta: Meta<TabsArgs> = {
  title: 'Components/Tabs',
  component: 'modus-wc-tabs',
  args: {
    'aria-label': 'Example Tab Group',
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3', disabled: true },
      { icon: 'home' },
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
  active-tab-index="${ifDefined(args.activeTabIndex)}"
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
  activeTabIndex: 1,
  tabs: [
    { label: 'Normal' },
    { label: 'Active' },
    { label: 'Disabled', disabled: true },
  ],
};

export const Icons: Story = {
  ...Template,
  args: {
    tabs: [
      { icon: 'home' },
      { icon: 'settings', iconPosition: 'left', label: 'Settings' },
      {
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
  active-tab-index="${ifDefined(args.activeTabIndex)}"
  aria-label="${args['aria-label']}"
  custom-class="${ifDefined(args['custom-class'])}"
  ?img-src="${args['img-src']}"
  tab-style="${ifDefined(args.tabStyle)}"
  .tabs="${args.tabs}"
  size="${ifDefined(args.size)}"
>
  <p slot="tab-0">
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
  <p slot="tab-1">
    input (noun) : information fed into a data processing system or computer
  </p>
  <p slot="tab-2">
    secret (noun) : kept from knowledge or view : hidden
  </p>
  <p slot="tab-3">
    snapshot (noun) : an impression or view of something brief or transitory
  </p>
</modus-wc-tabs>
    `;
  },
};
