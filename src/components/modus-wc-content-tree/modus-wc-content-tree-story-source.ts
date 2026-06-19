export const contentTreeDefaultSourceCode = `
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
</script>
`;

export const contentTreeMultiSelectSourceCode = `
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
</script>
`;

export const contentTreeSearchFilterSourceCode = `
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
</script>
`;

export const contentTreeTransactionalMenuSourceCode = `
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
</script>
`;
