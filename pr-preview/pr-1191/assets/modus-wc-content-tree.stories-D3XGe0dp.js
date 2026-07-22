import{w as Ie}from"./decorator-D4YmxizW.js";import{b as E}from"./lit-element-DgBvYnzn.js";import{o as f}from"./if-defined-BnVFTJ4o.js";import{n as C}from"./ref-Bw8asrgi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const Ne=`
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
`,xe=`
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
`,ge=`
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
      if (node.children?.length) {
        acc.push(node.id, ...getExpandableNodeIds(node.children));
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
`,be=`
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
`,Ee=`
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
<\/script>
`,Ce=`
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
`,ve=`
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
`,x=(d,e)=>{var n;for(const t of d){if(t.id===e)return t;if((n=t.children)!=null&&n.length){const o=x(t.children,e);if(o)return o}}},w=(d,e,n={})=>{const{parentId:t,index:o}=n;if(!t){const s=[...d];return s.splice(o??s.length,0,e),s}return d.map(s=>{var i;if(s.id===t){const r=s.children?[...s.children]:[];return r.splice(o??r.length,0,e),{...s,children:r}}return(i=s.children)!=null&&i.length?{...s,children:w(s.children,e,n)}:s})},F=(d,e,n)=>d.map(t=>{var o;return t.id===e?{...t,...n}:(o=t.children)!=null&&o.length?{...t,children:F(t.children,e,n)}:t}),y=(d,e)=>d.filter(n=>n.id!==e).map(n=>{var t;return(t=n.children)!=null&&t.length?{...n,children:y(n.children,e)}:n}),we=(d,e)=>e.reduce((n,t)=>y(n,t),d),ye=(d,e,n={})=>{const t=x(d,e);if(!t)return d;const o=y(d,e);return w(o,t,n)},M=(d,e,n)=>{var o;const t=d.findIndex(s=>s.id===e);if(t!==-1)return{parentId:n,index:t};for(const s of d)if((o=s.children)!=null&&o.length){const i=M(s.children,e,s.id);if(i)return i}},$e=(d,e,n)=>{var o;if(e===n)return!0;const t=x(d,e);return(o=t==null?void 0:t.children)!=null&&o.length?!!x(t.children,n):!1},Se=(d,e,n,t)=>{if(e===n)return d;const o=x(d,e);if(!o||!x(d,n)||$e(d,e,n))return d;if(t==="inside")return ye(d,e,{parentId:n,index:0});const s=y(d,e),i=M(s,n);if(!i)return d;const r=i.index+(t==="after"?1:0);return w(s,o,{parentId:i.parentId,index:r})},le=(d,e)=>{var n;return{...d,id:e(),children:(n=d.children)==null?void 0:n.map(t=>le(t,e))}},ke=(d,e,n)=>{const t=x(d,e),o=M(d,e);if(!t||!o)return{nodes:d};const s=le(t,n);return{nodes:w(d,s,{parentId:o.parentId,index:o.index+1}),newId:s.id}},ae=d=>{var e;return(e=d.children)!=null&&e.length?d.children.flatMap(ae):[d.id]},B=d=>d.reduce((e,n)=>{var t;return(t=n.children)!=null&&t.length&&e.push(n.id,...B(n.children)),e},[]),re=(d,e,n,t)=>{const o=x(d,n);if(!o)return e;const s=new Set(e);return ae(o).forEach(i=>t?s.add(i):s.delete(i)),[...s]},ce=(d,e,n)=>d.map(t=>{var o;return t.id===e?{...t,disabled:n}:(o=t.children)!=null&&o.length?{...t,children:ce(t.children,e,n)}:t}),I=(d,e="solid")=>({name:d,variant:e}),b=[{id:"1",label:"Project Files",icon:I("folder_closed"),children:[{id:"1-1",label:"Overview",icon:I("info")},{id:"1-2",label:"Resources",icon:I("folder_closed"),children:[{id:"1-2-1",label:"Specifications",icon:I("info")},{id:"1-2-2",label:"Search Index",icon:I("search")}]},{id:"1-3",label:"Archived",icon:I("alert")}]},{id:"2",label:"Settings",icon:I("settings")},{id:"3",label:"Notifications",icon:I("info")}],Fe={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"selection-mode":"single",size:"md"},argTypes:{"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[Ie],parameters:{actions:{handles:["nodeSelect","nodeExpandChange","nodeCheckChange","nodeEdit","nodeDuplicate","nodeAdd","nodeDelete","nodeRename","nodeEditCancel","nodeMove","nodeLoadChildren","expandAllChange","nodesDelete","nodeVisibilityChange"]}}},k={parameters:{docs:{source:{code:Ne}}},render:d=>{let e,n="1-1",t=["1"];const o=()=>{e&&(e.nodes=b,e.selectedNodeId=n,e.expandedNodeIds=[...t])},s=r=>{n=r.detail.id,o()},i=r=>{const{id:u,expanded:l}=r.detail;t=l?[...t,u]:t.filter(a=>a!==u),o()};return E`
    <modus-wc-content-tree
      ${C(r=>{e=r??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${s}
      @nodeExpandChange=${i}
    ></modus-wc-content-tree>`}},D={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:xe}}},render:d=>{let e,n="1-1",t=["1","1-2"],o=["1-2-1"];const s=()=>{e&&(e.nodes=b,e.selectedNodeId=n,e.expandedNodeIds=[...t],e.checkedNodeIds=[...o])},i=l=>{n=l.detail.id,s()},r=l=>{const{id:a,expanded:m}=l.detail;t=m?[...t,a]:t.filter(h=>h!==a),s()},u=l=>{const{id:a,checked:m}=l.detail;o=re(b,o,a,m),s()};return E`
    <modus-wc-content-tree
      ${C(l=>{e=l??void 0,s()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${i}
      @nodeExpandChange=${r}
      @nodeCheckChange=${u}
    ></modus-wc-content-tree>`}},L={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:ve}}},render:d=>{let e,n=structuredClone(b),t="1-1",o=["1","1-2"],s=["1-2-1"];const i=()=>{e&&(e.nodes=n,e.selectedNodeId=t,e.expandedNodeIds=[...o],e.checkedNodeIds=[...s],e.toolbar={expandCollapse:!0,delete:!0},e.searchable=!0)},r=h=>{t=h.detail.id,i()},u=h=>{const{id:N,expanded:$}=h.detail;o=$?[...new Set([...o,N])]:o.filter(R=>R!==N),i()},l=h=>{const{id:N,checked:$}=h.detail;s=re(n,s,N,$),i()},a=h=>{o=h.detail.expanded?B(n):[],i()},m=h=>{n=we(n,h.detail.ids),s=s.filter(N=>!!x(n,N)),i()};return E`
    <modus-wc-content-tree
      ${C(h=>{e=h??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${r}
      @nodeExpandChange=${u}
      @nodeCheckChange=${l}
      @expandAllChange=${a}
      @nodesDelete=${m}
    ></modus-wc-content-tree>`}},T={parameters:{docs:{source:{code:ge}}},render:d=>{let e,n="1-2-2",t=["1","1-2"];const o=()=>{e&&(e.nodes=b,e.selectedNodeId=n,e.expandedNodeIds=[...t],e.searchable=!0,e.toolbar={expandCollapse:!0})},s=u=>{n=u.detail.id,o()},i=u=>{const{id:l,expanded:a}=u.detail;t=a?[...new Set([...t,l])]:t.filter(m=>m!==l),o()},r=u=>{t=u.detail.expanded?B(b):[],o()};return E`
    <modus-wc-content-tree
      ${C(u=>{e=u??void 0,o()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${s}
      @nodeExpandChange=${i}
      @expandAllChange=${r}
    ></modus-wc-content-tree>`}},A={parameters:{docs:{source:{code:be}}},render:d=>{let e,n=structuredClone(b),t="1-1",o=["1","1-2"],s;const i=new Set;let r=0;const u=()=>`new-${Date.now()}-${r++}`,l=()=>{e&&(e.nodes=n,e.selectedNodeId=t,e.expandedNodeIds=[...o],e.editingNodeId=s)},a=(c,p)=>{s=c,p&&i.add(c),l()},m=c=>{t=c.detail.id,l()},h=c=>{const{id:p,expanded:g}=c.detail;o=g?[...o,p]:o.filter(S=>S!==p),l()},N=c=>{a(c.detail.id,!1)},$=c=>{const p=ke(n,c.detail.id,u);n=p.nodes,p.newId?a(p.newId,!1):l()},R=c=>{const{referenceId:p,position:g}=c.detail,S=u(),O={id:S,label:""};if(g==="child")n=w(n,O,{parentId:p}),o.includes(p)||(o=[...o,p]);else{const v=M(n,p),fe=((v==null?void 0:v.index)??0)+(g==="below"?1:0);n=w(n,O,{parentId:v==null?void 0:v.parentId,index:fe})}a(S,!0)},he=c=>{n=y(n,c.detail.id),i.delete(c.detail.id),l()},pe=c=>{const{id:p,label:g}=c.detail;n=F(n,p,{label:g||"Untitled"}),i.delete(p),s=void 0,l()},ue=c=>{const{id:p}=c.detail;i.has(p)&&(n=y(n,p)),i.delete(p),s=void 0,l()},me=c=>{const{id:p,disabled:g}=c.detail;n=ce(n,p,g),l()};return E`
    <modus-wc-content-tree
      ${C(c=>{e=c??void 0,l()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${m}
      @nodeExpandChange=${h}
      @nodeEdit=${N}
      @nodeDuplicate=${$}
      @nodeAdd=${R}
      @nodeDelete=${he}
      @nodeRename=${pe}
      @nodeEditCancel=${ue}
      @nodeVisibilityChange=${me}
    ></modus-wc-content-tree>`}},z={parameters:{docs:{source:{code:Ee}}},render:d=>{let e,n=structuredClone(b),t="1-1",o=["1","1-2"];const s=()=>{e&&(e.nodes=n,e.selectedNodeId=t,e.expandedNodeIds=[...o],e.allowDragDrop=!0)},i=l=>{t=l.detail.id,s()},r=l=>{const{id:a,expanded:m}=l.detail;o=m?[...new Set([...o,a])]:o.filter(h=>h!==a),s()},u=l=>{const{id:a,targetId:m,position:h}=l.detail;n=Se(n,a,m,h),h==="inside"&&!o.includes(m)&&(o=[...o,m]),s()};return E`
    <modus-wc-content-tree
      ${C(l=>{e=l??void 0,s()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${i}
      @nodeExpandChange=${r}
      @nodeMove=${u}
    ></modus-wc-content-tree>`}},_={parameters:{docs:{source:{code:Ce}}},render:d=>{let e,n=[{id:"documents",label:"Documents",icon:I("folder_closed"),hasChildren:!0},{id:"media",label:"Media",icon:I("folder_closed"),hasChildren:!0},{id:"empty",label:"Empty Folder",icon:I("folder_closed"),hasChildren:!0},{id:"readme",label:"Read Me",icon:I("info")}],t="readme",o=[];const s=a=>a==="empty"?[]:[{id:`${a}-1`,label:"First item",icon:I("info")},{id:`${a}-2`,label:"Subfolder",icon:I("folder_closed"),hasChildren:!0},{id:`${a}-3`,label:"Last item",icon:I("info")}],i=()=>{e&&(e.nodes=n,e.selectedNodeId=t,e.expandedNodeIds=[...o])},r=a=>{t=a.detail.id,i()},u=a=>{const{id:m,expanded:h}=a.detail;o=h?[...new Set([...o,m])]:o.filter(N=>N!==m),i()},l=a=>{const{id:m}=a.detail;window.setTimeout(()=>{n=F(n,m,{children:s(m)}),i()},1200)};return E`
    <modus-wc-content-tree
      ${C(a=>{e=a??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${d.bordered}
      custom-class=${f(d["custom-class"])}
      selection-mode=${f(d["selection-mode"])}
      size=${f(d.size)}
      @nodeSelect=${r}
      @nodeExpandChange=${u}
      @nodeLoadChildren=${l}
    ></modus-wc-content-tree>`}};var P,j,V;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(j=k.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var U,W,q;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(W=D.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var G,H,J;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeCheckChange=\${handleCheckChange}
      @expandAllChange=\${handleExpandAll}
      @nodesDelete=\${handleNodesDelete}
    ></modus-wc-content-tree>\`;
  }
}`,...(J=(H=L.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @expandAllChange=\${handleExpandAll}
    ></modus-wc-content-tree>\`;
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
      nodes = updateNode(nodes, id, {
        label: label || 'Untitled'
      });
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
}`,...(ee=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,de,te;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeMove=\${handleMove}
    ></modus-wc-content-tree>\`;
  }
}`,...(te=(de=z.parameters)==null?void 0:de.docs)==null?void 0:te.source}}};var oe,se,ie;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
      icon: treeIcon('folder_closed'),
      hasChildren: true
    }, {
      id: 'media',
      label: 'Media',
      icon: treeIcon('folder_closed'),
      hasChildren: true
    }, {
      id: 'empty',
      label: 'Empty Folder',
      icon: treeIcon('folder_closed'),
      hasChildren: true
    }, {
      id: 'readme',
      label: 'Read Me',
      icon: treeIcon('info')
    }];
    let selectedNodeId = 'readme';
    let expandedNodeIds: string[] = [];

    // Children returned by the mock "server". The nested subfolder is itself
    // lazy so the spinner can be seen again one level deeper. The "Empty Folder"
    // resolves to an empty array — it becomes a plain leaf once loaded.
    const loadChildren = (id: string): ITreeNode[] => id === 'empty' ? [] : [{
      id: \`\${id}-1\`,
      label: 'First item',
      icon: treeIcon('info')
    }, {
      id: \`\${id}-2\`,
      label: 'Subfolder',
      icon: treeIcon('folder_closed'),
      hasChildren: true
    }, {
      id: \`\${id}-3\`,
      label: 'Last item',
      icon: treeIcon('info')
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
      @nodeSelect=\${handleSelect}
      @nodeExpandChange=\${handleExpandChange}
      @nodeLoadChildren=\${handleLoadChildren}
    ></modus-wc-content-tree>\`;
  }
}`,...(ie=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Be=["Default","MultiSelect","Toolbar","SearchFilter","TransactionalMenu","DragAndDrop","LazyLoading"];export{k as Default,z as DragAndDrop,_ as LazyLoading,D as MultiSelect,T as SearchFilter,L as Toolbar,A as TransactionalMenu,Be as __namedExportsOrder,Fe as default};
