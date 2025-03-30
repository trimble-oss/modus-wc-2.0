import{w as M}from"./decorator-Dt3Huotz.js";import{k as h}from"./lit-element-DVRzCIa_.js";import{t as a}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";const S=[{label:"Apple",value:"apple",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Banana",value:"banana",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0,focused:!1},{label:"Cherry",value:"cherry",visibleInMenu:!0,focused:!1},{label:"Grape",value:"grape",visibleInMenu:!0,focused:!1},{label:"Lemon",value:"lemon",visibleInMenu:!0,focused:!1},{label:"Orange",value:"orange",visibleInMenu:!0,focused:!1,disabled:!0},{label:"Peach",value:"peach",visibleInMenu:!0,focused:!1},{label:"Pear",value:"pear",visibleInMenu:!0,focused:!1},{label:"Strawberry",value:"strawberry",visibleInMenu:!0,focused:!1,disabled:!0}],R={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:S,label:"Label","min-chars":0,"multi-select":!1,size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - focused (boolean, optional): Whether the item is focused
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[M],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},E={render:e=>{const p=l=>{["ArrowDown","ArrowUp","Enter"].includes(l.key)&&l.preventDefault();const o=l.target.closest("modus-wc-autocomplete");if(!o)return;let n=e.items.findIndex(t=>t.focused);if(n===-1&&(n=e.items.findIndex(t=>t.selected)),e.items=e.items.map(t=>({...t,focused:!1})),n===-1&&(l.key==="ArrowDown"||l.key==="ArrowUp")){if(l.key==="ArrowDown"){for(let t=0;t<e.items.length;t++)if(!e.items[t].disabled){n=t;break}}else for(let t=e.items.length-1;t>=0;t--)if(!e.items[t].disabled){n=t;break}}else if(l.key==="ArrowDown"&&n<e.items.length-1){let t=n+1;for(;t<e.items.length&&e.items[t].disabled;)t++;t<e.items.length&&(n=t)}else if(l.key==="ArrowUp"&&n>0){let t=n-1;for(;t>=0&&e.items[t].disabled;)t--;t>=0&&(n=t)}else if(l.key==="Enter"){n!==-1&&(e.items=e.items.map((t,s)=>({...t,selected:s===n})),o.items=[...e.items],o.value=e.items[n].label);return}e.items[n].focused=!0,o.items=[...e.items]},f=l=>{var n;if(!((n=l.detail)!=null&&n.target))return;const o=l.target.closest("modus-wc-autocomplete");if(o){const t=l.detail.target,s=t.value.toLowerCase(),i=S.map(r=>({...r,selected:s?r.selected:!1,visibleInMenu:r.label.toLowerCase().includes(s),focused:!1}));o.items=[...i],o.value=t.value}},b=l=>{const o=l.target.closest("modus-wc-autocomplete");if(o){const n=l.detail.label;n&&(o.value=n),e.items.forEach(s=>{s.selected=!1,s.focused=!1});const t=e.items.find(s=>s.value===l.detail.value);t&&(t.selected=!0,o.items=[...e.items])}};return h`
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
        @itemSelect=${b}
        @keydown=${p}
      ></modus-wc-autocomplete>
    `}},u={...E},c={render:e=>{const p=o=>{const n=o.target.closest("modus-wc-autocomplete");if(n){const t=e.items.find(s=>s.value===o.detail.value);t&&(t.selected=!1,n.items=[...e.items])}},f=o=>{var t;if(!((t=o.detail)!=null&&t.target))return;const n=o.target.closest("modus-wc-autocomplete");if(n){const s=o.detail.target,i=s.value.toLowerCase(),r=e.items.map(d=>({...d,visibleInMenu:d.label.toLowerCase().includes(i),focused:!1}));n.items=[...r],n.value=s.value}},b=o=>{const n=o.target.closest("modus-wc-autocomplete");if(n){n.value="",n.items=e.items.map(s=>({...s,visibleInMenu:!0,focused:!1}));const t=e.items.find(s=>s.value===o.detail.value);t&&(t.selected=!0)}},l=o=>{["ArrowDown","ArrowUp","Enter"].includes(o.key)&&o.preventDefault();const n=o.target.closest("modus-wc-autocomplete");if(!n)return;const t=o.target;if(o.key==="Backspace"&&!t.value){const i=e.items.reduce((r,d,A)=>d.selected?A:r,-1);if(i!==-1){const r=new CustomEvent("chipRemove",{detail:e.items[i],bubbles:!0,composed:!0});o.target.dispatchEvent(r),n.items=[...e.items]}return}let s=e.items.findIndex(i=>i.focused);if(s===-1&&(s=e.items.findIndex(i=>i.selected)),e.items=e.items.map(i=>({...i,focused:!1})),s===-1&&(o.key==="ArrowDown"||o.key==="ArrowUp")){if(o.key==="ArrowDown"){for(let i=0;i<e.items.length;i++)if(!e.items[i].disabled){s=i;break}}else for(let i=e.items.length-1;i>=0;i--)if(!e.items[i].disabled){s=i;break}}else if(o.key==="ArrowDown"&&s<e.items.length-1){let i=s+1;for(;i<e.items.length&&e.items[i].disabled;)i++;i<e.items.length&&(s=i)}else if(o.key==="ArrowUp"&&s>0){let i=s-1;for(;i>=0&&e.items[i].disabled;)i--;i>=0&&(s=i)}else if(o.key==="Enter"){s!==-1&&(e.items[s].selected=!e.items[s].selected,n.items=[...e.items]);return}e.items[s].focused=!0,n.items=[...e.items]};return h`
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
        @itemSelect=${b}
        @keydown=${l}
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>h`<div></div>`};var v,w,I;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template
}`,...(I=(w=u.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var y,g,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          visibleInMenu: item.label.toLowerCase().includes(searchText),
          focused: false
        }));

        // Ensuring that a new array is created when updating items is critical to component re-render.
        autocomplete.items = [...updatedItems];
        autocomplete.value = input.value;
      }
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
      // Check if Backspace is pressed and the input is empty
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
        @keydown=\${handleKeyDown}
      ></modus-wc-autocomplete>
    \`;
  }
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var $,k,C;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(C=(k=m.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const z=["Default","MultiSelect","Migration"];export{u as Default,m as Migration,c as MultiSelect,z as __namedExportsOrder,R as default};
