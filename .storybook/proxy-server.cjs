const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

// OAuth credentials
const CLIENT_ID = "194bb8f5-5342-420b-b560-9ae5e8d30ef4";
const CLIENT_SECRET = "1456dd061d244a6483349d5bbb32ae52";
const OAUTH_URL = 'https://stage.id.trimblecloud.com/oauth/token';

// n8n webhook URL (production)
const N8N_WEBHOOK_URL = 'https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook/modus-chat/';

// Cache for access token
let accessToken = null;
let tokenExpiry = null;

// Enable CORS for Storybook
app.use(cors({
  origin: 'http://localhost:6006',
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// Function to get access token
async function getAccessToken() {
  // Check if we have a valid cached token
  if (accessToken && tokenExpiry && Date.now() < tokenExpiry) {
    return accessToken;
  }

  console.log('Getting new access token...');
  
  try {
    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    
    const response = await axios.post(OAUTH_URL, 
      'grant_type=client_credentials&scope=Agentic-N8N-Webhook',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${credentials}`
        }
      }
    );

    accessToken = response.data.access_token;
    // Set expiry to 5 minutes before actual expiry for safety
    tokenExpiry = Date.now() + ((response.data.expires_in - 300) * 1000);
    
    console.log('✅ Access token obtained successfully');
    return accessToken;
  } catch (error) {
    console.error('❌ Failed to get access token:', error.response?.data || error.message);
    throw error;
  }
}

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.method === 'POST') {
    console.log('Body:', JSON.stringify(req.body, null, 2));
  }
  next();
});

// Chat endpoint specifically for the chatbot
app.post('/chat', async (req, res) => {
  try {
    console.log(`Proxying chat to n8n with OAuth...`);
    
    // Get access token
    const token = await getAccessToken();
    
    const response = await axios.post(`${N8N_WEBHOOK_URL}`, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      timeout: 60000 // 60 second timeout for AI responses
    });
    
    console.log(`✅ Response from n8n:`, JSON.stringify(response.data, null, 2));
    
    // Check if n8n returned an error about unknown operation
    if (response.data.error && response.data.error.includes('Unknown operation')) {
      console.log('❌ n8n workflow does not recognize this operation, using fallback');
      res.status(500).json({ 
        fallback: true,
        error: 'n8n workflow configuration issue: ' + response.data.error
      });
      return;
    }
    
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error proxying to n8n:', error.message);
    
    // Handle different types of errors
    if (error.response?.status === 401) {
      console.log('🔄 Token expired, clearing cache and retrying...');
      accessToken = null;
      tokenExpiry = null;
      
      // Retry once with new token
      try {
        const token = await getAccessToken();
        const retryResponse = await axios.post(`${N8N_WEBHOOK_URL}`, req.body, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          timeout: 60000
        });
        console.log(`✅ Retry successful:`, JSON.stringify(retryResponse.data, null, 2));
        res.json(retryResponse.data);
        return;
      } catch (retryError) {
        console.error('❌ Retry failed:', retryError.message);
      }
    }
    
    if (error.response) {
      console.error('n8n response:', error.response.data);
      res.status(error.response.status).json({
        error: 'n8n error: ' + (error.response.data?.message || error.response.statusText)
      });
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(500).json({ error: 'Cannot connect to n8n service' });
    } else {
      res.status(500).json({ error: 'Failed to connect to n8n: ' + error.message });
    }
  }
});

// Proxy all other operations to n8n with OAuth authentication
app.post('/:operation', async (req, res) => {
  try {
    const operation = req.params.operation;
    console.log(`Proxying ${operation} to n8n with OAuth...`);
    
    // Get access token
    const token = await getAccessToken();
    
    const response = await axios.post(`${N8N_WEBHOOK_URL}/${operation}`, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      timeout: 60000 // 60 second timeout for AI responses
    });
    
    console.log(`✅ Response from n8n:`, JSON.stringify(response.data, null, 2));
    res.json(response.data);
  } catch (error) {
    console.error('❌ Error proxying to n8n:', error.message);
    
    // Handle different types of errors
    if (error.response?.status === 401) {
      console.log('🔄 Token expired, clearing cache and retrying...');
      accessToken = null;
      tokenExpiry = null;
      
      // Retry once with new token
      try {
        const token = await getAccessToken();
        const retryResponse = await axios.post(`${N8N_WEBHOOK_URL}/${req.params.operation}`, req.body, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          timeout: 60000
        });
        console.log(`✅ Retry successful:`, JSON.stringify(retryResponse.data, null, 2));
        res.json(retryResponse.data);
        return;
      } catch (retryError) {
        console.error('❌ Retry failed:', retryError.message);
      }
    }
    
    if (error.response) {
      console.error('n8n response:', error.response.data);
      res.status(error.response.status).json({
        error: 'n8n error: ' + (error.response.data?.message || error.response.statusText)
      });
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      res.status(500).json({ error: 'Cannot connect to n8n service' });
    } else {
      res.status(500).json({ error: 'Failed to connect to n8n: ' + error.message });
    }
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Proxy server is running' });
});

// Initialize and start server
app.listen(PORT, async () => {
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
  console.log(`📡 Proxying requests to n8n webhook: ${N8N_WEBHOOK_URL}`);
  
  // Pre-fetch access token on startup
  try {
    await getAccessToken();
    console.log(`🔑 OAuth token ready`);
  } catch (error) {
    console.error(`⚠️  Warning: Could not get initial OAuth token:`, error.message);
  }
});
