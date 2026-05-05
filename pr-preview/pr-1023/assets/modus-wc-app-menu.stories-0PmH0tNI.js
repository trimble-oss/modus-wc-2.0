import{w as u}from"./decorator-D4YmxizW.js";import{x as g}from"./lit-element-CucEn6F2.js";import{o as r}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const y=[{appName:"trimble"},{appName:"siteworks"},{appName:"earthworks"},{appName:"worksmanager"},{appName:"connect"},{appName:"unity"},{appName:"trade_service_live"},{appName:"livecount"},{appName:"supplier_xchange"},{appName:"projectsight"},{appName:"app_xchange"},{appName:"sketchup"},{appName:"pay"},{appName:"copilot"},{appName:"stabicad"}],v={title:"Components/App Menu",component:"modus-wc-app-menu",args:{layout:"list",apps:y},argTypes:{"custom-class":{control:"text"},layout:{control:{type:"select"},options:["list","grid"]},apps:{control:"object"},draggedItemPos:{table:{disable:!0}},grabbedItemPos:{table:{disable:!0}},isEditMode:{table:{disable:!0}}},decorators:[u],parameters:{actions:{handles:["layoutChange","itemsOrderChange","itemClick"]},docs:{description:{component:`
A customizable app menu component that displays application links in list or grid layout.

The component uses the modus-wc-panel component for layout , supports dual viewing (List and Grid) modes and allows reordering via drag-and-drop and keyboard in edit mode.
        `}}}},o=e=>`<modus-wc-app-menu></modus-wc-app-menu>

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
`,l={parameters:{docs:{source:{transform:(e,{args:a})=>o(a)}}},render:e=>g`
      <div style="min-height: 400px;">
        <modus-wc-app-menu
          custom-class=${r(e["custom-class"])}
          layout=${r(e.layout)}
          .apps=${e.apps}
        ></modus-wc-app-menu>
      </div>
    `},t={...l,parameters:{docs:{description:{story:"App menu displayed in list layout."},source:{transform:(e,{args:a})=>o(a)}}}},s={...l,args:{layout:"grid"},parameters:{docs:{description:{story:"App menu in grid layout showing all app emblems."},source:{transform:(e,{args:a})=>o(a)}}}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,i,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const A=["Default","GridLayout"];export{t as Default,s as GridLayout,A as __namedExportsOrder,v as default};
