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
      <script>
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

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \`User \${i}\`,
              email: \`user\${i}@example.com\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      </script>
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
      <script>
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

        const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \`User \${i}\`,
              email: \`user\${i}@example.com\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      </script>
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
      <script>
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
              name: \`User \${i}\`,
              email: \`user\${i}@example.com\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
      </script>
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
      <script>
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

          const createDemoData = (count = 5): Record<string, any>[] => {
          const data: Record<string, any>[] = [];
          for (let i = 1; i <= count; i++) {
            data.push({
              id: i.toString(),
              name: \`User \${i}\`,
              email: \`user\${i}@example.com\`,
              role: i % 2 === 0 ? 'Admin' : 'User',
            });
          }
          return data;
        };
        const columns = args.columns || createDemoColumns();
        const data = args.data || createDemoData(15);
      </script>
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
      <script>
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

            const createDemoData = (count = 5): Record<string, any>[] => {
              const data: Record<string, any>[] = [];
              for (let i = 1; i <= count; i++) {
                data.push({
                  id: i.toString(),
                  name: \`User \${i}\`,
                  email: \`user\${i}@example.com\`,
                  role: i % 2 === 0 ? 'Admin' : 'User',
                });
              }
              return data;
            };
        const columns = args.columns || createDemoColumns();
        const data = args.data || createDemoData(15);
      </script>
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
    ];

    const data = [
      { id: '1', name: 'John Doe', status: 'Active' },
      { id: '2', name: 'Jane Smith', status: 'Inactive' },
      { id: '3', name: 'Bob Johnson', status: 'Pending' },
    ];

    return html`
      <script>
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

                const createDemoData = (count = 5): Record<string, any>[] => {
                  const data: Record<string, any>[] = [];
                  for (let i = 1; i <= count; i++) {
                    data.push({
                      id: i.toString(),
                      name: \`User \${i}\`,
                      email: \`user\${i}@example.com\`,
                      role: i % 2 === 0 ? 'Admin' : 'User',
                    });
                  }
                  return data;
                };
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
        ];

        const data = [
          { id: '1', name: 'John Doe', status: 'Active' },
          { id: '2', name: 'Jane Smith', status: 'Inactive' },
          { id: '3', name: 'Bob Johnson', status: 'Pending' },
        ];
      </script>
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

export const InfiniteScrolling: Story = {
  render: (args) => {
    return html`
      <div id="infinite-scroll-container">
        <style>
          #infinite-scroll-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .scroll-container {
            height: 400px;
            overflow: auto;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
          }
          .loading-indicator {
            text-align: center;
            padding: 16px;
            color: #666;
          }
          .info-panel {
            background: #f5f5f5;
            padding: 12px;
            border-radius: 4px;
            font-size: 14px;
          }
        </style>

        <div class="info-panel">
          <strong>Infinite Scrolling Demo</strong><br />
          Scroll down to load more data. The table automatically fetches
          additional rows when you reach the bottom.
          <br />Loaded: <span id="loaded-count">20</span> rows | Total
          available: 1000 rows
        </div>

        <div class="scroll-container" id="scroll-wrapper">
          <modus-wc-table
            id="infinite-table"
            .columns=${createSortableColumns()}
            .data=${[]}
            .density=${args.density}
            .hover=${args.hover}
            .sortable=${args.sortable}
            .paginated=${false}
            .selectable=${args.selectable}
            .zebra=${args.zebra}
            .editable=${args.editable}
            @rowClick=${action('rowClick')}
            @sortChange=${action('sortChange')}
            @rowSelectionChange=${action('rowSelectionChange')}
          ></modus-wc-table>
          <div class="loading-indicator" id="loading" style="display: none;">
            Loading more data...
          </div>
        </div>

        <script>
          (function () {
            // Simulated data fetching function
            const fetchMoreData = async (startIndex, count) => {
              // Simulate API delay
              await new Promise((resolve) => setTimeout(resolve, 500));

              const data = [];
              const maxRows = 1000;
              const endIndex = Math.min(startIndex + count, maxRows);

              for (let i = startIndex; i < endIndex; i++) {
                data.push({
                  id: (i + 1).toString(),
                  name: \`User \${i + 1}\`,
                  email: \`user\${i + 1}@example.com\`,
                  role: ['Admin', 'User', 'Manager', 'Guest'][i % 4],
                });
              }

              return {
                data,
                hasMore: endIndex < maxRows,
                total: maxRows,
              };
            };

            // Initialize infinite scrolling
            const table = document.getElementById('infinite-table');
            const scrollContainer = document.getElementById('scroll-wrapper');
            const loadingIndicator = document.getElementById('loading');
            const loadedCountSpan = document.getElementById('loaded-count');

            let currentData = [];
            let isLoading = false;
            let hasMore = true;
            const batchSize = 20;

            // Load initial data
            const loadInitialData = async () => {
              const response = await fetchMoreData(0, batchSize);
              currentData = response.data;
              hasMore = response.hasMore;
              table.data = [...currentData];
              loadedCountSpan.textContent = currentData.length;
            };

            // Handle scroll event
            const handleScroll = async () => {
              if (isLoading || !hasMore) return;

              const scrollTop = scrollContainer.scrollTop;
              const scrollHeight = scrollContainer.scrollHeight;
              const clientHeight = scrollContainer.clientHeight;

              // Check if user has scrolled to bottom (with 50px threshold)
              if (scrollTop + clientHeight >= scrollHeight - 50) {
                isLoading = true;
                loadingIndicator.style.display = 'block';

                try {
                  const response = await fetchMoreData(
                    currentData.length,
                    batchSize
                  );

                  if (response.data.length > 0) {
                    currentData = [...currentData, ...response.data];
                    hasMore = response.hasMore;

                    // Update table data
                    table.data = [...currentData];
                    loadedCountSpan.textContent = currentData.length;

                    // Log the fetch action
                    console.log(
                      \`Loaded \${response.data.length} more rows. Total: \${currentData.length}\`
                    );
                  }
                } catch (error) {
                  console.error('Error loading more data:', error);
                } finally {
                  isLoading = false;
                  loadingIndicator.style.display = 'none';

                  if (!hasMore) {
                    loadingIndicator.textContent = 'All data loaded';
                    loadingIndicator.style.display = 'block';
                  }
                }
              }
            };

            // Attach scroll listener
            scrollContainer.addEventListener('scroll', handleScroll);

            // Load initial data
            loadInitialData();

            // Cleanup on unmount (for Storybook)
            return () => {
              scrollContainer.removeEventListener('scroll', handleScroll);
            };
          })();
        </script>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    hover: true,
    sortable: true,
    selectable: 'none',
    zebra: false,
    editable: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates how to implement infinite scrolling with the Modus Table component.

## Implementation Details

- **Pagination disabled**: Set \`paginated={false}\` to handle data loading manually
- **Scroll container**: Wrap the table in a fixed-height container with overflow
- **Scroll detection**: Monitor scroll position to trigger data loading when near bottom
- **Data management**: Append new data to existing array and update table's data prop
- **Loading states**: Show loading indicator while fetching more data
- **Performance**: Consider implementing virtualization for very large datasets

## Key Considerations

1. **Performance**: With thousands of rows, consider virtual scrolling solutions
2. **Sorting**: May need special handling for sorting across all data vs. loaded data
3. **Selection**: Row selection state must be maintained across data loads
4. **Search/Filter**: Should work with the full dataset, not just loaded rows
        `,
      },
    },
  },
};
