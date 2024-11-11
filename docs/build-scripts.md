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
    stencil_build --> core_tasks
    storybook_build --> stencil_build
    storybook_start --> stencil_watch
    stencil_watch --> core_tasks
    format --> format_prettier
    format --> format_eslint
    lint --> lint_prettier
    lint --> lint_eslint
    start --> storybook_start
    start --> lint_2
    clean --> desc0["Clean all build artifacts manually."]
    stencil:generate --> desc1["Starts the interactive generator for a new Stencil component."]
    test --> desc2["Runs spec tests using Stencil & Jest"]
    test:coverage --> desc3["Runs Jest tests and outputs a coverage report."]
    test:update-snapshot --> desc4["Updates Jest snapshots for Stencil tests."]
    test:watch --> desc5["Watches for changes and re-runs Stencil tests."]

    subgraph complex npm run scripts
        build
        build:ci
        format
        lint
        start
    end

    subgraph wireit tasks

        subgraph core_tasks["core tasks"]
            tailwind
            build_cem_json
        end

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
        tailwind["`
            **tailwind**
            Generates the Tailwind CSS files.
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
        stencil:generate
        test
        test:coverage
        test:update-snapshot
        test:watch
    end

```
