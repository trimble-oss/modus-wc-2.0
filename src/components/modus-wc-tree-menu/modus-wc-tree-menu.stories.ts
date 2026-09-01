import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize, Orientation, SelectionMode } from '../types';
import {
  treeMenuCollapsibleMenuSourceCode,
  treeMenuDefaultSourceCode,
  treeMenuMultiSelectSourceCode,
  treeMenuShadowDomParentSourceCode,
} from './modus-wc-tree-menu.story-source';

interface TreeMenuArgs {
  bordered?: boolean;
  'custom-class'?: string;
  orientation?: Orientation;
  'selection-mode'?: SelectionMode;
  size?: ModusSize | 'xs' | 'xl';
}

const meta: Meta<TreeMenuArgs> = {
  title: 'Components/Tree Menu',
  component: 'modus-wc-tree-menu',
  args: {
    orientation: 'vertical',
    'selection-mode': 'single',
    size: 'md',
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    'selection-mode': {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['menuFocusout', 'menuSelectionChange', 'itemSelect'],
    },
  },
};

export default meta;

type Story = StoryObj<TreeMenuArgs>;

export const Default: Story = {
  parameters: {
    docs: { source: { code: treeMenuDefaultSourceCode } },
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tree-menu
  aria-label="Tree menu"
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  orientation=${ifDefined(args.orientation)}
  selection-mode=${ifDefined(args['selection-mode'])}
  size=${ifDefined(args.size)}
>
  <modus-wc-tree-item
    label="Extra Small"
    value="xs"
    size="xs"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Small"
    value="1"
    size="sm"
  ></modus-wc-tree-item>
  <modus-wc-tree-item label="Medium" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Large"
    value="3"
    size="lg"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Extra Large"
    value="xl"
    size="xl"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Bordered"
    value="4"
    bordered="true"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="With Sub-label"
    value="5"
    sub-label="Sub-label"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Selected"
    value="6"
    selected="true"
  ></modus-wc-tree-item>
  <modus-wc-tree-item label="With Start Icon" value="7">
    <modus-wc-icon slot="start" name="info"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="With End Action" value="8">
    <div slot="end" style="display: flex; align-items: center;">
      <modus-wc-button
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
  <modus-wc-tree-item
    label="Disabled"
    value="9"
    disabled="true"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
    `;
  },
};

export const MultiSelect: Story = {
  args: {
    'selection-mode': 'multiple',
  },
  parameters: {
    docs: { source: { code: treeMenuMultiSelectSourceCode } },
  },
  render: (args) => {
    let outputEl: Element | undefined;

    const handleSelectionChange = (
      e: CustomEvent<{ selectedItems: HTMLElement[] }>
    ) => {
      if (!outputEl) return;
      const { selectedItems } = e.detail;
      outputEl.textContent =
        selectedItems.length > 0
          ? `Selected: ${selectedItems.map((i) => i.getAttribute('value')).join(', ')}`
          : 'Selected: none';
    };

    // prettier-ignore
    return html`
<modus-wc-tree-menu
  aria-label="Tree menu"
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  orientation=${ifDefined(args.orientation)}
  selection-mode=${ifDefined(args['selection-mode'])}
  size=${ifDefined(args.size)}
  @menuSelectionChange=${handleSelectionChange}
>
  <modus-wc-tree-item
    label="Item 1"
    size=${ifDefined(args.size)}
    value="1"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Item 2"
    size=${ifDefined(args.size)}
    value="2"
  ></modus-wc-tree-item>
  <modus-wc-tree-item
    label="Item 3"
    size=${ifDefined(args.size)}
    value="3"
  ></modus-wc-tree-item>
</modus-wc-tree-menu>
<p ${ref((el) => (outputEl = el ?? undefined))}>Selected: none</p>
    `;
  },
};

export const CollapsibleMenu: Story = {
  parameters: {
    docs: { source: { code: treeMenuCollapsibleMenuSourceCode } },
  },
  render: (args) => {
    // prettier-ignore
    return html`
      <style>
        .tree-menu-width {
          width: 400px;
        }
      </style>
      <modus-wc-tree-menu
        aria-label="Tree menu"
        ?bordered=${args.bordered}
        custom-class=${args['custom-class'] || 'tree-menu-width'}
        orientation=${ifDefined(args.orientation)}
        selection-mode=${ifDefined(args['selection-mode'])}
        size=${ifDefined(args.size)}
      >
        <modus-wc-tree-item
          label="Parent Item"
          .hasSubmenu=${true}
          size=${ifDefined(args.size)}
          value="parent"
        >
          <modus-wc-tree-menu .isSubMenu=${true}>
            <modus-wc-tree-item
              label="Child 1"
              size=${ifDefined(args.size)}
              value="child-1"
            ></modus-wc-tree-item>
            <modus-wc-tree-item
              label="Child 2"
              size=${ifDefined(args.size)}
              value="child-2"
            ></modus-wc-tree-item>
          </modus-wc-tree-menu>
        </modus-wc-tree-item>
        <modus-wc-tree-item
          label="Sibling Item"
          size=${ifDefined(args.size)}
          value="sibling"
        ></modus-wc-tree-item>
      </modus-wc-tree-menu>
    `;
  },
};

export const ShadowDomParent: Story = {
  parameters: {
    docs: { source: { code: treeMenuShadowDomParentSourceCode } },
  },
  render: (args) => {
    if (!customElements.get('tree-menu-shadow-host')) {
      const TreeMenuShadowHost = createShadowHostClass<TreeMenuArgs>({
        componentTag: 'modus-wc-tree-menu',
        propsMapper: (v: TreeMenuArgs, el: HTMLElement) => {
          const treeMenuEl = el as unknown as {
            ariaLabel: string;
            bordered: boolean;
            customClass: string;
            orientation: string;
            selectionMode: string;
            size: string;
          };
          treeMenuEl.ariaLabel = 'Tree menu';
          treeMenuEl.bordered = Boolean(v.bordered);
          treeMenuEl.customClass = v['custom-class'] || '';
          treeMenuEl.orientation = v.orientation || 'vertical';
          treeMenuEl.selectionMode = v['selection-mode'] || 'single';
          treeMenuEl.size = v.size || 'md';

          if (!el.querySelector('modus-wc-tree-item')) {
            el.innerHTML = `
              <modus-wc-tree-item label="Extra Small" value="xs" size="xs"></modus-wc-tree-item>
              <modus-wc-tree-item label="Small" value="1" size="sm"></modus-wc-tree-item>
              <modus-wc-tree-item label="Medium" value="2"></modus-wc-tree-item>
              <modus-wc-tree-item label="Large" value="3" size="lg"></modus-wc-tree-item>
              <modus-wc-tree-item label="Extra Large" value="xl" size="xl"></modus-wc-tree-item>
              <modus-wc-tree-item label="Bordered" value="4" bordered="true"></modus-wc-tree-item>
              <modus-wc-tree-item label="With Sub-label" value="5" sub-label="Sub-label"></modus-wc-tree-item>
              <modus-wc-tree-item label="Selected" value="6" selected="true"></modus-wc-tree-item>
              <modus-wc-tree-item label="With Start Icon" value="7">
                <modus-wc-icon slot="start" name="info"></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="With End Action" value="8">
                <div slot="end" style="display: flex; align-items: center;">
                  <modus-wc-button
                    variant="borderless"
                    size="sm"
                    shape="circle"
                    color="primary"
                    aria-label="More options"
                  >
                    <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
                  </modus-wc-button>
                </div>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Disabled" value="9" disabled="true"></modus-wc-tree-item>
            `;
          }
        },
      });
      customElements.define('tree-menu-shadow-host', TreeMenuShadowHost);
    }

    return html`<tree-menu-shadow-host
      .props=${{ ...args }}
    ></tree-menu-shadow-host>`;
  },
};
