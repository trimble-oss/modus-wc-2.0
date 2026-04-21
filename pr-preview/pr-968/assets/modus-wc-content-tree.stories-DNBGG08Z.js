import{w as fe}from"./decorator-D4YmxizW.js";import{x as w}from"./lit-element-CucEn6F2.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const b=e=>e.clientId??e.id,k=(e,i,c,s)=>{var n;if(i===null){const o=Math.max(0,Math.min(s,e.length)),t=[...e];return t.splice(o,0,c),t}for(let o=0;o<e.length;o++){const t=e[o];if(b(t)===i){const a=t.children??[],l=Math.max(0,Math.min(s,a.length)),m=[...a];m.splice(l,0,c);const u=[...e];return u[o]={...t,children:m},u}if(!((n=t.children)!=null&&n.length))continue;const d=k(t.children,i,c,s);if(!d)continue;const r=[...e];return r[o]={...t,children:d},r}return null},Ie=(e,i,c=null)=>{var s;for(let n=0;n<e.length;n++){const o=e[n];if(b(o)===i){const r=[...e],[a]=r.splice(n,1);return{list:r,removedItem:a,parentId:c,index:n}}if(!((s=o.children)!=null&&s.length))continue;const t=Ie(o.children,i,b(o));if(!t)continue;const d=[...e];return d[n]={...o,children:t.list},{...t,list:d}}return null},L=(e,i,c=null)=>{var s;for(let n=0;n<e.length;n++){const o=e[n];if(b(o)===i)return{item:o,parentId:c,index:n};if(!((s=o.children)!=null&&s.length))continue;const t=L(o.children,i,b(o));if(t)return t}return null},ge=(e,i)=>{var o;const c=i.current;i.current+=1;const s=`${e.id}-copy-${c}`,n=e.clientId?`${e.clientId}-copy-${c}`:void 0;return{...e,id:s,clientId:n,children:(o=e.children)==null?void 0:o.map(t=>ge(t,i))}},ye=(e,i)=>{const{parentId:c,item:s,index:n}=i,o=n??Number.MAX_SAFE_INTEGER;return k(e,c,s,o)},Ae=(e,i)=>{const c=Ie(e,i.itemId);return c?c.list:null},xe=(e,i)=>{const c=L(e,i.itemId);if(!c)return null;const s={current:1},n=ge(c.item,s),o=i.parentId===void 0?c.parentId:i.parentId,t=i.index===void 0?c.index+1:i.index;return k(e,o,n,t)},N=(e,i)=>{const c=L(e,i.referenceItemId);if(!c)return null;const s=i.placement==="above"?0:1,n=c.index+s;return k(e,c.parentId,i.item,n)},Te={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"custom-class":"","search-placeholder":"Search...","include-search":!0,"include-actions":!0,"items-reordering":!1,items:void 0},argTypes:{"search-placeholder":{control:{type:"text"},table:{category:"Content Tree"}},"include-search":{control:{type:"boolean"},table:{category:"Content Tree"}},"include-actions":{control:{type:"boolean"},table:{category:"Content Tree"}},"items-reordering":{control:{type:"boolean"},table:{category:"Content Tree"}}},decorators:[fe],parameters:{actions:{handles:["itemSelect","itemReordered","itemsReordered","treeActionClick","selectionsChange","dropdownOpened","itemLabelChange","itemExpand"]}}},$e=[{id:"phase-1",clientId:"phase-1-client",label:"Phase 1",children:[{id:"backlog",clientId:"backlog-client",label:"Backlog"},{id:"in-progress",clientId:"in-progress-client",label:"In Progress"},{id:"review",clientId:"review-client",label:"Review"}]},{id:"phase-2",clientId:"phase-2-client",label:"Phase 2",children:[{id:"qa",clientId:"qa-client",label:"QA"},{id:"uat",clientId:"uat-client",label:"UAT"},{id:"done",clientId:"done-client",label:"Done"}]}],h={parameters:{docs:{description:{story:"A basic content tree with hierarchical structure. Items can be expanded and collapsed to navigate through the tree."},source:{code:`
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
`}}},render:e=>w`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
        .itemsReordering=${e["items-reordering"]}
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
    `},p={name:"Tree Item",parameters:{docs:{description:{story:"A comprehensive example showing tree item features: checkbox, start icon, and actions."},source:{code:`
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
    `},v={name:"Tree Item - With Start Icon",parameters:{docs:{description:{story:"Tree items can display custom icons at the start using the start-icon slot. This is useful for representing file types, folders, or custom item types."},source:{code:`
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
    `},I={name:"Empty State",parameters:{docs:{description:{story:"This example shows the content tree when no items are present. Consumers can provide a custom empty state through the default slot."},source:{code:`
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
`}}},render:e=>{const i=(s,n)=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{const t=Array.from(s.querySelectorAll("modus-wc-tree-item")).find(d=>d.value===n);t&&(t.inlineLabelEdit=!0)})})},c=s=>{var t,d;const n=(t=s.currentTarget)==null?void 0:t.closest("modus-wc-content-tree");if(!n)return;const o=`new-item-${Date.now()}`;(d=n.querySelector(".modus-wc-content-tree-empty-story"))==null||d.remove(),n.items=[{id:o,label:"New Item"}],i(n,o)};return w`
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
        search-placeholder=${e["search-placeholder"]}
        custom-class=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
      >
        <div class="modus-wc-content-tree-empty-story">
          <modus-wc-typography
            hierarchy="p"
            label="Empty Content Tree"
            size="lg"
            weight="normal"
            custom-class="modus-wc-content-tree-empty-text"
          ></modus-wc-typography>

          <modus-wc-button variant="outline" @buttonClick=${c}>
            Create node
          </modus-wc-button>
        </div>
      </modus-wc-content-tree>
    `}},g={name:"Single Selection",parameters:{docs:{description:{story:"Content tree with single selection mode. Click on any tree item to select it. Only one item can be selected at a time."},source:{code:`
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
`}}},render:e=>w`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        custom-class=${e["custom-class"]}
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
    `},f={name:"Checkbox Selection",parameters:{docs:{description:{story:"This example demonstrates tree items with checkboxes for multi-selection. Selecting a parent item will select all its children, and vice versa."},source:{code:`
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
`}}},render:e=>w`
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
`}}},render:e=>w`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
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
    `},A={name:"With Actions",parameters:{docs:{description:{story:"This example demonstrates custom item actions including visibility toggle, inline edit, duplicate, add sibling, add child, and delete."},source:{code:`
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
`}}},render:e=>{const i=t=>[{id:"toggle-visibility",label:t?"Hidden":"Visible",icon:t?"visibility_off":"visibility_on",ariaLabel:t?"Set item to visible":"Set item to hidden",size:"sm"},{id:"edit-label",label:"Edit Label",icon:"pencil",ariaLabel:"Edit item label",size:"sm"},{id:"duplicate",label:"Duplicate",icon:"copy_content",ariaLabel:"Duplicate item",size:"sm"},{id:"add-node-above",label:"Add Node Above",icon:"add",ariaLabel:"Add node above",size:"sm"},{id:"add-node-below",label:"Add Node Below",icon:"add",ariaLabel:"Add node below",size:"sm"},{id:"add-child",label:"Add Child",icon:"subdirectory_arrow_right",ariaLabel:"Add child node",size:"sm"},{id:"delete",label:"Delete",icon:"delete",ariaLabel:"Delete item",size:"sm"}],c=t=>{t.inlineLabelEdit=!1,t.treeItemActions=i(!!t.disabled),t.querySelectorAll("modus-wc-tree-item").forEach(d=>{const r=d;r.inlineLabelEdit=!1,r.treeItemActions=i(!!r.disabled)})},s=(t="New Node")=>{const d=document.createElement("modus-wc-tree-item");return d.label=t,d.value=`new-node-${Date.now()}-${Math.random()}`,c(d),d};let n=null;const o=t=>{const r=t.target.closest("modus-wc-tree-item");if(!r)return;const a=`${t.detail.actionId}:${r.value}:${t.timeStamp}`;if(n!==a)switch(n=a,queueMicrotask(()=>{n===a&&(n=null)}),t.detail.actionId){case"delete":r.remove();break;case"duplicate":{const l=s(r.label);r.after(l);return}case"add-node-above":r.before(s());break;case"add-node-below":r.after(s());break;case"add-child":{let l=r.querySelector(":scope > modus-wc-tree-view");l||(l=document.createElement("modus-wc-tree-view"),l.setAttribute("is-sub-list","true"),r.appendChild(l)),r.hasSubtree=!0,l.appendChild(s("New Child"));break}case"toggle-visibility":r.disabled=!r.disabled,r.treeItemActions=i(!!r.disabled);break;case"edit-label":r.inlineLabelEdit=!0;break}};return w`
      <modus-wc-content-tree
        class="with-actions-tree"
        search-placeholder=${e["search-placeholder"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
        @treeActionClick=${o}
      >
        <modus-wc-tree-view>
          <modus-wc-tree-item
            label="Documents"
            value="documents"
            .treeItemActions=${i(!1)}
          ></modus-wc-tree-item>

          <modus-wc-tree-item
            label="Projects"
            value="projects"
            .treeItemActions=${i(!1)}
          ></modus-wc-tree-item>

          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=${i(!1)}
          ></modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `}},x={name:"Controlled Actions With Utilities",args:{"include-search":!1,"include-actions":!1},parameters:{docs:{description:{story:"Demonstrates stateless add, duplicate, and delete actions. The consumer handles `treeActionClick`, calls utility functions, and updates `items` with returned data."},source:{code:`
<script type="module">
  import { addTreeItemAdjacentData, addTreeItemData, deleteTreeItemData, duplicateTreeItemData } from './modus-wc-content-tree.utils';

  const treeActions = [
    {
      id: 'add-node-above',
      label: 'Add Node Above',
      icon: 'add',
      ariaLabel: 'Add node above',
    },
    {
      id: 'add-node-below',
      label: 'Add Node Below',
      icon: 'add',
      ariaLabel: 'Add node below',
    },
    {
      id: 'add-child',
      label: 'Add Child',
      icon: 'subdirectory_arrow_right',
      ariaLabel: 'Add child node',
    },
    {
      id: 'duplicate',
      label: 'Duplicate',
      icon: 'copy_content',
      ariaLabel: 'Duplicate node',
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'delete',
      ariaLabel: 'Delete node',
    },
  ];

  const withTreeActions = (items) =>
    items.map((item) => ({
      ...item,
      treeItemActions: treeActions,
      children: item.children ? withTreeActions(item.children) : undefined,
    }));

  let itemCounter = 1;
  let items = withTreeActions([
    {
      id: 'roadmap',
      clientId: 'roadmap-client',
      label: 'Roadmap',
      children: [{ id: 'milestone-1', clientId: 'milestone-1-client', label: 'Milestone 1' }],
    },
  ]);

  const tree = document.querySelector('modus-wc-content-tree');
  tree.items = items;

  tree.addEventListener('treeActionClick', (event) => {
    const treeItem = event.target.closest('modus-wc-tree-item');
    if (!treeItem) return;

    let next = null;
    if (event.detail.actionId === 'add-node-above') {
      const id = 'new-node-' + itemCounter;
      itemCounter += 1;
      next = addTreeItemAdjacentData(items, {
        referenceItemId: treeItem.value,
        item: { id, clientId: id + '-client', label: 'New Node', treeItemActions: treeActions },
        placement: 'above',
      });
    } else if (event.detail.actionId === 'add-node-below') {
      const id = 'new-node-' + itemCounter;
      itemCounter += 1;
      next = addTreeItemAdjacentData(items, {
        referenceItemId: treeItem.value,
        item: { id, clientId: id + '-client', label: 'New Node', treeItemActions: treeActions },
        placement: 'below',
      });
    } else if (event.detail.actionId === 'add-child') {
      const id = 'new-child-' + itemCounter;
      itemCounter += 1;
      next = addTreeItemData(items, {
        parentId: treeItem.value,
        item: { id, clientId: id + '-client', label: 'New Child', treeItemActions: treeActions },
      });
    } else if (event.detail.actionId === 'duplicate') {
      next = duplicateTreeItemData(items, { itemId: treeItem.value });
    } else if (event.detail.actionId === 'delete') {
      next = deleteTreeItemData(items, { itemId: treeItem.value });
    }

    if (!next) return;
    items = next;
    tree.items = items;
  });
<\/script>

<modus-wc-content-tree include-search="false" include-actions="false"></modus-wc-content-tree>
`}}},render:()=>{const e=[{id:"add-node-above",label:"Add Node Above",icon:"add",ariaLabel:"Add node above"},{id:"add-node-below",label:"Add Node Below",icon:"add",ariaLabel:"Add node below"},{id:"add-child",label:"Add Child",icon:"subdirectory_arrow_right",ariaLabel:"Add child node"},{id:"duplicate",label:"Duplicate",icon:"copy_content",ariaLabel:"Duplicate node"},{id:"delete",label:"Delete",icon:"delete",ariaLabel:"Delete node"}],i=t=>t.map(d=>({...d,treeItemActions:e,children:d.children?i(d.children):void 0})),c=i([{id:"roadmap",clientId:"roadmap-client",label:"Roadmap",children:[{id:"milestone-1",clientId:"milestone-1-client",label:"Milestone 1"}]},{id:"backlog",clientId:"backlog-client",label:"Backlog"}]);let s=1,n=c;return w`
      <modus-wc-content-tree
        .includeSearch=${!1}
        .includeActions=${!1}
        .items=${n}
        @treeActionClick=${t=>{const r=t.target.closest("modus-wc-tree-item");if(!r)return;let a=null;switch(t.detail.actionId){case"add-node-above":{const m=s,u=`new-node-${m}`;s+=1,a=N(n,{referenceItemId:r.value,item:{id:u,clientId:`${u}-client`,label:`New Node ${m}`,treeItemActions:e},placement:"above"});break}case"add-node-below":{const m=s,u=`new-node-${m}`;s+=1,a=N(n,{referenceItemId:r.value,item:{id:u,clientId:`${u}-client`,label:`New Node ${m}`,treeItemActions:e},placement:"below"});break}case"add-child":{const m=s,u=`new-child-${m}`;s+=1,a=ye(n,{parentId:r.value,item:{id:u,clientId:`${u}-client`,label:`New Child ${m}`,treeItemActions:e}});break}case"duplicate":a=xe(n,{itemId:r.value});break;case"delete":a=Ae(n,{itemId:r.value});break}if(!a)return;n=a;const l=t.currentTarget;l.items=n}}
      >
      </modus-wc-content-tree>
    `}},$={name:"Items Reordering",args:{"include-search":!1,"include-actions":!1,"items-reordering":!0},parameters:{docs:{description:{story:"Enables drag-and-drop reordering with top/bottom drop-line indicators for data-driven `items` in the same level."},source:{code:`
<script>
let items = [
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

const tree = document.querySelector('modus-wc-content-tree');
tree.items = items;

tree.addEventListener('itemsReordered', (event) => {
  // Use clientId as stable UI identity while backend IDs can change.
  items = [...event.detail.items];
  tree.items = items;
});
<\/script>

<modus-wc-content-tree
  include-search="false"
  include-actions="false"
  items-reordering="true"
></modus-wc-content-tree>
`}}},render:e=>{const i=[...e.items??$e],c=s=>{const n=s.currentTarget;n.items=[...s.detail.items]};return w`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
        .itemsReordering=${e["items-reordering"]}
        .items=${i}
        @itemsReordered=${c}
      ></modus-wc-content-tree>
    `}},C={name:"Multi Select",parameters:{docs:{description:{story:"Enables multi-select on the tree view. Use Ctrl/Cmd + click to toggle individual items, and Shift + click to select a contiguous range. Works across nested tree items."},source:{code:`
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
`}},actions:{handles:["itemSelect","itemSelectionChange"]}},render:e=>w`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        custom-class=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
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
    `},S={name:"Lazy Loading",parameters:{docs:{description:{story:"Demonstrates lazy loading using the data-driven `items` prop and `itemExpand` event with stable `clientId` identity. Items with `hasChildren: true` and no `children` show an expand chevron; when expanded, the tree shows a loader until the consumer provides children by updating `items`."},source:{code:`
<script>
const initialItems = [
  { id: 'db-101', clientId: 'documents-node', label: 'Documents', hasChildren: true },
  { id: 'db-102', clientId: 'projects-node', label: 'Projects', hasChildren: true },
  { id: 'db-103', clientId: 'resources-node', label: 'Resources', hasChildren: true },
];

const mockData = {
  'documents-node': [
    { id: 'db-201', clientId: 'report-node', label: 'Report.pdf' },
    { id: 'db-202', clientId: 'proposal-node', label: 'Proposal.docx' },
    { id: 'db-203', clientId: 'notes-node', label: 'Meeting Notes.txt' },
  ],
  'projects-node': [
    { id: 'db-301', clientId: 'website-node', label: 'Website Redesign', hasChildren: true },
    { id: 'db-302', clientId: 'mobile-node', label: 'Mobile App' },
    { id: 'db-303', clientId: 'api-node', label: 'API Integration' },
  ],
  'resources-node': [
    { id: 'db-401', clientId: 'templates-node', label: 'Templates' },
    { id: 'db-402', clientId: 'guide-node', label: 'Style Guide' },
  ],
  'website-node': [
    { id: 'db-501', clientId: 'design-node', label: 'Design Mockups' },
    { id: 'db-502', clientId: 'dev-node', label: 'Development' },
  ],
};

const getIdentity = (item) => item.clientId ?? item.id;

function updateItem(items, parentIdentity, updater) {
  return items.map((item) => {
    if (getIdentity(item) === parentIdentity) return updater(item);
    if (item.children) {
      return {
        ...item,
        children: updateItem(item.children, parentIdentity, updater),
      };
    }
    return item;
  });
}

const tree = document.querySelector('modus-wc-content-tree');
tree.items = initialItems;

tree.addEventListener('itemExpand', async (event) => {
  const itemIdentity = event.detail;

  const findItem = (items) => {
    for (const item of items) {
      if (getIdentity(item) === itemIdentity) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
  };

  const item = findItem(tree.items);
  if (item?.children?.length) return;

  const children = await new Promise((resolve) =>
    setTimeout(() => resolve(mockData[itemIdentity] ?? []), 1500)
  );

  tree.items = updateItem(tree.items, itemIdentity, (item) => ({
    ...item,
    children,
    hasChildren: children.length > 0,
  }));
});
<\/script>

<modus-wc-content-tree search-placeholder="Search..." include-search="true"></modus-wc-content-tree>
`}},actions:{handles:["itemExpand"]}},render:e=>{const i=[{id:"db-101",clientId:"documents-node",label:"Documents",hasChildren:!0},{id:"db-102",clientId:"projects-node",label:"Projects",hasChildren:!0},{id:"db-103",clientId:"resources-node",label:"Resources",hasChildren:!0}],c={"documents-node":[{id:"db-201",clientId:"report-node",label:"Report.pdf"},{id:"db-202",clientId:"proposal-node",label:"Proposal.docx"},{id:"db-203",clientId:"notes-node",label:"Meeting Notes.txt"}],"projects-node":[{id:"db-301",clientId:"website-node",label:"Website Redesign",hasChildren:!0},{id:"db-302",clientId:"mobile-node",label:"Mobile App"},{id:"db-303",clientId:"api-node",label:"API Integration"}],"resources-node":[{id:"db-401",clientId:"templates-node",label:"Templates"},{id:"db-402",clientId:"guide-node",label:"Style Guide"}],"website-node":[{id:"db-501",clientId:"design-node",label:"Design Mockups"},{id:"db-502",clientId:"dev-node",label:"Development"}]},s=d=>d.clientId??d.id,n=(d,r,a)=>d.map(l=>s(l)===r?a(l):l.children?{...l,children:n(l.children,r,a)}:l),o=(d,r)=>{for(const a of d){if(s(a)===r)return a;if(a.children){const l=o(a.children,r);if(l)return l}}},t=async d=>{var E;const r=d.currentTarget,a=d.detail,l=r.items??i,m=o(l,a);if((E=m==null?void 0:m.children)!=null&&E.length)return;const u=await new Promise(T=>setTimeout(()=>T(c[a]??[]),1500));r.items=n(l,a,T=>({...T,children:u,hasChildren:u.length>0}))};return w`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${!1}
        .items=${i}
        @itemExpand=${t}
      ></modus-wc-content-tree>
    `}},D={name:"API Reference",parameters:{docs:{description:{story:"\n### Props\n\n| Name              | Type       | Default      | Description                                       |\n|-------------------|------------|--------------|---------------------------------------------------|\n| customClass       | `string` | `''`       | Additional CSS class to apply to the component    |\n| searchPlaceholder | `string` | `'Search...'` | Placeholder text for the search input          |\n| includeSearch     | `boolean` | `true`    | Whether to display the search functionality       |\n| includeActions    | `boolean` | `true`    | Whether to display action buttons for tree items  |\n| items             | `ITreeItemData[]` | - | Data-driven tree data used to render items and nested children |\n| itemsReordering   | `boolean` | `false` | Enables drag-and-drop reordering for data-driven trees |\n\n#### Events\n\n| Name           | Payload                                                         | Description |\n|----------------|------------------------------------------------------------------|-------------|\n| itemsReordered | `{ items: ITreeItemData[]; parameters: ITreeItemReorderParameters }` | Emitted after a successful drag reorder with updated tree data and reorder metadata |\n\n---\n\n### State Manager Utilities\n\nUse these helpers to keep tree updates controlled/stateless. Each utility returns `nextItems`; your application decides whether to apply it.\n\n| Utility | Parameters | Description |\n|---------|------------|-------------|\n| `addTreeItemData` | `(items, { parentId, item, index? })` | Adds an item at root or as a child under `parentId`. |\n| `addTreeItemAdjacentData` | `(items, { referenceItemId, item, placement })` | Inserts a sibling above or below an existing item. |\n| `deleteTreeItemData` | `(items, { itemId })` | Removes an item by identity. |\n| `duplicateTreeItemData` | `(items, { itemId, parentId?, index? })` | Duplicates an item/subtree with regenerated IDs. |\n| `reorderTreeItemsData` | `(items, parameters)` | Computes reordered tree data for drag/drop operations. |\n\n#### Built-in Action Mapping\n\n| Action ID | Recommended Utility |\n|-----------|----------------------|\n| `add-node-above` | `addTreeItemAdjacentData(..., { placement: 'above' })` |\n| `add-node-below` | `addTreeItemAdjacentData(..., { placement: 'below' })` |\n| `add-child` | `addTreeItemData` |\n| `duplicate` | `duplicateTreeItemData` |\n| `delete` | `deleteTreeItemData` |\n\n#### Controlled Update Flow\n\n1. Handle `treeActionClick` or `itemsReordered`.\n2. Call the mapped utility to compute `nextItems`.\n3. Optionally validate/persist with your backend.\n4. Apply `nextItems` by updating `items`.\n\n---\n\n### Tree View\n\n#### Props\n\n| Name        | Type       | Default   | Description                                           |\n|-------------|------------|-----------|-------------------------------------------------------|\n| customClass | `string` | `''`    | Additional CSS class to apply to the tree view        |\n| isSubList   | `boolean` | `false` | Whether the tree view is a sublist of another tree item |\n| multiSelect | `boolean` | `false` | Enables additive (Ctrl/Cmd) and range (Shift) selection behavior |\n| showConnectorLine | `boolean` | `true` | Shows or hides connector lines for nested sublists |\n\n#### Events\n\n| Name                | Payload                          | Description |\n|---------------------|----------------------------------|-------------|\n| itemSelectionChange | `{ selectedValues: string[] }` | Emitted when selected tree item values change |\n\n---\n\n### Tree Item\n\n#### Props\n\n| Name            | Type                                   | Default   | Description                                                  |\n|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|\n| label           | `string`                             | -         | The label text for the tree item (required)                  |\n| value           | `string`                             | `''`    | The value associated with the tree item                      |\n| disabled        | `boolean`                            | `false` | Whether the tree item is disabled                            |\n| checkbox        | `boolean`                            | `false` | Whether to display a checkbox for the tree item              |\n| selected        | `boolean`                            | -         | Whether the tree item is selected (mutable, reflected)       |\n| checked         | `boolean`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |\n| hasSubtree      | `boolean`                            | `false` | Whether the tree item has a subtree                          |\n| treeItemActions | `ITreeItemActions[]`                 | -         | Array of actions to display for the tree item                |\n| inlineLabelEdit | `boolean`                            | `false` | Enables inline text editing for the item label               |\n| itemsReordering | `boolean`                            | `false` | Shows drag handle and enables drag/drop item reordering      |\n| size            | `'xs' | 'sm' | 'md' | 'lg'`    | `'xs'`  | The size of the tree item                                    |\n| customClass     | `string`                             | `''`    | Additional CSS class to apply to the tree item               |\n| lazyLoading     | `boolean`                            | `false` | When `true` and the item is expanded, shows a spinner in place of children. Managed automatically by the content tree when `getChildren` is provided. |\n| hasChildren     | `boolean`                            | -         | Hint that the item has unloaded children. Used with `getChildren` on the content tree to show the expand chevron before children are fetched. |\n\n#### Events\n\n| Name             | Payload                          | Description                                     |\n|------------------|----------------------------------|-------------------------------------------------|\n| itemSelect       | `{ value: string }`            | Emitted when a tree item is selected            |\n| selectionsChange | `{ selectedValues: string[] }` | Emitted when the selection state changes        |\n| itemExpand       | `string`                       | Emitted with the item's `value` when it is expanded. Use this to trigger lazy data loading. |\n| itemLabelChange  | `string`                       | Emitted when inline label editing is committed |\n| itemReordered    | `ITreeItemReorderedEventDetail` | Emitted when a drag/drop reorder operation completes for the item |\n\n#### Methods\n\n| Name            | Type                      | Description                |\n|-----------------|---------------------------|----------------------------|\n| collapseSubTree | `() => Promise<void>`   | Collapses the subtree      |\n| expandSubTree   | `() => Promise<void>`   | Expands the subtree        |\n| setIndeterminateState | `(indeterminate: boolean) => Promise<void>` | Sets checkbox indeterminate state |\n\n---\n\n### Tree Actions\n\n#### Props\n\n| Name    | Type                                | Default  | Description                          |\n|---------|-------------------------------------|----------|--------------------------------------|\n| actions | `ITreeItemActions[]`              | -        | Array of actions to display          |\n| size    | `'xs' | 'sm' | 'md' | 'lg'` | `'xs'` | The size of the action buttons       |\n\n#### Behavior\n\n- Renders the first action as a direct icon button for fast access.\n- Renders remaining actions in a \"More actions\" dropdown menu.\n- When the `delete` action is clicked, a confirmation UI is shown before emitting `treeActionClick`.\n- Automatically closes other open tree-action dropdowns when a new one opens.\n\n#### Events\n\n| Name            | Payload                                   | Description                                |\n|-----------------|-------------------------------------------|--------------------------------------------|\n| treeActionClick | `{ actionId: string; actionName: string }` | Emitted when an action is clicked       |\n| dropdownOpened  | `HTMLElement`                           | Emitted when the dropdown is opened        |\n\n---\n\n### Interfaces\n\n#### ITreeItemData\n\n```typescript\ninterface ITreeItemData {\n  id: string;                // Backend/persistent identifier\n  clientId?: string;         // Optional stable client-generated identifier (for example UUID)\n  label: string;\n  checkbox?: boolean;\n  startIcon?: string;\n  treeItemActions?: ITreeItemActions[];\n  children?: ITreeItemData[];\n  hasChildren?: boolean;\n}\n```\n\n---\n\n#### ITreeItemActions\n\n```typescript\ninterface ITreeItemActions {\n  id: string;                           // Unique identifier for the action\n  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'\n  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon\n  label: string;                        // Text label for the action\n  ariaLabel?: string;                   // Optional label for accessibility\n  disabled?: boolean;                   // Optional flag to disable the action\n}\n```\n"}},controls:{disable:!0}},render:()=>w``};var R,P,j;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(j=(P=h.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var M,W,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var V,q,_;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(q=v.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var z,U,B;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
          const treeItems = Array.from(contentTree.querySelectorAll('modus-wc-tree-item')) as ITreeItemElement[];
          const el = treeItems.find(item => item.value === id);
          if (el) {
            el.inlineLabelEdit = true;
          }
        });
      });
    };
    const handleAddNewItem = (event: Event) => {
      const contentTree = (event.currentTarget as HTMLElement)?.closest('modus-wc-content-tree') as ContentTreeElement | null;
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
}`,...(B=(U=I.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var F,O,Z;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(Z=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var G,Q,X;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,K,Y;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var ee,te,ne;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
      const treeItem = source.closest('modus-wc-tree-item') as ITreeItemElement | null;
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
}`,...(ne=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,re,se;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Controlled Actions With Utilities',
  args: {
    'include-search': false,
    'include-actions': false
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates stateless add, duplicate, and delete actions. The consumer handles \`treeActionClick\`, calls utility functions, and updates \`items\` with returned data.'
      },
      source: {
        code: \`
<script type="module">
  import { addTreeItemAdjacentData, addTreeItemData, deleteTreeItemData, duplicateTreeItemData } from './modus-wc-content-tree.utils';

  const treeActions = [
    {
      id: 'add-node-above',
      label: 'Add Node Above',
      icon: 'add',
      ariaLabel: 'Add node above',
    },
    {
      id: 'add-node-below',
      label: 'Add Node Below',
      icon: 'add',
      ariaLabel: 'Add node below',
    },
    {
      id: 'add-child',
      label: 'Add Child',
      icon: 'subdirectory_arrow_right',
      ariaLabel: 'Add child node',
    },
    {
      id: 'duplicate',
      label: 'Duplicate',
      icon: 'copy_content',
      ariaLabel: 'Duplicate node',
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: 'delete',
      ariaLabel: 'Delete node',
    },
  ];

  const withTreeActions = (items) =>
    items.map((item) => ({
      ...item,
      treeItemActions: treeActions,
      children: item.children ? withTreeActions(item.children) : undefined,
    }));

  let itemCounter = 1;
  let items = withTreeActions([
    {
      id: 'roadmap',
      clientId: 'roadmap-client',
      label: 'Roadmap',
      children: [{ id: 'milestone-1', clientId: 'milestone-1-client', label: 'Milestone 1' }],
    },
  ]);

  const tree = document.querySelector('modus-wc-content-tree');
  tree.items = items;

  tree.addEventListener('treeActionClick', (event) => {
    const treeItem = event.target.closest('modus-wc-tree-item');
    if (!treeItem) return;

    let next = null;
    if (event.detail.actionId === 'add-node-above') {
      const id = 'new-node-' + itemCounter;
      itemCounter += 1;
      next = addTreeItemAdjacentData(items, {
        referenceItemId: treeItem.value,
        item: { id, clientId: id + '-client', label: 'New Node', treeItemActions: treeActions },
        placement: 'above',
      });
    } else if (event.detail.actionId === 'add-node-below') {
      const id = 'new-node-' + itemCounter;
      itemCounter += 1;
      next = addTreeItemAdjacentData(items, {
        referenceItemId: treeItem.value,
        item: { id, clientId: id + '-client', label: 'New Node', treeItemActions: treeActions },
        placement: 'below',
      });
    } else if (event.detail.actionId === 'add-child') {
      const id = 'new-child-' + itemCounter;
      itemCounter += 1;
      next = addTreeItemData(items, {
        parentId: treeItem.value,
        item: { id, clientId: id + '-client', label: 'New Child', treeItemActions: treeActions },
      });
    } else if (event.detail.actionId === 'duplicate') {
      next = duplicateTreeItemData(items, { itemId: treeItem.value });
    } else if (event.detail.actionId === 'delete') {
      next = deleteTreeItemData(items, { itemId: treeItem.value });
    }

    if (!next) return;
    items = next;
    tree.items = items;
  });
<\/script>

<modus-wc-content-tree include-search="false" include-actions="false"></modus-wc-content-tree>
\`
      }
    }
  },
  render: () => {
    const treeActions = [{
      id: 'add-node-above',
      label: 'Add Node Above',
      icon: 'add',
      ariaLabel: 'Add node above'
    }, {
      id: 'add-node-below',
      label: 'Add Node Below',
      icon: 'add',
      ariaLabel: 'Add node below'
    }, {
      id: 'add-child',
      label: 'Add Child',
      icon: 'subdirectory_arrow_right',
      ariaLabel: 'Add child node'
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      icon: 'copy_content',
      ariaLabel: 'Duplicate node'
    }, {
      id: 'delete',
      label: 'Delete',
      icon: 'delete',
      ariaLabel: 'Delete node'
    }];
    const withTreeActions = (items: ITreeItemData[]): ITreeItemData[] => items.map(item => ({
      ...item,
      treeItemActions: treeActions,
      children: item.children ? withTreeActions(item.children) : undefined
    }));
    const initialItems = withTreeActions([{
      id: 'roadmap',
      clientId: 'roadmap-client',
      label: 'Roadmap',
      children: [{
        id: 'milestone-1',
        clientId: 'milestone-1-client',
        label: 'Milestone 1'
      }]
    }, {
      id: 'backlog',
      clientId: 'backlog-client',
      label: 'Backlog'
    }]);
    let itemCounter = 1;
    let currentItems = initialItems;
    const handleTreeActionClick = (event: CustomEvent<{
      actionId: string;
      actionName: string;
    }>) => {
      const source = event.target as HTMLElement;
      const treeItem = source.closest('modus-wc-tree-item') as ITreeItemElement | null;
      if (!treeItem) return;
      let nextItems: ITreeItemData[] | null = null;
      switch (event.detail.actionId) {
        case 'add-node-above':
          {
            const nextNodeNumber = itemCounter;
            const newNodeId = \`new-node-\${nextNodeNumber}\`;
            itemCounter += 1;
            nextItems = addTreeItemAdjacentData(currentItems, {
              referenceItemId: treeItem.value,
              item: {
                id: newNodeId,
                clientId: \`\${newNodeId}-client\`,
                label: \`New Node \${nextNodeNumber}\`,
                treeItemActions: treeActions
              },
              placement: 'above'
            });
            break;
          }
        case 'add-node-below':
          {
            const nextNodeNumber = itemCounter;
            const newNodeId = \`new-node-\${nextNodeNumber}\`;
            itemCounter += 1;
            nextItems = addTreeItemAdjacentData(currentItems, {
              referenceItemId: treeItem.value,
              item: {
                id: newNodeId,
                clientId: \`\${newNodeId}-client\`,
                label: \`New Node \${nextNodeNumber}\`,
                treeItemActions: treeActions
              },
              placement: 'below'
            });
            break;
          }
        case 'add-child':
          {
            const nextChildNumber = itemCounter;
            const newChildId = \`new-child-\${nextChildNumber}\`;
            itemCounter += 1;
            nextItems = addTreeItemData(currentItems, {
              parentId: treeItem.value,
              item: {
                id: newChildId,
                clientId: \`\${newChildId}-client\`,
                label: \`New Child \${nextChildNumber}\`,
                treeItemActions: treeActions
              }
            });
            break;
          }
        case 'duplicate':
          nextItems = duplicateTreeItemData(currentItems, {
            itemId: treeItem.value
          });
          break;
        case 'delete':
          nextItems = deleteTreeItemData(currentItems, {
            itemId: treeItem.value
          });
          break;
      }
      if (!nextItems) return;
      currentItems = nextItems;
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      tree.items = currentItems;
    };
    return html\`
      <modus-wc-content-tree
        .includeSearch=\${false}
        .includeActions=\${false}
        .items=\${currentItems}
        @treeActionClick=\${handleTreeActionClick}
      >
      </modus-wc-content-tree>
    \`;
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ce,de;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Items Reordering',
  args: {
    'include-search': false,
    'include-actions': false,
    'items-reordering': true
  },
  parameters: {
    docs: {
      description: {
        story: 'Enables drag-and-drop reordering with top/bottom drop-line indicators for data-driven \`items\` in the same level.'
      },
      source: {
        code: \`
<script>
let items = [
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

const tree = document.querySelector('modus-wc-content-tree');
tree.items = items;

tree.addEventListener('itemsReordered', (event) => {
  // Use clientId as stable UI identity while backend IDs can change.
  items = [...event.detail.items];
  tree.items = items;
});
<\/script>

<modus-wc-content-tree
  include-search="false"
  include-actions="false"
  items-reordering="true"
></modus-wc-content-tree>
\`
      }
    }
  },
  render: args => {
    const initialItems = [...(args.items ?? nestedItemsReorderingData)];
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
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      tree.items = [...event.detail.items];
    };
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        customClass=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
        .itemsReordering=\${args['items-reordering']}
        .items=\${initialItems}
        @itemsReordered=\${handleItemsReordered}
      ></modus-wc-content-tree>
    \`;
  }
}`,...(de=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ae,le,me;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(me=(le=C.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ue,we,be;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Lazy Loading',
  parameters: {
    docs: {
      description: {
        story: \`Demonstrates lazy loading using the data-driven \\\`items\\\` prop and \\\`itemExpand\\\` event with stable \\\`clientId\\\` identity. Items with \\\`hasChildren: true\\\` and no \\\`children\\\` show an expand chevron; when expanded, the tree shows a loader until the consumer provides children by updating \\\`items\\\`.\`
      },
      source: {
        code: \`
<script>
const initialItems = [
  { id: 'db-101', clientId: 'documents-node', label: 'Documents', hasChildren: true },
  { id: 'db-102', clientId: 'projects-node', label: 'Projects', hasChildren: true },
  { id: 'db-103', clientId: 'resources-node', label: 'Resources', hasChildren: true },
];

const mockData = {
  'documents-node': [
    { id: 'db-201', clientId: 'report-node', label: 'Report.pdf' },
    { id: 'db-202', clientId: 'proposal-node', label: 'Proposal.docx' },
    { id: 'db-203', clientId: 'notes-node', label: 'Meeting Notes.txt' },
  ],
  'projects-node': [
    { id: 'db-301', clientId: 'website-node', label: 'Website Redesign', hasChildren: true },
    { id: 'db-302', clientId: 'mobile-node', label: 'Mobile App' },
    { id: 'db-303', clientId: 'api-node', label: 'API Integration' },
  ],
  'resources-node': [
    { id: 'db-401', clientId: 'templates-node', label: 'Templates' },
    { id: 'db-402', clientId: 'guide-node', label: 'Style Guide' },
  ],
  'website-node': [
    { id: 'db-501', clientId: 'design-node', label: 'Design Mockups' },
    { id: 'db-502', clientId: 'dev-node', label: 'Development' },
  ],
};

const getIdentity = (item) => item.clientId ?? item.id;

function updateItem(items, parentIdentity, updater) {
  return items.map((item) => {
    if (getIdentity(item) === parentIdentity) return updater(item);
    if (item.children) {
      return {
        ...item,
        children: updateItem(item.children, parentIdentity, updater),
      };
    }
    return item;
  });
}

const tree = document.querySelector('modus-wc-content-tree');
tree.items = initialItems;

tree.addEventListener('itemExpand', async (event) => {
  const itemIdentity = event.detail;

  const findItem = (items) => {
    for (const item of items) {
      if (getIdentity(item) === itemIdentity) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
  };

  const item = findItem(tree.items);
  if (item?.children?.length) return;

  const children = await new Promise((resolve) =>
    setTimeout(() => resolve(mockData[itemIdentity] ?? []), 1500)
  );

  tree.items = updateItem(tree.items, itemIdentity, (item) => ({
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
      id: 'db-101',
      clientId: 'documents-node',
      label: 'Documents',
      hasChildren: true
    }, {
      id: 'db-102',
      clientId: 'projects-node',
      label: 'Projects',
      hasChildren: true
    }, {
      id: 'db-103',
      clientId: 'resources-node',
      label: 'Resources',
      hasChildren: true
    }];
    const mockData: Record<string, ITreeItemData[]> = {
      'documents-node': [{
        id: 'db-201',
        clientId: 'report-node',
        label: 'Report.pdf'
      }, {
        id: 'db-202',
        clientId: 'proposal-node',
        label: 'Proposal.docx'
      }, {
        id: 'db-203',
        clientId: 'notes-node',
        label: 'Meeting Notes.txt'
      }],
      'projects-node': [{
        id: 'db-301',
        clientId: 'website-node',
        label: 'Website Redesign',
        hasChildren: true
      }, {
        id: 'db-302',
        clientId: 'mobile-node',
        label: 'Mobile App'
      }, {
        id: 'db-303',
        clientId: 'api-node',
        label: 'API Integration'
      }],
      'resources-node': [{
        id: 'db-401',
        clientId: 'templates-node',
        label: 'Templates'
      }, {
        id: 'db-402',
        clientId: 'guide-node',
        label: 'Style Guide'
      }],
      'website-node': [{
        id: 'db-501',
        clientId: 'design-node',
        label: 'Design Mockups'
      }, {
        id: 'db-502',
        clientId: 'dev-node',
        label: 'Development'
      }]
    };
    const getIdentity = (item: ITreeItemData): string => item.clientId ?? item.id;
    const updateItem = (items: ITreeItemData[], parentIdentity: string, updater: (item: ITreeItemData) => ITreeItemData): ITreeItemData[] => items.map(item => {
      if (getIdentity(item) === parentIdentity) return updater(item);
      if (item.children) return {
        ...item,
        children: updateItem(item.children, parentIdentity, updater)
      };
      return item;
    });
    const findItem = (items: ITreeItemData[], identity: string): ITreeItemData | undefined => {
      for (const item of items) {
        if (getIdentity(item) === identity) return item;
        if (item.children) {
          const found = findItem(item.children, identity);
          if (found) return found;
        }
      }
      return undefined;
    };
    const handleItemExpand = async (event: CustomEvent<string>) => {
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      const itemIdentity = event.detail;
      const current = tree.items ?? initialItems;
      const item = findItem(current, itemIdentity);
      if (item?.children?.length) return;
      const children = await new Promise<ITreeItemData[]>(resolve => setTimeout(() => resolve(mockData[itemIdentity] ?? []), 1500));
      tree.items = updateItem(current, itemIdentity, i => ({
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
}`,...(be=(we=S.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var he,pe,ve;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:"{\n  name: 'API Reference',\n  parameters: {\n    docs: {\n      description: {\n        story: `\n### Props\n\n| Name              | Type       | Default      | Description                                       |\n|-------------------|------------|--------------|---------------------------------------------------|\n| customClass       | \\`string\\` | \\`''\\`       | Additional CSS class to apply to the component    |\n| searchPlaceholder | \\`string\\` | \\`'Search...'\\` | Placeholder text for the search input          |\n| includeSearch     | \\`boolean\\` | \\`true\\`    | Whether to display the search functionality       |\n| includeActions    | \\`boolean\\` | \\`true\\`    | Whether to display action buttons for tree items  |\n| items             | \\`ITreeItemData[]\\` | - | Data-driven tree data used to render items and nested children |\n| itemsReordering   | \\`boolean\\` | \\`false\\` | Enables drag-and-drop reordering for data-driven trees |\n\n#### Events\n\n| Name           | Payload                                                         | Description |\n|----------------|------------------------------------------------------------------|-------------|\n| itemsReordered | \\`{ items: ITreeItemData[]; parameters: ITreeItemReorderParameters }\\` | Emitted after a successful drag reorder with updated tree data and reorder metadata |\n\n---\n\n### State Manager Utilities\n\nUse these helpers to keep tree updates controlled/stateless. Each utility returns \\`nextItems\\`; your application decides whether to apply it.\n\n| Utility | Parameters | Description |\n|---------|------------|-------------|\n| \\`addTreeItemData\\` | \\`(items, { parentId, item, index? })\\` | Adds an item at root or as a child under \\`parentId\\`. |\n| \\`addTreeItemAdjacentData\\` | \\`(items, { referenceItemId, item, placement })\\` | Inserts a sibling above or below an existing item. |\n| \\`deleteTreeItemData\\` | \\`(items, { itemId })\\` | Removes an item by identity. |\n| \\`duplicateTreeItemData\\` | \\`(items, { itemId, parentId?, index? })\\` | Duplicates an item/subtree with regenerated IDs. |\n| \\`reorderTreeItemsData\\` | \\`(items, parameters)\\` | Computes reordered tree data for drag/drop operations. |\n\n#### Built-in Action Mapping\n\n| Action ID | Recommended Utility |\n|-----------|----------------------|\n| \\`add-node-above\\` | \\`addTreeItemAdjacentData(..., { placement: 'above' })\\` |\n| \\`add-node-below\\` | \\`addTreeItemAdjacentData(..., { placement: 'below' })\\` |\n| \\`add-child\\` | \\`addTreeItemData\\` |\n| \\`duplicate\\` | \\`duplicateTreeItemData\\` |\n| \\`delete\\` | \\`deleteTreeItemData\\` |\n\n#### Controlled Update Flow\n\n1. Handle \\`treeActionClick\\` or \\`itemsReordered\\`.\n2. Call the mapped utility to compute \\`nextItems\\`.\n3. Optionally validate/persist with your backend.\n4. Apply \\`nextItems\\` by updating \\`items\\`.\n\n---\n\n### Tree View\n\n#### Props\n\n| Name        | Type       | Default   | Description                                           |\n|-------------|------------|-----------|-------------------------------------------------------|\n| customClass | \\`string\\` | \\`''\\`    | Additional CSS class to apply to the tree view        |\n| isSubList   | \\`boolean\\` | \\`false\\` | Whether the tree view is a sublist of another tree item |\n| multiSelect | \\`boolean\\` | \\`false\\` | Enables additive (Ctrl/Cmd) and range (Shift) selection behavior |\n| showConnectorLine | \\`boolean\\` | \\`true\\` | Shows or hides connector lines for nested sublists |\n\n#### Events\n\n| Name                | Payload                          | Description |\n|---------------------|----------------------------------|-------------|\n| itemSelectionChange | \\`{ selectedValues: string[] }\\` | Emitted when selected tree item values change |\n\n---\n\n### Tree Item\n\n#### Props\n\n| Name            | Type                                   | Default   | Description                                                  |\n|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|\n| label           | \\`string\\`                             | -         | The label text for the tree item (required)                  |\n| value           | \\`string\\`                             | \\`''\\`    | The value associated with the tree item                      |\n| disabled        | \\`boolean\\`                            | \\`false\\` | Whether the tree item is disabled                            |\n| checkbox        | \\`boolean\\`                            | \\`false\\` | Whether to display a checkbox for the tree item              |\n| selected        | \\`boolean\\`                            | -         | Whether the tree item is selected (mutable, reflected)       |\n| checked         | \\`boolean\\`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |\n| hasSubtree      | \\`boolean\\`                            | \\`false\\` | Whether the tree item has a subtree                          |\n| treeItemActions | \\`ITreeItemActions[]\\`                 | -         | Array of actions to display for the tree item                |\n| inlineLabelEdit | \\`boolean\\`                            | \\`false\\` | Enables inline text editing for the item label               |\n| itemsReordering | \\`boolean\\`                            | \\`false\\` | Shows drag handle and enables drag/drop item reordering      |\n| size            | \\`'xs' | 'sm' | 'md' | 'lg'\\`    | \\`'xs'\\`  | The size of the tree item                                    |\n| customClass     | \\`string\\`                             | \\`''\\`    | Additional CSS class to apply to the tree item               |\n| lazyLoading     | \\`boolean\\`                            | \\`false\\` | When \\`true\\` and the item is expanded, shows a spinner in place of children. Managed automatically by the content tree when \\`getChildren\\` is provided. |\n| hasChildren     | \\`boolean\\`                            | -         | Hint that the item has unloaded children. Used with \\`getChildren\\` on the content tree to show the expand chevron before children are fetched. |\n\n#### Events\n\n| Name             | Payload                          | Description                                     |\n|------------------|----------------------------------|-------------------------------------------------|\n| itemSelect       | \\`{ value: string }\\`            | Emitted when a tree item is selected            |\n| selectionsChange | \\`{ selectedValues: string[] }\\` | Emitted when the selection state changes        |\n| itemExpand       | \\`string\\`                       | Emitted with the item's \\`value\\` when it is expanded. Use this to trigger lazy data loading. |\n| itemLabelChange  | \\`string\\`                       | Emitted when inline label editing is committed |\n| itemReordered    | \\`ITreeItemReorderedEventDetail\\` | Emitted when a drag/drop reorder operation completes for the item |\n\n#### Methods\n\n| Name            | Type                      | Description                |\n|-----------------|---------------------------|----------------------------|\n| collapseSubTree | \\`() => Promise<void>\\`   | Collapses the subtree      |\n| expandSubTree   | \\`() => Promise<void>\\`   | Expands the subtree        |\n| setIndeterminateState | \\`(indeterminate: boolean) => Promise<void>\\` | Sets checkbox indeterminate state |\n\n---\n\n### Tree Actions\n\n#### Props\n\n| Name    | Type                                | Default  | Description                          |\n|---------|-------------------------------------|----------|--------------------------------------|\n| actions | \\`ITreeItemActions[]\\`              | -        | Array of actions to display          |\n| size    | \\`'xs' | 'sm' | 'md' | 'lg'\\` | \\`'xs'\\` | The size of the action buttons       |\n\n#### Behavior\n\n- Renders the first action as a direct icon button for fast access.\n- Renders remaining actions in a \"More actions\" dropdown menu.\n- When the \\`delete\\` action is clicked, a confirmation UI is shown before emitting \\`treeActionClick\\`.\n- Automatically closes other open tree-action dropdowns when a new one opens.\n\n#### Events\n\n| Name            | Payload                                   | Description                                |\n|-----------------|-------------------------------------------|--------------------------------------------|\n| treeActionClick | \\`{ actionId: string; actionName: string }\\` | Emitted when an action is clicked       |\n| dropdownOpened  | \\`HTMLElement\\`                           | Emitted when the dropdown is opened        |\n\n---\n\n### Interfaces\n\n#### ITreeItemData\n\n\\`\\`\\`typescript\ninterface ITreeItemData {\n  id: string;                // Backend/persistent identifier\n  clientId?: string;         // Optional stable client-generated identifier (for example UUID)\n  label: string;\n  checkbox?: boolean;\n  startIcon?: string;\n  treeItemActions?: ITreeItemActions[];\n  children?: ITreeItemData[];\n  hasChildren?: boolean;\n}\n\\`\\`\\`\n\n---\n\n#### ITreeItemActions\n\n\\`\\`\\`typescript\ninterface ITreeItemActions {\n  id: string;                           // Unique identifier for the action\n  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'\n  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon\n  label: string;                        // Text label for the action\n  ariaLabel?: string;                   // Optional label for accessibility\n  disabled?: boolean;                   // Optional flag to disable the action\n}\n\\`\\`\\`\n`\n      }\n    },\n    controls: {\n      disable: true\n    }\n  },\n  render: () => {\n    return html``;\n  }\n}",...(ve=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};const Le=["Default","TreeItem","TreeItemWithStartIcon","EmptyState","SingleSelection","CheckboxSelection","DisabledSelection","WithActions","ControlledActionsWithUtilities","ItemsReordering","MultiSelect","LazyLoading","ApiReference"];export{D as ApiReference,f as CheckboxSelection,x as ControlledActionsWithUtilities,h as Default,y as DisabledSelection,I as EmptyState,$ as ItemsReordering,S as LazyLoading,C as MultiSelect,g as SingleSelection,p as TreeItem,v as TreeItemWithStartIcon,A as WithActions,Le as __namedExportsOrder,Te as default};
