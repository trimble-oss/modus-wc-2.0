import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  IBottomSheetHeader,
  TBottomSheetDisplayMode,
} from './modus-wc-bottom-sheet';

interface BottomSheetArgs {
  'custom-class'?: string;
  visible?: boolean;
  'display-mode'?: TBottomSheetDisplayMode;
  'drag-step-threshold'?: number;
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
    visible: true,
    'display-mode': 'default',
    'drag-step-threshold': 0.4,
    header: defaultHeader,
  },
  argTypes: {
    visible: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    'display-mode': {
      control: 'select',
      options: ['default', 'expanded', 'minimized'],
      table: { defaultValue: { summary: 'default' } },
    },
    'drag-step-threshold': {
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
        'displayModeChange',
        'sheetVisibilityChange',
      ],
    },
    docs: {
      description: {
        component: [
          'A bottom sheet that slides up from the bottom of the viewport.',
          '',
          '**Usage in your app**',
          '- Render `<modus-wc-bottom-sheet>` as a **direct child of `<body>`** (or another top-level element) so its `position: fixed` anchors it to the window. When nested inside a positioned/`contain`ed container it falls back to `position: absolute` and is bounded by that container instead.',
          '- Keep the **trigger button and its click handler in your own page**. Open the sheet by setting the `visible` property to `true` and close it with `visible = false`; set `displayMode` to control the resting size.',
          '- Listen to `sheetVisibilityChange` and `displayModeChange` to react to state changes.',
          '',
          'The dashed frame in these stories is **demo-only**: it bounds the sheet so it does not overlap the rest of the Storybook canvas.',
        ].join('\n'),
      },
    },
  },
};

export default meta;

type Story = StoryObj<BottomSheetArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Default sheet with the built-in header, content, and footer slots. Toggle the `visible` control to open and close it. In a real app, attach the sheet to `<body>` and drive `visible` from a button in your page (see **Triggered By Button**).',
      },
    },
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
          ?visible="${args.visible}"
          display-mode="${ifDefined(args['display-mode'])}"
          drag-step-threshold="${ifDefined(args['drag-step-threshold'])}"
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
  parameters: {
    docs: {
      description: {
        story: [
          'Open the sheet from a control in your own page.',
          '',
          '- Put the **trigger button (and its click handler) in your page markup**.',
          '- Render `<modus-wc-bottom-sheet>` as a **direct child of `<body>`** so its `position: fixed` anchors it to the window.',
          '- Open with `sheet.visible = true` (optionally set `sheet.displayMode`); close with `sheet.visible = false`.',
          '',
          'The dashed frame below is demo-only so the sheet stays bounded within this story.',
        ].join('\n'),
      },
      source: {
        code: `<!-- 1) Trigger button + handler live in YOUR page -->
<modus-wc-button id="open-bottom-sheet" color="primary" variant="filled">
  Open bottom sheet
</modus-wc-button>

<!-- 2) Attach the sheet as a direct child of <body> so position: fixed
        pins it to the bottom of the window -->
<modus-wc-bottom-sheet id="app-bottom-sheet">
  <div slot="content">Main content area for forms, lists, or other components.</div>
  <div slot="footer">
    <modus-wc-button id="cancel-bottom-sheet" color="tertiary" variant="outlined">Cancel</modus-wc-button>
    <modus-wc-button id="save-bottom-sheet" color="primary" variant="filled">Save</modus-wc-button>
  </div>
</modus-wc-bottom-sheet>

<script>
  const sheet = document.getElementById('app-bottom-sheet');

  // Open from the page button
  document
    .getElementById('open-bottom-sheet')
    .addEventListener('buttonClick', () => {
      sheet.visible = true;
      sheet.displayMode = 'default';
    });

  // Close from buttons inside the sheet
  ['cancel-bottom-sheet', 'save-bottom-sheet'].forEach((id) =>
    document
      .getElementById(id)
      .addEventListener('buttonClick', () => (sheet.visible = false))
  );

  // (Optional) react to state changes
  sheet.addEventListener('sheetVisibilityChange', (e) =>
    console.log('visible:', e.detail.visible)
  );
  sheet.addEventListener('displayModeChange', (e) =>
    console.log('display mode:', e.detail.displayMode)
  );
</script>`,
      },
    },
  },
  render: (args) => {
    const sheetId = 'demo-triggered-bottom-sheet';

    const closeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) (sheet as HTMLElement & { visible: boolean }).visible = false;
    };

    const minimizeSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet)
        (
          sheet as HTMLElement & { displayMode: TBottomSheetDisplayMode }
        ).displayMode = 'minimized';
    };

    const restoreSheet = () => {
      const sheet = document.getElementById(sheetId);
      if (sheet) {
        const typed = sheet as HTMLElement & {
          visible: boolean;
          displayMode: TBottomSheetDisplayMode;
        };
        typed.visible = true;
        typed.displayMode = 'default';
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
        drag-step-threshold="${ifDefined(args['drag-step-threshold'])}"
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
  parameters: {
    docs: {
      description: {
        story:
          'Sheet with only the `content` slot — no header or footer. The drag handle still lets users minimize/expand. As with the other stories, attach the sheet to `<body>` in production and toggle `visible` from your own page control.',
      },
    },
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
          width: 100%;
        }

        .bottom-sheet-demo .modus-wc-panel {
          max-height: 480px;
        }

      </style>
      <div class="bottom-sheet-demo">
        <modus-wc-bottom-sheet
          ?visible="${args.visible}"
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
