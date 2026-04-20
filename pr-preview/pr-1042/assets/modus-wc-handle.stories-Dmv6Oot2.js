import{E as B,x as i,r as M}from"./lit-element-CucEn6F2.js";import{o as r}from"./if-defined-BiZP-SBN.js";import{e as D,i as I}from"./directive-C_Rw-dL6.js";import{m as K}from"./directive-helpers-CDGBUeOP.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=D(class extends I{constructor(){super(...arguments),this.key=B}render(e,t){return this.key=e,t}update(e,[t,o]){return t!==this.key&&(K(e),this.key=t),o}}),A=M(`
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
`),V={title:"Components/Handle",component:"modus-wc-handle",args:{"button-color":"tertiary","button-size":"md","button-variant":"filled","custom-class":"","default-split":50,density:"comfortable","left-target":"",orientation:"vertical","right-target":"",size:"default",type:"bar"},argTypes:{"custom-class":{control:"text"},"default-split":{control:{type:"range",min:1,max:100,step:1}},density:{control:{type:"select"},options:["compact","comfortable","relaxed"]},"button-size":{control:{type:"select"},options:["sm","md","lg"]},"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"left-target":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"right-target":{control:"text"},size:{control:{type:"select"},options:["default","lg","xl","2xl"]},type:{control:{type:"select"},options:["bar","button"]}},parameters:{layout:"padded"}},h=e=>i`
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
  `,s=(e,t,o,n="")=>i`
<div id="${e}" class="handle-demo-panel ${n}">
  <h3>${t}</h3>
  <p>${o}</p>
</div>
`,N=(e,t,o,n,l="")=>i`
<div id="${e}" class="handle-demo-panel ${l}">
  <h3>${t}</h3>
  <p>${o}</p>
  <p><strong>Keyboard:</strong> ${n}</p>
</div>
`,O=()=>Math.random().toString(36).substring(2,9),u=e=>{const t=(e==null?void 0:e.orientation)??"horizontal",o=(e==null?void 0:e.type)??"bar",n=t==="horizontal",l=O(),m=`panel-left-${l}`,y=`panel-right-${l}`;return i`
<style>${A}</style>
${L(t,i`
<div class="handle-demo-container ${n?"horizontal":"vertical"}">
  ${N(m,n?"Left Panel":"Top Panel","Drag the handle to resize this panel.",`Focus the handle and use ${n?"Left/Right":"Up/Down"} arrow keys to resize (5px per press, 15px with Shift).`,n?"initial-size-200":"initial-height-200")}
  ${h({orientation:t,size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:o,"default-split":(e==null?void 0:e["default-split"])??50,"custom-class":e==null?void 0:e["custom-class"],"button-size":e==null?void 0:e["button-size"],"button-color":e==null?void 0:e["button-color"],"button-variant":e==null?void 0:e["button-variant"],"left-target":`#${m}`,"right-target":`#${y}`})}
  ${s(y,n?"Right Panel":"Bottom Panel","This panel will resize automatically when you drag the handle.","flex-fill")}
</div>
`)}`},a={render:e=>u(e)},d={render:e=>u({...e,orientation:(e==null?void 0:e.orientation)??"horizontal",size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:"button"}),args:{type:"button"},parameters:{docs:{description:{story:`
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
<style>${A}</style>
<div class="handle-demo-container" style="height: 600px;">
  ${s("panel-one","One","Large left panel","initial-size-400")}
  ${h({orientation:"horizontal",size:"default",density:"comfortable",type:"bar","left-target":"#panel-one","right-target":"#right-container"})}
  <div id="right-container" class="handle-demo-right-container">
    ${s("panel-two","Two","Top right panel","initial-height-200")}
    ${h({orientation:"vertical",size:"default",density:"comfortable",type:"bar","left-target":"#panel-two","right-target":"#panel-three"})}
    ${s("panel-three","Three","Bottom right panel","flex-fill")}
  </div>
</div>
    `},c={render:e=>u(e)};var f,b,$;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...($=(b=a.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var v,z,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(P=(T=p.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var S,k,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...(H=(k=c.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const _=["Default","ButtonVariant","MultipleHandlesNested","ShadowDomParent"];export{d as ButtonVariant,a as Default,p as MultipleHandlesNested,c as ShadowDomParent,_ as __namedExportsOrder,V as default};
