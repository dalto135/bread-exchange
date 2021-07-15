const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController");

router.route('/')
.get(foodExchangeController.getAllReservations)
.post(foodExchangeController.getPostReservations)
.delete(foodExchangeController.deleteReservation);

router.route('/userreservations')
.post(foodExchangeController.getUserReservations);

router.route('/createnew')
.post(foodExchangeController.createReservation);

router.route('/:id')
.get(foodExchangeController.getReservationByID);

router.route('/update/:id')
.put(foodExchangeController.updateReservation);


module.exports = router;