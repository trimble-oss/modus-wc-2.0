# Modus React Components Test Harness - React 18

This application has been created using create-vite (React + TypeScript + Vite) and is for the purpose of testing the Modus React Components locally without having to publish the latest web components or react components to npm.

## Getting Started

Setting up this small react project relies on `npm link`. See the docs [here](https://docs.npmjs.com/cli/v10/commands/npm-link)

From inside the `/` (root stencil) directory:

1. Run `npm install`
2. Run `npm run build`
3. Run `npm link`

From inside the `/integrations/react/v18` directory:

1. Run `npm install`
2. Run `npm run build`
3. Run `npm link @trimble-cms/modus-wc`

From inside the `/integrations/react/test-react-v18` directory:

1. Run `npm install`
3. Run `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

