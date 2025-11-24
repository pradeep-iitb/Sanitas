// Feedback routes (simplified for serverless)
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

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

    // Just acknowledge - DB disabled on serverless
    console.log('Feedback received:', req.body);
    res.status(201).json({ message: 'Feedback received', success: true });
  }
);

router.get('/', async (req, res) => {
  res.status(200).json({ feedbacks: [] });
});

module.exports = router;
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
