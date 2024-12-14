import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';
import { DaisySize } from '../../types';

interface TabsArgs {
  alt: string;
  'aria-label': string;
  'custom-class'?: string;
  tabStyle: 'boxed' | 'bordered' | 'lifted';
  size: DaisySize;
}

const meta: Meta<TabsArgs> = {
  title: 'Components/Tabs',
  component: 'modus-wc-tabs',
  args: {
    alt: 'Example tabs',
    'aria-label': 'Example tabs',
    size: 'md',
  },
  argTypes: {
    tabStyle: {
      control: { type: 'radio' },
      options: [null, 'boxed', 'bordered', 'lifted'],
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
  alt="${args.alt}"
  aria-label="${args['aria-label']}"
  custom-class="${ifDefined(args['custom-class'])}"
  ?img-src="${args['img-src']}"
  tab-style="${ifDefined(args.tabStyle)}"
  size="${args.size}"
>
  <modus-wc-tab active>Tab 1</modus-wc-tab>
  <modus-wc-tab>Tab 2</modus-wc-tab>
  <modus-wc-tab disabled>Tab 3</modus-wc-tab>
  <modus-wc-tab>Tab 4</modus-wc-tab>
  <modus-wc-tab>Tab 5</modus-wc-tab>
  <p slot="panel">
    Modus (noun) ˈmōdəs' : a mode of procedure : a way of doing something
  </p>
</modus-wc-tabs>
    `;
  },
};

export const Default: Story = { ...Template };

// export const ActiveTabs: Story = {
//   render: (args) => {
//     // prettier-ignore
//     return html`
// <modus-wc-tabs
//   alt="${args.alt}"
//   aria-label="${args['aria-label']}"
//   custom-class="${ifDefined(args['custom-class'])}"
//   ?img-src="${args['img-src']}"
//   tab-style="boxed"
//   size="${args.size}"
// >
//   <modus-wc-tab active>Tab 1</modus-wc-tab>
//   <modus-wc-tab>Tab 2</modus-wc-tab>
//   <modus-wc-tab disabled>Tab 3</modus-wc-tab>
// </modus-wc-tabs>
//     `;
//   },
// };
