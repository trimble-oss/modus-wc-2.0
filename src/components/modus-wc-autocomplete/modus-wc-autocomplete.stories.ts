import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  IAutocompleteItem,
  IAutocompleteNoResults,
} from './modus-wc-autocomplete';
import { ModusSize } from '../types';

// Updated items array includes an optional "focused" property.
const items: IAutocompleteItem[] = [
  {
    label: 'Apple',
    value: 'apple',
    visibleInMenu: true,
    focused: false,
    disabled: true,
  },
  {
    label: 'Banana',
    value: 'banana',
    visibleInMenu: true,
    focused: false,
    disabled: true,
  },
  {
    label: 'Blueberry',
    value: 'blueberry',
    visibleInMenu: true,
    focused: false,
  },
  { label: 'Cherry', value: 'cherry', visibleInMenu: true, focused: false },
  { label: 'Grape', value: 'grape', visibleInMenu: true, focused: false },
  { label: 'Lemon', value: 'lemon', visibleInMenu: true, focused: false },
  {
    label: 'Orange',
    value: 'orange',
    visibleInMenu: true,
    focused: false,
    disabled: true,
  },
  { label: 'Peach', value: 'peach', visibleInMenu: true, focused: false },
  { label: 'Pear', value: 'pear', visibleInMenu: true, focused: false },
  {
    label: 'Strawberry',
    value: 'strawberry',
    visibleInMenu: true,
    focused: false,
    disabled: true,
  },
];

interface AutocompleteArgs {
  visibleItems: IAutocompleteItem[];
  bordered?: boolean;
  'custom-class'?: string;
  'debounce-ms'?: number;
  disabled?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  items: IAutocompleteItem[];
  initialNavigation?: boolean;
  label?: string;
  'leave-menu-open'?: boolean;
  'min-chars': number;
  'multi-select'?: boolean;
  name?: string;
  'no-results': IAutocompleteNoResults;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  'show-spinner'?: boolean;
  size?: ModusSize;
  value: string;
}

