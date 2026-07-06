import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { DaisySize } from '../types';

interface ButtonArgs {
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'danger'
    | 'neutral';
  'custom-class'?: string;
  disabled: boolean;
  'full-width': boolean;
  pressed: boolean;
  shape: 'circle' | 'ellipse' | 'rectangle' | 'square';
  size: DaisySize | 'xl';
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
      options: [
        'primary',
        'secondary',
        'tertiary',
        'warning',
        'danger',
        'neutral',
      ],
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'ellipse', 'rectangle', 'square'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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

export const ShadowDomParent: Story = {
  render: (args) => {
    // Create a unique shadow host for button component
    if (!customElements.get('button-shadow-host')) {
      const ButtonShadowHost = createShadowHostClass<ButtonArgs>({
        componentTag: 'modus-wc-button',
        propsMapper: (v: ButtonArgs, el: HTMLElement) => {
          const buttonEl = el as unknown as {
            ariaLabel: string;
            color: string;
            shape: string;
            size: string;
            type: string;
            variant: string;
            customClass: string;
            disabled: boolean;
            fullWidth: boolean;
            pressed: boolean;
          };
          buttonEl.ariaLabel = 'Click me button';
          buttonEl.color = v.color;
          buttonEl.shape = v.shape;
          buttonEl.size = v.size;
          buttonEl.type = v.type;
          buttonEl.variant = v.variant;
          buttonEl.customClass = v['custom-class'] || '';
          buttonEl.disabled = Boolean(v.disabled);
          buttonEl.fullWidth = Boolean(v['full-width']);
          buttonEl.pressed = Boolean(v.pressed);
          // DO NOT set textContent - it destroys the component's internal structure!
          // Button content should be set via defaultContent in the helper config
        },
        defaultContent: 'Click me', // Set content here instead
      });
      customElements.define('button-shadow-host', ButtonShadowHost);
    }

    return html`<button-shadow-host
      .props=${{ ...args }}
    ></button-shadow-host>`;
  },
};
export const NeutralColorStates: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Why Neutral needs custom state CSS

Most button colors (Primary, Secondary, Warning, etc.) use **DaisyUI color slots**. DaisyUI auto-calculates hover and pressed from the theme color.

**Neutral** uses the Modus **base-inverted** token (\`--modus-wc-color-base-inverted\`) — not a DaisyUI slot — so we define states in CSS using the **same rules** DaisyUI uses elsewhere.

| | Primary / Secondary | Neutral (new) |
|--|---------------------|---------------|
| Base color | Theme / DaisyUI slot | \`base-inverted\` token |
| Hover / pressed | Automatic | Custom CSS (same darken/tint pattern) |
| Design impact | Specify base color only | Specify base-inverted only; states follow |

**Neutral ≠ Tertiary:** \`tertiary\` uses DaisyUI's neutral slot. \`neutral\` uses base-inverted.

Full design notes: \`docs/button-neutral-color-design-notes.md\`

#### State rules (Neutral)

| Variant | Hover | Pressed |
|---------|-------|---------|
| Filled | 90% base-inverted + 10% black | 80% base-inverted + 20% black |
| Outlined / borderless | 12% base-inverted tint | Fills like filled default |

Compare **Primary** and **Neutral** below — interaction should feel the same; only the color differs.
        `,
      },
    },
  },
  render: () => html`
    <style>
      .neutral-states-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .neutral-states-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
      }

      .neutral-states-label {
        font-size: 0.875rem;
        font-weight: 600;
        min-width: 5.5rem;
      }

      .neutral-states-section-title {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.5rem;
      }

      .neutral-states-note {
        font-size: 0.875rem;
        margin: 0 0 1rem;
        max-width: 48rem;
      }
    </style>
    <div class="neutral-states-grid">
      <div>
        <p class="neutral-states-section-title">Filled — compare Primary vs Neutral</p>
        <p class="neutral-states-note">
          Hover and press each button. Neutral should darken the same way Primary does.
        </p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="filled">Default</modus-wc-button>
          <modus-wc-button color="primary" variant="filled" pressed>Pressed</modus-wc-button>
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="filled">Default</modus-wc-button>
          <modus-wc-button color="neutral" variant="filled" pressed>Pressed</modus-wc-button>
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">Outlined — compare Primary vs Neutral</p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="outlined">Default</modus-wc-button>
          <modus-wc-button color="primary" variant="outlined" pressed>Pressed</modus-wc-button>
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="outlined">Default</modus-wc-button>
          <modus-wc-button color="neutral" variant="outlined" pressed>Pressed</modus-wc-button>
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">Borderless — compare Primary vs Neutral</p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Primary</span>
          <modus-wc-button color="primary" variant="borderless">Default</modus-wc-button>
          <modus-wc-button color="primary" variant="borderless" pressed>Pressed</modus-wc-button>
        </div>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Neutral</span>
          <modus-wc-button color="neutral" variant="borderless">Default</modus-wc-button>
          <modus-wc-button color="neutral" variant="borderless" pressed>Pressed</modus-wc-button>
        </div>
      </div>

      <div>
        <p class="neutral-states-section-title">Tertiary (for reference — uses DaisyUI neutral slot)</p>
        <div class="neutral-states-row">
          <span class="neutral-states-label">Tertiary</span>
          <modus-wc-button color="tertiary" variant="filled">Filled</modus-wc-button>
          <modus-wc-button color="tertiary" variant="outlined">Outlined</modus-wc-button>
          <modus-wc-button color="tertiary" variant="borderless">Borderless</modus-wc-button>
        </div>
      </div>
    </div>
  `,
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
