if (process.env.NODE_ENV !== 'production') require('../secrets')
// const { mongoDbUsername, mongoDbPassword } = require('../secrets');

const mongoDbUsername = process.env.MONGO_DB_USERNAME
const mongoDbPassword = process.env.MONGO_DB_PASSWORD

const MONGODB_URI = `mongodb+srv://${mongoDbUsername}:${mongoDbPassword}@cluster0.ts2fv.mongodb.net/test?retryWrites=true&w=majority`

module.exports = MONGODB_URI
