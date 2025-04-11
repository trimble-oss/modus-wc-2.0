import{k as l}from"./lit-element-HWJBnAmk.js";import{t as s}from"./if-defined-C-SyXhla.js";const v={title:"Components/Skeleton",component:"modus-wc-skeleton",args:{"custom-class":"",height:"1.5rem",shape:"rectangle",width:"100%"},argTypes:{shape:{control:{type:"select"},options:["circle","rectangle"]}},parameters:{layout:"padded"}},n={render:e=>l`
      <modus-wc-skeleton
        custom-class=${s(e["custom-class"])}
        height=${s(e.height)}
        shape=${s(e.shape)}
        width=${s(e.width)}
      ></modus-wc-skeleton>
    `},t={render:()=>l`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    `},r={render:()=>l`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    `},o={render:()=>l`
<style>
  .skeleton-container {
    width: 13rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skeleton-profile {
    display: flex;
    gap: 1rem;
  }

  .skeleton-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
<div class="skeleton-container">
  <div class="skeleton-profile">
    <modus-wc-skeleton
      height="4rem"
      shape="circle"
      width="4rem"
    ></modus-wc-skeleton>
    <div class="skeleton-text">
      <modus-wc-skeleton width="5rem"></modus-wc-skeleton>
      <modus-wc-skeleton width="7rem"></modus-wc-skeleton>
    </div>
  </div>
  <modus-wc-skeleton height="8rem"></modus-wc-skeleton>
</div>
    `};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-skeleton
        custom-class=\${ifDefined(args['custom-class'])}
        height=\${ifDefined(args.height)}
        shape=\${ifDefined(args.shape)}
        width=\${ifDefined(args.width)}
      ></modus-wc-skeleton>
    \`;
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var a,i,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    \`;
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var h,p,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    \`;
  }
}`,...(w=(p=r.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var k,g,f;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    // prettier-ignore
    return html\`
<style>
  .skeleton-container {
    width: 13rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skeleton-profile {
    display: flex;
    gap: 1rem;
  }

  .skeleton-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
<div class="skeleton-container">
  <div class="skeleton-profile">
    <modus-wc-skeleton
      height="4rem"
      shape="circle"
      width="4rem"
    ></modus-wc-skeleton>
    <div class="skeleton-text">
      <modus-wc-skeleton width="5rem"></modus-wc-skeleton>
      <modus-wc-skeleton width="7rem"></modus-wc-skeleton>
    </div>
  </div>
  <modus-wc-skeleton height="8rem"></modus-wc-skeleton>
</div>
    \`;
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const $=["Default","Circle","Square","Composed"];export{t as Circle,o as Composed,n as Default,r as Square,$ as __namedExportsOrder,v as default};
