const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController");

router.route('/')
.post(foodExchangeController.getPostReservations)
.delete(foodExchangeController.deleteReservation);

router.route('/createnew')
.post(foodExchangeController.createReservation)

module.exports = router;