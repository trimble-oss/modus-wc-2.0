# Build Scripts

Here is a diagram of the build scripts in the project.

These scripts are defined in the `package.json` file and can be run using `npm run <script-name>`.

We use [wireit](https://github.com/google/wireit) to manage the complex build scripts and tasks in the project.
This allows us to have a more modular build system with explicit dependencies and caching.

There should be no need to run the internal tasks directly, as the high-level `npm run` scripts will take care of that for you.

All scripts on the left side of the chart can be run using `npm run <script-name>`.

```mermaid
graph LR
    build --> lint_1
    build --> stencil_build
    build --> storybook_build
    build:ci --> stencil_build
    stencil_build --> tailwind_build
    stencil_build --> build_cem_json
    storybook_build --> stencil_build
    storybook_start --> stencil_watch
    stencil_watch --> build_cem_json
    stencil_watch --> tailwind_w
    format --> format_prettier
    format --> format_eslint
    lint --> lint_prettier
    lint --> lint_eslint
    start --> storybook_start
    start --> lint_2
    test --> desc1["Runs spec tests using Stencil & Jest"]
    test:coverage --> desc2["Runs Jest tests and outputs a coverage report."]
    test:update-snapshot --> desc3["Updates Jest snapshots for Stencil tests."]
    test:watch --> desc4["Watches for changes and re-runs Stencil tests."]
    clean --> desc5["Clean all build artifacts manually."]

    subgraph complex npm run scripts
        build
        build:ci
        format
        lint
        start
    end

    subgraph wireit tasks
        lint_1["`
            **lint**
        `"]
        lint_2["`
            **lint**
        `"]
        stencil_build["`
            **stencil:build**
            Builds the Stencil components for production.
        `"]
        storybook_build["`
            **storybook:build**
            Builds the Storybook static site.
        `"]
        build_cem_json["`
            **build:cem-json**
            Generates the custom-elements.json file for Stencil components.
        `"]
        stencil_watch["`
            **stencil:watch**
            Watches for changes in the Stencil components and rebuilds.
        `"]
        storybook_start["`
            **storybook:start**
            Starts Storybook in development mode.
        `"]
        tailwind_build["`
            **tailwind:build**
            Generates the Tailwind CSS files.
        `"]
        tailwind_w["`
            **tailwind:watch**
            Generates the Tailwind CSS files and watches for changes.
        `"]
        format_prettier["`
            **format:prettier**
            Formats code using Prettier.
        `"]
        format_eslint["`
            **format:eslint**
            Formats code using ESLint.
        `"]
        lint_prettier["`
            **lint:prettier**
            Lints code using Prettier.
        `"]
        lint_eslint["`
            **lint:eslint**
            Lints code using ESLint.
        `"]
    end

    subgraph simple npm run scripts
        clean
        test
        test:coverage
        test:update-snapshot
        test:watch
    end

```
