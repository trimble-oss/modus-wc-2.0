/* eslint-disable @typescript-eslint/no-explicit-any */

import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ITableColumn } from './modus-wc-table';
import { Density } from '../../types';

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
  'aria-label': string;
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
    'aria-label': 'Example table',
    columns: defaultColumns,
    data: defaultData,
    density: 'comfortable',
    zebra: false,
  },
  argTypes: {
    density: {
      control: { type: 'inline-radio' },
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

// prettier-ignore
const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-table
        aria-label=${args['aria-label']}
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
