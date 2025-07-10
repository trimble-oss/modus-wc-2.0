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
    disabled: false,
  },
  {
    label: 'Banana',
    value: 'banana',
    visibleInMenu: true,
    focused: false,
    disabled: false,
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
    disabled: false,
  },
  { label: 'Peach', value: 'peach', visibleInMenu: true, focused: false },
  { label: 'Pear', value: 'pear', visibleInMenu: true, focused: false },
  {
    label: 'Strawberry',
    value: 'strawberry',
    visibleInMenu: true,
    focused: false,
    disabled: false,
  },
  {
    label: 'Watermelon',
    value: 'watermelon',
    visibleInMenu: true,
    focused: false,
    disabled: false,
  },
  {
    label: 'Pineapple',
    value: 'pineapple',
    visibleInMenu: true,
    focused: false,
  },
  { label: 'Kiwi', value: 'kiwi', visibleInMenu: true, focused: false },
  { label: 'Mango', value: 'mango', visibleInMenu: true, focused: false },
  { label: 'Papaya', value: 'papaya', visibleInMenu: true, focused: false },
  { label: 'Plum', value: 'plum', visibleInMenu: true, focused: false },
  {
    label: 'Raspberry',
    value: 'raspberry',
    visibleInMenu: true,
    focused: false,
  },
  {
    label: 'Tangerine',
    value: 'tangerine',
    visibleInMenu: true,
    focused: false,
  },
];

