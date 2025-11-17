// Gemini client helper
// This module provides a simple `getReply` function that calls Google Gemini API.
// For the prototype we implement a minimal HTTPS request using `node-fetch`.
// Replace with an official SDK if available.
const fetch = require('node-fetch');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function getReply(message) {
  if (!GEMINI_API_KEY) {
    // In development, return a stubbed response if API key not set
    return `Stubbed Gemini reply to: ${message}`;
  }

  // Example POST to Gemini endpoint (replace with actual URL/format)
  const url = 'https://api.example.gemini/v1/generate';

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GEMINI_API_KEY}`,
    },
    body: JSON.stringify({ prompt: message }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Gemini API error: ${resp.status} ${text}`);
  }

  const data = await resp.json();
  // Adjust according to actual response schema
  return data.reply || data.choices?.[0]?.text || JSON.stringify(data);
}

module.exports = { getReply };
