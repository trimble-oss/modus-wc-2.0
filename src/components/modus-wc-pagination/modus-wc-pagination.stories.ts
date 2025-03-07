import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface PaginationArgs {
  count: number;
  page: number;
  'show-first-last'?: boolean;
  'visible-page-buttons'?: number;
}

const meta: Meta<PaginationArgs> = {
  title: 'Components/Pagination',
  component: 'modus-wc-pagination',
  args: {
    count: 5,
    page: 1,
    'show-first-last': true,
    'visible-page-buttons': 5,
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
      page=${args.page}
      ?show-first-last=${args['show-first-last']}
      visible-page-buttons=${ifDefined(args['visible-page-buttons'])}
    ></modus-wc-pagination>
  `,
};
