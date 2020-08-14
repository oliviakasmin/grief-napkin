const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  usage: {
    type: String,
    enum: ['the loss is mine', 'I am here to support (and also grieve)'],
  },
  first: { type: String, required: true, lowercase: true },
  last: { type: String, required: true, lowercase: true },
  email: { type: String, required: true, unique: true },
  lost: {
    connection: {
      type: String,
      enum: [
        'parner',
        'friend',
        'parent',
        'grandparent',
        'sibling',
        'twin',
        'someone I loved',
        'acquantaince',
        'skip',
      ],
    },
    name: { type: String, lowercase: true },
    reason: {
      type: String,
      enum: [
        'cancer',
        'teminal illness (not cancer)',
        'accident',
        'overdose',
        'unexpected freak problem',
        'murder',
        'suicide',
        'a different shitty reason',
        'skip',
      ],
    },
  },
  friends: {
    type: String,
    closeness: { type: String, enum: ['core crew', 'larger circle'] },
  }, // userId

  // activities: activity Id
  // notes: notesId
  // resources: resourceId
  dates: {},
});

// dates
const datesArr = ['"deathiversary"', 'birthday', 'special occasion', 'other'];
const datesObj = {
  '"deathiversary"': 'enter date',
  birthday: 'enter date',
  'special occasion': 'enter date',
  other: 'enter date',
};

const User = mongoose.model('User', user);

const olivia = new User({
  first: 'Olivia',
  last: 'Kasmin',
  email: 'oliviakasmin@gmail.com',
});

console.log(olivia);

module.exports = { User };
