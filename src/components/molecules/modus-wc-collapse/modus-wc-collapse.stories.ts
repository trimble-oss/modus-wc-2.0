import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';

interface CollapseArgs {
  bordered?: boolean;
  'collapse-description'?: string;
  'collapse-title'?: string;
  'custom-class'?: string;
  expanded?: boolean;
  icon?: string;
  'icon-aria-label'?: string;
  size?: DaisySize;
}

const meta: Meta<CollapseArgs> = {
  title: 'Components/Collapse',
  component: 'modus-wc-collapse',
  args: {
    bordered: true,
    'collapse-description': 'Collapse description',
    'collapse-title': 'Collapse title',
    expanded: false,
    icon: 'info',
    'icon-aria-label': 'Information icon',
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
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
  collapse-description=${ifDefined(args['collapse-description'])}
  collapse-title=${ifDefined(args['collapse-title'])}
  custom-class=${ifDefined(args['custom-class'])}
  ?expanded=${args.expanded}
  icon=${ifDefined(args.icon)}
  icon-aria-label=${ifDefined(args['icon-aria-label'])}
  size=${ifDefined(args.size)}
>
  <div>Custom HTML content</div>
</modus-wc-collapse>
    `;
  },
};

export const Default: Story = { ...Template };
