const router = require('express').Router();
const activityRoutes = require('./activities');

router.use('/api/activities', activityRoutes);

module.exports = router;
