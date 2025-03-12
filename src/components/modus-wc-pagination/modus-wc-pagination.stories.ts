import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IModusWcAriaLabelValues } from './modus-wc-pagination';

const defaultLabelValues: IModusWcAriaLabelValues = {
  firstPage: 'First page',
  lastPage: 'Last page',
  nextPage: 'Next page',
  page: 'Page {0}',
  previousPage: 'Previous page',
};

interface PaginationArgs {
  'arial-label-values'?: IModusWcAriaLabelValues;
  count: number;
  'custom-class'?: string;
  page: number;
  size?: 'sm' | 'md' | 'lg';
}

const meta: Meta<PaginationArgs> = {
  title: 'Components/Pagination',
  component: 'modus-wc-pagination',
  args: {
    'arial-label-values': defaultLabelValues,
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
      .ariaLabelValues=${args['arial-label-values']}
      count=${args.count}
      custom-class=${ifDefined(args['custom-class'])}
      page=${args.page}
      size=${ifDefined(args.size)}
    ></modus-wc-pagination>
  `,
};
