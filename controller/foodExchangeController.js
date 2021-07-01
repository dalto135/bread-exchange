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

    //findById:
    //update:
    //remove:  
    
};