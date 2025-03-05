import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IModusWcBreadcrumb } from './modus-wc-breadcrumbs';
import { DaisySize } from '../types';

const items: IModusWcBreadcrumb[] = [
  {
    label: 'Root',
    url: '#',
  },
  {
    label: 'Subpage',
    url: '#',
  },
  {
    label: 'Current Page',
    url: '#',
  },
];

interface BreadcrumbArgs {
  'custom-class'?: string;
  items: IModusWcBreadcrumb[];
  size?: DaisySize;
}

const meta: Meta<BreadcrumbArgs> = {
  title: 'Components/Breadcrumbs',
  component: 'modus-wc-breadcrumbs',
  args: {
    items,
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['breadcrumbClick'],
    },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-breadcrumbs
  custom-class=${ifDefined(args['custom-class'])}
  .items=${args.items}
  size=${ifDefined(args.size)}
></modus-wc-breadcrumbs>
    `;
  },
};

export const Default: Story = { ...Template };

export const UnderlineLinks: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .underline-links a {
    text-decoration: underline;
  }
</style>
<modus-wc-breadcrumbs
  custom-class="underline-links"
  .items=${args.items}
  size=${ifDefined(args.size)}
></modus-wc-breadcrumbs>
    `;
  },
};
