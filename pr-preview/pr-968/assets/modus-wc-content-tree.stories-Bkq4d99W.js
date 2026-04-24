import{w as le}from"./decorator-D4YmxizW.js";import{x as m}from"./lit-element-CucEn6F2.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const u=e=>e.clientId??e.id,D=(e,n,t,r)=>{var s;if(n===null){const o=Math.max(0,Math.min(r,e.length)),i=[...e];return i.splice(o,0,t),i}for(let o=0;o<e.length;o++){const i=e[o];if(u(i)===n){const c=i.children??[],l=Math.max(0,Math.min(r,c.length)),p=[...c];p.splice(l,0,t);const h=[...e];return h[o]={...i,children:p},h}if(!((s=i.children)!=null&&s.length))continue;const d=D(i.children,n,t,r);if(!d)continue;const a=[...e];return a[o]={...i,children:d},a}return null},re=(e,n,t=null)=>{var r;for(let s=0;s<e.length;s++){const o=e[s];if(u(o)===n){const a=[...e],[c]=a.splice(s,1);return{list:a,removedItem:c,parentId:t,index:s}}if(!((r=o.children)!=null&&r.length))continue;const i=re(o.children,n,u(o));if(!i)continue;const d=[...e];return d[s]={...o,children:i.list},{...i,list:d}}return null},S=(e,n,t=null)=>{var r;for(let s=0;s<e.length;s++){const o=e[s];if(u(o)===n)return{item:o,parentId:t,index:s};if(!((r=o.children)!=null&&r.length))continue;const i=S(o.children,n,u(o));if(i)return i}return null},se=(e,n)=>{var o;const t=n.current;n.current+=1;const r=`${e.id}-copy-${t}`,s=e.clientId?`${e.clientId}-copy-${t}`:void 0;return{...e,id:r,clientId:s,children:(o=e.children)==null?void 0:o.map(i=>se(i,n))}},de=(e,n,t)=>{var r;for(let s=0;s<e.length;s++){const o=e[s];if(u(o)===n){const a=[...e];return a[s]={...o,...t},{list:a,updated:!0}}if(!((r=o.children)!=null&&r.length))continue;const i=de(o.children,n,t);if(!i.updated)continue;const d=[...e];return d[s]={...o,children:i.list},{list:d,updated:!0}}return{list:e,updated:!1}},me=(e,n)=>{const{parentId:t,item:r,index:s}=n,o=s??Number.MAX_SAFE_INTEGER;return D(e,t,r,o)},ue=(e,n)=>{const t=re(e,n.itemId);return t?t.list:null},pe=(e,n)=>{const t=S(e,n.itemId);if(!t)return null;const r={current:1},s=se(t.item,r),o=n.parentId===void 0?t.parentId:n.parentId,i=n.index===void 0?t.index+1:n.index;return D(e,o,s,i)},he=(e,n)=>{const t=S(e,n.referenceItemId);if(!t)return null;const r=n.placement==="above"?0:1,s=t.index+r;return D(e,t.parentId,n.item,s)},A=(e,n)=>{const t=de(e,n.itemId,n.patch);return t.updated?t.list:null},fe={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"custom-class":"","search-placeholder":"Search...","include-search":!0,"include-actions":!0,"items-reordering":!1,items:void 0},argTypes:{"search-placeholder":{control:{type:"text"},table:{category:"Content Tree"}},"include-search":{control:{type:"boolean"},table:{category:"Content Tree"}},"include-actions":{control:{type:"boolean"},table:{category:"Content Tree"}},"items-reordering":{control:{type:"boolean"},table:{category:"Content Tree"}}},decorators:[le],parameters:{actions:{handles:["itemSelect","itemReordered","itemsReordered","treeActionClick","selectionsChange","dropdownOpened","itemLabelChange","itemExpand"]}}},be=[{id:"phase-1",clientId:"phase-1-client",label:"Phase 1",children:[{id:"backlog",clientId:"backlog-client",label:"Backlog"},{id:"in-progress",clientId:"in-progress-client",label:"In Progress"},{id:"review",clientId:"review-client",label:"Review"}]},{id:"phase-2",clientId:"phase-2-client",label:"Phase 2",children:[{id:"qa",clientId:"qa-client",label:"QA"},{id:"uat",clientId:"uat-client",label:"UAT"},{id:"done",clientId:"done-client",label:"Done"}]}],b={parameters:{docs:{description:{story:"A basic content tree with hierarchical structure. Items can be expanded and collapsed to navigate through the tree. On `modus-wc-tree-view`, selection is **single-select by default**: clicking an item selects only that item. To allow multiple selected items, enable multi-select on the tree view (see the Multi-selection story)."},source:{code:`
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
`}}},render:e=>m`
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
    `},w={name:"Tree Item",parameters:{docs:{description:{story:"Tree items can display custom icons at the start using the start-icon slot. This is useful for representing file types, folders, or custom item types."},source:{code:`
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
`}}},render:()=>m`
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
    `},I={name:"Empty State",parameters:{docs:{description:{story:"This example starts with a custom slot-based empty state and transitions to data-driven mode after creating the first node. Consumers can provide a custom empty state through the default slot."},source:{code:`
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
  const id = 'new-item-' + Date.now();
  tree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
  tree.items = [{
    id,
    clientId: id,
    label: 'New Item',
    inlineLabelEdit: true,
  }];
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
`}}},render:e=>{const n=t=>{var o,i;const r=(o=t.currentTarget)==null?void 0:o.closest("modus-wc-content-tree");if(!r)return;const s=`new-item-${Date.now()}`;(i=r.querySelector(".modus-wc-content-tree-empty-story"))==null||i.remove(),r.items=[{id:s,clientId:s,label:"New Item",inlineLabelEdit:!0}]};return m`
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
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

          <modus-wc-button variant="outline" @buttonClick=${n}>
            Create node
          </modus-wc-button>
        </div>
      </modus-wc-content-tree>
    `}},v={name:"Multi-selection",parameters:{docs:{description:{story:"**Multi-select mode** is opt-in: set `multi-select` on `modus-wc-tree-view` (or the equivalent property in your framework). Without it, the tree stays in the default **single-selection** behavior. When multi-select is on, use Ctrl/Cmd + click to toggle individual items, and Shift + click to select a contiguous range. Works across nested tree items."},source:{code:`
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
`}}},render:e=>m`
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
    `},g={name:"Disabled Selection",parameters:{docs:{description:{story:"This example demonstrates tree items with disabled state. Disabled items cannot be selected or interacted with."},source:{code:`
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
`}}},render:e=>m`
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
    `},f={name:"Checkbox Selection",parameters:{docs:{description:{story:"This example demonstrates a data-driven tree with checkboxes for multi-selection. Selecting a parent item selects its descendants, and descendant selections update parent indeterminate/checked states."},source:{code:`
