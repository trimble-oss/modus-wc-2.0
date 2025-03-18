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
  argTypes: {
    options: {
      description: 'Configuration options for the collapse component',
      table: {
        type: {
          detail: `
            Interface: IModusWcCollapseOptions
            Properties:
            - description (string, optional): The description to render in the collapse header
            - icon (string, optional): The Modus icon name to render in the collapse header
            - iconAriaLabel (string, optional): The icon's aria-label
            - size (DaisySize, optional): The size of the collapse header
            - title (string): The title to render in the collapse header
          `,
        },
      },
    },
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
