import{w as A}from"./decorator-D4YmxizW.js";import{x as l}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const H={title:"Components/Tabs",component:"modus-wc-tabs",args:{size:"md",tabs:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3",disabled:!0},{icon:"home"}],"tab-style":"bordered"},argTypes:{tabs:{description:"Array of tab objects defining the tabs to display",table:{type:{detail:`
            Interface: ITab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
            - slotName (string, optional): The slot name to use for custom tab header content
          `}}},"tab-style":{control:{type:"select"},options:["boxed","bordered","lifted","none"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[A],parameters:{actions:{handles:["tabChange"]}}},b=e=>`
<script>
  const tabs = ${JSON.stringify(e,null,2)};

  // Normalize tabs to ensure disabled is strictly boolean
  const normalizedTabs = tabs.map((tab) => ({
    ...tab,
    disabled: tab.disabled === true,
  }));

  const tabElement = document.querySelector('modus-wc-tabs');
  tabElement.tabs = normalizedTabs;
<\/script>`,m={parameters:{docs:{source:{transform:(e,{args:n})=>`<modus-wc-tabs
  aria-label="Tab group"
  tab-style="${t(n["tab-style"])}"
  size="${t(n.size)}">
</modus-wc-tabs>${b(n.tabs)}`}}},render:e=>{const n=e.tabs.map(s=>({...s,disabled:s.disabled===!0}));return l`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  tab-style="${t(e["tab-style"])}"
  .tabs=${n}
  size="${t(e.size)}"
>
</modus-wc-tabs>
    `}},a={...m},o={args:{tabs:[{icon:"home",iconPosition:"left",label:"Home",slotName:"home-tab-content"},{icon:"clipboard",iconPosition:"right",label:"Tasks"},{slotName:"actions-tab-content"},{slotName:"notifications-tab-content"}]},parameters:{docs:{description:{story:"Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases."},source:{transform:(e,{args:n})=>`<style>
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
</modus-wc-tabs>${b(n.tabs)}`}}},render:e=>{const n=e.tabs.map(s=>({...s,disabled:s.disabled===!0}));return l`
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
      .tabs=${n}
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
    
  `}},i={...m,args:{activeTabIndex:1,tabs:[{label:"Normal"},{label:"Active"},{label:"Disabled",disabled:!0}]}},r={...m,args:{tabs:[{icon:"home"},{icon:"settings",iconPosition:"left",label:"Settings"},{icon:"alert",iconPosition:"right",label:"Alerts"}]}},c={parameters:{docs:{source:{transform:(e,{args:n})=>`<modus-wc-tabs
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
</modus-wc-tabs>${b(n.tabs)}`}}},render:e=>{const n=e.tabs.map(s=>({...s,disabled:s.disabled===!0}));return l`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="${t(e["custom-class"])}"
  ?img-src="${e["img-src"]}"
  tab-style="${t(e["tab-style"])}"
  .tabs=${n}
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
    `}},d={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>l`<div></div>`};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,w,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    // Normalize tabs to ensure disabled is strictly boolean (true/false only)
    const normalizedTabs = args.tabs.map(tab => ({
      ...tab,
      disabled: tab.disabled === true
    }));
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
      .tabs=\${normalizedTabs}
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
}`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var y,v,z;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var T,x,$;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(x=r.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var I,C,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    // Normalize tabs to ensure disabled is strictly boolean (true/false only)
    const normalizedTabs = args.tabs.map(tab => ({
      ...tab,
      disabled: tab.disabled === true
    }));
    // prettier-ignore
    return html\`
<modus-wc-tabs
  active-tab-index="\${ifDefined(args.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="\${ifDefined(args['custom-class'])}"
  ?img-src="\${args['img-src']}"
  tab-style="\${ifDefined(args['tab-style'])}"
  .tabs=\${normalizedTabs}
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
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var N,P,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const O=["Default","CustomContent","ActiveAndDisabled","Icons","TabsWithPanel","Migration"];export{i as ActiveAndDisabled,o as CustomContent,a as Default,r as Icons,d as Migration,c as TabsWithPanel,O as __namedExportsOrder,H as default};
