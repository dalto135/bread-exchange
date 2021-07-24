const router = require("express").Router();
const { Post } = require('../../models');

const foodExchangeController = require("../../controller/foodExchangeController.js");

router.route("/")
.get(foodExchangeController.findAll)
.post(foodExchangeController.create)
.put(foodExchangeController.update);

router.route('/post_id')
.post(foodExchangeController.findPostById);

router.route('/:id')
.delete(foodExchangeController.remove)
.get(foodExchangeController.findById);


// router.route("/:id")
// .get(foodExchangeController.findById)

router.route('/userid')
.post(foodExchangeController.findByUserID);

module.exports = router;