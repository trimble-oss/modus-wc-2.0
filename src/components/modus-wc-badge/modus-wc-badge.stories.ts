import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../types';

interface BadgeArgs {
  color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  'custom-class'?: string;
  size: ModusSize;
  variant: 'counter' | 'filled' | 'text' | 'outlined';
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
        'primary',
        'secondary',
        'tertiary',
        'high-contrast',
        'success',
        'warning',
        'danger',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['counter', 'filled', 'text', 'outlined'],
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
