const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resource = new Schema({
  name: { type: String, required: true, unique: true },
  format: {
    type: String,
    emum: [
      'support groups',
      'articles',
      'books',
      'get a therapise or psychiatris',
      'podcasts',
      'other',
    ],
    default: 'other',
  },
  // connection: , links to connection in User.lost model, { type: String, required: true }
  // reason: , links to reason in User.lost model { type: String, required: true }
});

const Resource = mongoose.model('Resource', resource);

module.exports = Resource;
