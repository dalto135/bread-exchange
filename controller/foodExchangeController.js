const foodDatabase = require("../models");

module.exports={
    findAll: function(req, res){
        foodDatabase.Bread
        .find(req.query)
        .sort({postDate: -1})
        .then(dbModel => res.json (dbModel))
        .catch(err => res.status(422,json(err)));
    },
};