import{E as P,x as i,r as _}from"./lit-element-CucEn6F2.js";import{o as r}from"./if-defined-BiZP-SBN.js";import{m as k}from"./directive-helpers-DVbSYuCc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=t=>(...e)=>({_$litDirective$:t,values:e});let B=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=S(class extends B{constructor(){super(...arguments),this.key=P}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(k(t),this.key=e),n}}),T=_(`
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
`),U={title:"Components/Handle",component:"modus-wc-handle",args:{"button-color":"tertiary","button-size":"md","button-variant":"filled","custom-class":"","default-split":50,density:"comfortable","left-target":"",orientation:"vertical","right-target":"",size:"default",type:"bar"},argTypes:{"custom-class":{control:"text"},"default-split":{control:{type:"range",min:1,max:100,step:1}},density:{control:{type:"select"},options:["compact","comfortable","relaxed"]},"button-size":{control:{type:"select"},options:["sm","md","lg"]},"button-color":{control:{type:"select"},options:["primary","secondary","tertiary","warning","danger"]},"button-variant":{control:{type:"select"},options:["borderless","filled","outlined"]},"left-target":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"right-target":{control:"text"},size:{control:{type:"select"},options:["default","lg","xl","2xl"]},type:{control:{type:"select"},options:["bar","button"]}},parameters:{layout:"padded"}},s=t=>i`
<modus-wc-handle
  custom-class="${r(t==null?void 0:t["custom-class"])}"
  default-split="${t==null?void 0:t["default-split"]}"
  density="${t==null?void 0:t.density}"
  button-size="${t==null?void 0:t["button-size"]}"
  button-color="${t==null?void 0:t["button-color"]}"
  button-variant="${t==null?void 0:t["button-variant"]}"
  left-target="${r(t==null?void 0:t["left-target"])}"
  orientation="${r(t==null?void 0:t.orientation)}"
  right-target="${r(t==null?void 0:t["right-target"])}"
  size="${t==null?void 0:t.size}"
  type="${t==null?void 0:t.type}"
></modus-wc-handle>
  `,c=(t,e,n,o="")=>i`
<div id="${t}" class="handle-demo-panel ${o}">
  <h3>${e}</h3>
  <p>${n}</p>
</div>
`,M=(t,e,n,o,l="")=>i`
<div id="${t}" class="handle-demo-panel ${l}">
  <h3>${e}</h3>
  <p>${n}</p>
  <p><strong>Keyboard:</strong> ${o}</p>
</div>
`,D=()=>Math.random().toString(36).substring(2,9),A=t=>{const e=(t==null?void 0:t.orientation)??"horizontal",n=(t==null?void 0:t.type)??"bar",o=e==="horizontal",l=D(),h=`panel-left-${l}`,u=`panel-right-${l}`;return i`
<style>${T}</style>
${H(e,i`
<div class="handle-demo-container ${o?"horizontal":"vertical"}">
  ${M(h,o?"Left Panel":"Top Panel","Drag the handle to resize this panel.",`Focus the handle and use ${o?"Left/Right":"Up/Down"} arrow keys to resize (5px per press, 15px with Shift).`,o?"initial-size-200":"initial-height-200")}
  ${s({orientation:e,size:(t==null?void 0:t.size)??"default",density:(t==null?void 0:t.density)??"comfortable",type:n,"default-split":(t==null?void 0:t["default-split"])??50,"custom-class":t==null?void 0:t["custom-class"],"button-size":t==null?void 0:t["button-size"],"button-color":t==null?void 0:t["button-color"],"button-variant":t==null?void 0:t["button-variant"],"left-target":`#${h}`,"right-target":`#${u}`})}
  ${c(u,o?"Right Panel":"Bottom Panel","This panel will resize automatically when you drag the handle.","flex-fill")}
</div>
`)}`},a={render:t=>A(t)},d={render:t=>A({...t,orientation:(t==null?void 0:t.orientation)??"horizontal",size:(t==null?void 0:t.size)??"default",density:(t==null?void 0:t.density)??"comfortable",type:"button"}),args:{type:"button"},parameters:{docs:{description:{story:`
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
}`,...(w=(x=p.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const C=["Default","ButtonVariant","MultipleHandlesNested"];export{d as ButtonVariant,a as Default,p as MultipleHandlesNested,C as __namedExportsOrder,U as default};
