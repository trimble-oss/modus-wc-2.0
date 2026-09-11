import{w as H}from"./decorator-Cv9na35H.js";import{b as p}from"./lit-element-DgBvYnzn.js";import{o as l}from"./if-defined-BnVFTJ4o.js";import{c as P}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const s=[{label:"Home",icon:"home"},{label:"Inbox",icon:"email"},{label:"Settings",icon:"settings"}],q=o=>`
<script>
  const dock = document.querySelector('modus-wc-dock');
  dock.items = ${JSON.stringify(o.items??s,null,2)};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
<\/script>`,C=o=>['  aria-label="Dock navigation"',o["custom-class"]?`  custom-class="${o["custom-class"]}"`:null,`  position="${o.position??"bottom"}"`,o["show-labels"]===!1?'  show-labels="false"':null,`  size="${o.size??"md"}"`,o["active-item-index"]!==void 0?`  active-item-index="${o["active-item-index"]}"`:null].filter(t=>!!t).join(`
`),M=o=>`<modus-wc-dock
${C(o)}
></modus-wc-dock>${q(o)}`,T=(o,e)=>p`
  <modus-wc-dock
    aria-label="Dock navigation"
    active-item-index=${l(o["active-item-index"])}
    custom-class=${l(o["custom-class"])}
    .items=${o.items??s}
    position=${e}
    .showLabels=${o["show-labels"]??!0}
    size=${l(o.size??"md")}
  ></modus-wc-dock>
`,L=`
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

  .dock-container--bottom modus-wc-dock .modus-wc-dock.modus-wc-dock-bottom,
  .dock-container--top modus-wc-dock .modus-wc-dock.modus-wc-dock-top {
    width: 100%;
  }

  .dock-container--bottom modus-wc-dock .modus-wc-dock.modus-wc-dock-bottom .modus-wc-dock-item,
  .dock-container--top modus-wc-dock .modus-wc-dock.modus-wc-dock-top .modus-wc-dock-item {
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
    width: auto;
  }

  .dock-container--left modus-wc-dock .modus-wc-dock.modus-wc-dock-left,
  .dock-container--right modus-wc-dock .modus-wc-dock.modus-wc-dock-right {
    height: 100%;
    min-height: 100%;
  }

  .dock-container--left modus-wc-dock .modus-wc-dock.modus-wc-dock-left .modus-wc-dock-item,
  .dock-container--right modus-wc-dock .modus-wc-dock.modus-wc-dock-right .modus-wc-dock-item {
    flex: 1 1 0;
    height: auto;
    min-height: 0;
  }

  /* Left position: pin to the left edge */
  .dock-container--left modus-wc-dock {
    left: 0;
  }

  /* Right position: pin to the right edge */
  .dock-container--right modus-wc-dock {
    right: 0;
  }
`,O=o=>{const e=o.position??"bottom";return`<style>${L}
</style>

<div class="dock-container dock-container--${e}">
  <modus-wc-dock
${C({...o,position:e})}
  ></modus-wc-dock>
</div>
<script>
  const dock = document.querySelector('.dock-container modus-wc-dock');
  dock.items = ${JSON.stringify(o.items??s,null,2)};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
<\/script>`},u=o=>({docs:{description:{story:o}}}),j={title:"Components/Dock",component:"modus-wc-dock",args:{items:s,position:"bottom","show-labels":!0,size:"md","active-item-index":2},argTypes:{items:{table:{type:{detail:`
            Interface: IDockItem
            Properties:
            - icon (string): Modus icon name
            - label (string): Text label for the dock item
            - disabled (boolean, optional): If true, the dock item cannot be selected
          `}}},position:{control:{type:"select"},options:["top","bottom","left","right"]},"show-labels":{control:"boolean"},size:{control:{type:"select"},options:["sm","md","lg"]},"active-item-index":{control:{type:"number",min:0,max:2,step:1}}},decorators:[H],parameters:{actions:{handles:["itemSelect"]},layout:"padded",docs:{description:{component:"Dock navigation bar for navigating between primary screens. The dock sizes itself from its orientation, item count, and size."},source:{transform:(o,{args:e})=>M(e)}}}},m={render:o=>T(o,o.position??"bottom")},c={...m,parameters:u("Bottom dock with labels. The dock renders at its intrinsic size without requiring container styles.")},i={...m,args:{items:s,"show-labels":!1},parameters:u("Icon-only dock. Labels are hidden visually but remain available to assistive technologies via `aria-label` on each item button.")},a={...m,name:"Active and disabled",args:{items:[{label:"Home",icon:"home"},{label:"Inbox",icon:"email",disabled:!0},{label:"Settings",icon:"settings"}],"active-item-index":0},parameters:u("Dock with an active item and a disabled item that cannot be selected.")},d={...m,name:"Container placement",parameters:{docs:{description:{story:'Use container CSS to pin the dock to an edge and stretch it along that axis. Wrap the dock in `dock-container dock-container--{position}` where `{position}` matches the dock `position` prop (for example, `dock-container--left` with `position="left"`). In this story, that wrapper class updates automatically when you change `position`.'},source:{transform:(o,{args:e})=>O(e)}}},render:o=>{const e=o.position??"bottom";return p`
      <style>
        ${L}
      </style>

      <div class="dock-container dock-container--${e}">
        ${T(o,e)}
      </div>
    `}},r={parameters:{docs:{source:{code:`<dock-shadow-host></dock-shadow-host>

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
<\/script>`}}},render:o=>{if(!customElements.get("dock-shadow-host")){const e=P({componentTag:"modus-wc-dock",propsMapper:(t,A)=>{const n=A;n.activeItemIndex=t["active-item-index"]??0,n.customClass=t["custom-class"]||"",n.items=t.items??s,n.position=t.position??"bottom",n.showLabels=t["show-labels"]??!0,n.size=t.size??"md"}});customElements.define("dock-shadow-host",e)}return p`<dock-shadow-host .props=${{...o}}></dock-shadow-host>`}};var h,k,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  parameters: dockStoryDescription('Bottom dock with labels. The dock renders at its intrinsic size without requiring container styles.')
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var b,g,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    items: defaultItems,
    'show-labels': false
  },
  parameters: dockStoryDescription('Icon-only dock. Labels are hidden visually but remain available to assistive technologies via \`aria-label\` on each item button.')
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
  parameters: dockStoryDescription('Dock with an active item and a disabled item that cannot be selected.')
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,I,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  name: 'Container placement',
  parameters: {
    docs: {
      description: {
        story: 'Use container CSS to pin the dock to an edge and stretch it along that axis. Wrap the dock in \`dock-container dock-container--{position}\` where \`{position}\` matches the dock \`position\` prop (for example, \`dock-container--left\` with \`position="left"\`). In this story, that wrapper class updates automatically when you change \`position\`.'
      },
      source: {
        transform: (_src, {
          args
        }) => formatContainerPlacementSourceCode(args as DockArgs)
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
}`,...(D=(I=d.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var $,E,z;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(E=r.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const R=["Default","IconsOnly","ActiveAndDisabled","ContainerPlacement","ShadowDomParent"];export{a as ActiveAndDisabled,d as ContainerPlacement,c as Default,i as IconsOnly,r as ShadowDomParent,R as __namedExportsOrder,j as default};
