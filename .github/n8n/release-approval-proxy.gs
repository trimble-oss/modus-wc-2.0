/**
 * Google Apps Script proxy for Trimble n8n approve/reject webhooks.
 *
 * Google Chat openLink buttons cannot send Authorization headers.
 * This script receives the browser click and forwards to Trimble with Bearer auth.
 *
 * Setup:
 * 1. Go to https://script.google.com → New project → paste this file
 * 2. Project Settings → Script properties:
 *    - APPROVAL_KEY = same value as n8n Build Review Card
 *    - TRIMBLE_TOKEN = same Bearer token used for GitHub N8N_WEBHOOK_TOKEN
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone (or Anyone in org)
 * 4. Copy the Web app URL into n8n Build Review Card as APPROVAL_PROXY_URL
 */

function doGet(e) {
  const action = e.parameter.action;
  const id = e.parameter.id;
  const key = e.parameter.key;

  const props = PropertiesService.getScriptProperties();
  const approvalKey = props.getProperty('APPROVAL_KEY');
  const trimbleToken = props.getProperty('TRIMBLE_TOKEN');
  const webhookBase =
    props.getProperty('WEBHOOK_BASE') ||
    'https://flows-webhook.stage.trimble-ai.com/agentic/workflows/v1/webhook';

  if (!action || !id || !key) {
    return html('Missing action, id, or key.', 400);
  }

  if (!approvalKey || !trimbleToken) {
    return html('Proxy not configured. Set APPROVAL_KEY and TRIMBLE_TOKEN in Script properties.', 500);
  }

  if (key !== approvalKey) {
    return html('Invalid approval key.', 403);
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

  const url =
    webhookBase +
    '/' +
    path +
    '?id=' +
    encodeURIComponent(id) +
    '&key=' +
    encodeURIComponent(key);

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
