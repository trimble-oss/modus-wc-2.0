import{w as n}from"./decorator-D4YmxizW.js";import{x as m}from"./lit-element-C8zulti1.js";import{o as p}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const w={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{disabled:!1,multiple:!1,label:"Choose file"},argTypes:{disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}}},decorators:[n],parameters:{actions:{handles:["fileSelect"]}}},e={render:r=>m`
    <modus-wc-file-dropzone
      ?disabled=${r.disabled}
      ?multiple=${r.multiple}
      label=${p(r.label)}
    ></modus-wc-file-dropzone>
  `},o={args:{disabled:!0}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-file-dropzone
      ?disabled=\${args.disabled}
      ?multiple=\${args.multiple}
      label=\${ifDefined(args.label)}
    ></modus-wc-file-dropzone>
  \`
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var t,d,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const D=["Default","Disabled"];export{e as Default,o as Disabled,D as __namedExportsOrder,w as default};
