const { mongoDbUsername, mongoDbPassword } = require('../secrets');

const MONGODB_URI = `mongodb+srv://${mongoDbUsername}:${mongoDbPassword}@cluster0.ts2fv.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;
