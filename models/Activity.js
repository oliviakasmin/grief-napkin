const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activity = new Schema({
  name: { type: String, required: true, unique: true }, // this might be a sub-document
  location: {
    type: String,
    emum: ['home', 'not at home', 'flex'],
    default: 'flex',
  },
  company: {
    type: String,
    enum: ['solo', 'with somebody', 'flex'],
    default: 'flex',
  },
});

const Activity = mongoose.model('Activity', activity);

module.exports = Activity;
