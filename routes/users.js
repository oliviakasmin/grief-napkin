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

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// this will either update an existing or upsert a new
// req.body = (filter obj, update obj)
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.findOneAndUpdate(req.body, {
      new: true,
      upsert: true,
    })
    res.json(newUser)
  } catch (err) {
    next(err)
  }
})
