const mongoose = require('mongoose');
const URI = require('../config/index');

mongoose.connect(process.env.MONGODB_URI || URI);

mongoose
  .connect(process.env.MONGODB_URI || URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error));

mongoose.connection.on('error', (err) => {
  console.error(
    `something is not working with the mongoose db connection :( ${err.message})`
  );
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is running boo ya');
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected');
});
