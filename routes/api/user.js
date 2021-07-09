const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController");
// const userPage = require("../../controller/foodExchangeController");

router.route('/')
.get(foodExchangeController.getUsers)
.post(foodExchangeController.createUserAccount)
.put(foodExchangeController.updateUser);

router.route('/login')
.post(foodExchangeController.loginUser);

router.route('/info')
.get(foodExchangeController.userInfo);

// router.route('/:id')
// .get(foodExchangeController.getUserById);

router.route('/logout')
.post(foodExchangeController.logoutUser);

router.route('/byid')
.post(foodExchangeController.getUserById);



module.exports = router;