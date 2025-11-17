import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize, ModusSize, PopoverPlacement } from '../types';

interface DropdownMenuArgs {
  'button-aria-label'?: string;
  'button-color'?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  'button-size'?: DaisySize;
  'button-variant'?: 'borderless' | 'filled' | 'outlined';
  'custom-class'?: string;
  disabled?: boolean;
  'menu-bordered'?: boolean;
  'menu-offset'?: number;
  'menu-placement'?: PopoverPlacement;
  'menu-size'?: ModusSize;
  'menu-visible': boolean;
}

const meta: Meta<DropdownMenuArgs> = {
  title: 'Components/Dropdown Menu',
  component: 'modus-wc-dropdown-menu',
  args: {
    'button-aria-label': 'Dropdown menu button',
    'button-color': 'primary',
    'button-size': 'md',
    'button-variant': 'filled',
    disabled: false,
    'menu-bordered': true,
    'menu-offset': 14,
    'menu-placement': 'bottom-start',
    'menu-size': 'md',
    'menu-visible': false,
  },
  argTypes: {
    'button-color': {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    'button-size': {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
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
  button-size=${ifDefined(args['button-size'])}
  button-variant=${ifDefined(args['button-variant'])}
  custom-class=${ifDefined(args['custom-class'])}
  ?disabled=${args.disabled}
  ?menu-bordered=${args['menu-bordered']}
  menu-offset=${ifDefined(args['menu-offset'])}
  menu-placement=${ifDefined(args['menu-placement'])}
  menu-size=${ifDefined(args['menu-size'])}
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
  // Adding this block to handle menu item selection to update a label and close the dropdown via JS.
  // let selectedValue = '';

  // const handleItemSelect = (event) {
  //  Update the "Selected Value" label
  //   selectedValue = event.detail.value;
  //   const displayElement = document.querySelector('#selected-value');
  //   if (displayElement) {
  //     displayElement.textContent = selectedValue;
  //   }

  //   Close the dropdown menu when an item is selected
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
