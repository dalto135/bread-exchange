const foodDatabase = require("../models");

module.exports={
    findAll: function(req, res){
        foodDatabase.Post.find(req.query)
        .sort({postDate: -1})
        .then(dbModel => res.json (dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
       foodDatabase.Post.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
      //find by user Id
    findById: function(req, res) {
        foodDatabase.Post
        .findById({_id: req.params._id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        foodDatabase.Post
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        foodDatabase.Post
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

      //Users
      getUsers: function(req, res) {
          foodDatabase.User
            .find({})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err.message))
      },
      getSingleUser: function(req, res) {
          foodDatabase.User
            .findOne({ username: req.body.username })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err.message))
      },
      createUserAccount: function(req, res) {
          foodDatabase.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err.message))
      }
    
};