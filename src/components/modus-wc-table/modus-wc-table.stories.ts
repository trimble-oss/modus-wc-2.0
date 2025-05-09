/* eslint-disable @typescript-eslint/no-explicit-any */

import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ITableColumn } from './modus-wc-table';
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
