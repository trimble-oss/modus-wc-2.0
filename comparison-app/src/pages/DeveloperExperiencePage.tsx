import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import Legend from '../components/Legend';

const DeveloperExperiencePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'setup' | 'usage' | 'tooling'>(
    'setup'
  );

  const CodeBlock: React.FC<{
    title?: string;
    code: string;
    language?: string;
  }> = ({ title, code, language = 'bash' }) => (
    <div className={title ? 'mt-4' : ''}>
      {title && (
        <div className="text-sm font-medium text-gray-700 mb-2">{title}:</div>
      )}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  const ComparisonStep: React.FC<{
    step: number;
    shadcnContent: React.ReactNode;
    modusContent: React.ReactNode;
    title: string;
  }> = ({ step, shadcnContent, modusContent, title }) => (
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <span className="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
          {step}
        </span>
        {title}
      </h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-semibold text-blue-600 mb-3">ShadCN Setup</h5>
          {shadcnContent}
        </div>
        <div>
          <h5 className="font-semibold text-green-600 mb-3">
            Modus Web Components
          </h5>
          {modusContent}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Developer Experience Comparison
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Comparing the day-to-day development experience, from initial setup to
          production deployment, including tooling, IDE support, and debugging
          capabilities.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg max-w-md mx-auto">
        {[
          { key: 'setup', label: 'Setup & Installation' },
          { key: 'usage', label: 'Daily Usage' },
          { key: 'tooling', label: 'Tooling & IDE' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Setup & Installation */}
      {activeTab === 'setup' && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>
                Getting Started: From Zero to First Component
              </CardTitle>
              <CardDescription>
                Step-by-step comparison of setting up each system in a new
                project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ComparisonStep
                step={1}
                title="Project Initialization"
                shadcnContent={
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      Create React app and install Tailwind CSS manually
                    </p>
                    <CodeBlock
                      code={`# Create React app
npx create-react-app my-app --template typescript
cd my-app

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install ShadCN dependencies
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot`}
                    />
                  </div>
                }
                modusContent={
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      Create React app and install Modus components
                    </p>
                    <CodeBlock
                      code={`# Create React app
npx create-react-app my-app --template typescript
cd my-app

# Install Modus Web Components
npm install @trimble-oss/moduswebcomponents-react
npm install @trimble-oss/moduswebcomponents

# That's it! Components include styling`}
                    />
                  </div>
                }
              />

              <ComparisonStep
                step={2}
                title="Configuration Setup"
                shadcnContent={
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      Configure Tailwind, paths, and initialize ShadCN
                    </p>
                    <CodeBlock
                      language="json"
                      code={`// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color variables needed
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

// tsconfig.json - Add path mapping
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}

// Initialize ShadCN
npx shadcn-ui@latest init`}
                    />
                  </div>
                }
                modusContent={
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      Import styles - configuration is pre-configured
                    </p>
                    <CodeBlock
                      language="javascript"
                      code={`// src/index.js or src/index.tsx
import '@trimble-oss/moduswebcomponents/modus-wc-styles.css';

// Optional: Import React components
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

// Initialize components (if using custom elements directly)
defineCustomElements();

// That's it! No additional configuration needed`}
                    />
                  </div>
                }
              />

              <ComparisonStep
                step={3}
                title="First Component"
                shadcnContent={
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      Add your first component using ShadCN CLI
                    </p>
                    <CodeBlock
                      code={`# Add a button component
npx shadcn-ui@latest add button

# Creates src/components/ui/button.tsx
# Includes all source code in your project`}
                    />
                    <CodeBlock
                      language="tsx"
                      title="Usage"
                      code={`import { Button } from "@/components/ui/button"

function App() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}`}
                    />
                  </div>
                }
                modusContent={
                  <div>
                    <p className="text-sm text-gray-600 mb-3">
                      Use components directly from the package
                    </p>
                    <CodeBlock
                      code={`# No CLI needed - components are ready to use
# Already installed via npm`}
                    />
                    <CodeBlock
                      language="tsx"
                      title="Usage"
                      code={`import { ModusWcButton } from '@trimble-oss/moduswebcomponents-react'

function App() {
  return (
    <ModusWcButton color="primary">
      Click me
    </ModusWcButton>
  )
}`}
                    />
                  </div>
                }
              />

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h6 className="font-semibold text-blue-600">
                      ShadCN Setup Time
                    </h6>
                    <p className="text-gray-600">
                      ~15-20 minutes for first setup
                    </p>
                    <ul className="mt-2 text-xs text-gray-500 space-y-1">
                      <li>Manual Tailwind configuration</li>
                      <li>Path mapping setup</li>
                      <li>Individual component installation</li>
                      <li>CSS variable configuration</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-600">
                      Modus WC Setup Time
                    </h6>
                    <p className="text-gray-600">
                      ~3-5 minutes for first setup
                    </p>
                    <ul className="mt-2 text-xs text-gray-500 space-y-1">
                      <li>Single npm install</li>
                      <li>One CSS import</li>
                      <li>Components ready immediately</li>
                      <li>Pre-configured themes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Daily Usage */}
      {activeTab === 'usage' && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Day-to-Day Development Experience</CardTitle>
              <CardDescription>
                Common tasks developers perform when working with components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Adding New Components */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Adding New Components
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-3">
                        ShadCN Workflow
                      </h5>
                      <CodeBlock
                        code={`# Browse available components
npx shadcn-ui@latest add

# Add specific component
npx shadcn-ui@latest add input form label

# Component source copied to your project
# Full customization possible
# Manual updates required`}
                      />
                      <div className="mt-3 text-sm text-gray-600">
                        <strong>Pros:</strong> Full source control, easy
                        customization
                        <br />
                        <strong>Cons:</strong> Manual updates, potential drift
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-600 mb-3">
                        Modus WC Workflow
                      </h5>
                      <CodeBlock
                        code={`# Browse documentation online
# https://trimble-oss.github.io/modus-wc-2.0/

# Import and use immediately
import { ModusWcTextInput } from '@trimble-oss/moduswebcomponents-react'

# Automatic updates via npm
# Consistent behavior guaranteed`}
                      />
                      <div className="mt-3 text-sm text-gray-600">
                        <strong>Pros:</strong> Immediate availability, automatic
                        updates
                        <br />
                        <strong>Cons:</strong> Less direct customization
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customization Patterns */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Component Customization
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-3">
                        ShadCN Customization
                      </h5>
                      <CodeBlock
                        language="tsx"
                        code={`// Direct source modification
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

// Easy to modify variant classes
// Full control over implementation
// Custom logic can be added anywhere`}
                      />
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-600 mb-3">
                        Modus WC Customization
                      </h5>
                      <CodeBlock
                        language="tsx"
                        code={`// CSS custom properties
.my-button {
  --modus-wc-button-bg-primary: #custom-color;
  --modus-wc-button-radius: 8px;
}

// Props-based customization
<ModusWcButton 
  color="primary"
  size="large"
  variant="outline"
  className="my-custom-button"
>
  Button
</ModusWcButton>

// Wrapper components for complex customization`}
                      />
                    </div>
                  </div>
                </div>

                {/* Error Handling & Debugging */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Debugging Experience
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-3">
                        ShadCN Debugging
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>Full React DevTools integration</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>Source maps point to your code</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>Breakpoints in component source</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>Complex component trees in DevTools</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-600 mb-3">
                        Modus WC Debugging
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>Native browser DevTools support</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>Clear DOM structure inspection</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>Framework-agnostic debugging</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>Less visibility into internal state</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Curve */}
          <Card>
            <CardHeader>
              <CardTitle>Learning Curve Analysis</CardTitle>
              <CardDescription>
                Time investment required for developers to become productive
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-blue-600">
                    ShadCN Learning Path
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold">
                        1
                      </div>
                      <div>
                        <div className="font-medium">
                          React Proficiency Required
                        </div>
                        <div className="text-sm text-gray-600">
                          Hooks, context, refs, TypeScript
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-xs font-semibold">
                        2
                      </div>
                      <div>
                        <div className="font-medium">Tailwind CSS Mastery</div>
                        <div className="text-sm text-gray-600">
                          Utility classes, responsive design
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center text-xs font-semibold">
                        3
                      </div>
                      <div>
                        <div className="font-medium">Radix UI Concepts</div>
                        <div className="text-sm text-gray-600">
                          Headless components, composition
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-xs font-semibold">
                        4
                      </div>
                      <div>
                        <div className="font-medium">ShadCN Patterns</div>
                        <div className="text-sm text-gray-600">
                          CLI usage, customization patterns
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-900">
                      Estimated Learning Time
                    </div>
                    <div className="text-sm text-blue-700 mt-1">
                      <strong>Experienced React Dev:</strong> 1-2 weeks
                      <br />
                      <strong>New to React:</strong> 2-3 months
                      <br />
                      <strong>New to Tailwind:</strong> +2-4 weeks
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-green-600">
                    Modus WC Learning Path
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-xs font-semibold">
                        1
                      </div>
                      <div>
                        <div className="font-medium">Basic Web Knowledge</div>
                        <div className="text-sm text-gray-600">
                          HTML, CSS, JavaScript fundamentals
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-xs font-semibold">
                        2
                      </div>
                      <div>
                        <div className="font-medium">Framework Basics</div>
                        <div className="text-sm text-gray-600">
                          Your framework of choice (React, Angular, Vue)
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center text-xs font-semibold">
                        3
                      </div>
                      <div>
                        <div className="font-medium">
                          Component API Learning
                        </div>
                        <div className="text-sm text-gray-600">
                          Props, events, basic customization
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-xs font-semibold">
                        4
                      </div>
                      <div>
                        <div className="font-medium">
                          Advanced Customization
                        </div>
                        <div className="text-sm text-gray-600">
                          CSS custom properties, theming
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-900">
                      Estimated Learning Time
                    </div>
                    <div className="text-sm text-green-700 mt-1">
                      <strong>Any Framework Dev:</strong> 2-3 days
                      <br />
                      <strong>New Developer:</strong> 1-2 weeks
                      <br />
                      <strong>Framework Switch:</strong> Same day
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tooling & IDE */}
      {activeTab === 'tooling' && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Development Tools & IDE Support</CardTitle>
              <CardDescription>
                Comparing the ecosystem of tools and editor support for each
                approach
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* IDE Support */}
                <div>
                  <Legend
                    items={[
                      { color: 'green', label: 'Fully Supported' },
                      { color: 'yellow', label: 'Partial Support' },
                      { color: 'red', label: 'Not Supported' },
                    ]}
                    className="mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    IDE & Editor Support
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">
                            Feature
                          </th>
                          <th className="text-center p-3 font-semibold text-blue-600">
                            ShadCN
                          </th>
                          <th className="text-center p-3 font-semibold text-green-600">
                            Modus WC
                          </th>
                          <th className="text-left p-3 font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b">
                          <td className="p-3 font-medium">
                            TypeScript IntelliSense
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-gray-600">
                            Excellent support in both
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">
                            Component Auto-completion
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-gray-600">
                            Works in VS Code, WebStorm, etc.
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Props Validation</td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-gray-600">
                            Strong typing catches errors early
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">Go to Definition</td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-gray-600">
                            ShadCN: source code; Modus: type definitions
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3 font-medium">
                            Refactoring Support
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-gray-600">
                            Full refactoring vs. API-based refactoring
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">
                            Multi-framework Support
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-center">
                            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                          </td>
                          <td className="p-3 text-gray-600">
                            Modus works in any framework's IDE support
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Development Workflow */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    Development Workflow Tools
                  </h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-blue-600 mb-4">
                        ShadCN Ecosystem
                      </h5>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h6 className="font-semibold">
                            Storybook Integration
                          </h6>
                          <p className="text-sm text-gray-600 mt-1">
                            Excellent React Storybook support with full source
                            access
                          </p>
                          <CodeBlock
                            language="tsx"
                            code={`// stories/Button.stories.tsx
export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary = () => <Button>Primary</Button>`}
                          />
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h6 className="font-semibold">Testing</h6>
                          <p className="text-sm text-gray-600 mt-1">
                            React Testing Library, Jest, direct component
                            testing
                          </p>
                          <CodeBlock
                            language="tsx"
                            code={`import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

test('renders button', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})`}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-green-600 mb-4">
                        Modus WC Ecosystem
                      </h5>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h6 className="font-semibold">
                            Storybook Integration
                          </h6>
                          <p className="text-sm text-gray-600 mt-1">
                            Web Components Storybook support with auto-generated
                            docs
                          </p>
                          <CodeBlock
                            language="tsx"
                            code={`// Auto-generated from component metadata
export default {
  title: 'Components/Button',
  component: 'modus-wc-button',
} as Meta

export const Primary = () => 
  \`<modus-wc-button color="primary">Primary</modus-wc-button>\``}
                          />
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h6 className="font-semibold">Testing</h6>
                          <p className="text-sm text-gray-600 mt-1">
                            Framework-agnostic testing with Playwright,
                            Puppeteer
                          </p>
                          <CodeBlock
                            language="tsx"
                            code={`import { newSpecPage } from '@stencil/core/testing'
import { ModusWcButton } from '../modus-wc-button'

it('renders', async () => {
  const page = await newSpecPage({
    components: [ModusWcButton],
    html: \`<modus-wc-button>Click me</modus-wc-button>\`,
  })
  expect(page.root).toEqualHtml(\`...\`)
})`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance & Build Tools */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">
                    Build & Performance Tools
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h5 className="font-semibold text-blue-600">
                        ShadCN Build Integration
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>
                            <strong>Webpack/Vite:</strong> Standard React build
                            process
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>
                            <strong>Tree Shaking:</strong> Unused components
                            automatically removed
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>
                            <strong>Hot Reload:</strong> Fast development
                            iteration
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>
                            <strong>Bundle Analysis:</strong> Standard React
                            bundle analysis tools
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-semibold text-green-600">
                        Modus WC Build Integration
                      </h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>
                            <strong>Any Bundler:</strong> Works with Webpack,
                            Vite, Rollup, esbuild
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>
                            <strong>Lazy Loading:</strong> Components load
                            on-demand automatically
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>
                            <strong>Framework HMR:</strong> Works with any
                            framework's hot reload
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>
                            <strong>Built-in Analysis:</strong> Stencil provides
                            detailed bundle reports
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Developer Productivity Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Developer Productivity Summary</CardTitle>
              <CardDescription>
                Overall impact on team productivity and development velocity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 border rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    85%
                  </div>
                  <div className="font-semibold">
                    ShadCN Learning Efficiency
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    High productivity for React teams, but framework-specific
                    knowledge
                  </div>
                </div>

                <div className="text-center p-6 border rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    95%
                  </div>
                  <div className="font-semibold">
                    Modus WC Learning Efficiency
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Fast onboarding regardless of framework background
                  </div>
                </div>

                <div className="text-center p-6 border rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    3x
                  </div>
                  <div className="font-semibold">Multi-Framework Advantage</div>
                  <div className="text-sm text-gray-600 mt-2">
                    Modus WC provides 3x faster delivery for multi-framework
                    organizations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DeveloperExperiencePage;
