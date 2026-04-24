import{w as S}from"./decorator-D4YmxizW.js";import{x as n}from"./lit-element-CucEn6F2.js";import{o as s}from"./if-defined-BiZP-SBN.js";import{c as B}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const P={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drag files here or browse to upload"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},"custom-class":{control:"text",description:"Custom CSS class to apply to the file dropzone element"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}},reset:{description:"Reset the dropzone to its initial state, clearing all error and success states",table:{category:"Methods",type:{summary:"() => Promise<void>"}}}},decorators:[S],parameters:{actions:{handles:["fileSelect"]}}},l={render:e=>n`
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
  `},a={args:{"accept-file-types":".pdf, .doc, .docx","success-message":"Files uploaded successfully!"},parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 1rem;">
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
<\/script>`}}},render:e=>n`
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
        @buttonClick=${()=>{const i=document.getElementById("custom-dropzone");i!=null&&i.reset&&i.reset()}}
      >
        Reset Dropzone
      </modus-wc-button>
    </div>
  `},r={args:{multiple:!0,"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>n`
    <modus-wc-file-dropzone
      accept-file-types=${s(e["accept-file-types"])}
      invalid-file-type-message=${s(e["invalid-file-type-message"])}
      max-file-name-length=${s(e["max-file-name-length"])}
      max-file-count=${s(e["max-file-count"])}
      max-total-file-size-bytes=${s(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},c={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>n`
    <modus-wc-file-dropzone
      accept-file-types=${s(e["accept-file-types"])}
      multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `},d={render:e=>{if(!customElements.get("file-dropzone-shadow-host")){const i=B({componentTag:"modus-wc-file-dropzone",propsMapper:(o,F)=>{const t=F;t.acceptFileTypes=o["accept-file-types"]??"",t.customClass=o["custom-class"]||"",t.disabled=!!o.disabled,t.fileDraggedOverInstructions=o["file-dragged-over-instructions"]??"",t.includeStateIcon=!!o["include-state-icon"],t.instructions=o.instructions??"",t.invalidFileTypeMessage=o["invalid-file-type-message"]??"",t.maxFileCount=o["max-file-count"]??0,t.maxFileNameLength=o["max-file-name-length"]??0,t.maxTotalFileSizeBytes=o["max-total-file-size-bytes"]??0,t.multiple=!!o.multiple,t.successMessage=o["success-message"]??""}});customElements.define("file-dropzone-shadow-host",i)}return n`<file-dropzone-shadow-host
      .props=${{...e}}
    ></file-dropzone-shadow-host>`}};var p,m,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var z,x,w;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var h,b,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var $,D,E;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('file-dropzone-shadow-host')) {
      const FileDropzoneShadowHost = createShadowHostClass<FileDropzoneArgs>({
        componentTag: 'modus-wc-file-dropzone',
        propsMapper: (v: FileDropzoneArgs, el: HTMLElement) => {
          const dropzoneEl = el as unknown as {
            acceptFileTypes: string;
            customClass: string;
            disabled: boolean;
            fileDraggedOverInstructions: string;
            includeStateIcon: boolean;
            instructions: string;
            invalidFileTypeMessage: string;
            maxFileCount: number;
            maxFileNameLength: number;
            maxTotalFileSizeBytes: number;
            multiple: boolean;
            successMessage: string;
          };
          dropzoneEl.acceptFileTypes = v['accept-file-types'] ?? '';
          dropzoneEl.customClass = v['custom-class'] || '';
          dropzoneEl.disabled = Boolean(v.disabled);
          dropzoneEl.fileDraggedOverInstructions = v['file-dragged-over-instructions'] ?? '';
          dropzoneEl.includeStateIcon = Boolean(v['include-state-icon']);
          dropzoneEl.instructions = v.instructions ?? '';
          dropzoneEl.invalidFileTypeMessage = v['invalid-file-type-message'] ?? '';
          dropzoneEl.maxFileCount = v['max-file-count'] ?? 0;
          dropzoneEl.maxFileNameLength = v['max-file-name-length'] ?? 0;
          dropzoneEl.maxTotalFileSizeBytes = v['max-total-file-size-bytes'] ?? 0;
          dropzoneEl.multiple = Boolean(v.multiple);
          dropzoneEl.successMessage = v['success-message'] ?? '';
        }
      });
      customElements.define('file-dropzone-shadow-host', FileDropzoneShadowHost);
    }
    return html\`<file-dropzone-shadow-host
      .props=\${{
      ...args
    }}
    ></file-dropzone-shadow-host>\`;
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const U=["Default","customContent","fileValidations","multipleFiles","ShadowDomParent"];export{l as Default,d as ShadowDomParent,U as __namedExportsOrder,a as customContent,P as default,r as fileValidations,c as multipleFiles};