const meta: Meta<AutocompleteArgs> = {
  title: 'Components/Forms/Autocomplete',
  component: 'modus-wc-autocomplete',
  args: {
    bordered: true,
    'debounce-ms': 300,
    disabled: false,
    items: items,
    label: 'Label',
    'leave-menu-open': false,
    'min-chars': 0,
    'multi-select': false,
    'show-spinner': false,
    'no-results': {
      ariaLabel: 'No results found',
      label: 'No results found',
      subLabel: 'Check spelling or try a different keyword',
    },
    size: 'md',
    value: '',
  },
  argTypes: {
    items: {
      description: 'Array of items for the autocomplete component',
      table: {
        type: {
          detail: `
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `,
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [withActions],
  parameters: {
    actions: {
      handles: [
        'chipRemove',
        'inputBlur',
        'inputChange',
        'inputFocus',
        'itemSelect',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<AutocompleteArgs>;

const Template: Story = {
  render: (args) => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );
      if (!autocomplete) return;

      // Initialize initialNavigation if undefined
      if (args.initialNavigation === undefined) {
        args.initialNavigation = true;
      }

      // Prevent default for navigation keys
      if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
        e.preventDefault();
      }

      const visibleItems = args.items.filter(
        (item) => item.visibleInMenu && !item.disabled
      );

      switch (e.key) {
        case 'Escape':
          args.items = args.items.map((item) => ({
            ...item,
            focused: false,
          }));
          args.initialNavigation = true;
          autocomplete.items = [...args.items];
          return;

        case 'ArrowDown':
          if (args.initialNavigation) {
            args.initialNavigation = false;
            return;
          } else {
            const currentIndex = visibleItems.findIndex((item) => item.focused);
            const nextIndex =
              currentIndex < 0
                ? 0
                : Math.min(currentIndex + 1, visibleItems.length - 1);
            args.items = args.items.map((item) => ({
              ...item,
              focused: visibleItems[nextIndex]?.value === item.value,
            }));
          }
          break;

        case 'ArrowUp':
          if (args.initialNavigation) {
            args.initialNavigation = false;
            return;
          } else {
            const currentIndex = visibleItems.findIndex((item) => item.focused);
            const prevIndex =
              currentIndex < 0
                ? visibleItems.length - 1
                : Math.max(currentIndex - 1, 0);
            args.items = args.items.map((item) => ({
              ...item,
              focused: visibleItems[prevIndex]?.value === item.value,
            }));
          }
          break;

        case 'Enter': {
          const focusedItem = visibleItems.find((item) => item.focused);
          if (focusedItem) {
            args.items = args.items.map((item) => ({
              ...item,
              selected: item.value === focusedItem.value,
              focused: false,
            }));
            autocomplete.value = focusedItem.label;
            args.initialNavigation = true;
          }
          break;
        }

        default:
          return;
      }

      autocomplete.items = [...args.items];
    };

    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();

        args.items = args.items.map((item) => ({
          ...item,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
          focused: false,
          selected: searchText ? item.selected : false,
        }));

        autocomplete.items = [...args.items];
        autocomplete.value = input.value;
      }
    };

    const handleBlur = () => {
      args.initialNavigation = true;
      args.items = args.items.map((item) => ({
        ...item,
        focused: false,
        visibleInMenu: true,
      }));
    };

    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }

        // Clear the previous selection.
        items.forEach((item) => (item.selected = false));

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find((item) => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };

    return html`
      <style>
        div[id^='story--components-forms-autocomplete--default'] {
          height: 400px;
        }
      </style>
      <script>
          const handleKeyDown = (e: KeyboardEvent) => {
          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );
          if (!autocomplete) return;

          // Initialize initialNavigation if undefined
          if (args.initialNavigation === undefined) {
            args.initialNavigation = true;
          }

          // Prevent default for navigation keys
          if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
            e.preventDefault();
          }

          const visibleItems = args.items.filter(
            (item) => item.visibleInMenu && !item.disabled
          );

          switch (e.key) {
            case 'Escape':
              args.items = args.items.map((item) => ({
                ...item,
                focused: false,
              }));
              args.initialNavigation = true;
              autocomplete.items = [...args.items];
              return;

            case 'ArrowDown':
              if (args.initialNavigation) {
                args.initialNavigation = false;
                return;
              } else {
                const currentIndex = visibleItems.findIndex((item) => item.focused);
                const nextIndex =
                  currentIndex < 0
                    ? 0
                    : Math.min(currentIndex + 1, visibleItems.length - 1);
                args.items = args.items.map((item) => ({
                  ...item,
                  focused: visibleItems[nextIndex]?.value === item.value,
                }));
              }
              break;

            case 'ArrowUp':
              if (args.initialNavigation) {
                args.initialNavigation = false;
                return;
              } else {
                const currentIndex = visibleItems.findIndex((item) => item.focused);
                const prevIndex =
                  currentIndex < 0
                    ? visibleItems.length - 1
                    : Math.max(currentIndex - 1, 0);
                args.items = args.items.map((item) => ({
                  ...item,
                  focused: visibleItems[prevIndex]?.value === item.value,
                }));
              }
              break;

            case 'Enter': {
              const focusedItem = visibleItems.find((item) => item.focused);
              if (focusedItem) {
                args.items = args.items.map((item) => ({
                  ...item,
                  selected: item.value === focusedItem.value,
                  focused: false,
                }));
                autocomplete.value = focusedItem.label;
                args.initialNavigation = true;
              }
              break;
            }

            default:
              return;
          }

          autocomplete.items = [...args.items];
        };

        const handleInputChange = (e: CustomEvent<Event>) => {
          if (!e.detail?.target) return;

          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );

          if (autocomplete) {
            const input = e.detail.target as HTMLInputElement;
            const searchText = input.value.toLowerCase();

            args.items = args.items.map((item) => ({
              ...item,
              visibleInMenu: item.label.toLowerCase().includes(searchText),
              focused: false,
              selected: searchText ? item.selected : false,
            }));

            autocomplete.items = [...args.items];
            autocomplete.value = input.value;
          }
        };

        const handleBlur = () => {
          args.initialNavigation = true;
          args.items = args.items.map((item) => ({
            ...item,
            focused: false,
            visibleInMenu: true,
          }));
        };

        const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );

          if (autocomplete) {
            const label = e.detail.label;
            if (label) {
              autocomplete.value = label;
            }

            // Clear the previous selection.
            items.forEach((item) => (item.selected = false));

            // Mark the user selected menu item as selected and create a new array to update items.
            const foundItem = items.find((item) => item.value === e.detail.value);
            if (foundItem) {
              foundItem.selected = true;
              autocomplete.items = [...items];
            }
          }
        };
      </script>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        debounce-ms=${ifDefined(args['debounce-ms'])}
        ?disabled=${args.disabled}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        .items=${args.items}
        label=${ifDefined(args.label)}
        ?leave-menu-open=${args['leave-menu-open']}
        min-chars=${args['min-chars']}
        ?multi-select=${false}
        name=${ifDefined(args.name)}
        .noResults=${args['no-results']}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        ?show-spinner=${args['show-spinner']}
        size=${ifDefined(args.size)}
        value=${args.value}
        @inputChange=${handleInputChange}
        @itemSelect=${handleItemSelect}
        @inputBlur=${handleBlur}
        @keydown=${handleKeyDown}
      ></modus-wc-autocomplete>
    `;
  },
};

export const Default: Story = {
  ...Template,
};

export const MultiSelect: Story = {
  render: (args) => {
    // Initialize args.items if empty
    if (!args.items || args.items.length === 0) {
      args.items = [...items];
    }

    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        args.items = args.items.map((item) =>
          item.value === e.detail.value ? { ...item, selected: false } : item
        );
        autocomplete.items = [...args.items];
      }
    };

    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();

        const updatedItems = args.items.map((item) => ({
          ...item,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
          focused: false,
        }));

        args.items = updatedItems;
        autocomplete.items = [...args.items];
        autocomplete.value = input.value;
        if (autocomplete.value) {
          args.initialNavigation = false;
        }
      }
    };

    const handleBlur = () => {
      args.initialNavigation = true;
      args.items = args.items.map((item) => ({
        ...item,
        focused: false,
        visibleInMenu: true,
      }));
    };

    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        args.items = args.items.map((item) =>
          item.value === e.detail.value ? { ...item, selected: true } : item
        );
        autocomplete.items = [...args.items];
        autocomplete.value = '';
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (!autocomplete) return;

      // Initialize initialNavigation if undefined
      if (args.initialNavigation === undefined) {
        args.initialNavigation = true;
      }

      // Prevent default for navigation keys
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
        e.preventDefault();
      }

      const visibleItems = args.items.filter(
        (item) => item.visibleInMenu && !item.disabled
      );
      // Reset initial navigation when input value changes
      if ((e.target as HTMLInputElement).value !== autocomplete.value) {
        args.initialNavigation = true;
      }

      switch (e.key) {
        case 'Escape':
          args.items = args.items.map((item) => ({ ...item, focused: false }));
          args.initialNavigation = true;
          autocomplete.items = [...args.items];
          return;

        case 'ArrowDown':
          if (args.initialNavigation) {
            // On first arrow press, skip selection
            args.initialNavigation = false;
            return;
          } else {
            // Normal navigation
            const currentFocusedIndex = visibleItems.findIndex(
              (item) => item.focused
            );
            const nextIndex =
              currentFocusedIndex < 0
                ? 0
                : Math.min(currentFocusedIndex + 1, visibleItems.length - 1);

            args.items = args.items.map((item) => ({
              ...item,
              focused: visibleItems[nextIndex]?.value === item.value,
            }));
          }
          break;

        case 'ArrowUp':
          if (args.initialNavigation) {
            // On first arrow press, skip selection
            args.initialNavigation = false;
            return;
          } else {
            // Normal navigation
            const currentFocusedIndex = visibleItems.findIndex(
              (item) => item.focused
            );
            const prevIndex =
              currentFocusedIndex < 0
                ? visibleItems.length - 1
                : Math.max(currentFocusedIndex - 1, 0);

            args.items = args.items.map((item) => ({
              ...item,
              focused: visibleItems[prevIndex]?.value === item.value,
            }));
          }
          break;

        case 'Enter': {
          const focusedItem = visibleItems.find((item) => item.focused);
          if (focusedItem) {
            args.items = args.items.map((item) => ({
              ...item,
              selected:
                item.value === focusedItem.value
                  ? !item.selected
                  : item.selected,
              focused: false,
            }));
            autocomplete.value = '';
            args.initialNavigation = true; // Reset for next interaction
          }
          break;
        }

        default:
          return;
      }

      autocomplete.items = [...args.items];
    };

    return html`
      <style>
        div#story--components-forms-autocomplete--multi-select-inner {
          height: 400px;
        }
      </style>
      <script>
              // Initialize args.items if empty
              if (!args.items || args.items.length === 0) {
                args.items = [...items];
              }

              const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

                if (autocomplete) {
                  args.items = args.items.map((item) =>
                    item.value === e.detail.value ? { ...item, selected: false } : item
                  );
                  autocomplete.items = [...args.items];
                }
              };

              const handleInputChange = (e: CustomEvent<Event>) => {
                if (!e.detail?.target) return;

                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

                if (autocomplete) {
                  const input = e.detail.target as HTMLInputElement;
                  const searchText = input.value.toLowerCase();

                  const updatedItems = args.items.map((item) => ({
                    ...item,
                    visibleInMenu: item.label.toLowerCase().includes(searchText),
                    focused: false,
                  }));

                  args.items = updatedItems;
                  autocomplete.items = [...args.items];
                  autocomplete.value = input.value;
                  if (autocomplete.value) {
                    args.initialNavigation = false;
                  }
                }
              };

              const handleBlur = () => {
                args.initialNavigation = true;
                args.items = args.items.map((item) => ({
                  ...item,
                  focused: false,
                  visibleInMenu: true,
                }));
              };

              const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
                const autocomplete = (e.target as HTMLInputElement).closest(
                  'modus-wc-autocomplete'
                );

          if (autocomplete) {
            // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
            autocomplete.value = '';
            autocomplete.items = items.map((item) => ({
              ...item,
              visibleInMenu: true,
            }));

            // Mark the user selected item as selected.
            const fruit = items.find((fruit) => fruit.value === e.detail.value);
            if (fruit) {
              fruit.selected = true;
            }
          }
        };
      </script>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        debounce-ms=${ifDefined(args['debounce-ms'])}
        ?disabled=${args.disabled}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        .items=${args.items}
        label=${ifDefined(args.label)}
        ?leave-menu-open=${args['leave-menu-open']}
        min-chars=${args['min-chars']}
        ?multi-select=${true}
        name=${ifDefined(args.name)}
        .noResults=${args['no-results']}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        value=${args.value}
        @chipRemove=${handleChipRemove}
        @inputChange=${handleInputChange}
        @itemSelect=${handleItemSelect}
        @inputBlur=${handleBlur}
        @keydown=${handleKeyDown}
      ></modus-wc-autocomplete>
    `;
  },
};

