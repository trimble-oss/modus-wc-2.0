import{w as b}from"./decorator-D4YmxizW.js";import{x as r}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const E={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drag files here or browse to upload"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},"custom-class":{control:"text",description:"Custom CSS class to apply to the file dropzone element"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}},reset:{description:"Reset the dropzone to its initial state, clearing all error and success states",table:{category:"Methods",type:{summary:"() => Promise<void>"}}}},decorators:[b],parameters:{actions:{handles:["fileSelect"]}}},o={render:e=>r`
    <modus-wc-file-dropzone
      accept-file-types=${s(e["accept-file-types"])}
      custom-class=${s(e["custom-class"])}
      ?disabled=${e.disabled}
      file-dragged-over-instructions=${s(e["file-dragged-over-instructions"])}
      ?include-state-icon=${e["include-state-icon"]}
      instructions=${s(e.instructions)}
      invalid-file-type-message=${s(e["invalid-file-type-message"])}
      max-file-name-length=${s(e["max-file-name-length"])}
      max-file-count=${s(e["max-file-count"])}
      max-total-file-size-bytes=${s(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      success-message=${s(e["success-message"])}
    ></modus-wc-file-dropzone>
  `},i={args:{"accept-file-types":".pdf, .doc, .docx","success-message":"Files uploaded successfully!"},parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 1rem;">
  <modus-wc-file-dropzone
    id="custom-dropzone"
    accept-file-types=".pdf, .doc, .docx"
    success-message="Files uploaded successfully!"
    instructions="Drag files here or browse to upload"
  >
    <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
      <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
    </div>
  </modus-wc-file-dropzone>

  <modus-wc-button id="reset-button">
    Reset Dropzone
  </modus-wc-button>
</div>

<script>
  const dropzone = document.getElementById('custom-dropzone');
  const resetButton = document.getElementById('reset-button');
  
  resetButton.addEventListener('click', () => {
    if (dropzone?.reset) {
      dropzone.reset();
    }
  });
<\/script>`}}},render:e=>r`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <modus-wc-file-dropzone
        id="custom-dropzone"
        accept-file-types=${s(e["accept-file-types"])}
        success-message=${s(e["success-message"])}
        instructions="Drag files here or browse to upload"
      >
        <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
          <modus-wc-progress
            value="70"
            label="70% Uploaded"
          ></modus-wc-progress>
        </div>
      </modus-wc-file-dropzone>

      <modus-wc-button
        @buttonClick=${()=>{const t=document.getElementById("custom-dropzone");t!=null&&t.reset&&t.reset()}}
      >
        Reset Dropzone
      </modus-wc-button>
    </div>
  `},l={args:{multiple:!0,"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>r`
    <modus-wc-file-dropzone
      accept-file-types=${s(e["accept-file-types"])}
      invalid-file-type-message=${s(e["invalid-file-type-message"])}
      max-file-name-length=${s(e["max-file-name-length"])}
      max-file-count=${s(e["max-file-count"])}
      max-total-file-size-bytes=${s(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},n={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>r`
    <modus-wc-file-dropzone
      accept-file-types=${s(e["accept-file-types"])}
      multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `};var a,c,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    'accept-file-types': '.pdf, .doc, .docx',
    'success-message': 'Files uploaded successfully!'
  },
  parameters: {
    docs: {
      source: {
        code: \`<div style="display: flex; flex-direction: column; gap: 1rem;">
  <modus-wc-file-dropzone
    id="custom-dropzone"
    accept-file-types=".pdf, .doc, .docx"
    success-message="Files uploaded successfully!"
    instructions="Drag files here or browse to upload"
  >
    <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
      <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
    </div>
  </modus-wc-file-dropzone>

  <modus-wc-button id="reset-button">
    Reset Dropzone
  </modus-wc-button>
</div>

<script>
  const dropzone = document.getElementById('custom-dropzone');
  const resetButton = document.getElementById('reset-button');
  
  resetButton.addEventListener('click', () => {
    if (dropzone?.reset) {
      dropzone.reset();
    }
  });
<\/script>\`
      }
    }
  },
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <modus-wc-file-dropzone
        id="custom-dropzone"
        accept-file-types=\${ifDefined(args['accept-file-types'])}
        success-message=\${ifDefined(args['success-message'])}
        instructions="Drag files here or browse to upload"
      >
        <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
          <modus-wc-progress
            value="70"
            label="70% Uploaded"
          ></modus-wc-progress>
        </div>
      </modus-wc-file-dropzone>

      <modus-wc-button
        @buttonClick=\${() => {
    const dropzone = document.getElementById('custom-dropzone') as HTMLElement & {
      reset?: () => Promise<void>;
    };
    if (dropzone?.reset) {
      void dropzone.reset();
    }
  }}
      >
        Reset Dropzone
      </modus-wc-button>
    </div>
  \`
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    multiple: true,
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
      ?multiple=\${args.multiple}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  \`
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,z,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const S=["Default","customContent","fileValidations","multipleFiles"];export{o as Default,S as __namedExportsOrder,i as customContent,E as default,l as fileValidations,n as multipleFiles};
