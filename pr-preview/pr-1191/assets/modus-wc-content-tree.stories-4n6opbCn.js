import{w as be}from"./decorator-D4YmxizW.js";import{b as S}from"./lit-element-DgBvYnzn.js";import{o as I}from"./if-defined-BnVFTJ4o.js";import{n as b}from"./ref-Bw8asrgi.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const we=`
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
`,Ee=`
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
`,Ce=`
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
`,ve=`
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
`,$e=`
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
`,Se=`
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
`,ke=`
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
`,De=`
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
`,y=(t,n)=>{var d;for(const o of t){if(o.id===n)return o;if((d=o.children)!=null&&d.length){const e=y(o.children,n);if(e)return e}}},C=(t,n,d={})=>{const{parentId:o,index:e}=d;if(!o){const s=[...t];return s.splice(e??s.length,0,n),s}return t.map(s=>{var i;if(s.id===o){const c=s.children?[...s.children]:[];return c.splice(e??c.length,0,n),{...s,children:c}}if((i=s.children)!=null&&i.length){const c=C(s.children,n,d);return c===s.children?s:{...s,children:c}}return s})},V=(t,n,d)=>{let o=!1;const e=t.map(s=>{var i;if(s.id===n)return o=!0,{...s,...d};if((i=s.children)!=null&&i.length){const c=V(s.children,n,d);return c===s.children?s:(o=!0,{...s,children:c})}return s});return o?e:t},v=(t,n)=>t.filter(d=>d.id!==n).map(d=>{var e;if(!((e=d.children)!=null&&e.length))return d;const o=v(d.children,n);return o===d.children?d:{...d,children:o}}),Le=(t,n)=>n.reduce((d,o)=>v(d,o),t),Te=(t,n,d={})=>{const o=y(t,n);if(!o)return t;const e=v(t,n);return C(e,o,d)},T=(t,n,d)=>{var e;const o=t.findIndex(s=>s.id===n);if(o!==-1)return{parentId:d,index:o};for(const s of t)if((e=s.children)!=null&&e.length){const i=T(s.children,n,s.id);if(i)return i}},ze=(t,n,d)=>{var e;if(n===d)return!0;const o=y(t,n);return(e=o==null?void 0:o.children)!=null&&e.length?!!y(o.children,d):!1},Ae=(t,n,d,o)=>{if(n===d)return t;const e=y(t,n);if(!e||!y(t,d)||ze(t,n,d))return t;if(o==="inside")return Te(t,n,{parentId:d,index:0});const s=v(t,n),i=T(s,d);if(!i)return t;const c=i.index+(o==="after"?1:0);return C(s,e,{parentId:i.parentId,index:c})},Ie=(t,n)=>{var d;return{...t,id:n(),children:(d=t.children)==null?void 0:d.map(o=>Ie(o,n))}},Ne=(t,n,d)=>{const o=y(t,n),e=T(t,n);if(!o||!e)return{nodes:t};const s=Ie(o,d);return{nodes:C(t,s,{parentId:e.parentId,index:e.index+1}),newId:s.id}},_e=t=>!!t.hasChildren&&t.children===void 0,ge=t=>{var n;return _e(t)?[]:(n=t.children)!=null&&n.length?t.children.flatMap(ge):[t.id]},j=t=>t.reduce((n,d)=>{var s;const o=!!d.hasChildren&&d.children===void 0,e=!!((s=d.children)!=null&&s.length);return(e||o)&&(n.push(d.id),e&&n.push(...j(d.children))),n},[]),xe=(t,n,d,o)=>{const e=y(t,d);if(!e)return n;const s=new Set(n);return ge(e).forEach(i=>o?s.add(i):s.delete(i)),[...s]},W=(t,n,d)=>t.map(o=>{var e;if(o.id===n)return{...o,disabled:d};if((e=o.children)!=null&&e.length){const s=W(o.children,n,d);return s===o.children?o:{...o,children:s}}return o}),N=(t,n="solid")=>({name:t,variant:n}),$=[{id:"1",label:"Project Files",icon:N("folder_closed"),children:[{id:"1-1",label:"Overview",icon:N("info")},{id:"1-2",label:"Resources",icon:N("folder_closed"),children:[{id:"1-2-1",label:"Specifications",icon:N("info")},{id:"1-2-2",label:"Search Index",icon:N("search")}]},{id:"1-3",label:"Archived",icon:N("alert")}]},{id:"2",label:"Settings",icon:N("settings")},{id:"3",label:"Notifications",icon:N("info")}],He={title:"Components/Content Tree",component:"modus-wc-content-tree",args:{"selection-mode":"single",size:"md"},argTypes:{"selection-mode":{control:{type:"select"},options:["single","multiple"]},size:{control:{type:"select"},options:["sm","md","lg"]}},decorators:[be],parameters:{actions:{handles:["nodeSelect","nodeExpandChange","nodeCheckChange","nodeEdit","nodeDuplicate","nodeAdd","nodeDelete","nodeRename","nodeEditCancel","nodeMove","nodeLoadChildren","expandAllChange","nodesDelete","nodeVisibilityChange"]}}},z={parameters:{docs:{source:{code:we}}},render:t=>{let n,d="1-1",o=["1"];const e=()=>{n&&(n.nodes=$,n.selectedNodeId=d,n.expandedNodeIds=[...o])},s=c=>{d=c.detail.id,e()},i=c=>{const{id:m,expanded:r}=c.detail;o=r?[...o,m]:o.filter(p=>p!==m),e()};return S`
    <modus-wc-content-tree
      ${b(c=>{n=c??void 0,e()})}
      aria-label="Content tree"
      ?bordered=${t.bordered}
      custom-class=${I(t["custom-class"])}
      selection-mode=${I(t["selection-mode"])}
      size=${I(t.size)}
      @nodeSelect=${s}
      @nodeExpandChange=${i}
    ></modus-wc-content-tree>`}},Me={nodes:[],selectedNodeId:void 0,expandedNodeIds:[],editingNodeId:void 0,freshIds:new Set,idCounter:0},A={parameters:{docs:{source:{code:De}}},render:t=>{let n,d,o;const e=Me,s=()=>`new-${Date.now()}-${e.idCounter++}`,i=()=>{const a=e.nodes.length===0;d==null||d.classList.toggle("is-empty",a),o&&(o.hidden=!a),n&&(n.nodes=e.nodes,n.selectedNodeId=e.selectedNodeId,n.expandedNodeIds=[...e.expandedNodeIds],n.editingNodeId=e.editingNodeId,n.searchable=!0,n.toolbar={expandCollapse:!0})},c=(a,l)=>{e.editingNodeId=a,l&&e.freshIds.add(a),i()},m=()=>{const a=s();e.nodes=[{id:a,label:"",icon:N("folder_closed")}],e.selectedNodeId=a,c(a,!0)},r=a=>{e.selectedNodeId=a.detail.id,i()},p=a=>{const{id:l,expanded:h}=a.detail;e.expandedNodeIds=h?[...new Set([...e.expandedNodeIds,l])]:e.expandedNodeIds.filter(g=>g!==l),i()},f=a=>{e.expandedNodeIds=a.detail.expanded?j(e.nodes):[],i()},u=a=>{c(a.detail.id,!1)},x=a=>{const l=Ne(e.nodes,a.detail.id,s);e.nodes=l.nodes,l.newId?c(l.newId,!1):i()},k=a=>{const{referenceId:l,position:h}=a.detail,g=s(),D={id:g,label:""};if(h==="child")e.nodes=C(e.nodes,D,{parentId:l}),e.expandedNodeIds.includes(l)||(e.expandedNodeIds=[...e.expandedNodeIds,l]);else{const w=T(e.nodes,l),E=((w==null?void 0:w.index)??0)+(h==="below"?1:0);e.nodes=C(e.nodes,D,{parentId:w==null?void 0:w.parentId,index:E})}c(g,!0)},L=a=>{var l;e.nodes=v(e.nodes,a.detail.id),e.freshIds.delete(a.detail.id),y(e.nodes,e.selectedNodeId??"")||(e.selectedNodeId=(l=e.nodes[0])==null?void 0:l.id),i()},O=a=>{const{id:l,label:h}=a.detail;e.nodes=V(e.nodes,l,{label:h||"Untitled"}),e.freshIds.delete(l),e.editingNodeId=void 0,i()},U=a=>{var h;const{id:l}=a.detail;e.freshIds.has(l)&&(e.nodes=v(e.nodes,l)),e.freshIds.delete(l),e.editingNodeId=void 0,y(e.nodes,e.selectedNodeId??"")||(e.selectedNodeId=(h=e.nodes[0])==null?void 0:h.id),i()},H=a=>{const{id:l,disabled:h}=a.detail;e.nodes=W(e.nodes,l,h),i()};return S`
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
      ${b(a=>{d=a??void 0,i()})}
    >
      <modus-wc-content-tree
        ${b(a=>{n=a??void 0,i()})}
        aria-label="Content tree"
        ?bordered=${t.bordered}
        custom-class=${I(t["custom-class"])}
        selection-mode=${I(t["selection-mode"])}
        size=${I(t.size)}
        @nodeSelect=${r}
        @nodeExpandChange=${p}
        @expandAllChange=${f}
        @nodeEdit=${u}
        @nodeDuplicate=${x}
        @nodeAdd=${k}
        @nodeDelete=${L}
        @nodeRename=${O}
        @nodeEditCancel=${U}
        @nodeVisibilityChange=${H}
      ></modus-wc-content-tree>
      <div
        class="modus-wc-content-tree-empty-story-panel"
        ${b(a=>{o=a??void 0,i()})}
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
          @buttonClick=${m}
        >
          <modus-wc-icon decorative name="add" size="xs"></modus-wc-icon>
          Create node
        </modus-wc-button>
      </div>
    </div>`}},_={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:Ee}}},render:t=>{let n,d="1-1",o=["1","1-2"],e=["1-2-1"];const s=()=>{n&&(n.nodes=$,n.selectedNodeId=d,n.expandedNodeIds=[...o],n.checkedNodeIds=[...e])},i=r=>{d=r.detail.id,s()},c=r=>{const{id:p,expanded:f}=r.detail;o=f?[...o,p]:o.filter(u=>u!==p),s()},m=r=>{const{id:p,checked:f}=r.detail;e=xe($,e,p,f),s()};return S`
    <modus-wc-content-tree
      ${b(r=>{n=r??void 0,s()})}
      aria-label="Content tree"
      ?bordered=${t.bordered}
      custom-class=${I(t["custom-class"])}
      selection-mode=${I(t["selection-mode"])}
      size=${I(t.size)}
      @nodeSelect=${i}
      @nodeExpandChange=${c}
      @nodeCheckChange=${m}
    ></modus-wc-content-tree>`}},M={args:{"selection-mode":"multiple"},parameters:{docs:{source:{code:ke}}},render:t=>{let n,d=structuredClone($),o="1-1",e=["1","1-2"],s=["1-2-1"];const i=()=>{n&&(n.nodes=d,n.selectedNodeId=o,n.expandedNodeIds=[...e],n.checkedNodeIds=[...s],n.toolbar={expandCollapse:!0,delete:!0},n.searchable=!0)},c=u=>{o=u.detail.id,i()},m=u=>{const{id:x,expanded:k}=u.detail;e=k?[...new Set([...e,x])]:e.filter(L=>L!==x),i()},r=u=>{const{id:x,checked:k}=u.detail;s=xe(d,s,x,k),i()},p=u=>{e=u.detail.expanded?j(d):[],i()},f=u=>{d=Le(d,u.detail.ids),s=s.filter(x=>!!y(d,x)),i()};return S`
    <modus-wc-content-tree
      ${b(u=>{n=u??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${t.bordered}
      custom-class=${I(t["custom-class"])}
      selection-mode=${I(t["selection-mode"])}
      size=${I(t.size)}
      @nodeSelect=${c}
      @nodeExpandChange=${m}
      @nodeCheckChange=${r}
      @expandAllChange=${p}
      @nodesDelete=${f}
    ></modus-wc-content-tree>`}},R={parameters:{docs:{source:{code:Ce}}},render:t=>{let n,d="1-2-2",o=["1","1-2"];const e=()=>{n&&(n.nodes=$,n.selectedNodeId=d,n.expandedNodeIds=[...o],n.searchable=!0,n.toolbar={expandCollapse:!0})},s=m=>{d=m.detail.id,e()},i=m=>{const{id:r,expanded:p}=m.detail;o=p?[...new Set([...o,r])]:o.filter(f=>f!==r),e()},c=m=>{o=m.detail.expanded?j($):[],e()};return S`
    <modus-wc-content-tree
      ${b(m=>{n=m??void 0,e()})}
      aria-label="Content tree"
      ?bordered=${t.bordered}
      selection-mode=${I(t["selection-mode"])}
      size=${I(t.size)}
      @nodeSelect=${s}
      @nodeExpandChange=${i}
      @expandAllChange=${c}
    ></modus-wc-content-tree>`}},F={parameters:{docs:{source:{code:ve}}},render:t=>{let n,d=structuredClone($),o="1-1",e=["1","1-2"],s;const i=new Set;let c=0;const m=()=>`new-${Date.now()}-${c++}`,r=()=>{n&&(n.nodes=d,n.selectedNodeId=o,n.expandedNodeIds=[...e],n.editingNodeId=s)},p=(l,h)=>{s=l,h&&i.add(l),r()},f=l=>{o=l.detail.id,r()},u=l=>{const{id:h,expanded:g}=l.detail;e=g?[...e,h]:e.filter(D=>D!==h),r()},x=l=>{p(l.detail.id,!1)},k=l=>{const h=Ne(d,l.detail.id,m);d=h.nodes,h.newId?p(h.newId,!1):r()},L=l=>{const{referenceId:h,position:g}=l.detail,D=m(),w={id:D,label:""};if(g==="child")d=C(d,w,{parentId:h}),e.includes(h)||(e=[...e,h]);else{const E=T(d,h),ye=((E==null?void 0:E.index)??0)+(g==="below"?1:0);d=C(d,w,{parentId:E==null?void 0:E.parentId,index:ye})}p(D,!0)},O=l=>{d=v(d,l.detail.id),i.delete(l.detail.id),r()},U=l=>{const{id:h,label:g}=l.detail;d=V(d,h,{label:g||"Untitled"}),i.delete(h),s=void 0,r()},H=l=>{const{id:h}=l.detail;i.has(h)&&(d=v(d,h)),i.delete(h),s=void 0,r()},a=l=>{const{id:h,disabled:g}=l.detail;d=W(d,h,g),r()};return S`
    <modus-wc-content-tree
      ${b(l=>{n=l??void 0,r()})}
      aria-label="Content tree"
      ?bordered=${t.bordered}
      custom-class=${I(t["custom-class"])}
      selection-mode=${I(t["selection-mode"])}
      size=${I(t.size)}
      @nodeSelect=${f}
      @nodeExpandChange=${u}
      @nodeEdit=${x}
      @nodeDuplicate=${k}
      @nodeAdd=${L}
      @nodeDelete=${O}
      @nodeRename=${U}
      @nodeEditCancel=${H}
      @nodeVisibilityChange=${a}
    ></modus-wc-content-tree>`}},B={parameters:{docs:{source:{code:$e}}},render:t=>{let n,d=structuredClone($),o="1-1",e=["1","1-2"];const s=()=>{n&&(n.nodes=d,n.selectedNodeId=o,n.expandedNodeIds=[...e],n.allowDragDrop=!0)},i=r=>{o=r.detail.id,s()},c=r=>{const{id:p,expanded:f}=r.detail;e=f?[...new Set([...e,p])]:e.filter(u=>u!==p),s()},m=r=>{const{id:p,targetId:f,position:u}=r.detail;d=Ae(d,p,f,u),u==="inside"&&!e.includes(f)&&(e=[...e,f]),s()};return S`
    <modus-wc-content-tree
      ${b(r=>{n=r??void 0,s()})}
      aria-label="Content tree"
      ?bordered=${t.bordered}
      custom-class=${I(t["custom-class"])}
      selection-mode=${I(t["selection-mode"])}
      size=${I(t.size)}
      @nodeSelect=${i}
      @nodeExpandChange=${c}
      @nodeMove=${m}
    ></modus-wc-content-tree>`}},P={parameters:{docs:{source:{code:Se}}},render:t=>{let n,d=[{id:"documents",label:"Documents",icon:N("folder_closed"),hasChildren:!0},{id:"media",label:"Media",icon:N("folder_closed"),hasChildren:!0},{id:"empty",label:"Empty Folder",icon:N("folder_closed"),hasChildren:!0},{id:"readme",label:"Read Me",icon:N("info")}],o="readme",e=[];const s=p=>p==="empty"?[]:[{id:`${p}-1`,label:"First item",icon:N("info")},{id:`${p}-2`,label:"Subfolder",icon:N("folder_closed"),hasChildren:!0},{id:`${p}-3`,label:"Last item",icon:N("info")}],i=()=>{n&&(n.nodes=d,n.selectedNodeId=o,n.expandedNodeIds=[...e])},c=p=>{o=p.detail.id,i()},m=p=>{const{id:f,expanded:u}=p.detail;e=u?[...new Set([...e,f])]:e.filter(x=>x!==f),i()},r=p=>{const{id:f}=p.detail;window.setTimeout(()=>{d=V(d,f,{children:s(f)}),i()},1200)};return S`
    <modus-wc-content-tree
      ${b(p=>{n=p??void 0,i()})}
      aria-label="Content tree"
      ?bordered=${t.bordered}
      custom-class=${I(t["custom-class"])}
      selection-mode=${I(t["selection-mode"])}
      size=${I(t.size)}
      @nodeSelect=${c}
      @nodeExpandChange=${m}
      @nodeLoadChildren=${r}
    ></modus-wc-content-tree>`}};var q,G,J;z.parameters={...z.parameters,docs:{...(q=z.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(G=z.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      treeEl.expandedNodeIds = [...state.expandedNodeIds];
      treeEl.editingNodeId = state.editingNodeId;
      treeEl.searchable = true;
      treeEl.toolbar = {
        expandCollapse: true
      };
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
    const handleSelect = (e: CustomEvent<{
      id: string;
    }>) => {
      state.selectedNodeId = e.detail.id;
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
      state.expandedNodeIds = expanded ? [...new Set([...state.expandedNodeIds, id])] : state.expandedNodeIds.filter(x => x !== id);
      sync();
    };
    const handleExpandAll = (e: CustomEvent<{
      expanded: boolean;
    }>) => {
      state.expandedNodeIds = e.detail.expanded ? getExpandableNodeIds(state.nodes) : [];
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
      const result = duplicateNode(state.nodes, e.detail.id, makeId);
      state.nodes = result.nodes;
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
    };
    const handleDelete = (e: CustomEvent<{
      id: string;
    }>) => {
      state.nodes = deleteNode(state.nodes, e.detail.id);
      state.freshIds.delete(e.detail.id);
      if (!findNode(state.nodes, state.selectedNodeId ?? '')) {
        state.selectedNodeId = state.nodes[0]?.id;
      }
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
      state.nodes = updateNode(state.nodes, id, {
        label: label || 'Untitled'
      });
      state.freshIds.delete(id);
      state.editingNodeId = undefined;
      sync();
    };
    const handleEditCancel = (e: CustomEvent<{
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
    };
    const handleVisibilityChange = (e: CustomEvent<{
      id: string;
      disabled: boolean;
    }>) => {
      const {
        id,
        disabled
      } = e.detail;
      state.nodes = setNodeDisabled(state.nodes, id, disabled);
      sync();
    };

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
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,de,te;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(de=M.parameters)==null?void 0:de.docs)==null?void 0:te.source}}};var oe,se,ie;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=R.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ae,re;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(re=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ce,pe,he;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(he=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,me,fe;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(me=P.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const We=["Default","BuildTree","MultiSelect","Toolbar","SearchFilter","TransactionalMenu","DragAndDrop","LazyLoading"];export{A as BuildTree,z as Default,B as DragAndDrop,P as LazyLoading,_ as MultiSelect,R as SearchFilter,M as Toolbar,F as TransactionalMenu,We as __namedExportsOrder,He as default};
