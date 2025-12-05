// Controller for chat endpoints
const { validationResult } = require('express-validator');
const geminiClient = require('../utils/geminiClient');

exports.postChat = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message, userId } = req.body;
    console.log('Received chat message:', message);
    
    // Call AI API
    const reply = await geminiClient.getReply(message);
    
    console.log('Got reply from AI:', reply);

    return res.json({ reply });
  } catch (err) {
    console.error('Chat error details:', err);
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
};
