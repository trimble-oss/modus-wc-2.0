import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { keyed } from 'lit/directives/keyed.js';
import {
  DEFAULT_ILLUSTRATION_BY_VARIANT,
  EmptyStateIllustration,
  EmptyStateVariant,
  getIllustrationsForVariant,
  ILLUSTRATION_VARIANTS,
} from './illustration-constants';
import { createShadowHostClass } from '../../providers/shadow-dom/shadow-host-helper';

const ALL_ILLUSTRATION_OPTIONS = Object.keys(
  ILLUSTRATION_VARIANTS
) as EmptyStateIllustration[];

const COMPACT_ILLUSTRATION_OPTIONS = getIllustrationsForVariant('compact');
const ILLUSTRATION_LAYOUT_OPTIONS = getIllustrationsForVariant('illustration');
const ERROR_ILLUSTRATION_OPTIONS = getIllustrationsForVariant('error');

interface EmptyStateArgs {
  variant: EmptyStateVariant;
  illustration?: EmptyStateIllustration;
  heading: string;
  subtitle?: string;
  'action-label'?: string;
  'custom-class'?: string;
}

const meta: Meta<EmptyStateArgs> = {
  title: 'Components/Empty State',
  component: 'modus-wc-empty-state',
  decorators: [withActions],
  args: {
    variant: 'compact',
    illustration: DEFAULT_ILLUSTRATION_BY_VARIANT.compact,
    heading: 'Title for Empty State',
    subtitle: 'Subtitle',
    'action-label': 'Action',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['compact', 'illustration', 'error'],
    },
    illustration: {
      control: { type: 'select' },
      options: ALL_ILLUSTRATION_OPTIONS,
      table: {
        type: { summary: 'EmptyStateIllustration' },
      },
    },
  },
  parameters: {
    actions: {
      handles: ['actionClick'],
    },
    docs: {
      description: {
        component:
          'Use the `illustration` prop to choose a bundled graphic. Allowed values depend on `variant`. **Default** exposes all layout variants; **Compact**, **Illustration**, and **Error404** stories limit controls to that variant’s illustrations.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<EmptyStateArgs>;

const Template: Story = {
  // Keyed per story so Lit does not reuse the element from a previously viewed story.
  render: (args, context) =>
    html`${keyed(
      context.id,
      html`
        <modus-wc-empty-state
          variant="${args.variant}"
          .illustration=${args.illustration}
          heading="${args.heading}"
          subtitle="${ifDefined(args.subtitle)}"
          action-label="${ifDefined(args['action-label'])}"
          custom-class="${ifDefined(args['custom-class'])}"
          @actionClick=${(e: CustomEvent) => e}
        ></modus-wc-empty-state>
      `
    )}`,
};

export const Default: Story = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story:
          'Playground with `variant` (`compact`, `illustration`, `error`) and the full illustration list. Pick a layout variant, then choose any bundled illustration (mismatches fall back to that variant’s default).',
      },
    },
  },
};

export const Compact: Story = {
  ...Template,
  argTypes: {
    variant: { control: false, table: { disable: true } },
    illustration: {
      control: { type: 'select' },
      options: COMPACT_ILLUSTRATION_OPTIONS,
      table: {
        type: { summary: 'EmptyStateIllustration' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '`variant="compact"`. `illustration` options: `selection_plus`, `symbol_info`, `add_user`. Default illustration: `selection_plus`.',
      },
    },
  },
  args: {
    variant: 'compact',
    illustration: DEFAULT_ILLUSTRATION_BY_VARIANT.compact,
  },
};

export const Illustration: Story = {
  ...Template,
  argTypes: {
    variant: { control: false, table: { disable: true } },
    illustration: {
      control: { type: 'select' },
      options: ILLUSTRATION_LAYOUT_OPTIONS,
      table: {
        type: { summary: 'EmptyStateIllustration' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '`variant="illustration"`. `illustration` options: `landscape`, `api`, `api_plugin`, `documents_empty`, `cloud_access`, `store_settings`. Default: `landscape`.',
      },
    },
  },
  args: {
    variant: 'illustration',
    illustration: DEFAULT_ILLUSTRATION_BY_VARIANT.illustration,
  },
};

export const Error404: Story = {
  ...Template,
  argTypes: {
    variant: { control: false, table: { disable: true } },
    illustration: {
      control: { type: 'select' },
      options: ERROR_ILLUSTRATION_OPTIONS,
      table: {
        type: { summary: 'EmptyStateIllustration' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '`variant="error"`. `illustration` options: `error_404`, `error_404_page`. Default: `error_404`.',
      },
    },
  },
  args: {
    variant: 'error',
    illustration: DEFAULT_ILLUSTRATION_BY_VARIANT.error,
    heading: '404 Page Not Found',
    subtitle:
      'Helpful message that conveys the purpose of the screen. (max of 3 Lines) This is where line three will be!',
  },
};

export const WithoutAction: Story = {
  ...Template,
  argTypes: {
    variant: { control: false, table: { disable: true } },
    illustration: {
      control: { type: 'select' },
      options: COMPACT_ILLUSTRATION_OPTIONS,
      table: {
        type: { summary: 'EmptyStateIllustration' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Compact layout without an action button. `illustration` options match **Compact**.',
      },
    },
  },
  args: {
    variant: 'compact',
    illustration: 'symbol_info',
    heading: 'Nothing here yet',
    subtitle: 'Create your first item to populate this view.',
    'action-label': undefined,
  },
};

export const ShadowDomParent: Story = {
  render: (args) => {
    if (!customElements.get('empty-state-shadow-host')) {
      const EmptyStateShadowHost = createShadowHostClass<EmptyStateArgs>({
        componentTag: 'modus-wc-empty-state',
        propsMapper: (v: EmptyStateArgs, el: HTMLElement) => {
          const emptyStateEl = el as unknown as {
            variant: EmptyStateVariant;
            illustration?: EmptyStateIllustration;
            heading: string;
            subtitle?: string;
            actionLabel?: string;
            customClass: string;
          };
          emptyStateEl.variant = v.variant;
          emptyStateEl.illustration = v.illustration;
          emptyStateEl.heading = v.heading;
          emptyStateEl.subtitle = v.subtitle;
          emptyStateEl.actionLabel = v['action-label'];
          emptyStateEl.customClass = v['custom-class'] || '';
        },
      });
      customElements.define('empty-state-shadow-host', EmptyStateShadowHost);
    }

    return html`<empty-state-shadow-host
      .props=${{ ...args }}
    ></empty-state-shadow-host>`;
  },
};
