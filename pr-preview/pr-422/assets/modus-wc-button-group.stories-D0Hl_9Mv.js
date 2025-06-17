import{w as S}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const _={title:"Components/Button Group",component:"modus-wc-button-group",parameters:{actions:{handles:["buttonGroupSelectionChange"]},docs:{description:{component:`
The Button Group component provides an easy way to group related buttons together with built-in selection management.
        `}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Layout orientation of the button group"},"selection-mode":{control:"select",options:["single","multiple","none"],description:"Selection behavior - single (radio), multiple (checkbox), or none"},size:{control:"select",options:["sm","md","lg"],description:"Size of buttons in the group"},variant:{control:"select",options:["outlined","borderless"],description:"Visual variant of buttons"},color:{control:"select",options:["primary","secondary","tertiary","warning","danger"],description:"Color of buttons in the group"},disabled:{control:"boolean",description:"Disable the entire button group"},spaced:{control:"boolean",description:"Add spacing between buttons"},"custom-class":{control:"text",description:"Custom CSS class to apply"}},args:{orientation:"horizontal","selection-mode":"single",size:"md",variant:"outlined",color:"primary",disabled:!1,spaced:!1,"custom-class":""},decorators:[S]},t={render:()=>o`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Single Select (Radio Group)</h4>
        <modus-wc-button-group selection-mode="single">
          <modus-wc-button>Day</modus-wc-button>
          <modus-wc-button selected>Week</modus-wc-button>
          <modus-wc-button>Month</modus-wc-button>
          <modus-wc-button>Year</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Multiple Select (Checkbox Group)</h4>
        <modus-wc-button-group selection-mode="multiple" variant="borderless">
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
  `},n={render:()=>o`
    <main style="display: flex; gap: 3rem; align-items: flex-start;">
      <div>
        <h4 style="margin-bottom: 1rem;">Horizontal (Default)</h4>
        <modus-wc-button-group>
          <modus-wc-button>Left</modus-wc-button>
          <modus-wc-button selected>Center</modus-wc-button>
          <modus-wc-button>Right</modus-wc-button>
        </modus-wc-button-group>
      </div>
      <div>
        <h4 style="margin-bottom: 1rem;">Vertical</h4>
        <modus-wc-button-group orientation="vertical">
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
  `},e={render:()=>o`
    <main
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Small</h4>
        <modus-wc-button-group size="sm">
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Medium (Default)</h4>
        <modus-wc-button-group size="md">
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Large</h4>
        <modus-wc-button-group size="lg">
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `},u={name:"Spacing",render:()=>o`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Seamless (Default)</h4>
        <modus-wc-button-group>
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Spacing</h4>
        <modus-wc-button-group spaced>
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  `},s={parameters:{docs:{description:{story:"\n## Migration from v1 to v2\n\n### Prop Mapping\n\n| v1 `modus-button-group` Prop | v2 `modus-wc-button-group` Prop | Notes |\n| :--- | :--- | :--- |\n| `buttonStyle` | `variant` | `'outline'` is now `'outlined'`. |\n| `color` | `color` |  |\n| `size` | `size` | `'medium'` is now `'md'`, etc. |\n| `disabled` | `disabled` |  |\n| `selectionType` | `selectionMode` | Replaces `selectionType`. |\n| `selected` (on button) | `selected` (on button) | The group now coordinates the selected state. |\n\n### Event Mapping\n\n| v1 Event | v2 Event | Notes |\n| :--- | :--- | :--- |\n| `buttonSelectionChange` | `buttonGroupSelectionChange` | The event now provides the new selection value directly. |\n        "}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Single Select (Radio Group)</h4>
        <modus-wc-button-group selection-mode="single">
          <modus-wc-button>Day</modus-wc-button>
          <modus-wc-button selected>Week</modus-wc-button>
          <modus-wc-button>Month</modus-wc-button>
          <modus-wc-button>Year</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Multiple Select (Checkbox Group)</h4>
        <modus-wc-button-group selection-mode="multiple" variant="borderless">
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
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,r,a;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <main style="display: flex; gap: 3rem; align-items: flex-start;">
      <div>
        <h4 style="margin-bottom: 1rem;">Horizontal (Default)</h4>
        <modus-wc-button-group>
          <modus-wc-button>Left</modus-wc-button>
          <modus-wc-button selected>Center</modus-wc-button>
          <modus-wc-button>Right</modus-wc-button>
        </modus-wc-button-group>
      </div>
      <div>
        <h4 style="margin-bottom: 1rem;">Vertical</h4>
        <modus-wc-button-group orientation="vertical">
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
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var l,b,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <main
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Small</h4>
        <modus-wc-button-group size="sm">
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Medium (Default)</h4>
        <modus-wc-button-group size="md">
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Large</h4>
        <modus-wc-button-group size="lg">
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  \`
}`,...(p=(b=e.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var w,g,v;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Spacing',
  render: () => html\`
    <main style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Seamless (Default)</h4>
        <modus-wc-button-group>
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Spacing</h4>
        <modus-wc-button-group spaced>
          <modus-wc-button>Option 1</modus-wc-button>
          <modus-wc-button selected>Option 2</modus-wc-button>
          <modus-wc-button>Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </main>
  \`
}`,...(v=(g=u.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,y,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: `\n## Migration from v1 to v2\n\n### Prop Mapping\n\n| v1 \\`modus-button-group\\` Prop | v2 \\`modus-wc-button-group\\` Prop | Notes |\n| :--- | :--- | :--- |\n| \\`buttonStyle\\` | \\`variant\\` | \\`'outline'\\` is now \\`'outlined'\\`. |\n| \\`color\\` | \\`color\\` |  |\n| \\`size\\` | \\`size\\` | \\`'medium'\\` is now \\`'md'\\`, etc. |\n| \\`disabled\\` | \\`disabled\\` |  |\n| \\`selectionType\\` | \\`selectionMode\\` | Replaces \\`selectionType\\`. |\n| \\`selected\\` (on button) | \\`selected\\` (on button) | The group now coordinates the selected state. |\n\n### Event Mapping\n\n| v1 Event | v2 Event | Notes |\n| :--- | :--- | :--- |\n| \\`buttonSelectionChange\\` | \\`buttonGroupSelectionChange\\` | The event now provides the new selection value directly. |\n        `\n      }\n    },\n    controls: {\n      disable: true\n    },\n    canvas: {\n      disable: true\n    }\n  },\n  render: () => html`<div></div>`\n}",...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const C=["Selection","Orientation","Sizes","Spacing","Migration"];export{s as Migration,n as Orientation,t as Selection,e as Sizes,u as Spacing,C as __namedExportsOrder,_ as default};
