import{w as R}from"./decorator-Dt3Huotz.js";import{k as v}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var g=Object.freeze,q=Object.defineProperty,b=(e,r)=>g(q(e,"raw",{value:g(e.slice())})),w,y,C;const i=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pear",value:"pear",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],U={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:i,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[R],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},N={render:e=>{const r=l=>{var a;if(!((a=l.detail)!=null&&a.target))return;const t=l.target.closest("modus-wc-autocomplete");if(t){const s=l.detail.target,o=s.value.toLowerCase(),m=i.map(u=>({...u,selected:o?u.selected:!1,visibleInMenu:u.label.toLowerCase().includes(o)}));t.items=[...m],t.value=s.value}},c=l=>{const t=l.target.closest("modus-wc-autocomplete");if(t){const a=l.detail.label;a&&(t.value=a),i.forEach(o=>o.selected=!1);const s=i.find(o=>o.value===l.detail.value);s&&(s.selected=!0,t.items=[...i])}};return v(w||(w=b([`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--default"] {
    height: 400px;
  }
</style>
<script>
  const handleInputChange = (e) => {
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
      }));

      // Ensuring that a new array is created when updating items is critical to component re-render.
      autocomplete.items = [...updatedItems];
      autocomplete.value = input.value;
    }
  };

  const handleItemSelect = (e) => {
    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
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
  .noResults=`,`
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
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!1,e["no-results"],n(e.name),n(e.placeholder),e["read-only"],e.required,e["show-spinner"],n(e.size),e.value,r,c)}},d={...N},p={render:e=>{const r=t=>{const a=t.target.closest("modus-wc-autocomplete");if(a){const s=i.find(o=>o.value===t.detail.value);s&&(s.selected=!1,a.items=[...i])}},c=t=>{var s;if(!((s=t.detail)!=null&&s.target))return;const a=t.target.closest("modus-wc-autocomplete");if(a){const o=t.detail.target,m=o.value.toLowerCase(),u=i.map(I=>({...I,visibleInMenu:I.label.toLowerCase().includes(m)}));a.items=[...u],a.value=o.value}},l=t=>{const a=t.target.closest("modus-wc-autocomplete");if(a){a.value="",a.items=i.map(o=>({...o,visibleInMenu:!0}));const s=i.find(o=>o.value===t.detail.value);s&&(s.selected=!0)}};return v(y||(y=b([`
<style>
  /* Only for Storybook */
  div#story--components-forms-autocomplete--multi-select-inner {
    height: 400px;
  }
</style>
<script>
  const handleChipRemove = (e) => {
    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Update the 'selected' value of the removed item.
      const foundItem = items.find((item) => item.value === e.detail.value);
      if (foundItem) {
        foundItem.selected = false;
        autocomplete.items = [...items];
      }
    }
  };

  const handleInputChange = (e) => {
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
      }));

      // Ensuring that a new array is created when updating items is critical to component re-render.
      autocomplete.items = [...updatedItems];
      autocomplete.value = input.value;
    }
  };

  const handleItemSelect = (e) => {
    const autocomplete = (e.target
    as
    HTMLInputElement
  ).
    closest(
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
></modus-wc-autocomplete>
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!0,n(e.name),e["no-results"],n(e.placeholder),e["read-only"],e.required,n(e.size),e.value,r,c,l)}},f={render:e=>{const r=l=>{var a;if(!((a=l.detail)!=null&&a.target))return;const t=l.target.closest("modus-wc-autocomplete");if(t){const s=l.detail.target,o=s.value.toLowerCase();setTimeout(()=>{t.showSpinner=!1},2e3),t.showSpinner=!0;const m=i.map(u=>({...u,selected:o?u.selected:!1,visibleInMenu:u.label.toLowerCase().includes(o)}));t.items=[...m],t.value=s.value}},c=l=>{const t=l.target.closest("modus-wc-autocomplete");if(t){const a=l.detail.label;a&&(t.value=a),i.forEach(o=>o.selected=!1);const s=i.find(o=>o.value===l.detail.value);s&&(s.selected=!0,t.items=[...i])}};return v(C||(C=b([`
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
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!1,n(e.name),n(e.placeholder),e["read-only"],e.required,e["show-spinner"],n(e.size),e.value,r,c)}},h={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>v`<div></div>`};var M,T,E;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template
}`,...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,x,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const handleChipRemove = (e: CustomEvent<IAutocompleteItem>) => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        // Update the 'selected' value of the removed item.
        const foundItem = items.find(item => item.value === e.detail.value);
        if (foundItem) {
          foundItem.selected = false;
          autocomplete.items = [...items];
        }
      }
    };
    const handleInputChange = (e: CustomEvent<Event>) => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const input = e.detail.target as HTMLInputElement;
        const searchText = input.value.toLowerCase();

        // Create a new array, updating the values of 'selected' and 'visibleInMenu'.
        const updatedItems = items.map(item => ({
          ...item,
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
        // Reset autocomplete 'value' and update the value of 'visibleInMenu' for all items.
        autocomplete.value = '';
        autocomplete.items = items.map(item => ({
          ...item,
          visibleInMenu: true
        }));

        // Mark the user selected item as selected.
        const fruit = items.find(fruit => fruit.value === e.detail.value);
        if (fruit) {
          fruit.selected = true;
        }
      }
    };

    // prettier-ignore
    return html\`
<style>
  /* Only for Storybook */
  div#story--components-forms-autocomplete--multi-select-inner {
    height: 400px;
  }
</style>
<script>
  const handleChipRemove = (e) => {
    const autocomplete = (e.target as HTMLInputElement).closest(
      'modus-wc-autocomplete'
    );

    if (autocomplete) {
      // Update the 'selected' value of the removed item.
      const foundItem = items.find((item) => item.value === e.detail.value);
      if (foundItem) {
        foundItem.selected = false;
        autocomplete.items = [...items];
      }
    }
  };

  const handleInputChange = (e) => {
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
      }));

      // Ensuring that a new array is created when updating items is critical to component re-render.
      autocomplete.items = [...updatedItems];
      autocomplete.value = input.value;
    }
  };

  const handleItemSelect = (e) => {
    const autocomplete = (e.target
    as
    HTMLInputElement
  ).
    closest(
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
></modus-wc-autocomplete>
    \`;
  }
}`,...(L=(x=p.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var $,H,z;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(H=f.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var k,D,A;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(D=h.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const B=["Default","MultiSelect","WithSpinner","Migration"];export{d as Default,h as Migration,p as MultiSelect,f as WithSpinner,B as __namedExportsOrder,U as default};