interface AutocompleteArgs {
  visibleItems: IAutocompleteItem[];
  bordered?: boolean;
  'custom-class'?: string;
  'debounce-ms'?: number;
  disabled?: boolean;
  'include-clear'?: boolean;
  'include-search'?: boolean;
  'input-id'?: string;
  'input-tab-index'?: number;
  items: IAutocompleteItem[];
  initialNavigation?: boolean;
  label?: string;
  'leave-menu-open'?: boolean;
  'max-chips'?: number;
  'min-chars': number;
  'min-input-width'?: number;
  'multi-select'?: boolean;
  name?: string;
  'no-results': IAutocompleteNoResults;
  placeholder?: string;
  'read-only'?: boolean;
  required?: boolean;
  'show-menu-on-focus'?: boolean;
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
    'include-clear': false,
    'include-search': false,
    items: items,
    label: 'Label',
    'leave-menu-open': false,
    'max-chips': 4,
    'min-chars': 0,
    'min-input-width': 20,
    'multi-select': false,
    'show-menu-on-focus': false,
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
    'max-chips': {
      control: { type: 'number', min: 1, max: 10 },
      description:
        'Maximum number of chips to display before showing "+N more" button',
    },
    'min-input-width': {
      control: { type: 'number', min: 12, max: 300 },
      description:
        'Minimum width for the text input in pixels. When chips would make input smaller, container height increases instead. Default: 20px.',
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
        'chipsExpansionChange',
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
    return html`
      <style>
        div[id^='story--components-forms-autocomplete--default'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        debounce-ms=${ifDefined(args['debounce-ms'])}
        ?disabled=${args.disabled}
        ?include-clear=${args['include-clear']}
        ?include-search=${args['include-search']}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        .items=${args.items}
        label=${ifDefined(args.label)}
        ?leave-menu-open=${args['leave-menu-open']}
        min-chars=${args['min-chars']}
        min-input-width=${ifDefined(args['min-input-width'])}
        ?multi-select=${false}
        name=${ifDefined(args.name)}
        .noResults=${args['no-results']}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        ?show-menu-on-focus=${args['show-menu-on-focus']}
        ?show-spinner=${args['show-spinner']}
        size=${ifDefined(args.size)}
        value=${args.value}
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

    return html`
      <script>
        // Initialize args.items if empty
        if (!args.items || args.items.length === 0) {
          args.items = [...items];
        }
      </script>
      <style>
        .modus-wc-autocomplete-multi-select {
          width: 480px !important;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        debounce-ms=${ifDefined(args['debounce-ms'])}
        ?disabled=${args.disabled}
        ?include-clear=${args['include-clear']}
        ?include-search=${args['include-search']}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        .items=${args.items}
        label=${ifDefined(args.label)}
        ?leave-menu-open=${args['leave-menu-open']}
        max-chips=${args['max-chips'] ?? 4}
        min-chars=${args['min-chars']}
        min-input-width=${ifDefined(args['min-input-width'])}
        ?multi-select=${true}
        name=${ifDefined(args.name)}
        .noResults=${args['no-results']}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        ?show-menu-on-focus=${args['show-menu-on-focus']}
        size=${ifDefined(args.size)}
        value=${args.value}
      ></modus-wc-autocomplete>
    `;
  },
};

export const WithSpinner: Story = {
  render: (args) => {
    let debounceTimer: number;

    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      ) as Element & {
        items: IAutocompleteItem[];
        showSpinner: boolean;
        value: string;
      };

      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();

        // Clear previous timeout to avoid multiple API calls
        if (debounceTimer) {
          window.clearTimeout(debounceTimer);
        }

        // Show spinner immediately and update input value
        autocomplete.showSpinner = true;

        // Simulate an API call with a 2-second delay
        debounceTimer = window.setTimeout(() => {
          // Filter the master list of items to get the new results
          const filteredItems = items.filter((item) =>
            item.label.toLowerCase().includes(searchText)
          );

          // Update the component with the new filtered list and hide the spinner
          autocomplete.items = filteredItems;
          autocomplete.showSpinner = false;
        }, 2000);
      }
    };

    return html`
      <script>
              let debounceTimer: number;

        const handleInputChange = (e: CustomEvent<Event>) => {
          if (!e.detail?.target) return;

          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          ) as Element & {
            items: IAutocompleteItem[];
            showSpinner: boolean;
            value: string;
          };

          if (autocomplete) {
            const input = e.detail.target as HTMLInputElement;
            const searchText = input.value.toLowerCase();

            // Clear previous timeout to avoid multiple API calls
            if (debounceTimer) {
              window.clearTimeout(debounceTimer);
            }

            // Show spinner immediately and update input value
            autocomplete.showSpinner = true;

            // Simulate an API call with a 2-second delay
            debounceTimer = window.setTimeout(() => {
              // Filter the master list of items to get the new results
              const filteredItems = items.filter((item) =>
                item.label.toLowerCase().includes(searchText)
              );

              // Update the component with the new filtered list and hide the spinner
              autocomplete.items = filteredItems;
              autocomplete.showSpinner = false;
            }, 2000);
          }
        };
      </script>
      <style>
        div[id^='story--components-forms-autocomplete--with-spinner'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete with spinner"
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
        ?show-menu-on-focus=${args['show-menu-on-focus']}
        ?show-spinner=${args['show-spinner']}
        size=${ifDefined(args.size)}
        value=${args.value}
        @inputChange=${handleInputChange}
      ></modus-wc-autocomplete>
    `;
  },
};

export const CustomMenuItems: Story = {
  render: (args) => {
    const originalNoResults = args['no-results'];
    if (args['leave-menu-open'] == true) {
      args['no-results'] = {
        ariaLabel: '',
        label: '',
        subLabel: '',
      };
    }

    const handleInputChange = (e) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      ) as Element & { noResults: IAutocompleteNoResults };

      if (autocomplete) {
        const searchText = (
          e.detail.target as HTMLInputElement
        ).value.toLowerCase();
        const allLiItems = autocomplete?.querySelectorAll('li');

        if (searchText === '') {
          allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        }

        let hiddenCount = 0;
        Array.from(allLiItems ?? []).forEach((menuItem) => {
          const label =
            menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText)) {
            menuItem.classList.add('hidden');
            hiddenCount++;
          } else {
            menuItem.classList.remove('hidden');
          }
        });

        // Show no results if all items are hidden
        autocomplete.noResults =
          hiddenCount === allLiItems?.length
            ? originalNoResults
            : { ariaLabel: '', label: '', subLabel: '' };
      }
    };

    const handleItemSelect = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      ) as HTMLElement & { value: string };

      if (autocomplete) {
        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));

        const clickedItem = (e.target as HTMLElement).closest('li');
        if (clickedItem) {
          clickedItem.classList.add('selected');
          autocomplete.value = clickedItem.querySelector('.title')
            ?.textContent as string;
        }
      }
    };

    return html`
      <script>
             const originalNoResults = args['no-results'];
        if (args['leave-menu-open'] == true) {
          args['no-results'] = {
            ariaLabel: '',
            label: '',
            subLabel: '',
          };
        }

        const handleInputChange = (e) => {
          if (!e.detail?.target) return;

          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          ) as Element & { noResults: IAutocompleteNoResults };

          if (autocomplete) {
            const searchText = (
              e.detail.target as HTMLInputElement
            ).value.toLowerCase();
            const allLiItems = autocomplete?.querySelectorAll('li');

            if (searchText === '') {
              allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
            }

            let hiddenCount = 0;
            Array.from(allLiItems ?? []).forEach((menuItem) => {
              const label =
                menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
              if (!label.includes(searchText)) {
                menuItem.classList.add('hidden');
                hiddenCount++;
              } else {
                menuItem.classList.remove('hidden');
              }
            });

            // Show no results if all items are hidden
            autocomplete.noResults =
              hiddenCount === allLiItems?.length
                ? originalNoResults
                : { ariaLabel: '', label: '', subLabel: '' };
          }
        };

        const handleItemSelect = (e) => {
          const autocomplete = (e.target as HTMLInputElement).closest(
            'modus-wc-autocomplete'
          );

          if (autocomplete) {
            const allLiItems = autocomplete?.querySelectorAll('li');
            allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));

            const clickedItem = (e.target as HTMLElement).closest('li');
            if (clickedItem) {
              clickedItem.classList.add('selected');
              autocomplete.value = clickedItem.querySelector('.title')
                ?.textContent as string;
            }
          }
        };
      </script>
      <style>
        div[id^='story--components-forms-autocomplete--custom-menu-items'] {
          height: 400px;
        }
        .list-item {
          display: flex;
          gap: 1rem;
          border-bottom: 1px solid #ccc;
          cursor: pointer;
        }
        li.list-item.hidden {
          display: none;
        }
        li.list-item img {
          height: 28px;
          width: 28px;
        }
        .item-info .title {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .item-info .description {
          color: #666;
          font-size: 0.875rem;
        }
        li.list-item.selected {
          background-color: #dcedf9;
        }
        li.list-item .modus-wc-menu-item-selected-icon {
          display: none;
        }
        li.list-item.selected .modus-wc-menu-item-selected-icon {
          display: block;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Custom items autocomplete"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        debounce-ms=${ifDefined(args['debounce-ms'])}
        ?disabled=${args.disabled}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        label=${ifDefined(args.label)}
        ?leave-menu-open=${args['leave-menu-open']}
        min-chars=${args['min-chars']}
        ?multi-select=${false}
        name=${ifDefined(args.name)}
        .noResults=${args['no-results']}
        placeholder=${ifDefined(args.placeholder)}
        ?read-only=${args['read-only']}
        ?required=${args.required}
        size=${ifDefined(args.size)}
        value=${args.value}
        @inputChange=${handleInputChange}
      >
        <div slot="menu-items" id="custom-menu-items">
          <li class="list-item" @click=${handleItemSelect}>
            <div class="item-info">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5166/5166970.png"
                alt="Project 1"
              />
              <div>
                <div class="title">Project 1</div>
                <div class="description">Description for Project 1</div>
              </div>
              <div class="modus-wc-menu-item-selected-icon">
                <modus-wc-icon
                  decorative=${true}
                  name="check"
                  size=${ifDefined(args.size)}
                />
              </div>
            </div>
          </li>
          <li class="list-item" @click=${handleItemSelect}>
            <div class="item-info">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
                alt="Project 2"
              />
              <div>
                <div class="title">Project 2</div>
                <div class="description">Description for Project 2</div>
              </div>
              <div class="modus-wc-menu-item-selected-icon">
                <modus-wc-icon
                  decorative=${true}
                  name="check"
                  size=${ifDefined(args.size)}
                />
              </div>
            </div>
          </li>
          <li class="list-item" @click=${handleItemSelect}>
            <div class="item-info">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1659/1659067.png"
                alt="Project 3"
              />
              <div>
                <div class="title">Project 3</div>
                <div class="description">Description for Project 3</div>
              </div>
              <div class="modus-wc-menu-item-selected-icon">
                <modus-wc-icon
                  decorative=${true}
                  name="check"
                  size=${ifDefined(args.size)}
                />
              </div>
            </div>
          </li>
        </div>
        ></modus-wc-autocomplete
      >
    `;
  },
};

export const WithProgrammaticControl: Story = {
  args: {
    ...meta.args,
    items: items, // Explicitly set items for this story
  },
  render: (args) => {
    // Type for autocomplete element with methods
    interface AutocompleteElement extends HTMLElement {
      selectItem(item: IAutocompleteItem | null): Promise<void>;
      openMenu(): Promise<void>;
      closeMenu(): Promise<void>;
      toggleMenu(): Promise<void>;
      focusInput(): Promise<void>;
      clearInput(): Promise<void>;
    }

    // Handler functions that will be attached to buttons
    const handleSelectApple = async () => {
      const autocomplete = document.getElementById(
        'programmatic-autocomplete'
      ) as AutocompleteElement;
      if (autocomplete) {
        const appleItem = items.find((item) => item.value === 'apple') || null;
        await autocomplete.selectItem(appleItem);
      }
    };

    const handleSelectNull = async () => {
      const autocomplete = document.getElementById(
        'programmatic-autocomplete'
      ) as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.selectItem(null);
      }
    };

    const handleOpenMenu = async () => {
      const autocomplete = document.getElementById(
        'programmatic-autocomplete'
      ) as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.openMenu();
      }
    };

    const handleCloseMenu = async () => {
      const autocomplete = document.getElementById(
        'programmatic-autocomplete'
      ) as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.closeMenu();
      }
    };

    const handleToggleMenu = async () => {
      const autocomplete = document.getElementById(
        'programmatic-autocomplete'
      ) as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.toggleMenu();
      }
    };

    const handleFocusInput = async () => {
      const autocomplete = document.getElementById(
        'programmatic-autocomplete'
      ) as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.focusInput();
      }
    };

    const handleClearInput = async () => {
      const autocomplete = document.getElementById(
        'programmatic-autocomplete'
      ) as AutocompleteElement;
      if (autocomplete) {
        await autocomplete.clearInput();
      }
    };

    // Attach handlers to window for inline onclick
    interface WindowWithHandlers extends Window {
      handleSelectApple?: () => Promise<void>;
      handleSelectNull?: () => Promise<void>;
      handleOpenMenu?: () => Promise<void>;
      handleCloseMenu?: () => Promise<void>;
      handleToggleMenu?: () => Promise<void>;
      handleFocusInput?: () => Promise<void>;
      handleClearInput?: () => Promise<void>;
    }

    const windowWithHandlers = window as WindowWithHandlers;
    windowWithHandlers.handleSelectApple = handleSelectApple;
    windowWithHandlers.handleSelectNull = handleSelectNull;
    windowWithHandlers.handleOpenMenu = handleOpenMenu;
    windowWithHandlers.handleCloseMenu = handleCloseMenu;
    windowWithHandlers.handleToggleMenu = handleToggleMenu;
    windowWithHandlers.handleFocusInput = handleFocusInput;
    windowWithHandlers.handleClearInput = handleClearInput;

    return html`
      <style>
        div[id^='story--components-forms-autocomplete--with-programmatic-control'] {
          height: 500px;
        }
        .controls-section {
          margin-bottom: 2rem;
          padding: 1rem;
          background-color: #f5f5f5;
          border-radius: 8px;
        }
        .controls-section h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        .control-group {
          margin-bottom: 1rem;
        }
        .control-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .button-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
      </style>

      <div class="controls-section">
        <h3>Programmatic Control Methods</h3>

        <div class="control-group">
          <label>Selection Methods:</label>
          <div class="button-row">
            <modus-wc-button
              onclick="window.handleSelectApple()"
              variant="primary"
              size="sm"
            >
              Select Apple
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleSelectNull()"
              variant="secondary"
              size="sm"
            >
              Clear Selection
            </modus-wc-button>
          </div>
        </div>

        <div class="control-group">
          <label>Menu Control Methods:</label>
          <div class="button-row">
            <modus-wc-button
              onclick="window.handleOpenMenu()"
              variant="primary"
              size="sm"
            >
              Open Menu
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleCloseMenu()"
              variant="primary"
              size="sm"
            >
              Close Menu
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleToggleMenu()"
              variant="secondary"
              size="sm"
            >
              Toggle Menu
            </modus-wc-button>
          </div>
        </div>

        <div class="control-group">
          <label>Input Control Methods:</label>
          <div class="button-row">
            <modus-wc-button
              onclick="window.handleFocusInput()"
              variant="primary"
              size="sm"
            >
              Focus Input
            </modus-wc-button>
            <modus-wc-button
              onclick="window.handleClearInput()"
              variant="danger"
              size="sm"
            >
              Clear All
            </modus-wc-button>
          </div>
        </div>
      </div>

      <modus-wc-autocomplete
        id="programmatic-autocomplete"
        aria-label="Programmatic control demo"
        ?bordered=${args.bordered}
        custom-class=${ifDefined(args['custom-class'])}
        debounce-ms=${ifDefined(args['debounce-ms'])}
        ?disabled=${args.disabled}
        ?include-clear=${args['include-clear']}
        ?include-search=${args['include-search']}
        input-id=${ifDefined(args['input-id'])}
        input-tab-index=${ifDefined(args['input-tab-index'])}
        .items=${args.items}
        label="Try the control buttons above"
        ?leave-menu-open=${args['leave-menu-open']}
        max-chips=${args['max-chips'] ?? 4}
        min-chars=${args['min-chars']}
        min-input-width=${ifDefined(args['min-input-width'])}
        ?multi-select=${args['multi-select']}
        name=${ifDefined(args.name)}
        .noResults=${args['no-results']}
        placeholder="Use buttons above to control"
        ?read-only=${args['read-only']}
        ?required=${args.required}
        ?show-menu-on-focus=${args['show-menu-on-focus']}
        ?show-spinner=${args['show-spinner']}
        size=${ifDefined(args.size)}
        value=${args.value}
      ></modus-wc-autocomplete>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: `
## Public Methods

The autocomplete component exposes several methods that can be called programmatically:

### selectItem(item: IAutocompleteItem | null): Promise<void>
Programmatically select an item. Pass \`null\` to clear selection.

\`\`\`javascript
const autocomplete = document.querySelector('modus-wc-autocomplete');
const item = { label: 'Apple', value: 'apple', visibleInMenu: true };
await autocomplete.selectItem(item);
\`\`\`

### openMenu(): Promise<void>
Programmatically open the dropdown menu.

\`\`\`javascript
await autocomplete.openMenu();
\`\`\`

### closeMenu(): Promise<void>
Programmatically close the dropdown menu.

\`\`\`javascript
await autocomplete.closeMenu();
\`\`\`

### toggleMenu(): Promise<void>
Toggle the dropdown menu open/closed.

\`\`\`javascript
await autocomplete.toggleMenu();
\`\`\`

### focusInput(): Promise<void>
Set focus to the input element.

\`\`\`javascript
await autocomplete.focusInput();
\`\`\`

### clearInput(): Promise<void>
Clear the input value and all selections.

\`\`\`javascript
await autocomplete.clearInput();
\`\`\`

        `,
      },
    },
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
