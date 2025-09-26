import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/File Dropzone',
  component: 'modus-wc-file-dropzone',
  parameters: {
    actions: {
      handles: ['fileSelect'],
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the file input',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Label to display for the file input',
    },
  },
  args: {
    disabled: false,
    multiple: false,
    label: 'Choose file',
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

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    label: 'Choose multiple files',
  },
};
