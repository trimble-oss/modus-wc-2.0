import{w as P}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-CucEn6F2.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const z={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"custom-class":"","search-placeholder":"Search...","include-search":!0,"include-actions":!0},argTypes:{"search-placeholder":{control:{type:"text"},table:{category:"Content Tree"}},"include-search":{control:{type:"boolean"},table:{category:"Content Tree"}},"include-actions":{control:{type:"boolean"},table:{category:"Content Tree"}}},decorators:[P],parameters:{actions:{handles:["itemSelect","treeActionClick","selectionsChange"]}}},o={parameters:{docs:{description:{story:"A basic content tree with hierarchical structure. Items can be expanded and collapsed to navigate through the tree."},source:{code:`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Report.pdf" value="report"></modus-wc-tree-item>
        <modus-wc-tree-item label="Proposal.docx" value="proposal"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Client Work" has-subtree="true" value="client-work">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item label="Design Mockups" value="mockups"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`}}},render:e=>r`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            .hasSubtree=${!0}
            value="documents"
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item label="Report.pdf" value="report">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Proposal.docx" value="proposal">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${!0}
            value="projects"
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item label="Website Redesign" value="website">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Client Work"
                .hasSubtree=${!0}
                value="client-work"
              >
                <modus-wc-tree-view .isSubList=${!0}>
                  <modus-wc-tree-item label="Design Mockups" value="mockups">
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item label="Resources" value="resources">
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `},i={name:"Empty State",parameters:{docs:{description:{story:"This example shows the content tree when no items are present. An empty state message is displayed."},source:{code:`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
</modus-wc-content-tree>
`}}},render:e=>r`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
      >
      </modus-wc-content-tree>
    `},n={name:"Disabled Items",parameters:{docs:{description:{story:"This example demonstrates tree items with disabled state. Disabled items cannot be selected or interacted with."},source:{code:`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Active Item" value="active" selected="true">
      <modus-wc-icon slot="start-icon" name="description" size="sm"></modus-wc-icon>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Disabled Item" value="disabled" disabled="true"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Active Project" value="active-project"></modus-wc-tree-item>
        <modus-wc-tree-item label="Disabled Project" value="disabled-project" disabled="true"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`}}},render:e=>r`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Active Item"
            value="active"
            .selected=${!0}
          >
            <modus-wc-icon
              slot="start-icon"
              name="description"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Disabled Item"
            value="disabled"
            .disabled=${!0}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${!0}
            value="projects"
          >
            <modus-wc-tree-view is-sub-list="true">
              <modus-wc-tree-item label="Active Project" value="active-project">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Disabled Project"
                value="disabled-project"
                .disabled=${!0}
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `},u={name:"Checkbox Selection",parameters:{docs:{description:{story:"This example demonstrates tree items with checkboxes for multi-selection. Selecting a parent item will select all its children, and vice versa."},source:{code:`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item checkbox="true" label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Reports" has-subtree="true" value="reports">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Financial" has-subtree="true" value="financial">
              <modus-wc-tree-view is-sub-list="true">
                <modus-wc-tree-item checkbox="true" label="Q1 Report" value="q1-report"></modus-wc-tree-item>
                <modus-wc-tree-item checkbox="true" label="Q2 Report" value="q2-report"></modus-wc-tree-item>
              </modus-wc-tree-view>
            </modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Annual Report" value="annual-report"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Presentations" has-subtree="true" value="presentations">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Team Meeting" value="team-meeting"></modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Client Proposal" value="client-proposal"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Active" has-subtree="true" value="active">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Project Alpha" has-subtree="true" value="project-alpha">
              <modus-wc-tree-view is-sub-list="true">
                <modus-wc-tree-item checkbox="true" label="Source Code" value="source-code"></modus-wc-tree-item>
                <modus-wc-tree-item checkbox="true" label="Documentation" value="documentation"></modus-wc-tree-item>
              </modus-wc-tree-view>
            </modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Project Beta" value="project-beta"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Completed" value="completed"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Resources" has-subtree="true" value="resources">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Templates" value="templates"></modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Guidelines" value="guidelines"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Archive" value="archive"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`}}},render:e=>r`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            checkbox=${!0}
            label="Documents"
            .hasSubtree=${!0}
            value="documents"
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item
                checkbox=${!0}
                label="Reports"
                .hasSubtree=${!0}
                value="reports"
              >
                <modus-wc-tree-view .isSubList=${!0}>
                  <modus-wc-tree-item
                    checkbox=${!0}
                    label="Financial"
                    .hasSubtree=${!0}
                    value="financial"
                  >
                    <modus-wc-tree-view .isSubList=${!0}>
                      <modus-wc-tree-item
                        checkbox=${!0}
                        label="Q1 Report"
                        value="q1-report"
                      >
                      </modus-wc-tree-item>
                      <modus-wc-tree-item
                        checkbox=${!0}
                        label="Q2 Report"
                        value="q2-report"
                      >
                      </modus-wc-tree-item>
                    </modus-wc-tree-view>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=${!0}
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=${!0}
                label="Presentations"
                .hasSubtree=${!0}
                value="presentations"
              >
                <modus-wc-tree-view .isSubList=${!0}>
                  <modus-wc-tree-item
                    checkbox=${!0}
                    label="Team Meeting"
                    value="team-meeting"
                  >
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=${!0}
                    label="Client Proposal"
                    value="client-proposal"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            checkbox=${!0}
            label="Projects"
            .hasSubtree=${!0}
            value="projects"
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item
                checkbox=${!0}
                label="Active"
                .hasSubtree=${!0}
                value="active"
              >
                <modus-wc-tree-view .isSubList=${!0}>
                  <modus-wc-tree-item
                    checkbox=${!0}
                    label="Project Alpha"
                    .hasSubtree=${!0}
                    value="project-alpha"
                  >
                    <modus-wc-tree-view .isSubList=${!0}>
                      <modus-wc-tree-item
                        checkbox=${!0}
                        label="Source Code"
                        value="source-code"
                      >
                      </modus-wc-tree-item>
                      <modus-wc-tree-item
                        checkbox=${!0}
                        label="Documentation"
                        value="documentation"
                      >
                      </modus-wc-tree-item>
                    </modus-wc-tree-view>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=${!0}
                    label="Project Beta"
                    value="project-beta"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=${!0}
                label="Completed"
                value="completed"
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            checkbox=${!0}
            label="Resources"
            .hasSubtree=${!0}
            value="resources"
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item
                checkbox=${!0}
                label="Templates"
                value="templates"
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=${!0}
                label="Guidelines"
                value="guidelines"
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item checkbox=${!0} label="Archive" value="archive">
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `},a={name:"With Actions",parameters:{docs:{description:{story:"This example demonstrates tree items with custom actions. Actions can be used to perform operations like toggling visibility or deleting items."},source:{code:`
<script>
const getTreeItemActions = (isDisabled) => [
  {
    id: 'toggle-visibility',
    label: isDisabled ? 'Hidden' : 'Visible',
    icon: isDisabled ? 'visibility_off' : 'visibility_on',
    ariaLabel: isDisabled ? 'Set item to visible' : 'Set item to hidden',
    size: 'sm',
  },
  {
    id: 'delete',
    label: 'Delete',
    icon: 'delete',
    ariaLabel: 'Delete item',
    size: 'sm',
  },
];

const handleTreeActionClick = (event) => {
  const actionSource = event.target;
  const treeItem = actionSource.closest('modus-wc-tree-item');

  if (!treeItem) return;

  if (event.detail.actionId === 'delete') {
    treeItem.remove();
    return;
  }

  if (event.detail.actionId !== 'toggle-visibility') return;

  treeItem.disabled = !treeItem.disabled;
  treeItem.treeItemActions = getTreeItemActions(!!treeItem.disabled);
};
<\/script>

<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>

<script>
const contentTree = document.querySelector('modus-wc-content-tree');
const treeItems = contentTree.querySelectorAll('modus-wc-tree-item');
treeItems.forEach(item => {
  item.treeItemActions = getTreeItemActions(false);
});

contentTree.addEventListener('treeActionClick', handleTreeActionClick);
<\/script>
`}}},render:e=>{const c=t=>[{id:"toggle-visibility",label:t?"Hidden":"Visible",icon:t?"visibility_off":"visibility_on",ariaLabel:t?"Set item to visible":"Set item to hidden",size:"sm"},{id:"delete",label:"Delete",icon:"delete",ariaLabel:"Delete item",size:"sm"}],C=t=>{const s=t.target.closest("modus-wc-tree-item");if(s){if(t.detail.actionId==="delete"){s.remove();return}t.detail.actionId==="toggle-visibility"&&(s.disabled=!s.disabled,s.treeItemActions=c(s.disabled))}};return r`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
        @treeActionClick=${C}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            value="documents"
            .treeItemActions=${c(!1)}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            value="projects"
            .treeItemActions=${c(!1)}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=${c(!1)}
          >
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `}},m={name:"API Reference",parameters:{docs:{description:{story:`
### Props

| Name              | Type       | Default      | Description                                       |
|-------------------|------------|--------------|---------------------------------------------------|
| customClass       | \`string\` | \`''\`       | Additional CSS class to apply to the component    |
| searchPlaceholder | \`string\` | \`'Search...'\` | Placeholder text for the search input          |
| includeSearch     | \`boolean\` | \`true\`    | Whether to display the search functionality       |
| includeActions    | \`boolean\` | \`true\`    | Whether to display action buttons for tree items  |

---

### Tree View

#### Props

| Name        | Type       | Default   | Description                                           |
|-------------|------------|-----------|-------------------------------------------------------|
| customClass | \`string\` | \`''\`    | Additional CSS class to apply to the tree view        |
| isSubList   | \`boolean\` | \`false\` | Whether the tree view is a sublist of another tree item |

---

### Tree Item

#### Props

| Name            | Type                                   | Default   | Description                                                  |
|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|
| label           | \`string\`                             | -         | The label text for the tree item (required)                  |
| value           | \`string\`                             | \`''\`    | The value associated with the tree item                      |
| disabled        | \`boolean\`                            | \`false\` | Whether the tree item is disabled                            |
| checkbox        | \`boolean\`                            | \`false\` | Whether to display a checkbox for the tree item              |
| selected        | \`boolean\`                            | -         | Whether the tree item is selected (mutable, reflected)       |
| checked         | \`boolean\`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |
| hasSubtree      | \`boolean\`                            | \`false\` | Whether the tree item has a subtree                          |
| treeItemActions | \`ITreeItemActions[]\`                 | -         | Array of actions to display for the tree item                |
| size            | \`'xs' | 'sm' | 'md' | 'lg'\`    | \`'xs'\`  | The size of the tree item                                    |
| customClass     | \`string\`                             | \`''\`    | Additional CSS class to apply to the tree item               |

#### Events

| Name             | Payload                          | Description                                     |
|------------------|----------------------------------|-------------------------------------------------|
| itemSelect       | \`{ value: string }\`            | Emitted when a tree item is selected            |
| selectionsChange | \`{ selectedValues: string[] }\` | Emitted when the selection state changes        |

#### Methods

| Name            | Type                      | Description                |
|-----------------|---------------------------|----------------------------|
| collapseSubTree | \`() => Promise<void>\`   | Collapses the subtree      |
| expandSubTree   | \`() => Promise<void>\`   | Expands the subtree        |

---

### Tree Actions

#### Props

| Name    | Type                                | Default  | Description                          |
|---------|-------------------------------------|----------|--------------------------------------|
| actions | \`ITreeItemActions[]\`              | -        | Array of actions to display          |
| size    | \`'xs' | 'sm' | 'md' | 'lg'\` | \`'xs'\` | The size of the action buttons       |

#### Events

| Name            | Payload                                   | Description                                |
|-----------------|-------------------------------------------|--------------------------------------------|
| treeActionClick | \`{ actionId: string; actionName: string }\` | Emitted when an action is clicked       |
| dropdownOpened  | \`HTMLElement\`                           | Emitted when the dropdown is opened        |

---

### Interfaces

#### ITreeItemActions

\`\`\`typescript
interface ITreeItemActions {
  id: string;                           // Unique identifier for the action
  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'
  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon
  label: string;                        // Text label for the action
  ariaLabel?: string;                   // Optional label for accessibility
  disabled?: boolean;                   // Optional flag to disable the action
}
\`\`\`
`}},controls:{disable:!0}},render:()=>r``};var l,d,w;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A basic content tree with hierarchical structure. Items can be expanded and collapsed to navigate through the tree.'
      },
      source: {
        code: \`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Report.pdf" value="report"></modus-wc-tree-item>
        <modus-wc-tree-item label="Proposal.docx" value="proposal"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Client Work" has-subtree="true" value="client-work">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item label="Design Mockups" value="mockups"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
\`
      }
    }
  },
  render: args => {
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        customClass=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            .hasSubtree=\${true}
            value="documents"
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item label="Report.pdf" value="report">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Proposal.docx" value="proposal">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=\${true}
            value="projects"
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item label="Website Redesign" value="website">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Client Work"
                .hasSubtree=\${true}
                value="client-work"
              >
                <modus-wc-tree-view .isSubList=\${true}>
                  <modus-wc-tree-item label="Design Mockups" value="mockups">
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item label="Resources" value="resources">
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    \`;
  }
}`,...(w=(d=o.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};var b,h,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Empty State',
  parameters: {
    docs: {
      description: {
        story: 'This example shows the content tree when no items are present. An empty state message is displayed.'
      },
      source: {
        code: \`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
</modus-wc-content-tree>
\`
      }
    }
  },
  render: args => {
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        customClass=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
      >
      </modus-wc-content-tree>
    \`;
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var p,$,S;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Disabled Items',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates tree items with disabled state. Disabled items cannot be selected or interacted with.'
      },
      source: {
        code: \`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Active Item" value="active" selected="true">
      <modus-wc-icon slot="start-icon" name="description" size="sm"></modus-wc-icon>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Disabled Item" value="disabled" disabled="true"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Active Project" value="active-project"></modus-wc-tree-item>
        <modus-wc-tree-item label="Disabled Project" value="disabled-project" disabled="true"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
\`
      }
    }
  },
  render: args => {
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        customClass=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Active Item"
            value="active"
            .selected=\${true}
          >
            <modus-wc-icon
              slot="start-icon"
              name="description"
              size="sm"
            ></modus-wc-icon>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Disabled Item"
            value="disabled"
            .disabled=\${true}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=\${true}
            value="projects"
          >
            <modus-wc-tree-view is-sub-list="true">
              <modus-wc-tree-item label="Active Project" value="active-project">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Disabled Project"
                value="disabled-project"
                .disabled=\${true}
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    \`;
  }
}`,...(S=($=n.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var g,k,x;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Checkbox Selection',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates tree items with checkboxes for multi-selection. Selecting a parent item will select all its children, and vice versa.'
      },
      source: {
        code: \`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item checkbox="true" label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Reports" has-subtree="true" value="reports">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Financial" has-subtree="true" value="financial">
              <modus-wc-tree-view is-sub-list="true">
                <modus-wc-tree-item checkbox="true" label="Q1 Report" value="q1-report"></modus-wc-tree-item>
                <modus-wc-tree-item checkbox="true" label="Q2 Report" value="q2-report"></modus-wc-tree-item>
              </modus-wc-tree-view>
            </modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Annual Report" value="annual-report"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Presentations" has-subtree="true" value="presentations">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Team Meeting" value="team-meeting"></modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Client Proposal" value="client-proposal"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Active" has-subtree="true" value="active">
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item checkbox="true" label="Project Alpha" has-subtree="true" value="project-alpha">
              <modus-wc-tree-view is-sub-list="true">
                <modus-wc-tree-item checkbox="true" label="Source Code" value="source-code"></modus-wc-tree-item>
                <modus-wc-tree-item checkbox="true" label="Documentation" value="documentation"></modus-wc-tree-item>
              </modus-wc-tree-view>
            </modus-wc-tree-item>
            <modus-wc-tree-item checkbox="true" label="Project Beta" value="project-beta"></modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Completed" value="completed"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Resources" has-subtree="true" value="resources">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item checkbox="true" label="Templates" value="templates"></modus-wc-tree-item>
        <modus-wc-tree-item checkbox="true" label="Guidelines" value="guidelines"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item checkbox="true" label="Archive" value="archive"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
\`
      }
    }
  },
  render: args => {
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        customClass=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            checkbox=\${true}
            label="Documents"
            .hasSubtree=\${true}
            value="documents"
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item
                checkbox=\${true}
                label="Reports"
                .hasSubtree=\${true}
                value="reports"
              >
                <modus-wc-tree-view .isSubList=\${true}>
                  <modus-wc-tree-item
                    checkbox=\${true}
                    label="Financial"
                    .hasSubtree=\${true}
                    value="financial"
                  >
                    <modus-wc-tree-view .isSubList=\${true}>
                      <modus-wc-tree-item
                        checkbox=\${true}
                        label="Q1 Report"
                        value="q1-report"
                      >
                      </modus-wc-tree-item>
                      <modus-wc-tree-item
                        checkbox=\${true}
                        label="Q2 Report"
                        value="q2-report"
                      >
                      </modus-wc-tree-item>
                    </modus-wc-tree-view>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=\${true}
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=\${true}
                label="Presentations"
                .hasSubtree=\${true}
                value="presentations"
              >
                <modus-wc-tree-view .isSubList=\${true}>
                  <modus-wc-tree-item
                    checkbox=\${true}
                    label="Team Meeting"
                    value="team-meeting"
                  >
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=\${true}
                    label="Client Proposal"
                    value="client-proposal"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            checkbox=\${true}
            label="Projects"
            .hasSubtree=\${true}
            value="projects"
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item
                checkbox=\${true}
                label="Active"
                .hasSubtree=\${true}
                value="active"
              >
                <modus-wc-tree-view .isSubList=\${true}>
                  <modus-wc-tree-item
                    checkbox=\${true}
                    label="Project Alpha"
                    .hasSubtree=\${true}
                    value="project-alpha"
                  >
                    <modus-wc-tree-view .isSubList=\${true}>
                      <modus-wc-tree-item
                        checkbox=\${true}
                        label="Source Code"
                        value="source-code"
                      >
                      </modus-wc-tree-item>
                      <modus-wc-tree-item
                        checkbox=\${true}
                        label="Documentation"
                        value="documentation"
                      >
                      </modus-wc-tree-item>
                    </modus-wc-tree-view>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item
                    checkbox=\${true}
                    label="Project Beta"
                    value="project-beta"
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=\${true}
                label="Completed"
                value="completed"
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            checkbox=\${true}
            label="Resources"
            .hasSubtree=\${true}
            value="resources"
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item
                checkbox=\${true}
                label="Templates"
                value="templates"
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                checkbox=\${true}
                label="Guidelines"
                value="guidelines"
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item checkbox=\${true} label="Archive" value="archive">
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    \`;
  }
}`,...(x=(k=u.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var A,f,I;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'With Actions',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates tree items with custom actions. Actions can be used to perform operations like toggling visibility or deleting items.'
      },
      source: {
        code: \`
<script>
const getTreeItemActions = (isDisabled) => [
  {
    id: 'toggle-visibility',
    label: isDisabled ? 'Hidden' : 'Visible',
    icon: isDisabled ? 'visibility_off' : 'visibility_on',
    ariaLabel: isDisabled ? 'Set item to visible' : 'Set item to hidden',
    size: 'sm',
  },
  {
    id: 'delete',
    label: 'Delete',
    icon: 'delete',
    ariaLabel: 'Delete item',
    size: 'sm',
  },
];

const handleTreeActionClick = (event) => {
  const actionSource = event.target;
  const treeItem = actionSource.closest('modus-wc-tree-item');

  if (!treeItem) return;

  if (event.detail.actionId === 'delete') {
    treeItem.remove();
    return;
  }

  if (event.detail.actionId !== 'toggle-visibility') return;

  treeItem.disabled = !treeItem.disabled;
  treeItem.treeItemActions = getTreeItemActions(!!treeItem.disabled);
};
<\/script>

<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>

<script>
const contentTree = document.querySelector('modus-wc-content-tree');
const treeItems = contentTree.querySelectorAll('modus-wc-tree-item');
treeItems.forEach(item => {
  item.treeItemActions = getTreeItemActions(false);
});

contentTree.addEventListener('treeActionClick', handleTreeActionClick);
<\/script>
\`
      }
    }
  },
  render: args => {
    const getTreeItemActions = (isDisabled: boolean) => [{
      id: 'toggle-visibility',
      label: isDisabled ? 'Hidden' : 'Visible',
      icon: isDisabled ? 'visibility_off' : 'visibility_on',
      ariaLabel: isDisabled ? 'Set item to visible' : 'Set item to hidden',
      size: 'sm'
    }, {
      id: 'delete',
      label: 'Delete',
      icon: 'delete',
      ariaLabel: 'Delete item',
      size: 'sm'
    }];
    const handleTreeActionClick = (event: CustomEvent<{
      actionId: string;
    }>) => {
      const actionSource = event.target as HTMLElement;
      const treeItem = actionSource.closest('modus-wc-tree-item') as ITreeItemElement;
      if (!treeItem) return;
      if (event.detail.actionId === 'delete') {
        treeItem.remove();
        return;
      }
      if (event.detail.actionId !== 'toggle-visibility') return;
      treeItem.disabled = !treeItem.disabled;
      treeItem.treeItemActions = getTreeItemActions(treeItem.disabled);
    };
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        customClass=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
        @treeActionClick=\${handleTreeActionClick}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            value="documents"
            .treeItemActions=\${getTreeItemActions(false)}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            value="projects"
            .treeItemActions=\${getTreeItemActions(false)}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=\${getTreeItemActions(false)}
          >
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    \`;
  }
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var y,T,D;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'API Reference',
  parameters: {
    docs: {
      description: {
        story: \`
### Props

| Name              | Type       | Default      | Description                                       |
|-------------------|------------|--------------|---------------------------------------------------|
| customClass       | \\\`string\\\` | \\\`''\\\`       | Additional CSS class to apply to the component    |
| searchPlaceholder | \\\`string\\\` | \\\`'Search...'\\\` | Placeholder text for the search input          |
| includeSearch     | \\\`boolean\\\` | \\\`true\\\`    | Whether to display the search functionality       |
| includeActions    | \\\`boolean\\\` | \\\`true\\\`    | Whether to display action buttons for tree items  |

---

### Tree View

#### Props

| Name        | Type       | Default   | Description                                           |
|-------------|------------|-----------|-------------------------------------------------------|
| customClass | \\\`string\\\` | \\\`''\\\`    | Additional CSS class to apply to the tree view        |
| isSubList   | \\\`boolean\\\` | \\\`false\\\` | Whether the tree view is a sublist of another tree item |

---

### Tree Item

#### Props

| Name            | Type                                   | Default   | Description                                                  |
|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|
| label           | \\\`string\\\`                             | -         | The label text for the tree item (required)                  |
| value           | \\\`string\\\`                             | \\\`''\\\`    | The value associated with the tree item                      |
| disabled        | \\\`boolean\\\`                            | \\\`false\\\` | Whether the tree item is disabled                            |
| checkbox        | \\\`boolean\\\`                            | \\\`false\\\` | Whether to display a checkbox for the tree item              |
| selected        | \\\`boolean\\\`                            | -         | Whether the tree item is selected (mutable, reflected)       |
| checked         | \\\`boolean\\\`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |
| hasSubtree      | \\\`boolean\\\`                            | \\\`false\\\` | Whether the tree item has a subtree                          |
| treeItemActions | \\\`ITreeItemActions[]\\\`                 | -         | Array of actions to display for the tree item                |
| size            | \\\`'xs' | 'sm' | 'md' | 'lg'\\\`    | \\\`'xs'\\\`  | The size of the tree item                                    |
| customClass     | \\\`string\\\`                             | \\\`''\\\`    | Additional CSS class to apply to the tree item               |

#### Events

| Name             | Payload                          | Description                                     |
|------------------|----------------------------------|-------------------------------------------------|
| itemSelect       | \\\`{ value: string }\\\`            | Emitted when a tree item is selected            |
| selectionsChange | \\\`{ selectedValues: string[] }\\\` | Emitted when the selection state changes        |

#### Methods

| Name            | Type                      | Description                |
|-----------------|---------------------------|----------------------------|
| collapseSubTree | \\\`() => Promise<void>\\\`   | Collapses the subtree      |
| expandSubTree   | \\\`() => Promise<void>\\\`   | Expands the subtree        |

---

### Tree Actions

#### Props

| Name    | Type                                | Default  | Description                          |
|---------|-------------------------------------|----------|--------------------------------------|
| actions | \\\`ITreeItemActions[]\\\`              | -        | Array of actions to display          |
| size    | \\\`'xs' | 'sm' | 'md' | 'lg'\\\` | \\\`'xs'\\\` | The size of the action buttons       |

#### Events

| Name            | Payload                                   | Description                                |
|-----------------|-------------------------------------------|--------------------------------------------|
| treeActionClick | \\\`{ actionId: string; actionName: string }\\\` | Emitted when an action is clicked       |
| dropdownOpened  | \\\`HTMLElement\\\`                           | Emitted when the dropdown is opened        |

---

### Interfaces

#### ITreeItemActions

\\\`\\\`\\\`typescript
interface ITreeItemActions {
  id: string;                           // Unique identifier for the action
  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'
  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon
  label: string;                        // Text label for the action
  ariaLabel?: string;                   // Optional label for accessibility
  disabled?: boolean;                   // Optional flag to disable the action
}
\\\`\\\`\\\`
\`
      }
    },
    controls: {
      disable: true
    }
  },
  render: () => {
    return html\`\`;
  }
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const q=["Default","EmptyState","DisabledItems","CheckboxSelection","WithActions","ApiReference"];export{m as ApiReference,u as CheckboxSelection,o as Default,n as DisabledItems,i as EmptyState,a as WithActions,q as __namedExportsOrder,z as default};
