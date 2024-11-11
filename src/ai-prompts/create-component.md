Create a new Stencil JS component for the Modus Web Components library. Follow these guidelines:

Component Structure:

Use the @Component decorator with the appropriate tag name (prefix with 'modus-wc-').
Set shadow: false in the @Component options.
Use SASS for styling (styleUrl should point to a .scss file).
In componentWillLoad, check for the ariaLabel attribute and add a console warning if not provided ("ComponentName: aria-label is required for accessibility").

Props:

Include an 'ariaLabel' prop (required string) for accessibility.
Include a 'customClass' prop (optional string) for custom styling.
Use appropriate prop types (string, boolean, union types) for other properties.
Mark required props with a '!' in TypeScript.

Styling:

Create a corresponding .scss file in the same directory.
Prefer using DaisyUI classes over custom styling in the .scss file.
Use BEM-like naming convention for custom classes (e.g., 'modus-wc-componentname--modifier').
Use CSS custom properties (variables) found in src/styles/variables.scss for theming capabilities.

Accessibility:

Ensure WCAG 2.2 compliance.
Use semantic HTML elements where appropriate.
Include ARIA attributes as needed.

Internationalization:

Design the component to accept all text content as props.
Avoid hard-coding strings within the component.

Events:

Use the @Event decorator for custom events.
Emit events using EventEmitter.

Methods:

Use private methods for internal logic.
Expose public methods using the @Method decorator if needed.

Lifecycle Methods:

Implement componentWillLoad for initial setup if required.
Use other lifecycle methods as needed (componentDidLoad, componentWillRender, etc.).

Testing:

Create a corresponding .spec.ts file for unit tests.
Use snapshot testing for tests that don't require user interaction.
Aim for 100% test coverage.

Documentation:

Use JSDoc comments to describe the component and its props/methods.

Storybook:

Create a corresponding .stories.ts file for Storybook integration.
Include various states and prop combinations in the stories.
Render a single component that allows the user to test all props.

Component Description:
[Provide a detailed description of the specific component to be created, including its purpose, required props, events, and any special considerations. Include source components, styles, and stories.]

Mock-up:
[Include or describe where to find an image or detailed description of the component's visual design and layout.]
