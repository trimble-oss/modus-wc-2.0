import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/File Dropzone',
  component: 'modus-wc-file-dropzone',
  args: {
    disabled: false,
    multiple: false,
    label: 'Choose file',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the file input',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['fileSelect'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <modus-wc-file-dropzone
      ?disabled=${args.disabled}
      ?multiple=${args.multiple}
      label=${ifDefined(args.label)}
    ></modus-wc-file-dropzone>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
