import{x as c}from"./lit-element-C8zulti1.js";import{o as l}from"./if-defined-yv6owfG8.js";const w={title:"Components/Handle",component:"modus-wc-handle",args:{"custom-class":"",density:"comfortable","left-target":"",orientation:"vertical","right-target":"",size:"default",type:"bar"},argTypes:{"custom-class":{control:"text"},density:{control:{type:"select"},options:["compact","comfortable","relaxed"]},"left-target":{control:"text"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},"right-target":{control:"text"},size:{control:{type:"select"},options:["default","lg","xl","2xl"]},type:{control:{type:"select"},options:["bar","button"]}},parameters:{layout:"padded"}},$=t=>c`
<modus-wc-handle
  custom-class="${l(t==null?void 0:t["custom-class"])}"
  density="${t==null?void 0:t.density}"
  left-target="${l(t==null?void 0:t["left-target"])}"
  orientation="${l(t==null?void 0:t.orientation)}"
  right-target="${l(t==null?void 0:t["right-target"])}"
  size="${t==null?void 0:t.size}"
  type="${t==null?void 0:t.type}"
></modus-wc-handle>
  `,b=(t,n,o,e)=>c`
<div
  id="${t}"
  style="${e}; background-color: var(--modus-wc-color-base-100); padding: 16px; overflow: auto;"
>
  <h3>${n}</h3>
  <p>${o}</p>
</div>
`,x=(t,n,o,e,i)=>c`
<div
  id="${t}"
  style="${i}; background-color: var(--modus-wc-color-base-100); padding: 16px; overflow: auto;"
>
  <h3>${n}</h3>
  <p>${o}</p>
  <p><strong>Keyboard:</strong> ${e}</p>
</div>
`,f=t=>{const n=(t==null?void 0:t.orientation)??"horizontal",o=(t==null?void 0:t.type)??"bar",e=n==="horizontal",i=`panel-left-${o}`,a=`panel-right-${o}`;return c`
<div
  style="display: flex; ${e?"":"flex-direction: column;"} gap: 0; height: ${e?"300px":"500px"};"
>
  ${x(i,e?"Left Panel":"Top Panel","Drag the handle to resize this panel.",`Focus the handle and use ${e?"Left/Right":"Up/Down"} arrow keys to resize (5px per press).`,e?"width: 200px":"height: 200px")}
  ${$({orientation:n,size:(t==null?void 0:t.size)??"default",density:(t==null?void 0:t.density)??"comfortable",type:o,"left-target":`#${i}`,"right-target":`#${a}`})}
  ${b(a,e?"Right Panel":"Bottom Panel","This panel will resize automatically when you drag the handle.","flex: 1")}
</div>
  `},d={render:t=>f(t)},r={render:t=>f({...t,orientation:(t==null?void 0:t.orientation)??"horizontal",size:(t==null?void 0:t.size)??"default",density:(t==null?void 0:t.density)??"comfortable",type:"button"}),args:{type:"button"}};var p,s,u;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args?: HandleArgs) => Template(args)
}`,...(u=(s=d.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var m,h,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const T=["Default","ButtonVariant"];export{r as ButtonVariant,d as Default,T as __namedExportsOrder,w as default};
