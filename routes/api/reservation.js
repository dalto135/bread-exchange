const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController");

router.route('/')
.get(foodExchangeController.getAllReservations)
.post(foodExchangeController.getPostReservations)

router.route('/postres/:id')
.delete(foodExchangeController.deletePostReservations);

router.route('/userreservations')
.post(foodExchangeController.getUserReservations);

router.route('/createnew')
.post(foodExchangeController.createReservation);

router.route('/:id')
.get(foodExchangeController.getReservationByID)
.delete(foodExchangeController.deleteReservation);

router.route('/update/:id')
.put(foodExchangeController.updateReservation);


module.exports = router;