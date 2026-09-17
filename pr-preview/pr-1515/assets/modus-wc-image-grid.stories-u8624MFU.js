import{b as d}from"./lit-element-DgBvYnzn.js";import{o as t}from"./if-defined-BnVFTJ4o.js";const s="https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg",e=[{src:s,alt:"Zebra at a watering hole"},{src:s,alt:"Zebra at a watering hole"},{src:s,alt:"Zebra at a watering hole"},{src:s,alt:"Zebra at a watering hole"}],l=`
<modus-wc-image-grid
  image-shape="rectangle"
  images-per-view="4"
  id="image-grid"
></modus-wc-image-grid>

<script>
  const images = [
    { src: 'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg', alt: 'Zebra at a watering hole' },
    { src: 'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg', alt: 'Zebra at a watering hole' },
    { src: 'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg', alt: 'Zebra at a watering hole' },
    { src: 'https://images.pexels.com/photos/5146774/pexels-photo-5146774.jpeg', alt: 'Zebra at a watering hole' },
  ];
  const imageGrid = document.getElementById('image-grid');
  imageGrid.images = images;
<\/script>
`,x={title:"Components/Image Grid",component:"modus-wc-image-grid",args:{images:e,"image-shape":"rectangle","images-per-view":4},argTypes:{images:{description:"Images to display in the grid",table:{type:{detail:`
            Interface: IImageGridImage
            Properties:
            - src (string): The source URL of the image asset
            - alt (string, optional): Accessible text description for the image
          `}}},"image-shape":{control:{type:"select"},options:["rectangle","square"],table:{category:"attributes"}},"images-per-view":{control:{type:"select"},options:[1,2,3,4],table:{category:"attributes"}},"custom-class":{table:{category:"attributes"}}},parameters:{docs:{description:{component:"\nResponsive image grid that displays 1 to 4 images in rectangle or square layouts.\nEach cell uses `modus-wc-image` for cropping, rounded corners, and error fallback."}}}},u={parameters:{docs:{source:{code:l}}},render:a=>d`
    <modus-wc-image-grid
      .images=${a.images}
      image-shape=${t(a["image-shape"])}
      images-per-view=${t(a["images-per-view"])}
      custom-class=${t(a["custom-class"])}
    ></modus-wc-image-grid>
  `},i={...u,parameters:{docs:{source:{code:l},description:{story:"Default layout: four rectangle images in a 2×2 grid with 24px gap and 16px corner radius."}}}},r={render:()=>d`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="rectangle"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="square"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="rectangle"
          images-per-view="3"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          .images=${e}
          image-shape="square"
          images-per-view="2"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          .images=${[e[0]]}
          image-shape="rectangle"
          images-per-view="1"
        ></modus-wc-image-grid>
      </section>
    </div>
  `,parameters:{docs:{description:{story:"All layout variants from the Figma ImageGrid design."}}}};var g,o,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  parameters: {
    docs: {
      source: {
        code: defaultSourceCode
      },
      description: {
        story: 'Default layout: four rectangle images in a 2×2 grid with 24px gap and 16px corner radius.'
      }
    }
  }
}`,...(m=(o=i.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="3"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          .images=\${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="2"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          .images=\${[SAMPLE_IMAGES[0]]}
          image-shape="rectangle"
          images-per-view="1"
        ></modus-wc-image-grid>
      </section>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'All layout variants from the Figma ImageGrid design.'
      }
    }
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const y=["Default","AllVariants"];export{r as AllVariants,i as Default,y as __namedExportsOrder,x as default};
