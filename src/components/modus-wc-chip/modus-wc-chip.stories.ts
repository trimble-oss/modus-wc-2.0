import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ModusSize } from '../types';

interface ChipArgs {
  active?: boolean;
  'custom-class'?: string;
  disabled?: boolean;
  'has-error'?: boolean;
  label: string;
  shape?: 'rectangle' | 'circle';
  'show-remove'?: boolean;
  size: ModusSize;
  variant: 'filled' | 'outline';
}

const meta: Meta<ChipArgs> = {
  title: 'Components/Chip',
  component: 'modus-wc-chip',
  args: {
    label: 'Chip',
    'show-remove': true,
    shape: 'rectangle',
    size: 'md',
    variant: 'filled',
  },
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['rectangle', 'circle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outline'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['chipClick', 'chipRemove'],
    },
  },
};

export default meta;

type Story = StoryObj<ChipArgs>;

const Template: Story = {
  render: (args) => {
    return html` <modus-wc-chip
      aria-label="Chip example"
      active=${ifDefined(args.active)}
      disabled=${ifDefined(args.disabled)}
      has-error=${ifDefined(args['has-error'])}
      label=${args.label}
      shape=${args.shape}
      show-remove=${ifDefined(args['show-remove'])}
      size=${args.size}
      variant=${args.variant}
    />`;
  },
};

export const Default: Story = { ...Template };

export const AvatarChip: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-chip
  aria-label="Chip example"
  active=${ifDefined(args.active)}
  disabled=${ifDefined(args.disabled)}
  has-error=${ifDefined(args['has-error'])}
  label=${args.label}
  shape=${args.shape}
  show-remove=${ifDefined(args['show-remove'])}
  size=${args.size}
  variant=${args.variant}
>
  <modus-wc-avatar
    img-src="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg"
    alt="sonic the hedgehog"
  ></modus-wc-avatar>
</modus-wc-chip>
    `;
  },
};

export const CheckIconChip: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-chip
  aria-label="Chip example"
  active=${ifDefined(args.active)}
  disabled=${ifDefined(args.disabled)}
  has-error=${ifDefined(args['has-error'])}
  label=${args.label}
  shape=${args.shape}
  show-remove=${ifDefined(args['show-remove'])}
  size=${args.size}
  variant=${args.variant}
>
  <modus-wc-icon name="check" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `;
  },
};

// prettier-ignore
export const Composable: Story = {
  render: (args) => {
    return html`
<modus-wc-chip
  aria-label="Chip example"
  active=${ifDefined(args.active)}
  disabled=${ifDefined(args.disabled)}
  has-error=${ifDefined(args['has-error'])}
  shape=${args.shape}
  size=${args.size}
  variant=${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label="Chip example"
  active=${ifDefined(args.active)}
  disabled=${ifDefined(args.disabled)}
  has-error=${ifDefined(args['has-error'])}
  shape=${args.shape}
  show-remove="true"
  size=${args.size}
  variant=${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
</modus-wc-chip>

<modus-wc-chip
  aria-label="Chip example"
  active=${ifDefined(args.active)}
  disabled=${ifDefined(args.disabled)}
  has-error=${ifDefined(args['has-error'])}
  shape=${args.shape}
  size=${args.size}
  variant=${args.variant}
>
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
  Chip
  <modus-wc-icon name="heart" size="xs"></modus-wc-icon>
</modus-wc-chip>
    `;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - \`chip-style\` prop has been renamed to \`variant\` and values changed from \`solid\` to \`filled\`.
  - \`closeClick\` event has been renamed to \`chipRemove\`.
  - \`show-close\` prop has been renamed to \`show-remove\`.
  - Size values have changed from verbose names (\`medium\`, \`small\`) to abbreviations (\`md\`, \`sm\`).

#### Prop Mapping

| 1.0 Prop       | 2.0 Prop    | Notes                                             |
|----------------|-------------|---------------------------------------------------|
| active         | active      |                                                   |
| advanced-chip  |             | Not carried over                                  |
| aria-label     | aria-label  |                                                   |
| chip-id        |             | Not carried over                                  |
| chip-style     | variant     | \`solid\` → \`filled\`, \`outline\` → \`outline\` |
| disabled       | disabled    |                                                   |
| has-error      | has-error   |                                                   |
| image-url      |             | Not carried over, use slot instead                |
| max-width      |             | Not carried over, use CSS instead                 |
| show-checkmark |             | Not carried over, use slot instead                |
| show-close     | show-remove |                                                   |
| size           | size        | \`medium\` → \`md\`, \`small\` → \`sm\`           |
| value          | label       |                                                   |
|                | shape       | New in 2.0: \`rectangle\` (default), \`circle\` |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes |
|-------------|-------------|-------|
| chipClick  | chipClick  |       |
| closeClick | chipRemove |       |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
