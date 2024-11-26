import{k as d}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";const v={title:"Components/Skeleton",component:"modus-wc-skeleton",args:{"aria-hidden":"true","custom-class":"",height:"1.5rem",shape:"rectangle",width:"100%"},argTypes:{shape:{control:{type:"inline-radio"},options:["circle","rectangle"]}},parameters:{layout:"padded"}},s={render:e=>d`
      <modus-wc-skeleton
        aria-hidden=${n(e["aria-hidden"])}
        custom-class=${n(e["custom-class"])}
        height=${n(e.height)}
        shape=${n(e.shape)}
        width=${n(e.width)}
      ></modus-wc-skeleton>
    `},t={render:()=>d`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    `},r={render:()=>d`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    `},o={render:()=>d`
      <style>
        .skeleton-container {
          width: 13rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skeleton-profile {
          display: flex;
          align-items: center;
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
    `};var i,l,a;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-skeleton
        aria-hidden=\${ifDefined(args['aria-hidden'])}
        custom-class=\${ifDefined(args['custom-class'])}
        height=\${ifDefined(args.height)}
        shape=\${ifDefined(args.shape)}
        width=\${ifDefined(args.width)}
      ></modus-wc-skeleton>
    \`;
  }
}`,...(a=(l=s.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    \`;
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,p,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    \`;
  }
}`,...(w=(p=r.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var k,g,f;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
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
          align-items: center;
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const $=["Default","Circle","Square","Composed"];export{t as Circle,o as Composed,s as Default,r as Square,$ as __namedExportsOrder,v as default};
