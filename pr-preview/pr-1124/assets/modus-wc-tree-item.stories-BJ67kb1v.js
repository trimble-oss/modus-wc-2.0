import{w as N}from"./decorator-D4YmxizW.js";import{b as r}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{n as g}from"./ref-Bw8asrgi.js";import{c as j}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const F=`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label="Tree Item"
    size="md"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-view>
`,G=`
<modus-wc-tree-view>
  <modus-wc-tree-item label="Tree Item" size="md" value="treeItem">
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
`,J=`
<modus-wc-tree-view>
  <modus-wc-tree-item label="Tree Item" value="treeItem">
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        id="tree-item-end-btn"
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        id="tree-item-end-menu"
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu id="tree-item-context-menu" size="sm" bordered="true">
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
<script>
  const btn = document.getElementById('tree-item-end-btn');
  const menu = document.getElementById('tree-item-end-menu');
  const contextMenu = document.getElementById('tree-item-context-menu');

  btn.addEventListener('buttonClick', (e) => {
    e.stopPropagation();
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
  });

  contextMenu.addEventListener('itemSelect', () => {
    menu.style.display = 'none';
  });

  document.addEventListener('click', (e) => {
    if (
      menu.style.display !== 'block' ||
      btn.contains(e.target) ||
      menu.contains(e.target)
    ) {
      return;
    }
    menu.style.display = 'none';
  });
<\/script>
`,K=`
<modus-wc-tree-view size="sm">
  <modus-wc-tree-item label="Tree Item" value="treeItem">
    <modus-wc-icon slot="start" name="search"></modus-wc-icon>
    <div slot="end" style="display: flex; align-items: center;">
      <div
        style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px; align-self: stretch;"
      ></div>
      <modus-wc-button variant="borderless" size="sm" aria-label="Open folder">
        <modus-wc-icon name="folder_closed" size="sm"></modus-wc-icon>
        <modus-wc-icon name="chevron_right" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
`,Q=`
<modus-wc-tree-view>
  <modus-wc-tree-item
    checkbox="true"
    label="Tree Item"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-view>
`,U=`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label="Tree Item"
    tooltip-content="Tooltip content"
    value="treeItem"
  ></modus-wc-tree-item>
</modus-wc-tree-view>
`,X=`
<tree-item-shadow-host></tree-item-shadow-host>
<script>
  // Register once — see Storybook story implementation for the full shadow-host class.
  const host = document.querySelector('tree-item-shadow-host');
  host.props = {
    label: 'Tree Item',
    size: 'md',
    value: 'treeItem',
  };
<\/script>
`,me={title:"Components/Tree Item",component:"modus-wc-tree-item",args:{label:"Tree Item",size:"md",value:"treeItem"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},"tooltip-position":{control:{type:"select"},options:["auto","top","right","bottom","left"]}},decorators:[N],parameters:{actions:{handles:["itemSelect"]}}},Y={parameters:{docs:{source:{code:F}}},render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=${e.bordered}
    ?block-expand=${e["block-expand"]}
    ?checkbox=${e.checkbox}
    custom-class=${a(e["custom-class"])}
    ?disabled=${e.disabled}
    ?focused=${e.focused}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    sub-label=${a(e["sub-label"])}
    tooltip-content=${a(e["tooltip-content"])}
    tooltip-position=${a(e["tooltip-position"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},u={...Y},w={parameters:{docs:{source:{code:G}}},render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=${e.bordered}
    ?disabled=${e.disabled}
    label=${e.label}
    ?selected=${e.selected}
    size=${e.size}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `},p={parameters:{docs:{source:{code:J}}},render:e=>{const i={el:null},t={el:null};let s=!1;const d=()=>{s||!i.el||!t.el||(s=!0,document.addEventListener("click",n=>{const l=i.el,m=t.el;!l||!m||m.style.display!=="block"||l.contains(n.target)||m.contains(n.target)||(m.style.display="none")}))},c=n=>{n.stopPropagation();const l=t.el;if(!l)return;const m=l.style.display==="block";l.style.display=m?"none":"block"},o=()=>{t.el&&(t.el.style.display="none")},V=n=>{n&&(i.el=n,d())},q=n=>{n&&(t.el=n,d())};return r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        ${g(V)}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
        @buttonClick=${c}
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        ${g(q)}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true" @itemSelect=${o}>
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `}},b={parameters:{docs:{source:{code:K}}},render:e=>r`
<modus-wc-tree-view size="sm">
  <modus-wc-tree-item
    label=${e.label}
    value=${e.value}
  >
    <modus-wc-icon slot="start" name="search"></modus-wc-icon>
    <div slot="end" style="display: flex; align-items: center;">
      <div
        style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px; align-self: stretch;"
      ></div>
      <modus-wc-button
        variant="borderless"
        size="sm"
        aria-label="Open folder"
      >
        <modus-wc-icon name="folder_closed" size="sm"></modus-wc-icon>
        <modus-wc-icon name="chevron_right" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    `},v={args:{checkbox:!0},parameters:{docs:{source:{code:Q}}},render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?checkbox=${e.checkbox}
    label=${e.label}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},h={args:{"tooltip-content":"Tooltip content"},parameters:{docs:{source:{code:U}}},render:e=>r`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=${e.label}
    tooltip-content=${a(e["tooltip-content"])}
    value=${e.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    `},f={parameters:{docs:{source:{code:X}}},render:e=>{if(!customElements.get("tree-item-shadow-host")){const i=j({componentTag:"modus-wc-tree-view",propsMapper:(t,s)=>{const d=s;d.ariaLabel="Shadow DOM Tree View";let c=s.querySelector("modus-wc-tree-item");c||(c=document.createElement("modus-wc-tree-item"),s.innerHTML="",s.appendChild(c));const o=c;o.bordered=!!t.bordered,o.blockExpand=!!t["block-expand"],o.checkbox=!!t.checkbox,o.customClass=t["custom-class"]||"",o.disabled=!!t.disabled,o.focused=!!t.focused,o.hasSubmenu=!!t["has-submenu"],o.label=t.label,o.selected=!!t.selected,o.size=t.size||"md",o.subLabel=t["sub-label"]||"",o.tooltipContent=t["tooltip-content"]||"",o.tooltipPosition=t["tooltip-position"]||"auto",o.value=t.value}});customElements.define("tree-item-shadow-host",i)}return r`<tree-item-shadow-host
      .props=${{...e}}
    ></tree-item-shadow-host>`}};var y,I,$;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template
}`,...($=(I=u.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var k,S,E;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeItemWithStartSlotSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?bordered=\${args.bordered}
    ?disabled=\${args.disabled}
    label=\${args.label}
    ?selected=\${args.selected}
    size=\${args.size}
    value=\${args.value}
  >
    <modus-wc-icon slot="start" name="alert" size="sm"></modus-wc-icon>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(E=(S=w.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var x,z,C;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeItemWithEndSlotSourceCode
      }
    }
  },
  render: args => {
    const btnRef = {
      el: null as HTMLElement | null
    };
    const menuRef = {
      el: null as HTMLElement | null
    };
    let outsideClickAttached = false;
    const attachOutsideClick = () => {
      if (outsideClickAttached || !btnRef.el || !menuRef.el) return;
      outsideClickAttached = true;
      document.addEventListener('click', e => {
        const btn = btnRef.el;
        const menu = menuRef.el;
        if (!btn || !menu || menu.style.display !== 'block') return;
        if (btn.contains(e.target as Node) || menu.contains(e.target as Node)) {
          return;
        }
        menu.style.display = 'none';
      });
    };
    const toggleMenu = (e: Event) => {
      e.stopPropagation();
      const menu = menuRef.el;
      if (!menu) return;
      const isOpen = menu.style.display === 'block';
      menu.style.display = isOpen ? 'none' : 'block';
    };
    const closeMenu = () => {
      if (menuRef.el) menuRef.el.style.display = 'none';
    };
    const onBtnRef = (el: Element | undefined) => {
      if (!el) return;
      btnRef.el = el as HTMLElement;
      attachOutsideClick();
    };
    const onMenuRef = (el: Element | undefined) => {
      if (!el) return;
      menuRef.el = el as HTMLElement;
      attachOutsideClick();
    };

    // prettier-ignore
    return html\`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=\${args.label}
    value=\${args.value}
  >
    <modus-wc-icon slot="start" name="folder" size="sm"></modus-wc-icon>
    <div slot="end" style="position: relative; display: flex; align-items: center;">
      <modus-wc-button
        \${ref(onBtnRef)}
        variant="borderless"
        size="sm"
        shape="circle"
        color="primary"
        aria-label="More options"
        @buttonClick=\${toggleMenu}
      >
        <modus-wc-icon name="more_vertical" size="sm"></modus-wc-icon>
      </modus-wc-button>
      <div
        \${ref(onMenuRef)}
        style="display: none; position: absolute; right: 0; top: 100%; z-index: 1000;"
      >
        <modus-wc-menu size="sm" bordered="true" @itemSelect=\${closeMenu}>
          <modus-wc-menu-item label="Rename" value="rename"></modus-wc-menu-item>
          <modus-wc-menu-item label="Duplicate" value="duplicate"></modus-wc-menu-item>
          <modus-wc-menu-item label="Delete" value="delete"></modus-wc-menu-item>
        </modus-wc-menu>
      </div>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(C=(z=p.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var T,M,R;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeItemCustomSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view size="sm">
  <modus-wc-tree-item
    label=\${args.label}
    value=\${args.value}
  >
    <modus-wc-icon slot="start" name="search"></modus-wc-icon>
    <div slot="end" style="display: flex; align-items: center;">
      <div
        style="width: 1px; background: currentColor; opacity: 0.3; margin-inline-end: 4px; align-self: stretch;"
      ></div>
      <modus-wc-button
        variant="borderless"
        size="sm"
        aria-label="Open folder"
      >
        <modus-wc-icon name="folder_closed" size="sm"></modus-wc-icon>
        <modus-wc-icon name="chevron_right" size="sm"></modus-wc-icon>
      </modus-wc-button>
    </div>
  </modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(R=(M=b.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var B,L,D;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    checkbox: true
  },
  parameters: {
    docs: {
      source: {
        code: treeItemWithCheckboxSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view>
  <modus-wc-tree-item
    ?checkbox=\${args.checkbox}
    label=\${args.label}
    value=\${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(D=(L=v.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var W,O,H;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    'tooltip-content': 'Tooltip content'
  },
  parameters: {
    docs: {
      source: {
        code: treeItemWithTooltipSourceCode
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tree-view>
  <modus-wc-tree-item
    label=\${args.label}
    tooltip-content=\${ifDefined(args['tooltip-content'])}
    value=\${args.value}
  ></modus-wc-tree-item>
</modus-wc-tree-view>
    \`;
  }
}`,...(H=(O=h.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var _,P,A;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: treeItemShadowDomParentSourceCode
      }
    }
  },
  render: args => {
    if (!customElements.get('tree-item-shadow-host')) {
      const TreeItemShadowHost = createShadowHostClass<TreeItemArgs>({
        componentTag: 'modus-wc-tree-view',
        propsMapper: (v: TreeItemArgs, el: HTMLElement) => {
          const treeViewEl = el as unknown as {
            ariaLabel: string;
          };
          treeViewEl.ariaLabel = 'Shadow DOM Tree View';
          let treeItem = el.querySelector('modus-wc-tree-item');
          if (!treeItem) {
            treeItem = document.createElement('modus-wc-tree-item');
            el.innerHTML = '';
            el.appendChild(treeItem);
          }
          const treeItemEl = treeItem as unknown as {
            bordered: boolean;
            blockExpand: boolean;
            checkbox: boolean;
            customClass: string;
            disabled: boolean;
            focused: boolean;
            hasSubmenu: boolean;
            label: string;
            selected: boolean;
            size: string;
            subLabel: string;
            tooltipContent: string;
            tooltipPosition: string;
            value: string;
          };
          treeItemEl.bordered = Boolean(v.bordered);
          treeItemEl.blockExpand = Boolean(v['block-expand']);
          treeItemEl.checkbox = Boolean(v.checkbox);
          treeItemEl.customClass = v['custom-class'] || '';
          treeItemEl.disabled = Boolean(v.disabled);
          treeItemEl.focused = Boolean(v.focused);
          treeItemEl.hasSubmenu = Boolean(v['has-submenu']);
          treeItemEl.label = v.label;
          treeItemEl.selected = Boolean(v.selected);
          treeItemEl.size = v.size || 'md';
          treeItemEl.subLabel = v['sub-label'] || '';
          treeItemEl.tooltipContent = v['tooltip-content'] || '';
          treeItemEl.tooltipPosition = v['tooltip-position'] || 'auto';
          treeItemEl.value = v.value;
        }
      });
      customElements.define('tree-item-shadow-host', TreeItemShadowHost);
    }
    return html\`<tree-item-shadow-host
      .props=\${{
      ...args
    }}
    ></tree-item-shadow-host>\`;
  }
}`,...(A=(P=f.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const ie=["Default","WithStartSlot","WithEndSlot","CustomTreeItem","WithCheckbox","WithTooltip","ShadowDomParent"];export{b as CustomTreeItem,u as Default,f as ShadowDomParent,v as WithCheckbox,p as WithEndSlot,w as WithStartSlot,h as WithTooltip,ie as __namedExportsOrder,me as default};
