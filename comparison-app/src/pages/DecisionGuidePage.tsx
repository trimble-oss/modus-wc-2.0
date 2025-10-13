import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';

const DecisionGuidePage: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState<
    'single-framework' | 'multi-framework' | 'legacy' | 'startup'
  >('multi-framework');

  const ScenarioCard: React.FC<{
    title: string;
    description: string;
    recommendation: 'shadcn' | 'modus-wc' | 'either';
    reasoning: string[];
    considerations: string[];
  }> = ({ title, description, recommendation, reasoning, considerations }) => {
    const getRecommendationColor = () => {
      switch (recommendation) {
        case 'shadcn':
          return 'text-blue-600 bg-blue-50 border-blue-200';
        case 'modus-wc':
          return 'text-green-600 bg-green-50 border-green-200';
        case 'either':
          return 'text-purple-600 bg-purple-50 border-purple-200';
      }
    };

    const getRecommendationLabel = () => {
      switch (recommendation) {
        case 'shadcn':
          return '✨ ShadCN Would Be Better Here';
        case 'modus-wc':
          return '🚀 Validates Our Modus WC Choice';
        case 'either':
          return '⚖️ Both Approaches Viable';
      }
    };

    return (
      <Card className={`border-2 ${getRecommendationColor()}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{title}</CardTitle>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getRecommendationColor()}`}
            >
              {getRecommendationLabel()}
            </span>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">
                Why this validates our choice:
              </h5>
              <ul className="space-y-1">
                {reasoning.map((reason, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 flex items-start space-x-2"
                  >
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            {considerations.length > 0 && (
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  Key considerations:
                </h5>
                <ul className="space-y-1">
                  {considerations.map((consideration, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 flex items-start space-x-2"
                    >
                      <span className="text-yellow-500 mt-0.5">⚠️</span>
                      <span>{consideration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Why Our Decision Made Sense: Validating Trimble's Choice
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Understanding how our architectural decision to choose Modus Web
          Components aligns with different organizational scenarios and
          validates our strategic choice for Trimble's diverse technology
          ecosystem.
        </p>
      </div>

      {/* Quick Decision Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Decision Matrix</CardTitle>
          <CardDescription>
            Answer a few key questions to get a recommendation tailored to your
            situation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Technology Context
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Using only React?</span>
                    <span className="text-blue-600 font-semibold">
                      → ShadCN
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Multiple frameworks?</span>
                    <span className="text-green-600 font-semibold">
                      → Modus WC
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Legacy applications?</span>
                    <span className="text-green-600 font-semibold">
                      → Modus WC
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Micro-frontends?</span>
                    <span className="text-green-600 font-semibold">
                      → Modus WC
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Team & Project Needs
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Full customization control?</span>
                    <span className="text-blue-600 font-semibold">
                      → ShadCN
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Rapid prototyping?</span>
                    <span className="text-purple-600 font-semibold">
                      → Either
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Enterprise consistency?</span>
                    <span className="text-green-600 font-semibold">
                      → Modus WC
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Team React expertise?</span>
                    <span className="text-blue-600 font-semibold">
                      → ShadCN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scenario-Based Recommendations */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Detailed Scenario Analysis
        </h2>

        {/* Scenario Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { key: 'multi-framework', label: 'Multi-Framework Org' },
            { key: 'single-framework', label: 'React-Only Team' },
            { key: 'legacy', label: 'Legacy Migration' },
            { key: 'startup', label: 'New Startup' },
          ].map((scenario) => (
            <button
              key={scenario.key}
              onClick={() =>
                setCurrentScenario(scenario.key as typeof currentScenario)
              }
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentScenario === scenario.key
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {scenario.label}
            </button>
          ))}
        </div>

        {/* Multi-Framework Organization */}
        {currentScenario === 'multi-framework' && (
          <ScenarioCard
            title="Multi-Framework Organization (Like Trimble) ✅"
            description="Large organization with teams using React, Angular, Vue, and legacy technologies. Need consistent UI across all products."
            recommendation="modus-wc"
            reasoning={[
              'Single implementation covers all frameworks, reducing development and maintenance costs',
              'Ensures consistent user experience across all products regardless of underlying technology',
              'Enables gradual modernization without forcing framework migrations',
              'Simplifies component library maintenance and updates across the organization',
              'Provides framework flexibility for different teams and use cases',
            ]}
            considerations={[
              'Learning curve for teams new to Web Components',
              'Less direct source control over component internals',
              'Customization primarily through props and CSS custom properties',
              'May require education on Web Components patterns for some developers',
            ]}
          />
        )}

        {/* React-Only Team */}
        {currentScenario === 'single-framework' && (
          <ScenarioCard
            title="React-Only Development Team"
            description="Small to medium team exclusively using React for all projects. No plans to use other frameworks."
            recommendation="shadcn"
            reasoning={[
              'Perfect fit for React ecosystem with excellent developer experience',
              'Full control over component source code enables unlimited customization',
              'Copy-paste model means no external dependencies or breaking changes',
              'Excellent TypeScript integration and React patterns',
              'Strong community support and extensive documentation',
            ]}
            considerations={[
              'Locked into React ecosystem - difficult to change frameworks later',
              'Manual updates required when ShadCN releases improvements',
              'Need to maintain component code as part of your application',
              'Higher learning curve if team is new to Tailwind CSS and Radix UI',
            ]}
          />
        )}

        {/* Legacy Migration */}
        {currentScenario === 'legacy' && (
          <ScenarioCard
            title="Legacy Application Modernization"
            description="Gradually modernizing older applications with jQuery, vanilla JS, or legacy frameworks. Need components that work everywhere."
            recommendation="modus-wc"
            reasoning={[
              'Web Components work in any HTML environment, enabling gradual adoption',
              'No need to rewrite entire applications - add modern components incrementally',
              'Framework-agnostic approach works with existing tech stack',
              'Can coexist with legacy code without conflicts',
              'Provides clear migration path to modern development',
            ]}
            considerations={[
              'May need polyfills for older browser support',
              'Integration with legacy state management may require custom solutions',
              'Team training on modern component patterns may be needed',
              'Performance testing required when mixing with legacy code',
            ]}
          />
        )}

        {/* New Startup */}
        {currentScenario === 'startup' && (
          <ScenarioCard
            title="New Startup / Greenfield Project"
            description="Starting from scratch with a small, agile team. Need to move fast and iterate quickly while keeping future flexibility."
            recommendation="either"
            reasoning={[
              'Both approaches support rapid development and prototyping',
              'ShadCN offers maximum customization for unique brand requirements',
              'Modus WC provides faster setup and built-in design system',
              'Decision should be based on team expertise and future plans',
              'Both have excellent documentation and community support',
            ]}
            considerations={[
              "Consider team's React expertise (favors ShadCN) vs. future framework flexibility (favors Modus WC)",
              'Evaluate design requirements - unique branding (ShadCN) vs. standard enterprise UI (Modus WC)',
              'Think about scaling plans - single product (either) vs. multiple products (Modus WC)',
              'Consider hiring plans - React specialists (ShadCN) vs. diverse frontend skills (Modus WC)',
            ]}
          />
        )}
      </div>

      {/* Cost-Benefit Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Long-Term Cost Analysis</CardTitle>
          <CardDescription>
            Understanding the total cost of ownership for each approach over 3
            years
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-blue-600">
                ShadCN Total Cost of Ownership
              </h4>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-900">
                    Initial Development
                  </h5>
                  <div className="text-sm text-blue-700 mt-2">
                    <div className="flex justify-between">
                      <span>Setup and learning:</span>
                      <span>2-4 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Component implementation:</span>
                      <span>4-8 weeks</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-1 mt-1">
                      <span>Total initial:</span>
                      <span>6-12 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-100 rounded-lg">
                  <h5 className="font-semibold text-gray-900">
                    Ongoing Maintenance
                  </h5>
                  <div className="text-sm text-gray-700 mt-2">
                    <div>Manual component updates</div>
                    <div>Customization maintenance</div>
                    <div>Testing after updates</div>
                    <div>Bug fixes and improvements</div>
                    <div className="font-semibold mt-2">~20% of dev time</div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-lg">
                  <h5 className="font-semibold text-red-900">
                    Multi-Framework Scaling
                  </h5>
                  <div className="text-sm text-red-700 mt-2">
                    <div>Angular implementation: +100% effort</div>
                    <div>Vue implementation: +95% effort</div>
                    <div>Maintenance overhead: +200% effort</div>
                    <div className="font-semibold mt-2">
                      3x total cost for 3 frameworks
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-green-600">
                Modus WC Total Cost of Ownership
              </h4>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-900">
                    Initial Development
                  </h5>
                  <div className="text-sm text-green-700 mt-2">
                    <div className="flex justify-between">
                      <span>Setup and learning:</span>
                      <span>1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Component integration:</span>
                      <span>2-4 weeks</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t pt-1 mt-1">
                      <span>Total initial:</span>
                      <span>3-6 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-100 rounded-lg">
                  <h5 className="font-semibold text-gray-900">
                    Ongoing Maintenance
                  </h5>
                  <div className="text-sm text-gray-700 mt-2">
                    <div>Automatic package updates</div>
                    <div>Theme customizations only</div>
                    <div>Consistent behavior guaranteed</div>
                    <div>Centralized bug fixes</div>
                    <div className="font-semibold mt-2">~5% of dev time</div>
                  </div>
                </div>

                <div className="p-4 bg-green-100 rounded-lg">
                  <h5 className="font-semibold text-green-900">
                    Multi-Framework Scaling
                  </h5>
                  <div className="text-sm text-green-700 mt-2">
                    <div>Angular integration: +10% effort</div>
                    <div>Vue integration: +10% effort</div>
                    <div>Maintenance overhead: +0% effort</div>
                    <div className="font-semibold mt-2">
                      Same cost for any number of frameworks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  Single Framework
                </div>
                <div className="text-sm text-blue-800 mt-1">
                  ShadCN slight edge
                </div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">
                  2 Frameworks
                </div>
                <div className="text-sm text-yellow-800 mt-1">
                  Modus WC breaks even
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  3+ Frameworks
                </div>
                <div className="text-sm text-green-800 mt-1">
                  Modus WC clear winner
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Migration Strategies */}
      <Card>
        <CardHeader>
          <CardTitle>Migration Strategies</CardTitle>
          <CardDescription>
            If you need to switch approaches, here's how to do it gradually and
            safely
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-4">
                From ShadCN to Modus WC
              </h4>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <div className="font-semibold text-blue-900">
                    Phase 1: Coexistence
                  </div>
                  <div className="text-sm text-blue-700 mt-1">
                    Install Modus WC alongside existing ShadCN components. Start
                    using Modus WC for new features.
                  </div>
                </div>
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <div className="font-semibold text-blue-900">
                    Phase 2: Gradual Replacement
                  </div>
                  <div className="text-sm text-blue-700 mt-1">
                    Replace ShadCN components with Modus WC equivalents during
                    regular maintenance cycles.
                  </div>
                </div>
                <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                  <div className="font-semibold text-blue-900">
                    Phase 3: Framework Expansion
                  </div>
                  <div className="text-sm text-blue-700 mt-1">
                    Leverage Modus WC's framework agnosticism to support
                    additional frameworks.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-green-600 mb-4">
                From Modus WC to ShadCN
              </h4>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="font-semibold text-green-900">
                    Phase 1: Wrapper Creation
                  </div>
                  <div className="text-sm text-green-700 mt-1">
                    Create React wrapper components around Modus WC while
                    implementing ShadCN alternatives.
                  </div>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="font-semibold text-green-900">
                    Phase 2: Component Replacement
                  </div>
                  <div className="text-sm text-green-700 mt-1">
                    Replace Modus WC components with ShadCN equivalents,
                    maintaining API compatibility.
                  </div>
                </div>
                <div className="p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="font-semibold text-green-900">
                    Phase 3: Framework Lock-in
                  </div>
                  <div className="text-sm text-green-700 mt-1">
                    Accept React-only constraint and gain full control over
                    component source code.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Summary & Final Recommendations</CardTitle>
          <CardDescription>
            Key takeaways to help make the right choice for your specific
            situation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">
                  Choose ShadCN When:
                </h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>You're building React-only applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>
                      Your team has strong React and Tailwind expertise
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>You need maximum customization and control</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>You prefer owning component source code</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Framework consistency is not a concern</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-900 mb-3">
                  Choose Modus WC When:
                </h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>You use multiple frontend frameworks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>You need consistent UI across all applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>You're modernizing legacy applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>You want to minimize maintenance overhead</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Future framework flexibility is important</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Why Trimble's Decision Was Right: Validation Through Analysis
              </h4>
              <p className="text-gray-700 text-sm max-w-3xl mx-auto">
                Our comprehensive analysis validates that choosing Web
                Components was the optimal decision for Trimble's diverse
                technology landscape, consistency requirements across 40+
                products, and long-term maintenance goals. The decision
                prioritized <strong>strategic flexibility</strong> and
                <strong> operational efficiency</strong> over short-term
                development convenience - exactly what our organization needed.
              </p>
            </div>

            <div className="text-center">
              <h5 className="font-semibold text-gray-900 mb-3">
                Ready to get started?
              </h5>
              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <a
                    href="https://ui.shadcn.com/docs/installation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try ShadCN
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://trimble-oss.github.io/modus-wc-2.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try Modus WC
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DecisionGuidePage;
