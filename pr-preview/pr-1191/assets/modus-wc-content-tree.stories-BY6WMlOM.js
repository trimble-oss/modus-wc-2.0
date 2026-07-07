import{w as me}from"./decorator-D4YmxizW.js";import{b as C}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{n as E}from"./ref-Bw8asrgi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const Ie=`
<modus-wc-content-tree id="content-tree" aria-label="Content tree" node-icon-variant="solid"></modus-wc-content-tree>

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
`,Ne=`
<modus-wc-content-tree
  id="content-tree"
  aria-label="Content tree"
  node-icon-variant="solid"
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
`,xe=`
<!-- \`searchable\` renders the built-in search box; the toolbar's expand/collapse
     control stacks on its own row below it. Both are provided by the component. -->
<modus-wc-content-tree id="content-tree" aria-label="Content tree" node-icon-variant="solid"></modus-wc-content-tree>

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

  // Every node that has children — "expand all" opens all of them at once.
  const getExpandableNodeIds = (list) =>
    list.reduce((acc, node) => {
      if (node.children?.length) {
        acc.push(node.id, ...getExpandableNodeIds(node.children));
      }
      return acc;
    }, []);

  tree.nodes = nodes;
  tree.expandedNodeIds = ['1', '1-2'];
  tree.selectedNodeId = '1-2-2';
  // The component owns the search query internally; the app just enables it.
  tree.searchable = true;
  tree.toolbar = { expandCollapse: true };

  tree.addEventListener('nodeSelect', (e) => {
    tree.selectedNodeId = e.detail.id;
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    tree.expandedNodeIds = expanded
      ? [...new Set([...tree.expandedNodeIds, id])]
      : tree.expandedNodeIds.filter((x) => x !== id);
  });

  // The toolbar's single expand/collapse-all toggle emits \`expandAllChange\`.
  tree.addEventListener('expandAllChange', (e) => {
    tree.expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(nodes) : [];
  });
<\/script>
`,ge=`
<modus-wc-content-tree id="content-tree" aria-label="Content tree" node-icon-variant="solid"></modus-wc-content-tree>

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

  // Set a single node's OWN lock state (no data cascade). A locked parent
  // disables its subtree via the component's effective-disabled inheritance,
  // while each node keeps its own state — so unlocking a parent restores the
  // children to whatever they were before.
  const setNodeDisabled = (list, id, disabled) =>
    list.map((node) => {
      if (node.id === id) return { ...node, disabled };
      if (node.children?.length) {
        return { ...node, children: setNodeDisabled(node.children, id, disabled) };
      }
      return node;
    });

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

  // The eye toggle flips a node's disabled state (cascading to descendants).
  tree.addEventListener('nodeVisibilityChange', (e) => {
    const { id, disabled } = e.detail;
    nodes = setNodeDisabled(nodes, id, disabled);
    sync();
  });
<\/script>
`,be=`
<modus-wc-content-tree
  id="content-tree"
  aria-label="Content tree"
  node-icon-variant="solid"
></modus-wc-content-tree>

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

  const deleteNode = (list, id) =>
    list
      .filter((node) => node.id !== id)
      .map((node) =>
        node.children?.length
          ? { ...node, children: deleteNode(node.children, id) }
          : node
      );

  const moveNode = (list, id, target = {}) => {
    const node = findNode(list, id);
    if (!node) return list;
    return addNode(deleteNode(list, id), node, target);
  };

  // A node cannot be dropped into its own subtree (that would orphan it).
  const isDescendant = (list, ancestorId, nodeId) => {
    if (ancestorId === nodeId) return true;
    const ancestor = findNode(list, ancestorId);
    if (!ancestor?.children?.length) return false;
    return !!findNode(ancestor.children, nodeId);
  };

  // Resolve a relative drop (before/after = reorder siblings, inside = nest as
  // first child) into a new tree. Invalid moves return the input unchanged.
  const moveNodeRelative = (list, id, targetId, position) => {
    if (id === targetId) return list;
    const node = findNode(list, id);
    if (!node || !findNode(list, targetId)) return list;
    if (isDescendant(list, id, targetId)) return list;

    if (position === 'inside') {
      return moveNode(list, id, { parentId: targetId, index: 0 });
    }
    const without = deleteNode(list, id);
    const loc = getNodeLocation(without, targetId);
    if (!loc) return list;
    const index = loc.index + (position === 'after' ? 1 : 0);
    return addNode(without, node, { parentId: loc.parentId, index });
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
        { id: '1-3', label: 'Archived', icon: 'alert' },
      ],
    },
    { id: '2', label: 'Settings', icon: 'settings' },
    { id: '3', label: 'Notifications', icon: 'info' },
  ];
  let expandedNodeIds = ['1', '1-2'];

  const sync = () => {
    tree.nodes = nodes;
    tree.expandedNodeIds = [...expandedNodeIds];
    // Opt in to drag-and-drop; a drag handle appears on each row on hover.
    tree.allowDragDrop = true;
  };

  tree.selectedNodeId = '1-1';
  sync();

  tree.addEventListener('nodeSelect', (e) => {
    tree.selectedNodeId = e.detail.id;
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    expandedNodeIds = expanded
      ? [...new Set([...expandedNodeIds, id])]
      : expandedNodeIds.filter((x) => x !== id);
    sync();
  });

  // Apply the drop, then keep a reparented target open so the moved node shows.
  tree.addEventListener('nodeMove', (e) => {
    const { id, targetId, position } = e.detail;
    nodes = moveNodeRelative(nodes, id, targetId, position);
    if (position === 'inside' && !expandedNodeIds.includes(targetId)) {
      expandedNodeIds = [...expandedNodeIds, targetId];
    }
    sync();
  });
<\/script>
`,Ce=`
<modus-wc-content-tree
  id="content-tree"
  aria-label="Content tree"
  node-icon-variant="solid"
></modus-wc-content-tree>

<script type="module">
  const tree = document.getElementById('content-tree');

  // Immutably set a node's children (marks lazy loading as complete). The app
  // owns the data; assign the result back to \`tree.nodes\`.
  const updateNode = (list, id, changes) =>
    list.map((node) => {
      if (node.id === id) return { ...node, ...changes };
      if (node.children?.length) {
        return { ...node, children: updateNode(node.children, id, changes) };
      }
      return node;
    });

  // --- Controlled state, owned by the application ---
  // Lazy nodes declare \`hasChildren: true\` but ship no \`children\` yet, so each
  // shows an expand chevron and defers its content until first opened.
  let nodes = [
    { id: 'documents', label: 'Documents', icon: 'folder_closed', hasChildren: true },
    { id: 'media', label: 'Media', icon: 'folder_closed', hasChildren: true },
    { id: 'empty', label: 'Empty Folder', icon: 'folder_closed', hasChildren: true },
    { id: 'readme', label: 'Read Me', icon: 'info' },
  ];
  let expandedNodeIds = [];

  // Children returned by the mock "server". The nested subfolder is itself lazy;
  // 'empty' resolves to [] and becomes a plain leaf once loaded.
  const loadChildren = (id) =>
    id === 'empty'
      ? []
      : [
          { id: id + '-1', label: 'First item', icon: 'info' },
          { id: id + '-2', label: 'Subfolder', icon: 'folder_closed', hasChildren: true },
          { id: id + '-3', label: 'Last item', icon: 'info' },
        ];

  const sync = () => {
    tree.nodes = nodes;
    tree.expandedNodeIds = [...expandedNodeIds];
  };

  tree.selectedNodeId = 'readme';
  sync();

  tree.addEventListener('nodeSelect', (e) => {
    tree.selectedNodeId = e.detail.id;
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    expandedNodeIds = expanded
      ? [...new Set([...expandedNodeIds, id])]
      : expandedNodeIds.filter((x) => x !== id);
    sync();
  });

  // Fetch children on first expand, with a deliberate delay so the spinner is
  // visible. Assigning \`children\` (even []) ends the loading state.
  tree.addEventListener('nodeLoadChildren', (e) => {
    const { id } = e.detail;
    window.setTimeout(() => {
      nodes = updateNode(nodes, id, { children: loadChildren(id) });
      sync();
    }, 1200);
  });
<\/script>
`,Ee=`
<modus-wc-content-tree
  id="content-tree"
  aria-label="Content tree"
  node-icon-variant="solid"
  selection-mode="multiple"
  searchable
></modus-wc-content-tree>

<script type="module">
  const tree = document.getElementById('content-tree');

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
        { id: '1-3', label: 'Archived', icon: 'alert' },
      ],
    },
    { id: '2', label: 'Settings', icon: 'settings' },
    { id: '3', label: 'Notifications', icon: 'info' },
  ];

  let expandedNodeIds = ['1', '1-2'];
  let selectedNodeId = '1-1';
  let checkedNodeIds = ['1-2-1'];

  // --- State Manager helpers (owned by the application) ---
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
    node.children?.length ? node.children.flatMap(collectLeafIds) : [node.id];

  const setNodeChecked = (list, checkedIds, id, checked) => {
    const node = findNode(list, id);
    if (!node) return checkedIds;
    const next = new Set(checkedIds);
    collectLeafIds(node).forEach((leafId) =>
      checked ? next.add(leafId) : next.delete(leafId)
    );
    return [...next];
  };

  const getExpandableNodeIds = (list) =>
    list.reduce((acc, node) => {
      if (node.children?.length) {
        acc.push(node.id, ...getExpandableNodeIds(node.children));
      }
      return acc;
    }, []);

  const deleteNode = (list, id) =>
    list
      .filter((node) => node.id !== id)
      .map((node) =>
        node.children?.length
          ? { ...node, children: deleteNode(node.children, id) }
          : node
      );

  const deleteNodes = (list, ids) =>
    ids.reduce((acc, id) => deleteNode(acc, id), list);

  const sync = () => {
    tree.nodes = nodes;
    tree.expandedNodeIds = [...expandedNodeIds];
    tree.selectedNodeId = selectedNodeId;
    tree.checkedNodeIds = [...checkedNodeIds];
    // Toolbar config: toggle each control on/off.
    tree.toolbar = { expandCollapse: true, delete: true };
    // Built-in search box that filters the tree internally.
    tree.searchable = true;
  };

  sync();

  tree.addEventListener('nodeSelect', (e) => {
    selectedNodeId = e.detail.id;
    sync();
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    expandedNodeIds = expanded
      ? [...new Set([...expandedNodeIds, id])]
      : expandedNodeIds.filter((x) => x !== id);
    sync();
  });

  tree.addEventListener('nodeCheckChange', (e) => {
    const { id, checked } = e.detail;
    checkedNodeIds = setNodeChecked(nodes, checkedNodeIds, id, checked);
    sync();
  });

  // Expand-all / collapse-all from the toolbar toggle.
  tree.addEventListener('expandAllChange', (e) => {
    expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(nodes) : [];
    sync();
  });

  // Bulk delete of the checked nodes from the toolbar.
  tree.addEventListener('nodesDelete', (e) => {
    nodes = deleteNodes(nodes, e.detail.ids);
    checkedNodeIds = checkedNodeIds.filter((id) => !!findNode(nodes, id));
    sync();
  });
<\/script>
`,x=(n,e)=>{var d;for(const t of n){if(t.id===e)return t;if((d=t.children)!=null&&d.length){const o=x(t.children,e);if(o)return o}}},w=(n,e,d={})=>{const{parentId:t,index:o}=d;if(!t){const i=[...n];return i.splice(o??i.length,0,e),i}return n.map(i=>{var s;if(i.id===t){const h=i.children?[...i.children]:[];return h.splice(o??h.length,0,e),{...i,children:h}}return(s=i.children)!=null&&s.length?{...i,children:w(i.children,e,d)}:i})},R=(n,e,d)=>n.map(t=>{var o;return t.id===e?{...t,...d}:(o=t.children)!=null&&o.length?{...t,children:R(t.children,e,d)}:t}),b=(n,e)=>n.filter(d=>d.id!==e).map(d=>{var t;return(t=d.children)!=null&&t.length?{...d,children:b(d.children,e)}:d}),ve=(n,e)=>e.reduce((d,t)=>b(d,t),n),we=(n,e,d={})=>{const t=x(n,e);if(!t)return n;const o=b(n,e);return w(o,t,d)},_=(n,e,d)=>{var o;const t=n.findIndex(i=>i.id===e);if(t!==-1)return{parentId:d,index:t};for(const i of n)if((o=i.children)!=null&&o.length){const s=_(i.children,e,i.id);if(s)return s}},ye=(n,e,d)=>{var o;if(e===d)return!0;const t=x(n,e);return(o=t==null?void 0:t.children)!=null&&o.length?!!x(t.children,d):!1},$e=(n,e,d,t)=>{if(e===d)return n;const o=x(n,e);if(!o||!x(n,d)||ye(n,e,d))return n;if(t==="inside")return we(n,e,{parentId:d,index:0});const i=b(n,e),s=_(i,d);if(!s)return n;const h=s.index+(t==="after"?1:0);return w(i,o,{parentId:s.parentId,index:h})},se=(n,e)=>{var d;return{...n,id:e(),children:(d=n.children)==null?void 0:d.map(t=>se(t,e))}},Se=(n,e,d)=>{const t=x(n,e),o=_(n,e);if(!t||!o)return{nodes:n};const i=se(t,d);return{nodes:w(n,i,{parentId:o.parentId,index:o.index+1}),newId:i.id}},le=n=>{var e;return(e=n.children)!=null&&e.length?n.children.flatMap(le):[n.id]},F=n=>n.reduce((e,d)=>{var t;return(t=d.children)!=null&&t.length&&e.push(d.id,...F(d.children)),e},[]),re=(n,e,d,t)=>{const o=x(n,d);if(!o)return e;const i=new Set(e);return le(o).forEach(s=>t?i.add(s):i.delete(s)),[...i]},ae=(n,e,d)=>n.map(t=>{var o;return t.id===e?{...t,disabled:d}:(o=t.children)!=null&&o.length?{...t,children:ae(t.children,e,d)}:t}),g=[{id:"1",label:"Project Files",icon:"folder_closed",children:[{id:"1-1",label:"Overview",icon:"info"},{id:"1-2",label:"Resources",icon:"folder_closed",children:[{id:"1-2-1",label:"Specifications",icon:"info"},{id:"1-2-2",label:"Search Index",icon:"search"}]},{id:"1-3",label:"Archived",icon:"alert"}]},{id:"2",label:"Settings",icon:"settings"},{id:"3",label:"Notifications",icon:"info"}],Re={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"node-icon-variant":"solid","selection-mode":"single",size:"md"},argTypes:{"node-icon-variant":{control:{type:"select"},options:["outlined","solid"]},"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[me],parameters:{actions:{handles:["nodeSelect","nodeExpandChange","nodeCheckChange","nodeEdit","nodeDuplicate","nodeAdd","nodeDelete","nodeRename","nodeEditCancel","nodeMove","nodeLoadChildren","expandAllChange","nodesDelete","nodeVisibilityChange"]}}},S={parameters:{docs:{source:{code:Ie}}},render:n=>{let e,d="1-1",t=["1"];const o=()=>{e&&(e.nodes=g,e.selectedNodeId=d,e.expandedNodeIds=[...t])},i=h=>{d=h.detail.id,o()},s=h=>{const{id:f,expanded:l}=h.detail;t=l?[...t,f]:t.filter(r=>r!==f),o()};return C`
    <modus-wc-content-tree
      ${E(h=>{e=h??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${n.bordered}
      custom-class=${a(n["custom-class"])}
      selection-mode=${a(n["selection-mode"])}
      size=${a(n.size)}
      node-icon-variant=${a(n["node-icon-variant"])}
      @nodeSelect=${i}
      @nodeExpandChange=${s}
    ></modus-wc-content-tree>`}},k={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:Ne}}},render:n=>{let e,d="1-1",t=["1","1-2"],o=["1-2-1"];const i=()=>{e&&(e.nodes=g,e.selectedNodeId=d,e.expandedNodeIds=[...t],e.checkedNodeIds=[...o])},s=l=>{d=l.detail.id,i()},h=l=>{const{id:r,expanded:m}=l.detail;t=m?[...t,r]:t.filter(u=>u!==r),i()},f=l=>{const{id:r,checked:m}=l.detail;o=re(g,o,r,m),i()};return C`
    <modus-wc-content-tree
      ${E(l=>{e=l??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${n.bordered}
      custom-class=${a(n["custom-class"])}
      selection-mode=${a(n["selection-mode"])}
      size=${a(n.size)}
      node-icon-variant=${a(n["node-icon-variant"])}
      @nodeSelect=${s}
      @nodeExpandChange=${h}
      @nodeCheckChange=${f}
    ></modus-wc-content-tree>`}},D={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:Ee}}},render:n=>{let e,d=structuredClone(g),t="1-1",o=["1","1-2"],i=["1-2-1"];const s=()=>{e&&(e.nodes=d,e.selectedNodeId=t,e.expandedNodeIds=[...o],e.checkedNodeIds=[...i],e.toolbar={expandCollapse:!0,delete:!0},e.searchable=!0)},h=u=>{t=u.detail.id,s()},f=u=>{const{id:I,expanded:y}=u.detail;o=y?[...new Set([...o,I])]:o.filter(M=>M!==I),s()},l=u=>{const{id:I,checked:y}=u.detail;i=re(d,i,I,y),s()},r=u=>{o=u.detail.expanded?F(d):[],s()},m=u=>{d=ve(d,u.detail.ids),i=i.filter(I=>!!x(d,I)),s()};return C`
    <modus-wc-content-tree
      ${E(u=>{e=u??void 0,s()})}
      aria-label="Content tree"
      ?bordered=${n.bordered}
      custom-class=${a(n["custom-class"])}
      selection-mode=${a(n["selection-mode"])}
      size=${a(n.size)}
      node-icon-variant=${a(n["node-icon-variant"])}
      @nodeSelect=${h}
      @nodeExpandChange=${f}
      @nodeCheckChange=${l}
      @expandAllChange=${r}
      @nodesDelete=${m}
    ></modus-wc-content-tree>`}},L={parameters:{docs:{source:{code:xe}}},render:n=>{let e,d="1-2-2",t=["1","1-2"];const o=()=>{e&&(e.nodes=g,e.selectedNodeId=d,e.expandedNodeIds=[...t],e.searchable=!0,e.toolbar={expandCollapse:!0})},i=f=>{d=f.detail.id,o()},s=f=>{const{id:l,expanded:r}=f.detail;t=r?[...new Set([...t,l])]:t.filter(m=>m!==l),o()},h=f=>{t=f.detail.expanded?F(g):[],o()};return C`
    <modus-wc-content-tree
      ${E(f=>{e=f??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${n.bordered}
      selection-mode=${a(n["selection-mode"])}
      size=${a(n.size)}
      node-icon-variant=${a(n["node-icon-variant"])}
      @nodeSelect=${i}
      @nodeExpandChange=${s}
      @expandAllChange=${h}
    ></modus-wc-content-tree>`}},T={parameters:{docs:{source:{code:ge}}},render:n=>{let e,d=structuredClone(g),t="1-1",o=["1","1-2"],i;const s=new Set;let h=0;const f=()=>`new-${Date.now()}-${h++}`,l=()=>{e&&(e.nodes=d,e.selectedNodeId=t,e.expandedNodeIds=[...o],e.editingNodeId=i)},r=(p,c)=>{i=p,c&&s.add(p),l()},m=p=>{t=p.detail.id,l()},u=p=>{const{id:c,expanded:N}=p.detail;o=N?[...o,c]:o.filter($=>$!==c),l()},I=p=>{r(p.detail.id,!1)},y=p=>{const c=Se(d,p.detail.id,f);d=c.nodes,c.newId?r(c.newId,!1):l()},M=p=>{const{referenceId:c,position:N}=p.detail,$=f(),B={id:$,label:""};if(N==="child")d=w(d,B,{parentId:c}),o.includes(c)||(o=[...o,c]);else{const v=_(d,c),fe=((v==null?void 0:v.index)??0)+(N==="below"?1:0);d=w(d,B,{parentId:v==null?void 0:v.parentId,index:fe})}r($,!0)},ce=p=>{d=b(d,p.detail.id),s.delete(p.detail.id),l()},he=p=>{const{id:c,label:N}=p.detail;!N&&s.has(c)?d=b(d,c):d=R(d,c,{label:N||"Untitled"}),s.delete(c),i=void 0,l()},pe=p=>{const{id:c}=p.detail;s.has(c)&&(d=b(d,c)),s.delete(c),i=void 0,l()},ue=p=>{const{id:c,disabled:N}=p.detail;d=ae(d,c,N),l()};return C`
    <modus-wc-content-tree
      ${E(p=>{e=p??void 0,l()})}
      aria-label="Content tree"
      ?bordered=${n.bordered}
      custom-class=${a(n["custom-class"])}
      selection-mode=${a(n["selection-mode"])}
      size=${a(n.size)}
      node-icon-variant=${a(n["node-icon-variant"])}
      @nodeSelect=${m}
      @nodeExpandChange=${u}
      @nodeEdit=${I}
      @nodeDuplicate=${y}
      @nodeAdd=${M}
      @nodeDelete=${ce}
      @nodeRename=${he}
      @nodeEditCancel=${pe}
      @nodeVisibilityChange=${ue}
    ></modus-wc-content-tree>`}},A={parameters:{docs:{source:{code:be}}},render:n=>{let e,d=structuredClone(g),t="1-1",o=["1","1-2"];const i=()=>{e&&(e.nodes=d,e.selectedNodeId=t,e.expandedNodeIds=[...o],e.allowDragDrop=!0)},s=l=>{t=l.detail.id,i()},h=l=>{const{id:r,expanded:m}=l.detail;o=m?[...new Set([...o,r])]:o.filter(u=>u!==r),i()},f=l=>{const{id:r,targetId:m,position:u}=l.detail;d=$e(d,r,m,u),u==="inside"&&!o.includes(m)&&(o=[...o,m]),i()};return C`
    <modus-wc-content-tree
      ${E(l=>{e=l??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${n.bordered}
      custom-class=${a(n["custom-class"])}
      selection-mode=${a(n["selection-mode"])}
      size=${a(n.size)}
      node-icon-variant=${a(n["node-icon-variant"])}
      @nodeSelect=${s}
      @nodeExpandChange=${h}
      @nodeMove=${f}
    ></modus-wc-content-tree>`}},z={parameters:{docs:{source:{code:Ce}}},render:n=>{let e,d=[{id:"documents",label:"Documents",icon:"folder_closed",hasChildren:!0},{id:"media",label:"Media",icon:"folder_closed",hasChildren:!0},{id:"empty",label:"Empty Folder",icon:"folder_closed",hasChildren:!0},{id:"readme",label:"Read Me",icon:"info"}],t="readme",o=[];const i=r=>r==="empty"?[]:[{id:`${r}-1`,label:"First item",icon:"info"},{id:`${r}-2`,label:"Subfolder",icon:"folder_closed",hasChildren:!0},{id:`${r}-3`,label:"Last item",icon:"info"}],s=()=>{e&&(e.nodes=d,e.selectedNodeId=t,e.expandedNodeIds=[...o])},h=r=>{t=r.detail.id,s()},f=r=>{const{id:m,expanded:u}=r.detail;o=u?[...new Set([...o,m])]:o.filter(I=>I!==m),s()},l=r=>{const{id:m}=r.detail;window.setTimeout(()=>{d=R(d,m,{children:i(m)}),s()},1200)};return C`
    <modus-wc-content-tree
      ${E(r=>{e=r??void 0,s()})}
      aria-label="Content tree"
      ?bordered=${n.bordered}
      custom-class=${a(n["custom-class"])}
      selection-mode=${a(n["selection-mode"])}
      size=${a(n.size)}
      node-icon-variant=${a(n["node-icon-variant"])}
      @nodeSelect=${h}
      @nodeExpandChange=${f}
      @nodeLoadChildren=${l}
    ></modus-wc-content-tree>`}};var O,j,P;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
      node-icon-variant=\${ifDefined(args['node-icon-variant'])}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
    ></modus-wc-content-tree>\`;
  }
}`,...(P=(j=S.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var V,U,W;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
      node-icon-variant=\${ifDefined(args['node-icon-variant'])}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeCheckChange=\${handleCheckChange}
    ></modus-wc-content-tree>\`;
  }
}`,...(W=(U=k.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var q,G,H;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    'selection-mode': 'multiple'
  },
  parameters: {
    docs: {
      source: {
        code: contentTreeToolbarSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    // A private copy so bulk deletes never mutate the shared sampleNodes.
    let nodes: ITreeNode[] = structuredClone(sampleNodes);
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1', '1-2'];
    let checkedNodeIds: string[] = ['1-2-1'];
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = nodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.checkedNodeIds = [...checkedNodeIds];
      treeEl.toolbar = {
        expandCollapse: true,
        delete: true
      };
      // Built-in search filters the tree internally (self-managed).
      treeEl.searchable = true;
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
      expandedNodeIds = expanded ? [...new Set([...expandedNodeIds, id])] : expandedNodeIds.filter(x => x !== id);
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
      checkedNodeIds = setNodeChecked(nodes, checkedNodeIds, id, checked);
      sync();
    };

    // Expand-all / collapse-all: set every expandable id, or clear to collapse.
    const handleExpandAll = (e: CustomEvent<{
      expanded: boolean;
    }>) => {
      expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(nodes) : [];
      sync();
    };

    // Bulk delete: remove the checked branches, then drop any now-missing ids
    // from the checked set so the selection stays consistent.
    const handleNodesDelete = (e: CustomEvent<{
      ids: string[];
    }>) => {
      nodes = deleteNodes(nodes, e.detail.ids);
      checkedNodeIds = checkedNodeIds.filter(id => !!findNode(nodes, id));
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
      node-icon-variant=\${ifDefined(args['node-icon-variant'])}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeCheckChange=\${handleCheckChange}
      @expandAllChange=\${handleExpandAll}
      @nodesDelete=\${handleNodesDelete}
    ></modus-wc-content-tree>\`;
  }
}`,...(H=(G=D.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
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

    // Search is handled by the component itself (\`searchable\`); the app only
    // owns node/selection/expansion state. The toolbar's expand/collapse toggle
    // renders on its own row below the search box.
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = sampleNodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.searchable = true;
      treeEl.toolbar = {
        expandCollapse: true
      };
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
      expandedNodeIds = expanded ? [...new Set([...expandedNodeIds, id])] : expandedNodeIds.filter(x => x !== id);
      sync();
    };

    // The toolbar's single expand/collapse-all toggle emits \`expandAllChange\`;
    // the app applies it to its own expansion state.
    const handleExpandAll = (e: CustomEvent<{
      expanded: boolean;
    }>) => {
      expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(sampleNodes) : [];
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
      selection-mode=\${ifDefined(args['selection-mode'])}
      size=\${ifDefined(args.size)}
      node-icon-variant=\${ifDefined(args['node-icon-variant'])}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @expandAllChange=\${handleExpandAll}
    ></modus-wc-content-tree>\`;
  }
}`,...(Q=(K=L.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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

    // The eye toggle flips the node's OWN lock state; a locked parent disables
    // its subtree via the component's effective-disabled inheritance, while each
    // node keeps its own state (so unlocking a parent restores the children).
    const handleVisibilityChange = (e: CustomEvent<{
      id: string;
      disabled: boolean;
    }>) => {
      const {
        id,
        disabled
      } = e.detail;
      nodes = setNodeDisabled(nodes, id, disabled);
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
      node-icon-variant=\${ifDefined(args['node-icon-variant'])}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeEdit=\${handleEdit}
      @nodeDuplicate=\${handleDuplicate}
      @nodeAdd=\${handleAdd}
      @nodeDelete=\${handleDelete}
      @nodeRename=\${handleRename}
      @nodeEditCancel=\${handleEditCancel}
      @nodeVisibilityChange=\${handleVisibilityChange}
    ></modus-wc-content-tree>\`;
  }
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,de;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: contentTreeDragAndDropSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    // A private copy so the shared sampleNodes stays untouched across stories.
    let nodes: ITreeNode[] = structuredClone(sampleNodes);
    let selectedNodeId = '1-1';
    let expandedNodeIds: string[] = ['1', '1-2'];
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = nodes;
      treeEl.selectedNodeId = selectedNodeId;
      treeEl.expandedNodeIds = [...expandedNodeIds];
      treeEl.allowDragDrop = true;
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
      expandedNodeIds = expanded ? [...new Set([...expandedNodeIds, id])] : expandedNodeIds.filter(x => x !== id);
      sync();
    };

    // Apply the move to the app-owned data, then keep a reparented target open
    // so the moved node is visible inside it.
    const handleMove = (e: CustomEvent<{
      id: string;
      targetId: string;
      position: 'before' | 'after' | 'inside';
    }>) => {
      const {
        id,
        targetId,
        position
      } = e.detail;
      nodes = moveNodeRelative(nodes, id, targetId, position);
      if (position === 'inside' && !expandedNodeIds.includes(targetId)) {
        expandedNodeIds = [...expandedNodeIds, targetId];
      }
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
      node-icon-variant=\${ifDefined(args['node-icon-variant'])}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeMove=\${handleMove}
    ></modus-wc-content-tree>\`;
  }
}`,...(de=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var te,oe,ie;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: contentTreeLazyLoadingSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    // Lazy roots declare \`hasChildren\` but ship no \`children\` yet, so each shows
    // an expand chevron and defers its content until the user opens it.
    let nodes: ITreeNode[] = [{
      id: 'documents',
      label: 'Documents',
      icon: 'folder_closed',
      hasChildren: true
    }, {
      id: 'media',
      label: 'Media',
      icon: 'folder_closed',
      hasChildren: true
    }, {
      id: 'empty',
      label: 'Empty Folder',
      icon: 'folder_closed',
      hasChildren: true
    }, {
      id: 'readme',
      label: 'Read Me',
      icon: 'info'
    }];
    let selectedNodeId = 'readme';
    let expandedNodeIds: string[] = [];

    // Children returned by the mock "server". The nested subfolder is itself
    // lazy so the spinner can be seen again one level deeper. The "Empty Folder"
    // resolves to an empty array — it becomes a plain leaf once loaded.
    const loadChildren = (id: string): ITreeNode[] => id === 'empty' ? [] : [{
      id: \`\${id}-1\`,
      label: 'First item',
      icon: 'info'
    }, {
      id: \`\${id}-2\`,
      label: 'Subfolder',
      icon: 'folder_closed',
      hasChildren: true
    }, {
      id: \`\${id}-3\`,
      label: 'Last item',
      icon: 'info'
    }];
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = nodes;
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
      expandedNodeIds = expanded ? [...new Set([...expandedNodeIds, id])] : expandedNodeIds.filter(x => x !== id);
      sync();
    };

    // Fetch children on first expand, with a deliberate delay so the spinner is
    // visible. Assigning \`children\` (even \`[]\`) ends the loading state.
    const handleLoadChildren = (e: CustomEvent<{
      id: string;
    }>) => {
      const {
        id
      } = e.detail;
      window.setTimeout(() => {
        nodes = updateNode(nodes, id, {
          children: loadChildren(id)
        });
        sync();
      }, 1200);
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
      node-icon-variant=\${ifDefined(args['node-icon-variant'])}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeLoadChildren=\${handleLoadChildren}
    ></modus-wc-content-tree>\`;
  }
}`,...(ie=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Fe=["Default","MultiSelect","Toolbar","SearchFilter","TransactionalMenu","DragAndDrop","LazyLoading"];export{S as Default,A as DragAndDrop,z as LazyLoading,k as MultiSelect,L as SearchFilter,D as Toolbar,T as TransactionalMenu,Fe as __namedExportsOrder,Re as default};
