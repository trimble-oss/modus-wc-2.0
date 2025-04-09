import{w as R}from"./decorator-Dt3Huotz.js";import{k as I}from"./lit-element-DVRzCIa_.js";import{t as o}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var x=Object.freeze,q=Object.defineProperty,w=(e,p)=>x(q(e,"raw",{value:x(e.slice())})),y,M,C;const c=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],K={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:c,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[R],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},B={render:e=>{const p=l=>{const a=l.target.closest("modus-wc-autocomplete");if(!a)return;e.initialNavigation===void 0&&(e.initialNavigation=!0),["ArrowDown","ArrowUp","Enter","Escape"].includes(l.key)&&l.preventDefault();const n=e.items.filter(t=>t.visibleInMenu&&!t.disabled);switch(l.key){case"Escape":e.items=e.items.map(t=>({...t,focused:!1})),e.initialNavigation=!0,a.items=[...e.items];return;case"ArrowDown":if(e.initialNavigation){e.initialNavigation=!1;return}else{const t=n.findIndex(s=>s.focused),i=t<0?0:Math.min(t+1,n.length-1);e.items=e.items.map(s=>{var u;return{...s,focused:((u=n[i])==null?void 0:u.value)===s.value}})}break;case"ArrowUp":if(e.initialNavigation){e.initialNavigation=!1;return}else{const t=n.findIndex(s=>s.focused),i=t<0?n.length-1:Math.max(t-1,0);e.items=e.items.map(s=>{var u;return{...s,focused:((u=n[i])==null?void 0:u.value)===s.value}})}break;case"Enter":{const t=n.find(i=>i.focused);t&&(e.items=e.items.map(i=>({...i,selected:i.value===t.value,focused:!1})),a.value=t.label,e.initialNavigation=!0);break}default:return}a.items=[...e.items]},f=l=>{var n;if(!((n=l.detail)!=null&&n.target))return;const a=l.target.closest("modus-wc-autocomplete");if(a){const t=l.detail.target,i=t.value.toLowerCase();e.items=e.items.map(s=>({...s,visibleInMenu:s.label.toLowerCase().includes(i),focused:!1,selected:i?s.selected:!1})),a.items=[...e.items],a.value=t.value}},m=()=>{e.initialNavigation=!0,e.items=e.items.map(l=>({...l,focused:!1,visibleInMenu:!0}))},r=l=>{const a=l.target.closest("modus-wc-autocomplete");if(a){const n=l.detail.label;n&&(a.value=n),c.forEach(i=>i.selected=!1);const t=c.find(i=>i.value===l.detail.value);t&&(t.selected=!0,a.items=[...c])}};return I(y||(y=w([`
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
        .noResults=`,`
        placeholder=`,`
        ?read-only=`,`
        ?required=`,`
        ?show-spinner=`,`
        size=`,`
        value=`,`
        @inputChange=`,`
        @itemSelect=`,`
        @inputBlur=`,`
        @keydown=`,`
      ></modus-wc-autocomplete>
    `])),e.bordered,o(e["custom-class"]),o(e["debounce-ms"]),e.disabled,o(e["input-id"]),o(e["input-tab-index"]),e.items,o(e.label),e["leave-menu-open"],e["min-chars"],!1,o(e.name),e["no-results"],o(e.placeholder),e["read-only"],e.required,e["show-spinner"],o(e.size),e.value,f,r,m,p)}},v={...B},h={render:e=>{(!e.items||e.items.length===0)&&(e.items=[...c]);const p=a=>{const n=a.target.closest("modus-wc-autocomplete");n&&(e.items=e.items.map(t=>t.value===a.detail.value?{...t,selected:!1}:t),n.items=[...e.items])},f=a=>{var t;if(!((t=a.detail)!=null&&t.target))return;const n=a.target.closest("modus-wc-autocomplete");if(n){const i=a.detail.target,s=i.value.toLowerCase(),u=e.items.map(d=>({...d,visibleInMenu:d.label.toLowerCase().includes(s),focused:!1}));e.items=u,n.items=[...e.items],n.value=i.value,n.value&&(e.initialNavigation=!1)}},m=()=>{e.initialNavigation=!0,e.items=e.items.map(a=>({...a,focused:!1,visibleInMenu:!0}))},r=a=>{const n=a.target.closest("modus-wc-autocomplete");n&&(e.items=e.items.map(t=>t.value===a.detail.value?{...t,selected:!0}:t),n.items=[...e.items],n.value="")},l=a=>{const n=a.target.closest("modus-wc-autocomplete");if(!n)return;e.initialNavigation===void 0&&(e.initialNavigation=!0),["ArrowDown","ArrowUp","Enter"].includes(a.key)&&a.preventDefault();const t=e.items.filter(i=>i.visibleInMenu&&!i.disabled);switch(a.target.value!==n.value&&(e.initialNavigation=!0),a.key){case"Escape":e.items=e.items.map(i=>({...i,focused:!1})),e.initialNavigation=!0,n.items=[...e.items];return;case"ArrowDown":if(e.initialNavigation){e.initialNavigation=!1;return}else{const i=t.findIndex(u=>u.focused),s=i<0?0:Math.min(i+1,t.length-1);e.items=e.items.map(u=>{var d;return{...u,focused:((d=t[s])==null?void 0:d.value)===u.value}})}break;case"ArrowUp":if(e.initialNavigation){e.initialNavigation=!1;return}else{const i=t.findIndex(u=>u.focused),s=i<0?t.length-1:Math.max(i-1,0);e.items=e.items.map(u=>{var d;return{...u,focused:((d=t[s])==null?void 0:d.value)===u.value}})}break;case"Enter":{const i=t.find(s=>s.focused);i&&(e.items=e.items.map(s=>({...s,selected:s.value===i.value?!s.selected:s.selected,focused:!1})),n.value="",e.initialNavigation=!0);break}default:return}n.items=[...e.items]};return I(M||(M=w([`
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
    `])),e.bordered,o(e["custom-class"]),o(e["debounce-ms"]),e.disabled,o(e["input-id"]),o(e["input-tab-index"]),e.items,o(e.label),e["leave-menu-open"],e["min-chars"],!0,o(e.name),e["no-results"],o(e.placeholder),e["read-only"],e.required,o(e.size),e.value,p,f,r,m,l)}},b={render:e=>{const p=m=>{var l;if(!((l=m.detail)!=null&&l.target))return;const r=m.target.closest("modus-wc-autocomplete");if(r){const a=m.detail.target,n=a.value.toLowerCase();setTimeout(()=>{r.showSpinner=!1},2e3),r.showSpinner=!0;const t=c.map(i=>({...i,selected:n?i.selected:!1,visibleInMenu:i.label.toLowerCase().includes(n)}));r.items=[...t],r.value=a.value}},f=m=>{const r=m.target.closest("modus-wc-autocomplete");if(r){const l=m.detail.label;l&&(r.value=l),c.forEach(n=>n.selected=!1);const a=c.find(n=>n.value===m.detail.value);a&&(a.selected=!0,r.items=[...c])}};return I(C||(C=w([`
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
  ?show-spinner=`,`
  size=`,`
  value=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),e.bordered,o(e["custom-class"]),o(e["debounce-ms"]),e.disabled,o(e["input-id"]),o(e["input-tab-index"]),e.items,o(e.label),e["leave-menu-open"],e["min-chars"],!1,o(e.name),o(e.placeholder),e["read-only"],e.required,e["show-spinner"],o(e.size),e.value,p,f)}},g={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>I`<div></div>`};var E,N,T;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template
}`,...(T=(N=v.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var L,S,k;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(S=h.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var $,A,D;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        // show the spinner for 2 seconds
        setTimeout(() => {
          autocomplete.showSpinner = false;
        }, 2000);
        autocomplete.showSpinner = true;
        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map(item => ({
          ...item,
          selected: searchText ? item.selected : false,
          visibleInMenu: item.label.toLowerCase().includes(searchText)
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
        autocomplete.value = input.value;
      }
    };
    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const label = e.detail.label;
        if (label) {
          autocomplete.value = label;
        }

        // Clear the previous selection.
        items.forEach(item => item.selected = false);

        // Mark the user selected menu item as selected and create a new array to update items.
        const foundItem = items.find(item => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = true;
          autocomplete.items = [...items];
        }
      }
    };

    // prettier-ignore
    return html\`
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
  ?multi-select=\${false}
  name=\${ifDefined(args.name)}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  ?show-spinner=\${args['show-spinner']}
  size=\${ifDefined(args.size)}
  value=\${args.value}
  @inputChange=\${handleInputChange}
  @itemSelect=\${handleItemSelect}
></modus-wc-autocomplete>
    \`;
  }
}`,...(D=(A=b.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var z,H,F;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(H=g.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};const W=["Default","MultiSelect","WithSpinner","Migration"];export{v as Default,g as Migration,h as MultiSelect,b as WithSpinner,W as __namedExportsOrder,K as default};
