import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface CardArgs {
  'background-figure'?: boolean;
  bordered?: boolean;
  'custom-class'?: string;
  layout?: 'vertical' | 'horizontal';
  padding?: 'normal' | 'compact';
}

const meta: Meta<CardArgs> = {
  title: 'Components/Card',
  component: 'modus-wc-card',
  args: {
    'background-figure': false,
    bordered: false,
    layout: 'vertical',
    padding: 'normal',
  },
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    padding: {
      control: { type: 'select' },
      options: ['normal', 'compact'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<CardArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .modus-wc-card {
    width: 400px;
  }
</style>
<modus-wc-card
  ?background-figure=${args['background-figure']}
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  layout=${ifDefined(args.layout)}
  padding=${ifDefined(args.padding)}
>
  <span slot="title">Card Title</span>
  <span slot="subtitle">Card Subtitle</span>
  <p>This is a sample card content. You can place any content here.</p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Click me">Click me</modus-wc-button>
  </div>
</modus-wc-card>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

export const SimpleCard: Story = {
  ...Template,
  // prettier-ignore
  render: () => html`
<modus-wc-card>
  Raw card content.
</modus-wc-card>
  `,
};

export const SlotsLayout: Story = {
  ...Template,
  // prettier-ignore
  render: (args) => html`
<style>
  .slot-box {
    background: #ccccff;
    border: 2px solid purple;
    color: purple;
    display: flex;
    justify-content: center;
  }
</style>
<modus-wc-card
  ?background-figure=${args['background-figure']}
  layout=${ifDefined(args.layout)}
  padding=${ifDefined(args.padding)}
>
  <div slot="header" class="slot-box">Header Slot</div>
  <div slot="title" class="slot-box">Title Slot</div>
  <div slot="subtitle" class="slot-box">Subtitle Slot</div>
  <div class="slot-box">Default (Body) Slot</div>
  <div slot="actions" class="slot-box">Actions Slot</div>
  <div slot="footer" class="slot-box">Footer Slot</div>
</modus-wc-card>
  `,
};

export const ComplexCard: Story = {
  ...Template,
  // prettier-ignore
  render: (args) => html`
<style>
  #complex-card > .modus-wc-card:hover {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
</style>
<modus-wc-card
  id="complex-card"
  ?background-figure=${args['background-figure']}
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  layout=${ifDefined(args.layout)}
  padding=${ifDefined(args.padding)}
>
  <figure slot="header">
    <img
      src="https://picsum.photos/id/643/750/300"
      alt="Header Image with Shadow"
    />
  </figure>
  <span slot="title">Complex Card</span>
  <span slot="subtitle">With Shadow</span>
  <p>
    This is a more of a traditional Card, featuring a header image, content,
    multiple buttons, and a larger shadow that appears on hover.
  </p>
  <div slot="actions" class="modus-wc-justify-end">
    <modus-wc-button aria-label="Action 1">Action 1</modus-wc-button>
    <modus-wc-button aria-label="Action 2">Action 2</modus-wc-button>
  </div>
</modus-wc-card>
  `,
};

export const HorizontalImage: Story = {
  ...Template,
  // prettier-ignore
  render: (args) => html`
<modus-wc-card
  ?background-figure=${args['background-figure']}
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  layout="horizontal"
  padding=${ifDefined(args.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1025/200/300" alt="Horizontal Image" />
  </figure>
  <p>This card uses a horizontal layout.</p>
</modus-wc-card>
  `,
};

export const BackgroundFigureImage: Story = {
  ...Template,
  // prettier-ignore
  render: (args) => html`
<modus-wc-card
  background-figure
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  layout=${ifDefined(args.layout)}
  padding=${ifDefined(args.padding)}
>
  <figure slot="header">
    <img src="https://picsum.photos/id/1045/600/400" alt="Full Image" />
  </figure>
  <span slot="title">Full Image Card</span>
  <p>This card has a figure image in the background.</p>
</modus-wc-card>
  `,
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0, card dimensions were controlled via direct props. In 2.0, styling should be handled through CSS.
  - Shadow effects on hover are now controlled via CSS rather than props.
  - The card component in 2.0 focuses on layout and structure rather than specific styling.

#### Prop Mapping

| 1.0 Prop             | 2.0 Prop            | Notes                                |
|----------------------|---------------------|--------------------------------------|
| border-radius        |                     | Not carried over, use CSS instead    |
| height               |                     | Not carried over, use CSS instead    |
| show-card-border     | bordered            |                                      |
| show-shadow-on-hover |                     | Not carried over, use CSS instead    |
| width                |                     | Not carried over, use CSS instead    |
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
