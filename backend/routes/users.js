// Basic user routes (simplified for serverless)
const express = require('express');
const router = express.Router();

// Placeholder routes - DB disabled on serverless
router.post('/', async (req, res) => {
  res.status(200).json({ message: 'User creation disabled on serverless' });
});

router.get('/:id', async (req, res) => {
  res.status(200).json({ message: 'User retrieval disabled on serverless' });
});

router.get('/:id/chats', async (req, res) => {
  res.status(200).json({ chats: [] });
});

module.exports = router;
    if (!user) return res.status(404).json({ error: 'User not found' });
    const chats = await ChatHistory.find({ user: user._id }).sort({ createdAt: -1 }).limit(50);
    res.json({ user, chats });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
