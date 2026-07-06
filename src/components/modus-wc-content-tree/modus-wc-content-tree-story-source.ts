export const contentTreeDefaultSourceCode = `
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
</script>
`;

export const contentTreeMultiSelectSourceCode = `
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
</script>
`;

export const contentTreeSearchFilterSourceCode = `
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
</script>
`;

export const contentTreeTransactionalMenuSourceCode = `
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
</script>
`;

export const contentTreeDragAndDropSourceCode = `
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
</script>
`;

export const contentTreeLazyLoadingSourceCode = `
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
</script>
`;

export const contentTreeToolbarSourceCode = `
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
</script>
`;
