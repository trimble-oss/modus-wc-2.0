import{w as G}from"./decorator-Cv9na35H.js";import{b as j}from"./lit-element-DgBvYnzn.js";import{o as s}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const R=["center","top","bottom","left","right","top left","top right","bottom left","bottom right"],m="https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg",K={title:"Components/Image",component:"modus-wc-image",args:{src:m,alt:"A zebra drinks from a pond",fit:"default",shape:"square",size:"md","crop-position":"center"},argTypes:{"crop-position":{control:{type:"select"},options:R},fit:{control:{type:"select"},options:["default","contain","scale-down","none"]},shape:{control:{type:"select"},options:["square","rounded"]},size:{control:{type:"select"},options:["sm","md","lg","xl"]}},decorators:[G],parameters:{actions:{handles:["imageLoad","imageError"]},docs:{description:{component:"\nA resilient atomic image component wrapping the native `<img>` tag with consistent sizing tokens,\naspect-ratio control, an accessible error fallback, and WCAG 2.2 compliance."}}}},e={render:t=>j`
    <modus-wc-image
      src=${t.src}
      alt=${s(t.alt)}
      size=${s(t.size)}
      shape=${s(t.shape)}
      fit=${s(t.fit)}
      crop-position=${s(t["crop-position"])}
      custom-class=${s(t["custom-class"])}
    ></modus-wc-image>
  `},o={...e,parameters:{docs:{description:{story:'Default rendering with `fit="default"` and `size="md"` (288×192 px). The image fills the fixed box completely — non-matching aspect ratios are **cropped** equally from the center edges with no distortion.'}}}},i={...e,args:{fit:"contain"},parameters:{docs:{description:{story:'`fit="contain"` — the image scales down to fit **entirely** inside the hard-locked box while preserving its original aspect ratio. Areas not covered by the image show the background (letterbox/pillarbox effect).'}}}},a={...e,args:{fit:"scale-down"},parameters:{docs:{description:{story:'`fit="scale-down"` — the container uses `max-width / max-height` from the `size` token instead of hard-locked dimensions. If the image is larger than the target it is scaled down proportionally; if smaller it renders at its intrinsic size. The box shrinks to fit the image.'}}}},n={...e,args:{fit:"none"},parameters:{docs:{description:{story:'`fit="none"` — the image renders at its **intrinsic pixel size** with no scaling applied. The container is still hard-locked to the `size` token dimensions, so any part of the image that exceeds the box is clipped by `overflow: hidden`.'}}}},r={...e,args:{shape:"rounded"},parameters:{docs:{description:{story:'Applies a `16 px` border-radius to the image container via `shape="rounded"`. All size variants use the same radius value.'}}}},c={render:()=>j`
    <div
      style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-end;"
    >
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          sm — 128×128 px
        </p>
        <modus-wc-image
          src=${m}
          alt="Small"
          size="sm"
          fit="default"
        ></modus-wc-image>
      </div>
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          md — 288×192 px (default)
        </p>
        <modus-wc-image
          src=${m}
          alt="Medium"
          size="md"
          fit="default"
        ></modus-wc-image>
      </div>
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          lg — 384×256 px
        </p>
        <modus-wc-image
          src=${m}
          alt="Large"
          size="lg"
          fit="default"
        ></modus-wc-image>
      </div>
    </div>
  `,parameters:{docs:{description:{story:'\nAll available size tokens side by side (xl omitted for layout reasons — it is 1486×384 px).\nFor `fit="scale-down"` these values act as `max-width / max-height` constraints rather than fixed dimensions.\n\n| `size` | Width | Height |\n|---------|-------|--------|\n| `sm` | 128 px | 128 px |\n| `md` *(default)* | 288 px | 192 px |\n| `lg` | 384 px | 256 px |\n| `xl` | 1486 px | 384 px |\n        '}}}},p={...e,args:{alt:""},parameters:{docs:{description:{story:"When `alt` is empty or whitespace-only the image is treated as decorative: an empty `alt` attribute is set so screen readers skip it."}}}},d={...e,args:{"crop-position":"top"},parameters:{docs:{description:{story:'`crop-position` maps to CSS `object-position` and controls which part of the image stays visible when it is cropped (`fit="default"`) or letterboxed (`fit="contain"`). Defaults to `center` for backward compatibility. Use the **crop-position** control to try `top`, `bottom`, `left`, `right`, and compound values such as `top left`.\n\n**Note:** For custom offsets (e.g. percentage values), set `custom-class` and target `.modus-wc-image-img` with `object-position` in your stylesheet.'}}}},l={...e,args:{src:"https://example.com/this-image-does-not-exist.png",alt:"A missing image"},parameters:{docs:{description:{story:"When the image URL fails to load the broken image icon is hidden and a `modus-wc-icon` fallback (`image_disabled`) is rendered; the container keeps the accessible name from `alt`."}}}};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Default rendering with \`fit="default"\` and \`size="md"\` (288×192 px). The image fills the fixed box completely — non-matching aspect ratios are **cropped** equally from the center edges with no distortion.'
      }
    }
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,x,w;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    fit: 'contain'
  },
  parameters: {
    docs: {
      description: {
        story: '\`fit="contain"\` — the image scales down to fit **entirely** inside the hard-locked box while preserving its original aspect ratio. Areas not covered by the image show the background (letterbox/pillarbox effect).'
      }
    }
  }
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,b,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    fit: 'scale-down'
  },
  parameters: {
    docs: {
      description: {
        story: '\`fit="scale-down"\` — the container uses \`max-width / max-height\` from the \`size\` token instead of hard-locked dimensions. If the image is larger than the target it is scaled down proportionally; if smaller it renders at its intrinsic size. The box shrinks to fit the image.'
      }
    }
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var z,k,S;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template,
  args: {
    fit: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: '\`fit="none"\` — the image renders at its **intrinsic pixel size** with no scaling applied. The container is still hard-locked to the \`size\` token dimensions, so any part of the image that exceeds the box is clipped by \`overflow: hidden\`.'
      }
    }
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var A,T,$;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    shape: 'rounded'
  },
  parameters: {
    docs: {
      description: {
        story: 'Applies a \`16 px\` border-radius to the image container via \`shape="rounded"\`. All size variants use the same radius value.'
      }
    }
  }
}`,...($=(T=r.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var E,F,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-end;"
    >
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          sm — 128×128 px
        </p>
        <modus-wc-image
          src=\${SAMPLE_IMAGE}
          alt="Small"
          size="sm"
          fit="default"
        ></modus-wc-image>
      </div>
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          md — 288×192 px (default)
        </p>
        <modus-wc-image
          src=\${SAMPLE_IMAGE}
          alt="Medium"
          size="md"
          fit="default"
        ></modus-wc-image>
      </div>
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          lg — 384×256 px
        </p>
        <modus-wc-image
          src=\${SAMPLE_IMAGE}
          alt="Large"
          size="lg"
          fit="default"
        ></modus-wc-image>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
All available size tokens side by side (xl omitted for layout reasons — it is 1486×384 px).
For \\\`fit="scale-down"\\\` these values act as \\\`max-width / max-height\\\` constraints rather than fixed dimensions.

| \\\`size\\\` | Width | Height |
|---------|-------|--------|
| \\\`sm\\\` | 128 px | 128 px |
| \\\`md\\\` *(default)* | 288 px | 192 px |
| \\\`lg\\\` | 384 px | 256 px |
| \\\`xl\\\` | 1486 px | 384 px |
        \`
      }
    }
  }
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var D,M,_;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    alt: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`alt\` is empty or whitespace-only the image is treated as decorative: an empty \`alt\` attribute is set so screen readers skip it.'
      }
    }
  }
}`,...(_=(M=p.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var C,L,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    'crop-position': 'top'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: '`crop-position` maps to CSS `object-position` and controls which part of the image stays visible when it is cropped (`fit=\"default\"`) or letterboxed (`fit=\"contain\"`). Defaults to `center` for backward compatibility. Use the **crop-position** control to try `top`, `bottom`, `left`, `right`, and compound values such as `top left`.\\n\\n**Note:** For custom offsets (e.g. percentage values), set `custom-class` and target `.modus-wc-image-img` with `object-position` in your stylesheet.'\n      }\n    }\n  }\n}",...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var W,N,O;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  args: {
    src: 'https://example.com/this-image-does-not-exist.png',
    alt: 'A missing image'
  },
  parameters: {
    docs: {
      description: {
        story: 'When the image URL fails to load the broken image icon is hidden and a \`modus-wc-icon\` fallback (\`image_disabled\`) is rendered; the container keeps the accessible name from \`alt\`.'
      }
    }
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const Q=["Default","FitContain","FitScaleDown","FitNone","Rounded","AllSizes","DecorativeImage","CropPosition","ErrorFallback"];export{c as AllSizes,d as CropPosition,p as DecorativeImage,o as Default,l as ErrorFallback,i as FitContain,n as FitNone,a as FitScaleDown,r as Rounded,Q as __namedExportsOrder,K as default};
