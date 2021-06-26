const router = require("express").Router();

const foodExchangeController = require("../../controller/foodExchangeController.js");
const Post = require("../../controller/foodExchangeController.js");

router
.route("/")
.get(foodExchangeController.findAll)
.post(foodExchangeController.create);

// const Post = require("../../controller/foodExchangeController.js")
//const { Post } = require('../../models') 

//router.get('/', (req, res) => {
//    Post.find({})
//    .then(dbBook => {
//      res.json(dbBook);
//    })
//    .catch(err => {
///      res.status(404).json(err.message);
//    })
//})


module.exports = router;