const router = require('express').Router()
module.exports = router
// const userController = require('../controllers/userController')

router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
