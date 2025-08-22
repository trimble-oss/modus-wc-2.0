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
  shape="circle"
>
  Circle
</modus-wc-button>
<modus-wc-button
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
    if (!customElements.get('shadow-dom-parent')) {
      class ShadowDomParent extends HTMLElement {
        shadowRootRef;
        buttonEl;

        constructor() {
          super();
          this.shadowRootRef = this.attachShadow({ mode: 'open' });
          const wrapper = document.createElement('div');
          this.buttonEl = document.createElement('modus-wc-button');
          wrapper.appendChild(this.buttonEl);
          this.shadowRootRef.appendChild(wrapper);
        }

        set props(v) {
          if (!this.buttonEl) return;
          // Use properties so Stencil updates without remount
          this.buttonEl.ariaLabel = 'Click me button';
          this.buttonEl.color = v.color;
          this.buttonEl.shape = v.shape;
          this.buttonEl.size = v.size;
          this.buttonEl.type = v.type;
          this.buttonEl.variant = v.variant;
          this.buttonEl.customClass = v['custom-class'] || '';
          this.buttonEl.disabled = Boolean(v.disabled);
          this.buttonEl.fullWidth = Boolean(v['full-width']);
          this.buttonEl.pressed = Boolean(v.pressed);
          this.buttonEl.textContent = 'Click me';
        }
      }
      customElements.define('shadow-dom-parent', ShadowDomParent);
    }

    return html`<shadow-dom-parent .props=${{ ...args }}></shadow-dom-parent>`;
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
