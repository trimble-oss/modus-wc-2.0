import{w as M}from"./decorator-Cv9na35H.js";import{b as d}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";import{c as L}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const N={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",args:{"accept-file-types":".doc, .docx, .pdf",disabled:!1,"include-state-icon":!0,instructions:"Drag files here or browse to upload"},argTypes:{"accept-file-types":{control:"text",description:"Accepted file types (e.g. '.jpg,.png' or 'image/*')"},"custom-class":{control:"text",description:"Custom CSS class to apply to the file dropzone element"},disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},feedback:{control:"object",description:"External feedback to display info, success, or error state with optional custom icon and message",table:{type:{summary:"IFileDropzoneFeedback",detail:`{
  type: 'info' | 'error' | 'success';
  icon?: string;
  message?: string;
}`}}},instructions:{control:"text",description:"Default instructions displayed in the dropzone"},"invalid-file-type-message":{control:"text",description:"Custom error message displayed when an invalid file type is selected"},"max-file-name-length":{control:"number",description:"Maximum allowed length of filename, will show error if exceeded"},"max-file-count":{control:"number",description:"Maximum number of files allowed, will show error if exceeded"},"max-total-file-size-bytes":{control:"number",description:"Maximum total file size in bytes allowed, will show error if exceeded"},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}},reset:{description:"Reset the dropzone to its initial state, clearing all error and success states",table:{category:"Methods",type:{summary:"() => Promise<void>"}}}},decorators:[M],parameters:{actions:{handles:["fileSelect"]}}},i={render:e=>d`
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
      .feedback=${e.feedback}
    ></modus-wc-file-dropzone>
  `},c={args:{"accept-file-types":".pdf, .doc, .docx","success-message":"Files uploaded successfully!"},parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 1rem;">
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
<\/script>`}}},render:e=>d`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <modus-wc-file-dropzone
        id="custom-dropzone"
        accept-file-types=${t(e["accept-file-types"])}
        success-message=${t(e["success-message"])}
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
        @buttonClick=${()=>{const o=document.getElementById("custom-dropzone");o!=null&&o.reset&&o.reset()}}
      >
        Reset Dropzone
      </modus-wc-button>
    </div>
  `},l={args:{multiple:!0,"max-file-name-length":20,"max-file-count":3,"max-total-file-size-bytes":10485760,"invalid-file-type-message":"Invalid file format. Please upload correct file type."},render:e=>d`
    <modus-wc-file-dropzone
      accept-file-types=${t(e["accept-file-types"])}
      invalid-file-type-message=${t(e["invalid-file-type-message"])}
      max-file-name-length=${t(e["max-file-name-length"])}
      max-file-count=${t(e["max-file-count"])}
      max-total-file-size-bytes=${t(e["max-total-file-size-bytes"])}
      ?multiple=${e.multiple}
      instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
    ></modus-wc-file-dropzone>
  `},r={args:{multiple:!0,"accept-file-types":"image/*"},render:e=>d`
    <modus-wc-file-dropzone
      accept-file-types=${t(e["accept-file-types"])}
      multiple=${e.multiple}
      instructions="Select multiple image files"
    ></modus-wc-file-dropzone>
  `},p={type:"success",message:"Files uploaded successfully!"},T={type:"error",message:"Upload failed. Please try again."},H={type:"info",message:"Release to upload your files"},a={args:{"accept-file-types":".pdf, .doc, .docx",feedback:p},parameters:{docs:{source:{code:`<div style="display: flex; flex-direction: column; gap: 1rem;">
  <modus-wc-file-dropzone
    id="feedback-dropzone"
    accept-file-types=".pdf, .doc, .docx"
    instructions="Drag files here or browse to upload"
  ></modus-wc-file-dropzone>

  <div style="display: flex; gap: 0.5rem;">
    <modus-wc-button id="success-button">Show Success</modus-wc-button>
    <modus-wc-button id="error-button" color="danger">Show Error</modus-wc-button>
    <modus-wc-button id="info-button" color="tertiary">Show Info</modus-wc-button>
    <modus-wc-button id="clear-button" color="secondary">Clear Feedback</modus-wc-button>
  </div>
</div>

<script>
  const dropzone = document.getElementById('feedback-dropzone');
  const successFeedback = { type: 'success', message: 'Files uploaded successfully!' };
  const errorFeedback = { type: 'error', message: 'Upload failed. Please try again.' };
  const infoFeedback = { type: 'info', message: 'Release to upload your files' };

  document.getElementById('success-button')?.addEventListener('click', () => {
    if (dropzone) dropzone.feedback = successFeedback;
  });
  document.getElementById('error-button')?.addEventListener('click', () => {
    if (dropzone) dropzone.feedback = errorFeedback;
  });
  document.getElementById('info-button')?.addEventListener('click', () => {
    if (dropzone) dropzone.feedback = infoFeedback;
  });
  document.getElementById('clear-button')?.addEventListener('click', () => {
    if (dropzone) dropzone.feedback = undefined;
  });
<\/script>`}}},render:e=>d`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <modus-wc-file-dropzone
        id="feedback-dropzone"
        accept-file-types=${t(e["accept-file-types"])}
        .feedback=${e.feedback}
        ?include-state-icon=${e["include-state-icon"]}
        instructions="Drag files here or browse to upload"
      ></modus-wc-file-dropzone>

      <div style="display: flex; gap: 0.5rem;">
        <modus-wc-button
          @buttonClick=${()=>{const o=document.getElementById("feedback-dropzone");o&&(o.feedback=p)}}
        >
          Show Success
        </modus-wc-button>
        <modus-wc-button
          color="danger"
          @buttonClick=${()=>{const o=document.getElementById("feedback-dropzone");o&&(o.feedback=T)}}
        >
          Show Error
        </modus-wc-button>
        <modus-wc-button
          color="tertiary"
          @buttonClick=${()=>{const o=document.getElementById("feedback-dropzone");o&&(o.feedback=H)}}
        >
          Show Info
        </modus-wc-button>
        <modus-wc-button
          color="secondary"
          @buttonClick=${()=>{const o=document.getElementById("feedback-dropzone");o&&(o.feedback=void 0)}}
        >
          Clear Feedback
        </modus-wc-button>
      </div>
    </div>
  `},u={render:e=>{if(!customElements.get("file-dropzone-shadow-host")){const o=L({componentTag:"modus-wc-file-dropzone",propsMapper:(s,C)=>{const n=C;n.acceptFileTypes=s["accept-file-types"]??"",n.customClass=s["custom-class"]||"",n.disabled=!!s.disabled,n.feedback=s.feedback,n.fileDraggedOverInstructions=s["file-dragged-over-instructions"]??"",n.includeStateIcon=!!s["include-state-icon"],n.instructions=s.instructions??"",n.invalidFileTypeMessage=s["invalid-file-type-message"]??"",n.maxFileCount=s["max-file-count"]??0,n.maxFileNameLength=s["max-file-name-length"]??0,n.maxTotalFileSizeBytes=s["max-total-file-size-bytes"]??0,n.multiple=!!s.multiple,n.successMessage=s["success-message"]??""}});customElements.define("file-dropzone-shadow-host",o)}return d`<file-dropzone-shadow-host
      .props=${{...e}}
    ></file-dropzone-shadow-host>`}};var m,f,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      .feedback=\${args.feedback}
    ></modus-wc-file-dropzone>
  \`
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,y,z;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(z=(y=c.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var w,k,x;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var h,v,F;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(F=(v=r.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var E,$,D;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    'accept-file-types': '.pdf, .doc, .docx',
    feedback: successFeedback
  },
  parameters: {
    docs: {
      source: {
        code: \`<div style="display: flex; flex-direction: column; gap: 1rem;">
  <modus-wc-file-dropzone
    id="feedback-dropzone"
    accept-file-types=".pdf, .doc, .docx"
    instructions="Drag files here or browse to upload"
  ></modus-wc-file-dropzone>

  <div style="display: flex; gap: 0.5rem;">
    <modus-wc-button id="success-button">Show Success</modus-wc-button>
    <modus-wc-button id="error-button" color="danger">Show Error</modus-wc-button>
    <modus-wc-button id="info-button" color="tertiary">Show Info</modus-wc-button>
    <modus-wc-button id="clear-button" color="secondary">Clear Feedback</modus-wc-button>
  </div>
</div>

<script>
  const dropzone = document.getElementById('feedback-dropzone');
  const successFeedback = { type: 'success', message: 'Files uploaded successfully!' };
  const errorFeedback = { type: 'error', message: 'Upload failed. Please try again.' };
  const infoFeedback = { type: 'info', message: 'Release to upload your files' };

  document.getElementById('success-button')?.addEventListener('click', () => {
    if (dropzone) dropzone.feedback = successFeedback;
  });
  document.getElementById('error-button')?.addEventListener('click', () => {
    if (dropzone) dropzone.feedback = errorFeedback;
  });
  document.getElementById('info-button')?.addEventListener('click', () => {
    if (dropzone) dropzone.feedback = infoFeedback;
  });
  document.getElementById('clear-button')?.addEventListener('click', () => {
    if (dropzone) dropzone.feedback = undefined;
  });
<\/script>\`
      }
    }
  },
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <modus-wc-file-dropzone
        id="feedback-dropzone"
        accept-file-types=\${ifDefined(args['accept-file-types'])}
        .feedback=\${args.feedback}
        ?include-state-icon=\${args['include-state-icon']}
        instructions="Drag files here or browse to upload"
      ></modus-wc-file-dropzone>

      <div style="display: flex; gap: 0.5rem;">
        <modus-wc-button
          @buttonClick=\${() => {
    const dropzone = document.getElementById('feedback-dropzone') as HTMLElement & {
      feedback?: IFileDropzoneFeedback;
    };
    if (dropzone) {
      dropzone.feedback = successFeedback;
    }
  }}
        >
          Show Success
        </modus-wc-button>
        <modus-wc-button
          color="danger"
          @buttonClick=\${() => {
    const dropzone = document.getElementById('feedback-dropzone') as HTMLElement & {
      feedback?: IFileDropzoneFeedback;
    };
    if (dropzone) {
      dropzone.feedback = errorFeedback;
    }
  }}
        >
          Show Error
        </modus-wc-button>
        <modus-wc-button
          color="tertiary"
          @buttonClick=\${() => {
    const dropzone = document.getElementById('feedback-dropzone') as HTMLElement & {
      feedback?: IFileDropzoneFeedback;
    };
    if (dropzone) {
      dropzone.feedback = infoFeedback;
    }
  }}
        >
          Show Info
        </modus-wc-button>
        <modus-wc-button
          color="secondary"
          @buttonClick=\${() => {
    const dropzone = document.getElementById('feedback-dropzone') as HTMLElement & {
      feedback?: IFileDropzoneFeedback;
    };
    if (dropzone) {
      dropzone.feedback = undefined;
    }
  }}
        >
          Clear Feedback
        </modus-wc-button>
      </div>
    </div>
  \`
}`,...(D=($=a.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var I,B,S;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('file-dropzone-shadow-host')) {
      const FileDropzoneShadowHost = createShadowHostClass<FileDropzoneArgs>({
        componentTag: 'modus-wc-file-dropzone',
        propsMapper: (v: FileDropzoneArgs, el: HTMLElement) => {
          const dropzoneEl = el as unknown as {
            acceptFileTypes: string;
            customClass: string;
            disabled: boolean;
            feedback?: IFileDropzoneFeedback;
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
          dropzoneEl.feedback = v.feedback;
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
}`,...(S=(B=u.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const j=["Default","customContent","fileValidations","multipleFiles","withFeedback","ShadowDomParent"];export{i as Default,u as ShadowDomParent,j as __namedExportsOrder,c as customContent,N as default,l as fileValidations,r as multipleFiles,a as withFeedback};
