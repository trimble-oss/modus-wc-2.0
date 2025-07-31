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

if (!customElements.get('modus-shadow-test-host')) {
  console.log('Defining modus-shadow-test-host');
  class ModusShadowTestHost extends HTMLElement {
    private observer!: MutationObserver;
    static get observedAttributes() {
      return ['tag', 'props', 'attrs', 'innerhtml'];
    }

    private shadow: ShadowRoot;
    private child: HTMLElement | null = null;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.copyThemeAttributes();
      this.observer = new MutationObserver(() => this.copyThemeAttributes());
      this.observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme', 'data-mode'],
      });
      this.renderChild();
    }

    copyThemeAttributes() {
      const html = document.documentElement;
      const theme = html.getAttribute('data-theme');
      const mode = html.getAttribute('data-mode');
      if (theme !== null) {
        this.setAttribute('data-theme', theme);
      } else {
        this.removeAttribute('data-theme');
      }
      if (mode !== null) {
        this.setAttribute('data-mode', mode);
      } else {
        this.removeAttribute('data-mode');
      }
    }

    attributeChangedCallback() {
      this.renderChild();
    }

    renderChild() {
      console.log('Rendering child in shadow DOM');
      // Remove previous child
      if (this.child) this.shadow.removeChild(this.child);

      const tag = this.getAttribute('tag') || 'div';
      const props = this.getAttribute('props')
        ? JSON.parse(this.getAttribute('props')!)
        : {};
      const attrs = this.getAttribute('attrs')
        ? JSON.parse(this.getAttribute('attrs')!)
        : {};
      const innerHTML = this.getAttribute('innerhtml') || '';

      const el = document.createElement(tag);

      // Set attributes
      Object.entries(attrs).forEach(([k, v]) =>
        el.setAttribute(k, v as string)
      );
      // Set properties
      Object.entries(props).forEach(([k, v]) => ((el as any)[k] = v));

      el.innerHTML = innerHTML;
      this.shadow.appendChild(el);
      this.child = el;
    }
  }
  console.log('Defining modus-shadow-test-host');
  customElements.define('modus-shadow-test-host', ModusShadowTestHost);
} else {
  console.log('modus-shadow-test-host already defined');
}

export const RenderedInShadowDom: Story = {
  render: () => {
    // Example: Render modus-wc-button with attributes and innerHTML
    const attrs = JSON.stringify({
      color: 'primary',
    });
    const innerhtml = 'Click me';
    console.log(
      'Rendering in shadow DOM with attrs:',
      attrs,
      'and innerHTML:',
      innerhtml
    );
    return html`
      <modus-shadow-test-host
        tag="modus-wc-button"
        attrs="${attrs}"
        innerhtml="${innerhtml}"
      ></modus-shadow-test-host>
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
