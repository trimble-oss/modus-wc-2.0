import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MODUS_ICON_NAMES } from '../../icons/ModusIconUtilities';

interface IconArgs {
  color?: string;
  'custom-class'?: string;
  decorative: boolean;
  'image-options'?: { [key: string]: string };
  name: string;
  pressed?: boolean;
  size: string;
}

const meta: Meta<IconArgs> = {
  title: 'Components/Icon',
  component: 'modus-wc-icon',
  args: {
    color: '',
    'custom-class': '',
    decorative: false,
    name: 'alert',
    pressed: false,
    size: '24',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: MODUS_ICON_NAMES,
    },
    size: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<IconArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-icon
  aria-label="Alert icon"
  color="${ifDefined(args.color)}"
  custom-class="${ifDefined(args['custom-class'])}"
  ?decorative="${args.decorative}"
  name="${args.name}"
  ?pressed="${args.pressed}"
  size="${args.size}"
>
</modus-wc-icon>
    `;
  },
};

export const Default: Story = { ...Template };

export const CustomColor: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-icon
  aria-label="Red alert icon"
  color="red"
  name="alert"
  size="${args.size}"
>
</modus-wc-icon>
    `;
  },
};

export const PressedState: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-icon
  aria-label="Pressed icon"
  name="check_circle"
  pressed
  size="24"
>
</modus-wc-icon>
    `;
  },
};

export const CustomImage: Story = {
  render: () => {
    // prettier-ignore
    return html`
<modus-wc-icon
  aria-label="Custom image icon"
  name="https://via.placeholder.com/24"
  size="24"
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

  - Icons are now bundled with the component library - no external icon font installation required.
  - The \`variant\` property has been removed. All icons use the solid variant from @trimble-oss/modus-icons.
  - The \`size\` property now accepts string values representing pixels (e.g., \`'16'\`, \`'24'\`, \`'32'\`) instead of preset sizes.
  - Added \`color\` property for direct color customization.
  - Added \`pressed\` property for pressed state styling.
  - Added support for custom image URLs via the \`name\` property.

#### Prop Mapping

| 1.0 Prop | 2.0 Prop | Notes                                                |
|----------|----------|------------------------------------------------------|
| name     | name     | Now accepts icon names or custom image URLs          |
| size     | size     | Changed from preset sizes to pixel values (string)   |
| variant  |          | Removed - all icons are solid variant                |
|          | color    | New - direct color control                           |
|          | pressed  | New - adds pressed state styling                     |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
