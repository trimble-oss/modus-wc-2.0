import{E as k,x as i,r as B}from"./lit-element-CucEn6F2.js";import{o as r}from"./if-defined-BiZP-SBN.js";import{e as H,i as S}from"./directive-C_Rw-dL6.js";import{m as A}from"./directive-helpers-CDGBUeOP.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=H(class extends S{constructor(){super(...arguments),this.key=k}render(e,t){return this.key=e,t}update(e,[t,o]){return t!==this.key&&(A(e),this.key=t),o}}),T=B(`
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
`),q={title:"Components/Handle",component:"modus-wc-handle",args:{"button-color":"tertiary","button-size":"md","button-variant":"filled","custom-class":"","default-split":50,density:"comfortable","left-target":"",orientation:"vertical","right-target":"",size:"default",type:"bar"},argTypes:{"custom-class":{control:"text"},"default-split":{control:{type:"range",min:1,max:100,step:1}},density:{control:{type:"select"},options:["compact","comfortable","relaxed"]},"button-size":{control:{type:"select"},options:["sm","md","lg"]},"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"left-target":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"right-target":{control:"text"},size:{control:{type:"select"},options:["default","lg","xl","2xl"]},type:{control:{type:"select"},options:["bar","button"]}},parameters:{layout:"padded"}},s=e=>i`
<modus-wc-handle
  custom-class="${r(e==null?void 0:e["custom-class"])}"
  default-split="${e==null?void 0:e["default-split"]}"
  density="${e==null?void 0:e.density}"
  button-size="${e==null?void 0:e["button-size"]}"
  button-color="${e==null?void 0:e["button-color"]}"
  button-variant="${e==null?void 0:e["button-variant"]}"
  left-target="${r(e==null?void 0:e["left-target"])}"
  orientation="${r(e==null?void 0:e.orientation)}"
  right-target="${r(e==null?void 0:e["right-target"])}"
  size="${e==null?void 0:e.size}"
  type="${e==null?void 0:e.type}"
></modus-wc-handle>
  `,c=(e,t,o,n="")=>i`
<div id="${e}" class="handle-demo-panel ${n}">
  <h3>${t}</h3>
  <p>${o}</p>
</div>
`,I=(e,t,o,n,l="")=>i`
<div id="${e}" class="handle-demo-panel ${l}">
  <h3>${t}</h3>
  <p>${o}</p>
  <p><strong>Keyboard:</strong> ${n}</p>
</div>
`,D=()=>Math.random().toString(36).substring(2,9),P=e=>{const t=(e==null?void 0:e.orientation)??"horizontal",o=(e==null?void 0:e.type)??"bar",n=t==="horizontal",l=D(),h=`panel-left-${l}`,u=`panel-right-${l}`;return i`
<style>${T}</style>
${M(t,i`
<div class="handle-demo-container ${n?"horizontal":"vertical"}">
  ${I(h,n?"Left Panel":"Top Panel","Drag the handle to resize this panel.",`Focus the handle and use ${n?"Left/Right":"Up/Down"} arrow keys to resize (5px per press, 15px with Shift).`,n?"initial-size-200":"initial-height-200")}
  ${s({orientation:t,size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:o,"default-split":(e==null?void 0:e["default-split"])??50,"custom-class":e==null?void 0:e["custom-class"],"button-size":e==null?void 0:e["button-size"],"button-color":e==null?void 0:e["button-color"],"button-variant":e==null?void 0:e["button-variant"],"left-target":`#${h}`,"right-target":`#${u}`})}
  ${c(u,n?"Right Panel":"Bottom Panel","This panel will resize automatically when you drag the handle.","flex-fill")}
</div>
`)}`},a={render:e=>P(e)},d={render:e=>P({...e,orientation:(e==null?void 0:e.orientation)??"horizontal",size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:"button"}),args:{type:"button"},parameters:{docs:{description:{story:`
Button type handle with customizable button properties.

**Button Properties Available:**
- \`button-size\`: sm, md, lg
- \`button-color\`: primary, secondary, tertiary, warning, danger
- \`button-variant\`: borderless, filled, outlined

**Keyboard Navigation:**
- Arrow keys: Move 5px per press
- Shift + Arrow keys: Move 15px per press

The button handle provides a more prominent visual indicator compared to the bar type.
        `}}}},p={render:()=>i`
<style>${T}</style>
<div class="handle-demo-container" style="height: 600px;">
  ${c("panel-one","One","Large left panel","initial-size-400")}
  ${s({orientation:"horizontal",size:"default",density:"comfortable",type:"bar","left-target":"#panel-one","right-target":"#right-container"})}
  <div id="right-container" class="handle-demo-right-container">
    ${c("panel-two","Two","Top right panel","initial-height-200")}
    ${s({orientation:"vertical",size:"default",density:"comfortable",type:"bar","left-target":"#panel-two","right-target":"#panel-three"})}
    ${c("panel-three","Three","Bottom right panel","flex-fill")}
  </div>
</div>
    `};var m,y,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,$,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=($=d.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var z,x,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(x=p.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const E=["Default","ButtonVariant","MultipleHandlesNested"];export{d as ButtonVariant,a as Default,p as MultipleHandlesNested,E as __namedExportsOrder,q as default};
