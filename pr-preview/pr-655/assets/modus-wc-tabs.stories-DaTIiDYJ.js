import{w as A}from"./decorator-D4YmxizW.js";import{x as d}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const O={title:"Components/Tabs",component:"modus-wc-tabs",args:{size:"md",tabs:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3",disabled:!0},{icon:"home"}],"tab-style":"bordered"},argTypes:{tabs:{description:"Array of tab objects defining the tabs to display",table:{type:{detail:`
            Interface: ITab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
          `}}},"tab-style":{control:{type:"select"},options:["boxed","bordered","lifted","none"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[A],parameters:{actions:{handles:["tabChange"]}}},b={render:e=>{const s=e.tabs.map(n=>({...n,disabled:n.disabled===!0}));return d`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  tab-style="${t(e["tab-style"])}"
  .tabs="${s}"
  size="${t(e.size)}"
>
</modus-wc-tabs>
    `}},o={...b},i={args:{tabs:[{icon:"home",iconPosition:"left",label:"Home",slotName:"home-tab-content"},{icon:"clipboard",iconPosition:"right",label:"Tasks"},{slotName:"actions-tab-content"},{slotName:"notifications-tab-content"}]},parameters:{docs:{description:{story:"Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases."}}},render:e=>{var s,n,m;return d`
    <style>
      .red-icon {
        color: red;
      }
      /* Style for disabled badge and icon components */
      modus-wc-badge[disabled="true"],
      modus-wc-icon[disabled="true"] {
        opacity: 0.3;
        pointer-events: none;
      }
    </style>
    <modus-wc-tabs
      .tabs="${e.tabs}"
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
          disabled="${((s=e.tabs[0])==null?void 0:s.disabled)===!0}"
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
          disabled="${((n=e.tabs[2])==null?void 0:n.disabled)===!0}"
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
          disabled="${((m=e.tabs[3])==null?void 0:m.disabled)===!0}"
          >5</modus-wc-badge
        >
      </span>
    </modus-wc-tabs>
  `}},a={...b};a.args={activeTabIndex:1,tabs:[{label:"Normal"},{label:"Active"},{label:"Disabled",disabled:!0}]};const r={...b,args:{tabs:[{icon:"home"},{icon:"settings",iconPosition:"left",label:"Settings"},{icon:"alert",iconPosition:"right",label:"Alerts"}]}},c={render:e=>d`
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
    `},l={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>d`<div></div>`};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      }
    }
  },
  // prettier-ignore
  render: args => html\`
    <style>
      .red-icon {
        color: red;
      }
      /* Style for disabled badge and icon components */
      modus-wc-badge[disabled="true"],
      modus-wc-icon[disabled="true"] {
        opacity: 0.3;
        pointer-events: none;
      }
    </style>
    <modus-wc-tabs
      .tabs="\${args.tabs}"
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
          disabled="\${args.tabs[0]?.disabled === true}"
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
          disabled="\${args.tabs[2]?.disabled === true}"
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
          disabled="\${args.tabs[3]?.disabled === true}"
          >5</modus-wc-badge
        >
      </span>
    </modus-wc-tabs>
  \`
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,y,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template
}`,...(T=(y=a.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,$,z;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(z=($=r.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var I,C,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var S,D,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const W=["Default","CustomContent","ActiveAndDisabled","Icons","TabsWithPanel","Migration"];export{a as ActiveAndDisabled,i as CustomContent,o as Default,r as Icons,l as Migration,c as TabsWithPanel,W as __namedExportsOrder,O as default};
