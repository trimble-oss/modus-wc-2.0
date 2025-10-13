import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import Legend from '../components/Legend';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Why Trimble Chose Modus Web Components Over ShadCN
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A comprehensive analysis of our architectural decision to build Modus
          Web Components instead of adopting ShadCN, demonstrating the benefits
          for Trimble's diverse technology ecosystem.
        </p>
        <Link to="/components">
          <Button
            size="lg"
            className="mr-4 hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95 interactive-button"
          >
            See Component Comparison
          </Button>
        </Link>
        <Link to="/architecture">
          <Button
            variant="outline"
            size="lg"
            className="hover:shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 hover:border-blue-300 interactive-button"
          >
            Technical Deep Dive
          </Button>
        </Link>
      </div>

      {/* Executive Summary */}
      <Card className="mb-8 hover-lift">
        <CardHeader>
          <CardTitle>Executive Summary</CardTitle>
          <CardDescription>
            Why Trimble chose Web Components over React-specific solutions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              <strong>
                Trimble has a significant number of non-React technologies
              </strong>{' '}
              in use across the organization, which required us to create a{' '}
              <strong>technology-agnostic solution</strong>. We leveraged Web
              Components to build once and generate components for any web
              framework, instead of building React-only components and then
              recreating them for Angular, Vue, and vanilla JavaScript.
            </p>

            <p className="mb-6">
              Both solutions use{' '}
              <strong>Tailwind CSS as their foundation</strong>, so they achieve
              similar visual results and developer experience. Our approach
              utilizes DaisyUI (a CSS-only UI library built on Tailwind) just
              like ShadCN, creating alignment with modern development
              expectations while maintaining framework independence.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Key Benefits of Our Approach:
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li>
                  <strong>Framework Agnostic:</strong> Works with React,
                  Angular, Vue, and vanilla JavaScript
                </li>
                <li>
                  <strong>Build Once, Use Everywhere:</strong> Single codebase
                  for all frameworks
                </li>
                <li>
                  <strong>Consistent Experience:</strong> Same components across
                  all Trimble products
                </li>
                <li>
                  <strong>Future-Proof:</strong> Not locked into any specific
                  framework
                </li>
                <li>
                  <strong>Modern Styling:</strong> Tailwind CSS + DaisyUI for
                  contemporary UI patterns
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Framework Compatibility Matrix */}
      <Card className="hover-lift">
        <CardHeader>
          <CardTitle>Framework Support Comparison</CardTitle>
          <CardDescription>
            How each solution works across different technologies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Legend
            items={[
              { color: 'green', label: 'Fully Supported' },
              {
                color: 'red',
                label: 'Not Supported / Requires Reimplementation',
              },
            ]}
            className="mb-4"
          />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Framework</th>
                  <th className="text-center p-3 font-semibold">ShadCN</th>
                  <th className="text-center p-3 font-semibold">
                    Modus Web Components
                  </th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">React 18+</td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    Both work excellently in React
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Angular 15+</td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    Would need complete reimplementation
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Vue 3</td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    Would need complete reimplementation
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Vanilla JavaScript</td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    Direct HTML usage without framework
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Legacy Applications</td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    Can be gradually adopted
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Cost-Benefit Analysis */}
      <Card className="hover-lift">
        <CardHeader>
          <CardTitle>Development Cost Analysis</CardTitle>
          <CardDescription>
            Comparing long-term development and maintenance costs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                ShadCN Approach (React Only)
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>React Implementation</span>
                  <span className="text-green-600">1x effort</span>
                </div>
                <div className="flex justify-between">
                  <span>Angular Implementation</span>
                  <span className="text-red-600">+1x effort</span>
                </div>
                <div className="flex justify-between">
                  <span>Vue Implementation</span>
                  <span className="text-red-600">+1x effort</span>
                </div>
                <div className="flex justify-between">
                  <span>Vanilla JS Implementation</span>
                  <span className="text-red-600">+1x effort</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total Development Cost</span>
                    <span className="text-red-600">4x effort</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>+ Ongoing maintenance for each implementation</p>
                  <p>+ Potential inconsistencies across frameworks</p>
                  <p>+ Different testing strategies needed</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Modus Web Components
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Web Components Core</span>
                  <span className="text-green-600">1x effort</span>
                </div>
                <div className="flex justify-between">
                  <span>React Integration</span>
                  <span className="text-green-600">0.2x effort</span>
                </div>
                <div className="flex justify-between">
                  <span>Angular Integration</span>
                  <span className="text-green-600">0.2x effort</span>
                </div>
                <div className="flex justify-between">
                  <span>Vue Integration</span>
                  <span className="text-green-600">0.2x effort</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total Development Cost</span>
                    <span className="text-green-600">1.6x effort</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>+ Single maintenance codebase</p>
                  <p>+ Consistent behavior across frameworks</p>
                  <p>+ Unified testing strategy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800">
              <strong>Result:</strong> Web Components approach provides{' '}
              <strong>60% cost savings</strong>
              for multi-framework organizations while ensuring consistency and
              reducing maintenance overhead.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="hover-lift">
        <CardHeader>
          <CardTitle>Explore the Details</CardTitle>
          <CardDescription>
            Dive deeper into specific aspects of the comparison
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/components" className="group block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift hover:border-blue-200 hover:shadow-lg">
                <h4 className="font-semibold group-hover:text-blue-600 transition-colors duration-200">
                  Component Examples
                </h4>
                <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                  See identical components built with both approaches
                </p>
                <div className="mt-2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
            <Link to="/architecture" className="group block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift hover:border-blue-200 hover:shadow-lg">
                <h4 className="font-semibold group-hover:text-blue-600 transition-colors duration-200">
                  Technical Architecture
                </h4>
                <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                  Deep dive into compilation and distribution
                </p>
                <div className="mt-2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
            <Link to="/decision-guide" className="group block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift hover:border-blue-200 hover:shadow-lg">
                <h4 className="font-semibold group-hover:text-blue-600 transition-colors duration-200">
                  Our Decision
                </h4>
                <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                  Why this approach made sense for Trimble
                </p>
                <div className="mt-2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
