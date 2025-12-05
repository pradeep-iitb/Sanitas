// Sanitas Backend API Server - Health Platform Backend
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const geminiClient = require('./utils/geminiClient');

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

// Chat endpoint - using geminiClient
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const reply = await geminiClient.getReply(message);
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
