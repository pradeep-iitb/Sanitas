// Feedback model to capture user feedback on responses
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatHistory', default: null },
  rating: { type: Number, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
