/* eslint-disable @typescript-eslint/no-explicit-any */

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/web-components';
import { ColumnDef, getExpandedRowModel } from '@tanstack/table-core';
import { html } from 'lit';
import { ITableColumn } from './modus-wc-table';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { IAutocompleteItem } from '../types';
import { Density } from '../types';
import {
  EXPANDABLE_SUBROWS_STORY_DOCS,
  getExpandableSubrowsSourceCode,
  TABLE_MODE_DOCS_INTRO,
} from './modus-wc-table.advanced.source';

interface TableStoryArgs {
  'custom-class'?: string;
  'current-page'?: number;
  'is-row-selectable'?: (row: Record<string, unknown>) => boolean;
  'page-size-options'?: number[];
  'selected-row-ids'?: string[];
  'show-page-size-selector'?: boolean;
  caption?: string;
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
  argTypes: {
    columns: {
      control: 'object',
      description: 'An array of column definitions.',
      table: {
        type: {
          detail: `
            Interface: ITableColumn
            Properties:
            - accessor (string): Key to access data from row object
            - cellRenderer? (function): Custom cell renderer (value, row) => string | HTMLElement
            - className? (string): Class names for the column
            - header (string | HTMLElement): Header content
            - id (string): Unique identifier for the column
            - width? (string): Width style (e.g., '200px', '50%')
            - sortable? (boolean): Whether the column is sortable
            - editor? ('text' | 'number' | 'autocomplete' | 'date' | 'custom'): Built-in editor type
            - editorProps? (object): Extra props specific to the editor component
            - customEditorRenderer? (function): Custom renderer for 'custom' editor
            - editorTemplate? (string): Raw HTML string for editor, with \`\${value}\` placeholder
            - editorSetup? (function): Runs after the editor element is added to the DOM
          `,
        },
      },
    },
    data: {
      control: 'object',
      description: 'An array of data objects.',
      table: {
        type: {
          detail: `
            Data should be an array of objects, where each object represents a row and each key matches a column accessor.

            Example:
            [
              { id: '1', name: 'Alice', email: 'alice@example.com', role: 'Admin' },
              { id: '2', name: 'Bob', email: 'bob@example.com', role: 'User' }
            ]

            - Each property in the object should correspond to a column's accessor value.
            - The 'id' property is recommended for row identification and selection.
          `,
        },
      },
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
    caption: {
      control: 'text',
      description:
        'Accessibility caption for the table that is visually hidden but available to screen readers.',
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
    'is-row-selectable': {
      control: false,
      description:
        'Per-row predicate function controlling row selection eligibility.',
      table: {
        type: { summary: '(row: Record<string, unknown>) => boolean' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: TABLE_MODE_DOCS_INTRO,
      },
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

const createStatusColumns = (): ITableColumn[] => [
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
    width: '140px',
  },
  {
    id: 'email',
    header: 'Email',
    accessor: 'email',
  },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    width: '120px',
    cellRenderer: (value) => {
      const span = document.createElement('span');
      const label = typeof value === 'string' ? value : '';
      span.textContent = label;
      span.style.fontWeight = label === 'Locked' ? '600' : '400';
      span.style.color =
        label === 'Locked'
          ? 'var(--modus-wc-color-danger, #da212c)'
          : 'var(--modus-wc-color-base-content, inherit)';
      return span;
    },
  },
];

const createStatusSelectionData = (): Record<string, unknown>[] => [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'Locked',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    status: 'Active',
  },
  {
    id: '4',
    name: 'Carol White',
    email: 'carol.white@example.com',
    status: 'Locked',
  },
  {
    id: '5',
    name: 'David Lee',
    email: 'david.lee@example.com',
    status: 'Active',
  },
];

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
        .caption=${args.caption}
        @rowClick=${action('rowClick')}
        @sortChange=${action('sortChange')}
        @paginationChange=${action('paginationChange')}
        @rowSelectionChange=${action('rowSelectionChange')}
        @cellEditStart=${action('cellEditStart')}
        @cellEditCommit=${action('cellEditCommit')}
      ></modus-wc-table>
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
        // table.hover = 'false';
      </script>
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };
        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
      </script>
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createSortableColumns = () => {
        //   const columns = createDemoColumns();
        //   return columns.map((col) => ({ ...col, sortable: true }));
        // };

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createSortableColumns();
        // table.data = createDemoData();
      </script>
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData(15);
        // table.paginated = true;
      </script>
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const createDemoColumns = () => [
        //   {
        //     id: 'id',
        //     header: 'ID',
        //     accessor: 'id',
        //     width: '60px',
        //   },
        //   {
        //     id: 'name',
        //     header: 'Name',
        //     accessor: 'name',
        //     width: '100px',
        //   },
        //   {
        //     id: 'email',
        //     header: 'Email',
        //     accessor: 'email',
        //   },
        //   {
        //     id: 'role',
        //     header: 'Role',
        //     accessor: 'role',
        //   },
        // ];

        // const createDemoData = (count = 5) => {
        //   const data = [];
        //   for (let i = 1; i <= count; i++) {
        //     data.push({
        //       id: i.toString(),
        //       name: \`User \${i}\`,
        //       email: \`user\${i}@example.com\`,
        //       role: i % 2 === 0 ? 'Admin' : 'User',
        //     });
        //   }
        //   return data;
        // };

        // const table = document.querySelector('modus-wc-table');
        // table.columns = createDemoColumns();
        // table.data = createDemoData();
        // table.selectable = 'multi';
      </script>
    `;
  },
  args: {
    density: 'comfortable',
    selectable: 'multi',
  },
};

export const PartialRowSelection: Story = {
  render: (args) => {
    const columns = createStatusColumns();
    const data = createStatusSelectionData();
    const statusOptions = [
      { label: 'Active', value: 'Active' },
      { label: 'Locked', value: 'Locked' },
    ];

    return html`
      <style>
        .partial-select {
          margin-bottom: var(--modus-wc-size-xl);
          max-width: fit-content;
        }
      </style>
      <modus-wc-select
        custom-class="partial-select"
        id="partial-row-status-select"
        label="Non-selectable rows"
        .options=${statusOptions}
        value="Locked"
      ></modus-wc-select>
      <modus-wc-table
        id="partial-row-selection-table"
        .columns=${columns}
        .data=${data}
        .density=${args.density}
        .hover=${args.hover ?? true}
        .sortable=${args.sortable}
        .paginated=${args.paginated}
        .showPageSizeSelector=${args['show-page-size-selector']}
        .customClass=${args['custom-class']}
        .selectable=${args.selectable}
        .zebra=${args.zebra}
        .currentPage=${args['current-page']}
        .pageSizeOptions=${args['page-size-options']}
        .selectedRowIds=${args['selected-row-ids']}
        caption="Team members with partial row selection"
        @rowClick=${action('rowClick')}
        @rowSelectionChange=${action('rowSelectionChange')}
      ></modus-wc-table>
      <script>
        (() => {
          const select = document.getElementById('partial-row-status-select');
          const table = document.getElementById('partial-row-selection-table');
          if (!select || !table) {
            return;
          }

          const applyIsRowSelectable = () => {
            const status = select.value || 'Locked';
            table.isRowSelectable = (row) => row.status !== status;
          };

          select.addEventListener('inputChange', applyIsRowSelectable);
          applyIsRowSelectable();
        })();
      </script>
    `;
  },
  parameters: {
    controls: {
      include: [
        'selectable',
        'selected-row-ids',
        'density',
        'hover',
        'sortable',
        'zebra',
      ],
    },
    docs: {
      description: {
        story: `
Use \`isRowSelectable\` to control which rows can be selected when \`selectable\` is \`single\` or \`multi\`.

**Type:** \`(row: Record<string, unknown>) => boolean\`

**Default:** All rows are selectable when the prop is omitted.

**Usage:**

\`\`\`js
table.isRowSelectable = (row) => row.status !== 'Locked';
\`\`\`

Return \`true\` when the row may be selected; return \`false\` to disable its selection checkbox. Ineligible rows stay interactive—cell clicks and \`rowClick\` still work, but row clicks do not toggle selection. Select-all and \`selectedRowIds\` ignore ineligible rows automatically.

Storybook Controls cannot edit function props, so this story uses a **Non-selectable status** dropdown to pick which status is excluded (\`Active\` or \`Locked\`). That maps to:

\`\`\`js
isRowSelectable = (row) => row.status !== selectedStatus;
\`\`\`

Use Controls for **selectable** mode and **selected-row-ids**.
        `,
      },
    },
  },
  args: {
    density: 'comfortable',
    hover: true,
    sortable: true,
    paginated: false,
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

          setTimeout(() => {
            const input = autocomplete.querySelector('input');
            input?.focus();
          }, 0);

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
      {
        id: 'dueDate',
        header: 'Due Date',
        accessor: 'dueDate',
        editor: 'custom',
        customEditorRenderer: (value, onCommit) => {
          const container = document.createElement('div');
          container.style.width = '100%';

          const datePicker = document.createElement('modus-wc-date');
          datePicker.value = value as string;
          datePicker.style.width = '100%';
          datePicker.bordered = false;

          let isCommitting = false;

          const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              const input = datePicker.querySelector('input');
              if (input && input.value && !isCommitting) {
                isCommitting = true;
                onCommit(input.value);
              }
            } else if (e.key === 'Escape') {
              e.preventDefault();
              if (!isCommitting) {
                isCommitting = true;
                onCommit(value || '');
              }
            } else if (e.key === 'Tab') {
              // Allow Tab to commit and move to next cell
              const input = datePicker.querySelector('input');
              if (input && input.value && !isCommitting) {
                isCommitting = true;
                onCommit(input.value);
              }
            }
          };

          // Only commit when focus leaves the entire container (not just the input)
          const handleContainerBlur = (e: FocusEvent) => {
            const relatedTarget = e.relatedTarget as HTMLElement;

            // If focus is moving within the container or date picker, don't commit
            if (
              relatedTarget &&
              (container.contains(relatedTarget) ||
                datePicker.shadowRoot?.contains(relatedTarget))
            ) {
              return;
            }

            const calendar = datePicker.shadowRoot?.querySelector(
              '[class*="calendar"]'
            );
            if (calendar) {
              return;
            }

            const input = datePicker.querySelector('input');
            if (input && input.value && !isCommitting) {
              isCommitting = true;
              setTimeout(() => onCommit(input.value), 50);
            }
          };

          container.addEventListener('keydown', handleKeyDown);
          container.addEventListener('focusout', handleContainerBlur);
          container.appendChild(datePicker);

          setTimeout(() => {
            const input = datePicker.querySelector('input');
            input?.focus();
          }, 0);

          return container;
        },
        cellRenderer: (value): string => {
          if (!value) return '-';

          // Parse dd-mm-yyyy format from date picker
          const dateString = value as string;
          const parts = dateString.split(/[-/]/);

          let date: Date;
          if (parts.length === 3 && parts[0].length <= 2) {
            // Assume dd-mm-yyyy or dd/mm/yyyy format
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
            const year = parseInt(parts[2], 10);
            date = new Date(year, month, day);
          } else {
            // Fallback to default parsing
            date = new Date(dateString);
          }

          // Check if date is valid
          if (isNaN(date.getTime())) {
            return dateString; // Return original value if parsing fails
          }

          // Format date with dashes: dd-mm-yyyy
          const formattedDay = date.getDate().toString().padStart(2, '0');
          const formattedMonth = (date.getMonth() + 1)
            .toString()
            .padStart(2, '0');
          const formattedYear = date.getFullYear();

          return `${formattedDay}-${formattedMonth}-${formattedYear}`;
        },
      },
    ];

    const data = [
      {
        id: '1',
        name: 'John Doe',
        status: 'Active',
        dueDate: '15-10-2025',
      },
      {
        id: '2',
        name: 'Jane Smith',
        status: 'Inactive',
        dueDate: '20-11-2025',
      },
      {
        id: '3',
        name: 'Bob Johnson',
        status: 'Pending',
        dueDate: '05-12-2025',
      },
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
      <script>
        // This script provides sample data and configuration for the modus-wc-table demonstration.
        // const columns = [
        //     {
        //       id: 'id',
        //       header: 'ID',
        //       accessor: 'id',
        //       width: '20px',
        //     },
        //     {
        //       id: 'name',
        //       header: 'Name',
        //       accessor: 'name',
        //       editor: 'text',
        //     },
        //     {
        //       id: 'status',
        //       header: 'Status',
        //       accessor: 'status',
        //       editor: 'custom',
        //       customEditorRenderer: (value, onCommit) => {
        //         const container = document.createElement('div');
        //         container.style.width = '100%';

        //         const autocomplete = document.createElement('modus-wc-autocomplete');
        //         autocomplete.items = [
        //           { label: 'Active', value: 'Active', visibleInMenu: true },
        //           { label: 'Inactive', value: 'Inactive', visibleInMenu: true },
        //           { label: 'Pending', value: 'Pending', visibleInMenu: true },
        //         ];
        //         autocomplete.value = value;
        //         autocomplete.style.width = '100%';

        //         const handleItemSelect = (e) => {
        //           onCommit(e.detail.value);
        //         };

        //         autocomplete.addEventListener(
        //           'itemSelect',
        //           handleItemSelect
        //         );
        //         container.appendChild(autocomplete);

        //         setTimeout(() => {
        //           const input = autocomplete.querySelector('input');
        //           input?.focus();
        //         }, 0);

        //         return container;
        //       },
        //       cellRenderer: (value) => {
        //         const statusColors = {
        //           Active: 'green',
        //           Inactive: 'gray',
        //           Pending: 'blue',
        //         };
        //         const color = statusColors[value] || 'black';
        //         const span = document.createElement('span');
        //         span.textContent = value;
        //         span.style.color = color;
        //         span.style.fontWeight = 'bold';
        //         return span;
        //       },
        //     },
        //     {
        //       id: 'dueDate',
        //       header: 'Due Date',
        //       accessor: 'dueDate',
        //       editor: 'custom',
        //       customEditorRenderer: (value, onCommit) => {
        //         const container = document.createElement('div');
        //         container.style.width = '100%';

        //     const datePicker = document.createElement('modus-wc-date');
        //     datePicker.value = value;
        //     datePicker.style.width = '100%';
        //     datePicker.bordered = false;

        //     let isCommitting = false;

        //     const handleKeyDown = (e) => {
        //       if (e.key === 'Enter') {
        //         e.preventDefault();
        //         const input = datePicker.querySelector('input');
        //         if (input && input.value && !isCommitting) {
        //           isCommitting = true;
        //           onCommit(input.value);
        //         }
        //       } else if (e.key === 'Escape') {
        //         e.preventDefault();
        //         if (!isCommitting) {
        //           isCommitting = true;
        //           onCommit(value || '');
        //         }
        //       } else if (e.key === 'Tab') {
        //         const input = datePicker.querySelector('input');
        //         if (input && input.value && !isCommitting) {
        //           isCommitting = true;
        //           onCommit(input.value);
        //         }
        //       }
        //     };

        //     const handleContainerBlur = (e) => {
        //       const relatedTarget = e.relatedTarget;

        //       if (relatedTarget && (container.contains(relatedTarget) || datePicker.shadowRoot?.contains(relatedTarget))) {
        //         return;
        //       }

        //       const calendar = datePicker.shadowRoot?.querySelector('[class*="calendar"]');
        //       if (calendar) {
        //         return;
        //       }

        //       const input = datePicker.querySelector('input');
        //       if (input && input.value && !isCommitting) {
        //         isCommitting = true;
        //         setTimeout(() => onCommit(input.value), 50);
        //       }
        //     };

        //     container.addEventListener('keydown', handleKeyDown);
        //     container.addEventListener('focusout', handleContainerBlur);
        //     container.appendChild(datePicker);

        //         setTimeout(() => {
        //           const input = datePicker.querySelector('input');
        //           input?.focus();
        //         }, 0);

        //         return container;
        //       },
        //       cellRenderer: (value) => {
        //         if (!value) return '-';

        //         // Parse dd-mm-yyyy format from date picker
        //         const dateString = value;
        //         const parts = dateString.split(/[-/]/);

        //         let date;
        //         if (parts.length === 3 && parts[0].length <= 2) {
        //           // Assume dd-mm-yyyy or dd/mm/yyyy format
        //           const day = parseInt(parts[0], 10);
        //           const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
        //           const year = parseInt(parts[2], 10);
        //           date = new Date(year, month, day);
        //         } else {
        //           // Fallback to default parsing
        //           date = new Date(dateString);
        //         }

        //         // Check if date is valid
        //         if (isNaN(date.getTime())) {
        //           return dateString; // Return original value if parsing fails
        //         }

        //         // Format date with dashes: dd-mm-yyyy
        //         const formattedDay = date.getDate().toString().padStart(2, '0');
        //         const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');
        //         const formattedYear = date.getFullYear();

        //         return \`\${formattedDay}-\${formattedMonth}-\${formattedYear}\`;
        //       },
        //     },
        //   ];

        //   const data = [
        //     {
        //       id: '1',
        //       name: 'John Doe',
        //       status: 'Active',
        //       dueDate: '15-10-2025',
        //     },
        //     {
        //       id: '2',
        //       name: 'Jane Smith',
        //       status: 'Inactive',
        //       dueDate: '20-11-2025',
        //     },
        //     {
        //       id: '3',
        //       name: 'Bob Johnson',
        //       status: 'Pending',
        //       dueDate: '05-12-2025',
        //     },
        //   ];
        //   const table = document.querySelector('modus-wc-table');
        //   table.columns = columns;
        //   table.data = data;
        //   table.editable = true;
      </script>
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
  },
};

