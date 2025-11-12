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
  args: {
    'button-style': 'outlined',
    color: 'primary',
    disabled: false,
    orientation: 'horizontal',
    'selection-type': 'default',
  },
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
      handles: ['buttonSelectionChange', 'buttonGroupClick'],
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
  ?disabled=${(args.disabled)}
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
    'button-style': 'outlined',
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

<div style="display: flex; flex-direction: column; gap: 16px; min-height: 300px;">
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

  <div style="padding: 12px; background-color: #f5f5f5; border-radius: 4px;">
    <strong>Selected Option:</strong> 
    <span id="selected-value">None</span>
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
        <modus-wc-icon name="align_left" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align center">
        <modus-wc-icon name="align_top" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align right">
        <modus-wc-icon name="align_right" size="16"></modus-wc-icon>
      </modus-wc-button>
      <modus-wc-button icon-only aria-label="Align justify">
        <modus-wc-icon name="align_bottom" size="16"></modus-wc-icon>
      </modus-wc-button>
    </modus-wc-button-group>
  </div>
</div>
    `;
  },
};

export const SelectionEvent: Story = {
  render: () => {
    // prettier-ignore
    return html`
<script>
  window.addEventListener('DOMContentLoaded', () => {
    const buttonGroup = document.querySelector('#event-demo-group');
    if (buttonGroup) {
      buttonGroup.addEventListener('buttonSelectionChange', (event) => {
        const selectedButtons = event.detail.selectedButtons;
        const buttonTexts = selectedButtons.map(btn => btn.textContent.trim());
        
        // Update the display
        const displayElement = document.querySelector('#selected-buttons-display');
        if (displayElement) {
          displayElement.textContent = buttonTexts.length > 0 
            ? buttonTexts.join(', ') 
            : 'None';
        }
      });
    }
  });
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <modus-wc-button-group 
      id="event-demo-group"
      selection-type="single" 
      button-style="outlined"
      color="primary"
    >
      <modus-wc-button>Apple</modus-wc-button>
      <modus-wc-button>Banana</modus-wc-button>
      <modus-wc-button>Cherry</modus-wc-button>
      <modus-wc-button>Date</modus-wc-button>
    </modus-wc-button-group>
  </div>
  
  <div style="padding: 12px; background-color: #f5f5f5; border-radius: 4px;">
    <strong>Selected Button(s):</strong> 
    <span id="selected-buttons-display">None</span>
  </div>

    `;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

- The \`size\` prop has been removed. Button sizes are now controlled individually on each button within the group.
- Selection state is now managed internally - the \`selected\` attribute on individual buttons is no longer used.
- Shadow DOM has been removed (\`shadow: false\`) for better composability.

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop        | Notes                                                                    |
|-----------------|-----------------|--------------------------------------------------------------------------|
| aria-label      | aria-label      | Unchanged                                                                |
| aria-disabled   | -               | Removed. Use \`disabled\` prop instead                                   |
| button-style    | button-style    | Values changed: \`fill\` → \`fill\`, \`outline\` → \`outlined\`          |
| color           | color           | \`special\` color removed. Other values unchanged                        |
| disabled        | disabled        | Unchanged                                                                |
| orientation     | orientation     | New in 2.0. Controls horizontal/vertical layout                          |
| selection-type  | selection-type  | Values changed: \`none\` → \`default\`, \`single\` and \`multiple\` unchanged |
| size            | -               | Removed. Control size on individual buttons                              |

#### Event Mapping

| 1.0 Event              | 2.0 Event              | Notes                                                      |
|------------------------|------------------------|------------------------------------------------------------|
| buttonGroupClick       | buttonGroupClick       | Event detail changed: now includes \`{ button, isSelected }\` |
| buttonSelectionChange  | buttonSelectionChange  | Unchanged. Returns array of selected buttons               |
   `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
