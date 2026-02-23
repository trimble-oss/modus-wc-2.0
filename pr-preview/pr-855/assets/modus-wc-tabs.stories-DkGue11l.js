import{w as j}from"./decorator-D4YmxizW.js";import{x as n}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const J={title:"Components/Tabs",component:"modus-wc-tabs",args:{size:"md",tabs:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3",disabled:!0},{icon:"home"}],"tab-style":"bordered"},argTypes:{tabs:{description:"Array of tab objects defining the tabs to display",table:{type:{detail:`
            Interface: ITab
            Properties:
            - customClass (string, optional): Custom CSS class for the inner button
            - disabled (boolean, optional): Whether the tab is disabled
            - icon (string, optional): A Modus Icon name to display
            - iconPosition ('left' | 'right', optional): The position of the icon
            - label (string, optional): The content to display in the tab
            - slotName (string, optional): The slot name to use for custom tab header content
          `}}},"tab-style":{control:{type:"select"},options:["boxed","bordered","lifted","none"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]}},decorators:[j,(e,t)=>{const{tabs:a}=t.args??{};return Array.isArray(a)&&(t.args.tabs=_(a)),e()}],parameters:{actions:{handles:["tabChange"]}}},_=e=>e.map(t=>{const a={...t};return a.disabled!==!0&&delete a.disabled,a}),m=e=>{const t=_(e);return`
<script>
  const tabs = ${JSON.stringify(t,null,2)};
  const tabElement = document.querySelector('modus-wc-tabs');
  tabElement.tabs = tabs;
<\/script>`},u={parameters:{docs:{source:{transform:(e,{args:t})=>`<modus-wc-tabs
  aria-label="Tab group"
  tab-style="${s(t["tab-style"])}"
  size="${s(t.size)}">
</modus-wc-tabs>${m(t.tabs)}`}}},render:e=>n`
<modus-wc-tabs
  active-tab-index="${s(e.activeTabIndex)}"
  aria-label="Tab group"
  tab-style="${s(e["tab-style"])}"
  .tabs=${e.tabs}
  size="${s(e.size)}"
>
</modus-wc-tabs>
    `},o={...u},i={...u,parameters:{docs:{description:{story:"The background color of the tabs can be customized by applying a custom class to the component and defining CSS variables for the desired colors."},source:{transform:(e,{args:t})=>`<style>
.custom-tabs {
          --tabs-inactive-color: #353a40;
          --tabs-inactive-bg: #90939f;
          --tabs-active-bg: #171c1e;
          --tabs-active-color: #fec157;
          --tabs-hover-bg-color: #cbcdd6;
          --tabs-hover-color: #000000;
          --tabs-focus-bg-color: #e0eccf;
          --tabs-focus-color: #fec157;
}
</style>
<modus-wc-tabs
  aria-label="Tab group"
  custom-class="custom-tabs"
  tab-style="lifted"
  size="md"
></modus-wc-tabs>${m(t.tabs)}`}}},render:e=>n`
      <style>
        .custom-tabs {
          --tabs-inactive-color: #353a40;
          --tabs-inactive-bg: #90939f;
          --tabs-active-bg: #171c1e;
          --tabs-active-color: #fec157;
          --tabs-hover-bg-color: #cbcdd6;
          --tabs-hover-color: #000000;
          --tabs-focus-bg-color: #e0eccf;
          --tabs-focus-color: #fec157;
        }
      </style>
      <modus-wc-tabs
        aria-label="Tab group"
        custom-class="custom-tabs"
        tab-style="lifted"
        .tabs=${e.tabs}
        size="${s(e.size)}"
      >
      </modus-wc-tabs>
    `},r={args:{tabs:[{icon:"home",iconPosition:"left",label:"Home",slotName:"home-tab-content"},{icon:"clipboard",iconPosition:"right",label:"Tasks"},{slotName:"actions-tab-content"},{slotName:"notifications-tab-content"}]},parameters:{docs:{description:{story:"Tabs now include slots, offering a flexible approach for users to add relevant components within the tab for more complex use cases."},source:{transform:(e,{args:t})=>`<style>
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
</modus-wc-tabs>${m(t.tabs)}`}}},render:e=>n`
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
      size="${s(e.size)}"
      tab-style="${s(e["tab-style"])}"
      active-tab-index="${s(e.activeTabIndex)}"
      aria-label="Custom tab group"
    >
      <span
        slot="home-tab-content"
        style="display: inline-flex; align-items: center;padding-top: 6px"
      >
        <modus-wc-badge
          color="warning"
          size="${s(e.size)}"
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
          size="${s(e.size)}"
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
          size="${s(e.size)}"
          variant="counter"
          >5</modus-wc-badge
        >
      </span>
    </modus-wc-tabs>
    
  `},c={...u,args:{activeTabIndex:1,tabs:[{label:"Normal"},{label:"Active"},{label:"Disabled",disabled:!0}]}},l={...u,args:{tabs:[{icon:"home"},{icon:"settings",iconPosition:"left",label:"Settings"},{icon:"alert",iconPosition:"right",label:"Alerts"}]}},d={parameters:{docs:{source:{transform:(e,{args:t})=>`<modus-wc-tabs
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
</modus-wc-tabs>${m(t.tabs)}`}}},render:e=>n`
<modus-wc-tabs
  active-tab-index="${s(e.activeTabIndex)}"
  aria-label="Tab group"
  custom-class="${s(e["custom-class"])}"
  ?img-src="${e["img-src"]}"
  tab-style="${s(e["tab-style"])}"
  .tabs=${e.tabs}
  size="${s(e.size)}"
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
    `},b={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>n`<div></div>`};var p,g,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,h,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
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
          --tabs-inactive-color: #353a40;
          --tabs-inactive-bg: #90939f;
          --tabs-active-bg: #171c1e;
          --tabs-active-color: #fec157;
          --tabs-hover-bg-color: #cbcdd6;
          --tabs-hover-color: #000000;
          --tabs-focus-bg-color: #e0eccf;
          --tabs-focus-color: #fec157;
}
</style>
<modus-wc-tabs
  aria-label="Tab group"
  custom-class="custom-tabs"
  tab-style="lifted"
  size="md"
></modus-wc-tabs>\${getSourceCode(args.tabs as ITab[])}\`
      }
    }
  },
  render: args => {
    return html\`
      <style>
        .custom-tabs {
          --tabs-inactive-color: #353a40;
          --tabs-inactive-bg: #90939f;
          --tabs-active-bg: #171c1e;
          --tabs-active-color: #fec157;
          --tabs-hover-bg-color: #cbcdd6;
          --tabs-hover-color: #000000;
          --tabs-focus-bg-color: #e0eccf;
          --tabs-focus-color: #fec157;
        }
      </style>
      <modus-wc-tabs
        aria-label="Tab group"
        custom-class="custom-tabs"
        tab-style="lifted"
        .tabs=\${args.tabs}
        size="\${ifDefined(args.size)}"
      >
      </modus-wc-tabs>
    \`;
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,T,z;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(z=(T=r.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var x,$,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=($=c.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var S,I,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var P,D,A;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var k,M,E;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(M=b.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const F=["Default","CustomBackground","CustomContent","ActiveAndDisabled","Icons","TabsWithPanel","Migration"];export{c as ActiveAndDisabled,i as CustomBackground,r as CustomContent,o as Default,l as Icons,b as Migration,d as TabsWithPanel,F as __namedExportsOrder,J as default};
