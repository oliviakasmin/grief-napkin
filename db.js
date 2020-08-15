const mongoose = require('mongoose')
const URI = require('./config/index')
const {User} = require('./models')

mongoose.connect(process.env.MONGODB_URI || URI)

mongoose
  .connect(process.env.MONGODB_URI || URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error))

mongoose.connection.on('error', (err) => {
  console.error(
    `something is not working with the mongoose db connection :( ${err.message})`
  )
})

// mongoose.connection.on('connected', function () {
//   console.log('Mongoose connected to ' + URI)
//   if (process.env.NODE_ENV != 'production') {
//     const seeder = require('mongoose-seeder')
//     const data = require('./initdata.json')
//     seeder
//       .seed(data, {dropDatabase: false, dropCollections: true})
//       .then((dbData) => {
//         console.log('preloading Test Data')
//         console.log(dbData)
//       })
//       .catch((err) => {
//         console.log(error)
//       })
//   }
// })

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is running boo ya')
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected')
})
