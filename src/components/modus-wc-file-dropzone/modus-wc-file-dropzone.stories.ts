import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface FileDropzoneArgs {
  'accept-file-types'?: string;
  'custom-class'?: string;
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
  reset?: () => Promise<void>;
}

const meta: Meta<FileDropzoneArgs> = {
  title: 'Components/File Dropzone',
  component: 'modus-wc-file-dropzone',
  args: {
    'accept-file-types': '.doc, .docx, .pdf',
    disabled: false,
    'include-state-icon': true,
    instructions: 'Drag files here or browse to upload',
  },
  argTypes: {
    'accept-file-types': {
      control: 'text',
      description: "Accepted file types (e.g. '.jpg,.png' or 'image/*')",
    },
    'custom-class': {
      control: 'text',
      description: 'Custom CSS class to apply to the file dropzone element',
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
    reset: {
      description:
        'Reset the dropzone to its initial state, clearing all error and success states',
      table: {
        category: 'Methods',
        type: { summary: '() => Promise<void>' },
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
      custom-class=${ifDefined(args['custom-class'])}
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

export const customContent: Story = {
  args: {
    'accept-file-types': '.pdf, .doc, .docx',
    'success-message': 'Files uploaded successfully!',
  },

  parameters: {
    docs: {
      source: {
        code: `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <modus-wc-file-dropzone
    id="custom-dropzone"
    accept-file-types=".pdf, .doc, .docx"
    success-message="Files uploaded successfully!"
    instructions="Drag files here or browse to upload"
  >
    <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
      <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
    </div>
  </modus-wc-file-dropzone>

  <modus-wc-button variant="secondary" id="reset-button">
    Reset Dropzone
  </modus-wc-button>
</div>

<script>
  const dropzone = document.getElementById('custom-dropzone');
  const resetButton = document.getElementById('reset-button');
  
  resetButton.addEventListener('click', () => {
    if (dropzone?.reset) {
      dropzone.reset();
    }
  });
</script>`,
      },
    },
  },

  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <modus-wc-file-dropzone
        id="custom-dropzone"
        accept-file-types=${ifDefined(args['accept-file-types'])}
        success-message=${ifDefined(args['success-message'])}
        instructions="Drag files here or browse to upload"
      >
        <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
          <modus-wc-progress
            value="70"
            label="70% Uploaded"
          ></modus-wc-progress>
        </div>
      </modus-wc-file-dropzone>

      <modus-wc-button
        variant="secondary"
        @buttonClick=${() => {
          const dropzone = document.getElementById(
            'custom-dropzone'
          ) as HTMLElement & {
            reset?: () => Promise<void>;
          };
          if (dropzone?.reset) {
            dropzone.reset();
          }
        }}
      >
        Reset Dropzone
      </modus-wc-button>
    </div>
  `,
};

export const fileValidations: Story = {
  args: {
    multiple: true,
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
      ?multiple=${args.multiple}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `,
};

export const multipleFiles: Story = {
  args: {
    multiple: true,
    'accept-file-types': 'image/*',
  },
  render: (args) => html`
    <modus-wc-file-dropzone
      accept-file-types=${ifDefined(args['accept-file-types'])}
      multiple=${args.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `,
};
