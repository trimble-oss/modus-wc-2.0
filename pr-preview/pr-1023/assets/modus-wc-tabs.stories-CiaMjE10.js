import{w as O}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-CucEn6F2.js";import{o as t}from"./if-defined-BiZP-SBN.js";import{c as W}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const K={title:"Components/Tabs",component:"modus-wc-tabs",args:{size:"md",tabs:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3",disabled:!0},{icon:"home"}],"tab-style":"bordered"},argTypes:{tabs:{description:"Array of tab objects defining the tabs to display",table:{type:{detail:`
            Interface: ITab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
            - slotName (string, optional): The slot name to use for custom tab header content
          `}}},"tab-style":{control:{type:"select"},options:["boxed","bordered","lifted","none"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[O,(e,s)=>{const{tabs:n}=s.args??{};return Array.isArray(n)&&(s.args.tabs=j(n)),e()}],parameters:{actions:{handles:["tabChange"]}}},j=e=>e.map(s=>{const n={...s};return n.disabled!==!0&&delete n.disabled,n}),p=e=>{const s=j(e);return`
<script>
  const tabs = ${JSON.stringify(s,null,2)};
  const tabElement = document.querySelector('modus-wc-tabs');
  tabElement.tabs = tabs;
<\/script>`},u={parameters:{docs:{source:{transform:(e,{args:s})=>`<modus-wc-tabs
  aria-label="Tab group"
  tab-style="${t(s["tab-style"])}"
  size="${t(s.size)}">
</modus-wc-tabs>${p(s.tabs)}`}}},render:e=>o`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  tab-style="${t(e["tab-style"])}"
  .tabs=${e.tabs}
  size="${t(e.size)}"
>
</modus-wc-tabs>
    `},i={...u},r={args:{tabs:[{icon:"home",iconPosition:"left",label:"Home",slotName:"home-tab-content"},{icon:"clipboard",iconPosition:"right",label:"Tasks"},{slotName:"actions-tab-content"},{slotName:"notifications-tab-content"}]},parameters:{docs:{description:{story:"Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases."},source:{transform:(e,{args:s})=>`<style>
  .red-icon {
    color: red;
  }
  /* Style for disabled badge and icon components */
  modus-wc-badge[disabled="true"],
  modus-wc-icon[disabled="true"] ,
  button[disabled] modus-wc-badge,
  button[disabled] modus-wc-icon {
    opacity: 0.3;
    pointer-events: none;
  }
</style>
<modus-wc-tabs
  size="md"
  tab-style="bordered"
  aria-label="Custom tab group"
>
  <span
    slot="home-tab-content"
    style="display: inline-flex; align-items: center;padding-top: 6px"
  >
    <modus-wc-badge
      color="warning"
      size="md"
      variant="filled"
    >
      <modus-wc-icon decorative="" name="home" size="xs"></modus-wc-icon>
      Home
    </modus-wc-badge>
  </span>
  <span
    slot="actions-tab-content"
    style="display: inline-flex; align-items: center; gap: 8px;"
  >
    Actions
    <modus-wc-icon
      name="warning"
      variant="solid"
      size="md"
      custom-class="red-icon"
    ></modus-wc-icon>
  </span>
  <span
    slot="notifications-tab-content"
    style="display: inline-flex; align-items: center; gap: 8px;"
  >
    Notifications
    <modus-wc-badge
      color="primary"
      size="md"
      variant="counter"
      >5</modus-wc-badge
    >
  </span>
</modus-wc-tabs>${p(s.tabs)}`}}},render:e=>o`
    <style>
      .red-icon {
        color: red;
      }
      /* Style for disabled badge and icon components */
      modus-wc-badge[disabled="true"],
      modus-wc-icon[disabled="true"] ,
      button[disabled] modus-wc-badge,
      button[disabled] modus-wc-icon {
        opacity: 0.3;
        pointer-events: none;
      }
    </style>
    <modus-wc-tabs
      .tabs=${e.tabs}
      size="${t(e.size)}"
      tab-style="${t(e["tab-style"])}"
      active-tab-index="${t(e.activeTabIndex)}"
      aria-label="Custom tab group"
    >
      <span
        slot="home-tab-content"
        style="display: inline-flex; align-items: center;padding-top: 6px"
      >
        <modus-wc-badge
          color="warning"
          size="${t(e.size)}"
          variant="filled"
        >
          <modus-wc-icon decorative="" name="home" size="xs"></modus-wc-icon>
          Home
        </modus-wc-badge>
      </span>
      <span
        slot="actions-tab-content"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Actions
        <modus-wc-icon
          name="warning"
          variant="solid"
          size="${t(e.size)}"
          custom-class="red-icon"
        ></modus-wc-icon>
      </span>
      <span
        slot="notifications-tab-content"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Notifications
        <modus-wc-badge
          color="primary"
          size="${t(e.size)}"
          variant="counter"
          >5</modus-wc-badge
        >
      </span>
    </modus-wc-tabs>
    
  `},c={...u,args:{activeTabIndex:1,tabs:[{label:"Normal"},{label:"Active"},{label:"Disabled",disabled:!0}]}},d={...u,args:{tabs:[{icon:"home"},{icon:"settings",iconPosition:"left",label:"Settings"},{icon:"alert",iconPosition:"right",label:"Alerts"}]}},l={parameters:{docs:{source:{transform:(e,{args:s})=>`<modus-wc-tabs
  aria-label="Tab group"
  tab-style="bordered"
  size="md"
>
  <p slot="tab-0">
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
  <p slot="tab-1">
    input (noun) : information fed into a data processing system or computer
  </p>
  <p slot="tab-2">
    secret (noun) : kept from knowledge or view : hidden
  </p>
  <p slot="tab-3">
    snapshot (noun) : an impression or view of something brief or transitory
  </p>
</modus-wc-tabs>${p(s.tabs)}`}}},render:e=>o`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="${t(e["custom-class"])}"
  ?img-src="${e["img-src"]}"
  tab-style="${t(e["tab-style"])}"
  .tabs=${e.tabs}
  size="${t(e.size)}"
>
  <p slot="tab-0">
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
  <p slot="tab-1">
    input (noun) : information fed into a data processing system or computer
  </p>
  <p slot="tab-2">
    secret (noun) : kept from knowledge or view : hidden
  </p>
  <p slot="tab-3">
    snapshot (noun) : an impression or view of something brief or transitory
  </p>
</modus-wc-tabs>
    `},b={render:e=>{if(!customElements.get("tabs-shadow-host")){const s=W({componentTag:"modus-wc-tabs",propsMapper:(n,_)=>{const a=_;a.activeTabIndex=n.activeTabIndex??0,a.customClass=n["custom-class"]||"",a.size=n.size??"md",a.tabs=n.tabs,a.tabStyle=n["tab-style"]??"bordered"}});customElements.define("tabs-shadow-host",s)}return o`<tabs-shadow-host .props=${{...e}}></tabs-shadow-host>`}},m={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 2.0 tabs use the \`ITab\` interface, see details of interface changes below.
  - Size values have changed from verbose names (\`small\`, \`medium\`) to abbreviations (\`xs\`, \`sm\`, \`md\`, \`lg\`).
  - The \`tabChange\` event now emits an object with both previous and new tab indices, rather than just the tab ID.

#### Prop Mapping

| 1.0 Prop     | 2.0 Prop           | Notes                                                          |
|--------------|--------------------|----------------------------------------------------------------|
| aria-label   | aria-label         |                                                                |
| full-width   |                    | Not carried over, use CSS instead                              |
| size         | size               | \`small\` → \`sm\`, \`medium\` → \`md\`                        |
| tabs         | tabs               | Tab object structure has changed. See Interface changes below. |

#### Event Mapping

| 1.0 Event   | 2.0 Event | Notes                                                 |
|-------------|-----------|-------------------------------------------------------|
| tabChange   | tabChange | Now emits \`{ previousTab: number; newTab: number }\` |

#### Interfaces

##### 1.0

\`\`\`typescript
export interface Tab {
  active?: boolean;
  iconOnly?: string;
  id: string;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
}
\`\`\`

##### 2.0

\`\`\`typescript
export interface ITab {
  customClass?: string;
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  label?: string;
}
\`\`\`
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var g,f,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var h,y,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabs: [{
      icon: 'home',
      iconPosition: 'left',
      label: 'Home',
      slotName: 'home-tab-content'
    }, {
      icon: 'clipboard',
      iconPosition: 'right',
      label: 'Tasks'
    }, {
      slotName: 'actions-tab-content'
    }, {
      slotName: 'notifications-tab-content'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases.'
      },
      source: {
        transform: (_src, {
          args
        }) => \`<style>
  .red-icon {
    color: red;
  }
  /* Style for disabled badge and icon components */
  modus-wc-badge[disabled="true"],
  modus-wc-icon[disabled="true"] ,
  button[disabled] modus-wc-badge,
  button[disabled] modus-wc-icon {
    opacity: 0.3;
    pointer-events: none;
  }
</style>
<modus-wc-tabs
  size="md"
  tab-style="bordered"
  aria-label="Custom tab group"
>
  <span
    slot="home-tab-content"
    style="display: inline-flex; align-items: center;padding-top: 6px"
  >
    <modus-wc-badge
      color="warning"
      size="md"
      variant="filled"
    >
      <modus-wc-icon decorative="" name="home" size="xs"></modus-wc-icon>
      Home
    </modus-wc-badge>
  </span>
  <span
    slot="actions-tab-content"
    style="display: inline-flex; align-items: center; gap: 8px;"
  >
    Actions
    <modus-wc-icon
      name="warning"
      variant="solid"
      size="md"
      custom-class="red-icon"
    ></modus-wc-icon>
  </span>
  <span
    slot="notifications-tab-content"
    style="display: inline-flex; align-items: center; gap: 8px;"
  >
    Notifications
    <modus-wc-badge
      color="primary"
      size="md"
      variant="counter"
      >5</modus-wc-badge
    >
  </span>
</modus-wc-tabs>\${getSourceCode(args.tabs as ITab[])}\`
      }
    }
  },
  // prettier-ignore
  render: args => {
    return html\`
    <style>
      .red-icon {
        color: red;
      }
      /* Style for disabled badge and icon components */
      modus-wc-badge[disabled="true"],
      modus-wc-icon[disabled="true"] ,
      button[disabled] modus-wc-badge,
      button[disabled] modus-wc-icon {
        opacity: 0.3;
        pointer-events: none;
      }
    </style>
    <modus-wc-tabs
      .tabs=\${args.tabs}
      size="\${ifDefined(args.size)}"
      tab-style="\${ifDefined(args['tab-style'])}"
      active-tab-index="\${ifDefined(args.activeTabIndex)}"
      aria-label="Custom tab group"
    >
      <span
        slot="home-tab-content"
        style="display: inline-flex; align-items: center;padding-top: 6px"
      >
        <modus-wc-badge
          color="warning"
          size="\${ifDefined(args.size)}"
          variant="filled"
        >
          <modus-wc-icon decorative="" name="home" size="xs"></modus-wc-icon>
          Home
        </modus-wc-badge>
      </span>
      <span
        slot="actions-tab-content"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Actions
        <modus-wc-icon
          name="warning"
          variant="solid"
          size="\${ifDefined(args.size)}"
          custom-class="red-icon"
        ></modus-wc-icon>
      </span>
      <span
        slot="notifications-tab-content"
        style="display: inline-flex; align-items: center; gap: 8px;"
      >
        Notifications
        <modus-wc-badge
          color="primary"
          size="\${ifDefined(args.size)}"
          variant="counter"
          >5</modus-wc-badge
        >
      </span>
    </modus-wc-tabs>
    
  \`;
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var T,x,z;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    activeTabIndex: 1,
    tabs: [{
      label: 'Normal'
    }, {
      label: 'Active'
    }, {
      label: 'Disabled',
      disabled: true
    }]
  }
}`,...(z=(x=c.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var $,S,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template,
  args: {
    tabs: [{
      icon: 'home'
    }, {
      icon: 'settings',
      iconPosition: 'left',
      label: 'Settings'
    }, {
      icon: 'alert',
      iconPosition: 'right',
      label: 'Alerts'
    }]
  }
}`,...(I=(S=d.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var C,N,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        transform: (_src, {
          args
        }) => \`<modus-wc-tabs
  aria-label="Tab group"
  tab-style="bordered"
  size="md"
>
  <p slot="tab-0">
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
  <p slot="tab-1">
    input (noun) : information fed into a data processing system or computer
  </p>
  <p slot="tab-2">
    secret (noun) : kept from knowledge or view : hidden
  </p>
  <p slot="tab-3">
    snapshot (noun) : an impression or view of something brief or transitory
  </p>
</modus-wc-tabs>\${getSourceCode(args.tabs as ITab[])}\`
      }
    }
  },
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tabs
  active-tab-index="\${ifDefined(args.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="\${ifDefined(args['custom-class'])}"
  ?img-src="\${args['img-src']}"
  tab-style="\${ifDefined(args['tab-style'])}"
  .tabs=\${args.tabs}
  size="\${ifDefined(args.size)}"
>
  <p slot="tab-0">
    Modus (noun) : a mode of procedure : a way of doing something
  </p>
  <p slot="tab-1">
    input (noun) : information fed into a data processing system or computer
  </p>
  <p slot="tab-2">
    secret (noun) : kept from knowledge or view : hidden
  </p>
  <p slot="tab-3">
    snapshot (noun) : an impression or view of something brief or transitory
  </p>
</modus-wc-tabs>
    \`;
  }
}`,...(P=(N=l.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var E,D,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('tabs-shadow-host')) {
      const TabsShadowHost = createShadowHostClass<TabsArgs>({
        componentTag: 'modus-wc-tabs',
        propsMapper: (v: TabsArgs, el: HTMLElement) => {
          const tabsEl = el as unknown as {
            activeTabIndex: number;
            customClass: string;
            size: string;
            tabs: ITab[];
            tabStyle: string;
          };
          tabsEl.activeTabIndex = v.activeTabIndex ?? 0;
          tabsEl.customClass = v['custom-class'] || '';
          tabsEl.size = v.size ?? 'md';
          tabsEl.tabs = v.tabs;
          tabsEl.tabStyle = v['tab-style'] ?? 'bordered';
        }
      });
      customElements.define('tabs-shadow-host', TabsShadowHost);
    }
    return html\`<tabs-shadow-host .props=\${{
      ...args
    }}></tabs-shadow-host>\`;
  }
}`,...(A=(D=b.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,k,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 2.0 tabs use the \\\`ITab\\\` interface, see details of interface changes below.
  - Size values have changed from verbose names (\\\`small\\\`, \\\`medium\\\`) to abbreviations (\\\`xs\\\`, \\\`sm\\\`, \\\`md\\\`, \\\`lg\\\`).
  - The \\\`tabChange\\\` event now emits an object with both previous and new tab indices, rather than just the tab ID.

#### Prop Mapping

| 1.0 Prop     | 2.0 Prop           | Notes                                                          |
|--------------|--------------------|----------------------------------------------------------------|
| aria-label   | aria-label         |                                                                |
| full-width   |                    | Not carried over, use CSS instead                              |
| size         | size               | \\\`small\\\` → \\\`sm\\\`, \\\`medium\\\` → \\\`md\\\`                        |
| tabs         | tabs               | Tab object structure has changed. See Interface changes below. |

#### Event Mapping

| 1.0 Event   | 2.0 Event | Notes                                                 |
|-------------|-----------|-------------------------------------------------------|
| tabChange   | tabChange | Now emits \\\`{ previousTab: number; newTab: number }\\\` |

#### Interfaces

##### 1.0

\\\`\\\`\\\`typescript
export interface Tab {
  active?: boolean;
  iconOnly?: string;
  id: string;
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
}
\\\`\\\`\\\`

##### 2.0

\\\`\\\`\\\`typescript
export interface ITab {
  customClass?: string;
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  label?: string;
}
\\\`\\\`\\\`
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(H=(k=m.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const Q=["Default","CustomContent","ActiveAndDisabled","Icons","TabsWithPanel","ShadowDomParent","Migration"];export{c as ActiveAndDisabled,r as CustomContent,i as Default,d as Icons,m as Migration,b as ShadowDomParent,l as TabsWithPanel,Q as __namedExportsOrder,K as default};
