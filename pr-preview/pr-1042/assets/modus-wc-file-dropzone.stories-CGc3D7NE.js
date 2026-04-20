import{w as B}from"./decorator-D4YmxizW.js";import{x as n}from"./lit-element-CucEn6F2.js";import{o}from"./if-defined-BiZP-SBN.js";import{c as F}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";const U={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drag files here or browse to upload"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},"custom-class":{control:"text",description:"Custom CSS class to apply to the file dropzone element"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}},reset:{description:"Reset the dropzone to its initial state, clearing all error and success states",table:{category:"Methods",type:{summary:"() => Promise<void>"}}}},decorators:[B],parameters:{actions:{handles:["fileSelect"]}}},l={render:e=>n`
    <modus-wc-file-dropzone
      accept-file-types=${o(e["accept-file-types"])}
      custom-class=${o(e["custom-class"])}
      ?disabled=${e.disabled}
      file-dragged-over-instructions=${o(e["file-dragged-over-instructions"])}
      ?include-state-icon=${e["include-state-icon"]}
      instructions=${o(e.instructions)}
      invalid-file-type-message=${o(e["invalid-file-type-message"])}
      max-file-name-length=${o(e["max-file-name-length"])}
      max-file-count=${o(e["max-file-count"])}
      max-total-file-size-bytes=${o(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      success-message=${o(e["success-message"])}
    ></modus-wc-file-dropzone>
  `},r={args:{"accept-file-types":".pdf, .doc, .docx","success-message":"Files uploaded successfully!"},parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 1rem;">
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
        accept-file-types=${o(e["accept-file-types"])}
        success-message=${o(e["success-message"])}
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
        @buttonClick=${()=>{const s=document.getElementById("custom-dropzone");s!=null&&s.reset&&s.reset()}}
      >
        Reset Dropzone
      </modus-wc-button>
    </div>
  `},a={args:{multiple:!0,"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>n`
    <modus-wc-file-dropzone
      accept-file-types=${o(e["accept-file-types"])}
      invalid-file-type-message=${o(e["invalid-file-type-message"])}
      max-file-name-length=${o(e["max-file-name-length"])}
      max-file-count=${o(e["max-file-count"])}
      max-total-file-size-bytes=${o(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},c={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>n`
    <modus-wc-file-dropzone
      accept-file-types=${o(e["accept-file-types"])}
      multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `},d={render:e=>{if(!customElements.get("file-dropzone-shadow-host")){const s=F({componentTag:"modus-wc-file-dropzone",propsMapper:(t,S)=>{const i=S;i.acceptFileTypes=t["accept-file-types"]??"",i.customClass=t["custom-class"]||"",i.disabled=!!t.disabled,i.includeStateIcon=!!t["include-state-icon"],i.instructions=t.instructions??"",i.multiple=!!t.multiple}});customElements.define("file-dropzone-shadow-host",s)}return n`<file-dropzone-shadow-host
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
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var z,w,x;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var h,b,$;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...($=(b=c.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var v,D,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('file-dropzone-shadow-host')) {
      const FileDropzoneShadowHost = createShadowHostClass<FileDropzoneArgs>({
        componentTag: 'modus-wc-file-dropzone',
        propsMapper: (v: FileDropzoneArgs, el: HTMLElement) => {
          const dropzoneEl = el as unknown as {
            acceptFileTypes: string;
            customClass: string;
            disabled: boolean;
            includeStateIcon: boolean;
            instructions: string;
            multiple: boolean;
          };
          dropzoneEl.acceptFileTypes = v['accept-file-types'] ?? '';
          dropzoneEl.customClass = v['custom-class'] || '';
          dropzoneEl.disabled = Boolean(v.disabled);
          dropzoneEl.includeStateIcon = Boolean(v['include-state-icon']);
          dropzoneEl.instructions = v.instructions ?? '';
          dropzoneEl.multiple = Boolean(v.multiple);
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
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const k=["Default","customContent","fileValidations","multipleFiles","ShadowDomParent"];export{l as Default,d as ShadowDomParent,k as __namedExportsOrder,r as customContent,U as default,a as fileValidations,c as multipleFiles};
