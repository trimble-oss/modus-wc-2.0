# Modus Web Components 2.0

This is a web component library built with Stencil JS and SASS for large enterprise applications, using the prefix "modus-wc".

## Getting Started

1. Clone the repository
2. `npm install`
3. `npm start` to start a development version of Stencil and Storybook

## Building

`npm run build` to build the component library & storybook for production.

## Linting & Formatting

`npm run format` to format your code using Prettier and ESlint.

`npm run lint` to check your code for linting errors.

## Testing

`npm test` to run the test suite.

There is also:

- `npm run test:coverage` - Check the code coverage of our unit tests.
- `npm run test:update-snapshot` - Update the snapshot tests if you've changed a component.
- `npm run test:watch` - Watches for changes and re-runs unit tests.

## Usage

To use a component in your project, import it and use it with the "modus-wc" prefix:

```html
<modus-wc-button label="Click me"></modus-wc-button>
```

## Documentation

For more detailed documentation on topics like custom theming and project design, please check the [docs](./docs) folder.

## Contributing

Please read the [CONTRIBUTING](./CONTRIBUTING.md) doc for details on our code of conduct, and the process for submitting pull requests.

## Release

On PR creation and merge to `main` the "Publish Storybook" action will automatically run. Once complete, a comment will be added to the PR with a link to a hosted Storybook page.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
