const router = require("express").Router();
const { Post } = require('../../models');

// const foodExchangeController = require("../../controller/foodExchangeController.js");
// router
// .route("/")
// .get(foodExchangeController.findAll)
// .post(foodExchangeController.create);

//Retrieve information of all posts
router.get('/', (req, res) => {
   Post.find({})
   .then(post => {
     res.json(post);
   })
   .catch(err => {
     res.status(404).json(err.message);
   })
})

//Make a new post
router.post('/', (req, res) => {
    Post.create(req.body)
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(404).json(err.message);
    })
 })

//Delete post by id
router.delete('/:id', (req, res) => {
    Post.remove({_id: req.params.id},
        function(err, result) {
            if (err) {
                res.send(err.message);
            } else {
                res.json(result);
            }
        }
    )
})

module.exports = router;