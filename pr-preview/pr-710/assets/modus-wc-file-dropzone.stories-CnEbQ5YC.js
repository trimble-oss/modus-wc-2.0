import{w as _}from"./decorator-D4YmxizW.js";import{x as t}from"./lit-element-C8zulti1.js";import{o as s}from"./if-defined-yv6owfG8.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";var d=Object.freeze,C=Object.defineProperty,E=(e,c)=>d(C(e,"raw",{value:d(e.slice())})),p;const P={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drag files here or browse to upload"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},"custom-class":{control:"text",description:"Custom CSS class to apply to the file dropzone element"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}}},decorators:[_],parameters:{actions:{handles:["fileSelect"]}}},o={render:e=>t`
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
  `},n={render:()=>t`
    <modus-wc-file-dropzone
      accept-file-types=".jpg,.png,.gif"
      instructions="Drag files here or browse to upload"
    >
      <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
        <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
      </div>
    </modus-wc-file-dropzone>
  `},l={args:{"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>t`
    <modus-wc-file-dropzone
      accept-file-types=${s(e["accept-file-types"])}
      invalid-file-type-message=${s(e["invalid-file-type-message"])}
      max-file-name-length=${s(e["max-file-name-length"])}
      max-file-count=${s(e["max-file-count"])}
      max-total-file-size-bytes=${s(e["max-total-file-size-bytes"])}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},r={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>t`
    <modus-wc-file-dropzone
      accept-file-types=${s(e["accept-file-types"])}
      multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `},a={args:{"accept-file-types":".pdf, .doc, .docx","success-message":"Files uploaded successfully!"},render:e=>{const c=()=>{const i=document.getElementById("resetable-dropzone");i!=null&&i.reset&&i.reset()};return t(p||(p=E([`
<script>
  const resetDropzone = () => {
      const dropzone = document.getElementById(
        'resetable-dropzone'
      ) as HTMLElement & { reset?: () => void };
      if (dropzone?.reset) {
        dropzone.reset();
      }
    };
<\/script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
<modus-wc-file-dropzone
id="resetable-dropzone"
accept-file-types=`,`
success-message=`,`
instructions="Upload files and use the reset button below"
></modus-wc-file-dropzone>
<modus-wc-button variant="secondary" @buttonClick=`,`>
  Reset Dropzone
</modus-wc-button>
</div>
    `])),s(e["accept-file-types"]),s(e["success-message"]),c)}};var m,f,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,y,z;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(z=(y=n.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var x,w,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(w=l.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var $,v,h;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var D,S,M;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    'accept-file-types': '.pdf, .doc, .docx',
    'success-message': 'Files uploaded successfully!'
  },
  render: args => {
    const resetDropzone = () => {
      const dropzone = document.getElementById('resetable-dropzone') as HTMLElement & {
        reset?: () => void;
      };
      if (dropzone?.reset) {
        dropzone.reset();
      }
    };

    //prettier-ignore
    return html\`
<script>
  const resetDropzone = () => {
      const dropzone = document.getElementById(
        'resetable-dropzone'
      ) as HTMLElement & { reset?: () => void };
      if (dropzone?.reset) {
        dropzone.reset();
      }
    };
<\/script>

<div style="display: flex; flex-direction: column; gap: 1rem;">
<modus-wc-file-dropzone
id="resetable-dropzone"
accept-file-types=\${ifDefined(args['accept-file-types'])}
success-message=\${ifDefined(args['success-message'])}
instructions="Upload files and use the reset button below"
></modus-wc-file-dropzone>
<modus-wc-button variant="secondary" @buttonClick=\${resetDropzone}>
  Reset Dropzone
</modus-wc-button>
</div>
    \`;
  }
}`,...(M=(S=a.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const R=["Default","customContent","fileValidations","multipleFiles","withReset"];export{o as Default,R as __namedExportsOrder,n as customContent,P as default,l as fileValidations,r as multipleFiles,a as withReset};
