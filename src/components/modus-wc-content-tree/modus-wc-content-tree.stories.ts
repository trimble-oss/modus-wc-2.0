import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface ContentTreeArgs {
  'custom-class'?: string;
  'search-placeholder'?: string;
}

const meta: Meta<ContentTreeArgs> = {
  title: 'Components/Content Tree',
  component: 'modus-wc-content-tree',
  args: {
    'search-placeholder': 'Search...',
  },
  argTypes: {
    'search-placeholder': {
      control: { type: 'text' },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['itemSelect'],
    },
  },
};

export default meta;

type Story = StoryObj<ContentTreeArgs>;

export const Default: Story = {
  render: (args) => {
    return html`
      <modus-wc-content-tree
        custom-class=${ifDefined(args['custom-class'])}
        search-placeholder=${args['search-placeholder']}
      >
      </modus-wc-content-tree>
    `;
  },
};

export const UsingSlot: Story = {
  render: (args) => {
    return html`
      <modus-wc-content-tree
        custom-class=${ifDefined(args['custom-class'])}
        search-placeholder=${args['search-placeholder']}
      >
        <modus-wc-menu>
          <modus-wc-menu-item
            label="Documents"
            value="documents"
            has-submenu="true"
            size="md"
            checkbox
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
              size="xs"
            ></modus-wc-icon>
            <modus-wc-menu .isSubMenu=${true}>
              <modus-wc-menu-item
                label="Reports.pdf"
                value="reports"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="description"
                  variant="solid"
                  size="xs"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item
                label="Proposal.docx"
                value="proposal"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="description"
                  variant="solid"
                  size="xs"
                ></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-menu-item>
          <modus-wc-menu-item
            label="Projects"
            value="projects"
            has-submenu="true"
            size="md"
            checkbox
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
              size="xs"
            ></modus-wc-icon>
            <modus-wc-menu .isSubMenu=${true}>
              <modus-wc-menu-item
                label="Website Redesign"
                value="website"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="description"
                  variant="solid"
                  size="xs"
                ></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item
                label="Client Work"
                value="client-work"
                has-submenu="true"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="folder_closed"
                  variant="solid"
                  size="xs"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=${true}>
                  <modus-wc-menu-item
                    label="Design Mockups"
                    value="mockups"
                    size="md"
                    checkbox
                  >
                    <modus-wc-icon
                      slot="start-icon"
                      name="description"
                      variant="solid"
                      size="xs"
                    ></modus-wc-icon>
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-menu-item>
          <modus-wc-menu-item
            label="Resources"
            value="resources"
            has-submenu="true"
            size="md"
            checkbox
          >
            <modus-wc-icon
              slot="start-icon"
              name="folder_closed"
              variant="solid"
              size="xs"
            ></modus-wc-icon>
            <modus-wc-menu .isSubMenu=${true}>
              <modus-wc-menu-item
                label="Brand Guidelines.pdf"
                value="guidelines"
                size="md"
                checkbox
              >
                <modus-wc-icon
                  slot="start-icon"
                  name="description"
                  variant="solid"
                  size="xs"
                ></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-menu-item>
        </modus-wc-menu>
      </modus-wc-content-tree>
    `;
  },
};

