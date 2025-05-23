/* eslint-disable @typescript-eslint/no-explicit-any */

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ITableColumn } from './modus-wc-table';
import { IAutocompleteItem } from '../modus-wc-autocomplete/modus-wc-autocomplete';
import { Density } from '../types';

interface TableStoryArgs {
  'custom-class'?: string;
  'current-page'?: number;
  'page-size-options'?: number[];
  'selected-row-ids'?: string[];
  'show-page-size-selector'?: boolean;
  columns?: ITableColumn[];
  data?: Record<string, unknown>[];
  density?: Density;
  editable?: boolean;
  hover?: boolean;
  paginated?: boolean;
  selectable?: 'none' | 'single' | 'multi';
  sortable?: boolean;
  zebra?: boolean;
}

const meta: Meta<TableStoryArgs> = {
  title: 'Components/Table',
  component: 'modus-wc-table',

  argTypes: {
    columns: {
      control: 'object',
      description: 'An array of column definitions.',
    },
    data: {
      control: 'object',
      description: 'An array of data objects.',
    },
    density: {
      control: {
        type: 'select',
      },
      options: ['condensed', 'comfortable', 'relaxed'],
      description:
        'The density of the table, used to save space or increase readability.',
    },
    hover: {
      control: 'boolean',
      description: 'Enable hover effect on table rows.',
      defaultValue: true,
    },
    sortable: {
      control: 'boolean',
      description: 'Enable sorting functionality for sortable columns.',
      defaultValue: true,
    },
    paginated: {
      control: 'boolean',
      description: 'Enable pagination for the table.',
      defaultValue: false,
    },
    'show-page-size-selector': {
      control: 'boolean',
      description: 'Show/hide the page size selector in pagination.',
      defaultValue: true,
    },
    'custom-class': {
      control: 'text',
      description: 'Custom CSS class to apply to the inner div.',
    },
    selectable: {
      control: {
        type: 'select',
      },
      options: ['none', 'single', 'multi'],
      description:
        "Row selection mode: 'none' for no selection, 'single' for single row, 'multi' for multiple rows.",
      defaultValue: 'none',
    },
    zebra: {
      control: 'boolean',
      description:
        'Zebra striped tables differentiate rows by styling them in an alternating fashion.',
      defaultValue: false,
    },
    'current-page': {
      control: 'number',
      description: 'The current page number in pagination (1-based index).',
      defaultValue: 1,
    },
    'page-size-options': {
      control: 'object',
      description: 'Available options for the number of rows per page.',
      defaultValue: [5, 10, 15],
    },
    'selected-row-ids': {
      control: 'object',
      description:
        'Array of selected row IDs. Used for controlled selection state.',
      defaultValue: [],
    },
    editable: {
      control: 'boolean',
      description:
        'Enable cell editing. Either a boolean (all rows) or a predicate per row.',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<TableStoryArgs>;

// Helper functions
const createDemoColumns = (): ITableColumn[] => [
  {
    id: 'id',
    header: 'ID',
    accessor: 'id',
    width: '60px',
  },
  {
    id: 'name',
    header: 'Name',
    accessor: 'name',
    width: '100px',
  },
  {
    id: 'email',
    header: 'Email',
    accessor: 'email',
  },
  {
    id: 'role',
    header: 'Role',
    accessor: 'role',
  },
];

const createSortableColumns = (): ITableColumn[] => {
  const columns = createDemoColumns();
  return columns.map((col) => ({ ...col, sortable: true }));
};

const createDemoData = (count = 5): Record<string, any>[] => {
  const data: Record<string, any>[] = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: i.toString(),
      name: `User ${i}`,
      email: `user${i}@example.com`,
      role: i % 2 === 0 ? 'Admin' : 'User',
    });
  }
  return data;
};

export const Default: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html`
      <modus-wc-table
        .columns=${columns}
        .data=${data}
        .density=${args.density}
        .hover=${args.hover}
        .sortable=${args.sortable}
        .paginated=${args.paginated}
        .showPageSizeSelector=${args['show-page-size-selector']}
        .customClass=${args['custom-class']}
        .selectable=${args.selectable}
        .zebra=${args.zebra}
        .currentPage=${args['current-page']}
        .pageSizeOptions=${args['page-size-options']}
        .selectedRowIds=${args['selected-row-ids']}
        .editable=${args.editable}
        @rowClick=${action('rowClick')}
        @sortChange=${action('sortChange')}
        @paginationChange=${action('paginationChange')}
        @rowSelectionChange=${action('rowSelectionChange')}
        @cellEditStart=${action('cellEditStart')}
        @cellEditCommit=${action('cellEditCommit')}
      ></modus-wc-table>
    `;
  },
  args: {
    density: 'comfortable',
    hover: false,
    sortable: true,
    paginated: false,
    'show-page-size-selector': true,
    'custom-class': '',
    selectable: 'none',
    zebra: false,
    'current-page': 1,
    'page-size-options': [5, 10, 15],
    'selected-row-ids': [],
    editable: false,
  },
};

export const Hover: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html`
      <modus-wc-table
        .columns=${columns}
        .data=${data}
        .density=${args.density}
        .hover=${args.hover}
        .sortable=${args.sortable}
        .paginated=${args.paginated}
        .showPageSizeSelector=${args['show-page-size-selector']}
        .customClass=${args['custom-class']}
        .selectable=${args.selectable}
        .zebra=${args.zebra}
        .currentPage=${args['current-page']}
        .pageSizeOptions=${args['page-size-options']}
        .selectedRowIds=${args['selected-row-ids']}
        .editable=${args.editable}
        @rowClick=${action('rowClick')}
      ></modus-wc-table>
    `;
  },
  args: {
    density: 'comfortable',
    hover: true,
  },
};

