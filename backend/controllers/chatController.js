// Controller for chat endpoints
// Receives user input, calls Gemini client, stores chat history
const { validationResult } = require('express-validator');
const geminiClient = require('../utils/geminiClient');
const ChatHistory = require('../models/chatHistory');

exports.postChat = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { message, userId } = req.body;
  try {
    // Call Gemini API via helper
    const reply = await geminiClient.getReply(message);

    // Save to DB for persistence (if DB configured)
    try {
      await ChatHistory.create({ user: userId || null, message, reply });
    } catch (e) {
      console.warn('Failed to save chat history:', e.message);
    }

    return res.json({ reply });
  } catch (err) {
    console.error('Chat error:', err.message);
    return res.status(500).json({ error: 'Server error' });
  }
};
