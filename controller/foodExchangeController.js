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
      loginUser: async function(req, res) {
        try {
            const userData = await foodDatabase.User.findOne({ where: { username: req.body.username } });
        
            if (!userData) {
              res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });

                console.log('!userData');
              return;
            }
        
            const validPassword = await userData.checkPassword(req.body.password);
        
            if (!validPassword) {
              res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
                console.log('!validPassword');
              return;
            }
        
            req.session.save(() => {
              req.session.user_id = userData._id;
              req.session.logged_in = true;
              
              res.json({ user: userData, message: 'You are now logged in!' });
            });
        
          } catch (err) {
              console.log('err.message');
              console.log(err.message);
            res.status(400).json(err.message);
          }
      },
      createUserAccount: function(req, res) {
          foodDatabase.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err.message))
      },
      getUserById: function (req, res) {
          foodDatabase.User
            .findOne({ _id: req.body.user_id })
            // .find({username: 'jack123'})
            .then(dbUser => {res.json(dbUser);
                console.log(req.body)
                console.log(req.params)})
            .catch(err => {res.status(422).json(err.message);
                console.log('err.message');
                console.log(err.message);})
      },
      //Reservations
      getPostReservations: function(req, res) {
          foodDatabase.Reservation
          .find({ post_id: req.body._id })
          .then(dbReservation => {res.json(dbReservation)})
          .catch(err => {res.status(422).json(err.message)})
      },

      createReservation: function(req, res) {
          foodDatabase.Reservation.create(req.body)
          .then(dbReservation => res.json(dbReservation))
          .catch(err => res.status(422).json(err));
      }
    
};