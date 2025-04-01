import{w as N}from"./decorator-Dt3Huotz.js";import{k as w}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const g=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],q={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:g,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[N],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},T={render:e=>{const d=o=>{["ArrowDown","ArrowUp","Enter"].includes(o.key)&&o.preventDefault();const r=o.target.closest("modus-wc-autocomplete");if(!r)return;e.initialNavigation===void 0&&(e.initialNavigation=!0);let s=e.items.findIndex(t=>t.focused);if(s===-1&&(s=e.items.findIndex(t=>t.selected)),o.target.value||(e.items=e.items.map(t=>({...t,selected:!1}))),e.items=e.items.map(t=>({...t,focused:!1})),s===-1&&(o.key==="ArrowDown"||o.key==="ArrowUp")){if(o.key==="ArrowDown"){for(let t=0;t<e.items.length;t++)if(!e.items[t].disabled){s=t;break}}else for(let t=e.items.length-1;t>=0;t--)if(!e.items[t].disabled){s=t;break}}else if(o.key==="ArrowDown"&&s<e.items.length-1){let t=s+1;for(;t<e.items.length&&e.items[t].disabled;)t++;t<e.items.length&&(s=t)}else if(o.key==="ArrowUp"&&s>0){let t=s-1;for(;t>=0&&e.items[t].disabled;)t--;t>=0&&(s=t)}else if(o.key==="Enter"){s!==-1&&(e.items=e.items.map((t,u)=>({...t,selected:u===s})),r.items=[...e.items],r.value=e.items[s].label);return}if(e.initialNavigation){e.initialNavigation=!1;return}e.items[s].focused=!0,r.items=[...e.items]},v=o=>{var s;if(!((s=o.detail)!=null&&s.target))return;const r=o.target.closest("modus-wc-autocomplete");if(r){const i=o.detail.target,t=i.value.toLowerCase(),u=g.map(l=>({...l,selected:t?l.selected:!1,visibleInMenu:l.label.toLowerCase().includes(t),focused:!1}));e.items=u.filter(l=>l.visibleInMenu),r.items=[...e.items],r.value=i.value}},I=()=>{e.initialNavigation=!0,e.items.forEach(o=>{o.focused=!1})},p=o=>{const r=o.target.closest("modus-wc-autocomplete");if(r){const s=o.detail.label;s&&(r.value=s),e.items.forEach(t=>{t.selected=!1,t.focused=!1});const i=e.items.find(t=>t.value===o.detail.value);i&&(i.selected=!0,r.items=[...e.items])}};return w`
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
        ?leave-menu-open=${e["leave-menu-open"]}
        min-chars=${e["min-chars"]}
        ?multi-select=${!1}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        value=${e.value}
        @inputChange=${v}
        @itemSelect=${p}
        @inputBlur=${I}
        @keydown=${d}
      ></modus-wc-autocomplete>
    `}},f={...T},b={render:e=>{let d=[...g];const v=i=>{const t=i.target.closest("modus-wc-autocomplete");if(t){const u=e.items.find(l=>l.value===i.detail.value);if(u){u.selected=!1;const l=e.items.filter(n=>n.selected);d.forEach(n=>{n.selected=l.some(c=>c.value===n.value)}),t.items=[...d]}}},I=i=>{var u;if(!((u=i.detail)!=null&&u.target))return;const t=i.target.closest("modus-wc-autocomplete");if(t){const l=i.detail.target,n=l.value.toLowerCase(),c=d.map(m=>({...m,visibleInMenu:!!(!n||m.label&&m.label.toLowerCase().includes(n)||m.selected),focused:!1}));e.items=c.filter(m=>m.visibleInMenu),t.items=[...e.items],t.value=l.value}};let p=!1;const o=()=>{e.initialNavigation=!0,e.items.forEach(i=>{i.focused=!1}),e.items=[...d],p=!0},r=i=>{const t=i.target.closest("modus-wc-autocomplete");if(t){t.value="",t.items=d.map(l=>({...l,visibleInMenu:!0,focused:!1}));const u=d.find(l=>l.value===i.detail.value);u&&(u.selected=!0)}},s=i=>{["ArrowDown","ArrowUp","Enter"].includes(i.key)&&i.preventDefault();const t=i.target.closest("modus-wc-autocomplete");if(!t)return;const u=i.target;if(e.initialNavigation===void 0&&(e.initialNavigation=!0),i.key==="Backspace"&&!u.value){const n=d.reduce((c,m,D)=>m.selected?D:c,-1);n!==-1&&(d[n].selected=!1,t.items=[...d]);return}let l=e.items.findIndex(n=>n.focused);if(p&&(l=-1,p=!1),e.items=e.items.map(n=>({...n,focused:!1})),l===-1&&(i.key==="ArrowDown"||i.key==="ArrowUp")){if(i.key==="ArrowDown"){for(let n=0;n<e.items.length;n++)if(!e.items[n].disabled){l=n;break}}else for(let n=e.items.length-1;n>=0;n--)if(!e.items[n].disabled){l=n;break}}else if(i.key==="ArrowDown"&&l<e.items.length-1){let n=l+1;for(;n<e.items.length&&e.items[n].disabled;)n++;n<e.items.length&&(l=n)}else if(i.key==="ArrowUp"&&l>0){let n=l-1;for(;n>=0&&e.items[n].disabled;)n--;n>=0&&(l=n)}else if(i.key==="Enter"){if(l!==-1){e.items[l].selected=!e.items[l].selected;const n=e.items.filter(c=>c.selected);d.forEach(c=>{c.selected=n.some(m=>m.value===c.value)}),t.items=[...d],t.value=""}return}if(e.initialNavigation){e.initialNavigation=!1;return}e.items[l].focused=!0,t.items=[...e.items]};return w`
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
        ?leave-menu-open=${e["leave-menu-open"]}
        min-chars=${e["min-chars"]}
        ?multi-select=${!0}
        name=${a(e.name)}
        placeholder=${a(e.placeholder)}
        ?read-only=${e["read-only"]}
        ?required=${e.required}
        size=${a(e.size)}
        value=${e.value}
        @chipRemove=${v}
        @inputChange=${I}
        @itemSelect=${r}
        @inputBlur=${o}
        @keydown=${s}
      ></modus-wc-autocomplete>
    `}},h={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>w`<div></div>`};var y,x,$;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template
}`,...($=(x=f.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var k,S,M;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    let allItems: IAutocompleteItem[] = [...items];
    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const foundItem = args.items.find(item => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = false;
          const selectedItems = args.items.filter(item => item.selected);
          // compare the selected items with allItems and set the selected items to allItems
          allItems.forEach(item => {
            item.selected = selectedItems.some(selectedItem => selectedItem.value === item.value);
          });
          autocomplete.items = [...allItems]; // Update component
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
    let inputBlur = false;
    const handleBlur = () => {
      args.initialNavigation = true;
      args.items.forEach(item => {
        item.focused = false;
      });
      args.items = [...allItems];
      inputBlur = true;
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
      if (inputBlur) {
        currentIndex = -1;
        inputBlur = false;
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
}`,...(M=(S=b.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var A,C,E;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(C=h.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const R=["Default","MultiSelect","Migration"];export{f as Default,h as Migration,b as MultiSelect,R as __namedExportsOrder,q as default};
