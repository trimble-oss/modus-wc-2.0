import{w as S}from"./decorator-Dt3Huotz.js";import{k as h}from"./lit-element-DVRzCIa_.js";import{t as u}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const k=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],L={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:k,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[S],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},E={render:e=>{const p=l=>{const i=l.target.closest("modus-wc-autocomplete");if(!i)return;e.initialNavigation===void 0&&(e.initialNavigation=!0),["ArrowDown","ArrowUp","Enter","Escape"].includes(l.key)&&l.preventDefault();const n=e.items.filter(t=>t.visibleInMenu&&!t.disabled);switch(l.key){case"Escape":e.items=e.items.map(t=>({...t,focused:!1})),e.initialNavigation=!0,i.items=[...e.items];return;case"ArrowDown":if(e.initialNavigation){e.initialNavigation=!1;return}else{const t=n.findIndex(s=>s.focused),a=t<0?0:Math.min(t+1,n.length-1);e.items=e.items.map(s=>{var o;return{...s,focused:((o=n[a])==null?void 0:o.value)===s.value}})}break;case"ArrowUp":if(e.initialNavigation){e.initialNavigation=!1;return}else{const t=n.findIndex(s=>s.focused),a=t<0?n.length-1:Math.max(t-1,0);e.items=e.items.map(s=>{var o;return{...s,focused:((o=n[a])==null?void 0:o.value)===s.value}})}break;case"Enter":{const t=n.find(a=>a.focused);t&&(e.items=e.items.map(a=>({...a,selected:a.value===t.value,focused:!1})),i.value=t.label,e.initialNavigation=!0);break}default:return}i.items=[...e.items]},f=l=>{var n;if(!((n=l.detail)!=null&&n.target))return;const i=l.target.closest("modus-wc-autocomplete");if(i){const t=l.detail.target,a=t.value.toLowerCase();e.items=e.items.map(s=>({...s,visibleInMenu:s.label.toLowerCase().includes(a),focused:!1,selected:a?s.selected:!1})),i.items=[...e.items],i.value=t.value}},v=l=>{const i=l.target.closest("modus-wc-autocomplete");e.initialNavigation=!0,e.items=e.items.map(n=>({...n,focused:!1,visibleInMenu:!0})),i&&(i.items=[...e.items])},b=l=>{const i=l.target.closest("modus-wc-autocomplete");i&&(e.items=e.items.map(n=>({...n,selected:n.value===l.detail.value,focused:!1,visibleInMenu:!0})),i.items=[...e.items],i.value=l.detail.label)};return h`
      <style>
        div[id^='story--components-forms-autocomplete--default'] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${e.bordered}
        custom-class=${u(e["custom-class"])}
        debounce-ms=${u(e["debounce-ms"])}
        ?disabled=${e.disabled}
        input-id=${u(e["input-id"])}
        input-tab-index=${u(e["input-tab-index"])}
        .items=${e.items}
        label=${u(e.label)}
        ?leave-menu-open=${e["leave-menu-open"]}
        min-chars=${e["min-chars"]}
        ?multi-select=${!1}
        name=${u(e.name)}
        placeholder=${u(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${u(e.size)}
        value=${e.value}
        @inputChange=${f}
        @itemSelect=${b}
        @inputBlur=${v}
        @keydown=${p}
      ></modus-wc-autocomplete>
    `}},c={...E},m={render:e=>{(!e.items||e.items.length===0)&&(e.items=[...k]);const p=i=>{const n=i.target.closest("modus-wc-autocomplete");n&&(e.items=e.items.map(t=>t.value===i.detail.value?{...t,selected:!1}:t),n.items=[...e.items])},f=i=>{var t;if(!((t=i.detail)!=null&&t.target))return;const n=i.target.closest("modus-wc-autocomplete");if(n){const a=i.detail.target,s=a.value.toLowerCase(),o=e.items.map(r=>({...r,visibleInMenu:r.label.toLowerCase().includes(s),focused:!1}));e.items=o,n.items=[...e.items],n.value=a.value,n.value&&(e.initialNavigation=!1)}},v=i=>{const n=i.target.closest("modus-wc-autocomplete");e.initialNavigation=!0,e.items=e.items.map(t=>({...t,focused:!1,visibleInMenu:!0})),n&&(n.items=[...e.items])},b=i=>{const n=i.target.closest("modus-wc-autocomplete");n&&(e.items=e.items.map(t=>t.value===i.detail.value?{...t,selected:!0}:t),n.items=[...e.items],n.value="")},l=i=>{const n=i.target.closest("modus-wc-autocomplete");if(!n)return;e.initialNavigation===void 0&&(e.initialNavigation=!0),["ArrowDown","ArrowUp","Enter"].includes(i.key)&&i.preventDefault();const t=e.items.filter(a=>a.visibleInMenu&&!a.disabled);switch(i.target.value!==n.value&&(e.initialNavigation=!0),i.key){case"Escape":e.items=e.items.map(a=>({...a,focused:!1})),e.initialNavigation=!0,n.items=[...e.items];return;case"ArrowDown":if(e.initialNavigation){e.initialNavigation=!1;return}else{const a=t.findIndex(o=>o.focused),s=a<0?0:Math.min(a+1,t.length-1);e.items=e.items.map(o=>{var r;return{...o,focused:((r=t[s])==null?void 0:r.value)===o.value}})}break;case"ArrowUp":if(e.initialNavigation){e.initialNavigation=!1;return}else{const a=t.findIndex(o=>o.focused),s=a<0?t.length-1:Math.max(a-1,0);e.items=e.items.map(o=>{var r;return{...o,focused:((r=t[s])==null?void 0:r.value)===o.value}})}break;case"Enter":{const a=t.find(s=>s.focused);a&&(e.items=e.items.map(s=>({...s,selected:s.value===a.value?!s.selected:s.selected,focused:!1})),n.value="",e.initialNavigation=!0);break}case"Backspace":if(i.target.value===""){const a=e.items.filter(s=>s.selected);if(a.length>0){const s=a[a.length-1];e.items=e.items.map(o=>({...o,selected:o.value===s.value?!1:o.selected}))}}break;default:return}n.items=[...e.items]};return h`
      <style>
        div#story--components-forms-autocomplete--multi-select-inner {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${e.bordered}
        custom-class=${u(e["custom-class"])}
        debounce-ms=${u(e["debounce-ms"])}
        ?disabled=${e.disabled}
        input-id=${u(e["input-id"])}
        input-tab-index=${u(e["input-tab-index"])}
        .items=${e.items}
        label=${u(e.label)}
        ?leave-menu-open=${e["leave-menu-open"]}
        min-chars=${e["min-chars"]}
        ?multi-select=${!0}
        name=${u(e.name)}
        placeholder=${u(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${u(e.size)}
        value=${e.value}
        @chipRemove=${p}
        @inputChange=${f}
        @itemSelect=${b}
        @inputBlur=${v}
        @keydown=${l}
      ></modus-wc-autocomplete>
    `}},d={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>h`<div></div>`};var g,I,w;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var $,y,x;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    const handleBlur = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      args.initialNavigation = true;
      args.items = args.items.map(item => ({
        ...item,
        focused: false,
        visibleInMenu: true
      }));
      if (autocomplete) {
        autocomplete.items = [...args.items];
      }
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
        case 'Backspace':
          if ((e.target as HTMLInputElement).value === '') {
            const selectedItems = args.items.filter(item => item.selected);
            if (selectedItems.length > 0) {
              const lastSelected = selectedItems[selectedItems.length - 1];
              args.items = args.items.map(item => ({
                ...item,
                selected: item.value === lastSelected.value ? false : item.selected
              }));
            }
          }
          break;
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
}`,...(x=(y=m.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var M,N,C;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const F=["Default","MultiSelect","Migration"];export{c as Default,d as Migration,m as MultiSelect,F as __namedExportsOrder,L as default};
