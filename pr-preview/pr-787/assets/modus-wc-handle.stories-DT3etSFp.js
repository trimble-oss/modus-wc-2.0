import{E as _,x as i}from"./lit-element-C8zulti1.js";import{o as r}from"./if-defined-yv6owfG8.js";import{m as H}from"./directive-helpers-CTl9UaQc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=e=>(...t)=>({_$litDirective$:e,values:t});let A=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,o){this._$Ct=t,this._$AM=n,this._$Ci=o}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=P(class extends A{constructor(){super(...arguments),this.key=_}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(H(e),this.key=t),n}}),L={title:"Components/Handle",component:"modus-wc-handle",args:{"custom-class":"","default-split":50,density:"comfortable","left-target":"",orientation:"vertical","right-target":"",size:"default",type:"bar"},argTypes:{"custom-class":{control:"text"},"default-split":{control:{type:"range",min:1,max:100,step:1}},density:{control:{type:"select"},options:["compact","comfortable","relaxed"]},"left-target":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"right-target":{control:"text"},size:{control:{type:"select"},options:["default","lg","xl","2xl"]},type:{control:{type:"select"},options:["bar","button"]}},parameters:{layout:"padded"}},s=e=>i`
<modus-wc-handle
  custom-class="${r(e==null?void 0:e["custom-class"])}"
  default-split="${e==null?void 0:e["default-split"]}"
  density="${e==null?void 0:e.density}"
  left-target="${r(e==null?void 0:e["left-target"])}"
  orientation="${r(e==null?void 0:e.orientation)}"
  right-target="${r(e==null?void 0:e["right-target"])}"
  size="${e==null?void 0:e.size}"
  type="${e==null?void 0:e.type}"
></modus-wc-handle>
  `,c=(e,t,n,o)=>i`
<div
  id="${e}"
  style="${o}; background-color: var(--modus-wc-color-base-100); padding: 16px; overflow: auto;"
>
  <h3>${t}</h3>
  <p>${n}</p>
</div>
`,g=(e,t,n,o,l)=>i`
<div
  id="${e}"
  style="${l}; background-color: var(--modus-wc-color-base-100); padding: 16px; overflow: auto;"
>
  <h3>${t}</h3>
  <p>${n}</p>
  <p><strong>Keyboard:</strong> ${o}</p>
</div>
`,B=()=>Math.random().toString(36).substring(2,9),T=e=>{const t=(e==null?void 0:e.orientation)??"horizontal",n=(e==null?void 0:e.type)??"bar",o=t==="horizontal",l=B(),u=`panel-left-${l}`,h=`panel-right-${l}`;return i`${k(t,i`
<div
  style="display: flex; ${o?"":"flex-direction: column;"} gap: 0; height: ${o?"300px":"500px"};"
>
  ${g(u,o?"Left Panel":"Top Panel","Drag the handle to resize this panel.",`Focus the handle and use ${o?"Left/Right":"Up/Down"} arrow keys to resize (5px per press).`,o?"width: 200px":"height: 200px")}
  ${s({orientation:t,size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:n,"default-split":(e==null?void 0:e["default-split"])??50,"left-target":`#${u}`,"right-target":`#${h}`})}
  ${c(h,o?"Right Panel":"Bottom Panel","This panel will resize automatically when you drag the handle.","flex: 1")}
</div>
  `)}`},a={render:e=>T(e)},p={render:e=>T({...e,orientation:(e==null?void 0:e.orientation)??"horizontal",size:(e==null?void 0:e.size)??"default",density:(e==null?void 0:e.density)??"comfortable",type:"button"}),args:{type:"button"}},d={render:()=>i`
<div style="display: flex; gap: 0; height: 600px;">
  ${c("panel-one","One","Large left panel","width: 400px")}
  ${s({orientation:"horizontal",size:"default",density:"comfortable",type:"bar","left-target":"#panel-one","right-target":"#right-container"})}
  <div
    id="right-container"
    style="flex: 1; display: flex; flex-direction: column; gap: 0;"
  >
    ${c("panel-two","Two","Top right panel","height: 200px")}
    ${s({orientation:"vertical",size:"default",density:"comfortable",type:"bar","left-target":"#panel-two","right-target":"#panel-three"})}
    ${c("panel-three","Three","Bottom right panel","flex: 1")}
  </div>
</div>
    `};var m,f,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var $,x,b;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var z,v,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<div style="display: flex; gap: 0; height: 600px;">
  \${PanelTemplate('panel-one', 'One', 'Large left panel', 'width: 400px')}
  \${HandleTemplate({
      orientation: 'horizontal',
      size: 'default',
      density: 'comfortable',
      type: 'bar',
      'left-target': '#panel-one',
      'right-target': '#right-container'
    })}
  <div
    id="right-container"
    style="flex: 1; display: flex; flex-direction: column; gap: 0;"
  >
    \${PanelTemplate('panel-two', 'Two', 'Top right panel', 'height: 200px')}
    \${HandleTemplate({
      orientation: 'vertical',
      size: 'default',
      density: 'comfortable',
      type: 'bar',
      'left-target': '#panel-two',
      'right-target': '#panel-three'
    })}
    \${PanelTemplate('panel-three', 'Three', 'Bottom right panel', 'flex: 1')}
  </div>
</div>
    \`;
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const U=["Default","ButtonVariant","MultipleHandlesNested"];export{p as ButtonVariant,a as Default,d as MultipleHandlesNested,U as __namedExportsOrder,L as default};
