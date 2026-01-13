import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ContentTreeArgs {
  'custom-class'?: string;
  'multi-select'?: boolean;
  'show-search'?: boolean;
  'show-actions'?: boolean;
  'search-placeholder'?: string;
}

const meta: Meta<ContentTreeArgs> = {
  title: 'Components/Content Tree',
  component: 'modus-wc-content-tree',
  args: {
    'multi-select': false,
    'show-search': false,
    'show-actions': false,
    'search-placeholder': 'Search...',
  },
  argTypes: {
    'multi-select': {
      control: { type: 'boolean' },
    },
    'show-search': {
      control: { type: 'boolean' },
    },
    'show-actions': {
      control: { type: 'boolean' },
    },
    'search-placeholder': {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<ContentTreeArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-content-tree
        class=${ifDefined(args['custom-class'])}
        multi-select="true"
        show-search="true"
      >
      </modus-wc-content-tree>
    `;
  },
};

export const Collapsed: Story = {
  render: (args) => {
    const multiSelect = args['multi-select'];
    return html`
      <modus-wc-content-tree
        class=${ifDefined(args['custom-class'])}
        ?multi-select=${multiSelect}
      >
        <modus-wc-menu>
          <modus-wc-menu-item
            label="Tree Item"
            value="item1"
            has-submenu="true"
            size="md"
            ?checkbox=${multiSelect}
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>

          <modus-wc-menu-item
            label="Tree Item"
            value="item2"
            has-submenu="true"
            size="md"
            ?checkbox=${multiSelect}
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>

          <modus-wc-menu-item
            label="Tree Item"
            value="item3"
            has-submenu="true"
            size="md"
            ?checkbox=${multiSelect}
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>
        </modus-wc-menu>
      </modus-wc-content-tree>
    `;
  },
};

export const SingleLevel: Story = {
  render: (args) => {
    const multiSelect = args['multi-select'];
    return html`
      <modus-wc-content-tree
        class=${ifDefined(args['custom-class'])}
        ?multi-select=${multiSelect}
      >
        <modus-wc-menu>
          <modus-wc-menu-item
            label="Tree Item"
            value="item1"
            size="md"
            ?checkbox=${multiSelect}
          >
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>

          <modus-wc-menu-item
            label="Tree Item"
            value="item2"
            size="md"
            ?checkbox=${multiSelect}
          >
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>

          <modus-wc-menu-item
            label="Tree Item"
            value="item3"
            size="md"
            selected="true"
            ?checkbox=${multiSelect}
          >
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-menu-item>
        </modus-wc-menu>
      </modus-wc-content-tree>
    `;
  },
};

export const WithSearchAndActions: Story = {
  args: {
    'show-search': true,
    'show-actions': true,
  },
  render: (args) => {
    const multiSelect = args['multi-select'];
    const tree = document.createElement('modus-wc-content-tree');
    tree.showSearch = args['show-search'];
    tree.showActions = args['show-actions'];
    tree.searchPlaceholder = args['search-placeholder'];

    tree.innerHTML = `
      <modus-wc-menu>
        <modus-wc-menu-item
          label="Tree Item"
          value="item1"
          has-submenu="true"
          size="md"
          ${multiSelect ? 'checkbox' : ''}
        >
          <modus-wc-icon slot="start-icon" name="folder" variant="solid" size="sm"></modus-wc-icon>
        </modus-wc-menu-item>
        <modus-wc-menu-item
          label="Tree Item"
          value="item2"
          has-submenu="true"
          size="md"
          ${multiSelect ? 'checkbox' : ''}
        >
          <modus-wc-icon slot="start-icon" name="folder" variant="solid" size="sm"></modus-wc-icon>
        </modus-wc-menu-item>
        <modus-wc-menu-item
          label="Tree Item"
          value="item3"
          has-submenu="true"
          size="md"
          ${multiSelect ? 'checkbox' : ''}
        >
          <modus-wc-icon slot="start-icon" name="folder" variant="solid" size="sm"></modus-wc-icon>
        </modus-wc-menu-item>
      </modus-wc-menu>
    `;

    return tree;
  },
};
