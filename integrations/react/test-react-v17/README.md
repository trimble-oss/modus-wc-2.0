# Modus React Components Test Harness - React 17

This application has been created using create-vite (React + TypeScript + Vite) and is for the purpose of testing the Modus React Components locally without having to publish the latest web components or react components to npm.

## Getting Started

Setting up this small react project relies on `npm link`. See the docs [here](https://docs.npmjs.com/cli/v10/commands/npm-link)

From inside the `/` (root folder) directory:

1. Run `npm install`
2. Run `npm run build`

Then, run `npm link` from inside the `/dist` (root dist folder) directory.

From inside the `/integrations/react/v17` directory:

1. Run `npm install`
2. Run `npm link @trimble-oss/moduswebcomponents`
3. Run `npm run build`

From inside the `/integrations/react/test-react-v17` directory:

1. Run `npm install`
3. Run `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

