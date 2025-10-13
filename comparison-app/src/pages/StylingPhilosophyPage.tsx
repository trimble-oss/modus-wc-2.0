import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ModusWcButton } from '@trimble-oss/moduswebcomponents-react';

const StylingPhilosophyPage: React.FC = () => {
  const CodeBlock: React.FC<{
    title?: string;
    code: string;
    language?: string;
  }> = ({ title, code, language = 'css' }) => (
    <div className={title ? 'mt-4' : ''}>
      {title && (
        <div className="text-sm font-medium text-gray-700 mb-2">{title}:</div>
      )}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  const StyleComparison: React.FC<{
    title: string;
    description: string;
    shadcnCode: string;
    modusCode: string;
    shadcnDemo?: React.ReactNode;
    modusDemo?: React.ReactNode;
  }> = ({
    title,
    description,
    shadcnCode,
    modusCode,
    shadcnDemo,
    modusDemo,
  }) => (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">
              ShadCN Approach
            </h4>
            {shadcnDemo && (
              <div className="border rounded-lg p-4 bg-white mb-4">
                {shadcnDemo}
              </div>
            )}
            <CodeBlock code={shadcnCode} language="tsx" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-3">
              Modus WC Approach
            </h4>
            {modusDemo && (
              <div className="border rounded-lg p-4 bg-white mb-4">
                {modusDemo}
              </div>
            )}
            <CodeBlock code={modusCode} language="css" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Styling Philosophy Comparison
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Both ShadCN and Modus Web Components use Tailwind CSS as their
          foundation, but take different approaches to component styling,
          customization, and theming.
        </p>
      </div>

      {/* Shared Foundation */}
      <Card>
        <CardHeader>
          <CardTitle>Shared Tailwind CSS Foundation</CardTitle>
          <CardDescription>
            Both systems leverage Tailwind CSS, ensuring visual consistency and
            modern styling patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">
                ShadCN + Tailwind
              </h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>
                  <strong>Utility-First:</strong> Direct Tailwind classes in
                  components
                </li>
                <li>
                  <strong>class-variance-authority:</strong> Programmatic class
                  combinations
                </li>
                <li>
                  <strong>CSS Variables:</strong> Theme customization through
                  CSS custom properties
                </li>
                <li>
                  <strong>Tailwind Config:</strong> Extended theme via
                  tailwind.config.js
                </li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">
                Modus WC + Tailwind + DaisyUI
              </h4>
              <ul className="space-y-2 text-sm text-green-800">
                <li>
                  <strong>Semantic Classes:</strong> DaisyUI component classes
                  (btn, input, card)
                </li>
                <li>
                  <strong>CSS Custom Properties:</strong> Theme system with
                  --modus-wc-* variables
                </li>
                <li>
                  <strong>Tailwind Foundation:</strong> All DaisyUI classes
                  compile to Tailwind utilities
                </li>
                <li>
                  <strong>Pre-configured Themes:</strong> Built-in light/dark
                  mode support
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-800 text-sm">
              <strong>Key Insight:</strong> Both approaches result in similar
              visual output and performance characteristics because they both
              compile to Tailwind CSS utilities. The difference lies in the
              developer experience and customization patterns.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Styling Approaches */}
      <StyleComparison
        title="Basic Component Styling"
        description="How each approach handles the styling of a simple button component"
        shadcnDemo={
          <div className="space-x-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        }
        modusDemo={
          <div className="space-x-2">
            <ModusWcButton color="primary">Primary</ModusWcButton>
            <ModusWcButton color="secondary">Secondary</ModusWcButton>
            <ModusWcButton variant="outline">Outline</ModusWcButton>
          </div>
        }
        shadcnCode={`// button.tsx - Direct Tailwind utilities
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
    },
  }
)

// Usage - Classes computed at runtime
<button className={cn(buttonVariants({ variant, size }), className)}>
  {children}
</button>`}
        modusCode={`/* Component uses semantic DaisyUI classes */
.modus-wc-button {
  @apply btn; /* Base button styles from DaisyUI */
}

.modus-wc-button--primary {
  @apply btn-primary; /* Primary variant */
}

.modus-wc-button--outline {
  @apply btn-outline; /* Outline variant */
}

/* DaisyUI compiles to Tailwind utilities: */
/* .btn = @apply inline-flex items-center justify-center ... */
/* .btn-primary = @apply bg-primary text-primary-content ... */`}
      />

      <StyleComparison
        title="Customization Patterns"
        description="Different approaches to customizing component appearance and behavior"
        shadcnCode={`// Direct source modification - you own the code
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

// Add custom variant
const buttonVariants = cva("...", {
  variants: {
    variant: {
      // ... existing variants
      custom: "bg-purple-500 text-white hover:bg-purple-600", // Custom variant
    }
  }
})

// Override with className
<Button className="bg-gradient-to-r from-blue-500 to-purple-600">
  Custom Button
</Button>`}
        modusCode={`/* CSS Custom Properties for theming */
:root {
  --modus-wc-button-bg-primary: #3b82f6;
  --modus-wc-button-bg-primary-hover: #2563eb;
  --modus-wc-button-text-primary: #ffffff;
  --modus-wc-button-radius: 6px;
  --modus-wc-button-padding: 0.5rem 1rem;
}

/* Override for specific instances */
.custom-button {
  --modus-wc-button-bg-primary: linear-gradient(to right, #3b82f6, #8b5cf6);
}

/* Component automatically uses these variables */
.modus-wc-button--primary {
  background: var(--modus-wc-button-bg-primary);
  color: var(--modus-wc-button-text-primary);
  border-radius: var(--modus-wc-button-radius);
  padding: var(--modus-wc-button-padding);
}

/* Usage */
<modus-wc-button class="custom-button" color="primary">
  Custom Button
</modus-wc-button>`}
      />

      {/* Theme System Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Theme System Architecture</CardTitle>
          <CardDescription>
            How each system handles light/dark modes and custom theming
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-600 mb-4">
                  ShadCN Theme System
                </h4>
                <CodeBlock
                  language="css"
                  code={`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... more CSS variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  /* ... dark mode overrides */
}

/* Usage in components */
.button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}`}
                />
                <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm">
                  <h6 className="font-semibold text-blue-900">
                    Characteristics:
                  </h6>
                  <ul className="mt-2 space-y-1 text-blue-800">
                    <li>HSL color space for better manipulation</li>
                    <li>CSS class-based theme switching (.dark)</li>
                    <li>Manual setup for theme persistence</li>
                    <li>Requires theme provider in React</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4">
                  Modus WC Theme System
                </h4>
                <CodeBlock
                  language="css"
                  code={`/* Built-in theme system with data attributes */
[data-theme="modus-modern-light"] {
  --modus-wc-color-primary: #0e7490;
  --modus-wc-color-secondary: #6b7280;
  --modus-wc-color-surface: #ffffff;
  --modus-wc-color-text: #1f2937;
  /* ... complete theme variables */
}

[data-theme="modus-modern-dark"] {
  --modus-wc-color-primary: #22d3ee;
  --modus-wc-color-secondary: #9ca3af;
  --modus-wc-color-surface: #1f2937;
  --modus-wc-color-text: #f9fafb;
  /* ... dark theme overrides */
}

/* Components automatically inherit theme */
.modus-wc-button--primary {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-surface);
}`}
                />
                <div className="mt-4 p-4 bg-green-50 rounded-lg text-sm">
                  <h6 className="font-semibold text-green-900">
                    Characteristics:
                  </h6>
                  <ul className="mt-2 space-y-1 text-green-800">
                    <li>Pre-configured theme variants available</li>
                    <li>Data-attribute based theme switching</li>
                    <li>Built-in theme persistence and detection</li>
                    <li>Framework-agnostic theme management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsive Design */}
      <StyleComparison
        title="Responsive Design Patterns"
        description="How each approach handles responsive design and mobile-first development"
        shadcnCode={`// ShadCN - Direct responsive Tailwind classes
const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium",
  {
    variants: {
      size: {
        default: "h-10 px-4 py-2 md:h-12 md:px-6", // Responsive sizing
        sm: "h-8 px-3 text-xs md:h-9 md:px-4 md:text-sm",
        lg: "h-12 px-8 text-lg md:h-14 md:px-10 md:text-xl",
      },
    },
  }
)

