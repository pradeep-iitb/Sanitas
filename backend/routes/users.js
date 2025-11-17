// Basic CRUD routes for users and chat history listing
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const ChatHistory = require('../models/chatHistory');

// Create user
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get user and recent chats
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    const chats = await ChatHistory.find({ user: user._id }).sort({ createdAt: -1 }).limit(50);
    res.json({ user, chats });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
