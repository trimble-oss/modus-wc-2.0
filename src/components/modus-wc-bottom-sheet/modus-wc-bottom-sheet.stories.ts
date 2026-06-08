import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IBottomSheetHeader } from './modus-wc-bottom-sheet';

interface BottomSheetArgs {
  'custom-class'?: string;
  open?: boolean;
  expanded?: boolean;
  minimized?: boolean;
  'step-down-threshold'?: number;
  header?: IBottomSheetHeader;
}

const defaultHeader: IBottomSheetHeader = {
  showBackButton: true,
  title: 'Title',
  subtitle: 'Subtitle',
  showCloseButton: true,
};

const meta: Meta<BottomSheetArgs> = {
  title: 'Components/Bottom Sheet',
  component: 'modus-wc-bottom-sheet',
  args: {
    'custom-class': '',
    open: true,
    expanded: false,
    minimized: false,
    'step-down-threshold': 0.4,
    header: defaultHeader,
  },
  argTypes: {
    open: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    expanded: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    minimized: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    'step-down-threshold': {
      control: { type: 'number', min: 0, max: 1, step: 0.05 },
      table: { defaultValue: { summary: '0.4' } },
    },
    header: {
      description:
        'Configuration for the built-in header layout. Do not set if you use the header slot.',
      table: {
        type: {
          detail: `
            Interface: IBottomSheetHeader
            Properties:
            - showBackButton (boolean, optional): Whether to show the back button
            - title (string, optional): The title of the header
            - subtitle (string, optional): The subtitle of the header
            - showCloseButton (boolean, optional): Whether to show the dismiss button. Clicking it closes the bottom sheet
          `,
        },
      },
      control: {
        type: 'object',
      },
    },
  },
  decorators: [withActions],
  parameters: {
    layout: 'padded',
    actions: {
      handles: [
        'headerBackClick',
        'headerCloseClick',
        'expandedChange',
        'minimizedChange',
        'openChange',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<BottomSheetArgs>;

export const Default: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
      <style>
        /* Demo-only frame: the component is position: fixed, which would escape
           to the page (and overlap other stories) on the docs canvas. 'contain'
           makes this frame a containing block for the sheet's position: fixed
           and clips it, so the sheet stays bounded WITHOUT changing its position
           value (overriding position to absolute caused a render jump). */
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          overflow: hidden;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="${args.open}"
          ?expanded="${args.expanded}"
          ?minimized="${args.minimized}"
          step-down-threshold="${ifDefined(args['step-down-threshold'])}"
          custom-class="${ifDefined(args['custom-class'])}"
          style="width: 600px"
          .header="${args.header}"
        >
          <div slot="content">
            <modus-wc-typography
              hierarchy="p"
              size="md"
              label="Main content area for forms, lists, or other components."
            ></modus-wc-typography>
          </div>

          <div slot="footer">
            <div class="modus-wc-bottom-sheet-footer-actions">
              <modus-wc-button color="tertiary" size="sm" variant="outlined">
                Cancel
              </modus-wc-button>
              <modus-wc-button color="primary" size="sm" variant="filled">
                Save
              </modus-wc-button>
            </div>
          </div>
        </modus-wc-bottom-sheet>
      </div>
    `;
  },
};

export const TriggeredByButton: Story = {
  args: {
    header: {
      showBackButton: false,
      title: 'Bottom Sheet Title',
      subtitle: 'Drag the handle down to minimize or up to expand.',
      showCloseButton: false,
    },
  },
  render: (args) => {
    const sheetId = 'demo-triggered-bottom-sheet';

    const closeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & { open: boolean }).open = false;
    };

    const minimizeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet)
        (sheet as HTMLElement & { minimized: boolean }).minimized = true;
    };

    const restoreSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) {
        (sheet as HTMLElement & { open: boolean; minimized: boolean }).open =
          true;
        (
          sheet as HTMLElement & { open: boolean; minimized: boolean }
        ).minimized = false;
      }
    };

    // prettier-ignore
    return html`
      <style>
        /* Demo-only frame: the component is position: fixed, which would escape
           to the page (and overlap other stories) on the docs canvas. 'contain'
           makes this frame a containing block for the sheet's position: fixed
           and clips it, so the sheet stays bounded WITHOUT changing its position
           value (overriding position to absolute caused a render jump). */
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          overflow: hidden;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

        .modus-wc-bottom-sheet-trigger-actions {
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          padding: var(--modus-wc-spacing-lg);
        }

      </style>
      <div class="bottom-sheet-demo">
      <div class="modus-wc-bottom-sheet-trigger-actions">
        <modus-wc-button
          color="primary"
          size="md"
          variant="filled"
          @buttonClick="${restoreSheet}"
        >
          <modus-wc-icon name="expand_more" size="sm" decorative></modus-wc-icon>
          Open bottom sheet
        </modus-wc-button>
        <modus-wc-button
          color="tertiary"
          size="md"
          variant="outlined"
          @buttonClick="${minimizeSheet}"
        >
          Minimize
        </modus-wc-button>
      </div>

      <modus-wc-bottom-sheet
        id="${sheetId}"
        step-down-threshold="${ifDefined(args['step-down-threshold'])}"
        style="width: 600px"
        .header="${ifDefined(args.header)}"
      >
        <div slot="content">
          <modus-wc-typography
            hierarchy="p"
            size="md"
            label="Main content area for forms, lists, or other components."
          ></modus-wc-typography>
        </div>

        <div slot="footer">
          <div class="modus-wc-bottom-sheet-footer-actions">
            <modus-wc-button
              color="tertiary"
              size="sm"
              variant="outlined"
              @buttonClick="${closeSheet}"
            >
              Cancel
            </modus-wc-button>
            <modus-wc-button
              color="primary"
              size="sm"
              variant="filled"
              @buttonClick="${closeSheet}"
            >
              Save
            </modus-wc-button>
          </div>
        </div>
      </modus-wc-bottom-sheet>
      </div>
    `;
  },
};

export const ContentOnly: Story = {
  args: {
    header: undefined,
  },
  render: (args) => {
    // prettier-ignore
    return html`
      <style>
        /* Demo-only frame: the component is position: fixed, which would escape
           to the page (and overlap other stories) on the docs canvas. 'contain'
           makes this frame a containing block for the sheet's position: fixed
           and clips it, so the sheet stays bounded WITHOUT changing its position
           value (overriding position to absolute caused a render jump). */
        .bottom-sheet-demo {
          border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
          contain: layout paint;
          height: 520px;
          overflow: hidden;
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="${args.open}"
          style="width: 600px"
          .header="${args.header}"
        >
          <div slot="content">
            <modus-wc-typography
              hierarchy="p"
              size="md"
              label="Bottom sheet with content slot only."
            ></modus-wc-typography>
          </div>
        </modus-wc-bottom-sheet>
      </div>
    `;
  },
};
