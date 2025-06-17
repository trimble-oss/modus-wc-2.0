import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Define the arg types for strong typing in Storybook controls/autocomplete
interface ButtonGroupArgs {
  orientation?: 'horizontal' | 'vertical';
  'selection-mode'?: 'single' | 'multiple' | 'none';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'borderless';
  color?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  disabled?: boolean;
  spaced?: boolean;
  'custom-class'?: string;
}

const meta: Meta<ButtonGroupArgs> = {
  title: 'Components/Button Group',
  component: 'modus-wc-button-group',
  parameters: {
    actions: {
      handles: ['buttonGroupSelectionChange'],
    },
    docs: {
      description: {
        component: `
The Button Group component provides an easy way to group related buttons together with built-in selection management.
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the button group',
    },
    'selection-mode': {
      control: 'select',
      options: ['single', 'multiple', 'none'],
      description:
        'Selection behavior - single (radio), multiple (checkbox), or none',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of buttons in the group',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'borderless'],
      description: 'Visual variant of buttons',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
      description: 'Color of buttons in the group',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire button group',
    },
    spaced: {
      control: 'boolean',
      description: 'Add spacing between buttons',
    },
    'custom-class': {
      control: 'text',
      description: 'Custom CSS class to apply',
    },
  },
  args: {
    orientation: 'horizontal',
    'selection-mode': 'single',
    size: 'md',
    variant: 'outlined',
    color: 'primary',
    disabled: false,
    spaced: false,
    'custom-class': '',
  },
  decorators: [withActions],
};

export default meta;
type Story = StoryObj<ButtonGroupArgs>;

export const Default: Story = {
  render: (args) => html`
    <main>
      <modus-wc-button-group
        orientation="${args.orientation || 'horizontal'}"
        selection-mode="${args['selection-mode'] || 'single'}"
        size="${args.size || 'md'}"
        variant="${args.variant || 'outlined'}"
        color="${args.color || 'primary'}"
        ?disabled="${args.disabled}"
        ?spaced="${args.spaced}"
        custom-class="${args['custom-class'] || ''}"
      >
        <modus-wc-button>Day</modus-wc-button>
        <modus-wc-button selected>Week</modus-wc-button>
        <modus-wc-button>Month</modus-wc-button>
        <modus-wc-button>Year</modus-wc-button>
      </modus-wc-button-group>
    </main>
  `,
};

export const Selection: Story = {
  render: (args) => html`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Single Select (Radio Group)</h4>
        <modus-wc-button-group
          selection-mode="single"
          orientation="${args.orientation || 'horizontal'}"
          size="${args.size || 'md'}"
          variant="${args.variant || 'outlined'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          ?spaced="${args.spaced}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>Day</modus-wc-button>
          <modus-wc-button selected>Week</modus-wc-button>
          <modus-wc-button>Month</modus-wc-button>
          <modus-wc-button>Year</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Multiple Select (Checkbox Group)</h4>
        <modus-wc-button-group
          selection-mode="multiple"
          variant="borderless"
          orientation="${args.orientation || 'horizontal'}"
          size="${args.size || 'md'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          ?spaced="${args.spaced}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>
            <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `,
};

export const Orientation: Story = {
  render: (args) => html`
    <main style="display: flex; gap: 3rem; align-items: flex-start;">
      <div>
        <h4 style="margin-bottom: 1rem;">Horizontal (Default)</h4>
        <modus-wc-button-group
          orientation="horizontal"
          selection-mode="${args['selection-mode'] || 'single'}"
          size="${args.size || 'md'}"
          variant="${args.variant || 'outlined'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          ?spaced="${args.spaced}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>Left</modus-wc-button>
          <modus-wc-button selected>Center</modus-wc-button>
          <modus-wc-button>Right</modus-wc-button>
        </modus-wc-button-group>
      </div>
      <div>
        <h4 style="margin-bottom: 1rem;">Vertical</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="${args['selection-mode'] || 'single'}"
          size="${args.size || 'md'}"
          variant="${args.variant || 'outlined'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          ?spaced="${args.spaced}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>
            <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button selected>
            <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `,
};

export const Sizes: Story = {
  render: (args) => html`
    <main
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Small</h4>
        <modus-wc-button-group
          size="sm"
          orientation="${args.orientation || 'horizontal'}"
          selection-mode="${args['selection-mode'] || 'single'}"
          variant="${args.variant || 'outlined'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          ?spaced="${args.spaced}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Medium (Default)</h4>
        <modus-wc-button-group
          size="md"
          orientation="${args.orientation || 'horizontal'}"
          selection-mode="${args['selection-mode'] || 'single'}"
          variant="${args.variant || 'outlined'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          ?spaced="${args.spaced}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Large</h4>
        <modus-wc-button-group
          size="lg"
          orientation="${args.orientation || 'horizontal'}"
          selection-mode="${args['selection-mode'] || 'single'}"
          variant="${args.variant || 'outlined'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          ?spaced="${args.spaced}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `,
};

export const Spacing: Story = {
  name: 'Spacing',
  render: (args) => html`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Seamless (Default)</h4>
        <modus-wc-button-group
          ?spaced=${false}
          orientation="${args.orientation || 'horizontal'}"
          selection-mode="${args['selection-mode'] || 'single'}"
          size="${args.size || 'md'}"
          variant="${args.variant || 'outlined'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Spacing</h4>
        <modus-wc-button-group
          ?spaced=${true}
          orientation="${args.orientation || 'horizontal'}"
          selection-mode="${args['selection-mode'] || 'single'}"
          size="${args.size || 'md'}"
          variant="${args.variant || 'outlined'}"
          color="${args.color || 'primary'}"
          ?disabled="${args.disabled}"
          custom-class="${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `,
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
## Migration from v1 to v2

### Prop Mapping

| v1 \`modus-button-group\` Prop | v2 \`modus-wc-button-group\` Prop | Notes |
| :--- | :--- | :--- |
| \`buttonStyle\` | \`variant\` | \`'outline'\` is now \`'outlined'\`. |
| \`color\` | \`color\` |  |
| \`size\` | \`size\` | \`'medium'\` is now \`'md'\`, etc. |
| \`disabled\` | \`disabled\` |  |
| \`selectionType\` | \`selectionMode\` | Replaces \`selectionType\`. |
| \`selected\` (on button) | \`selected\` (on button) | The group now coordinates the selected state. |

### Event Mapping

| v1 Event | v2 Event | Notes |
| :--- | :--- | :--- |
| \`buttonSelectionChange\` | \`buttonGroupSelectionChange\` | The event now provides the new selection value directly. |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
