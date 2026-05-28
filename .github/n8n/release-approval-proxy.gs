/**
 * Google Apps Script proxy for Trimble n8n approve/reject webhooks.
 *
 * Google Chat openLink buttons cannot send Authorization headers.
 * This script receives the browser click and forwards to Trimble with Bearer auth.
 *
 * The approval key is read from Script properties only (not from the Chat URL).
 * Chat links use ?data=approve:<id> (single param survives Google sign-in redirects).
 *
 * Setup:
 * 1. Go to https://script.google.com → New project → paste this file
 * 2. Project Settings → Script properties:
 *    - APPROVAL_KEY              = same value as GitHub N8N_APPROVAL_KEY / n8n Load Approved|Rejected
 *    - TRIMBLE_N8N_CLIENT_ID     = OAuth client ID (same as GitHub secret)
 *    - TRIMBLE_N8N_CLIENT_SECRET = OAuth client secret (same as GitHub secret)
 *    Optional:
 *    - TRIMBLE_N8N_TOKEN_URL     = default https://stage.id.trimblecloud.com/oauth/token
 *    - TRIMBLE_N8N_SCOPE         = default Agentic-N8N-Webhook
 *    - WEBHOOK_BASE              = default Trimble n8n webhook base URL
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone in [your org] (preferred) or Anyone
 * 4. Copy the Web app URL (ends with /exec) into n8n Build Review Card as APPROVAL_PROXY_URL
 */

function doGet(e) {
  const parsed = parseRequestParams(e || {});
  const action = parsed.action;
  const id = parsed.id;

  const props = PropertiesService.getScriptProperties();
  const approvalKey = String(props.getProperty('APPROVAL_KEY') || '').trim();
  const webhookBase =
    props.getProperty('WEBHOOK_BASE') ||
    'https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook';

  if (!action || !id) {
    const received = Object.keys((e && e.parameter) || {}).join(', ') || 'none';
    return html(
      'Missing action or id.\n\n' +
        'Redeploy the latest Apps Script after pasting code updates.\n' +
        'Received query params: ' +
        received +
        '\n\nExpected URL format: ?data=approve:<approvalId>',
      400
    );
  }

  if (!approvalKey) {
    return html('Proxy not configured. Set APPROVAL_KEY in Script properties.', 500);
  }

  const path =
    action === 'approve'
      ? 'modus-wc-release-approve'
      : action === 'reject'
        ? 'modus-wc-release-reject'
        : null;

  if (!path) {
    return html('Invalid action. Use approve or reject.', 400);
  }

  let trimbleToken;
  try {
    trimbleToken = fetchTrimbleToken();
  } catch (err) {
    return html('Failed to obtain Trimble OAuth token.\n\n' + err.message, 500);
  }

  if (!trimbleToken) {
    return html('Trimble OAuth token was empty. Check TRIMBLE_N8N_CLIENT_ID and TRIMBLE_N8N_CLIENT_SECRET.', 500);
  }

  const url =
    webhookBase +
    '/' +
    path +
    '?id=' +
    encodeURIComponent(id) +
    '&key=' +
    encodeURIComponent(approvalKey);

  const response = UrlFetchApp.fetch(url, {
    method: 'get',
    muteHttpExceptions: true,
    headers: {
      Authorization: 'Bearer ' + trimbleToken,
    },
  });

  const code = response.getResponseCode();
  const body = response.getContentText();

  if (code >= 200 && code < 300) {
    const title = action === 'approve' ? 'Approved and posted' : 'Release rejected';
    return html('✅ ' + title + '\n\n' + body, code);
  }

  return html('❌ Trimble webhook failed (' + code + ')\n\n' + body, code);
}

/**
 * Parses approve/reject params from Chat links.
 * Prefer ?data=approve:<id> — one param survives Google login redirects better.
 */
function parseRequestParams(e) {
  const params = (e && e.parameter) || {};
  let action = String(params.action || '').trim();
  let id = String(params.id || '').trim();

  const data = String(params.data || '').trim();
  if (data) {
    const colon = data.indexOf(':');
    if (colon > 0) {
      action = data.substring(0, colon).trim();
      id = decodeURIComponent(data.substring(colon + 1)).trim();
    }
  }

  return { action: action, id: id };
}

