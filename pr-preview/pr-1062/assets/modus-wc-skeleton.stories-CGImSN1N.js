import{x as s}from"./lit-element-CucEn6F2.js";import{o}from"./if-defined-BiZP-SBN.js";import{c as H}from"./shadow-host-helper-A4Nvcs5e.js";const A={title:"Components/Skeleton",component:"modus-wc-skeleton",args:{"custom-class":"",height:"1.5rem",shape:"rectangle",width:"100%"},argTypes:{shape:{control:{type:"select"},options:["circle","rectangle"]}},parameters:{layout:"padded"}},r={render:e=>s`
      <modus-wc-skeleton
        custom-class=${o(e["custom-class"])}
        height=${o(e.height)}
        shape=${o(e.shape)}
        width=${o(e.width)}
      ></modus-wc-skeleton>
    `},l={render:()=>s`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    `},a={render:()=>s`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    `},c={render:()=>s`
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
    `},d={render:e=>{if(!customElements.get("skeleton-shadow-host")){const $=H({componentTag:"modus-wc-skeleton",propsMapper:(n,D)=>{const t=D;t.customClass=n["custom-class"]||"",t.height=n.height??"1.5rem",t.shape=n.shape??"rectangle",t.width=n.width??"100%"}});customElements.define("skeleton-shadow-host",$)}return s`<skeleton-shadow-host
      .props=${{...e}}
    ></skeleton-shadow-host>`}};var m,i,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(i=r.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var u,p,w;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-skeleton
        height="5rem"
        shape="circle"
        width="5rem"
      ></modus-wc-skeleton>
    \`;
  }
}`,...(w=(p=l.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var k,g,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <modus-wc-skeleton height="5rem" width="5rem"></modus-wc-skeleton>
    \`;
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,x,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,E,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('skeleton-shadow-host')) {
      const SkeletonShadowHost = createShadowHostClass<SkeletonArgs>({
        componentTag: 'modus-wc-skeleton',
        propsMapper: (v: SkeletonArgs, el: HTMLElement) => {
          const skeletonEl = el as unknown as {
            customClass: string;
            height: string;
            shape: string;
            width: string;
          };
          skeletonEl.customClass = v['custom-class'] || '';
          skeletonEl.height = v.height ?? '1.5rem';
          skeletonEl.shape = v.shape ?? 'rectangle';
          skeletonEl.width = v.width ?? '100%';
        }
      });
      customElements.define('skeleton-shadow-host', SkeletonShadowHost);
    }
    return html\`<skeleton-shadow-host
      .props=\${{
      ...args
    }}
    ></skeleton-shadow-host>\`;
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const P=["Default","Circle","Square","Composed","ShadowDomParent"];export{l as Circle,c as Composed,r as Default,d as ShadowDomParent,a as Square,P as __namedExportsOrder,A as default};
