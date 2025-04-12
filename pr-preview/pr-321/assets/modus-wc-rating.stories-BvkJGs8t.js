import{w as z}from"./decorator-DFROgT0E.js";import{x as s}from"./lit-element-C8zulti1.js";import{o as a}from"./if-defined-yv6owfG8.js";import"./v4-CtRu48qb.js";var l=Object.freeze,C=Object.defineProperty,T=(e,i)=>l(C(e,"raw",{value:l(e.slice())})),c;const _={title:"Components/Forms/Rating",component:"modus-wc-rating",args:{"allow-half":!1,count:5,"custom-class":"",disabled:!1,getAriaLabelText:e=>`${e} rating`,size:"md",value:0,variant:"smiley"},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["heart","smiley","star","thumb"]}},decorators:[z],parameters:{actions:{handles:["ratingChange"]}}},n={render:e=>s`
    <modus-wc-rating
      aria-label="Rating scale component"
      allow-half=${a(e["allow-half"])}
      count=${e.count}
      custom-class=${a(e["custom-class"])}
      disabled=${a(e.disabled)}
      size=${a(e.size)}
      value=${a(e.value)}
      variant=${e.variant}
      .getAriaLabelText=${e.getAriaLabelText}
    ></modus-wc-rating>
  `},t={render:e=>{const i=x=>`Custom label for rating item ${x}`;return s(c||(c=T([`
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
    `])),a(e["allow-half"]),e.count,a(e.disabled),a(e.size),a(e.value),e.variant,i)}},o={render:e=>s`
<style>
  .custom-color-rating-component {
    --modus-wc-rating-item-color: var(--modus-wc-color-yellow-dark);
  }
</style>
<modus-wc-rating
  aria-label="Rating scale component"
  allow-half=${a(e["allow-half"])}
  count=${e.count}
  custom-class="custom-color-rating-component"
  disabled=${a(e.disabled)}
  size=${a(e.size)}
  value="3"
  variant="star"
></modus-wc-rating>
  `},r={parameters:{docs:{description:{story:`
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
        `}},controls:{disable:!0},canvas:{disable:!0}},render:()=>s`<div></div>`};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,$,y;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=($=r.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const P=["Default","CustomAriaLabels","CustomColors","Migration"];export{t as CustomAriaLabels,o as CustomColors,n as Default,r as Migration,P as __namedExportsOrder,_ as default};
