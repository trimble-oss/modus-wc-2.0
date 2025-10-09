import{w as l}from"./decorator-D4YmxizW.js";import{x as p}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const b={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,instructions:"Drop files here or click to select files"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"}},decorators:[l],parameters:{actions:{handles:["fileSelect"]}}},i={render:e=>p`
    <modus-wc-file-dropzone
      accept-file-types=${s(e["accept-file-types"])}
      ?disabled=${e.disabled}
      invalid-file-type-message=${s(e["invalid-file-type-message"])}
      success-message=${s(e["success-message"])}
      file-dragged-over-instructions=${s(e["file-dragged-over-instructions"])}
      instructions=${s(e.instructions)}
    ></modus-wc-file-dropzone>
  `},t={args:{disabled:!0}};var r,o,a;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-file-dropzone
      accept-file-types=\${ifDefined(args['accept-file-types'])}
      ?disabled=\${args.disabled}
      invalid-file-type-message=\${ifDefined(args['invalid-file-type-message'])}
      success-message=\${ifDefined(args['success-message'])}
      file-dragged-over-instructions=\${ifDefined(args['file-dragged-over-instructions'])}
      instructions=\${ifDefined(args['instructions'])}
    ></modus-wc-file-dropzone>
  \`
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const D=["Default","Disabled"];export{i as Default,t as Disabled,D as __namedExportsOrder,b as default};
