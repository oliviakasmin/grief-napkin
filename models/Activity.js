const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activity = new Schema({
  name: { type: String, required: true },
  location: String,
  company: String,
  comments: [{ body: String, date: Date }],
});

const Activity = mongoose.model('Activity', activity);

module.exports = Activity;
