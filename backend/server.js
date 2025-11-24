// Sanitas Backend API Server - Health Platform Backend
// Entry point for the backend server
// Sets up Express, connects to MongoDB, and mounts API routes
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Enable JSON body parsing
app.use(express.json());

// CORS: allow all origins for Codespaces compatibility
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

// Connect to MongoDB
connectDB();

// Mount API routes
app.use('/api/chat', require('./routes/chat'));
app.use('/api/users', require('./routes/users'));
app.use('/api/feedback', require('./routes/feedback'));

const PORT = process.env.PORT || 5000;

// For Vercel serverless deployment
if (process.env.VERCEL) {
  module.exports = app;
} else {
  // Start server locally
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
