const router = require("express").Router();
const { Post } = require('../../models');

const foodExchangeController = require("../../controller/foodExchangeController.js");

router.route("/")
.get(foodExchangeController.findAll)
.post(foodExchangeController.create);

router.route("/:id")
.get(foodExchangeController.findById)

module.exports = router;