# Contributing

---

## Table of Contents

- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Submitting Issues](#submitting-issues)
- [Technologies](#technologies)
- [Running Locally](#running-locally)
- [Developing a Component](#developing-a-component)
- [Style Guide](#style-guide)
- [Testing](#testing)
- [Making Changes and Submitting a PR](#making-changes-and-submitting-a-pr)
- [Changelog](#changelog)
- [Releasing Framework Outputs](#releasing-framework-outputs)

## Dependencies

- Node (>= v16)
- npm CLI (>= v7)

## Getting Started

### Before you get started

Before you get started we STRONGLY recommend that you save yourself a lot of time by scheduling a pre-design.
Our PRs that had a predesign went smoothly and the ones that didn’t had lots of changes. Please schedule the predesign.
You can request a predesign session in the [Modus Web Components chat group](https://mail.google.com/chat/u/0/#chat/space/AAAAQFpPtIY)

To prepare for the predesign session please:

- Bring your link to the approved Modus Figma designs (we only contribute Figma approved components)
- Bring documentation on the component

### Running the App

Refer to our [README](./README.md) on running the app and [build scripts](./docs/build-scripts.md) for more information on how our scripts work.

To get this application up and running locally, there are just two commands needed:

- Run `npm install`
- Run `npm start`

### Implementation

Stencil web component implementation details can be found in their [Framework Integration Docs](https://stenciljs.com/docs/overview).

## Submitting Issues

Whether you're contributing directly to the code or have suggestions, submitting an issue through GitHub is needed
for referencing changes. Please submit change items as an Issue [here](https://github.com/trimble-oss/modus-web-components/issues).

If the issue's considered a bug, add the 'bug' label to the issue.

Also add a priority level label to the issue. The priority options are low, medium, and high.
If you are unsure of its priority, reach out to one of the developers for their opinion.

**[Modus core team](https://github.com/orgs/trimble-oss/teams/modus-maintainers) will be looking at the open issues, analyze them, and provide guidance on how to proceed.** Contributors are welcome to participate in the discussion and provide their input on how to best solve the issue, and even submit a PR if they want to.
**Please wait until the issue is ready to be worked on before submitting a PR, or you can reach out to the core team if it is time bound.** For trivial things, or bugs that don't change the expected behaviors and UI, you can go ahead and make a PR.

## Technologies

- [DaisyUI](https://daisyui.com/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [npm](https://docs.npmjs.com/getting-started)
- [rollup.js](https://rollupjs.org/)
- [Prettier](https://prettier.io/)
- [Stencil](https://stenciljs.com/)
- [Storybook](https://storybook.js.org/)
- [Sass](https://sass-lang.com/)
- [Tailwind](https://tailwindcss.com/)

### Stencil

Stencil is a web component compiler. Web components is a suite of JavaScript technologies that let you register a component
directly with the browser. This means that the component can be used in any web application. It comes packed with a dev server
and live re-rendering. We are using it to build out the components.

### Storybook

Storybook is a tool for developing components in isolation. It also provides a framework for developing component library
documentation sites. We are using it to document our components.

## Developing a Component

Before starting development on a component, we suggest first reading the guidelines in our [project design](./docs/project-design.md#component-development) documentation.

Refer to our [custom themes](./docs/custom-themes.md) doc on how to add additional themes.

Refer to our [response design](./docs/responsive-design.md) doc on how to create components with responsive designs.

We use JSDoc comments for each component to auto-generate documentation for Storybook. Ensure that you add appropriate JSDoc comments to your component's properties, methods, and events.

## Style Guide

This project follows [Modus Styleguide](https://modus.trimble.com/) for UX guidelines and uses [Stencil's Style Guide](https://stenciljs.com/docs/style-guide) for how to structure the code components.

When submitting or reviewing contributions to the Modus Web Components library (MWC), it is important to keep code quality in mind.
Check out the [Considerations](docs/considerations.md) doc for more information.

### Testing

Each component must have unit tests with 100% code coverage. You can check code coverage by running `npm run test:coverage`.

Unit tests focus on testing a component's methods and properties in isolation. For example, when a method is given the argument X, it should return Y. To create a new instance of the component and test its behavior, we use the `newSpecPage` function from Stencil's testing utilities.

We also use snapshots for unit testing to ensure the component's output remains consistent. If you make changes to a component that affect how it's rendered, you will need to update the snapshots by running `npm run test:update-snapshot`.

For more information about Stencil's testing, check out the testing docs [here](https://stenciljs.com/docs/testing-overview).

For more information about Jest snapshot testing, check out the docs [here](https://jestjs.io/docs/snapshot-testing).

## Making Changes and Submitting a PR

1. Before working on an issue, the repository should be forked with intent to contribute to the parent repository.
2. Branch from your fork using the naming convention `issue-{#}/{description}`. For example, `issue-123/my-bug-fix`.
3. Make your changes. Be sure to update or add relevant tests!
4. Run `npm run lint`, `npm run build`, and `npm run test`. If all is well, continue.
5. If there is any change to the library's API, update the Storybook documentation under `./storybook/stories`.
   - To run the Storybook site, `cd` into the directory and run `npm run storybook`. The library build will need to be up to date. The changes to the site will be deployed upon the PR merge to `main`.
6. Once all of your changes have been made, squash your commits down to a singular commit with a relevant message.
   - If you prefer to do this with a GUI, GitHub Desktop has a [great squashing feature](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/squashing-commits).
7. Submit your PR with your branch as the `head`, and the `@trimble-oss/modus-web-components` `main` branch as the `base`.
   - Don't forget to link your relevant issue in the PR description.

## Changelog

The release notes can be viewed on the [GitHub Releases](https://github.com/Trimble-Construction/modus-wc-2.0/releases) page.

### Semantic Versioning

This project uses the following semantic versioning convention for the repository and changelog entries.
Given a version number [MAJOR.MINOR.PATCH], increment the following:

1. Major: to make incompatible API changes - updates containing new dependencies.
2. Minor: to add functionality in a backwards compatible manner.
3. Patch: to make backwards compatible bug fixes.
   Example: Version 1.0.0 has a function added in accordance with a minor version update. The new version will be 1.1.0.
   See: [semver.org](https://semver.org/spec/v2.0.0.html).

## Releasing

New versions of the Modus Web Components library are published via automated GitHub action workflows.

See our [RELEASING](./RELEASING.md) doc for more details on our automated release and publish workflows.

Modus 2.0 only supports the two latest versions of React and Angular framework integrations.
