import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IModusWcBreadcrumb } from './modus-wc-breadcrumbs';
import { DaisySize } from '../../types';

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
