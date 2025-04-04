import{w as R}from"./decorator-Dt3Huotz.js";import{k as b}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var y=Object.freeze,j=Object.defineProperty,g=(e,d)=>y(j(e,"raw",{value:y(e.slice())})),L,C,M;const u=[{label:"Apple",value:"apple",visibleInMenu:!0},{label:"Banana",value:"banana",visibleInMenu:!0},{label:"Blueberry",value:"blueberry",visibleInMenu:!0},{label:"Cherry",value:"cherry",visibleInMenu:!0},{label:"Grape",value:"grape",visibleInMenu:!0},{label:"Lemon",value:"lemon",visibleInMenu:!0},{label:"Orange",value:"orange",visibleInMenu:!0},{label:"Peach",value:"peach",visibleInMenu:!0},{label:"Pear",value:"pear",visibleInMenu:!0},{label:"Strawberry",value:"strawberry",visibleInMenu:!0}],W={title:"Components/Forms/Autocomplete",component:"modus-wc-autocomplete",args:{bordered:!0,"debounce-ms":300,disabled:!1,items:u,label:"Label","leave-menu-open":!1,"min-chars":0,"multi-select":!1,"no-results":{ariaLabel:"No results found",label:"No results found",subLabel:"Check spelling or try a different keyword"},size:"md",value:""},argTypes:{items:{description:"Array of items for the autocomplete component",table:{type:{detail:`
            Interface: IAutocompleteItem
            Properties:
            - label (string): The display text shown for the autocomplete item
            - selected (boolean, optional): Whether the item is currently selected
            - value (string): The unique value identifier for the item
            - visibleInMenu (boolean): Whether the item should be shown in the dropdown menu
          `}}},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[R],parameters:{actions:{handles:["chipRemove","inputBlur","inputChange","inputFocus","itemSelect"]}}},N={render:e=>{const d=a=>{var t;if(!((t=a.detail)!=null&&t.target))return;const s=a.target.closest("modus-wc-autocomplete");if(s){const i=a.detail.target,l=i.value.toLowerCase(),o=u.map(c=>({...c,selected:l?c.selected:!1,visibleInMenu:c.label.toLowerCase().includes(l)}));s.items=[...o],s.value=i.value}},m=a=>{const s=a.target.closest("modus-wc-autocomplete");if(s){const t=a.detail.label;t&&(s.value=t),u.forEach(l=>l.selected=!1);const i=u.find(l=>l.value===a.detail.value);i&&(i.selected=!0,s.items=[...u])}};return b(L||(L=g([`
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
  size=`,`
  value=`,`
  @inputChange=`,`
  @itemSelect=`,`
></modus-wc-autocomplete>
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!1,e["no-results"],n(e.name),n(e.placeholder),e["read-only"],e.required,n(e.size),e.value,d,m)}},p={...N},v={render:e=>{const d=s=>{const t=s.target.closest("modus-wc-autocomplete");if(t){const i=u.find(l=>l.value===s.detail.value);i&&(i.selected=!1,t.items=[...u])}},m=s=>{var i;if(!((i=s.detail)!=null&&i.target))return;const t=s.target.closest("modus-wc-autocomplete");if(t){const l=s.detail.target,o=l.value.toLowerCase(),c=u.map(r=>({...r,visibleInMenu:r.label.toLowerCase().includes(o)}));t.items=[...c],t.value=l.value}},a=s=>{const t=s.target.closest("modus-wc-autocomplete");if(t){t.value="",t.items=u.map(l=>({...l,visibleInMenu:!0}));const i=u.find(l=>l.value===s.detail.value);i&&(i.selected=!0)}};return b(C||(C=g([`
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
    `])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),e.items,n(e.label),e["leave-menu-open"],e["min-chars"],!0,n(e.name),e["no-results"],n(e.placeholder),e["read-only"],e.required,n(e.size),e.value,d,m,a)}},f={render:e=>{const d=s=>{var i;if(!((i=s.detail)!=null&&i.target))return;const t=s.target.closest("modus-wc-autocomplete");if(t){const l=s.detail.target.value,o=t==null?void 0:t.querySelectorAll("li");l===""&&(o==null||o.forEach(r=>r.classList.remove("selected")));let c=0;Array.from(o??[]).forEach(r=>{var I,w;(((w=(I=r.querySelector(".title"))==null?void 0:I.textContent)==null?void 0:w.toLowerCase())||"").includes(l.toLowerCase())?(r.classList.remove("hidden"),t.noResults={ariaLabel:"",label:"",subLabel:""}):(r.classList.add("hidden"),c++,c===(o==null?void 0:o.length)&&(t.noResults=e["no-results"]))})}},m=s=>{const t=s.target.closest("modus-wc-autocomplete");t&&(t.noResults={ariaLabel:"",label:"",subLabel:""})},a=s=>{var i;const t=s.target.closest("modus-wc-autocomplete");if(t){const l=(i=s.detail.target)==null?void 0:i.value;t.value=l;const o=t==null?void 0:t.querySelectorAll("li");o==null||o.forEach(c=>c.classList.remove("selected")),o==null||o.forEach(c=>{var r;c.contains(s.target)&&(c.classList.add("selected"),t.value=(r=c.querySelector(".title"))==null?void 0:r.textContent)})}};return b(M||(M=g([`
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
`])),e.bordered,n(e["custom-class"]),n(e["debounce-ms"]),e.disabled,n(e["input-id"]),n(e["input-tab-index"]),n(e.label),e["leave-menu-open"],e["min-chars"],!1,n(e.name),e["no-results"],n(e.placeholder),e["read-only"],e.required,n(e.size),e.value,m,d,a,!0,n(e.size),a,!0,n(e.size),a,!0,n(e.size),a,!0,n(e.size),a,!0,n(e.size))}},h={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>b`<div></div>`};var x,T,S;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template
}`,...(S=(T=p.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,$,z;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=($=v.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var k,D,q;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(q=(D=f.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var H,P,A;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(A=(P=h.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const G=["Default","MultiSelect","CustomMenuItems","Migration"];export{f as CustomMenuItems,p as Default,h as Migration,v as MultiSelect,G as __namedExportsOrder,W as default};
