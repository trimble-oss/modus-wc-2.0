import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { ModusSize } from '../types';

interface BadgeArgs {
  color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  'custom-class'?: string;
  shape?: 'ellipse' | 'rectangle';
  size: ModusSize;
  variant: 'counter' | 'filled' | 'outlined' | 'text';
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Badge',
  component: 'modus-wc-badge',
  args: {
    color: 'primary',
    size: 'md',
    variant: 'filled',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'tertiary',
        'high-contrast',
        'success',
        'warning',
        'danger',
      ],
    },
    shape: {
      control: { type: 'select' },
      options: ['ellipse', 'rectangle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['counter', 'filled', 'outlined', 'text'],
    },
  },
};

export default meta;

type Story = StoryObj<BadgeArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-badge
  color="${args.color}"
  custom-class="${ifDefined(args['custom-class'])}"
  shape="${ifDefined(args.shape)}"
  size="${args.size}"
  variant="${args.variant}"
>
  Badge
</modus-wc-badge>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

export const ShapeVariants: Story = {
  render: (args) => {
    const variants = ['counter', 'filled', 'outlined', 'text'] as const;
    const shapes = [undefined, 'ellipse', 'rectangle'] as const;
    // prettier-ignore
    return html`
<div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 16px; align-items: center;">
  <span></span>
  ${shapes.map((shape) => html`<strong>${shape ?? 'unset (default)'}</strong>`)}
  ${variants.map(
    (variant) => html`
  <strong>${variant}</strong>
  ${shapes.map(
    (shape) => html`
  <modus-wc-badge color="${args.color}" shape="${ifDefined(shape)}" size="${args.size}" variant="${variant}">
    ${variant === 'counter' ? '5' : 'Badge'}
  </modus-wc-badge>`
  )}`
  )}
</div>
    `;
  },
};

export const WithIcon: Story = {
  render: () => {
    // prettier-ignore
    return html`
<style>
  .modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge>
  <modus-wc-icon decorative name="check" size="xs"></modus-wc-icon>
  Item
</modus-wc-badge>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('badge-shadow-host')) {
      const BadgeShadowHost = createShadowHostClass<BadgeArgs>({
        componentTag: 'modus-wc-badge',
        propsMapper: (v: BadgeArgs, el: HTMLElement) => {
          const badgeEl = el as unknown as {
            color: string;
            customClass: string;
            shape?: string;
            size: string;
            variant: string;
          };
          badgeEl.color = v.color;
          badgeEl.customClass = v['custom-class'] || '';
          badgeEl.shape = v.shape;
          badgeEl.size = v.size;
          badgeEl.variant = v.variant;
        },
        defaultContent: 'Badge',
      });
      customElements.define('badge-shadow-host', BadgeShadowHost);
    }

    return html`<badge-shadow-host .props=${{ ...args }}></badge-shadow-host>`;
  },
};
export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - The \`dark\` color option is now \`high-contrast\`
  - The \`type\` prop is now \`variant\` and \`default\` type is now \`filled\`
  - Size values have changed from verbose names (\`small\`, \`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop   | 2.0 Prop   | Notes                                                       |
|------------|------------|-------------------------------------------------------------|
| aria-label | aria-label |                                                             |
| color      | color      | \`dark\` is now \`high-contrast\`                           |
| size       | size       | \`small\` → \`sm\`, \`medium\` → \`md\`, \`large\` → \`lg\` |
| type       | variant    | \`default\` is now \`filled\`                               |

#### New (non-breaking)

  - \`shape\` (\`ellipse\` | \`rectangle\`) is optional. When unset, each variant keeps its existing geometry. It is ignored for the \`text\` variant.
        `,
      },
    },
    // To hide the actual story rendering and only show docs:
    controls: { disable: true },
    canvas: { disable: true },
  },
  // Simple render function or leave it empty
  render: () => html`<div></div>`,
};
