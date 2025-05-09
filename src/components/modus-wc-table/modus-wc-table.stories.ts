/* eslint-disable @typescript-eslint/no-explicit-any */

import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ITableColumn } from './modus-wc-table';
import { IAutocompleteItem } from '../modus-wc-autocomplete/modus-wc-autocomplete';
import { Density } from '../types';

// Placeholder for readme import - this will be properly generated
// at build time by Stencil
const readme = {
  toString: () => 'Modus Table Component Documentation',
};

interface TableStoryArgs {
  columns?: ITableColumn[];
  data?: Record<string, any>[];
  density?: Density;
  zebra?: boolean;
  hover?: boolean;
  sortable?: boolean;
  paginated?: boolean;
  pageSize?: number;
  showPageSizeSelector?: boolean;
  customClass?: string;
  selectable?: 'none' | 'single' | 'multi';
  selectedRowIds?: string[];
}

const meta: Meta<TableStoryArgs> = {
  title: 'Components/Table',
  component: 'modus-wc-table',
  parameters: {
    docs: {
      description: {
        component: readme.toString(),
      },
    },
  },
  argTypes: {
    columns: { control: 'object' },
    data: { control: 'object' },
    density: {
      control: {
        type: 'select',
        options: ['condensed', 'comfortable'],
      },
    },
    zebra: { control: 'boolean' },
    hover: { control: 'boolean' },
    sortable: { control: 'boolean' },
    paginated: { control: 'boolean' },
    pageSize: { control: 'number' },
    showPageSizeSelector: { control: 'boolean' },
    customClass: { control: 'text' },
    selectable: {
      control: {
        type: 'select',
        options: ['none', 'single', 'multi'],
      },
    },
    selectedRowIds: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<TableStoryArgs>;

// Create basic demo data
const createDemoData = (numRows = 5): Record<string, any>[] => {
  const data: Record<string, any>[] = [];
  for (let i = 1; i <= numRows; i++) {
    data.push({
      id: i.toString(),
      firstName: `First ${i}`,
      lastName: `Last ${i}`,
      email: `user${i}@example.com`,
      status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Inactive' : 'Pending',
      dateJoined: new Date(2022, 0, i).toLocaleDateString(),
    });
  }
  return data;
};

const createDemoColumns = (): ITableColumn[] => {
  return [
    {
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: '80px',
      sortable: false,
    },
    {
      id: 'firstName',
      header: 'First Name',
      accessor: 'firstName',
      sortable: false,
    },
    {
      id: 'lastName',
      header: 'Last Name',
      accessor: 'lastName',
      sortable: false,
    },
    {
      id: 'email',
      header: 'Email',
      accessor: 'email',
      sortable: false,
    },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status',
      sortable: false,
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
      id: 'dateJoined',
      header: 'Date Joined',
      accessor: 'dateJoined',
      sortable: false,
    },
  ];
};

// Create sortable columns for demo
const createSortableColumns = (): ITableColumn[] => {
  return [
    {
      id: 'id',
      header: 'ID',
      accessor: 'id',
      width: '80px',
      sortable: true,
    },
    {
      id: 'firstName',
      header: 'First Name',
      accessor: 'firstName',
      sortable: true,
    },
    {
      id: 'lastName',
      header: 'Last Name',
      accessor: 'lastName',
      sortable: true,
    },
    {
      id: 'email',
      header: 'Email',
      accessor: 'email',
      sortable: true,
    },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status',
      sortable: true,
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
      id: 'dateJoined',
      header: 'Date Joined',
      accessor: 'dateJoined',
      sortable: true,
    },
  ];
};

