import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Meta, StoryObj } from '@storybook/web-components';

interface CollapseArgs {
  'aria-label': string;
  bordered?: boolean;
  'custom-class'?: string;
  icon?: string;
  'icon-aria-label'?: string;
  title?: string;
}

const meta: Meta<CollapseArgs> = {
  title: 'Components/Collapse',
  component: 'modus-wc-collapse',
  args: {
    'aria-label': 'Example collapse',
    bordered: true,
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
  aria-label=${args['aria-label']}
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
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
