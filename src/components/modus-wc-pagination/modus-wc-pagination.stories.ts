import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IAriaLabelValues } from './modus-wc-pagination';

const defaultLabelValues: IAriaLabelValues = {
  firstPage: 'First page',
  lastPage: 'Last page',
  nextPage: 'Next page',
  page: 'Page {0}',
  previousPage: 'Previous page',
};

interface PaginationArgs {
  'aria-label-values'?: IAriaLabelValues;
  count: number;
  'custom-class'?: string;
  'next-button-text'?: string;
  page: number;
  'prev-button-text'?: string;
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
            Interface: IAriaLabelValues
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
interface IPageChange {
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
      next-button-text="${ifDefined(args['next-button-text'])}"
      page=${args.page}
      prev-button-text="${ifDefined(args['prev-button-text'])}"
      size=${ifDefined(args.size)}
    ></modus-wc-pagination>
  `,
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 the pagination component incorporated ellipses to indicate page skips. In 2.0, the component
  has been simplified to only show at most 5 page buttons relative to current page with previous/next
  and first/last navigation buttons.
  - In 1.0 the \`active-page\` prop was used, while 2.0 uses \`page\` instead.
  - The \`pageChange\` event in 1.0 emitted just the page number value. In 2.0, it emits an object
  with \`newPage\` and \`prevPage\` properties.
  - Size values have changed from verbose names (\`small\`, \`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop              | 2.0 Prop           | Notes                                                       |
|-----------------------|--------------------|-------------------------------------------------------------|
| active-page           | page               |                                                             |
| aria-label            | aria-label         |                                                             |
| max-page              | count              |                                                             |
| min-page              |                    | Not carried over, minimum page is always 1                  |
| next-page-button-text | next-button-text   |                                                             |
| prev-page-button-text | prev-button-text   |                                                             |
| size                  | size               | \`small\` → \`sm\`, \`medium\` → \`md\`, \`large\` → \`lg\` |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes                                                   |
|-------------|-------------|---------------------------------------------------------|
| pageChange  | pageChange  | Now emits an object with \`newPage\` and \`prevPage\`   |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
