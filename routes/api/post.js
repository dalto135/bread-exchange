const router = require("express").Router();
// const Post = require("../../controller/foodExchangeController.js")
const { Post } = require('../../models') 

router.get('/', (req, res) => {
    Post.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(404).json(err.message);
    })
})

module.exports = router;