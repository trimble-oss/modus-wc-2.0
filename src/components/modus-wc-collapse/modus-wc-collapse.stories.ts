import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ICollapseOptions } from './modus-wc-collapse';

interface CollapseArgs {
  bordered?: boolean;
  'custom-class'?: string;
  expanded?: boolean;
  id?: string;
  options?: ICollapseOptions;
}

const options: ICollapseOptions = {
  title: 'Collapse Title',
  description: 'Collapse description',
  icon: 'alert',
  iconAriaLabel: 'Alert',
};

const meta: Meta<CollapseArgs> = {
  title: 'Components/Collapse',
  component: 'modus-wc-collapse',
  args: { bordered: false, expanded: false, options },
  argTypes: {
    options: {
      description: 'Configuration options for the collapse component',
      table: {
        type: {
          detail: `
            Interface: ICollapseOptions
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
  parameters: { actions: { handles: ['expandedChange'] }, layout: 'padded' },
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
  .options=${args.options}
>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to set options via JS.
// const options = {
//   title: 'Collapse Title',
//   description: 'Collapse description',
//   icon: 'alert',
//   iconAriaLabel: 'Alert',
// };
//   const collapse = document.querySelector('modus-wc-collapse');
//   collapse.options = options;
</script>
    `;
  },
};

export const Default: Story = { ...Template };

export const WithCustomClickableHeader = {
  render: (args) => {
    const handleButtonClick = () => {
      window.alert('Button was clicked!');
    };

    // prettier-ignore
    return html`
<style>
  .clickable-div {
    position: relative;
    width: fit-content;
    z-index: 99;
  }
</style>
<modus-wc-collapse
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  ?expanded=${args.expanded}
  id="123"
>
  <div slot="header" class="modus-wc-collapse-title" id="123">
    <div class="clickable-div">
      <modus-wc-button @buttonClick=${handleButtonClick}>Alert 1</modus-wc-button>
      <modus-wc-button @buttonClick=${handleButtonClick}>Alert 2</modus-wc-button>
    </div>
  </div>
  <div slot="content">Collapse content</div>
</modus-wc-collapse>
<script>
// Adding this block to show how to add clickable buttons in the collapse header via JS.
// function handleButtonClick() {
//   window.alert('Button was clicked!');
// }
// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// button1.addEventListener('click', handleButtonClick);
// button2.addEventListener('click', handleButtonClick);
</script>
    `;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - The 1.0 accordion-item component maps to the 2.0 collapse component. See the [Accordion component](?path=/docs/components-accordion--docs).
  - Size values have changed from \`condensed\`, \`standard\` in 1.0 to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`) in 2.0.

#### Prop Mapping

##### accordion-item (1.0) → collapse (2.0)

| 1.0 Prop           | 2.0 Prop            | Notes            |
|--------------------|---------------------|------------------|
| aria-label         | aria-label          |                  |
| disabled           |                     | Not carried over |
| expand-button-type |                     | Not carried over |
| expanded           | expanded            |                  |
| header-text        | options.title       |                  |
| icon               | options.icon        |                  |
| size               | options.size        |                  |
| supporting-label   | options.description |                  |

#### Event Mapping

| 1.0 Event | 2.0 Event      | Notes            |
|-----------|----------------|------------------|
| closed    | expandedChange |                  |
| opened    | expandedChange |                  |
        `,
      },
    },
    controls: { disable: true },
    canvas: { disable: true },
  },
  render: () => html`<div></div>`,
};
