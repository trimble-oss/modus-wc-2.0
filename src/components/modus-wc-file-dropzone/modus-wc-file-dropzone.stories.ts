import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface FileDropzoneArgs {
  'accept-file-types'?: string;
  disabled?: boolean;
  'file-dragged-over-instructions'?: string;
  'include-state-icon'?: boolean;
  instructions?: string;
  'invalid-file-type-message'?: string;
  'max-file-name-length'?: number;
  'max-file-count'?: number;
  'max-total-file-size-bytes'?: number;
  multiple?: boolean;
  'success-message'?: string;
}

const meta: Meta<FileDropzoneArgs> = {
  title: 'Components/File Dropzone',
  component: 'modus-wc-file-dropzone',
  args: {
    'accept-file-types': '.doc, .docx, .pdf',
    disabled: false,
    'include-state-icon': true,
    instructions: 'Drop files here or click to select files',
  },
  argTypes: {
    'accept-file-types': {
      control: 'text',
      description: "Accepted file types (e.g. '.jpg,.png' or 'image/*')",
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the file input',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    instructions: {
      control: 'text',
      description: 'Default instructions displayed in the dropzone',
    },
    'invalid-file-type-message': {
      control: 'text',
      description:
        'Custom error message displayed when an invalid file type is selected',
    },
    'max-file-name-length': {
      control: 'number',
      description:
        'Maximum allowed length of filename, will show error if exceeded',
    },
    'max-file-count': {
      control: 'number',
      description:
        'Maximum number of files allowed, will show error if exceeded',
    },
    'max-total-file-size-bytes': {
      control: 'number',
      description:
        'Maximum total file size in bytes allowed, will show error if exceeded',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
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
      file-dragged-over-instructions=${ifDefined(
        args['file-dragged-over-instructions']
      )}
      ?include-state-icon=${args['include-state-icon']}
      instructions=${ifDefined(args['instructions'])}
      invalid-file-type-message=${ifDefined(args['invalid-file-type-message'])}
      max-file-name-length=${ifDefined(args['max-file-name-length'])}
      max-file-count=${ifDefined(args['max-file-count'])}
      max-total-file-size-bytes=${ifDefined(args['max-total-file-size-bytes'])}
      ?multiple=${args.multiple}
      success-message=${ifDefined(args['success-message'])}
    ></modus-wc-file-dropzone>
  `,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCustomContent: Story = {
  render: () => html`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      instructions="Drop files here or click to select files"
    >
      <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
        <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
      </div>
    </modus-wc-file-dropzone>
  `,
};

export const WithRadialProgress: Story = {
  render: () => html`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      include-state-icon="false"
    >
      <div
        slot="dropzone"
        style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: center;"
      >
        <modus-wc-progress variant="radial" value="85">
          <div
            style="display: flex; flex-direction: column; align-items: center; padding: 1rem;"
          >
            <div
              style="font-size: 1.25rem; font-weight: bold; margin-top: 0.25rem;"
            >
              85%
            </div>
          </div>
        </modus-wc-progress>
        <div style="margin-top: 1rem; text-align: center;">
          <p style="margin: 0; color: #0063a3; font-weight: 600;">
            Uploading 2 of 3 files
          </p>
          <p style="margin: 0.25rem 0 0; color: #6a6e79; font-size: 0.875rem;">
            image1.jpg, image2.jpg
          </p>
        </div>
      </div>
    </modus-wc-file-dropzone>
  `,
};

export const WithIndeterminateProgress: Story = {
  render: () => html`
    <modus-wc-file-dropzone
      accept-file-types=".pdf,.docx"
      include-state-icon="false"
    >
      <div
        slot="dropzone"
        style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: center;"
      >
        <div style="width: 80%; max-width: 300px;">
          <modus-wc-progress indeterminate></modus-wc-progress>
        </div>
        <div style="margin-top: 1rem; text-align: center;">
          <p style="margin: 0; color: #0063a3; font-weight: 600;">
            Processing Documents
          </p>
          <p style="margin: 0.25rem 0 0; color: #6a6e79; font-size: 0.875rem;">
            Checking file integrity and scanning for viruses...
          </p>
        </div>
      </div>
    </modus-wc-file-dropzone>
  `,
};

export const WithFileValidations: Story = {
  args: {
    'max-file-name-length': 20,
    'max-file-count': 3,
    'max-total-file-size-bytes': 10485760, // 10MB
    'invalid-file-type-message':
      'Invalid file format. Please upload correct file type.',
  },
  render: (args) => html`
    <modus-wc-file-dropzone
      accept-file-types=${ifDefined(args['accept-file-types'])}
      invalid-file-type-message=${ifDefined(args['invalid-file-type-message'])}
      max-file-name-length=${ifDefined(args['max-file-name-length'])}
      max-file-count=${ifDefined(args['max-file-count'])}
      max-total-file-size-bytes=${ifDefined(args['max-total-file-size-bytes'])}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `,
};

export const WithMultipleFiles: Story = {
  args: {
    multiple: true,
    'accept-file-types': 'image/*',
  },
  render: (args) => html`
    <modus-wc-file-dropzone
      accept-file-types=${ifDefined(args['accept-file-types'])}
      ?multiple=${args.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `,
};
