import{w as Re}from"./decorator-D4YmxizW.js";import{x as w}from"./lit-element-CucEn6F2.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const We={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"custom-class":"","search-placeholder":"Search...","include-search":!0,"include-actions":!0,"items-reordering":!1,items:void 0},argTypes:{"search-placeholder":{control:{type:"text"},table:{category:"Content Tree"}},"include-search":{control:{type:"boolean"},table:{category:"Content Tree"}},"include-actions":{control:{type:"boolean"},table:{category:"Content Tree"}},"items-reordering":{control:{type:"boolean"},table:{category:"Content Tree"}}},decorators:[Re],parameters:{actions:{handles:["itemSelect","itemReordered","itemsReordered","treeActionClick","selectionsChange","dropdownOpened","itemLabelChange","itemExpand"]}}},je=[{id:"phase-1",label:"Phase 1",children:[{id:"backlog",label:"Backlog"},{id:"in-progress",label:"In Progress"},{id:"review",label:"Review"}]},{id:"phase-2",label:"Phase 2",children:[{id:"qa",label:"QA"},{id:"uat",label:"UAT"},{id:"done",label:"Done"}]}],h={parameters:{docs:{description:{story:"A basic content tree with hierarchical structure. Items can be expanded and collapsed to navigate through the tree."},source:{code:`
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
`}}},render:t=>w`
      <modus-wc-content-tree
        search-placeholder=${t["search-placeholder"]}
        customClass=${t["custom-class"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${t["include-actions"]}
        .itemsReordering=${t["items-reordering"]}
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
    `},b={name:"Tree Item",parameters:{docs:{description:{story:"A comprehensive example showing tree item features: checkbox, start icon, and actions."},source:{code:`
<modus-wc-tree-view>
  <modus-wc-tree-item 
    label="Project Folder" 
    value="project" 
    checkbox="true"
    tree-item-actions='[
      {"id":"edit","icon":"pencil","label":"Edit"},
      {"id":"delete","icon":"trash","label":"Delete"}
    ]'>
    <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
`}}},render:()=>w`
      <modus-wc-tree-view>
        <modus-wc-tree-item
          label="Project Folder"
          value="project"
          .checkbox=${!0}
          .treeItemActions=${[{id:"edit",icon:"pencil",label:"Edit"},{id:"delete",icon:"trash",label:"Delete"}]}
        >
          <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    `},p={name:"Tree Item - With Start Icon",parameters:{docs:{description:{story:"Tree items can display custom icons at the start using the start-icon slot. This is useful for representing file types, folders, or custom item types."},source:{code:`
<modus-wc-tree-view>
  <modus-wc-tree-item label="Folder" value="folder">
    <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Document.pdf" value="document">
    <modus-wc-icon slot="start-icon" name="description"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Image.png" value="image">
    <modus-wc-icon slot="start-icon" name="image"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
    <modus-wc-icon slot="start-icon" name="folder_open"></modus-wc-icon>
    <modus-wc-tree-view is-sub-list="true">
      <modus-wc-tree-item label="Code" value="code">
        <modus-wc-icon slot="start-icon" name="code"></modus-wc-icon>
      </modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
</modus-wc-tree-view>
`}}},render:()=>w`
      <modus-wc-tree-view>
        <modus-wc-tree-item label="Folder" value="folder">
          <modus-wc-icon slot="start-icon" name="folder_closed"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="Document.pdf" value="document">
          <modus-wc-icon slot="start-icon" name="file"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="Image.png" value="image">
          <modus-wc-icon slot="start-icon" name="image"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item
          label="Projects"
          .hasSubtree=${!0}
          value="projects"
        >
          <modus-wc-icon slot="start-icon" name="folder_open"></modus-wc-icon>
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item label="Code" value="code">
              <modus-wc-icon slot="start-icon" name="code"></modus-wc-icon>
            </modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    `},v={name:"Empty State",parameters:{docs:{description:{story:"This example shows the content tree when no items are present. Consumers can provide a custom empty state through the default slot."},source:{code:`
<style>
  .modus-wc-content-tree-empty-story {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
    min-height: 500px;
    padding: 1rem;
  }

  .modus-wc-content-tree-empty-story .modus-wc-content-tree-empty-text {
    color: #6a6e79;
    font-size: 18px;
    text-align: center;
    font-weight: 400;
  }
</style>
<script>
function handleCreateNew(tree) {
  tree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
  tree.items = [{ id: 'new-item', label: 'New Item' }];
}
<\/script>

<modus-wc-content-tree
  search-placeholder="Search..."
  include-search="true"
>
  <div class="modus-wc-content-tree-empty-story">
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.3335 13.3601H10.6668V10.6934H13.3335V5.36011H5.3335V13.3601ZM45.3335 5.36011H34.6668V10.6934H45.3335V5.36011ZM10.6668 19.3601H5.3335V31.3601H10.6668V19.3601ZM18.6668 45.3601H29.3335V40.0268H18.6668V45.3601ZM10.6668 37.3601H5.3335V45.3601H13.3335V40.0268H10.6668V37.3601ZM50.6668 5.36011V10.6934H53.3335V13.3601H58.6668V5.36011H50.6668ZM53.3335 31.3601H58.6668V19.3601H53.3335V31.3601ZM57.4402 41.5468L34.2135 32.0801C34.0269 32.0062 33.8275 31.9699 33.6268 31.9734H33.4668C33.3068 31.9734 33.1735 32.0001 33.0402 32.0801C32.9868 32.0801 32.9335 32.0801 32.8802 32.1334C32.6935 32.2134 32.5068 32.3201 32.3735 32.4801C32.2402 32.6401 32.1068 32.8001 32.0268 32.9868L31.9735 33.1468C31.9202 33.2801 31.8935 33.4401 31.8935 33.5734V33.7334C31.8935 33.9201 31.9202 34.1334 32.0002 34.3201L41.4668 57.5468C41.7335 58.1868 42.3735 58.6134 43.0668 58.6134H43.2002C43.9468 58.5601 44.5868 58.0268 44.7468 57.2801L46.6402 49.1201L54.3202 56.8001C54.6402 57.1201 55.0935 57.3068 55.5468 57.3068C56.0002 57.3068 56.4268 57.1201 56.7735 56.8001C57.4402 56.1334 57.4402 55.0401 56.7735 54.3734L49.1202 46.6934L57.3068 44.8001C58.0268 44.6401 58.5868 44.0001 58.6402 43.2534H58.5868C58.6087 42.8933 58.5178 42.5354 58.3266 42.2294C58.1354 41.9235 57.8535 41.6849 57.5202 41.5468M18.6668 10.6934H29.3335V5.36011H18.6668V10.6934Z"
        fill="#6A6E79"
      />
    </svg>
    <modus-wc-typography
      hierarchy="p"
      label="Empty Content Tree"
      size="lg"
      weight="normal"
      custom-class="modus-wc-content-tree-empty-text"
    ></modus-wc-typography>
    <modus-wc-button variant="outline"
      onclick="handleCreateNew(this.closest('modus-wc-content-tree'))">
      Create node
    </modus-wc-button>
  </div>
</modus-wc-content-tree>
`}}},render:t=>{const a=(d,c)=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{const o=Array.from(d.querySelectorAll("modus-wc-tree-item")).find(i=>i.value===c);o&&(o.inlineLabelEdit=!0)})})},l=d=>{var o,i;const c=(o=d.currentTarget)==null?void 0:o.closest("modus-wc-content-tree");if(!c)return;const u=`new-item-${Date.now()}`;(i=c.querySelector(".modus-wc-content-tree-empty-story"))==null||i.remove(),c.items=[{id:u,label:"New Item"}],a(c,u)};return w`
      <style>
        .modus-wc-content-tree-empty-story {
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          justify-content: center;
          min-height: 500px;
          padding: 1rem;
        }

        .modus-wc-content-tree-empty-story .modus-wc-content-tree-empty-text {
          color: #6a6e79;
          font-size: 18px;
          text-align: center;
          font-weight: 400;
        }
      </style>
      <modus-wc-content-tree
        search-placeholder=${t["search-placeholder"]}
        custom-class=${t["custom-class"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${t["include-actions"]}
      >
        <div class="modus-wc-content-tree-empty-story">
          <modus-wc-typography
            hierarchy="p"
            label="Empty Content Tree"
            size="lg"
            weight="normal"
            custom-class="modus-wc-content-tree-empty-text"
          ></modus-wc-typography>

          <modus-wc-button variant="outline" @buttonClick=${l}>
            Create node
          </modus-wc-button>
        </div>
      </modus-wc-content-tree>
    `}},I={name:"Single Selection",parameters:{docs:{description:{story:"Content tree with single selection mode. Click on any tree item to select it. Only one item can be selected at a time."},source:{code:`
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
`}}},render:t=>w`
      <modus-wc-content-tree
        search-placeholder=${t["search-placeholder"]}
        custom-class=${t["custom-class"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${t["include-actions"]}
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
    `},g={name:"Checkbox Selection",parameters:{docs:{description:{story:"This example demonstrates tree items with checkboxes for multi-selection. Selecting a parent item will select all its children, and vice versa."},source:{code:`
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
`}}},render:t=>w`
      <modus-wc-content-tree
        search-placeholder=${t["search-placeholder"]}
        customClass=${t["custom-class"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${t["include-actions"]}
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
    `},y={name:"Disabled Selection",parameters:{docs:{description:{story:"This example demonstrates tree items with disabled state. Disabled items cannot be selected or interacted with."},source:{code:`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Archives" value="archives" disabled="true"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Legacy Project" value="legacy" disabled="true"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`}}},render:t=>w`
      <modus-wc-content-tree
        search-placeholder=${t["search-placeholder"]}
        customClass=${t["custom-class"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${t["include-actions"]}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Documents" value="documents">
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Archives"
            value="archives"
            .disabled=${!0}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${!0}
            value="projects"
          >
            <modus-wc-tree-view is-sub-list="true">
              <modus-wc-tree-item label="Website Redesign" value="website">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Legacy Project"
                value="legacy"
                .disabled=${!0}
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `},f={name:"With Actions",parameters:{docs:{description:{story:"This example demonstrates custom item actions including visibility toggle, inline edit, duplicate, add sibling, add child, and delete."},source:{code:`
<script>
const getActions = (disabled) => [
  { id: 'toggle-visibility', label: disabled ? 'Hidden' : 'Visible', icon: disabled ? 'visibility_off' : 'visibility_on' },
  { id: 'edit-label', label: 'Edit Label', icon: 'pencil' },
  { id: 'duplicate', label: 'Duplicate', icon: 'copy_content' },
  { id: 'add-node-above', label: 'Add Node Above', icon: 'add' },
  { id: 'add-node-below', label: 'Add Node Below', icon: 'add' },
  { id: 'add-child', label: 'Add Child', icon: 'subdirectory_arrow_right' },
  { id: 'delete', label: 'Delete', icon: 'delete' }
];

const assignActions = (item) => {
  item.inlineLabelEdit = false;
  item.treeItemActions = getActions(!!item.disabled);
  item.querySelectorAll('modus-wc-tree-item').forEach((child) => {
    child.inlineLabelEdit = false;
    child.treeItemActions = getActions(!!child.disabled);
  });
};

const createNode = (label = 'New Node') => {
  const node = document.createElement('modus-wc-tree-item');
  node.label = label;
  node.value = 'new-node-' + Date.now() + '-' + Math.random();
  assignActions(node);
  return node;
};

const handleAction = (event) => {
  const treeItem = event.target.closest('modus-wc-tree-item');
  if (!treeItem) return;

  switch (event.detail.actionId) {
    case 'delete':
      treeItem.remove();
      return;
    case 'duplicate':
      treeItem.after(createNode(treeItem.label));
      return;
    case 'add-node-above':
      treeItem.before(createNode());
      return;
    case 'add-node-below':
      treeItem.after(createNode());
      return;
    case 'add-child': {
      let subList = treeItem.querySelector(':scope > modus-wc-tree-view');
      if (!subList) {
        subList = document.createElement('modus-wc-tree-view');
        subList.setAttribute('is-sub-list', 'true');
        treeItem.appendChild(subList);
      }
      treeItem.hasSubtree = true;
      subList.appendChild(createNode('New Child'));
      return;
    }
    case 'toggle-visibility':
      treeItem.disabled = !treeItem.disabled;
      treeItem.treeItemActions = getActions(!!treeItem.disabled);
      return;
    case 'edit-label':
      treeItem.inlineLabelEdit = true;
      return;
  }
};

<\/script>

<modus-wc-content-tree include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>

<script>
document
  .querySelector('modus-wc-content-tree')
  .addEventListener('treeActionClick', handleAction);
<\/script>
`}}},render:t=>{const a=o=>[{id:"toggle-visibility",label:o?"Hidden":"Visible",icon:o?"visibility_off":"visibility_on",ariaLabel:o?"Set item to visible":"Set item to hidden",size:"sm"},{id:"edit-label",label:"Edit Label",icon:"pencil",ariaLabel:"Edit item label",size:"sm"},{id:"duplicate",label:"Duplicate",icon:"copy_content",ariaLabel:"Duplicate item",size:"sm"},{id:"add-node-above",label:"Add Node Above",icon:"add",ariaLabel:"Add node above",size:"sm"},{id:"add-node-below",label:"Add Node Below",icon:"add",ariaLabel:"Add node below",size:"sm"},{id:"add-child",label:"Add Child",icon:"subdirectory_arrow_right",ariaLabel:"Add child node",size:"sm"},{id:"delete",label:"Delete",icon:"delete",ariaLabel:"Delete item",size:"sm"}],l=o=>{o.inlineLabelEdit=!1,o.treeItemActions=a(!!o.disabled),o.querySelectorAll("modus-wc-tree-item").forEach(i=>{const e=i;e.inlineLabelEdit=!1,e.treeItemActions=a(!!e.disabled)})},d=(o="New Node")=>{const i=document.createElement("modus-wc-tree-item");return i.label=o,i.value=`new-node-${Date.now()}-${Math.random()}`,l(i),i};let c=null;const u=o=>{const e=o.target.closest("modus-wc-tree-item");if(!e)return;const n=`${o.detail.actionId}:${e.value}:${o.timeStamp}`;if(c!==n)switch(c=n,queueMicrotask(()=>{c===n&&(c=null)}),o.detail.actionId){case"delete":e.remove();break;case"duplicate":{const r=d(e.label);e.after(r);return}case"add-node-above":e.before(d());break;case"add-node-below":e.after(d());break;case"add-child":{let r=e.querySelector(":scope > modus-wc-tree-view");r||(r=document.createElement("modus-wc-tree-view"),r.setAttribute("is-sub-list","true"),e.appendChild(r)),e.hasSubtree=!0,r.appendChild(d("New Child"));break}case"toggle-visibility":e.disabled=!e.disabled,e.treeItemActions=a(!!e.disabled);break;case"edit-label":e.inlineLabelEdit=!0;break}};return w`
      <modus-wc-content-tree
        class="with-actions-tree"
        search-placeholder=${t["search-placeholder"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${t["include-actions"]}
        @treeActionClick=${u}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            value="documents"
            .treeItemActions=${a(!1)}
          ></modus-wc-tree-item>

          <modus-wc-tree-item
            label="Projects"
            value="projects"
            .treeItemActions=${a(!1)}
          ></modus-wc-tree-item>

          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=${a(!1)}
          ></modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `}},A={name:"Items Reordering",parameters:{docs:{description:{story:"Enables drag-and-drop reordering with top/bottom drop-line indicators for data-driven `items` in the same level."},source:{code:`
<script>
const items = [
  {
    id: 'phase-1',
    label: 'Phase 1',
    children: [
      { id: 'backlog', label: 'Backlog' },
      { id: 'in-progress', label: 'In Progress' },
      { id: 'review', label: 'Review' }
    ]
  },
  {
    id: 'phase-2',
    label: 'Phase 2',
    children: [
      { id: 'qa', label: 'QA' },
      { id: 'uat', label: 'UAT' },
      { id: 'done', label: 'Done' }
    ]
  }
];
<\/script>

<modus-wc-content-tree
  include-search="false"
  include-actions="false"
  items-reordering="true"
  .items={items}>
</modus-wc-content-tree>
`}}},render:t=>{const a={items:[...t.items??je]},l=d=>{a.items=[...d.detail.items];const c=d.currentTarget;c.items=a.items};return w`
      <modus-wc-content-tree
        search-placeholder=${t["search-placeholder"]}
        customClass=${t["custom-class"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${t["include-actions"]}
        .itemsReordering=${!0}
        .items=${a.items}
        @itemsReordered=${l}
      ></modus-wc-content-tree>
    `}},D={name:"Multi Select",parameters:{docs:{description:{story:"Enables multi-select on the tree view. Use Ctrl/Cmd + click to toggle individual items, and Shift + click to select a contiguous range. Works across nested tree items."},source:{code:`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view multi-select="true">
    <modus-wc-tree-item label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Report.pdf" value="report"></modus-wc-tree-item>
        <modus-wc-tree-item label="Proposal.docx" value="proposal"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Mobile App" value="mobile-app"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" has-subtree="true" value="resources">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Templates" value="templates"></modus-wc-tree-item>
        <modus-wc-tree-item label="Guidelines" value="guidelines"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Archives" has-subtree="true" value="archives">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="2024" value="2024"></modus-wc-tree-item>
        <modus-wc-tree-item label="2025" value="2025"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
`}},actions:{handles:["itemSelect","itemSelectionChange"]}},render:t=>w`
      <modus-wc-content-tree
        search-placeholder=${t["search-placeholder"]}
        custom-class=${t["custom-class"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${t["include-actions"]}
      >
        <modus-wc-tree-view .multiSelect=${!0}>
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
              <modus-wc-tree-item label="Mobile App" value="mobile-app">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            .hasSubtree=${!0}
            value="resources"
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item label="Templates" value="templates">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Guidelines" value="guidelines">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Archives"
            .hasSubtree=${!0}
            value="archives"
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item label="2024" value="2024">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="2025" value="2025">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `},C={name:"Lazy Loading",parameters:{docs:{description:{story:'Demonstrates lazy loading using the data-driven `items` prop and `itemExpand` event. Items with `hasChildren: true` and no `children` show an expand chevron; when expanded, the tree shows a loader until the consumer provides children by updating `items`. Expand "Documents", "Projects", or "Resources" to see the loading spinner and then the loaded children.'},source:{code:`
<script>
const initialItems = [
  { id: 'documents', label: 'Documents', hasChildren: true },
  { id: 'projects', label: 'Projects', hasChildren: true },
  { id: 'resources', label: 'Resources', hasChildren: true },
];

const mockData = {
  documents: [
    { id: 'report', label: 'Report.pdf' },
    { id: 'proposal', label: 'Proposal.docx' },
    { id: 'notes', label: 'Meeting Notes.txt' },
  ],
  projects: [
    { id: 'website', label: 'Website Redesign', hasChildren: true },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'api', label: 'API Integration' },
  ],
  resources: [
    { id: 'templates', label: 'Templates' },
    { id: 'guide', label: 'Style Guide' },
  ],
  website: [
    { id: 'design', label: 'Design Mockups' },
    { id: 'dev', label: 'Development' },
  ],
};

function updateItem(items, parentId, updater) {
  return items.map((item) => {
    if (item.id === parentId) return updater(item);
    if (item.children) {
      return {
        ...item,
        children: updateItem(item.children, parentId, updater),
      };
    }
    return item;
  });
}

const tree = document.querySelector('modus-wc-content-tree');
tree.items = initialItems;

tree.addEventListener('itemExpand', async (event) => {
  const itemId = event.detail;

  const findItem = (items) => {
    for (const item of items) {
      if (item.id === itemId) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
  };

  const item = findItem(tree.items);
  if (item?.children?.length) return;

  const children = await new Promise((resolve) =>
    setTimeout(() => resolve(mockData[itemId] ?? []), 1500)
  );

  tree.items = updateItem(tree.items, itemId, (item) => ({
    ...item,
    children,
    hasChildren: children.length > 0,
  }));
});
<\/script>

<modus-wc-content-tree search-placeholder="Search..." include-search="true"></modus-wc-content-tree>
`}},actions:{handles:["itemExpand"]}},render:t=>{const a=[{id:"documents",label:"Documents",hasChildren:!0},{id:"projects",label:"Projects",hasChildren:!0},{id:"resources",label:"Resources",hasChildren:!0}],l={documents:[{id:"report",label:"Report.pdf"},{id:"proposal",label:"Proposal.docx"},{id:"notes",label:"Meeting Notes.txt"}],projects:[{id:"website",label:"Website Redesign",hasChildren:!0},{id:"mobile",label:"Mobile App"},{id:"api",label:"API Integration"}],resources:[{id:"templates",label:"Templates"},{id:"guide",label:"Style Guide"}],website:[{id:"design",label:"Design Mockups"},{id:"dev",label:"Development"}]},d=(o,i,e)=>o.map(n=>n.id===i?e(n):n.children?{...n,children:d(n.children,i,e)}:n),c=(o,i)=>{for(const e of o){if(e.id===i)return e;if(e.children){const n=c(e.children,i);if(n)return n}}},u=async o=>{var m;const i=o.currentTarget,e=o.detail,n=i.items??a,r=c(n,e);if((m=r==null?void 0:r.children)!=null&&m.length)return;const s=await new Promise(P=>setTimeout(()=>P(l[e]??[]),1500));i.items=d(n,e,P=>({...P,children:s,hasChildren:s.length>0}))};return w`
      <modus-wc-content-tree
        search-placeholder=${t["search-placeholder"]}
        .includeSearch=${t["include-search"]}
        .includeActions=${!1}
        .items=${a}
        @itemExpand=${u}
      ></modus-wc-content-tree>
    `}},S={name:"With Built-in Actions",parameters:{docs:{description:{story:"Demonstrates built-in Add Child, Add Above, Add Below, Duplicate, and Delete actions.\nWhen the `items` prop is used, every node automatically receives default action buttons.\nThe tree emits `itemAdded`, `itemDeleted`, or `itemDuplicated` with the proposed new `items` array.\nThe consumer updates `tree.items` to apply the change -- this is the single source of truth.\nNo `treeItemActions` configuration is required -- action buttons appear out of the box."},source:{code:`
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  tree.items = [
    { id: 'root-1', label: 'Design System', children: [
      { id: 'child-1', label: 'Components' },
      { id: 'child-2', label: 'Tokens' },
    ]},
    { id: 'root-2', label: 'Documentation', children: [
      { id: 'child-3', label: 'Getting Started' },
    ]},
    { id: 'root-3', label: 'Changelog' },
  ];

  // Single source of truth: update tree.items from event payload.
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  tree.addEventListener('itemDuplicated', applyUpdate);
<\/script>`}},actions:{handles:["itemAdded","itemDeleted","itemDuplicated","itemsReordered"]}},render:t=>{const a=[{id:"root-1",label:"Design System",children:[{id:"child-1",label:"Components"},{id:"child-2",label:"Tokens"}]},{id:"root-2",label:"Documentation",children:[{id:"child-3",label:"Getting Started"}]},{id:"root-3",label:"Changelog"}],l=d=>{const c=d.currentTarget;c.items=d.detail.items};return w`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=${t["search-placeholder"]}
          .includeSearch=${t["include-search"]}
          .includeActions=${!0}
          .items=${a}
          @itemAdded=${l}
          @itemDeleted=${l}
          @itemDuplicated=${l}
        ></modus-wc-content-tree>
      </div>
    `}},$={name:"With Built-in Actions + Lazy Loading",parameters:{docs:{description:{story:'Demonstrates lazy loading with built-in actions using a controlled pattern.\n\n**During lazy loading**, the consumer disables actions on the loading node via `treeItemActions` to prevent data merge conflicts. Once children arrive and the spinner clears, actions are re-enabled.\n\nThe consumer controls the spinner via the `lazyLoading` field on `ITreeItemData` -- set it to `true` when fetching starts, then provide `children` and set it to `false` once data arrives.\n\nThe consumer owns all state: every `itemAdded`, `itemDeleted`, or `itemDuplicated` event is applied by setting `tree.items = e.detail.items`.\n\nExpand "Projects" or "Resources" to trigger the 2-second lazy load, then observe the disabled actions.'},source:{code:`
<modus-wc-content-tree id="lazy-actions-tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#lazy-actions-tree');

  const setItem = (items, id, patch) =>
    items.map(item =>
      item.id === id
        ? { ...item, ...patch }
        : { ...item, children: item.children ? setItem(item.children, id, patch) : undefined }
    );

  const disabledActions = [
    { id: 'add-child', icon: 'add', label: 'Add Child', disabled: true },
    { id: 'add-above', icon: 'arrow_upward', label: 'Add Above', disabled: true },
    { id: 'add-below', icon: 'arrow_downward', label: 'Add Below', disabled: true },
    { id: 'duplicate', icon: 'content_copy', label: 'Duplicate', disabled: true },
    { id: 'delete', icon: 'delete', label: 'Delete' },
  ];

  tree.items = [
    { id: 'design', label: 'Design System', children: [
      { id: 'components', label: 'Components' },
      { id: 'tokens', label: 'Tokens' },
    ]},
    { id: 'projects', label: 'Projects', hasChildren: true },
    { id: 'resources', label: 'Resources', hasChildren: true },
  ];

  const loadedIds = new Set();

  tree.addEventListener('itemExpand', async (e) => {
    const id = e.detail;
    const found = tree.items.find(i => i.id === id);
    if (!found?.hasChildren || loadedIds.has(id)) return;
    if (found.children?.length) return;

    loadedIds.add(id);

    tree.items = setItem(tree.items, id, {
      lazyLoading: true,
      treeItemActions: disabledActions,
    });

    await new Promise(r => setTimeout(r, 2000));

    tree.items = setItem(tree.items, id, current => ({
      lazyLoading: false,
      hasChildren: true,
      treeItemActions: undefined,
      children: [
        ...(current.children ?? []),
        { id: id + '-server-1', label: 'Server Item 1' },
        { id: id + '-server-2', label: 'Server Item 2' },
      ],
    }));
  });

  // Consumer owns the state: apply every action by updating tree.items.
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  tree.addEventListener('itemDuplicated', applyUpdate);
<\/script>`}},actions:{handles:["itemAdded","itemDeleted","itemDuplicated","itemExpand"]}},render:t=>{const a=(e,n,r)=>e.map(s=>{if(s.id===n){const m=typeof r=="function"?r(s):r;return{...s,...m}}return{...s,children:s.children?a(s.children,n,r):void 0}}),l=[{id:"design",label:"Design System",children:[{id:"components",label:"Components"},{id:"tokens",label:"Tokens"}]},{id:"projects",label:"Projects",hasChildren:!0},{id:"resources",label:"Resources",hasChildren:!0}],d=new Set,c=(e,n)=>{for(const r of e){if(r.id===n)return r;if(r.children){const s=c(r.children,n);if(s)return s}}return null},u=[{id:"add-child",icon:"add",label:"Add Child",disabled:!0},{id:"add-above",icon:"arrow_upward",label:"Add Above",disabled:!0},{id:"add-below",icon:"arrow_downward",label:"Add Below",disabled:!0},{id:"duplicate",icon:"content_copy",label:"Duplicate",disabled:!0},{id:"delete",icon:"delete",label:"Delete"}],o=async e=>{const n=e.currentTarget,r=e.detail,s=c(n.items,r);!(s!=null&&s.hasChildren)||d.has(r)||s.children&&s.children.length>0||(d.add(r),n.items=a(n.items,r,{lazyLoading:!0,treeItemActions:u}),await new Promise(m=>setTimeout(m,2e3)),n.items=a(n.items,r,m=>({lazyLoading:!1,hasChildren:!0,treeItemActions:void 0,children:[...m.children??[],{id:`${r}-child-1`,label:"Server Item 1"},{id:`${r}-child-2`,label:"Server Item 2"}]})))},i=e=>{const n=e.currentTarget;n.items=e.detail.items};return w`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=${t["search-placeholder"]}
          .includeSearch=${t["include-search"]}
          .includeActions=${!0}
          .items=${l}
          @itemExpand=${o}
          @itemAdded=${i}
          @itemDeleted=${i}
          @itemDuplicated=${i}
        ></modus-wc-content-tree>
      </div>
    `}},T={name:"Lazy Loading - Actions Enabled During Load",parameters:{docs:{description:{story:'Demonstrates the case where all actions remain enabled while a node is lazy loading.\nThe user can add/delete/duplicate nodes while the spinner is showing.\nWhen server data arrives, the consumer merges the server children with any user-added children so nothing is lost.\n\nThe consumer owns all state via `tree.items`. Every `itemAdded`, `itemDeleted`, or `itemDuplicated` event is applied by setting `tree.items = e.detail.items`.\nWhen lazy load completes, `tree.items` already reflects all user changes, so the merge just appends server data.\n\nThis approach gives maximum flexibility at the cost of the consumer handling the merge logic.\nCompare with the "With Built-in Actions + Lazy Loading" story where actions are disabled during loading.'},source:{code:`
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  // Patch a single item by id. Accepts a patch object or a function receiving the current item.
  const setItem = (items, id, patch) =>
    items.map(item => {
      if (item.id === id) {
        const resolved = typeof patch === 'function' ? patch(item) : patch;
        return { ...item, ...resolved };
      }
      return { ...item, children: item.children ? setItem(item.children, id, patch) : undefined };
    });

  tree.items = [
    { id: 'design', label: 'Design System', children: [
      { id: 'components', label: 'Components' },
      { id: 'tokens', label: 'Tokens' },
    ]},
    { id: 'projects', label: 'Projects', hasChildren: true },
    { id: 'resources', label: 'Resources', hasChildren: true },
  ];

  const loadedIds = new Set();

  tree.addEventListener('itemExpand', async (e) => {
    const id = e.detail;
    const item = tree.items.find(i => i.id === id);
    if (!item?.hasChildren || loadedIds.has(id)) return;
    if (item.children?.length) return;

    loadedIds.add(id);
    tree.items = setItem(tree.items, id, { lazyLoading: true });
    await new Promise(r => setTimeout(r, 3000));

    // tree.items already reflects all user changes made during loading
    // because syncItems kept it up to date. Append server data after.
    tree.items = setItem(tree.items, id, current => ({
      lazyLoading: false,
      hasChildren: true,
      children: [
        ...(current.children ?? []),
        { id: id + '-server-1', label: 'Server Item 1' },
        { id: id + '-server-2', label: 'Server Item 2' },
      ],
    }));
  });

  // Keep tree.items in sync after every action.
  // This ensures lazy load merge always works off the latest state.
  const syncItems = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', syncItems);
  tree.addEventListener('itemDeleted', syncItems);
  tree.addEventListener('itemDuplicated', syncItems);
<\/script>`}},actions:{handles:["itemAdded","itemDeleted","itemDuplicated","itemExpand"]}},render:t=>{const a=(i,e,n)=>i.map(r=>{if(r.id===e){const s=typeof n=="function"?n(r):n;return{...r,...s}}return{...r,children:r.children?a(r.children,e,n):void 0}}),l=[{id:"design",label:"Design System",children:[{id:"components",label:"Components"},{id:"tokens",label:"Tokens"}]},{id:"projects",label:"Projects",hasChildren:!0},{id:"resources",label:"Resources",hasChildren:!0}],d=new Set,c=(i,e)=>{for(const n of i){if(n.id===e)return n;if(n.children){const r=c(n.children,e);if(r)return r}}return null},u=async i=>{const e=i.currentTarget,n=i.detail,r=c(e.items,n);!(r!=null&&r.hasChildren)||d.has(n)||r.children&&r.children.length>0||(d.add(n),e.items=a(e.items,n,{lazyLoading:!0}),await new Promise(s=>setTimeout(s,3e3)),e.items=a(e.items,n,s=>({lazyLoading:!1,hasChildren:!0,children:[...s.children??[],{id:`${n}-server-1`,label:"Server Item 1"},{id:`${n}-server-2`,label:"Server Item 2"}]})))},o=i=>{const e=i.currentTarget;e.items=i.detail.items};return w`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=${t["search-placeholder"]}
          .includeSearch=${t["include-search"]}
          .includeActions=${!0}
          .items=${l}
          @itemExpand=${u}
          @itemAdded=${o}
          @itemDeleted=${o}
          @itemDuplicated=${o}
        ></modus-wc-content-tree>
      </div>
    `}},x={name:"Manual Control via @Method()",parameters:{docs:{description:{story:'Demonstrates the "State Manager pattern" where the consumer has full control.\n\n`includeActions` is set to `false` -- no built-in action buttons render on tree nodes.\nThe consumer provides their own external toolbar and calls the element\'s public `@Method()` utilities\nto compute a new items array, then sets `tree.items` to apply the change.\n\nAvailable methods on the element:\n- `tree.addChild(parentId, newItem)` — adds a new child under the given parent\n- `tree.addAbove(siblingId, newItem)` — inserts a new item above the given sibling\n- `tree.addBelow(siblingId, newItem)` — inserts a new item below the given sibling\n- `tree.deleteItem(itemId)` — removes the item from the tree\n- `tree.duplicateItem(itemId)` — clones the item (and all its children) after itself\n\nAll methods return a `Promise<ITreeItemData[] | null>` with the proposed new items array.\nThe consumer decides whether to apply it by setting `tree.items = result`.'},source:{code:`
<div style="display: flex; flex-direction: column; gap: 8px; width: 320px">
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <modus-wc-button id="btn-add-child">Add Child</modus-wc-button>
    <modus-wc-button id="btn-add-above">Add Above</modus-wc-button>
    <modus-wc-button id="btn-add-below">Add Below</modus-wc-button>
    <modus-wc-button id="btn-duplicate">Duplicate</modus-wc-button>
    <modus-wc-button id="btn-delete">Delete</modus-wc-button>
  </div>
  <modus-wc-content-tree id="tree" include-actions="false"></modus-wc-content-tree>
</div>
<script>
  const tree = document.querySelector('#tree');
  let selectedId = null;

  tree.items = [
    { id: 'root-1', label: 'Design System', children: [
      { id: 'child-1', label: 'Components' },
      { id: 'child-2', label: 'Tokens' },
    ]},
    { id: 'root-2', label: 'Documentation' },
    { id: 'root-3', label: 'Changelog' },
  ];

  tree.addEventListener('itemSelect', (e) => {
    selectedId = e.detail.value;
  });

  document.querySelector('#btn-add-child').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addChild(selectedId, { id: crypto.randomUUID(), label: 'New Child' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-add-above').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addAbove(selectedId, { id: crypto.randomUUID(), label: 'New Item' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-add-below').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addBelow(selectedId, { id: crypto.randomUUID(), label: 'New Item' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-duplicate').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.duplicateItem(selectedId);
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-delete').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.deleteItem(selectedId);
    tree.items = newItems;
    selectedId = null;
  });
<\/script>`}}},render:t=>{const a=[{id:"root-1",label:"Design System",treeItemActions:[],children:[{id:"child-1",label:"Components",treeItemActions:[]},{id:"child-2",label:"Tokens",treeItemActions:[]}]},{id:"root-2",label:"Documentation",treeItemActions:[]},{id:"root-3",label:"Changelog",treeItemActions:[]}],l="manual-actions-tree";let d=null;const c=()=>document.getElementById(l),u=s=>{d=s.detail.value};return w`
      <div style="height: 50px">
        <modus-wc-typography>
          Select a node to complete an action
        </modus-wc-typography>
      </div>
      <div
        style="display: flex; flex-direction: column; gap: 8px; width: 320px"
      >
        <div style="display: flex; gap: 8px; flex-wrap: wrap">
          <modus-wc-button @buttonClick=${async()=>{if(!d)return;const s=c();if(!s)return;const m=await s.addChild(d,{id:crypto.randomUUID(),label:"New Child",treeItemActions:[]});m&&(s.items=m)}}
            >Add Child</modus-wc-button
          >
          <modus-wc-button @buttonClick=${async()=>{if(!d)return;const s=c();if(!s)return;const m=await s.addAbove(d,{id:crypto.randomUUID(),label:"New Item",treeItemActions:[]});m&&(s.items=m)}}
            >Add Above</modus-wc-button
          >
          <modus-wc-button @buttonClick=${async()=>{if(!d)return;const s=c();if(!s)return;const m=await s.addBelow(d,{id:crypto.randomUUID(),label:"New Item",treeItemActions:[]});m&&(s.items=m)}}
            >Add Below</modus-wc-button
          >
          <modus-wc-button @buttonClick=${async()=>{if(!d)return;const s=c();if(!s)return;const m=await s.duplicateItem(d);m&&(s.items=m)}}
            >Duplicate</modus-wc-button
          >
          <modus-wc-button @buttonClick=${async()=>{if(!d)return;const s=c();if(!s)return;const m=await s.deleteItem(d);s.items=m,d=null}}>Delete</modus-wc-button>
        </div>
        <modus-wc-content-tree
          id=${l}
          search-placeholder=${t["search-placeholder"]}
          .includeSearch=${t["include-search"]}
          .includeActions=${!1}
          .items=${a}
          @itemSelect=${u}
        ></modus-wc-content-tree>
      </div>
    `}},k={name:"Manual Control via @Method() + treeActionClick",parameters:{docs:{description:{story:'Same as "Manual Control via @Method()" but the actions are triggered from `treeActionClick` events on the tree nodes rather than an external toolbar.\n\n`includeActions` is `true` and each item has `treeItemActions` with custom IDs that the built-in handler ignores.\nThe consumer listens to `treeActionClick`, reads the item id from the event, calls the element\'s `@Method()` utility, and sets `tree.items = result`.\n\nThis is the "State Manager pattern": action buttons on nodes, consumer intercepts every action, calls utility functions, owns the final state.\n\nNote: "Add Above" is intentionally omitted from the action list here to demonstrate that the consumer has full control over which actions to expose -- you only show what makes sense for your use case.'},source:{code:`
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  const actions = [
    { id: 'my-add-child', icon: 'add', label: 'Add Child' },
    { id: 'my-add-below', icon: 'arrow_downward', label: 'Add Below' },
    { id: 'my-duplicate', icon: 'content_copy', label: 'Duplicate' },
    { id: 'my-delete', icon: 'delete', label: 'Delete' },
  ];

  tree.items = [
    { id: 'root-1', label: 'Design System', treeItemActions: actions, children: [
      { id: 'child-1', label: 'Components', treeItemActions: actions },
      { id: 'child-2', label: 'Tokens', treeItemActions: actions },
    ]},
    { id: 'root-2', label: 'Documentation', treeItemActions: actions },
    { id: 'root-3', label: 'Changelog', treeItemActions: actions },
  ];

  tree.addEventListener('treeActionClick', async (e) => {
    const itemEl = e.target.closest('modus-wc-tree-item');
    const itemId = itemEl?.getAttribute('data-key');
    if (!itemId) return;

    const { actionId } = e.detail;
    let newItems = null;

    if (actionId === 'my-add-child') {
      newItems = await tree.addChild(itemId, { id: crypto.randomUUID(), label: 'New Child', treeItemActions: actions });
    } else if (actionId === 'my-add-below') {
      newItems = await tree.addBelow(itemId, { id: crypto.randomUUID(), label: 'New Item', treeItemActions: actions });
    } else if (actionId === 'my-duplicate') {
      newItems = await tree.duplicateItem(itemId);
    } else if (actionId === 'my-delete') {
      newItems = await tree.deleteItem(itemId);
    }

    if (newItems) tree.items = newItems;
  });
<\/script>`}}},render:t=>{const a="manual-events-tree",l=[{id:"my-add-child",icon:"add",label:"Add Child"},{id:"my-add-below",icon:"arrow_downward",label:"Add Below"},{id:"my-duplicate",icon:"content_copy",label:"Duplicate"},{id:"my-delete",icon:"delete",label:"Delete"}],d=o=>{var i;return{...o,treeItemActions:l,children:(i=o.children)==null?void 0:i.map(d)}},c=[{id:"root-1",label:"Design System",children:[{id:"child-1",label:"Components"},{id:"child-2",label:"Tokens"}]},{id:"root-2",label:"Documentation"},{id:"root-3",label:"Changelog"}].map(d),u=async o=>{const i=document.getElementById(a);if(!i)return;const e=o.target.closest("modus-wc-tree-item"),n=e==null?void 0:e.getAttribute("data-key");if(!n)return;const{actionId:r}=o.detail;let s=null;r==="my-add-child"?s=await i.addChild(n,{id:crypto.randomUUID(),label:"New Child",treeItemActions:l}):r==="my-add-below"?s=await i.addBelow(n,{id:crypto.randomUUID(),label:"New Item",treeItemActions:l}):r==="my-duplicate"?s=await i.duplicateItem(n):r==="my-delete"&&(s=await i.deleteItem(n)),s&&(i.items=s)};return w`
      <div style="height: 100px; text-align: center; width: 320px;">
        <modus-wc-typography>
          Note: "Add Above" is intentionally omitted from the action list here
          to demonstrate that the consumer has full control over which actions
          to expose
        </modus-wc-typography>
      </div>
      <div style="width: 320px; text-align: center;">
        <modus-wc-content-tree
          id=${a}
          search-placeholder=${t["search-placeholder"]}
          .includeSearch=${t["include-search"]}
          .includeActions=${!0}
          .items=${c}
          @treeActionClick=${u}
        ></modus-wc-content-tree>
      </div>
    `}},E={name:"Mixed Built-in + Custom Actions",parameters:{docs:{description:{story:"Demonstrates mixing built-in actions with a consumer-defined custom action on the same node.\nEach item has `treeItemActions` containing both built-in IDs (`add-child`, `delete`) and a custom ID (`my-rename`).\nThe component handles `add-child` and `delete` automatically and emits `itemAdded` / `itemDeleted`.\nThe custom `my-rename` action reaches the consumer via `treeActionClick` and triggers inline label editing.\nBuilt-in actions use `stopPropagation` so they never appear in `treeActionClick` -- the consumer only sees their own custom IDs."},source:{code:`
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');
  const actions = [
    { id: 'add-child', icon: 'add', label: 'Add Child' },
    { id: 'my-rename', icon: 'edit', label: 'Rename' },
    { id: 'delete', icon: 'delete', label: 'Delete' },
  ];
  tree.items = [
    { id: 'root-1', label: 'Design System', treeItemActions: actions, children: [
      { id: 'child-1', label: 'Components', treeItemActions: actions },
      { id: 'child-2', label: 'Tokens', treeItemActions: actions },
    ]},
    { id: 'root-2', label: 'Documentation', treeItemActions: actions },
    { id: 'root-3', label: 'Changelog', treeItemActions: actions },
  ];
  // built-in actions (add-child, delete) are handled by the component automatically
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  // custom action -- only my-rename reaches here
  tree.addEventListener('treeActionClick', (e) => {
    if (e.detail.actionId !== 'my-rename') return;
    const itemEl = e.target.closest('modus-wc-tree-item');
    if (itemEl) itemEl.inlineLabelEdit = true;
  });
<\/script>`}}},render:t=>{const a="mixed-actions-tree",l=[{id:"add-child",icon:"add",label:"Add Child"},{id:"my-rename",icon:"edit",label:"Rename"},{id:"delete",icon:"delete",label:"Delete"}],d=i=>{var e;return{...i,treeItemActions:l,children:(e=i.children)==null?void 0:e.map(d)}},c=[{id:"root-1",label:"Design System",children:[{id:"child-1",label:"Components"},{id:"child-2",label:"Tokens"}]},{id:"root-2",label:"Documentation"},{id:"root-3",label:"Changelog"}].map(d),u=i=>{const e=document.getElementById(a);e&&(e.items=i.detail.items)},o=i=>{if(i.detail.actionId!=="my-rename")return;const e=i.target.closest("modus-wc-tree-item");e&&(e.inlineLabelEdit=!0)};return w`
      <div style="height: 70px; text-align: center; width: 320px;">
        <modus-wc-typography>
          This demonstrates mixing built-in actions with a consumer-defined
          custom action. <br />
          Built-in: Add Child, Delete ; Consumer: Rename
        </modus-wc-typography>
      </div>
      <div style="width: 320px">
        <modus-wc-content-tree
          id=${a}
          search-placeholder=${t["search-placeholder"]}
          .includeSearch=${t["include-search"]}
          .includeActions=${!0}
          .items=${c}
          @itemAdded=${u}
          @itemDeleted=${u}
          @treeActionClick=${o}
        ></modus-wc-content-tree>
      </div>
    `}},L={name:"API Reference",parameters:{docs:{description:{story:"\n### Props\n\n| Name              | Type       | Default      | Description                                       |\n|-------------------|------------|--------------|---------------------------------------------------|\n| customClass       | `string` | `''`       | Additional CSS class to apply to the component    |\n| searchPlaceholder | `string` | `'Search...'` | Placeholder text for the search input          |\n| includeSearch     | `boolean` | `true`    | Whether to display the search functionality       |\n| includeActions    | `boolean` | `true`    | Whether to display action buttons for tree items  |\n| items             | `ITreeItemData[]` | - | Data-driven tree data used to render items and nested children |\n| itemsReordering   | `boolean` | `false` | Enables drag-and-drop reordering for data-driven trees |\n\n#### Events\n\n| Name           | Payload                                                         | Description |\n|----------------|------------------------------------------------------------------|-------------|\n| itemsReordered | `{ items: ITreeItemData[]; parameters: ITreeItemReorderParameters }` | Emitted after a successful drag reorder with updated tree data and reorder metadata |\n| itemAdded      | `{ item: ITreeItemData; targetItemId: string; position: 'child' \\| 'above' \\| 'below'; items: ITreeItemData[] }` | Emitted when a built-in add action completes. Set `tree.items = e.detail.items` to apply. |\n| itemDeleted    | `{ itemId: string; items: ITreeItemData[] }` | Emitted when a built-in delete action completes. Set `tree.items = e.detail.items` to apply. |\n| itemDuplicated | `{ item: ITreeItemData; itemId: string; items: ITreeItemData[] }` | Emitted when a built-in duplicate action completes. Set `tree.items = e.detail.items` to apply. |\n\n#### Methods\n\n| Name            | Signature                                                              | Description |\n|-----------------|------------------------------------------------------------------------|-------------|\n| `addChild`    | `(parentId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\| null>` | Returns updated items with `newItem` added as a child of `parentId`. |\n| `addAbove`    | `(siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\| null>` | Returns updated items with `newItem` inserted above `siblingId`. |\n| `addBelow`    | `(siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\| null>` | Returns updated items with `newItem` inserted below `siblingId`. |\n| `deleteItem`  | `(itemId: string) => Promise<ITreeItemData[]>` | Returns updated items with the specified item removed. |\n| `duplicateItem` | `(itemId: string) => Promise<ITreeItemData[] \\| null>` | Returns updated items with a clone of the item inserted after it. |\n\n---\n\n### Tree View\n\n#### Props\n\n| Name        | Type       | Default   | Description                                           |\n|-------------|------------|-----------|-------------------------------------------------------|\n| customClass | `string` | `''`    | Additional CSS class to apply to the tree view        |\n| isSubList   | `boolean` | `false` | Whether the tree view is a sublist of another tree item |\n| multiSelect | `boolean` | `false` | Enables additive (Ctrl/Cmd) and range (Shift) selection behavior |\n| showConnectorLine | `boolean` | `true` | Shows or hides connector lines for nested sublists |\n\n#### Events\n\n| Name                | Payload                          | Description |\n|---------------------|----------------------------------|-------------|\n| itemSelectionChange | `{ selectedValues: string[] }` | Emitted when selected tree item values change |\n\n---\n\n### Tree Item\n\n#### Props\n\n| Name            | Type                                   | Default   | Description                                                  |\n|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|\n| label           | `string`                             | -         | The label text for the tree item (required)                  |\n| value           | `string`                             | `''`    | The value associated with the tree item                      |\n| disabled        | `boolean`                            | `false` | Whether the tree item is disabled                            |\n| checkbox        | `boolean`                            | `false` | Whether to display a checkbox for the tree item              |\n| selected        | `boolean`                            | -         | Whether the tree item is selected (mutable, reflected)       |\n| checked         | `boolean`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |\n| hasSubtree      | `boolean`                            | `false` | Whether the tree item has a subtree                          |\n| treeItemActions | `ITreeItemActions[]`                 | -         | Array of actions to display for the tree item                |\n| inlineLabelEdit | `boolean`                            | `false` | Enables inline text editing for the item label               |\n| itemsReordering | `boolean`                            | `false` | Shows drag handle and enables drag/drop item reordering      |\n| size            | `'xs' | 'sm' | 'md' | 'lg'`    | `'xs'`  | The size of the tree item                                    |\n| customClass     | `string`                             | `''`    | Additional CSS class to apply to the tree item               |\n| lazyLoading     | `boolean`                            | `false` | When `true` and the item is expanded, shows a spinner in place of children. Managed automatically by the content tree when `getChildren` is provided. |\n| hasChildren     | `boolean`                            | -         | Hint that the item has unloaded children. Used with `getChildren` on the content tree to show the expand chevron before children are fetched. |\n\n#### Events\n\n| Name             | Payload                          | Description                                     |\n|------------------|----------------------------------|-------------------------------------------------|\n| itemSelect       | `{ value: string }`            | Emitted when a tree item is selected            |\n| selectionsChange | `{ selectedValues: string[] }` | Emitted when the selection state changes        |\n| itemExpand       | `string`                       | Emitted with the item's `value` when it is expanded. Use this to trigger lazy data loading. |\n| itemLabelChange  | `string`                       | Emitted when inline label editing is committed |\n| itemReordered    | `ITreeItemReorderedEventDetail` | Emitted when a drag/drop reorder operation completes for the item |\n\n#### Methods\n\n| Name            | Type                      | Description                |\n|-----------------|---------------------------|----------------------------|\n| collapseSubTree | `() => Promise<void>`   | Collapses the subtree      |\n| expandSubTree   | `() => Promise<void>`   | Expands the subtree        |\n| setIndeterminateState | `(indeterminate: boolean) => Promise<void>` | Sets checkbox indeterminate state |\n\n---\n\n### Tree Actions\n\n#### Props\n\n| Name    | Type                                | Default  | Description                          |\n|---------|-------------------------------------|----------|--------------------------------------|\n| actions | `ITreeItemActions[]`              | -        | Array of actions to display          |\n| size    | `'xs' | 'sm' | 'md' | 'lg'` | `'xs'` | The size of the action buttons       |\n\n#### Behavior\n\n- Renders the first action as a direct icon button for fast access.\n- Renders remaining actions in a \"More actions\" dropdown menu.\n- When the `delete` action is clicked, a confirmation UI is shown before emitting `treeActionClick`.\n- Automatically closes other open tree-action dropdowns when a new one opens.\n\n#### Events\n\n| Name            | Payload                                   | Description                                |\n|-----------------|-------------------------------------------|--------------------------------------------|\n| treeActionClick | `{ actionId: string; actionName: string }` | Emitted when an action is clicked       |\n| dropdownOpened  | `HTMLElement`                           | Emitted when the dropdown is opened        |\n\n---\n\n### Interfaces\n\n#### ITreeItemActions\n\n```typescript\ninterface ITreeItemActions {\n  id: string;                           // Unique identifier for the action\n  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'\n  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon\n  label: string;                        // Text label for the action\n  ariaLabel?: string;                   // Optional label for accessibility\n  disabled?: boolean;                   // Optional flag to disable the action\n}\n```\n"}},controls:{disable:!0}},render:()=>w``};var R,j,M;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        .itemsReordering=\${args['items-reordering']}
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
}`,...(M=(j=h.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var N,U,z;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Tree Item',
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive example showing tree item features: checkbox, start icon, and actions.'
      },
      source: {
        code: \`
<modus-wc-tree-view>
  <modus-wc-tree-item 
    label="Project Folder" 
    value="project" 
    checkbox="true"
    tree-item-actions='[
      {"id":"edit","icon":"pencil","label":"Edit"},
      {"id":"delete","icon":"trash","label":"Delete"}
    ]'>
    <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
\`
      }
    }
  },
  render: () => {
    const actions = [{
      id: 'edit',
      icon: 'pencil',
      label: 'Edit'
    }, {
      id: 'delete',
      icon: 'trash',
      label: 'Delete'
    }];
    return html\`
      <modus-wc-tree-view>
        <modus-wc-tree-item
          label="Project Folder"
          value="project"
          .checkbox=\${true}
          .treeItemActions=\${actions}
        >
          <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    \`;
  }
}`,...(z=(U=b.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var W,B,H;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Tree Item - With Start Icon',
  parameters: {
    docs: {
      description: {
        story: 'Tree items can display custom icons at the start using the start-icon slot. This is useful for representing file types, folders, or custom item types.'
      },
      source: {
        code: \`
<modus-wc-tree-view>
  <modus-wc-tree-item label="Folder" value="folder">
    <modus-wc-icon slot="start-icon" name="folder"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Document.pdf" value="document">
    <modus-wc-icon slot="start-icon" name="description"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Image.png" value="image">
    <modus-wc-icon slot="start-icon" name="image"></modus-wc-icon>
  </modus-wc-tree-item>
  <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
    <modus-wc-icon slot="start-icon" name="folder_open"></modus-wc-icon>
    <modus-wc-tree-view is-sub-list="true">
      <modus-wc-tree-item label="Code" value="code">
        <modus-wc-icon slot="start-icon" name="code"></modus-wc-icon>
      </modus-wc-tree-item>
    </modus-wc-tree-view>
  </modus-wc-tree-item>
</modus-wc-tree-view>
\`
      }
    }
  },
  render: () => {
    return html\`
      <modus-wc-tree-view>
        <modus-wc-tree-item label="Folder" value="folder">
          <modus-wc-icon slot="start-icon" name="folder_closed"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="Document.pdf" value="document">
          <modus-wc-icon slot="start-icon" name="file"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="Image.png" value="image">
          <modus-wc-icon slot="start-icon" name="image"></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item
          label="Projects"
          .hasSubtree=\${true}
          value="projects"
        >
          <modus-wc-icon slot="start-icon" name="folder_open"></modus-wc-icon>
          <modus-wc-tree-view is-sub-list="true">
            <modus-wc-tree-item label="Code" value="code">
              <modus-wc-icon slot="start-icon" name="code"></modus-wc-icon>
            </modus-wc-tree-item>
          </modus-wc-tree-view>
        </modus-wc-tree-item>
      </modus-wc-tree-view>
    \`;
  }
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var q,V,_;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Empty State',
  parameters: {
    docs: {
      description: {
        story: 'This example shows the content tree when no items are present. Consumers can provide a custom empty state through the default slot.'
      },
      source: {
        code: \`
<style>
  .modus-wc-content-tree-empty-story {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
    min-height: 500px;
    padding: 1rem;
  }

  .modus-wc-content-tree-empty-story .modus-wc-content-tree-empty-text {
    color: #6a6e79;
    font-size: 18px;
    text-align: center;
    font-weight: 400;
  }
</style>
<script>
function handleCreateNew(tree) {
  tree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
  tree.items = [{ id: 'new-item', label: 'New Item' }];
}
<\/script>

<modus-wc-content-tree
  search-placeholder="Search..."
  include-search="true"
>
  <div class="modus-wc-content-tree-empty-story">
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.3335 13.3601H10.6668V10.6934H13.3335V5.36011H5.3335V13.3601ZM45.3335 5.36011H34.6668V10.6934H45.3335V5.36011ZM10.6668 19.3601H5.3335V31.3601H10.6668V19.3601ZM18.6668 45.3601H29.3335V40.0268H18.6668V45.3601ZM10.6668 37.3601H5.3335V45.3601H13.3335V40.0268H10.6668V37.3601ZM50.6668 5.36011V10.6934H53.3335V13.3601H58.6668V5.36011H50.6668ZM53.3335 31.3601H58.6668V19.3601H53.3335V31.3601ZM57.4402 41.5468L34.2135 32.0801C34.0269 32.0062 33.8275 31.9699 33.6268 31.9734H33.4668C33.3068 31.9734 33.1735 32.0001 33.0402 32.0801C32.9868 32.0801 32.9335 32.0801 32.8802 32.1334C32.6935 32.2134 32.5068 32.3201 32.3735 32.4801C32.2402 32.6401 32.1068 32.8001 32.0268 32.9868L31.9735 33.1468C31.9202 33.2801 31.8935 33.4401 31.8935 33.5734V33.7334C31.8935 33.9201 31.9202 34.1334 32.0002 34.3201L41.4668 57.5468C41.7335 58.1868 42.3735 58.6134 43.0668 58.6134H43.2002C43.9468 58.5601 44.5868 58.0268 44.7468 57.2801L46.6402 49.1201L54.3202 56.8001C54.6402 57.1201 55.0935 57.3068 55.5468 57.3068C56.0002 57.3068 56.4268 57.1201 56.7735 56.8001C57.4402 56.1334 57.4402 55.0401 56.7735 54.3734L49.1202 46.6934L57.3068 44.8001C58.0268 44.6401 58.5868 44.0001 58.6402 43.2534H58.5868C58.6087 42.8933 58.5178 42.5354 58.3266 42.2294C58.1354 41.9235 57.8535 41.6849 57.5202 41.5468M18.6668 10.6934H29.3335V5.36011H18.6668V10.6934Z"
        fill="#6A6E79"
      />
    </svg>
    <modus-wc-typography
      hierarchy="p"
      label="Empty Content Tree"
      size="lg"
      weight="normal"
      custom-class="modus-wc-content-tree-empty-text"
    ></modus-wc-typography>
    <modus-wc-button variant="outline"
      onclick="handleCreateNew(this.closest('modus-wc-content-tree'))">
      Create node
    </modus-wc-button>
  </div>
</modus-wc-content-tree>
\`
      }
    }
  },
  render: args => {
    type ContentTreeElement = HTMLElement & {
      includeActions?: boolean;
      items?: ITreeItemData[];
    };
    const focusEditMode = (contentTree: ContentTreeElement, id: string) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const treeItems = Array.from(contentTree.querySelectorAll('modus-wc-tree-item'));
          const el = treeItems.find(item => item.value === id);
          if (el) {
            el.inlineLabelEdit = true;
          }
        });
      });
    };
    const handleAddNewItem = (event: Event) => {
      const contentTree = (event.currentTarget as HTMLElement)?.closest('modus-wc-content-tree');
      if (!contentTree) return;
      const newId = \`new-item-\${Date.now()}\`;
      contentTree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
      contentTree.items = [{
        id: newId,
        label: 'New Item'
      }];
      focusEditMode(contentTree, newId);
    };
    return html\`
      <style>
        .modus-wc-content-tree-empty-story {
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          justify-content: center;
          min-height: 500px;
          padding: 1rem;
        }

        .modus-wc-content-tree-empty-story .modus-wc-content-tree-empty-text {
          color: #6a6e79;
          font-size: 18px;
          text-align: center;
          font-weight: 400;
        }
      </style>
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        custom-class=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
      >
        <div class="modus-wc-content-tree-empty-story">
          <modus-wc-typography
            hierarchy="p"
            label="Empty Content Tree"
            size="lg"
            weight="normal"
            custom-class="modus-wc-content-tree-empty-text"
          ></modus-wc-typography>

          <modus-wc-button variant="outline" @buttonClick=\${handleAddNewItem}>
            Create node
          </modus-wc-button>
        </div>
      </modus-wc-content-tree>
    \`;
  }
}`,...(_=(V=v.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var F,G,Z;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Single Selection',
  parameters: {
    docs: {
      description: {
        story: 'Content tree with single selection mode. Click on any tree item to select it. Only one item can be selected at a time.'
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
        custom-class=\${args['custom-class']}
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
}`,...(Z=(G=I.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var O,Q,K;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(K=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var J,X,Y;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Disabled Selection',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates tree items with disabled state. Disabled items cannot be selected or interacted with.'
      },
      source: {
        code: \`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Archives" value="archives" disabled="true"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Legacy Project" value="legacy" disabled="true"></modus-wc-tree-item>
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
          <modus-wc-tree-item label="Documents" value="documents">
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Archives"
            value="archives"
            .disabled=\${true}
          >
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=\${true}
            value="projects"
          >
            <modus-wc-tree-view is-sub-list="true">
              <modus-wc-tree-item label="Website Redesign" value="website">
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Legacy Project"
                value="legacy"
                .disabled=\${true}
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    \`;
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'With Actions',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates custom item actions including visibility toggle, inline edit, duplicate, add sibling, add child, and delete.'
      },
      source: {
        code: \`
<script>
const getActions = (disabled) => [
  { id: 'toggle-visibility', label: disabled ? 'Hidden' : 'Visible', icon: disabled ? 'visibility_off' : 'visibility_on' },
  { id: 'edit-label', label: 'Edit Label', icon: 'pencil' },
  { id: 'duplicate', label: 'Duplicate', icon: 'copy_content' },
  { id: 'add-node-above', label: 'Add Node Above', icon: 'add' },
  { id: 'add-node-below', label: 'Add Node Below', icon: 'add' },
  { id: 'add-child', label: 'Add Child', icon: 'subdirectory_arrow_right' },
  { id: 'delete', label: 'Delete', icon: 'delete' }
];

const assignActions = (item) => {
  item.inlineLabelEdit = false;
  item.treeItemActions = getActions(!!item.disabled);
  item.querySelectorAll('modus-wc-tree-item').forEach((child) => {
    child.inlineLabelEdit = false;
    child.treeItemActions = getActions(!!child.disabled);
  });
};

const createNode = (label = 'New Node') => {
  const node = document.createElement('modus-wc-tree-item');
  node.label = label;
  node.value = 'new-node-' + Date.now() + '-' + Math.random();
  assignActions(node);
  return node;
};

const handleAction = (event) => {
  const treeItem = event.target.closest('modus-wc-tree-item');
  if (!treeItem) return;

  switch (event.detail.actionId) {
    case 'delete':
      treeItem.remove();
      return;
    case 'duplicate':
      treeItem.after(createNode(treeItem.label));
      return;
    case 'add-node-above':
      treeItem.before(createNode());
      return;
    case 'add-node-below':
      treeItem.after(createNode());
      return;
    case 'add-child': {
      let subList = treeItem.querySelector(':scope > modus-wc-tree-view');
      if (!subList) {
        subList = document.createElement('modus-wc-tree-view');
        subList.setAttribute('is-sub-list', 'true');
        treeItem.appendChild(subList);
      }
      treeItem.hasSubtree = true;
      subList.appendChild(createNode('New Child'));
      return;
    }
    case 'toggle-visibility':
      treeItem.disabled = !treeItem.disabled;
      treeItem.treeItemActions = getActions(!!treeItem.disabled);
      return;
    case 'edit-label':
      treeItem.inlineLabelEdit = true;
      return;
  }
};

<\/script>

<modus-wc-content-tree include-search="true" include-actions="true">
  <modus-wc-tree-view>
    <modus-wc-tree-item label="Documents" value="documents"></modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" value="projects"></modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" value="resources"></modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>

<script>
document
  .querySelector('modus-wc-content-tree')
  .addEventListener('treeActionClick', handleAction);
<\/script>
\`
      }
    }
  },
  render: args => {
    const getActions = (disabled: boolean) => [{
      id: 'toggle-visibility',
      label: disabled ? 'Hidden' : 'Visible',
      icon: disabled ? 'visibility_off' : 'visibility_on',
      ariaLabel: disabled ? 'Set item to visible' : 'Set item to hidden',
      size: 'sm'
    }, {
      id: 'edit-label',
      label: 'Edit Label',
      icon: 'pencil',
      ariaLabel: 'Edit item label',
      size: 'sm'
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      icon: 'copy_content',
      ariaLabel: 'Duplicate item',
      size: 'sm'
    }, {
      id: 'add-node-above',
      label: 'Add Node Above',
      icon: 'add',
      ariaLabel: 'Add node above',
      size: 'sm'
    }, {
      id: 'add-node-below',
      label: 'Add Node Below',
      icon: 'add',
      ariaLabel: 'Add node below',
      size: 'sm'
    }, {
      id: 'add-child',
      label: 'Add Child',
      icon: 'subdirectory_arrow_right',
      ariaLabel: 'Add child node',
      size: 'sm'
    }, {
      id: 'delete',
      label: 'Delete',
      icon: 'delete',
      ariaLabel: 'Delete item',
      size: 'sm'
    }];
    const assignActions = (item: ITreeItemElement) => {
      item.inlineLabelEdit = false;
      item.treeItemActions = getActions(!!item.disabled);
      item.querySelectorAll('modus-wc-tree-item').forEach(child => {
        const treeChild = child as ITreeItemElement;
        treeChild.inlineLabelEdit = false;
        treeChild.treeItemActions = getActions(!!treeChild.disabled);
      });
    };
    const createNode = (label = 'New Node') => {
      const node = document.createElement('modus-wc-tree-item') as ITreeItemElement;
      node.label = label;
      node.value = \`new-node-\${Date.now()}-\${Math.random()}\`;
      assignActions(node);
      return node;
    };
    let lastActionSignature: string | null = null;
    const handleAction = (event: CustomEvent<{
      actionId: string;
    }>) => {
      const source = event.target as HTMLElement;
      const treeItem = source.closest('modus-wc-tree-item');
      if (!treeItem) return;
      const signature = \`\${event.detail.actionId}:\${treeItem.value}:\${event.timeStamp}\`;
      if (lastActionSignature === signature) return;
      lastActionSignature = signature;
      queueMicrotask(() => {
        if (lastActionSignature === signature) {
          lastActionSignature = null;
        }
      });
      switch (event.detail.actionId) {
        case 'delete':
          treeItem.remove();
          break;
        case 'duplicate':
          {
            const duplicateNode = createNode(treeItem.label);
            treeItem.after(duplicateNode);
            return;
          }
        case 'add-node-above':
          treeItem.before(createNode());
          break;
        case 'add-node-below':
          treeItem.after(createNode());
          break;
        case 'add-child':
          {
            let subList = treeItem.querySelector(':scope > modus-wc-tree-view');
            if (!subList) {
              subList = document.createElement('modus-wc-tree-view');
              subList.setAttribute('is-sub-list', 'true');
              treeItem.appendChild(subList);
            }
            treeItem.hasSubtree = true;
            subList.appendChild(createNode('New Child'));
            break;
          }
        case 'toggle-visibility':
          treeItem.disabled = !treeItem.disabled;
          treeItem.treeItemActions = getActions(!!treeItem.disabled);
          break;
        case 'edit-label':
          treeItem.inlineLabelEdit = true;
          break;
      }
    };
    return html\`
      <modus-wc-content-tree
        class="with-actions-tree"
        search-placeholder=\${args['search-placeholder']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
        @treeActionClick=\${handleAction}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            value="documents"
            .treeItemActions=\${getActions(false)}
          ></modus-wc-tree-item>

          <modus-wc-tree-item
            label="Projects"
            value="projects"
            .treeItemActions=\${getActions(false)}
          ></modus-wc-tree-item>

          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=\${getActions(false)}
          ></modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    \`;
  }
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,se,re;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Items Reordering',
  parameters: {
    docs: {
      description: {
        story: 'Enables drag-and-drop reordering with top/bottom drop-line indicators for data-driven \`items\` in the same level.'
      },
      source: {
        code: \`
<script>
const items = [
  {
    id: 'phase-1',
    label: 'Phase 1',
    children: [
      { id: 'backlog', label: 'Backlog' },
      { id: 'in-progress', label: 'In Progress' },
      { id: 'review', label: 'Review' }
    ]
  },
  {
    id: 'phase-2',
    label: 'Phase 2',
    children: [
      { id: 'qa', label: 'QA' },
      { id: 'uat', label: 'UAT' },
      { id: 'done', label: 'Done' }
    ]
  }
];
<\/script>

<modus-wc-content-tree
  include-search="false"
  include-actions="false"
  items-reordering="true"
  .items={items}>
</modus-wc-content-tree>
\`
      }
    }
  },
  render: args => {
    const state = {
      items: [...(args.items ?? nestedItemsReorderingData)]
    };
    const handleItemsReordered = (event: CustomEvent<{
      items: ITreeItemData[];
      parameters: {
        itemId: string;
        oldPosition: {
          parentId: string | null;
          index: number;
        };
        newPosition: {
          parentId: string | null;
          index: number;
        };
      };
    }>) => {
      state.items = [...event.detail.items];
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      tree.items = state.items;
    };
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        customClass=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
        .itemsReordering=\${true}
        .items=\${state.items}
        @itemsReordered=\${handleItemsReordered}
      ></modus-wc-content-tree>
    \`;
  }
}`,...(re=(se=A.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,de,ce;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Multi Select',
  parameters: {
    docs: {
      description: {
        story: 'Enables multi-select on the tree view. Use Ctrl/Cmd + click to toggle individual items, and Shift + click to select a contiguous range. Works across nested tree items.'
      },
      source: {
        code: \`
<modus-wc-content-tree search-placeholder="Search..." include-search="true" include-actions="true">
  <modus-wc-tree-view multi-select="true">
    <modus-wc-tree-item label="Documents" has-subtree="true" value="documents">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Report.pdf" value="report"></modus-wc-tree-item>
        <modus-wc-tree-item label="Proposal.docx" value="proposal"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Projects" has-subtree="true" value="projects">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Website Redesign" value="website"></modus-wc-tree-item>
        <modus-wc-tree-item label="Mobile App" value="mobile-app"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Resources" has-subtree="true" value="resources">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="Templates" value="templates"></modus-wc-tree-item>
        <modus-wc-tree-item label="Guidelines" value="guidelines"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
    <modus-wc-tree-item label="Archives" has-subtree="true" value="archives">
      <modus-wc-tree-view is-sub-list="true">
        <modus-wc-tree-item label="2024" value="2024"></modus-wc-tree-item>
        <modus-wc-tree-item label="2025" value="2025"></modus-wc-tree-item>
      </modus-wc-tree-view>
    </modus-wc-tree-item>
  </modus-wc-tree-view>
</modus-wc-content-tree>
\`
      }
    },
    actions: {
      handles: ['itemSelect', 'itemSelectionChange']
    }
  },
  render: args => {
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        custom-class=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
      >
        <modus-wc-tree-view .multiSelect=\${true}>
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
              <modus-wc-tree-item label="Mobile App" value="mobile-app">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            .hasSubtree=\${true}
            value="resources"
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item label="Templates" value="templates">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Guidelines" value="guidelines">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Archives"
            .hasSubtree=\${true}
            value="archives"
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item label="2024" value="2024">
              </modus-wc-tree-item>
              <modus-wc-tree-item label="2025" value="2025">
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    \`;
  }
}`,...(ce=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ae,le,me;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Lazy Loading',
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates lazy loading using the data-driven \\\`items\\\` prop and \\\`itemExpand\\\` event. Items with \\\`hasChildren: true\\\` and no \\\`children\\\` show an expand chevron; when expanded, the tree shows a loader until the consumer provides children by updating \\\`items\\\`. Expand "Documents", "Projects", or "Resources" to see the loading spinner and then the loaded children.\`
      },
      source: {
        code: \`
<script>
const initialItems = [
  { id: 'documents', label: 'Documents', hasChildren: true },
  { id: 'projects', label: 'Projects', hasChildren: true },
  { id: 'resources', label: 'Resources', hasChildren: true },
];

const mockData = {
  documents: [
    { id: 'report', label: 'Report.pdf' },
    { id: 'proposal', label: 'Proposal.docx' },
    { id: 'notes', label: 'Meeting Notes.txt' },
  ],
  projects: [
    { id: 'website', label: 'Website Redesign', hasChildren: true },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'api', label: 'API Integration' },
  ],
  resources: [
    { id: 'templates', label: 'Templates' },
    { id: 'guide', label: 'Style Guide' },
  ],
  website: [
    { id: 'design', label: 'Design Mockups' },
    { id: 'dev', label: 'Development' },
  ],
};

function updateItem(items, parentId, updater) {
  return items.map((item) => {
    if (item.id === parentId) return updater(item);
    if (item.children) {
      return {
        ...item,
        children: updateItem(item.children, parentId, updater),
      };
    }
    return item;
  });
}

const tree = document.querySelector('modus-wc-content-tree');
tree.items = initialItems;

tree.addEventListener('itemExpand', async (event) => {
  const itemId = event.detail;

  const findItem = (items) => {
    for (const item of items) {
      if (item.id === itemId) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
  };

  const item = findItem(tree.items);
  if (item?.children?.length) return;

  const children = await new Promise((resolve) =>
    setTimeout(() => resolve(mockData[itemId] ?? []), 1500)
  );

  tree.items = updateItem(tree.items, itemId, (item) => ({
    ...item,
    children,
    hasChildren: children.length > 0,
  }));
});
<\/script>

<modus-wc-content-tree search-placeholder="Search..." include-search="true"></modus-wc-content-tree>
\`
      }
    },
    actions: {
      handles: ['itemExpand']
    }
  },
  render: args => {
    const initialItems: ITreeItemData[] = [{
      id: 'documents',
      label: 'Documents',
      hasChildren: true
    }, {
      id: 'projects',
      label: 'Projects',
      hasChildren: true
    }, {
      id: 'resources',
      label: 'Resources',
      hasChildren: true
    }];
    const mockData: Record<string, ITreeItemData[]> = {
      documents: [{
        id: 'report',
        label: 'Report.pdf'
      }, {
        id: 'proposal',
        label: 'Proposal.docx'
      }, {
        id: 'notes',
        label: 'Meeting Notes.txt'
      }],
      projects: [{
        id: 'website',
        label: 'Website Redesign',
        hasChildren: true
      }, {
        id: 'mobile',
        label: 'Mobile App'
      }, {
        id: 'api',
        label: 'API Integration'
      }],
      resources: [{
        id: 'templates',
        label: 'Templates'
      }, {
        id: 'guide',
        label: 'Style Guide'
      }],
      website: [{
        id: 'design',
        label: 'Design Mockups'
      }, {
        id: 'dev',
        label: 'Development'
      }]
    };
    const updateItem = (items: ITreeItemData[], parentId: string, updater: (item: ITreeItemData) => ITreeItemData): ITreeItemData[] => items.map(item => {
      if (item.id === parentId) return updater(item);
      if (item.children) return {
        ...item,
        children: updateItem(item.children, parentId, updater)
      };
      return item;
    });
    const findItem = (items: ITreeItemData[], id: string): ITreeItemData | undefined => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItem(item.children, id);
          if (found) return found;
        }
      }
      return undefined;
    };
    const handleItemExpand = async (event: CustomEvent<string>) => {
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      const itemId = event.detail;
      const current = tree.items ?? initialItems;
      const item = findItem(current, itemId);
      if (item?.children?.length) return;
      const children = await new Promise<ITreeItemData[]>(resolve => setTimeout(() => resolve(mockData[itemId] ?? []), 1500));
      tree.items = updateItem(current, itemId, i => ({
        ...i,
        children,
        hasChildren: children.length > 0
      }));
    };
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${false}
        .items=\${initialItems}
        @itemExpand=\${handleItemExpand}
      ></modus-wc-content-tree>
    \`;
  }
}`,...(me=(le=C.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ue,we,he;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'With Built-in Actions',
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates built-in Add Child, Add Above, Add Below, Duplicate, and Delete actions.
When the \\\`items\\\` prop is used, every node automatically receives default action buttons.
The tree emits \\\`itemAdded\\\`, \\\`itemDeleted\\\`, or \\\`itemDuplicated\\\` with the proposed new \\\`items\\\` array.
The consumer updates \\\`tree.items\\\` to apply the change -- this is the single source of truth.
No \\\`treeItemActions\\\` configuration is required -- action buttons appear out of the box.\`
      },
      source: {
        code: \`
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  tree.items = [
    { id: 'root-1', label: 'Design System', children: [
      { id: 'child-1', label: 'Components' },
      { id: 'child-2', label: 'Tokens' },
    ]},
    { id: 'root-2', label: 'Documentation', children: [
      { id: 'child-3', label: 'Getting Started' },
    ]},
    { id: 'root-3', label: 'Changelog' },
  ];

  // Single source of truth: update tree.items from event payload.
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  tree.addEventListener('itemDuplicated', applyUpdate);
<\/script>\`
      }
    },
    actions: {
      handles: ['itemAdded', 'itemDeleted', 'itemDuplicated', 'itemsReordered']
    }
  },
  render: args => {
    const initialItems: ITreeItemData[] = [{
      id: 'root-1',
      label: 'Design System',
      children: [{
        id: 'child-1',
        label: 'Components'
      }, {
        id: 'child-2',
        label: 'Tokens'
      }]
    }, {
      id: 'root-2',
      label: 'Documentation',
      children: [{
        id: 'child-3',
        label: 'Getting Started'
      }]
    }, {
      id: 'root-3',
      label: 'Changelog'
    }];
    const applyUpdate = (e: CustomEvent<{
      items: ITreeItemData[];
    }>) => {
      const tree = e.currentTarget as HTMLElement & {
        items: ITreeItemData[];
      };
      tree.items = e.detail.items;
    };
    return html\`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=\${args['search-placeholder']}
          .includeSearch=\${args['include-search']}
          .includeActions=\${true}
          .items=\${initialItems}
          @itemAdded=\${applyUpdate}
          @itemDeleted=\${applyUpdate}
          @itemDuplicated=\${applyUpdate}
        ></modus-wc-content-tree>
      </div>
    \`;
  }
}`,...(he=(we=S.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var be,pe,ve;$.parameters={...$.parameters,docs:{...(be=$.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'With Built-in Actions + Lazy Loading',
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates lazy loading with built-in actions using a controlled pattern.

**During lazy loading**, the consumer disables actions on the loading node via \\\`treeItemActions\\\` to prevent data merge conflicts. Once children arrive and the spinner clears, actions are re-enabled.

The consumer controls the spinner via the \\\`lazyLoading\\\` field on \\\`ITreeItemData\\\` -- set it to \\\`true\\\` when fetching starts, then provide \\\`children\\\` and set it to \\\`false\\\` once data arrives.

The consumer owns all state: every \\\`itemAdded\\\`, \\\`itemDeleted\\\`, or \\\`itemDuplicated\\\` event is applied by setting \\\`tree.items = e.detail.items\\\`.

Expand "Projects" or "Resources" to trigger the 2-second lazy load, then observe the disabled actions.\`
      },
      source: {
        code: \`
<modus-wc-content-tree id="lazy-actions-tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#lazy-actions-tree');

  const setItem = (items, id, patch) =>
    items.map(item =>
      item.id === id
        ? { ...item, ...patch }
        : { ...item, children: item.children ? setItem(item.children, id, patch) : undefined }
    );

  const disabledActions = [
    { id: 'add-child', icon: 'add', label: 'Add Child', disabled: true },
    { id: 'add-above', icon: 'arrow_upward', label: 'Add Above', disabled: true },
    { id: 'add-below', icon: 'arrow_downward', label: 'Add Below', disabled: true },
    { id: 'duplicate', icon: 'content_copy', label: 'Duplicate', disabled: true },
    { id: 'delete', icon: 'delete', label: 'Delete' },
  ];

  tree.items = [
    { id: 'design', label: 'Design System', children: [
      { id: 'components', label: 'Components' },
      { id: 'tokens', label: 'Tokens' },
    ]},
    { id: 'projects', label: 'Projects', hasChildren: true },
    { id: 'resources', label: 'Resources', hasChildren: true },
  ];

  const loadedIds = new Set();

  tree.addEventListener('itemExpand', async (e) => {
    const id = e.detail;
    const found = tree.items.find(i => i.id === id);
    if (!found?.hasChildren || loadedIds.has(id)) return;
    if (found.children?.length) return;

    loadedIds.add(id);

    tree.items = setItem(tree.items, id, {
      lazyLoading: true,
      treeItemActions: disabledActions,
    });

    await new Promise(r => setTimeout(r, 2000));

    tree.items = setItem(tree.items, id, current => ({
      lazyLoading: false,
      hasChildren: true,
      treeItemActions: undefined,
      children: [
        ...(current.children ?? []),
        { id: id + '-server-1', label: 'Server Item 1' },
        { id: id + '-server-2', label: 'Server Item 2' },
      ],
    }));
  });

  // Consumer owns the state: apply every action by updating tree.items.
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  tree.addEventListener('itemDuplicated', applyUpdate);
<\/script>\`
      }
    },
    actions: {
      handles: ['itemAdded', 'itemDeleted', 'itemDuplicated', 'itemExpand']
    }
  },
  render: args => {
    const setItem = (items: ITreeItemData[], id: string, patch: Partial<ITreeItemData> | ((current: ITreeItemData) => Partial<ITreeItemData>)): ITreeItemData[] => items.map(item => {
      if (item.id === id) {
        const resolved = typeof patch === 'function' ? patch(item) : patch;
        return {
          ...item,
          ...resolved
        };
      }
      return {
        ...item,
        children: item.children ? setItem(item.children, id, patch) : undefined
      };
    });
    const initialItems: ITreeItemData[] = [{
      id: 'design',
      label: 'Design System',
      children: [{
        id: 'components',
        label: 'Components'
      }, {
        id: 'tokens',
        label: 'Tokens'
      }]
    }, {
      id: 'projects',
      label: 'Projects',
      hasChildren: true
    }, {
      id: 'resources',
      label: 'Resources',
      hasChildren: true
    }];
    const loadedIds = new Set<string>();
    const findItem = (items: ITreeItemData[], id: string): ITreeItemData | null => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItem(item.children, id);
          if (found) return found;
        }
      }
      return null;
    };

    // Actions with all non-delete actions disabled -- used while a node is loading.
    const disabledActions = [{
      id: 'add-child',
      icon: 'add',
      label: 'Add Child',
      disabled: true
    }, {
      id: 'add-above',
      icon: 'arrow_upward',
      label: 'Add Above',
      disabled: true
    }, {
      id: 'add-below',
      icon: 'arrow_downward',
      label: 'Add Below',
      disabled: true
    }, {
      id: 'duplicate',
      icon: 'content_copy',
      label: 'Duplicate',
      disabled: true
    }, {
      id: 'delete',
      icon: 'delete',
      label: 'Delete'
    }];
    const handleItemExpand = async (e: CustomEvent<string>) => {
      const tree = e.currentTarget as HTMLElement & {
        items: ITreeItemData[];
      };
      const id = e.detail;
      const item = findItem(tree.items, id);
      if (!item?.hasChildren || loadedIds.has(id)) return;
      if (item.children && item.children.length > 0) return;
      loadedIds.add(id);
      tree.items = setItem(tree.items, id, {
        lazyLoading: true,
        treeItemActions: disabledActions
      });
      await new Promise(r => setTimeout(r, 2000));
      tree.items = setItem(tree.items, id, (current: ITreeItemData) => ({
        lazyLoading: false,
        hasChildren: true,
        treeItemActions: undefined,
        children: [...(current.children ?? []), {
          id: \`\${id}-child-1\`,
          label: 'Server Item 1'
        }, {
          id: \`\${id}-child-2\`,
          label: 'Server Item 2'
        }]
      }));
    };
    const applyUpdate = (e: CustomEvent<{
      items: ITreeItemData[];
    }>) => {
      const tree = e.currentTarget as HTMLElement & {
        items: ITreeItemData[];
      };
      tree.items = e.detail.items;
    };
    return html\`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=\${args['search-placeholder']}
          .includeSearch=\${args['include-search']}
          .includeActions=\${true}
          .items=\${initialItems}
          @itemExpand=\${handleItemExpand}
          @itemAdded=\${applyUpdate}
          @itemDeleted=\${applyUpdate}
          @itemDuplicated=\${applyUpdate}
        ></modus-wc-content-tree>
      </div>
    \`;
  }
}`,...(ve=(pe=$.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var Ie,ge,ye;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Lazy Loading - Actions Enabled During Load',
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates the case where all actions remain enabled while a node is lazy loading.
The user can add/delete/duplicate nodes while the spinner is showing.
When server data arrives, the consumer merges the server children with any user-added children so nothing is lost.

The consumer owns all state via \\\`tree.items\\\`. Every \\\`itemAdded\\\`, \\\`itemDeleted\\\`, or \\\`itemDuplicated\\\` event is applied by setting \\\`tree.items = e.detail.items\\\`.
When lazy load completes, \\\`tree.items\\\` already reflects all user changes, so the merge just appends server data.

This approach gives maximum flexibility at the cost of the consumer handling the merge logic.
Compare with the "With Built-in Actions + Lazy Loading" story where actions are disabled during loading.\`
      },
      source: {
        code: \`
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  // Patch a single item by id. Accepts a patch object or a function receiving the current item.
  const setItem = (items, id, patch) =>
    items.map(item => {
      if (item.id === id) {
        const resolved = typeof patch === 'function' ? patch(item) : patch;
        return { ...item, ...resolved };
      }
      return { ...item, children: item.children ? setItem(item.children, id, patch) : undefined };
    });

  tree.items = [
    { id: 'design', label: 'Design System', children: [
      { id: 'components', label: 'Components' },
      { id: 'tokens', label: 'Tokens' },
    ]},
    { id: 'projects', label: 'Projects', hasChildren: true },
    { id: 'resources', label: 'Resources', hasChildren: true },
  ];

  const loadedIds = new Set();

  tree.addEventListener('itemExpand', async (e) => {
    const id = e.detail;
    const item = tree.items.find(i => i.id === id);
    if (!item?.hasChildren || loadedIds.has(id)) return;
    if (item.children?.length) return;

    loadedIds.add(id);
    tree.items = setItem(tree.items, id, { lazyLoading: true });
    await new Promise(r => setTimeout(r, 3000));

    // tree.items already reflects all user changes made during loading
    // because syncItems kept it up to date. Append server data after.
    tree.items = setItem(tree.items, id, current => ({
      lazyLoading: false,
      hasChildren: true,
      children: [
        ...(current.children ?? []),
        { id: id + '-server-1', label: 'Server Item 1' },
        { id: id + '-server-2', label: 'Server Item 2' },
      ],
    }));
  });

  // Keep tree.items in sync after every action.
  // This ensures lazy load merge always works off the latest state.
  const syncItems = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', syncItems);
  tree.addEventListener('itemDeleted', syncItems);
  tree.addEventListener('itemDuplicated', syncItems);
<\/script>\`
      }
    },
    actions: {
      handles: ['itemAdded', 'itemDeleted', 'itemDuplicated', 'itemExpand']
    }
  },
  render: args => {
    const setItem = (items: ITreeItemData[], id: string, patch: Partial<ITreeItemData> | ((current: ITreeItemData) => Partial<ITreeItemData>)): ITreeItemData[] => items.map(item => {
      if (item.id === id) {
        const resolved = typeof patch === 'function' ? patch(item) : patch;
        return {
          ...item,
          ...resolved
        };
      }
      return {
        ...item,
        children: item.children ? setItem(item.children, id, patch) : undefined
      };
    });
    const initialItems: ITreeItemData[] = [{
      id: 'design',
      label: 'Design System',
      children: [{
        id: 'components',
        label: 'Components'
      }, {
        id: 'tokens',
        label: 'Tokens'
      }]
    }, {
      id: 'projects',
      label: 'Projects',
      hasChildren: true
    }, {
      id: 'resources',
      label: 'Resources',
      hasChildren: true
    }];
    const loadedIds = new Set<string>();
    const findItem = (items: ITreeItemData[], id: string): ITreeItemData | null => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children) {
          const found = findItem(item.children, id);
          if (found) return found;
        }
      }
      return null;
    };
    const handleItemExpand = async (e: CustomEvent<string>) => {
      const tree = e.currentTarget as HTMLElement & {
        items: ITreeItemData[];
      };
      const id = e.detail;
      const item = findItem(tree.items, id);
      if (!item?.hasChildren || loadedIds.has(id)) return;
      if (item.children && item.children.length > 0) return;
      loadedIds.add(id);
      tree.items = setItem(tree.items, id, {
        lazyLoading: true
      });
      await new Promise(r => setTimeout(r, 3000));

      // tree.items already reflects any adds/deletes the user did while loading
      // because itemAdded/Deleted/Duplicated handlers below kept it in sync.
      // Append server data after the current children.
      tree.items = setItem(tree.items, id, (current: ITreeItemData) => ({
        lazyLoading: false,
        hasChildren: true,
        children: [...(current.children ?? []), {
          id: \`\${id}-server-1\`,
          label: 'Server Item 1'
        }, {
          id: \`\${id}-server-2\`,
          label: 'Server Item 2'
        }]
      }));
    };

    // Keep tree.items in sync after every action so lazy load merges correctly.
    const syncItems = (e: CustomEvent<{
      items: ITreeItemData[];
    }>) => {
      const tree = e.currentTarget as HTMLElement & {
        items: ITreeItemData[];
      };
      tree.items = e.detail.items;
    };
    return html\`
      <div style="width: 320px">
        <modus-wc-content-tree
          search-placeholder=\${args['search-placeholder']}
          .includeSearch=\${args['include-search']}
          .includeActions=\${true}
          .items=\${initialItems}
          @itemExpand=\${handleItemExpand}
          @itemAdded=\${syncItems}
          @itemDeleted=\${syncItems}
          @itemDuplicated=\${syncItems}
        ></modus-wc-content-tree>
      </div>
    \`;
  }
}`,...(ye=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var fe,Ae,De;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Manual Control via @Method()',
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates the "State Manager pattern" where the consumer has full control.

\\\`includeActions\\\` is set to \\\`false\\\` -- no built-in action buttons render on tree nodes.
The consumer provides their own external toolbar and calls the element's public \\\`@Method()\\\` utilities
to compute a new items array, then sets \\\`tree.items\\\` to apply the change.

Available methods on the element:
- \\\`tree.addChild(parentId, newItem)\\\` — adds a new child under the given parent
- \\\`tree.addAbove(siblingId, newItem)\\\` — inserts a new item above the given sibling
- \\\`tree.addBelow(siblingId, newItem)\\\` — inserts a new item below the given sibling
- \\\`tree.deleteItem(itemId)\\\` — removes the item from the tree
- \\\`tree.duplicateItem(itemId)\\\` — clones the item (and all its children) after itself

All methods return a \\\`Promise<ITreeItemData[] | null>\\\` with the proposed new items array.
The consumer decides whether to apply it by setting \\\`tree.items = result\\\`.\`
      },
      source: {
        code: \`
<div style="display: flex; flex-direction: column; gap: 8px; width: 320px">
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <modus-wc-button id="btn-add-child">Add Child</modus-wc-button>
    <modus-wc-button id="btn-add-above">Add Above</modus-wc-button>
    <modus-wc-button id="btn-add-below">Add Below</modus-wc-button>
    <modus-wc-button id="btn-duplicate">Duplicate</modus-wc-button>
    <modus-wc-button id="btn-delete">Delete</modus-wc-button>
  </div>
  <modus-wc-content-tree id="tree" include-actions="false"></modus-wc-content-tree>
</div>
<script>
  const tree = document.querySelector('#tree');
  let selectedId = null;

  tree.items = [
    { id: 'root-1', label: 'Design System', children: [
      { id: 'child-1', label: 'Components' },
      { id: 'child-2', label: 'Tokens' },
    ]},
    { id: 'root-2', label: 'Documentation' },
    { id: 'root-3', label: 'Changelog' },
  ];

  tree.addEventListener('itemSelect', (e) => {
    selectedId = e.detail.value;
  });

  document.querySelector('#btn-add-child').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addChild(selectedId, { id: crypto.randomUUID(), label: 'New Child' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-add-above').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addAbove(selectedId, { id: crypto.randomUUID(), label: 'New Item' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-add-below').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.addBelow(selectedId, { id: crypto.randomUUID(), label: 'New Item' });
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-duplicate').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.duplicateItem(selectedId);
    if (newItems) tree.items = newItems;
  });

  document.querySelector('#btn-delete').addEventListener('click', async () => {
    if (!selectedId) return;
    const newItems = await tree.deleteItem(selectedId);
    tree.items = newItems;
    selectedId = null;
  });
<\/script>\`
      }
    }
  },
  render: args => {
    type TreeEl = HTMLElement & {
      items: ITreeItemData[];
      addChild: (parentId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] | null>;
      addAbove: (siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] | null>;
      addBelow: (siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] | null>;
      deleteItem: (itemId: string) => Promise<ITreeItemData[]>;
      duplicateItem: (itemId: string) => Promise<ITreeItemData[] | null>;
    };
    const initialItems: ITreeItemData[] = [{
      id: 'root-1',
      label: 'Design System',
      treeItemActions: [],
      children: [{
        id: 'child-1',
        label: 'Components',
        treeItemActions: []
      }, {
        id: 'child-2',
        label: 'Tokens',
        treeItemActions: []
      }]
    }, {
      id: 'root-2',
      label: 'Documentation',
      treeItemActions: []
    }, {
      id: 'root-3',
      label: 'Changelog',
      treeItemActions: []
    }];
    const treeId = 'manual-actions-tree';
    let selectedId: string | null = null;
    const getTree = (): TreeEl | null => document.getElementById(treeId) as TreeEl | null;
    const onItemSelect = (e: CustomEvent<{
      value: string;
    }>) => {
      selectedId = e.detail.value;
    };
    const onAddChild = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.addChild(selectedId, {
        id: crypto.randomUUID(),
        label: 'New Child',
        treeItemActions: []
      });
      if (newItems) tree.items = newItems;
    };
    const onAddAbove = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.addAbove(selectedId, {
        id: crypto.randomUUID(),
        label: 'New Item',
        treeItemActions: []
      });
      if (newItems) tree.items = newItems;
    };
    const onAddBelow = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.addBelow(selectedId, {
        id: crypto.randomUUID(),
        label: 'New Item',
        treeItemActions: []
      });
      if (newItems) tree.items = newItems;
    };
    const onDuplicate = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.duplicateItem(selectedId);
      if (newItems) tree.items = newItems;
    };
    const onDelete = async () => {
      if (!selectedId) return;
      const tree = getTree();
      if (!tree) return;
      const newItems = await tree.deleteItem(selectedId);
      tree.items = newItems;
      selectedId = null;
    };
    return html\`
      <div style="height: 50px">
        <modus-wc-typography>
          Select a node to complete an action
        </modus-wc-typography>
      </div>
      <div
        style="display: flex; flex-direction: column; gap: 8px; width: 320px"
      >
        <div style="display: flex; gap: 8px; flex-wrap: wrap">
          <modus-wc-button @buttonClick=\${onAddChild}
            >Add Child</modus-wc-button
          >
          <modus-wc-button @buttonClick=\${onAddAbove}
            >Add Above</modus-wc-button
          >
          <modus-wc-button @buttonClick=\${onAddBelow}
            >Add Below</modus-wc-button
          >
          <modus-wc-button @buttonClick=\${onDuplicate}
            >Duplicate</modus-wc-button
          >
          <modus-wc-button @buttonClick=\${onDelete}>Delete</modus-wc-button>
        </div>
        <modus-wc-content-tree
          id=\${treeId}
          search-placeholder=\${args['search-placeholder']}
          .includeSearch=\${args['include-search']}
          .includeActions=\${false}
          .items=\${initialItems}
          @itemSelect=\${onItemSelect}
        ></modus-wc-content-tree>
      </div>
    \`;
  }
}`,...(De=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Ce,Se,$e;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Manual Control via @Method() + treeActionClick',
  parameters: {
    docs: {
      description: {
        story: \`Same as "Manual Control via @Method()" but the actions are triggered from \\\`treeActionClick\\\` events on the tree nodes rather than an external toolbar.

\\\`includeActions\\\` is \\\`true\\\` and each item has \\\`treeItemActions\\\` with custom IDs that the built-in handler ignores.
The consumer listens to \\\`treeActionClick\\\`, reads the item id from the event, calls the element's \\\`@Method()\\\` utility, and sets \\\`tree.items = result\\\`.

This is the "State Manager pattern": action buttons on nodes, consumer intercepts every action, calls utility functions, owns the final state.

Note: "Add Above" is intentionally omitted from the action list here to demonstrate that the consumer has full control over which actions to expose -- you only show what makes sense for your use case.\`
      },
      source: {
        code: \`
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');

  const actions = [
    { id: 'my-add-child', icon: 'add', label: 'Add Child' },
    { id: 'my-add-below', icon: 'arrow_downward', label: 'Add Below' },
    { id: 'my-duplicate', icon: 'content_copy', label: 'Duplicate' },
    { id: 'my-delete', icon: 'delete', label: 'Delete' },
  ];

  tree.items = [
    { id: 'root-1', label: 'Design System', treeItemActions: actions, children: [
      { id: 'child-1', label: 'Components', treeItemActions: actions },
      { id: 'child-2', label: 'Tokens', treeItemActions: actions },
    ]},
    { id: 'root-2', label: 'Documentation', treeItemActions: actions },
    { id: 'root-3', label: 'Changelog', treeItemActions: actions },
  ];

  tree.addEventListener('treeActionClick', async (e) => {
    const itemEl = e.target.closest('modus-wc-tree-item');
    const itemId = itemEl?.getAttribute('data-key');
    if (!itemId) return;

    const { actionId } = e.detail;
    let newItems = null;

    if (actionId === 'my-add-child') {
      newItems = await tree.addChild(itemId, { id: crypto.randomUUID(), label: 'New Child', treeItemActions: actions });
    } else if (actionId === 'my-add-below') {
      newItems = await tree.addBelow(itemId, { id: crypto.randomUUID(), label: 'New Item', treeItemActions: actions });
    } else if (actionId === 'my-duplicate') {
      newItems = await tree.duplicateItem(itemId);
    } else if (actionId === 'my-delete') {
      newItems = await tree.deleteItem(itemId);
    }

    if (newItems) tree.items = newItems;
  });
<\/script>\`
      }
    }
  },
  render: args => {
    type TreeEl = HTMLElement & {
      items: ITreeItemData[];
      addChild: (parentId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] | null>;
      addBelow: (siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] | null>;
      deleteItem: (itemId: string) => Promise<ITreeItemData[]>;
      duplicateItem: (itemId: string) => Promise<ITreeItemData[] | null>;
    };
    const treeId = 'manual-events-tree';
    const actions = [{
      id: 'my-add-child',
      icon: 'add',
      label: 'Add Child'
    }, {
      id: 'my-add-below',
      icon: 'arrow_downward',
      label: 'Add Below'
    }, {
      id: 'my-duplicate',
      icon: 'content_copy',
      label: 'Duplicate'
    }, {
      id: 'my-delete',
      icon: 'delete',
      label: 'Delete'
    }];
    const withActions = (item: ITreeItemData): ITreeItemData => ({
      ...item,
      treeItemActions: actions,
      children: item.children?.map(withActions)
    });
    const initialItems: ITreeItemData[] = [{
      id: 'root-1',
      label: 'Design System',
      children: [{
        id: 'child-1',
        label: 'Components'
      }, {
        id: 'child-2',
        label: 'Tokens'
      }]
    }, {
      id: 'root-2',
      label: 'Documentation'
    }, {
      id: 'root-3',
      label: 'Changelog'
    }].map(withActions);
    const handleActionClick = async (e: CustomEvent<{
      actionId: string;
    }>) => {
      const tree = document.getElementById(treeId) as TreeEl | null;
      if (!tree) return;
      const itemEl = (e.target as HTMLElement).closest('modus-wc-tree-item');
      const itemId = itemEl?.getAttribute('data-key');
      if (!itemId) return;
      const {
        actionId
      } = e.detail;
      let newItems: ITreeItemData[] | null = null;
      if (actionId === 'my-add-child') {
        newItems = await tree.addChild(itemId, {
          id: crypto.randomUUID(),
          label: 'New Child',
          treeItemActions: actions
        });
      } else if (actionId === 'my-add-below') {
        newItems = await tree.addBelow(itemId, {
          id: crypto.randomUUID(),
          label: 'New Item',
          treeItemActions: actions
        });
      } else if (actionId === 'my-duplicate') {
        newItems = await tree.duplicateItem(itemId);
      } else if (actionId === 'my-delete') {
        newItems = await tree.deleteItem(itemId);
      }
      if (newItems) tree.items = newItems;
    };
    return html\`
      <div style="height: 100px; text-align: center; width: 320px;">
        <modus-wc-typography>
          Note: "Add Above" is intentionally omitted from the action list here
          to demonstrate that the consumer has full control over which actions
          to expose
        </modus-wc-typography>
      </div>
      <div style="width: 320px; text-align: center;">
        <modus-wc-content-tree
          id=\${treeId}
          search-placeholder=\${args['search-placeholder']}
          .includeSearch=\${args['include-search']}
          .includeActions=\${true}
          .items=\${initialItems}
          @treeActionClick=\${handleActionClick}
        ></modus-wc-content-tree>
      </div>
    \`;
  }
}`,...($e=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:$e.source}}};var Te,xe,ke;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Mixed Built-in + Custom Actions',
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates mixing built-in actions with a consumer-defined custom action on the same node.
Each item has \\\`treeItemActions\\\` containing both built-in IDs (\\\`add-child\\\`, \\\`delete\\\`) and a custom ID (\\\`my-rename\\\`).
The component handles \\\`add-child\\\` and \\\`delete\\\` automatically and emits \\\`itemAdded\\\` / \\\`itemDeleted\\\`.
The custom \\\`my-rename\\\` action reaches the consumer via \\\`treeActionClick\\\` and triggers inline label editing.
Built-in actions use \\\`stopPropagation\\\` so they never appear in \\\`treeActionClick\\\` -- the consumer only sees their own custom IDs.\`
      },
      source: {
        code: \`
<modus-wc-content-tree id="tree"></modus-wc-content-tree>
<script>
  const tree = document.querySelector('#tree');
  const actions = [
    { id: 'add-child', icon: 'add', label: 'Add Child' },
    { id: 'my-rename', icon: 'edit', label: 'Rename' },
    { id: 'delete', icon: 'delete', label: 'Delete' },
  ];
  tree.items = [
    { id: 'root-1', label: 'Design System', treeItemActions: actions, children: [
      { id: 'child-1', label: 'Components', treeItemActions: actions },
      { id: 'child-2', label: 'Tokens', treeItemActions: actions },
    ]},
    { id: 'root-2', label: 'Documentation', treeItemActions: actions },
    { id: 'root-3', label: 'Changelog', treeItemActions: actions },
  ];
  // built-in actions (add-child, delete) are handled by the component automatically
  const applyUpdate = (e) => { tree.items = e.detail.items; };
  tree.addEventListener('itemAdded', applyUpdate);
  tree.addEventListener('itemDeleted', applyUpdate);
  // custom action -- only my-rename reaches here
  tree.addEventListener('treeActionClick', (e) => {
    if (e.detail.actionId !== 'my-rename') return;
    const itemEl = e.target.closest('modus-wc-tree-item');
    if (itemEl) itemEl.inlineLabelEdit = true;
  });
<\/script>\`
      }
    }
  },
  render: args => {
    const treeId = 'mixed-actions-tree';
    const actions = [{
      id: 'add-child',
      icon: 'add',
      label: 'Add Child'
    }, {
      id: 'my-rename',
      icon: 'edit',
      label: 'Rename'
    }, {
      id: 'delete',
      icon: 'delete',
      label: 'Delete'
    }];
    const withActions = (item: ITreeItemData): ITreeItemData => ({
      ...item,
      treeItemActions: actions,
      children: item.children?.map(withActions)
    });
    const initialItems: ITreeItemData[] = [{
      id: 'root-1',
      label: 'Design System',
      children: [{
        id: 'child-1',
        label: 'Components'
      }, {
        id: 'child-2',
        label: 'Tokens'
      }]
    }, {
      id: 'root-2',
      label: 'Documentation'
    }, {
      id: 'root-3',
      label: 'Changelog'
    }].map(withActions);
    const applyUpdate = (e: CustomEvent<{
      items: ITreeItemData[];
    }>) => {
      const tree = document.getElementById(treeId) as HTMLElement & {
        items: ITreeItemData[];
      };
      if (tree) tree.items = e.detail.items;
    };
    const handleActionClick = (e: CustomEvent<{
      actionId: string;
    }>) => {
      if (e.detail.actionId !== 'my-rename') return;
      const itemEl = (e.target as HTMLElement).closest('modus-wc-tree-item') as (HTMLElement & {
        inlineLabelEdit: boolean;
      }) | null;
      if (itemEl) itemEl.inlineLabelEdit = true;
    };
    return html\`
      <div style="height: 70px; text-align: center; width: 320px;">
        <modus-wc-typography>
          This demonstrates mixing built-in actions with a consumer-defined
          custom action. <br />
          Built-in: Add Child, Delete ; Consumer: Rename
        </modus-wc-typography>
      </div>
      <div style="width: 320px">
        <modus-wc-content-tree
          id=\${treeId}
          search-placeholder=\${args['search-placeholder']}
          .includeSearch=\${args['include-search']}
          .includeActions=\${true}
          .items=\${initialItems}
          @itemAdded=\${applyUpdate}
          @itemDeleted=\${applyUpdate}
          @treeActionClick=\${handleActionClick}
        ></modus-wc-content-tree>
      </div>
    \`;
  }
}`,...(ke=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Ee,Le,Pe;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:"{\n  name: 'API Reference',\n  parameters: {\n    docs: {\n      description: {\n        story: `\n### Props\n\n| Name              | Type       | Default      | Description                                       |\n|-------------------|------------|--------------|---------------------------------------------------|\n| customClass       | \\`string\\` | \\`''\\`       | Additional CSS class to apply to the component    |\n| searchPlaceholder | \\`string\\` | \\`'Search...'\\` | Placeholder text for the search input          |\n| includeSearch     | \\`boolean\\` | \\`true\\`    | Whether to display the search functionality       |\n| includeActions    | \\`boolean\\` | \\`true\\`    | Whether to display action buttons for tree items  |\n| items             | \\`ITreeItemData[]\\` | - | Data-driven tree data used to render items and nested children |\n| itemsReordering   | \\`boolean\\` | \\`false\\` | Enables drag-and-drop reordering for data-driven trees |\n\n#### Events\n\n| Name           | Payload                                                         | Description |\n|----------------|------------------------------------------------------------------|-------------|\n| itemsReordered | \\`{ items: ITreeItemData[]; parameters: ITreeItemReorderParameters }\\` | Emitted after a successful drag reorder with updated tree data and reorder metadata |\n| itemAdded      | \\`{ item: ITreeItemData; targetItemId: string; position: 'child' \\\\| 'above' \\\\| 'below'; items: ITreeItemData[] }\\` | Emitted when a built-in add action completes. Set \\`tree.items = e.detail.items\\` to apply. |\n| itemDeleted    | \\`{ itemId: string; items: ITreeItemData[] }\\` | Emitted when a built-in delete action completes. Set \\`tree.items = e.detail.items\\` to apply. |\n| itemDuplicated | \\`{ item: ITreeItemData; itemId: string; items: ITreeItemData[] }\\` | Emitted when a built-in duplicate action completes. Set \\`tree.items = e.detail.items\\` to apply. |\n\n#### Methods\n\n| Name            | Signature                                                              | Description |\n|-----------------|------------------------------------------------------------------------|-------------|\n| \\`addChild\\`    | \\`(parentId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\\\| null>\\` | Returns updated items with \\`newItem\\` added as a child of \\`parentId\\`. |\n| \\`addAbove\\`    | \\`(siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\\\| null>\\` | Returns updated items with \\`newItem\\` inserted above \\`siblingId\\`. |\n| \\`addBelow\\`    | \\`(siblingId: string, newItem: ITreeItemData) => Promise<ITreeItemData[] \\\\| null>\\` | Returns updated items with \\`newItem\\` inserted below \\`siblingId\\`. |\n| \\`deleteItem\\`  | \\`(itemId: string) => Promise<ITreeItemData[]>\\` | Returns updated items with the specified item removed. |\n| \\`duplicateItem\\` | \\`(itemId: string) => Promise<ITreeItemData[] \\\\| null>\\` | Returns updated items with a clone of the item inserted after it. |\n\n---\n\n### Tree View\n\n#### Props\n\n| Name        | Type       | Default   | Description                                           |\n|-------------|------------|-----------|-------------------------------------------------------|\n| customClass | \\`string\\` | \\`''\\`    | Additional CSS class to apply to the tree view        |\n| isSubList   | \\`boolean\\` | \\`false\\` | Whether the tree view is a sublist of another tree item |\n| multiSelect | \\`boolean\\` | \\`false\\` | Enables additive (Ctrl/Cmd) and range (Shift) selection behavior |\n| showConnectorLine | \\`boolean\\` | \\`true\\` | Shows or hides connector lines for nested sublists |\n\n#### Events\n\n| Name                | Payload                          | Description |\n|---------------------|----------------------------------|-------------|\n| itemSelectionChange | \\`{ selectedValues: string[] }\\` | Emitted when selected tree item values change |\n\n---\n\n### Tree Item\n\n#### Props\n\n| Name            | Type                                   | Default   | Description                                                  |\n|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|\n| label           | \\`string\\`                             | -         | The label text for the tree item (required)                  |\n| value           | \\`string\\`                             | \\`''\\`    | The value associated with the tree item                      |\n| disabled        | \\`boolean\\`                            | \\`false\\` | Whether the tree item is disabled                            |\n| checkbox        | \\`boolean\\`                            | \\`false\\` | Whether to display a checkbox for the tree item              |\n| selected        | \\`boolean\\`                            | -         | Whether the tree item is selected (mutable, reflected)       |\n| checked         | \\`boolean\\`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |\n| hasSubtree      | \\`boolean\\`                            | \\`false\\` | Whether the tree item has a subtree                          |\n| treeItemActions | \\`ITreeItemActions[]\\`                 | -         | Array of actions to display for the tree item                |\n| inlineLabelEdit | \\`boolean\\`                            | \\`false\\` | Enables inline text editing for the item label               |\n| itemsReordering | \\`boolean\\`                            | \\`false\\` | Shows drag handle and enables drag/drop item reordering      |\n| size            | \\`'xs' | 'sm' | 'md' | 'lg'\\`    | \\`'xs'\\`  | The size of the tree item                                    |\n| customClass     | \\`string\\`                             | \\`''\\`    | Additional CSS class to apply to the tree item               |\n| lazyLoading     | \\`boolean\\`                            | \\`false\\` | When \\`true\\` and the item is expanded, shows a spinner in place of children. Managed automatically by the content tree when \\`getChildren\\` is provided. |\n| hasChildren     | \\`boolean\\`                            | -         | Hint that the item has unloaded children. Used with \\`getChildren\\` on the content tree to show the expand chevron before children are fetched. |\n\n#### Events\n\n| Name             | Payload                          | Description                                     |\n|------------------|----------------------------------|-------------------------------------------------|\n| itemSelect       | \\`{ value: string }\\`            | Emitted when a tree item is selected            |\n| selectionsChange | \\`{ selectedValues: string[] }\\` | Emitted when the selection state changes        |\n| itemExpand       | \\`string\\`                       | Emitted with the item's \\`value\\` when it is expanded. Use this to trigger lazy data loading. |\n| itemLabelChange  | \\`string\\`                       | Emitted when inline label editing is committed |\n| itemReordered    | \\`ITreeItemReorderedEventDetail\\` | Emitted when a drag/drop reorder operation completes for the item |\n\n#### Methods\n\n| Name            | Type                      | Description                |\n|-----------------|---------------------------|----------------------------|\n| collapseSubTree | \\`() => Promise<void>\\`   | Collapses the subtree      |\n| expandSubTree   | \\`() => Promise<void>\\`   | Expands the subtree        |\n| setIndeterminateState | \\`(indeterminate: boolean) => Promise<void>\\` | Sets checkbox indeterminate state |\n\n---\n\n### Tree Actions\n\n#### Props\n\n| Name    | Type                                | Default  | Description                          |\n|---------|-------------------------------------|----------|--------------------------------------|\n| actions | \\`ITreeItemActions[]\\`              | -        | Array of actions to display          |\n| size    | \\`'xs' | 'sm' | 'md' | 'lg'\\` | \\`'xs'\\` | The size of the action buttons       |\n\n#### Behavior\n\n- Renders the first action as a direct icon button for fast access.\n- Renders remaining actions in a \"More actions\" dropdown menu.\n- When the \\`delete\\` action is clicked, a confirmation UI is shown before emitting \\`treeActionClick\\`.\n- Automatically closes other open tree-action dropdowns when a new one opens.\n\n#### Events\n\n| Name            | Payload                                   | Description                                |\n|-----------------|-------------------------------------------|--------------------------------------------|\n| treeActionClick | \\`{ actionId: string; actionName: string }\\` | Emitted when an action is clicked       |\n| dropdownOpened  | \\`HTMLElement\\`                           | Emitted when the dropdown is opened        |\n\n---\n\n### Interfaces\n\n#### ITreeItemActions\n\n\\`\\`\\`typescript\ninterface ITreeItemActions {\n  id: string;                           // Unique identifier for the action\n  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'\n  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon\n  label: string;                        // Text label for the action\n  ariaLabel?: string;                   // Optional label for accessibility\n  disabled?: boolean;                   // Optional flag to disable the action\n}\n\\`\\`\\`\n`\n      }\n    },\n    controls: {\n      disable: true\n    }\n  },\n  render: () => {\n    return html``;\n  }\n}",...(Pe=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};const Be=["Default","TreeItem","TreeItemWithStartIcon","EmptyState","SingleSelection","CheckboxSelection","DisabledSelection","WithActions","ItemsReordering","MultiSelect","LazyLoading","WithBuiltInActions","WithBuiltInActionsAndLazyLoading","LazyLoadingWithActionsEnabled","WithManualActions","WithManualActionsViaEvents","WithMixedActions","ApiReference"];export{L as ApiReference,g as CheckboxSelection,h as Default,y as DisabledSelection,v as EmptyState,A as ItemsReordering,C as LazyLoading,T as LazyLoadingWithActionsEnabled,D as MultiSelect,I as SingleSelection,b as TreeItem,p as TreeItemWithStartIcon,f as WithActions,S as WithBuiltInActions,$ as WithBuiltInActionsAndLazyLoading,x as WithManualActions,k as WithManualActionsViaEvents,E as WithMixedActions,Be as __namedExportsOrder,We as default};