export const Sorting: Story = {
  render: (args) => {
    const columns = args.columns || createSortableColumns();
    const data = args.data || createDemoData();
    return html`
      <modus-wc-table
        .columns=${columns}
        .data=${data}
        .density=${args.density}
        .hover=${args.hover}
        .sortable=${args.sortable}
        .paginated=${args.paginated}
        .showPageSizeSelector=${args['show-page-size-selector']}
        .customClass=${args['custom-class']}
        .selectable=${args.selectable}
        .zebra=${args.zebra}
        .currentPage=${args['current-page']}
        .pageSizeOptions=${args['page-size-options']}
        .selectedRowIds=${args['selected-row-ids']}
        .editable=${args.editable}
        @sortChange=${action('sortChange')}
      ></modus-wc-table>
    `;
  },
  args: {
    density: 'comfortable',
    sortable: true,
  },
};

export const Pagination: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData(15);
    return html`
      <modus-wc-table
        .columns=${columns}
        .data=${data}
        .density=${args.density}
        .hover=${args.hover}
        .sortable=${args.sortable}
        .paginated=${args.paginated}
        .showPageSizeSelector=${args['show-page-size-selector']}
        .customClass=${args['custom-class']}
        .selectable=${args.selectable}
        .zebra=${args.zebra}
        .currentPage=${args['current-page']}
        .pageSizeOptions=${args['page-size-options']}
        .selectedRowIds=${args['selected-row-ids']}
        .editable=${args.editable}
        @paginationChange=${action('paginationChange')}
      ></modus-wc-table>
    `;
  },
  args: {
    density: 'comfortable',
    paginated: true,
    'show-page-size-selector': true,
  },
};

export const CheckBoxRowSelection: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html`
      <modus-wc-table
        .columns=${columns}
        .data=${data}
        .density=${args.density}
        .hover=${args.hover}
        .sortable=${args.sortable}
        .paginated=${args.paginated}
        .showPageSizeSelector=${args['show-page-size-selector']}
        .customClass=${args['custom-class']}
        .selectable=${args.selectable}
        .zebra=${args.zebra}
        .currentPage=${args['current-page']}
        .pageSizeOptions=${args['page-size-options']}
        .selectedRowIds=${args['selected-row-ids']}
        .editable=${args.editable}
        @rowSelectionChange=${action('rowSelectionChange')}
      ></modus-wc-table>
    `;
  },
  args: {
    density: 'comfortable',
    selectable: 'multi',
  },
};

export const InlineEditing: Story = {
  render: (args) => {
    const columns: ITableColumn[] = [
      {
        id: 'id',
        header: 'ID',
        accessor: 'id',
        width: '20px',
      },
      {
        id: 'name',
        header: 'Name',
        accessor: 'name',
        editor: 'text',
      },
      {
        id: 'status',
        header: 'Status',
        accessor: 'status',
        editor: 'custom',
        customEditorRenderer: (value, onCommit) => {
          const container = document.createElement('div');
          container.style.width = '100%';

          const autocomplete = document.createElement('modus-wc-autocomplete');
          autocomplete.items = [
            { label: 'Active', value: 'Active', visibleInMenu: true },
            { label: 'Inactive', value: 'Inactive', visibleInMenu: true },
            { label: 'Pending', value: 'Pending', visibleInMenu: true },
          ];
          autocomplete.value = value as string;
          autocomplete.style.width = '100%';

          const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
            onCommit(e.detail.value);
          };

          autocomplete.addEventListener(
            'itemSelect',
            handleItemSelect as EventListener
          );
          container.appendChild(autocomplete);
          return container;
        },
        cellRenderer: (value) => {
          const statusColors = {
            Active: 'green',
            Inactive: 'gray',
            Pending: 'blue',
          };
          const color = statusColors[value as string] || 'black';
          const span = document.createElement('span');
          span.textContent = value as string;
          span.style.color = color;
          span.style.fontWeight = 'bold';
          return span;
        },
      },
    ];

    const data = [
      { id: '1', name: 'John Doe', status: 'Active' },
      { id: '2', name: 'Jane Smith', status: 'Inactive' },
      { id: '3', name: 'Bob Johnson', status: 'Pending' },
    ];

    return html`
      <modus-wc-table
        .columns=${columns}
        .data=${data}
        .density=${args.density}
        .hover=${args.hover}
        .sortable=${args.sortable}
        .paginated=${args.paginated}
        .showPageSizeSelector=${args['show-page-size-selector']}
        .customClass=${args['custom-class']}
        .selectable=${args.selectable}
        .zebra=${args.zebra}
        .currentPage=${args['current-page']}
        .pageSizeOptions=${args['page-size-options']}
        .selectedRowIds=${args['selected-row-ids']}
        .editable=${true}
        @cellEditStart=${action('cellEditStart')}
        @cellEditCommit=${action('cellEditCommit')}
      ></modus-wc-table>
    `;
  },
  args: {
    density: 'comfortable',
    hover: true,
    sortable: true,
    paginated: false,
    'show-page-size-selector': true,
    'custom-class': '',
    selectable: 'none',
    zebra: false,
    'current-page': 1,
    'page-size-options': [5, 10, 15],
    'selected-row-ids': [],
  },
};
