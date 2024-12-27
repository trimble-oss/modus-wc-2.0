import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';

interface CollapseArgs {
  bordered?: boolean;
  'custom-class'?: string;
  expanded?: boolean;
  icon?: string;
  'icon-aria-label'?: string;
  title?: string;
}

const meta: Meta<CollapseArgs> = {
  title: 'Components/Collapse',
  component: 'modus-wc-collapse',
  args: {
    bordered: true,
    expanded: false,
    icon: 'info',
    'icon-aria-label': 'Information icon',
    title: 'Component title',
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<CollapseArgs>;

// prettier-ignore
const Template: Story = {
  render: (args) => {
    return html`
<modus-wc-collapse
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  ?expanded=${args.expanded}
  icon=${ifDefined(args.icon)}
  icon-aria-label=${ifDefined(args['icon-aria-label'])}
  title=${ifDefined(args.title)}
>
  <div>Custom HTML content</div>
</modus-wc-collapse>
    `;
  },
};

export const Default: Story = { ...Template };

// prettier-ignore
export const Accordion: Story = {
  render: () => {
    // Create a function to handle collapse state
    const handleExpandedChange = (event: Event) => {
      const clickedCollapse = event.target as HTMLElement;

      // Find all collapse components in the container
      const allCollapses =
        clickedCollapse
          .closest('.accordion-container')
          ?.querySelectorAll('modus-wc-collapse') || [];

      // Remove expanded state from all other collapses
      allCollapses.forEach((collapse) => {
        if (collapse !== clickedCollapse) {
          collapse.setAttribute('expanded', 'false');
        }
      });
    };

    return html`
<div class="accordion-container">
  <modus-wc-collapse
    bordered
    icon="email"
    icon-aria-label="Email icon"
    title="First Section"
    @expandedChange=${handleExpandedChange}
  >
    <div>
      <p>This is the content for the first section.</p>
    </div>
  </modus-wc-collapse>

  <modus-wc-collapse
    bordered
    icon="notifications"
    icon-aria-label="Notifications icon"
    title="Second Section"
    @expandedChange=${handleExpandedChange}
  >
    <div>
      <p>This is the content for the second section.</p>
    </div>
  </modus-wc-collapse>

  <modus-wc-collapse
    bordered
    icon="shopping_cart"
    icon-aria-label="Shopping cart icon"
    title="Third Section"
    @expandedChange=${handleExpandedChange}
  >
    <div>
      <p>This is the content for the third section.</p>
    </div>
  </modus-wc-collapse>
</div>
    `;
  },
};
