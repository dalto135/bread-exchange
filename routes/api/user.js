const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController");
// const userPage = require("../../controller/foodExchangeController");

router.route('/')
.get(foodExchangeController.getUsers)
.post(foodExchangeController.createUserAccount);

router.route('/login')
.post(foodExchangeController.loginUser);

router.route('/:id')
.post(foodExchangeController.getUserById);

module.exports = router;