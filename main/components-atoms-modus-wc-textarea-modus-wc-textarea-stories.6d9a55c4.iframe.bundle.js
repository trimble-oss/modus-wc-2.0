/*! For license information please see components-atoms-modus-wc-textarea-modus-wc-textarea-stories.6d9a55c4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_trimble_cms_modus_wc=self.webpackChunk_trimble_cms_modus_wc||[]).push([[386],{"./src/components/atoms/modus-wc-textarea/modus-wc-textarea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modus_wc_textarea_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const to=t=>t??lit_html.s6;var theme=__webpack_require__("./src/utils/theme.ts");const modus_wc_textarea_stories={title:"Components/Textarea",component:"modus-wc-textarea",argTypes:{ariaDescribedby:{control:"text"},ariaInvalid:{control:"boolean"},ariaLabel:{control:"text"},customClass:{control:"text"},daisyClass:{control:"text"},dir:{control:{type:"select"},options:["ltr","rtl","auto"]},disabled:{control:"boolean"},id:{control:"text"},maxLength:{control:"number"},mode:{control:{type:"select"},options:["default","dark","high-contrast"]},name:{control:"text"},placeholder:{control:"text"},readonly:{control:"boolean"},required:{control:"boolean"},rows:{control:"number"},tabIndex:{control:"number"},value:{control:"text"}}},Template={render:args=>((0,theme.ER)(args.mode),lit.qy`
      <div>
        <h1>Textarea</h1>
        <modus-wc-textarea
          aria-describedby=${to(args.ariaDescribedby)}
          aria-invalid=${to(args.ariaInvalid)}
          aria-label=${args.ariaLabel}
          custom-class=${to(args.customClass)}
          daisy-class=${to(args.daisyClass)}
          dir=${to(args.dir)}
          ?disabled=${args.disabled}
          id=${to(args.id)}
          max-length=${to(args.maxLength)}
          name=${to(args.name)}
          placeholder=${to(args.placeholder)}
          ?readonly=${args.readonly}
          ?required=${args.required}
          rows=${to(args.rows)}
          tab-index=${to(args.tabIndex)}
          value=${to(args.value)}
          @blur=${e=>console.log("blur",e.detail)}
          @change=${e=>console.log("change",e.detail)}
          @focus=${e=>console.log("focus",e.detail)}
        ></modus-wc-textarea>
        <stencil-docs component-name="modus-wc-textarea"></stencil-docs>
      </div>
    `)},Default=Object.assign(Object.assign({},Template),{args:{ariaDescribedby:"description",ariaInvalid:!1,ariaLabel:"Enter your comments",customClass:"",daisyClass:"",dir:"ltr",disabled:!1,id:"textarea-1",maxLength:void 0,mode:"default",name:"comments",placeholder:"Type your comments here",readonly:!1,required:!1,rows:4,tabIndex:0,value:""}}),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    ariaDescribedby: 'description',\n    ariaInvalid: false,\n    ariaLabel: 'Enter your comments',\n    customClass: '',\n    daisyClass: '',\n    dir: 'ltr',\n    disabled: false,\n    id: 'textarea-1',\n    maxLength: undefined,\n    mode: 'default',\n    name: 'comments',\n    placeholder: 'Type your comments here',\n    readonly: false,\n    required: false,\n    rows: 4,\n    tabIndex: 0,\n    value: ''\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/utils/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ER:()=>setModusWCMode});const setModusWCMode=mode=>{document.documentElement.classList.remove("modus-wc-dark-mode","modus-wc-high-contrast-mode"),"default"!==mode&&document.documentElement.classList.add(`modus-wc-${mode}-mode`)}}}]);
//# sourceMappingURL=components-atoms-modus-wc-textarea-modus-wc-textarea-stories.6d9a55c4.iframe.bundle.js.map