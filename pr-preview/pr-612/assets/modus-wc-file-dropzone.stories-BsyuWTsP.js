import{w as U}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-C8zulti1.js";import{o as i}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const B={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drop files here or click to select files"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}}},decorators:[U],parameters:{actions:{handles:["fileSelect"]}}},n={render:e=>t`
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
  `},s={args:{disabled:!0}},o={render:()=>t`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      instructions="Drop files here or click to select files"
    >
      <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
        <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
      </div>
    </modus-wc-file-dropzone>
  `},l={render:()=>t`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      include-state-icon="false"
    >
      <div
        slot="dropzone"
        style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: center;"
      >
        <modus-wc-progress variant="radial" value="85">
          <div
            style="display: flex; flex-direction: column; align-items: center; padding: 1rem;"
          >
            <div
              style="font-size: 1.25rem; font-weight: bold; margin-top: 0.25rem;"
            >
              85%
            </div>
          </div>
        </modus-wc-progress>
        <div style="margin-top: 1rem; text-align: center;">
          <p style="margin: 0; color: #0063a3; font-weight: 600;">
            Uploading 2 of 3 files
          </p>
          <p style="margin: 0.25rem 0 0; color: #6a6e79; font-size: 0.875rem;">
            image1.jpg, image2.jpg
          </p>
        </div>
      </div>
    </modus-wc-file-dropzone>
  `},r={render:()=>t`
    <modus-wc-file-dropzone
      accept-file-types=".pdf,.docx"
      include-state-icon="false"
    >
      <div
        slot="dropzone"
        style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: center;"
      >
        <div style="width: 80%; max-width: 300px;">
          <modus-wc-progress indeterminate></modus-wc-progress>
        </div>
        <div style="margin-top: 1rem; text-align: center;">
          <p style="margin: 0; color: #0063a3; font-weight: 600;">
            Processing Documents
          </p>
          <p style="margin: 0.25rem 0 0; color: #6a6e79; font-size: 0.875rem;">
            Checking file integrity and scanning for viruses...
          </p>
        </div>
      </div>
    </modus-wc-file-dropzone>
  `},a={args:{"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>t`
    <modus-wc-file-dropzone
      accept-file-types=${i(e["accept-file-types"])}
      invalid-file-type-message=${i(e["invalid-file-type-message"])}
      max-file-name-length=${i(e["max-file-name-length"])}
      max-file-count=${i(e["max-file-count"])}
      max-total-file-size-bytes=${i(e["max-total-file-size-bytes"])}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},c={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>t`
    <modus-wc-file-dropzone
      accept-file-types=${i(e["accept-file-types"])}
      ?multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,u,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,x,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,v,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      include-state-icon="false"
    >
      <div
        slot="dropzone"
        style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: center;"
      >
        <modus-wc-progress variant="radial" value="85">
          <div
            style="display: flex; flex-direction: column; align-items: center; padding: 1rem;"
          >
            <div
              style="font-size: 1.25rem; font-weight: bold; margin-top: 0.25rem;"
            >
              85%
            </div>
          </div>
        </modus-wc-progress>
        <div style="margin-top: 1rem; text-align: center;">
          <p style="margin: 0; color: #0063a3; font-weight: 600;">
            Uploading 2 of 3 files
          </p>
          <p style="margin: 0.25rem 0 0; color: #6a6e79; font-size: 0.875rem;">
            image1.jpg, image2.jpg
          </p>
        </div>
      </div>
    </modus-wc-file-dropzone>
  \`
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var $,b,D;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => html\`
    <modus-wc-file-dropzone
      accept-file-types=".pdf,.docx"
      include-state-icon="false"
    >
      <div
        slot="dropzone"
        style="display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: center;"
      >
        <div style="width: 80%; max-width: 300px;">
          <modus-wc-progress indeterminate></modus-wc-progress>
        </div>
        <div style="margin-top: 1rem; text-align: center;">
          <p style="margin: 0; color: #0063a3; font-weight: 600;">
            Processing Documents
          </p>
          <p style="margin: 0.25rem 0 0; color: #6a6e79; font-size: 0.875rem;">
            Checking file integrity and scanning for viruses...
          </p>
        </div>
      </div>
    </modus-wc-file-dropzone>
  \`
}`,...(D=(b=r.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var j,S,W;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(S=a.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var C,M,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const R=["Default","Disabled","WithCustomContent","WithRadialProgress","WithIndeterminateProgress","WithFileValidations","WithMultipleFiles"];export{n as Default,s as Disabled,o as WithCustomContent,a as WithFileValidations,r as WithIndeterminateProgress,c as WithMultipleFiles,l as WithRadialProgress,R as __namedExportsOrder,B as default};
