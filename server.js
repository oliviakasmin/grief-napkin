const express = require('express');
const app = express();

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

// require db connection
require('./models');

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/welcome', (req, res) => {
  res.send('We are sorry you are here, but hope we can help');
});
app.use(routes);

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
