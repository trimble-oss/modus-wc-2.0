import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface UtilityPanelArgs {
  expanded: boolean;
  pushContent: boolean;
  targetContent: string;
}

const meta: Meta<UtilityPanelArgs> = {
  title: 'Components/Utility Panel',
  component: 'modus-wc-utility-panel',
  args: {
    expanded: false,
    pushContent: true,
    targetContent: '#main-content',
  },
  argTypes: {
    expanded: {
      control: { type: 'boolean' },
    },
    pushContent: {
      control: { type: 'boolean' },
    },
    targetContent: {
      control: { type: 'text' },
    },
  },
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

const Template: Story = {
  render: (args) => {
    const { expanded, pushContent, targetContent } = args;
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
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
          overflow: auto;
        }

        .panel-header {
          font-size: 18px;
          font-weight: 600;
        }

        .panel-body {
          padding: 20px 0;
        }

        .panel-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
      </style>

      <div class="demo-container">
        <modus-wc-navbar id="navbar-default">
          <div slot="logo">My Application</div>
          <div slot="end">
            <modus-wc-tooltip content="Toggle Utility Panel" position="left">
              <modus-wc-button
                button-type="secondary"
                size="small"
                variant="outlined"
                onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
              >
                <modus-wc-icon name="menu"></modus-wc-icon>
              </modus-wc-button>
            </modus-wc-tooltip>
          </div>
        </modus-wc-navbar>
        <script>
          setTimeout(() => {
            const navbar = document.getElementById('navbar-default');
            if (navbar) {
              navbar.visibility = { user: false };
            }
          }, 0);
        </script>

        <div class="main-content-wrapper">
          <div id="main-content" class="main-content">
            <h1>Main Content Area</h1>
            <p>
              This is the main content area below the navbar. When the utility
              panel opens with pushContent=true, this content will be pushed to
              the left.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>

          <modus-wc-utility-panel
            ?expanded="${expanded}"
            ?push-content="${pushContent}"
            target-content="${ifDefined(targetContent)}"
            @panelOpened="${() => console.log('Panel opened')}"
            @panelClosed="${() => console.log('Panel closed')}"
          >
            <div slot="header" class="panel-header">Utility Panel Header</div>

            <div slot="body" class="panel-body">
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

            <div slot="footer" class="panel-footer">
              <modus-wc-button button-type="secondary">Cancel</modus-wc-button>
              <modus-wc-button>Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

export const Expanded: Story = {
  render: (args) => {
    const { expanded, pushContent } = args;
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
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
          overflow: auto;
        }

        .panel-header {
          font-size: 18px;
          font-weight: 600;
        }

        .panel-body {
          padding: 20px 0;
        }

        .panel-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
      </style>

      <div class="demo-container">
        <modus-wc-navbar id="navbar-expanded">
          <div slot="logo">My Application</div>
          <div slot="end">
            <modus-wc-button
              button-type="secondary"
              onclick="const panel = this.closest('.demo-container').querySelector('modus-wc-utility-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
              Toggle Utility Panel
            </modus-wc-button>
          </div>
        </modus-wc-navbar>
        <script>
          setTimeout(() => {
            const navbar = document.getElementById('navbar-expanded');
            if (navbar) {
              navbar.visibility = { user: false };
            }
          }, 0);
        </script>

        <div class="main-content-wrapper">
          <div id="main-content-expanded" class="main-content">
            <h1>Main Content Area (Expanded Story)</h1>
            <p>
              This story shows the panel already expanded. The content should be
              pushed to the left.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <modus-wc-utility-panel
            ?expanded="${expanded}"
            ?push-content="${pushContent}"
            target-content="#main-content-expanded"
          >
            <div slot="header" class="panel-header">Expanded Panel Header</div>

            <div slot="body" class="panel-body">
              <p>This panel starts in the expanded state.</p>
            </div>

            <div slot="footer" class="panel-footer">
              <modus-wc-button button-type="secondary">Cancel</modus-wc-button>
              <modus-wc-button>Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `;
  },
  args: {
    expanded: true,
    pushContent: true,
    targetContent: '#main-content-expanded',
  },
};

export const OverlayMode: Story = {
  render: (args) => {
    const { expanded, pushContent } = args;
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
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
          overflow: auto;
        }

        .panel-header {
          font-size: 18px;
          font-weight: 600;
        }

        .panel-body {
          padding: 20px 0;
        }

        .panel-footer {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
      </style>

      <div class="demo-container">
        <modus-wc-navbar id="navbar-overlay">
          <div slot="end">
            <modus-wc-button
              button-type="secondary"
              onclick="const panel = document.getElementById('overlay-panel'); panel.expanded = !panel.expanded"
            >
              <modus-wc-icon name="menu"></modus-wc-icon>
              Toggle Utility Panel
            </modus-wc-button>
          </div>
        </modus-wc-navbar>
        <script>
          setTimeout(() => {
            const navbar = document.getElementById('navbar-overlay');
            if (navbar) {
              navbar.visibility = { user: false };
            }
          }, 0);
        </script>

        <div class="main-content-wrapper">
          <div id="main-content-overlay" class="main-content">
            <h1>Main Content Area (Overlay Mode)</h1>
            <p>
              In overlay mode, the panel appears over the content without
              pushing it.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <modus-wc-utility-panel
            id="overlay-panel"
            ?expanded="${expanded}"
            ?push-content="${pushContent}"
            target-content="#main-content-overlay"
          >
            <div slot="header" class="panel-header">Overlay Panel Header</div>

            <div slot="body" class="panel-body">
              <p>This panel overlays the content without pushing it.</p>
            </div>

            <div slot="footer" class="panel-footer">
              <modus-wc-button button-type="secondary">Cancel</modus-wc-button>
              <modus-wc-button>Save</modus-wc-button>
            </div>
          </modus-wc-utility-panel>
        </div>
      </div>
    `;
  },
  args: {
    expanded: true,
    pushContent: false,
    targetContent: '#main-content-overlay',
  },
};

export const WithoutHeaderFooter: Story = {
  render: (args: UtilityPanelArgs) => {
    const { expanded, pushContent, targetContent } = args;
    return html`
      <style>
        .demo-container {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: white;
        }

        .main-content {
          height: 100%;
          padding: 20px;
          background: #f5f5f5;
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
          ?expanded="${expanded}"
          ?push-content="${pushContent}"
          target-content="${ifDefined(targetContent)}"
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
    pushContent: true,
    targetContent: '#main-content-2',
  },
};
