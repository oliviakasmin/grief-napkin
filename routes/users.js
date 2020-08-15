const router = require('express').Router()
const {User} = require('../models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({})
    console.log('all my users', users)
    res.json(users)
  } catch (err) {
    next(err)
  }
})
