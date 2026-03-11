import { withActions } from '@storybook/addon-actions/decorator';
import { expect, userEvent, within } from '@storybook/test';
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
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<AccordionArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
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
</script>
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
    `;
  },
};

export const Default: Story = {
  ...Template,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    // Reset all details to collapsed state before testing
    const openDetails = canvasElement.querySelectorAll('details[open]');
    for (const d of Array.from(openDetails)) {
      (d as HTMLDetailsElement).open = false;
    }
    await new Promise((r) => requestAnimationFrame(r));

    await step('Verify accordion and collapse items render', async () => {
      const accordion = canvasElement.querySelector('modus-wc-accordion');
      await expect(accordion).toBeTruthy();

      const collapseItems = canvasElement.querySelectorAll('modus-wc-collapse');
      await expect(collapseItems.length).toBe(3);

      const itemOne = await canvas.findByText('Item One');
      await expect(itemOne).toBeInTheDocument();

      const itemTwo = await canvas.findByText('Item Two');
      await expect(itemTwo).toBeInTheDocument();

      const itemThree = await canvas.findByText('Item Three');
      await expect(itemThree).toBeInTheDocument();
    });

    await step('Verify all items are initially collapsed', async () => {
      const detailsElements = canvasElement.querySelectorAll('details');
      for (const details of Array.from(detailsElements)) {
        await expect(details.open).toBe(false);
      }
    });

    await step('Click first item to expand', async () => {
      const itemOneSummary = await canvas.findByText('Item One');
      await userEvent.click(itemOneSummary);

      const firstDetails = canvasElement.querySelector('details');
      await expect(firstDetails?.open).toBe(true);
    });

    await step('Verify first item content is visible', async () => {
      const contentElements = canvasElement.querySelectorAll(
        '.modus-wc-collapse-content'
      );
      const firstContent = contentElements[0];
      await expect(firstContent).toBeTruthy();
    });

    await step('Click first item again to collapse', async () => {
      const itemOneSummary = await canvas.findByText('Item One');
      await userEvent.click(itemOneSummary);

      const firstDetails = canvasElement.querySelector('details');
      await expect(firstDetails?.open).toBe(false);
    });

    await step('Click second item to expand', async () => {
      const itemTwoSummary = await canvas.findByText('Item Two');
      await userEvent.click(itemTwoSummary);

      const detailsElements = canvasElement.querySelectorAll('details');
      await expect(detailsElements[1].open).toBe(true);
    });

    await step('Verify expandedChange event fires', async () => {
      const accordion = canvasElement.querySelector('modus-wc-accordion');
      let eventFired = false;

      accordion?.addEventListener(
        'expandedChange',
        () => {
          eventFired = true;
        },
        { once: true }
      );

      const itemThreeSummary = await canvas.findByText('Item Three');
      await userEvent.click(itemThreeSummary);

      await expect(eventFired).toBe(true);
    });

    await step('Verify keyboard focusability', async () => {
      const summaries = canvasElement.querySelectorAll('summary');
      for (const summary of Array.from(summaries)) {
        await expect(summary.tabIndex).toBeGreaterThanOrEqual(0);
      }

      const firstSummary = summaries[0];
      firstSummary.focus();
      await expect(firstSummary).toHaveFocus();
    });

    await step('Measure expand interaction performance', async () => {
      const detailsElements = canvasElement.querySelectorAll('details');
      const firstDetails = detailsElements[0];

      if (firstDetails.open) {
        const summary = firstDetails.querySelector('summary');
        summary?.click();
        await new Promise((r) => requestAnimationFrame(r));
      }

      const startTime = performance.now();
      const summary = firstDetails.querySelector('summary');
      summary?.click();
      await new Promise((r) => requestAnimationFrame(r));
      const endTime = performance.now();

      const duration = endTime - startTime;
      await expect(duration).toBeLessThan(50);
    });

    await step('Verify accessibility attributes', async () => {
      const detailsElements = canvasElement.querySelectorAll('details');
      const firstDetails = detailsElements[0];

      if (!firstDetails.open) {
        const summary = firstDetails.querySelector('summary');
        summary?.click();
        await new Promise((r) => requestAnimationFrame(r));
      }
      await expect(firstDetails.open).toBe(true);

      const contentDiv = firstDetails.querySelector(
        '.modus-wc-collapse-content'
      );
      await expect(contentDiv).toBeTruthy();

      const itemOneDesc = await canvas.findByText('Item one description');
      await expect(itemOneDesc).toBeInTheDocument();

      const itemTwoDesc = await canvas.findByText('Item two description');
      await expect(itemTwoDesc).toBeInTheDocument();

      const itemThreeDesc = await canvas.findByText('Item three description');
      await expect(itemThreeDesc).toBeInTheDocument();
    });
  },
};

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