<script>
const items = [
  {
    id: 'documents',
    clientId: 'documents-node',
    label: 'Documents',
    checkbox: true,
    children: [
      { id: 'report', clientId: 'report-node', label: 'Report.pdf', checkbox: true },
      { id: 'proposal', clientId: 'proposal-node', label: 'Proposal.docx', checkbox: true },
    ],
  },
  {
    id: 'projects',
    clientId: 'projects-node',
    label: 'Projects',
    checkbox: true,
    children: [
      { id: 'alpha', clientId: 'alpha-node', label: 'Project Alpha', checkbox: true },
      { id: 'beta', clientId: 'beta-node', label: 'Project Beta', checkbox: true },
    ],
  },
  { id: 'archive', clientId: 'archive-node', label: 'Archive', checkbox: true },
];
<\/script>

<modus-wc-content-tree
  search-placeholder="Search..."
  include-search="true"
  include-actions="true"
  .items="items"
></modus-wc-content-tree>
`}}},render:e=>{const n=[{id:"documents",clientId:"documents-node",label:"Documents",checkbox:!0,children:[{id:"report",clientId:"report-node",label:"Report.pdf",checkbox:!0},{id:"proposal",clientId:"proposal-node",label:"Proposal.docx",checkbox:!0}]},{id:"projects",clientId:"projects-node",label:"Projects",checkbox:!0,children:[{id:"alpha",clientId:"alpha-node",label:"Project Alpha",checkbox:!0},{id:"beta",clientId:"beta-node",label:"Project Beta",checkbox:!0}]},{id:"archive",clientId:"archive-node",label:"Archive",checkbox:!0}];return m`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
        .items=${n}
      ></modus-wc-content-tree>
    `}};function ae(e,n){return e.map(t=>{var d;const r=t.children?ae(t.children,n):void 0;if(!(t.id===n||t.clientId===n))return r!==t.children?{...t,children:r}:t;const o=!t.disabled,i=(d=t.treeItemActions)==null?void 0:d.map(a=>a.id!=="toggle-visibility"?a:{...a,icon:o?"visibility_off":"visibility_on",ariaLabel:o?"Item hidden":"Item visible"});return{...t,disabled:o,treeItemActions:i,children:r}})}const y={name:"With Actions",args:{"include-search":!1,"include-actions":!1},parameters:{docs:{description:{story:"All-in-one stateless example: visibility (toggle `disabled` + icon), add sibling above/below, add child, duplicate, inline edit label, and delete—using `addTreeItemAdjacentData`, `addTreeItemData`, `duplicateTreeItemData`, `updateTreeItemData`, and `deleteTreeItemData`. On `treeActionClick`, read `event.detail.itemId`, call the matching utility, assign back to `tree.items`."},source:{code:`
