
```mermaid
graph TD
    build --> stencil-build
    build --> storybook-build
    dev --> storybook-start
    format --> format-prettier
    format --> format-eslint
    lint --> lint-eslint
    lint --> lint-prettier
    stencil-build --> build-custom-elements-json
    stencil-build --> tailwind
    stencil-watch --> build-custom-elements-json
    stencil-watch --> tailwind
    storybook-build --> stencil-build
    storybook-start --> stencil-watch
```