interface HierarchicalRow extends Record<string, unknown> {
  id: string;
  name: string;
  budget: number;
  subRows?: HierarchicalRow[];
}

const createHierarchicalData = (): HierarchicalRow[] => [
  {
    id: 'dept-1',
    name: 'Engineering',
    budget: 500000,
    subRows: [
      {
        id: 'team-1',
        name: 'Frontend',
        budget: 200000,
        subRows: [
          { id: 'emp-1', name: 'Alice Chen', budget: 120000 },
          { id: 'emp-2', name: 'Bob Martinez', budget: 80000 },
        ],
      },
      {
        id: 'team-2',
        name: 'Backend',
        budget: 300000,
        subRows: [
          { id: 'emp-3', name: 'Carol Davis', budget: 150000 },
          { id: 'emp-4', name: 'Dan Wilson', budget: 150000 },
        ],
      },
    ],
  },
  {
    id: 'dept-2',
    name: 'Marketing',
    budget: 250000,
    subRows: [
      {
        id: 'team-3',
        name: 'Content',
        budget: 100000,
        subRows: [{ id: 'emp-5', name: 'Eve Thompson', budget: 100000 }],
      },
      {
        id: 'team-4',
        name: 'Growth',
        budget: 150000,
        subRows: [{ id: 'emp-6', name: 'Frank Lee', budget: 150000 }],
      },
    ],
  },
];

