import{w as S}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as e}from"./if-defined-yv6owfG8.js";import{c as D}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var m=Object.freeze,R=Object.defineProperty,P=(a,s)=>m(R(a,"raw",{value:m(a.slice())})),u;const N={title:"Components/Forms/Rating",component:"modus-wc-rating",args:{"allow-half":!1,count:5,"custom-class":"",disabled:!1,getAriaLabelText:a=>`${a} rating`,size:"md",value:0,variant:"smiley"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["heart","smiley","star","thumb"]}},decorators:[S],parameters:{actions:{handles:["ratingChange"]}}},r={render:a=>o`
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
  `},i={render:a=>{const s=n=>`Custom label for rating item ${n}`;return o(u||(u=P([`
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
    `])),e(a["allow-half"]),a.count,e(a.disabled),e(a.size),e(a.value),a.variant,s)}},l={render:a=>o`
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
  `},c={render:a=>{if(!customElements.get("rating-shadow-host")){const s=D({componentTag:"modus-wc-rating",propsMapper:(n,A)=>{const t=A;t.allowHalf=!!n["allow-half"],t.count=n.count,t.customClass=n["custom-class"]||"",t.disabled=!!n.disabled,n.getAriaLabelText&&(t.getAriaLabelText=n.getAriaLabelText),t.size=n.size||"md",t.value=n.value||0,t.variant=n.variant}});customElements.define("rating-shadow-host",s)}return o`<rating-shadow-host
      .props=${{...a}}
    ></rating-shadow-host>`}},d={parameters:{docs:{description:{story:`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Type/variant values have changed from \`smileys\` to \`smiley\` and \`thumbs\` to \`thumb\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop    | Notes                                                |
|-------------|-------------|------------------------------------------------------|
| aria-label  | aria-label  |                                                      |
| disabled    | disabled    |                                                      |
| type        | variant     | \`smileys\` → \`smiley\`, \`thumbs\` → \`thumb\`     |

#### Event Mapping

| 1.0 Event          | 2.0 Event    | Notes                                         |
|--------------------|--------------|-----------------------------------------------|
| sentimentSelection | ratingChange |                                               |
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>o`<div></div>`};var g,p,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,h,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,$,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=($=l.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var y,T,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    // Create a unique shadow host for rating component
    if (!customElements.get('rating-shadow-host')) {
      const RatingShadowHost = createShadowHostClass<RatingArgs>({
        componentTag: 'modus-wc-rating',
        propsMapper: (v: RatingArgs, el: HTMLElement) => {
          const ratingEl = el as unknown as {
            allowHalf: boolean;
            count: number;
            customClass: string;
            disabled: boolean;
            getAriaLabelText: (index: number) => string;
            size: string;
            value: number;
            variant: string;
          };
          ratingEl.allowHalf = Boolean(v['allow-half']);
          ratingEl.count = v.count;
          ratingEl.customClass = v['custom-class'] || '';
          ratingEl.disabled = Boolean(v.disabled);
          if (v.getAriaLabelText) {
            ratingEl.getAriaLabelText = v.getAriaLabelText; // Conditional assignment only if provided
          }
          ratingEl.size = v.size || 'md';
          ratingEl.value = v.value || 0;
          ratingEl.variant = v.variant;
        }
      });
      customElements.define('rating-shadow-host', RatingShadowHost);
    }
    return html\`<rating-shadow-host
      .props=\${{
      ...args
    }}
    ></rating-shadow-host>\`;
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var E,L,z;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
#### Breaking Changes

  - In 1.0 input state was maintained by the component. 2.0 components encourage users to follow a controlled
  input model. See the Form Inputs [documentation](/docs/documentation-form-inputs--docs) for
  additional info and examples.
  - Type/variant values have changed from \\\`smileys\\\` to \\\`smiley\\\` and \\\`thumbs\\\` to \\\`thumb\\\`.

#### Prop Mapping

| 1.0 Prop    | 2.0 Prop    | Notes                                                |
|-------------|-------------|------------------------------------------------------|
| aria-label  | aria-label  |                                                      |
| disabled    | disabled    |                                                      |
| type        | variant     | \\\`smileys\\\` → \\\`smiley\\\`, \\\`thumbs\\\` → \\\`thumb\\\`     |

#### Event Mapping

| 1.0 Event          | 2.0 Event    | Notes                                         |
|--------------------|--------------|-----------------------------------------------|
| sentimentSelection | ratingChange |                                               |
        \`
      }
    },
    controls: {
      disable: true
    },
    canvas: {
      disable: true
    }
  },
  render: () => html\`<div></div>\`
}`,...(z=(L=d.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const F=["Default","CustomAriaLabels","CustomColors","ShadowDomParent","Migration"];export{i as CustomAriaLabels,l as CustomColors,r as Default,d as Migration,c as ShadowDomParent,F as __namedExportsOrder,N as default};
