# Modus Chatbot Deployment Strategy

## Current Status ✅
- **Development**: Working with local proxy server on `http://localhost:3001`
- **n8n Backend**: Connected to production webhook with OAuth authentication
- **Real AI**: Getting actual AI responses about Modus Web Components
- **Fallback System**: Smart mock responses when backend is unavailable

## Production Deployment Options

### Option 1: Direct Connection (Recommended for HTTPS)

When you deploy Storybook to HTTPS (e.g., GitHub Pages, Netlify, Vercel), you can configure the chatbot to connect directly to the n8n webhook without a proxy server.

#### Why This Works:
- **HTTPS to HTTPS**: No CORS issues when both sites use HTTPS
- **Same-origin policy**: Modern browsers allow HTTPS → HTTPS requests
- **No proxy needed**: Direct connection reduces complexity

#### Implementation:
```typescript
// In Chatbot.tsx - update sendToN8N method
private sendToN8N = async (message: string) => {
  const payload = {
    message: message,
    timestamp: new Date().toISOString(),
    sessionId: this.getSessionId(),
    source: 'modus-storybook-production'
  };

  // In production (HTTPS), try direct connection first
  if (window.location.protocol === 'https:') {
    try {
      const response = await fetch('https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook/modus-chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await this.getProductionToken()}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        this.addAIResponse(data.output || data.response || data.message);
        return;
      }
    } catch (error) {
      console.log('Direct connection failed, using fallback');
    }
  }

  // Fallback to mock responses
  this.addMockAIResponse(message);
};
```

### Option 2: Serverless Proxy Function

Deploy a serverless function (Vercel, Netlify, AWS Lambda) that handles OAuth and proxies requests.

#### Vercel Function Example:
```javascript
// api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get OAuth token
    const tokenResponse = await fetch('https://stage.id.trimblecloud.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from('194bb8f5-5342-420b-b560-9ae5e8d30ef4:1456dd061d244a6483349d5bbb32ae52').toString('base64')}`
      },
      body: 'grant_type=client_credentials&scope=Agentic-N8N-Webhook'
    });

    const tokenData = await tokenResponse.json();

    // Forward to n8n
    const n8nResponse = await fetch('https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook/modus-chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenData.access_token}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await n8nResponse.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: true });
  }
}
```

### Option 3: Environment-Based Configuration

Use environment variables to switch between development and production modes.

#### Implementation:
```typescript
// Environment detection
const isDevelopment = window.location.hostname === 'localhost';
const PROXY_URL = isDevelopment 
  ? 'http://localhost:3001/chat' 
  : '/api/chat'; // Serverless function or direct

// In sendToN8N method
const response = await fetch(PROXY_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
});
```

## Recommended Deployment Flow

### Phase 1: Current Development ✅
- **Local proxy server**: `node .storybook/proxy-server.cjs`
- **Storybook development**: `npm start`
- **Real AI responses**: Working perfectly

### Phase 2: Production Deployment (When Ready)

#### Option A: Direct HTTPS Connection
1. **Deploy Storybook** to HTTPS hosting (GitHub Pages, Netlify, etc.)
2. **Update chatbot** to use direct n8n connection for HTTPS
3. **Keep fallback system** for reliability
4. **No additional infrastructure** needed

#### Option B: Serverless Proxy
1. **Deploy Storybook** with serverless function
2. **Create `/api/chat` endpoint** that handles OAuth
3. **Update chatbot** to use relative URL `/api/chat`
4. **More secure** (OAuth credentials server-side)

## Configuration Files Needed

### 1. Environment Configuration
```typescript
// config/chatbot.config.ts
export const ChatbotConfig = {
  development: {
    proxyUrl: 'http://localhost:3001/chat',
    fallbackEnabled: true
  },
  production: {
    proxyUrl: '/api/chat', // or direct n8n URL
    fallbackEnabled: true,
    directN8nUrl: 'https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook/modus-chat/'
  }
};
```

### 2. OAuth Token Management (for direct connection)
```typescript
// utils/oauth.ts
class OAuthManager {
  private static token: string | null = null;
  private static expiry: number | null = null;

  static async getToken(): Promise<string> {
    if (this.token && this.expiry && Date.now() < this.expiry) {
      return this.token;
    }

    // Get new token logic here
    return this.token;
  }
}
```

## Security Considerations

### Development
- **OAuth credentials**: Exposed in proxy server (acceptable for dev)
- **Local only**: Proxy server only accessible from localhost

### Production
- **OAuth credentials**: Should be server-side (serverless function)
- **Direct connection**: Only if CORS is properly configured
- **Fallback system**: Always maintain mock responses as backup

## Testing Strategy

### Before Deployment
1. **Test direct HTTPS connection** from browser console on any HTTPS site
2. **Verify CORS headers** on production n8n webhook
3. **Test OAuth flow** with production credentials
4. **Validate fallback system** works when backend is down

### After Deployment
1. **Monitor chatbot functionality** in production Storybook
2. **Check error rates** and fallback usage
3. **Verify OAuth token refresh** is working
4. **Test from different browsers/devices**

## Maintenance

### Monitoring
- **Track usage**: Log successful vs fallback responses
- **Monitor errors**: OAuth failures, network issues
- **Performance**: Response times and user experience

### Updates
- **OAuth credentials**: Rotate as needed
- **Webhook URLs**: Update when n8n endpoints change
- **Fallback responses**: Keep mock responses updated with new components

## Current Files

### Development Setup
- **Proxy Server**: `.storybook/proxy-server.cjs`
- **Chatbot Component**: `.storybook/Chatbot/Chatbot.tsx`
- **Integration**: `.storybook/preview.ts` and `.storybook/preview-body.html`

### Documentation
- **Setup Guide**: `.storybook/README-CHATBOT.md`
- **Deployment Strategy**: `.storybook/DEPLOYMENT-STRATEGY.md` (this file)

## Next Steps

1. **Continue development** with current local proxy setup
2. **Finalize Storybook content** and components
3. **Choose deployment option** based on hosting platform
4. **Implement production configuration** when ready to deploy
5. **Test thoroughly** before going live

The current setup provides a solid foundation that can easily transition to production with minimal changes! 🚀
