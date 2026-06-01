import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ref } from 'lit/directives/ref.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize, Orientation, SelectionMode } from '../types';
import {
  treeViewCollapsibleMenuSourceCode,
  treeViewDefaultSourceCode,
  treeViewMultiSelectSourceCode,
  treeViewShadowDomParentSourceCode,
} from './modus-wc-tree-view.story-source';

interface TreeViewArgs {
  bordered?: boolean;
  'custom-class'?: string;
  orientation?: Orientation;
  'selection-mode'?: SelectionMode;
  size?: ModusSize;
}

const meta: Meta<TreeViewArgs> = {
  title: 'Components/Tree View',
  component: 'modus-wc-tree-view',
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
      options: ['xs', 'sm', 'md', 'lg'],
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

type Story = StoryObj<TreeViewArgs>;

export const Default: Story = {
  parameters: {
    docs: { source: { code: treeViewDefaultSourceCode } },
  },
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-tree-view
  aria-label="Tree view"
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  orientation=${ifDefined(args.orientation)}
  selection-mode=${ifDefined(args['selection-mode'])}
  size=${ifDefined(args.size)}
>
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
</modus-wc-tree-view>
    `;
  },
};

export const MultiSelect: Story = {
  args: {
    'selection-mode': 'multiple',
  },
  parameters: {
    docs: { source: { code: treeViewMultiSelectSourceCode } },
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
<modus-wc-tree-view
  aria-label="Tree view"
  selection-mode=${ifDefined(args['selection-mode'])}
  @menuSelectionChange=${handleSelectionChange}
>
  <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
  <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
</modus-wc-tree-view>
<p ${ref((el) => (outputEl = el ?? undefined))}>Selected: none</p>
    `;
  },
};

export const CollapsibleMenu: Story = {
  parameters: {
    docs: { source: { code: treeViewCollapsibleMenuSourceCode } },
  },
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-tree-view aria-label="Tree view">
  <modus-wc-tree-item label="Parent Item" value="parent" has-submenu="true">
    <modus-wc-tree-view is-sub-menu="true">
      <modus-wc-tree-item label="Child 1" value="child-1"></modus-wc-tree-item>
      <modus-wc-tree-item label="Child 2" value="child-2"></modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Sibling Item" value="sibling"></modus-wc-tree-item>
</modus-wc-tree-view>
    `;
  },
};

export const ShadowDomParent: Story = {
  parameters: {
    docs: { source: { code: treeViewShadowDomParentSourceCode } },
  },
  render: (args) => {
    if (!customElements.get('tree-view-shadow-host')) {
      const TreeViewShadowHost = createShadowHostClass<TreeViewArgs>({
        componentTag: 'modus-wc-tree-view',
        propsMapper: (v: TreeViewArgs, el: HTMLElement) => {
          const treeViewEl = el as unknown as {
            ariaLabel: string;
            bordered: boolean;
            customClass: string;
            orientation: string;
            selectionMode: string;
            size: string;
          };
          treeViewEl.ariaLabel = 'Shadow DOM Tree View';
          treeViewEl.bordered = Boolean(v.bordered);
          treeViewEl.customClass = v['custom-class'] || '';
          treeViewEl.orientation = v.orientation || 'vertical';
          treeViewEl.selectionMode = v['selection-mode'] || 'single';
          treeViewEl.size = v.size || 'md';

          if (!el.hasAttribute('data-items-built')) {
            el.setAttribute('data-items-built', '');
            el.innerHTML = `
              <modus-wc-tree-item label="Item 1" value="1"></modus-wc-tree-item>
              <modus-wc-tree-item label="Item 2" value="2"></modus-wc-tree-item>
              <modus-wc-tree-item label="Item 3" value="3"></modus-wc-tree-item>
            `;
          }
        },
      });
      customElements.define('tree-view-shadow-host', TreeViewShadowHost);
    }

    return html`<tree-view-shadow-host
      .props=${{ ...args }}
    ></tree-view-shadow-host>`;
  },
};
