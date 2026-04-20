import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IBreadcrumb } from './modus-wc-breadcrumbs';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';
import { DaisySize } from '../types';

const items: IBreadcrumb[] = [
  {
    label: 'Root',
    url: '#',
  },
  {
    label: 'Subpage',
    url: '#',
  },
  {
    label: 'Current Page',
    url: '#',
  },
];

interface BreadcrumbArgs {
  'custom-class'?: string;
  items: IBreadcrumb[];
  size?: DaisySize;
}

const meta: Meta<BreadcrumbArgs> = {
  title: 'Components/Breadcrumbs',
  component: 'modus-wc-breadcrumbs',
  args: {
    items,
    size: 'md',
  },
  argTypes: {
    items: {
      description: 'Array of items for the breadcrumbs component',
      table: {
        type: {
          detail: `
            Interface: IBreadcrumb
            Properties:
            - label (string): The text to render in the breadcrumb
            - url (string, optional): The URL emitted when the breadcrumb is clicked
          `,
        },
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['breadcrumbClick'],
    },
  },
};

export default meta;

type Story = StoryObj<BreadcrumbArgs>;

const Template: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<modus-wc-breadcrumbs
  aria-label="Breadcrumbs"
  custom-class=${ifDefined(args['custom-class'])}
  .items=${args.items}
  size=${ifDefined(args.size)}
></modus-wc-breadcrumbs>
<script>
  const items = [
    {
      label: 'Root',
      url: '#',
    },
    {
      label: 'Subpage',
      url: '#',
    },
    {
      label: 'Current Page',
      url: '#',
    },
  ];
  // Adding this block to show how to set options via JS 
  // const breadcrumbs = document.querySelector('modus-wc-breadcrumbs');
  // breadcrumbs.items = items;
</script>
    `;
  },
};

export const Default: Story = { ...Template };

export const UnderlineLinks: Story = {
  render: (args) => {
    // prettier-ignore
    return html`
<style>
  .underline-links a {
    text-decoration: underline;
  }
</style>
<modus-wc-breadcrumbs
  custom-class="underline-links"
  .items=${args.items}
  size=${ifDefined(args.size)}
></modus-wc-breadcrumbs>
<script>
  const items = [
    {
      label: 'Root',
      url: '#',
    },
    {
      label: 'Subpage',
      url: '#',
    },
    {
      label: 'Current Page',
      url: '#',
    },
  ];
  // Adding this block to show how to set options via JS 
  // const breadcrumbs = document.querySelector('modus-wc-breadcrumbs');
  // breadcrumbs.items = items;
</script>
    `;
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('breadcrumbs-shadow-host')) {
      const BreadcrumbsShadowHost = createShadowHostClass<BreadcrumbArgs>({
        componentTag: 'modus-wc-breadcrumbs',
        propsMapper: (v: BreadcrumbArgs, el: HTMLElement) => {
          const breadcrumbsEl = el as unknown as {
            customClass: string;
            items: IBreadcrumb[];
            size: string;
          };
          breadcrumbsEl.customClass = v['custom-class'] || '';
          breadcrumbsEl.items = v.items;
          breadcrumbsEl.size = v.size ?? 'md';
        },
      });
      customElements.define('breadcrumbs-shadow-host', BreadcrumbsShadowHost);
    }

    return html`<breadcrumbs-shadow-host
      .props=${{ ...args }}
    ></breadcrumbs-shadow-host>`;
  },
};
export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - The structure of the breadcrumb \`items\` has changed from \`Crumb\` interface to \`IBreadcrumb\` interface.
  - Underlined links are now applied using a custom class rather than a dedicated prop.

#### Prop Mapping

| 1.0 Prop        | 2.0 Prop      | Notes                                               |
|-----------------|---------------|-----------------------------------------------------|
| aria-label      | aria-label    |                                                     |
| crumbs          | items         | Interface changed from \`Crumb\` to \`IBreadcrumb\` |
| underline-links |               | Not carried over, use CSS instead                   |

#### Event Mapping

| 1.0 Event  | 2.0 Event       | Notes                                             |
|------------|-----------------|---------------------------------------------------|
| crumbClick | breadcrumbClick | Payload changed from \`Crumb\` to \`IBreadcrumb\` |

#### Interfaces

##### 1.0:
\`\`\`typescript
interface Crumb {
  display: string;
  id: string;
}
\`\`\`

##### 2.0:
\`\`\`typescript
interface IBreadcrumb {
  label: string;
  url?: string;
}
\`\`\`
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
