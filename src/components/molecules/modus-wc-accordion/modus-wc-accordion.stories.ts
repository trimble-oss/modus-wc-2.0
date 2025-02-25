import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DaisySize } from '../../types';
import { IModusWcCollapseOptions } from '../modus-wc-collapse/modus-wc-collapse';

interface AccordionArgs {
  bordered?: boolean;
  'custom-class'?: string;
  size?: DaisySize;
}

const options: IModusWcCollapseOptions[] = [
  {
    description: 'Item one description',
    icon: 'alert',
    iconAriaLabel: 'Alert',
    title: 'Item One',
  },
  {
    description: 'Item two description',
    icon: 'alert',
    iconAriaLabel: 'Alert',
    title: 'Item Two',
  },
  {
    description: 'Item three description',
    icon: 'alert',
    iconAriaLabel: 'Alert',
    title: 'Item Three',
  },
];

const meta: Meta<AccordionArgs> = {
  title: 'Components/Accordion',
  component: 'modus-wc-accordion',
  args: {
    bordered: true,
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['expandedChange'],
    },
    layout: {
      padded: true,
    },
  },
};

export default meta;

type Story = StoryObj<AccordionArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<div style="padding: 20px;">
  <modus-wc-accordion
    ?bordered=${args.bordered}
    custom-class=${ifDefined(args['custom-class'])}
    size=${ifDefined(args.size)}
  >
    <modus-wc-collapse .options=${options[0]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=${options[1]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=${options[2]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>
    `;
  },
};

export const Default: Story = { ...Template };
