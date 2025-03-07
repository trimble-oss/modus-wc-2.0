import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface PaginationArgs {
  count: number;
  'custom-class'?: string;
  page: number;
  'show-first-last'?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const meta: Meta<PaginationArgs> = {
  title: 'Components/Pagination',
  component: 'modus-wc-pagination',
  args: {
    count: 5,
    'custom-class': '',
    page: 1,
    'show-first-last': true,
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['pageChange'],
    },
  },
};

export default meta;

type Story = StoryObj<PaginationArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-pagination
      count=${args.count}
      custom-class=${ifDefined(args['custom-class'])}
      page=${args.page}
      ?show-first-last=${args['show-first-last']}
      size=${ifDefined(args.size)}
    ></modus-wc-pagination>
  `,
};
