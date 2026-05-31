import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

interface TreeItemArgs {
  bordered?: boolean;
  checkbox?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  focused?: boolean;
  'has-submenu'?: boolean;
  'block-expand'?: boolean;
  label: string;
  selected?: boolean;
  size?: ModusSize;
  'sub-label'?: string;
  'tooltip-content'?: string;
  'tooltip-position'?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
  value: string;
}

const meta: Meta<TreeItemArgs> = {
  title: 'Components/Tree Item',
  component: 'modus-wc-tree-item',
  args: {
    label: 'Tree Item',
    size: 'md',
    value: 'treeItem',
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

type Story = StoryObj<TreeItemArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=${args.bordered}
    ?block-expand=${args['block-expand']}
    ?checkbox=${args.checkbox}
    custom-class=${ifDefined(args['custom-class'])}
    ?disabled=${args.disabled}
    ?focused=${args.focused}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    sub-label=${ifDefined(args['sub-label'])}
    tooltip-content=${ifDefined(args['tooltip-content'])}
    tooltip-position=${ifDefined(args['tooltip-position'])}
    value=${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `;
  },
};

export const Default: Story = { ...Template };

export const WithStartSlot: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=${args.bordered}
    ?disabled=${args.disabled}
    label=${args.label}
    ?selected=${args.selected}
    size=${args.size}
    value=${args.value}
  >
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `;
  },
};

export const WithEndSlot: Story = {
  render: (args) => {
    const btnRef = { el: null as HTMLElement | null };
    const menuRef = { el: null as HTMLElement | null };
    let outsideClickAttached = false;

    const attachOutsideClick = () => {
      if (outsideClickAttached || !btnRef.el || !menuRef.el) return;
      outsideClickAttached = true;

      document.addEventListener('click', (e) => {
        const btn = btnRef.el;
        const menu = menuRef.el;
        if (!btn || !menu || menu.style.display !== 'block') return;
        if (btn.contains(e.target as Node) || menu.contains(e.target as Node)) {
          return;
        }
        menu.style.display = 'none';
      });
    };

    const toggleMenu = (e: Event) => {
      e.stopPropagation();
      const menu = menuRef.el;
      if (!menu) return;
      const isOpen = menu.style.display === 'block';
      menu.style.display = isOpen ? 'none' : 'block';
    };

    const closeMenu = () => {
      if (menuRef.el) menuRef.el.style.display = 'none';
    };

    const onBtnRef = (el: Element | undefined) => {
      if (!el) return;
      btnRef.el = el as HTMLElement;
      attachOutsideClick();
    };

    const onMenuRef = (el: Element | undefined) => {
      if (!el) return;
      menuRef.el = el as HTMLElement;
      attachOutsideClick();
    };

    // prettier-ignore
    return html`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${args.label}
    value=${args.value}
  >
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        ${ref(onBtnRef)}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
        @buttonClick=${toggleMenu}
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        ${ref(onMenuRef)}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true" @itemSelect=${closeMenu}>
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `;
  },
};

export const CustomTreeItem: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tree-view size="sm">
  <modus-wc-tree-item
    label=${args.label}
    value=${args.value}
  >
    <modus-wc-icon slot="start" name="search"></modus-wc-icon>
    <div slot="end" style="display: flex; align-items: center;">
      <div
        style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px; align-self: stretch;"
      ></div>
      <modus-wc-button
        variant="borderless"
        size="sm"
        aria-label="Open folder"
      >
        <modus-wc-icon name="folder_closed" size="sm"></modus-wc-icon>
        <modus-wc-icon name="chevron_right" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
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
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?checkbox=${args.checkbox}
    label=${args.label}
    value=${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `;
  },
};

export const WithTooltip: Story = {
  args: {
    'tooltip-content': 'Tooltip content',
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${args.label}
    tooltip-content=${ifDefined(args['tooltip-content'])}
    value=${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('tree-item-shadow-host')) {
      const TreeItemShadowHost = createShadowHostClass<TreeItemArgs>({
        componentTag: 'modus-wc-tree-view',
        propsMapper: (v: TreeItemArgs, el: HTMLElement) => {
          const treeViewEl = el as unknown as { ariaLabel: string };
          treeViewEl.ariaLabel = 'Shadow DOM Tree View';

          let treeItem = el.querySelector('modus-wc-tree-item');
          if (!treeItem) {
            treeItem = document.createElement('modus-wc-tree-item');
            el.innerHTML = '';
            el.appendChild(treeItem);
          }

          const treeItemEl = treeItem as unknown as {
            bordered: boolean;
            blockExpand: boolean;
            checkbox: boolean;
            customClass: string;
            disabled: boolean;
            focused: boolean;
            hasSubmenu: boolean;
            label: string;
            selected: boolean;
            size: string;
            subLabel: string;
            tooltipContent: string;
            tooltipPosition: string;
            value: string;
          };

          treeItemEl.bordered = Boolean(v.bordered);
          treeItemEl.blockExpand = Boolean(v['block-expand']);
          treeItemEl.checkbox = Boolean(v.checkbox);
          treeItemEl.customClass = v['custom-class'] || '';
          treeItemEl.disabled = Boolean(v.disabled);
          treeItemEl.focused = Boolean(v.focused);
          treeItemEl.hasSubmenu = Boolean(v['has-submenu']);
          treeItemEl.label = v.label;
          treeItemEl.selected = Boolean(v.selected);
          treeItemEl.size = v.size || 'md';
          treeItemEl.subLabel = v['sub-label'] || '';
          treeItemEl.tooltipContent = v['tooltip-content'] || '';
          treeItemEl.tooltipPosition = v['tooltip-position'] || 'auto';
          treeItemEl.value = v.value;
        },
      });
      customElements.define('tree-item-shadow-host', TreeItemShadowHost);
    }

    return html`<tree-item-shadow-host
      .props=${{ ...args }}
    ></tree-item-shadow-host>`;
  },
};
