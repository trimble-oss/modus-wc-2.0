import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ICollapseOptions } from '../modus-wc-collapse/modus-wc-collapse';

interface AccordionArgs {
  'custom-class'?: string;
}

const collapseOptions: ICollapseOptions[] = [
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
    <modus-wc-collapse .options=${collapseOptions[0]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=${collapseOptions[1]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
    <modus-wc-collapse .options=${collapseOptions[2]}>
      <div slot="content">Collapse content</div>
    </modus-wc-collapse>
  </modus-wc-accordion>
</div>
<script>
  const collapseOptions = [
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
 // Adding this block to show how to set options via JS 
  // const items = document.querySelectorAll('modus-wc-collapse');
  // items.forEach((item, index) => {
  //  item.options = collapseOptions[index];
  // });
</script>
    `;
  },
};

export const Default: Story = { ...Template };

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 the accordion was composed of child accordion-item components. In 2.0 accordion children are collapse
  components.
  - The new accordion supports \`header\` and \`content\` slots to provide maximum flexibility.
  - Size values have changed from (\`condensed\`, \`standard\`) in 1.0 accordion-item to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`) in 2.0 collapse.

#### Prop Mapping

##### accordion

| 1.0 Prop           | 2.0 Prop           | Notes            |
|--------------------|--------------------|------------------|
| aria-label         | aria-label         |                  |

##### accordion-item → collapse

| 1.0 Prop           | 2.0 Prop            | Notes            |
|--------------------|---------------------|------------------|
| aria-label         | aria-label          |                  |
| disabled           |                     | Not carried over |
| expand-button-type |                     | Not carried over |
| expanded           | expanded            |                  |
| header-text        | options.title       |                  |
| icon               | options.icon        |                  |
| supporting-label   | options.description |                  |
| size               | options.size        |                  |

#### Event Mapping

##### accordion-item → accordion

The new accordion and collapse have their own events. We recommend using the
accordion events to migrate.

| 1.0 Event | 2.0 Event      | Notes            |
|-----------|----------------|------------------|
| closed    | expandedChange |                  |
| opened    | expandedChange |                  |
        `,
      },
    },
    // To hide the actual story rendering and only show docs:
    controls: { disable: true },
    canvas: { disable: true },
  },
  // Simple render function or leave it empty
  render: () => html`<div></div>`,
};
