import{w as S}from"./decorator-Dt3Huotz.js";import{k as I}from"./lit-element-DVRzCIa_.js";import{t as r}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var h=Object.freeze,F=Object.defineProperty,D=(e,c)=>h(F(e,"raw",{value:h(e.slice())})),w,x;const m=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],B={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:m,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[S],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},z={render:e=>{const c=l=>{const a=l.target.closest("modus-wc-autocomplete");if(!a)return;e.initialNavigation===void 0&&(e.initialNavigation=!0),["ArrowDown","ArrowUp","Enter","Escape"].includes(l.key)&&l.preventDefault();const i=e.items.filter(t=>t.visibleInMenu&&!t.disabled);switch(l.key){case"Escape":e.items=e.items.map(t=>({...t,focused:!1})),e.initialNavigation=!0,a.items=[...e.items];return;case"ArrowDown":if(e.initialNavigation){e.initialNavigation=!1;return}else{const t=i.findIndex(s=>s.focused),n=t<0?0:Math.min(t+1,i.length-1);e.items=e.items.map(s=>{var o;return{...s,focused:((o=i[n])==null?void 0:o.value)===s.value}})}break;case"ArrowUp":if(e.initialNavigation){e.initialNavigation=!1;return}else{const t=i.findIndex(s=>s.focused),n=t<0?i.length-1:Math.max(t-1,0);e.items=e.items.map(s=>{var o;return{...s,focused:((o=i[n])==null?void 0:o.value)===s.value}})}break;case"Enter":{const t=i.find(n=>n.focused);t&&(e.items=e.items.map(n=>({...n,selected:n.value===t.value,focused:!1})),a.value=t.label,e.initialNavigation=!0);break}default:return}a.items=[...e.items]},v=l=>{var i;if(!((i=l.detail)!=null&&i.target))return;const a=l.target.closest("modus-wc-autocomplete");if(a){const t=l.detail.target,n=t.value.toLowerCase();e.items=e.items.map(s=>({...s,visibleInMenu:s.label.toLowerCase().includes(n),focused:!1,selected:n?s.selected:!1})),a.items=[...e.items],a.value=t.value}},g=()=>{e.initialNavigation=!0,e.items=e.items.map(l=>({...l,focused:!1,visibleInMenu:!0}))},b=l=>{const a=l.target.closest("modus-wc-autocomplete");if(a){const i=l.detail.label;i&&(a.value=i),m.forEach(n=>n.selected=!1);const t=m.find(n=>n.value===l.detail.value);t&&(t.selected=!0,a.items=[...m])}};return I(w||(w=D([`
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
      <\/script>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=`,`
        custom-class=`,`
        debounce-ms=`,`
        ?disabled=`,`
        input-id=`,`
        input-tab-index=`,`
        .items=`,`
        label=`,`
        ?leave-menu-open=`,`
        min-chars=`,`
        ?multi-select=`,`
        name=`,`
        placeholder=`,`
        ?read-only=`,`
        ?required=`,`
        size=`,`
        value=`,`
        @inputChange=`,`
        @itemSelect=`,`
        @inputBlur=`,`
        @keydown=`,`
      ></modus-wc-autocomplete>
    `])),e.bordered,r(e["custom-class"]),r(e["debounce-ms"]),e.disabled,r(e["input-id"]),r(e["input-tab-index"]),e.items,r(e.label),e["leave-menu-open"],e["min-chars"],!1,r(e.name),r(e.placeholder),e["read-only"],e.required,r(e.size),e.value,v,b,g,c)}},d={...z},p={render:e=>{(!e.items||e.items.length===0)&&(e.items=[...m]);const c=a=>{const i=a.target.closest("modus-wc-autocomplete");i&&(e.items=e.items.map(t=>t.value===a.detail.value?{...t,selected:!1}:t),i.items=[...e.items])},v=a=>{var t;if(!((t=a.detail)!=null&&t.target))return;const i=a.target.closest("modus-wc-autocomplete");if(i){const n=a.detail.target,s=n.value.toLowerCase(),o=e.items.map(u=>({...u,visibleInMenu:u.label.toLowerCase().includes(s),focused:!1}));e.items=o,i.items=[...e.items],i.value=n.value,i.value&&(e.initialNavigation=!1)}},g=()=>{e.initialNavigation=!0,e.items=e.items.map(a=>({...a,focused:!1,visibleInMenu:!0}))},b=a=>{const i=a.target.closest("modus-wc-autocomplete");i&&(e.items=e.items.map(t=>t.value===a.detail.value?{...t,selected:!0}:t),i.items=[...e.items],i.value="")},l=a=>{const i=a.target.closest("modus-wc-autocomplete");if(!i)return;e.initialNavigation===void 0&&(e.initialNavigation=!0),["ArrowDown","ArrowUp","Enter"].includes(a.key)&&a.preventDefault();const t=e.items.filter(n=>n.visibleInMenu&&!n.disabled);switch(a.target.value!==i.value&&(e.initialNavigation=!0),a.key){case"Escape":e.items=e.items.map(n=>({...n,focused:!1})),e.initialNavigation=!0,i.items=[...e.items];return;case"ArrowDown":if(e.initialNavigation){e.initialNavigation=!1;return}else{const n=t.findIndex(o=>o.focused),s=n<0?0:Math.min(n+1,t.length-1);e.items=e.items.map(o=>{var u;return{...o,focused:((u=t[s])==null?void 0:u.value)===o.value}})}break;case"ArrowUp":if(e.initialNavigation){e.initialNavigation=!1;return}else{const n=t.findIndex(o=>o.focused),s=n<0?t.length-1:Math.max(n-1,0);e.items=e.items.map(o=>{var u;return{...o,focused:((u=t[s])==null?void 0:u.value)===o.value}})}break;case"Enter":{const n=t.find(s=>s.focused);n&&(e.items=e.items.map(s=>({...s,selected:s.value===n.value?!s.selected:s.selected,focused:!1})),i.value="",e.initialNavigation=!0);break}default:return}i.items=[...e.items]};return I(x||(x=D([`
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
      <\/script>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=`,`
        custom-class=`,`
        debounce-ms=`,`
        ?disabled=`,`
        input-id=`,`
        input-tab-index=`,`
        .items=`,`
        label=`,`
        ?leave-menu-open=`,`
        min-chars=`,`
        ?multi-select=`,`
        name=`,`
        .noResults=`,`
        placeholder=`,`
        ?read-only=`,`
        ?required=`,`
        size=`,`
        value=`,`
        @chipRemove=`,`
        @inputChange=`,`
        @itemSelect=`,`
        @inputBlur=`,`
        @keydown=`,`
      ></modus-wc-autocomplete>
    `])),e.bordered,r(e["custom-class"]),r(e["debounce-ms"]),e.disabled,r(e["input-id"]),r(e["input-tab-index"]),e.items,r(e.label),e["leave-menu-open"],e["min-chars"],!0,r(e.name),e["no-results"],r(e.placeholder),e["read-only"],e.required,r(e.size),e.value,c,v,b,g,l)}},f={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>I`<div></div>`};var N,y,M;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template
}`,...(M=(y=d.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var E,C,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    // Initialize args.items if empty
    if (!args.items || args.items.length === 0) {
      args.items = [...items];
    }
    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        args.items = args.items.map(item => item.value === e.detail.value ? {
          ...item,
          selected: false
        } : item);
        autocomplete.items = [...args.items];
      }
    };
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        const updatedItems = args.items.map(item => ({
          ...item,
          visibleInMenu: item.label.toLowerCase().includes(searchText),
          focused: false
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
      args.items = args.items.map(item => ({
        ...item,
        focused: false,
        visibleInMenu: true
      }));
    };
    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        args.items = args.items.map(item => item.value === e.detail.value ? {
          ...item,
          selected: true
        } : item);
        autocomplete.items = [...args.items];
        autocomplete.value = '';
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (!autocomplete) return;

      // Initialize initialNavigation if undefined
      if (args.initialNavigation === undefined) {
        args.initialNavigation = true;
      }

      // Prevent default for navigation keys
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
        e.preventDefault();
      }
      const visibleItems = args.items.filter(item => item.visibleInMenu && !item.disabled);
      // Reset initial navigation when input value changes
      if ((e.target as HTMLInputElement).value !== autocomplete.value) {
        args.initialNavigation = true;
      }
      switch (e.key) {
        case 'Escape':
          args.items = args.items.map(item => ({
            ...item,
            focused: false
          }));
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
            const currentFocusedIndex = visibleItems.findIndex(item => item.focused);
            const nextIndex = currentFocusedIndex < 0 ? 0 : Math.min(currentFocusedIndex + 1, visibleItems.length - 1);
            args.items = args.items.map(item => ({
              ...item,
              focused: visibleItems[nextIndex]?.value === item.value
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
            const currentFocusedIndex = visibleItems.findIndex(item => item.focused);
            const prevIndex = currentFocusedIndex < 0 ? visibleItems.length - 1 : Math.max(currentFocusedIndex - 1, 0);
            args.items = args.items.map(item => ({
              ...item,
              focused: visibleItems[prevIndex]?.value === item.value
            }));
          }
          break;
        case 'Enter':
          {
            const focusedItem = visibleItems.find(item => item.focused);
            if (focusedItem) {
              args.items = args.items.map(item => ({
                ...item,
                selected: item.value === focusedItem.value ? !item.selected : item.selected,
                focused: false
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
    return html\`
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
      <\/script>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=\${args.bordered}
        custom-class=\${ifDefined(args['custom-class'])}
        debounce-ms=\${ifDefined(args['debounce-ms'])}
        ?disabled=\${args.disabled}
        input-id=\${ifDefined(args['input-id'])}
        input-tab-index=\${ifDefined(args['input-tab-index'])}
        .items=\${args.items}
        label=\${ifDefined(args.label)}
        ?leave-menu-open=\${args['leave-menu-open']}
        min-chars=\${args['min-chars']}
        ?multi-select=\${true}
        name=\${ifDefined(args.name)}
        .noResults=\${args['no-results']}
        placeholder=\${ifDefined(args.placeholder)}
        ?read-only=\${args['read-only']}
        ?required=\${args.required}
        size=\${ifDefined(args.size)}
        value=\${args.value}
        @chipRemove=\${handleChipRemove}
        @inputChange=\${handleInputChange}
        @itemSelect=\${handleItemSelect}
        @inputBlur=\${handleBlur}
        @keydown=\${handleKeyDown}
      ></modus-wc-autocomplete>
    \`;
  }
}`,...(k=(C=p.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var T,A,L;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation]([Angular](?path=/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - To handle updating items in 2.0, simply create a new array of items and bind it to the \\\`items\\\` prop. The 1.0 prop
  \\\`filter-options\\\` is no longer necessary.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`, \\\`large\\\`) to abbreviations (\\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).

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
| show-no-results-found-message |                     | Not carried over, use \\\`no-results\\\` prop                   |
| show-options-on-focus         |                     | Not carried over                                            |
| size                          | size                | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`, \\\`large\\\` → \\\`lg\\\` |
| value                         | value               |                                                             |

#### Event Mapping

| 1.0 Event   | 2.0 Event   | Notes            |
|-------------|-------------|------------------|
| optionSelected ||
| selectionsChanged ||
| valueChange | inputChange |                  |

#### Interfaces

##### 1.0

\\\`\\\`\\\`typescript
interface ModusAutocompleteOption {
  id: string;
  value: string;
}
\\\`\\\`\\\`

##### 2.0

\\\`\\\`\\\`typescript
interface IAutocompleteItem {
  label: string;
  selected?: boolean;
  value: string;
  visibleInMenu: boolean;
}
\\\`\\\`\\\`
        \`
      }
    },
    // To hide the actual story rendering and only show docs:
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  // Simple render function or leave it empty
  render: () => html\`<div></div>\`
}`,...(L=(A=f.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const P=["Default","MultiSelect","Migration"];export{d as Default,f as Migration,p as MultiSelect,P as __namedExportsOrder,B as default};