const createSubrowCaretIcon = (expanded: boolean): HTMLElement => {
  const icon = document.createElement('modus-wc-icon');
  icon.setAttribute('name', expanded ? 'caret_down' : 'caret_right');
  icon.setAttribute('size', 'xs');
  icon.setAttribute('decorative', '');
  return icon;
};

const createSubrowColumnDefs = (): ColumnDef<HierarchicalRow, unknown>[] => [
  {
    id: 'name',
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row, getValue }) => {
      const container = document.createElement('span');
      container.style.display = 'inline-flex';
      container.style.alignItems = 'center';
      container.style.gap = '0.25rem';
      container.style.paddingInlineStart = `${row.depth * 1.5}rem`;

      if (row.getCanExpand()) {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute(
          'aria-label',
          row.getIsExpanded() ? 'Collapse row' : 'Expand row'
        );
        button.appendChild(createSubrowCaretIcon(row.getIsExpanded()));
        button.addEventListener('click', (event) => {
          event.stopPropagation();
          row.toggleExpanded();
        });
        container.appendChild(button);
      } else {
        const spacer = createSubrowCaretIcon(false);
        spacer.style.visibility = 'hidden';
        container.appendChild(spacer);
      }

      const label = document.createElement('span');
      const nameValue = getValue();
      label.textContent =
        typeof nameValue === 'string' || typeof nameValue === 'number'
          ? String(nameValue)
          : '';
      container.appendChild(label);

      return container;
    },
  },
  {
    id: 'budget',
    accessorKey: 'budget',
    header: 'Budget',
    cell: ({ getValue }) => {
      const value = Number(getValue() ?? 0);
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(value);
    },
  },
];

