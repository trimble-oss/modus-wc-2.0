import{w as _}from"./decorator-Dt3Huotz.js";import{k as p}from"./lit-element-DVRzCIa_.js";import{t as s}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var C=Object.freeze,U=Object.defineProperty,I=(e,m)=>C(U(e,"raw",{value:C(e.slice())})),L,M,T,x;const r=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pear",value:"pear",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],V={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:r,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,"show-spinner":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[_],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},B={render:e=>{const m=l=>{var t;if(!((t=l.detail)!=null&&t.target))return;const n=l.target.closest("modus-wc-autocomplete");if(n){const a=l.detail.target,o=a.value.toLowerCase(),i=r.map(c=>({...c,selected:o?c.selected:!1,visibleInMenu:c.label.toLowerCase().includes(o)}));n.items=[...i],n.value=a.value}},d=l=>{const n=l.target.closest("modus-wc-autocomplete");if(n){const t=l.detail.label;t&&(n.value=t),r.forEach(o=>o.selected=!1);const a=r.find(o=>o.value===l.detail.value);a&&(a.selected=!0,n.items=[...r])}};return p(L||(L=I([`
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
    `])),e.bordered,s(e["custom-class"]),s(e["debounce-ms"]),e.disabled,s(e["input-id"]),s(e["input-tab-index"]),e.items,s(e.label),e["leave-menu-open"],e["min-chars"],!1,e["no-results"],s(e.name),s(e.placeholder),e["read-only"],e.required,e["show-spinner"],s(e.size),e.value,m,d)}},v={...B},f={render:e=>{const m=n=>{const t=n.target.closest("modus-wc-autocomplete");if(t){const a=r.find(o=>o.value===n.detail.value);a&&(a.selected=!1,t.items=[...r])}},d=n=>{var a;if(!((a=n.detail)!=null&&a.target))return;const t=n.target.closest("modus-wc-autocomplete");if(t){const o=n.detail.target,i=o.value.toLowerCase(),c=r.map(u=>({...u,visibleInMenu:u.label.toLowerCase().includes(i)}));t.items=[...c],t.value=o.value}},l=n=>{const t=n.target.closest("modus-wc-autocomplete");if(t){t.value="",t.items=r.map(o=>({...o,visibleInMenu:!0}));const a=r.find(o=>o.value===n.detail.value);a&&(a.selected=!0)}};return p(M||(M=I([`
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
  ?show-spinner=`,`
  size=`,`
  value=`,`
  @chipRemove=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),e.bordered,s(e["custom-class"]),s(e["debounce-ms"]),e.disabled,s(e["input-id"]),s(e["input-tab-index"]),e.items,s(e.label),e["leave-menu-open"],e["min-chars"],!0,s(e.name),e["no-results"],s(e.placeholder),e["read-only"],e.required,e["show-spinner"],s(e.size),e.value,m,d,l)}},h={render:e=>{const m=l=>{var t;if(!((t=l.detail)!=null&&t.target))return;const n=l.target.closest("modus-wc-autocomplete");if(n){const a=l.detail.target,o=a.value.toLowerCase();setTimeout(()=>{n.showSpinner=!1},2e3),n.showSpinner=!0;const i=r.map(c=>({...c,selected:o?c.selected:!1,visibleInMenu:c.label.toLowerCase().includes(o)}));n.items=[...i],n.value=a.value}},d=l=>{const n=l.target.closest("modus-wc-autocomplete");if(n){const t=l.detail.label;t&&(n.value=t),r.forEach(o=>o.selected=!1);const a=r.find(o=>o.value===l.detail.value);a&&(a.selected=!0,n.items=[...r])}};return p(T||(T=I([`
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
    `])),e.bordered,s(e["custom-class"]),s(e["debounce-ms"]),e.disabled,s(e["input-id"]),s(e["input-tab-index"]),e.items,s(e.label),e["leave-menu-open"],e["min-chars"],!1,s(e.name),s(e.placeholder),e["read-only"],e.required,e["show-spinner"],s(e.size),e.value,m,d)}},b={render:e=>{const m=n=>{var a;if(!((a=n.detail)!=null&&a.target))return;const t=n.target.closest("modus-wc-autocomplete");if(t){const o=n.detail.target.value,i=t==null?void 0:t.querySelectorAll("li");o===""&&(i==null||i.forEach(u=>u.classList.remove("selected")));let c=0;Array.from(i??[]).forEach(u=>{var w,y;(((y=(w=u.querySelector(".title"))==null?void 0:w.textContent)==null?void 0:y.toLowerCase())||"").includes(o.toLowerCase())?(u.classList.remove("hidden"),t.noResults={ariaLabel:"",label:"",subLabel:""}):(u.classList.add("hidden"),c++,c===(i==null?void 0:i.length)&&(t.noResults=e["no-results"]))})}},d=n=>{const t=n.target.closest("modus-wc-autocomplete");t&&(t.noResults={ariaLabel:"",label:"",subLabel:""})},l=n=>{var a;const t=n.target.closest("modus-wc-autocomplete");if(t){const o=(a=n.detail.target)==null?void 0:a.value;t.value=o;const i=t==null?void 0:t.querySelectorAll("li");i==null||i.forEach(c=>c.classList.remove("selected")),i==null||i.forEach(c=>{var u;c.contains(n.target)&&(c.classList.add("selected"),t.value=(u=c.querySelector(".title"))==null?void 0:u.textContent)})}};return p(x||(x=I([`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--custom-menu-items"] {
    height: 400px;
  }
  .list-item {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
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
<script>
    const handleInputChange = (e) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');

        Array.from(allLiItems ?? []).forEach((menuItem) => {
          const label =
            menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
          } else {
            menuItem.classList.remove('hidden');
          }
        });
      }
    };

    const handleItemSelect = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;

        autocomplete.value = searchText;

        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        allLiItems?.forEach((liItem) => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')
              ?.textContent as string;
          }
        });
      }
    };
<\/script>
<modus-wc-autocomplete
  aria-label="Custom items autocomplete"
  ?bordered=`,`
  custom-class=`,`
  debounce-ms=`,`
  ?disabled=`,`
  input-id=`,`
  input-tab-index=`,`
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
  @inputFocus=`,`
  @inputChange=`,`
>
  <div slot="menu-items" id="custom-menu-items">
    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5166/5166970.png"
          alt="Project 1"
        />
        <div>
          <div class="title">Project 1</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
          alt="Project 2"
        />
        <div>
          <div class="title">Project 2</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1659/1659067.png"
          alt="Project 3"
        />
        <div>
          <div class="title">Project 3</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1420/1420462.png"
          alt="Project 4"
        />
        <div>
          <div class="title">Project 4</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=`,`>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/12959/12959935.png"
          alt="Project 5"
        />
        <div>
          <div class="title">Project 5</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=`,`
            name="check"
            size=`,`
          />
        </div>
      </div>
    </li>
  </div>
</modus-wc-autocomplete>
`])),e.bordered,s(e["custom-class"]),s(e["debounce-ms"]),e.disabled,s(e["input-id"]),s(e["input-tab-index"]),s(e.label),e["leave-menu-open"],e["min-chars"],!1,s(e.name),e["no-results"],s(e.placeholder),e["read-only"],e.required,s(e.size),e.value,d,m,l,!0,s(e.size),l,!0,s(e.size),l,!0,s(e.size),l,!0,s(e.size),l,!0,s(e.size))}},g={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>p`<div></div>`};var E,S,$;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template
}`,...($=(S=v.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var z,k,D;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  ?show-spinner=\${args['show-spinner']}
  size=\${ifDefined(args.size)}
  value=\${args.value}
  @chipRemove=\${handleChipRemove}
  @inputChange=\${handleInputChange}
  @itemSelect=\${handleItemSelect}
></modus-wc-autocomplete>
    \`;
  }
}`,...(D=(k=f.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var H,q,P;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(q=h.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var A,R,j;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const handleInputChange = e => {
      if (!e.detail?.target) return;
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');
        if (searchText === '') {
          allLiItems?.forEach(liItem => liItem.classList.remove('selected'));
        }
        let itemCount = 0;
        Array.from(allLiItems ?? []).forEach(menuItem => {
          const label = menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
            itemCount++;
            if (itemCount === allLiItems?.length) {
              autocomplete.noResults = args['no-results'];
            }
          } else {
            menuItem.classList.remove('hidden');
            autocomplete.noResults = {
              ariaLabel: '',
              label: '',
              subLabel: ''
            };
          }
        });
      }
    };
    const handleFocus = e => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        autocomplete.noResults = {
          ariaLabel: '',
          label: '',
          subLabel: ''
        };
      }
    };
    const handleItemSelect = e => {
      const autocomplete = (e.target as HTMLInputElement).closest('modus-wc-autocomplete');
      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;
        autocomplete.value = searchText;
        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach(liItem => liItem.classList.remove('selected'));
        allLiItems?.forEach(liItem => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')?.textContent as string;
          }
        });
      }
    };

    // prettier-ignore
    return html\`
<style>
  /* Only for Storybook */
  div[id^="story--components-forms-autocomplete--custom-menu-items"] {
    height: 400px;
  }
  .list-item {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #ccc;
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
<script>
    const handleInputChange = (e) => {
      if (!e.detail?.target) return;

      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement).value;

        // Create a new array, updating the selected values.
        const allLiItems = autocomplete?.querySelectorAll('li');

        Array.from(allLiItems ?? []).forEach((menuItem) => {
          const label =
            menuItem.querySelector('.title')?.textContent?.toLowerCase() || '';
          if (!label.includes(searchText.toLowerCase())) {
            menuItem.classList.add('hidden');
          } else {
            menuItem.classList.remove('hidden');
          }
        });
      }
    };

    const handleItemSelect = (e) => {
      const autocomplete = (e.target as HTMLInputElement).closest(
        'modus-wc-autocomplete'
      );

      if (autocomplete) {
        const searchText = (e.detail.target as HTMLInputElement)?.value;

        autocomplete.value = searchText;

        const allLiItems = autocomplete?.querySelectorAll('li');
        allLiItems?.forEach((liItem) => liItem.classList.remove('selected'));
        allLiItems?.forEach((liItem) => {
          if (liItem.contains(e.target as HTMLElement)) {
            liItem.classList.add('selected');
            autocomplete.value = liItem.querySelector('.title')
              ?.textContent as string;
          }
        });
      }
    };
<\/script>
<modus-wc-autocomplete
  aria-label="Custom items autocomplete"
  ?bordered=\${args.bordered}
  custom-class=\${ifDefined(args['custom-class'])}
  debounce-ms=\${ifDefined(args['debounce-ms'])}
  ?disabled=\${args.disabled}
  input-id=\${ifDefined(args['input-id'])}
  input-tab-index=\${ifDefined(args['input-tab-index'])}
  label=\${ifDefined(args.label)}
  ?leave-menu-open=\${args['leave-menu-open']}
  min-chars=\${args['min-chars']}
  ?multi-select=\${false}
  name=\${ifDefined(args.name)}
  .noResults=\${args['no-results']}
  placeholder=\${ifDefined(args.placeholder)}
  ?read-only=\${args['read-only']}
  ?required=\${args.required}
  size=\${ifDefined(args.size)}
  value=\${args.value}
  @inputFocus=\${handleFocus}
  @inputChange=\${handleInputChange}
>
  <div slot="menu-items" id="custom-menu-items">
    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5166/5166970.png"
          alt="Project 1"
        />
        <div>
          <div class="title">Project 1</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
          alt="Project 2"
        />
        <div>
          <div class="title">Project 2</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1659/1659067.png"
          alt="Project 3"
        />
        <div>
          <div class="title">Project 3</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1420/1420462.png"
          alt="Project 4"
        />
        <div>
          <div class="title">Project 4</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>

    <li class="list-item" @click=\${handleItemSelect}>
      <div class="item-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/12959/12959935.png"
          alt="Project 5"
        />
        <div>
          <div class="title">Project 5</div>
          <div class="description">Description</div>
        </div>
        <div class="modus-wc-menu-item-selected-icon">
          <modus-wc-icon
            decorative=\${true}
            name="check"
            size=\${ifDefined(args.size)}
          />
        </div>
      </div>
    </li>
  </div>
</modus-wc-autocomplete>
\`;
  }
}`,...(j=(R=b.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var F,N,O;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const X=["Default","MultiSelect","WithSpinner","CustomMenuItems","Migration"];export{b as CustomMenuItems,v as Default,g as Migration,f as MultiSelect,h as WithSpinner,X as __namedExportsOrder,V as default};
