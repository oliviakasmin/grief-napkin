const router = require('express').Router()
const {User} = require('../models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:username', async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.params.username})
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
