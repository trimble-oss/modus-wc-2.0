import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface PaginationArgs {
  'aria-label-first-page'?: string;
  'aria-label-last-page'?: string;
  'aria-label-next-page'?: string;
  'aria-label-page'?: string;
  'aria-label-previous-page'?: string;
  count: number;
  'custom-class'?: string;
  page: number;
  size?: 'sm' | 'md' | 'lg';
}

const meta: Meta<PaginationArgs> = {
  title: 'Components/Pagination',
  component: 'modus-wc-pagination',
  args: {
    'aria-label-first-page': 'First page',
    'aria-label-last-page': 'Last page',
    'aria-label-next-page': 'Next page',
    'aria-label-page': 'Page {0}',
    'aria-label-previous-page': 'Previous page',
    count: 5,
    'custom-class': '',
    page: 1,
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
      aria-label-first-page=${ifDefined(args['aria-label-first-page'])}
      aria-label-last-page=${ifDefined(args['aria-label-last-page'])}
      aria-label-next-page=${ifDefined(args['aria-label-next-page'])}
      aria-label-page=${ifDefined(args['aria-label-page'])}
      aria-label-previous-page=${ifDefined(args['aria-label-previous-page'])}
      count=${args.count}
      custom-class=${ifDefined(args['custom-class'])}
      page=${args.page}
      size=${ifDefined(args.size)}
    ></modus-wc-pagination>
  `,
};
