import{w as O}from"./decorator-D4YmxizW.js";import{b as p}from"./lit-element-DgBvYnzn.js";import{o as l}from"./if-defined-BnVFTJ4o.js";import{c as q}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const s=[{label:"Home",icon:"home"},{label:"Inbox",icon:"email"},{label:"Settings",icon:"settings"}],A=({activeItemIndex:o=2,items:t=s,position:e="bottom",showLabels:r=!0,size:n="md"})=>{const H=JSON.stringify(t,null,2).split(`
`).map((u,M)=>M===0?u:`    ${u}`).join(`
`);return`<script>
  const dock = document.createElement('modus-wc-dock');
  dock.id = 'app-dock';
  dock.setAttribute('aria-label', 'Dock navigation');
  dock.activeItemIndex = ${o};
  dock.setAttribute('position', '${e}');
  dock.showLabels = ${r};
  dock.setAttribute('size', '${n}');
  dock.items = ${H};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
  document.body.appendChild(dock);
<\/script>`},P=(o,t)=>p`
  <modus-wc-dock
    aria-label="Dock navigation"
    active-item-index=${l(o["active-item-index"])}
    custom-class=${l(o["custom-class"])}
    .items=${o.items??s}
    position=${t}
    .showLabels=${o["show-labels"]??!0}
    size=${l(o.size??"md")}
  ></modus-wc-dock>
`,T=`
  /* Shared demo container — gives the dock a bounded layout area */
  .dock-container {
    background-color: var(--modus-wc-color-base-100);
    border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
    height: 25rem;
    position: relative;
    width: 100%;
  }

  /* All positions: take the dock out of normal flow so it can be pinned to an edge */
  .dock-container modus-wc-dock {
    display: block;
    position: absolute;
  }

  /* Top & bottom: stretch full container width */
  .dock-container--bottom modus-wc-dock,
  .dock-container--top modus-wc-dock {
    left: 0;
    right: 0;
    width: 100%;
  }

  .dock-container--bottom modus-wc-dock .modus-wc-dock,
  .dock-container--top modus-wc-dock .modus-wc-dock {
    width: 100%;
  }

  .dock-container--bottom modus-wc-dock .modus-wc-dock-item,
  .dock-container--top modus-wc-dock .modus-wc-dock-item {
    flex: 1 1 0;
    width: auto;
  }

  /* Bottom position: pin to the bottom edge */
  .dock-container--bottom modus-wc-dock {
    bottom: 0;
  }

  /* Top position: pin to the top edge */
  .dock-container--top modus-wc-dock {
    top: 0;
  }

  /* Left & right: stretch full container height */
  .dock-container--left modus-wc-dock,
  .dock-container--right modus-wc-dock {
    bottom: 0;
    height: 100%;
    top: 0;
  }

  .dock-container--left modus-wc-dock .modus-wc-dock,
  .dock-container--right modus-wc-dock .modus-wc-dock {
    height: 100%;
  }

  .dock-container--left modus-wc-dock .modus-wc-dock-item,
  .dock-container--right modus-wc-dock .modus-wc-dock-item {
    flex: 1 1 0;
    height: auto;
  }

  /* Left position: pin to the left edge */
  .dock-container--left modus-wc-dock {
    left: 0;
  }

  /* Right position: pin to the right edge */
  .dock-container--right modus-wc-dock {
    right: 0;
  }
`,B=()=>`<style>${T}
</style>

<div
  class="dock-container dock-container--bottom"
  id="dock-container"
></div>

<script>
  const dock = document.createElement('modus-wc-dock');
  dock.setAttribute('aria-label', 'Dock navigation');
  dock.activeItemIndex = 2;
  dock.setAttribute('position', 'bottom');
  dock.showLabels = true;
  dock.setAttribute('size', 'md');
  dock.items = ${JSON.stringify(s,null,2)};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
  document.getElementById('dock-container').appendChild(dock);
<\/script>`,h=o=>({docs:{description:{story:o==null?void 0:o.storyDescription},source:{code:A({activeItemIndex:(o==null?void 0:o.activeItemIndex)??2,items:(o==null?void 0:o.items)??s,position:(o==null?void 0:o.position)??"bottom",showLabels:(o==null?void 0:o.showLabels)??!0,size:(o==null?void 0:o.size)??"md"})}}}),F={title:"Components/Dock",component:"modus-wc-dock",args:{items:s,position:"bottom","show-labels":!0,size:"md","active-item-index":2},argTypes:{items:{table:{type:{detail:`
            Interface: IDockItem
            Properties:
            - icon (string): Modus icon name
            - label (string): Text label for the dock item
            - disabled (boolean, optional): If true, the dock item cannot be selected
          `}}},position:{control:{type:"select"},options:["top","bottom","left","right"]},"show-labels":{control:"boolean"},size:{control:{type:"select"},options:["sm","md","lg"]},"active-item-index":{control:{type:"number",min:0,max:2,step:1}}},decorators:[O],parameters:{actions:{handles:["itemSelect"]},layout:"padded",docs:{description:{component:"Dock navigation bar for navigating between primary screens. The dock sizes itself from its orientation, item count, and size."},source:{code:A({})}}}},k={render:o=>P(o,o.position??"bottom")},c={...k,parameters:h({storyDescription:"Bottom dock with labels. The dock renders at its intrinsic size without requiring container styles."})},i={...k,args:{items:s,"show-labels":!1},parameters:h({showLabels:!1,storyDescription:"Icon-only dock. Labels are hidden visually but remain available to assistive technologies via `aria-label` on each item button."})},a={...k,name:"Active and disabled",args:{items:[{label:"Home",icon:"home"},{label:"Inbox",icon:"email",disabled:!0},{label:"Settings",icon:"settings"}],"active-item-index":0},parameters:h({activeItemIndex:0,items:[{label:"Home",icon:"home"},{label:"Inbox",icon:"email",disabled:!0},{label:"Settings",icon:"settings"}],storyDescription:"Dock with an active item and a disabled item that cannot be selected."})},d={name:"Container placement",parameters:{docs:{description:{story:"Use container CSS to pin the dock to an edge and stretch it along that axis. Change `position` to see top, bottom, left, and right placement."},source:{code:B()}}},render:o=>{const t=o.position??"bottom";return p`
      <style>
        ${T}
      </style>

      <div class="dock-container dock-container--${t}">
        ${P(o,t)}
      </div>
    `}},m={parameters:{docs:{source:{code:`<dock-shadow-host></dock-shadow-host>

<script>
  customElements.whenDefined('dock-shadow-host').then(() => {
    const host = document.querySelector('dock-shadow-host');
    host.props = {
      items: [
        { label: 'Home', icon: 'home' },
        { label: 'Inbox', icon: 'email' },
        { label: 'Settings', icon: 'settings' },
      ],
      position: 'bottom',
      showLabels: true,
      size: 'md',
      activeItemIndex: 2,
    };
  });
<\/script>`}}},render:o=>{if(!customElements.get("dock-shadow-host")){const t=q({componentTag:"modus-wc-dock",propsMapper:(e,r)=>{const n=r;n.activeItemIndex=e["active-item-index"]??0,n.customClass=e["custom-class"]||"",n.items=e.items??s,n.position=e.position??"bottom",n.showLabels=e["show-labels"]??!0,n.size=e.size??"md"}});customElements.define("dock-shadow-host",t)}return p`<dock-shadow-host .props=${{...o}}></dock-shadow-host>`}};var b,w,g;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  parameters: dockStoryParameters({
    storyDescription: 'Bottom dock with labels. The dock renders at its intrinsic size without requiring container styles.'
  })
}`,...(g=(w=c.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var I,f,y;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    items: defaultItems,
    'show-labels': false
  },
  parameters: dockStoryParameters({
    showLabels: false,
    storyDescription: 'Icon-only dock. Labels are hidden visually but remain available to assistive technologies via \`aria-label\` on each item button.'
  })
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,x,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  name: 'Active and disabled',
  args: {
    items: [{
      label: 'Home',
      icon: 'home'
    }, {
      label: 'Inbox',
      icon: 'email',
      disabled: true
    }, {
      label: 'Settings',
      icon: 'settings'
    }],
    'active-item-index': 0
  },
  parameters: dockStoryParameters({
    activeItemIndex: 0,
    items: [{
      label: 'Home',
      icon: 'home'
    }, {
      label: 'Inbox',
      icon: 'email',
      disabled: true
    }, {
      label: 'Settings',
      icon: 'settings'
    }],
    storyDescription: 'Dock with an active item and a disabled item that cannot be selected.'
  })
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var v,E,$;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Container placement',
  parameters: {
    docs: {
      description: {
        story: 'Use container CSS to pin the dock to an edge and stretch it along that axis. Change \`position\` to see top, bottom, left, and right placement.'
      },
      source: {
        code: buildContainerPlacementSourceCode()
      }
    }
  },
  render: args => {
    const position = args.position ?? 'bottom';
    return html\`
      <style>
        \${containerPlacementStyles}
      </style>

      <div class="dock-container dock-container--\${position}">
        \${renderDockElement(args, position)}
      </div>
    \`;
  }
}`,...($=(E=d.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var C,z,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<dock-shadow-host></dock-shadow-host>

<script>
  customElements.whenDefined('dock-shadow-host').then(() => {
    const host = document.querySelector('dock-shadow-host');
    host.props = {
      items: [
        { label: 'Home', icon: 'home' },
        { label: 'Inbox', icon: 'email' },
        { label: 'Settings', icon: 'settings' },
      ],
      position: 'bottom',
      showLabels: true,
      size: 'md',
      activeItemIndex: 2,
    };
  });
<\/script>\`
      }
    }
  },
  render: args => {
    if (!customElements.get('dock-shadow-host')) {
      const DockShadowHost = createShadowHostClass<DockArgs>({
        componentTag: 'modus-wc-dock',
        propsMapper: (value: DockArgs, el: HTMLElement) => {
          const dockEl = el as unknown as {
            activeItemIndex: number;
            customClass: string;
            items: IDockItem[];
            position: DockPosition;
            showLabels: boolean;
            size: ModusSize;
          };
          dockEl.activeItemIndex = value['active-item-index'] ?? 0;
          dockEl.customClass = value['custom-class'] || '';
          dockEl.items = value.items ?? defaultItems;
          dockEl.position = value.position ?? 'bottom';
          dockEl.showLabels = value['show-labels'] ?? true;
          dockEl.size = value.size ?? 'md';
        }
      });
      customElements.define('dock-shadow-host', DockShadowHost);
    }
    return html\`<dock-shadow-host .props=\${{
      ...args
    }}></dock-shadow-host>\`;
  }
}`,...(L=(z=m.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const G=["Default","IconsOnly","ActiveAndDisabled","ContainerPlacement","ShadowDomParent"];export{a as ActiveAndDisabled,d as ContainerPlacement,c as Default,i as IconsOnly,m as ShadowDomParent,G as __namedExportsOrder,F as default};
