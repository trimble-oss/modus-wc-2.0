import{w as $}from"./decorator-D4YmxizW.js";import{x as n}from"./lit-element-C8zulti1.js";import{o as i}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const S={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drag files here or browse to upload"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},"custom-class":{control:"text",description:"Custom CSS class to apply to the file dropzone element"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}}},decorators:[$],parameters:{actions:{handles:["fileSelect"]}}},t={render:e=>n`
    <modus-wc-file-dropzone
      accept-file-types=${i(e["accept-file-types"])}
      custom-class=${i(e["custom-class"])}
      ?disabled=${e.disabled}
      file-dragged-over-instructions=${i(e["file-dragged-over-instructions"])}
      ?include-state-icon=${e["include-state-icon"]}
      instructions=${i(e.instructions)}
      invalid-file-type-message=${i(e["invalid-file-type-message"])}
      max-file-name-length=${i(e["max-file-name-length"])}
      max-file-count=${i(e["max-file-count"])}
      max-total-file-size-bytes=${i(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      success-message=${i(e["success-message"])}
    ></modus-wc-file-dropzone>
  `},s={render:()=>n`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      instructions="Drag files here or browse to upload"
    >
      <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
        <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
      </div>
    </modus-wc-file-dropzone>
  `},l={args:{"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>n`
    <modus-wc-file-dropzone
      accept-file-types=${i(e["accept-file-types"])}
      invalid-file-type-message=${i(e["invalid-file-type-message"])}
      max-file-name-length=${i(e["max-file-name-length"])}
      max-file-count=${i(e["max-file-count"])}
      max-total-file-size-bytes=${i(e["max-total-file-size-bytes"])}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},o={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>n`
    <modus-wc-file-dropzone
      accept-file-types=${i(e["accept-file-types"])}
      multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `};var a,r,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-file-dropzone
      accept-file-types=\${ifDefined(args['accept-file-types'])}
      custom-class=\${ifDefined(args['custom-class'])}
      ?disabled=\${args.disabled}
      file-dragged-over-instructions=\${ifDefined(args['file-dragged-over-instructions'])}
      ?include-state-icon=\${args['include-state-icon']}
      instructions=\${ifDefined(args['instructions'])}
      invalid-file-type-message=\${ifDefined(args['invalid-file-type-message'])}
      max-file-name-length=\${ifDefined(args['max-file-name-length'])}
      max-file-count=\${ifDefined(args['max-file-count'])}
      max-total-file-size-bytes=\${ifDefined(args['max-total-file-size-bytes'])}
      ?multiple=\${args.multiple}
      success-message=\${ifDefined(args['success-message'])}
    ></modus-wc-file-dropzone>
  \`
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var m,d,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      instructions="Drag files here or browse to upload"
    >
      <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
        <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
      </div>
    </modus-wc-file-dropzone>
  \`
}`,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var p,u,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'max-file-name-length': 20,
    'max-file-count': 3,
    'max-total-file-size-bytes': 10485760,
    // 10MB
    'invalid-file-type-message': 'Invalid file format. Please upload correct file type.'
  },
  render: args => html\`
    <modus-wc-file-dropzone
      accept-file-types=\${ifDefined(args['accept-file-types'])}
      invalid-file-type-message=\${ifDefined(args['invalid-file-type-message'])}
      max-file-name-length=\${ifDefined(args['max-file-name-length'])}
      max-file-count=\${ifDefined(args['max-file-count'])}
      max-total-file-size-bytes=\${ifDefined(args['max-total-file-size-bytes'])}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  \`
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,x,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    multiple: true,
    'accept-file-types': 'image/*'
  },
  render: args => html\`
    <modus-wc-file-dropzone
      accept-file-types=\${ifDefined(args['accept-file-types'])}
      multiple=\${args.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  \`
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const C=["Default","customContent","fileValidations","multipleFiles"];export{t as Default,C as __namedExportsOrder,s as customContent,S as default,l as fileValidations,o as multipleFiles};