export const WithSpinner: Story = {
  render: (args) => {
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);

        autocomplete.showSpinner = true;
        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map((item) => ({
          ...item,
          selected: searchText ? item.selected : false,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
        autocomplete.value = input.value;
      }
    };

    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }

        // Clear the previous selection.
        items.forEach((item) => (item.selected = false));

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find((item) => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };

    // prettier-ignore
    return html`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--default"] {
    height: 400px;
  }
</style>
<script>
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);

        autocomplete.showSpinner = true;
        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map((item) => ({
          ...item,
          selected: searchText ? item.selected : false,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
        autocomplete.value = input.value;
      }
    };

    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }

        // Clear the previous selection.
        items.forEach((item) => (item.selected = false));

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find((item) => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };
</script>
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  ?bordered=${args.bordered}
  custom-class=${ifDefined(args['custom-class'])}
  debounce-ms=${ifDefined(args['debounce-ms'])}
  ?disabled=${args.disabled}
  input-id=${ifDefined(args['input-id'])}
  input-tab-index=${ifDefined(args['input-tab-index'])}
  .items=${args.items}
  label=${ifDefined(args.label)}
  ?leave-menu-open=${args['leave-menu-open']}
  min-chars=${args['min-chars']}
  ?multi-select=${false}
  name=${ifDefined(args.name)}
  placeholder=${ifDefined(args.placeholder)}
  ?read-only=${args['read-only']}
  ?required=${args.required}
  ?show-spinner=${args['show-spinner']}
  size=${ifDefined(args.size)}
  value=${args.value}
  @inputChange=${handleInputChange}
  @itemSelect=${handleItemSelect}
></modus-wc-autocomplete>
    `;
  },
};

