import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface BottomSheetArgs {
  'custom-class'?: string;
  width?: string;
  height?: string;
  open?: boolean;
  expanded?: boolean;
  'dismiss-threshold'?: number;
}

const bottomSheetDemoStyles = `
  .modus-wc-bottom-sheet-footer-actions {
    align-items: center;
    display: flex;
    gap: var(--modus-wc-spacing-sm);
    justify-content: flex-end;
    width: 100%;
  }
`;

const meta: Meta<BottomSheetArgs> = {
  title: 'Components/Bottom Sheet',
  component: 'modus-wc-bottom-sheet',
  args: {
    'custom-class': '',
    width: '600px',
    open: true,
    expanded: false,
    'dismiss-threshold': 0.4,
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
    'dismiss-threshold': {
      control: { type: 'number', min: 0, max: 1, step: 0.05 },
      table: { defaultValue: { summary: '0.4' } },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<BottomSheetArgs>;

export const Default: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
      <style>
        div[id^='story--components-bottom-sheet--default'] {
         height: 100vh;
  }
        ${bottomSheetDemoStyles}
      </style>
        <modus-wc-bottom-sheet
          ?open="${args.open}"
          ?expanded="${args.expanded}"
          dismiss-threshold="${ifDefined(args['dismiss-threshold'])}"
          height="${ifDefined(args.height)}"
          width="${ifDefined(args.width)}"
        >
          <div slot="header">
            <div class="modus-wc-bottom-sheet-header-top">
              <div class="modus-wc-bottom-sheet-header-start">
              <modus-wc-button color="tertiary" shape="square" size="sm" variant="borderless"> 
                <modus-wc-icon name="chevron_left" decorative></modus-wc-icon>
                </modus-wc-button>
                <div>
                  <modus-wc-typography
                    hierarchy="h4"
                    size="lg"
                    weight="semibold"
                    label="Title"
                  ></modus-wc-typography>
                  <modus-wc-typography
                    hierarchy="p"
                    size="xs"
                    label="Subtitle"
                  ></modus-wc-typography>
                </div>
              </div>
              <modus-wc-button
                aria-label="Close"
                color="tertiary"
                shape="square"
                size="sm"
                variant="borderless"
              >
                <modus-wc-icon name="close" decorative></modus-wc-icon>
              </modus-wc-button>
            </div>
          </div>

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
  render: (args) => {
    const sheetId = 'demo-triggered-bottom-sheet';

    const openSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & { open: boolean }).open = true;
    };

    const closeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & { open: boolean }).open = false;
    };

    // prettier-ignore
    return html`
      <style>
        ${bottomSheetDemoStyles}
      </style>
      <div style="padding: var(--modus-wc-spacing-lg);">
        <modus-wc-button
          color="primary"
          size="md"
          variant="filled"
          @buttonClick="${openSheet}"
        >
          <modus-wc-icon name="expand_more" size="sm" decorative></modus-wc-icon>
          Open bottom sheet
        </modus-wc-button>
      </div>

      <modus-wc-bottom-sheet
        id="${sheetId}"
        dismiss-threshold="${ifDefined(args['dismiss-threshold'])}"
        height="${ifDefined(args.height)}"
        width="${ifDefined(args.width)}"
      >
        <div slot="header">
          <div class="modus-wc-bottom-sheet-header-top">
            <div class="modus-wc-bottom-sheet-header-start">
              <div>
                <modus-wc-typography
                  hierarchy="h4"
                  size="lg"
                  weight="semibold"
                  label="Title"
                ></modus-wc-typography>
                <modus-wc-typography
                  hierarchy="p"
                  size="xs"
                  label="Drag the handle down to dismiss or up to expand."
                ></modus-wc-typography>
              </div>
            </div>
            <modus-wc-button
              aria-label="Close"
              color="tertiary"
              shape="square"
              size="sm"
              variant="borderless"
              @buttonClick="${closeSheet}"
            >
              <modus-wc-icon name="close" decorative></modus-wc-icon>
            </modus-wc-button>
          </div>
        </div>

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
    width: '400px',
  },
  render: (args) => {
    // prettier-ignore
    return html`
      <style>
        ${bottomSheetDemoStyles}
      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?open="${args.open}"
          custom-class="${ifDefined(args['custom-class'])}"
          width="${ifDefined(args.width)}"
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
