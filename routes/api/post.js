const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController.js");
const Post = require("../../controller/foodExchangeController.js");

router
.route("/")
.get(foodExchangeController.findAll)
.post(foodExchangeController.create);

module.exports = router;