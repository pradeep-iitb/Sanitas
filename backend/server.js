// Sanitas Backend API Server - Health Platform Backend
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

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

// Mount API routes - wrapped in try-catch to prevent crashes
try {
  app.use('/api/chat', require('./routes/chat'));
  app.use('/api/users', require('./routes/users'));
  app.use('/api/feedback', require('./routes/feedback'));
} catch (error) {
  console.error('Error loading routes:', error);
  // Fallback routes if loading fails
  app.use('/api/chat', (req, res) => res.status(500).json({ error: 'Chat route failed to load' }));
  app.use('/api/users', (req, res) => res.status(500).json({ error: 'Users route failed to load' }));
  app.use('/api/feedback', (req, res) => res.status(500).json({ error: 'Feedback route failed to load' }));
}

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
