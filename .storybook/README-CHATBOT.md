# Modus Chatbot Setup

The AI chatbot in Storybook connects to an n8n backend workflow. Due to CORS restrictions in development, you need to run a proxy server.

## Quick Start

### Option 1: Run with Proxy Server (Recommended for Development)

1. **Start the proxy server:**
   ```bash
   node .storybook/proxy-server.js
   ```
   
2. **Start Storybook** (in another terminal):
   ```bash
   npm start
   ```

3. **Use the chatbot** - it will connect to the real n8n backend through the proxy!

### Option 2: Mock Responses Only

If you just want to test the UI without the backend:

1. **Start Storybook:**
   ```bash
   npm start
   ```

2. **Use the chatbot** - it will use intelligent mock responses about Modus Web Components.

## How It Works

### Development Mode
- **Proxy Server**: Runs on `http://localhost:8080` and forwards requests to n8n
- **No CORS Issues**: The proxy server adds proper CORS headers
- **Real AI Responses**: Get actual responses from the n8n workflow

### Fallback Mode
- **Mock Responses**: Context-aware responses about Modus Web Components
- **No Backend Required**: Works offline for UI testing
- **Educational**: Provides helpful information about the component library

### Production Mode
- **Direct Connection**: Will connect directly to n8n when CORS is properly configured
- **Automatic Switching**: No code changes needed for production deployment

## Proxy Server Features

- ✅ **CORS Handling**: Adds proper headers for browser requests
- ✅ **Request Logging**: See all requests and responses in the console  
- ✅ **Error Handling**: Graceful fallback if n8n is unavailable
- ✅ **Health Check**: Visit `http://localhost:8080/health` to check status

## Testing the Proxy

Test the proxy server directly:

```bash
curl -X POST http://localhost:8080/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello, how do I use buttons?"}'
```

## Troubleshooting

### Proxy Server Issues
- Make sure port 8080 is available
- Check that the n8n webhook URL is correct
- Look at the proxy server console for error messages

### Storybook Issues  
- Refresh the page if the chatbot doesn't appear
- Check the browser console for any errors
- Make sure Storybook is running on `http://localhost:6006`

## Configuration

The n8n webhook URL is configured in `proxy-server.js`:
```javascript
const N8N_WEBHOOK_URL = 'https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook/13c9af66-ae24-4a28-8bd7-589637f05b23/modus-chat/chat';
```

Update this URL if your n8n webhook changes.
