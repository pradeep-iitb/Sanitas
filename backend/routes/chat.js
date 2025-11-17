// Chat route: handles POST /api/chat
const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Simple validation: ensure message is present and is a string
router.post(
  '/',
  [body('message').isString().notEmpty().withMessage('message is required')],
  chatController.postChat
);

module.exports = router;
