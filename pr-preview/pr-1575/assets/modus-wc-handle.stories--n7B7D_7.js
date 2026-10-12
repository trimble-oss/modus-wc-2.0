import{b as o,r as M}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import{i as k}from"./keyed-DcwHG6kx.js";import"./directive-C_Rw-dL6.js";import"./directive-helpers-BZ4DLK7w.js";const B=M(`
  .handle-demo-container {
    display: flex;
    gap: 0;
  }

  .handle-demo-container.horizontal {
    height: 300px;
  }

  .handle-demo-container.vertical {
    flex-direction: column;
    height: 500px;
  }

  .handle-demo-panel {
    background-color: var(--modus-wc-color-base-100);
    overflow: auto;
  }

  .handle-demo-panel.initial-size-200 {
    width: 200px;
  }

  .handle-demo-panel.initial-height-200 {
    height: 200px;
  }

  .handle-demo-panel.initial-size-400 {
    width: 400px;
  }

  .handle-demo-panel.flex-fill {
    flex: 1;
  }

  .handle-demo-right-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`),R={title:"Components/Handle",component:"modus-wc-handle",args:{"button-color":"tertiary","button-size":"md","button-variant":"filled","custom-class":"","default-split":50,density:"comfortable","left-target":"",orientation:"vertical","right-target":"",size:"default",type:"bar"},argTypes:{"custom-class":{control:"text"},"default-split":{control:{type:"range",min:1,max:100,step:1}},density:{control:{type:"select"},options:["compact","comfortable","relaxed"]},"button-size":{control:{type:"select"},options:["sm","md","lg","xl"]},"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"left-target":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"right-target":{control:"text"},size:{control:{type:"select"},options:["default","lg","xl","2xl"]},type:{control:{type:"select"},options:["bar","button"]}},parameters:{layout:"padded"}},h=e=>o`
<modus-wc-handle
  custom-class="${a(e==null?void 0:e["custom-class"])}"
  default-split="${e==null?void 0:e["default-split"]}"
  density="${e==null?void 0:e.density}"
  button-size="${e==null?void 0:e["button-size"]}"
  button-color="${e==null?void 0:e["button-color"]}"
  button-variant="${e==null?void 0:e["button-variant"]}"
  left-target="${a(e==null?void 0:e["left-target"])}"
  orientation="${a(e==null?void 0:e.orientation)}"
  right-target="${a(e==null?void 0:e["right-target"])}"
  size="${e==null?void 0:e.size}"
  type="${e==null?void 0:e.type}"
></modus-wc-handle>
  `,s=(e,n,i,t="")=>o`
<div id="${e}" class="handle-demo-panel ${t}">
  <h3>${n}</h3>
  <p>${i}</p>
</div>
`,D=(e,n,i,t,l="")=>o`
<div id="${e}" class="handle-demo-panel ${l}">
  <h3>${n}</h3>
  <p>${i}</p>
  <p><strong>Keyboard:</strong> ${t}</p>
</div>
`,I=()=>Math.random().toString(36).substring(2,9),m=e=>{const n=(e==null?void 0:e.orientation)??"horizontal",i=(e==null?void 0:e.type)??"bar",t=n==="horizontal",l=I(),u=`panel-left-${l}`,y=`panel-right-${l}`;return o`
<style>${B}</style>
${k(n,o`
<div class="handle-demo-container ${t?"horizontal":"vertical"}">
  ${D(u,t?"Left Panel":"Top Panel","Drag the handle to resize this panel.",`Focus the handle and use ${t?"Left/Right":"Up/Down"} arrow keys to resize (5px per press, 15px with Shift).`,t?"initial-size-200":"initial-height-200")}
  ${h({orientation:n,size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:i,"default-split":(e==null?void 0:e["default-split"])??50,"custom-class":e==null?void 0:e["custom-class"],"button-size":e==null?void 0:e["button-size"],"button-color":e==null?void 0:e["button-color"],"button-variant":e==null?void 0:e["button-variant"],"left-target":`#${u}`,"right-target":`#${y}`})}
  ${s(y,t?"Right Panel":"Bottom Panel","This panel will resize automatically when you drag the handle.","flex-fill")}
</div>
`)}`},r={render:e=>m(e)},d={render:e=>m({...e,orientation:(e==null?void 0:e.orientation)??"horizontal",size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:"button"}),args:{type:"button"},parameters:{docs:{description:{story:`
Button type handle with customizable button properties.

**Button Properties Available:**
- \`button-size\`: sm, md, lg
- \`button-color\`: primary, secondary, tertiary, warning, danger
- \`button-variant\`: borderless, filled, outlined

**Keyboard Navigation:**
- Arrow keys: Move 5px per press
- Shift + Arrow keys: Move 15px per press

The button handle provides a more prominent visual indicator compared to the bar type.
        `}}}},p={render:()=>o`
<style>${B}</style>
<div class="handle-demo-container" style="height: 600px;">
  ${s("panel-one","One","Large left panel","initial-size-400")}
  ${h({orientation:"horizontal",size:"default",density:"comfortable",type:"bar","left-target":"#panel-one","right-target":"#right-container"})}
  <div id="right-container" class="handle-demo-right-container">
    ${s("panel-two","Two","Top right panel","initial-height-200")}
    ${h({orientation:"vertical",size:"default",density:"comfortable",type:"bar","left-target":"#panel-two","right-target":"#panel-three"})}
    ${s("panel-three","Three","Bottom right panel","flex-fill")}
  </div>
</div>
    `},c={render:e=>m(e)};var f,b,$;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...($=(b=r.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var v,z,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => {
    return Template({
      ...args,
      orientation: args?.orientation ?? 'horizontal',
      size: args?.size ?? 'default',
      density: args?.density ?? 'comfortable',
      type: 'button'
    });
  },
  args: {
    type: 'button'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Button type handle with customizable button properties.

**Button Properties Available:**
- \\\`button-size\\\`: sm, md, lg
- \\\`button-color\\\`: primary, secondary, tertiary, warning, danger
- \\\`button-variant\\\`: borderless, filled, outlined

**Keyboard Navigation:**
- Arrow keys: Move 5px per press
- Shift + Arrow keys: Move 15px per press

The button handle provides a more prominent visual indicator compared to the bar type.
        \`
      }
    }
  }
}`,...(x=(z=d.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var w,T,P;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>\${storyStyles}</style>
<div class="handle-demo-container" style="height: 600px;">
  \${PanelTemplate('panel-one', 'One', 'Large left panel', 'initial-size-400')}
  \${HandleTemplate({
      orientation: 'horizontal',
      size: 'default',
      density: 'comfortable',
      type: 'bar',
      'left-target': '#panel-one',
      'right-target': '#right-container'
    })}
  <div id="right-container" class="handle-demo-right-container">
    \${PanelTemplate('panel-two', 'Two', 'Top right panel', 'initial-height-200')}
    \${HandleTemplate({
      orientation: 'vertical',
      size: 'default',
      density: 'comfortable',
      type: 'bar',
      'left-target': '#panel-two',
      'right-target': '#panel-three'
    })}
    \${PanelTemplate('panel-three', 'Three', 'Bottom right panel', 'flex-fill')}
  </div>
</div>
    \`;
  }
}`,...(P=(T=p.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var S,H,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...(A=(H=c.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const U=["Default","ButtonVariant","MultipleHandlesNested","ShadowDomParent"];export{d as ButtonVariant,r as Default,p as MultipleHandlesNested,c as ShadowDomParent,U as __namedExportsOrder,R as default};
