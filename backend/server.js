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

// CORS: allow requests from frontend (GitHub Pages). Adjust origin in production.
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }));

// Connect to MongoDB
connectDB();

// Mount API routes
app.use('/api/chat', require('./routes/chat'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
