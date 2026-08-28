import{w as q}from"./decorator-Cv9na35H.js";import{b as _}from"./lit-element-DgBvYnzn.js";import{o as s}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const l="https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg",U={title:"Components/Image",component:"modus-wc-image",args:{src:l,alt:"A zebra drinks from a pond",fit:"default",shape:"square",size:"md"},argTypes:{fit:{control:{type:"select"},options:["default","contain","scale-down","none"]},shape:{control:{type:"select"},options:["square","rounded"]},size:{control:{type:"select"},options:["sm","md","lg","xl"]}},decorators:[q],parameters:{actions:{handles:["imageLoad","imageError"]},docs:{description:{component:"\nA resilient atomic image component wrapping the native `<img>` tag with consistent sizing tokens,\naspect-ratio control, an accessible error fallback, and WCAG 2.2 compliance."}}}},e={render:t=>_`
    <modus-wc-image
      src=${t.src}
      alt=${s(t.alt)}
      size=${s(t.size)}
      shape=${s(t.shape)}
      fit=${s(t.fit)}
      custom-class=${s(t["custom-class"])}
    ></modus-wc-image>
  `},a={...e,parameters:{docs:{description:{story:'Default rendering with `fit="default"` and `size="md"` (288×192 px). The image fills the fixed box completely — non-matching aspect ratios are **cropped** equally from the center edges with no distortion.'}}}},i={...e,args:{fit:"contain"},parameters:{docs:{description:{story:'`fit="contain"` — the image scales down to fit **entirely** inside the hard-locked box while preserving its original aspect ratio. Areas not covered by the image show the background (letterbox/pillarbox effect).'}}}},n={...e,args:{fit:"scale-down"},parameters:{docs:{description:{story:'`fit="scale-down"` — the container uses `max-width / max-height` from the `size` token instead of hard-locked dimensions. If the image is larger than the target it is scaled down proportionally; if smaller it renders at its intrinsic size. The box shrinks to fit the image.'}}}},r={...e,args:{fit:"none"},parameters:{docs:{description:{story:'`fit="none"` — the image renders at its **intrinsic pixel size** with no scaling applied. The container is still hard-locked to the `size` token dimensions, so any part of the image that exceeds the box is clipped by `overflow: hidden`.'}}}},o={...e,args:{shape:"rounded"},parameters:{docs:{description:{story:'Applies a `16 px` border-radius to the image container via `shape="rounded"`. All size variants use the same radius value.'}}}},d={render:()=>_`
    <div
      style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-end;"
    >
      <div>
        <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600;">
          sm — 128×128 px
        </p>
        <modus-wc-image
          src=${l}
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
          src=${l}
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
          src=${l}
          alt="Large"
          size="lg"
          fit="default"
        ></modus-wc-image>
      </div>
    </div>
  `,parameters:{docs:{description:{story:'\nAll available size tokens side by side (xl omitted for layout reasons — it is 1486×384 px).\nFor `fit="scale-down"` these values act as `max-width / max-height` constraints rather than fixed dimensions.\n\n| `size` | Width | Height |\n|---------|-------|--------|\n| `sm` | 128 px | 128 px |\n| `md` *(default)* | 288 px | 192 px |\n| `lg` | 384 px | 256 px |\n| `xl` | 1486 px | 384 px |\n        '}}}},c={...e,args:{alt:""},parameters:{docs:{description:{story:'When `alt` is empty the image is treated as decorative: `role="presentation"` and `aria-hidden="true"` are applied so screen readers skip it.'}}}},p={...e,args:{src:"https://example.com/this-image-does-not-exist.png",alt:"A missing image"},parameters:{docs:{description:{story:"When the image URL fails to load the broken image icon is hidden and an accessible SVG placeholder is rendered."}}}};var m,h,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'Default rendering with \`fit="default"\` and \`size="md"\` (288×192 px). The image fills the fixed box completely — non-matching aspect ratios are **cropped** equally from the center edges with no distortion.'
      }
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,u,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var w,y,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var z,b,k;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var A,S,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,$,F;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=($=d.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var M,I,L;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    alt: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`alt\` is empty the image is treated as decorative: \`role="presentation"\` and \`aria-hidden="true"\` are applied so screen readers skip it.'
      }
    }
  }
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var D,G,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    src: 'https://example.com/this-image-does-not-exist.png',
    alt: 'A missing image'
  },
  parameters: {
    docs: {
      description: {
        story: 'When the image URL fails to load the broken image icon is hidden and an accessible SVG placeholder is rendered.'
      }
    }
  }
}`,...(W=(G=p.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const V=["Default","FitContain","FitScaleDown","FitNone","Rounded","AllSizes","DecorativeImage","ErrorFallback"];export{d as AllSizes,c as DecorativeImage,a as Default,p as ErrorFallback,i as FitContain,r as FitNone,n as FitScaleDown,o as Rounded,V as __namedExportsOrder,U as default};