/**
 * Fetches a short-lived Trimble OAuth token (cached ~50 minutes).
 * Matches Python: requests.post(..., headers={Authorization: Basic ...}, data={grant_type, scope})
 */
function fetchTrimbleToken() {
  const cache = CacheService.getScriptCache();
  const cached = cache.get('trimble_n8n_token');
  if (cached) {
    return cached;
  }

  const creds = getTrimbleOAuthCredentials();
  const token = requestTrimbleToken(creds);

  cache.put('trimble_n8n_token', token, 3000);
  return token;
}

function getTrimbleOAuthCredentials() {
  const props = PropertiesService.getScriptProperties();
  const clientId = String(props.getProperty('TRIMBLE_N8N_CLIENT_ID') || '').trim();
  const clientSecret = String(props.getProperty('TRIMBLE_N8N_CLIENT_SECRET') || '').trim();
  const tokenUrl =
    props.getProperty('TRIMBLE_N8N_TOKEN_URL') || 'https://stage.id.trimblecloud.com/oauth/token';
  const scope = props.getProperty('TRIMBLE_N8N_SCOPE') || 'Agentic-N8N-Webhook';

  if (!clientId || !clientSecret) {
    throw new Error('Set TRIMBLE_N8N_CLIENT_ID and TRIMBLE_N8N_CLIENT_SECRET in Script properties.');
  }

  if (clientId === clientSecret) {
    throw new Error(
      'TRIMBLE_N8N_CLIENT_ID and TRIMBLE_N8N_CLIENT_SECRET are identical. Paste the real secret, not the client ID twice.'
    );
  }

  return {
    clientId: clientId,
    clientSecret: clientSecret,
    tokenUrl: tokenUrl,
    scope: scope,
  };
}

function requestTrimbleToken(creds) {
  const basicAuth = Utilities.base64Encode(creds.clientId + ':' + creds.clientSecret);
  const body =
    'grant_type=client_credentials&scope=' + encodeURIComponent(creds.scope);

  const response = UrlFetchApp.fetch(creds.tokenUrl, {
    method: 'post',
    muteHttpExceptions: true,
    contentType: 'application/x-www-form-urlencoded',
    headers: {
      Authorization: 'Basic ' + basicAuth,
    },
    payload: body,
  });

  const code = response.getResponseCode();
  const text = response.getContentText();

  if (code < 200 || code >= 300) {
    throw new Error('Token request failed (' + code + '): ' + text);
  }

  const data = JSON.parse(text);
  const token = data.access_token;

  if (!token) {
    throw new Error('Token response did not include access_token: ' + text);
  }

  return token;
}

/** Run from Apps Script editor (Run ▶) to verify OAuth credentials before testing Chat buttons. */
function testTrimbleAuth() {
  CacheService.getScriptCache().remove('trimble_n8n_token');
  checkTrimbleConfig();
  const token = fetchTrimbleToken();
  Logger.log('OK — access token length: ' + token.length);
}

/** Logs non-secret config hints — run before testTrimbleAuth if OAuth fails. */
function checkTrimbleConfig() {
  const creds = getTrimbleOAuthCredentials();

  Logger.log('Token URL: ' + creds.tokenUrl);
  Logger.log('Scope: ' + creds.scope);
  Logger.log('Client ID length: ' + creds.clientId.length);
  Logger.log('Client secret length: ' + creds.clientSecret.length);
  Logger.log('Client ID starts with: ' + creds.clientId.substring(0, 8) + '...');
  Logger.log('Client secret starts with: ' + creds.clientSecret.substring(0, 8) + '...');
  Logger.log('Values are different: ' + (creds.clientId !== creds.clientSecret));
}

function html(message, status) {
  const safe = String(message)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return HtmlService.createHtmlOutput(
    '<!doctype html><html><body style="font-family:sans-serif;padding:2rem">' +
      '<pre style="white-space:pre-wrap">' +
      safe +
      '</pre></body></html>'
  );
}
