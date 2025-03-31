import{w as D}from"./decorator-Dt3Huotz.js";import{k as I}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const w=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],B={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:w,label:"Label","min-chars":0,"multi-select":!1,size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[D],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},N={render:e=>{const d=o=>{["ArrowDown","ArrowUp","Enter"].includes(o.key)&&o.preventDefault();const r=o.target.closest("modus-wc-autocomplete");if(!r)return;let n=e.items.findIndex(t=>t.focused);if(n===-1&&(n=e.items.findIndex(t=>t.selected)),o.target.value||(e.items=e.items.map(t=>({...t,selected:!1}))),e.items=e.items.map(t=>({...t,focused:!1})),n===-1&&(o.key==="ArrowDown"||o.key==="ArrowUp")){if(o.key==="ArrowDown"){for(let t=0;t<e.items.length;t++)if(!e.items[t].disabled){n=t;break}}else for(let t=e.items.length-1;t>=0;t--)if(!e.items[t].disabled){n=t;break}}else if(o.key==="ArrowDown"&&n<e.items.length-1){let t=n+1;for(;t<e.items.length&&e.items[t].disabled;)t++;t<e.items.length&&(n=t)}else if(o.key==="ArrowUp"&&n>0){let t=n-1;for(;t>=0&&e.items[t].disabled;)t--;t>=0&&(n=t)}else if(o.key==="Enter"){n!==-1&&(e.items=e.items.map((t,l)=>({...t,selected:l===n})),r.items=[...e.items],r.value=e.items[n].label);return}if(e.initialNavigation){e.initialNavigation=!1;return}e.items[n].focused=!0,r.items=[...e.items]},b=o=>{var n;if(!((n=o.detail)!=null&&n.target))return;const r=o.target.closest("modus-wc-autocomplete");if(r){const s=o.detail.target,t=s.value.toLowerCase(),l=w.map(i=>({...i,selected:t?i.selected:!1,visibleInMenu:i.label.toLowerCase().includes(t),focused:!1}));e.items=l.filter(i=>i.visibleInMenu),r.items=[...e.items],r.value=s.value}},h=()=>{e.initialNavigation=!0,e.items.forEach(o=>{o.focused=!1})},v=o=>{const r=o.target.closest("modus-wc-autocomplete");if(r){const n=o.detail.label;n&&(r.value=n),e.items.forEach(t=>{t.selected=!1,t.focused=!1});const s=e.items.find(t=>t.value===o.detail.value);s&&(s.selected=!0,r.items=[...e.items])}};return I`
      <style>
        /* Only for Storybook */
        div[id^="story--components-forms-autocomplete--default"] {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        debounce-ms=${a(e["debounce-ms"])}
        ?disabled=${e.disabled}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        .items=${e.items}
        label=${a(e.label)}
        min-chars=${e["min-chars"]}
        ?multi-select=${!1}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        value=${e.value}
        @inputChange=${b}
        @itemSelect=${v}
        @inputBlur=${h}
        @keydown=${d}
      ></modus-wc-autocomplete>
    `}},m={...N},p={render:e=>{const d=[...w],b=n=>{const s=n.target.closest("modus-wc-autocomplete");if(s){const t=e.items.find(l=>l.value===n.detail.value);t&&(t.selected=!1,s.items=[...e.items])}},h=n=>{var t;if(!((t=n.detail)!=null&&t.target))return;const s=n.target.closest("modus-wc-autocomplete");if(s){const l=n.detail.target,i=l.value.toLowerCase(),c=d.map(u=>({...u,visibleInMenu:!!(!i||u.label&&u.label.toLowerCase().includes(i)||u.selected),focused:!1}));e.items=c.filter(u=>u.visibleInMenu),s.items=[...e.items],s.value=l.value}},v=()=>{e.initialNavigation=!0,e.items.forEach(n=>{n.focused=!1})},o=n=>{const s=n.target.closest("modus-wc-autocomplete");if(s){s.value="",s.items=d.map(l=>({...l,visibleInMenu:!0,focused:!1}));const t=d.find(l=>l.value===n.detail.value);t&&(t.selected=!0)}},r=n=>{["ArrowDown","ArrowUp","Enter"].includes(n.key)&&n.preventDefault();const s=n.target.closest("modus-wc-autocomplete");if(!s)return;const t=n.target;if(e.initialNavigation===void 0&&(e.initialNavigation=!0),n.key==="Backspace"&&!t.value){const i=d.reduce((c,u,E)=>u.selected?E:c,-1);i!==-1&&(d[i].selected=!1,s.items=[...d]);return}let l=e.items.findIndex(i=>i.focused);if(l===-1&&(l=e.items.findIndex(i=>i.selected)),e.items=e.items.map(i=>({...i,focused:!1})),l===-1&&(n.key==="ArrowDown"||n.key==="ArrowUp")){if(n.key==="ArrowDown"){for(let i=0;i<e.items.length;i++)if(!e.items[i].disabled){l=i;break}}else for(let i=e.items.length-1;i>=0;i--)if(!e.items[i].disabled){l=i;break}}else if(n.key==="ArrowDown"&&l<e.items.length-1){let i=l+1;for(;i<e.items.length&&e.items[i].disabled;)i++;i<e.items.length&&(l=i)}else if(n.key==="ArrowUp"&&l>0){let i=l-1;for(;i>=0&&e.items[i].disabled;)i--;i>=0&&(l=i)}else if(n.key==="Enter"){if(l!==-1){e.items[l].selected=!e.items[l].selected;const i=e.items.filter(c=>c.selected);d.forEach(c=>{c.selected=i.some(u=>u.value===c.value)}),s.items=[...d],s.value=""}return}if(e.initialNavigation){e.initialNavigation=!1;return}e.items[l].focused=!0,s.items=[...e.items]};return I`
      <style>
        /* Only for Storybook */
        div#story--components-forms-autocomplete--multi-select-inner {
          height: 400px;
        }
      </style>
      <modus-wc-autocomplete
        aria-label="Fruit autocomplete"
        ?bordered=${e.bordered}
        custom-class=${a(e["custom-class"])}
        debounce-ms=${a(e["debounce-ms"])}
        ?disabled=${e.disabled}
        input-id=${a(e["input-id"])}
        input-tab-index=${a(e["input-tab-index"])}
        .items=${e.items}
        label=${a(e.label)}
        min-chars=${e["min-chars"]}
        ?multi-select=${!0}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        value=${e.value}
        @chipRemove=${b}
        @inputChange=${h}
        @itemSelect=${o}
        @inputBlur=${v}
        @keydown=${r}
      ></modus-wc-autocomplete>
    `}},f={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>I`<div></div>`};var g,y,x;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template
}`,...(x=(y=m.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var $,k,S;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const allItems: IAutocompleteItem[] = [...items];
    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const foundItem = args.items.find(item => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = false;
          autocomplete.items = [...args.items];
        }
      }
    };
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();
        const updatedItems = allItems.map(item => ({
          ...item,
          visibleInMenu: !!((searchText ? item.label ? item.label.toLowerCase().includes(searchText) : false : true) || item.selected),
          focused: false
        }));
        args.items = updatedItems.filter(item => item.visibleInMenu);
        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...args.items];
        autocomplete.value = input.value;
      }
    };
    const handleBlur = () => {
      args.initialNavigation = true;
      args.items.forEach(item => {
        item.focused = false;
      });
    };
    const handleItemSelect = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
        autocomplete.value = '';
        autocomplete.items = allItems.map(item => ({
          ...item,
          visibleInMenu: true,
          focused: false
        }));
        const fruit = allItems.find(fruit => fruit.value === e.detail.value);
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
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (!autocomplete) return;
      const input = e.target as HTMLInputElement;
      if (args.initialNavigation === undefined) {
        args.initialNavigation = true;
      }
      if (e.key === 'Backspace' && !input.value) {
        // Find the last selected chip by its index
        const lastSelectedIndex = allItems.reduce((acc, item, index) => item.selected ? index : acc, -1);
        if (lastSelectedIndex !== -1) {
          allItems[lastSelectedIndex].selected = false;
          autocomplete.items = [...allItems];
        }
        return;
      }
      let currentIndex = args.items.findIndex(item => item.focused);
      if (currentIndex === -1) {
        // If no item is focused, try to focus the last selected item
        currentIndex = args.items.findIndex(item => item.selected);
      }

      // Reset focus for all items
      args.items = args.items.map(item => ({
        ...item,
        focused: false
      }));
      if (currentIndex === -1 && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
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
      } else if (e.key === 'ArrowDown' && currentIndex < args.items.length - 1) {
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
          args.items[currentIndex].selected = !args.items[currentIndex].selected;
          const selectedItems = args.items.filter(item => item.selected);
          // compare the selected items with allItems and set the selected items to allItems
          allItems.forEach(item => {
            item.selected = selectedItems.some(selectedItem => selectedItem.value === item.value);
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
    return html\`
      <style>
        /* Only for Storybook */
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
}`,...(S=(k=p.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var M,A,C;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(A=f.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const q=["Default","MultiSelect","Migration"];export{m as Default,f as Migration,p as MultiSelect,q as __namedExportsOrder,B as default};
