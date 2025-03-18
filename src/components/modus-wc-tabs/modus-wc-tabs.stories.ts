import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IModusWcTab } from './modus-wc-tabs';
import { DaisySize } from '../types';

interface TabsArgs {
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
    size: 'md',
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3', disabled: true },
      { icon: 'home' },
    ],
    tabStyle: 'bordered',
  },
  argTypes: {
    tabs: {
      description: 'Array of tab objects defining the tabs to display',
      table: {
        type: {
          detail: `
            Interface: IModusWcTab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
          `,
        },
      },
    },
    tabStyle: {
      control: { type: 'select' },
      options: ['boxed', 'bordered', 'lifted', 'none'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['tabChange'],
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
  aria-label="Tab group"
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
  aria-label="Tab group"
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
