const Activity = require('../models/Activity');

// Defining all methods and business logic for routes

module.exports = {
  findAll: function (req, res) {
    Activity.find(req.query)
      .then((activities) => res.json(activities))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    Activity.findById(req.params.id)
      .then((activity) => res.json(activity))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    Activity.create(req.body)
      .then((newActivity) => res.json(newActivity))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    Activity.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((activity) => res.json(activity))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    Activity.findById({ _id: req.params.id })
      .then((activity) => activity.remove())
      .then((allActivities) => res.json(allActivities))
      .catch((err) => res.status(422).json(err));
  },
};