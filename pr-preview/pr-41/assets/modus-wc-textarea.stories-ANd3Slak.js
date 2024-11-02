import{D as c,k as d}from"./lit-element-DVRzCIa_.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=a=>a??c,i={title:"Components/Atoms/Textarea",component:"modus-wc-textarea",tags:["autodocs"],argTypes:{ariaDescribedby:{control:"text",table:{sort:"alpha"}},ariaInvalid:{control:"boolean",table:{sort:"alpha"}},ariaLabel:{control:"text",table:{sort:"alpha"}},customClass:{control:"text",table:{sort:"alpha"}},dir:{control:{type:"select"},options:["ltr","rtl","auto"],table:{sort:"alpha"}},disabled:{control:"boolean",table:{sort:"alpha"}},id:{control:"text",table:{sort:"alpha"}},maxLength:{control:"number",table:{sort:"alpha"}},name:{control:"text",table:{sort:"alpha"}},placeholder:{control:"text",table:{sort:"alpha"}},readonly:{control:"boolean",table:{sort:"alpha"}},required:{control:"boolean",table:{sort:"alpha"}},rows:{control:"number",table:{sort:"alpha"}},tabIndex:{control:"number",table:{sort:"alpha"}},value:{control:"text",table:{sort:"alpha"}}},parameters:{controls:{sort:"alpha"}}},b={render:a=>d`
      <modus-wc-textarea
        aria-describedby=${e(a.ariaDescribedby)}
        aria-invalid=${e(a.ariaInvalid)}
        aria-label=${e(a.ariaLabel)}
        custom-class=${e(a.customClass)}
        dir=${e(a.dir)}
        ?disabled=${a.disabled}
        id=${e(a.id)}
        max-length=${e(a.maxLength)}
        name=${e(a.name)}
        placeholder=${e(a.placeholder)}
        ?readonly=${a.readonly}
        ?required=${a.required}
        rows=${e(a.rows)}
        tab-index=${e(a.tabIndex)}
        .value=${a.value}
        @input=${o=>{const l=o.target;a.value=l.value}}
        @change=${o=>{const l=o.target;a.value=l.value}}
      ></modus-wc-textarea>
    `,args:{ariaLabel:"Enter your comments",placeholder:"Type your comments here"}},t={...b};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,i as default};
