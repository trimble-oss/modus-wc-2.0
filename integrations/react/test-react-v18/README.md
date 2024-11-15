# Modus React Components Test Harness - React 18

This application has been created using create-vite (React + TypeScript + SWC + Vite) and is for the purpose of testing the Modus React Components locally without having to publish the latest web components or react components to npm.

## Getting Started

Setting up this small react project relies on `npm link`. See the docs [here](https://docs.npmjs.com/cli/v10/commands/npm-link)

From inside the `./stencil-workspace` directory:

1. Run `npm install`
2. Run `npm run build`
3. Run `npm link`

From inside the `./react-workspace/react-18` directory:

1. Run `npm install`
2. Run `npm run build`
3. Run `npm link`

From inside the `./react-workspace/test-react-v18` directory:

1. Run `npm install`
2. Run `npm link @trimble-cms/modus-wc @trimble-cms/modus-wc-react`
3. Run `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Examples

Examples for the React components can be found under `./src/examples` and can be used in `App.tsx`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
