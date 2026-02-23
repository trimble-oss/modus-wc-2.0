import{w as v}from"./decorator-D4YmxizW.js";import{x as s}from"./lit-element-CucEn6F2.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const k={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"search-placeholder":"Search...","include-search":!0,"include-actions":!0},argTypes:{"search-placeholder":{control:{type:"text"}},"include-search":{control:{type:"boolean"}},"include-actions":{control:{type:"boolean"}}},decorators:[v],parameters:{actions:{handles:["itemSelect","treeActionClick","selectionsChange"]}}},r={render:e=>s`
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
    `},c={render:e=>s`
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
    `},o={render:e=>{const t=[{id:"view",label:"View",icon:"visibility_on",ariaLabel:"View item"},{id:"add",label:"Add new above",icon:"add",ariaLabel:"Add new item"},{id:"add-below",label:"Add new below",icon:"add",ariaLabel:"Add new item"},{id:"new-child-node",label:"Add new child node",icon:"tree_structure",ariaLabel:"Add new child node"},{id:"edit",label:"Edit Name",icon:"pencil",ariaLabel:"Edit item"},{id:"make-copy",label:"Make a copy",icon:"copy_content",ariaLabel:"Make a copy of item"},{id:"delete",label:"Delete",icon:"delete",ariaLabel:"Delete item"}];return s`
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
            .treeItemActions=${t}
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item
                label="Report.pdf"
                value="report"
                .treeItemActions=${t}
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Proposal.docx"
                value="proposal"
                .treeItemActions=${t}
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=${!0}
            value="projects"
            .treeItemActions=${t}
          >
            <modus-wc-tree-view .isSubList=${!0}>
              <modus-wc-tree-item
                label="Website Redesign"
                value="website"
                .treeItemActions=${t}
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Client Work"
                .hasSubtree=${!0}
                value="client-work"
                .treeItemActions=${t}
              >
                <modus-wc-tree-view .isSubList=${!0}>
                  <modus-wc-tree-item
                    label="Design Mockups"
                    value="mockups"
                    .treeItemActions=${t}
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=${t}
          >
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    `}};var u,i,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,a,l;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(a=c.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,w,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const actions = [{
      id: 'view',
      label: 'View',
      icon: 'visibility_on',
      ariaLabel: 'View item'
    }, {
      id: 'add',
      label: 'Add new above',
      icon: 'add',
      ariaLabel: 'Add new item'
    }, {
      id: 'add-below',
      label: 'Add new below',
      icon: 'add',
      ariaLabel: 'Add new item'
    }, {
      id: 'new-child-node',
      label: 'Add new child node',
      icon: 'tree_structure',
      ariaLabel: 'Add new child node'
    }, {
      id: 'edit',
      label: 'Edit Name',
      icon: 'pencil',
      ariaLabel: 'Edit item'
    }, {
      id: 'make-copy',
      label: 'Make a copy',
      icon: 'copy_content',
      ariaLabel: 'Make a copy of item'
    }, {
      id: 'delete',
      label: 'Delete',
      icon: 'delete',
      ariaLabel: 'Delete item'
    }];
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
            .treeItemActions=\${actions}
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item
                label="Report.pdf"
                value="report"
                .treeItemActions=\${actions}
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Proposal.docx"
                value="proposal"
                .treeItemActions=\${actions}
              >
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Projects"
            .hasSubtree=\${true}
            value="projects"
            .treeItemActions=\${actions}
          >
            <modus-wc-tree-view .isSubList=\${true}>
              <modus-wc-tree-item
                label="Website Redesign"
                value="website"
                .treeItemActions=\${actions}
              >
              </modus-wc-tree-item>
              <modus-wc-tree-item
                label="Client Work"
                .hasSubtree=\${true}
                value="client-work"
                .treeItemActions=\${actions}
              >
                <modus-wc-tree-view .isSubList=\${true}>
                  <modus-wc-tree-item
                    label="Design Mockups"
                    value="mockups"
                    .treeItemActions=\${actions}
                  >
                  </modus-wc-tree-item>
                </modus-wc-tree-view>
              </modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
          <modus-wc-tree-item
            label="Resources"
            value="resources"
            .treeItemActions=\${actions}
          >
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      </modus-wc-content-tree>
    \`;
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const x=["Default","MultiSelect","WithActions"];export{r as Default,c as MultiSelect,o as WithActions,x as __namedExportsOrder,k as default};
