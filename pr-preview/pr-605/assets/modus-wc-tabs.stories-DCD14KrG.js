import{w as k}from"./decorator-D4YmxizW.js";import{x as c}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var m=Object.freeze,G=Object.defineProperty,$=(e,N)=>m(G(e,"raw",{value:m(N||e.slice())})),d;const q={title:"Components/Tabs",component:"modus-wc-tabs",args:{size:"md",tabs:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3",disabled:!0},{icon:"home"}],"tab-style":"bordered"},argTypes:{tabs:{description:"Array of tab objects defining the tabs to display",table:{type:{detail:`
            Interface: ITab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - customContent (string, optional): Custom HTML content for the tab header
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
          `}}},"tab-style":{control:{type:"select"},options:["boxed","bordered","lifted","none"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[k],parameters:{actions:{handles:["tabChange"]}}},l={render:e=>c`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  tab-style="${t(e["tab-style"])}"
  .tabs="${e.tabs}"
  size="${t(e.size)}"
>
</modus-wc-tabs>
    `},a={...l},n={...l};n.args={activeTabIndex:1,tabs:[{label:"Normal"},{label:"Active"},{label:"Disabled",disabled:!0}]};const s={...l,args:{tabs:[{icon:"home",iconPosition:"left",label:"Home",customContent:`<span style="display: inline-flex; align-items: center; gap: 8px; margin: 3px;">
         <modus-wc-chip aria-label="Chip example" show-remove="false" size="md" variant="filled">
          <modus-wc-avatar img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7LFGf7yRFAGYKTX6KrxHNzsByE8NPZfCrfGkSIytbxkFEY9AYJZESTPIE0tOpfSsEE4&usqp=CAU" size="sm" alt="Doge the dog"></modus-wc-avatar>profile<modus-wc-icon name="swap" size="xs"></modus-wc-icon>
</modus-wc-chip>
        </span>`},{icon:"clipboard",iconPosition:"right",label:"Tasks"},{customContent:`<span style="display: inline-flex; align-items: center; gap: 8px;">Actions<modus-wc-icon name="warning" variant="solid" color="red" custom-class="warning-icon"></modus-wc-icon><style>
  .warning-icon {
    color: red;
  }</style></span>`},{customContent:'<span style="display: inline-flex; align-items: center; gap: 8px;">Notifications<modus-wc-badge color="primary" size="md" variant="counter">5</modus-wc-badge></span>'}]},parameters:{docs:{description:{story:"Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases. While our original Tabs component was limited to only labels and icons, the addition of slots provides the freedom to integrate feasible components of choice, such as a status indicator or a notification badge, as a natural part of the tab itself."}}},render:e=>c(d||(d=$([`
    <script>
          args: {
          tabs: [
            {
              icon: 'home',
              iconPosition: 'left',
              label: 'Home',
              customContent: \`<span style="display: inline-flex; align-items: center; gap: 8px; margin: 3px;">
               <modus-wc-chip aria-label="Chip example" show-remove="false" size="md" variant="filled">
                <modus-wc-avatar img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7LFGf7yRFAGYKTX6KrxHNzsByE8NPZfCrfGkSIytbxkFEY9AYJZESTPIE0tOpfSsEE4&usqp=CAU" alt="Doge the dog"></modus-wc-avatar>profile<modus-wc-icon name="swap" size="xs"></modus-wc-icon>
      </modus-wc-chip>
              </span>\`,
            },
            {
              icon: 'clipboard',
              iconPosition: 'right',
              label: 'Tasks',
            },
            {
              customContent: \`<span style="display: inline-flex; align-items: center; gap: 8px;">Actions<modus-wc-icon name="warning" variant="solid" color="red" custom-class="warning-icon"></modus-wc-icon><style>
        .warning-icon {
          color: red;
        }</style></span>\`,
            },
            {
              customContent: \`<span style="display: inline-flex; align-items: center; gap: 8px;">Notifications<modus-wc-badge color="primary" size="md" variant="counter">5</modus-wc-badge></span>\`,
            },
          ];
    <\/script>
    <modus-wc-tabs
      .tabs="`,`"
      size="`,`"
      tab-style="`,`"
      active-tab-index="`,`"
      aria-label="Custom tab group"
    >
    </modus-wc-tabs>
  `],[`
    <script>
          args: {
          tabs: [
            {
              icon: 'home',
              iconPosition: 'left',
              label: 'Home',
              customContent: \\\`<span style="display: inline-flex; align-items: center; gap: 8px; margin: 3px;">
               <modus-wc-chip aria-label="Chip example" show-remove="false" size="md" variant="filled">
                <modus-wc-avatar img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7LFGf7yRFAGYKTX6KrxHNzsByE8NPZfCrfGkSIytbxkFEY9AYJZESTPIE0tOpfSsEE4&usqp=CAU" alt="Doge the dog"></modus-wc-avatar>profile<modus-wc-icon name="swap" size="xs"></modus-wc-icon>
      </modus-wc-chip>
              </span>\\\`,
            },
            {
              icon: 'clipboard',
              iconPosition: 'right',
              label: 'Tasks',
            },
            {
              customContent: \\\`<span style="display: inline-flex; align-items: center; gap: 8px;">Actions<modus-wc-icon name="warning" variant="solid" color="red" custom-class="warning-icon"></modus-wc-icon><style>
        .warning-icon {
          color: red;
        }</style></span>\\\`,
            },
            {
              customContent: \\\`<span style="display: inline-flex; align-items: center; gap: 8px;">Notifications<modus-wc-badge color="primary" size="md" variant="counter">5</modus-wc-badge></span>\\\`,
            },
          ];
    <\/script>
    <modus-wc-tabs
      .tabs="`,`"
      size="`,`"
      tab-style="`,`"
      active-tab-index="`,`"
      aria-label="Custom tab group"
    >
    </modus-wc-tabs>
  `])),e.tabs,t(e.size),t(e["tab-style"]),t(e.activeTabIndex))},o={...l,args:{tabs:[{icon:"home"},{icon:"settings",iconPosition:"left",label:"Settings"},{icon:"alert",iconPosition:"right",label:"Alerts"}]}},i={render:e=>c`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="${t(e["custom-class"])}"
  ?img-src="${e["img-src"]}"
  tab-style="${t(e["tab-style"])}"
  .tabs="${e.tabs}"
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
    `},r={parameters:{docs:{description:{story:`
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
  customContent?: string;
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  label?: string;
}
\`\`\`
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>c`<div></div>`};var p,b,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var g,f,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,y,v;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    tabs: [{
      icon: 'home',
      iconPosition: 'left',
      label: 'Home',
      customContent: \`<span style="display: inline-flex; align-items: center; gap: 8px; margin: 3px;">
         <modus-wc-chip aria-label="Chip example" show-remove="false" size="md" variant="filled">
          <modus-wc-avatar img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7LFGf7yRFAGYKTX6KrxHNzsByE8NPZfCrfGkSIytbxkFEY9AYJZESTPIE0tOpfSsEE4&usqp=CAU" size="sm" alt="Doge the dog"></modus-wc-avatar>profile<modus-wc-icon name="swap" size="xs"></modus-wc-icon>
</modus-wc-chip>
        </span>\`
    }, {
      icon: 'clipboard',
      iconPosition: 'right',
      label: 'Tasks'
    }, {
      customContent: \`<span style="display: inline-flex; align-items: center; gap: 8px;">Actions<modus-wc-icon name="warning" variant="solid" color="red" custom-class="warning-icon"></modus-wc-icon><style>
  .warning-icon {
    color: red;
  }</style></span>\`
    }, {
      customContent: \`<span style="display: inline-flex; align-items: center; gap: 8px;">Notifications<modus-wc-badge color="primary" size="md" variant="counter">5</modus-wc-badge></span>\`
    }]
  },
  parameters: {
    docs: {
      description: {
        story: \`Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases. While our original Tabs component was limited to only labels and icons, the addition of slots provides the freedom to integrate feasible components of choice, such as a status indicator or a notification badge, as a natural part of the tab itself.\`
      }
    }
  },
  //prettier-ignore
  render: args => html\`
    <script>
          args: {
          tabs: [
            {
              icon: 'home',
              iconPosition: 'left',
              label: 'Home',
              customContent: \\\`<span style="display: inline-flex; align-items: center; gap: 8px; margin: 3px;">
               <modus-wc-chip aria-label="Chip example" show-remove="false" size="md" variant="filled">
                <modus-wc-avatar img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7LFGf7yRFAGYKTX6KrxHNzsByE8NPZfCrfGkSIytbxkFEY9AYJZESTPIE0tOpfSsEE4&usqp=CAU" alt="Doge the dog"></modus-wc-avatar>profile<modus-wc-icon name="swap" size="xs"></modus-wc-icon>
      </modus-wc-chip>
              </span>\\\`,
            },
            {
              icon: 'clipboard',
              iconPosition: 'right',
              label: 'Tasks',
            },
            {
              customContent: \\\`<span style="display: inline-flex; align-items: center; gap: 8px;">Actions<modus-wc-icon name="warning" variant="solid" color="red" custom-class="warning-icon"></modus-wc-icon><style>
        .warning-icon {
          color: red;
        }</style></span>\\\`,
            },
            {
              customContent: \\\`<span style="display: inline-flex; align-items: center; gap: 8px;">Notifications<modus-wc-badge color="primary" size="md" variant="counter">5</modus-wc-badge></span>\\\`,
            },
          ];
    <\/script>
    <modus-wc-tabs
      .tabs="\${args.tabs}"
      size="\${ifDefined(args.size)}"
      tab-style="\${ifDefined(args['tab-style'])}"
      active-tab-index="\${ifDefined(args.activeTabIndex)}"
      aria-label="Custom tab group"
    >
    </modus-wc-tabs>
  \`
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,T,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var z,P,E;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    // prettier-ignore
    return html\`
<modus-wc-tabs
  active-tab-index="\${ifDefined(args.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="\${ifDefined(args['custom-class'])}"
  ?img-src="\${args['img-src']}"
  tab-style="\${ifDefined(args['tab-style'])}"
  .tabs="\${args.tabs}"
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
}`,...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var I,A,S;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
  customContent?: string;
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
}`,...(S=(A=r.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const M=["Default","ActiveAndDisabled","CustomContent","Icons","TabsWithPanel","Migration"];export{n as ActiveAndDisabled,s as CustomContent,a as Default,o as Icons,r as Migration,i as TabsWithPanel,M as __namedExportsOrder,q as default};
