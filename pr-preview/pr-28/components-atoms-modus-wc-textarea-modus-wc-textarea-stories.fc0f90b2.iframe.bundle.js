/*! For license information please see components-atoms-modus-wc-textarea-modus-wc-textarea-stories.fc0f90b2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_trimble_cms_modus_wc=self.webpackChunk_trimble_cms_modus_wc||[]).push([[386],{"./src/components/atoms/modus-wc-textarea/modus-wc-textarea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/directives/if-defined.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Textarea",component:"modus-wc-textarea",argTypes:{ariaDescribedby:{control:"text",table:{sort:"alpha"}},ariaInvalid:{control:"boolean",table:{sort:"alpha"}},ariaLabel:{control:"text",table:{sort:"alpha"}},customClass:{control:"text",table:{sort:"alpha"}},dir:{control:{type:"select"},options:["ltr","rtl","auto"],table:{sort:"alpha"}},disabled:{control:"boolean",table:{sort:"alpha"}},id:{control:"text",table:{sort:"alpha"}},maxLength:{control:"number",table:{sort:"alpha"}},name:{control:"text",table:{sort:"alpha"}},placeholder:{control:"text",table:{sort:"alpha"}},readonly:{control:"boolean",table:{sort:"alpha"}},required:{control:"boolean",table:{sort:"alpha"}},rows:{control:"number",table:{sort:"alpha"}},tabIndex:{control:"number",table:{sort:"alpha"}},value:{control:"text",table:{sort:"alpha"}}},parameters:{controls:{sort:"alpha"}}},Template={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <div>
        <h1>Textarea</h1>
        <modus-wc-textarea
          aria-describedby=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.ariaDescribedby)}
          aria-invalid=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.ariaInvalid)}
          aria-label=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.ariaLabel)}
          custom-class=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.customClass)}
          dir=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.dir)}
          ?disabled=${args.disabled}
          id=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.id)}
          max-length=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.maxLength)}
          name=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.name)}
          placeholder=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.placeholder)}
          ?readonly=${args.readonly}
          ?required=${args.required}
          rows=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.rows)}
          tab-index=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.J)(args.tabIndex)}
          .value=${args.value}
          @input=${e=>{const target=e.target;args.value=target.value}}
          @change=${e=>{const target=e.target;args.value=target.value}}
        ></modus-wc-textarea>
        <stencil-docs component-name="modus-wc-textarea"></stencil-docs>
      </div>
    `,args:{ariaLabel:"Enter your comments",placeholder:"Type your comments here"}},Default=Object.assign({},Template),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}}},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>to});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const to=t=>t??lit_html.s6}}]);
//# sourceMappingURL=components-atoms-modus-wc-textarea-modus-wc-textarea-stories.fc0f90b2.iframe.bundle.js.map