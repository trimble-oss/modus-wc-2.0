import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Orientation } from '../types';

interface ButtonGroupArgs {
  'button-style': 'borderless' | 'fill' | 'outlined';
  color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  disabled: boolean;
  orientation: Orientation;
  'selection-type': 'default' | 'single' | 'multiple';
}

const meta: Meta<ButtonGroupArgs> = {
  title: 'Components/Button Group',
  component: 'modus-wc-button-group',
  args: {},
  argTypes: {
    'button-style': {
      control: { type: 'select' },
      options: ['borderless', 'fill', 'outlined'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    disabled: { control: 'boolean' },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    'selection-type': {
      control: { type: 'select' },
      options: ['default', 'single', 'multiple'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['buttonClick'],
    },
  },
};

export default meta;

type Story = StoryObj;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-button-group
  button-style=${ifDefined(args['button-style'])}
  color=${ifDefined(args.color)}
  disabled=${ifDefined(args.disabled)}
  orientation=${ifDefined(args.orientation)}
  selection-type=${ifDefined(args['selection-type'])}
>
 <modus-wc-button>Button 1</modus-wc-button>
 <modus-wc-button>Button 2</modus-wc-button>
 <modus-wc-button>Button 3</modus-wc-button>
</modus-wc-button-group>
    `;
  },
};

export const Default: Story = { ...Template };

export const Vertical: Story = {
  ...Template,
  args: {
    orientation: 'vertical',
  },
};

export const SplitButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<script>
  const handleItemSelect = (event) => {
    // Update the "Selected Value" label
    const selectedValue = event.detail.value;
    const displayElement = document.querySelector('#selected-value');
    if (displayElement) {
      displayElement.textContent = selectedValue;
    }

    // Close the dropdown menu when an item is selected
    const dropdownMenu = event.target;
    const dropdownMenuElement = dropdownMenu.closest(
      'modus-wc-dropdown-menu'
    );
    if (dropdownMenuElement) {
      dropdownMenuElement.menuVisible = false;
    }
  };

 window.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('#split-button-menu modus-wc-menu-item');
    menuItems.forEach(item =>
      item.addEventListener('itemSelect', handleItemSelect)
    );
  });
</script>

<div style="min-height: 300px;">
  <modus-wc-button-group button-style="outlined">
    <modus-wc-button>Save Document</modus-wc-button>
    <modus-wc-dropdown-menu 
      menu-placement="bottom-end"
      menu-size="lg"
    >
      <div slot="button">
        <modus-wc-icon name="expand_more" size="16"></modus-wc-icon>
      </div>
      
      <div slot="menu" id="split-button-menu">
        <modus-wc-menu-item label="Save as Draft" value="Save as Draft"></modus-wc-menu-item>
        <modus-wc-menu-item label="Save as Template" value="Save as Template"></modus-wc-menu-item>
        <modus-wc-menu-item label="Save and Share" value="Save and Share"></modus-wc-menu-item>
      </div>
    </modus-wc-dropdown-menu>
  </modus-wc-button-group>

<div style="margin-top: 16px;">
  Selected:
  <span id="selected-value"></span>
</div>
</div>
    `;
  },
};

export const SingleSelection: Story = {
  render: () => {
    // prettier-ignore
    return html`
<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <h4 style="margin-bottom: 8px;">Single Selection (Only one button can be active at a time)</h4>
    <modus-wc-button-group selection-type="single" button-style="outlined">
      <modus-wc-button>Option 1</modus-wc-button>
      <modus-wc-button>Option 2</modus-wc-button>
      <modus-wc-button>Option 3</modus-wc-button>
      <modus-wc-button>Option 4</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div>
    <h4 style="margin-bottom: 8px;">Vertical Single Selection</h4>
    <modus-wc-button-group selection-type="single" orientation="vertical" button-style="outlined">
      <modus-wc-button>Small</modus-wc-button>
      <modus-wc-button>Medium</modus-wc-button>
      <modus-wc-button>Large</modus-wc-button>
      <modus-wc-button>X-Large</modus-wc-button>
    </modus-wc-button-group>
  </div>
</div>
    `;
  },
};

export const MultipleSelection: Story = {
  render: () => {
    // prettier-ignore
    return html`
<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <h4 style="margin-bottom: 8px;">Multiple Selection (Multiple buttons can be active)</h4>
    <modus-wc-button-group selection-type="multiple" button-style="outlined">
      <modus-wc-button>Bold</modus-wc-button>
      <modus-wc-button>Italic</modus-wc-button>
      <modus-wc-button>Underline</modus-wc-button>
      <modus-wc-button>Strikethrough</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div>
    <h4 style="margin-bottom: 8px;">Multiple Selection with Icons</h4>
    <modus-wc-button-group selection-type="multiple" button-style="outlined" color="primary">
      <modus-wc-button icon-only aria-label="Align left">
        <modus-wc-icon name="format_align_left" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align center">
        <modus-wc-icon name="format_align_center" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align right">
        <modus-wc-icon name="format_align_right" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align justify">
        <modus-wc-icon name="format_align_justify" size="16"></modus-wc-icon>
      </modus-wc-button>
    </modus-wc-button-group>
  </div>
</div>
    `;
  },
};
