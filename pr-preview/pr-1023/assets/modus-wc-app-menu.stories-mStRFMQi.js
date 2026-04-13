import{x as d}from"./lit-element-CucEn6F2.js";import{o as a}from"./if-defined-BiZP-SBN.js";const g=[{title:"Construction",subtitle:"Project management tools",items:[{appName:"connect"},{appName:"viewpoint"},{appName:"tekla"},{appName:"b2w"},{appName:"geosuite"}]},{title:"Design & Engineering",subtitle:"Modeling and design tools",items:[{appName:"sketchup"},{appName:"novapoint"},{appName:"reality_capture"},{appName:"nova"},{appName:"novapoint"}]},{title:"Project Management",subtitle:"Project management tools",items:[{appName:"projectsight"},{appName:"sitevision"},{appName:"siteworks"}]}],w={title:"Components/App Menu",component:"modus-wc-app-menu",args:{layout:"list",sections:g},argTypes:{"custom-class":{control:"text"},layout:{control:{type:"select"},options:["list","grid"]},sections:{control:"object"}},parameters:{docs:{description:{component:`
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
`,u={parameters:{docs:{source:{transform:(e,{args:t})=>n(t)}}},render:e=>d`
      <div style="min-height: 400px;">
        <modus-wc-app-menu
          custom-class=${a(e["custom-class"])}
          layout=${a(e.layout)}
          .sections=${e.sections}
          @layoutChange=${t=>console.log("Layout changed:",t.detail)}
          @itemsOrderChange=${t=>console.log("Items order changed:",t.detail)}
        ></modus-wc-app-menu>
      </div>
    `},o={...u,parameters:{docs:{description:{story:"App menu with three sections displayed in list layout."},source:{transform:(e,{args:t})=>n(t)}}}},s={...u,args:{layout:"grid"},parameters:{docs:{description:{story:"App menu in grid layout showing all app emblems."},source:{transform:(e,{args:t})=>n(t)}}}};var r,i,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const f=["Default","GridLayout"];export{o as Default,s as GridLayout,f as __namedExportsOrder,w as default};
