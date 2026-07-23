export const contentTreeDefaultSourceCode = `
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
</script>
`;

export const contentTreeSearchFilterSourceCode = `
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
</script>
`;

export const contentTreeDragAndDropSourceCode = `
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
</script>
`;

export const contentTreeLazyLoadingSourceCode = `
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
</script>
`;

export const contentTreeToolbarSourceCode = `
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
</script>
`;

export const contentTreeEmptySourceCode = `
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
</script>
`;
