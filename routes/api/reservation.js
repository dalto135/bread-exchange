const router = require("express").Router();
const foodExchangeController = require("../../controller/foodExchangeController");

router.route('/')
.get(foodExchangeController.getAllReservations)
.post(foodExchangeController.getPostReservations)



router.route('/createnew')
.post(foodExchangeController.createReservation);

router.route('/:id')
.delete(foodExchangeController.deleteReservation)
.get(foodExchangeController.getReservationByID);

router.route('/update/:id')
.put(foodExchangeController.updateReservation);


module.exports = router;