import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { ModusWcStepper } from '@trimble-oss/moduswebcomponents-react';
import Legend from '../components/Legend';

const ArchitecturePage: React.FC = () => {
  // Define build process steps for both approaches
  const shadcnBuildSteps = [
    {
      label: 'React Components with TypeScript and JSX',
      content: '1',
      color: 'primary' as const,
    },
    {
      label: 'TypeScript compiler + Babel transforms',
      content: '2',
      color: 'primary' as const,
    },
    {
      label: 'Webpack/Vite bundles with React runtime',
      content: '3',
      color: 'primary' as const,
    },
    {
      label: 'JavaScript bundle that requires React',
      content: '4',
      color: 'primary' as const,
    },
  ];

  const modusWcBuildSteps = [
    {
      label: 'Web components with TypeScript and JSX',
      content: '1',
      color: 'primary' as const,
    },
    {
      label: 'Transforms to framework-agnostic web components',
      content: '2',
      color: 'primary' as const,
    },
    {
      label: 'Generates React, Angular, Vue wrappers automatically',
      content: '3',
      color: 'primary' as const,
    },
    {
      label: 'Native web components + framework integrations',
      content: '4',
      color: 'primary' as const,
    },
  ];

  const ArchitectureDiagram: React.FC<{
    title: string;
    children: React.ReactNode;
  }> = ({ title, children }) => (
    <div className="border rounded-lg p-6 bg-gray-50">
      <h4 className="font-semibold text-gray-900 mb-4">{title}</h4>
      {children}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Technical Architecture Comparison
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Deep dive into the compilation, distribution, and runtime differences
          between ShadCN and Modus Web Components approaches.
        </p>
      </div>

      {/* Compilation Process */}
      <Card>
        <CardHeader>
          <CardTitle>Compilation & Build Process</CardTitle>
          <CardDescription>
            How each approach transforms source code into deployable components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <ArchitectureDiagram title="ShadCN Build Process">
              <div className="space-y-4">
                <ModusWcStepper
                  steps={shadcnBuildSteps}
                  orientation="vertical"
                />
              </div>
            </ArchitectureDiagram>

            <ArchitectureDiagram title="Modus Web Components Build Process">
              <div className="space-y-4">
                <ModusWcStepper
                  steps={modusWcBuildSteps}
                  orientation="vertical"
                />
              </div>
            </ArchitectureDiagram>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h5 className="font-semibold text-yellow-800 mb-2">
              Key Architectural Difference:
            </h5>
            <p className="text-yellow-800 text-sm">
              ShadCN components are React-specific and tied to the React
              ecosystem, while Stencil generates true web standards that work
              anywhere HTML is supported.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Distribution Strategy */}
      <Card>
        <CardHeader>
          <CardTitle>Distribution & Consumption Models</CardTitle>
          <CardDescription>
            How developers consume and integrate components into their projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">
                ShadCN Distribution
              </h4>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-semibold text-gray-900">
                    Copy-Paste Model
                  </h5>
                  <p className="text-sm text-gray-600 mt-2">
                    Developers copy component source code directly into their
                    project. Full ownership and customization, but manual
                    updates required.
                  </p>
                  <div className="mt-3 p-3 bg-gray-100 rounded text-sm font-mono">
                    npx shadcn-ui@latest add button
                  </div>
                </div>

                <div className="space-y-2">
                  <h6 className="font-medium">Advantages:</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Full control over component source</li>
                    <li>Easy customization and modification</li>
                    <li>No external dependencies</li>
                    <li>Complete type safety</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h6 className="font-medium">Trade-offs:</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Manual update process</li>
                    <li>Code duplication across projects</li>
                    <li>Framework lock-in</li>
                    <li>Potential version drift</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-4">
                Modus Web Components
              </h4>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h5 className="font-semibold text-gray-900">
                    Package Distribution
                  </h5>
                  <p className="text-sm text-gray-600 mt-2">
                    Components distributed as npm packages with semantic
                    versioning. Centralized updates and consistent behavior
                    across applications.
                  </p>
                  <div className="mt-3 p-3 bg-gray-100 rounded text-sm font-mono">
                    npm install @trimble-oss/moduswebcomponents-react
                  </div>
                </div>

                <div className="space-y-2">
                  <h6 className="font-medium">Advantages:</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Automatic updates via package management</li>
                    <li>Consistent behavior across all apps</li>
                    <li>Framework-agnostic distribution</li>
                    <li>Centralized bug fixes and improvements</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h6 className="font-medium">Trade-offs:</h6>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Less direct control over internals</li>
                    <li>Customization through props/CSS variables</li>
                    <li>Dependency on external package</li>
                    <li>Breaking changes in major versions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Runtime Behavior */}
      <Card>
        <CardHeader>
          <CardTitle>Runtime Architecture</CardTitle>
          <CardDescription>
            How components behave and interact at runtime in the browser
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-600 mb-4">
                  ShadCN Runtime
                </h4>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h5 className="font-semibold">React Virtual DOM</h5>
                    <p className="text-sm mt-1">
                      Components render within React's reconciliation system
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h5 className="font-semibold">Framework Coupling</h5>
                    <p className="text-sm mt-1">
                      Tight integration with React hooks, context, and lifecycle
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h5 className="font-semibold">Bundle Integration</h5>
                    <p className="text-sm mt-1">
                      Components compiled into application bundle
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-4">
                  Modus Web Components
                </h4>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h5 className="font-semibold">Native DOM</h5>
                    <p className="text-sm mt-1">
                      Components register directly with the browser's custom
                      element registry
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h5 className="font-semibold">Framework Agnostic</h5>
                    <p className="text-sm mt-1">
                      Standard web APIs work with any framework or vanilla
                      JavaScript
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h5 className="font-semibold">Lazy Loading</h5>
                    <p className="text-sm mt-1">
                      Components can be loaded on-demand when first used
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Implications */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-4">
                Performance Implications
              </h5>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h6 className="font-semibold text-blue-600">Initial Load</h6>
                  <p className="text-gray-600">
                    <strong>ShadCN:</strong> All components in main bundle
                    <br />
                    <strong>Modus-WC:</strong> Can lazy load individual
                    components
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-purple-600">
                    Runtime Performance
                  </h6>
                  <p className="text-gray-600">
                    <strong>ShadCN:</strong> React reconciliation overhead
                    <br />
                    <strong>Modus-WC:</strong> Direct DOM manipulation, no
                    virtual DOM
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold text-orange-600">
                    Memory Usage
                  </h6>
                  <p className="text-gray-600">
                    <strong>ShadCN:</strong> React runtime + component tree
                    <br />
                    <strong>Modus-WC:</strong> Minimal runtime, efficient memory
                    usage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack Comparison</CardTitle>
          <CardDescription>
            Core technologies and dependencies that power each approach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Aspect</th>
                  <th className="text-left p-4 font-semibold text-blue-600">
                    ShadCN
                  </th>
                  <th className="text-left p-4 font-semibold text-green-600">
                    Modus Web Components
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4 font-medium">Core Technology</td>
                  <td className="p-4">React 18+ with TypeScript</td>
                  <td className="p-4">Stencil.js (Web Components compiler)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Component Primitives</td>
                  <td className="p-4">Radix UI headless components</td>
                  <td className="p-4">Native Web Component APIs</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Styling System</td>
                  <td className="p-4">
                    Tailwind CSS + class-variance-authority
                  </td>
                  <td className="p-4">
                    Tailwind CSS + DaisyUI + CSS custom properties
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">State Management</td>
                  <td className="p-4">React state hooks + context</td>
                  <td className="p-4">
                    Stencil state decorators + reactive properties
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Event System</td>
                  <td className="p-4">React synthetic events</td>
                  <td className="p-4">Native DOM events + custom events</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">TypeScript Support</td>
                  <td className="p-4">Full React type integration</td>
                  <td className="p-4">
                    Auto-generated types for all frameworks
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Bundle Output</td>
                  <td className="p-4">ESM/CJS for React applications</td>
                  <td className="p-4">
                    ESM, CJS, UMD + framework-specific packages
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Browser Support</td>
                  <td className="p-4">Modern browsers (React requirements)</td>
                  <td className="p-4">
                    ES2017+ with polyfills for older browsers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Architectural Decision Tree */}
      <Card>
        <CardHeader>
          <CardTitle>Architectural Decision Impact</CardTitle>
          <CardDescription>
            How the fundamental architectural choices affect different aspects
            of development
          </CardDescription>
        </CardHeader>
        <Legend
          items={[
            { color: 'green', label: 'Fully Supported' },
            {
              color: 'red',
              label: 'Not Supported / Requires Reimplementation',
            },
          ]}
          //reduce size with class add margin left and right
          className="m-3"
        />
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-blue-200 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-600 mb-4">
                  React-First Architecture (ShadCN)
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Deep React ecosystem integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Excellent TypeScript experience</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Full component source control</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Framework lock-in to React</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Multiple implementations needed</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Higher maintenance overhead</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-2 border-green-200 rounded-lg">
                <h4 className="text-lg font-semibold text-green-600 mb-4">
                  Web Standards Architecture (Modus-WC)
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Framework agnostic compatibility</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Single codebase maintenance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Future-proof web standards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Learning curve for Web Components</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Less direct framework integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Prop-based customization only</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <h5 className="font-semibold text-purple-900 mb-3">
                Trimble's Architectural Decision
              </h5>
              <p className="text-purple-800 text-sm">
                Given Trimble's diverse technology landscape including Angular,
                Vue, React, and legacy applications, the Web Components
                architecture provides superior <strong>long-term value</strong>{' '}
                through:
              </p>
              <ul className="mt-3 space-y-1 text-sm text-purple-700">
                <li>
                  <strong>Reduced total cost of ownership</strong> - Single
                  implementation vs. multiple
                </li>
                <li>
                  <strong>Consistent user experience</strong> - Identical
                  behavior across all products
                </li>
                <li>
                  <strong>Technology flexibility</strong> - Not locked into any
                  single framework
                </li>
                <li>
                  <strong>Future compatibility</strong> - Built on web standards
                  that will persist
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArchitecturePage;
