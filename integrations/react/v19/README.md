# Modus React Components

## About

This is a React wrapper library for Modus Web Components 2.0 and the components were programmatically generated using the [Stencil](https://stenciljs.com/docs/react) for React [v19.1](https://github.com/facebook/react/blob/main/CHANGELOG.md#1910-march-28-2025).

## Installation

Install the Modus React Components Library using npm:
```bash
npm install @trimble-oss/moduswebcomponents-react@<latest-version>-react<target-version>
# e.g.,
npm install @trimble-oss/moduswebcomponents-react@1.0.0-react19
```

Import our styling in your main JavaScript or CSS file:

```javascript
import "@trimble-oss/moduswebcomponents/modus-wc-styles.css";
```

## Example Usage

You can use the components as you would any other React component.

- Use a Modus Button in your `App.tsx`

  ```html
  <ModusWcButton color="primary">Primary Button</ModusWcButton>
  ```

## Usage Notes

If you are using [Vite](https://vite.dev/), you cannot use [plugin-react-swc](https://www.npmjs.com/package/@vitejs/plugin-react-swc) with this library. You will need to use the [default Vite React plugin](https://www.npmjs.com/package/@vitejs/plugin-react). This is due to parts of the plugin being unimplemented on the SWC side, and will fail for production builds.