const subrowTableOptions = {
  getSubRows: (row: HierarchicalRow) => row.subRows ?? [],
  getExpandedRowModel: getExpandedRowModel<HierarchicalRow>(),
};

export const ExpandableSubrows: Story = {
  name: 'Expandable Subrows (Advanced)',
  render: (args) => {
    const data = createHierarchicalData();
    const columnDefs = createSubrowColumnDefs();

    return html`
      <div style="max-height: 320px; overflow: auto;">
        <modus-wc-table
          mode="advanced"
          aria-label="Organization budget table with subrows"
          .data=${data}
          .columnDefs=${columnDefs}
          .tableOptions=${subrowTableOptions}
          .density=${args.density}
          .hover=${args.hover}
          .zebra=${args.zebra}
          @rowClick=${action('rowClick')}
        ></modus-wc-table>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    hover: true,
    zebra: false,
  },
  parameters: {
    docs: {
      description: {
        story: EXPANDABLE_SUBROWS_STORY_DOCS,
      },
      source: { code: getExpandableSubrowsSourceCode() },
    },
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('table-shadow-host')) {
      const TableShadowHost = createShadowHostClass<TableStoryArgs>({
        componentTag: 'modus-wc-table',
        propsMapper: (v: TableStoryArgs, el: HTMLElement) => {
          const tableEl = el as unknown as {
            caption: string;
            columns: ITableColumn[];
            currentPage: number;
            data: Record<string, unknown>[];
            customClass: string;
            density: string;
            editable: boolean;
            hover: boolean;
            paginated: boolean;
            pageSizeOptions: number[];
            selectable: string;
            selectedRowIds: string[];
            showPageSizeSelector: boolean;
            sortable: boolean;
            zebra: boolean;
          };
          tableEl.caption = v.caption ?? '';
          tableEl.columns = v.columns ?? createDemoColumns();
          tableEl.currentPage = v['current-page'] ?? 1;
          tableEl.data = v.data ?? createDemoData();
          tableEl.customClass = v['custom-class'] || '';
          tableEl.density = v.density ?? 'comfortable';
          tableEl.editable = Boolean(v.editable);
          tableEl.hover = Boolean(v.hover);
          tableEl.paginated = Boolean(v.paginated);
          tableEl.pageSizeOptions = v['page-size-options'] ?? [5, 10, 15];
          tableEl.selectable = v.selectable ?? 'none';
          tableEl.selectedRowIds = v['selected-row-ids'] ?? [];
          tableEl.showPageSizeSelector = v['show-page-size-selector'] !== false;
          tableEl.sortable = Boolean(v.sortable);
          tableEl.zebra = Boolean(v.zebra);
          // Wire events once — Stencil events don't bubble out of shadow root
          if (!el.dataset['eventsWired']) {
            el.addEventListener('rowClick', action('rowClick'));
            el.addEventListener('sortChange', action('sortChange'));
            el.addEventListener('paginationChange', action('paginationChange'));
            el.addEventListener(
              'rowSelectionChange',
              action('rowSelectionChange')
            );
            el.addEventListener('cellEditStart', action('cellEditStart'));
            el.addEventListener('cellEditCommit', action('cellEditCommit'));
            el.dataset['eventsWired'] = 'true';
          }
        },
      });
      customElements.define('table-shadow-host', TableShadowHost);
    }

    return html`<table-shadow-host .props=${{ ...args }}></table-shadow-host>`;
  },
};
