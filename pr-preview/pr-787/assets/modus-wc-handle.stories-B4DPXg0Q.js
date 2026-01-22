import{E as H,r as P,x as i}from"./lit-element-CucEn6F2.js";import{o as a}from"./if-defined-BiZP-SBN.js";import{m as A}from"./directive-helpers-DVbSYuCc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=e=>(...t)=>({_$litDirective$:e,values:t});let k=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,o){this._$Ct=t,this._$AM=n,this._$Ci=o}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=S(class extends k{constructor(){super(...arguments),this.key=H}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(A(e),this.key=t),n}}),w=P(`
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
`),O={title:"Components/Handle",component:"modus-wc-handle",args:{"custom-class":"","default-split":50,density:"comfortable","left-target":"",orientation:"vertical","right-target":"",size:"default",type:"bar"},argTypes:{"custom-class":{control:"text"},"default-split":{control:{type:"range",min:1,max:100,step:1}},density:{control:{type:"select"},options:["compact","comfortable","relaxed"]},"left-target":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"right-target":{control:"text"},size:{control:{type:"select"},options:["default","lg","xl","2xl"]},type:{control:{type:"select"},options:["bar","button"]}},parameters:{layout:"padded"}},s=e=>i`
<modus-wc-handle
  custom-class="${a(e==null?void 0:e["custom-class"])}"
  default-split="${e==null?void 0:e["default-split"]}"
  density="${e==null?void 0:e.density}"
  left-target="${a(e==null?void 0:e["left-target"])}"
  orientation="${a(e==null?void 0:e.orientation)}"
  right-target="${a(e==null?void 0:e["right-target"])}"
  size="${e==null?void 0:e.size}"
  type="${e==null?void 0:e.type}"
></modus-wc-handle>
  `,c=(e,t,n,o="")=>i`
<div id="${e}" class="handle-demo-panel ${o}">
  <h3>${t}</h3>
  <p>${n}</p>
</div>
`,D=(e,t,n,o,l="")=>i`
<div id="${e}" class="handle-demo-panel ${l}">
  <h3>${t}</h3>
  <p>${n}</p>
  <p><strong>Keyboard:</strong> ${o}</p>
</div>
`,I=()=>Math.random().toString(36).substring(2,9),_=e=>{const t=(e==null?void 0:e.orientation)??"horizontal",n=(e==null?void 0:e.type)??"bar",o=t==="horizontal",l=I(),h=`panel-left-${l}`,m=`panel-right-${l}`;return i`
<style>${w}</style>
${B(t,i`
<div class="handle-demo-container ${o?"horizontal":"vertical"}">
  ${D(h,o?"Left Panel":"Top Panel","Drag the handle to resize this panel.",`Focus the handle and use ${o?"Left/Right":"Up/Down"} arrow keys to resize (5px per press, 15px with Shift).`,o?"initial-size-200":"initial-height-200")}
  ${s({orientation:t,size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:n,"default-split":(e==null?void 0:e["default-split"])??50,"custom-class":e==null?void 0:e["custom-class"],"left-target":`#${h}`,"right-target":`#${m}`})}
  ${c(m,o?"Right Panel":"Bottom Panel","This panel will resize automatically when you drag the handle.","flex-fill")}
</div>
`)}`},r={render:e=>_(e)},d={render:e=>_({...e,orientation:(e==null?void 0:e.orientation)??"horizontal",size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:"button"}),args:{type:"button"}},p={render:()=>i`
<style>${w}</style>
<div class="handle-demo-container" style="height: 600px;">
  ${c("panel-one","One","Large left panel","initial-size-400")}
  ${s({orientation:"horizontal",size:"default",density:"comfortable",type:"bar","left-target":"#panel-one","right-target":"#right-container"})}
  <div id="right-container" class="handle-demo-right-container">
    ${c("panel-two","Two","Top right panel","initial-height-200")}
    ${s({orientation:"vertical",size:"default",density:"comfortable",type:"bar","left-target":"#panel-two","right-target":"#panel-three"})}
    ${c("panel-three","Three","Bottom right panel","flex-fill")}
  </div>
</div>
    `};var u,f,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var $,z,x;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  }
}`,...(x=(z=d.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var b,v,T;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const q=["Default","ButtonVariant","MultipleHandlesNested"];export{d as ButtonVariant,r as Default,p as MultipleHandlesNested,q as __namedExportsOrder,O as default};
