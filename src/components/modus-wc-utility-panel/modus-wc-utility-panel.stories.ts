import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface UtilityPanelArgs {
  expanded: boolean;
  'push-content': boolean;
}

const meta: Meta<UtilityPanelArgs> = {
  title: 'Components/Utility Panel',
  component: 'modus-wc-utility-panel',
  args: {
    expanded: false,
    'push-content': true,
  },
  argTypes: {
    expanded: {
      control: { type: 'boolean' },
    },
    'push-content': {
      control: { type: 'boolean' },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['panelOpened', 'panelClosed'],
    },
    docs: {
      description: {
        component:
          'A utility panel component that slides in from the right side of the screen. It can either push content or display as an overlay.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<UtilityPanelArgs>;

export const Default: Story = {
  render: (args) => {
    const { expanded, 'push-content': pushContent } = args;

    // Set element reference immediately on first update
    requestAnimationFrame(() => {
      const contentElement = document.getElementById('main-content');
      const panel = document.querySelector('modus-wc-utility-panel');
      if (panel && contentElement) {
        panel.targetElement = contentElement;
      }
    });

    return html`
      <style>
        .demo-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: white;
        }

        modus-wc-navbar {
          flex-shrink: 0;
        }

        .main-content-wrapper {
          flex: 1;
          overflow: hidden;
          position: relative;
          background: var(--modus-wc-color-base-page);
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: var(--modus-wc-color-base-page);
          overflow: auto;
        }

        .modus-wc-utility-panel-header {
          font-size: 18px;
          font-weight: 600;
        }

        .modus-wc-utility-panel-body {
          padding: 20px 0;
        }

        .modus-wc-utility-panel-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
      </style>

      <div class="demo-container">
        <modus-wc-navbar id="navbar-default" .visibility=${{ user: false }}>
          <div slot="end">
            <modus-wc-tooltip content="Toggle Utility Panel" position="left">
              <modus-wc-button
                color="primary"
                size="sm"
                variant="outlined"
                onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
              >
                <modus-wc-icon name="menu"></modus-wc-icon>
              </modus-wc-button>
            </modus-wc-tooltip>
          </div>
        </modus-wc-navbar>

        <div class="main-content-wrapper">
          <div id="main-content" class="main-content">
            <h1>Main Content Area</h1>
            <p>
              This is the main content area below the navbar. When the utility
              panel opens with pushContent=true, this content will be pushed to
              the left.
            </p>
            <p>
              This is an example of how the utility panel interacts with the
              main content. When the panel opens with push content enabled, this
              area will shift to the left to make room for the panel.
            </p>
            <p>
              The content area maintains its full functionality while the panel
              is open. Users can continue to interact with the main content
              while accessing the utility panel features.
            </p>
          </div>

          <modus-wc-utility-panel
            ?expanded="${expanded}"
            ?push-content="${pushContent}"
          >
            <div slot="header" class="modus-wc-utility-panel-header">
              Utility Panel Header
            </div>

            <div slot="body" class="modus-wc-utility-panel-body">
              <p>This is the utility panel body content.</p>
              <p>
                You can add any content here including forms, lists, or other
                components.
              </p>
              <modus-wc-text-input
                label="Example Input"
                placeholder="Enter text..."
              >
              </modus-wc-text-input>
            </div>

            <div slot="footer" class="modus-wc-utility-panel-footer">
              <modus-wc-button color="tertiary" size="sm"
                >Cancel</modus-wc-button
              >
              <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `;
  },
};

export const Expanded: Story = {
  render: (args) => {
    const { expanded, 'push-content': pushContent } = args;

    return html`
      <style>
        .demo-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: white;
        }

        modus-wc-navbar {
          flex-shrink: 0;
        }

        .main-content-wrapper {
          flex: 1;
          overflow: hidden;
          position: relative;
          background: var(--modus-wc-color-base-page);
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: var(--modus-wc-color-base-page);
          overflow: auto;
        }

        .modus-wc-utility-panel-header {
          font-size: 18px;
          font-weight: 600;
        }

        .modus-wc-utility-panel-body {
          padding: 20px 0;
          background: var(--modus-wc-color-base-100);
        }

        .modus-wc-utility-panel-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
      </style>

      <div class="demo-container">
        <modus-wc-navbar id="navbar-expanded" .visibility=${{ user: false }}>
          <div slot="end">
            <modus-wc-button
              color="primary"
              size="sm"
              variant="outlined"
              onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
            </modus-wc-button>
          </div>
        </modus-wc-navbar>

        <div class="main-content-wrapper">
          <div id="main-content-expanded" class="main-content">
            <h1>Main Content Area (Expanded Story)</h1>
            <p>
              This story shows the panel already expanded. The content should be
              pushed to the left.
            </p>
            <p>
              The utility panel provides quick access to additional tools and
              information. It can be used for settings, filters, or any
              supplementary content that enhances the main application.
            </p>
          </div>

          <modus-wc-utility-panel
            id="panel-expanded"
            ?expanded="${expanded}"
            ?push-content="${pushContent}"
          >
            <div slot="header" class="modus-wc-utility-panel-header">
              Expanded Panel Header
            </div>

            <div slot="body" class="modus-wc-utility-panel-body">
              <p>This panel starts in the expanded state.</p>
            </div>

            <div slot="footer" class="modus-wc-utility-panel-footer">
              <modus-wc-button color="tertiary" size="sm"
                >Cancel</modus-wc-button
              >
              <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `;
  },
  args: {
    expanded: true,
    'push-content': true,
  },
};

export const OverlayMode: Story = {
  render: (args) => {
    const { expanded, 'push-content': pushContent } = args;

    // Set element reference after render
    requestAnimationFrame(() => {
      const contentElement = document.getElementById('main-content-overlay');
      const panel = document.querySelector('#panel-overlay') as HTMLElement & {
        targetElement: HTMLElement;
      };
      if (panel && contentElement) {
        panel.targetElement = contentElement;
      }
    });

    return html`
      <style>
        .demo-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: white;
        }

        modus-wc-navbar {
          flex-shrink: 0;
        }

        .main-content-wrapper {
          flex: 1;
          overflow: hidden;
          position: relative;
          background: var(--modus-wc-color-base-page);
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: var(--modus-wc-color-base-page);
          overflow: auto;
        }

        .modus-wc-utility-panel-header {
          font-size: 18px;
          font-weight: 600;
        }

        .modus-wc-utility-panel-body {
          padding: 20px 0;
        }

        .modus-wc-utility-panel-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
      </style>

      <div class="demo-container">
        <modus-wc-navbar id="navbar-overlay" .visibility=${{ user: false }}>
          <div slot="end">
            <modus-wc-button
              color="primary"
              size="sm"
              variant="outlined"
              onclick="const panel = document.getElementById('panel-overlay'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
            </modus-wc-button>
          </div>
        </modus-wc-navbar>

        <div class="main-content-wrapper">
          <div id="main-content-overlay" class="main-content">
            <h1>Main Content Area (Overlay Mode)</h1>
            <p>
              In overlay mode, the panel appears over the content without
              pushing it.
            </p>
            <p>
              This example demonstrates the overlay mode where the panel appears
              on top of the content without pushing it aside. This is useful
              when you want to preserve the layout of the main content area.
            </p>
          </div>

          <modus-wc-utility-panel
            id="panel-overlay"
            ?expanded="${expanded}"
            ?push-content="${pushContent}"
          >
            <div slot="header" class="modus-wc-utility-panel-header">
              Overlay Panel Header
            </div>

            <div slot="body" class="modus-wc-utility-panel-body">
              <p>This panel overlays the content without pushing it.</p>
            </div>

            <div slot="footer" class="modus-wc-utility-panel-footer">
              <modus-wc-button color="tertiary" size="sm"
                >Cancel</modus-wc-button
              >
              <modus-wc-button color="primary" size="sm">Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `;
  },
  args: {
    expanded: true,
    'push-content': false,
  },
};

export const WithoutHeaderFooter: Story = {
  render: (args: UtilityPanelArgs) => {
    const { expanded, 'push-content': pushContent } = args;

    // Set element reference after render
    requestAnimationFrame(() => {
      const contentElement = document.getElementById('main-content-2');
      const panel = document.querySelector('#panel-simple') as HTMLElement & {
        targetElement: HTMLElement;
      };
      if (panel && contentElement) {
        panel.targetElement = contentElement;
      }
    });
    return html`
      <style>
        .demo-container {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: var(--modus-wc-color-base-page);
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: var(--modus-wc-color-base-page);
        }
      </style>

      <div class="demo-container">
        <div id="main-content-2" class="main-content">
          <h1>Main Content Area</h1>
          <modus-wc-button
            onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
          >
            Toggle Panel
          </modus-wc-button>
        </div>

        <modus-wc-utility-panel
          id="panel-simple"
          ?expanded="${expanded}"
          ?push-content="${pushContent}"
        >
          <div slot="body">
            <h3>Simple Body Content</h3>
            <p>This panel only has body content without header or footer.</p>
          </div>
        </modus-wc-utility-panel>
      </div>
    `;
  },
  args: {
    expanded: false,
    'push-content': true,
  },
};
