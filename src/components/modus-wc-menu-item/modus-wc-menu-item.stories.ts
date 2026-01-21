import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../types';

interface MenuItemArgs {
  bordered?: boolean;
  checkbox?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'has-submenu'?: boolean;
  label: string;
  selected?: boolean;
  size?: ModusSize;
  'sub-label'?: string;
  'tooltip-content'?: string;
  'tooltip-position'?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
  value: string;
  expandSubmenu?: () => Promise<void>;
  collapseSubmenu?: () => Promise<void>;
}

const meta: Meta<MenuItemArgs> = {
  title: 'Components/Menu Item',
  component: 'modus-wc-menu-item',
  args: {
    label: 'Menu Item',
    size: 'md',
    value: 'menuItem',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    'tooltip-position': {
      control: { type: 'select' },
      options: ['auto', 'top', 'right', 'bottom', 'left'],
    },
    expandSubmenu: {
      description:
        'Expand the submenu if it is collapsed. Only works when has-submenu is true.',
      table: {
        category: 'Methods',
        type: { summary: '() => Promise<void>' },
      },
    },
    collapseSubmenu: {
      description:
        'Collapse the submenu if it is expanded. Only works when has-submenu is true.',
      table: {
        category: 'Methods',
        type: { summary: '() => Promise<void>' },
      },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['itemSelect'],
    },
  },
};

export default meta;

type Story = StoryObj<MenuItemArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${args.bordered}
    ?checkbox=${args.checkbox}
    custom-class=${ifDefined(args['custom-class'])}
    ?disabled=${args.disabled}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    sub-label=${ifDefined(args['sub-label'])}
    tooltip-content=${ifDefined(args['tooltip-content'])}
    tooltip-position=${ifDefined(args['tooltip-position'])}
    value=${args.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `;
  },
};

export const Default: Story = { ...Template };

export const WithIcon: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${args.bordered}
    ?checkbox=${args.checkbox}
    custom-class=${ifDefined(args['custom-class'])}
    ?disabled=${args.disabled}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    sub-label=${ifDefined(args['sub-label'])}
    tooltip-content=${ifDefined(args['tooltip-content'])}
    tooltip-position=${ifDefined(args['tooltip-position'])}
    value=${args.value}
  >
    <modus-wc-icon
      slot="start-icon"
      name="alert"
      size="sm"
    ></modus-wc-icon>
  </modus-wc-menu-item>
</modus-wc-menu>
    `;
  },
};
export const WithCheckbox: Story = {
  args: {
    checkbox: true,
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${args.bordered}
    ?checkbox=${args.checkbox}
    custom-class=${ifDefined(args['custom-class'])}
    ?disabled=${args.disabled}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    sub-label=${ifDefined(args['sub-label'])}
    value=${args.value}
 ></modus-wc-menu-item>
</modus-wc-menu>
    `;
  },
};

export const WithTooltip: Story = {
  args: {
    'tooltip-content': 'This is a tooltip for the menu item',
    'tooltip-position': 'top',
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-menu>
  <modus-wc-menu-item
    ?bordered=${args.bordered}
    custom-class=${ifDefined(args['custom-class'])}
    ?disabled=${args.disabled}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    sub-label=${ifDefined(args['sub-label'])}
    tooltip-content=${ifDefined((args['tooltip-content']))}
    tooltip-position=${ifDefined(args['tooltip-position'])}
    value=${args.value}
  ></modus-wc-menu-item>
</modus-wc-menu>
    `;
  },
};

export const WithSubmenu: Story = {
  render: () => {
    // prettier-ignore
    return html`
<style>
  #submenu-demo-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .control-buttons {
    display: flex;
    gap: 8px;
  }
</style>

<div id="submenu-demo-container">
  <div class="control-buttons">
    <modus-wc-button
      @buttonClick=${() => {
        const menuItem = document.getElementById('menu-with-submenu') as HTMLElement & {
          expandSubmenu?: () => Promise<void>;
        };
        if (menuItem?.expandSubmenu) {
          void menuItem.expandSubmenu();
        }
      }}
      size="sm"
    >
      Expand Submenu
    </modus-wc-button>
    
    <modus-wc-button
      @buttonClick=${() => {
        const menuItem = document.getElementById('menu-with-submenu') as HTMLElement & {
          collapseSubmenu?: () => Promise<void>;
        };
        if (menuItem?.collapseSubmenu) {
          void menuItem.collapseSubmenu();
        }
      }}
      size="sm"
    >
      Collapse Submenu
    </modus-wc-button>
  </div>

  <modus-wc-menu>
    <modus-wc-menu-item
      id="menu-with-submenu"
      label="Parent Item"
      value="parent"
      has-submenu
    >
      <modus-wc-menu-item label="Child Item 1" value="child1"></modus-wc-menu-item>
      <modus-wc-menu-item label="Child Item 2" value="child2"></modus-wc-menu-item>
      <modus-wc-menu-item label="Child Item 3" value="child3"></modus-wc-menu-item>
    </modus-wc-menu-item>
  </modus-wc-menu>
</div>
    `;
  },
};
