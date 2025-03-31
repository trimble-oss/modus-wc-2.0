import{w as E}from"./decorator-Dt3Huotz.js";import{k as v}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const M=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],R={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:M,label:"Label","min-chars":0,"multi-select":!1,size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[E],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},D={render:e=>{const p=s=>{["ArrowDown","ArrowUp","Enter"].includes(s.key)&&s.preventDefault();const n=s.target.closest("modus-wc-autocomplete");if(!n)return;let i=e.items.findIndex(t=>t.focused);if(i===-1&&(i=e.items.findIndex(t=>t.selected)),s.target.value||(e.items=e.items.map(t=>({...t,selected:!1}))),e.items=e.items.map(t=>({...t,focused:!1})),i===-1&&(s.key==="ArrowDown"||s.key==="ArrowUp")){if(s.key==="ArrowDown"){for(let t=0;t<e.items.length;t++)if(!e.items[t].disabled){i=t;break}}else for(let t=e.items.length-1;t>=0;t--)if(!e.items[t].disabled){i=t;break}}else if(s.key==="ArrowDown"&&i<e.items.length-1){let t=i+1;for(;t<e.items.length&&e.items[t].disabled;)t++;t<e.items.length&&(i=t)}else if(s.key==="ArrowUp"&&i>0){let t=i-1;for(;t>=0&&e.items[t].disabled;)t--;t>=0&&(i=t)}else if(s.key==="Enter"){i!==-1&&(e.items=e.items.map((t,o)=>({...t,selected:o===i})),n.items=[...e.items],n.value=e.items[i].label);return}if(e.initialNavigation){e.initialNavigation=!1;return}e.items[i].focused=!0,n.items=[...e.items]},f=s=>{var i;if(!((i=s.detail)!=null&&i.target))return;const n=s.target.closest("modus-wc-autocomplete");if(n){const l=s.detail.target,t=l.value.toLowerCase(),o=M.map(r=>({...r,selected:t?r.selected:!1,visibleInMenu:r.label.toLowerCase().includes(t),focused:!1}));e.items=o.filter(r=>r.visibleInMenu),n.items=[...e.items],n.value=l.value}},b=()=>{e.initialNavigation=!0,e.items.forEach(s=>{s.focused=!1})},h=s=>{const n=s.target.closest("modus-wc-autocomplete");if(n){const i=s.detail.label;i&&(n.value=i),e.items.forEach(t=>{t.selected=!1,t.focused=!1});const l=e.items.find(t=>t.value===s.detail.value);l&&(l.selected=!0,n.items=[...e.items])}};return v`
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
        @inputChange=${f}
        @itemSelect=${h}
        @inputBlur=${b}
        @keydown=${p}
      ></modus-wc-autocomplete>
    `}},u={...D},c={render:e=>{const p=n=>{const i=n.target.closest("modus-wc-autocomplete");if(i){const l=e.items.find(t=>t.value===n.detail.value);l&&(l.selected=!1,i.items=[...e.items])}},f=n=>{var l;if(!((l=n.detail)!=null&&l.target))return;const i=n.target.closest("modus-wc-autocomplete");if(i){const t=n.detail.target,o=t.value.toLowerCase(),r=e.items.map(d=>({...d,visibleInMenu:(o?d.label?d.label.toLowerCase().includes(o):!1:!0)||d.selected===!0,focused:!1}));e.items=r.filter(d=>d.visibleInMenu),i.items=[...e.items],i.value=t.value}},b=()=>{e.initialNavigation=!0,e.items.forEach(n=>{n.focused=!1})},h=n=>{const i=n.target.closest("modus-wc-autocomplete");if(i){i.value="",i.items=e.items.map(t=>({...t,visibleInMenu:!0,focused:!1}));const l=e.items.find(t=>t.value===n.detail.value);l&&(l.selected=!0)}},s=n=>{["ArrowDown","ArrowUp","Enter"].includes(n.key)&&n.preventDefault();const i=n.target.closest("modus-wc-autocomplete");if(!i)return;const l=n.target;if(n.key==="Backspace"&&!l.value){const o=e.items.reduce((r,d,A)=>d.selected?A:r,-1);if(o!==-1){const r=new CustomEvent("chipRemove",{detail:e.items[o],bubbles:!0,composed:!0});n.target.dispatchEvent(r),i.items=[...e.items]}return}let t=e.items.findIndex(o=>o.focused);if(t===-1&&(t=e.items.findIndex(o=>o.selected)),e.items=e.items.map(o=>({...o,focused:!1})),t===-1&&(n.key==="ArrowDown"||n.key==="ArrowUp")){if(n.key==="ArrowDown"){for(let o=0;o<e.items.length;o++)if(!e.items[o].disabled){t=o;break}}else for(let o=e.items.length-1;o>=0;o--)if(!e.items[o].disabled){t=o;break}}else if(n.key==="ArrowDown"&&t<e.items.length-1){let o=t+1;for(;o<e.items.length&&e.items[o].disabled;)o++;o<e.items.length&&(t=o)}else if(n.key==="ArrowUp"&&t>0){let o=t-1;for(;o>=0&&e.items[o].disabled;)o--;o>=0&&(t=o)}else if(n.key==="Enter"){t!==-1&&(e.items[t].selected=!e.items[t].selected,i.items=[...e.items]);return}if(e.initialNavigation){e.initialNavigation=!1;return}e.items[t].focused=!0,i.items=[...e.items]};return v`
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
        @chipRemove=${p}
        @inputChange=${f}
        @itemSelect=${h}
        @inputBlur=${b}
        @keydown=${s}
      ></modus-wc-autocomplete>
    `}},m={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>v`<div></div>`};var w,I,g;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template
}`,...(g=(I=u.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var y,x,$;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
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
        const updatedItems = args.items.map(item => ({
          ...item,
          visibleInMenu: (searchText ? item.label ? item.label.toLowerCase().includes(searchText) : false : true) || item.selected === true,
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
        autocomplete.items = args.items.map(item => ({
          ...item,
          visibleInMenu: true,
          focused: false
        }));
        const fruit = args.items.find(fruit => fruit.value === e.detail.value);
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
      if (e.key === 'Backspace' && !input.value) {
        // Find the last selected chip by its index
        const lastSelectedIndex = args.items.reduce((acc, item, index) => item.selected ? index : acc, -1);
        if (lastSelectedIndex !== -1) {
          // Create a custom event with the chip details.
          const chipRemoveEvent = new CustomEvent<IAutocompleteItem>('chipRemove', {
            detail: args.items[lastSelectedIndex],
            bubbles: true,
            composed: true
          });
          // Fire the chipRemove event, which will trigger handleChipRemove.
          (e.target as HTMLElement).dispatchEvent(chipRemoveEvent);
          // Update autocomplete items if needed.
          autocomplete.items = [...args.items];
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
          autocomplete.items = [...args.items]; // Update component
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
}`,...($=(x=c.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var k,C,S;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const z=["Default","MultiSelect","Migration"];export{u as Default,m as Migration,c as MultiSelect,z as __namedExportsOrder,R as default};
