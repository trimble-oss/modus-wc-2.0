import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';
import {
  TREE_ITEM_END_ACTION_BUTTON_CLASS,
  TREE_ITEM_END_ACTION_CLASS,
  TREE_ITEM_END_ACTION_ICON_CLASS,
  treeItemEndActionStyles,
} from './modus-wc-tree-item-custom-class.story-styles';

interface TreeItemArgs {
  bordered?: boolean;
  checkbox?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  focused?: boolean;
  'has-submenu'?: boolean;
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
    const btnRef = createRef<HTMLElement>();
    const menuRef = createRef<HTMLElement>();

    const attachListeners = () => {
      const btn = btnRef.value;
      const menu = menuRef.value;
      if (!btn || !menu) return;
      console.log('attachListeners', btn, menu);
      btn.addEventListener('click', (e) => {
        console.log('More options clicked', e.target);
        e.stopPropagation();
        const isOpen = menu.style.display !== 'block';
        menu.style.display = isOpen ? 'block' : 'none';
      });

      menu.addEventListener('itemSelect', (e) => {
        console.log(
          'Action:',
          (e as CustomEvent<{ value: string }>).detail.value
        );
        menu.style.display = 'none';
      });

      document.addEventListener('click', (e) => {
        if (
          !btn.contains(e.target as Node) &&
          !menu.contains(e.target as Node)
        ) {
          menu.style.display = 'none';
        }
      });
    };

    const handleButtonClick = (e: CustomEvent) => {
      console.log('Button clicked', e.target);
      e.stopPropagation();
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
        ${ref((el) => { if (el) { (btnRef as { value: Element | undefined }).value = el; attachListeners(); } })}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        @buttonClick=${handleButtonClick}
        aria-label="More options"
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        ${ref((el) => { if (el) { (menuRef as { value: Element | undefined }).value = el; attachListeners(); } })}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true">
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

export const WithCustomClass: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
      <style>${treeItemEndActionStyles}</style>
      <modus-wc-tree-view size="lg">
        <modus-wc-tree-item
          label=${args.label}
          value=${args.value}
          custom-class=${TREE_ITEM_END_ACTION_CLASS}
        >
          <modus-wc-icon slot="start" name="search"></modus-wc-icon>
          <div slot="end" style="display: flex; align-items: stretch;">
            <div
              style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px;"
            ></div>
            <modus-wc-button
              variant="borderless"
              size="sm"
              custom-class=${TREE_ITEM_END_ACTION_BUTTON_CLASS}
              aria-label="Open folder"
            >
              <modus-wc-icon
                name="folder_closed"
                size="sm"
                custom-class=${TREE_ITEM_END_ACTION_ICON_CLASS}
              ></modus-wc-icon>
              <modus-wc-icon
                name="chevron_right"
                size="sm"
                custom-class=${TREE_ITEM_END_ACTION_ICON_CLASS}
              ></modus-wc-icon>
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
        propsMapper: (_v: TreeItemArgs, el: HTMLElement) => {
          const treeViewEl = el as unknown as { ariaLabel: string };
          treeViewEl.ariaLabel = 'Shadow DOM Tree View';

          if (!el.querySelector('modus-wc-tree-item')) {
            el.innerHTML = `<modus-wc-tree-item label="${args.label}" value="${args.value}"></modus-wc-tree-item>`;
          }
        },
      });
      customElements.define('tree-item-shadow-host', TreeItemShadowHost);
    }

    return html`<tree-item-shadow-host
      .props=${{ ...args }}
    ></tree-item-shadow-host>`;
  },
};
