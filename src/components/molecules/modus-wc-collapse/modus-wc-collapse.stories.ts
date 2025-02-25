import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IModusWcCollapseOptions } from './modus-wc-collapse';

interface CollapseArgs {
  bordered?: boolean;
  'custom-class'?: string;
  expanded?: boolean;
  id?: string;
  options?: IModusWcCollapseOptions;
}

const options: IModusWcCollapseOptions = {
  title: 'Collapse Title',
  description: 'Collapse description',
  icon: 'alert',
  iconAriaLabel: 'Alert',
};

const meta: Meta<CollapseArgs> = {
  title: 'Components/Collapse',
  component: 'modus-wc-collapse',
  args: {
    bordered: true,
    expanded: false,
    options,
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['expandedChange'],
    },
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<CollapseArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-collapse
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  ?expanded=${args.expanded}
  id=${ifDefined(args.id)}
  .options=${ifDefined(args.options)}
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    `;
  },
};

export const Default: Story = { ...Template };

export const WithCustomContent = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-collapse
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  ?expanded=${args.expanded}
  id="123"
>
  <div slot="header" class="modus-wc-collapse-title" id="123">Custom header</div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
    `;
  },
};
