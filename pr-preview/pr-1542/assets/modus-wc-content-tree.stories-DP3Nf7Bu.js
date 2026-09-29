import"./index-SE3If525.js";import{b as k}from"./lit-element-DgBvYnzn.js";import{o as f}from"./if-defined-BnVFTJ4o.js";import{n as b}from"./ref-Bw8asrgi.js";import{b as Ce}from"./chunk-4XZ63LWV-C_wAuwg_.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";import"./v4-C6aID195.js";const ve=`
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
`,Se=`
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
`,$e=`
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
`,ke=`
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
`,Le=`
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
`,Ae=`
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
`,De=`
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
`,Te=`
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
`,y=(d,e)=>{var t;for(const s of d){if(s.id===e)return s;if((t=s.children)!=null&&t.length){const n=y(s.children,e);if(n)return n}}},v=(d,e,t={})=>{const{parentId:s,index:n}=t;if(!s){const o=[...d];return o.splice(n??o.length,0,e),o}return d.map(o=>{var i;if(o.id===s){const l=o.children?[...o.children]:[];return l.splice(n??l.length,0,e),{...o,children:l}}if((i=o.children)!=null&&i.length){const l=v(o.children,e,t);return l===o.children?o:{...o,children:l}}return o})},O=(d,e,t)=>{let s=!1;const n=d.map(o=>{var i;if(o.id===e)return s=!0,{...o,...t};if((i=o.children)!=null&&i.length){const l=O(o.children,e,t);return l===o.children?o:(s=!0,{...o,children:l})}return o});return s?n:d},S=(d,e)=>d.filter(t=>t.id!==e).map(t=>{var n;if(!((n=t.children)!=null&&n.length))return t;const s=S(t.children,e);return s===t.children?t:{...t,children:s}}),ze=(d,e)=>e.reduce((t,s)=>S(t,s),d),Me=(d,e,t={})=>{const s=y(d,e);if(!s)return d;const n=S(d,e);return v(n,s,t)},z=(d,e,t)=>{var n;const s=d.findIndex(o=>o.id===e);if(s!==-1)return{parentId:t,index:s};for(const o of d)if((n=o.children)!=null&&n.length){const i=z(o.children,e,o.id);if(i)return i}},Re=(d,e,t)=>{var n;if(e===t)return!0;const s=y(d,e);return(n=s==null?void 0:s.children)!=null&&n.length?!!y(s.children,t):!1},_e=(d,e,t,s)=>{if(e===t)return d;const n=y(d,e);if(!n||!y(d,t)||Re(d,e,t))return d;if(s==="inside")return Me(d,e,{parentId:t,index:0});const o=S(d,e),i=z(o,t);if(!i)return d;const l=i.index+(s==="after"?1:0);return v(o,n,{parentId:i.parentId,index:l})},xe=(d,e)=>{var t;return{...d,id:e(),children:(t=d.children)==null?void 0:t.map(s=>xe(s,e))}},ye=(d,e,t)=>{const s=y(d,e),n=z(d,e);if(!s||!n)return{nodes:d};const o=xe(s,t);return{nodes:v(d,o,{parentId:n.parentId,index:n.index+1}),newId:o.id}},Pe=d=>!!d.hasChildren&&d.children===void 0,we=d=>{var e;return Pe(d)?[]:(e=d.children)!=null&&e.length?d.children.flatMap(we):[d.id]},U=d=>d.reduce((e,t)=>{var o;const s=!!t.hasChildren&&t.children===void 0,n=!!((o=t.children)!=null&&o.length);return(n||s)&&(e.push(t.id),n&&e.push(...U(t.children))),e},[]),be=(d,e,t,s)=>{const n=y(d,t);if(!n)return e;const o=new Set(e);return we(n).forEach(i=>s?o.add(i):o.delete(i)),[...o]},G=(d,e,t)=>{let s=!1;const n=d.map(o=>{var i;if(o.id===e)return o.disabled===t?o:(s=!0,{...o,disabled:t});if((i=o.children)!=null&&i.length){const l=G(o.children,e,t);return l===o.children?o:(s=!0,{...o,children:l})}return o});return s?n:d},c=(d,e)=>t=>{Ce(d)(t),e(t)},Be=(d,e)=>{if(d.length!==e.length)return!1;const t=new Set(e);return d.every(s=>t.has(s))},L=(d,e)=>{const t=d.expandedNodeIds;Array.isArray(t)&&Be(t,e)||(d.expandedNodeIds=[...e])},H=(d,e)=>{e.searchable!==void 0&&(d.searchable=e.searchable),e.toolbar!==void 0&&(d.toolbar=e.toolbar),e.filter!==void 0&&(d.filter=e.filter),e["allow-drag-drop"]!==void 0&&(d.allowDragDrop=e["allow-drag-drop"])},N=(d,e="solid")=>({name:d,variant:e}),$=[{id:"1",label:"Project Files",icon:N("folder_closed"),children:[{id:"1-1",label:"Overview",icon:N("info")},{id:"1-2",label:"Resources",icon:N("folder_closed"),children:[{id:"1-2-1",label:"Specifications",icon:N("info")},{id:"1-2-2",label:"Search Index",icon:N("search")}]},{id:"1-3",label:"Archived",icon:N("alert")}]},{id:"2",label:"Settings",icon:N("settings")},{id:"3",label:"Notifications",icon:N("info")}],Xe={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"selection-mode":"single",size:"md"},argTypes:{"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["sm","md","lg"]},bordered:{control:"boolean"},searchable:{control:"boolean"},filter:{control:"text"},toolbar:{description:"Configures the optional toolbar rendered above the tree.",table:{type:{detail:`
            Interface: IContentTreeToolbar
            Properties:
            - expandCollapse (boolean, optional): Show the expand-all / collapse-all toggle button
            - delete (boolean, optional): Show the delete button (enabled only when nodes are checked in multi-select)
          `}}},"allow-drag-drop":{control:"boolean"}}},M={parameters:{docs:{source:{code:ve}}},render:d=>{let e,t="1-1",s=["1"];const n=()=>{e&&(e.nodes=$,e.selectedNodeId=t,L(e,s))},o=c("nodeSelect",l=>{t=l.detail.id,n()}),i=c("nodeExpandChange",l=>{const{id:u,expanded:p}=l.detail;s=p?[...s,u]:s.filter(m=>m!==u),n()});return k`
    <modus-wc-content-tree
      ${b(l=>{e=l??void 0,n()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${o}
      @nodeExpandChange=${i}
    ></modus-wc-content-tree>`}},Fe={nodes:[],selectedNodeId:void 0,expandedNodeIds:[],editingNodeId:void 0,freshIds:new Set,idCounter:0},R={args:{searchable:!0,toolbar:{expandCollapse:!0}},parameters:{docs:{source:{code:Te}}},render:d=>{let e,t,s;const n=Fe,o=()=>`new-${Date.now()}-${n.idCounter++}`,i=()=>{const r=n.nodes.length===0;t==null||t.classList.toggle("is-empty",r),s&&(s.hidden=!r),e&&(e.nodes=n.nodes,e.selectedNodeId=n.selectedNodeId,L(e,n.expandedNodeIds),e.editingNodeId=n.editingNodeId,H(e,d))},l=(r,a)=>{n.editingNodeId=r,a&&n.freshIds.add(r),i()},u=()=>{const r=o();n.nodes=[{id:r,label:"",icon:N("folder_closed")}],n.selectedNodeId=r,l(r,!0)},p=c("nodeSelect",r=>{n.selectedNodeId=r.detail.id,i()}),m=c("nodeExpandChange",r=>{const{id:a,expanded:h}=r.detail;n.expandedNodeIds=h?[...new Set([...n.expandedNodeIds,a])]:n.expandedNodeIds.filter(x=>x!==a),i()}),g=c("expandAllChange",r=>{n.expandedNodeIds=r.detail.expanded?U(n.nodes):[],i()}),I=c("nodeEdit",r=>{l(r.detail.id,!1)}),w=c("nodeDuplicate",r=>{const a=ye(n.nodes,r.detail.id,o);n.nodes=a.nodes,a.newId?l(a.newId,!1):i()}),A=c("nodeAdd",r=>{const{referenceId:a,position:h}=r.detail,x=o(),D={id:x,label:""};if(h==="child")n.nodes=v(n.nodes,D,{parentId:a}),n.expandedNodeIds.includes(a)||(n.expandedNodeIds=[...n.expandedNodeIds,a]);else{const E=z(n.nodes,a),C=((E==null?void 0:E.index)??0)+(h==="below"?1:0);n.nodes=v(n.nodes,D,{parentId:E==null?void 0:E.parentId,index:C})}l(x,!0)}),T=c("nodeDelete",r=>{var a;n.nodes=S(n.nodes,r.detail.id),n.freshIds.delete(r.detail.id),y(n.nodes,n.selectedNodeId??"")||(n.selectedNodeId=(a=n.nodes[0])==null?void 0:a.id),i()}),K=c("nodeRename",r=>{const{id:a,label:h}=r.detail;n.nodes=O(n.nodes,a,{label:h||"Untitled"}),n.freshIds.delete(a),n.editingNodeId=void 0,i()}),W=c("nodeEditCancel",r=>{var h;const{id:a}=r.detail;n.freshIds.has(a)&&(n.nodes=S(n.nodes,a)),n.freshIds.delete(a),n.editingNodeId=void 0,y(n.nodes,n.selectedNodeId??"")||(n.selectedNodeId=(h=n.nodes[0])==null?void 0:h.id),i()}),q=c("nodeVisibilityChange",r=>{const{id:a,disabled:h}=r.detail;n.nodes=G(n.nodes,a,h),i()});return k`
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
      ${b(r=>{t=r??void 0,i()})}
    >
      <modus-wc-content-tree
        ${b(r=>{e=r??void 0,i()})}
        aria-label="Content tree"
        ?bordered=${d.bordered}
        custom-class=${f(d["custom-class"])}
        selection-mode=${f(d["selection-mode"])}
        size=${f(d.size)}
        @nodeSelect=${p}
        @nodeExpandChange=${m}
        @expandAllChange=${g}
        @nodeEdit=${I}
        @nodeDuplicate=${w}
        @nodeAdd=${A}
        @nodeDelete=${T}
        @nodeRename=${K}
        @nodeEditCancel=${W}
        @nodeVisibilityChange=${q}
      ></modus-wc-content-tree>
      <div
        class="modus-wc-content-tree-empty-story-panel"
        ${b(r=>{s=r??void 0,i()})}
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
          @buttonClick=${u}
        >
          <modus-wc-icon decorative name="add" size="xs"></modus-wc-icon>
          Create node
        </modus-wc-button>
      </div>
    </div>`}},_={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:Se}}},render:d=>{let e,t="1-1",s=["1","1-2"],n=["1-2-1"];const o=()=>{e&&(e.nodes=$,e.selectedNodeId=t,L(e,s),e.checkedNodeIds=[...n])},i=c("nodeSelect",p=>{t=p.detail.id,o()}),l=c("nodeExpandChange",p=>{const{id:m,expanded:g}=p.detail;s=g?[...s,m]:s.filter(I=>I!==m),o()}),u=c("nodeCheckChange",p=>{const{id:m,checked:g}=p.detail;n=be($,n,m,g),o()});return k`
    <modus-wc-content-tree
      ${b(p=>{e=p??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${i}
      @nodeExpandChange=${l}
      @nodeCheckChange=${u}
    ></modus-wc-content-tree>`}},P={args:{"selection-mode":"multiple",searchable:!0,toolbar:{expandCollapse:!0,delete:!0}},parameters:{docs:{source:{code:De}}},render:d=>{let e,t=structuredClone($),s="1-1",n=["1","1-2"],o=["1-2-1"];const i=()=>{e&&(e.nodes=t,e.selectedNodeId=s,L(e,n),e.checkedNodeIds=[...o],H(e,d))},l=c("nodeSelect",I=>{s=I.detail.id,i()}),u=c("nodeExpandChange",I=>{const{id:w,expanded:A}=I.detail;n=A?[...new Set([...n,w])]:n.filter(T=>T!==w),i()}),p=c("nodeCheckChange",I=>{const{id:w,checked:A}=I.detail;o=be(t,o,w,A),i()}),m=c("expandAllChange",I=>{n=I.detail.expanded?U(t):[],i()}),g=c("nodesDelete",I=>{t=ze(t,I.detail.ids),o=o.filter(w=>!!y(t,w)),i()});return k`
    <modus-wc-content-tree
      ${b(I=>{e=I??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${l}
      @nodeExpandChange=${u}
      @nodeCheckChange=${p}
      @expandAllChange=${m}
      @nodesDelete=${g}
    ></modus-wc-content-tree>`}},B={args:{searchable:!0,toolbar:{expandCollapse:!0}},parameters:{docs:{source:{code:$e}}},render:d=>{let e,t="1-2-2",s=["1","1-2"];const n=()=>{e&&(e.nodes=$,e.selectedNodeId=t,L(e,s),H(e,d))},o=c("nodeSelect",u=>{t=u.detail.id,n()}),i=c("nodeExpandChange",u=>{const{id:p,expanded:m}=u.detail;s=m?[...new Set([...s,p])]:s.filter(g=>g!==p),n()}),l=c("expandAllChange",u=>{s=u.detail.expanded?U($):[],n()});return k`
    <modus-wc-content-tree
      ${b(u=>{e=u??void 0,n()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${o}
      @nodeExpandChange=${i}
      @expandAllChange=${l}
    ></modus-wc-content-tree>`}},F={parameters:{docs:{source:{code:ke}}},render:d=>{let e,t=structuredClone($),s="1-1",n=["1","1-2"],o;const i=new Set;let l=0;const u=()=>`new-${Date.now()}-${l++}`,p=()=>{e&&(e.nodes=t,e.selectedNodeId=s,L(e,n),e.editingNodeId=o)},m=(a,h)=>{o=a,h&&i.add(a),p()},g=c("nodeSelect",a=>{s=a.detail.id,p()}),I=c("nodeExpandChange",a=>{const{id:h,expanded:x}=a.detail;n=x?[...n,h]:n.filter(D=>D!==h),p()}),w=c("nodeEdit",a=>{m(a.detail.id,!1)}),A=c("nodeDuplicate",a=>{const h=ye(t,a.detail.id,u);t=h.nodes,h.newId?m(h.newId,!1):p()}),T=c("nodeAdd",a=>{const{referenceId:h,position:x}=a.detail,D=u(),E={id:D,label:""};if(x==="child")t=v(t,E,{parentId:h}),n.includes(h)||(n=[...n,h]);else{const C=z(t,h),Ee=((C==null?void 0:C.index)??0)+(x==="below"?1:0);t=v(t,E,{parentId:C==null?void 0:C.parentId,index:Ee})}m(D,!0)}),K=c("nodeDelete",a=>{t=S(t,a.detail.id),i.delete(a.detail.id),p()}),W=c("nodeRename",a=>{const{id:h,label:x}=a.detail;t=O(t,h,{label:x||"Untitled"}),i.delete(h),o=void 0,p()}),q=c("nodeEditCancel",a=>{const{id:h}=a.detail;i.has(h)&&(t=S(t,h)),i.delete(h),o=void 0,p()}),r=c("nodeVisibilityChange",a=>{const{id:h,disabled:x}=a.detail;t=G(t,h,x),p()});return k`
    <modus-wc-content-tree
      ${b(a=>{e=a??void 0,p()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${g}
      @nodeExpandChange=${I}
      @nodeEdit=${w}
      @nodeDuplicate=${A}
      @nodeAdd=${T}
      @nodeDelete=${K}
      @nodeRename=${W}
      @nodeEditCancel=${q}
      @nodeVisibilityChange=${r}
    ></modus-wc-content-tree>`}},V={args:{"allow-drag-drop":!0},parameters:{docs:{description:{story:`
Keyboard reordering uses the same drop rules as pointer drag.

1. Tab to a row's reorder handle.
2. Press Space or Enter to grab. The row fades and a drop indicator appears.
3. Arrow Up and Arrow Down move the indicator. Arrow Right nests into the target (or into an expanded folder's first child). Arrow Left promotes the preview one level.
4. Press Space or Enter to drop. The tree emits \`nodeMove\`.
5. Press Escape to cancel, or Tab to cancel and move focus on.
        `},source:{code:Le}}},render:d=>{let e,t=structuredClone($),s="1-1",n=["1","1-2"];const o=()=>{e&&(e.nodes=t,e.selectedNodeId=s,L(e,n),H(e,d))},i=c("nodeSelect",p=>{s=p.detail.id,o()}),l=c("nodeExpandChange",p=>{const{id:m,expanded:g}=p.detail;n=g?[...new Set([...n,m])]:n.filter(I=>I!==m),o()}),u=c("nodeMove",p=>{const{id:m,targetId:g,position:I}=p.detail;t=_e(t,m,g,I),I==="inside"&&!n.includes(g)&&(n=[...n,g]),o()});return k`
    <modus-wc-content-tree
      ${b(p=>{e=p??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${i}
      @nodeExpandChange=${l}
      @nodeMove=${u}
    ></modus-wc-content-tree>`}},Ve=()=>[{id:"documents",label:"Documents",icon:N("folder_closed"),hasChildren:!0},{id:"media",label:"Media",icon:N("folder_closed"),hasChildren:!0},{id:"empty",label:"Empty Folder",icon:N("folder_closed"),hasChildren:!0},{id:"readme",label:"Read Me",icon:N("info")}],je={nodes:Ve(),selectedNodeId:"readme",expandedNodeIds:[],pendingLoadIds:new Set},Oe=d=>d==="empty"?[]:[{id:`${d}-1`,label:"First item",icon:N("info")},{id:`${d}-2`,label:"Subfolder",icon:N("folder_closed"),hasChildren:!0},{id:`${d}-3`,label:"Last item",icon:N("info")}],j={parameters:{docs:{source:{code:Ae}}},render:d=>{let e;const t=je,s=()=>{e&&(e.nodes=t.nodes,e.selectedNodeId=t.selectedNodeId,L(e,t.expandedNodeIds))},n=c("nodeSelect",l=>{t.selectedNodeId=l.detail.id,s()}),o=c("nodeExpandChange",l=>{const{id:u,expanded:p}=l.detail;t.expandedNodeIds=p?[...new Set([...t.expandedNodeIds,u])]:t.expandedNodeIds.filter(m=>m!==u),s()}),i=c("nodeLoadChildren",l=>{const{id:u}=l.detail;t.pendingLoadIds.has(u)||(t.pendingLoadIds.add(u),window.setTimeout(()=>{t.nodes=O(t.nodes,u,{children:Oe(u)}),t.pendingLoadIds.delete(u),s()},1200))});return k`
    <modus-wc-content-tree
      ${b(l=>{if(!l){e=void 0;return}const u=l;e!==u&&(e=u,s())})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${n}
      @nodeExpandChange=${o}
      @nodeLoadChildren=${i}
    ></modus-wc-content-tree>`}};var J,Q,X;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,de,te;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(de=_.parameters)==null?void 0:de.docs)==null?void 0:te.source}}};var oe,se,ie;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ae,le,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(le=B.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ce,pe,he;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(he=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,me,fe;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(me=V.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var Ie,ge,Ne;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ne=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:Ne.source}}};const Ye=["Default","BuildTree","MultiSelect","Toolbar","SearchFilter","TransactionalMenu","DragAndDrop","LazyLoading"];export{R as BuildTree,M as Default,V as DragAndDrop,j as LazyLoading,_ as MultiSelect,B as SearchFilter,P as Toolbar,F as TransactionalMenu,Ye as __namedExportsOrder,Xe as default};
