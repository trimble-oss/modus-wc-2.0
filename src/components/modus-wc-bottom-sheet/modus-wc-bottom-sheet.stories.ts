import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface BottomSheetArgs {
  'custom-class'?: string;
  width?: string;
  height?: string;
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
        ${bottomSheetDemoStyles}
      </style>
        <modus-wc-bottom-sheet
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
      </div>
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
