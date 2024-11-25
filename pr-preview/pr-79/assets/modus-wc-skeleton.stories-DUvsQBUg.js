import{k as i}from"./lit-element-DVRzCIa_.js";import{t as n}from"./if-defined-1ipA9LQg.js";const y={title:"Components/Skeleton",component:"modus-wc-skeleton",args:{"aria-hidden":!0,"custom-class":"",height:"0.875rem",role:"presentation",shape:"rectangle",tabindex:-1,width:"100%"},argTypes:{shape:{control:{type:"inline-radio"},options:["circle","rectangle"]}},parameters:{layout:"padded"}},s={render:e=>i`
      <modus-wc-skeleton
        aria-hidden=${n(e["aria-hidden"])}
        custom-class=${n(e["custom-class"])}
        height=${n(e.height)}
        role=${n(e.role)}
        shape=${n(e.shape)}
        tabindex=${n(e.tabindex)}
        width=${n(e.width)}
      ></modus-wc-skeleton>
    `},t={render:()=>i`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    `},r={render:()=>i`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    `},o={render:()=>i`
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
    `};var d,a,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return html\`
      <modus-wc-skeleton
        aria-hidden=\${ifDefined(args['aria-hidden'])}
        custom-class=\${ifDefined(args['custom-class'])}
        height=\${ifDefined(args.height)}
        role=\${ifDefined(args.role)}
        shape=\${ifDefined(args.shape)}
        tabindex=\${ifDefined(args.tabindex)}
        width=\${ifDefined(args.width)}
      ></modus-wc-skeleton>
    \`;
  }
}`,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(p=r.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var k,f,g;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const v=["Default","Circle","Square","Composed"];export{t as Circle,o as Composed,s as Default,r as Square,v as __namedExportsOrder,y as default};
