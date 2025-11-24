// AI client helper - supports both OpenAI and Gemini
// Tries multiple models for reliability
const fetch = require('node-fetch');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function tryGemini(message) {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `You are Meru AI, a helpful and compassionate health assistant. Provide accurate, clear health information while being empathetic. Always remind users to consult healthcare professionals for serious concerns.\n\nUser: ${message}\nAssistant:`
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Gemini API error: ${resp.status} ${text}`);
  }

  const data = await resp.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
}

async function tryOpenAI(message) {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured');
  }

  const url = 'https://api.openai.com/v1/chat/completions';

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are Meru AI, a helpful and compassionate health assistant. Provide accurate, clear health information while being empathetic. Always remind users to consult healthcare professionals for serious concerns.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`OpenAI API error: ${resp.status} ${text}`);
  }

  const data = await resp.json();
  return data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
}

async function getReply(message) {
  console.log('Attempting to get AI response for:', message);
  
  // Try Gemini first
  if (GEMINI_API_KEY) {
    try {
      console.log('Trying Gemini API...');
      const reply = await tryGemini(message);
      console.log('Gemini API success!');
      return reply;
    } catch (err) {
      console.warn('Gemini failed:', err.message);
    }
  }

  // Try OpenAI as fallback
  if (OPENAI_API_KEY) {
    try {
      console.log('Trying OpenAI API...');
      const reply = await tryOpenAI(message);
      console.log('OpenAI API success!');
      return reply;
    } catch (err) {
      console.warn('OpenAI failed:', err.message);
    }
  }

  // If both fail or no keys configured, return a helpful message
  return `Hello! I'm Meru AI, your health assistant. I'm currently experiencing technical difficulties with the AI service. Please ensure your API keys are properly configured. In the meantime, I'd be happy to help once the service is restored. For urgent health concerns, please consult a healthcare professional directly.`;
}

module.exports = { getReply };
