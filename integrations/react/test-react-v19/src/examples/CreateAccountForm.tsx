import { useState } from 'react';
import { ModusWcTextInput, ModusWcSwitch, ModusWcButton } from '@trimble-oss/moduswebcomponents-react';

/**
 * Create Account Form Example
 * Generated from Figma design using Figma MCP and Modus Docs MCP
 * Source: https://www.figma.com/design/kLKbrIfRJA7IutXoutdS3w/test-mcp?node-id=2757-60
 */
export function CreateAccountForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log('Form Data:', {
      fullName,
      email,
      emailNotifications,
    });
    alert(`Account created for: ${email}`);
  };

  return (
    <div
      style={{
        background: '#f1f1f6',
        borderRadius: '16px',
        padding: '28px',
        width: '392px',
        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: '36px',
          lineHeight: '54px',
          color: '#171c1e',
          margin: '0 0 7px 0',
          fontWeight: 400,
        }}
      >
        Create Account
      </h1>

      {/* Subheading */}
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: '14px',
          lineHeight: '21px',
          color: '#6a6e79',
          margin: '0 0 7px 0',
        }}
      >
        Fill in your details to get started
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '21px',
          marginTop: '7px',
        }}
      >
        {/* Full Name Input */}
        <ModusWcTextInput
          label="Full Name"
          placeholder="Enter your full name"
          size="sm"
          value={fullName}
          onInputChange={(e: CustomEvent) => setFullName(e.detail.target.value)}
          required
          aria-label="Full name input"
        />

        {/* Email Input */}
        <ModusWcTextInput
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          size="sm"
          value={email}
          onInputChange={(e: CustomEvent) => setEmail(e.detail.target.value)}
          required
          aria-label="Email address input"
        />

        {/* Email Notifications Switch */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '21px 0',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '12px',
                lineHeight: '18px',
                color: '#171c1e',
                marginBottom: '2px',
              }}
            >
              Email Notifications
            </div>
            <div
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '12px',
                lineHeight: '18px',
                color: '#6a6e79',
              }}
            >
              Receive updates and news via email
            </div>
          </div>
          <ModusWcSwitch
            size="sm"
            value={emailNotifications}
            onInputChange={(e: CustomEvent) => setEmailNotifications(e.detail.target.checked)}
            aria-label="Toggle email notifications"
          />
        </div>

        {/* Create Account Button */}
        <ModusWcButton
          type="submit"
          color="primary"
          variant="filled"
          size="sm"
          style={{ width: '100%' }}
          aria-label="Create account"
        >
          Create Account
        </ModusWcButton>

        {/* Sign In Button */}
        <ModusWcButton
          type="button"
          variant="borderless"
          size="sm"
          style={{ width: '100%' }}
          aria-label="Sign in to existing account"
        >
          Already have an account? Sign in
        </ModusWcButton>
      </form>
    </div>
  );
}


