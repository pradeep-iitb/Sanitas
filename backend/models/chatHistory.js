// ChatHistory model stores messages and bot replies
const mongoose = require('mongoose');

const ChatHistorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  message: { type: String, required: true },
  reply: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ChatHistory', ChatHistorySchema);
