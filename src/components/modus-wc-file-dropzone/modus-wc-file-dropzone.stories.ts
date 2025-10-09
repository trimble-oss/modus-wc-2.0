import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface FileDropzoneArgs {
  'accept-file-types'?: string;
  disabled?: boolean;
  'invalid-file-type-message'?: string;
}

const meta: Meta<FileDropzoneArgs> = {
  title: 'Components/File Dropzone',
  component: 'modus-wc-file-dropzone',
  args: {
    'accept-file-types': '.doc, .docx, .pdf',
    disabled: false,
    'invalid-file-type-message': '',
  },
  argTypes: {
    'accept-file-types': {
      control: 'text',
      description: "Accepted file types (e.g. '.jpg,.png' or 'image/*')",
      table: {
        defaultValue: { summary: '' },
      },
    },
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
      accept-file-types=${ifDefined(args['accept-file-types'])}
      ?disabled=${args.disabled}
      invalid-file-type-message=${ifDefined(args['invalid-file-type-message'])}
    ></modus-wc-file-dropzone>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
