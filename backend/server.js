// Sanitas Backend API Server - Health Platform Backend
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');

dotenv.config();

const app = express();

// Enable JSON body parsing
app.use(express.json());

// CORS: allow all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false
}));

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Sanitas Backend API is running!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Chat endpoint - inline implementation
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
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

    const reply = await new Promise((resolve, reject) => {
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

      const req = https.request(options, (apiRes) => {
        let data = '';
        
        apiRes.on('data', (chunk) => {
          data += chunk;
        });
        
        apiRes.on('end', () => {
          try {
            if (apiRes.statusCode !== 200) {
              reject(new Error(`Gemini API error: ${apiRes.statusCode} ${data}`));
              return;
            }
            
            const jsonData = JSON.parse(data);
            const replyText = jsonData.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
            resolve(replyText);
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

    return res.json({ reply });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ error: 'Server error', details: error.message });
  }
});

// Feedback endpoint
app.post('/api/feedback', (req, res) => {
  console.log('Feedback received:', req.body);
  res.json({ message: 'Feedback received', success: true });
});

// Users endpoints
app.post('/api/users', (req, res) => {
  res.json({ message: 'User creation disabled on serverless' });
});

app.get('/api/users/:id', (req, res) => {
  res.json({ message: 'User retrieval disabled on serverless' });
});

const PORT = process.env.PORT || 5000;

// Export for Vercel serverless
module.exports = app;

// Start server only in local/non-serverless environment
if (!process.env.VERCEL && require.main === module) {
  const server = app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌍 Backend URL: http://localhost:${PORT}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`❌ Port ${PORT} is already in use!`);
      console.log('💡 Try: kill -9 $(lsof -t -i:5000) or use a different port');
      process.exit(1);
    } else {
      console.error('❌ Server error:', err);
      process.exit(1);
    }
  });
}
