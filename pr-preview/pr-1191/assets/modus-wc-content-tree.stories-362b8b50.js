import{w as Z}from"./decorator-534da2b0.js";import{b as S}from"./lit-element-38260dd9.js";import{o as p}from"./if-defined-30b85b98.js";import{n as y}from"./ref-0ba40d43.js";import"./chunk-4XZ63LWV-918fa35e.js";import"./v4-4a60fe23.js";import"./directive-helpers-79ea5480.js";import"./directive-12249aa5.js";const ee=`
<modus-wc-content-tree id="content-tree" aria-label="Content tree"></modus-wc-content-tree>

<script type="module">
  const tree = document.getElementById('content-tree');

  // The application owns the data (the single source of truth).
  tree.nodes = [
    {
      id: '1',
      label: 'Project Files',
      icon: 'folder_closed',
      children: [
        { id: '1-1', label: 'Overview', icon: 'info' },
        {
          id: '1-2',
          label: 'Resources',
          icon: 'folder_closed',
          children: [
            { id: '1-2-1', label: 'Specifications', icon: 'info' },
            { id: '1-2-2', label: 'Search Index', icon: 'search' },
          ],
        },
        { id: '1-3', label: 'Archived', icon: 'alert', disabled: true },
      ],
    },
    { id: '2', label: 'Settings', icon: 'settings' },
    { id: '3', label: 'Notifications', icon: 'info' },
  ];

  // Controlled state lives in the application.
  tree.expandedNodeIds = ['1'];
  tree.selectedNodeId = '1-1';

  // Selecting a node: decide whether to apply, then update the data/state.
  tree.addEventListener('nodeSelect', (e) => {
    tree.selectedNodeId = e.detail.id;
  });

  // Expanding/collapsing a node.
  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    tree.expandedNodeIds = expanded
      ? [...tree.expandedNodeIds, id]
      : tree.expandedNodeIds.filter((x) => x !== id);
  });
<\/script>
`,ne=`
<modus-wc-content-tree
  id="content-tree"
  aria-label="Content tree"
  selection-mode="multiple"
></modus-wc-content-tree>

<script type="module">
  const tree = document.getElementById('content-tree');

  const nodes = [
    {
      id: '1',
      label: 'Project Files',
      icon: 'folder_closed',
      children: [
        { id: '1-1', label: 'Overview', icon: 'info' },
        {
          id: '1-2',
          label: 'Resources',
          icon: 'folder_closed',
          children: [
            { id: '1-2-1', label: 'Specifications', icon: 'info' },
            { id: '1-2-2', label: 'Search Index', icon: 'search' },
          ],
        },
        { id: '1-3', label: 'Archived', icon: 'alert', disabled: true },
      ],
    },
    { id: '2', label: 'Settings', icon: 'settings' },
    { id: '3', label: 'Notifications', icon: 'info' },
  ];

  tree.nodes = nodes;
  tree.expandedNodeIds = ['1', '1-2'];
  tree.selectedNodeId = '1-1';
  tree.checkedNodeIds = ['1-2-1'];

  const findNode = (list, id) => {
    for (const node of list) {
      if (node.id === id) return node;
      if (node.children?.length) {
        const found = findNode(node.children, id);
        if (found) return found;
      }
    }
    return undefined;
  };

  const collectLeafIds = (node) =>
    node.children?.length
      ? node.children.flatMap(collectLeafIds)
      : [node.id];

  const setNodeChecked = (list, checkedIds, id, checked) => {
    const node = findNode(list, id);
    if (!node) return checkedIds;

    const next = new Set(checkedIds);
    collectLeafIds(node).forEach((leafId) =>
      checked ? next.add(leafId) : next.delete(leafId)
    );
    return [...next];
  };

  tree.addEventListener('nodeSelect', (e) => {
    tree.selectedNodeId = e.detail.id;
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    tree.expandedNodeIds = expanded
      ? [...tree.expandedNodeIds, id]
      : tree.expandedNodeIds.filter((x) => x !== id);
  });

  tree.addEventListener('nodeCheckChange', (e) => {
    const { id, checked } = e.detail;
    tree.checkedNodeIds = setNodeChecked(
      nodes,
      tree.checkedNodeIds,
      id,
      checked
    );
  });
<\/script>
`,de=`
<div style="display:flex; flex-direction:column; gap:0.5rem; max-width:20rem;">
  <modus-wc-text-input
    id="tree-filter"
    aria-label="Filter tree"
    include-clear
    include-search
    placeholder="Filter nodes…"
    type="text"
  ></modus-wc-text-input>
  <modus-wc-content-tree id="content-tree" aria-label="Content tree"></modus-wc-content-tree>
</div>

<script type="module">
  const filterInput = document.getElementById('tree-filter');
  const tree = document.getElementById('content-tree');

  tree.nodes = [
    {
      id: '1',
      label: 'Project Files',
      icon: 'folder_closed',
      children: [
        { id: '1-1', label: 'Overview', icon: 'info' },
        {
          id: '1-2',
          label: 'Resources',
          icon: 'folder_closed',
          children: [
            { id: '1-2-1', label: 'Specifications', icon: 'info' },
            { id: '1-2-2', label: 'Search Index', icon: 'search' },
          ],
        },
        { id: '1-3', label: 'Archived', icon: 'alert', disabled: true },
      ],
    },
    { id: '2', label: 'Settings', icon: 'settings' },
    { id: '3', label: 'Notifications', icon: 'info' },
  ];

  tree.expandedNodeIds = ['1', '1-2'];
  tree.selectedNodeId = '1-2-2';
  tree.filter = '';

  filterInput.addEventListener('inputChange', (e) => {
    tree.filter = e.detail?.target?.value ?? '';
  });

  filterInput.addEventListener('clearClick', () => {
    tree.filter = '';
  });

  tree.addEventListener('nodeSelect', (e) => {
    tree.selectedNodeId = e.detail.id;
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    tree.expandedNodeIds = expanded
      ? [...tree.expandedNodeIds, id]
      : tree.expandedNodeIds.filter((x) => x !== id);
  });
<\/script>
`,te=`
<modus-wc-content-tree id="content-tree" aria-label="Content tree"></modus-wc-content-tree>

<script type="module">
  const tree = document.getElementById('content-tree');

  // --- TreeStateManager-style immutable helpers (app owns the data) ---
  const findNode = (list, id) => {
    for (const node of list) {
      if (node.id === id) return node;
      if (node.children?.length) {
        const found = findNode(node.children, id);
        if (found) return found;
      }
    }
    return undefined;
  };

  const getNodeLocation = (list, id, parentId) => {
    const index = list.findIndex((n) => n.id === id);
    if (index !== -1) return { parentId, index };
    for (const node of list) {
      if (node.children?.length) {
        const found = getNodeLocation(node.children, id, node.id);
        if (found) return found;
      }
    }
    return undefined;
  };

  const addNode = (list, newNode, { parentId, index } = {}) => {
    if (!parentId) {
      const next = [...list];
      next.splice(index ?? next.length, 0, newNode);
      return next;
    }
    return list.map((node) => {
      if (node.id === parentId) {
        const children = node.children ? [...node.children] : [];
        children.splice(index ?? children.length, 0, newNode);
        return { ...node, children };
      }
      if (node.children?.length) {
        return { ...node, children: addNode(node.children, newNode, { parentId, index }) };
      }
      return node;
    });
  };

  const updateNode = (list, id, changes) =>
    list.map((node) => {
      if (node.id === id) return { ...node, ...changes };
      if (node.children?.length) {
        return { ...node, children: updateNode(node.children, id, changes) };
      }
      return node;
    });

  const deleteNode = (list, id) =>
    list
      .filter((node) => node.id !== id)
      .map((node) =>
        node.children?.length
          ? { ...node, children: deleteNode(node.children, id) }
          : node
      );

  const cloneSubtree = (node, makeId) => ({
    ...node,
    id: makeId(),
    children: node.children?.map((c) => cloneSubtree(c, makeId)),
  });

  const duplicateNode = (list, id, makeId) => {
    const original = findNode(list, id);
    const location = getNodeLocation(list, id);
    if (!original || !location) return { nodes: list };
    const clone = cloneSubtree(original, makeId);
    return {
      nodes: addNode(list, clone, {
        parentId: location.parentId,
        index: location.index + 1,
      }),
      newId: clone.id,
    };
  };

  // --- Controlled state, owned by the application ---
  let nodes = [
    {
      id: '1',
      label: 'Project Files',
      icon: 'folder_closed',
      children: [
        { id: '1-1', label: 'Overview', icon: 'info' },
        {
          id: '1-2',
          label: 'Resources',
          icon: 'folder_closed',
          children: [
            { id: '1-2-1', label: 'Specifications', icon: 'info' },
            { id: '1-2-2', label: 'Search Index', icon: 'search' },
          ],
        },
        { id: '1-3', label: 'Archived', icon: 'alert', disabled: true },
      ],
    },
    { id: '2', label: 'Settings', icon: 'settings' },
    { id: '3', label: 'Notifications', icon: 'info' },
  ];
  let expandedNodeIds = ['1', '1-2'];
  let editingNodeId;
  const freshIds = new Set();
  let idCounter = 0;
  const makeId = () => \`new-\${Date.now()}-\${idCounter++}\`;

  const sync = () => {
    tree.nodes = nodes;
    tree.expandedNodeIds = [...expandedNodeIds];
    tree.editingNodeId = editingNodeId;
  };

  tree.selectedNodeId = '1-1';
  sync();

  tree.addEventListener('nodeSelect', (e) => {
    tree.selectedNodeId = e.detail.id;
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    expandedNodeIds = expanded
      ? [...expandedNodeIds, id]
      : expandedNodeIds.filter((x) => x !== id);
    sync();
  });

  tree.addEventListener('nodeEdit', (e) => {
    editingNodeId = e.detail.id;
    sync();
  });

  tree.addEventListener('nodeDuplicate', (e) => {
    const result = duplicateNode(nodes, e.detail.id, makeId);
    nodes = result.nodes;
    editingNodeId = result.newId;
    sync();
  });

  tree.addEventListener('nodeAdd', (e) => {
    const { referenceId, position } = e.detail;
    const newId = makeId();
    const newNode = { id: newId, label: '' };
    if (position === 'child') {
      nodes = addNode(nodes, newNode, { parentId: referenceId });
      if (!expandedNodeIds.includes(referenceId)) {
        expandedNodeIds = [...expandedNodeIds, referenceId];
      }
    } else {
      const loc = getNodeLocation(nodes, referenceId);
      const index = (loc?.index ?? 0) + (position === 'below' ? 1 : 0);
      nodes = addNode(nodes, newNode, { parentId: loc?.parentId, index });
    }
    editingNodeId = newId;
    freshIds.add(newId);
    sync();
  });

  tree.addEventListener('nodeDelete', (e) => {
    nodes = deleteNode(nodes, e.detail.id);
    sync();
  });

  tree.addEventListener('nodeRename', (e) => {
    const { id, label } = e.detail;
    if (!label && freshIds.has(id)) {
      nodes = deleteNode(nodes, id);
    } else {
      nodes = updateNode(nodes, id, { label: label || 'Untitled' });
    }
    freshIds.delete(id);
    editingNodeId = undefined;
    sync();
  });

  tree.addEventListener('nodeEditCancel', (e) => {
    const { id } = e.detail;
    if (freshIds.has(id)) nodes = deleteNode(nodes, id);
    freshIds.delete(id);
    editingNodeId = undefined;
    sync();
  });
<\/script>
`,D=(d,e)=>{var n;for(const t of d){if(t.id===e)return t;if((n=t.children)!=null&&n.length){const i=D(t.children,e);if(i)return i}}},v=(d,e,n={})=>{const{parentId:t,index:i}=n;if(!t){const o=[...d];return o.splice(i??o.length,0,e),o}return d.map(o=>{var l;if(o.id===t){const u=o.children?[...o.children]:[];return u.splice(i??u.length,0,e),{...o,children:u}}return(l=o.children)!=null&&l.length?{...o,children:v(o.children,e,n)}:o})},q=(d,e,n)=>d.map(t=>{var i;return t.id===e?{...t,...n}:(i=t.children)!=null&&i.length?{...t,children:q(t.children,e,n)}:t}),$=(d,e)=>d.filter(n=>n.id!==e).map(n=>{var t;return(t=n.children)!=null&&t.length?{...n,children:$(n.children,e)}:n}),L=(d,e,n)=>{var i;const t=d.findIndex(o=>o.id===e);if(t!==-1)return{parentId:n,index:t};for(const o of d)if((i=o.children)!=null&&i.length){const l=L(o.children,e,o.id);if(l)return l}},G=(d,e)=>{var n;return{...d,id:e(),children:(n=d.children)==null?void 0:n.map(t=>G(t,e))}},oe=(d,e,n)=>{const t=D(d,e),i=L(d,e);if(!t||!i)return{nodes:d};const o=G(t,n);return{nodes:v(d,o,{parentId:i.parentId,index:i.index+1}),newId:o.id}},J=d=>{var e;return(e=d.children)!=null&&e.length?d.children.flatMap(J):[d.id]},ie=(d,e,n,t)=>{const i=D(d,n);if(!i)return e;const o=new Set(e);return J(i).forEach(l=>t?o.add(l):o.delete(l)),[...o]},N=[{id:"1",label:"Project Files",icon:"folder_closed",children:[{id:"1-1",label:"Overview",icon:"info"},{id:"1-2",label:"Resources",icon:"folder_closed",children:[{id:"1-2-1",label:"Specifications",icon:"info"},{id:"1-2-2",label:"Search Index",icon:"search"}]},{id:"1-3",label:"Archived",icon:"alert"}]},{id:"2",label:"Settings",icon:"settings"},{id:"3",label:"Notifications",icon:"info"}],fe={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"selection-mode":"single",size:"md"},argTypes:{"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[Z],parameters:{actions:{handles:["nodeSelect","nodeExpandChange","nodeCheckChange","nodeEdit","nodeDuplicate","nodeAdd","nodeDelete","nodeRename","nodeEditCancel"]}}},E={parameters:{docs:{source:{code:ee}}},render:d=>{let e,n="1-1",t=["1"];const i=()=>{e&&(e.nodes=N,e.selectedNodeId=n,e.expandedNodeIds=[...t])},o=u=>{n=u.detail.id,i()},l=u=>{const{id:f,expanded:c}=u.detail;t=c?[...t,f]:t.filter(a=>a!==f),i()};return S`
    <modus-wc-content-tree
      ${y(u=>{e=u??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${p(d["custom-class"])}
      selection-mode=${p(d["selection-mode"])}
      size=${p(d.size)}
      @nodeSelect=${o}
      @nodeExpandChange=${l}
    ></modus-wc-content-tree>`}},C={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:ne}}},render:d=>{let e,n="1-1",t=["1","1-2"],i=["1-2-1"];const o=()=>{e&&(e.nodes=N,e.selectedNodeId=n,e.expandedNodeIds=[...t],e.checkedNodeIds=[...i])},l=c=>{n=c.detail.id,o()},u=c=>{const{id:a,expanded:h}=c.detail;t=h?[...t,a]:t.filter(m=>m!==a),o()},f=c=>{const{id:a,checked:h}=c.detail;i=ie(N,i,a,h),o()};return S`
    <modus-wc-content-tree
      ${y(c=>{e=c??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${p(d["custom-class"])}
      selection-mode=${p(d["selection-mode"])}
      size=${p(d.size)}
      @nodeSelect=${l}
      @nodeExpandChange=${u}
      @nodeCheckChange=${f}
    ></modus-wc-content-tree>`}},b={parameters:{docs:{source:{code:de}}},render:d=>{let e,n="1-2-2",t=["1","1-2"],i="";const o=()=>{e&&(e.nodes=N,e.selectedNodeId=n,e.expandedNodeIds=[...t],e.filter=i)},l=a=>{n=a.detail.id,o()},u=a=>{const{id:h,expanded:m}=a.detail;t=m?[...t,h]:t.filter(k=>k!==h),o()},f=a=>{var h,m;i=((m=(h=a.detail)==null?void 0:h.target)==null?void 0:m.value)??"",o()},c=()=>{i="",o()};return S`
    <style>
      .modus-wc-content-tree-search-demo {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 20rem;
      }
    </style>
    <div class="modus-wc-content-tree-search-demo">
      <modus-wc-text-input
        aria-label="Filter tree"
        include-clear
        include-search
        placeholder="Filter nodes…"
        size=${p(d.size)}
        type="text"
        @inputChange=${f}
        @clearClick=${c}
      ></modus-wc-text-input>
      <modus-wc-content-tree
        ${y(a=>{e=a??void 0,o()})}
        aria-label="Content tree"
        ?bordered=${d.bordered}
        selection-mode=${p(d["selection-mode"])}
        size=${p(d.size)}
      @nodeSelect=${l}
      @nodeExpandChange=${u}
    ></modus-wc-content-tree>
    </div>`}},w={parameters:{docs:{source:{code:te}}},render:d=>{let e,n=structuredClone(N),t="1-1",i=["1","1-2"],o;const l=new Set;let u=0;const f=()=>`new-${Date.now()}-${u++}`,c=()=>{e&&(e.nodes=n,e.selectedNodeId=t,e.expandedNodeIds=[...i],e.editingNodeId=o)},a=(r,s)=>{o=r,s&&l.add(r),c()},h=r=>{t=r.detail.id,c()},m=r=>{const{id:s,expanded:I}=r.detail;i=I?[...i,s]:i.filter(g=>g!==s),c()},k=r=>{a(r.detail.id,!1)},K=r=>{const s=oe(n,r.detail.id,f);n=s.nodes,s.newId?a(s.newId,!1):c()},Q=r=>{const{referenceId:s,position:I}=r.detail,g=f(),T={id:g,label:""};if(I==="child")n=v(n,T,{parentId:s}),i.includes(s)||(i=[...i,s]);else{const x=L(n,s),Y=((x==null?void 0:x.index)??0)+(I==="below"?1:0);n=v(n,T,{parentId:x==null?void 0:x.parentId,index:Y})}a(g,!0)},V=r=>{n=$(n,r.detail.id),l.delete(r.detail.id),c()},W=r=>{const{id:s,label:I}=r.detail;!I&&l.has(s)?n=$(n,s):n=q(n,s,{label:I||"Untitled"}),l.delete(s),o=void 0,c()},X=r=>{const{id:s}=r.detail;l.has(s)&&(n=$(n,s)),l.delete(s),o=void 0,c()};return S`
    <modus-wc-content-tree
      ${y(r=>{e=r??void 0,c()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${p(d["custom-class"])}
      selection-mode=${p(d["selection-mode"])}
      size=${p(d.size)}
      @nodeSelect=${h}
      @nodeExpandChange=${m}
      @nodeEdit=${k}
      @nodeDuplicate=${K}
      @nodeAdd=${Q}
      @nodeDelete=${V}
      @nodeRename=${W}
      @nodeEditCancel=${X}
    ></modus-wc-content-tree>`}};var z,F,A;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: contentTreeDefaultSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1'];
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = sampleNodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
    };
    const handleSelect = (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    };
    const handleExpandChange = (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...expandedNodeIds, id] : expandedNodeIds.filter(x => x !== id);
      sync();
    };

    // prettier-ignore
    return html\`
    <modus-wc-content-tree
      \${ref(el => {
      treeEl = el as ContentTreeElement ?? undefined;
      sync();
    })}
      aria-label="Content tree"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      selection-mode=\${ifDefined(args['selection-mode'])}
      size=\${ifDefined(args.size)}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
    ></modus-wc-content-tree>\`;
  }
}`,...(A=(F=E.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var M,R,_;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    'selection-mode': 'multiple'
  },
  parameters: {
    docs: {
      source: {
        code: contentTreeMultiSelectSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1', '1-2'];
    let checkedNodeIds: string[] = ['1-2-1'];
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = sampleNodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.checkedNodeIds = [...checkedNodeIds];
    };
    const handleSelect = (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    };
    const handleExpandChange = (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...expandedNodeIds, id] : expandedNodeIds.filter(x => x !== id);
      sync();
    };
    const handleCheckChange = (e: CustomEvent<{
      id: string;
      checked: boolean;
    }>) => {
      const {
        id,
        checked
      } = e.detail;
      checkedNodeIds = setNodeChecked(sampleNodes, checkedNodeIds, id, checked);
      sync();
    };

    // prettier-ignore
    return html\`
    <modus-wc-content-tree
      \${ref(el => {
      treeEl = el as ContentTreeElement ?? undefined;
      sync();
    })}
      aria-label="Content tree"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      selection-mode=\${ifDefined(args['selection-mode'])}
      size=\${ifDefined(args.size)}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeCheckChange=\${handleCheckChange}
    ></modus-wc-content-tree>\`;
  }
}`,...(_=(R=C.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var O,j,B;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: contentTreeSearchFilterSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    let selectedNodeId = '1-2-2';
    let expandedNodeIds: string[] = ['1', '1-2'];
    let filter = '';
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = sampleNodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.filter = filter;
    };
    const handleSelect = (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    };
    const handleExpandChange = (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...expandedNodeIds, id] : expandedNodeIds.filter(x => x !== id);
      sync();
    };
    const handleFilter = (e: CustomEvent<InputEvent>) => {
      filter = (e.detail?.target as HTMLInputElement)?.value ?? '';
      sync();
    };
    const handleClear = () => {
      filter = '';
      sync();
    };

    // prettier-ignore
    return html\`
    <style>
      .modus-wc-content-tree-search-demo {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: 20rem;
      }
    </style>
    <div class="modus-wc-content-tree-search-demo">
      <modus-wc-text-input
        aria-label="Filter tree"
        include-clear
        include-search
        placeholder="Filter nodes…"
        size=\${ifDefined(args.size)}
        type="text"
        @inputChange=\${handleFilter}
        @clearClick=\${handleClear}
      ></modus-wc-text-input>
      <modus-wc-content-tree
        \${ref(el => {
      treeEl = el as ContentTreeElement ?? undefined;
      sync();
    })}
        aria-label="Content tree"
        ?bordered=\${args.bordered}
        selection-mode=\${ifDefined(args['selection-mode'])}
        size=\${ifDefined(args.size)}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
    ></modus-wc-content-tree>
    </div>\`;
  }
}`,...(B=(j=b.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var P,U,H;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: contentTreeTransactionalMenuSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    // A private copy so the shared sampleNodes stays untouched across stories.
    let nodes: ITreeNode[] = structuredClone(sampleNodes);
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1', '1-2'];
    let editingNodeId: string | undefined;
    // Ids assigned to nodes created via the menu; used to discard empty cancels.
    const freshIds = new Set<string>();
    let idCounter = 0;
    const makeId = () => \`new-\${Date.now()}-\${idCounter++}\`;
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = nodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.editingNodeId = editingNodeId;
    };
    const startEditing = (id: string, fresh: boolean) => {
      editingNodeId = id;
      if (fresh) freshIds.add(id);
      sync();
    };
    const handleSelect = (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    };
    const handleExpandChange = (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...expandedNodeIds, id] : expandedNodeIds.filter(x => x !== id);
      sync();
    };
    const handleEdit = (e: CustomEvent<{
      id: string;
    }>) => {
      startEditing(e.detail.id, false);
    };
    const handleDuplicate = (e: CustomEvent<{
      id: string;
    }>) => {
      const result = duplicateNode(nodes, e.detail.id, makeId);
      nodes = result.nodes;
      if (result.newId) startEditing(result.newId, false);else sync();
    };
    const handleAdd = (e: CustomEvent<{
      referenceId: string;
      position: 'above' | 'below' | 'child';
    }>) => {
      const {
        referenceId,
        position
      } = e.detail;
      const newId = makeId();
      const newNode: ITreeNode = {
        id: newId,
        label: ''
      };
      if (position === 'child') {
        nodes = addNode(nodes, newNode, {
          parentId: referenceId
        });
        if (!expandedNodeIds.includes(referenceId)) {
          expandedNodeIds = [...expandedNodeIds, referenceId];
        }
      } else {
        const loc = getNodeLocation(nodes, referenceId);
        const index = (loc?.index ?? 0) + (position === 'below' ? 1 : 0);
        nodes = addNode(nodes, newNode, {
          parentId: loc?.parentId,
          index
        });
      }
      startEditing(newId, true);
    };
    const handleDelete = (e: CustomEvent<{
      id: string;
    }>) => {
      nodes = deleteNode(nodes, e.detail.id);
      freshIds.delete(e.detail.id);
      sync();
    };
    const handleRename = (e: CustomEvent<{
      id: string;
      label: string;
    }>) => {
      const {
        id,
        label
      } = e.detail;
      // An empty name on a brand-new node discards it; otherwise apply the label.
      if (!label && freshIds.has(id)) {
        nodes = deleteNode(nodes, id);
      } else {
        nodes = updateNode(nodes, id, {
          label: label || 'Untitled'
        });
      }
      freshIds.delete(id);
      editingNodeId = undefined;
      sync();
    };
    const handleEditCancel = (e: CustomEvent<{
      id: string;
    }>) => {
      const {
        id
      } = e.detail;
      // Discard a freshly added node that was never named.
      if (freshIds.has(id)) nodes = deleteNode(nodes, id);
      freshIds.delete(id);
      editingNodeId = undefined;
      sync();
    };

    // prettier-ignore
    return html\`
    <modus-wc-content-tree
      \${ref(el => {
      treeEl = el as ContentTreeElement ?? undefined;
      sync();
    })}
      aria-label="Content tree"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      selection-mode=\${ifDefined(args['selection-mode'])}
      size=\${ifDefined(args.size)}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeEdit=\${handleEdit}
      @nodeDuplicate=\${handleDuplicate}
      @nodeAdd=\${handleAdd}
      @nodeDelete=\${handleDelete}
      @nodeRename=\${handleRename}
      @nodeEditCancel=\${handleEditCancel}
    ></modus-wc-content-tree>\`;
  }
}`,...(H=(U=w.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};const me=["Default","MultiSelect","SearchFilter","TransactionalMenu"];export{E as Default,C as MultiSelect,b as SearchFilter,w as TransactionalMenu,me as __namedExportsOrder,fe as default};
