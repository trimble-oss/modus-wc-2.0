import{x as t}from"./lit-element-C8zulti1.js";const T={title:"Components/Button Group",component:"modus-wc-button-group",parameters:{docs:{description:{component:`
The Button Group component provides an easy way to group related buttons together with built-in selection management.

## Features
- **Simple API**: Just wrap buttons in \`modus-wc-button-group\`
- **Selection Modes**: Single select (radio), multiple select (checkbox), or none
- **Orientations**: Horizontal or vertical layouts
- **Sizes**: Small, medium, or large
- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Styling**: Automatic pressed states and seamless button connections
        `}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Layout orientation of the button group"},"selection-mode":{control:"select",options:["single","multiple","none"],description:"Selection behavior - single (radio), multiple (checkbox), or none"},size:{control:"select",options:["sm","md","lg"],description:"Size of buttons in the group"},variant:{control:"select",options:["outlined","borderless"],description:"Visual variant of buttons"},value:{control:"text",description:"Selected value(s). String for single mode, array for multiple mode"},disabled:{control:"boolean",description:"Disable the entire button group"},spaced:{control:"boolean",description:"Add spacing between buttons"},"custom-class":{control:"text",description:"Custom CSS class to apply"}}},e={render:o=>t`
    <modus-wc-button-group
      orientation="${o.orientation||"horizontal"}"
      selection-mode="${o["selection-mode"]||"single"}"
      size="${o.size||"md"}"
      variant="${o.variant||"outlined"}"
      value="${o.value||"week"}"
      ?disabled="${o.disabled}"
      ?spaced="${o.spaced}"
      custom-class="${o["custom-class"]||""}"
      @buttonGroupSelectionChange="${A=>console.log("Selection changed:",A.detail)}"
    >
      <modus-wc-button value="day">Day</modus-wc-button>
      <modus-wc-button value="week">Week</modus-wc-button>
      <modus-wc-button value="month">Month</modus-wc-button>
      <modus-wc-button value="year">Year</modus-wc-button>
    </modus-wc-button-group>
  `,args:{orientation:"horizontal","selection-mode":"single",size:"md",variant:"outlined",value:"week",disabled:!1,spaced:!1,"custom-class":""}},n={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Time Period Selection</h4>
        <modus-wc-button-group selection-mode="single" value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month">Month</modus-wc-button>
          <modus-wc-button value="year">Year</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Text Alignment</h4>
        <modus-wc-button-group selection-mode="single" size="sm" value="center">
          <modus-wc-button value="left">
            <modus-wc-icon decorative name="text_align_left"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="center">
            <modus-wc-icon decorative name="text_centered"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="right">
            <modus-wc-icon decorative name="text_align_right"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `},u={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Text Formatting</h4>
        <modus-wc-button-group selection-mode="multiple" variant="borderless">
          <modus-wc-button value="bold">
            <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="italic">
            <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="underline">
            <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Filter Options</h4>
        <modus-wc-button-group selection-mode="multiple" size="sm" spaced>
          <modus-wc-button value="active">Active</modus-wc-button>
          <modus-wc-button value="featured">Featured</modus-wc-button>
          <modus-wc-button value="archived">Archived</modus-wc-button>
          <modus-wc-button value="draft">Draft</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `},s={render:()=>t`
    <div style="display: flex; gap: 3rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Media Controls</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="single"
          variant="borderless"
          value="pause"
        >
          <modus-wc-button value="play">
            <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="pause">
            <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="stop">
            <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Navigation Menu</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="single"
          size="lg"
          value="dashboard"
        >
          <modus-wc-button value="dashboard">Dashboard</modus-wc-button>
          <modus-wc-button value="projects">Projects</modus-wc-button>
          <modus-wc-button value="reports">Reports</modus-wc-button>
          <modus-wc-button value="settings">Settings</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `},d={render:()=>t`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Small Size</h4>
        <modus-wc-button-group size="sm" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Medium Size (Default)</h4>
        <modus-wc-button-group size="md" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Large Size</h4>
        <modus-wc-button-group size="lg" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `},i={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Entire Group Disabled</h4>
        <modus-wc-button-group disabled value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month">Month</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Individual Button Disabled</h4>
        <modus-wc-button-group value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month" disabled>Month</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `},c={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Seamless (Default)</h4>
        <modus-wc-button-group value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Spacing</h4>
        <modus-wc-button-group spaced value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `};var m,a,r;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-button-group
      orientation="\${args.orientation || 'horizontal'}"
      selection-mode="\${args['selection-mode'] || 'single'}"
      size="\${args.size || 'md'}"
      variant="\${args.variant || 'outlined'}"
      value="\${args.value || 'week'}"
      ?disabled="\${args.disabled}"
      ?spaced="\${args.spaced}"
      custom-class="\${args['custom-class'] || ''}"
      @buttonGroupSelectionChange="\${e => console.log('Selection changed:', e.detail)}"
    >
      <modus-wc-button value="day">Day</modus-wc-button>
      <modus-wc-button value="week">Week</modus-wc-button>
      <modus-wc-button value="month">Month</modus-wc-button>
      <modus-wc-button value="year">Year</modus-wc-button>
    </modus-wc-button-group>
  \`,
  args: {
    orientation: 'horizontal',
    'selection-mode': 'single',
    size: 'md',
    variant: 'outlined',
    value: 'week',
    disabled: false,
    spaced: false,
    'custom-class': ''
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var l,b,w;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Time Period Selection</h4>
        <modus-wc-button-group selection-mode="single" value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month">Month</modus-wc-button>
          <modus-wc-button value="year">Year</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Text Alignment</h4>
        <modus-wc-button-group selection-mode="single" size="sm" value="center">
          <modus-wc-button value="left">
            <modus-wc-icon decorative name="text_align_left"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="center">
            <modus-wc-icon decorative name="text_centered"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="right">
            <modus-wc-icon decorative name="text_align_right"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  \`
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var p,v,g;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Text Formatting</h4>
        <modus-wc-button-group selection-mode="multiple" variant="borderless">
          <modus-wc-button value="bold">
            <modus-wc-icon decorative name="text_bold"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="italic">
            <modus-wc-icon decorative name="text_italic"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="underline">
            <modus-wc-icon decorative name="text_underlined"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Filter Options</h4>
        <modus-wc-button-group selection-mode="multiple" size="sm" spaced>
          <modus-wc-button value="active">Active</modus-wc-button>
          <modus-wc-button value="featured">Featured</modus-wc-button>
          <modus-wc-button value="archived">Archived</modus-wc-button>
          <modus-wc-button value="draft">Draft</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  \`
}`,...(g=(v=u.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,y,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 3rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Media Controls</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="single"
          variant="borderless"
          value="pause"
        >
          <modus-wc-button value="play">
            <modus-wc-icon decorative name="play_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="pause">
            <modus-wc-icon decorative name="pause_circle"></modus-wc-icon>
          </modus-wc-button>
          <modus-wc-button value="stop">
            <modus-wc-icon decorative name="stop_circle"></modus-wc-icon>
          </modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Navigation Menu</h4>
        <modus-wc-button-group
          orientation="vertical"
          selection-mode="single"
          size="lg"
          value="dashboard"
        >
          <modus-wc-button value="dashboard">Dashboard</modus-wc-button>
          <modus-wc-button value="projects">Projects</modus-wc-button>
          <modus-wc-button value="reports">Reports</modus-wc-button>
          <modus-wc-button value="settings">Settings</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  \`
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,x,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Small Size</h4>
        <modus-wc-button-group size="sm" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Medium Size (Default)</h4>
        <modus-wc-button-group size="md" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Large Size</h4>
        <modus-wc-button-group size="lg" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  \`
}`,...(O=(x=d.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var z,k,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Entire Group Disabled</h4>
        <modus-wc-button-group disabled value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month">Month</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Individual Button Disabled</h4>
        <modus-wc-button-group value="week">
          <modus-wc-button value="day">Day</modus-wc-button>
          <modus-wc-button value="week">Week</modus-wc-button>
          <modus-wc-button value="month" disabled>Month</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  \`
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var _,$,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem;">Seamless (Default)</h4>
        <modus-wc-button-group value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">With Spacing</h4>
        <modus-wc-button-group spaced value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  \`
}`,...(M=($=c.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const C=["Default","SingleSelect","MultipleSelect","VerticalOrientation","DifferentSizes","Disabled","WithSpacing"];export{e as Default,d as DifferentSizes,i as Disabled,u as MultipleSelect,n as SingleSelect,s as VerticalOrientation,c as WithSpacing,C as __namedExportsOrder,T as default};