export const Migration: Story = {
  parameters: {
    docs: {
      description: {
        story: `
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - To handle updating items in 2.0, simply create a new array of items and bind it to the \`items\` prop. The 1.0 prop
  \`filter-options\` is no longer necessary.
  - Size values have changed from verbose names (\`small\`, \`medium\`, \`large\`) to abbreviations (\`sm\`, \`md\`, \`lg\`).

#### Prop Mapping

| 1.0 Prop                      | 2.0 Prop            | Notes                                                       |
|-------------------------------|---------------------|-------------------------------------------------------------|
| aria-label                    | aria-label          |                                                             |
| clearable                     |                     | Upcoming feature                                            |
| disabled                      | disabled            |                                                             |
| disable-close-on-select       | leave-menu-open     |                                                             |
| dropdown-max-height           |                     | Not carried over, use CSS instead                           |
| dropdown-z-index              |                     | Not carried over, use CSS instead                           |
| error-text                    | feedback.message    | Use feedback level                                          |
| filter-options                |                     | Rebind options                                              |
| include-search-icon           |                     | Coming soon                                                 |
| label                         | label               |                                                             |
| loading                       |                     | Upcoming feature                                            |
| multiple                      | multi-select        |                                                             |
| no-results-found-text         | no-results.label    |                                                             |
| no-results-found-subtext      | no-results.subLabel |                                                             |
| options                       | items               |                                                             |
| placeholder                   | placeholder         |                                                             |
| read-only                     | read-only           |                                                             |
| required                      | required            |                                                             |
| show-no-results-found-message |                     | Not carried over, use \`no-results\` prop                   |
| show-options-on-focus         |                     | Not carried over                                            |
| size                          | size                | \`small\` → \`sm\`, \`medium\` → \`md\`, \`large\` → \`lg\` |
| value                         | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| optionSelected ||
| selectionsChanged ||
| valueChange | inputChange |                  |

#### Interfaces

##### 1.0

\`\`\`typescript
interface ModusAutocompleteOption {
  id: string;
  value: string;
}
\`\`\`

##### 2.0

\`\`\`typescript
interface IAutocompleteItem {
  label: string;
  selected?: boolean;
  value: string;
  visibleInMenu: boolean;
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
