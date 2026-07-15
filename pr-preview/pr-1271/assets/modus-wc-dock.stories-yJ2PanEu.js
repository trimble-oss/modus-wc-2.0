import{w as C}from"./decorator-D4YmxizW.js";import{b as c}from"./lit-element-DgBvYnzn.js";import{o as u}from"./if-defined-BnVFTJ4o.js";import{c as P}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const a=[{label:"Home",icon:"home"},{label:"Inbox",icon:"email"},{label:"Settings",icon:"settings"}],M=c`
  <style>
    .dock-demo-frame {
      border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
      display: grid;
      height: 520px;
      overflow: hidden;
      width: 100%;
    }

    .dock-demo-frame__content {
      background-color: var(--modus-wc-color-base-100);
    }

    .dock-demo-frame modus-wc-dock {
      display: block;
      height: 100%;
      min-height: 0;
      min-width: 0;
      width: 100%;
    }

    .dock-demo-frame modus-wc-dock .modus-wc-dock {
      background-color: var(--modus-wc-color-base-page);
    }

    .dock-demo-frame--top {
      grid-template-rows: auto 1fr;
    }

    .dock-demo-frame--bottom {
      grid-template-rows: 1fr auto;
    }

    .dock-demo-frame--left {
      grid-template-columns: auto 1fr;
    }

    .dock-demo-frame--right {
      grid-template-columns: 1fr auto;
    }
  </style>
`,H=({activeItemIndex:e=2,items:s=a,position:o="bottom",showLabels:n=!0,size:t="md"})=>{const i=`
    show-labels="${n}"`,T=JSON.stringify(s,null,2).split(`
`).map((w,_)=>_===0?w:`    ${w}`).join(`
`),d=`<modus-wc-dock
    id="app-dock"
    aria-label="Dock navigation"
    active-item-index="${e}"
    position="${o}"${i}
    size="${t}"
  ></modus-wc-dock>`,m='<div class="dock-demo-frame__content" aria-hidden="true"></div>',A=o==="top"?`${d}
  ${m}`:o==="left"?`${d}
  ${m}`:o==="right"?`${m}
  ${d}`:`${m}
  ${d}`;return`<style>
  .dock-demo-frame {
    border: 1px dashed var(--modus-wc-color-base-content-low-contrast);
    display: grid;
    height: 520px;
    overflow: hidden;
    width: 100%;
  }

  .dock-demo-frame__content {
    background-color: var(--modus-wc-color-base-100);
  }

  .dock-demo-frame modus-wc-dock {
    display: block;
    height: 100%;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }

  .dock-demo-frame modus-wc-dock .modus-wc-dock {
    background-color: var(--modus-wc-color-base-page);
  }

  .dock-demo-frame--top {
    grid-template-rows: auto 1fr;
  }

  .dock-demo-frame--bottom {
    grid-template-rows: 1fr auto;
  }

  .dock-demo-frame--left {
    grid-template-columns: auto 1fr;
  }

  .dock-demo-frame--right {
    grid-template-columns: 1fr auto;
  }
</style>

<div class="dock-demo-frame dock-demo-frame--${o}">
  ${A}
</div>

<script>
  const dock = document.getElementById('app-dock');
  dock.items = ${T};
  dock.addEventListener('itemSelect', (event) => {
    dock.activeItemIndex = event.detail.index;
  });
<\/script>`},q=(e,s)=>c`
  <modus-wc-dock
    aria-label="Dock navigation"
    active-item-index=${u(e["active-item-index"])}
    custom-class=${u(e["custom-class"])}
    .items=${e.items??a}
    position=${s}
    .showLabels=${e["show-labels"]??!0}
    size=${u(e.size??"md")}
  ></modus-wc-dock>
`,B=e=>{const s=e.position??"bottom",o=e.items??a,n=q({...e,items:o},s),t=c`<div
    class="dock-demo-frame__content"
    aria-hidden="true"
  ></div>`;return c`
${M}
<div class="dock-demo-frame dock-demo-frame--${s}">
  ${s==="top"||s==="left"?[n,t]:[t,n]}
</div>
  `},b=e=>({docs:{description:{story:e==null?void 0:e.storyDescription},source:{code:H({activeItemIndex:(e==null?void 0:e.activeItemIndex)??2,items:(e==null?void 0:e.items)??a,position:(e==null?void 0:e.position)??"bottom",showLabels:(e==null?void 0:e.showLabels)??!0,size:(e==null?void 0:e.size)??"md"})}}}),K={title:"Components/Dock",component:"modus-wc-dock",args:{items:a,position:"bottom","show-labels":!0,size:"md","active-item-index":2},argTypes:{items:{table:{type:{detail:`
            Interface: IDockItem
            Properties:
            - icon (string): Modus icon name
            - label (string): Text label for the dock item
            - disabled (boolean, optional): If true, the dock item cannot be selected
          `}}},position:{control:{type:"select"},options:["top","bottom","left","right"]},"show-labels":{control:"boolean"},size:{control:{type:"select"},options:["sm","md","lg"]},"active-item-index":{control:{type:"number",min:0,max:2,step:1}}},decorators:[C,(e,s)=>{const o=e();return queueMicrotask(()=>{const n=document.querySelector(".dock-demo-frame"),t=(n==null?void 0:n.querySelector("modus-wc-dock"))??null;if(!t)return;const i=s.args.items??a;t.items=i,s.args["active-item-index"]!==void 0&&(t.activeItemIndex=s.args["active-item-index"])}),o}],parameters:{actions:{handles:["itemSelect"]},layout:"padded",docs:{description:{component:"Dock navigation bar for navigating between primary screens. Position the host at an app edge in your layout; the stories below use a demo frame to pin the dock to each corner."},source:{code:H({})}}}},k={render:e=>B(e)},r={...k,parameters:b({storyDescription:"Bottom dock with labels. The demo frame positions the dock flush to the bottom edge of the content area."})},l={...k,args:{items:a,"show-labels":!1},parameters:b({showLabels:!1,storyDescription:"Icon-only dock. Labels are hidden visually but remain available to assistive technologies via `aria-label` on each item button."})},h={...k,name:"Active and disabled",args:{items:[{label:"Home",icon:"home"},{label:"Inbox",icon:"email",disabled:!0},{label:"Settings",icon:"settings"}],"active-item-index":0},parameters:b({activeItemIndex:0,items:[{label:"Home",icon:"home"},{label:"Inbox",icon:"email",disabled:!0},{label:"Settings",icon:"settings"}],storyDescription:"Dock with an active item and a disabled item that cannot be selected."})},p={parameters:{docs:{source:{code:`<dock-shadow-host></dock-shadow-host>

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
<\/script>`}}},render:e=>{if(!customElements.get("dock-shadow-host")){const s=P({componentTag:"modus-wc-dock",propsMapper:(o,n)=>{const t=n;t.activeItemIndex=o["active-item-index"]??0,t.customClass=o["custom-class"]||"",t.items=o.items??a,t.position=o.position??"bottom",t.showLabels=o["show-labels"]??!0,t.size=o.size??"md"}});customElements.define("dock-shadow-host",s)}return c`<dock-shadow-host .props=${{...e}}></dock-shadow-host>`}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  parameters: dockStoryParameters({
    storyDescription: 'Bottom dock with labels. The demo frame positions the dock flush to the bottom edge of the content area.'
  })
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var I,x,D;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    items: defaultItems,
    'show-labels': false
  },
  parameters: dockStoryParameters({
    showLabels: false,
    storyDescription: 'Icon-only dock. Labels are hidden visually but remain available to assistive technologies via \`aria-label\` on each item button.'
  })
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var v,S,$;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...($=(S=h.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var E,z,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const Q=["Default","IconsOnly","ActiveAndDisabled","ShadowDomParent"];export{h as ActiveAndDisabled,r as Default,l as IconsOnly,p as ShadowDomParent,Q as __namedExportsOrder,K as default};