// Usage with additional responsive classes
<Button 
  className="w-full md:w-auto lg:w-64 xl:w-80"
  size="default"
>
  Responsive Button
</Button>

// Custom responsive behavior
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</div>`}
        modusCode={`/* Modus WC - CSS custom properties with responsive values */
:root {
  --modus-wc-button-padding: 0.5rem 1rem;
  --modus-wc-button-font-size: 0.875rem;
}

@media (min-width: 768px) {
  :root {
    --modus-wc-button-padding: 0.75rem 1.5rem;
    --modus-wc-button-font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --modus-wc-button-padding: 1rem 2rem;
    --modus-wc-button-font-size: 1.125rem;
  }
}

/* Component automatically inherits responsive values */
.modus-wc-button {
  padding: var(--modus-wc-button-padding);
  font-size: var(--modus-wc-button-font-size);
}

/* Can still use Tailwind classes for layout */
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <modus-wc-button>Button 1</modus-wc-button>
  <modus-wc-button>Button 2</modus-wc-button>
  <modus-wc-button>Button 3</modus-wc-button>
</div>`}
      />

      {/* Performance Implications */}
      <Card>
        <CardHeader>
          <CardTitle>CSS Performance & Bundle Impact</CardTitle>
          <CardDescription>
            Comparing the CSS delivery and runtime performance of each approach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-blue-600">
                ShadCN CSS Strategy
              </h4>

              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h5 className="font-semibold text-blue-900">
                    Runtime Class Generation
                  </h5>
                  <p className="text-sm text-blue-700 mt-1">
                    Classes computed using class-variance-authority at runtime
                    based on props
                  </p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h5 className="font-semibold text-blue-900">
                    Tailwind Purging
                  </h5>
                  <p className="text-sm text-blue-700 mt-1">
                    Unused Tailwind classes removed during build process
                  </p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h5 className="font-semibold text-blue-900">
                    CSS-in-JS Compatible
                  </h5>
                  <p className="text-sm text-blue-700 mt-1">
                    Works well with styled-components, emotion, etc. if needed
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">
                  Typical Bundle Impact:
                </h6>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Base Tailwind: ~8-15KB (gzipped)</li>
                  <li>Component classes: ~2-3KB per component</li>
                  <li>Runtime utilities: ~3-5KB</li>
                  <li>
                    <strong>Total:</strong> ~15-25KB for 5 components
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-green-600">
                Modus WC CSS Strategy
              </h4>

              <div className="space-y-4">
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h5 className="font-semibold text-green-900">
                    Pre-compiled Semantic Classes
                  </h5>
                  <p className="text-sm text-green-700 mt-1">
                    DaisyUI classes pre-compiled to Tailwind utilities during
                    build
                  </p>
                </div>

                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h5 className="font-semibold text-green-900">
                    CSS Custom Properties
                  </h5>
                  <p className="text-sm text-green-700 mt-1">
                    Theme system uses CSS variables for efficient customization
                  </p>
                </div>

                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h5 className="font-semibold text-green-900">
                    Static CSS Output
                  </h5>
                  <p className="text-sm text-green-700 mt-1">
                    No runtime CSS generation - all classes determined at build
                    time
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gray-100 rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">
                  Typical Bundle Impact:
                </h6>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Base Tailwind + DaisyUI: ~10-18KB (gzipped)</li>
                  <li>Component styles: ~1-2KB per component</li>
                  <li>Theme variables: ~2-3KB</li>
                  <li>
                    <strong>Total:</strong> ~15-28KB for 5 components
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h5 className="font-semibold text-yellow-800 mb-2">
              Performance Comparison:
            </h5>
            <p className="text-yellow-800 text-sm">
              Both approaches result in similar CSS bundle sizes and performance
              characteristics. ShadCN has slight runtime overhead for class
              computation, while Modus WC has slightly larger base CSS but zero
              runtime CSS generation overhead.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Styling Philosophy Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Styling Philosophy Summary</CardTitle>
          <CardDescription>
            Key differences in approach and when each makes sense
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-2 border-blue-200 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-600 mb-4">
                ShadCN Philosophy
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Utility-First:</strong> Direct Tailwind classes in
                    components
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Full Control:</strong> Own the source, modify freely
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>React-Optimized:</strong> Leverages React patterns
                    fully
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Copy-Paste Model:</strong> Components become part of
                    your codebase
                  </span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded text-sm text-blue-800">
                <strong>Best For:</strong> React teams wanting full control and
                customization
              </div>
            </div>

            <div className="p-6 border-2 border-green-200 rounded-lg">
              <h4 className="text-lg font-semibold text-green-600 mb-4">
                Modus WC Philosophy
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Semantic-First:</strong> Meaningful class names
                    (btn, card, input)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Consistent System:</strong> Pre-built design system
                    with themes
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Framework Agnostic:</strong> Works everywhere HTML
                    is supported
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Package Model:</strong> Centralized updates and
                    maintenance
                  </span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded text-sm text-green-800">
                <strong>Best For:</strong> Multi-framework teams wanting
                consistency and efficiency
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StylingPhilosophyPage;
