import{w as d}from"./decorator-D4YmxizW.js";import{x as g}from"./lit-element-CucEn6F2.js";import{o as a}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const y=[{title:"Section 1",subtitle:"Section 1 subtitle",items:[{appName:"trimble"},{appName:"siteworks"},{appName:"earthworks"}]},{title:"Section 2",subtitle:"Section 2 subtitle",items:[{appName:"worksmanager"},{appName:"connect"},{appName:"unity"}]},{title:"Section 3",subtitle:"Section 3 subtitle",items:[{appName:"trade_service_live"},{appName:"livecount"},{appName:"supplier_xchange"}]},{title:"Section 4",subtitle:"Section 4 subtitle",items:[{appName:"projectsight"},{appName:"app_xchange"},{appName:"sketchup"}]},{title:"Section 5",subtitle:"Section 5 subtitle",items:[{appName:"pay"},{appName:"copilot"},{appName:"stabicad"}]}],N={title:"Components/App Menu",component:"modus-wc-app-menu",args:{layout:"list",sections:y},argTypes:{"custom-class":{control:"text"},layout:{control:{type:"select"},options:["list","grid"]},sections:{control:"object"},draggedItemPos:{table:{disable:!0}},grabbedItemPos:{table:{disable:!0}},isEditMode:{table:{disable:!0}},previousSections:{table:{disable:!0}}},decorators:[d],parameters:{actions:{handles:["layoutChange","itemsOrderChange"]},docs:{description:{component:`
A customizable app menu component that displays categorized application links in list or grid layout.

The component uses the \`modus-wc-panel\` component for layout and supports multiple sections with items.

### Features
- **Multiple Sections**: Supports any number of sections, each with a title, subtitle, and items
- **List & Grid Layouts**: Toggle between list and grid display modes

### Events
- **layoutChange**: Emitted when the \`layout\` prop changes between list and grid
- **itemsOrderChange**: Emitted when the user confirms reordering in edit mode (Done)

### Usage
The component accepts a \`sections\` array of \`IAppMenuSection\` objects.
        `}}}},n=e=>`<modus-wc-app-menu></modus-wc-app-menu>

<script>
  ${`const sections = ${JSON.stringify(e.sections,null,2)};`}

  const element = document.querySelector('modus-wc-app-menu');
  element.sections = sections;${e.layout?`
  element.layout = '${e.layout}';`:""}

  element.addEventListener('layoutChange', (event) => {
    console.log('Layout changed:', event.detail);
  });
  element.addEventListener('itemsOrderChange', (event) => {
    console.log('Items order changed:', event.detail);
  });
<\/script>
`,u={parameters:{docs:{source:{transform:(e,{args:t})=>n(t)}}},render:e=>g`
      <div style="min-height: 400px;">
        <modus-wc-app-menu
          custom-class=${a(e["custom-class"])}
          layout=${a(e.layout)}
          .sections=${e.sections}
        ></modus-wc-app-menu>
      </div>
    `},s={...u,parameters:{docs:{description:{story:"App menu with three sections displayed in list layout."},source:{transform:(e,{args:t})=>n(t)}}}},o={...u,args:{layout:"grid"},parameters:{docs:{description:{story:"App menu in grid layout showing all app emblems."},source:{transform:(e,{args:t})=>n(t)}}}};var r,i,p;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'App menu with three sections displayed in list layout.'
      },
      source: {
        transform: (_src, {
          args
        }: {
          args: AppMenuArgs;
        }) => getSourceCode(args)
      }
    }
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    layout: 'grid'
  },
  parameters: {
    docs: {
      description: {
        story: 'App menu in grid layout showing all app emblems.'
      },
      source: {
        transform: (_src, {
          args
        }: {
          args: AppMenuArgs;
        }) => getSourceCode(args)
      }
    }
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const v=["Default","GridLayout"];export{s as Default,o as GridLayout,v as __namedExportsOrder,N as default};
