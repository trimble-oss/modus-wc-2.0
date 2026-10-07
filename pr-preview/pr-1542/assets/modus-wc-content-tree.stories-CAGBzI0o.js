import"./index-SE3If525.js";import{b as C}from"./lit-element-DgBvYnzn.js";import{o as f}from"./if-defined-BnVFTJ4o.js";import{n as w}from"./ref-Bw8asrgi.js";import{b as Te}from"./chunk-4XZ63LWV-C_wAuwg_.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";import"./v4-C6aID195.js";const ze=`
<modus-wc-content-tree id="content-tree" aria-label="Content tree"></modus-wc-content-tree>

<script type="module">
  const tree = document.getElementById('content-tree');

  // The application owns the data (the single source of truth).
  const nodes = [
    {
      id: '1',
      label: 'Project Files',
      icon: { name: 'folder_closed', variant: 'solid' },
      children: [
        { id: '1-1', label: 'Overview', icon: { name: 'info', variant: 'solid' } },
        {
          id: '1-2',
          label: 'Resources',
          icon: { name: 'folder_closed', variant: 'solid' },
          children: [
            { id: '1-2-1', label: 'Specifications', icon: { name: 'info', variant: 'solid' } },
            { id: '1-2-2', label: 'Search Index', icon: { name: 'search', variant: 'solid' } },
          ],
        },
        { id: '1-3', label: 'Archived', icon: { name: 'alert', variant: 'solid' } },
      ],
    },
    { id: '2', label: 'Settings', icon: { name: 'settings', variant: 'solid' } },
    { id: '3', label: 'Notifications', icon: { name: 'info', variant: 'solid' } },
  ];

  // Controlled state lives in the application.
  let selectedNodeId = '1-1';
  let expandedNodeIds = ['1'];

  const sync = () => {
    tree.nodes = nodes;
    tree.selectedNodeId = selectedNodeId;
    tree.expandedNodeIds = [...expandedNodeIds];
  };

  await customElements.whenDefined('modus-wc-content-tree');
  sync();

  tree.addEventListener('nodeSelect', (e) => {
    selectedNodeId = e.detail.id;
    sync();
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    expandedNodeIds = expanded
      ? [...expandedNodeIds, id]
      : expandedNodeIds.filter((x) => x !== id);
    sync();
  });
<\/script>
`,Me=`
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
      icon: { name: 'folder_closed', variant: 'solid' },
      children: [
        { id: '1-1', label: 'Overview', icon: { name: 'info', variant: 'solid' } },
        {
          id: '1-2',
          label: 'Resources',
          icon: { name: 'folder_closed', variant: 'solid' },
          children: [
            { id: '1-2-1', label: 'Specifications', icon: { name: 'info', variant: 'solid' } },
            { id: '1-2-2', label: 'Search Index', icon: { name: 'search', variant: 'solid' } },
          ],
        },
        { id: '1-3', label: 'Archived', icon: { name: 'alert', variant: 'solid' } },
      ],
    },
    { id: '2', label: 'Settings', icon: { name: 'settings', variant: 'solid' } },
    { id: '3', label: 'Notifications', icon: { name: 'info', variant: 'solid' } },
  ];

  let selectedNodeId = '1-1';
  let expandedNodeIds = ['1', '1-2'];
  let checkedNodeIds = ['1-2-1'];

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

  const sync = () => {
    tree.nodes = nodes;
    tree.selectedNodeId = selectedNodeId;
    tree.expandedNodeIds = [...expandedNodeIds];
    tree.checkedNodeIds = [...checkedNodeIds];
  };

  await customElements.whenDefined('modus-wc-content-tree');
  sync();

  tree.addEventListener('nodeSelect', (e) => {
    selectedNodeId = e.detail.id;
    sync();
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    expandedNodeIds = expanded
      ? [...expandedNodeIds, id]
      : expandedNodeIds.filter((x) => x !== id);
    sync();
  });

  tree.addEventListener('nodeCheckChange', (e) => {
    const { id, checked } = e.detail;
    checkedNodeIds = setNodeChecked(nodes, checkedNodeIds, id, checked);
    sync();
  });
<\/script>
`,Re=`
<!-- \`searchable\` renders the built-in search box; the toolbar's expand/collapse
     control stacks on its own row below it. Both are provided by the component. -->
<modus-wc-content-tree id="content-tree" aria-label="Content tree"></modus-wc-content-tree>

<script type="module">
  const tree = document.getElementById('content-tree');

  const nodes = [
    {
      id: '1',
      label: 'Project Files',
      icon: { name: 'folder_closed', variant: 'solid' },
      children: [
        { id: '1-1', label: 'Overview', icon: { name: 'info', variant: 'solid' } },
        {
          id: '1-2',
          label: 'Resources',
          icon: { name: 'folder_closed', variant: 'solid' },
          children: [
            { id: '1-2-1', label: 'Specifications', icon: { name: 'info', variant: 'solid' } },
            { id: '1-2-2', label: 'Search Index', icon: { name: 'search', variant: 'solid' } },
          ],
        },
        { id: '1-3', label: 'Archived', icon: { name: 'alert', variant: 'solid' } },
      ],
    },
    { id: '2', label: 'Settings', icon: { name: 'settings', variant: 'solid' } },
    { id: '3', label: 'Notifications', icon: { name: 'info', variant: 'solid' } },
  ];

  // Every node that has children — "expand all" opens all of them at once.
  const getExpandableNodeIds = (list) =>
    list.reduce((acc, node) => {
      const isLazyExpandable =
        !!node.hasChildren && node.children === undefined;
      const hasLoadedChildren = !!node.children?.length;

      if (hasLoadedChildren || isLazyExpandable) {
        acc.push(node.id);
        if (hasLoadedChildren) {
          acc.push(...getExpandableNodeIds(node.children));
        }
      }

      return acc;
    }, []);

  let selectedNodeId = '1-2-2';
  let expandedNodeIds = ['1', '1-2'];

  const sync = () => {
    tree.nodes = nodes;
    tree.selectedNodeId = selectedNodeId;
    tree.expandedNodeIds = [...expandedNodeIds];
    // The component owns the search query internally; the app just enables it.
    tree.searchable = true;
    tree.toolbar = { expandCollapse: true };
  };

  await customElements.whenDefined('modus-wc-content-tree');
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

  // The toolbar's single expand/collapse-all toggle emits \`expandAllChange\`.
  tree.addEventListener('expandAllChange', (e) => {
    expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(nodes) : [];
    sync();
  });
<\/script>
`,_e=`
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
      icon: { name: 'folder_closed', variant: 'solid' },
      children: [
        { id: '1-1', label: 'Overview', icon: { name: 'info', variant: 'solid' } },
        {
          id: '1-2',
          label: 'Resources',
          icon: { name: 'folder_closed', variant: 'solid' },
          children: [
            { id: '1-2-1', label: 'Specifications', icon: { name: 'info', variant: 'solid' } },
            { id: '1-2-2', label: 'Search Index', icon: { name: 'search', variant: 'solid' } },
          ],
        },
        { id: '1-3', label: 'Archived', icon: { name: 'alert', variant: 'solid' } },
      ],
    },
    { id: '2', label: 'Settings', icon: { name: 'settings', variant: 'solid' } },
    { id: '3', label: 'Notifications', icon: { name: 'info', variant: 'solid' } },
  ];
  let selectedNodeId = '1-1';
  let expandedNodeIds = ['1', '1-2'];
  let editingNodeId = null;
  const freshIds = new Set();
  let idCounter = 0;
  const makeId = () => \`new-\${Date.now()}-\${idCounter++}\`;

  // Push every controlled prop from app state. Use \`null\` (not \`undefined\`) when
  // clearing \`editingNodeId\` — vanilla property assignment of \`undefined\` often
  // leaves the previous id on the host, so autofocus never re-arms.
  const sync = () => {
    tree.nodes = nodes;
    tree.selectedNodeId = selectedNodeId;
    tree.expandedNodeIds = [...expandedNodeIds];
    tree.editingNodeId = editingNodeId;
  };

  const startEditing = (id, fresh) => {
    editingNodeId = id;
    if (fresh) freshIds.add(id);
    sync();
  };

  // Wait until the custom element is upgraded so the first prop assignments stick
  // (Storybook already has components defined; a standalone app may not).
  await customElements.whenDefined('modus-wc-content-tree');
  sync();

  tree.addEventListener('nodeSelect', (e) => {
    selectedNodeId = e.detail.id;
    sync();
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    expandedNodeIds = expanded
      ? [...expandedNodeIds, id]
      : expandedNodeIds.filter((x) => x !== id);
    sync();
  });

  tree.addEventListener('nodeEdit', (e) => {
    startEditing(e.detail.id, false);
  });

  tree.addEventListener('nodeDuplicate', (e) => {
    const result = duplicateNode(nodes, e.detail.id, makeId);
    nodes = result.nodes;
    if (result.newId) startEditing(result.newId, false);
    else sync();
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
    startEditing(newId, true);
  });

  tree.addEventListener('nodeDelete', (e) => {
    nodes = deleteNode(nodes, e.detail.id);
    sync();
  });

  tree.addEventListener('nodeRename', (e) => {
    const { id, label } = e.detail;
    nodes = updateNode(nodes, id, { label: label || 'Untitled' });
    freshIds.delete(id);
    editingNodeId = null;
    sync();
  });

  tree.addEventListener('nodeEditCancel', (e) => {
    const { id } = e.detail;
    if (freshIds.has(id)) nodes = deleteNode(nodes, id);
    freshIds.delete(id);
    editingNodeId = null;
    sync();
  });

  // The eye toggle flips a node's disabled state (cascading to descendants).
  tree.addEventListener('nodeVisibilityChange', (e) => {
    const { id, disabled } = e.detail;
    nodes = setNodeDisabled(nodes, id, disabled);
    sync();
  });
<\/script>
`,Fe=`
<modus-wc-content-tree
  id="content-tree"
  aria-label="Content tree"
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
      icon: { name: 'folder_closed', variant: 'solid' },
      children: [
        { id: '1-1', label: 'Overview', icon: { name: 'info', variant: 'solid' } },
        {
          id: '1-2',
          label: 'Resources',
          icon: { name: 'folder_closed', variant: 'solid' },
          children: [
            { id: '1-2-1', label: 'Specifications', icon: { name: 'info', variant: 'solid' } },
            { id: '1-2-2', label: 'Search Index', icon: { name: 'search', variant: 'solid' } },
          ],
        },
        { id: '1-3', label: 'Archived', icon: { name: 'alert', variant: 'solid' } },
      ],
    },
    { id: '2', label: 'Settings', icon: { name: 'settings', variant: 'solid' } },
    { id: '3', label: 'Notifications', icon: { name: 'info', variant: 'solid' } },
  ];
  let selectedNodeId = '1-1';
  let expandedNodeIds = ['1', '1-2'];

  // Keyboard: focus a reorder handle, then Space or Enter to grab. Arrow keys
  // move the drop indicator (Right nests, Left promotes). Space or Enter drops
  // and emits \`nodeMove\`. Escape cancels; Tab cancels and continues tab order.
  //
  // Push every controlled prop from app state on each update (including
  // \`allowDragDrop\`, so it is not lost if sync runs before upgrade completes).
  const sync = () => {
    tree.nodes = nodes;
    tree.selectedNodeId = selectedNodeId;
    tree.expandedNodeIds = [...expandedNodeIds];
    tree.allowDragDrop = true;
  };

  await customElements.whenDefined('modus-wc-content-tree');
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
`,Pe=`
<modus-wc-content-tree
  id="content-tree"
  aria-label="Content tree"
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
    { id: 'documents', label: 'Documents', icon: { name: 'folder_closed', variant: 'solid' }, hasChildren: true },
    { id: 'media', label: 'Media', icon: { name: 'folder_closed', variant: 'solid' }, hasChildren: true },
    { id: 'empty', label: 'Empty Folder', icon: { name: 'folder_closed', variant: 'solid' }, hasChildren: true },
    { id: 'readme', label: 'Read Me', icon: { name: 'info', variant: 'solid' } },
  ];
  let selectedNodeId = 'readme';
  let expandedNodeIds = [];

  // Children returned by the mock "server". The nested subfolder is itself lazy;
  // 'empty' resolves to [] and becomes a plain leaf once loaded.
  const loadChildren = (id) =>
    id === 'empty'
      ? []
      : [
          { id: id + '-1', label: 'First item', icon: { name: 'info', variant: 'solid' } },
          { id: id + '-2', label: 'Subfolder', icon: { name: 'folder_closed', variant: 'solid' }, hasChildren: true },
          { id: id + '-3', label: 'Last item', icon: { name: 'info', variant: 'solid' } },
        ];

  const sync = () => {
    tree.nodes = nodes;
    tree.selectedNodeId = selectedNodeId;
    tree.expandedNodeIds = [...expandedNodeIds];
  };

  await customElements.whenDefined('modus-wc-content-tree');
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
`,Be=`
<modus-wc-content-tree
  id="content-tree"
  aria-label="Content tree"
  selection-mode="multiple"
  searchable
></modus-wc-content-tree>

<script type="module">
  const tree = document.getElementById('content-tree');

  let nodes = [
    {
      id: '1',
      label: 'Project Files',
      icon: { name: 'folder_closed', variant: 'solid' },
      children: [
        { id: '1-1', label: 'Overview', icon: { name: 'info', variant: 'solid' } },
        {
          id: '1-2',
          label: 'Resources',
          icon: { name: 'folder_closed', variant: 'solid' },
          children: [
            { id: '1-2-1', label: 'Specifications', icon: { name: 'info', variant: 'solid' } },
            { id: '1-2-2', label: 'Search Index', icon: { name: 'search', variant: 'solid' } },
          ],
        },
        { id: '1-3', label: 'Archived', icon: { name: 'alert', variant: 'solid' } },
      ],
    },
    { id: '2', label: 'Settings', icon: { name: 'settings', variant: 'solid' } },
    { id: '3', label: 'Notifications', icon: { name: 'info', variant: 'solid' } },
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
      const isLazyExpandable =
        !!node.hasChildren && node.children === undefined;
      const hasLoadedChildren = !!node.children?.length;

      if (hasLoadedChildren || isLazyExpandable) {
        acc.push(node.id);
        if (hasLoadedChildren) {
          acc.push(...getExpandableNodeIds(node.children));
        }
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
    tree.selectedNodeId = selectedNodeId;
    tree.expandedNodeIds = [...expandedNodeIds];
    tree.checkedNodeIds = [...checkedNodeIds];
    // Toolbar config: toggle each control on/off.
    tree.toolbar = { expandCollapse: true, delete: true };
    // Built-in search box that filters the tree internally.
    tree.searchable = true;
  };

  await customElements.whenDefined('modus-wc-content-tree');
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
`,Ve=`
<style>
  .modus-wc-content-tree-empty-story {
    background-color: var(--modus-wc-color-base-page);
    display: flex;
    flex-direction: column;
    min-height: 24rem;
    width: 18rem;
  }

  .modus-wc-content-tree-empty-story.is-empty modus-wc-content-tree > modus-wc-tree-menu {
    display: none;
  }

  .modus-wc-content-tree-empty-story.is-empty modus-wc-content-tree {
    flex: 0 0 auto;
  }

  .modus-wc-content-tree-empty-story.is-empty .modus-wc-content-tree-empty-story-panel {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--modus-wc-spacing-md);
    justify-content: center;
    padding: var(--modus-wc-spacing-lg);
  }

  .modus-wc-content-tree-empty-story:not(.is-empty) .modus-wc-content-tree-empty-story-panel {
    display: none;
  }

  .modus-wc-content-tree-empty-story-icon {
    color: var(--modus-wc-color-base-content-low-contrast);
    font-size: 4rem;
    line-height: 1;
    opacity: 0.6;
  }

  .modus-wc-content-tree-empty-story-title {
    color: var(--modus-wc-color-base-content-low-contrast);
    margin: 0;
    text-align: center;
  }
</style>

<div id="content-tree-shell" class="modus-wc-content-tree-empty-story is-empty">
  <modus-wc-content-tree id="content-tree" aria-label="Content tree" searchable></modus-wc-content-tree>
  <div id="content-tree-empty" class="modus-wc-content-tree-empty-story-panel">
    <modus-wc-icon
      custom-class="modus-wc-content-tree-empty-story-icon"
      decorative
      name="box_select"
      size="lg"
    ></modus-wc-icon>
    <modus-wc-typography
      custom-class="modus-wc-content-tree-empty-story-title"
      hierarchy="p"
      label="Empty content tree"
      size="lg"
    ></modus-wc-typography>
    <modus-wc-button id="create-node" color="primary" size="sm" variant="filled">
      <modus-wc-icon decorative name="add" size="xs"></modus-wc-icon>
      Create node
    </modus-wc-button>
  </div>
</div>

<script type="module">
  const tree = document.getElementById('content-tree');
  const shell = document.getElementById('content-tree-shell');
  const emptyPanel = document.getElementById('content-tree-empty');
  const createNodeButton = document.getElementById('create-node');

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

  const getExpandableNodeIds = (list) =>
    list.reduce((acc, node) => {
      const isLazyExpandable =
        !!node.hasChildren && node.children === undefined;
      const hasLoadedChildren = !!node.children?.length;

      if (hasLoadedChildren || isLazyExpandable) {
        acc.push(node.id);
        if (hasLoadedChildren) {
          acc.push(...getExpandableNodeIds(node.children));
        }
      }

      return acc;
    }, []);

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

  const setNodeDisabled = (list, id, disabled) =>
    list.map((node) => {
      if (node.id === id) return { ...node, disabled };
      if (node.children?.length) {
        return { ...node, children: setNodeDisabled(node.children, id, disabled) };
      }
      return node;
    });

  // --- Controlled state, owned by the application ---
  let nodes = [];
  let selectedNodeId = null;
  let expandedNodeIds = [];
  let editingNodeId = null;
  const freshIds = new Set();
  let idCounter = 0;
  const makeId = () => \`new-\${Date.now()}-\${idCounter++}\`;

  const sync = () => {
    tree.nodes = nodes;
    tree.selectedNodeId = selectedNodeId;
    tree.expandedNodeIds = [...expandedNodeIds];
    tree.editingNodeId = editingNodeId;
    tree.toolbar = { expandCollapse: true };
    shell.classList.toggle('is-empty', nodes.length === 0);
    emptyPanel.hidden = nodes.length > 0;
  };

  const startEditing = (id, fresh) => {
    editingNodeId = id;
    if (fresh) freshIds.add(id);
    sync();
  };

  const createFirstNode = () => {
    const newId = makeId();
    nodes = [
      {
        id: newId,
        label: '',
        icon: { name: 'folder_closed', variant: 'solid' },
      },
    ];
    selectedNodeId = newId;
    startEditing(newId, true);
  };

  await customElements.whenDefined('modus-wc-content-tree');
  sync();

  createNodeButton.addEventListener('buttonClick', createFirstNode);

  tree.addEventListener('nodeSelect', (e) => {
    selectedNodeId = e.detail.id;
    sync();
  });

  tree.addEventListener('nodeExpandChange', (e) => {
    const { id, expanded } = e.detail;
    expandedNodeIds = expanded
      ? [...expandedNodeIds, id]
      : expandedNodeIds.filter((x) => x !== id);
    sync();
  });

  tree.addEventListener('expandAllChange', (e) => {
    expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(nodes) : [];
    sync();
  });

  tree.addEventListener('nodeEdit', (e) => {
    startEditing(e.detail.id, false);
  });

  tree.addEventListener('nodeDuplicate', (e) => {
    const result = duplicateNode(nodes, e.detail.id, makeId);
    nodes = result.nodes;
    if (result.newId) startEditing(result.newId, false);
    else sync();
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
    startEditing(newId, true);
  });

  tree.addEventListener('nodeDelete', (e) => {
    nodes = deleteNode(nodes, e.detail.id);
    freshIds.delete(e.detail.id);
    if (!findNode(nodes, selectedNodeId)) selectedNodeId = nodes[0]?.id ?? null;
    sync();
  });

  tree.addEventListener('nodeRename', (e) => {
    const { id, label } = e.detail;
    nodes = updateNode(nodes, id, { label: label || 'Untitled' });
    freshIds.delete(id);
    editingNodeId = null;
    sync();
  });

  tree.addEventListener('nodeEditCancel', (e) => {
    const { id } = e.detail;
    if (freshIds.has(id)) nodes = deleteNode(nodes, id);
    freshIds.delete(id);
    editingNodeId = null;
    if (!findNode(nodes, selectedNodeId)) selectedNodeId = nodes[0]?.id ?? null;
    sync();
  });

  tree.addEventListener('nodeVisibilityChange', (e) => {
    const { id, disabled } = e.detail;
    nodes = setNodeDisabled(nodes, id, disabled);
    sync();
  });
<\/script>
`,y=(d,e)=>{var n;for(const s of d){if(s.id===e)return s;if((n=s.children)!=null&&n.length){const t=y(s.children,e);if(t)return t}}},$=(d,e,n={})=>{const{parentId:s,index:t}=n;if(!s){const o=[...d];return o.splice(t??o.length,0,e),o}return d.map(o=>{var i;if(o.id===s){const l=o.children?[...o.children]:[];return l.splice(t??l.length,0,e),{...o,children:l}}if((i=o.children)!=null&&i.length){const l=$(o.children,e,n);return l===o.children?o:{...o,children:l}}return o})},z=(d,e,n)=>{let s=!1;const t=d.map(o=>{var i;if(o.id===e)return s=!0,{...o,...n};if((i=o.children)!=null&&i.length){const l=z(o.children,e,n);return l===o.children?o:(s=!0,{...o,children:l})}return o});return s?t:d},L=(d,e)=>d.filter(n=>n.id!==e).map(n=>{var t;if(!((t=n.children)!=null&&t.length))return n;const s=L(n.children,e);return s===n.children?n:{...n,children:s}}),Oe=(d,e)=>e.reduce((n,s)=>L(n,s),d),je=(d,e,n={})=>{const s=y(d,e);if(!s)return d;const t=L(d,e);return $(t,s,n)},M=(d,e,n)=>{var t;const s=d.findIndex(o=>o.id===e);if(s!==-1)return{parentId:n,index:s};for(const o of d)if((t=o.children)!=null&&t.length){const i=M(o.children,e,o.id);if(i)return i}},Ue=(d,e,n)=>{var t;if(e===n)return!0;const s=y(d,e);return(t=s==null?void 0:s.children)!=null&&t.length?!!y(s.children,n):!1},Ee=(d,e,n,s)=>{if(e===n)return d;const t=y(d,e);if(!t||!y(d,n)||Ue(d,e,n))return d;if(s==="inside")return Se(y(d,n))?d:je(d,e,{parentId:n,index:0});const o=L(d,e),i=M(o,n);if(!i)return d;const l=i.index+(s==="after"?1:0);return $(o,t,{parentId:i.parentId,index:l})},Ce=(d,e)=>{var n;return{...d,id:e(),children:(n=d.children)==null?void 0:n.map(s=>Ce(s,e))}},ve=(d,e,n)=>{const s=y(d,e),t=M(d,e);if(!s||!t)return{nodes:d};const o=Ce(s,n);return{nodes:$(d,o,{parentId:t.parentId,index:t.index+1}),newId:o.id}},Se=d=>!!d.hasChildren&&d.children===void 0,$e=d=>{var e;return Se(d)?[]:(e=d.children)!=null&&e.length?d.children.flatMap($e):[d.id]},H=d=>d.reduce((e,n)=>{var o;const s=!!n.hasChildren&&n.children===void 0,t=!!((o=n.children)!=null&&o.length);return(t||s)&&(e.push(n.id),t&&e.push(...H(n.children))),e},[]),Le=(d,e,n,s)=>{const t=y(d,n);if(!t)return e;const o=new Set(e);return $e(t).forEach(i=>s?o.add(i):o.delete(i)),[...o]},J=(d,e,n)=>{let s=!1;const t=d.map(o=>{var i;if(o.id===e)return o.disabled===n?o:(s=!0,{...o,disabled:n});if((i=o.children)!=null&&i.length){const l=J(o.children,e,n);return l===o.children?o:(s=!0,{...o,children:l})}return o});return s?t:d},p=(d,e)=>n=>{Te(d)(n),e(n)},Ke=(d,e)=>{if(d.length!==e.length)return!1;const n=new Set(e);return d.every(s=>n.has(s))},v=(d,e)=>{const n=d.expandedNodeIds;Array.isArray(n)&&Ke(n,e)||(d.expandedNodeIds=[...e])},R=(d,e)=>{e.searchable!==void 0&&(d.searchable=e.searchable),e.toolbar!==void 0&&(d.toolbar=e.toolbar),e.filter!==void 0&&(d.filter=e.filter),e["allow-drag-drop"]!==void 0&&(d.allowDragDrop=e["allow-drag-drop"])},x=(d,e="solid")=>({name:d,variant:e}),k=[{id:"1",label:"Project Files",icon:x("folder_closed"),children:[{id:"1-1",label:"Overview",icon:x("info")},{id:"1-2",label:"Resources",icon:x("folder_closed"),children:[{id:"1-2-1",label:"Specifications",icon:x("info")},{id:"1-2-2",label:"Search Index",icon:x("search")}]},{id:"1-3",label:"Archived",icon:x("alert")}]},{id:"2",label:"Settings",icon:x("settings")},{id:"3",label:"Notifications",icon:x("info")}],dn={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"selection-mode":"single",size:"md"},argTypes:{"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["sm","md","lg"]},bordered:{control:"boolean"},searchable:{control:"boolean"},filter:{control:"text"},toolbar:{description:"Configures the optional toolbar rendered above the tree.",table:{type:{detail:`
            Interface: IContentTreeToolbar
            Properties:
            - expandCollapse (boolean, optional): Show the expand-all / collapse-all toggle button
            - delete (boolean, optional): Show the delete button (enabled only when nodes are checked in multi-select)
          `}}},"allow-drag-drop":{control:"boolean"}}},_={parameters:{docs:{source:{code:ze}}},render:d=>{let e,n="1-1",s=["1"];const t=()=>{e&&(e.nodes=k,e.selectedNodeId=n,v(e,s))},o=p("nodeSelect",l=>{n=l.detail.id,t()}),i=p("nodeExpandChange",l=>{const{id:c,expanded:a}=l.detail;s=a?[...s,c]:s.filter(m=>m!==c),t()});return C`
    <modus-wc-content-tree
      ${w(l=>{e=l??void 0,t()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${o}
      @nodeExpandChange=${i}
    ></modus-wc-content-tree>`}},He={nodes:[],selectedNodeId:void 0,expandedNodeIds:[],editingNodeId:void 0,freshIds:new Set,idCounter:0},F={args:{searchable:!0,toolbar:{expandCollapse:!0}},parameters:{docs:{source:{code:Ve}}},render:d=>{let e,n,s;const t=He,o=()=>`new-${Date.now()}-${t.idCounter++}`,i=()=>{const h=t.nodes.length===0;n==null||n.classList.toggle("is-empty",h),s&&(s.hidden=!h),e&&(e.nodes=t.nodes,e.selectedNodeId=t.selectedNodeId,v(e,t.expandedNodeIds),e.editingNodeId=t.editingNodeId,R(e,d))},l=(h,r)=>{t.editingNodeId=h,r&&t.freshIds.add(h),i()},c=()=>{const h=o();t.nodes=[{id:h,label:"",icon:x("folder_closed")}],t.selectedNodeId=h,l(h,!0)},a=p("nodeSelect",h=>{t.selectedNodeId=h.detail.id,i()}),m=p("nodeExpandChange",h=>{const{id:r,expanded:u}=h.detail;t.expandedNodeIds=u?[...new Set([...t.expandedNodeIds,r])]:t.expandedNodeIds.filter(N=>N!==r),i()}),I=p("expandAllChange",h=>{t.expandedNodeIds=h.detail.expanded?H(t.nodes):[],i()}),g=p("nodeEdit",h=>{l(h.detail.id,!1)}),b=p("nodeDuplicate",h=>{const r=ve(t.nodes,h.detail.id,o);t.nodes=r.nodes,r.newId?l(r.newId,!1):i()}),D=p("nodeAdd",h=>{const{referenceId:r,position:u}=h.detail,N=o(),A={id:N,label:""};if(u==="child")t.nodes=$(t.nodes,A,{parentId:r}),t.expandedNodeIds.includes(r)||(t.expandedNodeIds=[...t.expandedNodeIds,r]);else{const E=M(t.nodes,r),S=((E==null?void 0:E.index)??0)+(u==="below"?1:0);t.nodes=$(t.nodes,A,{parentId:E==null?void 0:E.parentId,index:S})}l(N,!0)}),T=p("nodeDelete",h=>{var r;t.nodes=L(t.nodes,h.detail.id),t.freshIds.delete(h.detail.id),y(t.nodes,t.selectedNodeId??"")||(t.selectedNodeId=(r=t.nodes[0])==null?void 0:r.id),i()}),W=p("nodeRename",h=>{const{id:r,label:u}=h.detail;t.nodes=z(t.nodes,r,{label:u||"Untitled"}),t.freshIds.delete(r),t.editingNodeId=void 0,i()}),q=p("nodeEditCancel",h=>{var u;const{id:r}=h.detail;t.freshIds.has(r)&&(t.nodes=L(t.nodes,r)),t.freshIds.delete(r),t.editingNodeId=void 0,y(t.nodes,t.selectedNodeId??"")||(t.selectedNodeId=(u=t.nodes[0])==null?void 0:u.id),i()}),G=p("nodeVisibilityChange",h=>{const{id:r,disabled:u}=h.detail;t.nodes=J(t.nodes,r,u),i()});return C`
    <style>
      .modus-wc-content-tree-empty-story {
        background-color: var(--modus-wc-color-base-page);
        display: flex;
        flex-direction: column;
        min-height: 24rem;
        width: 18rem;
      }

      .modus-wc-content-tree-empty-story.is-empty modus-wc-content-tree > modus-wc-tree-menu {
        display: none;
      }

      .modus-wc-content-tree-empty-story.is-empty modus-wc-content-tree {
        flex: 0 0 auto;
      }

      .modus-wc-content-tree-empty-story.is-empty .modus-wc-content-tree-empty-story-panel {
        align-items: center;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        gap: var(--modus-wc-spacing-md);
        justify-content: center;
        padding: var(--modus-wc-spacing-lg);
      }

      .modus-wc-content-tree-empty-story:not(.is-empty) .modus-wc-content-tree-empty-story-panel {
        display: none;
      }

      .modus-wc-content-tree-empty-story-icon {
        color: var(--modus-wc-color-base-content-low-contrast);
        font-size: 4rem;
        line-height: 1;
        opacity: 0.6;
      }

      .modus-wc-content-tree-empty-story-title {
        color: var(--modus-wc-color-base-content-low-contrast);
        margin: 0;
        text-align: center;
      }
    </style>
    <div
      class="modus-wc-content-tree-empty-story is-empty"
      ${w(h=>{n=h??void 0,i()})}
    >
      <modus-wc-content-tree
        ${w(h=>{e=h??void 0,i()})}
        aria-label="Content tree"
        ?bordered=${d.bordered}
        custom-class=${f(d["custom-class"])}
        selection-mode=${f(d["selection-mode"])}
        size=${f(d.size)}
        @nodeSelect=${a}
        @nodeExpandChange=${m}
        @expandAllChange=${I}
        @nodeEdit=${g}
        @nodeDuplicate=${b}
        @nodeAdd=${D}
        @nodeDelete=${T}
        @nodeRename=${W}
        @nodeEditCancel=${q}
        @nodeVisibilityChange=${G}
      ></modus-wc-content-tree>
      <div
        class="modus-wc-content-tree-empty-story-panel"
        ${w(h=>{s=h??void 0,i()})}
      >
        <modus-wc-icon
          custom-class="modus-wc-content-tree-empty-story-icon"
          decorative
          name="box_select"
          size="lg"
        ></modus-wc-icon>
        <modus-wc-typography
          custom-class="modus-wc-content-tree-empty-story-title"
          hierarchy="p"
          label="Empty content tree"
          size="lg"
        ></modus-wc-typography>
        <modus-wc-button
          color="primary"
          size="sm"
          variant="filled"
          @buttonClick=${c}
        >
          <modus-wc-icon decorative name="add" size="xs"></modus-wc-icon>
          Create node
        </modus-wc-button>
      </div>
    </div>`}},P={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:Me}}},render:d=>{let e,n="1-1",s=["1","1-2"],t=["1-2-1"];const o=()=>{e&&(e.nodes=k,e.selectedNodeId=n,v(e,s),e.checkedNodeIds=[...t])},i=p("nodeSelect",a=>{n=a.detail.id,o()}),l=p("nodeExpandChange",a=>{const{id:m,expanded:I}=a.detail;s=I?[...s,m]:s.filter(g=>g!==m),o()}),c=p("nodeCheckChange",a=>{const{id:m,checked:I}=a.detail;t=Le(k,t,m,I),o()});return C`
    <modus-wc-content-tree
      ${w(a=>{e=a??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${i}
      @nodeExpandChange=${l}
      @nodeCheckChange=${c}
    ></modus-wc-content-tree>`}},B={args:{"selection-mode":"multiple",searchable:!0,toolbar:{expandCollapse:!0,delete:!0}},parameters:{docs:{source:{code:Be}}},render:d=>{let e,n=structuredClone(k),s="1-1",t=["1","1-2"],o=["1-2-1"];const i=()=>{e&&(e.nodes=n,e.selectedNodeId=s,v(e,t),e.checkedNodeIds=[...o],R(e,d))},l=p("nodeSelect",g=>{s=g.detail.id,i()}),c=p("nodeExpandChange",g=>{const{id:b,expanded:D}=g.detail;t=D?[...new Set([...t,b])]:t.filter(T=>T!==b),i()}),a=p("nodeCheckChange",g=>{const{id:b,checked:D}=g.detail;o=Le(n,o,b,D),i()}),m=p("expandAllChange",g=>{t=g.detail.expanded?H(n):[],i()}),I=p("nodesDelete",g=>{n=Oe(n,g.detail.ids),o=o.filter(b=>!!y(n,b)),i()});return C`
    <modus-wc-content-tree
      ${w(g=>{e=g??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${l}
      @nodeExpandChange=${c}
      @nodeCheckChange=${a}
      @expandAllChange=${m}
      @nodesDelete=${I}
    ></modus-wc-content-tree>`}},V={args:{searchable:!0,toolbar:{expandCollapse:!0}},parameters:{docs:{source:{code:Re}}},render:d=>{let e,n="1-2-2",s=["1","1-2"];const t=()=>{e&&(e.nodes=k,e.selectedNodeId=n,v(e,s),R(e,d))},o=p("nodeSelect",c=>{n=c.detail.id,t()}),i=p("nodeExpandChange",c=>{const{id:a,expanded:m}=c.detail;s=m?[...new Set([...s,a])]:s.filter(I=>I!==a),t()}),l=p("expandAllChange",c=>{s=c.detail.expanded?H(k):[],t()});return C`
    <modus-wc-content-tree
      ${w(c=>{e=c??void 0,t()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${o}
      @nodeExpandChange=${i}
      @expandAllChange=${l}
    ></modus-wc-content-tree>`}},O={parameters:{docs:{source:{code:_e}}},render:d=>{let e,n=structuredClone(k),s="1-1",t=["1","1-2"],o;const i=new Set;let l=0;const c=()=>`new-${Date.now()}-${l++}`,a=()=>{e&&(e.nodes=n,e.selectedNodeId=s,v(e,t),e.editingNodeId=o)},m=(r,u)=>{o=r,u&&i.add(r),a()},I=p("nodeSelect",r=>{s=r.detail.id,a()}),g=p("nodeExpandChange",r=>{const{id:u,expanded:N}=r.detail;t=N?[...t,u]:t.filter(A=>A!==u),a()}),b=p("nodeEdit",r=>{m(r.detail.id,!1)}),D=p("nodeDuplicate",r=>{const u=ve(n,r.detail.id,c);n=u.nodes,u.newId?m(u.newId,!1):a()}),T=p("nodeAdd",r=>{const{referenceId:u,position:N}=r.detail,A=c(),E={id:A,label:""};if(N==="child")n=$(n,E,{parentId:u}),t.includes(u)||(t=[...t,u]);else{const S=M(n,u),Ae=((S==null?void 0:S.index)??0)+(N==="below"?1:0);n=$(n,E,{parentId:S==null?void 0:S.parentId,index:Ae})}m(A,!0)}),W=p("nodeDelete",r=>{n=L(n,r.detail.id),i.delete(r.detail.id),a()}),q=p("nodeRename",r=>{const{id:u,label:N}=r.detail;n=z(n,u,{label:N||"Untitled"}),i.delete(u),o=void 0,a()}),G=p("nodeEditCancel",r=>{const{id:u}=r.detail;i.has(u)&&(n=L(n,u)),i.delete(u),o=void 0,a()}),h=p("nodeVisibilityChange",r=>{const{id:u,disabled:N}=r.detail;n=J(n,u,N),a()});return C`
    <modus-wc-content-tree
      ${w(r=>{e=r??void 0,a()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${I}
      @nodeExpandChange=${g}
      @nodeEdit=${b}
      @nodeDuplicate=${D}
      @nodeAdd=${T}
      @nodeDelete=${W}
      @nodeRename=${q}
      @nodeEditCancel=${G}
      @nodeVisibilityChange=${h}
    ></modus-wc-content-tree>`}},j={args:{"allow-drag-drop":!0},parameters:{docs:{description:{story:`
Keyboard reordering uses the same drop rules as pointer drag.

1. Tab to a row's reorder handle.
2. Press Space or Enter to grab. The row fades and a drop indicator appears.
3. Arrow Up and Arrow Down move the indicator. Arrow Right nests into the target (or into an expanded folder's first child). Arrow Left promotes the preview one level.
4. Press Space or Enter to drop. The tree emits \`nodeMove\`.
5. Press Escape to cancel, or Tab to cancel and move focus on.
        `},source:{code:Fe}}},render:d=>{let e,n=structuredClone(k),s="1-1",t=["1","1-2"];const o=()=>{e&&(e.nodes=n,e.selectedNodeId=s,v(e,t),R(e,d))},i=p("nodeSelect",a=>{s=a.detail.id,o()}),l=p("nodeExpandChange",a=>{const{id:m,expanded:I}=a.detail;t=I?[...new Set([...t,m])]:t.filter(g=>g!==m),o()}),c=p("nodeMove",a=>{const{id:m,targetId:I,position:g}=a.detail;n=Ee(n,m,I,g),g==="inside"&&!t.includes(I)&&(t=[...t,I]),o()});return C`
    <modus-wc-content-tree
      ${w(a=>{e=a??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${i}
      @nodeExpandChange=${l}
      @nodeMove=${c}
    ></modus-wc-content-tree>`}},ke=()=>[{id:"documents",label:"Documents",icon:x("folder_closed"),hasChildren:!0},{id:"media",label:"Media",icon:x("folder_closed"),hasChildren:!0},{id:"empty",label:"Empty Folder",icon:x("folder_closed"),hasChildren:!0},{id:"readme",label:"Read Me",icon:x("info")}],We={nodes:ke(),selectedNodeId:"readme",expandedNodeIds:[],pendingLoadIds:new Set},De=d=>d==="empty"?[]:[{id:`${d}-1`,label:"First item",icon:x("info")},{id:`${d}-2`,label:"Subfolder",icon:x("folder_closed"),hasChildren:!0},{id:`${d}-3`,label:"Last item",icon:x("info")}],U={parameters:{docs:{source:{code:Pe}}},render:d=>{let e;const n=We,s=()=>{e&&(e.nodes=n.nodes,e.selectedNodeId=n.selectedNodeId,v(e,n.expandedNodeIds))},t=p("nodeSelect",l=>{n.selectedNodeId=l.detail.id,s()}),o=p("nodeExpandChange",l=>{const{id:c,expanded:a}=l.detail;n.expandedNodeIds=a?[...new Set([...n.expandedNodeIds,c])]:n.expandedNodeIds.filter(m=>m!==c),s()}),i=p("nodeLoadChildren",l=>{const{id:c}=l.detail;n.pendingLoadIds.has(c)||(n.pendingLoadIds.add(c),window.setTimeout(()=>{n.nodes=z(n.nodes,c,{children:De(c)}),n.pendingLoadIds.delete(c),s()},1200))});return C`
    <modus-wc-content-tree
      ${w(l=>{if(!l){e=void 0;return}const c=l;e!==c&&(e=c,s())})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${t}
      @nodeExpandChange=${o}
      @nodeLoadChildren=${i}
    ></modus-wc-content-tree>`}},qe={nodes:ke(),selectedNodeId:"readme",expandedNodeIds:[],pendingLoadIds:new Set},K={args:{"allow-drag-drop":!0},parameters:{docs:{description:{story:'\nFolders whose children have not loaded yet (`hasChildren: true`, no `children`) can be reordered around but not nested into. Nesting would give the folder a `children` array with only the dropped node, so its real children would never load.\n\n1. Leave **Documents** collapsed and grab **Read Me** (pointer or keyboard).\n2. Over **Documents**, only the before/after indicators appear. Keyboard never announces "Nesting inside Documents".\n3. Expand **Documents**: `nodeLoadChildren` fires and its children load. Once loaded, nesting into it works.\n\nThe story applies `moveNodeRelative` on `nodeMove` the same way as **Drag and drop**.\n        '}}},render:d=>{let e;const n=qe,s=()=>{e&&(e.nodes=n.nodes,e.selectedNodeId=n.selectedNodeId,v(e,n.expandedNodeIds),R(e,d))},t=p("nodeSelect",c=>{n.selectedNodeId=c.detail.id,s()}),o=p("nodeExpandChange",c=>{const{id:a,expanded:m}=c.detail;n.expandedNodeIds=m?[...new Set([...n.expandedNodeIds,a])]:n.expandedNodeIds.filter(I=>I!==a),s()}),i=p("nodeLoadChildren",c=>{const{id:a}=c.detail;n.pendingLoadIds.has(a)||(n.pendingLoadIds.add(a),window.setTimeout(()=>{n.nodes=z(n.nodes,a,{children:De(a)}),n.pendingLoadIds.delete(a),s()},1200))}),l=p("nodeMove",c=>{const{id:a,targetId:m,position:I}=c.detail;n.nodes=Ee(n.nodes,a,m,I),I==="inside"&&!n.expandedNodeIds.includes(m)&&(n.expandedNodeIds=[...n.expandedNodeIds,m]),s()});return C`
    <modus-wc-content-tree
      ${w(c=>{if(!c){e=void 0;return}const a=c;e!==a&&(e=a,s())})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${t}
      @nodeExpandChange=${o}
      @nodeLoadChildren=${i}
      @nodeMove=${l}
    ></modus-wc-content-tree>`}};var Q,X,Y;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...expandedNodeIds, id] : expandedNodeIds.filter(x => x !== id);
      sync();
    });

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
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    searchable: true,
    toolbar: {
      expandCollapse: true
    }
  },
  parameters: {
    docs: {
      source: {
        code: contentTreeBuildSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    let shellEl: HTMLElement | undefined;
    let emptyPanelEl: HTMLElement | undefined;
    const state = buildTreeStoryState;
    const makeId = () => \`new-\${Date.now()}-\${state.idCounter++}\`;
    const sync = () => {
      const isEmpty = state.nodes.length === 0;
      shellEl?.classList.toggle('is-empty', isEmpty);
      if (emptyPanelEl) emptyPanelEl.hidden = !isEmpty;
      if (!treeEl) return;
      treeEl.nodes = state.nodes;
      treeEl.selectedNodeId = state.selectedNodeId;
      syncExpandedNodeIds(treeEl, state.expandedNodeIds);
      treeEl.editingNodeId = state.editingNodeId;
      applyControlArgs(treeEl, args);
    };
    const startEditing = (id: string, fresh: boolean) => {
      state.editingNodeId = id;
      if (fresh) state.freshIds.add(id);
      sync();
    };
    const createFirstNode = () => {
      const newId = makeId();
      state.nodes = [{
        id: newId,
        label: '',
        icon: treeIcon('folder_closed')
      }];
      state.selectedNodeId = newId;
      startEditing(newId, true);
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      state.selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      state.expandedNodeIds = expanded ? [...new Set([...state.expandedNodeIds, id])] : state.expandedNodeIds.filter(x => x !== id);
      sync();
    });
    const handleExpandAll = withStoryAction('expandAllChange', (e: CustomEvent<{
      expanded: boolean;
    }>) => {
      state.expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(state.nodes) : [];
      sync();
    });
    const handleEdit = withStoryAction('nodeEdit', (e: CustomEvent<{
      id: string;
    }>) => {
      startEditing(e.detail.id, false);
    });
    const handleDuplicate = withStoryAction('nodeDuplicate', (e: CustomEvent<{
      id: string;
    }>) => {
      const result = duplicateNode(state.nodes, e.detail.id, makeId);
      state.nodes = result.nodes;
      if (result.newId) startEditing(result.newId, false);else sync();
    });
    const handleAdd = withStoryAction('nodeAdd', (e: CustomEvent<{
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
        state.nodes = addNode(state.nodes, newNode, {
          parentId: referenceId
        });
        if (!state.expandedNodeIds.includes(referenceId)) {
          state.expandedNodeIds = [...state.expandedNodeIds, referenceId];
        }
      } else {
        const loc = getNodeLocation(state.nodes, referenceId);
        const index = (loc?.index ?? 0) + (position === 'below' ? 1 : 0);
        state.nodes = addNode(state.nodes, newNode, {
          parentId: loc?.parentId,
          index
        });
      }
      startEditing(newId, true);
    });
    const handleDelete = withStoryAction('nodeDelete', (e: CustomEvent<{
      id: string;
    }>) => {
      state.nodes = deleteNode(state.nodes, e.detail.id);
      state.freshIds.delete(e.detail.id);
      if (!findNode(state.nodes, state.selectedNodeId ?? '')) {
        state.selectedNodeId = state.nodes[0]?.id;
      }
      sync();
    });
    const handleRename = withStoryAction('nodeRename', (e: CustomEvent<{
      id: string;
      label: string;
    }>) => {
      const {
        id,
        label
      } = e.detail;
      state.nodes = updateNode(state.nodes, id, {
        label: label || 'Untitled'
      });
      state.freshIds.delete(id);
      state.editingNodeId = undefined;
      sync();
    });
    const handleEditCancel = withStoryAction('nodeEditCancel', (e: CustomEvent<{
      id: string;
    }>) => {
      const {
        id
      } = e.detail;
      if (state.freshIds.has(id)) state.nodes = deleteNode(state.nodes, id);
      state.freshIds.delete(id);
      state.editingNodeId = undefined;
      if (!findNode(state.nodes, state.selectedNodeId ?? '')) {
        state.selectedNodeId = state.nodes[0]?.id;
      }
      sync();
    });
    const handleVisibilityChange = withStoryAction('nodeVisibilityChange', (e: CustomEvent<{
      id: string;
      disabled: boolean;
    }>) => {
      const {
        id,
        disabled
      } = e.detail;
      state.nodes = setNodeDisabled(state.nodes, id, disabled);
      sync();
    });

    // prettier-ignore
    return html\`
    <style>
      .modus-wc-content-tree-empty-story {
        background-color: var(--modus-wc-color-base-page);
        display: flex;
        flex-direction: column;
        min-height: 24rem;
        width: 18rem;
      }

      .modus-wc-content-tree-empty-story.is-empty modus-wc-content-tree > modus-wc-tree-menu {
        display: none;
      }

      .modus-wc-content-tree-empty-story.is-empty modus-wc-content-tree {
        flex: 0 0 auto;
      }

      .modus-wc-content-tree-empty-story.is-empty .modus-wc-content-tree-empty-story-panel {
        align-items: center;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        gap: var(--modus-wc-spacing-md);
        justify-content: center;
        padding: var(--modus-wc-spacing-lg);
      }

      .modus-wc-content-tree-empty-story:not(.is-empty) .modus-wc-content-tree-empty-story-panel {
        display: none;
      }

      .modus-wc-content-tree-empty-story-icon {
        color: var(--modus-wc-color-base-content-low-contrast);
        font-size: 4rem;
        line-height: 1;
        opacity: 0.6;
      }

      .modus-wc-content-tree-empty-story-title {
        color: var(--modus-wc-color-base-content-low-contrast);
        margin: 0;
        text-align: center;
      }
    </style>
    <div
      class="modus-wc-content-tree-empty-story is-empty"
      \${ref(el => {
      shellEl = el as HTMLElement | undefined ?? undefined;
      sync();
    })}
    >
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
        @expandAllChange=\${handleExpandAll}
        @nodeEdit=\${handleEdit}
        @nodeDuplicate=\${handleDuplicate}
        @nodeAdd=\${handleAdd}
        @nodeDelete=\${handleDelete}
        @nodeRename=\${handleRename}
        @nodeEditCancel=\${handleEditCancel}
        @nodeVisibilityChange=\${handleVisibilityChange}
      ></modus-wc-content-tree>
      <div
        class="modus-wc-content-tree-empty-story-panel"
        \${ref(el => {
      emptyPanelEl = el as HTMLElement | undefined ?? undefined;
      sync();
    })}
      >
        <modus-wc-icon
          custom-class="modus-wc-content-tree-empty-story-icon"
          decorative
          name="box_select"
          size="lg"
        ></modus-wc-icon>
        <modus-wc-typography
          custom-class="modus-wc-content-tree-empty-story-title"
          hierarchy="p"
          label="Empty content tree"
          size="lg"
        ></modus-wc-typography>
        <modus-wc-button
          color="primary"
          size="sm"
          variant="filled"
          @buttonClick=\${createFirstNode}
        >
          <modus-wc-icon decorative name="add" size="xs"></modus-wc-icon>
          Create node
        </modus-wc-button>
      </div>
    </div>\`;
  }
}`,...(ne=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var de,te,oe;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      treeEl.checkedNodeIds = [...checkedNodeIds];
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...expandedNodeIds, id] : expandedNodeIds.filter(x => x !== id);
      sync();
    });
    const handleCheckChange = withStoryAction('nodeCheckChange', (e: CustomEvent<{
      id: string;
      checked: boolean;
    }>) => {
      const {
        id,
        checked
      } = e.detail;
      checkedNodeIds = setNodeChecked(sampleNodes, checkedNodeIds, id, checked);
      sync();
    });

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
}`,...(oe=(te=P.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ie,ae;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    'selection-mode': 'multiple',
    searchable: true,
    toolbar: {
      expandCollapse: true,
      delete: true
    }
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      treeEl.checkedNodeIds = [...checkedNodeIds];
      applyControlArgs(treeEl, args);
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...new Set([...expandedNodeIds, id])] : expandedNodeIds.filter(x => x !== id);
      sync();
    });
    const handleCheckChange = withStoryAction('nodeCheckChange', (e: CustomEvent<{
      id: string;
      checked: boolean;
    }>) => {
      const {
        id,
        checked
      } = e.detail;
      checkedNodeIds = setNodeChecked(nodes, checkedNodeIds, id, checked);
      sync();
    });

    // Expand-all / collapse-all: set every expandable id, or clear to collapse.
    const handleExpandAll = withStoryAction('expandAllChange', (e: CustomEvent<{
      expanded: boolean;
    }>) => {
      expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(nodes) : [];
      sync();
    });

    // Bulk delete: remove the checked branches, then drop any now-missing ids
    // from the checked set so the selection stays consistent.
    const handleNodesDelete = withStoryAction('nodesDelete', (e: CustomEvent<{
      ids: string[];
    }>) => {
      nodes = deleteNodes(nodes, e.detail.ids);
      checkedNodeIds = checkedNodeIds.filter(id => !!findNode(nodes, id));
      sync();
    });

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
      @expandAllChange=\${handleExpandAll}
      @nodesDelete=\${handleNodesDelete}
    ></modus-wc-content-tree>\`;
  }
}`,...(ae=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var re,le,ce;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    searchable: true,
    toolbar: {
      expandCollapse: true
    }
  },
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      applyControlArgs(treeEl, args);
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...new Set([...expandedNodeIds, id])] : expandedNodeIds.filter(x => x !== id);
      sync();
    });

    // The toolbar's single expand/collapse-all toggle emits \`expandAllChange\`;
    // the app applies it to its own expansion state.
    const handleExpandAll = withStoryAction('expandAllChange', (e: CustomEvent<{
      expanded: boolean;
    }>) => {
      expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(sampleNodes) : [];
      sync();
    });

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
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @expandAllChange=\${handleExpandAll}
    ></modus-wc-content-tree>\`;
  }
}`,...(ce=(le=V.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,he,ue;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      treeEl.editingNodeId = editingNodeId;
    };
    const startEditing = (id: string, fresh: boolean) => {
      editingNodeId = id;
      if (fresh) freshIds.add(id);
      sync();
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...expandedNodeIds, id] : expandedNodeIds.filter(x => x !== id);
      sync();
    });
    const handleEdit = withStoryAction('nodeEdit', (e: CustomEvent<{
      id: string;
    }>) => {
      startEditing(e.detail.id, false);
    });
    const handleDuplicate = withStoryAction('nodeDuplicate', (e: CustomEvent<{
      id: string;
    }>) => {
      const result = duplicateNode(nodes, e.detail.id, makeId);
      nodes = result.nodes;
      if (result.newId) startEditing(result.newId, false);else sync();
    });
    const handleAdd = withStoryAction('nodeAdd', (e: CustomEvent<{
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
    });
    const handleDelete = withStoryAction('nodeDelete', (e: CustomEvent<{
      id: string;
    }>) => {
      nodes = deleteNode(nodes, e.detail.id);
      freshIds.delete(e.detail.id);
      sync();
    });
    const handleRename = withStoryAction('nodeRename', (e: CustomEvent<{
      id: string;
      label: string;
    }>) => {
      const {
        id,
        label
      } = e.detail;
      nodes = updateNode(nodes, id, {
        label: label || 'Untitled'
      });
      freshIds.delete(id);
      editingNodeId = undefined;
      sync();
    });
    const handleEditCancel = withStoryAction('nodeEditCancel', (e: CustomEvent<{
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
    });

    // The eye toggle flips the node's OWN lock state; a locked parent disables
    // its subtree via the component's effective-disabled inheritance, while each
    // node keeps its own state (so unlocking a parent restores the children).
    const handleVisibilityChange = withStoryAction('nodeVisibilityChange', (e: CustomEvent<{
      id: string;
      disabled: boolean;
    }>) => {
      const {
        id,
        disabled
      } = e.detail;
      nodes = setNodeDisabled(nodes, id, disabled);
      sync();
    });

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
      @nodeVisibilityChange=\${handleVisibilityChange}
    ></modus-wc-content-tree>\`;
  }
}`,...(ue=(he=O.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var me,fe,Ie;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    'allow-drag-drop': true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Keyboard reordering uses the same drop rules as pointer drag.

1. Tab to a row's reorder handle.
2. Press Space or Enter to grab. The row fades and a drop indicator appears.
3. Arrow Up and Arrow Down move the indicator. Arrow Right nests into the target (or into an expanded folder's first child). Arrow Left promotes the preview one level.
4. Press Space or Enter to drop. The tree emits \\\`nodeMove\\\`.
5. Press Escape to cancel, or Tab to cancel and move focus on.
        \`
      },
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
      syncExpandedNodeIds(treeEl, expandedNodeIds);
      applyControlArgs(treeEl, args);
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      expandedNodeIds = expanded ? [...new Set([...expandedNodeIds, id])] : expandedNodeIds.filter(x => x !== id);
      sync();
    });

    // Apply the move to the app-owned data, then keep a reparented target open
    // so the moved node is visible inside it.
    const handleMove = withStoryAction('nodeMove', (e: CustomEvent<{
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
    });

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
      @nodeMove=\${handleMove}
    ></modus-wc-content-tree>\`;
  }
}`,...(Ie=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var ge,xe,Ne;U.parameters={...U.parameters,docs:{...(ge=U.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: contentTreeLazyLoadingSourceCode
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    const state = lazyLoadingStoryState;
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = state.nodes;
      treeEl.selectedNodeId = state.selectedNodeId;
      syncExpandedNodeIds(treeEl, state.expandedNodeIds);
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      state.selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      state.expandedNodeIds = expanded ? [...new Set([...state.expandedNodeIds, id])] : state.expandedNodeIds.filter(x => x !== id);
      sync();
    });

    // Fetch children on first expand, with a deliberate delay so the spinner is
    // visible. Assigning \`children\` (even \`[]\`) ends the loading state.
    const handleLoadChildren = withStoryAction('nodeLoadChildren', (e: CustomEvent<{
      id: string;
    }>) => {
      const {
        id
      } = e.detail;
      if (state.pendingLoadIds.has(id)) return;
      state.pendingLoadIds.add(id);
      window.setTimeout(() => {
        state.nodes = updateNode(state.nodes, id, {
          children: lazyLoadChildren(id)
        });
        state.pendingLoadIds.delete(id);
        sync();
      }, 1200);
    });

    // prettier-ignore
    return html\`
    <modus-wc-content-tree
      \${ref(el => {
      if (!el) {
        treeEl = undefined;
        return;
      }
      const next = el as ContentTreeElement;
      if (treeEl !== next) {
        treeEl = next;
        sync();
      }
    })}
      aria-label="Content tree"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      selection-mode=\${ifDefined(args['selection-mode'])}
      size=\${ifDefined(args.size)}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeLoadChildren=\${handleLoadChildren}
    ></modus-wc-content-tree>\`;
  }
}`,...(Ne=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source}}};var ye,we,be;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    'allow-drag-drop': true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Folders whose children have not loaded yet (\\\`hasChildren: true\\\`, no \\\`children\\\`) can be reordered around but not nested into. Nesting would give the folder a \\\`children\\\` array with only the dropped node, so its real children would never load.

1. Leave **Documents** collapsed and grab **Read Me** (pointer or keyboard).
2. Over **Documents**, only the before/after indicators appear. Keyboard never announces "Nesting inside Documents".
3. Expand **Documents**: \\\`nodeLoadChildren\\\` fires and its children load. Once loaded, nesting into it works.

The story applies \\\`moveNodeRelative\\\` on \\\`nodeMove\\\` the same way as **Drag and drop**.
        \`
      }
    }
  },
  render: args => {
    let treeEl: ContentTreeElement | undefined;
    const state = lazyDragInsideStoryState;
    const sync = () => {
      if (!treeEl) return;
      treeEl.nodes = state.nodes;
      treeEl.selectedNodeId = state.selectedNodeId;
      syncExpandedNodeIds(treeEl, state.expandedNodeIds);
      applyControlArgs(treeEl, args);
    };
    const handleSelect = withStoryAction('nodeSelect', (e: CustomEvent<{
      id: string;
    }>) => {
      state.selectedNodeId = e.detail.id;
      sync();
    });
    const handleExpandChange = withStoryAction('nodeExpandChange', (e: CustomEvent<{
      id: string;
      expanded: boolean;
    }>) => {
      const {
        id,
        expanded
      } = e.detail;
      state.expandedNodeIds = expanded ? [...new Set([...state.expandedNodeIds, id])] : state.expandedNodeIds.filter(x => x !== id);
      sync();
    });
    const handleLoadChildren = withStoryAction('nodeLoadChildren', (e: CustomEvent<{
      id: string;
    }>) => {
      const {
        id
      } = e.detail;
      if (state.pendingLoadIds.has(id)) return;
      state.pendingLoadIds.add(id);
      window.setTimeout(() => {
        state.nodes = updateNode(state.nodes, id, {
          children: lazyLoadChildren(id)
        });
        state.pendingLoadIds.delete(id);
        sync();
      }, 1200);
    });
    const handleMove = withStoryAction('nodeMove', (e: CustomEvent<{
      id: string;
      targetId: string;
      position: 'before' | 'after' | 'inside';
    }>) => {
      const {
        id,
        targetId,
        position
      } = e.detail;
      state.nodes = moveNodeRelative(state.nodes, id, targetId, position);
      if (position === 'inside' && !state.expandedNodeIds.includes(targetId)) {
        state.expandedNodeIds = [...state.expandedNodeIds, targetId];
      }
      sync();
    });

    // prettier-ignore
    return html\`
    <modus-wc-content-tree
      \${ref(el => {
      if (!el) {
        treeEl = undefined;
        return;
      }
      const next = el as ContentTreeElement;
      if (treeEl !== next) {
        treeEl = next;
        sync();
      }
    })}
      aria-label="Content tree"
      ?bordered=\${args.bordered}
      custom-class=\${ifDefined(args['custom-class'])}
      selection-mode=\${ifDefined(args['selection-mode'])}
      size=\${ifDefined(args.size)}
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeLoadChildren=\${handleLoadChildren}
      @nodeMove=\${handleMove}
    ></modus-wc-content-tree>\`;
  }
}`,...(be=(we=K.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};const tn=["Default","BuildTree","MultiSelect","Toolbar","SearchFilter","TransactionalMenu","DragAndDrop","LazyLoading","LazyLoadingDragDropInside"];export{F as BuildTree,_ as Default,j as DragAndDrop,U as LazyLoading,K as LazyLoadingDragDropInside,P as MultiSelect,V as SearchFilter,B as Toolbar,O as TransactionalMenu,tn as __namedExportsOrder,dn as default};
