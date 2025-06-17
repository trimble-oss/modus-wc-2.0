import{w as M}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-C8zulti1.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const G={title:"Components/Button Group",component:"modus-wc-button-group",parameters:{actions:{handles:["buttonGroupSelectionChange"]},docs:{description:{component:`
The Button Group component provides an easy way to group related buttons together with built-in selection management.
        `}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Layout orientation of the button group"},"selection-mode":{control:"select",options:["single","multiple","none"],description:"Selection behavior - single (radio), multiple (checkbox), or none"},size:{control:"select",options:["sm","md","lg"],description:"Size of buttons in the group"},variant:{control:"select",options:["outlined","borderless"],description:"Visual variant of buttons"},color:{control:"select",options:["primary","secondary","tertiary","warning","danger"],description:"Color of buttons in the group"},disabled:{control:"boolean",description:"Disable the entire button group"},spaced:{control:"boolean",description:"Add spacing between buttons"},"custom-class":{control:"text",description:"Custom CSS class to apply"}},args:{orientation:"horizontal","selection-mode":"single",size:"md",variant:"outlined",color:"primary",disabled:!1,spaced:!1,"custom-class":""},decorators:[M]},e={render:o=>t`
    <main>
      <modus-wc-button-group
        orientation="${o.orientation||"horizontal"}"
        selection-mode="${o["selection-mode"]||"single"}"
        size="${o.size||"md"}"
        variant="${o.variant||"outlined"}"
        color="${o.color||"primary"}"
        ?disabled="${o.disabled}"
        ?spaced="${o.spaced}"
        custom-class="${o["custom-class"]||""}"
      >
        <modus-wc-button>Day</modus-wc-button>
        <modus-wc-button selected>Week</modus-wc-button>
        <modus-wc-button>Month</modus-wc-button>
        <modus-wc-button>Year</modus-wc-button>
      </modus-wc-button-group>
    </main>
  `},s={render:o=>t`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Single Select (Radio Group)</h4>
        <modus-wc-button-group
          selection-mode="single"
          orientation="${o.orientation||"horizontal"}"
          size="${o.size||"md"}"
          variant="${o.variant||"outlined"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          ?spaced="${o.spaced}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>Day</modus-wc-button>
          <modus-wc-button selected>Week</modus-wc-button>
          <modus-wc-button>Month</modus-wc-button>
          <modus-wc-button>Year</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Multiple Select (Checkbox Group)</h4>
        <modus-wc-button-group
          selection-mode="multiple"
          variant="borderless"
          orientation="${o.orientation||"horizontal"}"
          size="${o.size||"md"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          ?spaced="${o.spaced}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>
            <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `},n={render:o=>t`
    <main style="display: flex; gap: 3rem; align-items: flex-start;">
      <div>
        <h4 style="margin-bottom: 1rem;">Horizontal (Default)</h4>
        <modus-wc-button-group
          orientation="horizontal"
          selection-mode="${o["selection-mode"]||"single"}"
          size="${o.size||"md"}"
          variant="${o.variant||"outlined"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          ?spaced="${o.spaced}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>Left</modus-wc-button>
          <modus-wc-button selected>Center</modus-wc-button>
          <modus-wc-button>Right</modus-wc-button>
        </modus-wc-button-group>
      </div>
      <div>
        <h4 style="margin-bottom: 1rem;">Vertical</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="${o["selection-mode"]||"single"}"
          size="${o.size||"md"}"
          variant="${o.variant||"outlined"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          ?spaced="${o.spaced}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>
            <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button selected>
            <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `},i={render:o=>t`
    <main
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Small</h4>
        <modus-wc-button-group
          size="sm"
          orientation="${o.orientation||"horizontal"}"
          selection-mode="${o["selection-mode"]||"single"}"
          variant="${o.variant||"outlined"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          ?spaced="${o.spaced}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Medium (Default)</h4>
        <modus-wc-button-group
          size="md"
          orientation="${o.orientation||"horizontal"}"
          selection-mode="${o["selection-mode"]||"single"}"
          variant="${o.variant||"outlined"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          ?spaced="${o.spaced}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Large</h4>
        <modus-wc-button-group
          size="lg"
          orientation="${o.orientation||"horizontal"}"
          selection-mode="${o["selection-mode"]||"single"}"
          variant="${o.variant||"outlined"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          ?spaced="${o.spaced}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `},c={name:"Spacing",render:o=>t`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Seamless (Default)</h4>
        <modus-wc-button-group
          ?spaced=${!1}
          orientation="${o.orientation||"horizontal"}"
          selection-mode="${o["selection-mode"]||"single"}"
          size="${o.size||"md"}"
          variant="${o.variant||"outlined"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Spacing</h4>
        <modus-wc-button-group
          ?spaced=${!0}
          orientation="${o.orientation||"horizontal"}"
          selection-mode="${o["selection-mode"]||"single"}"
          size="${o.size||"md"}"
          variant="${o.variant||"outlined"}"
          color="${o.color||"primary"}"
          ?disabled="${o.disabled}"
          custom-class="${o["custom-class"]||""}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `},d={parameters:{docs:{description:{story:"\n## Migration from v1 to v2\n\n### Prop Mapping\n\n| v1 `modus-button-group` Prop | v2 `modus-wc-button-group` Prop | Notes |\n| :--- | :--- | :--- |\n| `buttonStyle` | `variant` | `'outline'` is now `'outlined'`. |\n| `color` | `color` |  |\n| `size` | `size` | `'medium'` is now `'md'`, etc. |\n| `disabled` | `disabled` |  |\n| `selectionType` | `selectionMode` | Replaces `selectionType`. |\n| `selected` (on button) | `selected` (on button) | The group now coordinates the selected state. |\n\n### Event Mapping\n\n| v1 Event | v2 Event | Notes |\n| :--- | :--- | :--- |\n| `buttonSelectionChange` | `buttonGroupSelectionChange` | The event now provides the new selection value directly. |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>t`<div></div>`};var u,a,r;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => html\`
    <main>
      <modus-wc-button-group
        orientation="\${args.orientation || 'horizontal'}"
        selection-mode="\${args['selection-mode'] || 'single'}"
        size="\${args.size || 'md'}"
        variant="\${args.variant || 'outlined'}"
        color="\${args.color || 'primary'}"
        ?disabled="\${args.disabled}"
        ?spaced="\${args.spaced}"
        custom-class="\${args['custom-class'] || ''}"
      >
        <modus-wc-button>Day</modus-wc-button>
        <modus-wc-button selected>Week</modus-wc-button>
        <modus-wc-button>Month</modus-wc-button>
        <modus-wc-button>Year</modus-wc-button>
      </modus-wc-button-group>
    </main>
  \`
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var m,l,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Single Select (Radio Group)</h4>
        <modus-wc-button-group
          selection-mode="single"
          orientation="\${args.orientation || 'horizontal'}"
          size="\${args.size || 'md'}"
          variant="\${args.variant || 'outlined'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          ?spaced="\${args.spaced}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>Day</modus-wc-button>
          <modus-wc-button selected>Week</modus-wc-button>
          <modus-wc-button>Month</modus-wc-button>
          <modus-wc-button>Year</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Multiple Select (Checkbox Group)</h4>
        <modus-wc-button-group
          selection-mode="multiple"
          variant="borderless"
          orientation="\${args.orientation || 'horizontal'}"
          size="\${args.size || 'md'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          ?spaced="\${args.spaced}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>
            <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  \`
}`,...(b=(l=s.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var p,w,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
    <main style="display: flex; gap: 3rem; align-items: flex-start;">
      <div>
        <h4 style="margin-bottom: 1rem;">Horizontal (Default)</h4>
        <modus-wc-button-group
          orientation="horizontal"
          selection-mode="\${args['selection-mode'] || 'single'}"
          size="\${args.size || 'md'}"
          variant="\${args.variant || 'outlined'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          ?spaced="\${args.spaced}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>Left</modus-wc-button>
          <modus-wc-button selected>Center</modus-wc-button>
          <modus-wc-button>Right</modus-wc-button>
        </modus-wc-button-group>
      </div>
      <div>
        <h4 style="margin-bottom: 1rem;">Vertical</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="\${args['selection-mode'] || 'single'}"
          size="\${args.size || 'md'}"
          variant="\${args.variant || 'outlined'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          ?spaced="\${args.spaced}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>
            <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button selected>
            <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button>
            <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  \`
}`,...(g=(w=n.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var $,v,h;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <main
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Small</h4>
        <modus-wc-button-group
          size="sm"
          orientation="\${args.orientation || 'horizontal'}"
          selection-mode="\${args['selection-mode'] || 'single'}"
          variant="\${args.variant || 'outlined'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          ?spaced="\${args.spaced}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Medium (Default)</h4>
        <modus-wc-button-group
          size="md"
          orientation="\${args.orientation || 'horizontal'}"
          selection-mode="\${args['selection-mode'] || 'single'}"
          variant="\${args.variant || 'outlined'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          ?spaced="\${args.spaced}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Large</h4>
        <modus-wc-button-group
          size="lg"
          orientation="\${args.orientation || 'horizontal'}"
          selection-mode="\${args['selection-mode'] || 'single'}"
          variant="\${args.variant || 'outlined'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          ?spaced="\${args.spaced}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  \`
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,z,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Spacing',
  render: args => html\`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Seamless (Default)</h4>
        <modus-wc-button-group
          ?spaced=\${false}
          orientation="\${args.orientation || 'horizontal'}"
          selection-mode="\${args['selection-mode'] || 'single'}"
          size="\${args.size || 'md'}"
          variant="\${args.variant || 'outlined'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Spacing</h4>
        <modus-wc-button-group
          ?spaced=\${true}
          orientation="\${args.orientation || 'horizontal'}"
          selection-mode="\${args['selection-mode'] || 'single'}"
          size="\${args.size || 'md'}"
          variant="\${args.variant || 'outlined'}"
          color="\${args.color || 'primary'}"
          ?disabled="\${args.disabled}"
          custom-class="\${args['custom-class'] || ''}"
        >
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  \`
}`,...(f=(z=c.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var S,O,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n## Migration from v1 to v2\n\n### Prop Mapping\n\n| v1 \\`modus-button-group\\` Prop | v2 \\`modus-wc-button-group\\` Prop | Notes |\n| :--- | :--- | :--- |\n| \\`buttonStyle\\` | \\`variant\\` | \\`'outline'\\` is now \\`'outlined'\\`. |\n| \\`color\\` | \\`color\\` |  |\n| \\`size\\` | \\`size\\` | \\`'medium'\\` is now \\`'md'\\`, etc. |\n| \\`disabled\\` | \\`disabled\\` |  |\n| \\`selectionType\\` | \\`selectionMode\\` | Replaces \\`selectionType\\`. |\n| \\`selected\\` (on button) | \\`selected\\` (on button) | The group now coordinates the selected state. |\n\n### Event Mapping\n\n| v1 Event | v2 Event | Notes |\n| :--- | :--- | :--- |\n| \\`buttonSelectionChange\\` | \\`buttonGroupSelectionChange\\` | The event now provides the new selection value directly. |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(x=(O=d.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const k=["Default","Selection","Orientation","Sizes","Spacing","Migration"];export{e as Default,d as Migration,n as Orientation,s as Selection,i as Sizes,c as Spacing,k as __namedExportsOrder,G as default};
