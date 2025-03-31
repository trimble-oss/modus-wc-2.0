import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { IAutocompleteItem } from './modus-wc-autocomplete';
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
  'min-chars': number;
  'multi-select'?: boolean;
  name?: string;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
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
    'min-chars': 0,
    'multi-select': false,
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
    // External keydown handler to update focus state on the items array
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
        e.preventDefault();
      }
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );
      if (!autocomplete) return;

      let currentIndex = args.items.findIndex((item) => item.focused);
      if (currentIndex === -1) {
        // If no item is focused, try to focus the last selected item
        currentIndex = args.items.findIndex((item) => item.selected);
      }
      const input = e.target as HTMLInputElement;
      if (!input.value) {
        args.items = args.items.map((item) => ({
          ...item,
          selected: false,
        }));
      }

      // Reset focus for all items
      args.items = args.items.map((item) => ({
        ...item,
        focused: false,
      }));
      if (
        currentIndex === -1 &&
        (e.key === 'ArrowDown' || e.key === 'ArrowUp')
      ) {
        if (e.key === 'ArrowDown') {
          // Find first non-disabled item
          for (let i = 0; i < args.items.length; i++) {
            if (!args.items[i].disabled) {
              currentIndex = i;
              break;
            }
          }
        } else {
          // ArrowUp: find last non-disabled item
          for (let i = args.items.length - 1; i >= 0; i--) {
            if (!args.items[i].disabled) {
              currentIndex = i;
              break;
            }
          }
        }
      } else if (
        e.key === 'ArrowDown' &&
        currentIndex < args.items.length - 1
      ) {
        let newIndex = currentIndex + 1;
        // Skip disabled items
        while (newIndex < args.items.length && args.items[newIndex].disabled) {
          newIndex++;
        }
        if (newIndex < args.items.length) {
          currentIndex = newIndex;
        }
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        let newIndex = currentIndex - 1;
        // Skip disabled items
        while (newIndex >= 0 && args.items[newIndex].disabled) {
          newIndex--;
        }
        if (newIndex >= 0) {
          currentIndex = newIndex;
        }
      } else if (e.key === 'Enter') {
        if (currentIndex !== -1) {
          args.items = args.items.map((item, index) => ({
            ...item,
            selected: index === currentIndex, // Mark selected item
          }));
          autocomplete.items = [...args.items];
          autocomplete.value = args.items[currentIndex].label;
        }
        return;
      }

      // Skip focusing on the first press
      if (args.initialNavigation) {
        args.initialNavigation = false;
        return;
      }

      args.items[currentIndex].focused = true;
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

        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map((item) => ({
          ...item,
          selected: searchText ? item.selected : false,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
          focused: false,
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        args.items = updatedItems.filter((item) => item.visibleInMenu);
        autocomplete.items = [...args.items];
        autocomplete.value = input.value;
      }
    };
    const handleBlur = () => {
      args.initialNavigation = true;
      args.items.forEach((item) => {
        item.focused = false;
      });
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
        args.items.forEach((item) => {
          item.selected = false;
          item.focused = false;
        });

        // Mark the selected menu item as selected.
        const foundItem = args.items.find(
          (item) => item.value === e.detail.value
        );
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...args.items];
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
        min-chars=${args['min-chars']}
        ?multi-select=${false}
        name=${ifDefined(args.name)}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
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
    const allItems: IAutocompleteItem[] = [...items];

    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const foundItem = args.items.find(
          (item) => item.value === e.detail.value
        );
        if (foundItem) {
          foundItem.selected = false;
          autocomplete.items = [...args.items];
        }
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

        const updatedItems = allItems.map((item) => ({
          ...item,
          visibleInMenu: !!(
            (searchText
              ? item.label
                ? item.label.toLowerCase().includes(searchText)
                : false
              : true) || item.selected
          ),
          focused: false,
        }));

        args.items = updatedItems.filter((item) => item.visibleInMenu);
        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...args.items];
        autocomplete.value = input.value;
      }
    };
    const handleBlur = () => {
      args.initialNavigation = true;
      args.items.forEach((item) => {
        item.focused = false;
      });
    };
    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
        autocomplete.value = '';
        autocomplete.items = allItems.map((item) => ({
          ...item,
          visibleInMenu: true,
          focused: false,
        }));

        const fruit = allItems.find((fruit) => fruit.value === e.detail.value);
        if (fruit) {
          fruit.selected = true;
        }
      }
    };

    // Attach the same external focus handler for multi-select.
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
        e.preventDefault();
      }

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (!autocomplete) return;
      const input = e.target as HTMLInputElement;

      if (args.initialNavigation === undefined) {
        args.initialNavigation = true;
      }

      if (e.key === 'Backspace' && !input.value) {
        // Find the last selected chip by its index
        const lastSelectedIndex = allItems.reduce(
          (acc, item, index) => (item.selected ? index : acc),
          -1
        );
        if (lastSelectedIndex !== -1) {
          allItems[lastSelectedIndex].selected = false;
          autocomplete.items = [...allItems];
        }
        return;
      }

      let currentIndex = args.items.findIndex((item) => item.focused);
      if (currentIndex === -1) {
        // If no item is focused, try to focus the last selected item
        currentIndex = args.items.findIndex((item) => item.selected);
      }

      // Reset focus for all items
      args.items = args.items.map((item) => ({
        ...item,
        focused: false,
      }));

      if (
        currentIndex === -1 &&
        (e.key === 'ArrowDown' || e.key === 'ArrowUp')
      ) {
        if (e.key === 'ArrowDown') {
          // Find first non-disabled item
          for (let i = 0; i < args.items.length; i++) {
            if (!args.items[i].disabled) {
              currentIndex = i;
              break;
            }
          }
        } else {
          // ArrowUp: find last non-disabled item
          for (let i = args.items.length - 1; i >= 0; i--) {
            if (!args.items[i].disabled) {
              currentIndex = i;
              break;
            }
          }
        }
      } else if (
        e.key === 'ArrowDown' &&
        currentIndex < args.items.length - 1
      ) {
        let newIndex = currentIndex + 1;
        // Skip disabled items
        while (newIndex < args.items.length && args.items[newIndex].disabled) {
          newIndex++;
        }
        if (newIndex < args.items.length) {
          currentIndex = newIndex;
        }
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        let newIndex = currentIndex - 1;
        // Skip disabled items
        while (newIndex >= 0 && args.items[newIndex].disabled) {
          newIndex--;
        }
        if (newIndex >= 0) {
          currentIndex = newIndex;
        }
      } else if (e.key === 'Enter') {
        if (currentIndex !== -1) {
          args.items[currentIndex].selected =
            !args.items[currentIndex].selected;

          const selectedItems = args.items.filter((item) => item.selected);
          // compare the selected items with allItems and set the selected items to allItems
          allItems.forEach((item) => {
            item.selected = selectedItems.some(
              (selectedItem) => selectedItem.value === item.value
            );
          });
          autocomplete.items = [...allItems]; // Update component
          autocomplete.value = '';
        }
        return;
      }
      // Skip focusing on the first press
      if (args.initialNavigation) {
        args.initialNavigation = false;
        return;
      }

      args.items[currentIndex].focused = true; // Set new focus
      autocomplete.items = [...args.items];
    };

    // prettier-ignore
    return html`
      <style>
        /* Only for Storybook */
        div#story--components-forms-autocomplete--multi-select-inner {
          height: 400px;
        }
      </style>
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
        min-chars=${args['min-chars']}
        ?multi-select=${true}
        name=${ifDefined(args.name)}
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
