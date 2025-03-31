import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../types';

interface IconArgs {
  'custom-class'?: string;
  decorative: boolean;
  name: string;
  size: DaisySize;
}

const meta: Meta<IconArgs> = {
  title: 'Components/Icon',
  component: 'modus-wc-icon',
  args: {
    'custom-class': '',
    decorative: false,
    name: 'alert',
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<IconArgs>;

const Template: Story = {
  render: (args) => {
    return html`
      <modus-wc-icon
        aria-label="Alert icon"
        custom-class="${ifDefined(args['custom-class'])}"
        ?decorative="${args.decorative}"
        name="${args.name}"
        size="${args.size}"
      >
      </modus-wc-icon>
    `;
  },
};

export const Default: Story = { ...Template };

export const CustomColor: Story = {
  render: (args) => {
    return html`
      <style>
        .red-icon {
          color: red;
        }
      </style>
      <modus-wc-icon
        aria-label="Red alert icon"
        custom-class="red-icon"
        name="alert"
        size="${args.size}"
      >
      </modus-wc-icon>
    `;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - Requires <b>Modus Icons</b> to be installed in the host application see [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs).
  - The \`color\` property has been removed in favor of using CSS for styling.
  - The \`iconClick\` event has been removed. Use the \`click\` event on the host element instead.
  - In 1.0 the \`size\` prop accepted any numeric string (e.g., \`'16'\`, \`'24'\`, \`'32'\`) to set the icon's
  width and height. 2.0 uses preset sizes: \`sm\`, \`md\`, \`lg\`, and can use CSS for custom sizes.

#### Prop Mapping

| 1.0 Prop | 2.0 Prop | Notes                                                |
|----------|----------|------------------------------------------------------|
| color    |          | Not carried over, use CSS instead                    |
| name     | name     |                                                      |
| size     | size     | Numeric values changed to \`sm\`, \`md\`, \`lg\`, use CSS for custom sizes |

#### Event Mapping

| 1.0 Event | 2.0 Event | Notes                                                         |
|-----------|-----------|---------------------------------------------------------------|
| iconClick |           | Not carried over, use \`click\` event on host element instead |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
