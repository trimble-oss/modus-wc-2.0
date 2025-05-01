# Modus Web Components

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/trimble-oss/moduswebcomponents/main/LICENSE)
[![npm Version](https://img.shields.io/npm/v/@trimble-oss/moduswebcomponents)](https://www.npmjs.com/package/@trimble-oss/moduswebcomponents)
[![npm Downloads](https://img.shields.io/npm/dt/@trimble-oss/moduswebcomponents.svg)](https://www.npmjs.com/package/@trimble-oss/moduswebcomponents)

A lightweight, flexible web component library built for enterprise applications. Create consistent, accessible, and beautiful user interfaces using framework-agnostic web components.

## Features

- **Framework Agnostic** - Works with React, Angular, Vue, or plain HTML/JS
- **Enterprise Ready** - Built for scalability, accessibility, and performance
- **Customizable** - Easy theming and styling options
- **Modern UI** - Follows contemporary design patterns and best practices

## Installation

### npm

```bash
npm install @trimble-oss/moduswebcomponents
```

## Basic Usage

Import components where needed:

```javascript
import '@trimble-oss/moduswebcomponents';
```

```html
<!-- Add components to your HTML -->
<modus-wc-button color="primary" aria-label="Example button"
  >Click Me</modus-wc-button
>
```

## Documentation

- [Build Scripts](./docs/build-scripts.md)
- [Component Documentation](https://trimble-oss.github.io/modus-wc-2.0/main)
- [Considerations](./docs/considerations.md)
- [Custom Themes](./docs/custom-themes.md)
- [Project Design](./docs/project-design.md)
- [Responsive Design](./docs/responsive-design.md)

## For Developers

### Getting Started

1. Clone the repository
2. `npm install`
3. `npm start` to start a development version of Stencil and Storybook

### Building

`npm run build` to build the component library & storybook for production.

### Linting & Formatting

`npm run format` to format your code using Prettier and ESlint.

`npm run lint` to check your code for linting errors.

### Testing

`npm test` to run the test suite.

There is also:

- `npm run test:coverage` - Check the code coverage of our unit tests.
- `npm run test:update-snapshot` - Update the snapshot tests if you've changed a component.
- `npm run test:watch` - Watches for changes and re-runs unit tests.

### Release

On PR creation and merge to `main` the "Publish Storybook" action will automatically run. Once complete, a comment will be added to the PR with a link to a hosted Storybook page.

## Contributing

Please read the [CONTRIBUTING](./CONTRIBUTING.md) doc for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
