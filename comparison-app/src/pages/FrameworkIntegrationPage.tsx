import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

const FrameworkIntegrationPage: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<
    'react' | 'angular' | 'vue' | 'vanilla'
  >('react');

  const CodeBlock: React.FC<{
    title?: string;
    code: string;
    language?: string;
  }> = ({ title, code, language = 'javascript' }) => (
    <div className={title ? 'mt-4' : ''}>
      {title && (
        <div className="text-sm font-medium text-gray-700 mb-2">{title}:</div>
      )}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  const FrameworkExample: React.FC<{
    framework: string;
    shadcnCode: string;
    modusCode: string;
    shadcnSupported: boolean;
    notes: string;
  }> = ({ framework, shadcnCode, modusCode, shadcnSupported, notes }) => (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          {framework}
          {!shadcnSupported && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
              ShadCN Not Supported
            </span>
          )}
        </CardTitle>
        <CardDescription>{notes}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-3">
              ShadCN Approach
            </h4>
            {shadcnSupported ? (
              <CodeBlock code={shadcnCode} language="tsx" />
            ) : (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>Not Supported:</strong> ShadCN components are
                  React-only. Would require complete reimplementation in this
                  framework.
                </p>
                <CodeBlock
                  code={shadcnCode}
                  language="text"
                  title="Would need to recreate"
                />
              </div>
            )}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-3">
              Modus Web Components
            </h4>
            <CodeBlock code={modusCode} language="typescript" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Framework Integration Comparison
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Demonstrating how ShadCN's React-only approach compares to Modus Web
          Components' framework-agnostic design across different frontend
          technologies.
        </p>
      </div>

      {/* Framework Support Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Framework Support Overview</CardTitle>
          <CardDescription>
            Comprehensive comparison of framework compatibility and
            implementation effort
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Framework</th>
                  <th className="text-center p-4 font-semibold">
                    Market Share
                  </th>
                  <th className="text-center p-4 font-semibold text-blue-600">
                    ShadCN
                  </th>
                  <th className="text-center p-4 font-semibold text-green-600">
                    Modus WC
                  </th>
                  <th className="text-left p-4 font-semibold">
                    Implementation Effort
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4 font-medium">React 16+</td>
                  <td className="p-4 text-center">~40%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-gray-600">Both work excellently</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Angular 15+</td>
                  <td className="p-4 text-center">~23%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-gray-600">
                    Full reimplementation vs. npm install
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Vue 3</td>
                  <td className="p-4 text-center">~18%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-gray-600">
                    Full reimplementation vs. npm install
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Svelte</td>
                  <td className="p-4 text-center">~3%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-gray-600">
                    Full reimplementation vs. works natively
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Vanilla JavaScript</td>
                  <td className="p-4 text-center">~10%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-gray-600">
                    Not applicable vs. direct HTML usage
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Legacy Applications</td>
                  <td className="p-4 text-center">~6%</td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  </td>
                  <td className="p-4 text-gray-600">
                    Modernization required vs. gradual adoption
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
              <span>Fully Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
              <span>Not Supported / Requires Reimplementation</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Framework Selector */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Explore Framework-Specific Implementation
        </h3>
        <div className="flex justify-center space-x-2 mb-6">
          {[
            { key: 'react', label: 'React' },
            { key: 'angular', label: 'Angular' },
            { key: 'vue', label: 'Vue' },
            { key: 'vanilla', label: 'Vanilla JS' },
          ].map((framework) => (
            <button
              key={framework.key}
              onClick={() =>
                setSelectedFramework(framework.key as typeof selectedFramework)
              }
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedFramework === framework.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {framework.label}
            </button>
          ))}
        </div>
      </div>

      {/* React Example */}
      {selectedFramework === 'react' && (
        <FrameworkExample
          framework="React Implementation"
          shadcnSupported={true}
          notes="Both approaches work excellently in React, with slight differences in API and integration patterns."
          shadcnCode={`// React + ShadCN
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function ContactForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <Button type="submit" className="w-full">
        Submit Form
      </Button>
    </form>
  )
}`}
          modusCode={`// React + Modus Web Components
import { useState } from 'react'
import { ModusWcButton, ModusWcTextInput } from '@trimble-oss/moduswebcomponents-react'

function ContactForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleNameChange = (e: any) => setName(e.detail.target.value)
  const handleEmailChange = (e: any) => setEmail(e.detail.target.value)

  return (
    <form className="space-y-4">
      <ModusWcTextInput
        label="Name"
        value={name}
        onInputChange={handleNameChange}
        placeholder="Enter your name"
        required
      />
      <ModusWcTextInput
        label="Email"
        type="email"
        value={email}
        onInputChange={handleEmailChange}
        placeholder="Enter your email"
        required
      />
      <ModusWcButton 
        type="submit" 
        color="primary"
        className="w-full"
      >
        Submit Form
      </ModusWcButton>
    </form>
  )
}`}
        />
      )}

      {/* Angular Example */}
      {selectedFramework === 'angular' && (
        <FrameworkExample
          framework="Angular Implementation"
          shadcnSupported={false}
          notes="ShadCN is React-only and would require complete reimplementation. Modus WC provides native Angular integration."
          shadcnCode={`// Would need to recreate all ShadCN components in Angular
// Example of what would be needed:

@Component({
  selector: 'app-button',
  template: \`
    <button 
      [ngClass]="buttonClasses" 
      [disabled]="disabled"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  \`
})
export class ButtonComponent {
  @Input() variant: 'default' | 'secondary' | 'outline' = 'default'
  @Input() size: 'default' | 'sm' | 'lg' = 'default'
  @Input() disabled = false
  @Output() onClick = new EventEmitter<Event>()

  get buttonClasses() {
    // Would need to recreate all the class logic
    return \`btn btn-\${this.variant} btn-\${this.size}\`
  }
}

// Plus separate input, label components, etc.
// Massive implementation effort required!`}
          modusCode={`// Angular + Modus Web Components
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  template: \`
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
      <modus-wc-text-input
        label="Name"
        [value]="contactForm.get('name')?.value"
        (inputChange)="updateName($event)"
        placeholder="Enter your name"
        [required]="true">
      </modus-wc-text-input>
      
      <modus-wc-text-input
        label="Email"
        type="email"
        [value]="contactForm.get('email')?.value"
        (inputChange)="updateEmail($event)"
        placeholder="Enter your email"
        [required]="true">
      </modus-wc-text-input>
      
      <modus-wc-button 
        type="submit" 
        color="primary"
        class="w-full"
        [disabled]="!contactForm.valid">
        Submit Form
      </modus-wc-button>
    </form>
  \`
})
export class ContactFormComponent {
  contactForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  updateName(event: any) {
    this.contactForm.patchValue({ name: event.detail.target.value })
  }

  updateEmail(event: any) {
    this.contactForm.patchValue({ email: event.detail.target.value })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value)
    }
  }
}`}
        />
      )}

      {/* Vue Example */}
      {selectedFramework === 'vue' && (
        <FrameworkExample
          framework="Vue 3 Implementation"
          shadcnSupported={false}
          notes="ShadCN components would need to be completely rewritten in Vue. Modus WC works natively with Vue's reactivity system."
          shadcnCode={`<!-- Would need to recreate all ShadCN components in Vue -->
<!-- Example of what would be needed: -->

<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'secondary' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  disabled: false
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const buttonClasses = computed(() => {
  // Would need to recreate all class logic from ShadCN
  return \`btn btn-\${props.variant} btn-\${props.size}\`
})
</script>

<!-- Plus input, label, and all other components -->
<!-- Significant development effort required! -->`}
          modusCode={`<!-- Vue 3 + Modus Web Components -->
<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <modus-wc-text-input
      label="Name"
      :value="form.name"
      @input-change="updateName"
      placeholder="Enter your name"
      required
    />
    
    <modus-wc-text-input
      label="Email"
      type="email"
      :value="form.email"
      @input-change="updateEmail"
      placeholder="Enter your email"
      required
    />
    
    <modus-wc-button 
      type="submit" 
      color="primary"
      class="w-full"
      :disabled="!isFormValid"
    >
      Submit Form
    </modus-wc-button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: ''
})

const updateName = (event: any) => {
  form.value.name = event.detail.target.value
}

const updateEmail = (event: any) => {
  form.value.email = event.detail.target.value
}

const isFormValid = computed(() => {
  return form.value.name.length > 0 && 
         form.value.email.length > 0 && 
         form.value.email.includes('@')
})

const onSubmit = () => {
  if (isFormValid.value) {
    console.log('Form submitted:', form.value)
  }
}
</script>`}
        />
      )}

      {/* Vanilla JS Example */}
      {selectedFramework === 'vanilla' && (
        <FrameworkExample
          framework="Vanilla JavaScript Implementation"
          shadcnSupported={false}
          notes="ShadCN requires React and cannot be used with vanilla JavaScript. Modus WC works directly in any HTML environment."
          shadcnCode={`<!-- ShadCN cannot be used with vanilla JavaScript -->
<!-- Would need to either: -->
<!-- 1. Use React with vanilla JS (complex setup) -->
<!-- 2. Recreate components manually -->

<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <!-- Would need to bundle ShadCN components somehow -->
</head>
<body>
  <!-- This approach is not practical -->
  <!-- ShadCN is designed for React build systems -->
  
  <div id="root"></div>
  
  <script>
    // Would need complex setup to use React components
    // in vanilla JS environment - not recommended!
    
    // Alternative: Create custom HTML/CSS/JS
    const button = document.createElement('button')
    button.className = 'inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
    button.textContent = 'Custom Button'
    document.body.appendChild(button)
    
    // But this loses all the ShadCN benefits!
  </script>
</body>
</html>`}
          modusCode={`<!-- Vanilla JavaScript + Modus Web Components -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/@trimble-oss/moduswebcomponents/modus-wc-styles.css">
  <script type="module" src="https://unpkg.com/@trimble-oss/moduswebcomponents/dist/modus-wc/modus-wc.esm.js"></script>
</head>
<body>
  <form id="contactForm" class="space-y-4" style="max-width: 400px; margin: 2rem auto; padding: 2rem;">
    <modus-wc-text-input
      id="nameInput"
      label="Name"
      placeholder="Enter your name"
      required>
    </modus-wc-text-input>
    
    <modus-wc-text-input
      id="emailInput"
      label="Email"
      type="email"
      placeholder="Enter your email"
      required>
    </modus-wc-text-input>
    
    <modus-wc-button 
      id="submitBtn"
      type="submit" 
      color="primary"
      style="width: 100%">
      Submit Form
    </modus-wc-button>
  </form>

  <script>
    const form = document.getElementById('contactForm')
    const nameInput = document.getElementById('nameInput')
    const emailInput = document.getElementById('emailInput')
    
    // Listen to input changes
    nameInput.addEventListener('inputChange', (e) => {
      console.log('Name changed:', e.detail.target.value)
    })
    
    emailInput.addEventListener('inputChange', (e) => {
      console.log('Email changed:', e.detail.target.value)
    })
    
    // Handle form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      
      const formData = {
        name: nameInput.value,
        email: emailInput.value
      }
      
      console.log('Form submitted:', formData)
    })
  </script>
</body>
</html>`}
        />
      )}

      {/* Migration Considerations */}
      <Card>
        <CardHeader>
          <CardTitle>Migration & Integration Considerations</CardTitle>
          <CardDescription>
            Real-world scenarios for adopting either approach in existing
            applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-blue-600">
                ShadCN Migration Scenarios
              </h4>

              <div className="space-y-4">
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h5 className="font-semibold text-green-900">
                    ✅ Ideal Scenarios
                  </h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>New React-only projects</li>
                    <li>Existing React applications</li>
                    <li>Teams with strong React expertise</li>
                    <li>Projects requiring deep customization</li>
                  </ul>
                </div>

                <div className="p-4 border-l-4 border-red-500 bg-red-50">
                  <h5 className="font-semibold text-red-900">
                    ❌ Challenging Scenarios
                  </h5>
                  <ul className="text-sm text-red-700 mt-2 space-y-1">
                    <li>Multi-framework organizations</li>
                    <li>Legacy application integration</li>
                    <li>Micro-frontend architectures</li>
                    <li>Teams using Angular, Vue, etc.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-green-600">
                Modus WC Migration Scenarios
              </h4>

              <div className="space-y-4">
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h5 className="font-semibold text-green-900">
                    ✅ Ideal Scenarios
                  </h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>Multi-framework organizations</li>
                    <li>Gradual modernization projects</li>
                    <li>Micro-frontend architectures</li>
                    <li>Cross-team component sharing</li>
                    <li>Legacy application integration</li>
                  </ul>
                </div>

                <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                  <h5 className="font-semibold text-yellow-900">
                    ⚠️ Consider Carefully
                  </h5>
                  <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                    <li>Teams wanting full component source control</li>
                    <li>Projects requiring extensive customization</li>
                    <li>Pure React teams with no multi-framework needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-900 mb-3">
              Trimble's Decision Context
            </h5>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h6 className="font-semibold text-gray-800">
                  Technology Diversity
                </h6>
                <p className="text-gray-600 mt-1">
                  Multiple frameworks in use across different products and teams
                </p>
              </div>
              <div>
                <h6 className="font-semibold text-gray-800">
                  Legacy Integration
                </h6>
                <p className="text-gray-600 mt-1">
                  Need to modernize existing applications gradually
                </p>
              </div>
              <div>
                <h6 className="font-semibold text-gray-800">
                  Consistency Goals
                </h6>
                <p className="text-gray-600 mt-1">
                  Unified user experience across all Trimble products
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Effort Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Effort Analysis</CardTitle>
          <CardDescription>
            Quantifying the effort required to support multiple frameworks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Development Effort Comparison
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-blue-200 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-600 mb-4">
                  ShadCN Multi-Framework Approach
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>React Implementation</span>
                    <span className="text-green-600">1x effort</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Angular Recreation</span>
                    <span className="text-red-600">+1x effort</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vue Recreation</span>
                    <span className="text-red-600">+1x effort</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Testing & QA (All Frameworks)</span>
                    <span className="text-red-600">+0.8x effort</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documentation (All Frameworks)</span>
                    <span className="text-red-600">+0.5x effort</span>
                  </div>
                  <div className="border-t pt-3 mt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Relative Effort</span>
                      <span className="text-blue-600">4.3x baseline</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-2 border-green-200 rounded-lg">
                <h4 className="text-lg font-semibold text-green-600 mb-4">
                  Modus Web Components Approach
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Web Components Core</span>
                    <span className="text-green-600">1x effort</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Framework Integrations</span>
                    <span className="text-green-600">+0.3x effort</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Auto-generated Wrappers</span>
                    <span className="text-green-600">+0.1x effort</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Testing & QA (Single Codebase)</span>
                    <span className="text-green-600">+0.4x effort</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documentation (Auto-generated)</span>
                    <span className="text-green-600">+0.2x effort</span>
                  </div>
                  <div className="border-t pt-3 mt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Relative Effort</span>
                      <span className="text-green-600">2x baseline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-green-100 rounded-lg">
              <div className="text-3xl font-bold text-green-700 mb-2">
                53% Efficiency Gain
              </div>
              <p className="text-green-800">
                Modus Web Components approach provides significant development
                efficiency while ensuring consistent behavior across all
                frameworks and reducing maintenance overhead.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FrameworkIntegrationPage;
