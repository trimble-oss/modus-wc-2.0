import{w as v}from"./decorator-Dt3Huotz.js";import{k as o}from"./lit-element-DVRzCIa_.js";import{t as e}from"./if-defined-1ipA9LQg.js";import"./v4-CQkTLCs1.js";var i=Object.freeze,h=Object.defineProperty,x=(a,s)=>i(h(a,"raw",{value:i(a.slice())})),l;const T={title:"Components/Forms/Rating",component:"modus-wc-rating",args:{"allow-half":!1,count:5,"custom-class":"",disabled:!1,getAriaLabelText:a=>`${a} rating`,size:"md",value:0,variant:"smiley"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["heart","smiley","star","thumb"]}},decorators:[v],parameters:{actions:{handles:["ratingChange"]}}},n={render:a=>o`
    <modus-wc-rating
      aria-label="Rating scale component"
      allow-half=${e(a["allow-half"])}
      count=${a.count}
      custom-class=${e(a["custom-class"])}
      disabled=${e(a.disabled)}
      size=${e(a.size)}
      value=${e(a.value)}
      variant=${a.variant}
      .getAriaLabelText=${a.getAriaLabelText}
    ></modus-wc-rating>
  `},t={render:a=>{const s=$=>`Custom label for rating item ${$}`;return o(l||(l=x([`
<script>
  const myAriaLabelText = (index) => {
    return 'Custom label for rating item ' + index.toString();
  };
<\/script>
<modus-wc-rating
  aria-label="Rating scale component"
  allow-half=`,`
  count=`,`
  custom-class="custom-rating-component"
  disabled=`,`
  size=`,`
  value=`,`
  variant=`,`
  .getAriaLabelText=`,`
></modus-wc-rating>
    `])),e(a["allow-half"]),a.count,e(a.disabled),e(a.size),e(a.value),a.variant,s)}},r={render:a=>o`
<style>
  .custom-color-rating-component {
    --modus-wc-rating-item-color: var(--modus-wc-color-yellow-dark);
  }
</style>
<modus-wc-rating
  aria-label="Rating scale component"
  allow-half=${e(a["allow-half"])}
  count=${a.count}
  custom-class="custom-color-rating-component"
  disabled=${e(a.disabled)}
  size=${e(a.size)}
  value="3"
  variant="star"
></modus-wc-rating>
  `};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-rating
      aria-label="Rating scale component"
      allow-half=\${ifDefined(args['allow-half'])}
      count=\${args.count}
      custom-class=\${ifDefined(args['custom-class'])}
      disabled=\${ifDefined(args.disabled)}
      size=\${ifDefined(args.size)}
      value=\${ifDefined(args.value)}
      variant=\${args.variant}
      .getAriaLabelText=\${args.getAriaLabelText}
    ></modus-wc-rating>
  \`
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const ariaLabelText = (index: number) => \`Custom label for rating item \${index}\`;

    // prettier-ignore
    return html\`
<script>
  const myAriaLabelText = (index) => {
    return 'Custom label for rating item ' + index.toString();
  };
<\/script>
<modus-wc-rating
  aria-label="Rating scale component"
  allow-half=\${ifDefined(args['allow-half'])}
  count=\${args.count}
  custom-class="custom-rating-component"
  disabled=\${ifDefined(args.disabled)}
  size=\${ifDefined(args.size)}
  value=\${ifDefined(args.value)}
  variant=\${args.variant}
  .getAriaLabelText=\${ariaLabelText}
></modus-wc-rating>
    \`;
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var p,b,w;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  // prettier-ignore
  render: args => html\`
<style>
  .custom-color-rating-component {
    --modus-wc-rating-item-color: var(--modus-wc-color-yellow-dark);
  }
</style>
<modus-wc-rating
  aria-label="Rating scale component"
  allow-half=\${ifDefined(args['allow-half'])}
  count=\${args.count}
  custom-class="custom-color-rating-component"
  disabled=\${ifDefined(args.disabled)}
  size=\${ifDefined(args.size)}
  value="3"
  variant="star"
></modus-wc-rating>
  \`
}`,...(w=(b=r.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const A=["Default","CustomAriaLabels","CustomColors"];export{t as CustomAriaLabels,r as CustomColors,n as Default,A as __namedExportsOrder,T as default};