export const Default: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html`
      <div style="padding: 1rem">
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .density=${args.density}
          .zebra=${args.zebra}
          .hover=${args.hover}
          .sortable=${args.sortable}
          .customClass=${args.customClass}
          .selectable=${args.selectable}
          .selectedRowIds=${args.selectedRowIds}
          @rowClick=${(e) => console.log('Row clicked:', e.detail)}
          @sortChange=${(e) => console.log('Sort changed:', e.detail)}
          @rowSelectionChange=${(e) =>
            console.log('Selection changed:', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    zebra: false,
    hover: true,
    sortable: false,
    customClass: '',
    selectable: 'none',
    selectedRowIds: [],
  },
};

export const WithHover: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData(15);
    return html`
      <div style="padding: 1rem">
        <p>Hover over rows to see the hover effect.</p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .density=${args.density}
          .zebra=${args.zebra}
          .hover=${args.hover}
          .selectable=${args.selectable}
          .selectedRowIds=${args.selectedRowIds}
          @rowClick=${(e) => console.log('Row clicked:', e.detail)}
          @rowSelectionChange=${(e) =>
            console.log('Selection changed:', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    zebra: false,
    hover: true,
    selectable: 'none',
    selectedRowIds: [],
  },
};

export const WithoutHover: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData(15);
    return html`
      <div style="padding: 1rem">
        <p>Hover effect is disabled for this table.</p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .density=${args.density}
          .zebra=${args.zebra}
          .hover=${args.hover}
          .selectable=${args.selectable}
          .selectedRowIds=${args.selectedRowIds}
          @rowClick=${(e) => console.log('Row clicked:', e.detail)}
          @rowSelectionChange=${(e) =>
            console.log('Selection changed:', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    zebra: false,
    hover: false,
    selectable: 'none',
    selectedRowIds: [],
  },
};

export const WithSorting: Story = {
  render: (args) => {
    const columns = args.columns || createSortableColumns();
    const data = args.data || createDemoData(15);
    return html`
      <div style="padding: 1rem">
        <p>
          Click on column headers to sort. Click again to toggle between
          ascending and descending order.
        </p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .density=${args.density}
          .zebra=${args.zebra}
          .hover=${args.hover}
          .sortable=${args.sortable}
          .selectable=${args.selectable}
          .selectedRowIds=${args.selectedRowIds}
          @rowClick=${(e) => console.log('Row clicked:', e.detail)}
          @sortChange=${(e) => console.log('Sort changed:', e.detail)}
          @rowSelectionChange=${(e) =>
            console.log('Selection changed:', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    zebra: false,
    hover: true,
    sortable: true,
    selectable: 'none',
    selectedRowIds: [],
  },
};

export const ZebraStriped: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData();
    return html`
      <div style="padding: 1rem">
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .zebra=${true}
          .hover=${args.hover}
          .sortable=${args.sortable}
          .density=${args.density}
          .selectable=${args.selectable}
          .selectedRowIds=${args.selectedRowIds}
          @rowClick=${(e) => console.log('Row clicked:', e.detail)}
          @sortChange=${(e) => console.log('Sort changed:', e.detail)}
          @rowSelectionChange=${(e) =>
            console.log('Selection changed:', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    hover: true,
    sortable: false,
    selectable: 'none',
    selectedRowIds: [],
  },
};

export const WithPagination: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData(100); // Create 100 rows for pagination demo
    return html`
      <div style="padding: 1rem">
        <p>Table with pagination using modus-wc-pagination component.</p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .density=${args.density}
          .zebra=${args.zebra}
          .hover=${args.hover}
          .sortable=${args.sortable}
          .paginated=${args.paginated}
          .pageSize=${args.pageSize}
          .showPageSizeSelector=${args.showPageSizeSelector}
          .selectable=${args.selectable}
          .selectedRowIds=${args.selectedRowIds}
          @rowClick=${(e) => console.log('Row clicked:', e.detail)}
          @sortChange=${(e) => console.log('Sort changed:', e.detail)}
          @paginationChange=${(e) =>
            console.log('Pagination changed:', e.detail)}
          @rowSelectionChange=${(e) =>
            console.log('Selection changed:', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    zebra: true,
    hover: true,
    sortable: false,
    paginated: true,
    pageSize: 5,
    showPageSizeSelector: true,
    selectable: 'none',
    selectedRowIds: [],
  },
};

