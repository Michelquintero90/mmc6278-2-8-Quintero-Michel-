const { Schema, model, models } = require('mongoose');

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true }
});

module.exports = models.Tag || model('Tag', TagSchema);
