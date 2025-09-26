import{x as c}from"./lit-element-C8zulti1.js";import{o as f}from"./if-defined-yv6owfG8.js";const h={title:"Components/File Dropzone",component:"modus-wc-file-dropzone",parameters:{actions:{handles:["fileSelect"]}},argTypes:{disabled:{control:"boolean",description:"Disable the file input",table:{defaultValue:{summary:"false"}}},multiple:{control:"boolean",description:"Allow multiple file selection",table:{defaultValue:{summary:"false"}}},label:{control:"text",description:"Label to display for the file input"}},args:{disabled:!1,multiple:!1,label:"Choose file"}},e={render:s=>c`
    <modus-wc-file-dropzone
      ?disabled=${s.disabled}
      ?multiple=${s.multiple}
      label=${f(s.label)}
    ></modus-wc-file-dropzone>
  `},l={args:{disabled:!0}},a={args:{multiple:!0,label:"Choose multiple files"}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`
    <modus-wc-file-dropzone
      ?disabled=\${args.disabled}
      ?multiple=\${args.multiple}
      label=\${ifDefined(args.label)}
    ></modus-wc-file-dropzone>
  \`
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var i,n,d;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(d=(n=l.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    multiple: true,
    label: 'Choose multiple files'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const D=["Default","Disabled","MultipleFiles"];export{e as Default,l as Disabled,a as MultipleFiles,D as __namedExportsOrder,h as default};
