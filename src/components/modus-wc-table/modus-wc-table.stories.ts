/* eslint-disable @typescript-eslint/no-explicit-any */

import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ITableColumn } from './modus-wc-table';
import { Density } from '../types';

const defaultColumns: ITableColumn[] = [
  {
    id: 'name',
    header: 'Name',
    accessor: 'name',
    width: '200px',
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
    cellRenderer: (value) => {
      const isActive = value.toLowerCase() === 'active';
      const badge = document.createElement('modus-wc-badge');
      badge.color = isActive ? 'success' : 'danger';
      const div = document.createElement('div');
      div.textContent = value;
      badge.appendChild(div);
      return badge;
    },
  },
];

const defaultData = [
  { name: 'John Smith', email: 'john.smith@example.com', status: 'Active' },
  { name: 'Jane Doe', email: 'jane.doe@example.com', status: 'Inactive' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', status: 'Active' },
];

interface TableArgs {
  columns: ITableColumn[];
  'custom-class'?: string;
  data: Record<string, any>[];
  density?: Density;
  zebra?: boolean;
}

const meta: Meta<TableArgs> = {
  title: 'Components/Table',
  component: 'modus-wc-table',
  args: {
    columns: defaultColumns,
    data: defaultData,
    density: 'comfortable',
    zebra: false,
  },
  argTypes: {
    columns: {
      description: 'Array of column definitions for the table',
      table: {
        type: {
          detail: `
            Interface: ITableColumn
            Properties:
            - accessor (string): Key to access data from row object
            - cellRenderer ((value: any, row: any) => string | HTMLElement, optional): Custom cell renderer
            - className (string, optional): Class names for the column
            - header (string | HTMLElement): Header content - can be string or HTML
            - id (string): Unique identifier for the column
            - width (string, optional): Width style (e.g., '200px', '50%')
        `,
        },
      },
    },
    density: {
      control: { type: 'select' },
      options: ['comfortable', 'compact'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['rowClick'],
    },
  },
};

export default meta;

type Story = StoryObj<TableArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-table
        aria-label="User data"
        .columns=${args.columns}
        custom-class=${ifDefined(args['custom-class'])}
        .data=${args.data}
        density=${ifDefined(args.density)}
        ?zebra=${args.zebra}
      />
    `;
  },
};

export const Default: Story = { ...Template };
