import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Define the arg types for strong typing in Storybook controls/autocomplete
interface ButtonGroupArgs {
  orientation?: 'horizontal' | 'vertical';
  'selection-mode'?: 'single' | 'multiple' | 'none';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'borderless';
  value?: string | string[];
  disabled?: boolean;
  spaced?: boolean;
  'custom-class'?: string;
}

const meta: Meta<ButtonGroupArgs> = {
  title: 'Components/Button Group',
  component: 'modus-wc-button-group',
  parameters: {
    docs: {
      description: {
        component: `
The Button Group component provides an easy way to group related buttons together with built-in selection management.

## Features
- **Simple API**: Just wrap buttons in \`modus-wc-button-group\`
- **Selection Modes**: Single select (radio), multiple select (checkbox), or none
- **Orientations**: Horizontal or vertical layouts
- **Sizes**: Small, medium, or large
- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Styling**: Automatic pressed states and seamless button connections
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
    value: {
      control: 'text',
      description:
        'Selected value(s). String for single mode, array for multiple mode',
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
};

export default meta;
type Story = StoryObj<ButtonGroupArgs>;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-button-group
      orientation="${args.orientation || 'horizontal'}"
      selection-mode="${args['selection-mode'] || 'single'}"
      size="${args.size || 'md'}"
      variant="${args.variant || 'outlined'}"
      value="${args.value || 'week'}"
      ?disabled="${args.disabled}"
      ?spaced="${args.spaced}"
      custom-class="${args['custom-class'] || ''}"
      @buttonGroupSelectionChange="${(e) =>
        console.log('Selection changed:', e.detail)}"
    >
      <modus-wc-button value="day">Day</modus-wc-button>
      <modus-wc-button value="week">Week</modus-wc-button>
      <modus-wc-button value="month">Month</modus-wc-button>
      <modus-wc-button value="year">Year</modus-wc-button>
    </modus-wc-button-group>
  `,
  args: {
    orientation: 'horizontal',
    'selection-mode': 'single',
    size: 'md',
    variant: 'outlined',
    value: 'week',
    disabled: false,
    spaced: false,
    'custom-class': '',
  },
};

export const SingleSelect: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Time Period Selection</h4>
        <modus-wc-button-group selection-mode="single" value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month">Month</modus-wc-button>
          <modus-wc-button value="year">Year</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Text Alignment</h4>
        <modus-wc-button-group selection-mode="single" size="sm" value="center">
          <modus-wc-button value="left">
            <modus-wc-icon decorative name="text_align_left"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="center">
            <modus-wc-icon decorative name="text_centered"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="right">
            <modus-wc-icon decorative name="text_align_right"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `,
};

export const MultipleSelect: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Text Formatting</h4>
        <modus-wc-button-group selection-mode="multiple" variant="borderless">
          <modus-wc-button value="bold">
            <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="italic">
            <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="underline">
            <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Filter Options</h4>
        <modus-wc-button-group selection-mode="multiple" size="sm" spaced>
          <modus-wc-button value="active">Active</modus-wc-button>
          <modus-wc-button value="featured">Featured</modus-wc-button>
          <modus-wc-button value="archived">Archived</modus-wc-button>
          <modus-wc-button value="draft">Draft</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `,
};

export const VerticalOrientation: Story = {
  render: () => html`
    <div style="display: flex; gap: 3rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Media Controls</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="single"
          variant="borderless"
          value="pause"
        >
          <modus-wc-button value="play">
            <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="pause">
            <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="stop">
            <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Navigation Menu</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="single"
          size="lg"
          value="dashboard"
        >
          <modus-wc-button value="dashboard">Dashboard</modus-wc-button>
          <modus-wc-button value="projects">Projects</modus-wc-button>
          <modus-wc-button value="reports">Reports</modus-wc-button>
          <modus-wc-button value="settings">Settings</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `,
};

export const DifferentSizes: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Small Size</h4>
        <modus-wc-button-group size="sm" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Medium Size (Default)</h4>
        <modus-wc-button-group size="md" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Large Size</h4>
        <modus-wc-button-group size="lg" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Entire Group Disabled</h4>
        <modus-wc-button-group disabled value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month">Month</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Individual Button Disabled</h4>
        <modus-wc-button-group value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month" disabled>Month</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `,
};

export const WithSpacing: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Seamless (Default)</h4>
        <modus-wc-button-group value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Spacing</h4>
        <modus-wc-button-group spaced value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `,
};
