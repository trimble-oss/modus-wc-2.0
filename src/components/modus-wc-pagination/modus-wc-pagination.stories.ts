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
  'aria-label-values'?: IModusWcAriaLabelValues;
  count: number;
  'custom-class'?: string;
  page: number;
  size?: 'sm' | 'md' | 'lg';
}

const meta: Meta<PaginationArgs> = {
  title: 'Components/Pagination',
  component: 'modus-wc-pagination',
  args: {
    'aria-label-values': defaultLabelValues,
    count: 5,
    'custom-class': '',
    page: 1,
    size: 'md',
  },
  argTypes: {
    'aria-label-values': {
      description: 'Custom aria label values for pagination buttons',
      table: {
        type: {
          detail: `
            Interface: IModusWcAriaLabelValues
            Properties:
            - firstPage (string, optional): Aria label for the first page button
            - lastPage (string, optional): Aria label for the last page button
            - nextPage (string, optional): Aria label for the next page button
            - page (string, optional): Aria label for the page number button. Use {0} as placeholder for the page number
            - previousPage (string, optional): Aria label for the previous page button
          `,
        },
      },
    },
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
    docs: {
      description: {
        component: `
## Event Interface Documentation

The pageChange event emits an object with the following interface:

\`\`\`typescript
interface IModusWcPageChange {
  /** The number of the newly selected page */
  newPage: number;
  /** The number of the previously selected page */
  prevPage: number;
}
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<PaginationArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-pagination
      .ariaLabelValues=${args['aria-label-values']}
      count=${args.count}
      custom-class=${ifDefined(args['custom-class'])}
      page=${args.page}
      size=${ifDefined(args.size)}
    ></modus-wc-pagination>
  `,
};
