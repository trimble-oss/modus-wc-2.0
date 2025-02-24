import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IModusWcAccordionItem } from './modus-wc-accordion';
import { DaisySize } from '../../types';

const items: IModusWcAccordionItem[] = [
  {
    customClass: 'test-class',
    description: 'Sports played by a team.',
    expanded: true,
    icon: 'people_group',
    iconAriaLabel: 'Team icon',
    title: 'Team Sports',
  },
  {
    customClass: 'test-class',
    description: 'Sports played by individuals.',
    expanded: false,
    icon: 'person',
    iconAriaLabel: 'Person icon',
    title: 'Individual Sports',
  },
  {
    customClass: 'test-class',
    description: 'Sports played in water.',
    expanded: false,
    icon: 'fog',
    iconAriaLabel: 'Water icon',
    title: 'Water Sports',
  },
];

interface AccordionArgs {
  bordered?: boolean;
  'custom-class'?: string;
  items: IModusWcAccordionItem[];
  size?: DaisySize;
}

const meta: Meta<AccordionArgs> = {
  title: 'Components/Accordion',
  component: 'modus-wc-accordion',
  args: {
    bordered: true,
    items,
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
    .items=${args.items}
    size=${ifDefined(args.size)}
  >
    <div slot="item-0">
      <ul>
        <li>Baseball</li>
        <li>Basketball</li>
        <li>Soccer</li>
      </ul>
    </div>
    <div slot="item-1">
      <ul>
        <li>Tennis</li>
        <li>Golf</li>
        <li>Wrestling</li>
      </ul>
    </div>
    <div slot="item-2">
      <ul>
        <li>Sailing</li>
        <li>Surfing</li>
        <li>Swimming</li>
      </ul>
    </div>
  </modus-wc-accordion>
</div>
    `;
  },
};

export const Default: Story = { ...Template };
