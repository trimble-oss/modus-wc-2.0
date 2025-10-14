import{w as $}from"./decorator-D4YmxizW.js";import{x as o}from"./lit-element-C8zulti1.js";import{o as i}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const S={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drop files here or click to select files"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}}},decorators:[$],parameters:{actions:{handles:["fileSelect"]}}},t={render:e=>o`
    <modus-wc-file-dropzone
      accept-file-types=${i(e["accept-file-types"])}
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
  `},l={render:()=>o`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      instructions="Drop files here or click to select files"
    >
      <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
        <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
      </div>
    </modus-wc-file-dropzone>
  `},s={args:{"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>o`
    <modus-wc-file-dropzone
      accept-file-types=${i(e["accept-file-types"])}
      invalid-file-type-message=${i(e["invalid-file-type-message"])}
      max-file-name-length=${i(e["max-file-name-length"])}
      max-file-count=${i(e["max-file-count"])}
      max-total-file-size-bytes=${i(e["max-total-file-size-bytes"])}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},n={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>o`
    <modus-wc-file-dropzone
      accept-file-types=${i(e["accept-file-types"])}
      ?multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `};var a,r,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-file-dropzone
      accept-file-types=\${ifDefined(args['accept-file-types'])}
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
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var d,m,f;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      instructions="Drop files here or click to select files"
    >
      <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
        <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
      </div>
    </modus-wc-file-dropzone>
  \`
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,x,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    multiple: true,
    'accept-file-types': 'image/*'
  },
  render: args => html\`
    <modus-wc-file-dropzone
      accept-file-types=\${ifDefined(args['accept-file-types'])}
      ?multiple=\${args.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  \`
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const M=["Default","customContent","fileValidations","multipleFiles"];export{t as Default,M as __namedExportsOrder,l as customContent,S as default,s as fileValidations,n as multipleFiles};
