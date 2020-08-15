const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
  usage: {
    type: String,
    enum: ['the loss is mine', 'I am here to support (and also grieve)'],
  },
  first: {type: String, required: true, lowercase: true},
  last: {type: String, required: true, lowercase: true},
  email: {type: String, required: true, unique: true},
  lost: {
    name: {type: String, lowercase: true},
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
    email: {type: String, required: true},
    closeness: {type: String, enum: ['core crew', 'larger circle']},
  },

  // activities: activity Id
  // notes: notesId
  // resources: resourceId
  dates: {
    deathiversary: {type: Date},
    birthday: {type: Date},
    specialOccasion: {
      description: {type: String},
      date: {type: Date},
    },
    other: {
      description: {type: String},
      date: {type: Date},
    },
  },
  journal: {},
  created: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', user)

module.exports = User
