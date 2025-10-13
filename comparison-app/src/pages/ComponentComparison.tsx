import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  ModusWcButton,
  ModusWcTextInput,
} from '@trimble-oss/moduswebcomponents-react';

const ComponentComparison: React.FC = () => {
  const CodeBlock: React.FC<{
    title: string;
    code: string;
    language?: string;
  }> = ({ title, code, language = 'tsx' }) => (
    <div className="mt-4">
      <div className="text-sm font-medium text-gray-700 mb-2">{title}:</div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  const ComparisonSection: React.FC<{
    title: string;
    description: string;
    shadcnDemo: React.ReactNode;
    modusDemo: React.ReactNode;
    shadcnCode: string;
    modusCode: string;
    keyDifferences: string[];
  }> = React.memo(
    ({
      title,
      description,
      shadcnDemo,
      modusDemo,
      shadcnCode,
      modusCode,
      keyDifferences,
    }) => (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* ShadCN Example */}
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-3">
                ShadCN (React)
              </h4>
              <div className="border rounded-lg p-4 bg-white">{shadcnDemo}</div>
              <CodeBlock title="ShadCN Implementation" code={shadcnCode} />
            </div>

            {/* Modus WC Example */}
            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-3">
                Modus Web Components
              </h4>
              <div className="border rounded-lg p-4 bg-white">{modusDemo}</div>
              <CodeBlock title="Modus WC Implementation" code={modusCode} />
            </div>
          </div>

          {/* Key Differences */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-2">
              Key Architectural Differences:
            </h5>
            <ul className="space-y-1">
              {keyDifferences.map((difference, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {difference}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    )
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Component Comparison
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Side-by-side examples of identical components built with ShadCN and
          Modus Web Components, showcasing visual parity with different
          architectural approaches.
        </p>
      </div>

      {/* Button Comparison */}
      <ComparisonSection
        title="Button Component"
        description="Basic interactive buttons with variants and styling"
        shadcnDemo={
          <div className="space-y-3">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </div>
        }
        modusDemo={
          <div className="space-y-3">
            <ModusWcButton color="primary">Primary Button</ModusWcButton>
            <ModusWcButton color="secondary">Secondary Button</ModusWcButton>
            <ModusWcButton variant="outlined">Outline Button</ModusWcButton>
            <ModusWcButton color="danger">Destructive Button</ModusWcButton>
          </div>
        }
        shadcnCode={`import { Button } from "@/components/ui/button"

// Usage in React
<Button>Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>

// Implementation uses:
// - Radix UI Slot for composition
// - class-variance-authority for variants
// - Tailwind classes for styling
// - React forwardRef for ref handling`}
        modusCode={`import { ModusWcButton } from '@trimble-oss/moduswebcomponents-react'

// Usage in React
<ModusWcButton color="primary">Primary Button</ModusWcButton>
<ModusWcButton color="secondary">Secondary Button</ModusWcButton>
<ModusWcButton variant="outline">Outline Button</ModusWcButton>

// Also works in Angular, Vue, vanilla JS:
// <modus-wc-button color="primary">Primary Button</modus-wc-button>

// Implementation uses:
// - Stencil Web Components
// - DaisyUI semantic classes
// - CSS custom properties for theming`}
        keyDifferences={[
          'ShadCN uses React-specific patterns (forwardRef, Slot), Modus-WC uses standard web component APIs',
          'ShadCN relies on utility classes, Modus-WC uses semantic DaisyUI classes',
          'ShadCN components are React-only, Modus-WC works in any framework',
          'ShadCN uses class-variance-authority for variants, Modus-WC uses prop-based configuration',
        ]}
      />

      {/* Input Comparison */}
      <ComparisonSection
        title="Text Input Component"
        description="Form inputs with validation and styling"
        shadcnDemo={
          <div className="space-y-4">
            <div key="shadcn-input-active">
              <label className="text-sm font-medium">ShadCN Input</label>
              <Input placeholder="Enter some text..." className="mt-1" />
            </div>
            <div key="shadcn-input-disabled">
              <label className="text-sm font-medium">Disabled Input</label>
              <Input placeholder="Disabled input" disabled className="mt-1" />
            </div>
          </div>
        }
        modusDemo={
          <div className="space-y-4">
            <div key="modus-input-active">
              <ModusWcTextInput
                label="Modus WC Input"
                bordered
                placeholder="Enter some text..."
              />
            </div>
            <div key="modus-input-disabled">
              <ModusWcTextInput
                label="Disabled Input"
                placeholder="Disabled input"
                disabled
              />
            </div>
          </div>
        }
        shadcnCode={`import { Input } from "@/components/ui/input"

// Usage in React
const [value, setValue] = useState('')

<Input 
  placeholder="Enter text..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

// Separate label component needed:
// <Label htmlFor="input">Label</Label>

// Implementation:
// - Direct HTML input element
// - Tailwind utility classes
// - React event handlers
// - Manual state management`}
        modusCode={`import { ModusWcTextInput } from '@trimble-oss/moduswebcomponents-react'

// Usage in React
const [value, setValue] = useState('')

<ModusWcTextInput 
  label="Label text"
  placeholder="Enter text..."
  value={value}
  onInputChange={(e) => setValue(e.detail.target.value)}
/>

// Works in any framework:
// Angular: <modus-wc-text-input [(value)]="text"></modus-wc-text-input>
// Vue: <modus-wc-text-input v-model="text"></modus-wc-text-input>

// Implementation:
// - Web Component with built-in label
// - DaisyUI form classes
// - Custom events for framework integration`}
        keyDifferences={[
          'ShadCN requires separate Label component, Modus-WC includes integrated label',
          'ShadCN uses standard React onChange, Modus-WC uses custom events for framework agnosticism',
          'ShadCN styling via utility classes, Modus-WC uses semantic form classes',
          'Modus-WC provides built-in validation states, ShadCN requires manual implementation',
        ]}
      />

      {/* Framework Integration Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Cross-Framework Usage</CardTitle>
          <CardDescription>
            How the same button component would be used across different
            frameworks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-3">
                ShadCN Approach
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    React:
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                    <code>{`import { Button } from "@/components/ui/button"

<Button variant="primary">Click me</Button>`}</code>
                  </pre>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Angular:
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                    <code>{`// Would need complete reimplementation
// New component library needed
// Different API, different styling approach

<app-button variant="primary">Click me</app-button>`}</code>
                  </pre>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Vue:
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                    <code>{`<!-- Would need complete reimplementation -->
<!-- New component library needed -->
<!-- Different API, different styling approach -->

<VButton variant="primary">Click me</VButton>`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-3">
                Modus Web Components
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    React:
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                    <code>{`import { ModusWcButton } from '@trimble-oss/moduswebcomponents-react'

<ModusWcButton color="primary">Click me</ModusWcButton>`}</code>
                  </pre>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Angular:
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                    <code>{`import '@trimble-oss/moduswebcomponents-angular'

<modus-wc-button color="primary">Click me</modus-wc-button>`}</code>
                  </pre>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Vue:
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                    <code>{`import '@trimble-oss/moduswebcomponents-vue'

<modus-wc-button color="primary">Click me</modus-wc-button>`}</code>
                  </pre>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Vanilla JS:
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
                    <code>{`<script src="modus-wc.js"></script>

<modus-wc-button color="primary">Click me</modus-wc-button>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              <strong>Key Insight:</strong> Web Components provide true
              framework interoperability with identical APIs and behavior, while
              ShadCN would require separate implementations for each framework.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bundle Size Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Bundle Size Impact</CardTitle>
          <CardDescription>
            Comparing the footprint of each approach in a typical application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600">ShadCN</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>React runtime</span>
                  <span>~42KB (gzipped)</span>
                </div>
                <div className="flex justify-between">
                  <span>Radix UI primitives</span>
                  <span>~15-25KB per component</span>
                </div>
                <div className="flex justify-between">
                  <span>Tailwind CSS</span>
                  <span>~10-50KB (pruned)</span>
                </div>
                <div className="flex justify-between">
                  <span>Component code</span>
                  <span>~2-5KB per component</span>
                </div>
                <div className="border-t pt-2 font-semibold">
                  <div className="flex justify-between">
                    <span>Total (5 components)</span>
                    <span>~125-185KB</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-600">
                Modus Web Components
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Web Components polyfill</span>
                  <span>~5KB (modern browsers: 0KB)</span>
                </div>
                <div className="flex justify-between">
                  <span>Stencil runtime</span>
                  <span>~8KB (gzipped)</span>
                </div>
                <div className="flex justify-between">
                  <span>DaisyUI + Tailwind CSS</span>
                  <span>~10-50KB (pruned)</span>
                </div>
                <div className="flex justify-between">
                  <span>Component code</span>
                  <span>~3-6KB per component</span>
                </div>
                <div className="border-t pt-2 font-semibold">
                  <div className="flex justify-between">
                    <span>Total (5 components)</span>
                    <span>~38-93KB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800">
              <strong>Performance Advantage:</strong> Web Components typically
              result in 30-50% smaller bundle sizes and faster initial load
              times, especially for applications using multiple components.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentComparison;
