import{x as t}from"./lit-element-C8zulti1.js";const F={title:"Components/Button Group",component:"modus-wc-button-group",parameters:{docs:{description:{component:`
The Button Group component provides an easy way to group related buttons together with built-in selection management.

## Features
- **Simple API**: Just wrap buttons in \`modus-wc-button-group\`
- **Selection Modes**: Single select (radio), multiple select (checkbox), or none
- **Orientations**: Horizontal or vertical layouts
- **Sizes**: Small, medium, or large
- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Styling**: Automatic pressed states and seamless button connections
        `}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Layout orientation of the button group"},"selection-mode":{control:"select",options:["single","multiple","none"],description:"Selection behavior - single (radio), multiple (checkbox), or none"},size:{control:"select",options:["xs","sm","md","lg"],description:"Size of buttons in the group"},variant:{control:"select",options:["outlined","borderless"],description:"Visual variant of buttons"},color:{control:"select",options:["primary","secondary","tertiary","warning","danger"],description:"Color of buttons in the group"},value:{control:"text",description:"Selected value(s). String for single mode, array for multiple mode"},disabled:{control:"boolean",description:"Disable the entire button group"},spaced:{control:"boolean",description:"Add spacing between buttons"},"custom-class":{control:"text",description:"Custom CSS class to apply"}}},n={render:o=>t`
    <modus-wc-button-group
      orientation="${o.orientation||"horizontal"}"
      selection-mode="${o["selection-mode"]||"single"}"
      size="${o.size||"md"}"
      variant="${o.variant||"outlined"}"
      color="${o.color||"primary"}"
      value="${o.value||"week"}"
      ?disabled="${o.disabled}"
      ?spaced="${o.spaced}"
      custom-class="${o["custom-class"]||""}"
      @buttonGroupSelectionChange="${W=>console.log("Selection changed:",W.detail)}"
    >
      <modus-wc-button value="day">Day</modus-wc-button>
      <modus-wc-button value="week">Week</modus-wc-button>
      <modus-wc-button value="month">Month</modus-wc-button>
      <modus-wc-button value="year">Year</modus-wc-button>
    </modus-wc-button-group>
  `,args:{orientation:"horizontal","selection-mode":"single",size:"md",variant:"outlined",color:"primary",value:"week",disabled:!1,spaced:!1,"custom-class":""}},e={render:()=>t`
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
  `},i={render:()=>t`
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
  `},s={render:()=>t`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Extra Small Size</h4>
        <modus-wc-button-group size="xs" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

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
  `},a={render:()=>t`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Primary Color (Default)</h4>
        <modus-wc-button-group color="primary" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Secondary Color</h4>
        <modus-wc-button-group color="secondary" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Tertiary Color</h4>
        <modus-wc-button-group color="tertiary" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Warning Color</h4>
        <modus-wc-button-group color="warning" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Danger Color</h4>
        <modus-wc-button-group color="danger" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  `},d={render:()=>t`
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
  `},r={parameters:{docs:{description:{story:`
## Migration from v1 to v2

The Button Group component has been redesigned in v2 to provide a simpler, more intuitive API while maintaining all the functionality from v1.

### Key Improvements in v2

- **Simplified API**: No need to manually manage pressed states or handle selection logic
- **Automatic button management**: Child buttons are automatically configured with the correct properties
- **Built-in accessibility**: ARIA attributes and keyboard navigation handled automatically
- **Seamless visual connection**: Buttons are visually connected by default (can be spaced with \`spaced\` prop)

### Breaking Changes

1. **Component Structure**: In v1, you had to manually manage button states. In v2, just wrap buttons in \`modus-wc-button-group\`
2. **Selection Management**: The component now handles all selection logic internally
3. **Size Prop**: Size values changed from verbose names to abbreviations (same as button component)
4. **New Props**: Added \`color\` prop for consistent theming across all buttons

### Prop Mapping

| v1 Approach | v2 Prop | Notes |
|-------------|---------|-------|
| Manual button state management | \`value\` | Component handles pressed states automatically |
| Individual button sizing | \`size\` | Applied to all buttons in the group |
| Manual aria attributes | Built-in | Component adds appropriate ARIA roles |
| Individual button colors | \`color\` | Applied to all buttons in the group |
| N/A | \`selection-mode\` | New: 'single', 'multiple', or 'none' |
| N/A | \`orientation\` | New: 'horizontal' or 'vertical' |
| N/A | \`spaced\` | New: Adds spacing between buttons |

### Migration Example

#### v1 Approach (Manual Management)
\`\`\`html
<!-- Had to manually manage pressed states and selection logic -->
<div class="button-group" role="group">
  <modus-button 
    id="btn1"
    button-style="outline"
    onclick="handleSelection('btn1')"
  >
    Option 1
  </modus-button>
  <modus-button 
    id="btn2"
    button-style="outline"
    onclick="handleSelection('btn2')"
  >
    Option 2
  </modus-button>
</div>

<script>
  function handleSelection(id) {
    // Manual logic to update pressed states
    document.querySelectorAll('.button-group modus-button').forEach(btn => {
      btn.removeAttribute('pressed');
    });
    document.getElementById(id).setAttribute('pressed', 'true');
  }
<\/script>
\`\`\`

#### v2 Approach (Automatic Management)
\`\`\`html
<!-- Component handles everything automatically -->
<modus-wc-button-group 
  selection-mode="single" 
  value="option1"
  @buttonGroupSelectionChange="\${(e) => console.log('Selected:', e.detail)}"
>
  <modus-wc-button value="option1">Option 1</modus-wc-button>
  <modus-wc-button value="option2">Option 2</modus-wc-button>
</modus-wc-button-group>
\`\`\`

### Event Mapping

| v1 Event | v2 Event | Notes |
|----------|----------|-------|
| Manual click handlers | \`buttonGroupSelectionChange\` | Emitted when selection changes |

### Additional Features in v2

- **Multiple Selection**: Set \`selection-mode="multiple"\` for checkbox-like behavior
- **No Selection**: Set \`selection-mode="none"\` for action groups without selection
- **Vertical Layout**: Set \`orientation="vertical"\` for vertical button groups
- **Color Theming**: Use \`color\` prop to apply consistent theming
- **Size Control**: Use \`size\` prop to control all button sizes at once
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>t`<div></div>`};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-button-group
      orientation="\${args.orientation || 'horizontal'}"
      selection-mode="\${args['selection-mode'] || 'single'}"
      size="\${args.size || 'md'}"
      variant="\${args.variant || 'outlined'}"
      color="\${args.color || 'primary'}"
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
    color: 'primary',
    value: 'week',
    disabled: false,
    spaced: false,
    'custom-class': ''
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,w,v;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(w=e.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var g,h,y;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=u.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,f,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var x,A,z;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Extra Small Size</h4>
        <modus-wc-button-group size="xs" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

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
}`,...(z=(A=s.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var M,k,C;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;"
    >
      <div>
        <h4 style="margin-bottom: 1rem;">Primary Color (Default)</h4>
        <modus-wc-button-group color="primary" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Secondary Color</h4>
        <modus-wc-button-group color="secondary" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Tertiary Color</h4>
        <modus-wc-button-group color="tertiary" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Warning Color</h4>
        <modus-wc-button-group color="warning" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>

      <div>
        <h4 style="margin-bottom: 1rem;">Danger Color</h4>
        <modus-wc-button-group color="danger" value="option2">
          <modus-wc-button value="option1">Option 1</modus-wc-button>
          <modus-wc-button value="option2">Option 2</modus-wc-button>
          <modus-wc-button value="option3">Option 3</modus-wc-button>
        </modus-wc-button-group>
      </div>
    </div>
  \`
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var D,I,N;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var _,$,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=($=c.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var P,B,T;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
## Migration from v1 to v2

The Button Group component has been redesigned in v2 to provide a simpler, more intuitive API while maintaining all the functionality from v1.

### Key Improvements in v2

- **Simplified API**: No need to manually manage pressed states or handle selection logic
- **Automatic button management**: Child buttons are automatically configured with the correct properties
- **Built-in accessibility**: ARIA attributes and keyboard navigation handled automatically
- **Seamless visual connection**: Buttons are visually connected by default (can be spaced with \\\`spaced\\\` prop)

### Breaking Changes

1. **Component Structure**: In v1, you had to manually manage button states. In v2, just wrap buttons in \\\`modus-wc-button-group\\\`
2. **Selection Management**: The component now handles all selection logic internally
3. **Size Prop**: Size values changed from verbose names to abbreviations (same as button component)
4. **New Props**: Added \\\`color\\\` prop for consistent theming across all buttons

### Prop Mapping

| v1 Approach | v2 Prop | Notes |
|-------------|---------|-------|
| Manual button state management | \\\`value\\\` | Component handles pressed states automatically |
| Individual button sizing | \\\`size\\\` | Applied to all buttons in the group |
| Manual aria attributes | Built-in | Component adds appropriate ARIA roles |
| Individual button colors | \\\`color\\\` | Applied to all buttons in the group |
| N/A | \\\`selection-mode\\\` | New: 'single', 'multiple', or 'none' |
| N/A | \\\`orientation\\\` | New: 'horizontal' or 'vertical' |
| N/A | \\\`spaced\\\` | New: Adds spacing between buttons |

### Migration Example

#### v1 Approach (Manual Management)
\\\`\\\`\\\`html
<!-- Had to manually manage pressed states and selection logic -->
<div class="button-group" role="group">
  <modus-button 
    id="btn1"
    button-style="outline"
    onclick="handleSelection('btn1')"
  >
    Option 1
  </modus-button>
  <modus-button 
    id="btn2"
    button-style="outline"
    onclick="handleSelection('btn2')"
  >
    Option 2
  </modus-button>
</div>

<script>
  function handleSelection(id) {
    // Manual logic to update pressed states
    document.querySelectorAll('.button-group modus-button').forEach(btn => {
      btn.removeAttribute('pressed');
    });
    document.getElementById(id).setAttribute('pressed', 'true');
  }
<\/script>
\\\`\\\`\\\`

#### v2 Approach (Automatic Management)
\\\`\\\`\\\`html
<!-- Component handles everything automatically -->
<modus-wc-button-group 
  selection-mode="single" 
  value="option1"
  @buttonGroupSelectionChange="\\\${(e) => console.log('Selected:', e.detail)}"
>
  <modus-wc-button value="option1">Option 1</modus-wc-button>
  <modus-wc-button value="option2">Option 2</modus-wc-button>
</modus-wc-button-group>
\\\`\\\`\\\`

### Event Mapping

| v1 Event | v2 Event | Notes |
|----------|----------|-------|
| Manual click handlers | \\\`buttonGroupSelectionChange\\\` | Emitted when selection changes |

### Additional Features in v2

- **Multiple Selection**: Set \\\`selection-mode="multiple"\\\` for checkbox-like behavior
- **No Selection**: Set \\\`selection-mode="none"\\\` for action groups without selection
- **Vertical Layout**: Set \\\`orientation="vertical"\\\` for vertical button groups
- **Color Theming**: Use \\\`color\\\` prop to apply consistent theming
- **Size Control**: Use \\\`size\\\` prop to control all button sizes at once
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
}`,...(T=(B=r.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const R=["Default","SingleSelect","MultipleSelect","VerticalOrientation","DifferentSizes","DifferentColors","Disabled","WithSpacing","Migration"];export{n as Default,a as DifferentColors,s as DifferentSizes,d as Disabled,r as Migration,u as MultipleSelect,e as SingleSelect,i as VerticalOrientation,c as WithSpacing,R as __namedExportsOrder,F as default};
