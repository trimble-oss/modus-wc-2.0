import{w as p}from"./decorator-Cv9na35H.js";import{b as l}from"./lit-element-DgBvYnzn.js";import{o as a}from"./if-defined-BnVFTJ4o.js";import"./chunk-4XZ63LWV-C_wAuwg_.js";import"./v4-C6aID195.js";const i=[{src:"https://news.trimble.com/file.php/178313/%5BCFS%5D+Viewing+3D+models+on+site+in+augmented+reality.jpg?thumbnail=modal",alt:"Viewing 3D models on site in augmented reality"},{src:"https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4fdlIWCc7WJCGm2DH3KErp%2Fcf92ca036ce00501c67ee4c897c9e802%2Findustry-solutions-utilities-r2-electric-1280x704.jpg%3Ff%3Dright&w=828&q=80",alt:"Utilities industry solutions with R2 electric equipment"},{src:"https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F2l678flQCv7FTIPRREpHpo%2Fed5eba100e1f4f2519963101e47e06de%2Findustry-solutions-geospatial-r12i-tsc7-1280x704.jpg%3Ff%3Dcenter&w=828&q=80",alt:"Geospatial industry solutions with R12i and TSC7"},{src:"https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4vmvFNmvbLZ7WYzAy9TVEU%2F048f8db7b63f61032ab28236f0d59589%2Findustries-government-geo-631x354-050125.jpg%3Ff%3Dcenter&w=828&q=80",alt:"Government geospatial industry solutions"}],u=e=>Array.isArray(e)&&e.length>0?e:[],d=`
<modus-wc-image-grid
  aria-label="Product image gallery"
  image-shape="rectangle"
  images-per-view="4"
  id="image-grid"
></modus-wc-image-grid>

<script>
  const images = [
    {
      src: 'https://news.trimble.com/file.php/178313/%5BCFS%5D+Viewing+3D+models+on+site+in+augmented+reality.jpg?thumbnail=modal',
      alt: 'Viewing 3D models on site in augmented reality',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4fdlIWCc7WJCGm2DH3KErp%2Fcf92ca036ce00501c67ee4c897c9e802%2Findustry-solutions-utilities-r2-electric-1280x704.jpg%3Ff%3Dright&w=828&q=80',
      alt: 'Utilities industry solutions with R2 electric equipment',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F2l678flQCv7FTIPRREpHpo%2Fed5eba100e1f4f2519963101e47e06de%2Findustry-solutions-geospatial-r12i-tsc7-1280x704.jpg%3Ff%3Dcenter&w=828&q=80',
      alt: 'Geospatial industry solutions with R12i and TSC7',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4vmvFNmvbLZ7WYzAy9TVEU%2F048f8db7b63f61032ab28236f0d59589%2Findustries-government-geo-631x354-050125.jpg%3Ff%3Dcenter&w=828&q=80',
      alt: 'Government geospatial industry solutions',
    },
  ];
  const imageGrid = document.getElementById('image-grid');
  imageGrid.images = images;

  imageGrid.addEventListener('imageLoad', (event) => {
    const image = event.target;
    if (image.tagName === 'MODUS-WC-IMAGE') {
      console.log('Image loaded', image.src);
    }
  });

  imageGrid.addEventListener('imageError', (event) => {
    const image = event.target;
    if (image.tagName === 'MODUS-WC-IMAGE') {
      console.log('Image failed to load', image.src);
    }
  });
<\/script>
`,w=`
<div style="display: flex; flex-direction: column; gap: 48px;">
  <section>
    <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
    <modus-wc-image-grid
      aria-label="Four rectangle product images"
      image-shape="rectangle"
      images-per-view="4"
      id="image-grid-rectangle-four"
    ></modus-wc-image-grid>
  </section>
  <section>
    <h3 style="margin: 0 0 16px;">4 images — square</h3>
    <modus-wc-image-grid
      aria-label="Four square product images"
      image-shape="square"
      images-per-view="4"
      id="image-grid-square-four"
    ></modus-wc-image-grid>
  </section>
  <section>
    <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
    <modus-wc-image-grid
      aria-label="Three rectangle product images"
      image-shape="rectangle"
      images-per-view="3"
      id="image-grid-rectangle-three"
    ></modus-wc-image-grid>
  </section>
  <section>
    <h3 style="margin: 0 0 16px;">2 images — square</h3>
    <modus-wc-image-grid
      aria-label="Two square product images"
      image-shape="square"
      images-per-view="2"
      id="image-grid-square-two"
    ></modus-wc-image-grid>
  </section>
  <section>
    <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
    <modus-wc-image-grid
      aria-label="Single rectangle product image"
      image-shape="rectangle"
      images-per-view="1"
      id="image-grid-rectangle-one"
    ></modus-wc-image-grid>
  </section>
</div>

<script>
  const images = [
    {
      src: 'https://news.trimble.com/file.php/178313/%5BCFS%5D+Viewing+3D+models+on+site+in+augmented+reality.jpg?thumbnail=modal',
      alt: 'Viewing 3D models on site in augmented reality',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4fdlIWCc7WJCGm2DH3KErp%2Fcf92ca036ce00501c67ee4c897c9e802%2Findustry-solutions-utilities-r2-electric-1280x704.jpg%3Ff%3Dright&w=828&q=80',
      alt: 'Utilities industry solutions with R2 electric equipment',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F2l678flQCv7FTIPRREpHpo%2Fed5eba100e1f4f2519963101e47e06de%2Findustry-solutions-geospatial-r12i-tsc7-1280x704.jpg%3Ff%3Dcenter&w=828&q=80',
      alt: 'Geospatial industry solutions with R12i and TSC7',
    },
    {
      src: 'https://www.trimble.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fcitn2sn5tdjr%2F4vmvFNmvbLZ7WYzAy9TVEU%2F048f8db7b63f61032ab28236f0d59589%2Findustries-government-geo-631x354-050125.jpg%3Ff%3Dcenter&w=828&q=80',
      alt: 'Government geospatial industry solutions',
    },
  ];

  document.getElementById('image-grid-rectangle-four').images = images;
  document.getElementById('image-grid-square-four').images = images;
  document.getElementById('image-grid-rectangle-three').images = images;
  document.getElementById('image-grid-square-two').images = images;
  document.getElementById('image-grid-rectangle-one').images = [images[0]];
<\/script>
`,x={title:"Components/Image Grid",component:"modus-wc-image-grid",args:{images:i,"aria-label":"Product image gallery","image-shape":"rectangle","images-per-view":4},argTypes:{images:{control:"object",description:"Images to display in the grid",table:{type:{detail:`
            Interface: IImageGridImage
            Properties:
            - src (string): The source URL of the image asset
            - alt (string, optional): Accessible text description for the image
            - shape ('square' | 'rounded', optional): Corner radius styling
            - fit ('default' | 'contain' | 'scale-down' | 'none', optional): Containment and cropping behavior
            - cropPosition (string, optional): Focal point when cropped (maps to object-position)
            - customClass (string, optional): Additional CSS class for the cell image container
          `}}},"aria-label":{table:{category:"attributes"}},"image-shape":{control:{type:"select"},options:["rectangle","square"],table:{category:"attributes"}},"images-per-view":{control:{type:"select"},options:[1,2,3,4],table:{category:"attributes"}},"custom-class":{table:{category:"attributes"}}},decorators:[p],parameters:{layout:"padded",actions:{handles:["imageLoad","imageError"]},docs:{description:{component:"\nResponsive image grid that displays 1 to 4 images in rectangle or square layouts.\nEach cell uses `modus-wc-image` for cropping, rounded corners, and error fallback.\n\nPer-image `size` is not part of `IImageGridImage`: grid layout CSS fills each cell and overrides `modus-wc-image` dimensional size tokens."}}}},h={parameters:{docs:{source:{code:d}}},render:e=>l`
    <modus-wc-image-grid
      aria-label=${a(e["aria-label"])}
      .images=${u(e.images)}
      image-shape=${a(e["image-shape"])}
      images-per-view=${a(e["images-per-view"])}
      custom-class=${a(e["custom-class"])}
    ></modus-wc-image-grid>
  `},t={...h,args:{images:i,"aria-label":"Product image gallery","image-shape":"rectangle","images-per-view":4},parameters:{docs:{source:{code:d},description:{story:"Default layout: four rectangle images in a 2×2 grid with 24px gap and 16px corner radius."}}}},s={render:()=>l`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          aria-label="Four rectangle product images"
          .images=${i}
          image-shape="rectangle"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          aria-label="Four square product images"
          .images=${i}
          image-shape="square"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          aria-label="Three rectangle product images"
          .images=${i}
          image-shape="rectangle"
          images-per-view="3"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          aria-label="Two square product images"
          .images=${i}
          image-shape="square"
          images-per-view="2"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          aria-label="Single rectangle product image"
          .images=${[i[0]]}
          image-shape="rectangle"
          images-per-view="1"
        ></modus-wc-image-grid>
      </section>
    </div>
  `,parameters:{docs:{source:{code:w},description:{story:"All layout variants from the Figma ImageGrid design."}}}};var r,n,g;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template,
  args: {
    images: SAMPLE_IMAGES,
    'aria-label': 'Product image gallery',
    'image-shape': 'rectangle',
    'images-per-view': 4
  },
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
}`,...(g=(n=t.parameters)==null?void 0:n.docs)==null?void 0:g.source}}};var m,o,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <section>
        <h3 style="margin: 0 0 16px;">4 images — rectangle</h3>
        <modus-wc-image-grid
          aria-label="Four rectangle product images"
          .images=\${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">4 images — square</h3>
        <modus-wc-image-grid
          aria-label="Four square product images"
          .images=\${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="4"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">3 images — rectangle</h3>
        <modus-wc-image-grid
          aria-label="Three rectangle product images"
          .images=\${SAMPLE_IMAGES}
          image-shape="rectangle"
          images-per-view="3"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">2 images — square</h3>
        <modus-wc-image-grid
          aria-label="Two square product images"
          .images=\${SAMPLE_IMAGES}
          image-shape="square"
          images-per-view="2"
        ></modus-wc-image-grid>
      </section>
      <section>
        <h3 style="margin: 0 0 16px;">1 image — rectangle</h3>
        <modus-wc-image-grid
          aria-label="Single rectangle product image"
          .images=\${[SAMPLE_IMAGES[0]]}
          image-shape="rectangle"
          images-per-view="1"
        ></modus-wc-image-grid>
      </section>
    </div>
  \`,
  parameters: {
    docs: {
      source: {
        code: allVariantsSourceCode
      },
      description: {
        story: 'All layout variants from the Figma ImageGrid design.'
      }
    }
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const q=["Default","AllVariants"];export{s as AllVariants,t as Default,q as __namedExportsOrder,x as default};
