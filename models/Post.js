const { Schema, model, SchemaTypes, models } = require('mongoose');
const CommentSchema = require('./Comment'); 

const PostSchema = new Schema({
  title: { type: String, required: true},
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [CommentSchema], 
  tags: [{ type: SchemaTypes.ObjectId, ref: 'Tag' }],
  slug: { type: String }
});

PostSchema.pre('save', async function(next) {
  this.slug = this.title
    .split(' ')
    .slice(0, 5)
    .join('-')
    .toLowerCase()
    .replace(/[',.*\?\!\\\$@;:"]/, "");
  next();
});

module.exports = models.Post || model('Post', PostSchema);