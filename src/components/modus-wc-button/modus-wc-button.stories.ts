import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../types';

interface ButtonArgs {
  color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  'custom-class'?: string;
  disabled: boolean;
  'full-width': boolean;
  pressed: boolean;
  shape: 'circle' | 'rectangle' | 'square';
  size: DaisySize;
  type: 'button' | 'submit' | 'reset';
  variant: 'borderless' | 'filled' | 'outlined';
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  component: 'modus-wc-button',
  args: {
    color: 'primary',
    disabled: false,
    'full-width': false,
    pressed: false,
    shape: 'rectangle',
    size: 'md',
    type: 'button',
    variant: 'filled',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'rectangle', 'square'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      control: { type: 'select' },
      options: ['borderless', 'filled', 'outlined'],
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

type Story = StoryObj<ButtonArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-button
  aria-label="Click me button"
  color="${args.color}"
  custom-class="${ifDefined(args['custom-class'])}"
  ?disabled="${args.disabled}"
  ?full-width="${args['full-width']}"
  ?pressed="${args.pressed}"
  shape="${args.shape}"
  size="${args.size}"
  type="${args.type}"
  variant="${args.variant}"
>
  Click me
</modus-wc-button>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

export const ButtonShapes: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button
  aria-label="Circle button"
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  aria-label="Square button"
  shape="square"
>
  Square
</modus-wc-button>
    `;
  },
};

export const IconOnlyButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button aria-label="Notification button">
  <modus-wc-icon decorative name="notifications"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};

export const IconLeftButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button aria-label="Download button">
  <modus-wc-icon decorative name="download"></modus-wc-icon>
  Download
</modus-wc-button>
    `;
  },
};

export const IconRightButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button aria-label="Details button">
  Details
  <modus-wc-icon decorative name="launch"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};

export const IconLeftAndRightButton: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-button aria-label="Checkout button">
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
    `;
  },
};

export const ButtonGroup: Story = {
  render: () => {
    // State to track button groups
    const buttonGroupState = {
      alignment: 'center',
      period: 'week',
      formatting: ['italic'],
      options: ['option1', 'option3'],
      sizes: {
        sm: 'group',
        md: 'group',
        lg: 'group',
      },
    };

    // Handler for single-select groups (radio behavior)
    const handleSingleSelect = (groupKey: string, value: string) => {
      return (e: CustomEvent) => {
        buttonGroupState[groupKey] = value;

        // Force re-render by updating the DOM
        const button = e.target as HTMLElement;
        const group = button.closest('.button-group');
        if (group) {
          const buttons = group.querySelectorAll('modus-wc-button');
          buttons.forEach((btn) => {
            btn.removeAttribute('pressed');
          });
          button.setAttribute('pressed', 'true');
        }
      };
    };

    // Handler for multi-select groups (checkbox behavior)
    const handleMultiSelect = (groupKey: string, value: string) => {
      return (e: CustomEvent) => {
        const currentArray = buttonGroupState[groupKey] as string[];
        const button = e.target as HTMLElement;

        if (currentArray.includes(value)) {
          buttonGroupState[groupKey] = currentArray.filter((v) => v !== value);
          button.removeAttribute('pressed');
        } else {
          buttonGroupState[groupKey] = [...currentArray, value];
          button.setAttribute('pressed', 'true');
        }
      };
    };

    // prettier-ignore
    return html`