export const CustomMenu: Story = {
  render: (args) => {
    const toggleExpand = (e: Event) => {
      const icon = e.target as HTMLElement;
      const li = icon.closest('li');
      if (!li) return;

      const iconElement = li.querySelector(
        'modus-wc-icon[name="expand_more"], modus-wc-icon[name="chevron_right"]'
      ) as any;
      const siblings = Array.from(li.parentElement?.children || []);
      const currentIndex = siblings.indexOf(li);

      // Find all child items (next siblings with custom-nested-row class)
      const children: HTMLElement[] = [];
      for (let i = currentIndex + 1; i < siblings.length; i++) {
        const sibling = siblings[i] as HTMLElement;
        if (sibling.querySelector('.custom-nested-row')) {
          children.push(sibling);
        } else {
          break;
        }
      }

      // Toggle icon and children visibility
      if (iconElement.getAttribute('name') === 'expand_more') {
        iconElement.setAttribute('name', 'chevron_right');
        li.classList.remove('expanded');
        children.forEach((child) => (child.style.display = 'none'));
      } else {
        iconElement.setAttribute('name', 'expand_more');
        li.classList.add('expanded');
        children.forEach((child) => (child.style.display = ''));
      }
    };

    return html`
      <style>
        .custom-flex-row {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }
        .custom-nested-row {
          position: relative;
        }
        .custom-nested-row::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--modus-wc-color-blue, #0063a3);
        }
        li.expanded::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--modus-wc-color-blue, #0063a3);
        }
        .custom-nested-row.hidden {
          display: none;
        }
        .custom-nested-row .custom-nested-content {
          padding-inline-start: 3rem;
          display: flex;
          align-items: center;
          flex: 1;
          gap: 8px;
        }
        .custom-justify-end {
          margin-left: auto;
        }
        .green-square {
          height: 18px;
          width: 18px;
          background-color: green;
        }
        .red-square {
          height: 18px;
          width: 18px;
          background-color: red;
        }
        .expand-icon {
          cursor: pointer;
        }
      </style>
      <modus-wc-content-tree
        custom-class=${ifDefined(args['custom-class'])}
        search-placeholder=${args['search-placeholder']}
      >
        <modus-wc-menu>
          <li class="expanded">
            <div class="custom-flex-row">
              <modus-wc-icon
                decorative="true"
                name="drag_indicator"
                size="xs"
              ></modus-wc-icon>
              <modus-wc-icon
                decorative="true"
                name="expand_more"
                class="expand-icon"
                @click=${toggleExpand}
              ></modus-wc-icon>
              <modus-wc-checkbox
                aria-label="Checkbox"
                size="md"
                value="true"
              ></modus-wc-checkbox>
              <div>Parent</div>
              <div class="custom-justify-end">
                <modus-wc-button
                  aria-label="Visible button"
                  size="xs"
                  shape="circle"
                  variant="borderless"
                >
                  <modus-wc-icon
                    aria-label="Visible icon"
                    name="visibility_on"
                  ></modus-wc-icon>
                </modus-wc-button>
                <modus-wc-button
                  aria-label="Actions button"
                  size="xs"
                  shape="circle"
                  variant="borderless"
                >
                  <modus-wc-icon
                    aria-label="Actions icon"
                    name="more_vertical"
                  ></modus-wc-icon>
                </modus-wc-button>
              </div>
            </div>
          </li>
          <li>
            <div class="custom-flex-row custom-nested-row">
              <modus-wc-icon
                decorative="true"
                name="drag_indicator"
                size="xs"
              ></modus-wc-icon>
              <div class="custom-nested-content">
                <modus-wc-checkbox
                  aria-label="Checkbox"
                  size="md"
                  value="false"
                ></modus-wc-checkbox>
                <div>Child</div>
                <div class="custom-justify-end">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="xs"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      aria-label="Visible icon"
                      name="visibility_on"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button
                    aria-label="Actions button"
                    size="xs"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      aria-label="Actions icon"
                      name="more_vertical"
                    ></modus-wc-icon>
                  </modus-wc-button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="custom-flex-row custom-nested-row">
              <modus-wc-icon
                decorative="true"
                name="drag_indicator"
                size="xs"
              ></modus-wc-icon>
              <div class="custom-nested-content">
                <modus-wc-checkbox
                  aria-label="Checkbox"
                  size="md"
                  value="false"
                ></modus-wc-checkbox>
                <div>Child</div>
                <div class="custom-justify-end">
                  <modus-wc-button
                    aria-label="Visible button"
                    size="xs"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      aria-label="Invisible icon"
                      name="visibility_off"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button
                    aria-label="Actions button"
                    size="xs"
                    shape="circle"
                    variant="borderless"
                  >
                    <modus-wc-icon
                      aria-label="Actions icon"
                      name="more_vertical"
                    ></modus-wc-icon>
                  </modus-wc-button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="custom-flex-row">
              <modus-wc-icon
                decorative="true"
                name="drag_indicator"
                size="xs"
              ></modus-wc-icon>
              <modus-wc-icon
                decorative="true"
                name="chevron_right"
                class="expand-icon"
                @click=${toggleExpand}
              ></modus-wc-icon>
              <modus-wc-checkbox
                aria-label="Checkbox"
                size="md"
                value="false"
              ></modus-wc-checkbox>
              <div>Parent</div>
              <div class="custom-justify-end">
                <modus-wc-button
                  aria-label="Visible button"
                  size="xs"
                  shape="circle"
                  variant="borderless"
                >
                  <modus-wc-icon
                    aria-label="Visible icon"
                    name="visibility_on"
                  ></modus-wc-icon>
                </modus-wc-button>
                <modus-wc-button
                  aria-label="Actions button"
                  size="xs"
                  shape="circle"
                  variant="borderless"
                >
                  <modus-wc-icon
                    aria-label="Actions icon"
                    name="more_vertical"
                  ></modus-wc-icon>
                </modus-wc-button>
              </div>
            </div>
          </li>
        </modus-wc-menu>
      </modus-wc-content-tree>
    `;
  },
};

export const SingleLevel: Story = {
  render: (args) => {
    return html`
      <modus-wc-content-tree
        custom-class=${ifDefined(args['custom-class'])}
        search-placeholder=${args['search-placeholder']}
      >
        <modus-wc-menu>
          <modus-wc-menu-item label="Home" value="home" size="md">
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="xs"
            ></modus-wc-icon>
          </modus-wc-menu-item>

          <modus-wc-menu-item label="Settings" value="settings" size="md">
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="xs"
            ></modus-wc-icon>
          </modus-wc-menu-item>

          <modus-wc-menu-item
            label="Profile"
            value="profile"
            size="md"
            selected="true"
          >
            <modus-wc-icon
              slot="start-icon"
              name="description"
              variant="solid"
              size="xs"
            ></modus-wc-icon>
          </modus-wc-menu-item>
        </modus-wc-menu>
      </modus-wc-content-tree>
    `;
  },
};
