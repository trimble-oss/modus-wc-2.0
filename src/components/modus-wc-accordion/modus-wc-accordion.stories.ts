import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IModusWcCollapseOptions } from '../modus-wc-collapse/modus-wc-collapse';

interface AccordionArgs {
  'custom-class'?: string;
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
  <modus-wc-accordion custom-class=${ifDefined(args['custom-class'])}>
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
