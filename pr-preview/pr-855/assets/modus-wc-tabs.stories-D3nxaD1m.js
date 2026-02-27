import{w as _}from"./decorator-D4YmxizW.js";import{x as s}from"./lit-element-CucEn6F2.js";import{o as t}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const J={title:"Components/Tabs",component:"modus-wc-tabs",args:{size:"md",tabs:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3",disabled:!0},{icon:"home"}],"tab-style":"bordered"},argTypes:{tabs:{description:"Array of tab objects defining the tabs to display",table:{type:{detail:`
            Interface: ITab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
            - slotName (string, optional): The slot name to use for custom tab header content
          `}}},"tab-style":{control:{type:"select"},options:["boxed","bordered","lifted","none"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[_,(e,a)=>{const{tabs:o}=a.args??{};return Array.isArray(o)&&(a.args.tabs=E(o)),e()}],parameters:{actions:{handles:["tabChange"]}}},E=e=>e.map(a=>{const o={...a};return o.disabled!==!0&&delete o.disabled,o}),m=e=>{const a=E(e);return`
<script>
  const tabs = ${JSON.stringify(a,null,2)};
  const tabElement = document.querySelector('modus-wc-tabs');
  tabElement.tabs = tabs;
<\/script>`},f={parameters:{docs:{source:{transform:(e,{args:a})=>`<modus-wc-tabs
  aria-label="Tab group"
  tab-style="${t(a["tab-style"])}"
  size="${t(a.size)}">
</modus-wc-tabs>${m(a.tabs)}`}}},render:e=>s`
<modus-wc-tabs
  active-tab-index="${t(e.activeTabIndex)}"
  aria-label="Tab group"
  tab-style="${t(e["tab-style"])}"
  .tabs=${e.tabs}
  size="${t(e.size)}"
>
</modus-wc-tabs>
    `},n={...f},i={...f,args:{"tab-style":"lifted"},parameters:{docs:{description:{story:"The background color of the tabs can be customized by applying a custom class to the component and defining CSS variables for the desired colors."},source:{transform:(e,{args:a})=>`<style>
.custom-tabs {
  /* Base tab colors (including lifted active state). */
   --lifted-tab-color: #ffffff;
   --lifted-tab-bg: #518aed;
  /* Interactive states for all variants. */
  --tab-hover-bg: #e9eef5;
  --tab-hover-color: #1f2937;
  --tab-focus-bg: #dbeafe;
  --tab-focus-color: #1e40af;
  --tab-active-bg: #1f4b99;
  --tab-active-color: #ffffff;
  /* Boxed variant colors. */
  --boxed-tabs-bg: #f4f6f8;
  --boxed-tab-selected-bg: #1f4b99;
  --boxed-tab-selected-color: #ffffff;
  /* Bordered variant selected border-bottom color. */
  --bordered-tab-active-border-bottom-color: #2f6fed;
}
</style>
<modus-wc-tabs
  aria-label="Tab group"
  custom-class="custom-tabs"
  tab-style="${t(a["tab-style"])}"
  size="md"
></modus-wc-tabs>${m(a.tabs)}`}}},render:e=>s`
      <style>
        .custom-tabs {
          /* Base tab colors (including lifted active state). */
          --lifted-tab-color: #ffffff;
          --lifted-tab-bg: #518aed;
          /* Interactive states for all variants. */
          --tab-hover-bg: #e9eef5;
          --tab-hover-color: #1f2937;
          --tab-focus-bg: #dbeafe;
          --tab-focus-color: #1e40af;
          --tab-active-bg: #1f4b99;
          --tab-active-color: #ffffff;
          /* Boxed variant colors. */
          --boxed-tabs-bg: #f4f6f8;
          --boxed-tab-selected-bg: #1f4b99;
          --boxed-tab-selected-color: #ffffff;
          /* Bordered variant selected border-bottom color. */
          --bordered-tab-active-border-bottom-color: #2f6fed;
        }
      </style>
      <modus-wc-tabs
        aria-label="Tab group"
        custom-class="custom-tabs"
        tab-style="${t(e["tab-style"])}"
        .tabs=${e.tabs}
        size="${t(e.size)}"
      >
      </modus-wc-tabs>
    `},r={args:{tabs:[{icon:"home",iconPosition:"left",label:"Home",slotName:"home-tab-content"},{icon:"clipboard",iconPosition:"right",label:"Tasks"},{slotName:"actions-tab-content"},{slotName:"notifications-tab-content"}]},parameters:{docs:{description:{story:"Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases."},source:{transform:(e,{args:a})=>`<style>
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
</modus-wc-tabs>${m(a.tabs)}`}}},render:e=>s`
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
    
  `},c={...f,args:{activeTabIndex:1,tabs:[{label:"Normal"},{label:"Active"},{label:"Disabled",disabled:!0}]}},d={...f,args:{tabs:[{icon:"home"},{icon:"settings",iconPosition:"left",label:"Settings"},{icon:"alert",iconPosition:"right",label:"Alerts"}]}},b={parameters:{docs:{source:{transform:(e,{args:a})=>`<modus-wc-tabs
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
</modus-wc-tabs>${m(a.tabs)}`}}},render:e=>s`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var w,y,h;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    'tab-style': 'lifted'
  },
  parameters: {
    docs: {
      description: {
        story: 'The background color of the tabs can be customized by applying a custom class to the component and defining CSS variables for the desired colors.'
      },
      source: {
        transform: (_src, {
          args
        }) => \`<style>
.custom-tabs {
  /* Base tab colors (including lifted active state). */
   --lifted-tab-color: #ffffff;
   --lifted-tab-bg: #518aed;
  /* Interactive states for all variants. */
  --tab-hover-bg: #e9eef5;
  --tab-hover-color: #1f2937;
  --tab-focus-bg: #dbeafe;
  --tab-focus-color: #1e40af;
  --tab-active-bg: #1f4b99;
  --tab-active-color: #ffffff;
  /* Boxed variant colors. */
  --boxed-tabs-bg: #f4f6f8;
  --boxed-tab-selected-bg: #1f4b99;
  --boxed-tab-selected-color: #ffffff;
  /* Bordered variant selected border-bottom color. */
  --bordered-tab-active-border-bottom-color: #2f6fed;
}
</style>
<modus-wc-tabs
  aria-label="Tab group"
  custom-class="custom-tabs"
  tab-style="\${ifDefined(args['tab-style'])}"
  size="md"
></modus-wc-tabs>\${getSourceCode(args.tabs as ITab[])}\`
      }
    }
  },
  render: args => {
    return html\`
      <style>
        .custom-tabs {
          /* Base tab colors (including lifted active state). */
          --lifted-tab-color: #ffffff;
          --lifted-tab-bg: #518aed;
          /* Interactive states for all variants. */
          --tab-hover-bg: #e9eef5;
          --tab-hover-color: #1f2937;
          --tab-focus-bg: #dbeafe;
          --tab-focus-color: #1e40af;
          --tab-active-bg: #1f4b99;
          --tab-active-color: #ffffff;
          /* Boxed variant colors. */
          --boxed-tabs-bg: #f4f6f8;
          --boxed-tab-selected-bg: #1f4b99;
          --boxed-tab-selected-color: #ffffff;
          /* Bordered variant selected border-bottom color. */
          --bordered-tab-active-border-bottom-color: #2f6fed;
        }
      </style>
      <modus-wc-tabs
        aria-label="Tab group"
        custom-class="custom-tabs"
        tab-style="\${ifDefined(args['tab-style'])}"
        .tabs=\${args.tabs}
        size="\${ifDefined(args.size)}"
      >
      </modus-wc-tabs>
    \`;
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,x,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var z,$,I;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=($=c.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var C,S,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var D,P,A;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(P=b.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var k,B,M;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(B=l.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const F=["Default","CustomBackground","CustomContent","ActiveAndDisabled","Icons","TabsWithPanel","Migration"];export{c as ActiveAndDisabled,i as CustomBackground,r as CustomContent,n as Default,d as Icons,l as Migration,b as TabsWithPanel,F as __namedExportsOrder,J as default};
