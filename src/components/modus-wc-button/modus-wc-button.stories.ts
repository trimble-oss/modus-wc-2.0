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
  shape: 'circle' | 'ellipse' | 'rectangle' | 'square';
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
      options: ['circle', 'ellipse', 'rectangle', 'square'],
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
shape="rectangle"
>
  Rectangle
</modus-wc-button>
<modus-wc-button
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
  shape="square"
>
  Square
</modus-wc-button>
<modus-wc-button
  shape="ellipse"
>
  Ellipse
</modus-wc-button>
    `;
  },
};

export const DynamicTextUpdate: Story = {
  render: () => {
    const updateButtonText = () => {
      const btnText = document.getElementById('btn-text') as HTMLSpanElement;
      const input = document.getElementById(
        'btn-text-input'
      ) as HTMLInputElement;

      btnText.textContent = input.value;
    };

    // prettier-ignore
    return html`
<script>
  function updateButtonText() {
    const btnText = document.getElementById('btn-text');
    const input = document.getElementById('btn-text-input');
    btnText.textContent = input.value;
  }
  // Call updateButtonText function using the button's click event
  // Example:  <modus-wc-button color="primary" variant="filled" buttonClick="updateButtonText()"></modus-wc-button>
</script>

<div>
  <modus-wc-button id="text-update-btn" color="primary" variant="filled" @buttonClick=${updateButtonText}>
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon><span id="btn-text">Press button to update content</span>
    <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  </modus-wc-button>

  <div style="margin-top: 8px; display: flex; gap: 8px; align-items: center;">
    <modus-wc-text-input id="btn-text-input" type="text" value="Updated Text" style="padding: 4px 8px;" />
  </div>
</div>
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
<modus-wc-button>
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
<modus-wc-button>
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
<modus-wc-button>
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
  Checkout
  <modus-wc-icon decorative name="shopping_cart"></modus-wc-icon>
</modus-wc-button>
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