export const DensityVariants: Story = {
  render: () => {
    const columns = createDemoColumns();
    const data = createDemoData(5);
    return html`
      <div style="padding: 1rem">
        <h3>Condensed</h3>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .density=${'condensed'}
        ></modus-wc-table>

        <h3 style="margin-top: 2rem">Comfortable (Default)</h3>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .density=${'comfortable'}
        ></modus-wc-table>
      </div>
    `;
  },
};

export const WithHoverEffect: Story = {
  render: (args) => {
    const columns = args.columns || createDemoColumns();
    const data = args.data || createDemoData(10);
    return html`
      <div style="padding: 1rem">
        <p>Hover over rows to see the highlight effect.</p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          .density=${args.density}
          .zebra=${args.zebra}
          .hover=${true}
          .sortable=${args.sortable}
          .selectable=${args.selectable}
          .selectedRowIds=${args.selectedRowIds}
          @rowClick=${(e) => console.log('Row clicked:', e.detail)}
          @rowSelectionChange=${(e) =>
            console.log('Selection changed:', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
  args: {
    density: 'comfortable',
    zebra: false,
    sortable: true,
    selectable: 'none',
    selectedRowIds: [],
  },
};

export const SingleSelect: Story = {
  render: () => {
    const columns = createDemoColumns();
    const data = createDemoData(8);
    return html`
      <div style="padding:1rem">
        <p>Select a single row using radio-style selection.</p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          selectable="single"
          @rowSelectionChange=${(e: CustomEvent) =>
            console.log('Selected rows (single):', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
};

export const MultiSelect: Story = {
  render: () => {
    const columns = createDemoColumns();
    const data = createDemoData(10);
    return html`
      <div style="padding:1rem">
        <p>Select multiple rows using checkboxes, including select-all.</p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          selectable="multi"
          paginated=${false}
          @rowSelectionChange=${(e: CustomEvent) =>
            console.log('Selected rows (multi):', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
};

// ---------------------------------------------------------------------------
// Editable rows demo
// ---------------------------------------------------------------------------

export const EditableRows: Story = {
  render: () => {
    const columns: ITableColumn[] = [
      {
        id: 'id',
        header: 'ID',
        accessor: 'id',
        width: '60px',
      },
      {
        id: 'firstName',
        header: 'First Name',
        accessor: 'firstName',
        editor: 'text',
      },
      {
        id: 'age',
        header: 'Age',
        accessor: 'age',
        editor: 'number',
        editorProps: { min: 0 },
      },
    ];

    const data = [
      { id: '1', firstName: 'Alice', age: 28 },
      { id: '2', firstName: 'Bob', age: 34 },
      { id: '3', firstName: 'Charlie', age: 22 },
    ];

    return html`
      <div style="padding:1rem">
        <p>
          Double-click a cell (First Name or Age) to edit. Blur or press Enter
          to commit.
        </p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          editable=${true}
          selectable="none"
          @cellEditCommit=${(e: CustomEvent) =>
            console.log('Cell committed', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
};

// ---------------------------------------------------------------------------
// Custom editor demo – uses modus-wc-autocomplete inside a cell
// ---------------------------------------------------------------------------

export const CustomEditors: Story = {
  render: () => {
    const columns: ITableColumn[] = [
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
        editor: 'text',
      },
      {
        id: 'country',
        header: 'Country',
        accessor: 'country',
        editorTemplate: `
          <modus-wc-autocomplete
            placeholder="Select country"
            value="\${value}"
            debounce-ms="300"
            min-chars="0"
            size="md"
            style="width: 120px"
          ></modus-wc-autocomplete>
        `,
        editorSetup: (el, _row, commit) => {
          const autocomplete = el as HTMLElement & {
            items: any[];
            value: string;
          };

          let args: {
            items: IAutocompleteItem[];
            initialNavigation: boolean;
          } = {
            items: [
              { label: 'USA', value: 'USA', visibleInMenu: true },
              { label: 'Canada', value: 'Canada', visibleInMenu: true },
              { label: 'Mexico', value: 'Mexico', visibleInMenu: true },
              { label: 'Japan', value: 'Japan', visibleInMenu: true },
              { label: 'Germany', value: 'Germany', visibleInMenu: true },
            ],
            initialNavigation: true,
          };

          autocomplete.items = [...args.items];

          // ---------- helpers ----------
          const refresh = () => {
            autocomplete.items = [...args.items];
          };

          // ---------- event handlers ----------
          const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
            const autocomplete = (e.target as HTMLInputElement).closest(
              'modus-wc-autocomplete'
            );

            if (autocomplete) {
              const label = e.detail.label;
              if (label) {
                autocomplete.value = label;
              }

              // Clear the previous selection.
              args.items.forEach((item) => (item.selected = false));

              // Mark the user selected menu item as selected and create a new array to update items.
              const foundItem = args.items.find(
                (item) => item.value === e.detail.value
              );
              if (foundItem) {
                foundItem.selected = true;
                autocomplete.items = [...args.items];
              }
            }
          };
          const handleKeyDown = (e: KeyboardEvent) => {
            if (!['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key))
              return;

            e.preventDefault();

            const visible = args.items.filter((i) => i.visibleInMenu);
            switch (e.key) {
              case 'Escape':
                args.items.forEach(
                  (i) => ((i.focused = false), (i.visibleInMenu = true))
                );
                args.initialNavigation = true;
                refresh();
                return;
              case 'ArrowDown':
                if (args.initialNavigation) {
                  args.initialNavigation = false;
                  return;
                }
                moveFocus(1);
                break;
              case 'ArrowUp':
                if (args.initialNavigation) {
                  args.initialNavigation = false;
                  return;
                }
                moveFocus(-1);
                break;
              case 'Enter': {
                const current = visible.find((i) => i.focused);
                if (current) {
                  args.items = args.items.map((item) => ({
                    ...item,
                    selected: item.value === current.value,
                    focused: false,
                  }));
                  autocomplete.value = current.label;
                  args.initialNavigation = true;
                  commit(current.value);
                }
                break;
              }
            }
            refresh();
          };

          const moveFocus = (dir: number) => {
            const visible = args.items.filter((i) => i.visibleInMenu);
            const idx = visible.findIndex((i) => i.focused);
            const next =
              idx < 0
                ? dir > 0
                  ? 0
                  : visible.length - 1
                : (idx + dir + visible.length) % visible.length;
            args.items.forEach((i) => (i.focused = i === visible[next]));
          };

          const handleInputChange = (e: CustomEvent<Event>) => {
            const input = e.detail?.target as HTMLInputElement;
            if (!input) return;
            const search = input.value.toLowerCase();
            args.items.forEach((i) => {
              i.visibleInMenu = i.label.toLowerCase().includes(search);
              i.focused = false;
            });
            refresh();
          };

          // --------- commit on blur (close editor) ---------
          const handleBlur = () => {
            console.log('handleBlur', autocomplete.value);
            commit(autocomplete.value);
            autocomplete.removeEventListener('blur', handleBlur, true);
          };

          // wire events
          // when click outside of the table, the editor should close

          (autocomplete as any).addEventListener('blur', handleBlur, true);
          (autocomplete as any).addEventListener('keydown', handleKeyDown);
          (autocomplete as any).addEventListener(
            'itemSelect',
            handleItemSelect
          );
          (autocomplete as any).addEventListener(
            'inputChange',
            handleInputChange
          );
          (autocomplete as any).addEventListener('valueChange', (e: Event) => {
            commit((e as CustomEvent).detail.value);
          });

          // focus editor
          autocomplete.querySelector('input')?.focus();
        },
        width: '150px',
      },
    ];

    const data = [
      { id: '1', name: 'Alice', country: 'USA' },
      { id: '2', name: 'Bob', country: 'Canada' },
    ];

    return html`
      <div style="padding:1rem">
        <p>Double-click the Country cell to open an autocomplete editor.</p>
        <modus-wc-table
          .columns=${columns}
          .data=${data}
          editable=${true}
          density="comfortable"
          selectable="none"
          @cellEditCommit=${(e: CustomEvent) =>
            console.log('Cell commit', e.detail)}
        ></modus-wc-table>
      </div>
    `;
  },
};
