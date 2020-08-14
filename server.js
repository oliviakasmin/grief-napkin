const path = require('path')
const express = require('express')
const app = express()

const routes = require('./routes')

const PORT = process.env.PORT || 3000

// require db connection
require('./models')

// configure body parser for AJAX requests
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// static middleware
app.use(express.static(path.join(__dirname, './public')))

app.use('/api', require('./routes'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
