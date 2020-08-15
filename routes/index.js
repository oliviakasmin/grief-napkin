const router = require('express').Router()
const activityRoutes = require('./activities')
const path = require('path')

router.use('/api/activities', activityRoutes)

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = router
