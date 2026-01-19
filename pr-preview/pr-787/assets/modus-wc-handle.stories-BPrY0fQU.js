import{E as b,x as i}from"./lit-element-C8zulti1.js";import{o as r}from"./if-defined-yv6owfG8.js";import{m as x}from"./directive-helpers-CTl9UaQc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=t=>(...e)=>({_$litDirective$:t,values:e});let v=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=z(class extends v{constructor(){super(...arguments),this.key=b}render(t,e){return this.key=t,e}update(t,[e,o]){return e!==this.key&&(x(t),this.key=e),o}}),S={title:"Components/Handle",component:"modus-wc-handle",args:{"custom-class":"",density:"comfortable","left-target":"",orientation:"vertical","right-target":"",size:"default",type:"bar"},argTypes:{"custom-class":{control:"text"},density:{control:{type:"select"},options:["compact","comfortable","relaxed"]},"left-target":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"right-target":{control:"text"},size:{control:{type:"select"},options:["default","lg","xl","2xl"]},type:{control:{type:"select"},options:["bar","button"]}},parameters:{layout:"padded"}},_=t=>i`
<modus-wc-handle
  custom-class="${r(t==null?void 0:t["custom-class"])}"
  density="${t==null?void 0:t.density}"
  left-target="${r(t==null?void 0:t["left-target"])}"
  orientation="${r(t==null?void 0:t.orientation)}"
  right-target="${r(t==null?void 0:t["right-target"])}"
  size="${t==null?void 0:t.size}"
  type="${t==null?void 0:t.type}"
></modus-wc-handle>
  `,T=(t,e,o,n)=>i`
<div
  id="${t}"
  style="${n}; background-color: var(--modus-wc-color-base-100); padding: 16px; overflow: auto;"
>
  <h3>${e}</h3>
  <p>${o}</p>
</div>
`,A=(t,e,o,n,l)=>i`
<div
  id="${t}"
  style="${l}; background-color: var(--modus-wc-color-base-100); padding: 16px; overflow: auto;"
>
  <h3>${e}</h3>
  <p>${o}</p>
  <p><strong>Keyboard:</strong> ${n}</p>
</div>
`,k=()=>Math.random().toString(36).substring(2,9),f=t=>{const e=(t==null?void 0:t.orientation)??"horizontal",o=(t==null?void 0:t.type)??"bar",n=e==="horizontal",l=k(),a=`panel-left-${l}`,p=`panel-right-${l}`;return i`${w(e,i`
<div
  style="display: flex; ${n?"":"flex-direction: column;"} gap: 0; height: ${n?"300px":"500px"};"
>
  ${A(a,n?"Left Panel":"Top Panel","Drag the handle to resize this panel.",`Focus the handle and use ${n?"Left/Right":"Up/Down"} arrow keys to resize (5px per press).`,n?"width: 200px":"height: 200px")}
  ${_({orientation:e,size:(t==null?void 0:t.size)??"default",density:(t==null?void 0:t.density)??"comfortable",type:o,"left-target":`#${a}`,"right-target":`#${p}`})}
  ${T(p,n?"Right Panel":"Bottom Panel","This panel will resize automatically when you drag the handle.","flex: 1")}
</div>
  `)}`},c={render:t=>f(t)},d={render:t=>f({...t,orientation:(t==null?void 0:t.orientation)??"horizontal",size:(t==null?void 0:t.size)??"default",density:(t==null?void 0:t.density)??"comfortable",type:"button"}),args:{type:"button"}};var s,u,h;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,y,$;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...($=(y=d.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};const U=["Default","ButtonVariant"];export{d as ButtonVariant,c as Default,U as __namedExportsOrder,S as default};
