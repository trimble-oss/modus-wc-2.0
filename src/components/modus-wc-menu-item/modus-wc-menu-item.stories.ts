import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

interface MenuItemArgs {
  bordered?: boolean;
  checkbox?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'has-submenu'?: boolean;
  label: string;
  selected?: boolean;
  'show-content-tree-actions'?: boolean;
  size?: ModusSize;
  'sub-label'?: string;
  'tooltip-content'?: string;
  'tooltip-position'?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
  value: string;
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

export const WithContentTreeActions: Story = {
  args: {
    'show-content-tree-actions': true,
    checkbox: true,
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-menu>
  <modus-wc-menu-item
    ?checkbox=${args.checkbox}
    has-submenu="true"
    label="Documents"
    ?show-content-tree-actions=${args['show-content-tree-actions']}
    size=${args.size}
    value="documents"
  >
    <modus-wc-icon
      slot="start-icon"
      name="folder_closed"
      size="sm"
      variant="solid"
    ></modus-wc-icon>
    <modus-wc-menu .isSubMenu=${true}>
      <modus-wc-menu-item
        ?checkbox=${args.checkbox}
        label="Reports.pdf"
        ?show-content-tree-actions=${args['show-content-tree-actions']}
        size=${args.size}
        value="reports"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
      <modus-wc-menu-item
        ?checkbox=${args.checkbox}
        label="Presentation.pptx"
        ?show-content-tree-actions=${args['show-content-tree-actions']}
        size=${args.size}
        value="presentation"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
  <modus-wc-menu-item
    ?checkbox=${args.checkbox}
    has-submenu="true"
    label="Projects"
    ?show-content-tree-actions=${args['show-content-tree-actions']}
    size=${args.size}
    value="projects"
  >
    <modus-wc-icon
      slot="start-icon"
      name="folder_closed"
      size="sm"
      variant="solid"
    ></modus-wc-icon>
    <modus-wc-menu .isSubMenu=${true}>
      <modus-wc-menu-item
        ?checkbox=${args.checkbox}
        label="Website Redesign"
        ?show-content-tree-actions=${args['show-content-tree-actions']}
        size=${args.size}
        value="website"
      >
        <modus-wc-icon
          slot="start-icon"
          name="description"
          size="sm"
          variant="solid"
        ></modus-wc-icon>
      </modus-wc-menu-item>
    </modus-wc-menu>
  </modus-wc-menu-item>
</modus-wc-menu>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for menu-item component
    if (!customElements.get('menu-item-shadow-host')) {
      const MenuItemShadowHost = createShadowHostClass<MenuItemArgs>({
        componentTag: 'modus-wc-menu',
        propsMapper: (v: MenuItemArgs, el: HTMLElement) => {
          const menuEl = el as unknown as {
            ariaLabel: string;
          };
          menuEl.ariaLabel = 'Shadow DOM Menu';

          // Get or create menu item
          let menuItem = el.querySelector('modus-wc-menu-item');
          if (!menuItem) {
            menuItem = document.createElement('modus-wc-menu-item');
            el.innerHTML = '';
            el.appendChild(menuItem);
          }

          // Update properties on the existing element
          const menuItemEl = menuItem as unknown as {
            ariaLabel: string;
            bordered: boolean;
            checkbox: boolean;
            customClass: string;
            disabled: boolean;
            label: string;
            selected: boolean;
            size: string;
            subLabel: string;
            tooltipContent: string;
            tooltipPosition: string;
            value: string;
          };

          menuItemEl.ariaLabel = 'Menu item in shadow DOM';
          menuItemEl.bordered = Boolean(v.bordered);
          menuItemEl.checkbox = Boolean(v.checkbox);
          menuItemEl.customClass = v['custom-class'] || '';
          menuItemEl.disabled = Boolean(v.disabled);
          menuItemEl.label = v.label;
          menuItemEl.selected = Boolean(v.selected);
          menuItemEl.size = v.size || 'md';
          menuItemEl.subLabel = v['sub-label'] || '';
          menuItemEl.tooltipContent = v['tooltip-content'] || '';
          menuItemEl.tooltipPosition = v['tooltip-position'] || 'auto';
          menuItemEl.value = v.value;
        },
      });
      customElements.define('menu-item-shadow-host', MenuItemShadowHost);
    }

    return html`<menu-item-shadow-host
      .props=${{ ...args }}
    ></menu-item-shadow-host>`;
  },
};
