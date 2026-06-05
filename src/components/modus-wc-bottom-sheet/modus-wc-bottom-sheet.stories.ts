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
  'dismiss-threshold'?: number;
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
    'dismiss-threshold': 0.4,
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
    'dismiss-threshold': {
      control: { type: 'number', min: 0, max: 1, step: 0.05 },
      table: { defaultValue: { summary: '0.4' } },
    },
    header: {
      control: 'object',
    },
  },
  decorators: [withActions],
  parameters: {
    docs: { story: { inline: false, height: '480px' } },
    layout: 'fullscreen',
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
  args: {
    'custom-class': 'bottom-sheet-width-px',
  },
  render: (args) => {
    // prettier-ignore
    return html`
      <style>
        .modus-wc-bottom-sheet-footer-actions {
          align-items: center;
          display: flex;
          gap: var(--modus-wc-spacing-sm);
          justify-content: flex-end;
          width: 100%;
        }

        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-px {
          width: 600px;
        }
      </style>
        <modus-wc-bottom-sheet
          ?open="${args.open}"
          ?expanded="${args.expanded}"
          ?minimized="${args.minimized}"
          dismiss-threshold="${ifDefined(args['dismiss-threshold'])}"
          custom-class="${ifDefined(args['custom-class'])}"
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
    `;
  },
};

export const TriggeredByButton: Story = {
  args: {
    'custom-class': 'bottom-sheet-width-vw',
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

        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-vw {
          width: 50vw;
        }
      </style>
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
        dismiss-threshold="${ifDefined(args['dismiss-threshold'])}"
        custom-class="${ifDefined(args['custom-class'])}"
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
    `;
  },
};

export const ContentOnly: Story = {
  args: {
    'custom-class': 'bottom-sheet-width-percent',
    header: undefined,
  },
  render: (args) => {
    // prettier-ignore
    return html`
      <style>
        /* Width is set via customClass on the host, clamped by the component's
           min-width: 25vw / max-width: 100vw. */
        .bottom-sheet-width-percent {
          width: 60%;
        }
      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="${args.open}"
          custom-class="${ifDefined(args['custom-class'])}"
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
