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
    bordered: {
      control: 'boolean',
      description: 'Apply a border to the file input',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Set the size of the file input',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
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
    bordered: false,
    size: 'md',
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
      bordered=${ifDefined(args.bordered)}
      size=${ifDefined(args.size)}
      ?disabled=${args.disabled}
      ?multiple=${args.multiple}
      label=${ifDefined(args.label)}
    ></modus-wc-file-dropzone>
  `,
};

export const Bordered: Story = {
  args: {
    bordered: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
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
