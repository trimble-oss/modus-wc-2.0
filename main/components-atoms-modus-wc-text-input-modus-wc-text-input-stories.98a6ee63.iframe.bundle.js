"use strict";(self.webpackChunk_trimble_cms_modus_wc=self.webpackChunk_trimble_cms_modus_wc||[]).push([[574],{"./src/components/atoms/modus-wc-text-input/modus-wc-text-input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Atoms/Text Input",component:"modus-wc-text-input",argTypes:{ariaDescribedby:{control:"text",table:{sort:"alpha"}},ariaInvalid:{control:"boolean",table:{sort:"alpha"}},ariaLabel:{control:"text",table:{sort:"alpha"}},autoCapitalize:{control:{type:"select"},options:["off","none","on","sentences","words","characters"],table:{sort:"alpha"}},autoComplete:{control:{type:"select"},options:["on","off"],table:{sort:"alpha"}},autoFocus:{control:"boolean",table:{sort:"alpha"}},bordered:{control:"boolean",table:{sort:"alpha"}},customClass:{control:"text",table:{sort:"alpha"}},dir:{control:{type:"select"},options:["ltr","rtl","auto"],table:{sort:"alpha"}},disabled:{control:"boolean",table:{sort:"alpha"}},id:{control:"text",table:{sort:"alpha"}},inputMode:{control:{type:"select"},options:["decimal","email","none","numeric","search","tel","text","url"],table:{sort:"alpha"}},maxLength:{control:"number",table:{sort:"alpha"}},minLength:{control:"number",table:{sort:"alpha"}},name:{control:"text",table:{sort:"alpha"}},pattern:{control:"text",table:{sort:"alpha"}},placeholder:{control:"text",table:{sort:"alpha"}},readOnly:{control:"boolean",table:{sort:"alpha"}},required:{control:"boolean",table:{sort:"alpha"}},size:{control:{type:"select"},options:["sm","md","lg"]},spellcheck:{control:"boolean",table:{sort:"alpha"}},tabIndex:{control:"number",table:{sort:"alpha"}},type:{control:{type:"select"},options:["email","password","search","tel","text","url"],table:{sort:"alpha"}},value:{control:"text",table:{sort:"alpha"}}},parameters:{controls:{sort:"alpha"}}},Template={render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div>
      <h1>Text Input</h1>
      <modus-wc-text-input
        aria-describedby=${args.ariaDescribedby}
        aria-invalid=${args.ariaInvalid}
        aria-label=${args.ariaLabel}
        auto-capitalize=${args.autoCapitalize}
        auto-complete=${args.autoComplete}
        ?auto-focus=${args.autoFocus}
        ?bordered=${args.bordered}
        custom-class=${args.customClass}
        dir=${args.dir}
        ?disabled=${args.disabled}
        id=${args.id}
        input-mode=${args.inputMode}
        max-length=${args.maxLength}
        min-length=${args.minLength}
        name=${args.name}
        pattern=${args.pattern}
        placeholder=${args.placeholder}
        ?read-only=${args.readOnly}
        ?required=${args.required}
        size=${args.size}
        ?spellcheck=${args.spellcheck}
        tab-index=${args.tabIndex}
        type=${args.type}
        .value=${args.value}
        @input=${e=>{const target=e.target;args.value=target.value}}
        @change=${e=>{const target=e.target;args.value=target.value}}
        @blur=${e=>console.log("Blur event:",e)}
        @focus=${e=>console.log("Focus event:",e)}
      ></modus-wc-text-input>
      <stencil-docs component-name="modus-wc-text-input"></stencil-docs>
    </div>
  `,args:{ariaLabel:"Enter your name",ariaInvalid:!1,bordered:!0,customClass:"",disabled:!1,name:"",placeholder:"Type your name here",readOnly:!1,required:!1,size:"md",value:""}},Default=Object.assign({},Template),__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-atoms-modus-wc-text-input-modus-wc-text-input-stories.98a6ee63.iframe.bundle.js.map