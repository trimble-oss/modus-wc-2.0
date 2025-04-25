## Table of Contents

1. [Code Structure and Organization](#code-structure-and-organization)
2. [Coding Standards](#coding-standards)
3. [Version Control and Collaboration](#version-control-and-collaboration)
4. [Testing and Quality Assurance](#testing-and-quality-assurance)
5. [Documentation and Comments](#documentation-and-comments)

### Component Organization

- Each component should have its own directory.
- Directory should contain:
  - Component file (e.g., `modus-wc-select.tsx`).
  - Styles file (e.g., `modus-wc-select.scss`).
  - Test file (e.g., `modus-wc-select.spec.ts`).
  - Storybook file (e.g., `modus-wc-select.stories.ts`).
  - README file (e.g., `README.md`).

### Folder Structure

```
modus-wc-2.0/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── modus-wc-avatar/
│   │   │   │   ├── modus-wc-avatar.tsx
│   │   │   │   ├── modus-wc-avatar.scss
│   │   │   │   ├── modus-wc-avatar.spec.ts
│   │   │   │   ├── modus-wc-avatar.stories.ts
│   │   │   │   ├── modus-wc-avatar.tailwind.ts
│   │   │   │   ├── readme.md
│   │   │   ├── modus-wc-button/
│   │   │   │   ├── modus-wc-button.tsx
│   │   │   │   ├── modus-wc-button.scss
│   │   │   │   ├── modus-wc-button.spec.ts
│   │   │   │   ├── modus-wc-button.stories.ts
│   │   │   │   ├── modus-wc-button.tailwind.ts
│   │   │   │   ├── readme.md
│   │   ├── molecules/
│   │   │   ├── modus-wc-accordion/
│   │   │   │   ├── modus-wc-accordion.tsx
│   │   │   │   ├── modus-wc-accordion.scss
│   │   │   │   ├── modus-wc-accordion.spec.ts
│   │   │   │   ├── modus-wc-accordion.stories.ts
│   │   │   │   ├── modus-wc-accordion.tailwind.ts
│   │   │   │   ├── readme.md
│   │   ├── organisms/
│   │   │   ├── modus-wc-table/
│   │   │   │   ├── modus-wc-table.tsx
│   │   │   │   ├── modus-wc-table.css
│   │   │   │   ├── modus-wc-table.spec.ts
│   │   │   │   ├── modus-wc-table.stories.ts
│   │   │   │   ├── modus-wc-table.tailwind.ts
│   │   │   │   ├── readme.md
│   ├── providers/
│   │   ├── theme/
│   │   │   ├── theme-provider.tsx
│   │   │   ├── theme.types.ts
│   ├── styles/
│   │   ├── themes/
│   │   │   ├── common.ts
│   │   │   ├── modus-classic.ts
│   │   │   ├── modus-modern.ts
│   ├── stories/
│   │   ├── custom-styling.mdx
│   │   ├── getting-started.mdx
│   │   ├── modus-icon-usage.mdx
│   │   ├── frameworks/
│   │   │   ├── angular.mdx
│   │   │   ├── react.mdx
│   ├── custom-elements.json
│   ├── types.ts
│   ├── utils.ts
├── package.json
├── tsconfig.json
├── README.md
```

### Code Guidelines

#### Code Structure and Organization

1. **Component Structure**:

   - Each component should be self-contained with its own HTML, CSS, and JS/TS files.
   - Use meaningful and descriptive names for components and their files.
   - Organize components in a hierarchical folder structure that reflects their relationships and dependencies.

2. **File Naming Conventions**:

   - Use kebab-case for file names (e.g., `modus-wc-text-input.ts`).
   - Ensure file names are descriptive of their content and purpose.

3. **Component Registration**:
   - Register custom elements using the `customElements.define` method.
   - Ensure the tag name follows the pattern `modus-wc-*` for consistency.

#### Coding Standards

1. **TypeScript Usage**:

   - Prefer TypeScript over JavaScript for type safety and better tooling support.
   - Define types and interfaces for component properties and events.

2. **Property Definitions**:

   - Use the `@Prop` decorator to define component properties.
   - Provide default values for properties where applicable.
   - Use appropriate types for properties (e.g., `string`, `boolean`, `number`).
   - Use `!` for defining important in props. (e.g., `@Prop() alt!: string`)

3. **Event Emission**:

   - Use the `@Event` decorator to define custom events.
   - Name events using camelCase (e.g., `inputBlur`, `inputChange`).
   - Emit events using the `this.emit` method.

4. **CSS Styling**:

   - Use scoped CSS to avoid conflicts with other components.
   - Use CSS variables for styling (eg. `--modus-wc-color-green-dark`). If a CSS value is being repeated, consider creating a new CSS variable or set of them(eg. `--modus-wc-font-size-xs`).
   - Follow a consistent naming convention for CSS classes (e.g., `modus-wc-text-input__label`).
   - Use DaisyUI classes whenever possible via tailwind typescripts (e.g, `modus-wc-avatar.tailwind.ts`).
   - Use `&:hover {}` in the theme block instead of `:hover` pseudo-class where applicable.
   - Use `margin-inline-start` and `margin-inline-end` instead of `margin-left` and `margin-right` for better compatibility with bidirectional (LTR/RTL) layouts.

5. **Consistent Code Style**:

   - Follow a consistent code style throughout the codebase. Use tools like Prettier and ESLint to enforce code style rules.
   - Use single quotes for strings, and ensure proper indentation and spacing.
   - Add blank lines between styling blocks for readability and consistency.

6. **Error Handling**:

   - Implement proper error handling in components and functions. Use try-catch blocks where necessary and provide meaningful error messages.
   - Ensure that errors are logged appropriately for debugging purposes.

7. **Accesibility**

   - Ensure all components are accessible and follow WCAG 2.2 standards.
   - Components should be fully operable via keyboard alone.
   - Use ARIA attributes where necessary to enhance accessibility.
   - Use `inheritedAttributes` to set aria properties which is available in the utils file as if type `Attributes`, and call `inheritAriaAttributes()` to set it.

- Use [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) as reference for best practices.

#### Version Control and Collaboration

1. **Commit Messages**:

   - Write clear and concise commit messages.
   - Use the imperative mood in commit messages (e.g., "Add {new-feature}", "Fix {bug}").
   - Do not commit unused imports.

2. **Pull Requests**:

   - Provide a clear description of the changes and the rationale behind them for each and every PR.
   - Clarify in detail on the review comments promptly and update the pull request accordingly with the fix.

3. **Code Reviews**:

   - Conduct thorough code reviews to ensure code quality and adherence to guidelines.
   - Provide constructive feedback and suggestions for improvement during code reviews.

4. **Collaboration Tools**:

   - Use collaboration tools like GitHub Issues and Project Boards to track tasks, bugs, and feature requests.
   - Ensure that all team members are aware of the current status of the project and any ongoing work.

#### Testing and Quality Assurance

1. **Unit Testing**:

   - Write unit tests for all components and functions.
   - We are using jest testing framework consistently throughout the project ensure tests cover various scenarios, including edge cases.

     - Example test case: We are covering the test case `should render with default props` from `ModusWcAvatar` component

     ```
     it('should render with default props', async () => {
        const page = await newSpecPage({
           components: [ModusWcAvatar],
           html: '<modus-wc-avatar alt="Default avatar" aria-label="Default avatar"></modus-wc-avatar>',
        });
        expect(page.root).toMatchSnapshot();
     });
     ```

     The test case is compared with a snapshot which is present in the snapshot folder for each component.

     ```
     exports[`modus-wc-avatar should render with default props 1`] = `
     <modus-wc-avatar alt="Default avatar">
     <div aria-label="Default avatar" class="modus-wc-avatar" tabindex="-1">
        <div class="modus-wc-rounded-full modus-wc-w-16">
           <img alt="Default avatar" src="">
        </div>
     </div>
     </modus-wc-avatar>
     `;
     ```

2. **Test Naming Conventions**:

   - Use descriptive names for test cases.
   - Follow the pattern `should do something when condition` for test names.

3. **Code Coverage**:

   - Aim for 100% code coverage, but prioritize meaningful tests over coverage percentage.
   - Update test cases to cover the code changes for each component.

4. **End-to-End Testing**:

   - Write end-to-end tests for critical user flows to ensure the respective component or feature works as expected.

5. **Continuous Integration**:
   - Ensure continuous integration (CI) pipelines which run tests and checks on each commit and pull request to be succesful.

#### Documentation and Comments

1. **Component Documentation**:

   - Provide storybook inline docs for all components
   - Provide component details in the `stories.ts` file to generate inline docs for components.
   - Include types, and default values in the component properties.
   - Add `ifDefined` wherever needed, but not for Boolean values.
   - If a property has multiple values, use `select` to control it in stories.
   - Do not add a description for a property or state.
   - Provide migration docs if applicable after each Pull requests

2. **Inline Comments**:

   - Use inline comments to explain complex logic and important decisions.
   - Keep comments concise and relevant.

3. **README Files**:

   - Each component should have a `readme.md` file that provides an overview of the component, its properties, events, and usage examples.
   - Ensure the documentation is clear and concise, making it easy for developers to understand how to use the component.

4. **API Documentation**:

   - Ensure documentation is present for any events exposed which is generated by autoDocs in the storybook.
   - Ensure documentation includes examples and descriptions of each component generated by autoDocs in the storybook.
   - AutoDocs generates information with the the comments of each `event` or `@Prop`.

5. **Configuration Files**:
   - Keep configuration files (e.g., `tsconfig.json`) at the root level of the project for easy access and management.
   - Ensure configuration files are well-documented with comments explaining the purpose of each configuration option.

### Example Code Snippet

````typescript
import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'modus-wc-text-input',
  styleUrl: 'modus-wc-text-input.css',
  shadow: true,
})
export class ModusWcTextInput {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() value: string;
  @Prop() disabled: boolean = false;

  @Event() inputChange: EventEmitter<string>;

```typescript
  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputChange.emit(input.value);
  }

  render() {
    return (
      <div class="modus-wc-text-input">
        {this.label && <label class="modus-wc-text-input__label">{this.label}</label>}
        <input
          class="modus-wc-text-input__input"
          type="text"
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
          onInput={(event) => this.handleInputChange(event)}
        />
      </div>
    );
  }
}
````

## Contribution Guidelines

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Ensure your code follows the coding standards.
- Write tests for your changes.
- Submit a pull request with a clear description of your changes.

# Need Discussion

1. **Branching Strategy**:

   - Create branches using the following format
     - IssueNo-IssueTitle (e.g, 109-collapse-fix-animation)

2. **End-to-End Testing**: - Use a consistent testing framework - playwright to be explored and followed for `.e2e` tests.
