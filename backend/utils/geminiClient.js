// Gemini AI client helper
const https = require('https');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function getReply(message) {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

  const requestBody = JSON.stringify({
    contents: [{
      parts: [{
        text: `You are Meru AI, a helpful and compassionate health assistant. Provide accurate, clear health information while being empathetic. Always remind users to consult healthcare professionals for serious concerns.\n\nUser: ${message}\nAssistant:`
      }]
    }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 500,
    }
  });

  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          if (res.statusCode !== 200) {
            reject(new Error(`Gemini API error: ${res.statusCode} ${data}`));
            return;
          }
          
          const jsonData = JSON.parse(data);
          const reply = jsonData.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
          resolve(reply);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(requestBody);
    req.end();
  });
}

module.exports = { getReply };
