const mongoose = require('mongoose'); 
const { Schema } = mongoose;

const CommentSchema = new Schema({
  author: { type: String, default: 'Anonymous' },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = CommentSchema; 