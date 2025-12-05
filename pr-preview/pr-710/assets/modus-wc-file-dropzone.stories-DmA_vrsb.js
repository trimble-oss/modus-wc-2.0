import{w as h}from"./decorator-D4YmxizW.js";import{x as a}from"./lit-element-C8zulti1.js";import{o as t}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var c=Object.freeze,D=Object.defineProperty,M=(e,r)=>c(D(e,"raw",{value:c(e.slice())})),d;const B={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drag files here or browse to upload"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},"custom-class":{control:"text",description:"Custom CSS class to apply to the file dropzone element"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}},reset:{description:"Reset the dropzone to its initial state, clearing all error and success states",table:{category:"Methods",type:{summary:"() => Promise<void>"}}}},decorators:[h],parameters:{actions:{handles:["fileSelect"]}}},i={render:e=>a`
    <modus-wc-file-dropzone
      accept-file-types=${t(e["accept-file-types"])}
      custom-class=${t(e["custom-class"])}
      ?disabled=${e.disabled}
      file-dragged-over-instructions=${t(e["file-dragged-over-instructions"])}
      ?include-state-icon=${e["include-state-icon"]}
      instructions=${t(e.instructions)}
      invalid-file-type-message=${t(e["invalid-file-type-message"])}
      max-file-name-length=${t(e["max-file-name-length"])}
      max-file-count=${t(e["max-file-count"])}
      max-total-file-size-bytes=${t(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      success-message=${t(e["success-message"])}
    ></modus-wc-file-dropzone>
  `},o={args:{"accept-file-types":".pdf, .doc, .docx","success-message":"Files uploaded successfully!"},render:e=>{const r=()=>{const s=document.getElementById("custom-dropzone");s!=null&&s.reset&&s.reset()};return a(d||(d=M([`
<script>
const resetDropzone = () => {
  const dropzone = document.getElementById(
   'custom-dropzone'
    ) as HTMLElement & { reset?: () => Promise<void> };
    if (dropzone?.reset) {
    void dropzone.reset();
    }
  };
<\/script>
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <modus-wc-file-dropzone
    id="custom-dropzone"
    accept-file-types=`,`
    success-message=`,`
    instructions="Drag files here or browse to upload"
  >
    <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
      <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
    </div>
  </modus-wc-file-dropzone>

  <modus-wc-button variant="secondary" @buttonClick=`,`>
    Reset Dropzone
  </modus-wc-button>
</div>
  `])),t(e["accept-file-types"]),t(e["success-message"]),r)}},l={args:{multiple:!0,"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>a`
    <modus-wc-file-dropzone
      accept-file-types=${t(e["accept-file-types"])}
      invalid-file-type-message=${t(e["invalid-file-type-message"])}
      max-file-name-length=${t(e["max-file-name-length"])}
      max-file-count=${t(e["max-file-count"])}
      max-total-file-size-bytes=${t(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},n={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>a`
    <modus-wc-file-dropzone
      accept-file-types=${t(e["accept-file-types"])}
      multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `};var m,p,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var u,g,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'accept-file-types': '.pdf, .doc, .docx',
    'success-message': 'Files uploaded successfully!'
  },
  render: args => {
    const resetDropzone = () => {
      const dropzone = document.getElementById('custom-dropzone') as HTMLElement & {
        reset?: () => Promise<void>;
      };
      if (dropzone?.reset) {
        void dropzone.reset();
      }
    };

    //prettier-ignore
    return html\`
<script>
const resetDropzone = () => {
  const dropzone = document.getElementById(
   'custom-dropzone'
    ) as HTMLElement & { reset?: () => Promise<void> };
    if (dropzone?.reset) {
    void dropzone.reset();
    }
  };
<\/script>
<div style="display: flex; flex-direction: column; gap: 1rem;">
  <modus-wc-file-dropzone
    id="custom-dropzone"
    accept-file-types=\${ifDefined(args['accept-file-types'])}
    success-message=\${ifDefined(args['success-message'])}
    instructions="Drag files here or browse to upload"
  >
    <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
      <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
    </div>
  </modus-wc-file-dropzone>

  <modus-wc-button variant="secondary" @buttonClick=\${resetDropzone}>
    Reset Dropzone
  </modus-wc-button>
</div>
  \`;
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var z,x,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var v,$,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=($=n.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const I=["Default","customContent","fileValidations","multipleFiles"];export{i as Default,I as __namedExportsOrder,o as customContent,B as default,l as fileValidations,n as multipleFiles};