<script>
  function toggleItemVisibilityInTree(items, itemId) {
    return items.map((item) => {
      const children = item.children
        ? toggleItemVisibilityInTree(item.children, itemId)
        : undefined;
      const match = item.id === itemId || item.clientId === itemId;
      if (!match) {
        return children !== item.children ? { ...item, children } : item;
      }
      const nextDisabled = !item.disabled;
      const treeItemActions = item.treeItemActions?.map((a) => {
        if (a.id !== 'toggle-visibility') return a;
        return {
          ...a,
          icon: nextDisabled ? 'visibility_off' : 'visibility_on',
          ariaLabel: nextDisabled ? 'Item hidden' : 'Item visible',
        };
      });
      return { ...item, disabled: nextDisabled, treeItemActions, children };
    });
  }

  const actions = [
    { id: 'toggle-visibility', label: 'Visibility', icon: 'visibility_on', ariaLabel: 'Item visible' },
    { id: 'add-node-above', label: 'Add Node Above', icon: 'add', ariaLabel: 'Add node above' },
    { id: 'add-node-below', label: 'Add Node Below', icon: 'add', ariaLabel: 'Add node below' },
    { id: 'add-child', label: 'Add Child', icon: 'subdirectory_arrow_right' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy_content' },
    { id: 'edit-label', label: 'Edit Label', icon: 'pencil' },
    { id: 'delete', label: 'Delete', icon: 'delete' },
  ];

  let counter = 1;
  let items = [
    { id: 'roadmap', clientId: 'roadmap', label: 'Roadmap', treeItemActions: actions },
    { id: 'backlog', clientId: 'backlog', label: 'Backlog', treeItemActions: actions },
  ];

  const tree = document.querySelector('modus-wc-content-tree');
  tree.items = items;

  const apply = (next) => { if (next) { items = next; tree.items = items; } };

  tree.addEventListener('treeActionClick', (event) => {
    const { actionId, itemId } = event.detail;
    if (!itemId) return;

    if (actionId === 'toggle-visibility') {
      apply(toggleItemVisibilityInTree(items, itemId));
    } else if (actionId === 'add-node-above' || actionId === 'add-node-below') {
      const id = 'node-' + counter++;
      apply(addTreeItemAdjacentData(items, {
        referenceItemId: itemId,
        item: { id, clientId: id, label: 'New Node', treeItemActions: actions },
        placement: actionId === 'add-node-above' ? 'above' : 'below',
      }));
    } else if (actionId === 'add-child') {
      const id = 'child-' + counter++;
      apply(addTreeItemData(items, {
        parentId: itemId,
        item: { id, clientId: id, label: 'New Child', treeItemActions: actions },
      }));
    } else if (actionId === 'duplicate') {
      apply(duplicateTreeItemData(items, { itemId }));
    } else if (actionId === 'edit-label') {
      apply(updateTreeItemData(items, { itemId, patch: { inlineLabelEdit: true } }));
    } else if (actionId === 'delete') {
      apply(deleteTreeItemData(items, { itemId }));
    }
  });

  tree.addEventListener('itemLabelChange', (event) => {
    const treeItem = event.target.closest('modus-wc-tree-item');
    if (!treeItem) return;
    apply(updateTreeItemData(items, {
      itemId: treeItem.value,
      patch: { label: event.detail, inlineLabelEdit: false },
    }));
  });
<\/script>

<modus-wc-content-tree></modus-wc-content-tree>
`}}},render:()=>{const e=[{id:"toggle-visibility",label:"Visibility",icon:"visibility_on",ariaLabel:"Item visible"},{id:"add-node-above",label:"Add Node Above",icon:"add",ariaLabel:"Add node above"},{id:"add-node-below",label:"Add Node Below",icon:"add",ariaLabel:"Add node below"},{id:"add-child",label:"Add Child",icon:"subdirectory_arrow_right"},{id:"duplicate",label:"Duplicate",icon:"copy_content"},{id:"edit-label",label:"Edit Label",icon:"pencil"},{id:"delete",label:"Delete",icon:"delete"}];let n=1,t=[{id:"roadmap",clientId:"roadmap",label:"Roadmap",treeItemActions:e},{id:"backlog",clientId:"backlog",label:"Backlog",treeItemActions:e}];const r=(i,d)=>{d&&(t=d,i.items=t)};return m`
      <modus-wc-content-tree
        .items=${t}
        @treeActionClick=${i=>{const{actionId:d,itemId:a}=i.detail;if(!a)return;const c=i.currentTarget;if(d==="toggle-visibility")r(c,ae(t,a));else if(d==="add-node-above"||d==="add-node-below"){const l=`node-${n++}`;r(c,he(t,{referenceItemId:a,item:{id:l,clientId:l,label:"New Node",treeItemActions:e},placement:d==="add-node-above"?"above":"below"}))}else if(d==="add-child"){const l=`child-${n++}`;r(c,me(t,{parentId:a,item:{id:l,clientId:l,label:"New Child",treeItemActions:e}}))}else d==="duplicate"?r(c,pe(t,{itemId:a})):d==="edit-label"?r(c,A(t,{itemId:a,patch:{inlineLabelEdit:!0}})):d==="delete"&&r(c,ue(t,{itemId:a}))}}
        @itemLabelChange=${i=>{const d=i.target.closest("modus-wc-tree-item");if(!d)return;const a=i.currentTarget;r(a,A(t,{itemId:d.value,patch:{label:i.detail,inlineLabelEdit:!1}}))}}
      ></modus-wc-content-tree>
    `}},x={name:"Items Reordering",args:{"include-search":!1,"include-actions":!1,"items-reordering":!0},parameters:{docs:{description:{story:"Enables drag-and-drop reordering with top/bottom drop-line indicators for data-driven `items` in the same level."},source:{code:`
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
`}}},render:e=>{const n=[...e.items??be],t=r=>{const s=r.currentTarget;s.items=[...r.detail.items]};return m`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        customClass=${e["custom-class"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${e["include-actions"]}
        .itemsReordering=${e["items-reordering"]}
        .items=${n}
        @itemsReordered=${t}
      ></modus-wc-content-tree>
    `}},T={name:"Lazy Loading",parameters:{docs:{description:{story:"Demonstrates lazy loading using the data-driven `items` prop and `itemExpand` event with stable `clientId` identity. Items with `hasChildren: true` and no `children` show an expand chevron; when expanded, the tree shows a loader until the consumer provides children by updating `items`."},source:{code:`
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

  const nextItems = updateTreeItemData(tree.items, {
    itemId: itemIdentity,
    patch: {
      children,
      hasChildren: children.length > 0,
    },
  });

  if (nextItems) {
    tree.items = nextItems;
  }
});
<\/script>

<modus-wc-content-tree search-placeholder="Search..." include-search="true"></modus-wc-content-tree>
`}},actions:{handles:["itemExpand"]}},render:e=>{const n=[{id:"db-101",clientId:"documents-node",label:"Documents",hasChildren:!0},{id:"db-102",clientId:"projects-node",label:"Projects",hasChildren:!0},{id:"db-103",clientId:"resources-node",label:"Resources",hasChildren:!0}],t={"documents-node":[{id:"db-201",clientId:"report-node",label:"Report.pdf"},{id:"db-202",clientId:"proposal-node",label:"Proposal.docx"},{id:"db-203",clientId:"notes-node",label:"Meeting Notes.txt"}],"projects-node":[{id:"db-301",clientId:"website-node",label:"Website Redesign",hasChildren:!0},{id:"db-302",clientId:"mobile-node",label:"Mobile App"},{id:"db-303",clientId:"api-node",label:"API Integration"}],"resources-node":[{id:"db-401",clientId:"templates-node",label:"Templates"},{id:"db-402",clientId:"guide-node",label:"Style Guide"}],"website-node":[{id:"db-501",clientId:"design-node",label:"Design Mockups"},{id:"db-502",clientId:"dev-node",label:"Development"}]},r=i=>i.clientId??i.id,s=(i,d)=>{for(const a of i){if(r(a)===d)return a;if(a.children){const c=s(a.children,d);if(c)return c}}},o=async i=>{var k;const d=i.currentTarget,a=i.detail,c=d.items??n,l=s(c,a);if((k=l==null?void 0:l.children)!=null&&k.length)return;const p=await new Promise(ce=>setTimeout(()=>ce(t[a]??[]),1500)),h=A(c,{itemId:a,patch:{children:p,hasChildren:p.length>0}});h&&(d.items=h)};return m`
      <modus-wc-content-tree
        search-placeholder=${e["search-placeholder"]}
        .includeSearch=${e["include-search"]}
        .includeActions=${!1}
        .items=${n}
        @itemExpand=${o}
      ></modus-wc-content-tree>
    `}},C={name:"API Reference",parameters:{docs:{description:{story:"\n### Support Model\n\n| Mode | Supported Scope |\n|------|------------------|\n| Slot-based (no `items`) | Basic nested rendering, basic expand/collapse and selection UX, basic action buttons/events, styling/composition flexibility |\n| Data-driven (`items`) | Controlled/stateless updates, mutation utilities, lazy loading orchestration, and drag/drop reordering |\n\n> Use the data-driven `items` model for controlled application state. Treat slot-based usage as basic/uncontrolled mode.\n\n### Props\n\n| Name              | Type       | Default      | Description                                       |\n|-------------------|------------|--------------|---------------------------------------------------|\n| customClass       | `string` | `''`       | Additional CSS class to apply to the component    |\n| searchPlaceholder | `string` | `'Search...'` | Placeholder text for the search input          |\n| includeSearch     | `boolean` | `true`    | Whether to display the search functionality       |\n| includeActions    | `boolean` | `true`    | Whether to display action buttons for tree items  |\n| items             | `ITreeItemData[]` | - | Data-driven tree data used to render items and nested children. If omitted, slotted content is rendered in basic/uncontrolled mode. |\n| itemsReordering   | `boolean` | `false` | Enables drag-and-drop reordering for data-driven trees only (not slot-based trees). |\n\n#### Events\n\n| Name           | Payload                                                         | Description |\n|----------------|------------------------------------------------------------------|-------------|\n| itemsReordered | `{ items: ITreeItemData[]; parameters: ITreeItemReorderParameters }` | Emitted after a successful drag reorder with updated tree data and reorder metadata in data-driven mode only |\n\n---\n\n### State Manager Utilities\n\nUse these helpers to keep tree updates controlled/stateless in data-driven mode. Each utility returns `nextItems`; your application decides whether to apply it.\n\n| Utility | Parameters | Description |\n|---------|------------|-------------|\n| `addTreeItemData` | `(items, { parentId, item, index? })` | Adds an item at root or as a child under `parentId`. |\n| `addTreeItemAdjacentData` | `(items, { referenceItemId, item, placement })` | Inserts a sibling above or below an existing item. |\n| `deleteTreeItemData` | `(items, { itemId })` | Removes an item by identity. |\n| `duplicateTreeItemData` | `(items, { itemId, parentId?, index? })` | Duplicates an item/subtree with regenerated IDs. |\n| `updateTreeItemData` | `(items, { itemId, patch })` | Updates an existing item by identity using a partial patch. |\n| `reorderTreeItemsData` | `(items, parameters)` | Computes reordered tree data for drag/drop operations. |\n\n#### Built-in Action Mapping\n\n| Action ID | Recommended Utility |\n|-----------|----------------------|\n| `add-node-above` | `addTreeItemAdjacentData(..., { placement: 'above' })` |\n| `add-node-below` | `addTreeItemAdjacentData(..., { placement: 'below' })` |\n| `add-child` | `addTreeItemData` |\n| `duplicate` | `duplicateTreeItemData` |\n| `edit-label` | `updateTreeItemData` |\n| `delete` | `deleteTreeItemData` |\n\n#### Controlled Update Flow\n\n1. Handle `treeActionClick` or `itemsReordered`.\n2. Call the mapped utility to compute `nextItems`.\n3. Optionally validate/persist with your backend.\n4. Apply `nextItems` by updating `items`.\n\n> The controlled flow above applies to data-driven mode. Slot-based mode is intentionally limited to basic UI behavior.\n\n---\n\n### Tree View\n\n#### Props\n\n| Name        | Type       | Default   | Description                                           |\n|-------------|------------|-----------|-------------------------------------------------------|\n| customClass | `string` | `''`    | Additional CSS class to apply to the tree view        |\n| isSubList   | `boolean` | `false` | Whether the tree view is a sublist of another tree item |\n| multiSelect | `boolean` | `false` | Enables additive (Ctrl/Cmd) and range (Shift) selection behavior |\n| showConnectorLine | `boolean` | `true` | Shows or hides connector lines for nested sublists |\n\n#### Events\n\n| Name                | Payload                          | Description |\n|---------------------|----------------------------------|-------------|\n| itemSelectionChange | `{ selectedValues: string[] }` | Emitted when selected tree item values change |\n\n---\n\n### Tree Item\n\n#### Props\n\n| Name            | Type                                   | Default   | Description                                                  |\n|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|\n| label           | `string`                             | -         | The label text for the tree item (required)                  |\n| value           | `string`                             | `''`    | The value associated with the tree item                      |\n| disabled        | `boolean`                            | `false` | Whether the tree item is disabled                            |\n| checkbox        | `boolean`                            | `false` | Whether to display a checkbox for the tree item              |\n| selected        | `boolean`                            | -         | Whether the tree item is selected (mutable, reflected)       |\n| checked         | `boolean`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |\n| hasSubtree      | `boolean`                            | `false` | Whether the tree item has a subtree                          |\n| treeItemActions | `ITreeItemActions[]`                 | -         | Array of actions to display for the tree item                |\n| inlineLabelEdit | `boolean`                            | `false` | Enables inline text editing for the item label               |\n| itemsReordering | `boolean`                            | `false` | Shows drag handle and enables drag/drop item reordering      |\n| size            | `'xs' | 'sm' | 'md' | 'lg'`    | `'xs'`  | The size of the tree item                                    |\n| customClass     | `string`                             | `''`    | Additional CSS class to apply to the tree item               |\n| lazyLoading     | `boolean`                            | `false` | When `true` and the item is expanded, shows a spinner in place of children. Managed automatically by the content tree when `getChildren` is provided. |\n| hasChildren     | `boolean`                            | -         | Hint that the item has unloaded children. Used with `getChildren` on the content tree to show the expand chevron before children are fetched. |\n\n#### Events\n\n| Name             | Payload                          | Description                                     |\n|------------------|----------------------------------|-------------------------------------------------|\n| itemSelect       | `{ value: string }`            | Emitted when a tree item is selected            |\n| selectionsChange | `{ selectedValues: string[] }` | Emitted when the selection state changes        |\n| itemExpand       | `string`                       | Emitted with the item's `value` when it is expanded. Use this to trigger lazy data loading. |\n| itemLabelChange  | `string`                       | Emitted when inline label editing is committed |\n| itemReordered    | `ITreeItemReorderedEventDetail` | Emitted when a drag/drop reorder operation completes for the item |\n\n#### Methods\n\n| Name            | Type                      | Description                |\n|-----------------|---------------------------|----------------------------|\n| collapseSubTree | `() => Promise<void>`   | Collapses the subtree      |\n| expandSubTree   | `() => Promise<void>`   | Expands the subtree        |\n| setIndeterminateState | `(indeterminate: boolean) => Promise<void>` | Sets checkbox indeterminate state |\n\n---\n\n### Tree Actions\n\n#### Props\n\n| Name    | Type                                | Default  | Description                          |\n|---------|-------------------------------------|----------|--------------------------------------|\n| actions | `ITreeItemActions[]`              | -        | Array of actions to display          |\n| size    | `'xs' | 'sm' | 'md' | 'lg'` | `'xs'` | The size of the action buttons       |\n\n#### Behavior\n\n- Renders the first action as a direct icon button for fast access.\n- Renders remaining actions in a \"More actions\" dropdown menu.\n- When the `delete` action is clicked, a confirmation UI is shown before emitting `treeActionClick`.\n- Automatically closes other open tree-action dropdowns when a new one opens.\n\n#### Events\n\n| Name            | Payload                                   | Description                                |\n|-----------------|-------------------------------------------|--------------------------------------------|\n| treeActionClick | `{ actionId: string; actionName: string }` | Emitted when an action is clicked       |\n| dropdownOpened  | `HTMLElement`                           | Emitted when the dropdown is opened        |\n\n---\n\n### Interfaces\n\n#### ITreeItemData\n\n```typescript\ninterface ITreeItemData {\n  id: string;                // Backend/persistent identifier\n  clientId?: string;         // Optional stable client-generated identifier (for example UUID)\n  label: string;\n  checkbox?: boolean;\n  startIcon?: string;\n  treeItemActions?: ITreeItemActions[];\n  children?: ITreeItemData[];\n  hasChildren?: boolean;\n}\n```\n\n---\n\n#### ITreeItemActions\n\n```typescript\ninterface ITreeItemActions {\n  id: string;                           // Unique identifier for the action\n  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'\n  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon\n  label: string;                        // Text label for the action\n  ariaLabel?: string;                   // Optional label for accessibility\n  disabled?: boolean;                   // Optional flag to disable the action\n}\n```\n"}},controls:{disable:!0}},render:()=>m``};var L,$,E;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A basic content tree with hierarchical structure. Items can be expanded and collapsed to navigate through the tree. On \`modus-wc-tree-view\`, selection is **single-select by default**: clicking an item selects only that item. To allow multiple selected items, enable multi-select on the tree view (see the Multi-selection story).'
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
}`,...(E=($=b.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var P,H,V;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Tree Item',
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
}`,...(V=(H=w.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var R,M,j;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Empty State',
  parameters: {
    docs: {
      description: {
        story: 'This example starts with a custom slot-based empty state and transitions to data-driven mode after creating the first node. Consumers can provide a custom empty state through the default slot.'
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
  const id = 'new-item-' + Date.now();
  tree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
  tree.items = [{
    id,
    clientId: id,
    label: 'New Item',
    inlineLabelEdit: true,
  }];
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
    const handleAddNewItem = (event: Event) => {
      const contentTree = (event.currentTarget as HTMLElement)?.closest('modus-wc-content-tree') as ContentTreeElement | null;
      if (!contentTree) return;
      const newId = \`new-item-\${Date.now()}\`;
      contentTree.querySelector('.modus-wc-content-tree-empty-story')?.remove();
      contentTree.items = [{
        id: newId,
        clientId: newId,
        label: 'New Item',
        inlineLabelEdit: true
      }];
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
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

          <modus-wc-button variant="outline" @buttonClick=\${handleAddNewItem}>
            Create node
          </modus-wc-button>
        </div>
      </modus-wc-content-tree>
    \`;
  }
}`,...(j=(M=I.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var N,W,U;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Multi-selection',
  parameters: {
    docs: {
      description: {
        story: '**Multi-select mode** is opt-in: set \`multi-select\` on \`modus-wc-tree-view\` (or the equivalent property in your framework). Without it, the tree stays in the default **single-selection** behavior. When multi-select is on, use Ctrl/Cmd + click to toggle individual items, and Shift + click to select a contiguous range. Works across nested tree items.'
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
}`,...(U=(W=v.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var Z,_,B;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(B=(_=g.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var z,q,O;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Checkbox Selection',
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates a data-driven tree with checkboxes for multi-selection. Selecting a parent item selects its descendants, and descendant selections update parent indeterminate/checked states.'
      },
      source: {
        code: \`
<script>
const items = [
  {
    id: 'documents',
    clientId: 'documents-node',
    label: 'Documents',
    checkbox: true,
    children: [
      { id: 'report', clientId: 'report-node', label: 'Report.pdf', checkbox: true },
      { id: 'proposal', clientId: 'proposal-node', label: 'Proposal.docx', checkbox: true },
    ],
  },
  {
    id: 'projects',
    clientId: 'projects-node',
    label: 'Projects',
    checkbox: true,
    children: [
      { id: 'alpha', clientId: 'alpha-node', label: 'Project Alpha', checkbox: true },
      { id: 'beta', clientId: 'beta-node', label: 'Project Beta', checkbox: true },
    ],
  },
  { id: 'archive', clientId: 'archive-node', label: 'Archive', checkbox: true },
];
<\/script>

<modus-wc-content-tree
  search-placeholder="Search..."
  include-search="true"
  include-actions="true"
  .items="items"
></modus-wc-content-tree>
\`
      }
    }
  },
  render: args => {
    const checkboxItems: ITreeItemData[] = [{
      id: 'documents',
      clientId: 'documents-node',
      label: 'Documents',
      checkbox: true,
      children: [{
        id: 'report',
        clientId: 'report-node',
        label: 'Report.pdf',
        checkbox: true
      }, {
        id: 'proposal',
        clientId: 'proposal-node',
        label: 'Proposal.docx',
        checkbox: true
      }]
    }, {
      id: 'projects',
      clientId: 'projects-node',
      label: 'Projects',
      checkbox: true,
      children: [{
        id: 'alpha',
        clientId: 'alpha-node',
        label: 'Project Alpha',
        checkbox: true
      }, {
        id: 'beta',
        clientId: 'beta-node',
        label: 'Project Beta',
        checkbox: true
      }]
    }, {
      id: 'archive',
      clientId: 'archive-node',
      label: 'Archive',
      checkbox: true
    }];
    return html\`
      <modus-wc-content-tree
        search-placeholder=\${args['search-placeholder']}
        customClass=\${args['custom-class']}
        .includeSearch=\${args['include-search']}
        .includeActions=\${args['include-actions']}
        .items=\${checkboxItems}
      ></modus-wc-content-tree>
    \`;
  }
}`,...(O=(q=f.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var G,F,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Actions',
  args: {
    'include-search': false,
    'include-actions': false
  },
  parameters: {
    docs: {
      description: {
        story: 'All-in-one stateless example: visibility (toggle \`disabled\` + icon), add sibling above/below, add child, duplicate, inline edit label, and delete—using \`addTreeItemAdjacentData\`, \`addTreeItemData\`, \`duplicateTreeItemData\`, \`updateTreeItemData\`, and \`deleteTreeItemData\`. On \`treeActionClick\`, read \`event.detail.itemId\`, call the matching utility, assign back to \`tree.items\`.'
      },
      source: {
        code: \`
<script>
  function toggleItemVisibilityInTree(items, itemId) {
    return items.map((item) => {
      const children = item.children
        ? toggleItemVisibilityInTree(item.children, itemId)
        : undefined;
      const match = item.id === itemId || item.clientId === itemId;
      if (!match) {
        return children !== item.children ? { ...item, children } : item;
      }
      const nextDisabled = !item.disabled;
      const treeItemActions = item.treeItemActions?.map((a) => {
        if (a.id !== 'toggle-visibility') return a;
        return {
          ...a,
          icon: nextDisabled ? 'visibility_off' : 'visibility_on',
          ariaLabel: nextDisabled ? 'Item hidden' : 'Item visible',
        };
      });
      return { ...item, disabled: nextDisabled, treeItemActions, children };
    });
  }

  const actions = [
    { id: 'toggle-visibility', label: 'Visibility', icon: 'visibility_on', ariaLabel: 'Item visible' },
    { id: 'add-node-above', label: 'Add Node Above', icon: 'add', ariaLabel: 'Add node above' },
    { id: 'add-node-below', label: 'Add Node Below', icon: 'add', ariaLabel: 'Add node below' },
    { id: 'add-child', label: 'Add Child', icon: 'subdirectory_arrow_right' },
    { id: 'duplicate', label: 'Duplicate', icon: 'copy_content' },
    { id: 'edit-label', label: 'Edit Label', icon: 'pencil' },
    { id: 'delete', label: 'Delete', icon: 'delete' },
  ];

  let counter = 1;
  let items = [
    { id: 'roadmap', clientId: 'roadmap', label: 'Roadmap', treeItemActions: actions },
    { id: 'backlog', clientId: 'backlog', label: 'Backlog', treeItemActions: actions },
  ];

  const tree = document.querySelector('modus-wc-content-tree');
  tree.items = items;

  const apply = (next) => { if (next) { items = next; tree.items = items; } };

  tree.addEventListener('treeActionClick', (event) => {
    const { actionId, itemId } = event.detail;
    if (!itemId) return;

    if (actionId === 'toggle-visibility') {
      apply(toggleItemVisibilityInTree(items, itemId));
    } else if (actionId === 'add-node-above' || actionId === 'add-node-below') {
      const id = 'node-' + counter++;
      apply(addTreeItemAdjacentData(items, {
        referenceItemId: itemId,
        item: { id, clientId: id, label: 'New Node', treeItemActions: actions },
        placement: actionId === 'add-node-above' ? 'above' : 'below',
      }));
    } else if (actionId === 'add-child') {
      const id = 'child-' + counter++;
      apply(addTreeItemData(items, {
        parentId: itemId,
        item: { id, clientId: id, label: 'New Child', treeItemActions: actions },
      }));
    } else if (actionId === 'duplicate') {
      apply(duplicateTreeItemData(items, { itemId }));
    } else if (actionId === 'edit-label') {
      apply(updateTreeItemData(items, { itemId, patch: { inlineLabelEdit: true } }));
    } else if (actionId === 'delete') {
      apply(deleteTreeItemData(items, { itemId }));
    }
  });

  tree.addEventListener('itemLabelChange', (event) => {
    const treeItem = event.target.closest('modus-wc-tree-item');
    if (!treeItem) return;
    apply(updateTreeItemData(items, {
      itemId: treeItem.value,
      patch: { label: event.detail, inlineLabelEdit: false },
    }));
  });
<\/script>

<modus-wc-content-tree></modus-wc-content-tree>
\`
      }
    }
  },
  render: () => {
    const actions = [{
      id: 'toggle-visibility',
      label: 'Visibility',
      icon: 'visibility_on',
      ariaLabel: 'Item visible'
    }, {
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
      icon: 'subdirectory_arrow_right'
    }, {
      id: 'duplicate',
      label: 'Duplicate',
      icon: 'copy_content'
    }, {
      id: 'edit-label',
      label: 'Edit Label',
      icon: 'pencil'
    }, {
      id: 'delete',
      label: 'Delete',
      icon: 'delete'
    }];
    let counter = 1;
    let items: ITreeItemData[] = [{
      id: 'roadmap',
      clientId: 'roadmap',
      label: 'Roadmap',
      treeItemActions: actions
    }, {
      id: 'backlog',
      clientId: 'backlog',
      label: 'Backlog',
      treeItemActions: actions
    }];
    const apply = (tree: HTMLElement & {
      items?: ITreeItemData[];
    }, next: ITreeItemData[] | null) => {
      if (!next) return;
      items = next;
      tree.items = items;
    };
    const handleTreeActionClick = (event: CustomEvent<{
      actionId: string;
      itemId: string | null;
    }>) => {
      const {
        actionId,
        itemId
      } = event.detail;
      if (!itemId) return;
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      if (actionId === 'toggle-visibility') {
        apply(tree, toggleItemVisibilityInTree(items, itemId));
      } else if (actionId === 'add-node-above' || actionId === 'add-node-below') {
        const id = \`node-\${counter++}\`;
        apply(tree, addTreeItemAdjacentData(items, {
          referenceItemId: itemId,
          item: {
            id,
            clientId: id,
            label: 'New Node',
            treeItemActions: actions
          },
          placement: actionId === 'add-node-above' ? 'above' : 'below'
        }));
      } else if (actionId === 'add-child') {
        const id = \`child-\${counter++}\`;
        apply(tree, addTreeItemData(items, {
          parentId: itemId,
          item: {
            id,
            clientId: id,
            label: 'New Child',
            treeItemActions: actions
          }
        }));
      } else if (actionId === 'duplicate') {
        apply(tree, duplicateTreeItemData(items, {
          itemId
        }));
      } else if (actionId === 'edit-label') {
        apply(tree, updateTreeItemData(items, {
          itemId,
          patch: {
            inlineLabelEdit: true
          }
        }));
      } else if (actionId === 'delete') {
        apply(tree, deleteTreeItemData(items, {
          itemId
        }));
      }
    };
    const handleItemLabelChange = (event: CustomEvent<string>) => {
      const treeItem = (event.target as HTMLElement).closest('modus-wc-tree-item') as ITreeItemElement | null;
      if (!treeItem) return;
      const tree = event.currentTarget as HTMLElement & {
        items?: ITreeItemData[];
      };
      apply(tree, updateTreeItemData(items, {
        itemId: treeItem.value,
        patch: {
          label: event.detail,
          inlineLabelEdit: false
        }
      }));
    };
    return html\`
      <modus-wc-content-tree
        .items=\${items}
        @treeActionClick=\${handleTreeActionClick}
        @itemLabelChange=\${handleItemLabelChange}
      ></modus-wc-content-tree>
    \`;
  }
}`,...(Q=(F=y.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var X,J,K;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,ee,te;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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

  const nextItems = updateTreeItemData(tree.items, {
    itemId: itemIdentity,
    patch: {
      children,
      hasChildren: children.length > 0,
    },
  });

  if (nextItems) {
    tree.items = nextItems;
  }
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
      const nextItems = updateTreeItemData(current, {
        itemId: itemIdentity,
        patch: {
          children,
          hasChildren: children.length > 0
        }
      });
      if (nextItems) {
        tree.items = nextItems;
      }
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
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ie,oe;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:"{\n  name: 'API Reference',\n  parameters: {\n    docs: {\n      description: {\n        story: `\n### Support Model\n\n| Mode | Supported Scope |\n|------|------------------|\n| Slot-based (no \\`items\\`) | Basic nested rendering, basic expand/collapse and selection UX, basic action buttons/events, styling/composition flexibility |\n| Data-driven (\\`items\\`) | Controlled/stateless updates, mutation utilities, lazy loading orchestration, and drag/drop reordering |\n\n> Use the data-driven \\`items\\` model for controlled application state. Treat slot-based usage as basic/uncontrolled mode.\n\n### Props\n\n| Name              | Type       | Default      | Description                                       |\n|-------------------|------------|--------------|---------------------------------------------------|\n| customClass       | \\`string\\` | \\`''\\`       | Additional CSS class to apply to the component    |\n| searchPlaceholder | \\`string\\` | \\`'Search...'\\` | Placeholder text for the search input          |\n| includeSearch     | \\`boolean\\` | \\`true\\`    | Whether to display the search functionality       |\n| includeActions    | \\`boolean\\` | \\`true\\`    | Whether to display action buttons for tree items  |\n| items             | \\`ITreeItemData[]\\` | - | Data-driven tree data used to render items and nested children. If omitted, slotted content is rendered in basic/uncontrolled mode. |\n| itemsReordering   | \\`boolean\\` | \\`false\\` | Enables drag-and-drop reordering for data-driven trees only (not slot-based trees). |\n\n#### Events\n\n| Name           | Payload                                                         | Description |\n|----------------|------------------------------------------------------------------|-------------|\n| itemsReordered | \\`{ items: ITreeItemData[]; parameters: ITreeItemReorderParameters }\\` | Emitted after a successful drag reorder with updated tree data and reorder metadata in data-driven mode only |\n\n---\n\n### State Manager Utilities\n\nUse these helpers to keep tree updates controlled/stateless in data-driven mode. Each utility returns \\`nextItems\\`; your application decides whether to apply it.\n\n| Utility | Parameters | Description |\n|---------|------------|-------------|\n| \\`addTreeItemData\\` | \\`(items, { parentId, item, index? })\\` | Adds an item at root or as a child under \\`parentId\\`. |\n| \\`addTreeItemAdjacentData\\` | \\`(items, { referenceItemId, item, placement })\\` | Inserts a sibling above or below an existing item. |\n| \\`deleteTreeItemData\\` | \\`(items, { itemId })\\` | Removes an item by identity. |\n| \\`duplicateTreeItemData\\` | \\`(items, { itemId, parentId?, index? })\\` | Duplicates an item/subtree with regenerated IDs. |\n| \\`updateTreeItemData\\` | \\`(items, { itemId, patch })\\` | Updates an existing item by identity using a partial patch. |\n| \\`reorderTreeItemsData\\` | \\`(items, parameters)\\` | Computes reordered tree data for drag/drop operations. |\n\n#### Built-in Action Mapping\n\n| Action ID | Recommended Utility |\n|-----------|----------------------|\n| \\`add-node-above\\` | \\`addTreeItemAdjacentData(..., { placement: 'above' })\\` |\n| \\`add-node-below\\` | \\`addTreeItemAdjacentData(..., { placement: 'below' })\\` |\n| \\`add-child\\` | \\`addTreeItemData\\` |\n| \\`duplicate\\` | \\`duplicateTreeItemData\\` |\n| \\`edit-label\\` | \\`updateTreeItemData\\` |\n| \\`delete\\` | \\`deleteTreeItemData\\` |\n\n#### Controlled Update Flow\n\n1. Handle \\`treeActionClick\\` or \\`itemsReordered\\`.\n2. Call the mapped utility to compute \\`nextItems\\`.\n3. Optionally validate/persist with your backend.\n4. Apply \\`nextItems\\` by updating \\`items\\`.\n\n> The controlled flow above applies to data-driven mode. Slot-based mode is intentionally limited to basic UI behavior.\n\n---\n\n### Tree View\n\n#### Props\n\n| Name        | Type       | Default   | Description                                           |\n|-------------|------------|-----------|-------------------------------------------------------|\n| customClass | \\`string\\` | \\`''\\`    | Additional CSS class to apply to the tree view        |\n| isSubList   | \\`boolean\\` | \\`false\\` | Whether the tree view is a sublist of another tree item |\n| multiSelect | \\`boolean\\` | \\`false\\` | Enables additive (Ctrl/Cmd) and range (Shift) selection behavior |\n| showConnectorLine | \\`boolean\\` | \\`true\\` | Shows or hides connector lines for nested sublists |\n\n#### Events\n\n| Name                | Payload                          | Description |\n|---------------------|----------------------------------|-------------|\n| itemSelectionChange | \\`{ selectedValues: string[] }\\` | Emitted when selected tree item values change |\n\n---\n\n### Tree Item\n\n#### Props\n\n| Name            | Type                                   | Default   | Description                                                  |\n|-----------------|----------------------------------------|-----------|--------------------------------------------------------------|\n| label           | \\`string\\`                             | -         | The label text for the tree item (required)                  |\n| value           | \\`string\\`                             | \\`''\\`    | The value associated with the tree item                      |\n| disabled        | \\`boolean\\`                            | \\`false\\` | Whether the tree item is disabled                            |\n| checkbox        | \\`boolean\\`                            | \\`false\\` | Whether to display a checkbox for the tree item              |\n| selected        | \\`boolean\\`                            | -         | Whether the tree item is selected (mutable, reflected)       |\n| checked         | \\`boolean\\`                            | -         | Whether the tree item checkbox is checked (mutable, reflected) |\n| hasSubtree      | \\`boolean\\`                            | \\`false\\` | Whether the tree item has a subtree                          |\n| treeItemActions | \\`ITreeItemActions[]\\`                 | -         | Array of actions to display for the tree item                |\n| inlineLabelEdit | \\`boolean\\`                            | \\`false\\` | Enables inline text editing for the item label               |\n| itemsReordering | \\`boolean\\`                            | \\`false\\` | Shows drag handle and enables drag/drop item reordering      |\n| size            | \\`'xs' | 'sm' | 'md' | 'lg'\\`    | \\`'xs'\\`  | The size of the tree item                                    |\n| customClass     | \\`string\\`                             | \\`''\\`    | Additional CSS class to apply to the tree item               |\n| lazyLoading     | \\`boolean\\`                            | \\`false\\` | When \\`true\\` and the item is expanded, shows a spinner in place of children. Managed automatically by the content tree when \\`getChildren\\` is provided. |\n| hasChildren     | \\`boolean\\`                            | -         | Hint that the item has unloaded children. Used with \\`getChildren\\` on the content tree to show the expand chevron before children are fetched. |\n\n#### Events\n\n| Name             | Payload                          | Description                                     |\n|------------------|----------------------------------|-------------------------------------------------|\n| itemSelect       | \\`{ value: string }\\`            | Emitted when a tree item is selected            |\n| selectionsChange | \\`{ selectedValues: string[] }\\` | Emitted when the selection state changes        |\n| itemExpand       | \\`string\\`                       | Emitted with the item's \\`value\\` when it is expanded. Use this to trigger lazy data loading. |\n| itemLabelChange  | \\`string\\`                       | Emitted when inline label editing is committed |\n| itemReordered    | \\`ITreeItemReorderedEventDetail\\` | Emitted when a drag/drop reorder operation completes for the item |\n\n#### Methods\n\n| Name            | Type                      | Description                |\n|-----------------|---------------------------|----------------------------|\n| collapseSubTree | \\`() => Promise<void>\\`   | Collapses the subtree      |\n| expandSubTree   | \\`() => Promise<void>\\`   | Expands the subtree        |\n| setIndeterminateState | \\`(indeterminate: boolean) => Promise<void>\\` | Sets checkbox indeterminate state |\n\n---\n\n### Tree Actions\n\n#### Props\n\n| Name    | Type                                | Default  | Description                          |\n|---------|-------------------------------------|----------|--------------------------------------|\n| actions | \\`ITreeItemActions[]\\`              | -        | Array of actions to display          |\n| size    | \\`'xs' | 'sm' | 'md' | 'lg'\\` | \\`'xs'\\` | The size of the action buttons       |\n\n#### Behavior\n\n- Renders the first action as a direct icon button for fast access.\n- Renders remaining actions in a \"More actions\" dropdown menu.\n- When the \\`delete\\` action is clicked, a confirmation UI is shown before emitting \\`treeActionClick\\`.\n- Automatically closes other open tree-action dropdowns when a new one opens.\n\n#### Events\n\n| Name            | Payload                                   | Description                                |\n|-----------------|-------------------------------------------|--------------------------------------------|\n| treeActionClick | \\`{ actionId: string; actionName: string }\\` | Emitted when an action is clicked       |\n| dropdownOpened  | \\`HTMLElement\\`                           | Emitted when the dropdown is opened        |\n\n---\n\n### Interfaces\n\n#### ITreeItemData\n\n\\`\\`\\`typescript\ninterface ITreeItemData {\n  id: string;                // Backend/persistent identifier\n  clientId?: string;         // Optional stable client-generated identifier (for example UUID)\n  label: string;\n  checkbox?: boolean;\n  startIcon?: string;\n  treeItemActions?: ITreeItemActions[];\n  children?: ITreeItemData[];\n  hasChildren?: boolean;\n}\n\\`\\`\\`\n\n---\n\n#### ITreeItemActions\n\n\\`\\`\\`typescript\ninterface ITreeItemActions {\n  id: string;                           // Unique identifier for the action\n  icon: string;                         // Icon name for the action, e.g., 'edit', 'trash'\n  iconVariant?: 'solid' | 'outlined';   // Optional variant for the icon\n  label: string;                        // Text label for the action\n  ariaLabel?: string;                   // Optional label for accessibility\n  disabled?: boolean;                   // Optional flag to disable the action\n}\n\\`\\`\\`\n`\n      }\n    },\n    controls: {\n      disable: true\n    }\n  },\n  render: () => {\n    return html``;\n  }\n}",...(oe=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const ye=["Default","TreeItemWithStartIcon","EmptyState","MultiSelect","DisabledSelection","CheckboxSelection","WithActions","ItemsReordering","LazyLoading","ApiReference"];export{C as ApiReference,f as CheckboxSelection,b as Default,g as DisabledSelection,I as EmptyState,x as ItemsReordering,T as LazyLoading,v as MultiSelect,w as TreeItemWithStartIcon,y as WithActions,ye as __namedExportsOrder,fe as default};
