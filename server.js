const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const compression = require('compression')
const db = require('./db.js')
const routes = require('./routes')
const PORT = process.env.PORT || 3000
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// compression middleware
app.use(compression())

// api routes
app.use('/api', require('./routes'))

// static file-serving middleware
app.use(express.static(path.join(__dirname, './public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
}) // Send index.html for any other requests

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`)
})
