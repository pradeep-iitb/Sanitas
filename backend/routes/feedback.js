// Feedback routes for collecting user ratings and comments
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Feedback = require('../models/feedback');

// Submit feedback
router.post(
  '/',
  [
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
    body('comment').optional().isString(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const feedback = await Feedback.create(req.body);
      res.status(201).json(feedback);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Get all feedback (admin endpoint)
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 }).limit(100);
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
