import"./index-CuwpfXOz.js";import{w as g}from"./decorator-BqOgn-6Y.js";import{x as y}from"./lit-element-CucEn6F2.js";import{o as r}from"./if-defined-BiZP-SBN.js";import{a as n}from"./chunk-4XZ63LWV-C1hGcAQa.js";import"./v4-CtRu48qb.js";const h=[{appName:"trimble"},{appName:"siteworks"},{appName:"earthworks"},{appName:"worksmanager"},{appName:"connect"},{appName:"unity"},{appName:"trade_service_live"},{appName:"livecount"},{appName:"supplier_xchange"},{appName:"projectsight"},{appName:"app_xchange"},{appName:"sketchup"},{appName:"pay"},{appName:"copilot"},{appName:"stabicad"}],A={title:"Components/App Menu",component:"modus-wc-app-menu",args:{layout:"list",apps:h},argTypes:{"custom-class":{control:"text"},layout:{control:{type:"select"},options:["list","grid"]},apps:{control:"object"},draggedItemPos:{table:{disable:!0}},grabbedItemPos:{table:{disable:!0}},isEditMode:{table:{disable:!0}}},decorators:[g],parameters:{actions:{handles:["layoutChange","itemsOrderChange"]},docs:{description:{component:`
A customizable app menu component that displays application links in list or grid layout.

The component uses the \`modus-wc-panel\` component for layout and supports reordering via drag-and-drop or keyboard.

### Features
- **List & Grid Layouts**: Toggle between list and grid display modes
- **Reorderable**: Edit mode allows drag-and-drop and keyboard reordering

### Events
- **layoutChange**: Emitted when the \`layout\` prop changes between list and grid
- **itemsOrderChange**: Emitted when the user confirms reordering in edit mode (Done)

### Usage
The component accepts an \`apps\` array of \`IAppMenuItem\` objects.
        `}}}},s=e=>`<modus-wc-app-menu></modus-wc-app-menu>

<script>
  ${`const apps = ${JSON.stringify(e.apps,null,2)};`}

  const element = document.querySelector('modus-wc-app-menu');
  element.apps = apps;${e.layout?`
  element.layout = '${e.layout}';`:""}

  element.addEventListener('layoutChange', (event) => {
    console.log('Layout changed:', event.detail);
  });
  element.addEventListener('itemsOrderChange', (event) => {
    console.log('Items order changed:', event.detail);
  });
<\/script>
`,u={parameters:{docs:{source:{transform:(e,{args:a})=>s(a)}}},render:e=>y`
      <div style="min-height: 400px;">
        <modus-wc-app-menu
          custom-class=${r(e["custom-class"])}
          layout=${r(e.layout)}
          .apps=${e.apps}
          @layoutChange=${n("layoutChange")}
          @itemsOrderChange=${n("itemsOrderChange")}
        ></modus-wc-app-menu>
      </div>
    `},t={...u,parameters:{docs:{description:{story:"App menu displayed in list layout."},source:{transform:(e,{args:a})=>s(a)}}}},o={...u,args:{layout:"grid"},parameters:{docs:{description:{story:"App menu in grid layout showing all app emblems."},source:{transform:(e,{args:a})=>s(a)}}}};var p,m,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'App menu displayed in list layout.'
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const _=["Default","GridLayout"];export{t as Default,o as GridLayout,_ as __namedExportsOrder,A as default};
