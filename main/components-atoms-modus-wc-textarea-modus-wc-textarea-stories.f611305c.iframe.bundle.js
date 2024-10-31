/*! For license information please see components-atoms-modus-wc-textarea-modus-wc-textarea-stories.f611305c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_trimble_cms_modus_wc=self.webpackChunk_trimble_cms_modus_wc||[]).push([[386],{"./src/components/atoms/modus-wc-textarea/modus-wc-textarea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modus_wc_textarea_stories});var lit=__webpack_require__("./node_modules/lit/index.js"),lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const to=t=>t??lit_html.s6,modus_wc_textarea_stories={title:"Components/Atoms/Textarea",component:"modus-wc-textarea",argTypes:{ariaDescribedby:{control:"text",table:{sort:"alpha"}},ariaInvalid:{control:"boolean",table:{sort:"alpha"}},ariaLabel:{control:"text",table:{sort:"alpha"}},customClass:{control:"text",table:{sort:"alpha"}},dir:{control:{type:"select"},options:["ltr","rtl","auto"],table:{sort:"alpha"}},disabled:{control:"boolean",table:{sort:"alpha"}},id:{control:"text",table:{sort:"alpha"}},maxLength:{control:"number",table:{sort:"alpha"}},name:{control:"text",table:{sort:"alpha"}},placeholder:{control:"text",table:{sort:"alpha"}},readonly:{control:"boolean",table:{sort:"alpha"}},required:{control:"boolean",table:{sort:"alpha"}},rows:{control:"number",table:{sort:"alpha"}},tabIndex:{control:"number",table:{sort:"alpha"}},value:{control:"text",table:{sort:"alpha"}}},parameters:{controls:{sort:"alpha"}}},Template={render:args=>lit.qy`
      <div>
        <h1>Textarea</h1>
        <modus-wc-textarea
          aria-describedby=${to(args.ariaDescribedby)}
          aria-invalid=${to(args.ariaInvalid)}
          aria-label=${to(args.ariaLabel)}
          custom-class=${to(args.customClass)}
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
          .value=${args.value}
          @input=${e=>{const target=e.target;args.value=target.value}}
          @change=${e=>{const target=e.target;args.value=target.value}}
        ></modus-wc-textarea>
        <stencil-docs component-name="modus-wc-textarea"></stencil-docs>
      </div>
    `,args:{ariaLabel:"Enter your comments",placeholder:"Type your comments here"}},Default=Object.assign({},Template),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-atoms-modus-wc-textarea-modus-wc-textarea-stories.f611305c.iframe.bundle.js.map