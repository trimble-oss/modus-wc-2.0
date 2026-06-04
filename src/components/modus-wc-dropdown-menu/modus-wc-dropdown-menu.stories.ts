import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { DaisySize, ModusSize, PopoverPlacement } from '../types';

interface DropdownMenuArgs {
  'button-aria-label'?: string;
  'button-color'?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  'button-shape'?: 'circle' | 'ellipse' | 'rectangle' | 'square';
  'button-size'?: DaisySize | 'xl';
  'button-variant'?: 'borderless' | 'filled' | 'outlined';
  'custom-class'?: string;
  disabled?: boolean;
  'menu-bordered'?: boolean;
  'menu-offset'?: number;
  'menu-placement'?: PopoverPlacement;
  'menu-size'?: ModusSize;
  'menu-strategy'?: 'absolute' | 'fixed';
  'menu-visible': boolean;
}

const meta: Meta<DropdownMenuArgs> = {
  title: 'Components/Dropdown Menu',
  component: 'modus-wc-dropdown-menu',
  args: {
    'button-aria-label': 'Dropdown menu button',
    'button-color': 'primary',
    'button-shape': 'rectangle',
    'button-size': 'md',
    'button-variant': 'filled',
    disabled: false,
    'menu-bordered': true,
    'menu-offset': 14,
    'menu-placement': 'bottom-start',
    'menu-size': 'md',
    'menu-strategy': 'absolute',
    'menu-visible': false,
  },
  argTypes: {
    'button-color': {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    'button-size': {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    'button-shape': {
      control: { type: 'select' },
      options: ['circle', 'ellipse', 'rectangle', 'square'],
    },
    'button-variant': {
      control: { type: 'select' },
      options: ['borderless', 'filled', 'outlined'],
    },
    'menu-placement': {
      control: { type: 'select' },
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    'menu-size': {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    'menu-strategy': {
      control: { type: 'select' },
      options: ['absolute', 'fixed'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['menuVisibilityChange'],
    },
  },
};

export default meta;

type Story = StoryObj<DropdownMenuArgs>;

const Template: Story = {
  render: (args) => {
    let selectedValue = '';

    const handleItemSelect = (event: CustomEvent) => {
      selectedValue = event.detail.value;
      const displayElement = document.querySelector('#selected-value');
      if (displayElement) {
        displayElement.textContent = selectedValue;
      }

      // Close the dropdown menu when an item is selected
      const dropdownMenu = event.target as HTMLElement;
      const dropdownMenuElement = dropdownMenu.closest(
        'modus-wc-dropdown-menu'
      );
      if (dropdownMenuElement) {
        dropdownMenuElement.menuVisible = false;
      }
    };

    // prettier-ignore
    return html`
<style>
  /* Storybook styling */
  div#story--components-dropdown-menu--default--primary-inner {
    display: flex;
    align-items: center;
    height: 240px;
  }

  [slot="button"] {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .value {
    font-size: 14px;
    padding-top: 12px;
  }
</style>



<modus-wc-dropdown-menu
  button-aria-label=${ifDefined(args['button-aria-label'])}
  button-color=${ifDefined(args['button-color'])}
  button-shape=${ifDefined(args['button-shape'])}
  button-size=${ifDefined(args['button-size'])}
  button-variant=${ifDefined(args['button-variant'])}
  custom-class=${ifDefined(args['custom-class'])}
  ?disabled=${args.disabled}
  ?menu-bordered=${args['menu-bordered']}
  menu-offset=${ifDefined(args['menu-offset'])}
  menu-placement=${ifDefined(args['menu-placement'])}
  menu-size=${ifDefined(args['menu-size'])}
  menu-strategy=${ifDefined(args['menu-strategy'])}
  ?menu-visible=${args['menu-visible']}
>
  <div slot="button">
    Button
    <modus-wc-icon name="expand_more" size="sm" />
  </div>

  <div slot="menu">
    <modus-wc-menu-item label="Item One" value="1" @itemSelect=${handleItemSelect}></modus-wc-menu-item>
    <modus-wc-menu-item label="Item Two" value="2" @itemSelect=${handleItemSelect} /></modus-wc-menu-item>
    <modus-wc-menu-item label="Item Three" value="3" @itemSelect=${handleItemSelect} /></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>
<script>
  // //  Adding this block to handle menu item selection to update a label and close the dropdown via JS.
  // let selectedValue = '';

  // const handleItemSelect = (event) => {
  // //  Update the "Selected Value" label
  //   selectedValue = event.detail.value;
  //   const displayElement = document.querySelector('#selected-value');
  //   if (displayElement) {
  //     displayElement.textContent = selectedValue;
  //   }

  //   // Close the dropdown menu when an item is selected
  //   const dropdownMenu = event.target;
  //   const dropdownMenuElement = dropdownMenu.closest(
  //     'modus-wc-dropdown-menu'
  //   );
  //   if (dropdownMenuElement) {
  //     dropdownMenuElement.menuVisible = false;
  //   }
  // };
  //  const menuItems = document.querySelectorAll('modus-wc-menu-item');
  //   menuItems.forEach(item => {
  //     item.addEventListener('itemSelect', handleItemSelect);
  //   });
</script>

<div class="value">
  Selected Value:
  <span id="selected-value"></span>
</div>
    `;
  },
};

export const Default: Story = { ...Template };

export const IconOnlyDropdownMenu: Story = {
  render: () => {
    // prettier-ignore
    return html`
<style>
  /* Storybook styling */
  div[id^='story--components-dropdown-menu--icon-only-dropdown-menu'] {
    height: 60px;
  }
</style>

<modus-wc-dropdown-menu button-shape="square">
  <div slot="button">
    <modus-wc-icon decorative name="more_vertical"></modus-wc-icon>
  </div>
  <div slot="menu">
    <modus-wc-menu-item label="Item One"></modus-wc-menu-item>
  </div>
</modus-wc-dropdown-menu>
    `;
  },
};

export const WithTreeMenu: Story = {
  args: {
    'menu-bordered': false,
    'menu-placement': 'bottom-end',
    'menu-size': 'sm',
  },
  parameters: {
    actions: {
      handles: ['menuVisibilityChange', 'itemSelect'],
    },
    docs: {
      source: {
        code: `
<modus-wc-dropdown-menu
  button-variant="filled"
  button-color="primary"
  menu-placement="bottom-end"
  menu-size="sm"
  id="tree-dropdown-menu"
>
  <div slot="button">
    Browse
    <modus-wc-icon name="expand_more" size="sm"></modus-wc-icon>
  </div>
    <modus-wc-tree-menu slot="menu" aria-label="Tree menu" bordered="true" size="sm">
      <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
      <modus-wc-tree-item label="Explorer" value="explorer"></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div>
  Selected Value: <span id="tree-dropdown-selected-value"></span>
</div>
<script>
  const dropdown = document.getElementById('tree-dropdown-menu');
  const display = document.getElementById('tree-dropdown-selected-value');

  dropdown.addEventListener('itemSelect', (e) => {
    display.textContent = e.detail.value;
    dropdown.menuVisible = false;
  });
</script>
`,
      },
    },
  },
  render: (args) => {
    const handleItemSelect = (event: CustomEvent) => {
      const displayElement = document.querySelector(
        '#tree-dropdown-selected-value'
      );
      if (displayElement) {
        displayElement.textContent = event.detail.value;
      }

      const dropdownMenuElement = (event.target as HTMLElement).closest(
        'modus-wc-dropdown-menu'
      );
      if (dropdownMenuElement) {
        (
          dropdownMenuElement as unknown as { menuVisible: boolean }
        ).menuVisible = false;
      }
    };

    // prettier-ignore
    return html`
<style>
  div[id^='story--components-dropdown-menu--with-tree-menu'] {
    display: flex;
    align-items: center;
    height: 320px;
  }

  [slot='button'] {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .value {
    font-size: 14px;
    padding-top: 12px;
  }
</style>

<modus-wc-dropdown-menu
  button-aria-label=${ifDefined(args['button-aria-label'])}
  button-color=${ifDefined(args['button-color'])}
  button-shape=${ifDefined(args['button-shape'])}
  button-size=${ifDefined(args['button-size'])}
  button-variant=${ifDefined(args['button-variant'])}
  custom-class=${ifDefined(args['custom-class'])}
  ?disabled=${args.disabled}
  ?menu-bordered=${args['menu-bordered']}
  menu-offset=${ifDefined(args['menu-offset'])}
  menu-placement=${ifDefined(args['menu-placement'])}
  menu-size=${ifDefined(args['menu-size'])}
  menu-strategy=${ifDefined(args['menu-strategy'])}
  ?menu-visible=${args['menu-visible']}
>
  <div slot="button">
    Browse
    <modus-wc-icon name="expand_more" size="sm"></modus-wc-icon>
  </div>
    <modus-wc-tree-menu slot="menu" aria-label="Tree menu" bordered="true" size="sm">
      <modus-wc-tree-item
        label="Projects"
        value="projects"
        @itemSelect=${handleItemSelect}
      ></modus-wc-tree-item>
      <modus-wc-tree-item
        label="Explorer"
        value="explorer"
        @itemSelect=${handleItemSelect}
      ></modus-wc-tree-item>
    </modus-wc-tree-menu>
</modus-wc-dropdown-menu>

<div class="value">
  Selected Value:
  <span id="tree-dropdown-selected-value"></span>
</div>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('dropdown-menu-shadow-host')) {
      const DropdownMenuShadowHost = createShadowHostClass<DropdownMenuArgs>({
        componentTag: 'modus-wc-dropdown-menu',
        propsMapper: (v: DropdownMenuArgs, el: HTMLElement) => {
          const dropdownEl = el as unknown as {
            buttonAriaLabel: string;
            buttonColor: string;
            buttonShape: string;
            buttonSize: DaisySize;
            buttonVariant: string;
            customClass: string;
            disabled: boolean;
            menuBordered: boolean;
            menuOffset: number;
            menuPlacement: PopoverPlacement;
            menuSize: ModusSize;
            menuStrategy: 'absolute' | 'fixed';
            menuVisible: boolean;
          };
          dropdownEl.buttonAriaLabel = v['button-aria-label'] || '';
          dropdownEl.buttonColor = v['button-color'] || 'primary';
          dropdownEl.buttonShape = v['button-shape'] || 'rectangle';
          dropdownEl.buttonSize = v['button-size'] as DaisySize;
          dropdownEl.buttonVariant = v['button-variant'] || 'filled';
          dropdownEl.customClass = v['custom-class'] || '';
          dropdownEl.disabled = Boolean(v.disabled);
          dropdownEl.menuBordered = Boolean(v['menu-bordered']);
          dropdownEl.menuOffset = v['menu-offset'] ?? 10;
          dropdownEl.menuPlacement = v['menu-placement'] as PopoverPlacement;
          dropdownEl.menuSize = v['menu-size'] as ModusSize;
          dropdownEl.menuStrategy = v['menu-strategy'] || 'absolute';
          dropdownEl.menuVisible = Boolean(v['menu-visible']);

          // On first render: add slot content and append the Selected Value
          // display as a sibling of el inside the helper's display:contents
          // wrapper — both become direct layout children of the shadow root.
          if (!el.hasAttribute('data-layout-built')) {
            el.setAttribute('data-layout-built', '');

            const wrapper = el.parentElement!;

            const buttonSlot = document.createElement('div');
            buttonSlot.setAttribute('slot', 'button');
            buttonSlot.style.cssText =
              'display: flex; align-items: center; gap: 4px;';
            buttonSlot.appendChild(document.createTextNode('Button'));
            const expandIcon = document.createElement('modus-wc-icon');
            expandIcon.setAttribute('name', 'expand_more');
            expandIcon.setAttribute('size', 'sm');
            buttonSlot.appendChild(expandIcon);

            const menuSlot = document.createElement('div');
            menuSlot.setAttribute('slot', 'menu');
            [
              { label: 'Item One', value: '1' },
              { label: 'Item Two', value: '2' },
              { label: 'Item Three', value: '3' },
            ].forEach(({ label, value }) => {
              const item = document.createElement('modus-wc-menu-item');
              item.setAttribute('label', label);
              item.setAttribute('value', value);
              menuSlot.appendChild(item);
            });

            el.appendChild(buttonSlot);
            el.appendChild(menuSlot);

            // Selected value display as sibling in wrapper
            const valueDiv = document.createElement('div');
            valueDiv.style.cssText = 'font-size: 14px; padding-top: 12px;';
            valueDiv.textContent = 'Selected Value: ';
            const valueSpan = document.createElement('span');
            valueDiv.appendChild(valueSpan);
            wrapper.appendChild(valueDiv);

            el.addEventListener('itemSelect', (e: Event) => {
              const custom = e as CustomEvent<{ value: string }>;
              valueSpan.textContent = custom.detail?.value ?? '';
              (el as unknown as { menuVisible: boolean }).menuVisible = false;
            });
          }
        },
      });
      customElements.define(
        'dropdown-menu-shadow-host',
        DropdownMenuShadowHost
      );
    }

    return html`<dropdown-menu-shadow-host
      .props=${{ ...args }}
    ></dropdown-menu-shadow-host>`;
  },
};