<style>
  .button-group {
    display: flex;
    gap: 0;
  }
  
  .button-group-horizontal {
    flex-direction: row;
  }
  
  .button-group-vertical {
    flex-direction: column;
    width: fit-content;
  }
  
  .button-group-spaced {
    gap: 8px;
  }
  
  .demo-section {
    margin-bottom: 48px;
  }
  
  .demo-section h4 {
    margin: 0 0 24px 0;
    font-size: 14px;
    font-weight: 600;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .demo-row {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    margin-bottom: 24px;
  }

  .demo-row:last-child {
    margin-bottom: 0;
  }

  /* Pressed state styling for button groups */
  .button-group modus-wc-button[pressed] .modus-wc-btn {
    background-color: var(--modus-wc-color-trimble-blue) !important;
    color: var(--modus-wc-color-white) !important;
    border-color: var(--modus-wc-color-trimble-blue) !important;
  }

  /* Dark theme pressed state */
  [data-theme='modus-classic-dark'] .button-group modus-wc-button[pressed] .modus-wc-btn {
    background-color: var(--modus-wc-color-highlight-blue) !important;
    color: var(--modus-wc-color-gray-10) !important;
    border-color: var(--modus-wc-color-highlight-blue) !important;
  }

  /* Seamless horizontal button group appearance only */
  .button-group-horizontal:not(.button-group-spaced) modus-wc-button:not(:first-child) .modus-wc-btn {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .button-group-horizontal:not(.button-group-spaced) modus-wc-button:not(:last-child) .modus-wc-btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* Hover effects for pressed buttons */
  .button-group modus-wc-button[pressed] .modus-wc-btn:hover {
    background-color: var(--modus-wc-color-blue-light) !important;
    border-color: var(--modus-wc-color-blue-light) !important;
  }

  [data-theme='modus-classic-dark'] .button-group modus-wc-button[pressed] .modus-wc-btn:hover {
    background-color: var(--modus-wc-color-blue-light) !important;
    border-color: var(--modus-wc-color-blue-light) !important;
  }
</style>

<main>
  <section class="demo-section">
    <h4>Vertical Button Groups</h4>
    
    <div class="demo-row">
      <div class="button-group button-group-vertical">
        <modus-wc-button 
          variant="borderless" 
          aria-label="Bold"
          full-width
          ?pressed=${buttonGroupState.formatting.includes('bold')}
          @buttonClick=${handleSingleSelect('formatting', 'bold')}
        >
          <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
        </modus-wc-button>
        <modus-wc-button 
          variant="borderless" 
          aria-label="Italic"
          full-width
          ?pressed=${buttonGroupState.formatting.includes('italic')}
          @buttonClick=${handleSingleSelect('formatting', 'italic')}
        >
          <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
        </modus-wc-button>
        <modus-wc-button 
          variant="borderless" 
          aria-label="Underline"
          full-width
          ?pressed=${buttonGroupState.formatting.includes('underline')}
          @buttonClick=${handleSingleSelect('formatting', 'underline')}
        >
          <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
    
    <div class="demo-row">
      <div class="button-group button-group-vertical">
        <modus-wc-button 
          variant="borderless" 
          aria-label="Bold"
          full-width
          ?pressed=${buttonGroupState.formatting.includes('bold')}
          @buttonClick=${handleMultiSelect('formatting', 'bold')}
        >
          <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
        </modus-wc-button>
        <modus-wc-button 
          variant="borderless" 
          aria-label="Italic"
          full-width
          ?pressed=${buttonGroupState.formatting.includes('italic')}
          @buttonClick=${handleMultiSelect('formatting', 'italic')}
        >
          <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
        </modus-wc-button>
        <modus-wc-button 
          variant="borderless" 
          aria-label="Underline"
          full-width
          ?pressed=${buttonGroupState.formatting.includes('underline')}
          @buttonClick=${handleMultiSelect('formatting', 'underline')}
        >
          <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
        </modus-wc-button>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h4>Horizontal Button Groups</h4>
    
    <div class="demo-row">
      <div class="button-group button-group-horizontal">
        <modus-wc-button 
          variant="outlined" 
          size="sm" 
          ?pressed=${buttonGroupState.period === 'day'}
          @buttonClick=${handleSingleSelect('period', 'day')}
        >
          Day
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="sm"
          ?pressed=${buttonGroupState.period === 'week'}
          @buttonClick=${handleSingleSelect('period', 'week')}
        >
          Week
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="sm"
          ?pressed=${buttonGroupState.period === 'month'}
          @buttonClick=${handleSingleSelect('period', 'month')}
        >
          Month
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="sm"
          ?pressed=${buttonGroupState.period === 'year'}
          @buttonClick=${handleSingleSelect('period', 'year')}
        >
          Year
        </modus-wc-button>
      </div>
    </div>
    
    <div class="demo-row">
      <div class="button-group button-group-horizontal">
        <modus-wc-button 
          variant="outlined"
          ?pressed=${buttonGroupState.options.includes('option1')}
          @buttonClick=${handleMultiSelect('options', 'option1')}
        >
          Bold
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined"
          ?pressed=${buttonGroupState.options.includes('option2')}
          @buttonClick=${handleMultiSelect('options', 'option2')}
        >
          Italic
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined"
          ?pressed=${buttonGroupState.options.includes('option3')}
          @buttonClick=${handleMultiSelect('options', 'option3')}
        >
          Underline
        </modus-wc-button>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h4>Different Sizes</h4>
    
    <div class="demo-row">
      <div class="button-group button-group-horizontal">
        <modus-wc-button 
          variant="outlined" 
          size="sm"
          ?pressed=${buttonGroupState.sizes.sm === 'small'}
          @buttonClick=${handleSingleSelect('sizes.sm', 'small')}
        >
          Small
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="sm"
          ?pressed=${buttonGroupState.sizes.sm === 'group'}
          @buttonClick=${handleSingleSelect('sizes.sm', 'group')}
        >
          Group
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="sm"
          ?pressed=${buttonGroupState.sizes.sm === 'example'}
          @buttonClick=${handleSingleSelect('sizes.sm', 'example')}
        >
          Example
        </modus-wc-button>
      </div>
    </div>
    
    <div class="demo-row">
      <div class="button-group button-group-horizontal">
        <modus-wc-button 
          variant="outlined" 
          size="md"
          ?pressed=${buttonGroupState.sizes.md === 'medium'}
          @buttonClick=${handleSingleSelect('sizes.md', 'medium')}
        >
          Medium
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="md"
          ?pressed=${buttonGroupState.sizes.md === 'group'}
          @buttonClick=${handleSingleSelect('sizes.md', 'group')}
        >
          Group
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="md"
          ?pressed=${buttonGroupState.sizes.md === 'example'}
          @buttonClick=${handleSingleSelect('sizes.md', 'example')}
        >
          Example
        </modus-wc-button>
      </div>
    </div>
    
    <div class="demo-row">
      <div class="button-group button-group-horizontal">
        <modus-wc-button 
          variant="outlined" 
          size="lg"
          ?pressed=${buttonGroupState.sizes.lg === 'large'}
          @buttonClick=${handleSingleSelect('sizes.lg', 'large')}
        >
          Large
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="lg"
          ?pressed=${buttonGroupState.sizes.lg === 'group'}
          @buttonClick=${handleSingleSelect('sizes.lg', 'group')}
        >
          Group
        </modus-wc-button>
        <modus-wc-button 
          variant="outlined" 
          size="lg"
          ?pressed=${buttonGroupState.sizes.lg === 'example'}
          @buttonClick=${handleSingleSelect('sizes.lg', 'example')}
        >
          Example
        </modus-wc-button>
      </div>
    </div>
  </section>
</main>
    `;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 buttons had specific properties for adding icons (\`icon-only\`, \`left-icon\`, \`right-icon\`). In 2.0, icons are added via slots using the \`modus-wc-icon\` component.
  - The \`button-style\` property has been renamed to \`variant\` with similar options.
  - Size values have changed from verbose names (\`small\`, \`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop   | Notes                                                       |
|-----------------|------------|-------------------------------------------------------------|
| aria-label      | aria-label |                                                             |
| button-style    | variant    | \`fill\` → \`filled\`, \`outline\` → \`outlined\`           |
| color           | color      | \`dark\` and \`special\` removed, \`warning\` added         |
| critical-action |            | Not carried over                                            |
| disabled        | disabled   |                                                             |
| icon-only       |            | Not carried over, use \`icon\` slot                         |
| left-icon       |            | Not carried over, use \`icon\` slot                         |
| right-icon      |            | Not carried over, use \`icon\` slot                         |
| show-caret      |            | Not carried over                                            |
| size            | size       | \`small\` → \`sm\`, \`medium\` → \`md\`, \`large\` → \`lg\` |
| type            | type       |                                                             |

#### Event Mapping

| 1.0 Event    | 2.0 Event    | Notes            |
|--------------|--------------|------------------|
| buttonClick  | buttonClick  |                  |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
